'use client'

import { Heart, Shield, Activity } from 'lucide-react'

export default function HealingMiraclesPage() {
  const sections = [
    {
      icon: Heart,
      title: 'Lourdes Medical Bureau',
      description: 'Since 1858, over 7,000 cures have been reported at Lourdes. The Medical Bureau — staffed by doctors of all faiths — has recognized 70 as medically inexplicable.',
    },
    {
      icon: Shield,
      title: 'Canonization Miracles',
      description: 'The Church requires verified miracles (usually healings) for beatification and canonization — how the investigation process works and notable cases.',
    },
    {
      icon: Activity,
      title: 'Faith and Medicine',
      description: 'The intersection of miraculous healing and modern science — what qualifies as "medically inexplicable" and the rigorous criteria applied by the Church.',
    },
  ]

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-3">Healing Miracles</h1>
        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
          Miraculous healings are central to Catholic faith — from the Gospels to the present day. The Church applies some of the most rigorous investigative standards in the world to verify claimed cures, particularly through the Lourdes Medical Bureau and the canonization process.
        </p>
      </div>
      <div className="rounded-xl p-6 mb-10 border-l-4" style={{ backgroundColor: '#FFFBEB', borderColor: '#D4AF37' }}>
        <h2 className="text-lg font-semibold text-gray-900 mb-1">Coming Soon</h2>
        <p className="text-gray-600">Documented healing miracles, the Lourdes Medical Bureau process, canonization miracle investigations, and the theology of healing will be added here.</p>
      </div>
      <div className="grid sm:grid-cols-3 gap-6">
        {sections.map((section) => {
          const Icon = section.icon
          return (
            <div key={section.title} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-emerald-50"><Icon className="w-5 h-5 text-emerald-700" /></div>
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
