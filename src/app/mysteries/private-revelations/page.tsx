'use client'

import { Eye, Star, ScrollText } from 'lucide-react'

export default function PrivateRevelationsPage() {
  const sections = [
    {
      icon: Eye,
      title: 'Visions & Locutions',
      description: 'Apparitions, interior locutions, and mystical experiences reported by saints and visionaries throughout Church history.',
    },
    {
      icon: Star,
      title: 'Approved Revelations',
      description: 'Private revelations that have received ecclesiastical approval — from Guadalupe to Fatima and beyond.',
    },
    {
      icon: ScrollText,
      title: 'Discernment & Authority',
      description: 'How the Church evaluates private revelations: the criteria, the process, and the theological status of approved messages.',
    },
  ]

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-3">
          Private Revelations Index
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
          Unlike Public Revelation, private revelations are not part of the deposit of faith. Yet the Church has recognized many as worthy of belief, and they have profoundly shaped Catholic devotion, from the Sacred Heart to the Rosary.
        </p>
      </div>

      <div className="rounded-xl p-6 mb-10 border-l-4" style={{ backgroundColor: '#FFFBEB', borderColor: '#D4AF37' }}>
        <h2 className="text-lg font-semibold text-gray-900 mb-1">Coming Soon</h2>
        <p className="text-gray-600">
          A comprehensive index of notable private revelations, their status, key messages, and impact on Catholic life will be added here.
        </p>
      </div>

      <div className="grid sm:grid-cols-3 gap-6">
        {sections.map((section) => {
          const Icon = section.icon
          return (
            <div key={section.title} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg" style={{ backgroundColor: '#F5F3FF' }}>
                  <Icon className="w-5 h-5" style={{ color: '#6D28D9' }} />
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
