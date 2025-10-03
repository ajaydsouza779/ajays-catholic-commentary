import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const manuscripts = await prisma.bibleManuscript.findMany({
      orderBy: {
        date: 'asc'
      }
    })

    return NextResponse.json(manuscripts)
  } catch (error) {
    console.error('Error fetching Bible manuscripts:', error)
    return NextResponse.json(
      { error: 'Failed to fetch Bible manuscripts data' },
      { status: 500 }
    )
  }
}
