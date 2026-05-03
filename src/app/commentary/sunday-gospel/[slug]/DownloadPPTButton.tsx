'use client'

import { useState } from 'react'
import { Download } from 'lucide-react'

interface Props {
  entryId: string
  fileName: string
  layout?: 'horizontal' | 'vertical'
}

export default function DownloadPPTButton({ entryId, fileName, layout = 'horizontal' }: Props) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'done'>('idle')

  const handleDownload = async () => {
    if (status === 'loading') return
    setStatus('loading')
    try {
      const res = await fetch(`/api/commentary/ppt/${entryId}`)
      if (!res.ok) throw new Error('Generation failed')
      const blob = await res.blob()
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = fileName
      a.click()
      URL.revokeObjectURL(url)
      setStatus('done')
      setTimeout(() => setStatus('idle'), 2500)
    } catch {
      setStatus('idle')
    }
  }

  if (layout === 'vertical') {
    return (
      <button
        onClick={handleDownload}
        disabled={status === 'loading'}
        title="Download as PowerPoint"
        className="flex flex-col items-center gap-1 group"
      >
        <span className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-700 hover:bg-indigo-600 hover:text-white transition-colors shadow-sm disabled:opacity-60">
          <Download className="w-4 h-4" />
        </span>
        <span className="text-[10px] text-gray-500 group-hover:text-gray-700">
          {status === 'loading' ? '…' : status === 'done' ? 'Ready!' : 'PPT'}
        </span>
      </button>
    )
  }

  return (
    <button
      onClick={handleDownload}
      disabled={status === 'loading'}
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium bg-indigo-100 text-indigo-700 hover:bg-indigo-200 transition-colors disabled:opacity-60"
    >
      <Download className="w-3.5 h-3.5" />
      {status === 'loading' ? 'Generating…' : status === 'done' ? 'Downloaded!' : 'Download PPT'}
    </button>
  )
}
