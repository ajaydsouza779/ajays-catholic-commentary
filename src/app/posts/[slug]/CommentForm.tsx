"use client"

import { useSession } from "next-auth/react"
import { useState } from "react"

export default function CommentForm({ postId, onSubmitted }: { postId: string, onSubmitted?: () => void }) {
  const { data: session } = useSession()
  const [content, setContent] = useState("")
  const [guestName, setGuestName] = useState("")
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const isLoggedIn = session?.user && (session.user as { id?: string }).id

  const submit = async () => {
    if (!content.trim()) return
    
    // For guest users, require a name
    if (!isLoggedIn && !guestName.trim()) {
      setError("Please enter your name to post a comment")
      return
    }
    
    try {
      setSubmitting(true)
      setError(null)
      
      const requestBody = isLoggedIn 
        ? { content }
        : { content, guestName: guestName.trim() }
      
      const res = await fetch(`/api/posts/${postId}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody)
      })
      
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error || "Failed to submit comment")
      }
      
      setContent("")
      setGuestName("")
      onSubmitted?.()
    } catch (e: unknown) {
      setError((e as Error).message || "Failed to submit comment")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="mt-8 p-6 bg-gray-50 rounded-lg">
      <h3 className="text-lg font-serif text-gray-900 mb-4">Leave a Comment</h3>
      {error && <p className="text-red-600 mb-4">{error}</p>}
      
      <div className="mb-4">
        <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-2">
          Comment *
        </label>
        <textarea
          id="comment"
          className="w-full rounded-md border border-gray-300 p-3 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          rows={4}
          placeholder="Write your comment..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </div>
      
      {!isLoggedIn && (
        <div className="mb-4 flex justify-end">
          <div className="w-1/2">
            <label htmlFor="guestName" className="block text-sm font-medium text-gray-700 mb-2">
              Your Name *
            </label>
            <input
              id="guestName"
              type="text"
              value={guestName}
              onChange={(e) => setGuestName(e.target.value)}
              placeholder="Enter your name"
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
        </div>
      )}
      
      <button
        onClick={submit}
        disabled={submitting || !content.trim() || (!isLoggedIn && !guestName.trim())}
        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {submitting ? 'Posting...' : 'Post Comment'}
      </button>
      
      {!isLoggedIn && (
        <p className="text-sm text-gray-600 mt-3">
          💡 <strong>Tip:</strong> You can also <a href="/auth/signin" className="text-blue-600 hover:underline">sign in</a> to manage your comments later.
        </p>
      )}
    </div>
  )
}