'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { Download, Trash2, Upload, CheckCircle, AlertCircle, ArrowLeft, RefreshCw } from 'lucide-react'

interface EntryStatus {
  id: string
  sundayName: string
  gospelRef: string
  date: string
  cycle: string
  sundaySlug: string
  curatedUrl: string | null
}

export default function AdminCommentaryPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [entries, setEntries] = useState<EntryStatus[]>([])
  const [loading, setLoading] = useState(true)
  const [busy, setBusy] = useState<Record<string, boolean>>({})
  const [message, setMessage] = useState<{ id: string; text: string; ok: boolean } | null>(null)
  const fileInputRefs = useRef<Record<string, HTMLInputElement | null>>({})

  useEffect(() => {
    if (status === 'loading') return
    if (!session || (session.user as { role?: string }).role !== 'ADMIN') {
      router.push('/auth/signin')
    }
  }, [session, status, router])

  useEffect(() => {
    fetchStatuses()
  }, [])

  async function fetchStatuses() {
    setLoading(true)
    const res = await fetch('/api/commentary/ppt-status')
    if (res.ok) setEntries(await res.json())
    setLoading(false)
  }

  function flash(id: string, text: string, ok: boolean) {
    setMessage({ id, text, ok })
    setTimeout(() => setMessage(null), 3500)
  }

  async function handleUpload(id: string, file: File) {
    setBusy(b => ({ ...b, [id]: true }))
    const form = new FormData()
    form.append('file', file)
    const res = await fetch(`/api/commentary/ppt/${id}`, { method: 'POST', body: form })
    if (res.ok) {
      flash(id, 'Curated PPT uploaded successfully', true)
      await fetchStatuses()
    } else {
      const err = await res.json()
      flash(id, err.error ?? 'Upload failed', false)
    }
    setBusy(b => ({ ...b, [id]: false }))
  }

  async function handleDelete(id: string) {
    if (!confirm('Remove curated PPT? Downloads will fall back to auto-generated.')) return
    setBusy(b => ({ ...b, [id]: true }))
    const res = await fetch(`/api/commentary/ppt/${id}`, { method: 'DELETE' })
    if (res.ok) {
      flash(id, 'Curated PPT removed — auto-generated fallback active', true)
      await fetchStatuses()
    } else {
      flash(id, 'Delete failed', false)
    }
    setBusy(b => ({ ...b, [id]: false }))
  }

  async function handleDownload(entry: EntryStatus) {
    const a = document.createElement('a')
    a.href = `/api/commentary/ppt/${entry.id}`
    a.download = `${entry.id}-${entry.sundaySlug}.pptx`
    a.click()
  }

  if (status === 'loading' || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-amber-600" />
      </div>
    )
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <Link href="/admin" className="flex items-center gap-1 text-sm text-amber-600 hover:text-amber-800 mb-2">
            <ArrowLeft className="w-4 h-4" /> Back to Admin
          </Link>
          <h1 className="text-2xl font-serif font-bold text-gray-900">Commentary PPT Manager</h1>
          <p className="text-sm text-gray-500 mt-1">
            Upload a curated .pptx per Sunday. If none is uploaded, the download button auto-generates one.
          </p>
        </div>
        <button onClick={fetchStatuses} className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-700">
          <RefreshCw className="w-4 h-4" /> Refresh
        </button>
      </div>

      <div className="space-y-3">
        {entries.map(entry => {
          const isBusy = !!busy[entry.id]
          const msg = message?.id === entry.id ? message : null

          return (
            <div
              key={entry.id}
              className="bg-white rounded-xl border border-gray-200 p-4 flex flex-col sm:flex-row sm:items-center gap-4"
            >
              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full">
                    Year {entry.cycle}
                  </span>
                  <span className="text-xs text-gray-400">{entry.date}</span>
                  {entry.curatedUrl ? (
                    <span className="flex items-center gap-1 text-xs font-semibold text-green-700 bg-green-50 px-2 py-0.5 rounded-full">
                      <CheckCircle className="w-3 h-3" /> Curated PPT
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
                      <AlertCircle className="w-3 h-3" /> Auto-generated
                    </span>
                  )}
                </div>
                <p className="font-semibold text-gray-900 text-sm mt-1 truncate">{entry.sundayName}</p>
                <p className="text-xs text-gray-500">{entry.gospelRef}</p>
                {msg && (
                  <p className={`text-xs mt-1 font-medium ${msg.ok ? 'text-green-600' : 'text-red-600'}`}>
                    {msg.text}
                  </p>
                )}
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2 shrink-0 flex-wrap">
                {/* Download (serves curated if available, else auto) */}
                <button
                  onClick={() => handleDownload(entry)}
                  disabled={isBusy}
                  title="Download PPT (curated if available)"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors disabled:opacity-50"
                >
                  <Download className="w-3.5 h-3.5" /> Download
                </button>

                {/* Upload curated */}
                <label
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium cursor-pointer transition-colors ${
                    isBusy
                      ? 'bg-indigo-50 text-indigo-400 opacity-50 cursor-not-allowed'
                      : 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200'
                  }`}
                  title="Upload curated .pptx"
                >
                  <Upload className="w-3.5 h-3.5" />
                  {isBusy ? 'Uploading…' : entry.curatedUrl ? 'Replace PPT' : 'Upload PPT'}
                  <input
                    type="file"
                    accept=".pptx"
                    className="hidden"
                    disabled={isBusy}
                    ref={el => { fileInputRefs.current[entry.id] = el }}
                    onChange={e => {
                      const file = e.target.files?.[0]
                      if (file) handleUpload(entry.id, file)
                      e.target.value = ''
                    }}
                  />
                </label>

                {/* Delete curated */}
                {entry.curatedUrl && (
                  <button
                    onClick={() => handleDelete(entry.id)}
                    disabled={isBusy}
                    title="Remove curated PPT (revert to auto-generated)"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium bg-red-50 text-red-600 hover:bg-red-100 transition-colors disabled:opacity-50"
                  >
                    <Trash2 className="w-3.5 h-3.5" /> Remove
                  </button>
                )}
              </div>
            </div>
          )
        })}

        {entries.length === 0 && !loading && (
          <div className="text-center py-12 text-gray-400">No commentary entries found.</div>
        )}
      </div>
    </div>
  )
}
