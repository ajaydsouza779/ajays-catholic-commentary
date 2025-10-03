import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    // Check authentication
    const session = await getServerSession(authOptions)
    if (!session?.user || (session.user as { role?: string })?.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Get analytics data
    const [
      totalPosts,
      publishedPosts,
      draftPosts,
      totalUsers,
      totalComments,
      totalPopes,
      totalDivisions,
      totalManuscripts
    ] = await Promise.all([
      prisma.post.count(),
      prisma.post.count({ where: { status: 'PUBLISHED' } }),
      prisma.post.count({ where: { status: 'DRAFT' } }),
      prisma.user.count(),
      prisma.comment.count(),
      prisma.pope.count(),
      prisma.churchDivision.count(),
      prisma.bibleManuscript.count()
    ])

    return NextResponse.json({
      totalPosts,
      publishedPosts,
      draftPosts,
      totalUsers,
      totalComments,
      totalPopes,
      totalDivisions,
      totalManuscripts
    })
  } catch (error) {
    console.error('Error fetching analytics:', error)
    return NextResponse.json(
      { error: 'Failed to fetch analytics' },
      { status: 500 }
    )
  }
}
