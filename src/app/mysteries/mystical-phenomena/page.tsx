'use client'

import { Sparkles, Wind, Sun, Flower } from 'lucide-react'

export default function MysticalPhenomenaPage() {
  const sections = [
    {
      icon: Wind,
      title: 'Levitation & Bilocation',
      description: 'Saints reported to have levitated during prayer (St. Joseph of Cupertino, St. Teresa of Avila) or appeared in two places at once (Padre Pio, St. Alphonsus Liguori).',
    },
    {
      icon: Flower,
      title: 'Odor of Sanctity',
      description: 'A sweet, inexplicable fragrance emanating from the bodies of saints during life or after death — documented in cases from St. Therese of Lisieux to Padre Pio.',
    },
    {
      icon: Sun,
      title: 'Mystical Marriage & Ecstasy',
      description: 'The highest states of mystical union with God, as described by St. John of the Cross, St. Teresa of Avila, and other Doctors of the Church.',
    },
    {
      icon: Sparkles,
      title: 'Other Phenomena',
      description: 'Inedia (living without food), luminous bodies, reading of hearts, prophetic gifts, and other extraordinary graces recorded in the lives of the saints.',
    },
  ]

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-3">Mystical Phenomena</h1>
        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
          The Catholic mystical tradition records extraordinary supernatural phenomena in the lives of the saints — from levitation and bilocation to the odor of sanctity and mystical ecstasy. While the Church treats such phenomena with careful discernment, they witness to the transforming power of divine grace.
        </p>
      </div>
      <div className="rounded-xl p-6 mb-10 border-l-4" style={{ backgroundColor: '#FFFBEB', borderColor: '#D4AF37' }}>
        <h2 className="text-lg font-semibold text-gray-900 mb-1">Coming Soon</h2>
        <p className="text-gray-600">Documented mystical phenomena, the saints who experienced them, theological framework, and the Church&apos;s criteria for discernment will be added here.</p>
      </div>
      <div className="grid sm:grid-cols-2 gap-6">
        {sections.map((section) => {
          const Icon = section.icon
          return (
            <div key={section.title} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-purple-50"><Icon className="w-5 h-5 text-purple-700" /></div>
                <h3 className="font-serif text-lg font-semibold text-gray-900">{section.title}</h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">{section.description}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
