'use client'

import { useState, useEffect } from 'react'
import { BookOpen, Calendar, MapPin, Globe, FileText, Users } from 'lucide-react'

interface BibleManuscript {
  id: string
  name: string
  description: string
  date: string
  language: string
  location?: string
  significance?: string
  imageUrl?: string
}

interface BibleTranslation {
  id: string
  name: string
  language: string
  year: number
  translator?: string
  description: string
  significance?: string
  imageUrl?: string
}

export default function BibleOriginPage() {
  const [manuscripts, setManuscripts] = useState<BibleManuscript[]>([])
  const [translations, setTranslations] = useState<BibleTranslation[]>([])
  const [activeTab, setActiveTab] = useState<'overview' | 'manuscripts' | 'translations'>('overview')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchBibleData()
  }, [])

  const fetchBibleData = async () => {
    try {
      const [manuscriptsRes, translationsRes] = await Promise.all([
        fetch('/api/history/bible-manuscripts'),
        fetch('/api/history/bible-translations')
      ])

      if (!manuscriptsRes.ok || !translationsRes.ok) {
        throw new Error('Failed to fetch Bible history data')
      }

      const manuscriptsData = await manuscriptsRes.json()
      const translationsData = await translationsRes.json()

      setManuscripts(manuscriptsData)
      setTranslations(translationsData)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading Bible history...</p>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
              <p className="font-bold">Error loading Bible history</p>
              <p>{error}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            History and Origin of the Bible
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the fascinating journey of how the Bible came to be in its current form, 
            from ancient manuscripts to modern translations.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg shadow-lg p-1">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-6 py-3 rounded-md transition-colors ${
                activeTab === 'overview'
                  ? 'bg-amber-100 text-amber-800 font-semibold'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('manuscripts')}
              className={`px-6 py-3 rounded-md transition-colors ${
                activeTab === 'manuscripts'
                  ? 'bg-amber-100 text-amber-800 font-semibold'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Manuscripts
            </button>
            <button
              onClick={() => setActiveTab('translations')}
              className={`px-6 py-3 rounded-md transition-colors ${
                activeTab === 'translations'
                  ? 'bg-amber-100 text-amber-800 font-semibold'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Translations
            </button>
          </div>
        </div>

        {/* Content */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Timeline Overview */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Biblical Timeline</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Ancient Period (1500 BC - 100 AD)</h3>
                    <p className="text-gray-600 mt-2">
                      The Hebrew Scriptures (Old Testament) were written over centuries, beginning with the Torah 
                      and expanding through the Prophets and Writings. The New Testament was completed by the end 
                      of the 1st century AD.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <FileText className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Manuscript Era (100 AD - 1500 AD)</h3>
                    <p className="text-gray-600 mt-2">
                      Biblical texts were copied by hand on papyrus, parchment, and later paper. 
                      Important manuscripts like the Codex Vaticanus and Codex Sinaiticus were created 
                      during this period.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Globe className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Translation Era (1500 AD - Present)</h3>
                    <p className="text-gray-600 mt-2">
                      The invention of the printing press revolutionized Bible distribution. 
                      Major translations like the King James Version, Douay-Rheims, and modern 
                      translations made the Bible accessible to people worldwide.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Canon Formation */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Canon Formation</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Old Testament Canon</h3>
                  <p className="text-gray-600 mb-4">
                    The Hebrew Bible (Tanakh) was established by Jewish scholars around 100 AD. 
                    It consists of 39 books organized into three sections: Torah (Law), Nevi'im (Prophets), 
                    and Ketuvim (Writings).
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Torah: Genesis, Exodus, Leviticus, Numbers, Deuteronomy</li>
                    <li>Nevi'im: Joshua, Judges, Samuel, Kings, Isaiah, Jeremiah, Ezekiel, Minor Prophets</li>
                    <li>Ketuvim: Psalms, Proverbs, Job, Song of Songs, Ruth, Lamentations, Ecclesiastes, Esther, Daniel, Ezra-Nehemiah, Chronicles</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">New Testament Canon</h3>
                  <p className="text-gray-600 mb-4">
                    The New Testament canon was gradually established through consensus among early Christian communities. 
                    The 27 books were officially recognized by the 4th century.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Gospels: Matthew, Mark, Luke, John</li>
                    <li>History: Acts of the Apostles</li>
                    <li>Pauline Epistles: Romans through Philemon</li>
                    <li>General Epistles: Hebrews, James, Peter, John, Jude</li>
                    <li>Prophecy: Revelation</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">66 Books</h3>
                <p className="text-gray-600">Total books in the Protestant Bible</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">40+ Authors</h3>
                <p className="text-gray-600">Different authors over 1,500 years</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">3 Languages</h3>
                <p className="text-gray-600">Hebrew, Aramaic, and Greek</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'manuscripts' && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Important Biblical Manuscripts</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {manuscripts.map((manuscript) => (
                  <div key={manuscript.id} className="border border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{manuscript.name}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{manuscript.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <FileText className="w-4 h-4" />
                        <span>{manuscript.language}</span>
                      </div>
                      {manuscript.location && (
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{manuscript.location}</span>
                        </div>
                      )}
                    </div>
                    <p className="text-gray-700 mb-3">{manuscript.description}</p>
                    {manuscript.significance && (
                      <p className="text-sm text-amber-600 font-medium">
                        Significance: {manuscript.significance}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'translations' && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Major Bible Translations</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {translations.map((translation) => (
                  <div key={translation.id} className="border border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{translation.name}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{translation.year}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Globe className="w-4 h-4" />
                        <span>{translation.language}</span>
                      </div>
                      {translation.translator && (
                        <div className="flex items-center space-x-1">
                          <Users className="w-4 h-4" />
                          <span>{translation.translator}</span>
                        </div>
                      )}
                    </div>
                    <p className="text-gray-700 mb-3">{translation.description}</p>
                    {translation.significance && (
                      <p className="text-sm text-amber-600 font-medium">
                        Historical Importance: {translation.significance}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
