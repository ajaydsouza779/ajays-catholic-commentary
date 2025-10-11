// Performance monitoring utilities

interface PerformanceMetric {
  name: string
  startTime: number
  endTime?: number
  duration?: number
}

class PerformanceMonitor {
  private metrics = new Map<string, PerformanceMetric>()

  start(name: string): void {
    this.metrics.set(name, {
      name,
      startTime: performance.now()
    })
  }

  end(name: string): number | null {
    const metric = this.metrics.get(name)
    if (!metric) return null

    const endTime = performance.now()
    const duration = endTime - metric.startTime

    metric.endTime = endTime
    metric.duration = duration

    // Log slow operations
    if (duration > 1000) {
      console.warn(`Slow operation detected: ${name} took ${duration.toFixed(2)}ms`)
    }

    return duration
  }

  getMetric(name: string): PerformanceMetric | null {
    return this.metrics.get(name) || null
  }

  getAllMetrics(): PerformanceMetric[] {
    return Array.from(this.metrics.values())
  }

  clear(): void {
    this.metrics.clear()
  }
}

export const perfMonitor = new PerformanceMonitor()

// Web Vitals monitoring
export function measureWebVitals() {
  if (typeof window === 'undefined') return

  // First Contentful Paint
  new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (entry.name === 'first-contentful-paint') {
        console.log('FCP:', entry.startTime)
      }
    }
  }).observe({ entryTypes: ['paint'] })

  // Largest Contentful Paint
  new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      console.log('LCP:', entry.startTime)
    }
  }).observe({ entryTypes: ['largest-contentful-paint'] })

  // First Input Delay
  new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      console.log('FID:', (entry as unknown as {processingStart: number}).processingStart - entry.startTime)
    }
  }).observe({ entryTypes: ['first-input'] })

  // Cumulative Layout Shift
  new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (!(entry as unknown as {hadRecentInput: boolean}).hadRecentInput) {
        console.log('CLS:', (entry as unknown as {value: number}).value)
      }
    }
  }).observe({ entryTypes: ['layout-shift'] })
}

// Image optimization utilities
export function getOptimizedImageUrl(
  src: string,
  width?: number,
  height?: number,
  quality: number = 75
): string {
  // If it's a Cloudinary URL, add optimization parameters
  if (src.includes('cloudinary.com')) {
    const baseUrl = src.split('/upload/')[0] + '/upload/'
    const imagePath = src.split('/upload/')[1]
    
    const transformations = []
    if (width) transformations.push(`w_${width}`)
    if (height) transformations.push(`h_${height}`)
    transformations.push(`q_${quality}`)
    transformations.push('f_auto')
    
    return `${baseUrl}${transformations.join(',')}/${imagePath}`
  }
  
  return src
}

// Lazy loading utility
export function createIntersectionObserver(
  callback: (entries: IntersectionObserverEntry[]) => void,
  options: IntersectionObserverInit = {}
): IntersectionObserver | null {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
    return null
  }

  return new IntersectionObserver(callback, {
    rootMargin: '50px',
    threshold: 0.1,
    ...options
  })
}

// Debounce utility for search and other frequent operations
export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null

  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

// Throttle utility for scroll events
export function throttle<T extends (...args: unknown[]) => unknown>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean

  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}
