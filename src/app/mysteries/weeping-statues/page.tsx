'use client'

import { Droplets, MapPin, Search } from 'lucide-react'

export default function WeepingStatuesPage() {
  const sections = [
    {
      icon: Droplets,
      title: 'Weeping Madonnas',
      description: 'Statues and icons of the Blessed Virgin reported to weep tears, blood, or oil — from Syracuse (1953) to Akita, Japan (1973-1981).',
    },
    {
      icon: MapPin,
      title: 'Notable Documented Cases',
      description: 'Our Lady of Akita (approved by Bishop Ito, 1984), the Weeping Madonna of Syracuse (authenticated by a Vatican commission), and others.',
    },
    {
      icon: Search,
      title: 'Investigation & Discernment',
      description: 'How the Church investigates these phenomena — scientific testing, episcopal commissions, and the distinction between genuine miracles, natural causes, and fraud.',
    },
  ]

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-3">Weeping Statues & Icons</h1>
        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
          Reports of statues and icons weeping tears, blood, or oil have occurred throughout Catholic history and across the globe. While many cases have natural explanations or have been exposed as fraudulent, a number have withstood rigorous investigation and received ecclesiastical recognition.
        </p>
      </div>
      <div className="rounded-xl p-6 mb-10 border-l-4" style={{ backgroundColor: '#FFFBEB', borderColor: '#D4AF37' }}>
        <h2 className="text-lg font-semibold text-gray-900 mb-1">Coming Soon</h2>
        <p className="text-gray-600">Documented cases of weeping statues and icons, investigation results, and theological context will be added here.</p>
      </div>
      <div className="grid sm:grid-cols-3 gap-6">
        {sections.map((section) => {
          const Icon = section.icon
          return (
            <div key={section.title} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-cyan-50"><Icon className="w-5 h-5 text-cyan-700" /></div>
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
