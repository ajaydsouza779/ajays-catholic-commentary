'use client'

import { BookOpen, Lightbulb, GraduationCap } from 'lucide-react'

export default function SaintsOnSciencePage() {
  const sections = [
    { icon: BookOpen, title: 'St. Augustine (354-430)', description: '"The book of nature and the book of Scripture cannot contradict each other, for they have the same Author." His De Genesi ad Litteram warned against embarrassing the faith with bad science.' },
    { icon: Lightbulb, title: 'St. Thomas Aquinas (1225-1274)', description: '"Truth cannot contradict truth." Aquinas built a philosophical framework showing that faith and reason are complementary paths to the same God.' },
    { icon: GraduationCap, title: 'St. Albert the Great (c. 1200-1280)', description: 'Patron saint of scientists. A Dominican friar who made original contributions to biology, chemistry, physics, and astronomy — and was Aquinas\'s teacher.' },
  ]

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-3">Saints on Science</h1>
        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">From the Church Fathers to modern theologians, Catholic saints and Doctors of the Church have consistently affirmed the compatibility of faith and scientific inquiry. Their writings offer wisdom that remains strikingly relevant today.</p>
      </div>
      <div className="rounded-xl p-6 mb-10 border-l-4" style={{ backgroundColor: '#FFFBEB', borderColor: '#D4AF37' }}>
        <h2 className="text-lg font-semibold text-gray-900 mb-1">Coming Soon</h2>
        <p className="text-gray-600">Detailed profiles of saints and their views on science, reason, and the natural world will be added here.</p>
      </div>
      <div className="grid sm:grid-cols-3 gap-6">
        {sections.map((s) => { const Icon = s.icon; return (
          <div key={s.title} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-3"><div className="p-2 rounded-lg bg-orange-50"><Icon className="w-5 h-5 text-orange-700" /></div>
            <h3 className="font-serif text-lg font-semibold text-gray-900">{s.title}</h3></div>
            <p className="text-sm text-gray-600 leading-relaxed">{s.description}</p>
          </div>
        )})}
      </div>
    </div>
  )
}
