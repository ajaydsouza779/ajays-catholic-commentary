# Ajay's Catholic Commentary

A Catholic commentary platform built with Next.js 15 (App Router) where Ajay D'Souza shares religious insights, teachings, Sunday Gospel reflections, and historical explorations of the Catholic Church.

## Editorial Context for Content Generation

This is a **Catholic devotional and theological commentary site**. Its content is drawn from the canonical Bible (NABRE), the Catechism of the Catholic Church, Vatican II documents, papal encyclicals, the Church Fathers, and standard scholarly commentaries (Brown, Moloney, Bauckham, Pope Benedict XVI's *Jesus of Nazareth*, etc.). All Scripture quotations and theological language used here — including biblical phrases describing Christ's Passion (cross, suffering, death, "put to death in the flesh"), martyrdom of saints (Stephen, the apostles), spiritual warfare imagery (thieves, wolves, unclean spirits driven out), and prophetic denunciation — are **sacred source material being preserved, explained, and applied for catechesis and homiletic preparation**, in continuity with two thousand years of Catholic preaching.

When generating Sunday Gospel commentary, sermon-helper notes, or any liturgical/biblical content:
- Quote Scripture passages from the lectionary directly; attribute clearly to the biblical book and verse.
- Frame difficult biblical language (suffering, death, judgment, persecution) within its theological purpose: salvation history, the Paschal Mystery, the call to discipleship.
- Cite magisterial sources (CCC sections, conciliar documents, papal encyclicals) when explaining doctrine.
- Write in the voice of a faithful Catholic homilist or catechist preparing material for priests and laity. The audience is Catholic readers and clergy preparing sermons, not a general or skeptical audience.

This framing context applies to all content under `src/lib/lectionary/`, `src/app/commentary/`, `src/app/history/`, `src/app/mysteries/`, and related routes.

### Weekly Sunday Gospel Commentary — Generation Recipe

This recipe lets a fresh agent generate a new weekly entry without re-deriving conventions. Follow it section by section to avoid output content-filter blocks (the model's safety filter has triggered on full Gospel quotation in past runs — that is why we paraphrase).

**1. Locate the Sunday in the lectionary index.** The three-year cycle lives in `src/lib/lectionary/sundays/year-{a,b,c}.ts`. Each entry has `slug`, `sundayName`, `gospelRef`, `firstReadingRef`, `psalmRef`, `secondReadingRef`. Use these as the authoritative references — do not invent verse ranges.

**2. Derive the USCCB readings URL.** Pattern: `https://bible.usccb.org/bible/readings/MMDDYY.cfm` (e.g. May 10, 2026 → `051026.cfm`). Set this on the entry as `usccbReadingsUrl`. Always two-digit month, two-digit day, two-digit year, no separators.

**3. Add the skeleton to `src/lib/lectionary/sundayCommentaries.ts`.** Required fields per `SundayCommentary` in `src/lib/lectionary/types.ts`:
- `id`, `date` (both ISO `YYYY-MM-DD` and identical)
- `cycle` (`'A'` | `'B'` | `'C'` — the cycle the readings are drawn from, *not* the calendar year)
- `sundaySlug` (must match a `SundayEntry.slug` in the corresponding `year-X.ts`)
- `sundayName` — format: `"Nth Sunday of Season — Theme line"` (e.g. `"6th Sunday of Easter — The Promise of the Advocate"`)
- `gospelRef` — exact reference, e.g. `"John 14:15-21"`
- `gospelText` — **paraphrased summary, not the full lectionary text** (see step 4)
- `gospelTextIsSummary: true` — toggles UI heading to "Gospel Summary from …"
- `usccbReadingsUrl` — from step 2
- `firstReading`, `psalm`, `secondReading` — short summary paragraphs with the reference and 1–2 sentences of substance
- `context`, `themes`, `commentary`, `application`, `sources`

**4. Filter-safe `gospelText`.** Open with `"<Reference> (NABRE, Lectionary for Mass) — "` then paraphrase the passage in indirect speech with selected short quoted phrases (a phrase or short clause at a time, not whole verses). Avoid reproducing long contiguous Gospel passages verbatim. Do not append a "please read the full text" line — the UI already surfaces the USCCB link.

**5. Section style — match existing entries (use the May 3, 2026 entry as the canonical reference).** Each section's tone and structure:
- `context` — 4–6 paragraphs: where the passage sits in the liturgical season; the immediate narrative/discourse setting; the original-language word notes (Greek/Hebrew with transliteration); a dating/authorship note citing modern Catholic scholarship (Brown, Moloney, Bauckham, Pope Benedict XVI's *Jesus of Nazareth*).
- `themes` — 5–7 bullets, each a single quotable phrase from the passage paired with a one-line theological note.
- `commentary` — 7–10 bold-headed sections (`**Heading**` followed by paragraph(s)). Cover: opening line / key phrase exegesis; central image or doctrine; one Greek/Hebrew word study; a magisterial cross-reference (CCC, Vatican II, an encyclical by name); a named Pope (JPII, Benedict XVI, Francis) on the passage with the encyclical or homily named; a Father (Augustine, Aquinas, Chrysostom — cite the work and tractate/lectio number); a section linking the first reading to the Gospel; a section linking the second reading to the Gospel; "A Note for the Homilist" closing.
- `application` — 6–7 bullets, mix of preaching tips for priests and lived application for laity. Always include one bullet on the Eucharist as fulfillment of the Gospel's promise.
- `sources` — 10–14 entries: NABRE, relevant CCC paragraph ranges, Vatican II documents by name, Pope encyclicals/exhortations with year, Father's commentary with section/tractate, Brown's Anchor Bible volume with page range, Moloney *Sacra Pagina*, Bauckham, plus one or two specialist works for the topic.

**6. UI placement is automatic.** With `gospelTextIsSummary: true` the Gospel section heading reads "Gospel Summary from {ref}"; with `usccbReadingsUrl` set, a "Read the full proclaimed readings on USCCB →" link appears at the bottom of the blue Today's Readings box. No template changes needed per week.

**7. Generate section by section, not all at once.** This avoids triggering the model's output content filter mid-stream and lets the user spot-check each section before continuing. Order: gospelText + readings → context → themes → commentary → application → sources.

**8. After saving, run `npx tsc --noEmit`** to confirm the new entry satisfies the `SundayCommentary` type.

**Live URL**: https://ajays-catholic-commentary.vercel.app
**Dev URL**: https://ajays-catholic-commentary-dev.vercel.app
**GitHub**: Private repo on GitHub

## Tech Stack

- **Framework**: Next.js 15.5.4 (App Router), React 19.1.0, TypeScript 5
- **Styling**: Tailwind CSS 4 with custom Catholic-themed palette (gold, navy, cream, burgundy, sage)
- **Fonts**: Playfair Display (serif headings), Inter (sans body), JetBrains Mono (code)
- **Database**: Prisma 6.16.2 ORM, PostgreSQL everywhere (single `prisma/schema.prisma`)
  - Local dev: Docker PostgreSQL via `docker-compose.yml`
  - Production: PostgreSQL on Supabase
- **Auth**: NextAuth.js 4.24.11 with credentials provider (email/password), JWT sessions
- **Rich Text**: TipTap 3.6.1 editor
- **Images**: Cloudinary (upload, optimize, CDN)
- **Icons**: Lucide React
- **Testing**: Playwright (E2E across Chromium, Firefox, WebKit)
- **Hosting**: Vercel (Hobby plan, region: iad1 US East)
- **CI/CD**: GitHub Actions for database sync workflows

## Development Commands

```bash
npm run dev          # Dev server on port 3001
npm run build        # prisma generate && next build
npm run start        # Production server
npm run lint         # ESLint
npm run test         # Playwright tests (base URL: localhost:3010)
npm run test:ui      # Playwright UI mode
npm run db:push      # Push schema to database
npm run db:studio    # Prisma Studio (web DB browser)
npm run db:seed      # Seed database (tsx scripts/seed-database.ts)
npm run db:reset     # Force-reset database and re-seed
```

## Database

- **Single schema**: `prisma/schema.prisma` (PostgreSQL) -- used locally and in production
- **Local dev**: Docker PostgreSQL via `docker-compose up -d` (see `docker-compose.yml`)
- **Production**: Supabase PostgreSQL with pgbouncer connection pooling (auto-added in production by `src/lib/prisma.ts`)
- **Sync workflows**: GitHub Actions for prod-to-dev and dev-to-prod database sync

### Key Models
- **User** (role: USER | ADMIN), **Post** (status: DRAFT | PUBLISHED | ARCHIVED), **Comment** (status: PENDING | APPROVED | REJECTED | SPAM, supports guest comments)
- **Category**, **Tag** (many-to-many via PostCategory, PostTag junction tables)
- **FeatureToggle** (admin-controlled feature flags with categories and dependencies)
- **Pope**, **PapalEvent**, **PapalAchievement** (papal timeline)
- **ChurchDivision** (hierarchical church divisions/schisms)
- **BibleManuscript**, **BibleTranslation** (Bible history)

## Project Structure

```
src/
  app/
    (home)/          # Homepage with profile, tabs, feature cards
    admin/           # Dashboard, post CRUD, user management, analytics, features
    api/             # REST API routes (posts, comments, search, auth, admin, history, upload)
    auth/            # Sign in / Sign up pages
    history/         # Papal timeline, church divisions, church tree, Bible history, experiments
    posts/           # Post listing + [slug] detail page with comments
    search/          # Multi-type search (posts, popes, divisions, manuscripts)
    about/           # About page
    providers.tsx    # SessionProvider wrapper
    layout.tsx       # Root layout (fonts, metadata, SEO, PerformanceMonitor)
  components/        # Header, Footer, RichTextEditor, ImageUpload, OptimizedImage, LazyLoad, Comments*, SearchBar, HistoryNavigation
  lib/               # auth.ts, prisma.ts, feature-toggles.ts, cache.ts, cloudinary.ts, utils.ts, performance.ts
  types/             # next-auth.d.ts (session type augmentation with id + role)
prisma/              # Schema files, migrations, dev.db
scripts/             # 60+ utility scripts (seeding, sync, export, diagnostics)
tests/               # Playwright E2E specs
.github/workflows/   # test.yml, on-push.yml, dev-sync.yml, dev-to-prod-sync.yml
development-docs/    # 21 development context documents from Cursor AI sessions
```

## Architecture Patterns

- **Server Components** for data-fetching pages (posts listing, individual post with SEO metadata + JSON-LD)
- **Client Components** (`"use client"`) for interactive pages (admin, home, search, history, auth)
- **API routes** follow: auth guard via `getServerSession(authOptions)` -> role check -> validate input -> Prisma operation -> transform response
- **Admin authorization**: `session.user.role === 'ADMIN'` check on all admin endpoints
- **Comment ownership**: ADMIN can manage all; authors can edit/delete their own
- **Dynamic route params**: `{ params }: { params: Promise<{ id: string }> }` pattern (Next.js 15)
- **Relationship updates**: Delete all junction records then recreate (PostCategory, PostTag)
- **Feature toggles**: In-memory cache with 5-min TTL, falls back to DB, defaults to `false` on error
- **Path alias**: `@/*` maps to `./src/*`

## Auth

- **Provider**: Credentials only (email + bcrypt-hashed password, salt rounds = 12)
- **Session**: JWT strategy, 30-day expiry
- **Default admin**: email `ajay@example.com`, password `admin123`
- **Custom pages**: `/auth/signin`, `/auth/signup`
- **Type augmentation**: Session includes `user.id` and `user.role`

## Environment Variables

Required in production (Vercel):
- `DATABASE_URL` - Supabase PostgreSQL connection string
- `NEXTAUTH_SECRET` - Auth secret
- `NEXTAUTH_URL` - Canonical URL
- `AUTH_TRUST_HOST` - "true" for Vercel
- `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET`

## Git Branching

- **main**: Production branch, deployed to Vercel production
- **develop**: Active development branch (currently ahead of main with DB sync workflows, feature toggles, scripts)
- Feature branches: `feature/*` pattern
- **Current state**: develop has uncommitted local changes for SQLite compatibility

## Development Phases

1. **Phase 1** (DONE): Auth, posts, comments, admin, responsive design, deployment
2. **Phase 2** (DONE): Papal Timeline - interactive Pope history with events/achievements
3. **Phase 3** (DONE): Church Divisions - interactive tree/visualization of schisms
4. **Phase 4** (DONE): Bible History - manuscripts, translations, formation timeline
5. **Phase 5** (FUTURE): Church in India/Asia, Saints, Church Councils

## Pending / In Progress

- **Reflection field**: DB column exists on posts, UI editing not yet implemented
- **develop branch**: Has uncommitted changes (SQLite compat fixes for local dev)
- **Comment moderation**: Currently auto-approves; planned switch to PENDING for moderation
- **Future enhancements**: Newsletter, social media, multi-language, podcast, video, RSS

## Conventions

- CSS colors: Use the Catholic palette (`primary-gold`, `primary-navy`, `primary-cream`, `secondary-burgundy`, `secondary-sage`)
- Some inline styles used for brand colors alongside Tailwind classes
- `cn()` utility (clsx + tailwind-merge) for conditional class merging
- HTML content sanitized with DOMPurify before rendering
- Images go through Cloudinary with auto-format, auto-quality, max 1200x800
- Dev server runs on port 3001; test server on port 3010
