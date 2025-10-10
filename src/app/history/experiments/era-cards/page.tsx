'use client'

import { useState } from 'react'

const ERAS = [
  { id: 'apostolic', title: 'Apostolic (33–100)', color: 'from-blue-50 to-white', items: ['Pentecost', 'Peter in Rome', 'Pauline Missions'] },
  { id: 'patristic', title: 'Patristic (100–451)', color: 'from-amber-50 to-white', items: ['Arian Controversy', 'Nicaea (325)', 'Chalcedon (451)'] },
  { id: 'medieval', title: 'Medieval (500–1500)', color: 'from-purple-50 to-white', items: ['Monastic Reform', 'Great Schism (1054)', 'Scholasticism'] },
  { id: 'reformation', title: 'Reformation (1500–1700)', color: 'from-red-50 to-white', items: ['Luther (1517)', 'Trent (1545–63)', 'Jesuits'] },
  { id: 'modern', title: 'Modern (1700–Present)', color: 'from-green-50 to-white', items: ['Vatican I', 'Vatican II', 'Global Missions'] },
]

export default function EraCards() {
  const [open, setOpen] = useState<string | null>(null)
  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Era Cards + Sub‑timelines</h1>
        <div className="grid md:grid-cols-2 gap-4">
          {ERAS.map((era) => (
            <div key={era.id} className={`rounded-xl p-5 border bg-gradient-to-br ${era.color}`}>
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-gray-800">{era.title}</h2>
                <button
                  className="text-sm px-3 py-1 rounded bg-gray-800 text-white"
                  onClick={() => setOpen(open === era.id ? null : era.id)}
                >
                  {open === era.id ? 'Hide' : 'Explore'}
                </button>
              </div>
              {open === era.id && (
                <div className="mt-4 space-y-2">
                  {era.items.map((it) => (
                    <div key={it} className="p-3 rounded border bg-white">{it}</div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
