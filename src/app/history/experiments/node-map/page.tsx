'use client'

import { useState } from 'react'

const CLUSTERS = [
  { era: 'Apostolic', nodes: ['Pentecost', 'Peter in Rome', 'Paul in Athens'] },
  { era: 'Patristic', nodes: ['Nicaea', 'Athanasius', 'Chalcedon'] },
  { era: 'Medieval', nodes: ['Benedict', 'Great Schism', 'Francis of Assisi'] },
]

export default function NodeMap() {
  const [selected, setSelected] = useState<string | null>(null)
  return (
    <div className="py-8">
      <div className="container mx-auto px-4 grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-lg p-6 border">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Node Map (Clustered)</h1>
          <div className="space-y-4">
            {CLUSTERS.map((c) => (
              <div key={c.era}>
                <h2 className="text-lg font-semibold text-gray-700 mb-2">{c.era}</h2>
                <div className="flex flex-wrap gap-2">
                  {c.nodes.map((n) => (
                    <button key={n} className={`px-3 py-1.5 rounded border ${selected===n ? 'bg-amber-100 border-amber-300' : 'bg-gray-50'}`} onClick={() => setSelected(n)}>
                      {n}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white rounded-lg p-6 border">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Details</h2>
          {selected ? (
            <p className="text-gray-700">Selected: {selected}. This pane would show summary, dates, related popes, sources.</p>
          ) : (
            <p className="text-gray-500">Select a node to view details.</p>
          )}
        </div>
      </div>
    </div>
  )
}
