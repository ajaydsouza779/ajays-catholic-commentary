'use client'

import { BookOpen, Clock, Music, Flame } from 'lucide-react'

export default function MassHistoryPage() {
  const sections = [
    {
      icon: Flame,
      title: 'The Last Supper to the Early Church',
      description: 'How the Eucharistic celebration began with Christ and evolved through the apostolic era.',
    },
    {
      icon: Clock,
      title: 'Development Through the Centuries',
      description: 'The formation of liturgical rites, the Roman Canon, and the standardization of the Mass.',
    },
    {
      icon: Music,
      title: 'Sacred Music & Liturgical Art',
      description: 'Gregorian chant, polyphony, and the role of art and architecture in worship.',
    },
    {
      icon: BookOpen,
      title: 'The Council of Trent to Vatican II',
      description: 'Major reforms, the Tridentine Mass, and the renewal of the liturgy in the modern era.',
    },
  ]

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-3">
          History of the Holy Mass
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
          Trace the development of the Catholic Mass from the Last Supper through the early Church,
          the great councils, and into the present day. Discover how the central act of Catholic
          worship has been celebrated, protected, and renewed across two millennia.
        </p>
      </div>

      {/* Coming Soon Banner */}
      <div className="rounded-xl p-6 mb-10 border-l-4" style={{ backgroundColor: '#FFFBEB', borderColor: '#D4AF37' }}>
        <h2 className="text-lg font-semibold text-gray-900 mb-1">Coming Soon</h2>
        <p className="text-gray-600">
          This section is under development. Content on the history, theology, and evolution of the
          Holy Mass will be added here progressively.
        </p>
      </div>

      {/* Preview Sections */}
      <div className="grid sm:grid-cols-2 gap-6">
        {sections.map((section) => {
          const Icon = section.icon
          return (
            <div
              key={section.title}
              className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg" style={{ backgroundColor: '#EEF2FF' }}>
                  <Icon className="w-5 h-5" style={{ color: '#1B365D' }} />
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
