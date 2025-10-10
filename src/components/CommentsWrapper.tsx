'use client'

import { useRef } from 'react'
import CommentsSection, { CommentsSectionRef } from './CommentsSection'
import CommentForm from '../app/posts/[slug]/CommentForm'

interface Comment {
  id: string
  content: string
  createdAt: Date
  author: {
    id: string
    name: string | null
    email: string
  } | null
  guestName?: string | null
  guestEmail?: string | null
}

interface CommentsWrapperProps {
  comments: Comment[]
  isAdmin: boolean
  currentUserId?: string
  postId: string
}

export default function CommentsWrapper({ comments, isAdmin, currentUserId, postId }: CommentsWrapperProps) {
  const commentsRef = useRef<CommentsSectionRef>(null)

  const handleCommentSubmitted = async () => {
    // Fetch the latest comments from the API
    try {
      const response = await fetch(`/api/posts/${postId}/comments`)
      if (response.ok) {
        const latestComments = await response.json()
        // Get the last comment (most recent)
        const newComment = latestComments[latestComments.length - 1]
        if (newComment && commentsRef.current) {
          // Convert date strings to Date objects
          const commentWithDate = {
            ...newComment,
            createdAt: new Date(newComment.createdAt)
          }
          commentsRef.current.addComment(commentWithDate)
        }
      }
    } catch (error) {
      console.error('Error fetching latest comments:', error)
    }
  }

  return (
    <>
      <CommentsSection
        ref={commentsRef}
        comments={comments}
        isAdmin={isAdmin}
        currentUserId={currentUserId}
      />

      {/* Comment Form (visible to all users) */}
      <CommentForm postId={postId} onSubmitted={handleCommentSubmitted} />
    </>
  )
}
