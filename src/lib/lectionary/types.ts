export type LiturgicalCycle = 'A' | 'B' | 'C'

export type LiturgicalSeason =
  | 'Advent'
  | 'Christmas'
  | 'OrdinaryTime'
  | 'Lent'
  | 'HolyWeek'
  | 'Easter'

export interface SundayEntry {
  slug: string
  sundayName: string
  season: LiturgicalSeason
  gospelRef: string
  firstReadingRef: string
  psalmRef: string
  secondReadingRef: string
  oneLineTheme: string
  // true when this reading is used across all three cycles
  sameEveryYear?: boolean
  // set to true on entries in year-X.ts once a full commentary exists at /commentary/sunday-gospel/[slug]
  hasCommentary?: boolean
}

export interface SundayCommentary {
  id: string
  // date this commentary was written for, ISO format: YYYY-MM-DD
  date: string
  cycle: LiturgicalCycle
  // must match a SundayEntry.slug in the corresponding year-X.ts
  sundaySlug: string
  sundayName: string
  gospelRef: string
  gospelText: string
  firstReading: string
  psalm: string
  secondReading: string
  context: string
  themes: string[]
  commentary: string
  application: string
  sources: string[]
}

export interface CycleInfo {
  cycle: LiturgicalCycle
  evangelist: string
  gospelName: string
  emphasis: string
  description: string
  adventStartYear: number
  // e.g. "Advent 2025 – Christ the King 2026"
  span: string
}
