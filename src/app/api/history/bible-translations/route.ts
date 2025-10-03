import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const translations = await prisma.bibleTranslation.findMany({
      orderBy: {
        year: 'asc'
      }
    })

    return NextResponse.json(translations)
  } catch (error) {
    console.error('Error fetching Bible translations:', error)
    return NextResponse.json(
      { error: 'Failed to fetch Bible translations data' },
      { status: 500 }
    )
  }
}
