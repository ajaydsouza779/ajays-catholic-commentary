import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/lib/auth'
import sundayCommentaries from '@/lib/lectionary/sundayCommentaries'
import { generateCommentaryPPTBuffer } from '@/lib/generateCommentaryPPT'
import {
  getPPTCloudinaryUrl,
  uploadPPTToCloudinary,
  deletePPTFromCloudinary,
} from '@/lib/cloudinary'

async function getEntry(id: string) {
  return sundayCommentaries.find(e => e.id === id) ?? null
}

// GET — serve curated Cloudinary PPT if available, fall back to auto-generated
export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const entry = await getEntry(id)
  if (!entry) return NextResponse.json({ error: 'Not found' }, { status: 404 })

  const fileName = `${entry.id}-${entry.sundaySlug}.pptx`
  const pptHeaders = {
    'Content-Type': 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    'Content-Disposition': `attachment; filename="${fileName}"`,
  }

  // 1. Try curated file from Cloudinary
  const curatedUrl = await getPPTCloudinaryUrl(entry.id)
  if (curatedUrl) {
    const upstream = await fetch(curatedUrl)
    if (upstream.ok) {
      const buffer = await upstream.arrayBuffer()
      return new NextResponse(buffer as unknown as BodyInit, { headers: pptHeaders })
    }
  }

  // 2. Fall back to auto-generated
  const displayDate = new Date(entry.date + 'T12:00:00').toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  })
  const buffer = await generateCommentaryPPTBuffer(entry, displayDate)
  return new NextResponse(buffer as unknown as BodyInit, { headers: pptHeaders })
}

// POST — admin only: upload a curated .pptx
export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await getServerSession(authOptions)
  if (!session || (session.user as { role?: string }).role !== 'ADMIN') {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  const { id } = await params
  const entry = await getEntry(id)
  if (!entry) return NextResponse.json({ error: 'Not found' }, { status: 404 })

  const formData = await req.formData()
  const file = formData.get('file') as File | null
  if (!file || !file.name.endsWith('.pptx')) {
    return NextResponse.json({ error: 'A .pptx file is required' }, { status: 400 })
  }

  const buffer = Buffer.from(await file.arrayBuffer())
  try {
    const url = await uploadPPTToCloudinary(buffer, entry.id)
    return NextResponse.json({ url })
  } catch (err) {
    console.error('[PPT upload] Cloudinary error:', err)
    const msg = err instanceof Error ? err.message : 'Upload failed'
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}

// DELETE — admin only: remove curated file (reverts to auto-generated)
export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await getServerSession(authOptions)
  if (!session || (session.user as { role?: string }).role !== 'ADMIN') {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  const { id } = await params
  const entry = await getEntry(id)
  if (!entry) return NextResponse.json({ error: 'Not found' }, { status: 404 })

  try {
    await deletePPTFromCloudinary(entry.id)
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[PPT delete] Cloudinary error:', err)
    const msg = err instanceof Error ? err.message : 'Delete failed'
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}
