'use client'

import { useEffect } from 'react'
import { measureWebVitals, perfMonitor } from '@/lib/performance'

export default function PerformanceMonitor() {
  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV === 'production') {
      measureWebVitals()
    }

    // Monitor page load performance
    perfMonitor.start('page-load')
    
    const handleLoad = () => {
      perfMonitor.end('page-load')
    }

    if (document.readyState === 'complete') {
      handleLoad()
    } else {
      window.addEventListener('load', handleLoad)
    }

    return () => {
      window.removeEventListener('load', handleLoad)
    }
  }, [])

  return null
}
