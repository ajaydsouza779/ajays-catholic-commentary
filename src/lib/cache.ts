// Simple in-memory cache for API responses
class MemoryCache {
  private cache = new Map<string, { data: unknown; timestamp: number; ttl: number }>()

  set(key: string, data: unknown, ttl: number = 300000) { // 5 minutes default
    this.cache.set(key, {
      data,
      timestamp: Date.now(),
      ttl
    })
  }

  get(key: string): unknown | null {
    const item = this.cache.get(key)
    if (!item) return null

    if (Date.now() - item.timestamp > item.ttl) {
      this.cache.delete(key)
      return null
    }

    return item.data
  }

  delete(key: string) {
    this.cache.delete(key)
  }

  clear() {
    this.cache.clear()
  }

  // Clean up expired entries
  cleanup() {
    const now = Date.now()
    for (const [key, item] of this.cache.entries()) {
      if (now - item.timestamp > item.ttl) {
        this.cache.delete(key)
      }
    }
  }
}

export const cache = new MemoryCache()

// Clean up cache every 10 minutes
if (typeof window !== 'undefined') {
  setInterval(() => {
    cache.cleanup()
  }, 600000)
}

// Cache keys
export const CACHE_KEYS = {
  POSTS: 'posts',
  CATEGORIES: 'categories',
  TAGS: 'tags',
  POPES: 'popes',
  DIVISIONS: 'divisions',
  MANUSCRIPTS: 'manuscripts',
  TRANSLATIONS: 'translations',
  ANALYTICS: 'analytics'
} as const

// Cache TTL in milliseconds
export const CACHE_TTL = {
  SHORT: 60000,    // 1 minute
  MEDIUM: 300000,  // 5 minutes
  LONG: 1800000,   // 30 minutes
  VERY_LONG: 3600000 // 1 hour
} as const
