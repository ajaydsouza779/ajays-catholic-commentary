import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const divisions = await prisma.churchDivision.findMany({
      include: {
        children: {
          orderBy: {
            year: 'asc'
          }
        },
        relatedPopes: {
          select: {
            id: true,
            regnalName: true,
            papacyStart: true,
            papacyEnd: true,
            papacyNumber: true
          }
        }
      },
      where: {
        parentId: null // Only get root divisions
      },
      orderBy: {
        year: 'asc'
      }
    })

    return NextResponse.json(divisions)
  } catch (error) {
    console.error('Error fetching church divisions:', error)
    return NextResponse.json(
      { error: 'Failed to fetch church divisions data' },
      { status: 500 }
    )
  }
}
