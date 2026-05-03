'use client'

import { Copy, Printer, Share2 } from 'lucide-react'
import { useState } from 'react'

interface ShareButtonsProps {
  url: string
  title: string
  layout?: 'horizontal' | 'vertical'
}

export default function ShareButtons({ url, title, layout = 'horizontal' }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false)
  const waText = encodeURIComponent(`${title}\n${url}`)
  const fbUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
  const waUrl = `https://wa.me/?text=${waText}`

  const handleCopy = () => {
    navigator.clipboard.writeText(url)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  if (layout === 'vertical') {
    return (
      <div className="flex flex-col items-center gap-3">
        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 writing-mode-vertical">
          Share
        </span>
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          title="Share on WhatsApp"
          className="flex flex-col items-center gap-1 group"
        >
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-green-100 text-green-700 hover:bg-green-600 hover:text-white transition-colors shadow-sm">
            {/* WhatsApp icon */}
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.556 4.12 1.529 5.849L0 24l6.335-1.502A11.946 11.946 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.65-.507-5.17-1.394l-.37-.22-3.76.892.944-3.648-.242-.375A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
            </svg>
          </span>
          <span className="text-[10px] text-gray-500 group-hover:text-gray-700">WhatsApp</span>
        </a>
        <a
          href={fbUrl}
          target="_blank"
          rel="noopener noreferrer"
          title="Share on Facebook"
          className="flex flex-col items-center gap-1 group"
        >
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-700 hover:bg-blue-600 hover:text-white transition-colors shadow-sm">
            {/* Facebook icon */}
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
              <path d="M24 12.073C24 5.404 18.627 0 12 0S0 5.404 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
            </svg>
          </span>
          <span className="text-[10px] text-gray-500 group-hover:text-gray-700">Facebook</span>
        </a>
        <button
          onClick={handleCopy}
          title="Copy link"
          className="flex flex-col items-center gap-1 group"
        >
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-300 hover:text-gray-900 transition-colors shadow-sm">
            <Copy className="w-4 h-4" />
          </span>
          <span className="text-[10px] text-gray-500 group-hover:text-gray-700">
            {copied ? 'Copied!' : 'Copy'}
          </span>
        </button>
        <button
          onClick={() => window.print()}
          title="Print or save as PDF"
          className="flex flex-col items-center gap-1 group"
        >
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-300 hover:text-gray-900 transition-colors shadow-sm">
            <Printer className="w-4 h-4" />
          </span>
          <span className="text-[10px] text-gray-500 group-hover:text-gray-700">Print</span>
        </button>
      </div>
    )
  }

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
        onClick={handleCopy}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
      >
        <Copy className="w-3.5 h-3.5" /> {copied ? 'Copied!' : 'Copy link'}
      </button>
      <button
        onClick={() => window.print()}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
      >
        <Printer className="w-3.5 h-3.5" /> Print / PDF
      </button>
    </div>
  )
}
