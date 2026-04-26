'use client'

import { Search, MapPin, Calendar } from 'lucide-react'

export default function ArchaeologyPage() {
  const sections = [
    { icon: Search, title: 'Dead Sea Scrolls (1947)', description: 'The discovery at Qumran that confirmed the remarkable accuracy of biblical manuscript transmission over a thousand years.' },
    { icon: MapPin, title: 'Biblical Sites Confirmed', description: 'Pool of Siloam, the Pilate inscription at Caesarea, the House of Peter at Capernaum, and other archaeological finds that corroborate the biblical record.' },
    { icon: Calendar, title: 'Carbon Dating & Relics', description: 'How modern scientific methods are used to study relics, manuscripts, and sacred artifacts — including the Shroud of Turin.' },
  ]

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-3">Archaeology & the Bible</h1>
        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">Modern archaeology and scientific methods have repeatedly confirmed details of the biblical record. From the Dead Sea Scrolls to the excavation of ancient Jerusalem, science has served as an ally of faith in illuminating the historical context of Scripture.</p>
      </div>
      <div className="rounded-xl p-6 mb-10 border-l-4" style={{ backgroundColor: '#FFFBEB', borderColor: '#D4AF37' }}>
        <h2 className="text-lg font-semibold text-gray-900 mb-1">Coming Soon</h2>
        <p className="text-gray-600">Archaeological discoveries that illuminate and confirm the biblical record will be detailed here.</p>
      </div>
      <div className="grid sm:grid-cols-3 gap-6">
        {sections.map((s) => { const Icon = s.icon; return (
          <div key={s.title} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-3"><div className="p-2 rounded-lg bg-emerald-50"><Icon className="w-5 h-5 text-emerald-700" /></div>
            <h3 className="font-serif text-lg font-semibold text-gray-900">{s.title}</h3></div>
            <p className="text-sm text-gray-600 leading-relaxed">{s.description}</p>
          </div>
        )})}
      </div>
    </div>
  )
}
