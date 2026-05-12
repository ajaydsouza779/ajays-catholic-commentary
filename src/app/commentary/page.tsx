'use client'

import { useState } from 'react'
import Link from 'next/link'
import { BookOpen, Calendar, ChevronDown } from 'lucide-react'
import sundayCommentaries from '@/lib/lectionary/sundayCommentaries'
import { getCycleForDate, getCycleSpan } from '@/lib/lectionary'

const today = new Date()
const currentCycle = getCycleForDate(today)
const currentSpan = getCycleSpan(today)

// Sort oldest → newest so we can find the "next" Sunday easily
const sorted = [...sundayCommentaries].sort(
  (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
)

// Split into visible (past + next upcoming) and hidden (everything after next)
const nextIdx = sorted.findIndex(e => new Date(e.date + 'T12:00:00') > today)
const cutoff = nextIdx === -1 ? sorted.length : nextIdx + 1  // include the next one
const defaultVisible = sorted.slice(0, cutoff).reverse()     // most recent first
const upcoming = sorted.slice(cutoff).reverse()              // future entries, newest first

function SundayCard({ entry }: { entry: (typeof sorted)[0] }) {
  const computedCycle = getCycleForDate(new Date(entry.date + 'T12:00:00'))
  const liturgicalYear = `Year ${computedCycle}`
  const permalinkUrl = `/commentary/sunday-gospel/${entry.id}`
  const isNext = sorted.indexOf(entry) === (nextIdx === -1 ? -1 : nextIdx)

  return (
    <article className={`bg-white rounded-xl shadow-sm border overflow-hidden hover:shadow-md transition-shadow ${isNext ? 'border-amber-300 ring-1 ring-amber-200' : 'border-gray-100'}`}>
      {isNext && (
        <div className="bg-amber-50 px-6 py-2 border-b border-amber-100 text-xs font-semibold text-amber-700 uppercase tracking-wide">
          Next Sunday
        </div>
      )}
      <div className="p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 text-sm text-amber-600 font-medium mb-1">
            <Calendar className="w-4 h-4 shrink-0" />
            {new Date(entry.date + 'T12:00:00').toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}{' '}
            — {liturgicalYear}
          </div>
          <h3 className="font-serif font-bold text-gray-900 mb-1 leading-snug">
            {(() => {
              const dashIdx = entry.sundayName.indexOf(' — ')
              if (dashIdx === -1) return <span className="text-xl">{entry.sundayName}</span>
              return (
                <>
                  <span className="text-xl block">{entry.sundayName.slice(0, dashIdx)}</span>
                  <span className="text-base font-medium text-gray-600 block">{entry.sundayName.slice(dashIdx + 3)}</span>
                </>
              )
            })()}
          </h3>
          <p className="text-gray-500 text-sm flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5 shrink-0" />
            {entry.gospelRef}
          </p>
        </div>
        <Link
          href={permalinkUrl}
          className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-amber-600 text-white text-sm font-medium hover:bg-amber-700 transition-colors"
        >
          Read Commentary →
        </Link>
      </div>
    </article>
  )
}

export default function CommentaryPage() {
  const [showUpcoming, setShowUpcoming] = useState(false)

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-6">
        Sunday Gospel Commentary
      </h1>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Column — Gospel Entry Cards */}
        <div className="lg:col-span-2 space-y-4">
          {defaultVisible.map(entry => (
            <SundayCard key={entry.id} entry={entry} />
          ))}

          {/* Upcoming toggle */}
          {upcoming.length > 0 && (
            <div className="pt-2">
              {!showUpcoming ? (
                <button
                  onClick={() => setShowUpcoming(true)}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-dashed border-gray-300 text-sm text-gray-500 hover:border-amber-400 hover:text-amber-700 transition-colors"
                >
                  <ChevronDown className="w-4 h-4" />
                  Show {upcoming.length} upcoming {upcoming.length === 1 ? 'commentary' : 'commentaries'}
                </button>
              ) : (
                <div className="space-y-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 px-1">Upcoming</p>
                  {upcoming.map(entry => (
                    <SundayCard key={entry.id} entry={entry} />
                  ))}
                </div>
              )}
            </div>
          )}

          <div className="mt-4 text-center text-gray-500 text-sm">
            <p>New Gospel commentaries are added weekly, following the Sunday Lectionary cycle.</p>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-lg font-serif font-semibold text-gray-900 mb-3">About</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Weekly reflections on the Sunday Gospel reading, following the Catholic Lectionary&apos;s
              three-year cycle (Year A: Matthew, Year B: Mark, Year C: Luke, with John woven throughout).
              Each entry provides historical context, theological commentary, and practical application
              for daily life.
            </p>
          </div>

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
