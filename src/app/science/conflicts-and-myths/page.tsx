'use client'

import { AlertTriangle, Globe, Shield } from 'lucide-react'

export default function ConflictsAndMythsPage() {
  const sections = [
    { icon: Globe, title: 'The "Flat Earth" Myth', description: 'Medieval Christians did NOT believe the earth was flat. This myth was invented in the 19th century. Educated Europeans knew the earth was spherical since antiquity.' },
    { icon: AlertTriangle, title: 'The Warfare Thesis — Debunked', description: 'John William Draper and Andrew Dickson White popularized the idea that science and religion are at war. Modern historians of science have thoroughly discredited this narrative.' },
    { icon: Shield, title: 'Real Tensions, Honestly Addressed', description: 'The Galileo affair, the Index of Forbidden Books, and genuine moments of friction — examined honestly, in context, without whitewashing or exaggeration.' },
  ]

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-3">Conflicts & Myths</h1>
        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">Many widely believed stories about the Church suppressing science are myths invented in the 19th century. Modern historians have debunked the &quot;warfare thesis&quot; — but real tensions did exist, and they deserve honest examination rather than apologetics or dismissal.</p>
      </div>
      <div className="rounded-xl p-6 mb-10 border-l-4" style={{ backgroundColor: '#FFFBEB', borderColor: '#D4AF37' }}>
        <h2 className="text-lg font-semibold text-gray-900 mb-1">Coming Soon</h2>
        <p className="text-gray-600">Common myths debunked with sources, plus honest treatment of genuine conflicts, will be added here.</p>
      </div>
      <div className="grid sm:grid-cols-3 gap-6">
        {sections.map((s) => { const Icon = s.icon; return (
          <div key={s.title} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-3"><div className="p-2 rounded-lg bg-gray-100"><Icon className="w-5 h-5 text-gray-700" /></div>
            <h3 className="font-serif text-lg font-semibold text-gray-900">{s.title}</h3></div>
            <p className="text-sm text-gray-600 leading-relaxed">{s.description}</p>
          </div>
        )})}
      </div>
    </div>
  )
}
