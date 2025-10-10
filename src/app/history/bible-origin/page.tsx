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
  const [activeTab, setActiveTab] = useState<'overview' | 'canon' | 'origins' | 'translations' | 'magisterium'>('overview')
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
              onClick={() => setActiveTab('origins')}
              className={`px-6 py-3 rounded-md transition-colors ${
                activeTab === 'origins'
                  ? 'bg-amber-100 text-amber-800 font-semibold'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Language & Origins
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

            {/* New Testament Canon - Formation and Recognition */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">New Testament Canon (27 Books)</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">How the NT Canon Emerged</h3>
                  <p className="text-gray-600 mb-4">
                    The New Testament canon developed within the early Church as communities read, copied, and proclaimed
                    apostolic writings in the liturgy. By the 4th century, the Church widely recognized the same 27 books
                    we have today.
                  </p>
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-amber-800 mb-2">Key Recognition Criteria:</h4>
                    <ul className="text-amber-800 space-y-1">
                      <li>• <strong>Apostolicity</strong>: written by an apostle or close companion</li>
                      <li>• <strong>Orthodoxy</strong>: consistent with the rule of faith handed on by the Church</li>
                      <li>• <strong>Catholicity</strong>: widely used across Christian communities in the liturgy</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Historical Witnesses</h3>
                  <div className="bg-purple-50 p-4 rounded-lg space-y-2">
                    <p className="text-purple-800">
                      • <strong>Muratorian Fragment</strong> (c. 170): earliest list of many NT books
                    </p>
                    <p className="text-purple-800">
                      • <strong>Eusebius</strong> (early 4th c.): distinguishes universally acknowledged vs. disputed books
                    </p>
                    <p className="text-purple-800">
                      • <strong>Synod of Rome</strong> (382), <strong>Hippo</strong> (393), <strong>Carthage</strong> (397, 419): catalog the 27-book NT
                    </p>
                    <p className="text-purple-800">
                      • <strong>St. Athanasius</strong> (Festal Letter 39, 367): lists the same 27 NT books
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">The 27 Books</h3>
                <div className="grid md:grid-cols-2 gap-4 text-gray-700">
                  <ul className="list-disc list-inside space-y-1">
                    <li><strong>Gospels</strong>: Matthew, Mark, Luke, John</li>
                    <li><strong>Acts</strong>: Acts of the Apostles</li>
                    <li><strong>Pauline Letters</strong>: Romans, 1–2 Corinthians, Galatians, Ephesians, Philippians, Colossians, 1–2 Thessalonians, 1–2 Timothy, Titus, Philemon</li>
                  </ul>
                  <ul className="list-disc list-inside space-y-1">
                    <li><strong>Catholic Letters</strong>: Hebrews, James, 1–2 Peter, 1–3 John, Jude</li>
                    <li><strong>Apocalypse</strong>: Revelation</li>
                  </ul>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  Recognized and proclaimed by the Church in council and tradition; preserved in the Latin Vulgate and later Catholic editions.
                </p>
              </div>
            </div>

            {/* New Testament Usage of Septuagint */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">New Testament and the Septuagint</h2>
          <div className="space-y-6">
                <div className="bg-amber-50 p-6 rounded-lg">
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

            {/* Historic Recognition of the 73-Book Canon */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Historic Recognition of the 73‑Book Catholic Canon</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">4th–5th Century Witnesses</h3>
                  <div className="bg-gray-50 p-4 rounded-lg space-y-3 text-gray-700">
                    <p>• <strong>St. Athanasius</strong> (Festal Letter 39, 367): lists the 27 NT books; receives the Septuagint OT used in the Church.</p>
                    <p>• <strong>Decree of Pope Damasus I</strong> (Synod of Rome, 382): catalog of Scripture aligning with the Catholic 73‑book canon.</p>
                    <p>• <strong>Council of Hippo</strong> (393) and <strong>Carthage</strong> (397, 419): regional councils confirm the same list of OT + NT books used in the liturgy.</p>
                    <p>• <strong>Pope Innocent I</strong> (Letter to Exsuperius, 405): affirms the canonical list received and proclaimed by the Church.</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Continuity and Reaffirmations</h3>
                  <div className="bg-amber-50 p-4 rounded-lg space-y-3 text-amber-900">
                    <p>• <strong>Vulgate</strong> (St. Jerome, late 4th–early 5th c.): Latin translation received and used by the Western Church; preserves the canon in liturgy and teaching.</p>
                    <p>• <strong>Ecumenical Reception</strong>: Later councils and papal approvals reflect the same canonical usage across the Latin West.</p>
                    <p>• <strong>Council of Trent</strong> (1546): solemn reaffirmation of the traditional 73‑book canon in response to controversies, confirming continuous usage from antiquity.</p>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-6">In summary, the Church’s 73‑book canon—46 Old Testament (including the Deuterocanon) and 27 New Testament—was recognized and proclaimed in the 4th–5th centuries and faithfully transmitted in the life of the Church.</p>
            </div>
          </div>
        )}

        {activeTab === 'origins' && (
          <div className="space-y-8">

            {/* Hebrew Scriptures */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Hebrew Scriptures</h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Which Books Were in Hebrew?</h3>
                  <p className="text-gray-700 mb-2">The Old Testament (Catholic OT = 46 books) was written <strong>primarily in Hebrew</strong>.</p>
                  <ul className="text-gray-700 space-y-2">
                    <li>• <strong>Torah (Pentateuch)</strong>: Genesis–Deuteronomy</li>
                    <li>• <strong>Prophets</strong>: Joshua, Judges, Samuel, Kings, Isaiah, Jeremiah, Ezekiel, the Twelve</li>
                    <li>• <strong>Writings</strong>: Psalms, Proverbs, Job, Ruth, Song, Ecclesiastes, Lamentations, Esther (Hebrew base with additions), Daniel (Hebrew + Aramaic), Ezra–Nehemiah, Chronicles</li>
                    <li>• <strong>Deuterocanonical</strong> (received in the Church; Greek or Hebrew/Hebrew-lost traditions): Tobit, Judith, Wisdom, Sirach, Baruch, 1–2 Maccabees, additions to Esther/Daniel</li>
                  </ul>
                  </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">How Were They Written?</h3>
                  <ul className="text-blue-700 space-y-2">
                    <li>• <strong>Materials</strong>: Papyrus sheets (early) and parchment/vellum (later), penned with quills</li>
                    <li>• <strong>Formats</strong>: Scrolls first; later <strong>codices</strong> (book‑form, bound pages) for durability and reference</li>
                    <li>• <strong>Scripts</strong>: Early Paleo‑Hebrew; later square script (Aramaic‑derived) for Hebrew Bible</li>
                    <li>• <strong>Masoretic Marking</strong>: Vowel points/accents added (6th–10th c. AD) to preserve pronunciation</li>
                  </ul>
                  <p className="mt-3 text-sm text-blue-700"><strong>What is a codex?</strong> A codex is an early <em>book</em>: folded sheets bound on one side, replacing scrolls and enabling easier indexing, bookmarking, and compiling multiple works together.</p>
              </div>
                <div className="bg-amber-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-amber-800 mb-3">When Were They Written? (Hebrew Timeline)</h3>
                  <div className="text-amber-900 text-sm space-y-3">
                    <div>
                      <div className="font-semibold">c. 13th–11th c. BC (Early Traditions)</div>
                      <p>Oral patriarchal narratives and early poetic pieces later embedded within the Pentateuch and historical books.</p>
                    </div>
                    <div>
                      <div className="font-semibold">c. 10th–7th c. BC (Monarchy Period)</div>
                      <p>Core Pentateuchal materials finalized; royal chronicles; early prophetic oracles; Psalms attributed to Davidic/Temple settings.</p>
                    </div>
                    <div>
                      <div className="font-semibold">c. 7th–6th c. BC (Late Monarchic → Exile)</div>
                      <p>Jeremiah, Habakkuk, Zephaniah; Deuteronomistic history shaped; Lamentations after 586 BC.</p>
                    </div>
                    <div>
                      <div className="font-semibold">c. 6th c. BC (Exilic)</div>
                      <p>Ezekiel; parts of Daniel set in exile (Aramaic portions: Dan 2:4b–7:28); editorial work on Torah/Histories.</p>
                    </div>
                    <div>
                      <div className="font-semibold">c. 6th–5th c. BC (Return/Second Temple)</div>
                      <p>Haggai, Zechariah, Malachi; Ezra–Nehemiah; Chronicles; wisdom literature growth.</p>
                    </div>
                    <div>
                      <div className="font-semibold">c. 3rd–1st c. BC (Late Second Temple)</div>
                      <p>Sirach (Hebrew, preserved in Greek); Tobit/Judith (Heb/Aram with Greek preservation); Maccabees (Greek composition for 2 Maccabees).</p>
                    </div>
                    <div className="pt-2 border-t border-amber-200">
                      <div className="font-semibold">c. 6th–10th c. AD (Masoretic Stabilization)</div>
                      <p>Masoretes add vowel points and accents to the Hebrew consonantal text, standardizing synagogue reading.</p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="mt-6 text-sm text-gray-600">Note: The New Testament was composed in <strong>Koine Greek</strong> (with Semitic influence), while the Old Testament was primarily Hebrew with notable <strong>Aramaic</strong> passages (Daniel 2:4b–7:28; Ezra 4:8–6:18; 7:12–26).</p>
            </div>

            {/* Hebrew to Aramaic: Targum Tradition and the Peshitta */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">From Hebrew to Aramaic: Targumim and Early Aramaic Usage</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-amber-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-amber-800 mb-3">Why Aramaic?</h3>
                  <p className="text-amber-700">
                    After the Babylonian Exile, <strong>Aramaic</strong> became a common spoken language among Jews across the
                    Near East. In synagogues, Scripture read in Hebrew was often <strong>rendered orally into Aramaic</strong>
                    so the people could understand—this practice gave rise to the <strong>Targum</strong> tradition.
                  </p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">Targumim (Aramaic Renderings)</h3>
                  <ul className="text-blue-700 space-y-2">
                    <li>• <strong>Targum Onkelos</strong> (Pentateuch): A careful Aramaic rendering used widely in synagogues.</li>
                    <li>• <strong>Targum Jonathan</strong> (Prophets): Aramaic rendering with explanatory paraphrase.</li>
                    <li>• <strong>Function:</strong> Maintain Hebrew text while providing an <em>understood</em> proclamation.</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Timeline Context</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• <strong>6th–5th c. BC</strong>: Post‑Exilic period; Aramaic gains everyday use among Jews.</li>
                    <li>• <strong>5th–1st c. BC</strong>: Oral Aramaic synagogue renderings (early Targum practice).</li>
                    <li>• <strong>1st c. BC – 3rd c. AD</strong>: Written Targum traditions take shape and circulate.</li>
                    <li>• <strong>2nd–5th c. AD</strong>: Syriac <em>Peshitta</em> becomes normative in Syriac Churches.</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-purple-800 mb-3">Aramaic Within the Old Testament</h3>
                  <ul className="text-purple-700 space-y-2">
                    <li>• <strong>Daniel 2:4b–7:28</strong>: Court narratives and visions preserved in Aramaic.</li>
                    <li>• <strong>Ezra 4:8–6:18; 7:12–26</strong>: Imperial correspondence and decrees in Aramaic.</li>
                    <li>• <strong>Select Aramaic words/phrases</strong> appear elsewhere (e.g., place names, loanwords).</li>
                    <li>• <strong>Transmission:</strong> Hebrew remained the sacred textual base; Aramaic served
                      proclamation and administration where understood by the people.</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-800 mb-3">The Syriac Peshitta (Early Christian Aramaic)</h3>
                <p className="text-green-700">
                  In parallel, early Christians of the Syriac tradition produced the <strong>Peshitta</strong>, an Aramaic
                  translation of the Old Testament (from Hebrew and the Septuagint) and the New Testament. The Peshitta became
                  the normative Bible for Syriac‑speaking Churches and reflects how Scripture moved from Hebrew/Greek into
                  living languages for proclamation and catechesis.
                </p>
              </div>

              <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg border">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Aramaic Influence in Today’s Bible</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• <strong>Embedded Aramaic Words</strong>: <em>Abba</em> (Mk 14:36), <em>Talitha koum</em> (Mk 5:41), <em>Eloi/Eli, Eloi/Eli, lema sabachthani</em> (Mk 15:34/Mt 27:46), <em>Raca</em> (Mt 5:22), <em>Maranatha</em> (1 Cor 16:22), <em>Cephas</em> (Jn 1:42).</li>
                    <li>• <strong>Names & Titles</strong>: Many personal/place names and titles (e.g., <em>Golgotha</em>) reflect Aramaic forms.</li>
                    <li>• <strong>Textual Tradition</strong>: The Syriac <em>Peshitta</em> remains a significant witness in textual criticism and patristic citations.</li>
                    <li>• <strong>Liturgy & Devotion</strong>: Eastern Churches preserve Aramaic/Syriac hymns and prayers informing translation choices and spirituality.</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg border">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Time of Jesus: Language and Setting</h3>
                  <p className="text-gray-700 mb-2">
                    In the 1st century AD, Jesus’ everyday speech was <strong>Aramaic</strong> (Galilean dialect); He likely used
                    <strong>Hebrew</strong> in synagogue/Scripture contexts and <strong>Greek</strong> when needed in broader society.
                  </p>
                  <ul className="text-gray-700 space-y-2">
                    <li>• <strong>Gospel Echoes</strong>: Direct Aramaic quotes preserved (see above) to retain historical immediacy.</li>
                    <li>• <strong>Historical Context</strong>: Jesus’ birth under Herod the Great (late 1st c. BC) and ministry in Roman Palestine fit a multilingual environment (Aramaic‑Hebrew‑Greek).</li>
                    <li>• <strong>Implication for Translation</strong>: Awareness of Semitic idioms informs how sayings are rendered into modern languages.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Hebrew to Greek: The Septuagint Bridge */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">From Hebrew to Greek: The Septuagint as a Bridge</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-800 mb-3">Jewish Diaspora and Greek</h3>
                  <p className="text-green-700">
                    By the 3rd–2nd centuries BC, many Jews lived in Greek‑speaking regions. Translators produced the
                    <strong>Septuagint (LXX)</strong>, rendering Hebrew Scriptures into Greek so diaspora communities could read
                    and hear God’s Word in their common language.
                  </p>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-purple-800 mb-3">Influence on Early Christians</h3>
                  <p className="text-purple-700">
                    The New Testament frequently cites the LXX. Early Christians, evangelizing a Greek‑speaking world,
                    relied on this translation—shaping how Scripture was proclaimed, interpreted, and translated in the Church.
                  </p>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-800 mb-2">Timeline Highlights</h3>
                  <ul className="text-blue-700 space-y-2">
                    <li>• <strong>c. 250–150 BC</strong>: Core LXX books translated in Alexandria</li>
                    <li>• <strong>1st c. AD</strong>: LXX widely used by Christians; NT quotes align with LXX often</li>
                    <li>• <strong>4th–5th c. AD</strong>: Councils and Fathers witness to canon received in the Church</li>
                  </ul>
                </div>
                <div className="bg-amber-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-amber-800 mb-2">Time of Christ</h3>
                  <p className="text-amber-700">
                    In Roman Palestine, <strong>Aramaic</strong> was daily speech, <strong>Hebrew</strong> used for Scripture,
                    and <strong>Greek</strong> functioned as a common lingua franca. The LXX enabled rapid Gospel spread to
                    Gentile audiences accustomed to Greek Scripture.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Why It Matters for Translation</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• NT authors often follow LXX wording and interpretive choices</li>
                    <li>• LXX preserves readings reflecting older Hebrew exemplars</li>
                    <li>• Understanding LXX clarifies many OT citations in the NT</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg border">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Old Testament Books Preserved/Composed in Greek</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• <strong>Wisdom (of Solomon)</strong> — composed in Greek</li>
                    <li>• <strong>2 Maccabees</strong> — composed in Greek</li>
                    <li>• <strong>Sirach (Ecclesiasticus)</strong> — Hebrew original; Greek translation widely preserved</li>
                    <li>• <strong>Tobit</strong> — Hebrew/Aramaic originals; Greek versions in LXX are primary witnesses</li>
                    <li>• <strong>Judith</strong> — likely Hebrew/Aramaic origin; preserved chiefly in Greek</li>
                    <li>• <strong>Baruch</strong> — associated with Jeremiah; preserved in Greek tradition</li>
                    <li>• <strong>Additions</strong>: Greek additions to <em>Esther</em> and <em>Daniel</em> (Prayer of Azariah, Song of the Three, Susanna, Bel and the Dragon)</li>
                  </ul>
                  <p className="text-sm text-gray-600 mt-3">Note: The Catholic canon receives these Deuterocanonical books; many are preserved chiefly in Greek within the Septuagint tradition.</p>
                </div>
                <div className="bg-white p-6 rounded-lg border">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">New Testament Language</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• <strong>All 27 NT books</strong> are written in <strong>Koine Greek</strong> (with Semitic influence)</li>
                    <li>• Traditional note: an early <em>Hebrew/Aramaic</em> form of Matthew is mentioned by some Fathers; canonical text is Greek</li>
                    <li>• Aramaic sayings of Jesus are preserved within the Greek Gospels (e.g., <em>Talitha koum</em>)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Language of the Jews across the Ages (Independent) */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-3">Language of the Jews across the Ages</h2>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>• <strong>Patriarchal Era (Abraham, c. 2000–1500 BC)</strong>: Northwest Semitic dialects in Canaan; ancestral speech preceding biblical Hebrew.</li>
                <li>• <strong>Biblical Hebrew (c. 1000–100 BC)</strong>: Canaanite branch of Northwest Semitic; primary language of Israel’s Scriptures and worship.</li>
                <li>• <strong>Aramaic (Post‑Exilic, c. 600–100 BC and later)</strong>: Common spoken language; used in administration, daily life, and some Scripture passages.</li>
                <li>• <strong>Greek (Hellenistic/Roman, c. 300 BC – AD 100)</strong>: Koine Greek as lingua franca; Septuagint used widely by diaspora Jews and the early Church.</li>
              </ul>
            </div>

            {/* Canon Closure and Public Revelation */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-3">Canon Closed and Public Revelation</h2>
              <div className="space-y-3 text-gray-700 text-sm">
                <p>
                  By the <strong>late 4th–early 5th century</strong>, the Catholic Church definitively received and proclaimed the
                  same scriptural canon the Church uses today. Key witnesses include the <strong>Synod of Rome (382)</strong>,
                  <strong> Councils of Hippo (393)</strong> and <strong>Carthage (397, 419)</strong>, and papal affirmations (e.g.,
                  <strong> Pope Innocent I</strong>). This canonical reception reflects the Church’s <strong>teaching authority</strong>
                  (Magisterium) to safeguard and attest the books inspired by God.
                </p>
                <p>
                  Catholic teaching also holds that <strong>Public Revelation</strong>—God’s self‑revelation for our salvation—
                  is <strong>complete in Christ and the Apostolic age</strong>. Therefore, no new books are added to Scripture, and
                  later private revelations, even when approved, do not belong to the deposit of faith nor alter the biblical canon.
                </p>
                <p className="text-gray-600">References: Denzinger–Hünermann (Decrees), Council of Trent (1546) reaffirmation; Catechism of the Catholic Church §§66–67, 120.</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'translations' && (
          <div className="space-y-8">
            {/* Foundations: How Scripture Was Transmitted */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800">How Scripture Was Transmitted</h2>
              <p className="mt-1 text-sm text-gray-600 mb-5">From Oral → Stone → Scroll → Book → Printed Book → E‑Book/Audio Book</p>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Materials and Media</h3>
                  <ul className="text-gray-700 space-y-3">
                    <li>
                      <div className="font-semibold">• Stone & Clay (c. 2000–1200 BC)</div>
                      <div className="text-sm">Early inscriptions and covenant records were inscribed on stone or clay tablets. Think treaty steles and law codes—durable media that preserved sacred words for public reading.</div>
                    </li>
                    <li>
                      <div className="font-semibold">• Papyrus Scrolls (c. 1200–200 BC)</div>
                      <div className="text-sm">Sheets of pressed reeds glued into long rolls. Most early biblical books were copied on papyrus; scrolls were read column by column in synagogues and assemblies.</div>
                    </li>
                    <li>
                      <div className="font-semibold">• Parchment/Vellum (c. 400 BC – AD 1500)</div>
                      <div className="text-sm">Prepared animal skins offered strength and longevity. This enabled the move from scrolls to bound <em>codices</em> (books), combining many writings in one durable volume.</div>
                    </li>
                    <li>
                      <div className="font-semibold">• Paper Manuscripts (c. AD 1200–1450)</div>
                      <div className="text-sm">Paper—<em>invented in China (trad. Cai Lun, c. AD 105)</em>—spread via the Islamic world into Europe by the 12th–13th centuries, lowering costs and boosting manuscript production for schools, parishes, and monasteries.</div>
                    </li>
                    <li>
                      <div className="font-semibold">• Ink & Quills (antiquity–medieval)</div>
                      <div className="text-sm">Carbon and iron‑gall inks with reed/quill pens. Scribes ruled lines, counted columns, and proofread against exemplars to keep the text faithful.</div>
                    </li>
                    <li>
                      <div className="font-semibold">• Printing Press (from c. AD 1450)</div>
                      <div className="text-sm">
                        <div className="mb-1">The first movable‑type printer was invented by Johannes Gutenberg in Mainz, Germany, around AD 1450, and was used to produce the first printed Bible Gutenberg Bible (c. 1455).</div>
                        <div><strong>Why it mattered</strong>: Movable metal type standardized pages and references and made large‑scale, affordable Scripture printing possible (Catholic and vernacular editions).</div>
                      </div>
                    </li>
                    <li>
                      <div className="font-semibold">• Digital Media (from c. AD 2000)</div>
                      <div className="text-sm">E‑Bibles, mobile apps, and audio editions made Scripture searchable, portable, and globally accessible—while print remains vital for liturgy, study, and preservation.</div>
                    </li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">Copy of the Copies</h3>
                  <p className="text-blue-700 text-sm mb-2">
                    The <strong>original autographs</strong> of biblical books no longer exist. What we have are
                    <strong> thousands of manuscript copies</strong> across centuries and regions. Scholars compare these
                    witnesses ("textual criticism") to reconstruct the earliest attainable text with high confidence.
                  </p>
                  <div className="mt-3 text-blue-700">
                    <h4 className="font-semibold mb-1">Manuscript copying (c. 2nd–15th c. AD)</h4>
                    <p className="text-sm mb-2">As Christian communities spread, the Scriptures were <strong>hand‑copied repeatedly</strong> to supply parishes, monasteries, scholars, and missionaries—so the same books could be read, taught, and proclaimed across regions and centuries.</p>
                    <ul className="text-sm space-y-1 list-disc list-inside">
                      <li><strong>Scroll → Codex shift</strong> (c. 1st–4th c. AD): Christians rapidly favored the codex (book) format.</li>
                      <li><strong>Where (hand‑copying)</strong>: Monastic <em>scriptoria</em> (e.g., Benedictine/Cistercian houses), cathedral schools, urban workshops; later, university stations.</li>
                      <li><strong>Who (hand‑copying)</strong>: Ordained clergy (priests/monks), trained lay scribes, students/seminarians; in the Hebrew tradition, expert <em>soferim</em> operating under rabbinic norms (Masoretic line).</li>
                      <li><strong>How (hand‑copying)</strong>: Copying from an exemplar, <em>stichometry</em> (line/column counts), aloud collation, marginal <em>corrigenda</em>, and master‑copy checks to limit drift.</li>
                      <li><strong>Added Helps</strong>: Headings, lectionary cues; Masoretic notes preserved Hebrew reading traditions.</li>
                    </ul>
                  </div>
                  
                  <div className="mt-3 text-blue-700">
                    <h4 className="font-semibold mb-1">From hand‑copied to print to digital</h4>
                    <ul className="text-sm space-y-1 list-disc list-inside">
                      <li><strong>Print standardization</strong> — from c. AD 1450: Printed editions (e.g., Sixto‑Clementine Vulgate; critical Greek texts) reduced copy‑to‑copy drift.</li>
                      <li><strong>Modern translations</strong> — 19th–21st c.: Differ in philosophy (formal vs. dynamic equivalence) but rely on converging critical editions.</li>
                      <li><strong>Digital copying</strong> — 2000s–present: Global distribution, searchability, and version tracking improve consistency and access.</li>
                    </ul>
                  </div>
                  <p className="mt-3 text-blue-700 text-sm">
                    See also
                    <a className="underline ml-1" href="https://www.vatican.va/archive/ENG0839/_INDEX.HTM" target="_blank" rel="noreferrer">CCC §§105–108</a>
                    <span> and this </span>
                    <a className="underline" href="https://www.britannica.com/topic/textual-criticism" target="_blank" rel="noreferrer">overview of textual criticism</a>.
                  </p>
                </div>
                {/* Modifications moved out of panel to standalone card (match Scrolls to Codices styling) */}
                <div className="bg-amber-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-amber-800 mb-3">Modifications during copying</h3>
                  <p className="text-amber-700 text-sm mb-3">These features were <strong>added centuries later</strong> to help people read, navigate, and study Scripture. They are <strong>not part of the original inspired wording</strong> of the biblical authors.</p>
                  <div className="mb-4 border border-amber-200 bg-amber-100/70 rounded-md p-4">
                    <h4 className="font-semibold text-amber-900 mb-2">Structural aids</h4>
                    <ul className="text-sm text-amber-900 space-y-1 list-disc list-inside">
                      <li><strong>Punctuation & spacing</strong> — evolved from <em>scriptio continua</em> (no spaces) to spaced words and standardized punctuation across medieval/early modern periods.</li>
                      <li><strong>Paragraph divisions</strong> — c. 4th–13th c. AD; logical breaks and indentation to improve readability and liturgical use.</li>
                      <li><strong>Chapter headers & section titles</strong> — c. 4th–13th c. AD; brief titles introduced for public reading and teaching, later standardized by printers.</li>
                    </ul>
                  </div>
                  <div className="mb-4 border border-amber-200 bg-amber-100/70 rounded-md p-4">
                    <h4 className="font-semibold text-amber-900 mb-2">Numbering aids</h4>
                    <ul className="text-sm text-amber-900 space-y-1 list-disc list-inside">
                      <li><strong>Chapter numbers</strong> — added c. AD 1200; Stephen Langton's chapter scheme spread in Latin Bibles and later translations as a navigation aid.</li>
                      <li><strong>Verse numbers in Old Testament</strong> — added c. AD 600–1000; Masoretes formalized verse divisions in Hebrew; earlier manuscripts lacked this numbering.</li>
                      <li><strong>Verse numbers in New Testament</strong> — added AD 1551; Robert Estienne (Stephanus) introduced modern verse numbering in Greek/Latin printed editions.</li>
                    </ul>
                  </div>
                  <div className="mb-4 border border-amber-200 bg-amber-100/70 rounded-md p-4">
                    <h4 className="font-semibold text-amber-900 mb-2">Commentary</h4>
                    <ul className="text-sm text-amber-900 space-y-1 list-disc list-inside">
                      <li><strong>Lectionary cues (rubrics)</strong> — c. 6th–13th c. AD; marks indicating readings for Sundays/feasts.</li>
                      <li><strong>Explanatory notes in margins</strong> — c. 9th–12th c. AD; scholars and scribes added comments in the margins to explain difficult passages; the <em>Glossa Ordinaria</em> (12th c.) arranged standard commentary around the text.</li>
                      <li><strong>Maps, introductions, footnotes, cross-references and other Bible study helps</strong> — from 16th c.</li>
                    </ul>
                  </div>
                </div>

                
                
              </div>
              
            </div>
            
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

            {/* Printing Revolution - Detailed History */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Printing Revolution (1450–1600 AD)</h2>
              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">Before Printing: Hand‑Written Bibles</h3>
                  <p className="text-blue-700 mb-3">
                    Prior to printing, most Bibles and lectionaries were <strong>hand‑copied</strong> by clerics and monks in
                    seminaries and monasteries. Materials evolved from papyrus scrolls to parchment/vellum codices; paper and
                    durable inks improved availability by the late Middle Ages, but each copy remained labor‑intensive.
                  </p>
                  <h3 className="text-xl font-semibold text-blue-800 mb-3 mt-4">Gutenberg and the First Printed Bible</h3>
                  <p className="text-blue-700 mb-3">
                    Around 1450, <strong>Johannes Gutenberg</strong> introduced movable‑type printing in Mainz. The 42‑line
                    <strong>Gutenberg Bible (c.1455)</strong> proved Scripture could be reproduced consistently and at scale,
                    dramatically reducing scribal errors and costs over time.
                  </p>
                  <ul className="text-blue-700 space-y-2">
                    <li>• <strong>Standardization:</strong> Stabilized text, pagination, and reference systems.</li>
                    <li>• <strong>Accessibility:</strong> Gradually expanded access beyond monastic libraries.</li>
                    <li>• <strong>Scholarship:</strong> Enabled concordances, grammars, and commentaries to flourish.</li>
                  </ul>
                </div>

                <div className="bg-amber-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-amber-800 mb-3">The Church’s Role and Caution</h3>
                  <p className="text-amber-700 mb-4">
                    The Catholic Church supported printed liturgical and biblical texts but exercised prudent oversight to
                    safeguard doctrinal integrity. Printing magnified the risk of rapidly spreading errors or polemics;
                    ecclesial approval (imprimatur, nihil obstat) emerged to ensure faithful editions for catechesis and worship.
                  </p>
                  <ul className="text-amber-800 space-y-2">
                    <li>• <strong>Authorized Editions:</strong> Promotion of vetted Latin Vulgate and approved vernaculars.</li>
                    <li>• <strong>Errata Control:</strong> Review structures to catch typographic and doctrinal errors.</li>
                    <li>• <strong>Pastoral Aim:</strong> Encourage reading within the Church’s living Tradition and liturgy.</li>
                  </ul>
                </div>

                <div className="bg-red-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-red-800 mb-3">Controversies and the Protestant Factor</h3>
                  <p className="text-red-700 mb-3">
                    Printing also accelerated <strong>polemical editions</strong> and unauthorized translations. Some reformers
                    used the press to promote novel doctrines, remove the Deuterocanon, or add partisan notes—prompting the
                    Church’s caution. At the same time, printing helped legitimate Catholic editions reach more faithful.
                  </p>
                  <ul className="text-red-800 space-y-2">
                    <li>• <strong>Rapid Diffusion:</strong> Ideas—good or erroneous—spread faster than ever.</li>
                    <li>• <strong>Response:</strong> Catholic publishers produced approved Bibles and catechisms for clarity.</li>
                    <li>• <strong>Outcome:</strong> Over time, print became a powerful ally of sound catechesis and mission.</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-800 mb-3">Reconciliation and Outcomes</h3>
                  <p className="text-green-700">
                    Over the 16th century, printing matured into a partner of the Church’s mission: approved Bibles, catechisms,
                    and missals spread widely; universities and seminaries leveraged print for biblical languages and exegesis.
                    The Church’s prudence helped unite fidelity to Revelation with the benefits of mass literacy and scholarship.
                  </p>
                </div>
              </div>
            </div>

            {/* Vernacular Translations - Detailed History */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Vernacular Translations (1500–1800 AD)</h2>
              <div className="space-y-6">
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-purple-800 mb-3">From Latin to the Languages of the People</h3>
                  <p className="text-purple-700 mb-3">
                    As literacy grew, demand for Scripture in local languages accelerated. Catholic territories produced
                    approved vernaculars (e.g., <em>Douay‑Rheims</em> 1582/1609‑10) while also maintaining the Vulgate’s
                    normative role in theology and liturgy. The aim: faithful renderings guided by Tradition and sound exegesis.
                  </p>
                  <ul className="text-purple-700 space-y-2">
                    <li>• <strong>Scholarship:</strong> Development of Hebrew/Greek studies informed translation quality.</li>
                    <li>• <strong>Catechesis:</strong> Vernaculars used alongside catechisms to prevent misinterpretation.</li>
                    <li>• <strong>Unity of Faith:</strong> Vernacular use was encouraged within the Church’s interpretive authority.</li>
                  </ul>
                </div>

                <div className="bg-red-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-red-800 mb-3">Why the Church Was Cautious</h3>
                  <p className="text-red-700 mb-4">
                    Isolated readings detached from Tradition risk doctrinal confusion. The Church’s caution focused on ensuring
                    accurate texts, notes, and contexts—especially amid polemical editions that omitted the Deuterocanon or
                    introduced tendentious commentary. Guidance sought to protect unity of faith and morals.
                  </p>
                  <ul className="text-red-800 space-y-2">
                    <li>• <strong>Textual Integrity:</strong> Avoiding omissions/alterations (e.g., deuterocanonical books).</li>
                    <li>• <strong>Doctrinal Notes:</strong> Providing reliable annotations to prevent misreadings.</li>
                    <li>• <strong>Pastoral Oversight:</strong> Ensuring editions serve evangelization and holiness.</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">Key Milestones and Protestant/Catholic Paths</h3>
                  <ul className="text-blue-700 space-y-2">
                    <li>• <strong>Luther (1522)</strong>: German NT; later OT; relegated Deuterocanon ("Apocrypha").</li>
                    <li>• <strong>Tyndale (1526)</strong>: Early English NT; influenced KJV; faced opposition for unauthorized editions.</li>
                    <li>• <strong>Douay‑Rheims (1582/1609‑10)</strong>: Catholic English translation from the Vulgate with notes.</li>
                    <li>• <strong>King James Version (1611)</strong>: Royally sponsored English translation (initially with Apocrypha section).</li>
                  </ul>
                  <p className="text-blue-700 mt-2">
                    In Catholic life, vernaculars were increasingly used for <em>devotion and catechesis</em>, while the Vulgate
                    remained the liturgical and doctrinal norm—later complemented by approved critical editions and modern Catholic translations.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Long‑Term Reconciliation</h3>
                  <p className="text-gray-700">
                    By the 17th–18th centuries, approved vernacular Bibles became common in Catholic lands. The Church paired them
                    with catechesis, homilies, and sacramental life—integrating personal reading with the communal, liturgical
                    proclamation of the Word, in continuity with apostolic faith.
                  </p>
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

            {/* Recent Archaeological Discoveries */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Recent Archaeological Discoveries and Their Impact on Translation</h2>
              <div className="space-y-6">
                <div className="bg-amber-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-amber-800 mb-3">The Dead Sea Scrolls (1947-1956)</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-amber-800 mb-2">Discovery Story</h4>
                      <p className="text-amber-700 mb-3">
                        In 1947, a Bedouin shepherd named Muhammed edh-Dhib discovered the first scrolls in caves near Qumran, 
                        on the northwest shore of the Dead Sea. Over the next decade, archaeologists found approximately 900 
                        manuscripts in 11 caves, dating from 250 BC to 68 AD.
                      </p>
                      <div className="bg-white p-4 rounded-lg">
                        <p className="text-amber-600 text-sm">
                          <strong>Key Finding:</strong> The scrolls included the oldest known copies of Hebrew Bible books, 
                          some 1,000 years older than the previously oldest manuscripts (Masoretic Text).
                        </p>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-amber-800 mb-2">Impact on Translation</h4>
                      <ul className="text-amber-700 space-y-2">
                        <li>• <strong>Textual Accuracy:</strong> Confirmed the remarkable accuracy of the Masoretic Text tradition</li>
                        <li>• <strong>Septuagint Validation:</strong> Showed that many Septuagint readings were based on older Hebrew texts</li>
                        <li>• <strong>Canon Development:</strong> Revealed which books were considered authoritative in the 1st century BC</li>
                        <li>• <strong>Translation Methods:</strong> Provided insights into how ancient translators worked</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-800 mb-3">Other Significant Discoveries</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-green-800 mb-2">Codex Sinaiticus (1844)</h4>
                      <p className="text-green-700 mb-2">
                        Discovered by Constantin von Tischendorf at St. Catherine's Monastery in Sinai. This 4th-century 
                        Greek manuscript contains the complete New Testament and most of the Old Testament.
                      </p>
                      <p className="text-green-600 text-sm">
                        <strong>Impact:</strong> Provided the oldest complete New Testament text, influencing modern translations.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-green-800 mb-2">Codex Vaticanus (15th century discovery)</h4>
                      <p className="text-green-700 mb-2">
                        A 4th-century Greek manuscript held in the Vatican Library, containing most of the Bible in Greek.
                      </p>
                      <p className="text-green-600 text-sm">
                        <strong>Impact:</strong> One of the most important witnesses to the original text, used in critical editions.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-green-800 mb-2">Oxyrhynchus Papyri (1897-1907)</h4>
                      <p className="text-green-700 mb-2">
                        Thousands of papyrus fragments discovered in Egypt, including early New Testament texts from the 2nd-3rd centuries.
                      </p>
                      <p className="text-green-600 text-sm">
                        <strong>Impact:</strong> Provided the earliest known fragments of New Testament books, confirming early circulation.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">How These Discoveries Improved Modern Translations</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-blue-700 font-medium">Textual Criticism</p>
                      <p className="text-blue-600 text-sm">
                        Scholars can now compare thousands of manuscripts to determine the most likely original text, 
                        leading to more accurate translations.
                      </p>
                    </div>
                    <div>
                      <p className="text-blue-700 font-medium">Historical Context</p>
                      <p className="text-blue-600 text-sm">
                        Understanding the historical and cultural context of biblical texts helps translators 
                        convey the original meaning more accurately.
                      </p>
                    </div>
                    <div>
                      <p className="text-blue-700 font-medium">Canon Development</p>
                      <p className="text-blue-600 text-sm">
                        Archaeological evidence supports the Catholic Church's traditional understanding of 
                        which books belong in the biblical canon.
                      </p>
                    </div>
                    <div>
                      <p className="text-blue-700 font-medium">Translation Philosophy</p>
                      <p className="text-blue-600 text-sm">
                        Modern translators can make more informed decisions about when to use formal vs. 
                        dynamic equivalence based on manuscript evidence.
                      </p>
                    </div>
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
