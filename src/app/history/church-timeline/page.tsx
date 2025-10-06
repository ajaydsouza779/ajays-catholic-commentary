'use client'

import { useState, useEffect } from 'react'
import { ChevronRight, ChevronDown, Calendar, Users, BookOpen, Cross, Crown, Globe, Zap } from 'lucide-react'

interface TimelineNode {
  id: string
  title: string
  description: string
  year: number
  type: 'era' | 'event' | 'movement' | 'council' | 'saint' | 'heresy'
  parentId?: string
  children: TimelineNode[]
  relatedPopes: any[]
  significance: string
  imageUrl?: string
}

export default function ChurchTimelinePage() {
  const [timeline, setTimeline] = useState<TimelineNode[]>([])
  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(new Set())
  const [selectedNode, setSelectedNode] = useState<TimelineNode | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchTimeline()
  }, [])

  const fetchTimeline = async () => {
    try {
      const response = await fetch('/api/history/church-timeline')
      if (!response.ok) {
        throw new Error('Failed to fetch church timeline data')
      }
      const data = await response.json()
      setTimeline(data)
      if (data.length > 0) {
        setSelectedNode(data[0]) // Select first node by default
        // Expand first level by default
        data.forEach((node: TimelineNode) => {
          if (!node.parentId) {
            setExpandedNodes(prev => new Set([...prev, node.id]))
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

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'era': return <Globe className="w-5 h-5" />
      case 'event': return <Calendar className="w-5 h-5" />
      case 'movement': return <Users className="w-5 h-5" />
      case 'council': return <BookOpen className="w-5 h-5" />
      case 'saint': return <Cross className="w-5 h-5" />
      case 'heresy': return <Zap className="w-5 h-5" />
      default: return <Calendar className="w-5 h-5" />
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'era': return 'bg-blue-100 text-blue-800'
      case 'event': return 'bg-green-100 text-green-800'
      case 'movement': return 'bg-purple-100 text-purple-800'
      case 'council': return 'bg-amber-100 text-amber-800'
      case 'saint': return 'bg-red-100 text-red-800'
      case 'heresy': return 'bg-orange-100 text-orange-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const renderTimelineNode = (node: TimelineNode, level: number = 0) => {
    const isExpanded = expandedNodes.has(node.id)
    const hasChildren = node.children && node.children.length > 0
    const isSelected = selectedNode?.id === node.id

    return (
      <div key={node.id} className="mb-2">
        <div
          className={`flex items-center p-3 rounded-lg cursor-pointer transition-colors ${
            isSelected
              ? 'bg-amber-100 border-2 border-amber-300'
              : 'bg-white hover:bg-gray-50 border-2 border-transparent'
          }`}
          style={{ marginLeft: `${level * 20}px` }}
          onClick={() => setSelectedNode(node)}
        >
          <button
            onClick={(e) => {
              e.stopPropagation()
              if (hasChildren) {
                toggleNode(node.id)
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
              <div className={`p-1 rounded-full ${getTypeColor(node.type)}`}>
                {getTypeIcon(node.type)}
              </div>
              <h3 className="font-semibold text-gray-800">{node.title}</h3>
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                {node.year}
              </span>
              <span className={`px-2 py-1 rounded-full text-xs ${getTypeColor(node.type)}`}>
                {node.type}
              </span>
            </div>
            <p className="text-sm text-gray-600 mt-1 line-clamp-2">
              {node.description}
            </p>
          </div>
        </div>

        {isExpanded && hasChildren && (
          <div className="mt-2">
            {node.children.map(child => renderTimelineNode(child, level + 1))}
          </div>
        )}
      </div>
    )
  }

  if (loading) {
    return (
      <div className="py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading church timeline...</p>
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
              <p className="font-bold">Error loading church timeline</p>
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
            Church Timeline
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the rich history of the Catholic Church from the time of Jesus 
            through the Apostles, early Church, councils, saints, and movements that 
            have shaped Christianity throughout the centuries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Timeline Tree */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Church History</h2>
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {timeline.map((node: TimelineNode) => renderTimelineNode(node))}
              </div>
            </div>
          </div>

          {/* Timeline Details */}
          <div className="lg:col-span-2">
            {selectedNode ? (
              <div className="space-y-6">
                {/* Node Header */}
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <div className="flex items-start space-x-6">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center ${getTypeColor(selectedNode.type)}`}>
                      {getTypeIcon(selectedNode.type)}
                    </div>
                    <div className="flex-1">
                      <h2 className="text-3xl font-bold text-gray-800 mb-2">
                        {selectedNode.title}
                      </h2>
                      <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{selectedNode.year}</span>
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs ${getTypeColor(selectedNode.type)}`}>
                          {selectedNode.type}
                        </span>
                        {selectedNode.relatedPopes && selectedNode.relatedPopes.length > 0 && (
                          <div className="flex items-center space-x-1">
                            <Users className="w-4 h-4" />
                            <span>{selectedNode.relatedPopes.length} related popes</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Description</h3>
                    <p className="text-gray-600 leading-relaxed">{selectedNode.description}</p>
                  </div>

                  {selectedNode.significance && (
                    <div className="mt-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">Historical Significance</h3>
                      <p className="text-gray-600 leading-relaxed">{selectedNode.significance}</p>
                    </div>
                  )}
                </div>

                {/* Related Popes */}
                {selectedNode.relatedPopes && selectedNode.relatedPopes.length > 0 && (
                  <div className="bg-white rounded-lg shadow-lg p-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Related Popes</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedNode.relatedPopes.map((pope: any) => (
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
                      The {selectedNode.title} represents a significant moment in Church history. 
                      Understanding these events helps us appreciate the continuity of the Catholic 
                      faith from the time of Christ to the present day.
                    </p>
                    <p className="text-gray-600 leading-relaxed mt-4">
                      Each era, event, and movement in Church history has contributed to the 
                      development of doctrine, the growth of the Church, and the spread of 
                      Christianity throughout the world.
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                <p className="text-gray-600">Select a timeline node to view its details</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
