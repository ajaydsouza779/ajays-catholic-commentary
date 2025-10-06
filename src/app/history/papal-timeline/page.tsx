'use client'

import { useState, useEffect } from 'react'
import { Calendar, MapPin, Award, BookOpen, Users, Clock } from 'lucide-react'

interface Pope {
  id: string
  name: string
  regnalName: string
  birthName?: string
  birthDate?: string
  deathDate?: string
  papacyStart: string
  papacyEnd?: string
  papacyNumber: number
  nationality?: string
  previousOffice?: string
  biography?: string
  imageUrl?: string
  historicalContext?: string
  references?: string
  isCurrent: boolean
  events: PapalEvent[]
  achievements: PapalAchievement[]
}

interface PapalEvent {
  id: string
  title: string
  description: string
  eventDate: string
  eventType: string
  location?: string
  significance?: string
  imageUrl?: string
}

interface PapalAchievement {
  id: string
  title: string
  description: string
  category: string
  year?: number
  significance?: string
  imageUrl?: string
}

export default function PapalTimelinePage() {
  const [popes, setPopes] = useState<Pope[]>([])
  const [selectedPope, setSelectedPope] = useState<Pope | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [pipelineStartIndex, setPipelineStartIndex] = useState(0)
  const pipelinePageSize = 15

  useEffect(() => {
    fetchPopes()
  }, [])

  const fetchPopes = async () => {
    try {
      const response = await fetch('/api/history/popes')
      if (!response.ok) {
        throw new Error('Failed to fetch papal data')
      }
      const data = await response.json()
      setPopes(data)
      if (data.length > 0) {
        setSelectedPope(data[0]) // Select first pope by default
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  const formatDate = (dateString: string) => {
    const d = new Date(dateString)
    const year = d.getUTCFullYear()
    const month = d.getUTCMonth()
    const day = d.getUTCDate()
    // If this is a synthesized historical date (Jan 1), show year only
    if (day === 1 && month === 0) {
      return `${year} AD`
    }
    return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  }

  const formatYearOnly = (dateString: string) => {
    const d = new Date(dateString)
    const year = d.getUTCFullYear()
    return `${year} AD`
  }

  const getEventTypeIcon = (eventType: string) => {
    switch (eventType) {
      case 'ELECTION': return <Users className="w-4 h-4" />
      case 'CORONATION': return <Award className="w-4 h-4" />
      case 'CANONIZATION': return <BookOpen className="w-4 h-4" />
      case 'COUNCIL': return <Users className="w-4 h-4" />
      case 'ENCYCLICAL': return <BookOpen className="w-4 h-4" />
      case 'TRAVEL': return <MapPin className="w-4 h-4" />
      default: return <Clock className="w-4 h-4" />
    }
  }

  const getEventTypeColor = (eventType: string) => {
    switch (eventType) {
      case 'ELECTION': return 'bg-blue-100 text-blue-800'
      case 'CORONATION': return 'bg-purple-100 text-purple-800'
      case 'CANONIZATION': return 'bg-green-100 text-green-800'
      case 'COUNCIL': return 'bg-orange-100 text-orange-800'
      case 'ENCYCLICAL': return 'bg-indigo-100 text-indigo-800'
      case 'TRAVEL': return 'bg-teal-100 text-teal-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  if (loading) {
    return (
      <div className="py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading papal timeline...</p>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
              <p className="font-bold">Error loading papal timeline</p>
              <p>{error}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            History of the Chair of St. Peter
          </h1>
        </div>

        {/* Papal Pipeline */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Papal Succession: From St. Peter to Today</h2>
          <div className="overflow-x-auto">
            <div className="flex items-center space-x-2 min-w-max">
              {/* Prev page control */}
              {pipelineStartIndex > 0 && (
                <button
                  aria-label="Show previous"
                  className="flex-shrink-0 px-3 py-3 rounded-lg text-sm font-medium transition-colors bg-gray-100 text-gray-700 hover:bg-gray-200 border-2 border-transparent"
                  onClick={() => setPipelineStartIndex(Math.max(0, pipelineStartIndex - pipelinePageSize))}
                >
                  <span className="mr-1">«</span> Show previous
                </button>
              )}

              {popes
                .slice(pipelineStartIndex, pipelineStartIndex + pipelinePageSize)
                .map((pope) => (
                <button
                  key={pope.id}
                  onClick={() => setSelectedPope(pope)}
                  className={`flex-shrink-0 px-3 py-3 rounded-lg text-sm font-medium transition-colors min-w-[100px] max-w-[120px] ${
                    selectedPope?.id === pope.id
                      ? 'bg-amber-100 text-amber-800 border-2 border-amber-300'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border-2 border-transparent'
                  }`}
                >
                  <div className="text-center">
                    <div className="font-bold text-sm leading-tight break-words">{pope.regnalName}</div>
                    <div className="text-xs text-gray-500 mt-1">
                      {formatYearOnly(pope.papacyStart)}
                    </div>
                  </div>
                </button>
              ))}

              {/* Next page control */}
              {pipelineStartIndex + pipelinePageSize < popes.length && (
                <button
                  aria-label="Show more"
                  className="flex-shrink-0 px-3 py-3 rounded-lg text-sm font-medium transition-colors bg-gray-100 text-gray-700 hover:bg-gray-200 border-2 border-transparent"
                  onClick={() => setPipelineStartIndex(Math.min(popes.length - 1, pipelineStartIndex + pipelinePageSize))}
                >
                  Show more <span className="ml-1">»</span>
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Pope List (hidden on mobile; visible from lg+) */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Popes</h2>
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {popes.map((pope) => (
                  <button
                    key={pope.id}
                    onClick={() => setSelectedPope(pope)}
                    className={`w-full text-left p-3 rounded-lg transition-colors ${
                      selectedPope?.id === pope.id
                        ? 'bg-amber-100 border-2 border-amber-300'
                        : 'bg-gray-50 hover:bg-gray-100 border-2 border-transparent'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                        <span className="text-amber-600 font-bold text-sm">
                          {pope.papacyNumber}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">{pope.regnalName}</h3>
                        <p className="text-sm text-gray-600">
                          {formatDate(pope.papacyStart)} - {pope.papacyEnd ? formatDate(pope.papacyEnd) : 'Present'}
                        </p>
                        {pope.isCurrent && (
                          <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full mt-1">
                            Current Pope
                          </span>
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Pope Details */}
          <div className="lg:col-span-2">
            {selectedPope ? (
              <div className="space-y-6">
                {/* Pope Header */}
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <div className="flex items-start space-x-6">
                    <div className="flex-1">
                      <h2 className="text-3xl font-bold text-gray-800 mb-2">
                        {selectedPope.regnalName}
                      </h2>
                      {selectedPope.birthName && (
                        <p className="text-lg text-gray-600 mb-2">
                          Born: {selectedPope.birthName}
                        </p>
                      )}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="font-semibold text-gray-700">Papacy:</span>
                          <p className="text-gray-600">
                            {formatDate(selectedPope.papacyStart)} - {selectedPope.papacyEnd ? formatDate(selectedPope.papacyEnd) : 'Present'}
                          </p>
                        </div>
                        {selectedPope.nationality && (
                          <div>
                            <span className="font-semibold text-gray-700">Nationality:</span>
                            <p className="text-gray-600">{selectedPope.nationality}</p>
                          </div>
                        )}
                        {selectedPope.previousOffice && (
                          <div>
                            <span className="font-semibold text-gray-700">Previous Office:</span>
                            <p className="text-gray-600">{selectedPope.previousOffice}</p>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="w-32 h-32 bg-amber-100 rounded-lg flex items-center justify-center">
                      {selectedPope.imageUrl ? (
                        <img
                          src={selectedPope.imageUrl}
                          alt={selectedPope.regnalName}
                          className="w-32 h-32 rounded-lg object-cover"
                        />
                      ) : (
                        <span className="text-amber-600 font-bold text-3xl">
                          {selectedPope.papacyNumber}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  {selectedPope.biography && (
                    <div className="mt-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">Biography</h3>
                      <p className="text-gray-600 leading-relaxed">{selectedPope.biography}</p>
                    </div>
                  )}

                  {selectedPope.historicalContext && (
                    <div className="mt-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">Historical Context</h3>
                      <p className="text-gray-600 leading-relaxed">{selectedPope.historicalContext}</p>
                    </div>
                  )}
                </div>

                {/* Events Timeline */}
                {selectedPope.events && selectedPope.events.length > 0 && (
                  <div className="bg-white rounded-lg shadow-lg p-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Key Events</h3>
                    <div className="space-y-4">
                      {selectedPope.events
                        .sort((a, b) => new Date(a.eventDate).getTime() - new Date(b.eventDate).getTime())
                        .map((event) => (
                          <div key={event.id} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                            <div className={`p-2 rounded-full ${getEventTypeColor(event.eventType)}`}>
                              {getEventTypeIcon(event.eventType)}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center space-x-2 mb-2">
                                <h4 className="font-semibold text-gray-800">{event.title}</h4>
                                <span className={`px-2 py-1 rounded-full text-xs ${getEventTypeColor(event.eventType)}`}>
                                  {event.eventType}
                                </span>
                              </div>
                              <p className="text-sm text-gray-600 mb-2">
                                <Calendar className="w-4 h-4 inline mr-1" />
                                {formatDate(event.eventDate)}
                                {event.location && (
                                  <>
                                    <MapPin className="w-4 h-4 inline ml-2 mr-1" />
                                    {event.location}
                                  </>
                                )}
                              </p>
                              <p className="text-gray-700">{event.description}</p>
                              {event.significance && (
                                <p className="text-sm text-amber-600 mt-2 font-medium">
                                  {event.significance}
                                </p>
                              )}
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                )}

                {/* Achievements */}
                {selectedPope.achievements && selectedPope.achievements.length > 0 && (
                  <div className="bg-white rounded-lg shadow-lg p-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Known for</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedPope.achievements.map((achievement) => (
                        <div key={achievement.id} className="p-4 bg-gray-50 rounded-lg">
                          <h4 className="font-semibold text-gray-800 mb-2">{achievement.title}</h4>
                          {achievement.year && (
                            <p className="text-sm text-gray-600 mb-2">
                              <span className="font-medium">Year:</span> {achievement.year}
                            </p>
                          )}
                          <p className="text-gray-700 text-sm">{achievement.description}</p>
                          {achievement.significance && (
                            <p className="text-sm text-amber-600 mt-2 font-medium">
                              {achievement.significance}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* References */}
                {selectedPope.references && (
                  <div className="bg-white rounded-lg shadow-lg p-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Data Sources</h3>
                    <div className="space-y-3">
                      {JSON.parse(selectedPope.references).map((ref: any, index: number) => (
                        <div key={index} className="p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-start space-x-3">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              ref.type === 'Scripture' ? 'bg-blue-100 text-blue-800' :
                              ref.type === 'Official' ? 'bg-green-100 text-green-800' :
                              ref.type === 'Historical' ? 'bg-purple-100 text-purple-800' :
                              'bg-gray-100 text-gray-800'
                            }`}>
                              {ref.type}
                            </span>
                            <div className="flex-1">
                              <a 
                                href={ref.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:text-blue-800 font-medium"
                              >
                                {ref.title}
                              </a>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                <p className="text-gray-600">Select a pope to view their details</p>
              </div>
            )}
          </div>
        </div>

        {/* General Data Sources */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">General Data Sources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">Vatican Sources</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• <a href="https://www.vatican.va" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Vatican.va</a></li>
                <li>• <a href="https://www.vatican.va/content/vatican/en/holy-father.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">List of Popes</a></li>
                <li>• <a href="https://www.vatican.va/archive/hist_councils/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Ecumenical Councils</a></li>
              </ul>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">Historical References</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• <a href="https://www.newadvent.org/cathen/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Catholic Encyclopedia</a></li>
                <li>• <a href="https://www.britannica.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Encyclopaedia Britannica</a></li>
                <li>• <a href="https://www.biblegateway.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Bible Gateway</a></li>
              </ul>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">Academic Sources</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• <a href="https://en.wikipedia.org/wiki/List_of_popes" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Wikipedia - List of Popes</a></li>
                <li>• <a href="https://www.oxfordreference.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Oxford Reference</a></li>
                <li>• <a href="https://www.jstor.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">JSTOR Academic</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
            <p className="text-sm text-amber-800">
              <strong>Note:</strong> This timeline is compiled from multiple historical sources. 
              Some dates for early popes are approximate due to limited historical records. 
              For the most current and authoritative information, please refer to official Vatican sources.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
