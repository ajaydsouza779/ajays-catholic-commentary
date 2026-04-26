'use client'

import { Landmark, BookOpen, Telescope } from 'lucide-react'

export default function ChurchAndSciencePage() {
  const sections = [
    { icon: Landmark, title: 'Medieval Universities', description: 'The Church founded the university system — Oxford, Paris, Bologna — creating the institutional framework for modern science.' },
    { icon: Telescope, title: 'The Scientific Revolution', description: 'Copernicus, Galileo, and the complex relationship between new discoveries and theological interpretation.' },
    { icon: BookOpen, title: 'Modern Partnership', description: 'The Vatican Observatory, the Pontifical Academy of Sciences, and the Church\'s engagement with contemporary research.' },
  ]

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-3">Church & Science Through History</h1>
        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">The relationship between the Catholic Church and science is far richer and more positive than popular narratives suggest. From founding universities to sponsoring research, the Church has been one of the greatest patrons of scientific inquiry in Western history.</p>
      </div>
      <div className="rounded-xl p-6 mb-10 border-l-4" style={{ backgroundColor: '#FFFBEB', borderColor: '#D4AF37' }}>
        <h2 className="text-lg font-semibold text-gray-900 mb-1">Coming Soon</h2>
        <p className="text-gray-600">A comprehensive timeline of the Church-science relationship will be added here.</p>
      </div>
      <div className="grid sm:grid-cols-3 gap-6">
        {sections.map((s) => { const Icon = s.icon; return (
          <div key={s.title} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-3"><div className="p-2 rounded-lg bg-indigo-50"><Icon className="w-5 h-5 text-indigo-700" /></div>
            <h3 className="font-serif text-lg font-semibold text-gray-900">{s.title}</h3></div>
            <p className="text-sm text-gray-600 leading-relaxed">{s.description}</p>
          </div>
        )})}
      </div>
    </div>
  )
}
