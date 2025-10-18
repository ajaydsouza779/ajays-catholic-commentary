// Optimized caching system for Ajay's Catholic Commentary
// Implements multi-level caching with TTL and invalidation

interface CacheEntry<T> {
  data: T;
  timestamp: number;
  ttl: number;
  hits: number;
}

interface CacheStats {
  hits: number;
  misses: number;
  size: number;
  memoryUsage: number;
}

class OptimizedCache {
  private cache = new Map<string, CacheEntry<any>>();
  private maxSize: number;
  private defaultTTL: number;
  private stats: CacheStats = {
    hits: 0,
    misses: 0,
    size: 0,
    memoryUsage: 0
  };

  constructor(maxSize: number = 1000, defaultTTL: number = 5 * 60 * 1000) {
    this.maxSize = maxSize;
    this.defaultTTL = defaultTTL;
  }

  set<T>(key: string, data: T, ttl?: number): void {
    const now = Date.now();
    const entryTTL = ttl || this.defaultTTL;

    // Remove expired entries if cache is full
    if (this.cache.size >= this.maxSize) {
      this.cleanup();
    }

    this.cache.set(key, {
      data,
      timestamp: now,
      ttl: entryTTL,
      hits: 0
    });

    this.updateStats();
  }

  get<T>(key: string): T | null {
    const entry = this.cache.get(key);
    
    if (!entry) {
      this.stats.misses++;
      return null;
    }

    const now = Date.now();
    if (now - entry.timestamp > entry.ttl) {
      this.cache.delete(key);
      this.stats.misses++;
      this.updateStats();
      return null;
    }

    entry.hits++;
    this.stats.hits++;
    return entry.data as T;
  }

  has(key: string): boolean {
    const entry = this.cache.get(key);
    if (!entry) return false;

    const now = Date.now();
    if (now - entry.timestamp > entry.ttl) {
      this.cache.delete(key);
      this.updateStats();
      return false;
    }

    return true;
  }

  delete(key: string): boolean {
    const deleted = this.cache.delete(key);
    this.updateStats();
    return deleted;
  }

  clear(): void {
    this.cache.clear();
    this.updateStats();
  }

  private cleanup(): void {
    const now = Date.now();
    const entries = Array.from(this.cache.entries());
    
    // Sort by hits (least used first) and timestamp (oldest first)
    entries.sort((a, b) => {
      const [keyA, entryA] = a;
      const [keyB, entryB] = b;
      
      if (entryA.hits !== entryB.hits) {
        return entryA.hits - entryB.hits;
      }
      return entryA.timestamp - entryB.timestamp;
    });

    // Remove least used entries
    const toRemove = Math.floor(this.maxSize * 0.1); // Remove 10% of cache
    for (let i = 0; i < toRemove && i < entries.length; i++) {
      this.cache.delete(entries[i][0]);
    }
  }

  private updateStats(): void {
    this.stats.size = this.cache.size;
    this.stats.memoryUsage = this.estimateMemoryUsage();
  }

  private estimateMemoryUsage(): number {
    let total = 0;
    for (const [key, entry] of this.cache.entries()) {
      total += key.length * 2; // Rough estimate for string length
      total += JSON.stringify(entry.data).length * 2;
      total += 100; // Overhead for entry object
    }
    return total;
  }

  getStats(): CacheStats {
    return { ...this.stats };
  }

  // Cache warming for critical data
  async warmCache(): Promise<void> {
    try {
      // Pre-load frequently accessed data
      const { PrismaClient } = await import('@prisma/client');
      const prisma = new PrismaClient();

      // Cache recent posts
      const recentPosts = await prisma.post.findMany({
        where: { status: 'PUBLISHED' },
        orderBy: { publishedAt: 'desc' },
        take: 10,
        include: {
          author: { select: { name: true, email: true } },
          categories: { include: { category: true } },
          tags: { include: { tag: true } }
        }
      });
      this.set('recent_posts', recentPosts, 10 * 60 * 1000); // 10 minutes

      // Cache categories
      const categories = await prisma.category.findMany({
        orderBy: { name: 'asc' }
      });
      this.set('categories', categories, 30 * 60 * 1000); // 30 minutes

      // Cache tags
      const tags = await prisma.tag.findMany({
        orderBy: { name: 'asc' }
      });
      this.set('tags', tags, 30 * 60 * 1000); // 30 minutes

      // Cache site settings
      const siteSettings = await prisma.siteSettings.findMany();
      const settingsMap = new Map(siteSettings.map(s => [s.key, s.value]));
      this.set('site_settings', settingsMap, 60 * 60 * 1000); // 1 hour

      await prisma.$disconnect();
    } catch (error) {
      console.error('Error warming cache:', error);
    }
  }
}

// Global cache instance
export const cache = new OptimizedCache(1000, 5 * 60 * 1000);

// Cache decorator for functions
export function cached<T extends (...args: any[]) => Promise<any>>(
  fn: T,
  keyGenerator?: (...args: Parameters<T>) => string,
  ttl?: number
): T {
  return (async (...args: Parameters<T>) => {
    const key = keyGenerator ? keyGenerator(...args) : `fn_${fn.name}_${JSON.stringify(args)}`;
    
    const cached = cache.get(key);
    if (cached !== null) {
      return cached;
    }

    const result = await fn(...args);
    cache.set(key, result, ttl);
    return result;
  }) as T;
}

// Cache invalidation helpers
export function invalidatePattern(pattern: string): void {
  const regex = new RegExp(pattern);
  for (const key of cache['cache'].keys()) {
    if (regex.test(key)) {
      cache.delete(key);
    }
  }
}

export function invalidatePost(postId: string): void {
  invalidatePattern(`post_${postId}`);
  invalidatePattern('recent_posts');
  invalidatePattern('posts_list');
}

export function invalidateUser(userId: string): void {
  invalidatePattern(`user_${userId}`);
}

export function invalidateComments(postId: string): void {
  invalidatePattern(`comments_${postId}`);
}

// Performance monitoring
export function getCachePerformance(): {
  hitRate: number;
  memoryUsage: number;
  size: number;
  stats: CacheStats;
} {
  const stats = cache.getStats();
  const hitRate = stats.hits / (stats.hits + stats.misses) || 0;
  
  return {
    hitRate: Math.round(hitRate * 100) / 100,
    memoryUsage: stats.memoryUsage,
    size: stats.size,
    stats
  };
}



