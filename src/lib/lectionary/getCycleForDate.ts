/**
 * Returns the Catholic Sunday Lectionary cycle (A, B, or C) for a given date.
 *
 * Verified against:
 *   USCCB - https://www.usccb.org/prayer-and-worship/liturgical-year-and-calendar (May 2026)
 *   catholic-resources.org - https://catholic-resources.org/Lectionary/ (May 2026)
 *
 * Confirmed anchor points:
 *   2024-25 = Year C  →  Advent 2024 (Dec 1, 2024) to Christ the King (Nov 23, 2025)
 *   2025-26 = Year A  →  Advent 2025 (Nov 30, 2025) to Christ the King (Nov 22, 2026)
 *   2026-27 = Year B  →  Advent 2026 (Nov 29, 2026) onward
 *
 * Cycle rule (by the liturgical year's ending calendar year):
 *   (endingYear - 2023) % 3 === 0  →  Year A   (e.g. 2023, 2026, 2029)
 *   (endingYear - 2023) % 3 === 1  →  Year B   (e.g. 2024, 2027, 2030)
 *   (endingYear - 2023) % 3 === 2  →  Year C   (e.g. 2025, 2028, 2031)
 */

import type { LiturgicalCycle } from './types'

/** Returns the date of the 1st Sunday of Advent for a given calendar year. */
function getAdvent1(year: number): Date {
  // Advent 1 = Dec 25 minus (dayOfWeek of Dec 25) minus 21 days
  const dec25 = new Date(year, 11, 25)
  const dayOfWeek = dec25.getDay() // 0 = Sunday
  return new Date(year, 11, 25 - dayOfWeek - 21)
}

export function getCycleForDate(date: Date): LiturgicalCycle {
  const year = date.getFullYear()
  const advent1ThisYear = getAdvent1(year)

  // If on or after Advent 1, the liturgical year ends next calendar year
  const endingYear = date >= advent1ThisYear ? year + 1 : year

  const remainder = ((endingYear - 2023) % 3 + 3) % 3
  if (remainder === 0) return 'A'
  if (remainder === 1) return 'B'
  return 'C'
}

/** Returns the liturgical year span string, e.g. "Advent 2025 – Christ the King 2026" */
export function getCycleSpan(date: Date): string {
  const year = date.getFullYear()
  const advent1ThisYear = getAdvent1(year)
  const startYear = date >= advent1ThisYear ? year : year - 1
  const endYear = startYear + 1
  return `Advent ${startYear} – Christ the King ${endYear}`
}

/** Returns the Advent 1 date for the liturgical year that contains the given date. */
export function getLiturgicalYearStart(date: Date): Date {
  const year = date.getFullYear()
  const advent1ThisYear = getAdvent1(year)
  return date >= advent1ThisYear ? advent1ThisYear : getAdvent1(year - 1)
}
