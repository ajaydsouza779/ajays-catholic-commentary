"use client"

import { useSession } from "next-auth/react"
import { useState } from "react"

export default function CommentForm({ postId, onSubmitted }: { postId: string, onSubmitted?: () => void }) {
  const { data: session } = useSession()
  const [content, setContent] = useState("")
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  if (!session?.user?.id) {
    return null
  }

  const submit = async () => {
    if (!content.trim()) return
    try {
      setSubmitting(true)
      setError(null)
      const res = await fetch(`/api/posts/${postId}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content })
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error || "Failed to submit comment")
      }
      setContent("")
      onSubmitted?.()
    } catch (e: any) {
      setError(e.message || "Failed to submit comment")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="mt-8 p-6 bg-neutral-50 rounded-lg">
      <h3 className="text-lg font-serif" style={{ color: '#1E3A8A' }}>Leave a Comment</h3>
      {error && <p className="text-red-600 mt-2">{error}</p>}
      <textarea
        className="mt-4 w-full rounded-md border p-3 text-neutral-800"
        rows={4}
        placeholder="Write your comment..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button
        onClick={submit}
        disabled={submitting || !content.trim()}
        className="mt-3 inline-flex items-center px-4 py-2 rounded-md font-medium"
        style={{ backgroundColor: '#1E3A8A', color: 'white', opacity: submitting || !content.trim() ? 0.6 : 1 }}
      >
        {submitting ? 'Posting...' : 'Post Comment'}
      </button>
    </div>
  )
}


