import { NextRequest, NextResponse } from 'next/server'
import sundayCommentaries from '@/lib/lectionary/sundayCommentaries'
import { generateCommentaryPPTBuffer } from '@/lib/generateCommentaryPPT'

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const entry = sundayCommentaries.find(e => e.id === id)
  if (!entry) return NextResponse.json({ error: 'Not found' }, { status: 404 })

  const displayDate = new Date(entry.date + 'T12:00:00').toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  })

  const buffer = await generateCommentaryPPTBuffer(entry, displayDate)

  return new NextResponse(buffer as unknown as BodyInit, {
    headers: {
      'Content-Type': 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
      'Content-Disposition': `attachment; filename="${entry.id}-${entry.sundaySlug}.pptx"`,
    },
  })
}
