/**
 * Verifies getCycleForDate against known authoritative anchor dates.
 * Run with: npx tsx scripts/test-cycle-calculation.ts
 *
 * Source: USCCB & catholic-resources.org (May 2026)
 * 2024-25 = Year C, 2025-26 = Year A, 2026-27 = Year B
 */

import { getCycleForDate } from '../src/lib/lectionary/getCycleForDate'

type Assertion = { date: string; expected: 'A' | 'B' | 'C'; note: string }

const assertions: Assertion[] = [
  { date: '2025-11-23', expected: 'C', note: 'Christ the King 2025 — last Sunday of Year C' },
  { date: '2025-11-30', expected: 'A', note: 'Advent 1 2025 — first Sunday of Year A' },
  { date: '2026-04-26', expected: 'A', note: '4th Sunday Easter 2026 — currently mislabeled Year A (correct)' },
  { date: '2026-05-03', expected: 'A', note: '5th Sunday Easter 2026 — currently mislabeled Year C (wrong)' },
  { date: '2026-11-22', expected: 'A', note: 'Christ the King 2026 — last Sunday of Year A' },
  { date: '2026-11-29', expected: 'B', note: 'Advent 1 2026 — first Sunday of Year B' },
  { date: '2027-11-21', expected: 'B', note: 'Christ the King 2027 — last Sunday of Year B' },
  { date: '2027-11-28', expected: 'C', note: 'Advent 1 2027 — first Sunday of Year C' },
  // Historical verification
  { date: '2024-12-01', expected: 'C', note: 'Advent 1 2024 — confirmed Year C start' },
  { date: '2023-12-03', expected: 'B', note: 'Advent 1 2023 — confirmed Year B start' },
  { date: '2022-11-27', expected: 'C', note: 'Nov 27, 2022 — still in Year C (Advent 1 2022 = Dec 4, since Dec 25 2022 was a Sunday)' },
  { date: '2022-12-04', expected: 'A', note: 'Advent 1 2022 (Dec 4) — first Sunday of Year A' },
]

let passed = 0
let failed = 0

for (const { date, expected, note } of assertions) {
  const result = getCycleForDate(new Date(date))
  const ok = result === expected
  if (ok) {
    console.log(`  ✓  ${date}  →  Year ${result}  (${note})`)
    passed++
  } else {
    console.error(`  ✗  ${date}  →  Year ${result} (expected Year ${expected})  (${note})`)
    failed++
  }
}

console.log(`\n${passed} passed, ${failed} failed`)
if (failed > 0) {
  console.error('\nCycle calculation has errors — do NOT proceed with implementation.')
  process.exit(1)
} else {
  console.log('All assertions pass — cycle calculation is correct.')
}
