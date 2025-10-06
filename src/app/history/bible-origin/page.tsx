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
  const [activeTab, setActiveTab] = useState<'overview' | 'canon' | 'translations' | 'magisterium'>('overview')
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
              onClick={() => setActiveTab('canon')}
              className={`px-6 py-3 rounded-md transition-colors ${
                activeTab === 'canon'
                  ? 'bg-amber-100 text-amber-800 font-semibold'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Canon Formation
            </button>
            <button
              onClick={() => setActiveTab('translations')}
              className={`px-6 py-3 rounded-md transition-colors ${
                activeTab === 'translations'
                  ? 'bg-amber-100 text-amber-800 font-semibold'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Translation History
            </button>
            <button
              onClick={() => setActiveTab('magisterium')}
              className={`px-6 py-3 rounded-md transition-colors ${
                activeTab === 'magisterium'
                  ? 'bg-amber-100 text-amber-800 font-semibold'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Magisterium & Interpretation
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
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Old Testament Canon (Catholic - 46 books)</h3>
                  <p className="text-gray-600 mb-4">
                    The Catholic Old Testament canon follows the Septuagint tradition and contains 46 books, 
                    including the Deuterocanonical books received by the early Church.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li><strong>Pentateuch (5)</strong>: Genesis, Exodus, Leviticus, Numbers, Deuteronomy</li>
                    <li><strong>Historical (16)</strong>: Joshua, Judges, Ruth, 1–2 Samuel, 1–2 Kings, 1–2 Chronicles, Ezra, Nehemiah, Tobit, Judith, Esther (with additions), 1–2 Maccabees</li>
                    <li><strong>Wisdom (7)</strong>: Job, Psalms, Proverbs, Ecclesiastes, Song of Songs, Wisdom, Sirach</li>
                    <li><strong>Prophets (18)</strong>: Isaiah, Jeremiah, Lamentations, Baruch, Ezekiel, Daniel (with additions), and the Twelve Minor Prophets</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">New Testament Canon (27 books)</h3>
                  <p className="text-gray-600 mb-4">
                    The New Testament canon was gradually established through consensus among early Christian communities 
                    and affirmed by the Church. The 27 books were recognized by the 4th century.
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
                <h3 className="text-2xl font-bold text-gray-800 mb-2">73 Books</h3>
                <p className="text-gray-600">Total books in the Catholic Bible</p>
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

        {activeTab === 'canon' && (
          <div className="space-y-8">
            {/* Hebrew Canon vs Septuagint */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Hebrew Canon vs Septuagint</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Hebrew Canon (Masoretic Text)</h3>
                  <p className="text-gray-600 mb-4">
                    The Hebrew Bible (Tanakh) consists of 39 books established by Jewish scholars around 100 AD. 
                    This canon was preserved by the Masoretes, Jewish scribes who meticulously copied the text 
                    and added vowel points and accent marks.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Structure:</h4>
                    <ul className="text-blue-700 space-y-1">
                      <li>• Torah (5 books): Genesis, Exodus, Leviticus, Numbers, Deuteronomy</li>
                      <li>• Nevi'im (8 books): Joshua, Judges, Samuel, Kings, Isaiah, Jeremiah, Ezekiel, Minor Prophets</li>
                      <li>• Ketuvim (11 books): Psalms, Proverbs, Job, Song of Songs, Ruth, Lamentations, Ecclesiastes, Esther, Daniel, Ezra-Nehemiah, Chronicles</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Septuagint (LXX)</h3>
                  <p className="text-gray-600 mb-4">
                    The Septuagint is the Greek translation of the Hebrew Scriptures, completed around 250 BC 
                    in Alexandria, Egypt. It includes additional books not found in the Hebrew canon, 
                    known as the Deuterocanonical books.
                  </p>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Additional Books (Deuterocanonical):</h4>
                    <ul className="text-green-700 space-y-1">
                      <li>• Tobit, Judith, Wisdom, Sirach</li>
                      <li>• Baruch, 1 & 2 Maccabees</li>
                      <li>• Additions to Esther and Daniel</li>
                      <li>• Prayer of Manasseh</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* New Testament Usage of Septuagint */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">New Testament and the Septuagint</h2>
              <div className="space-y-6">
                <div className="bg-amber-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-amber-800 mb-3">Why the New Testament Used the Septuagint</h3>
                  <p className="text-amber-700 mb-4">
                    The New Testament authors, writing in Greek, frequently quoted from the Septuagint rather than 
                    the Hebrew text. This was because:
                  </p>
                  <ul className="text-amber-700 space-y-2">
                    <li>• Greek was the common language of the Roman Empire</li>
                    <li>• The Septuagint was widely used in Jewish communities outside Palestine</li>
                    <li>• Many New Testament quotations match the Septuagint text exactly</li>
                    <li>• The Septuagint was considered inspired Scripture by early Christians</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">Examples of Septuagint Usage</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-blue-700 font-medium">Matthew 1:23 (Isaiah 7:14)</p>
                      <p className="text-blue-600 text-sm">"Behold, a virgin shall conceive" - uses Greek "parthenos" (virgin) from Septuagint</p>
                    </div>
                    <div>
                      <p className="text-blue-700 font-medium">Acts 2:17-21 (Joel 2:28-32)</p>
                      <p className="text-blue-600 text-sm">Peter's Pentecost sermon quotes directly from the Septuagint</p>
                    </div>
                    <div>
                      <p className="text-blue-700 font-medium">Hebrews 1:6 (Deuteronomy 32:43)</p>
                      <p className="text-blue-600 text-sm">Quote appears only in the Septuagint, not in Hebrew Masoretic text</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Saint Jerome and the Vulgate */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Saint Jerome and the Vulgate</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                    <BookOpen className="w-8 h-8 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">The Vulgate Translation (382-405 AD)</h3>
                    <p className="text-gray-600 mb-4">
                      Saint Jerome was commissioned by Pope Damasus I to create a new Latin translation of the Bible. 
                      Jerome's approach was revolutionary - he went back to the original Hebrew texts for the Old Testament, 
                      rather than relying solely on the Septuagint.
                    </p>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-800 mb-2">Jerome's Methodology:</h4>
                      <ul className="text-purple-700 space-y-1">
                        <li>• Translated Old Testament from Hebrew (Hebraica veritas)</li>
                        <li>• Translated New Testament from Greek</li>
                        <li>• Included Deuterocanonical books from Septuagint</li>
                        <li>• Created a unified Latin Bible for the Western Church</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Impact on Canon Formation</h3>
                  <p className="text-gray-600 mb-4">
                    Jerome's Vulgate became the standard Bible of the Catholic Church for over 1000 years. 
                    His inclusion of the Deuterocanonical books established the Catholic canon, while his 
                    translation methodology influenced how the Church understood the relationship between 
                    Hebrew and Greek texts.
                  </p>
                </div>
              </div>
            </div>

            {/* Protestant Return to Hebrew Canon */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Protestant Return to Hebrew Canon</h2>
              <div className="space-y-6">
                <div className="bg-red-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-red-800 mb-3">The Reformation and Canon Changes</h3>
                  <p className="text-red-700 mb-4">
                    During the Protestant Reformation, reformers like Martin Luther questioned the authority 
                    of the Deuterocanonical books, arguing that only the Hebrew canon should be considered 
                    authoritative Scripture.
                  </p>
                  <div className="space-y-3">
                    <div>
                      <p className="text-red-700 font-medium">Martin Luther's Position (1522)</p>
                      <p className="text-red-600 text-sm">Moved Deuterocanonical books to an appendix, calling them "Apocrypha"</p>
                    </div>
                    <div>
                      <p className="text-red-700 font-medium">Reformed Tradition</p>
                      <p className="text-red-600 text-sm">Completely removed Deuterocanonical books from Protestant Bibles</p>
                    </div>
                    <div>
                      <p className="text-red-700 font-medium">Anglican Tradition</p>
                      <p className="text-red-600 text-sm">Included Deuterocanonical books in separate section</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-orange-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-orange-800 mb-3">Doctrinal Implications</h3>
                  <p className="text-orange-700 mb-4">
                    The removal of Deuterocanonical books had significant doctrinal consequences:
                  </p>
                  <ul className="text-orange-700 space-y-2">
                    <li>• <strong>Purgatory:</strong> 2 Maccabees 12:44-45 supports prayers for the dead</li>
                    <li>• <strong>Intercession of Saints:</strong> Tobit 12:12-15 shows angelic intercession</li>
                    <li>• <strong>Works and Salvation:</strong> Sirach and Wisdom emphasize good works</li>
                    <li>• <strong>Mary's Perpetual Virginity:</strong> Wisdom 4:1-2 supports perpetual virginity</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'translations' && (
          <div className="space-y-8">
            {/* Translation Timeline */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Translation Timeline: From Vulgate to Modern Versions</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Vulgate Era (400-1500 AD)</h3>
                    <p className="text-gray-600 mt-2">
                      Saint Jerome's Vulgate became the standard Bible of the Western Church for over 1000 years. 
                      During this period, most Christians heard the Bible in Latin during Mass, as vernacular 
                      translations were rare and often controversial.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <FileText className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Printing Revolution (1450-1600 AD)</h3>
                    <p className="text-gray-600 mt-2">
                      The invention of the printing press by Johannes Gutenberg revolutionized Bible distribution. 
                      The Gutenberg Bible (1455) was the first major book printed with movable type, making 
                      Bibles more accessible and affordable.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Globe className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Vernacular Translations (1500-1800 AD)</h3>
                    <p className="text-gray-600 mt-2">
                      The Protestant Reformation spurred the creation of vernacular Bible translations. 
                      Martin Luther's German Bible (1522), William Tyndale's English New Testament (1526), 
                      and the King James Version (1611) made Scripture accessible to common people.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Modern Era (1800-Present)</h3>
                    <p className="text-gray-600 mt-2">
                      The 19th and 20th centuries saw an explosion of Bible translations, including Catholic 
                      versions like the Douay-Rheims, Revised Standard Version Catholic Edition, and New 
                      American Bible. Modern scholarship and archaeological discoveries improved translation accuracy.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Catholic vs Protestant Translation Approaches */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Catholic vs Protestant Translation Approaches</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Catholic Approach</h3>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-3">Key Characteristics:</h4>
                    <ul className="text-blue-700 space-y-2">
                      <li>• Includes Deuterocanonical books</li>
                      <li>• Emphasizes Church tradition and Magisterium</li>
                      <li>• Uses formal equivalence (word-for-word)</li>
                      <li>• Maintains theological terminology</li>
                      <li>• Approved by Church authorities</li>
                    </ul>
                    <div className="mt-4">
                      <h5 className="font-semibold text-blue-800 mb-2">Major Catholic Translations:</h5>
                      <ul className="text-blue-700 space-y-1">
                        <li>• Douay-Rheims (1582-1610)</li>
                        <li>• Revised Standard Version Catholic Edition (1966)</li>
                        <li>• New American Bible (1970)</li>
                        <li>• New Jerusalem Bible (1985)</li>
                        <li>• Catholic Public Domain Version (2009)</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Protestant Approach</h3>
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-3">Key Characteristics:</h4>
                    <ul className="text-green-700 space-y-2">
                      <li>• Excludes Deuterocanonical books</li>
                      <li>• Emphasizes individual interpretation</li>
                      <li>• Uses dynamic equivalence (thought-for-thought)</li>
                      <li>• Modernizes language for accessibility</li>
                      <li>• Multiple competing versions</li>
                    </ul>
                    <div className="mt-4">
                      <h5 className="font-semibold text-green-800 mb-2">Major Protestant Translations:</h5>
                      <ul className="text-green-700 space-y-1">
                        <li>• King James Version (1611)</li>
                        <li>• New International Version (1978)</li>
                        <li>• English Standard Version (2001)</li>
                        <li>• New Living Translation (1996)</li>
                        <li>• Christian Standard Bible (2017)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Translation Challenges and Issues */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Translation Challenges and Issues</h2>
              <div className="space-y-6">
                <div className="bg-red-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-red-800 mb-3">Common Translation Pitfalls</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-red-700 font-medium">Cultural Context Loss</p>
                      <p className="text-red-600 text-sm">Ancient idioms and cultural references may be lost in translation</p>
                    </div>
                    <div>
                      <p className="text-red-700 font-medium">Theological Bias</p>
                      <p className="text-red-600 text-sm">Translators may unconsciously favor their theological positions</p>
                    </div>
                    <div>
                      <p className="text-red-700 font-medium">Textual Variants</p>
                      <p className="text-red-600 text-sm">Different manuscript traditions can lead to different translations</p>
                    </div>
                    <div>
                      <p className="text-red-700 font-medium">Language Evolution</p>
                      <p className="text-red-600 text-sm">Words change meaning over time, affecting interpretation</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-amber-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-amber-800 mb-3">Examples of Translation Issues</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-amber-700 font-medium">Isaiah 7:14 - "Virgin" vs "Young Woman"</p>
                      <p className="text-amber-600 text-sm">Hebrew "almah" can mean either, but Greek Septuagint uses "parthenos" (virgin)</p>
                    </div>
                    <div>
                      <p className="text-amber-700 font-medium">Matthew 16:18 - "Rock" vs "Stone"</p>
                      <p className="text-amber-600 text-sm">Greek "petros" vs "petra" - different words for different types of rock</p>
                    </div>
                    <div>
                      <p className="text-amber-700 font-medium">John 1:1 - "Word" vs "Logos"</p>
                      <p className="text-amber-600 text-sm">Greek "logos" has philosophical implications beyond simple "word"</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Modern Translation Methods */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Modern Translation Methods</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-purple-800 mb-3">Formal Equivalence</h3>
                  <p className="text-purple-700 mb-3">
                    Word-for-word translation that preserves the original structure and vocabulary as much as possible.
                  </p>
                  <div className="space-y-2">
                    <p className="text-purple-600 text-sm"><strong>Pros:</strong> Maintains original meaning, preserves theological terms</p>
                    <p className="text-purple-600 text-sm"><strong>Cons:</strong> Can be difficult to read, may lose clarity</p>
                    <p className="text-purple-600 text-sm"><strong>Examples:</strong> NASB, ESV, Douay-Rheims</p>
                  </div>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">Dynamic Equivalence</h3>
                  <p className="text-blue-700 mb-3">
                    Thought-for-thought translation that focuses on conveying the meaning rather than exact words.
                  </p>
                  <div className="space-y-2">
                    <p className="text-blue-600 text-sm"><strong>Pros:</strong> Easier to read, clearer meaning</p>
                    <p className="text-blue-600 text-sm"><strong>Cons:</strong> May lose nuances, more interpretive</p>
                    <p className="text-blue-600 text-sm"><strong>Examples:</strong> NIV, NLT, Good News Bible</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'magisterium' && (
          <div className="space-y-8">
            {/* Magisterium's Role */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">The Magisterium's Role in Biblical Interpretation</h2>
              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">What is the Magisterium?</h3>
                  <p className="text-blue-700 mb-4">
                    The Magisterium is the teaching authority of the Catholic Church, consisting of the Pope and the bishops 
                    in communion with him. It has the responsibility to authentically interpret the Word of God, both 
                    Scripture and Tradition, and to preserve the deposit of faith.
                  </p>
                  <div className="space-y-3">
                    <div>
                      <p className="text-blue-700 font-medium">Extraordinary Magisterium</p>
                      <p className="text-blue-600 text-sm">Solemn definitions by Pope or Ecumenical Councils (infallible)</p>
                    </div>
                    <div>
                      <p className="text-blue-700 font-medium">Ordinary Magisterium</p>
                      <p className="text-blue-600 text-sm">Regular teaching of bishops in communion with Pope</p>
                    </div>
                    <div>
                      <p className="text-blue-700 font-medium">Universal Magisterium</p>
                      <p className="text-blue-600 text-sm">Teaching held consistently by all bishops throughout history</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-800 mb-3">Why Interpretation Needs Magisterial Guidance</h3>
                  <ul className="text-green-700 space-y-2">
                    <li>• <strong>Prevents Heresy:</strong> Guards against misinterpretation that leads to false doctrine</li>
                    <li>• <strong>Maintains Unity:</strong> Ensures consistent interpretation across the universal Church</li>
                    <li>• <strong>Preserves Tradition:</strong> Maintains continuity with apostolic teaching</li>
                    <li>• <strong>Provides Authority:</strong> Offers definitive guidance on disputed passages</li>
                    <li>• <strong>Prevents Confusion:</strong> Clarifies ambiguous or difficult texts</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Examples of Translation Pitfalls */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Examples of Translation Pitfalls and Conflicts</h2>
              <div className="space-y-6">
                <div className="bg-red-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-red-800 mb-3">Major Translation Errors and Their Consequences</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-red-700 font-medium">Erasmus' Greek New Testament (1516)</p>
                      <p className="text-red-600 text-sm mb-2">
                        Erasmus' hurried translation contained errors, including 1 John 5:7-8 (the Johannine Comma), 
                        which became the basis for the King James Version's Trinitarian formula.
                      </p>
                      <p className="text-red-600 text-sm">
                        <strong>Impact:</strong> This verse was used to support Trinitarian doctrine, but it's not found in most ancient manuscripts.
                      </p>
                    </div>
                    <div>
                      <p className="text-red-700 font-medium">Luther's Translation of Romans 3:28</p>
                      <p className="text-red-600 text-sm mb-2">
                        Luther added the word "alone" to "faith" in Romans 3:28, making it "justified by faith alone," 
                        which wasn't in the original Greek text.
                      </p>
                      <p className="text-red-600 text-sm">
                        <strong>Impact:</strong> This became a cornerstone of Protestant "sola fide" doctrine, despite not being in Scripture.
                      </p>
                    </div>
                    <div>
                      <p className="text-red-700 font-medium">Jehovah's Witnesses' New World Translation</p>
                      <p className="text-red-600 text-sm mb-2">
                        The NWT consistently mistranslates passages to support Arian theology, such as John 1:1 
                        ("a god" instead of "God") and Colossians 1:15-16.
                      </p>
                      <p className="text-red-600 text-sm">
                        <strong>Impact:</strong> Denies the divinity of Christ and the Trinity.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-amber-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-amber-800 mb-3">Conflicts Due to Translation Differences</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-amber-700 font-medium">Purgatory Debate</p>
                      <p className="text-amber-600 text-sm">
                        Protestant translations often omit or downplay passages supporting purgatory (2 Maccabees 12:44-45, 
                        1 Corinthians 3:15), while Catholic translations preserve them.
                      </p>
                    </div>
                    <div>
                      <p className="text-amber-700 font-medium">Papal Authority</p>
                      <p className="text-amber-600 text-sm">
                        Matthew 16:18-19 is translated differently to support or deny papal authority, with "rock" 
                        vs "stone" interpretations.
                      </p>
                    </div>
                    <div>
                      <p className="text-amber-700 font-medium">Mary's Perpetual Virginity</p>
                      <p className="text-amber-600 text-sm">
                        Isaiah 7:14 and Matthew 1:23 translations of "virgin" vs "young woman" affect Marian doctrine.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Catholic Approach to Scripture */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Catholic Approach to Scripture Interpretation</h2>
              <div className="space-y-6">
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-purple-800 mb-3">The Three-Legged Stool</h3>
                  <p className="text-purple-700 mb-4">
                    Catholic interpretation rests on three pillars that work together:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-800 mb-2">Scripture</h4>
                      <p className="text-purple-600 text-sm">The written Word of God, inspired and inerrant</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-800 mb-2">Tradition</h4>
                      <p className="text-purple-600 text-sm">The living transmission of apostolic teaching</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-800 mb-2">Magisterium</h4>
                      <p className="text-purple-600 text-sm">The teaching authority of the Church</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">Principles of Catholic Biblical Interpretation</h3>
                  <ul className="text-blue-700 space-y-2">
                    <li>• <strong>Literal Sense:</strong> The meaning intended by the human author</li>
                    <li>• <strong>Spiritual Sense:</strong> The meaning intended by God (allegorical, moral, anagogical)</li>
                    <li>• <strong>Context:</strong> Historical, cultural, and literary context of the text</li>
                    <li>• <strong>Analogy of Faith:</strong> Scripture must be interpreted in harmony with the whole of revelation</li>
                    <li>• <strong>Living Tradition:</strong> The Church's understanding of Scripture throughout history</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Modern Challenges */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Modern Challenges in Biblical Translation</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Contemporary Issues</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-gray-700 font-medium">Gender-Inclusive Language</p>
                      <p className="text-gray-600 text-sm">
                        Some modern translations change "brothers" to "brothers and sisters" or use gender-neutral 
                        language, which can affect theological meaning.
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-700 font-medium">Cultural Adaptation</p>
                      <p className="text-gray-600 text-sm">
                        Translators must balance cultural relevance with maintaining the original meaning and context.
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-700 font-medium">Textual Criticism</p>
                      <p className="text-gray-600 text-sm">
                        New manuscript discoveries and textual criticism methods continue to refine our understanding 
                        of the original texts.
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-700 font-medium">Digital Age Challenges</p>
                      <p className="text-gray-600 text-sm">
                        The internet allows anyone to create and distribute translations, making authoritative 
                        guidance more important than ever.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-800 mb-3">The Catholic Response</h3>
                  <p className="text-green-700 mb-4">
                    The Catholic Church continues to provide guidance through:
                  </p>
                  <ul className="text-green-700 space-y-2">
                    <li>• <strong>Approved Translations:</strong> Official recognition of reliable translations</li>
                    <li>• <strong>Biblical Commissions:</strong> Expert guidance on translation principles</li>
                    <li>• <strong>Papal Documents:</strong> Teaching on Scripture interpretation</li>
                    <li>• <strong>Liturgical Use:</strong> Scripture in the context of worship and tradition</li>
                    <li>• <strong>Academic Scholarship:</strong> Support for rigorous biblical studies</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
