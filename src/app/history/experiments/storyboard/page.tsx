'use client'

import { useState } from 'react'

const MILESTONES = [
  { id: 'pentecost', title: 'Pentecost (33)', text: 'Birth of the Church; descent of the Holy Spirit.' },
  { id: 'nicaea', title: 'Council of Nicaea (325)', text: 'Defined divinity of the Son; Nicene Creed.' },
  { id: 'schism', title: 'Great Schism (1054)', text: 'East–West division between Rome and Constantinople.' },
  { id: 'trent', title: 'Council of Trent (1545–63)', text: 'Catholic Reformation; doctrine and discipline.' },
  { id: 'v2', title: 'Second Vatican Council (1962–65)', text: 'Renewal of liturgy, ecumenism, mission.' },
]

export default function Storyboard() {
  const [i, setI] = useState(0)
  const go = (d: number) => setI((prev) => Math.min(MILESTONES.length-1, Math.max(0, prev + d)))
  const m = MILESTONES[i]
  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Milestone Storyboard</h1>
        <div className="bg-white rounded-lg border p-6">
          <h2 className="text-xl font-semibold text-gray-800">{m.title}</h2>
          <p className="text-gray-700 mt-2">{m.text}</p>
          <div className="flex items-center justify-between mt-6">
            <button className="px-3 py-2 rounded bg-gray-100" onClick={() => go(-1)} disabled={i===0}>Previous</button>
            <div className="text-sm text-gray-500">{i+1} / {MILESTONES.length}</div>
            <button className="px-3 py-2 rounded bg-gray-100" onClick={() => go(1)} disabled={i===MILESTONES.length-1}>Next</button>
          </div>
        </div>
      </div>
    </div>
  )
}
