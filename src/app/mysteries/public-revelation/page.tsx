'use client'

import { BookOpen, Shield, Cross } from 'lucide-react'

export default function PublicRevelationPage() {
  const sections = [
    {
      icon: BookOpen,
      title: 'Sacred Scripture',
      description: 'The written Word of God — the Old and New Testaments as the inspired, inerrant record of divine revelation.',
    },
    {
      icon: Shield,
      title: 'Sacred Tradition',
      description: 'The living transmission of the Gospel passed down from the Apostles through the teaching authority of the Church.',
    },
    {
      icon: Cross,
      title: 'The Deposit of Faith',
      description: 'How Scripture and Tradition together form the single deposit of faith, guarded and interpreted by the Magisterium.',
    },
  ]

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-3">
          Public Revelation
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
          Public Revelation is the definitive self-communication of God to humanity, completed with the death of the last Apostle. It is contained in Sacred Scripture and Sacred Tradition, and is authoritatively interpreted by the Magisterium of the Catholic Church.
        </p>
      </div>

      <div className="rounded-xl p-6 mb-10 border-l-4" style={{ backgroundColor: '#FFFBEB', borderColor: '#D4AF37' }}>
        <h2 className="text-lg font-semibold text-gray-900 mb-1">Coming Soon</h2>
        <p className="text-gray-600">
          Comprehensive content on Public Revelation — Scripture, Tradition, the Magisterium, the development of doctrine, and the relationship between faith and reason — will be added here.
        </p>
      </div>

      <div className="grid sm:grid-cols-3 gap-6">
        {sections.map((section) => {
          const Icon = section.icon
          return (
            <div key={section.title} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
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
