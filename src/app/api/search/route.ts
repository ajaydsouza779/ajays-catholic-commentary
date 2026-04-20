import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const query = searchParams.get('q')
    const type = searchParams.get('type') || 'posts' // posts, popes, divisions, manuscripts
    const limit = parseInt(searchParams.get('limit') || '20')
    const offset = parseInt(searchParams.get('offset') || '0')

    if (!query || query.trim().length < 2) {
      return NextResponse.json({ error: 'Query must be at least 2 characters long' }, { status: 400 })
    }

    const searchTerm = query.trim()

    switch (type) {
      case 'posts':
        return await searchPosts(searchTerm, limit, offset)
      case 'popes':
        return await searchPopes(searchTerm, limit, offset)
      case 'divisions':
        return await searchDivisions(searchTerm, limit, offset)
      case 'manuscripts':
        return await searchManuscripts(searchTerm, limit, offset)
      default:
        return NextResponse.json({ error: 'Invalid search type' }, { status: 400 })
    }
  } catch (error) {
    console.error('Search error:', error)
    return NextResponse.json(
      { error: 'Search failed' },
      { status: 500 }
    )
  }
}

async function searchPosts(query: string, limit: number, offset: number) {
  const posts = await prisma.post.findMany({
    where: {
      AND: [
        { status: 'PUBLISHED' },
        {
          OR: [
            { title: { contains: query, mode: 'insensitive' } },
            { content: { contains: query, mode: 'insensitive' } },
            { excerpt: { contains: query, mode: 'insensitive' } },
            {
              categories: {
                some: {
                  category: {
                    name: { contains: query, mode: 'insensitive' }
                  }
                }
              }
            },
            {
              tags: {
                some: {
                  tag: {
                    name: { contains: query, mode: 'insensitive' }
                  }
                }
              }
            }
          ]
        }
      ]
    },
    include: {
      author: {
        select: {
          name: true,
          email: true
        }
      },
      categories: {
        include: {
          category: true
        }
      },
      tags: {
        include: {
          tag: true
        }
      }
    },
    orderBy: {
      publishedAt: 'desc'
    },
    take: limit,
    skip: offset
  })

  return NextResponse.json({
    results: posts,
    total: posts.length,
    type: 'posts'
  })
}

async function searchPopes(query: string, limit: number, offset: number) {
  const popes = await prisma.pope.findMany({
    where: {
      OR: [
        { name: { contains: query, mode: 'insensitive' } },
        { regnalName: { contains: query, mode: 'insensitive' } },
        { birthName: { contains: query, mode: 'insensitive' } },
        { nationality: { contains: query, mode: 'insensitive' } },
        { biography: { contains: query, mode: 'insensitive' } }
      ]
    },
    include: {
      events: {
        take: 3,
        orderBy: {
          eventDate: 'desc'
        }
      },
      achievements: {
        take: 3,
        orderBy: {
          year: 'desc'
        }
      }
    },
    orderBy: {
      papacyNumber: 'desc'
    },
    take: limit,
    skip: offset
  })

  return NextResponse.json({
    results: popes,
    total: popes.length,
    type: 'popes'
  })
}

async function searchDivisions(query: string, limit: number, offset: number) {
  const divisions = await prisma.churchDivision.findMany({
    where: {
      OR: [
        { name: { contains: query, mode: 'insensitive' } },
        { description: { contains: query, mode: 'insensitive' } },
        { cause: { contains: query, mode: 'insensitive' } },
        { outcome: { contains: query, mode: 'insensitive' } }
      ]
    },
    include: {
      children: true,
      relatedPopes: {
        select: {
          id: true,
          regnalName: true,
          papacyNumber: true
        }
      }
    },
    orderBy: {
      year: 'desc'
    },
    take: limit,
    skip: offset
  })

  return NextResponse.json({
    results: divisions,
    total: divisions.length,
    type: 'divisions'
  })
}

async function searchManuscripts(query: string, limit: number, offset: number) {
  const manuscripts = await prisma.bibleManuscript.findMany({
    where: {
      OR: [
        { name: { contains: query, mode: 'insensitive' } },
        { description: { contains: query, mode: 'insensitive' } },
        { language: { contains: query, mode: 'insensitive' } },
        { location: { contains: query, mode: 'insensitive' } },
        { significance: { contains: query, mode: 'insensitive' } }
      ]
    },
    orderBy: {
      date: 'asc'
    },
    take: limit,
    skip: offset
  })

  return NextResponse.json({
    results: manuscripts,
    total: manuscripts.length,
    type: 'manuscripts'
  })
}
