# Science Section — Sub-Context Reference

**Purpose**: Conditionally-fetched reference for future Claude Code sessions working on the
`/science/*` content pages. Read this file when building or editing science-section pages
to skip re-exploration of the codebase.

**Last verified**: 2026-04-28 against `develop` branch HEAD.

---

## Section Status

Path: `src/app/science/<slug>/page.tsx`

| Slug | Label | Status | Lines |
|------|-------|--------|-------|
| `faith-and-reason` | Faith & Reason | ✅ Full (6 tabs) | ~700 |
| `church-and-science` | Church & Science | ✅ Hub page | ~250 |
| `galileo` | The Galileo Affair | ✅ Full (6 tabs) | 2365 |
| `evolution` | Evolution & Creation | ✅ Full | 2353 |
| `catholic-scientists` | Catholic Scientists | ✅ Full | 2168 |
| `big-bang` | Big Bang & Cosmology | ✅ Full (6 tabs) | ~900 |
| `reading-genesis` | Reading Genesis | ⚪ Placeholder (33) | 33 |
| `archaeology` | Archaeology & Bible | ⚪ Placeholder (33) | 33 |
| `saints-on-science` | Saints on Science | ⚪ Placeholder (33) | 33 |
| `conflicts-and-myths` | Conflicts & Myths | ⚪ Placeholder (33) | 33 |

Tab order is defined in `src/components/HistoryNavigation.tsx` (categories array, `id: 'science'`).

---

## Architecture

- `src/app/science/layout.tsx` wraps everything: `<Header />`, `<HistoryNavigation />`,
  `<main className="pb-12">`, `<Footer />`. Background is `bg-primary-cream`.
- Every science page is a **client component** (`'use client'`) with `useState<TabKey>` for
  the active tab. No server-side data fetching.
- Pages are static — no API calls, no Prisma. Just JSX content.

---

## The Canonical Page Pattern

**Reference implementations** (in order of preference for copying):
1. `src/app/science/galileo/page.tsx` — the original gold-standard (6 tabs, longest)
2. `src/app/science/faith-and-reason/page.tsx` — recent, cleaner (6 tabs)
3. `src/app/science/big-bang/page.tsx` — recent (6 tabs)

### Skeleton

```tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { /* lucide icons */ } from 'lucide-react'

type TabKey = 'tab-one' | 'tab-two' | /* ... */

export default function MyPage() {
  const [activeTab, setActiveTab] = useState<TabKey>('tab-one')

  const tabs: { key: TabKey; label: string }[] = [
    { key: 'tab-one', label: 'Tab One' },
    /* ... */
  ]

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Page Title</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{/* intro */}</p>
        </div>

        {/* Tab bar */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg shadow-lg p-1 overflow-x-auto max-w-full">
            <div className="flex flex-nowrap gap-1">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`px-4 py-2.5 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
                    activeTab === tab.key
                      ? 'bg-amber-100 text-amber-800 font-semibold'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tab panels */}
        {activeTab === 'tab-one' && (
          <div className="space-y-8">
            {/* Cards go here */}
          </div>
        )}
        {/* ... */}
      </div>
    </div>
  )
}
```

### Standard Card Block

```tsx
<div className="bg-white rounded-lg shadow-lg p-8">
  <div className="flex items-center gap-3 mb-4">
    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
      <SomeIcon className="w-6 h-6 text-amber-700" />
    </div>
    <h2 className="text-2xl font-bold text-gray-800">Card Title</h2>
  </div>
  <p className="text-gray-700 leading-relaxed mb-4">Body…</p>
</div>
```

### Pull Quote Block

```tsx
<div className="bg-amber-50 rounded-lg p-5 border-l-4 border-amber-400 mb-4">
  <p className="text-gray-700 italic mb-2">&ldquo;…quote…&rdquo;</p>
  <p className="text-sm text-amber-800 font-semibold">&mdash; Author, Source (year)</p>
</div>
```

Or for hero quotes (top of tab):

```tsx
<div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-amber-400">
  <div className="flex items-start gap-4">
    <Quote className="w-10 h-10 text-amber-600 flex-shrink-0" />
    <div>
      <p className="text-xl text-gray-800 italic leading-relaxed mb-3">…</p>
      <p className="text-sm font-semibold text-amber-800">&mdash; …</p>
    </div>
  </div>
</div>
```

### Cross-Link Block (end of last tab)

```tsx
<div className="bg-indigo-50 border border-indigo-200 p-6 rounded-lg">
  <h3 className="text-lg font-semibold text-indigo-900 mb-3 flex items-center gap-2">
    <ArrowRight className="w-5 h-5" />
    Continue Reading
  </h3>
  <div className="grid sm:grid-cols-2 gap-3">
    <Link href="/science/foo" className="bg-white rounded-lg p-4 border border-indigo-200 hover:border-indigo-400 hover:shadow transition-all">
      <div className="flex items-center gap-2 mb-1">
        <Lightbulb className="w-4 h-4 text-indigo-700" />
        <span className="font-semibold text-gray-800">Foo</span>
      </div>
      <p className="text-sm text-gray-600">Brief blurb.</p>
    </Link>
    {/* … */}
  </div>
</div>
```

### Sources Block (end of last tab)

```tsx
<div className="bg-gray-50 rounded-lg p-6">
  <h3 className="font-semibold text-gray-700 mb-3 uppercase tracking-wide text-sm">
    Sources &amp; Further Reading
  </h3>
  <ul className="text-sm text-gray-600 space-y-1.5 list-disc pl-5">
    <li>Author, <em>Title</em> (year)</li>
    {/* … */}
  </ul>
</div>
```

### Color Accents (per topic)

Each tab/topic typically gets a consistent color from this palette:

- `amber` (default Catholic gold) — Magisterium, headline, primary
- `indigo` — cross-links, philosophy, theology
- `emerald` — affirmation, "what's right", green-light
- `rose` — corrections, dramatis personae, warnings (mild)
- `purple` — cosmology, mysticism
- `sky` — secondary, background info
- `orange` — warnings, archaeology
- `red` — strong warnings (use sparingly)

Apply via `bg-{color}-50`, `border-{color}-200`, `border-{color}-400` (left bar),
`text-{color}-700` (icon), `text-{color}-800` or `text-{color}-900` (text on tinted bg).

---

## HTML Entity Conventions (project-wide)

**Always escape** (ESLint/React rule):
- `&apos;` for `'`
- `&ldquo;` `&rdquo;` for curly double quotes (NOT `&quot;`)
- `&mdash;` for em-dash (—) — used as the standard sentence break
- `&ndash;` for en-dash (–) — used in date ranges (e.g., `1894&ndash;1966`)
- `&hellip;` for ellipsis (…)
- `&amp;` for `&`
- `&icirc;` etc. for accented characters in proper names (Lema&icirc;tre)

**Note**: don't use plain `&` or `'` in JSX text — they trigger react/no-unescaped-entities.

---

## Hub Page Pattern (church-and-science)

When a page is meant to be a **table of contents / index** rather than a standalone article:
- No tab bar
- Header → "An Index to This Section" framing block → big-picture survey →
  card grid linking to all section pages → milestone strip → pull quote → footer note
- Cards differentiate **In-Depth** (rich pages) vs **Coming Soon** (placeholders) via
  pill badges
- Each card has its own color accent from the palette above
- New articles get added as cards here as they are written

See `src/app/science/church-and-science/page.tsx` for the canonical implementation.

---

## Cross-Page Linking Conventions

The four rich science pages (and the hub) all cross-link to each other at the end of the
last tab. Standard links to maintain:

- **Faith & Reason** → philosophical framework (start here for the theory)
- **Catholic Scientists** → biographies (the people)
- **The Galileo Affair** → the famous hard case
- **Evolution & Creation** → the origins case
- **Big Bang & Cosmology** → the cosmology case
- **Church & Science Index** → back to the hub

When adding a new rich page, link from it to the hub + 2–3 closely related pages, and
add a card for it on the hub page.

---

## Content Style Notes

- Voice: confident but never triumphalist. "The Catholic Church teaches…" not "Catholics
  believe their church teaches…".
- Distinguish provisional science from doctrinal claims (Lemaître's lesson — see Big Bang
  page, Tab 3).
- When citing magisterial documents, give the document name in italics + year: e.g.,
  *Fides et Ratio* (1998), *Dei Filius* (1870).
- CCC citations: `**CCC 159:**` then quote.
- Scripture in italics with curly quotes; cite chapter:verse: e.g., *"Romans 1:20"*.
- Subnotes pattern (rarely used so far) — see `src/app/history/christ/page.tsx` for the
  `<sup>(a)</sup>` + Notes section pattern if needed for footnoted content.

---

## Current Pending Items in Science Section

- **Reading Genesis** placeholder — would cover four senses of Scripture, ANE context,
  Augustine/Origen on non-literal Genesis.
- **Archaeology & Bible** placeholder — Pilate inscription, DSS, Pool of Siloam, etc.
- **Saints on Science** placeholder — St. Albert the Great, St. Hildegard, JPII on
  evolution.
- **Conflicts & Myths** placeholder — flat-earth, dark-ages, Hypatia, Draper-White
  warfare thesis debunked.

When any of these are built out, also: (1) update the `Status` table at the top of this
file, (2) flip the card on the hub page from "Coming Soon" to "In-Depth".

---

## Quick Cheats for Common Mistakes

- **Dev server stale cache**: if a new page returns 404 locally after creation,
  `lsof -ti:3001 | xargs kill -9 && rm -rf .next && npm run dev`. Same fix as the
  CSS-404 bug from earlier sessions.
- **TypeScript fast check**: `npx tsc --noEmit` — runs in seconds, catches almost
  everything before `npm run build`.
- **Don't run `npm run build` while `npm run dev` is running**: build overwrites the
  `.next` directory the dev server is using and breaks routes.
