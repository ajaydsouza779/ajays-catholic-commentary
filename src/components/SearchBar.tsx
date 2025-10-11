'use client'

import { useState, useEffect, useRef } from 'react'
import { Search, X, Clock, BookOpen, Users, AlertTriangle, FileText } from 'lucide-react'
import Link from 'next/link'

interface SearchResult {
  id: string
  title?: string
  name?: string
  regnalName?: string
  slug?: string
  excerpt?: string
  description?: string
  publishedAt?: string
  papacyNumber?: number
  year?: number
  type: string
}

interface SearchResponse {
  results: SearchResult[]
  total: number
  type: string
}

export default function SearchBar() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [loading, setLoading] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const [selectedType, setSelectedType] = useState('posts')
  const searchRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Close search results when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  // Search function with debouncing
  useEffect(() => {
    if (query.length < 2) {
      setResults([])
      setShowResults(false)
      return
    }

    const timeoutId = setTimeout(() => {
      performSearch()
    }, 300)

    return () => clearTimeout(timeoutId)
  }, [query, selectedType])

  const performSearch = async () => {
    setLoading(true)
    try {
      const response = await fetch(`/api/search?q=${encodeURIComponent(query)}&type=${selectedType}&limit=10`)
      if (response.ok) {
        const data: SearchResponse = await response.json()
        setResults(data.results)
        setShowResults(true)
      }
    } catch (error) {
      console.error('Search error:', error)
    } finally {
      setLoading(false)
    }
  }

  const getResultIcon = (type: string) => {
    switch (type) {
      case 'posts': return <BookOpen className="w-4 h-4" />
      case 'popes': return <Users className="w-4 h-4" />
      case 'divisions': return <AlertTriangle className="w-4 h-4" />
      case 'manuscripts': return <FileText className="w-4 h-4" />
      default: return <Search className="w-4 h-4" />
    }
  }

  const getResultUrl = (result: SearchResult) => {
    switch (result.type) {
      case 'posts':
        return `/posts/${result.slug}`
      case 'popes':
        return `/history/papal-timeline#pope-${result.id}`
      case 'divisions':
        return `/history/church-divisions#division-${result.id}`
      case 'manuscripts':
        return `/history/bible-origin#manuscript-${result.id}`
      default:
        return '#'
    }
  }

  const getResultTitle = (result: SearchResult) => {
    return result.title || result.name || result.regnalName || 'Untitled'
  }

  const getResultDescription = (result: SearchResult) => {
    return result.excerpt || result.description || ''
  }

  const clearSearch = () => {
    setQuery('')
    setResults([])
    setShowResults(false)
    inputRef.current?.focus()
  }

  return (
    <div ref={searchRef} className="relative w-full max-w-2xl">
      {/* Search Input */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => query.length >= 2 && setShowResults(true)}
          placeholder="Search posts, popes, church history..."
          className="block w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-amber-500 focus:border-amber-500"
        />
        {query && (
          <button
            onClick={clearSearch}
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
          >
            <X className="h-5 w-5 text-gray-400 hover:text-gray-600" />
          </button>
        )}
      </div>

      {/* Search Type Selector */}
      <div className="mt-2 flex space-x-2">
        {['posts', 'popes', 'divisions', 'manuscripts'].map((type) => (
          <button
            key={type}
            onClick={() => setSelectedType(type)}
            className={`px-3 py-1 text-xs rounded-full transition-colors ${
              selectedType === type
                ? 'bg-amber-100 text-amber-800'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>

      {/* Search Results */}
      {showResults && (
        <div className="absolute z-50 w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg max-h-96 overflow-y-auto">
          {loading ? (
            <div className="p-4 text-center">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-amber-600 mx-auto"></div>
              <p className="mt-2 text-sm text-gray-600">Searching...</p>
            </div>
          ) : results.length > 0 ? (
            <div className="py-2">
              {results.map((result) => (
                <Link
                  key={result.id}
                  href={getResultUrl(result)}
                  className="block px-4 py-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0"
                  onClick={() => setShowResults(false)}
                >
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-1">
                      {getResultIcon(result.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-medium text-gray-900 truncate">
                        {getResultTitle(result)}
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {getResultDescription(result)}
                      </p>
                      <div className="mt-1 flex items-center space-x-2 text-xs text-gray-500">
                        <span className="capitalize">{result.type}</span>
                        {result.publishedAt && (
                          <>
                            <span>•</span>
                            <span>{new Date(result.publishedAt).toLocaleDateString()}</span>
                          </>
                        )}
                        {result.papacyNumber && (
                          <>
                            <span>•</span>
                            <span>Pope #{result.papacyNumber}</span>
                          </>
                        )}
                        {result.year && (
                          <>
                            <span>•</span>
                            <span>{result.year}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : query.length >= 2 ? (
            <div className="p-4 text-center text-gray-600">
              <Search className="h-8 w-8 mx-auto mb-2 text-gray-400" />
              <p className="text-sm">No results found for &quot;{query}&quot;</p>
              <p className="text-xs text-gray-500 mt-1">Try different keywords or search type</p>
            </div>
          ) : null}
        </div>
      )}
    </div>
  )
}
