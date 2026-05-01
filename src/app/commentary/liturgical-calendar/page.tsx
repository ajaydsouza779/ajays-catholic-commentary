'use client'

import { useState } from 'react'
import Link from 'next/link'
import { BookOpen, Calendar, ChevronDown, ChevronUp, ExternalLink, Info } from 'lucide-react'
import { getCycleForDate, getCycleSpan } from '@/lib/lectionary'
import { cycleInfo } from '@/lib/lectionary/cycles'
import { lectionarySources } from '@/lib/lectionary/sources'
import yearA from '@/lib/lectionary/sundays/year-a'
import yearB from '@/lib/lectionary/sundays/year-b'
import yearC from '@/lib/lectionary/sundays/year-c'
import type { SundayEntry } from '@/lib/lectionary/types'
import sundayCommentaries from '@/lib/lectionary/sundayCommentaries'
import { cn } from '@/lib/utils'

// Map "cycle:sundaySlug" → commentaryId (e.g. "A:4th-sunday-easter" → "2026-04-26")
const commentaryIndex = new Map<string, string>(
  sundayCommentaries.map(c => [`${c.cycle}:${c.sundaySlug}`, c.id])
)

const today = new Date()
const currentCycle = getCycleForDate(today)
const currentSpan = getCycleSpan(today)

const cycleData: Record<'A' | 'B' | 'C', SundayEntry[]> = {
  A: yearA,
  B: yearB,
  C: yearC,
}

const seasonLabels: Record<string, string> = {
  Advent: 'Advent',
  Christmas: 'Christmas Season',
  OrdinaryTime: 'Ordinary Time',
  Lent: 'Lent',
  HolyWeek: 'Holy Week',
  Easter: 'Easter Season',
}

const seasonColors: Record<string, string> = {
  Advent: 'bg-purple-100 text-purple-800',
  Christmas: 'bg-yellow-100 text-yellow-800',
  OrdinaryTime: 'bg-green-100 text-green-800',
  Lent: 'bg-purple-100 text-purple-800',
  HolyWeek: 'bg-red-100 text-red-800',
  Easter: 'bg-white text-amber-700 border border-amber-300',
}

const cycleColors: Record<'A' | 'B' | 'C', { card: string; badge: string; border: string }> = {
  A: {
    card: 'border-amber-200 bg-amber-50',
    badge: 'bg-amber-600 text-white',
    border: 'border-amber-400',
  },
  B: {
    card: 'border-blue-200 bg-blue-50',
    badge: 'bg-blue-600 text-white',
    border: 'border-blue-400',
  },
  C: {
    card: 'border-emerald-200 bg-emerald-50',
    badge: 'bg-emerald-600 text-white',
    border: 'border-emerald-400',
  },
}

function groupBySeason(entries: SundayEntry[]) {
  const order = ['Advent', 'Christmas', 'OrdinaryTime', 'Lent', 'HolyWeek', 'Easter']
  const groups: Record<string, SundayEntry[]> = {}
  for (const entry of entries) {
    if (!groups[entry.season]) groups[entry.season] = []
    groups[entry.season].push(entry)
  }
  // OrdinaryTime appears twice (before Lent and after Pentecost), keep in order
  return order.filter(s => groups[s]).map(s => ({ season: s, entries: groups[s] }))
}

function CycleTable({ cycle, entries }: { cycle: 'A' | 'B' | 'C'; entries: SundayEntry[] }) {
  const seasons = groupBySeason(entries)
  return (
    <div className="space-y-4">
      {seasons.map(({ season, entries: seasonEntries }) => (
        <div key={season}>
          <div className="flex items-center gap-2 mb-2">
            <span className={cn('text-xs font-semibold px-2 py-0.5 rounded-full', seasonColors[season])}>
              {seasonLabels[season]}
            </span>
          </div>
          <div className="overflow-x-auto rounded-lg border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-3 py-2 font-semibold text-gray-700 min-w-[180px]">Sunday</th>
                  <th className="text-left px-3 py-2 font-semibold text-gray-700 min-w-[130px]">Gospel</th>
                  <th className="text-left px-3 py-2 font-semibold text-gray-700">Theme</th>
                  <th className="px-3 py-2 w-8"></th>
                </tr>
              </thead>
              <tbody>
                {seasonEntries.map((entry, i) => (
                  <tr
                    key={entry.slug}
                    className={cn(
                      'border-b border-gray-100 last:border-0',
                      i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50',
                    )}
                  >
                    <td className="px-3 py-2.5 text-gray-800 font-medium align-top">
                      {entry.sundayName}
                      {entry.sameEveryYear && (
                        <span className="ml-1.5 text-[10px] text-gray-400 font-normal">(every year)</span>
                      )}
                    </td>
                    <td className="px-3 py-2.5 text-gray-600 align-top font-mono text-[12px]">
                      {entry.gospelRef}
                    </td>
                    <td className="px-3 py-2.5 text-gray-600 align-top italic text-[13px]">
                      {entry.oneLineTheme}
                    </td>
                    <td className="px-3 py-2.5 align-top text-center">
                      {(() => {
                        const commentaryId = commentaryIndex.get(`${cycle}:${entry.slug}`)
                        return commentaryId ? (
                          <Link
                            href={`/commentary/sunday-gospel/${commentaryId}`}
                            className="text-amber-600 hover:text-amber-800 transition-colors"
                            title="Read commentary"
                          >
                            <BookOpen className="w-3.5 h-3.5" />
                          </Link>
                        ) : null
                      })()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function LiturgicalCalendarPage() {
  const [openCycle, setOpenCycle] = useState<'A' | 'B' | 'C' | null>(currentCycle)

  const toggleCycle = (cycle: 'A' | 'B' | 'C') => {
    setOpenCycle(openCycle === cycle ? null : cycle)
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-2">
        The Liturgical Calendar
      </h1>
      <p className="text-gray-600 mb-8 text-lg">
        How the Catholic Church reads the Bible over three years — and why.
      </p>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main content */}
        <div className="lg:col-span-2 space-y-10">

          {/* Section 1 — Why three cycles? */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
              Why Three Cycles?
            </h2>
            <div className="prose prose-gray max-w-none text-gray-700 space-y-4">
              <p>
                Before the Second Vatican Council (1962–65), the Roman Rite used a single-year lectionary.
                Each Sunday's readings rotated on a one-year cycle, which meant that large portions of the
                New Testament — and almost all of the Old Testament — were never heard at Sunday Mass.
              </p>
              <p>
                The Council's Constitution on the Sacred Liturgy,{' '}
                <em>Sacrosanctum Concilium</em> §51, mandated that{' '}
                <strong>
                  "the treasures of the Bible are to be opened up more lavishly, so that richer fare may
                  be provided for the faithful at the table of God's word."
                </strong>
              </p>
              <p>
                The result was the <em>Ordo Lectionum Missae</em> of 1969, revised in 1981 — a three-year
                Sunday cycle (Years A, B, and C) and a separate two-year weekday cycle (Years I and II).
                The Sunday cycle assigns one of the three Synoptic Gospels to each year, with John woven
                throughout all three years in Lent, Easter, and key feasts. The result: a congregation
                that attends Mass every Sunday over three years hears the heart of the entire New Testament,
                substantial portions of the Old Testament, and the complete arc of Salvation History.
              </p>
              <p>
                This lectionary is now used by Catholics worldwide and has been widely adopted (with
                adaptations) by Anglican, Lutheran, Methodist, and other Protestant communities — one of
                the most significant ecumenical fruits of Vatican II.
              </p>
            </div>
          </section>

          {/* Section 2 — The Three Cycles */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-5">
              The Three Sunday Cycles
            </h2>
            <div className="grid sm:grid-cols-3 gap-4 mb-6">
              {cycleInfo.map(info => {
                const colors = cycleColors[info.cycle]
                const isCurrent = info.cycle === currentCycle
                return (
                  <div
                    key={info.cycle}
                    className={cn(
                      'rounded-xl border-2 p-5 relative',
                      colors.card,
                      colors.border,
                    )}
                  >
                    {isCurrent && (
                      <span className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wide bg-green-500 text-white px-2 py-0.5 rounded-full">
                        Current
                      </span>
                    )}
                    <div className={cn('inline-flex items-center justify-center w-10 h-10 rounded-full text-xl font-bold mb-3', colors.badge)}>
                      {info.cycle}
                    </div>
                    <h3 className="font-serif font-bold text-gray-900 text-lg mb-1">
                      Year {info.cycle}
                    </h3>
                    <p className="text-sm font-semibold text-gray-700 mb-2">
                      {info.gospelName}
                    </p>
                    <p className="text-xs text-gray-600 leading-relaxed mb-3">
                      <em>{info.emphasis}</em>
                    </p>
                    <p className="text-xs text-gray-500">
                      {info.span}
                    </p>
                  </div>
                )
              })}
            </div>
            <div className="space-y-4">
              {cycleInfo.map(info => (
                <div key={info.cycle} className="bg-white rounded-lg border border-gray-200 p-5">
                  <h3 className="font-serif font-bold text-gray-900 mb-2">
                    Year {info.cycle} — {info.evangelist}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{info.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3 — Brief weekday mention */}
          <section className="bg-gray-50 rounded-xl border border-gray-200 p-6">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-gray-500 mt-0.5 shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  The Weekday Lectionary (Years I &amp; II)
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Separate from the Sunday A/B/C cycle, weekday Masses follow a two-year cycle of readings
                  (Year I for odd calendar years, Year II for even years). The weekday cycle covers much of
                  the New Testament epistles and the historical and prophetic books of the Old Testament
                  not heard on Sundays. It is covered separately and not detailed on this page.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 — Sunday-by-Sunday tables */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-2">
              Sundays by Cycle
            </h2>
            <p className="text-gray-600 text-sm mb-5">
              Each cycle listed season-by-season. Rows with a{' '}
              <BookOpen className="w-3.5 h-3.5 inline text-amber-600 mx-0.5" />{' '}
              icon have a full commentary you can read and share.
            </p>

            <div className="space-y-3">
              {(['A', 'B', 'C'] as const).map(cycle => {
                const info = cycleInfo.find(c => c.cycle === cycle)!
                const isOpen = openCycle === cycle
                const isCurrent = cycle === currentCycle
                const colors = cycleColors[cycle]
                return (
                  <div key={cycle} className={cn('rounded-xl border-2 overflow-hidden', colors.border, isOpen ? colors.card : 'bg-white border-gray-200')}>
                    <button
                      onClick={() => toggleCycle(cycle)}
                      className="w-full flex items-center justify-between px-5 py-4 text-left"
                    >
                      <div className="flex items-center gap-3">
                        <span className={cn('w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0', colors.badge)}>
                          {cycle}
                        </span>
                        <div>
                          <span className="font-semibold text-gray-900">
                            Year {cycle} — {info.evangelist}
                          </span>
                          {isCurrent && (
                            <span className="ml-2 text-[10px] font-bold uppercase tracking-wide bg-green-500 text-white px-2 py-0.5 rounded-full">
                              Current
                            </span>
                          )}
                          <p className="text-xs text-gray-500 mt-0.5">{info.span}</p>
                        </div>
                      </div>
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-gray-400 shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-6 border-t border-gray-100">
                        <div className="pt-4">
                          <CycleTable cycle={cycle} entries={cycleData[cycle]} />
                        </div>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </section>

          {/* Sources */}
          <section>
            <h2 className="text-xl font-serif font-bold text-gray-900 mb-4">
              Sources &amp; Further Reading
            </h2>
            <ul className="space-y-3">
              {lectionarySources.map((source, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                  <div>
                    <span className="font-medium text-gray-900">
                      {source.url ? (
                        <a
                          href={source.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-amber-700 transition-colors inline-flex items-center gap-1"
                        >
                          {source.title}
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      ) : (
                        source.title
                      )}
                    </span>
                    <p className="text-sm text-gray-600 mt-0.5">{source.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Sidebar */}
        <div className="space-y-5">
          {/* Current cycle card */}
          <div className="bg-white rounded-xl border border-amber-200 shadow-sm p-5">
            <div className="flex items-center gap-2 mb-3">
              <Calendar className="w-5 h-5 text-amber-600" />
              <h3 className="font-semibold text-gray-900">Current Cycle</h3>
            </div>
            <div className={cn('text-5xl font-bold text-center py-3 rounded-lg mb-3', cycleColors[currentCycle].badge)}>
              {currentCycle}
            </div>
            <p className="text-sm text-gray-700 font-medium text-center mb-1">
              Year {currentCycle} — {cycleInfo.find(c => c.cycle === currentCycle)?.evangelist}
            </p>
            <p className="text-xs text-gray-500 text-center">{currentSpan}</p>
          </div>

          {/* Quick cycle reference */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
            <h3 className="font-semibold text-gray-900 mb-3">Quick Reference</h3>
            <div className="space-y-2 text-sm">
              {[
                { years: '2022–23', cycle: 'A', evang: 'Matthew' },
                { years: '2023–24', cycle: 'B', evang: 'Mark' },
                { years: '2024–25', cycle: 'C', evang: 'Luke' },
                { years: '2025–26', cycle: 'A', evang: 'Matthew', current: true },
                { years: '2026–27', cycle: 'B', evang: 'Mark' },
                { years: '2027–28', cycle: 'C', evang: 'Luke' },
              ].map(row => (
                <div
                  key={row.years}
                  className={cn(
                    'flex items-center justify-between px-2 py-1.5 rounded',
                    row.current ? 'bg-amber-50 font-semibold' : '',
                  )}
                >
                  <span className={row.current ? 'text-amber-800' : 'text-gray-600'}>{row.years}</span>
                  <span className={cn('px-1.5 py-0.5 rounded text-xs font-bold', cycleColors[row.cycle as 'A' | 'B' | 'C'].badge)}>
                    {row.cycle}
                  </span>
                  <span className={row.current ? 'text-amber-800' : 'text-gray-500'}>{row.evang}</span>
                </div>
              ))}
            </div>
          </div>

          {/* About the Sunday Gospel tab */}
          <div className="bg-blue-50 rounded-xl border border-blue-200 p-5">
            <h3 className="font-semibold text-blue-900 mb-2">Sunday Gospel Commentary</h3>
            <p className="text-sm text-blue-800 leading-relaxed mb-3">
              Individual commentaries with full context, key themes, ecumenical perspectives, and
              practical reflection are published weekly under the{' '}
              <Link href="/commentary" className="underline font-medium hover:text-blue-900">
                Sunday Gospel
              </Link>{' '}
              tab — designed as a sermon resource for priests and a reflection aid for the laity.
            </p>
            <Link
              href="/commentary"
              className="inline-block text-sm font-medium text-blue-700 hover:text-blue-900 transition-colors"
            >
              Read commentaries →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
