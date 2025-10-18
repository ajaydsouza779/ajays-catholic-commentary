import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { getAllFeatureToggles, updateFeatureToggle, initializeFeatureToggles } from '@/lib/feature-toggles';

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session || (session.user as any)?.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const features = await getAllFeatureToggles();
    return NextResponse.json(features);
  } catch (error) {
    console.error('Error fetching features:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || (session.user as any)?.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { featureId, enabled } = await request.json();
    
    if (!featureId || typeof enabled !== 'boolean') {
      return NextResponse.json({ error: 'Invalid request data' }, { status: 400 });
    }

    const success = await updateFeatureToggle(featureId, enabled);
    
    if (success) {
      return NextResponse.json({ message: 'Feature updated successfully' });
    } else {
      return NextResponse.json({ error: 'Failed to update feature' }, { status: 500 });
    }
  } catch (error) {
    console.error('Error updating feature:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST() {
  try {
    const session = await getServerSession(authOptions);
    if (!session || (session.user as any)?.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await initializeFeatureToggles();
    return NextResponse.json({ message: 'Feature toggles initialized successfully' });
  } catch (error) {
    console.error('Error initializing features:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}



