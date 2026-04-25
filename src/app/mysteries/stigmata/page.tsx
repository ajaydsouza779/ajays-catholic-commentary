'use client'

import { Cross, User, Calendar } from 'lucide-react'

export default function StigmataPage() {
  const sections = [
    {
      icon: Cross,
      title: 'St. Francis of Assisi (1224)',
      description: 'The first recorded stigmatist — received the wounds of Christ on Mount La Verna two years before his death.',
    },
    {
      icon: User,
      title: 'St. Padre Pio (1918-1968)',
      description: 'Bore visible, bleeding stigmata for 50 years. Investigated multiple times by the Vatican; wounds vanished shortly before his death.',
    },
    {
      icon: Calendar,
      title: 'Other Stigmatists Through History',
      description: 'St. Catherine of Siena, St. Gemma Galgani, Therese Neumann, and others — patterns, investigations, and theological significance.',
    },
  ]

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-3">Stigmata</h1>
        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
          The stigmata — the spontaneous appearance of wounds corresponding to those of Christ&apos;s crucifixion — is one of the most dramatic mystical phenomena in Catholic history. Over 300 cases have been documented, with several rigorously investigated by medical and ecclesiastical authorities.
        </p>
      </div>
      <div className="rounded-xl p-6 mb-10 border-l-4" style={{ backgroundColor: '#FFFBEB', borderColor: '#D4AF37' }}>
        <h2 className="text-lg font-semibold text-gray-900 mb-1">Coming Soon</h2>
        <p className="text-gray-600">Detailed accounts of stigmatists, medical investigations, and the Church&apos;s theological understanding will be added here.</p>
      </div>
      <div className="grid sm:grid-cols-3 gap-6">
        {sections.map((section) => {
          const Icon = section.icon
          return (
            <div key={section.title} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-red-50"><Icon className="w-5 h-5 text-red-700" /></div>
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
