'use client'

import { useState, forwardRef, useImperativeHandle, useEffect } from 'react'
import CommentItem from './CommentItem'

interface Comment {
  id: string
  content: string
  createdAt: Date
  author: {
    id: string
    name: string | null
    email: string
  } | null
  guestName: string | null
}

interface CommentsSectionProps {
  comments: Comment[]
  isAdmin: boolean
  currentUserId?: string
}

export interface CommentsSectionRef {
  addComment: (newComment: Comment) => void
}

const CommentsSection = forwardRef<CommentsSectionRef, CommentsSectionProps>(({ comments, isAdmin, currentUserId }, ref) => {
  const [commentsList, setCommentsList] = useState(comments)

  // Sync comments list when initial comments change
  useEffect(() => {
    setCommentsList(comments)
  }, [comments])

  const handleDelete = (commentId: string) => {
    setCommentsList(prev => prev.filter(comment => comment.id !== commentId))
  }

  const handleUpdate = (commentId: string, newContent: string) => {
    setCommentsList(prev => 
      prev.map(comment => 
        comment.id === commentId 
          ? { ...comment, content: newContent }
          : comment
      )
    )
  }

  const addComment = (newComment: Comment) => {
    setCommentsList(prev => [...prev, newComment])
  }

  useImperativeHandle(ref, () => ({
    addComment
  }))

  return (
    <div className="space-y-6">
      {commentsList.length === 0 ? (
        <div className="text-center py-8 text-gray-600">
          <p>No comments yet. Be the first to share your thoughts!</p>
        </div>
      ) : (
        commentsList.map((comment) => (
          <CommentItem
            key={comment.id}
            comment={comment}
            isAdmin={isAdmin}
            isAuthor={currentUserId && comment.author ? comment.author.id === currentUserId : false}
            onDelete={handleDelete}
            onUpdate={handleUpdate}
          />
        ))
      )}
    </div>
  )
})

CommentsSection.displayName = 'CommentsSection'

export default CommentsSection
