'use client'

import { useState } from 'react'
import { Trash2, Edit2, Check, X } from 'lucide-react'
import { formatDate } from '@/lib/utils'

interface CommentItemProps {
  comment: {
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
  isAdmin: boolean
  isAuthor: boolean
  onDelete?: (commentId: string) => void
  onUpdate?: (commentId: string, content: string) => void
}

export default function CommentItem({ comment, isAdmin, isAuthor, onDelete, onUpdate }: CommentItemProps) {
  const [isDeleting, setIsDeleting] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [editContent, setEditContent] = useState(comment.content)
  const [isUpdating, setIsUpdating] = useState(false)

  const handleDelete = async () => {
    if (!onDelete) return

    setIsDeleting(true)
    try {
      const response = await fetch(`/api/comments/${comment.id}`, {
        method: 'DELETE',
      })

      if (response.ok) {
        onDelete(comment.id)
      } else {
        const error = await response.json()
        alert(`Error deleting comment: ${error.error}`)
      }
    } catch (error) {
      console.error('Error deleting comment:', error)
      alert('Error deleting comment. Please try again.')
    } finally {
      setIsDeleting(false)
      setShowConfirm(false)
    }
  }

  const handleEdit = () => {
    setIsEditing(true)
    setEditContent(comment.content)
  }

  const handleSave = async () => {
    if (!onUpdate || !editContent.trim()) return

    setIsUpdating(true)
    try {
      const response = await fetch(`/api/comments/${comment.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: editContent.trim() }),
      })

      if (response.ok) {
        onUpdate(comment.id, editContent.trim())
        setIsEditing(false)
      } else {
        const error = await response.json()
        alert(`Error updating comment: ${error.error}`)
      }
    } catch (error) {
      console.error('Error updating comment:', error)
      alert('Error updating comment. Please try again.')
    } finally {
      setIsUpdating(false)
    }
  }

  const handleCancel = () => {
    setIsEditing(false)
    setEditContent(comment.content)
  }

  return (
    <div className="border-b border-gray-200 pb-6 last:border-b-0">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
            <span className="text-amber-800 font-bold text-sm">
              {comment.author 
                ? (comment.author.name || comment.author.email).charAt(0).toUpperCase()
                : (comment.guestName || 'G').charAt(0).toUpperCase()
              }
            </span>
          </div>
          <div>
            <div className="font-medium text-gray-900">
              {comment.author 
                ? (comment.author.name || comment.author.email)
                : comment.guestName
              }
            </div>
            <time className="text-sm text-gray-500">
              {formatDate(comment.createdAt)}
            </time>
          </div>
        </div>
        
        {(isAdmin || isAuthor) && (
          <div className="flex items-center space-x-2">
            {showConfirm ? (
              <div className="flex items-center space-x-2">
                <button
                  onClick={handleDelete}
                  disabled={isDeleting}
                  className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700 disabled:opacity-50"
                >
                  {isDeleting ? 'Deleting...' : 'Confirm'}
                </button>
                <button
                  onClick={() => setShowConfirm(false)}
                  className="bg-gray-300 text-gray-700 px-3 py-1 rounded text-sm hover:bg-gray-400"
                >
                  Cancel
                </button>
              </div>
            ) : isEditing ? (
              <div className="flex items-center space-x-2">
                <button
                  onClick={handleSave}
                  disabled={isUpdating || !editContent.trim()}
                  className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700 disabled:opacity-50"
                >
                  {isUpdating ? 'Saving...' : 'Save'}
                </button>
                <button
                  onClick={handleCancel}
                  className="bg-gray-300 text-gray-700 px-3 py-1 rounded text-sm hover:bg-gray-400"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-1">
                {isAuthor && (
                  <button
                    onClick={handleEdit}
                    className="text-blue-600 hover:text-blue-700 p-1 rounded hover:bg-blue-50"
                    title="Edit comment"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                )}
                <button
                  onClick={() => setShowConfirm(true)}
                  className="text-red-600 hover:text-red-700 p-1 rounded hover:bg-red-50"
                  title="Delete comment"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        )}
      </div>
      
      {isEditing ? (
        <div className="space-y-3">
          <textarea
            value={editContent}
            onChange={(e) => setEditContent(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
            rows={3}
            placeholder="Edit your comment..."
          />
        </div>
      ) : (
        <div className="text-gray-700">
          {comment.content}
        </div>
      )}
    </div>
  )
}
