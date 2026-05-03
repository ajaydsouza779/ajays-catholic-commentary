'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Home, ChevronDown } from 'lucide-react'

const categories = [
  {
    id: 'history',
    label: 'History',
    tabs: [
      { href: '/history/christ', label: 'Lord Jesus Christ' },
      { href: '/history/resurrection', label: 'Resurrection' },
      { href: '/history/apostles', label: 'The Apostles' },
      { href: '/history/church', label: 'The Church' },
      { href: '/history/papal-timeline', label: 'Papal Timeline' },
      { href: '/history/church-divisions', label: 'Church Divisions' },
      { href: '/history/church-tree', label: 'Church Tree' },
      { href: '/history/bible-origin', label: 'Bible History' },
      { href: '/history/mass-history', label: 'Mass History' },
      { href: '/history/indian-church', label: 'Indian Church' },
    ],
  },
  {
    id: 'science',
    label: 'Science',
    tabs: [
      { href: '/science/faith-and-reason', label: 'Faith & Reason' },
      { href: '/science/church-and-science', label: 'Church & Science' },
      { href: '/science/galileo', label: 'The Galileo Affair' },
      { href: '/science/evolution', label: 'Evolution & Creation' },
      { href: '/science/big-bang', label: 'Big Bang & Cosmology' },
      { href: '/science/reading-genesis', label: 'Reading Genesis' },
      { href: '/science/archaeology', label: 'Archaeology & Bible' },
      { href: '/science/catholic-scientists', label: 'Catholic Scientists' },
      { href: '/science/saints-on-science', label: 'Saints on Science' },
      { href: '/science/conflicts-and-myths', label: 'Conflicts & Myths' },
    ],
  },
  {
    id: 'mysteries',
    label: 'Mysteries',
    tabs: [
      { href: '/mysteries/public-revelation', label: 'Public Revelation' },
      { href: '/mysteries/private-revelations', label: 'Private Revelations' },
      { href: '/mysteries/marian-apparitions', label: 'Marian Apparitions' },
      { href: '/mysteries/eucharistic-miracles', label: 'Eucharistic Miracles' },
      { href: '/mysteries/incorruptible-saints', label: 'Incorruptible Saints' },
      { href: '/mysteries/stigmata', label: 'Stigmata' },
      { href: '/mysteries/miraculous-images', label: 'Miraculous Images' },
      { href: '/mysteries/weeping-statues', label: 'Weeping Statues' },
      { href: '/mysteries/healing-miracles', label: 'Healing Miracles' },
      { href: '/mysteries/mystical-phenomena', label: 'Mystical Phenomena' },
    ],
  },
  {
    id: 'commentary',
    label: 'Bible Commentary',
    tabs: [
      { href: '/commentary', label: 'Sunday Gospel' },
      { href: '/commentary/liturgical-calendar', label: 'Liturgical Calendar' },
    ],
  },
]

export default function HistoryNavigation() {
  const pathname = usePathname()
  const router = useRouter()

  // Determine which category is active based on the current path
  const getActiveCategory = () => {
    for (const cat of categories) {
      if (cat.tabs.some(tab => pathname === tab.href || pathname.startsWith(tab.href + '/'))) {
        return cat.id
      }
    }
    return 'history' // default
  }

  const [openCategory, setOpenCategory] = useState<string>(getActiveCategory)

  // Update open category when route changes
  useEffect(() => {
    const active = getActiveCategory()
    setOpenCategory(active)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  const isActive = (path: string) => {
    return pathname === path || pathname.startsWith(path + '/')
  }

  const activeCategory = categories.find(c => c.id === openCategory)

  return (
    <div className="bg-white border-b border-gray-200 print:hidden">
      <div className="container mx-auto px-4">
        {/* Top row: Home + Category toggles */}
        <div className="flex items-center gap-1 overflow-x-auto">
          <Link
            href="/"
            className="py-3 px-2 text-gray-500 hover:text-gray-700 transition-colors inline-flex items-center shrink-0"
            aria-label="Home"
          >
            <Home className="h-5 w-5" />
          </Link>

          <div className="h-5 w-px bg-gray-200 mx-1 shrink-0" />

          {categories.map((cat) => {
            const isCatActive = cat.tabs.some(tab => isActive(tab.href))
            const isOpen = openCategory === cat.id
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setOpenCategory(cat.id)
                  router.push(cat.tabs[0].href)
                }}
                className={`py-3 px-3 text-sm font-medium transition-colors inline-flex items-center gap-1 shrink-0 rounded-t-md ${
                  isOpen
                    ? 'text-amber-700 bg-amber-50'
                    : isCatActive
                      ? 'text-amber-600'
                      : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {cat.label}
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
              </button>
            )
          })}
        </div>

        {/* Sub-tabs row */}
        {activeCategory && (
          <div className="flex items-center gap-1 overflow-x-auto border-t border-gray-100 -mt-px">
            {activeCategory.tabs.map((tab) => (
              <Link
                key={tab.href}
                href={tab.href}
                className={`py-2.5 px-3 text-sm transition-colors whitespace-nowrap shrink-0 border-b-2 ${
                  isActive(tab.href)
                    ? 'border-amber-500 text-amber-600 font-medium'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
