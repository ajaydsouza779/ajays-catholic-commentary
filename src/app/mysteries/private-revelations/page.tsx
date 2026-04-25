'use client'

import Link from 'next/link'
import {
  Heart,
  Flame,
  Star,
  Cross,
  Image,
  Droplets,
  Activity,
  Sparkles,
  ArrowRight,
  BookOpen,
} from 'lucide-react'

const subtopics = [
  {
    title: 'Marian Apparitions',
    description: 'Guadalupe, Lourdes, Fatima, and other approved apparitions of the Blessed Virgin Mary.',
    icon: Heart,
    href: '/mysteries/marian-apparitions',
    color: 'bg-rose-50 border-rose-200 text-rose-700',
  },
  {
    title: 'Eucharistic Miracles',
    description: 'Visible signs of the Real Presence — Lanciano, Bolsena, Buenos Aires, and more.',
    icon: Flame,
    href: '/mysteries/eucharistic-miracles',
    color: 'bg-amber-50 border-amber-200 text-amber-700',
  },
  {
    title: 'Incorruptible Saints',
    description: 'Bodies preserved from decay — St. Bernadette, Padre Pio, St. Catherine of Bologna.',
    icon: Star,
    href: '/mysteries/incorruptible-saints',
    color: 'bg-teal-50 border-teal-200 text-teal-700',
  },
  {
    title: 'Stigmata',
    description: 'The wounds of Christ appearing on the bodies of saints — Francis of Assisi, Padre Pio, Gemma Galgani.',
    icon: Cross,
    href: '/mysteries/stigmata',
    color: 'bg-red-50 border-red-200 text-red-700',
  },
  {
    title: 'Miraculous Images',
    description: 'The Guadalupe tilma, the Shroud of Turin, the Veil of Manoppello, and other acheiropoieta.',
    icon: Image,
    href: '/mysteries/miraculous-images',
    color: 'bg-indigo-50 border-indigo-200 text-indigo-700',
  },
  {
    title: 'Weeping Statues & Icons',
    description: 'Statues and icons reported to weep tears, blood, or oil — Akita, Syracuse, and investigated cases.',
    icon: Droplets,
    href: '/mysteries/weeping-statues',
    color: 'bg-cyan-50 border-cyan-200 text-cyan-700',
  },
  {
    title: 'Healing Miracles',
    description: 'The Lourdes Medical Bureau, canonization miracle investigations, and documented cures.',
    icon: Activity,
    href: '/mysteries/healing-miracles',
    color: 'bg-emerald-50 border-emerald-200 text-emerald-700',
  },
  {
    title: 'Mystical Phenomena',
    description: 'Levitation, bilocation, odor of sanctity, mystical ecstasy, and other extraordinary graces.',
    icon: Sparkles,
    href: '/mysteries/mystical-phenomena',
    color: 'bg-purple-50 border-purple-200 text-purple-700',
  },
]

export default function PrivateRevelationsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-3">
          Private Revelations
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
          Unlike Public Revelation — which closed with the death of the last Apostle and is
          contained in Scripture and Tradition — private revelations are supernatural communications
          given to individuals after the apostolic age. The Church evaluates them carefully: approved
          private revelations are declared &quot;worthy of belief&quot; but are never binding on the
          faithful.
        </p>
      </div>

      {/* Theological Context */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-blue-50">
            <BookOpen className="w-5 h-5 text-blue-700" />
          </div>
          <h2 className="text-xl font-serif font-bold text-gray-900">Understanding Private Revelation</h2>
        </div>
        <div className="text-gray-600 space-y-4 leading-relaxed">
          <p>
            The Catechism of the Catholic Church (CCC 67) teaches: <em>&quot;Throughout the ages, there
            have been so-called &apos;private&apos; revelations, some of which have been recognized by the
            authority of the Church. They do not belong, however, to the deposit of faith. It is not
            their role to improve or complete Christ&apos;s definitive Revelation, but to help live more
            fully by it in a certain period of history.&quot;</em>
          </p>
          <p>
            Private revelations can take many forms: apparitions, locutions (interior voices),
            visions, mystical experiences, and miraculous signs. When the Church approves a private
            revelation, it declares that it contains nothing contrary to faith and morals and that the
            faithful may prudently believe it — but no Catholic is obligated to accept any private
            revelation, even an approved one.
          </p>
          <p>
            The topics below explore the major categories of private revelation and supernatural
            phenomena documented in Catholic history.
          </p>
        </div>
      </div>

      {/* Subtopic Cards */}
      <h2 className="text-xl font-serif font-bold text-gray-900 mb-6">Explore by Topic</h2>
      <div className="grid sm:grid-cols-2 gap-4">
        {subtopics.map((topic) => {
          const Icon = topic.icon
          const [bg, border, text] = topic.color.split(' ')
          return (
            <Link
              key={topic.title}
              href={topic.href}
              className={`group rounded-xl p-5 border ${bg} ${border} hover:shadow-md transition-all`}
            >
              <div className="flex items-start gap-4">
                <div className={`p-2.5 rounded-lg bg-white/70 ${text}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-amber-800 transition-colors">
                    {topic.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{topic.description}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-amber-600 mt-1 shrink-0 transition-colors" />
              </div>
            </Link>
          )
        })}
      </div>

      {/* Sources */}
      <div className="bg-gray-50 rounded-lg p-6 mt-10">
        <h3 className="font-semibold text-gray-800 mb-3">Sources & Further Reading</h3>
        <ol className="text-sm text-gray-600 space-y-1.5 list-decimal list-inside">
          <li>Catechism of the Catholic Church, sections 66-67 (on Public and Private Revelation)</li>
          <li>Congregation for the Doctrine of the Faith, <em>Norms Regarding the Manner of Proceeding in the Discernment of Presumed Apparitions or Revelations</em> (1978, published 2012)</li>
          <li>Dicastery for the Doctrine of the Faith, <em>Norms for Proceeding in the Discernment of Alleged Supernatural Phenomena</em> (2024)</li>
          <li>Benedict XIV, <em>De Servorum Dei Beatificatione et Beatorum Canonizatione</em> (on miracles and mystical phenomena)</li>
          <li>Fr. Augustin Poulain, S.J., <em>The Graces of Interior Prayer</em> (classic reference on mystical theology)</li>
        </ol>
      </div>
    </div>
  )
}
