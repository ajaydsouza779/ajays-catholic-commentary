'use client'

import { Users, MapPin, BookOpen, Crown } from 'lucide-react'

export default function ApostlesHistoryPage() {
  const sections = [
    { icon: Users, title: 'The Twelve', description: 'Peter, Andrew, James, John, Philip, Bartholomew, Matthew, Thomas, James son of Alphaeus, Thaddaeus, Simon the Zealot, and Judas — their calling, their role, and their witness.' },
    { icon: MapPin, title: 'Missions to the World', description: 'Where the Apostles went after Pentecost — Peter to Rome, Thomas to India, James to Spain, Andrew to Greece, and the spread of the Gospel across the known world.' },
    { icon: BookOpen, title: 'St. Paul — Apostle to the Gentiles', description: 'The conversion, missionary journeys, letters, and martyrdom of the greatest missionary in Church history.' },
    { icon: Crown, title: 'Martyrdom & Legacy', description: 'How the Apostles died for their faith — and how their witness established the Church that endures to this day.' },
  ]

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-3">History of the Apostles</h1>
        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
          The twelve Apostles, chosen by Christ himself, became the foundation stones of the Church. After Pentecost, they carried the Gospel to the ends of the known world — and nearly all of them sealed their testimony with their blood. Their story is the story of how Christianity began.
        </p>
      </div>
      <div className="rounded-xl p-6 mb-10 border-l-4" style={{ backgroundColor: '#FFFBEB', borderColor: '#D4AF37' }}>
        <h2 className="text-lg font-semibold text-gray-900 mb-1">Coming Soon</h2>
        <p className="text-gray-600">Detailed profiles of each Apostle, their missions, traditions, historical evidence, and martyrdom accounts will be added here.</p>
      </div>
      <div className="grid sm:grid-cols-2 gap-6">
        {sections.map((s) => { const Icon = s.icon; return (
          <div key={s.title} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-3"><div className="p-2 rounded-lg bg-indigo-50"><Icon className="w-5 h-5 text-indigo-700" /></div>
            <h3 className="font-serif text-lg font-semibold text-gray-900">{s.title}</h3></div>
            <p className="text-sm text-gray-600 leading-relaxed">{s.description}</p>
          </div>
        )})}
      </div>
    </div>
  )
}
