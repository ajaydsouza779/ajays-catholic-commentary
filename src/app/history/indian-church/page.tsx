'use client'

import { MapPin, Users, BookOpen, Landmark } from 'lucide-react'

export default function IndianChurchHistoryPage() {
  const sections = [
    {
      icon: MapPin,
      title: 'St. Thomas the Apostle',
      description: 'The tradition of Christianity arriving in India through the Apostle Thomas in 52 AD and the early Thomas Christian communities.',
    },
    {
      icon: Users,
      title: 'The Syro-Malabar & Syro-Malankara Churches',
      description: 'The Eastern Catholic churches of India, their unique liturgical traditions, and their communion with Rome.',
    },
    {
      icon: Landmark,
      title: 'Portuguese Missions & the Latin Rite',
      description: 'The arrival of Vasco da Gama, Francis Xavier, and the establishment of the Latin Catholic Church in India.',
    },
    {
      icon: BookOpen,
      title: 'The Modern Indian Church',
      description: 'Growth, inculturation, social contributions, and the vibrant Catholic community in India today.',
    },
  ]

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-3">
          History of the Church in India
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
          India has one of the oldest Christian communities in the world, tracing its roots to the
          Apostle Thomas himself. Explore nearly two thousand years of faith, culture, and witness
          on the Indian subcontinent.
        </p>
      </div>

      {/* Coming Soon Banner */}
      <div className="rounded-xl p-6 mb-10 border-l-4" style={{ backgroundColor: '#FFFBEB', borderColor: '#D4AF37' }}>
        <h2 className="text-lg font-semibold text-gray-900 mb-1">Coming Soon</h2>
        <p className="text-gray-600">
          This section is under development. Content on the history, saints, and traditions of the
          Catholic Church in India will be added here progressively.
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
                <div className="p-2 rounded-lg" style={{ backgroundColor: '#FFF7ED' }}>
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
