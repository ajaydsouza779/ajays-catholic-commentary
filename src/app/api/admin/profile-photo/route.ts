import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user || (session.user as { role?: string }).role !== 'ADMIN') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const profilePhoto = await prisma.siteSettings.findUnique({
      where: { key: 'profile_photo' }
    })

    return NextResponse.json({
      success: true,
      photo: profilePhoto?.value || null
    })
  } catch (error) {
    console.error('Error fetching profile photo:', error)
    return NextResponse.json({ error: 'Failed to fetch profile photo' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user || (session.user as { role?: string }).role !== 'ADMIN') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { photo } = await request.json()

    if (!photo || typeof photo !== 'string') {
      return NextResponse.json({ error: 'Invalid photo data' }, { status: 400 })
    }

    // Validate base64 image format
    if (!photo.startsWith('data:image/')) {
      return NextResponse.json({ error: 'Invalid image format' }, { status: 400 })
    }

    // Upsert the profile photo setting
    await prisma.siteSettings.upsert({
      where: { key: 'profile_photo' },
      update: { 
        value: photo,
        description: 'Author profile photo (base64 encoded)'
      },
      create: {
        key: 'profile_photo',
        value: photo,
        description: 'Author profile photo (base64 encoded)'
      }
    })

    return NextResponse.json({
      success: true,
      message: 'Profile photo updated successfully'
    })
  } catch (error) {
    console.error('Error updating profile photo:', error)
    return NextResponse.json({ error: 'Failed to update profile photo' }, { status: 500 })
  }
}
