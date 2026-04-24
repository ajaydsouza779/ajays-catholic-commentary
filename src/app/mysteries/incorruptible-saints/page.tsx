'use client'

import { Heart, User, Clock, MapPin } from 'lucide-react'

export default function IncorruptibleSaintsPage() {
  const sections = [
    {
      icon: Heart,
      title: 'St. Bernadette Soubirous (d. 1879)',
      description: 'The visionary of Lourdes, whose body remains incorrupt in the chapel of the convent of St. Gildard in Nevers, France.',
    },
    {
      icon: User,
      title: 'St. Padre Pio (d. 1968)',
      description: 'The stigmatist and mystic of San Giovanni Rotondo, whose body was found remarkably preserved when exhumed in 2008.',
    },
    {
      icon: Clock,
      title: 'St. Catherine of Bologna (d. 1463)',
      description: 'Seated upright in the Chapel of the Poor Clares in Bologna for over 500 years, her body remains intact and venerated.',
    },
    {
      icon: MapPin,
      title: 'Many More Across the Centuries',
      description: 'From St. Cecilia (d. 177 AD) to Bl. Imelda Lambertini (d. 1333) — a survey of incorrupt saints and their stories.',
    },
  ]

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-3">
          Incorruptible Saints
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
          Among the most remarkable phenomena in Catholic history is the incorruption of the bodies of certain saints — preserved from natural decay long after death, without embalming or artificial means. The Church regards these as signs of holiness, though incorruption alone is not sufficient for canonization.
        </p>
      </div>

      <div className="rounded-xl p-6 mb-10 border-l-4" style={{ backgroundColor: '#FFFBEB', borderColor: '#D4AF37' }}>
        <h2 className="text-lg font-semibold text-gray-900 mb-1">Coming Soon</h2>
        <p className="text-gray-600">
          Detailed profiles of incorruptible saints, the history and science behind the phenomenon, and the Church&apos;s theological understanding will be added here.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        {sections.map((section) => {
          const Icon = section.icon
          return (
            <div key={section.title} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg" style={{ backgroundColor: '#ECFDF5' }}>
                  <Icon className="w-5 h-5" style={{ color: '#065F46' }} />
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
