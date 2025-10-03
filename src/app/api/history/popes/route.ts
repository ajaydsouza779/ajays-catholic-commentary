import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const popes = await prisma.pope.findMany({
      include: {
        events: {
          orderBy: {
            eventDate: 'asc'
          }
        },
        achievements: {
          orderBy: {
            year: 'desc'
          }
        }
      },
      orderBy: {
        papacyNumber: 'desc'
      }
    })

    return NextResponse.json(popes)
  } catch (error) {
    console.error('Error fetching popes:', error)
    return NextResponse.json(
      { error: 'Failed to fetch papal data' },
      { status: 500 }
    )
  }
}
