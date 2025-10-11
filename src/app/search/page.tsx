'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { Search, BookOpen, Users, AlertTriangle, FileText, Calendar } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

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
  featuredImage?: string
  author?: {
    name: string
    email: string
  }
  categories?: Array<{
    category: {
      id: string
      name: string
    }
  }>
}

function SearchPageContent() {
  const searchParams = useSearchParams()
  const [query, setQuery] = useState(searchParams.get('q') || '')
  const [results, setResults] = useState<SearchResult[]>([])
  const [loading, setLoading] = useState(false)
  const [selectedType, setSelectedType] = useState('all')
  const [totalResults, setTotalResults] = useState(0)

  useEffect(() => {
    if (query.trim()) {
      performSearch()
    }
  }, [query, selectedType])

  const performSearch = async () => {
    if (query.length < 2) {
      setResults([])
      setTotalResults(0)
      return
    }

    setLoading(true)
    try {
      const searchTypes = selectedType === 'all' 
        ? ['posts', 'popes', 'divisions', 'manuscripts']
        : [selectedType]

      const allResults: SearchResult[] = []
      let total = 0

      for (const type of searchTypes) {
        const response = await fetch(`/api/search?q=${encodeURIComponent(query)}&type=${type}&limit=20`)
        if (response.ok) {
          const data = await response.json()
          allResults.push(...data.results)
          total += data.total
        }
      }

      // Sort results by relevance (posts first, then by date/importance)
      allResults.sort((a, b) => {
        if (a.type === 'posts' && b.type !== 'posts') return -1
        if (b.type === 'posts' && a.type !== 'posts') return 1
        if (a.publishedAt && b.publishedAt) {
          return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
        }
        return 0
      })

      setResults(allResults)
      setTotalResults(total)
    } catch (error) {
      console.error('Search error:', error)
    } finally {
      setLoading(false)
    }
  }

  const getResultIcon = (type: string) => {
    switch (type) {
      case 'posts': return <BookOpen className="w-5 h-5" />
      case 'popes': return <Users className="w-5 h-5" />
      case 'divisions': return <AlertTriangle className="w-5 h-5" />
      case 'manuscripts': return <FileText className="w-5 h-5" />
      default: return <Search className="w-5 h-5" />
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

  const highlightText = (text: string, query: string) => {
    if (!query) return text
    const regex = new RegExp(`(${query})`, 'gi')
    return text.replace(regex, '<mark class="bg-amber-200 px-1 rounded">$1</mark>')
  }

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Search Results</h1>
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search posts, popes, church history..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
              />
            </div>
          </div>
        </div>

        {/* Search Filters */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-2 bg-white rounded-lg p-1 shadow-sm">
            {['all', 'posts', 'popes', 'divisions', 'manuscripts'].map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-4 py-2 text-sm rounded-md transition-colors ${
                  selectedType === type
                    ? 'bg-amber-100 text-amber-800'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Results */}
        {loading ? (
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Searching...</p>
          </div>
        ) : query.length >= 2 ? (
          <div>
            <div className="mb-6">
              <p className="text-gray-600">
                {totalResults} result{totalResults !== 1 ? 's' : ''} found for &quot;{query}&quot;
              </p>
            </div>

            {results.length > 0 ? (
              <div className="space-y-6">
                {results.map((result) => (
                  <div key={result.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                    <Link href={getResultUrl(result)}>
                      <div className="flex items-start space-x-4">
                        {/* Icon */}
                        <div className="flex-shrink-0 mt-1">
                          <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                            {getResultIcon(result.type)}
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="text-xl font-semibold text-gray-900">
                              <span dangerouslySetInnerHTML={{ 
                                __html: highlightText(getResultTitle(result), query) 
                              }} />
                            </h3>
                            <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full capitalize">
                              {result.type}
                            </span>
                          </div>

                          <p className="text-gray-600 mb-3 line-clamp-3">
                            <span dangerouslySetInnerHTML={{ 
                              __html: highlightText(getResultDescription(result), query) 
                            }} />
                          </p>

                          {/* Meta information */}
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            {result.publishedAt && (
                              <div className="flex items-center space-x-1">
                                <Calendar className="w-4 h-4" />
                                <span>{new Date(result.publishedAt).toLocaleDateString()}</span>
                              </div>
                            )}
                            {result.papacyNumber && (
                              <span>Pope #{result.papacyNumber}</span>
                            )}
                            {result.year && (
                              <span>{result.year}</span>
                            )}
                            {result.author && (
                              <span>By {result.author.name}</span>
                            )}
                          </div>

                          {/* Categories for posts */}
                          {result.categories && result.categories.length > 0 && (
                            <div className="flex flex-wrap gap-2 mt-3">
                              {result.categories.map(({ category }) => (
                                <span
                                  key={category.id}
                                  className="px-2 py-1 bg-amber-100 text-amber-800 text-xs rounded-full"
                                >
                                  {category.name}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>

                        {/* Featured Image for posts */}
                        {result.featuredImage && (
                          <div className="flex-shrink-0">
                            <div className="w-24 h-24 relative rounded-lg overflow-hidden">
                              <Image
                                src={result.featuredImage}
                                alt={getResultTitle(result)}
                                fill
                                className="object-cover"
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Search className="h-16 w-16 mx-auto mb-4 text-gray-400" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No results found</h3>
                <p className="text-gray-600 mb-4">
                  We couldn&apos;t find anything matching &quot;{query}&quot;
                </p>
                <div className="text-sm text-gray-500">
                  <p>Try:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Using different keywords</li>
                    <li>Checking your spelling</li>
                    <li>Searching in different categories</li>
                    <li>Using more general terms</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-12">
            <Search className="h-16 w-16 mx-auto mb-4 text-gray-400" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Start your search</h3>
            <p className="text-gray-600">
              Enter at least 2 characters to search through posts, papal history, church divisions, and Bible manuscripts.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchPageContent />
    </Suspense>
  )
}
