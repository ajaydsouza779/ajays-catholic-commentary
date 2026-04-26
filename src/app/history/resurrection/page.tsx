'use client'

import { Sunrise, BookOpen, ShieldCheck, Flame } from 'lucide-react'

export default function ResurrectionPage() {
  const sections = [
    { icon: Sunrise, title: 'The Empty Tomb', description: 'The discovery of the empty tomb on Easter morning — the Gospel accounts, the witnesses, and the historical evidence for the bodily resurrection of Jesus Christ.' },
    { icon: BookOpen, title: 'The Resurrection Appearances', description: 'Jesus appeared to Mary Magdalene, the Apostles, over 500 disciples, and finally to Paul — eyewitness testimony that transformed frightened followers into fearless martyrs.' },
    { icon: ShieldCheck, title: 'Historical Evidence', description: 'The case for the resurrection — the empty tomb, the post-mortem appearances, the transformation of the disciples, and the explosive growth of the early Church.' },
    { icon: Flame, title: 'Theology of the Resurrection', description: 'Why the resurrection is the cornerstone of Christian faith — St. Paul\'s argument in 1 Corinthians 15, the defeat of death, and the promise of our own resurrection.' },
  ]

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-3">The Resurrection</h1>
        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
          The resurrection of Jesus Christ is the central event of the Catholic faith. &ldquo;If Christ has not been raised, then our preaching is in vain and your faith is in vain&rdquo; (1 Cor 15:14). On the third day, the crucified Jesus rose bodily from the dead — conquering sin and death forever. This event is the foundation upon which the entire Church is built.
        </p>
      </div>
      <div className="rounded-xl p-6 mb-10 border-l-4" style={{ backgroundColor: '#FFFBEB', borderColor: '#D4AF37' }}>
        <h2 className="text-lg font-semibold text-gray-900 mb-1">Coming Soon</h2>
        <p className="text-gray-600">Comprehensive content on the resurrection — Gospel accounts, historical evidence, theological significance, and the impact on the early Church — will be added here.</p>
      </div>
      <div className="grid sm:grid-cols-2 gap-6">
        {sections.map((s) => { const Icon = s.icon; return (
          <div key={s.title} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-3"><div className="p-2 rounded-lg bg-amber-50"><Icon className="w-5 h-5 text-amber-700" /></div>
            <h3 className="font-serif text-lg font-semibold text-gray-900">{s.title}</h3></div>
            <p className="text-sm text-gray-600 leading-relaxed">{s.description}</p>
          </div>
        )})}
      </div>
    </div>
  )
}
