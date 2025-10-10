'use client'

import { useState } from 'react'

const TREE = [
  { era: 'Patristic', items: [
    { t: 'Council', label: 'Nicaea (325)', cls: 'bg-amber-100 text-amber-800' },
    { t: 'Heresy', label: 'Arianism', cls: 'bg-red-100 text-red-800' },
    { t: 'Saint', label: 'Athanasius', cls: 'bg-green-100 text-green-800' },
  ]},
  { era: 'Medieval', items: [
    { t: 'Council', label: 'Chalcedon (451)', cls: 'bg-amber-100 text-amber-800' },
    { t: 'Event', label: 'Great Schism (1054)', cls: 'bg-blue-100 text-blue-800' },
  ]},
]

export default function AccordionTree() {
  const [open, setOpen] = useState<string | null>(null)
  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Accordion Tree + Badges</h1>
        <div className="space-y-3">
          {TREE.map((grp) => (
            <div key={grp.era} className="bg-white rounded-lg border">
              <button className="w-full text-left px-4 py-3 font-semibold" onClick={() => setOpen(open===grp.era?null:grp.era)}>
                {grp.era}
              </button>
              {open===grp.era && (
                <div className="px-4 pb-3 space-y-2">
                  {grp.items.map((it) => (
                    <div key={it.label} className="flex items-center gap-2">
                      <span className={`px-2 py-0.5 text-xs rounded-full ${it.cls}`}>{it.t}</span>
                      <span className="text-gray-700 text-sm">{it.label}</span>
                    </div>
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
