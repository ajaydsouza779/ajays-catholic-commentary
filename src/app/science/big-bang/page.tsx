'use client'

import { Sparkles, User, BookOpen } from 'lucide-react'

export default function BigBangPage() {
  const sections = [
    { icon: User, title: 'Fr. Georges Lemaître', description: 'The Belgian Catholic priest who first proposed the Big Bang theory in 1927 — two years before Hubble\'s observations confirmed an expanding universe.' },
    { icon: Sparkles, title: 'A Pope\'s Enthusiasm', description: 'Pius XII saw the Big Bang as confirmation of creation. Lemaître cautioned against mixing physics and theology — a lesson in intellectual honesty.' },
    { icon: BookOpen, title: 'Cosmology & Creation', description: 'Fine-tuning arguments, the anthropic principle, and what modern cosmology does and doesn\'t say about God.' },
  ]

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-3">Big Bang & Cosmology</h1>
        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">The Big Bang theory — the idea that the universe had a definite beginning — was proposed by a Catholic priest. Far from threatening faith, modern cosmology has raised profound questions that resonate with the Christian understanding of creation.</p>
      </div>
      <div className="rounded-xl p-6 mb-10 border-l-4" style={{ backgroundColor: '#FFFBEB', borderColor: '#D4AF37' }}>
        <h2 className="text-lg font-semibold text-gray-900 mb-1">Coming Soon</h2>
        <p className="text-gray-600">The full story of Fr. Lemaître, the Big Bang, and Catholic cosmological thought will be added here.</p>
      </div>
      <div className="grid sm:grid-cols-3 gap-6">
        {sections.map((s) => { const Icon = s.icon; return (
          <div key={s.title} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-3"><div className="p-2 rounded-lg bg-purple-50"><Icon className="w-5 h-5 text-purple-700" /></div>
            <h3 className="font-serif text-lg font-semibold text-gray-900">{s.title}</h3></div>
            <p className="text-sm text-gray-600 leading-relaxed">{s.description}</p>
          </div>
        )})}
      </div>
    </div>
  )
}
