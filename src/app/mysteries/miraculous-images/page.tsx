'use client'

import { Image, Eye, Shield } from 'lucide-react'

export default function MiraculousImagesPage() {
  const sections = [
    {
      icon: Image,
      title: 'Our Lady of Guadalupe Tilma (1531)',
      description: 'The image on Juan Diego&apos;s tilma defies scientific explanation — no brush strokes, no known pigments, and it has survived nearly 500 years on fragile cactus-fiber cloth.',
    },
    {
      icon: Eye,
      title: 'The Shroud of Turin',
      description: 'The most studied artifact in history — a linen cloth bearing the image of a crucified man. Debates on its authenticity continue, but its mystery endures.',
    },
    {
      icon: Shield,
      title: 'Other Miraculous Images',
      description: 'The Veil of Manoppello, the Image of Divine Mercy, Our Lady of Las Lajas, and other acheiropoieta (images "not made by human hands").',
    },
  ]

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-3">Miraculous Images</h1>
        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
          Throughout Catholic history, certain images have been venerated as miraculous — produced by supernatural means or possessing qualities that defy natural explanation. These images have been the subject of intense scientific scrutiny and deep popular devotion.
        </p>
      </div>
      <div className="rounded-xl p-6 mb-10 border-l-4" style={{ backgroundColor: '#FFFBEB', borderColor: '#D4AF37' }}>
        <h2 className="text-lg font-semibold text-gray-900 mb-1">Coming Soon</h2>
        <p className="text-gray-600">Detailed examinations of miraculous images, scientific investigations, and their role in Catholic devotion will be added here.</p>
      </div>
      <div className="grid sm:grid-cols-3 gap-6">
        {sections.map((section) => {
          const Icon = section.icon
          return (
            <div key={section.title} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-indigo-50"><Icon className="w-5 h-5 text-indigo-700" /></div>
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
