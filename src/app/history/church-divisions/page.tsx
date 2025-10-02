'use client'

import { useState, useEffect } from 'react'
import { ChevronRight, ChevronDown, Calendar, Users, AlertTriangle, BookOpen } from 'lucide-react'

interface ChurchDivision {
  id: string
  name: string
  description: string
  year: number
  cause?: string
  outcome?: string
  parentId?: string
  imageUrl?: string
  children: ChurchDivision[]
  relatedPopes: any[]
}

export default function ChurchDivisionsPage() {
  const [divisions, setDivisions] = useState<ChurchDivision[]>([])
  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(new Set())
  const [selectedDivision, setSelectedDivision] = useState<ChurchDivision | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchDivisions()
  }, [])

  const fetchDivisions = async () => {
    try {
      const response = await fetch('/api/history/church-divisions')
      if (!response.ok) {
        throw new Error('Failed to fetch church divisions data')
      }
      const data = await response.json()
      setDivisions(data)
      if (data.length > 0) {
        setSelectedDivision(data[0]) // Select first division by default
        // Expand first level by default
        data.forEach(division => {
          if (!division.parentId) {
            setExpandedNodes(prev => new Set([...prev, division.id]))
          }
        })
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  const toggleNode = (nodeId: string) => {
    setExpandedNodes(prev => {
      const newSet = new Set(prev)
      if (newSet.has(nodeId)) {
        newSet.delete(nodeId)
      } else {
        newSet.add(nodeId)
      }
      return newSet
    })
  }

  const renderDivisionNode = (division: ChurchDivision, level: number = 0) => {
    const isExpanded = expandedNodes.has(division.id)
    const hasChildren = division.children && division.children.length > 0
    const isSelected = selectedDivision?.id === division.id

    return (
      <div key={division.id} className="mb-2">
        <div
          className={`flex items-center p-3 rounded-lg cursor-pointer transition-colors ${
            isSelected
              ? 'bg-amber-100 border-2 border-amber-300'
              : 'bg-white hover:bg-gray-50 border-2 border-transparent'
          }`}
          style={{ marginLeft: `${level * 20}px` }}
          onClick={() => setSelectedDivision(division)}
        >
          <button
            onClick={(e) => {
              e.stopPropagation()
              if (hasChildren) {
                toggleNode(division.id)
              }
            }}
            className="mr-2 p-1 hover:bg-gray-200 rounded"
            disabled={!hasChildren}
          >
            {hasChildren ? (
              isExpanded ? (
                <ChevronDown className="w-4 h-4" />
              ) : (
                <ChevronRight className="w-4 h-4" />
              )
            ) : (
              <div className="w-4 h-4" />
            )}
          </button>
          
          <div className="flex-1">
            <div className="flex items-center space-x-2">
              <h3 className="font-semibold text-gray-800">{division.name}</h3>
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                {division.year}
              </span>
            </div>
            <p className="text-sm text-gray-600 mt-1 line-clamp-2">
              {division.description}
            </p>
          </div>
        </div>

        {isExpanded && hasChildren && (
          <div className="mt-2">
            {division.children.map(child => renderDivisionNode(child, level + 1))}
          </div>
        )}
      </div>
    )
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-primary-cream py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading church divisions...</p>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-primary-cream py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
              <p className="font-bold">Error loading church divisions</p>
              <p>{error}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-primary-cream py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Divisions in the Church
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the historical divisions and schisms that have shaped Christianity 
            throughout history, from the Great Schism to the Protestant Reformation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Division Tree */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Church Divisions</h2>
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {divisions.map(division => renderDivisionNode(division))}
              </div>
            </div>
          </div>

          {/* Division Details */}
          <div className="lg:col-span-2">
            {selectedDivision ? (
              <div className="space-y-6">
                {/* Division Header */}
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                      <AlertTriangle className="w-8 h-8 text-red-600" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-3xl font-bold text-gray-800 mb-2">
                        {selectedDivision.name}
                      </h2>
                      <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{selectedDivision.year}</span>
                        </div>
                        {selectedDivision.relatedPopes && selectedDivision.relatedPopes.length > 0 && (
                          <div className="flex items-center space-x-1">
                            <Users className="w-4 h-4" />
                            <span>{selectedDivision.relatedPopes.length} related popes</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Description</h3>
                    <p className="text-gray-600 leading-relaxed">{selectedDivision.description}</p>
                  </div>

                  {selectedDivision.cause && (
                    <div className="mt-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">Causes</h3>
                      <p className="text-gray-600 leading-relaxed">{selectedDivision.cause}</p>
                    </div>
                  )}

                  {selectedDivision.outcome && (
                    <div className="mt-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">Outcome</h3>
                      <p className="text-gray-600 leading-relaxed">{selectedDivision.outcome}</p>
                    </div>
                  )}
                </div>

                {/* Related Popes */}
                {selectedDivision.relatedPopes && selectedDivision.relatedPopes.length > 0 && (
                  <div className="bg-white rounded-lg shadow-lg p-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Related Popes</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedDivision.relatedPopes.map((pope: any) => (
                        <div key={pope.id} className="p-4 bg-gray-50 rounded-lg">
                          <h4 className="font-semibold text-gray-800 mb-2">{pope.regnalName}</h4>
                          <p className="text-sm text-gray-600">
                            Papacy: {pope.papacyStart} - {pope.papacyEnd || 'Present'}
                          </p>
                          <p className="text-sm text-gray-600">
                            Papacy Number: {pope.papacyNumber}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Historical Context */}
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Historical Context</h3>
                  <div className="prose max-w-none">
                    <p className="text-gray-600 leading-relaxed">
                      The {selectedDivision.name} represents a significant moment in Church history. 
                      Understanding these divisions helps us appreciate the complexity of Christian 
                      history and the ongoing work of Christian unity.
                    </p>
                    <p className="text-gray-600 leading-relaxed mt-4">
                      While divisions have occurred throughout history, they have also led to 
                      important theological developments and, in many cases, eventual reconciliation 
                      and dialogue between different Christian traditions.
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                <p className="text-gray-600">Select a division to view its details</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
