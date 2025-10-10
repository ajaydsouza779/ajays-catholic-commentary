'use client'

import { useState } from 'react'
import CommentItem from './CommentItem'

interface Comment {
  id: string
  content: string
  createdAt: Date
  author: {
    name: string | null
    email: string
  }
}

interface CommentsSectionProps {
  comments: Comment[]
  isAdmin: boolean
  currentUserId?: string
}

export default function CommentsSection({ comments, isAdmin, currentUserId }: CommentsSectionProps) {
  const [commentsList, setCommentsList] = useState(comments)

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

  return (
    <div className="space-y-6">
      {commentsList.map((comment) => (
        <CommentItem
          key={comment.id}
          comment={comment}
          isAdmin={isAdmin}
          isAuthor={currentUserId ? comment.author.email === currentUserId : false}
          onDelete={handleDelete}
          onUpdate={handleUpdate}
        />
      ))}
    </div>
  )
}
