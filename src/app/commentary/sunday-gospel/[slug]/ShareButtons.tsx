'use client'

import { Copy, Share2 } from 'lucide-react'

export default function ShareButtons({ url, title }: { url: string; title: string }) {
  const waText = encodeURIComponent(`${title}\n${url}`)
  const fbUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
  const waUrl = `https://wa.me/?text=${waText}`

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-sm font-medium text-gray-600 flex items-center gap-1">
        <Share2 className="w-4 h-4" /> Share:
      </span>
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium bg-green-600 text-white hover:bg-green-700 transition-colors"
      >
        WhatsApp
      </a>
      <a
        href={fbUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors"
      >
        Facebook
      </a>
      <button
        onClick={() => navigator.clipboard.writeText(url)}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
      >
        <Copy className="w-3.5 h-3.5" /> Copy link
      </button>
    </div>
  )
}
