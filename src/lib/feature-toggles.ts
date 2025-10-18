// Feature Toggle System for Ajay's Catholic Commentary
// Allows admin to enable/disable features without code deployment

export interface FeatureToggle {
  id: string;
  name: string;
  description: string;
  enabled: boolean;
  category: 'UI' | 'FUNCTIONALITY' | 'EXPERIMENTAL' | 'ADMIN';
  dependencies?: string | null;
  createdAt: Date;
  updatedAt: Date;
}

// Default feature toggles
export const DEFAULT_FEATURES: Omit<FeatureToggle, 'enabled' | 'createdAt' | 'updatedAt'>[] = [
  {
    id: 'guest-comments',
    name: 'Guest Comments',
    description: 'Allow visitors to comment without creating an account',
    category: 'FUNCTIONALITY'
  },
  {
    id: 'advanced-search',
    name: 'Advanced Search',
    description: 'Enhanced search with filters and categories',
    category: 'FUNCTIONALITY'
  },
  {
    id: 'dark-mode',
    name: 'Dark Mode',
    description: 'Allow users to switch between light and dark themes',
    category: 'UI'
  },
  {
    id: 'newsletter-signup',
    name: 'Newsletter Signup',
    description: 'Email newsletter subscription feature',
    category: 'FUNCTIONALITY'
  },
  {
    id: 'social-sharing',
    name: 'Social Sharing',
    description: 'Share posts on social media platforms',
    category: 'FUNCTIONALITY'
  },
  {
    id: 'reading-progress',
    name: 'Reading Progress',
    description: 'Show reading progress bar on long posts',
    category: 'UI'
  },
  {
    id: 'related-posts',
    name: 'Related Posts',
    description: 'Show related posts at the end of articles',
    category: 'FUNCTIONALITY'
  },
  {
    id: 'print-friendly',
    name: 'Print Friendly',
    description: 'Optimized print layout for posts',
    category: 'UI'
  },
  {
    id: 'admin-analytics',
    name: 'Admin Analytics',
    description: 'Advanced analytics dashboard for admins',
    category: 'ADMIN'
  },
  {
    id: 'content-moderation',
    name: 'Content Moderation',
    description: 'AI-powered content moderation for comments',
    category: 'ADMIN'
  },
  {
    id: 'seo-optimization',
    name: 'SEO Optimization',
    description: 'Advanced SEO features and meta tags',
    category: 'FUNCTIONALITY'
  },
  {
    id: 'performance-monitoring',
    name: 'Performance Monitoring',
    description: 'Real-time performance monitoring and alerts',
    category: 'ADMIN'
  }
];

// Feature toggle cache (in-memory for performance)
let featureCache: Map<string, boolean> = new Map();
let cacheExpiry: number = 0;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

export async function getFeatureToggle(featureId: string): Promise<boolean> {
  // Check cache first
  if (Date.now() < cacheExpiry && featureCache.has(featureId)) {
    return featureCache.get(featureId)!;
  }

  try {
    // Fetch from database
    const { PrismaClient } = await import('@prisma/client');
    const prisma = new PrismaClient();
    
    const feature = await prisma.featureToggle.findUnique({
      where: { id: featureId },
      select: { enabled: true }
    });
    
    await prisma.$disconnect();
    
    const isEnabled = feature?.enabled ?? false;
    
    // Update cache
    featureCache.set(featureId, isEnabled);
    cacheExpiry = Date.now() + CACHE_DURATION;
    
    return isEnabled;
  } catch (error) {
    console.error(`Error fetching feature toggle ${featureId}:`, error);
    // Return false as safe default
    return false;
  }
}

export async function getAllFeatureToggles(): Promise<FeatureToggle[]> {
  try {
    const { PrismaClient } = await import('@prisma/client');
    const prisma = new PrismaClient();
    
    const features = await prisma.featureToggle.findMany({
      orderBy: [
        { category: 'asc' },
        { name: 'asc' }
      ]
    });
    
    await prisma.$disconnect();
    return features;
  } catch (error) {
    console.error('Error fetching feature toggles:', error);
    return [];
  }
}

export async function updateFeatureToggle(
  featureId: string, 
  enabled: boolean
): Promise<boolean> {
  try {
    const { PrismaClient } = await import('@prisma/client');
    const prisma = new PrismaClient();
    
    await prisma.featureToggle.upsert({
      where: { id: featureId },
      update: { enabled },
      create: {
        id: featureId,
        name: featureId,
        description: '',
        enabled,
        category: 'FUNCTIONALITY'
      }
    });
    
    await prisma.$disconnect();
    
    // Clear cache
    featureCache.clear();
    cacheExpiry = 0;
    
    return true;
  } catch (error) {
    console.error(`Error updating feature toggle ${featureId}:`, error);
    return false;
  }
}

export async function initializeFeatureToggles(): Promise<void> {
  try {
    const { PrismaClient } = await import('@prisma/client');
    const prisma = new PrismaClient();
    
    for (const feature of DEFAULT_FEATURES) {
      await prisma.featureToggle.upsert({
        where: { id: feature.id },
        update: {},
        create: {
          id: feature.id,
          name: feature.name,
          description: feature.description,
          category: feature.category,
          enabled: false, // Start with all features disabled
          dependencies: feature.dependencies
        }
      });
    }
    
    await prisma.$disconnect();
    console.log('✅ Feature toggles initialized');
  } catch (error) {
    console.error('Error initializing feature toggles:', error);
  }
}

// Utility function to check if feature is enabled
export async function isFeatureEnabled(featureId: string): Promise<boolean> {
  return await getFeatureToggle(featureId);
}



