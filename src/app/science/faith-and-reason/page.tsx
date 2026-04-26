'use client'

import { BookOpen, Lightbulb, Scale } from 'lucide-react'

export default function FaithAndReasonPage() {
  const sections = [
    { icon: BookOpen, title: 'Fides et Ratio (1998)', description: 'John Paul II\'s encyclical on faith and reason as "two wings on which the human spirit rises to contemplation of truth."' },
    { icon: Lightbulb, title: 'The Catholic Intellectual Tradition', description: 'From the Church Fathers to modern universities — how Catholicism has championed the life of the mind for two millennia.' },
    { icon: Scale, title: 'Faith Seeking Understanding', description: 'St. Anselm\'s motto and the Catholic conviction that faith and reason are complementary, never contradictory.' },
  ]

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-3">Faith & Reason</h1>
        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">The Catholic Church teaches that faith and reason are not enemies but allies — two complementary paths to truth. Far from opposing science, the Church insists that honest inquiry into the natural world ultimately leads toward the Creator.</p>
      </div>
      <div className="rounded-xl p-6 mb-10 border-l-4" style={{ backgroundColor: '#FFFBEB', borderColor: '#D4AF37' }}>
        <h2 className="text-lg font-semibold text-gray-900 mb-1">Coming Soon</h2>
        <p className="text-gray-600">Comprehensive content on the Catholic theology of faith and reason will be added here.</p>
      </div>
      <div className="grid sm:grid-cols-3 gap-6">
        {sections.map((s) => { const Icon = s.icon; return (
          <div key={s.title} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-3"><div className="p-2 rounded-lg bg-blue-50"><Icon className="w-5 h-5 text-blue-700" /></div>
            <h3 className="font-serif text-lg font-semibold text-gray-900">{s.title}</h3></div>
            <p className="text-sm text-gray-600 leading-relaxed">{s.description}</p>
          </div>
        )})}
      </div>
    </div>
  )
}
