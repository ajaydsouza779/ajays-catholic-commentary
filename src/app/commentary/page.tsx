'use client'

import { useState } from 'react'
import Link from 'next/link'
import { BookOpen, Calendar, ChevronDown, ChevronUp, Share2 } from 'lucide-react'
import sundayCommentaries from '@/lib/lectionary/sundayCommentaries'
import { getCycleForDate, getCycleSpan } from '@/lib/lectionary'

const today = new Date()
const currentCycle = getCycleForDate(today)
const currentSpan = getCycleSpan(today)

export default function CommentaryPage() {
  const [expandedId, setExpandedId] = useState<string | null>(
    sundayCommentaries[0]?.id || null
  )

  const toggleEntry = (id: string) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-6">
        Sunday Gospel Commentary
      </h1>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Column — Gospel Entries */}
        <div className="lg:col-span-2 space-y-6">
          {sundayCommentaries.map((entry) => {
            const computedCycle = getCycleForDate(new Date(entry.date + 'T12:00:00'))
            const liturgicalYear = `Year ${computedCycle}`
            const isExpanded = expandedId === entry.id
            const permalinkUrl = `/commentary/sunday-gospel/${entry.id}`

            return (
              <article key={entry.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                {/* Entry Header — always visible */}
                <button
                  onClick={() => toggleEntry(entry.id)}
                  className="w-full text-left p-6 flex items-start justify-between gap-4 hover:bg-gray-50 transition-colors"
                >
                  <div>
                    <div className="flex items-center gap-2 text-sm text-amber-600 font-medium mb-1">
                      <Calendar className="w-4 h-4" />
                      {entry.sundayName.includes(entry.date)
                        ? entry.date
                        : new Date(entry.date + 'T12:00:00').toLocaleDateString('en-US', {
                            month: 'long',
                            day: 'numeric',
                            year: 'numeric',
                          })}{' '}
                      — {liturgicalYear}
                    </div>
                    <h3 className="text-xl font-serif font-bold text-gray-900 mb-1">
                      {entry.sundayName}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Gospel: <span className="font-medium">{entry.gospelRef}</span>
                    </p>
                  </div>
                  {isExpanded ? (
                    <ChevronUp className="w-5 h-5 text-gray-400 shrink-0 mt-1" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 shrink-0 mt-1" />
                  )}
                </button>

                {/* Expanded Content */}
                {isExpanded && (
                  <div className="px-6 pb-8 border-t border-gray-100">
                    {/* Share / Permalink row */}
                    <div className="flex items-center justify-between mt-4 mb-6 p-3 bg-amber-50 rounded-lg">
                      <span className="text-xs text-amber-700 font-medium flex items-center gap-1">
                        <Share2 className="w-3.5 h-3.5" /> Share this commentary:
                      </span>
                      <div className="flex items-center gap-2">
                        <Link
                          href={permalinkUrl}
                          className="text-xs font-medium px-3 py-1.5 rounded-lg bg-amber-600 text-white hover:bg-amber-700 transition-colors"
                          onClick={e => e.stopPropagation()}
                        >
                          Open page
                        </Link>
                      </div>
                    </div>

                    {/* Readings Overview */}
                    <div className="bg-blue-50 rounded-lg p-5 mb-6">
                      <h4 className="font-semibold text-blue-900 mb-3">Today&apos;s Readings</h4>
                      <ul className="space-y-2 text-sm text-blue-800">
                        <li><span className="font-medium">First Reading:</span> {entry.firstReading}</li>
                        <li><span className="font-medium">Responsorial Psalm:</span> {entry.psalm}</li>
                        <li><span className="font-medium">Second Reading:</span> {entry.secondReading}</li>
                        <li><span className="font-medium">Gospel:</span> {entry.gospelRef}</li>
                      </ul>
                    </div>

                    {/* Gospel Text */}
                    <div className="bg-amber-50 rounded-lg p-6 mb-6 border-l-4 border-amber-400">
                      <div className="flex items-center gap-2 mb-3">
                        <BookOpen className="w-5 h-5 text-amber-700" />
                        <h4 className="font-serif font-bold text-gray-900">Gospel — {entry.gospelRef}</h4>
                      </div>
                      <div className="text-gray-800 leading-relaxed whitespace-pre-line text-[15px]">
                        {entry.gospelText}
                      </div>
                    </div>

                    {/* Historical & Literary Context */}
                    <div className="mb-6">
                      <h4 className="text-lg font-serif font-bold text-gray-900 mb-3">Historical &amp; Literary Context</h4>
                      <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                        {entry.context}
                      </div>
                    </div>

                    {/* Key Themes */}
                    <div className="bg-green-50 rounded-lg p-5 mb-6">
                      <h4 className="font-semibold text-green-900 mb-3">Key Themes</h4>
                      <ul className="space-y-2">
                        {entry.themes.map((theme, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-green-800">
                            <span className="text-green-600 mt-0.5">&#x2022;</span>
                            {theme}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Commentary */}
                    <div className="mb-6">
                      <h4 className="text-lg font-serif font-bold text-gray-900 mb-3">Commentary</h4>
                      <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed">
                        {entry.commentary.split('\n\n').map((para, i) => {
                          if (para.startsWith('**')) {
                            const cleaned = para.replace(/\*\*/g, '')
                            const firstNewline = cleaned.indexOf('\n')
                            if (firstNewline > -1) {
                              return (
                                <div key={i} className="mb-4">
                                  <h5 className="font-semibold text-gray-900 mb-2">{cleaned.substring(0, firstNewline)}</h5>
                                  <p>{cleaned.substring(firstNewline + 1)}</p>
                                </div>
                              )
                            }
                            return <h5 key={i} className="font-semibold text-gray-900 mb-2 mt-4">{cleaned}</h5>
                          }
                          return <p key={i} className="mb-3">{para}</p>
                        })}
                      </div>
                    </div>

                    {/* Practical Application */}
                    <div className="bg-purple-50 rounded-lg p-6 mb-6">
                      <h4 className="font-semibold text-purple-900 mb-3">Living the Gospel This Week</h4>
                      <div className="text-sm text-purple-800 leading-relaxed whitespace-pre-line">
                        {entry.application}
                      </div>
                    </div>

                    {/* Sources */}
                    <div className="bg-gray-50 rounded-lg p-5">
                      <h4 className="font-semibold text-gray-800 mb-3">Sources &amp; Further Reading</h4>
                      <ol className="text-sm text-gray-600 space-y-1.5 list-decimal list-inside">
                        {entry.sources.map((source, i) => (
                          <li key={i}>{source}</li>
                        ))}
                      </ol>
                    </div>
                  </div>
                )}
              </article>
            )
          })}

          <div className="mt-4 text-center text-gray-500 text-sm">
            <p>New Gospel commentaries are added weekly, following the Sunday Lectionary cycle.</p>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          {/* About this section */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-lg font-serif font-semibold text-gray-900 mb-3">About</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Weekly reflections on the Sunday Gospel reading, following the Catholic Lectionary&apos;s
              three-year cycle (Year A: Matthew, Year B: Mark, Year C: Luke, with John woven throughout).
              Each entry provides the Gospel text, historical context, theological commentary, and
              practical application for daily life.
            </p>
          </div>

          {/* Current Liturgical Year */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-amber-50">
                <Calendar className="w-5 h-5 text-amber-700" />
              </div>
              <h2 className="text-base font-serif font-semibold text-gray-900">Current Liturgical Year</h2>
            </div>
            <p className="text-gray-700 text-sm mb-1">
              <span className="font-semibold">Year {currentCycle}</span> —{' '}
              {currentCycle === 'A' ? 'Gospel of Matthew' : currentCycle === 'B' ? 'Gospel of Mark' : 'Gospel of Luke'}
            </p>
            <p className="text-gray-500 text-xs mb-3">{currentSpan}</p>
            <p className="text-gray-600 text-sm leading-relaxed">
              The three-year cycle ensures Catholics hear the vast majority of the four Gospels at Sunday Mass.
              John appears in all three years during Lent, Easter, and key feasts.
            </p>
            <Link
              href="/commentary/liturgical-calendar"
              className="mt-3 inline-block text-sm font-medium text-amber-600 hover:text-amber-800 transition-colors"
            >
              Learn about all three cycles →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
