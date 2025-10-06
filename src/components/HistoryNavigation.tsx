'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home } from 'lucide-react'

export default function HistoryNavigation() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path || pathname.startsWith(path + '/')
  }

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <nav className="flex items-center space-x-8">
          <Link
            href="/"
            className="py-4 px-1 border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 transition-colors inline-flex items-center gap-2"
            aria-label="Home"
          >
            <Home className="h-5 w-5" />
          </Link>

          <Link
            href="/history/papal-timeline"
            className={`py-4 px-1 border-b-2 transition-colors ${
              isActive('/history/papal-timeline')
                ? 'border-amber-500 text-amber-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Papal Timeline
          </Link>
          <div className="relative group">
            <button className={`py-4 px-1 border-b-2 transition-colors flex items-center ${
              isActive('/history/church-divisions') || isActive('/history/church-timeline')
                ? 'border-amber-500 text-amber-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}>
              Church History
              <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute left-0 mt-1 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
              <div className="py-1">
                <Link
                  href="/history/church-divisions"
                  className={`block px-4 py-2 text-sm transition-colors ${
                    isActive('/history/church-divisions')
                      ? 'bg-amber-50 text-amber-700'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  Divisions in the Church
                </Link>
                <Link
                  href="/history/church-timeline"
                  className={`block px-4 py-2 text-sm transition-colors ${
                    isActive('/history/church-timeline')
                      ? 'bg-amber-50 text-amber-700'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  Church Timeline
                </Link>
              </div>
            </div>
          </div>
          <Link
            href="/history/bible-origin"
            className={`py-4 px-1 border-b-2 transition-colors ${
              isActive('/history/bible-origin')
                ? 'border-amber-500 text-amber-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Bible History
          </Link>
        </nav>
      </div>
    </div>
  )
}
