'use client'

import { BookOpen, Layers, MessageSquare } from 'lucide-react'

export default function ReadingGenesisPage() {
  const sections = [
    { icon: BookOpen, title: 'Literary Genres in Scripture', description: 'Genesis 1-11 uses a distinct literary genre — not modern science textbook, not pure myth, but theological narrative conveying revealed truths about God, humanity, and creation.' },
    { icon: Layers, title: 'The Four Senses of Scripture', description: 'Literal, allegorical, moral, and anagogical — the Catholic tradition of multi-layered biblical interpretation, far richer than literalism.' },
    { icon: MessageSquare, title: 'St. Augustine\'s Warning', description: '"It is a disgraceful thing for a Christian to speak about natural matters as if they were Scripture and be laughed at by unbelievers." — De Genesi ad Litteram (5th century).' },
  ]

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-3">Reading Genesis</h1>
        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">How should Catholics read the creation accounts and prehistoric narratives of Genesis? The Church has always taught that these texts convey profound theological truths — but not necessarily in the way a modern science textbook would. Young Earth vs Old Earth is not a Catholic debate.</p>
      </div>
      <div className="rounded-xl p-6 mb-10 border-l-4" style={{ backgroundColor: '#FFFBEB', borderColor: '#D4AF37' }}>
        <h2 className="text-lg font-semibold text-gray-900 mb-1">Coming Soon</h2>
        <p className="text-gray-600">How the Church reads Genesis, the Four Senses of Scripture, and the Church Fathers on creation will be added here.</p>
      </div>
      <div className="grid sm:grid-cols-3 gap-6">
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
