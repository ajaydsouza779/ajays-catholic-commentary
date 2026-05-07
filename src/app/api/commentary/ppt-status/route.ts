import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/lib/auth'
import sundayCommentaries from '@/lib/lectionary/sundayCommentaries'
import { getPPTCloudinaryUrl } from '@/lib/cloudinary'

// Returns curated-PPT status for all commentary entries (admin only)
export async function GET() {
  const session = await getServerSession(authOptions)
  if (!session || (session.user as { role?: string }).role !== 'ADMIN') {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  const statuses = await Promise.all(
    sundayCommentaries.map(async entry => ({
      id: entry.id,
      sundayName: entry.sundayName,
      gospelRef: entry.gospelRef,
      date: entry.date,
      cycle: entry.cycle,
      sundaySlug: entry.sundaySlug,
      curatedUrl: await getPPTCloudinaryUrl(entry.id),
    }))
  )

  return NextResponse.json(statuses)
}
