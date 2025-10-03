# Resume Point 1

Use this exact phrase to resume: resume at point-1

## State
- Branch: `develop`
- App dir: `/Users/ajaydsouza/Documents/New-Web-001/ajays-catholic-commentary`
- Next.js: 15.5.4, Prisma: dual schemas (SQLite local / Postgres prod)
- Docs consolidated under `development-docs/`

## What’s done just now
- Fixed posts page JSX footer error; standardized layouts with `Header`/`Footer`.
- Papal Timeline: seeded 14 popes (early to modern); date parsing fixed for 0–99 year bug.
- Hidden “Previous Office” in UI.
- Added Playwright screenshot tests and requirement notes to docs; screenshots in `screenshots/`.

## Known issues / WIP
- Styling validation: ensure all pages show themed colors (not plain text-only look).
- Papal data is partial (14 popes). Full list import and photo enrichment pending.

## Pending TODOs
1) Fix styling issues - pages showing only background and text [in_progress]
2) Verify Playwright tests validate styling correctly [pending]
3) End-to-end page validation for styling and functionality [pending]
4) Expand Papal Timeline: complete list + photo enrichment (Wikipedia/Wikidata) [pending]

## How to run locally
```bash
npm install
npm run dev   # http://localhost:3001
```

## DB & Seeding (local)
```bash
npm run db:reset     # resets SQLite and seeds base data
node scripts/seed-comprehensive-papal-data.js  # papal sample set
```

## Tests
```bash
npm run test                     # all tests
npx playwright test tests/screenshots.spec.ts  # screenshots for all pages
npx playwright test tests/styling-test.spec.ts # styling checks
npx playwright show-report       # open latest report (run from app dir)
```

## Pages to verify (styling)
- `/` (home), `/posts`, `/history/papal-timeline`, `/history/church-divisions`, `/history/bible-origin`, `/search`, `/test-styling`

## Notes
- Tailwind colors in `tailwind.config.ts` (primary.gold/navy/cream). Global styles in `src/app/globals.css`.
- Layouts: `src/app/(home)/layout.tsx`, `src/app/posts/layout.tsx`, `src/app/history/layout.tsx`, `src/app/search/layout.tsx`.
- Screenshots saved under `screenshots/`. Ensure server is running before screenshot tests.
