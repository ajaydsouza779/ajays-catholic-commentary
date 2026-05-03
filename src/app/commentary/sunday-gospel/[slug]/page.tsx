import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { BookOpen, Calendar, ChevronDown } from 'lucide-react'
import sundayCommentaries from '@/lib/lectionary/sundayCommentaries'
import type { SundayCommentary } from '@/lib/lectionary/types'
import { getCycleForDate } from '@/lib/lectionary'
import { getSiteUrl } from '@/lib/config'
import ShareButtons from './ShareButtons'

// Pre-render one page per commentary entry at build time
export async function generateStaticParams() {
  return sundayCommentaries.map(entry => ({
    slug: entry.id,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const entry = sundayCommentaries.find(e => e.id === slug)
  if (!entry) return {}

  const description = entry.themes[0]
    ? `${entry.themes[0].substring(0, 155)}`
    : `Catholic commentary on ${entry.sundayName} — ${entry.gospelRef}`

  const url = `${getSiteUrl()}/commentary/sunday-gospel/${slug}`

  return {
    title: `${entry.sundayName} — Ajay's Catholic Commentary`,
    description,
    openGraph: {
      title: `${entry.sundayName} — Ajay's Catholic Commentary`,
      description,
      url,
      type: 'article',
      siteName: "Ajay's Catholic Commentary",
    },
    twitter: {
      card: 'summary',
      title: `${entry.sundayName} — Ajay's Catholic Commentary`,
      description,
    },
    alternates: {
      canonical: url,
    },
  }
}

function splitReading(raw: string): { ref: string; summary: string } {
  const idx = raw.indexOf(' — ')
  if (idx === -1) return { ref: raw, summary: '' }
  return { ref: raw.slice(0, idx), summary: raw.slice(idx + 3) }
}

function toBullets(text: string): string[] {
  return text
    .split(/\.[ \n]+(?=[A-Z“”"])/)
    .map(s => s.replace(/\.+$/, '').trim())
    .filter(Boolean)
}

function parseCommentary(text: string) {
  return text.split('\n\n').map((para, i) => {
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
  })
}

export default async function SundayGospelPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const entry: SundayCommentary | undefined = sundayCommentaries.find(e => e.id === slug)
  if (!entry) notFound()

  const pageUrl = `${getSiteUrl()}/commentary/sunday-gospel/${slug}`
  const entryDate = new Date(entry.date + 'T12:00:00')
  const computedCycle = getCycleForDate(entryDate)
  const contentMismatch = entry.cycle !== computedCycle
  const displayDate = entryDate.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6 flex flex-wrap items-center gap-1">
        <Link href="/commentary" className="hover:text-amber-600 transition-colors">
          Sunday Gospel
        </Link>
        <span>/</span>
        <span className="text-gray-700">{entry.sundayName}</span>
      </nav>

      {/* Header */}
      <div className="mb-6">
        <div className="flex flex-wrap items-center gap-2 text-sm text-amber-600 font-medium mb-2">
          <Calendar className="w-4 h-4" />
          <span>{displayDate}</span>
          <span className="text-gray-300">·</span>
          <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 text-xs font-bold">
            Liturgical Year {computedCycle}
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-2">
          {entry.sundayName}
        </h1>
        <p className="text-gray-600 font-medium">
          Gospel: <span className="text-gray-900">{entry.gospelRef}</span>
        </p>
      </div>

      {/* Floating share sidebar — 2xl only: at max-w-6xl need ≥1536px to have clear margin left */}
      <div className="hidden 2xl:block print:hidden fixed left-6 top-1/2 -translate-y-1/2 z-30">
        <div className="bg-white rounded-2xl shadow-md border border-gray-100 px-2 py-4">
          <ShareButtons layout="vertical" url={pageUrl} title={`${entry.sundayName} — ${entry.gospelRef}`} />
        </div>
      </div>

      {/* Content-cycle mismatch warning (shown when commentary was written for a different cycle) */}
      {contentMismatch && (
        <div className="mb-6 p-4 bg-yellow-50 rounded-xl border border-yellow-300">
          <p className="text-sm text-yellow-800">
            <strong>Note:</strong> This commentary was written using the Year {entry.cycle} lectionary readings.
            The Sunday ({displayDate}) falls in Liturgical Year {computedCycle}.
            The correct Year {computedCycle} gospel for this Sunday will be added in a future update.
          </p>
        </div>
      )}

      {/* 2-column layout: sidebar right (readings + themes) | main left (context → commentary) */}
      {(() => {
        const fr = splitReading(entry.firstReading)
        const ps = splitReading(entry.psalm)
        const sr = splitReading(entry.secondReading)

        const readingCards = (
          <div className="space-y-4">
            <div>
              <h2 className="text-base font-serif font-bold text-gray-900 mb-3">Readings at a Glance</h2>
              {/* Single-column stacked cards in sidebar; 2-col on mobile standalone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
              {/* First Reading */}
              <div className="rounded-xl border border-indigo-100 bg-indigo-50 p-4 flex flex-col gap-2">
                <span className="text-xs font-bold uppercase tracking-wide text-indigo-500">First Reading</span>
                <p className="font-semibold text-indigo-900 text-sm leading-snug">{fr.ref}</p>
                {fr.summary && (
                  <ul className="space-y-1 mt-1">
                    {toBullets(fr.summary).map((pt, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-indigo-800">
                        <span className="mt-2 w-1 h-1 rounded-full bg-indigo-400 shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              {/* Responsorial Psalm */}
              <div className="rounded-xl border border-green-100 bg-green-50 p-4 flex flex-col gap-2">
                <span className="text-xs font-bold uppercase tracking-wide text-green-500">Responsorial Psalm</span>
                <p className="font-semibold text-green-900 text-sm leading-snug">{ps.ref}</p>
                {ps.summary && (
                  <ul className="space-y-1 mt-1">
                    {toBullets(ps.summary).map((pt, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-green-800">
                        <span className="mt-2 w-1 h-1 rounded-full bg-green-400 shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              {/* Second Reading */}
              <div className="rounded-xl border border-rose-100 bg-rose-50 p-4 flex flex-col gap-2">
                <span className="text-xs font-bold uppercase tracking-wide text-rose-500">Second Reading</span>
                <p className="font-semibold text-rose-900 text-sm leading-snug">{sr.ref}</p>
                {sr.summary && (
                  <ul className="space-y-1 mt-1">
                    {toBullets(sr.summary).map((pt, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-rose-800">
                        <span className="mt-2 w-1 h-1 rounded-full bg-rose-400 shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              {/* Gospel */}
              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 flex flex-col gap-2">
                <span className="text-xs font-bold uppercase tracking-wide text-amber-600">Gospel</span>
                <div className="flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-amber-700 shrink-0" />
                  <p className="font-semibold text-amber-900 text-sm leading-snug">{entry.gospelRef}</p>
                </div>
                {entry.gospelTextIsSummary && (
                  <ul className="space-y-1 mt-1">
                    {toBullets(splitReading(entry.gospelText).summary).map((pt, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-amber-800">
                        <span className="mt-2 w-1 h-1 rounded-full bg-amber-400 shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
            </div>

          </div>
        )

        return (
          <div className="lg:grid lg:grid-cols-4 lg:gap-8 lg:items-start">

            {/* Right sticky sidebar — DOM first so mobile shows readings above content */}
            <aside className="lg:col-span-1 lg:order-last mb-8 lg:mb-0 print:hidden">
              <div className="lg:sticky lg:top-6">
                {readingCards}
              </div>
            </aside>

            {/* Main content column */}
            <div className="lg:col-span-3">

              {/* Gospel full text — only for older non-summary entries */}
              {!entry.gospelTextIsSummary && (
                <div className="bg-amber-50 rounded-xl p-6 mb-6 border-l-4 border-amber-400">
                  <div className="flex items-center gap-2 mb-3">
                    <BookOpen className="w-5 h-5 text-amber-700" />
                    <h2 className="font-serif font-bold text-gray-900">Gospel — {entry.gospelRef}</h2>
                  </div>
                  <div className="text-gray-800 leading-relaxed whitespace-pre-line text-[15px]">
                    {entry.gospelText}
                  </div>
                </div>
              )}

              {/* USCCB readings prompt — shown before commentary so readers can read the source first */}
              {entry.usccbReadingsUrl && (
                <div className="flex items-center gap-3 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 mb-6 print:hidden">
                  <BookOpen className="w-4 h-4 text-amber-600 shrink-0" />
                  <p className="text-sm text-amber-800">
                    <span className="font-medium">Before you read:</span>{' '}
                    <a
                      href={entry.usccbReadingsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-2 hover:text-amber-900 font-medium"
                    >
                      Read this Sunday&apos;s full Mass readings at USCCB.org &rarr;
                    </a>
                  </p>
                </div>
              )}

              {/* Key Themes — collapsible, so it doesn't block the reader but is easy to open */}
              {entry.themes.length > 0 && (
                <details className="group bg-green-50 border border-green-200 rounded-xl mb-6 print:hidden">
                  <summary className="flex items-center justify-between px-4 py-3 cursor-pointer list-none select-none">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-green-900 uppercase tracking-wide">Key Themes</span>
                      <span className="text-xs font-semibold bg-green-200 text-green-800 px-2 py-0.5 rounded-full">
                        {entry.themes.length}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-green-600">
                      <span className="group-open:hidden">Tap to expand</span>
                      <span className="hidden group-open:inline">Collapse</span>
                      <ChevronDown className="w-4 h-4 transition-transform duration-200 group-open:rotate-180" />
                    </div>
                  </summary>
                  <ul className="px-4 pb-4 pt-1 space-y-2 border-t border-green-200">
                    {entry.themes.map((theme, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-green-800 pt-2">
                        <span className="text-green-500 mt-0.5 shrink-0 font-bold">&#x2022;</span>
                        {theme}
                      </li>
                    ))}
                  </ul>
                </details>
              )}

              {/* Historical & literary context — first thing to read */}
              <div className="mb-8">
                <h2 className="text-xl font-serif font-bold text-gray-900 mb-3">
                  Historical &amp; Literary Context
                </h2>
                <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {entry.context}
                </div>
              </div>

              {/* Commentary */}
              <div className="mb-8">
                <h2 className="text-xl font-serif font-bold text-gray-900 mb-3">Commentary</h2>
                <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed">
                  {parseCommentary(entry.commentary)}
                </div>
              </div>

              {/* Practical application */}
              <div className="bg-purple-50 rounded-xl p-6 mb-8">
                <h2 className="font-semibold text-purple-900 mb-3">Living the Gospel This Week</h2>
                <div className="text-sm text-purple-800 leading-relaxed whitespace-pre-line">
                  {entry.application}
                </div>
              </div>

              {/* Sources */}
              <div className="mb-8">
                <h2 className="text-lg font-serif font-bold text-gray-900 mb-3">
                  Sources &amp; Further Reading
                </h2>
                <ul className="space-y-1.5">
                  {entry.sources.map((source, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                      <span dangerouslySetInnerHTML={{ __html: source.replace(/\*(.*?)\*/g, '<em>$1</em>') }} />
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom share strip — primary CTA on mobile; xl users have the floating sidebar */}
              <div className="border-t border-gray-200 pt-6 print:hidden">
                <p className="text-sm text-gray-600 mb-3">
                  Found this helpful? Share it with your parish or priest:
                </p>
                <ShareButtons url={pageUrl} title={`${entry.sundayName} — ${entry.gospelRef}`} layout="horizontal" />
              </div>

              {/* Back link */}
              <div className="mt-8">
                <Link
                  href="/commentary"
                  className="text-sm text-amber-600 hover:text-amber-800 transition-colors font-medium"
                >
                  ← Back to Sunday Gospel
                </Link>
              </div>
            </div>
          </div>
        )
      })()}
    </div>
  )
}
