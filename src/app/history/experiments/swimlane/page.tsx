'use client'

const LANES = [
  { id: 'events', title: 'Events', color: 'border-blue-300', items: ['Edict of Milan (313)', 'Great Schism (1054)', 'Reformation (1517)'] },
  { id: 'councils', title: 'Councils', color: 'border-amber-300', items: ['Nicaea (325)', 'Chalcedon (451)', 'Trent (1545–63)', 'Vatican II (1962–65)'] },
  { id: 'saints', title: 'Saints & Movements', color: 'border-green-300', items: ['Benedict (480)', 'Francis (1181)', 'Jesuits (1540)'] },
  { id: 'heresies', title: 'Heresies', color: 'border-red-300', items: ['Arianism', 'Iconoclasm', 'Modernism'] },
]

export default function Swimlane() {
  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Swimlane Timeline</h1>
        <div className="overflow-x-auto">
          <div className="min-w-[900px] grid gap-6">
            {LANES.map((lane) => (
              <div key={lane.id} className={`border-l-4 ${lane.color} pl-4`}>
                <h2 className="text-lg font-semibold text-gray-800 mb-2">{lane.title}</h2>
                <div className="flex gap-3">
                  {lane.items.map((it) => (
                    <div key={it} className="px-3 py-2 rounded bg-white border shadow-sm whitespace-nowrap">{it}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
