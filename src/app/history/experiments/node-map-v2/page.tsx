'use client'

import { useEffect, useMemo, useRef, useState } from 'react'

type NodeType = 'Council' | 'Saint' | 'Movement' | 'Heresy' | 'Event'

interface HistoryNode {
  id: string
  title: string
  year: number
  era: 'Apostolic' | 'Patristic' | 'Medieval' | 'Reformation' | 'Modern'
  type: NodeType
  significance: number // 1-5 for sizing
  relatedPopes?: number[]
}

const RAW_NODES: HistoryNode[] = [
  { id: 'pentecost', title: 'Pentecost', year: 33, era: 'Apostolic', type: 'Event', significance: 5 },
  { id: 'peter-rome', title: 'Peter in Rome', year: 42, era: 'Apostolic', type: 'Event', significance: 4, relatedPopes: [1] },
  { id: 'nicaea', title: 'Council of Nicaea', year: 325, era: 'Patristic', type: 'Council', significance: 5 },
  { id: 'athanasius', title: 'St. Athanasius', year: 360, era: 'Patristic', type: 'Saint', significance: 4 },
  { id: 'chalcedon', title: 'Council of Chalcedon', year: 451, era: 'Patristic', type: 'Council', significance: 5 },
  { id: 'schism', title: 'Great Schism', year: 1054, era: 'Medieval', type: 'Event', significance: 5 },
  { id: 'francis', title: 'St. Francis of Assisi', year: 1220, era: 'Medieval', type: 'Saint', significance: 4 },
  { id: 'trent', title: 'Council of Trent', year: 1545, era: 'Reformation', type: 'Council', significance: 5 },
  { id: 'jesuits', title: 'Jesuits Founded', year: 1540, era: 'Reformation', type: 'Movement', significance: 4 },
  { id: 'vatican2', title: 'Second Vatican Council', year: 1962, era: 'Modern', type: 'Council', significance: 5 },
]

const ERA_ORDER = ['Apostolic','Patristic','Medieval','Reformation','Modern'] as const
const TYPE_COLORS: Record<NodeType, string> = {
  Council: '#f59e0b',
  Saint: '#10b981',
  Movement: '#6366f1',
  Heresy: '#ef4444',
  Event: '#0ea5e9',
}

export default function NodeMapV2() {
  const [filters, setFilters] = useState<Record<NodeType, boolean>>({ Council:true, Saint:true, Movement:true, Heresy:true, Event:true })
  const [selected, setSelected] = useState<HistoryNode | null>(null)
  const [zoom, setZoom] = useState(1)
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const dragRef = useRef<{ dragging: boolean; startX: number; startY: number; startOffX: number; startOffY: number }>({ dragging:false, startX:0, startY:0, startOffX:0, startOffY:0 })

  const nodes = useMemo(() => RAW_NODES.filter(n => filters[n.type]), [filters])

  // Radial layout: rings by era, angle by year ordering
  const positioned = useMemo(() => {
    const byEra: Record<string, HistoryNode[]> = {}
    nodes.forEach(n => { (byEra[n.era] ||= []).push(n) })
    ERA_ORDER.forEach(era => { (byEra[era] ||= []).sort((a,b)=>a.year-b.year) })
    const baseRadius = 120
    const gap = 70
    const center = { x: 600, y: 400 }
    const pts = [] as Array<HistoryNode & { x:number; y:number }>
    ERA_ORDER.forEach((era, i) => {
      const ring = byEra[era]
      const r = baseRadius + i*gap
      const step = ring.length ? (2*Math.PI)/ring.length : 1
      ring.forEach((n, idx) => {
        const angle = idx*step
        const x = center.x + r * Math.cos(angle)
        const y = center.y + r * Math.sin(angle)
        pts.push({ ...n, x, y })
      })
    })
    return pts
  }, [nodes])

  const onWheel: React.WheelEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault()
    const delta = -e.deltaY
    const factor = delta > 0 ? 1.1 : 0.9
    setZoom(z => Math.min(3, Math.max(0.5, z*factor)))
  }

  const onPointerDown: React.PointerEventHandler<HTMLDivElement> = (e) => {
    ;(e.currentTarget as HTMLElement).setPointerCapture(e.pointerId)
    dragRef.current = { dragging:true, startX:e.clientX, startY:e.clientY, startOffX:offset.x, startOffY:offset.y }
  }
  const onPointerMove: React.PointerEventHandler<HTMLDivElement> = (e) => {
    if (!dragRef.current.dragging) return
    const dx = e.clientX - dragRef.current.startX
    const dy = e.clientY - dragRef.current.startY
    setOffset({ x: dragRef.current.startOffX + dx, y: dragRef.current.startOffY + dy })
  }
  const onPointerUp: React.PointerEventHandler<HTMLDivElement> = (e) => {
    dragRef.current.dragging = false
  }

  return (
    <div className="py-8">
      <div className="container mx-auto px-4 grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Node Map v2 (Radial • Zoom/Pan)</h1>
          <div className="flex items-center gap-3 mb-3">
            {(['Council','Saint','Movement','Heresy','Event'] as NodeType[]).map(t => (
              <label key={t} className="flex items-center gap-1 text-sm">
                <input type="checkbox" checked={filters[t]} onChange={(e)=>setFilters({...filters, [t]:e.target.checked})} />
                <span className="inline-flex items-center gap-1">
                  <span className="inline-block w-3 h-3 rounded" style={{backgroundColor: TYPE_COLORS[t]}} /> {t}
                </span>
              </label>
            ))}
            <div className="ml-auto flex items-center gap-2 text-sm">
              <button className="px-2 py-1 border rounded" onClick={()=>setZoom(1)}>Reset</button>
              <span>Zoom: {zoom.toFixed(2)}</span>
            </div>
          </div>
          <div
            className="relative bg-white border rounded-lg overflow-hidden"
            style={{ height: 520 }}
            onWheel={onWheel}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
          >
            <svg width={1200} height={800} style={{ transform: `translate(${offset.x}px, ${offset.y}px) scale(${zoom})`, transformOrigin: '0 0' }}>
              {/* Rings and era labels */}
              {ERA_ORDER.map((era, i) => {
                const r = 120 + i*70
                return (
                  <g key={era}>
                    <circle cx={600} cy={400} r={r} fill="none" stroke="#e5e7eb" />
                    <text x={600} y={400 - r} textAnchor="middle" fontSize={12} fill="#6b7280">{era}</text>
                  </g>
                )
              })}
              {/* Nodes */}
              {positioned.map(n => (
                <g key={n.id} onClick={()=>setSelected(n)} style={{ cursor:'pointer' }}>
                  <circle cx={n.x} cy={n.y} r={6 + n.significance*2} fill={TYPE_COLORS[n.type]} stroke="#111827" strokeOpacity={0.2} />
                  <text x={n.x + 12} y={n.y + 4} fontSize={12} fill="#374151">{n.title}</text>
                </g>
              ))}
            </svg>
          </div>
          <p className="text-xs text-gray-500 mt-2">Tip: scroll to zoom, drag to pan. Click a node to view details.</p>
        </div>
        <div className="bg-white rounded-lg p-6 border">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Details</h2>
          {selected ? (
            <div className="space-y-2 text-gray-700">
              <div className="text-xl font-bold">{selected.title}</div>
              <div className="text-sm">Year: {selected.year} • Era: {selected.era}</div>
              <div className="text-sm">Type: {selected.type}</div>
              {selected.relatedPopes && selected.relatedPopes.length>0 && (
                <div className="text-sm">Related Popes: #{selected.relatedPopes.join(', #')}</div>
              )}
              <div className="pt-2 text-sm text-gray-600">
                This pane can show summary, significance, related events/councils/saints, and links to sources.
              </div>
            </div>
          ) : (
            <p className="text-gray-500">Select a node to view details.</p>
          )}
        </div>
      </div>
    </div>
  )
}

