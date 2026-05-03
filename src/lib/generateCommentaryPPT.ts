import type { SundayCommentary } from './lectionary/types'

// ─── palette (matches site Catholic theme) ────────────────────────────────────
const NAVY   = '1B365D'
const GOLD   = 'D4AF37'
const WHITE  = 'FFFFFF'
const DARK   = '2D3748'
const MUTED  = '718096'
const BRAND  = '8899AA'

// ─── helpers ──────────────────────────────────────────────────────────────────

function splitReading(raw: string): { ref: string; summary: string } {
  const idx = raw.indexOf(' — ')
  if (idx === -1) return { ref: raw, summary: '' }
  return { ref: raw.slice(0, idx), summary: raw.slice(idx + 3) }
}

function toSlideBullets(text: string, max = 4): string[] {
  return text
    .split(/\.[ \n]+(?=[A-Z"""])/)
    .map(s => s.replace(/\.+$/, '').trim())
    .filter(Boolean)
    .slice(0, max)
}

function parseSections(commentary: string): { title: string; bullets: string[] }[] {
  const sections: { title: string; bullets: string[] }[] = []
  let currentTitle = ''
  const bodyParts: string[] = []

  for (const block of commentary.split('\n\n').filter(Boolean)) {
    if (block.startsWith('**')) {
      if (currentTitle) {
        sections.push({ title: currentTitle, bullets: toSlideBullets(bodyParts.join(' '), 4) })
        bodyParts.length = 0
      }
      const cleaned = block.replace(/\*\*/g, '')
      const nl = cleaned.indexOf('\n')
      if (nl > -1) {
        currentTitle = cleaned.slice(0, nl).trim()
        const inline = cleaned.slice(nl + 1).trim()
        if (inline) bodyParts.push(inline)
      } else {
        currentTitle = cleaned.trim()
      }
    } else {
      bodyParts.push(block)
    }
  }
  if (currentTitle) {
    sections.push({ title: currentTitle, bullets: toSlideBullets(bodyParts.join(' '), 4) })
  }
  return sections
}

function parseApplicationBullets(application: string): string[] {
  return application
    .split('\n\n')
    .filter(p => p.trim().startsWith('-'))
    .map(p =>
      p
        .replace(/^-\s+/, '')
        .replace(/\*\*(.*?)\*\*/g, '$1')
        .trim()
    )
    .filter(Boolean)
    .slice(0, 7)
}

// ─── slide builder helper ─────────────────────────────────────────────────────

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function addNavyHeader(slide: any, title: string) {
  // Navy title bar
  slide.addText(title, {
    x: 0, y: 0, w: '100%', h: 1.05,
    fill: { color: NAVY },
    color: WHITE, bold: true,
    fontSize: 22, fontFace: 'Georgia',
    valign: 'middle', inset: 0.5,
  })
  // Gold rule under header
  slide.addText('', {
    x: 0, y: 1.05, w: '100%', h: 0.07,
    fill: { color: GOLD },
  })
  // Subtle brand watermark
  slide.addText("Ajay's Catholic Commentary", {
    x: 8.5, y: 0, w: 4.7, h: 1.05,
    color: BRAND, fontSize: 9, fontFace: 'Calibri',
    valign: 'middle', align: 'right', inset: 0.3,
  })
}

// ─── main export ──────────────────────────────────────────────────────────────

// Returns a Node.js Buffer — call from a server-side API route only.
// Do NOT import this in client components (pptxgenjs uses node:fs).
export async function generateCommentaryPPTBuffer(
  entry: SundayCommentary,
  displayDate: string
): Promise<Buffer> {
  const { default: PptxGenJS } = await import('pptxgenjs')
  const pptx = new PptxGenJS()

  pptx.layout  = 'LAYOUT_WIDE'   // 13.33 × 7.5 inches (16:9)
  pptx.title   = `${entry.sundayName} — ${entry.gospelRef}`
  pptx.author  = "Ajay's Catholic Commentary"
  pptx.subject = entry.sundayName

  // ── Slide 1: Title ──────────────────────────────────────────────────────────
  {
    const s = pptx.addSlide()
    // Full navy background
    s.addText('', { x: 0, y: 0, w: '100%', h: '100%', fill: { color: NAVY } })
    // Gold accent stripe
    s.addText('', { x: 0, y: 5.9, w: '100%', h: 0.12, fill: { color: GOLD } })
    // Cycle badge
    s.addText(`Liturgical Year ${entry.cycle}`, {
      x: 0.6, y: 0.55, w: 3, h: 0.38,
      color: GOLD, bold: true, fontSize: 12, fontFace: 'Calibri',
    })
    // Sunday name
    s.addText(entry.sundayName, {
      x: 0.6, y: 1.1, w: 12.1, h: 2.4,
      color: WHITE, bold: true, fontSize: 38, fontFace: 'Georgia',
      valign: 'middle', wrap: true,
    })
    // Gospel reference
    s.addText(entry.gospelRef, {
      x: 0.6, y: 3.6, w: 12.1, h: 0.65,
      color: GOLD, italic: true, fontSize: 22, fontFace: 'Georgia',
    })
    // Date
    s.addText(displayDate, {
      x: 0.6, y: 4.35, w: 12.1, h: 0.42,
      color: MUTED, fontSize: 14, fontFace: 'Calibri',
    })
    // Branding bottom-right
    s.addText("ajaycatholic.com", {
      x: 0.6, y: 6.9, w: 12.1, h: 0.38,
      color: BRAND, fontSize: 10, fontFace: 'Calibri', align: 'right',
    })
  }

  // ── Slide 2: Today's Readings ────────────────────────────────────────────────
  {
    const s = pptx.addSlide()
    addNavyHeader(s, "Today's Readings")

    const readings = [
      { label: 'First Reading',      ...splitReading(entry.firstReading) },
      { label: 'Responsorial Psalm', ...splitReading(entry.psalm) },
      { label: 'Second Reading',     ...splitReading(entry.secondReading) },
      { label: 'Gospel',             ref: entry.gospelRef, summary: '' },
    ]

    const lines = readings.flatMap(r => [
      {
        text: `${r.label}:  `,
        options: { bold: true, color: NAVY, fontSize: 15, fontFace: 'Calibri' },
      },
      {
        text: r.ref,
        options: { bold: false, color: DARK, fontSize: 15, fontFace: 'Calibri' },
      },
      {
        text: r.summary
          ? `  — ${r.summary.split(/[.;]/)[0].trim()}`
          : '',
        options: { italic: true, color: MUTED, fontSize: 13, fontFace: 'Calibri' },
      },
      { text: '\n', options: {} },
    ])

    s.addText(lines, {
      x: 0.6, y: 1.35, w: 12.1, h: 5.8,
      valign: 'top', paraSpaceAfter: 14,
    })
  }

  // ── Slide 3: Key Themes ─────────────────────────────────────────────────────
  {
    const s = pptx.addSlide()
    addNavyHeader(s, 'Key Themes')

    s.addText(
      entry.themes.map(t => ({
        text: t,
        options: {
          bullet: { indent: 18 },
          color: DARK, fontSize: 16, fontFace: 'Calibri',
          paraSpaceAfter: 8,
        },
      })),
      { x: 0.6, y: 1.35, w: 12.1, h: 5.8, valign: 'top' }
    )
  }

  // ── Historical & Literary Context — split across 2 slides if needed ─────────
  {
    const paragraphs = entry.context.split('\n\n').filter(Boolean)
    // First slide: first 3 paragraphs; second slide: remainder (if any)
    const chunks: string[][] = [paragraphs.slice(0, 3)]
    if (paragraphs.length > 3) chunks.push(paragraphs.slice(3))

    chunks.forEach((chunk, idx) => {
      const s = pptx.addSlide()
      addNavyHeader(
        s,
        chunks.length > 1
          ? `Historical & Literary Context (${idx + 1}/${chunks.length})`
          : 'Historical & Literary Context'
      )
      const bullets = toSlideBullets(chunk.join(' '), 6)
      if (bullets.length > 0) {
        s.addText(
          bullets.map(b => ({
            text: b,
            options: {
              bullet: { indent: 18 },
              color: DARK, fontSize: 14, fontFace: 'Calibri',
              paraSpaceAfter: 7,
            },
          })),
          { x: 0.6, y: 1.35, w: 12.1, h: 5.8, valign: 'top' }
        )
      }
    })
  }

  // ── Commentary slides — one per section ─────────────────────────────────────
  for (const section of parseSections(entry.commentary)) {
    const s = pptx.addSlide()
    addNavyHeader(s, section.title)

    if (section.bullets.length > 0) {
      s.addText(
        section.bullets.map(b => ({
          text: b,
          options: {
            bullet: { indent: 18 },
            color: DARK, fontSize: 15, fontFace: 'Calibri',
            paraSpaceAfter: 8,
          },
        })),
        { x: 0.6, y: 1.35, w: 12.1, h: 5.8, valign: 'top' }
      )
    }
  }

  // ── Living the Gospel This Week ─────────────────────────────────────────────
  {
    const s = pptx.addSlide()
    addNavyHeader(s, 'Living the Gospel This Week')

    const bullets = parseApplicationBullets(entry.application)
    if (bullets.length > 0) {
      s.addText(
        bullets.map(b => ({
          text: b,
          options: {
            bullet: { indent: 18 },
            color: DARK, fontSize: 14, fontFace: 'Calibri',
            paraSpaceAfter: 7,
          },
        })),
        { x: 0.6, y: 1.35, w: 12.1, h: 5.8, valign: 'top' }
      )
    }
  }

  // ── Sources ─────────────────────────────────────────────────────────────────
  {
    const s = pptx.addSlide()
    addNavyHeader(s, 'Sources & Further Reading')

    s.addText(
      entry.sources.slice(0, 12).map(src => ({
        text: src.replace(/\*(.*?)\*/g, '$1'),
        options: {
          bullet: { indent: 18 },
          color: MUTED, fontSize: 11, fontFace: 'Calibri',
          paraSpaceAfter: 4,
        },
      })),
      { x: 0.6, y: 1.35, w: 12.1, h: 5.8, valign: 'top' }
    )
  }

  return pptx.write({ outputType: 'nodebuffer' }) as Promise<Buffer>
}
