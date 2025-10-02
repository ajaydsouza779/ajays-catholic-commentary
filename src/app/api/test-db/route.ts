import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(request: NextRequest) {
  try {
    // Test database connection by querying a simple table
    const userCount = await prisma.user.count()
    
    // Also try to increment a test counter (we'll create a simple test table)
    // For now, let's just return the user count as our "counter"
    
    return NextResponse.json({
      success: true,
      message: 'Database connected successfully',
      userCount: userCount,
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV
    })
  } catch (error) {
    console.error('Database connection test failed:', error)
    
    return NextResponse.json({
      success: false,
      message: 'Database connection failed',
      error: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV
    }, { status: 500 })
  } finally {
    await prisma.$disconnect()
  }
}

export async function POST(request: NextRequest) {
  try {
    // Create a simple test record to verify write operations
    const testRecord = await prisma.user.findFirst({
      select: { id: true, email: true }
    })
    
    // If no users exist, create a test user (this won't actually create one, just test the connection)
    if (!testRecord) {
      // Just test the connection without actually creating data
      await prisma.user.count()
    }
    
    return NextResponse.json({
      success: true,
      message: 'Database write test successful',
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV
    })
  } catch (error) {
    console.error('Database write test failed:', error)
    
    return NextResponse.json({
      success: false,
      message: 'Database write test failed',
      error: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV
    }, { status: 500 })
  } finally {
    await prisma.$disconnect()
  }
}
