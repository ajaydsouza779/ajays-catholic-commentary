'use client'

import { Flame, Globe, BookOpen, Search } from 'lucide-react'

export default function EucharisticMiraclesPage() {
  const sections = [
    {
      icon: Flame,
      title: 'Lanciano (c. 8th Century)',
      description: 'The oldest and most studied Eucharistic miracle — bread and wine transformed into visible flesh and blood, scientifically examined in 1970.',
    },
    {
      icon: Globe,
      title: 'Orvieto / Bolsena (1263)',
      description: 'The miracle that inspired Pope Urban IV to institute the Feast of Corpus Christi and St. Thomas Aquinas to compose its liturgy.',
    },
    {
      icon: BookOpen,
      title: 'Buenos Aires (1996)',
      description: 'A consecrated Host placed in water was found transformed into cardiac tissue — examined by Dr. Frederick Zugibe without knowledge of its origin.',
    },
    {
      icon: Search,
      title: 'Scientific Investigations',
      description: 'How modern science has examined Eucharistic miracles: blood type AB, cardiac tissue, and the convergence of faith and reason.',
    },
  ]

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-3">
          Eucharistic Miracles
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
          The Catholic Church teaches that in every Mass, bread and wine truly become the Body and Blood of Christ. On rare occasions, God has made this hidden reality visible through Eucharistic miracles — events that have been investigated, documented, and in many cases subjected to modern scientific analysis.
        </p>
      </div>

      <div className="rounded-xl p-6 mb-10 border-l-4" style={{ backgroundColor: '#FFFBEB', borderColor: '#D4AF37' }}>
        <h2 className="text-lg font-semibold text-gray-900 mb-1">Coming Soon</h2>
        <p className="text-gray-600">
          A comprehensive catalog of documented Eucharistic miracles, their historical context, scientific investigations, and theological significance will be added here.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        {sections.map((section) => {
          const Icon = section.icon
          return (
            <div key={section.title} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg" style={{ backgroundColor: '#FEF3C7' }}>
                  <Icon className="w-5 h-5" style={{ color: '#92400E' }} />
                </div>
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
