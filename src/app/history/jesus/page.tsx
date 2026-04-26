'use client'

import { Cross, BookOpen, MapPin, Calendar } from 'lucide-react'

export default function JesusHistoryPage() {
  const sections = [
    { icon: Calendar, title: 'The Historical Jesus', description: 'What secular and religious sources tell us about the life of Jesus of Nazareth — from his birth in Bethlehem to his crucifixion under Pontius Pilate.' },
    { icon: BookOpen, title: 'The Gospels as History', description: 'How the four Gospels record the life, ministry, death, and resurrection of Christ — and how they relate to historical evidence.' },
    { icon: MapPin, title: 'The Land & the Times', description: 'First-century Palestine under Roman occupation — the political, social, and religious world into which Jesus was born.' },
    { icon: Cross, title: 'The Paschal Mystery', description: 'The passion, death, and resurrection of Jesus Christ — the central event of human history and the foundation of the Christian faith.' },
  ]

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-3">History of Jesus, the Christ</h1>
        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
          Jesus of Nazareth is the most influential figure in human history. As Catholics, we believe he is the Son of God made man — true God and true man. This section explores the historical evidence, the Gospel accounts, and the world in which he lived, taught, suffered, died, and rose again.
        </p>
      </div>
      <div className="rounded-xl p-6 mb-10 border-l-4" style={{ backgroundColor: '#FFFBEB', borderColor: '#D4AF37' }}>
        <h2 className="text-lg font-semibold text-gray-900 mb-1">Coming Soon</h2>
        <p className="text-gray-600">Comprehensive content on the historical Jesus, the Gospel narratives, archaeological evidence, and the Paschal Mystery will be added here.</p>
      </div>
      <div className="grid sm:grid-cols-2 gap-6">
        {sections.map((s) => { const Icon = s.icon; return (
          <div key={s.title} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-3"><div className="p-2 rounded-lg bg-amber-50"><Icon className="w-5 h-5 text-amber-700" /></div>
            <h3 className="font-serif text-lg font-semibold text-gray-900">{s.title}</h3></div>
            <p className="text-sm text-gray-600 leading-relaxed">{s.description}</p>
          </div>
        )})}
      </div>
    </div>
  )
}
