'use client'

import { Heart, MapPin, Calendar, Shield } from 'lucide-react'

export default function MarianApparitionsPage() {
  const sections = [
    {
      icon: Heart,
      title: 'Our Lady of Guadalupe (1531)',
      description: 'The apparition to St. Juan Diego in Mexico — the tilma, the image, and the conversion of millions.',
    },
    {
      icon: MapPin,
      title: 'Lourdes (1858)',
      description: 'St. Bernadette Soubirous and the 18 apparitions at the grotto of Massabielle. The miraculous spring and healings.',
    },
    {
      icon: Calendar,
      title: 'Fatima (1917)',
      description: 'The three shepherd children, the three secrets, the Miracle of the Sun, and the consecration of Russia.',
    },
    {
      icon: Shield,
      title: 'Other Approved Apparitions',
      description: 'From La Salette to Knock, Beauraing to Kibeho — a survey of Marian apparitions recognized by the Church.',
    },
  ]

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-3">
          Marian Apparitions
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
          Throughout history, the Blessed Virgin Mary has appeared to the faithful at critical moments, calling the Church to prayer, penance, and conversion. These apparitions, when approved by the Church, have inspired profound devotion and shaped Catholic life across the globe.
        </p>
      </div>

      <div className="rounded-xl p-6 mb-10 border-l-4" style={{ backgroundColor: '#FFFBEB', borderColor: '#D4AF37' }}>
        <h2 className="text-lg font-semibold text-gray-900 mb-1">Coming Soon</h2>
        <p className="text-gray-600">
          Detailed accounts of approved Marian apparitions, their messages, historical context, and impact on the Church will be added here.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        {sections.map((section) => {
          const Icon = section.icon
          return (
            <div key={section.title} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg" style={{ backgroundColor: '#FFF1F2' }}>
                  <Icon className="w-5 h-5" style={{ color: '#BE123C' }} />
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
