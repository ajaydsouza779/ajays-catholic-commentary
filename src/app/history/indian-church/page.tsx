'use client'

import { useState } from 'react'
import {
  MapPin,
  Users,
  BookOpen,
  Landmark,
  Church,
  Heart,
  Globe,
  Cross,
  Award,
  Crown,
  Star,
  BookMarked,
  GraduationCap,
  Stethoscope,
  Shield,
} from 'lucide-react'

type TabKey =
  | 'overview'
  | 'apostolic'
  | 'eastern-rites'
  | 'colonial'
  | 'saints'
  | 'hierarchy'
  | 'pilgrimage'
  | 'modern'

export default function IndianChurchHistoryPage() {
  const [activeTab, setActiveTab] = useState<TabKey>('overview')

  const tabs: { key: TabKey; label: string }[] = [
    { key: 'overview', label: 'Overview' },
    { key: 'apostolic', label: 'Apostolic Origins' },
    { key: 'eastern-rites', label: 'Eastern Rites' },
    { key: 'colonial', label: 'Colonial & Missionary Era' },
    { key: 'saints', label: 'Saints & Blesseds' },
    { key: 'hierarchy', label: 'Hierarchy & Organization' },
    { key: 'pilgrimage', label: 'Pilgrimage & Heritage' },
    { key: 'modern', label: 'Modern Church' },
  ]

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            History of the Church in India
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            India is home to one of the oldest Christian communities in the world, tracing its origins
            to the Apostle Thomas himself in 52 AD. Across nearly two millennia, the Catholic Church in
            India has woven together apostolic tradition, Eastern and Western liturgical heritage, and the
            rich tapestry of Indian civilization into a vibrant, living faith.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg shadow-lg p-1 overflow-x-auto">
            <div className="flex flex-nowrap gap-1">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`px-4 py-2.5 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
                    activeTab === tab.key
                      ? 'bg-amber-100 text-amber-800 font-semibold'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* TAB 1: OVERVIEW                                              */}
        {/* ============================================================ */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Timeline */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Timeline of Indian Christianity
              </h2>
              <p className="text-gray-600 mb-8">
                Christianity in India predates its arrival in most of Europe. The following timeline traces
                the major milestones across two thousand years of Catholic presence on the Indian subcontinent.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Cross className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">~52 AD &mdash; St. Thomas Arrives at Kodungallur</h3>
                    <p className="text-gray-600 mt-2">
                      According to ancient and unbroken tradition, the Apostle Thomas landed at Cranganore
                      (Kodungallur) on the Malabar Coast of Kerala, making India one of the first lands to
                      receive the Gospel. He evangelized both Jewish merchant communities and Hindu Brahmin
                      families, establishing what would become one of the most enduring Christian communities
                      in Asia.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">345 AD &mdash; Thomas of Cana Migration</h3>
                    <p className="text-gray-600 mt-2">
                      A group of 72 Christian families from Persia, led by the merchant Thomas of Cana (also
                      known as Knai Thoma), migrated to Malabar. Their arrival reinforced the East Syriac
                      liturgical and ecclesiastical ties of the Thomas Christian community and brought fresh
                      vitality to Indian Christianity. Hindu rulers granted them land and trading privileges,
                      recorded on celebrated copper plates.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">1498 &mdash; Vasco da Gama Reaches India</h3>
                    <p className="text-gray-600 mt-2">
                      The Portuguese explorer Vasco da Gama landed at Calicut on May 20, 1498, inaugurating
                      a new era of European contact. Portugal soon established colonial rule in Goa and brought
                      Latin Rite Catholicism, new religious orders, and the complex Padroado system of royal
                      ecclesiastical patronage that would shape the Church in India for centuries.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">1542&ndash;1552 &mdash; St. Francis Xavier&apos;s Mission</h3>
                    <p className="text-gray-600 mt-2">
                      The great Jesuit missionary Francis Xavier arrived in Goa on May 6, 1542, and spent a
                      decade evangelizing across India, Southeast Asia, and Japan. His tireless work among the
                      Parava fisher communities on the Fishery Coast, his journeys through Travancore and
                      Mylapore, and his boundless zeal earned him the title &ldquo;Apostle of the Indies.&rdquo;
                      His incorrupt body rests at the Basilica of Bom Jesus in Old Goa.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">1599 &mdash; Synod of Diamper</h3>
                    <p className="text-gray-600 mt-2">
                      Held June 20&ndash;26 at Udayamperoor (Diamper), this Portuguese-convened synod under
                      Archbishop Aleixo de Menezes imposed Latin customs on the Thomas Christians, suppressed
                      East Syriac liturgical books, and placed the Malabar community under Latin jurisdiction.
                      Though it brought administrative order, it was deeply traumatic and remains controversial
                      to this day.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">1653 &mdash; Coonan Cross Oath</h3>
                    <p className="text-gray-600 mt-2">
                      Outraged by Portuguese interference and the arrest of a visiting Eastern bishop, thousands
                      of Thomas Christians gathered at Mattancherry and swore on a cross that they would never
                      submit to Portuguese Jesuit authority. This watershed event permanently split the ancient
                      community into two major branches, whose descendants form today&apos;s diverse Indian Christian
                      denominations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Landmark className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">1886 &mdash; Pope Leo XIII Establishes the Indian Hierarchy</h3>
                    <p className="text-gray-600 mt-2">
                      With the apostolic constitution <em>Humanae Salutis Auctor</em>, Pope Leo XIII established
                      a proper Catholic hierarchy in India, creating eight dioceses and organizing metropolitan
                      provinces. This momentous act freed much of the Indian Church from the entangled
                      Padroado-Propaganda Fide dual jurisdiction and set the stage for the growth of a truly
                      indigenous hierarchy.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">1944/1966 &mdash; CBCI Established</h3>
                    <p className="text-gray-600 mt-2">
                      The Catholic Bishops&apos; Conference of India (CBCI) was informally established in 1944 and
                      formally constituted in 1966, becoming the apex body uniting all three rites &mdash; Latin,
                      Syro-Malabar, and Syro-Malankara &mdash; under one national conference. Headquartered in New
                      Delhi, the CBCI coordinates the Church&apos;s pastoral, educational, and social mission
                      across India.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Crown className="w-6 h-6 text-pink-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">1964 &mdash; Pope Paul VI Visits India</h3>
                    <p className="text-gray-600 mt-2">
                      In December 1964, Pope Paul VI became the first reigning pope to visit India, attending
                      the 38th International Eucharistic Congress in Bombay (Mumbai). His visit was a powerful
                      symbol of the universal Church&apos;s recognition of Indian Catholicism and of interreligious
                      dialogue in the spirit of the Second Vatican Council.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Star className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">2022 &mdash; Devasahayam Pillai Canonized</h3>
                    <p className="text-gray-600 mt-2">
                      On May 15, 2022, Pope Francis canonized Blessed Devasahayam Pillai (Lazarus, born
                      Neelakanda Pillai), making him the first Indian-born layperson to be declared a saint.
                      A Hindu convert from the Nair caste in Travancore, he was martyred in 1752 for his
                      steadfast faith. His canonization was a landmark moment for the Indian Church.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* The Three Rites in India */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                The Three Rites in India Today
              </h2>
              <p className="text-gray-600 mb-6">
                India is unique in the Catholic world for having three distinct ritual churches, each with
                its own hierarchy, liturgical tradition, and canon law &mdash; all in full communion with the
                Bishop of Rome. Together they represent the remarkable diversity of Catholic tradition on a
                single subcontinent.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center">
                      <Church className="w-5 h-5 text-blue-700" />
                    </div>
                    <h3 className="text-xl font-semibold text-blue-800">Latin Rite</h3>
                  </div>
                  <div className="space-y-2 text-blue-700">
                    <p><strong>~132 dioceses</strong> across India</p>
                    <p><strong>~14.5 million</strong> faithful</p>
                    <p>Under the Conference of Catholic Bishops of India (CCBI)</p>
                    <p className="mt-3 text-sm">
                      The largest rite in India, established through Portuguese and later French, Irish,
                      Italian, and German missionary activity beginning in the 16th century. Concentrated in
                      Goa, the Konkan coast, Tamil Nadu, Kerala, and the tribal regions of central and
                      northeastern India.
                    </p>
                  </div>
                </div>

                <div className="bg-amber-50 p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-amber-200 rounded-full flex items-center justify-center">
                      <Church className="w-5 h-5 text-amber-700" />
                    </div>
                    <h3 className="text-xl font-semibold text-amber-800">Syro-Malabar Church</h3>
                  </div>
                  <div className="space-y-2 text-amber-700">
                    <p><strong>~35 eparchies</strong> (including diaspora)</p>
                    <p><strong>~4.6 million</strong> faithful</p>
                    <p>Major Archiepiscopal Church (<em>sui iuris</em>)</p>
                    <p className="mt-3 text-sm">
                      Traces its origins directly to St. Thomas the Apostle. Uses the East Syriac liturgical
                      tradition (Holy Qurbana). The second largest Eastern Catholic Church in the world.
                      Concentrated in Kerala with growing diaspora communities worldwide.
                    </p>
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-green-200 rounded-full flex items-center justify-center">
                      <Church className="w-5 h-5 text-green-700" />
                    </div>
                    <h3 className="text-xl font-semibold text-green-800">Syro-Malankara Church</h3>
                  </div>
                  <div className="space-y-2 text-green-700">
                    <p><strong>~12 eparchies</strong></p>
                    <p><strong>~500,000</strong> faithful</p>
                    <p>Major Archiepiscopal Church (<em>sui iuris</em>)</p>
                    <p className="mt-3 text-sm">
                      Established through the reunion movement of 1930 under Mar Ivanios. Uses the West
                      Syriac liturgical tradition (Anaphora of St. James). A smaller but vibrant community
                      centered in Kerala with a distinctive Antiochene heritage.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">~20 Million</h3>
                <p className="text-gray-600">Catholics in India &mdash; 2nd largest in Asia</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">~1.55%</h3>
                <p className="text-gray-600">of India&apos;s total population</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">~25,000+</h3>
                <p className="text-gray-600">Educational institutions run by the Church</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Stethoscope className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">~5,000+</h3>
                <p className="text-gray-600">Healthcare facilities across the country</p>
              </div>
            </div>

            {/* Sources */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Sources &amp; Further Reading</h3>
              <ol className="text-gray-700 space-y-2 list-decimal list-inside">
                <li>Catholic Bishops&apos; Conference of India (CBCI), official statistics and annual reports.</li>
                <li><em>Annuarium Statisticum Ecclesiae</em>, Vatican publications.</li>
                <li>A. M. Mundadan, <em>History of Christianity in India, Vol. I: From the Beginning up to the Middle of the Sixteenth Century</em> (Bangalore: Church History Association of India, 1984).</li>
                <li>Stephen Neill, <em>A History of Christianity in India</em>, 2 vols. (Cambridge University Press, 1984&ndash;1985).</li>
              </ol>
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* TAB 2: APOSTOLIC ORIGINS                                     */}
        {/* ============================================================ */}
        {activeTab === 'apostolic' && (
          <div className="space-y-8">
            {/* St. Thomas the Apostle in India */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                St. Thomas the Apostle in India
              </h2>
              <p className="text-gray-600 mb-6">
                The tradition that the Apostle Thomas brought Christianity to India is among the oldest and
                most firmly held in all of Christendom. While modern historians debate the precise details,
                the weight of literary, archaeological, and liturgical evidence &mdash; combined with an unbroken
                oral tradition spanning nearly two millennia &mdash; makes a compelling case for an apostolic
                foundation of Indian Christianity.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-amber-800 mb-3">The Traditional Account</h3>
                <p className="text-amber-700 mb-3">
                  According to tradition, St. Thomas arrived by sea at the ancient port of Muziris
                  (Kodungallur/Cranganore) on the Malabar Coast around 52 AD. He first preached to the
                  Jewish trading communities already settled there, then to local Hindu families, including
                  several Brahmin households who accepted baptism. These converts and their descendants became
                  known as the <em>Nasrani</em> (Nazarenes) or Thomas Christians &mdash; a community that has
                  maintained its identity for nearly two thousand years.
                </p>
                <p className="text-amber-700">
                  The Apostle is said to have traveled extensively along the Malabar Coast and eventually
                  crossed to the eastern coast at Mylapore (near modern Chennai), where he was martyred around
                  72 AD. Ancient tradition holds that he was pierced with a lance while praying at a rocky hill
                  now known as St. Thomas Mount. His remains were originally interred at Mylapore, where the
                  San Thome Basilica stands today over what is venerated as his tomb.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">The Seven Churches of St. Thomas</h3>
                <p className="text-blue-700 mb-3">
                  Tradition credits St. Thomas with founding seven churches (communities of believers) along
                  the Malabar Coast. These seven sites remain important pilgrimage centers and testify to the
                  geographic spread of apostolic Christianity in ancient Kerala:
                </p>
                <ol className="text-blue-700 space-y-2 list-decimal list-inside">
                  <li><strong>Kodungallur (Cranganore)</strong> &mdash; the site of the Apostle&apos;s first landing and his earliest church.</li>
                  <li><strong>Palayoor (Palur)</strong> &mdash; tradition holds that Thomas converted a group of Brahmins here; the ancient temple was transformed into a church.</li>
                  <li><strong>Kottakkavu (Paravur)</strong> &mdash; site of one of the oldest churches in India, rebuilt many times; associated with the Apostle&apos;s early preaching.</li>
                  <li><strong>Kokkamangalam (Kokamangalam)</strong> &mdash; a church community established in the interior, testifying to Thomas&apos;s journeys beyond the coast.</li>
                  <li><strong>Niranam</strong> &mdash; a community with continuous Thomas Christian presence since antiquity; its church remains an important center of the faithful.</li>
                  <li><strong>Nilackal (Chayal)</strong> &mdash; a mountainous site in the interior, showing the Apostle&apos;s reach into the hinterland; later abandoned due to hostile conditions and rediscovered.</li>
                  <li><strong>Quilon (Kollam)</strong> &mdash; the southernmost of the seven churches, an ancient port with early connections to Middle Eastern Christianity.</li>
                </ol>
              </div>

              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-red-800 mb-3">Martyrdom at Mylapore</h3>
                <p className="text-red-700 mb-3">
                  The Apostle&apos;s martyrdom at Mylapore (in modern Chennai) around 72 AD is attested by
                  multiple ancient sources and an unbroken local tradition. St. Thomas Mount, a small rocky
                  hill southwest of the city, is venerated as the site where Thomas was killed. An ancient
                  stone cross discovered there, known as the &ldquo;bleeding cross,&rdquo; is believed to date
                  from the early centuries of Christianity.
                </p>
                <p className="text-red-700">
                  The San Thome Basilica in Mylapore, built over the traditional site of the Apostle&apos;s tomb,
                  is one of only three basilicas in the world constructed over the burial site of an apostle
                  of Jesus Christ &mdash; the other two being St. Peter&apos;s Basilica in Rome and the Cathedral of
                  Santiago de Compostela in Spain. The present neo-Gothic structure was built by the British
                  in 1896, replacing earlier Portuguese and pre-Portuguese structures.
                </p>
              </div>
            </div>

            {/* Early Literary Evidence */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Early Literary Evidence</h2>
              <p className="text-gray-600 mb-6">
                Multiple literary sources from the early centuries of Christianity attest to the
                tradition of Thomas&apos;s Indian mission. While no single text provides irrefutable
                historical proof, the cumulative weight of these independent witnesses &mdash; spanning
                several centuries, languages, and geographic regions &mdash; is remarkable.
              </p>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-800 mb-3">Acts of Thomas (3rd century)</h3>
                  <p className="text-purple-700">
                    This Syriac text, composed around the early 3rd century (probably in Edessa), narrates
                    Thomas&apos;s journey to the kingdom of <em>Gundaphorus</em> (Gondophares) in the East.
                    Remarkably, modern numismatic discoveries have confirmed that Gondophares was a
                    historical Indo-Parthian king who ruled in what is now Afghanistan and northwestern
                    India in the 1st century AD. While the <em>Acts</em> is a literary-theological work
                    rather than strict history, its knowledge of a real Indian king strengthens the core
                    tradition of Thomas&apos;s eastern mission.
                  </p>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-800 mb-3">Doctrine of the Apostles (3rd century)</h3>
                  <p className="text-green-700">
                    Also known as the <em>Didascalia Apostolorum</em>, this early Syriac document assigns
                    India and its neighboring regions as Thomas&apos;s missionary territory, reflecting an
                    established tradition in the Syrian Christian world about the apostolic origin of
                    Christianity in the East.
                  </p>
                </div>

                <div className="bg-indigo-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-indigo-800 mb-3">St. Ephrem the Syrian (306&ndash;373)</h3>
                  <p className="text-indigo-700">
                    The great Doctor of the Church and Syriac poet composed hymns mentioning Thomas&apos;s
                    bones being brought from India. Ephrem, writing from Edessa &mdash; the center of Syriac
                    Christianity &mdash; treats Thomas&apos;s Indian apostolate as established fact, indicating
                    that this tradition was well known and accepted in the 4th-century Syrian Church.
                  </p>
                </div>

                <div className="bg-pink-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-pink-800 mb-3">Gregory of Nazianzus (329&ndash;390) &amp; St. Jerome (347&ndash;420)</h3>
                  <p className="text-pink-700">
                    Both of these Latin Church Fathers refer to Thomas&apos;s mission to India. Gregory of
                    Nazianzus, in <em>Oration 33</em>, mentions Thomas evangelizing India. St. Jerome, the
                    great biblical scholar, references the tradition in multiple writings. Their testimony
                    shows that by the late 4th century, the tradition of Thomas in India was accepted not
                    only in the Syriac East but also in the Greek and Latin worlds.
                  </p>
                </div>
              </div>
            </div>

            {/* Thomas of Cana Migration */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">The Thomas of Cana Migration (345 AD)</h2>
              <p className="text-gray-600 mb-4">
                Around 345 AD, a significant migration of Christians from Persia, led by the merchant
                Thomas of Cana (Knai Thoma), arrived on the Malabar Coast. This event was transformative
                for the Indian Church in several ways:
              </p>
              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <ul className="text-amber-700 space-y-3">
                  <li>
                    <strong>72 families from Persia</strong> &mdash; The migrants brought with them a bishop, priests,
                    deacons, and laypeople, reinforcing the ecclesiastical infrastructure of the Thomas
                    Christian community.
                  </li>
                  <li>
                    <strong>Copper Plates from Hindu rulers</strong> &mdash; The local rulers of Malabar granted the
                    Christian community land, trading privileges, and social honors, recorded on celebrated
                    copper plates (<em>Cheppedu</em>) that survive as some of the earliest documentary evidence
                    of Christianity in India.
                  </li>
                  <li>
                    <strong>Strengthened ties with the Church of the East</strong> &mdash; The migration deepened the
                    liturgical, canonical, and cultural connections between the Malabar Christians and the
                    Patriarchate of the East (often called the &ldquo;Nestorian&rdquo; Church, though many of its
                    faithful held orthodox Christology).
                  </li>
                  <li>
                    <strong>Two endogamous groups</strong> &mdash; The Cana migration eventually led to the
                    Thomas Christians being organized into two social groups: the <em>Southists</em> (Knanaya),
                    descended from the Persian migrants, and the <em>Northists</em>, descended from the original
                    converts of St. Thomas.
                  </li>
                </ul>
              </div>
            </div>

            {/* The Malabar Christian Community */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                The Malabar Christian Community (1st&ndash;15th Century)
              </h2>
              <p className="text-gray-600 mb-4">
                For more than a thousand years before the arrival of the Portuguese, the Thomas Christians
                of Malabar maintained a distinctive identity within Indian society. They were a prosperous,
                respected community that successfully integrated Christian faith with Indian social customs.
              </p>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-800 mb-3">Social Standing</h3>
                  <p className="text-blue-700">
                    Known as <em>Nasrani</em> (Nazarenes) or <em>Mappila</em> Christians, the Thomas Christians
                    were recognized as a distinct community within the Hindu caste system, enjoying a status
                    comparable to upper-caste Hindus. They bore arms, held land, engaged in the pepper and
                    spice trade, and received honors from local rulers. This social integration allowed them
                    to maintain their faith openly for centuries without significant persecution.
                  </p>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-800 mb-3">Ecclesiastical Structure</h3>
                  <p className="text-green-700">
                    The community received its bishops from the Patriarchate of the Church of the East in
                    Mesopotamia (modern Iraq). However, day-to-day governance was led by a local
                    <em> Archdeacon</em> (Arkadiyakon), who served as the community&apos;s temporal and
                    administrative head. This unique dual leadership &mdash; a foreign bishop for sacramental
                    authority and a local archdeacon for community governance &mdash; persisted for centuries and
                    was a key feature of Malabar Christianity.
                  </p>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-800 mb-3">Liturgy and Faith</h3>
                  <p className="text-purple-700">
                    The Thomas Christians worshipped in the East Syriac liturgical tradition, using a form of
                    the <em>Holy Qurbana</em> (Eucharistic liturgy) that shared roots with the rites of
                    Mesopotamia. Their theological outlook was firmly Nicene Christian &mdash; they professed
                    the Creed and maintained the sacramental life of the ancient Church, even as their
                    isolation from other Christian centers sometimes led to unique local customs and practices.
                  </p>
                </div>

                <div className="bg-orange-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-orange-800 mb-3">Cultural Integration</h3>
                  <p className="text-orange-700">
                    The Thomas Christians developed a remarkable synthesis of Christian faith and Indian
                    culture. Their churches were architecturally influenced by Hindu temple design, featuring
                    oil lamps, flower decorations, and similar spatial arrangements. They used the
                    <em> Mar Thoma Sliba</em> (St. Thomas Cross), a distinctive Persian cross with floral motifs,
                    as their primary religious symbol &mdash; a powerful example of inculturation centuries before
                    the term was coined.
                  </p>
                </div>
              </div>
            </div>

            {/* Sources */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Sources &amp; Further Reading</h3>
              <ol className="text-gray-700 space-y-2 list-decimal list-inside">
                <li>A. M. Mundadan, <em>History of Christianity in India, Vol. I: From the Beginning up to the Middle of the Sixteenth Century</em> (Bangalore: CHAI, 1984).</li>
                <li>A. E. Medlycott, <em>India and the Apostle Thomas: An Inquiry, with a Critical Analysis of the Acta Thomae</em> (London: David Nutt, 1905).</li>
                <li>J. N. Farquhar, &ldquo;The Apostle Thomas in North India&rdquo; and &ldquo;The Apostle Thomas in South India,&rdquo; <em>Bulletin of the John Rylands Library</em> 10 (1926) and 11 (1927).</li>
                <li>A. Mingana, &ldquo;The Early Spread of Christianity in India,&rdquo; <em>Bulletin of the John Rylands Library</em> 10 (1926).</li>
                <li>Placid J. Podipara, <em>The Thomas Christians</em> (London: Darton, Longman &amp; Todd, 1970).</li>
              </ol>
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* TAB 3: EASTERN RITES                                         */}
        {/* ============================================================ */}
        {activeTab === 'eastern-rites' && (
          <div className="space-y-8">
            {/* Syro-Malabar Catholic Church */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                The Syro-Malabar Catholic Church
              </h2>
              <p className="text-gray-600 mb-6">
                The Syro-Malabar Catholic Church is one of the 22 Eastern Catholic Churches in full
                communion with the Bishop of Rome. It is the second largest Eastern Catholic Church in the
                world (after the Ukrainian Greek Catholic Church) and traces its origins directly to the
                evangelization of India by the Apostle Thomas in 52 AD. The name &ldquo;Syro-Malabar&rdquo;
                reflects its dual heritage: &ldquo;Syro&rdquo; for the East Syriac liturgical tradition received
                from Mesopotamia, and &ldquo;Malabar&rdquo; for its geographic heartland on the southwestern coast
                of India.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-amber-800 mb-3">Key Facts</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="text-amber-700 space-y-2">
                    <li><strong>Status:</strong> <em>Sui iuris</em> Major Archiepiscopal Church (since 1992)</li>
                    <li><strong>Faithful:</strong> ~4.6 million</li>
                    <li><strong>Eparchies:</strong> ~35 (including diaspora in USA, Canada, UK, Australia, Europe)</li>
                    <li><strong>Current Major Archbishop:</strong> Mar Raphael Thattil</li>
                  </ul>
                  <ul className="text-amber-700 space-y-2">
                    <li><strong>Liturgical tradition:</strong> East Syriac</li>
                    <li><strong>Eucharistic liturgy:</strong> Holy Qurbana, with restored <em>Anaphora of Addai and Mari</em></li>
                    <li><strong>Headquarters:</strong> Mount St. Thomas, Kakkanad, Kochi, Kerala</li>
                    <li><strong>Patron:</strong> St. Thomas the Apostle</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">Key Historical Milestones</h3>
                <ul className="text-blue-700 space-y-2">
                  <li><strong>~52 AD:</strong> Apostle Thomas establishes Christianity in Malabar.</li>
                  <li><strong>345 AD:</strong> Thomas of Cana migration strengthens East Syriac ties.</li>
                  <li><strong>1599:</strong> Synod of Diamper imposes Latin customs; East Syriac books suppressed.</li>
                  <li><strong>1653:</strong> Coonan Cross Oath &mdash; the community splits; those who reconciled with Rome became the ancestors of today&apos;s Syro-Malabar Catholics.</li>
                  <li><strong>1896:</strong> Establishment of proper Syro-Malabar hierarchy by Rome, separating them from Latin jurisdiction.</li>
                  <li><strong>1923:</strong> First indigenous Syro-Malabar bishops appointed.</li>
                  <li><strong>1992:</strong> Elevated to Major Archiepiscopal Church, granting greater self-governance.</li>
                  <li><strong>2001:</strong> <em>Anaphora of Addai and Mari</em> formally recognized by Rome as a valid Eucharistic Prayer, despite lacking an explicit institution narrative &mdash; a landmark ecumenical decision.</li>
                </ul>
              </div>

              <p className="text-gray-600">
                The Syro-Malabar Church is known for its exceptionally high rates of priestly and religious
                vocations, its extensive educational and healthcare networks, and its vibrant diaspora
                communities around the world. In recent decades, a prolonged internal dispute over the
                proper mode of celebrating the Holy Qurbana (particularly the question of the celebrant
                facing the people versus facing the altar) has been a source of significant tension, with
                the Holy See intervening to establish a uniform practice.
              </p>
            </div>

            {/* Syro-Malankara Catholic Church */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                The Syro-Malankara Catholic Church
              </h2>
              <p className="text-gray-600 mb-6">
                The Syro-Malankara Catholic Church is the youngest of India&apos;s three Catholic rites, born of
                the reunion movement of 1930. Its name reflects its West Syriac (Antiochene) liturgical
                heritage, received through the Malankara Orthodox and Jacobite traditions, now lived in full
                communion with Rome.
              </p>

              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-green-800 mb-3">Key Facts</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="text-green-700 space-y-2">
                    <li><strong>Status:</strong> <em>Sui iuris</em> Major Archiepiscopal Church (since 2005)</li>
                    <li><strong>Faithful:</strong> ~500,000</li>
                    <li><strong>Eparchies:</strong> ~12</li>
                    <li><strong>Major Archbishop:</strong> Cardinal Baselios Cleemis</li>
                  </ul>
                  <ul className="text-green-700 space-y-2">
                    <li><strong>Liturgical tradition:</strong> West Syriac (Antiochene)</li>
                    <li><strong>Eucharistic liturgy:</strong> <em>Anaphora of St. James</em></li>
                    <li><strong>Headquarters:</strong> Pattom, Thiruvananthapuram, Kerala</li>
                    <li><strong>Founder of reunion:</strong> Archbishop Mar Ivanios (Geevarghese Thomas Panicker)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-purple-800 mb-3">The Reunion of 1930</h3>
                <p className="text-purple-700 mb-3">
                  On September 20, 1930, Archbishop Mar Ivanios and Bishop Mar Theophilos, along with a
                  priest, a deacon, and a layperson, were received into full communion with the Catholic
                  Church by the Apostolic Delegate in India. This historic event was the culmination of years
                  of theological reflection and personal conviction by Mar Ivanios, who became persuaded of
                  the Petrine primacy while retaining deep love for his Antiochene liturgical heritage.
                </p>
                <p className="text-purple-700">
                  Rome accepted the reunion on the condition that the community would preserve its West
                  Syriac liturgy, ecclesiastical customs, and spiritual patrimony intact. This principle of
                  &ldquo;reunion without absorption&rdquo; became a model for Eastern Catholic ecclesiology and
                  was later enshrined in the Second Vatican Council&apos;s decree <em>Orientalium Ecclesiarum</em>
                  (1964). The Malankara Catholic community grew slowly but steadily, reaching Major
                  Archiepiscopal status in 2005.
                </p>
              </div>
            </div>

            {/* Coonan Cross Oath */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                The Coonan Cross Oath (1653)
              </h2>
              <p className="text-gray-600 mb-6">
                The Coonan Cross Oath is one of the most dramatic and consequential events in the history
                of Indian Christianity. It permanently fractured the ancient Thomas Christian community and
                its repercussions continue to shape the ecclesiastical landscape of Kerala to this day.
              </p>

              <div className="bg-red-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-red-800 mb-3">Background</h3>
                <p className="text-red-700 mb-3">
                  Following the Synod of Diamper (1599), Portuguese Jesuits exercised tight control over
                  the Thomas Christian community. The ancient office of the Archdeacon was suppressed, East
                  Syriac liturgical books were burned, and Latin practices were imposed. Resentment simmered
                  for decades among a community that had governed itself for over 1,500 years.
                </p>
                <p className="text-red-700">
                  In 1652, a Syriac bishop named Ahatallah (sent from the Middle East, possibly by the
                  Patriarch of Antioch) arrived off the coast of Mylapore. The Portuguese authorities
                  arrested him before he could reach the Thomas Christians and reportedly drowned him at sea.
                  When news of this outrage reached Kerala, the community&apos;s fury boiled over.
                </p>
              </div>

              <div className="bg-indigo-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-indigo-800 mb-3">The Oath</h3>
                <p className="text-indigo-700">
                  On January 3, 1653, at the church at Mattancherry near Cochin, thousands of Thomas
                  Christians gathered and swore an oath while touching a rope tied to a large outdoor cross
                  (some accounts say they physically leaned on the cross, hence &ldquo;Coonan&rdquo; &mdash;
                  meaning &ldquo;bent&rdquo; &mdash; Cross). They declared that they would no longer submit to the
                  authority of the Portuguese Jesuits. The Archdeacon Thomas was proclaimed as their bishop.
                  This act of defiance was a decisive break with Portuguese ecclesiastical control.
                </p>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-amber-800 mb-3">The Permanent Split</h3>
                <p className="text-amber-700 mb-3">
                  In the years following the oath, Carmelite missionaries sent by the <em>Propaganda Fide</em>
                  (the Vatican congregation for missions) partially reconciled the community. However, the
                  split proved permanent, producing two major branches:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-amber-800 mb-2">Pazhayakuttukar (&ldquo;Old Faction&rdquo;)</h4>
                    <p className="text-amber-700 text-sm">
                      Those who reconciled with Rome under the Carmelites. They are the ancestors of
                      today&apos;s <strong>Syro-Malabar Catholics</strong> and <strong>Chaldean Syrian
                      Church</strong> members.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-amber-800 mb-2">Puthenkuttukar (&ldquo;New Faction&rdquo;)</h4>
                    <p className="text-amber-700 text-sm">
                      Those who refused reconciliation and eventually came under the Syriac Orthodox
                      Patriarchate of Antioch. They are the ancestors of today&apos;s <strong>Malankara
                      Orthodox Church</strong>, <strong>Jacobite Syrian Church</strong>, <strong>Marthoma
                      Syrian Church</strong>, and (through the 1930 reunion) the <strong>Syro-Malankara
                      Catholics</strong>.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Liturgical Comparison Table */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Liturgical Comparison: The Three Rites
              </h2>
              <p className="text-gray-600 mb-6">
                The following table compares the liturgical traditions of India&apos;s three Catholic rites,
                illustrating the remarkable diversity of worship within a single national Church, all in
                communion with the Pope.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-800">Aspect</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-blue-800">Latin Rite</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-amber-800">Syro-Malabar</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-green-800">Syro-Malankara</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-medium text-gray-700">Liturgical Language</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-600">Vernacular (Malayalam, Tamil, Hindi, English, etc.); Latin for solemn occasions</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-600">Syriac (liturgical) and Malayalam; some English</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-600">Syriac (liturgical) and Malayalam</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-medium text-gray-700">Liturgical Family</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-600">Roman (Western)</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-600">East Syriac (Chaldean)</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-600">West Syriac (Antiochene)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-medium text-gray-700">Celebration Direction</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-600"><em>Versus populum</em> (facing people)</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-600">Prescribed mix: <em>ad orientem</em> and <em>versus populum</em></td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-600"><em>Ad orientem</em> (facing east/altar)</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-medium text-gray-700">Principal Eucharistic Prayer</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-600">Roman Canon; Eucharistic Prayers II, III, IV</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-600"><em>Anaphora of Addai and Mari</em>; Anaphora of Theodore of Mopsuestia</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-600"><em>Anaphora of St. James</em>; multiple other anaphoras</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-medium text-gray-700">Calendar</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-600">Roman (Gregorian) calendar</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-600">East Syriac calendar with Indian adaptations</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-600">West Syriac calendar</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Sources */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Sources &amp; Further Reading</h3>
              <ol className="text-gray-700 space-y-2 list-decimal list-inside">
                <li>George Vellian, ed., <em>The Malabar Church</em> (Rome: Pontificium Institutum Orientalium Studiorum, 1970).</li>
                <li>Antony Pallath, <em>The Syro-Malabar Church: The Ecclesial Heritage and Pastoral Response</em> (Kottayam, 2007).</li>
                <li>Placid J. Podipara, <em>The Thomas Christians</em> (London: Darton, Longman &amp; Todd, 1970).</li>
                <li>Jacob Kollaparambil, <em>The Archdeacon of All India</em> (Kottayam: Oriental Institute of Religious Studies, 1972).</li>
                <li>Jonas Thazhath, <em>The Juridical Sources of the Syro-Malabar Church</em> (Vadavathoor: OIRSI, 1987).</li>
              </ol>
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* TAB 4: COLONIAL & MISSIONARY ERA                             */}
        {/* ============================================================ */}
        {activeTab === 'colonial' && (
          <div className="space-y-8">
            {/* Portuguese Arrival */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Portuguese Arrival and the Padroado (1498)
              </h2>
              <p className="text-gray-600 mb-6">
                The arrival of the Portuguese in India at the end of the 15th century opened a dramatically
                new chapter in the history of Indian Christianity. For the first time, Western European
                Catholicism came into direct contact with the ancient Thomas Christian community &mdash; an
                encounter that would prove both fruitful and deeply contentious.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">Vasco da Gama and the Sea Route</h3>
                <p className="text-blue-700 mb-3">
                  On May 20, 1498, the Portuguese navigator Vasco da Gama anchored at Calicut
                  (Kozhikode) on the Malabar Coast, having sailed around the Cape of Good Hope. His voyage
                  opened a direct maritime route between Europe and India, ending the Arab monopoly on the
                  spice trade and inaugurating the Age of Portuguese India.
                </p>
                <p className="text-blue-700">
                  Within decades, the Portuguese had conquered Goa (1510), establishing it as the capital of
                  their Estado da India. The Diocese of Goa was erected in 1534, and it was elevated to an
                  Archdiocese in 1558, becoming the primatial see of the entire East &mdash; from the Cape of
                  Good Hope to Japan.
                </p>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-purple-800 mb-3">The Padroado System</h3>
                <p className="text-purple-700 mb-3">
                  The <em>Padroado Real</em> (Royal Patronage) was a system by which the Portuguese Crown
                  received from the papacy the right and obligation to administer the Catholic Church in all
                  territories discovered or conquered by Portugal. Under this arrangement, the Portuguese
                  king nominated bishops, financed missions, built churches, and exercised sweeping authority
                  over ecclesiastical affairs.
                </p>
                <p className="text-purple-700">
                  While the Padroado brought significant resources to mission work, it also created a
                  &ldquo;double jurisdiction&rdquo; problem that plagued the Indian Church for centuries: as the
                  Vatican&apos;s <em>Propaganda Fide</em> (established 1622) sought to expand missions independently
                  of Portuguese patronage, Indian dioceses often found themselves caught between competing
                  jurisdictions &mdash; Rome and Lisbon. This confusion was not fully resolved until the 20th
                  century, and vestiges of the Padroado survive in the Archdiocese of Goa and Daman to this day.
                </p>
              </div>
            </div>

            {/* St. Francis Xavier */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                St. Francis Xavier (1506&ndash;1552)
              </h2>
              <p className="text-gray-600 mb-6">
                No figure looms larger in the history of Catholic missions in India than Francis Xavier,
                the Navarrese Jesuit whose decade of tireless evangelization across Asia earned him the title
                &ldquo;Apostle of the Indies and Japan.&rdquo; His life combined extraordinary missionary zeal with
                genuine compassion for the poor and marginalized communities he served.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-amber-800 mb-3">Life and Mission</h3>
                <ul className="text-amber-700 space-y-3">
                  <li>
                    <strong>Born:</strong> April 7, 1506, in the Castle of Xavier, Kingdom of Navarre (modern
                    Spain). One of the founding members of the Society of Jesus (Jesuits) alongside
                    St. Ignatius of Loyola.
                  </li>
                  <li>
                    <strong>Arrived in Goa:</strong> May 6, 1542. He found a thriving but morally lax Portuguese
                    colonial community and set about reforming both European colonists and indigenous
                    populations through preaching, catechesis, and sacramental ministry.
                  </li>
                  <li>
                    <strong>Fishery Coast:</strong> Xavier&apos;s most transformative work was among the Parava
                    (Paravar) fishermen communities along the southeastern coast of India (modern Tamil Nadu).
                    These pearl-diving communities had nominally accepted baptism for Portuguese protection
                    against Muslim raiders; Xavier gave them systematic instruction in the faith, translated
                    prayers into Tamil, and organized vibrant Christian communities.
                  </li>
                  <li>
                    <strong>Further travels:</strong> Xavier journeyed through Travancore, Mylapore, Malacca,
                    the Moluccas (Spice Islands), and finally Japan (1549&ndash;1551), where he founded the
                    first Catholic mission.
                  </li>
                  <li>
                    <strong>Death:</strong> December 3, 1552, on Sancian (Shangchuan) Island off the coast of
                    China, while awaiting entry into the Chinese mainland.
                  </li>
                  <li>
                    <strong>Legacy:</strong> Canonized in 1622 by Pope Gregory XV. Declared Patron of Missions
                    in 1927 by Pope Pius XI. His incorrupt body rests in a silver reliquary at the Basilica
                    of Bom Jesus in Old Goa, where it is publicly exposed every ten years, drawing millions
                    of pilgrims.
                  </li>
                </ul>
              </div>
            </div>

            {/* Synod of Diamper */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                The Synod of Diamper (1599)
              </h2>
              <p className="text-gray-600 mb-6">
                The Synod of Diamper (Udayamperoor Synod) remains one of the most controversial events in
                Indian Church history. Convened by the Portuguese Archbishop of Goa, Aleixo de Menezes,
                it forcibly brought the ancient Thomas Christian community under Latin ecclesiastical control.
              </p>

              <div className="bg-red-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-red-800 mb-3">What Happened</h3>
                <p className="text-red-700 mb-3">
                  From June 20 to 26, 1599, Archbishop Menezes presided over a synod at Udayamperoor
                  (Diamper), attended by the Thomas Christian clergy and laity. The synod enacted sweeping
                  changes:
                </p>
                <ul className="text-red-700 space-y-2">
                  <li>Placed the Thomas Christians under the jurisdiction of the Latin Archbishop of Goa.</li>
                  <li>Imposed Latin liturgical customs on the East Syriac worship of the Malabar community.</li>
                  <li>Ordered the suppression and burning of East Syriac liturgical books, many of which were irreplaceable manuscripts of great antiquity.</li>
                  <li>Condemned practices that were deemed heterodox but were in many cases simply Eastern customs unfamiliar to Latin missionaries.</li>
                  <li>Abolished the office of the Archdeacon as the community&apos;s temporal leader.</li>
                </ul>
              </div>

              <div className="bg-indigo-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-indigo-800 mb-3">Legacy and Assessment</h3>
                <p className="text-indigo-700">
                  The Synod of Diamper brought the Thomas Christians into closer conformity with Latin
                  Catholicism but at an enormous cost. The destruction of ancient liturgical texts was
                  culturally devastating. The suppression of indigenous leadership structures bred deep
                  resentment that exploded in the Coonan Cross Oath of 1653, just fifty-four years later.
                  Modern Catholic scholarship, informed by the Second Vatican Council&apos;s teaching on the
                  legitimate diversity of Eastern rites (<em>Orientalium Ecclesiarum</em>), views the synod&apos;s
                  Latinization policies as a regrettable error, even as it acknowledges that some reforms
                  addressed genuine pastoral needs.
                </p>
              </div>
            </div>

            {/* Roberto de Nobili */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Roberto de Nobili and Inculturation (1577&ndash;1656)
              </h2>
              <p className="text-gray-600 mb-6">
                While the Portuguese missionary enterprise was often marked by cultural imperialism, it also
                produced remarkable figures who pioneered a different approach. Chief among them was the
                Italian Jesuit Roberto de Nobili, widely regarded as the father of Catholic inculturation in India.
              </p>

              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-green-800 mb-3">A Revolutionary Approach</h3>
                <p className="text-green-700 mb-3">
                  Arriving in Madurai in 1606, de Nobili observed that Christianity was failing to penetrate
                  Hindu upper-caste society because it was perceived as the religion of the Portuguese &mdash;
                  foreigners of low social standing in Indian eyes. In a radical departure, he adopted the
                  lifestyle and appearance of a Brahmin <em>sannyasi</em> (ascetic):
                </p>
                <ul className="text-green-700 space-y-2">
                  <li>Wore ochre robes and wooden sandals, following Brahminical custom.</li>
                  <li>Became a vegetarian and observed Hindu purity rules in his daily life.</li>
                  <li>Mastered Tamil, Telugu, and Sanskrit &mdash; becoming one of the first Europeans to study Sanskrit.</li>
                  <li>Composed theological and apologetic works in Tamil and Sanskrit, presenting Christianity in categories intelligible to Hindu intellectuals.</li>
                  <li>Distinguished between religious practices (which he rejected as incompatible with Christianity) and civil/social customs (which he accepted as legitimate cultural expressions).</li>
                </ul>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-orange-800 mb-3">Controversy and Legacy</h3>
                <p className="text-orange-700 mb-3">
                  De Nobili&apos;s methods provoked the <em>Malabar Rites Controversy</em> &mdash; a decades-long
                  debate within the Church over how far inculturation could go. Pope Gregory XV partially
                  approved his methods in 1623, but opposition from other missionaries continued. The
                  controversy was not definitively settled until the 18th century, when Rome restricted many
                  of de Nobili&apos;s accommodations.
                </p>
                <p className="text-orange-700">
                  Despite the eventual curtailment of his approach, de Nobili&apos;s influence was profound. He
                  demonstrated that the Gospel could be presented in Indian cultural forms without compromising
                  its essential content &mdash; an insight that would be vindicated centuries later by the
                  Second Vatican Council&apos;s theology of inculturation.
                </p>
              </div>

              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Other Notable Missionaries</h3>
                <p className="text-gray-700 mb-3">
                  De Nobili was not alone in his scholarly and cultural engagement with India:
                </p>
                <ul className="text-gray-700 space-y-2">
                  <li><strong>Johann Ernst Hanxleden (Arnos Padiri, 1681&ndash;1732):</strong> German Jesuit who became one of the earliest European scholars of Sanskrit and Malayalam; composed the first Sanskrit grammar by a European.</li>
                  <li><strong>Costanzo Giuseppe Beschi (Veeramamunivar, 1680&ndash;1747):</strong> Italian Jesuit who mastered Tamil and composed the epic poem <em>Thembavani</em>, considered a masterpiece of Tamil literature.</li>
                </ul>
              </div>
            </div>

            {/* Latin Rite Expansion */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Latin Rite Expansion (16th&ndash;19th Century)
              </h2>
              <p className="text-gray-600 mb-6">
                Beyond the encounter with the Thomas Christians, the colonial era saw a vast expansion of
                Latin Rite Catholicism across the Indian subcontinent, driven by multiple European powers
                and a remarkable array of religious orders.
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-800 mb-3">Key Dioceses Established</h3>
                  <ul className="text-blue-700 space-y-2">
                    <li><strong>Goa</strong> &mdash; 1534 (diocese), 1558 (archdiocese)</li>
                    <li><strong>Cochin</strong> &mdash; 1558</li>
                    <li><strong>Cranganore (Angamaly)</strong> &mdash; 1600</li>
                    <li><strong>Mylapore (San Thom&eacute;)</strong> &mdash; 1606</li>
                    <li><strong>Pondicherry</strong> &mdash; French missions from the 17th century</li>
                    <li><strong>Bombay</strong> &mdash; 1720 (vicariate), 1886 (diocese)</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-800 mb-3">Religious Orders in India</h3>
                  <ul className="text-green-700 space-y-2">
                    <li><strong>Jesuits (Society of Jesus)</strong> &mdash; from 1542; the most influential order in Indian missions.</li>
                    <li><strong>Franciscans (OFM)</strong> &mdash; among the earliest arrivals in Goa.</li>
                    <li><strong>Dominicans (OP)</strong> &mdash; active in Goa, the Konkan coast, and Southeast India.</li>
                    <li><strong>Discalced Carmelites (OCD)</strong> &mdash; sent by Propaganda Fide after 1653 to reconcile the Thomas Christians.</li>
                    <li><strong>Augustinians (OSA)</strong> &mdash; built some of the grandest churches in Old Goa.</li>
                    <li><strong>Paris Foreign Missions Society (MEP)</strong> &mdash; active in Pondicherry and South India from the 17th century.</li>
                  </ul>
                </div>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-amber-800 mb-3">The Role of Propaganda Fide (1622)</h3>
                <p className="text-amber-700">
                  The establishment of the Sacred Congregation for the Propagation of the Faith (<em>Propaganda
                  Fide</em>) by Pope Gregory XV in 1622 was a turning point. Created to coordinate global
                  Catholic missions independently of colonial patronage systems, Propaganda Fide sent its own
                  missionaries &mdash; especially Carmelites and members of the Paris Foreign Missions Society &mdash;
                  to India. This frequently brought them into conflict with the Portuguese Padroado, creating
                  parallel and competing jurisdictions in many Indian cities. The resulting confusion was a
                  source of scandal and pastoral disruption for centuries.
                </p>
              </div>
            </div>

            {/* Sources */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Sources &amp; Further Reading</h3>
              <ol className="text-gray-700 space-y-2 list-decimal list-inside">
                <li>H. Ferroli, SJ, <em>The Jesuits in Malabar</em>, 2 vols. (Bangalore: CHAI, 1939&ndash;1951).</li>
                <li>Stephen Neill, <em>A History of Christianity in India</em>, 2 vols. (Cambridge University Press, 1984&ndash;1985).</li>
                <li>Georg Schurhammer, SJ, <em>Francis Xavier: His Life, His Times</em>, 4 vols. (Rome: Jesuit Historical Institute, 1973&ndash;1982).</li>
                <li>Joseph Thekkedath, <em>History of Christianity in India, Vol. II: From the Middle of the Sixteenth Century to the End of the Seventeenth Century</em> (Bangalore: CHAI, 1982).</li>
                <li>Vincent Cronin, <em>A Pearl to India: The Life of Roberto de Nobili</em> (New York: E.P. Dutton, 1959).</li>
              </ol>
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* TAB 5: SAINTS & BLESSEDS                                     */}
        {/* ============================================================ */}
        {activeTab === 'saints' && (
          <div className="space-y-8">
            {/* Intro */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Saints and Blesseds of the Indian Church
              </h2>
              <p className="text-gray-600">
                The Indian Catholic Church has produced a growing number of canonized saints and blesseds
                whose lives reflect the extraordinary diversity of the subcontinent &mdash; from a 16th-century
                Goan lay catechist martyred in Japan to a 20th-century Albanian nun who became the icon of
                Christian charity in the slums of Calcutta. Their stories witness to the power of the Gospel
                lived in distinctly Indian contexts.
              </p>
            </div>

            {/* St. Gonsalo Garcia */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                  <Cross className="w-5 h-5 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">St. Gonsalo Garcia (~1557&ndash;1597)</h3>
              </div>
              <div className="bg-red-50 p-6 rounded-lg">
                <p className="text-red-700 mb-3">
                  Born around 1557 in Bassein (modern Vasai, near Mumbai) to a Portuguese father and an
                  Indian mother, Gonsalo Garcia is widely regarded as the first Indian-born person to be
                  canonized. He served as a lay catechist and interpreter for Franciscan missionaries,
                  traveling as far as Japan in the service of the faith.
                </p>
                <p className="text-red-700 mb-3">
                  On February 5, 1597, Gonsalo was crucified alongside 25 other Catholics &mdash; including
                  Franciscan friars, Jesuit brothers, and Japanese laypeople &mdash; at Nagasaki, Japan, during
                  the persecutions ordered by the ruler Toyotomi Hideyoshi. Together they are venerated as
                  the <strong>Twenty-Six Martyrs of Japan</strong>.
                </p>
                <p className="text-red-700">
                  <strong>Canonized:</strong> 1862 by Pope Pius IX. <strong>Feast day:</strong> February 6.
                </p>
              </div>
            </div>

            {/* St. Kuriakose Elias Chavara */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                  <BookMarked className="w-5 h-5 text-amber-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">St. Kuriakose Elias Chavara (1805&ndash;1871)</h3>
              </div>
              <div className="bg-amber-50 p-6 rounded-lg">
                <p className="text-amber-700 mb-3">
                  A Syro-Malabar priest born in Kainakary, Kerala, Kuriakose Elias Chavara was a visionary
                  religious founder and education reformer who profoundly shaped the modern Indian Church.
                  In 1831, together with Fathers Thomas Palackal and Thomas Porukara, he co-founded the
                  Carmelites of Mary Immaculate (CMI) &mdash; the first indigenous religious congregation for
                  men in the Syro-Malabar tradition.
                </p>
                <p className="text-amber-700 mb-3">
                  Chavara was a pioneer of popular education, establishing one of India&apos;s earliest systems
                  of parish schools (<em>pallikudams</em>) that aimed to ensure every parish had a school and
                  every child &mdash; regardless of caste or gender &mdash; had access to education. He also
                  co-founded the Congregation of the Mother of Carmel (CMC) for women, started a printing
                  press, published a Catholic newspaper, and composed significant devotional literature in
                  Malayalam.
                </p>
                <p className="text-amber-700">
                  <strong>Canonized:</strong> November 23, 2014 by Pope Francis. <strong>Feast day:</strong> January 3.
                </p>
              </div>
            </div>

            {/* St. Euphrasia Eluvathingal */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <Heart className="w-5 h-5 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">St. Euphrasia Eluvathingal (1877&ndash;1952)</h3>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg">
                <p className="text-purple-700 mb-3">
                  Born Rosa Eluvathingal in Kattoor, Thrissur district, Kerala, Euphrasia entered the
                  Congregation of the Mother of Carmel (CMC, the women&apos;s congregation co-founded by
                  St. Kuriakose Elias Chavara) and spent her life in quiet, intense contemplative prayer.
                  Known as the &ldquo;Praying Mother&rdquo; (<em>Evuprasiamma</em>), she was celebrated for her
                  deep mystical life, her devotion to the Eucharist and the Sacred Heart, and the spiritual
                  counsel she offered to countless people who sought her guidance.
                </p>
                <p className="text-purple-700">
                  Though she lived a hidden, cloistered life, her holiness attracted widespread devotion.
                  <strong> Canonized:</strong> November 23, 2014 by Pope Francis (on the same day as
                  St. Kuriakose Elias Chavara). <strong>Feast day:</strong> August 29.
                </p>
              </div>
            </div>

            {/* St. Devasahayam Pillai */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Award className="w-5 h-5 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">St. Devasahayam Pillai (1712&ndash;1752)</h3>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <p className="text-green-700 mb-3">
                  Born Neelakanda Pillai into a Hindu Nair family in the Kingdom of Travancore (modern
                  southern Kerala/Tamil Nadu), Devasahayam served as an official in the royal court. Through
                  the influence of a Dutch naval commander, Eustachius De Lannoy, who had entered the service
                  of Travancore, Neelakanda encountered Christianity and was baptized in 1745, taking the name
                  Lazarus (Devasahayam in Tamil, meaning &ldquo;God is my help&rdquo;).
                </p>
                <p className="text-green-700 mb-3">
                  His conversion provoked intense opposition from the Travancore court and upper-caste Hindu
                  society. He was arrested, subjected to prolonged torture, and shot on January 14, 1752, in
                  the Aralvaimozhi forest. His body was buried at St. Francis Xavier&apos;s Church in Nagercoil
                  (now in the Diocese of Kottar, Tamil Nadu).
                </p>
                <p className="text-green-700">
                  <strong>Canonized:</strong> May 15, 2022 by Pope Francis &mdash; the first Indian-born layperson
                  to be canonized. <strong>Feast day:</strong> January 14.
                </p>
              </div>
            </div>

            {/* St. Teresa of Calcutta */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Heart className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">St. Teresa of Calcutta (1910&ndash;1997)</h3>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="text-blue-700 mb-3">
                  Born Anjez&euml; Gonxhe Bojaxhiu on August 26, 1910, in Skopje (then Ottoman Empire,
                  now North Macedonia), Mother Teresa arrived in India in 1929 as a young Sister of Loreto
                  and spent the rest of her life on Indian soil. In 1950, she founded the Missionaries of
                  Charity in Calcutta (Kolkata), a congregation dedicated to serving &ldquo;the poorest of
                  the poor.&rdquo;
                </p>
                <p className="text-blue-700 mb-3">
                  Her work with the dying, the destitute, lepers, and abandoned children in the slums of
                  Calcutta captured the world&apos;s imagination and became a powerful witness to the Gospel of
                  love. She received the Nobel Peace Prize in 1979 and became one of the most recognized
                  figures of the 20th century. The posthumous publication of her private letters
                  (<em>Mother Teresa: Come Be My Light</em>) revealed decades of profound spiritual darkness,
                  adding a dimension of mystical depth to her already extraordinary witness.
                </p>
                <p className="text-blue-700">
                  <strong>Canonized:</strong> September 4, 2016 by Pope Francis. <strong>Feast day:</strong> September 5.
                  The Missionaries of Charity now operate in over 130 countries worldwide.
                </p>
              </div>
            </div>

            {/* Bl. Joseph Vaz */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                  <Globe className="w-5 h-5 text-teal-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">St. Joseph Vaz (1651&ndash;1711)</h3>
              </div>
              <div className="bg-teal-50 p-6 rounded-lg">
                <p className="text-teal-700 mb-3">
                  Born in Benaulim, Goa, to a devout Konkani Catholic family, Joseph Vaz was ordained a
                  priest in 1676 and became the founder of the Oratory of St. Philip Neri in Goa. Hearing
                  of the desperate situation of Catholics in the Dutch-controlled Kingdom of Kandy in Ceylon
                  (Sri Lanka), where the Dutch Calvinist colonial government had suppressed Catholicism, he
                  disguised himself as a beggar and entered the island in 1687.
                </p>
                <p className="text-teal-700 mb-3">
                  For over two decades, Fr. Vaz ministered secretly to persecuted Catholics, baptized
                  thousands, learned Sinhala and Tamil, and rebuilt the Church in Sri Lanka virtually
                  single-handedly. He won the protection of the Kandyan king after reportedly ending a
                  drought through prayer. He is venerated as the &ldquo;Apostle of Sri Lanka.&rdquo;
                </p>
                <p className="text-teal-700">
                  <strong>Canonized:</strong> January 14, 2015 by Pope Francis during his visit to Sri Lanka.
                  <strong> Feast day:</strong> January 16.
                </p>
              </div>
            </div>

            {/* Other Blesseds */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Other Blesseds and Venerables</h3>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="bg-pink-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-pink-800 mb-2">Bl. Mariam Thresia Chiramel Mankidiyan (1876&ndash;1926)</h4>
                  <p className="text-pink-700 text-sm">
                    Syro-Malabar mystic and foundress of the Congregation of the Holy Family. Known for her
                    intense prayer life, mystical experiences (including stigmata), and service to the sick
                    and dying. Beatified in 2000 by Pope John Paul II.
                  </p>
                </div>

                <div className="bg-indigo-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-indigo-800 mb-2">Ven. Augustine Thevarparampil (1891&ndash;1973)</h4>
                  <p className="text-indigo-700 text-sm">
                    Known as the &ldquo;Apostle of the Dalits,&rdquo; this Syro-Malabar priest from Ramapuram,
                    Kerala, dedicated over fifty years of his life to the upliftment and conversion of Dalit
                    communities, personally baptizing thousands. His cause for canonization is ongoing.
                  </p>
                </div>

                <div className="bg-orange-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-orange-800 mb-2">Bl. Rani Maria Vattalil (1954&ndash;1995)</h4>
                  <p className="text-orange-700 text-sm">
                    A Franciscan Clarist sister from Kerala who worked among tribal and Dalit communities in
                    Madhya Pradesh. She was murdered on February 25, 1995, by a hired assailant connected to
                    moneylenders whose exploitation she had challenged. Remarkably, her family publicly forgave
                    her killer, who later repented. Beatified in 2017.
                  </p>
                </div>
              </div>
            </div>

            {/* Sources */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Sources &amp; Further Reading</h3>
              <ol className="text-gray-700 space-y-2 list-decimal list-inside">
                <li>Dicastery for the Causes of Saints, Vatican official records for each cause.</li>
                <li>Brian Kolodiejchuk, MC, ed., <em>Mother Teresa: Come Be My Light</em> (New York: Doubleday, 2007).</li>
                <li>A. M. Mundadan, <em>Blessed Kuriakose Elias Chavara</em> (Bangalore: Dharmaram Publications, 2008).</li>
                <li>Diocese of Kottar, official records and documentation for the cause of St. Devasahayam Pillai.</li>
                <li>S. G. Pothan, <em>The Syrian Christians of Kerala</em> (Bombay: Asia Publishing House, 1963).</li>
              </ol>
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* TAB 6: HIERARCHY & ORGANIZATION                              */}
        {/* ============================================================ */}
        {activeTab === 'hierarchy' && (
          <div className="space-y-8">
            {/* Establishment of 1886 */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Establishment of the Indian Hierarchy (1886)
              </h2>
              <p className="text-gray-600 mb-4">
                For centuries, the Catholic Church in India was administered through a complex and often
                chaotic patchwork of Portuguese Padroado dioceses, Propaganda Fide vicariates, and Eastern
                jurisdictions. The establishment of a proper hierarchy by Pope Leo XIII in 1886 was a
                watershed moment that laid the organizational foundation for the modern Indian Church.
              </p>
              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-amber-800 mb-3">
                  <em>Humanae Salutis Auctor</em> (September 1, 1886)
                </h3>
                <p className="text-amber-700 mb-3">
                  With this apostolic constitution, Pope Leo XIII reorganized the Catholic Church in India,
                  erecting a hierarchy of eight dioceses organized into metropolitan provinces under the
                  authority of the Propaganda Fide, independent of the Portuguese Padroado. The bull
                  established:
                </p>
                <ul className="text-amber-700 space-y-2">
                  <li>Metropolitan provinces with archbishops who could exercise genuine pastoral authority.</li>
                  <li>A framework for the gradual appointment of indigenous Indian bishops.</li>
                  <li>A clearer separation (though not yet a complete resolution) of the Padroado-Propaganda jurisdictional conflict.</li>
                  <li>The foundation for the eventual growth to today&apos;s ~174 dioceses and eparchies across three rites.</li>
                </ul>
              </div>
            </div>

            {/* CBCI */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Catholic Bishops&apos; Conference of India (CBCI)
              </h2>
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <p className="text-blue-700 mb-3">
                  The CBCI is the apex body of the Catholic hierarchy in India, unique in the Catholic world
                  for encompassing all three ritual churches &mdash; Latin, Syro-Malabar, and Syro-Malankara &mdash;
                  under a single national conference. It was informally established in 1944, became formally
                  constituted in 1966 (in response to the Second Vatican Council&apos;s call for national
                  bishops&apos; conferences), and is headquartered in New Delhi.
                </p>
                <p className="text-blue-700">
                  The CBCI coordinates the Church&apos;s pastoral work, educational institutions, healthcare
                  networks, social justice initiatives, and public advocacy across the subcontinent. It
                  operates through numerous commissions covering areas from doctrine to Dalit rights, from
                  liturgy to labor issues.
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-800 mb-3">Three Bodies within CBCI</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">CCBI</h4>
                    <p className="text-green-700 text-sm">
                      Conference of Catholic Bishops of India &mdash; the body for Latin Rite bishops, under the
                      Dicastery for Bishops in Rome. Governs ~132 Latin dioceses.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Syro-Malabar Synod</h4>
                    <p className="text-green-700 text-sm">
                      The Synod of Bishops of the Syro-Malabar Church, headed by the Major Archbishop. As a
                      <em> sui iuris</em> Major Archiepiscopal Church since 1992, it has internal legislative
                      and judicial authority over its ~35 eparchies.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Syro-Malankara Synod</h4>
                    <p className="text-green-700 text-sm">
                      The Synod of Bishops of the Syro-Malankara Church, headed by its Major Archbishop. Elevated
                      to Major Archiepiscopal status in 2005, governing ~12 eparchies.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Indian Cardinals */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Indian Cardinals</h2>
              <p className="text-gray-600 mb-6">
                India has been represented in the College of Cardinals since 1953. The following Indian
                prelates have been elevated to the cardinalate, reflecting the growing importance of the
                Indian Church on the world stage.
              </p>
              <div className="space-y-4">
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-800">Valerian Cardinal Gracias (1900&ndash;1978)</h4>
                  <p className="text-red-700 text-sm">
                    Archbishop of Bombay. Created cardinal in 1953 by Pope Pius XII &mdash; the <strong>first Indian
                    cardinal</strong>. A key figure at the Second Vatican Council, he advocated for the Church&apos;s
                    engagement with the developing world.
                  </p>
                </div>

                <div className="bg-amber-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-amber-800">Joseph Cardinal Parecattil (1912&ndash;1987)</h4>
                  <p className="text-amber-700 text-sm">
                    Archbishop of Ernakulam (Syro-Malabar). Created cardinal in 1969. A leading voice for
                    Eastern Catholic liturgical renewal and a champion of restoring the authentic East Syriac
                    heritage of the Syro-Malabar Church.
                  </p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800">Lawrence Cardinal Picachy, SJ (1916&ndash;1992)</h4>
                  <p className="text-blue-700 text-sm">
                    Archbishop of Calcutta. Created cardinal in 1976. The first Jesuit and first Bengali
                    Catholic to become a cardinal; known for his pastoral simplicity and commitment to the poor.
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800">Simon Cardinal Pimenta (1920&ndash;2013)</h4>
                  <p className="text-green-700 text-sm">
                    Archbishop of Bombay. Created cardinal in 1988. A respected pastor and leader of the
                    Bombay archdiocese during a period of significant growth.
                  </p>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800">Ivan Cardinal Dias (1936&ndash;2017)</h4>
                  <p className="text-purple-700 text-sm">
                    Archbishop of Bombay. Created cardinal in 2001. Later served as Prefect of the Congregation
                    for the Evangelization of Peoples (2006&ndash;2011) in Rome &mdash; one of the most senior positions
                    in the Roman Curia ever held by an Indian.
                  </p>
                </div>

                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-800">Telesphore Placidus Cardinal Toppo (1939&ndash;2023)</h4>
                  <p className="text-indigo-700 text-sm">
                    Archbishop of Ranchi. Created cardinal in 2003. The <strong>first tribal (Adivasi) cardinal</strong>
                    in the history of the Catholic Church, from the Oraon tribe of Jharkhand. A powerful voice
                    for tribal rights and indigenous communities.
                  </p>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-800">Varkey Cardinal Vithayathil, CSsR (1927&ndash;2011)</h4>
                  <p className="text-orange-700 text-sm">
                    Major Archbishop of the Syro-Malabar Church. Created cardinal in 2007. Led the Syro-Malabar
                    Church during a complex period of liturgical reform and institutional growth.
                  </p>
                </div>

                <div className="bg-teal-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-teal-800">Oswald Cardinal Gracias (b. 1944)</h4>
                  <p className="text-teal-700 text-sm">
                    Archbishop of Bombay. Created cardinal in 2007. A member of Pope Francis&apos;s Council of
                    Cardinals (C9/C6), the small advisory body helping reform the Roman Curia. One of the most
                    influential Indian churchmen of the 21st century.
                  </p>
                </div>

                <div className="bg-pink-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-pink-800">Baselios Cleemis Cardinal Thottunkal (b. 1959)</h4>
                  <p className="text-pink-700 text-sm">
                    Major Archbishop of the Syro-Malankara Catholic Church. Created cardinal in 2012. The first
                    cardinal of the Syro-Malankara rite, underscoring the Church&apos;s recognition of this young
                    but vibrant community.
                  </p>
                </div>

                <div className="bg-cyan-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-cyan-800">George Cardinal Alencherry (b. 1945)</h4>
                  <p className="text-cyan-700 text-sm">
                    Major Archbishop of the Syro-Malabar Church (2011&ndash;2023). Created cardinal in 2012. Led the
                    Syro-Malabar Church during a period of significant internal debate over liturgical practices.
                  </p>
                </div>
              </div>
            </div>

            {/* Three Hierarchies Today */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                The Three Hierarchies Today
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">Latin Hierarchy</h3>
                  <p className="text-blue-700 text-sm mb-2">
                    Governed by the Conference of Catholic Bishops of India (CCBI), under the Dicastery for
                    Bishops in Rome. Comprises ~132 dioceses organized into multiple metropolitan provinces
                    across the country, from the Archdiocese of Goa and Daman (the oldest) to newly erected
                    dioceses in the northeast and tribal heartland.
                  </p>
                </div>

                <div className="bg-amber-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-amber-800 mb-3">Syro-Malabar Hierarchy</h3>
                  <p className="text-amber-700 text-sm mb-2">
                    A <em>sui iuris</em> Major Archiepiscopal Church since 1992, with its own Synod of Bishops
                    and significant internal self-governance. The current Major Archbishop is Mar Raphael
                    Thattil, headquartered at Mount St. Thomas, Kakkanad, Kochi. The Church governs ~35
                    eparchies, including diaspora eparchies in the United States (Chicago and Dallas),
                    Canada, the United Kingdom, and Australia.
                  </p>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-800 mb-3">Syro-Malankara Hierarchy</h3>
                  <p className="text-green-700 text-sm mb-2">
                    A <em>sui iuris</em> Major Archiepiscopal Church since 2005, headed by Cardinal Baselios
                    Cleemis from Pattom, Thiruvananthapuram. The Church governs ~12 eparchies and continues
                    to grow, particularly through its ecumenical witness and its appeal to the broader
                    Malankara Christian community.
                  </p>
                </div>
              </div>
            </div>

            {/* Sources */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Sources &amp; Further Reading</h3>
              <ol className="text-gray-700 space-y-2 list-decimal list-inside">
                <li>Catholic Bishops&apos; Conference of India (CBCI), official directory and yearbook.</li>
                <li><em>Annuario Pontificio</em>, Vatican publications (annual).</li>
                <li>Xavier Koodapuzha, <em>Faith and Communion: A History of the Syro-Malabar Church</em> (Kottayam: OIRSI, 1998).</li>
                <li>C. B. Firth, <em>An Introduction to Indian Church History</em> (Delhi: ISPCK, 1961; revised editions).</li>
              </ol>
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* TAB 7: PILGRIMAGE & HERITAGE                                 */}
        {/* ============================================================ */}
        {activeTab === 'pilgrimage' && (
          <div className="space-y-8">
            {/* St. Thomas Sites */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Sites Associated with St. Thomas the Apostle
              </h2>
              <p className="text-gray-600 mb-6">
                The sites linked to the Apostle Thomas are among the most ancient and revered pilgrimage
                destinations in all of Christendom. They offer a tangible connection to the apostolic origins
                of Christianity in India and attract pilgrims from around the world.
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-amber-50 p-6 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="w-5 h-5 text-amber-600" />
                    <h3 className="text-lg font-semibold text-amber-800">San Thome Basilica, Chennai</h3>
                  </div>
                  <p className="text-amber-700 text-sm">
                    Built over the traditional tomb of St. Thomas the Apostle, the San Thome Basilica is
                    one of only three basilicas in the world constructed over the burial site of an apostle
                    of Jesus Christ (alongside St. Peter&apos;s in Rome and Santiago de Compostela in Spain).
                    The current neo-Gothic structure was built in 1896 by the British, replacing an earlier
                    Portuguese church (1606) and an even earlier structure. The apostle&apos;s relics are
                    venerated in a crypt beneath the main altar. It was declared a national shrine by the
                    CBCI and elevated to a minor basilica in 1956.
                  </p>
                </div>

                <div className="bg-red-50 p-6 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="w-5 h-5 text-red-600" />
                    <h3 className="text-lg font-semibold text-red-800">St. Thomas Mount, Chennai</h3>
                  </div>
                  <p className="text-red-700 text-sm">
                    A small rocky hill about 10 km from San Thome, this is the traditional site of the
                    Apostle&apos;s martyrdom around 72 AD. Atop the hill stands the Church of Our Lady of
                    Expectation, which houses the celebrated &ldquo;Bleeding Cross&rdquo; &mdash; an ancient
                    stone cross carved in Pahlavi script that, according to tradition, once miraculously
                    exuded blood. The site offers panoramic views of Chennai and is a place of deep devotion
                    for Indian Christians.
                  </p>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <h3 className="text-lg font-semibold text-blue-800">Kodungallur, Kerala</h3>
                  </div>
                  <p className="text-blue-700 text-sm">
                    The ancient port of Muziris (Cranganore/Kodungallur) is revered as the site where
                    St. Thomas first set foot in India around 52 AD. The Kodungallur church, one of the
                    seven churches traditionally founded by the Apostle, stands as a living memorial to
                    Christianity&apos;s arrival in India. The site&apos;s significance extends beyond its Christian
                    heritage &mdash; Kodungallur was one of the greatest ports of the ancient world, connecting
                    Rome, Arabia, and China.
                  </p>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="w-5 h-5 text-green-600" />
                    <h3 className="text-lg font-semibold text-green-800">Palayoor Church, Kerala</h3>
                  </div>
                  <p className="text-green-700 text-sm">
                    One of the seven churches founded by St. Thomas, the Palayoor church (St. Thomas Syro-Malabar
                    Catholic Church) is among the oldest in India. According to tradition, Thomas converted
                    a group of Nambudiri Brahmins here and transformed their temple into a church. The
                    community has maintained an unbroken Christian presence from apostolic times, and the
                    church observes unique customs reflecting its ancient origins, including certain practices
                    derived from its Brahminical converts.
                  </p>
                </div>
              </div>
            </div>

            {/* Old Goa UNESCO Churches */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Churches and Convents of Old Goa (UNESCO World Heritage)
              </h2>
              <p className="text-gray-600 mb-6">
                Old Goa, once called the &ldquo;Rome of the East,&rdquo; was the capital of Portuguese India from
                1510 to the 18th century. Its magnificent churches and convents, built during the golden age
                of Portuguese colonial power, were collectively designated a UNESCO World Heritage Site in 1986.
                They represent an outstanding example of Indo-Portuguese Baroque architecture and remain
                active places of worship and pilgrimage.
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-purple-50 p-6 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <Church className="w-5 h-5 text-purple-600" />
                    <h3 className="text-lg font-semibold text-purple-800">Basilica of Bom Jesus (1605)</h3>
                  </div>
                  <p className="text-purple-700 text-sm">
                    The most famous church in Goa and one of the most visited sites in India. It houses
                    the mortal remains of St. Francis Xavier in an ornate silver reliquary donated by the
                    Grand Duke of Tuscany in the 17th century. The body, though no longer fully incorrupt,
                    is publicly exposed every ten years (the last exposition was in 2014), drawing millions
                    of pilgrims. The church&apos;s facade, left deliberately unplastered, is a striking example
                    of Jesuit Baroque architecture.
                  </p>
                </div>

                <div className="bg-indigo-50 p-6 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <Church className="w-5 h-5 text-indigo-600" />
                    <h3 className="text-lg font-semibold text-indigo-800">S&eacute; Cathedral (1619)</h3>
                  </div>
                  <p className="text-indigo-700 text-sm">
                    The Cathedral of St. Catherine, commonly known as the S&eacute; Cathedral, is the seat of
                    the Archbishop of Goa and Daman and one of the largest churches in Asia. Built in the
                    Portuguese-Gothic style with Tuscan exterior and Corinthian interior columns, it was
                    completed in 1619. Its chapel of the Blessed Sacrament is considered one of the finest
                    examples of gilded woodwork in India. Originally the church had two towers; only one
                    survives, housing the famous &ldquo;Golden Bell,&rdquo; the largest in Goa.
                  </p>
                </div>

                <div className="bg-teal-50 p-6 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <Church className="w-5 h-5 text-teal-600" />
                    <h3 className="text-lg font-semibold text-teal-800">Church of St. Cajetan (1661)</h3>
                  </div>
                  <p className="text-teal-700 text-sm">
                    Built by Italian Theatine friars, the Church of St. Cajetan (also known as the Church
                    of Divine Providence) is modeled on the original St. Peter&apos;s Basilica in Rome. Its
                    Corinthian exterior, dome, and cruciform plan make it architecturally unique in India.
                    It is one of the best-preserved churches in Old Goa and a masterpiece of Italian Baroque
                    on Indian soil.
                  </p>
                </div>

                <div className="bg-orange-50 p-6 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <Church className="w-5 h-5 text-orange-600" />
                    <h3 className="text-lg font-semibold text-orange-800">Church of St. Francis of Assisi (1661)</h3>
                  </div>
                  <p className="text-orange-700 text-sm">
                    Originally built in 1521 and rebuilt in 1661, this Franciscan church combines Manueline
                    (Portuguese Late Gothic) and Baroque elements. It houses the Archaeological Museum of
                    Old Goa, with a rich collection of portraits, sculptures, and artifacts from the
                    Portuguese colonial period. The church&apos;s interior features exquisite gilded woodwork
                    and paintings depicting the life of St. Francis.
                  </p>
                </div>
              </div>
            </div>

            {/* Major Marian Sites */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Major Marian Pilgrimage Sites
              </h2>
              <p className="text-gray-600 mb-6">
                Marian devotion runs exceptionally deep in Indian Catholicism. Several Marian shrines draw
                millions of pilgrims annually &mdash; both Catholic and non-Catholic &mdash; testifying to the deep
                popular religiosity of the Indian faithful and the universal appeal of the Blessed Mother.
              </p>

              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <Star className="w-5 h-5 text-blue-600" />
                    <h3 className="text-lg font-semibold text-blue-800">
                      Basilica of Our Lady of Good Health, Velankanni, Tamil Nadu
                    </h3>
                  </div>
                  <p className="text-blue-700 mb-2">
                    Known as the &ldquo;Lourdes of the East,&rdquo; the shrine at Velankanni is one of the most
                    visited Marian pilgrimage sites in the world. The tradition of Marian apparitions at
                    Velankanni dates to the 16th century, when the Blessed Mother is said to have appeared
                    to a shepherd boy and later to a lame boy, both of whom were healed. Portuguese sailors
                    shipwrecked in the Bay of Bengal attributed their survival to Our Lady&apos;s intercession
                    and built a chapel in thanksgiving.
                  </p>
                  <p className="text-blue-700">
                    The present basilica was built in 1962 and draws an estimated <strong>20 million
                    pilgrims annually</strong>, including significant numbers of Hindus, Muslims, and other
                    non-Christians. The annual Feast of Our Lady of Good Health (August 29 &ndash; September 8)
                    is one of the largest religious gatherings in India.
                  </p>
                </div>

                <div className="bg-pink-50 p-6 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <Star className="w-5 h-5 text-pink-600" />
                    <h3 className="text-lg font-semibold text-pink-800">
                      Mount Mary Basilica, Bandra, Mumbai
                    </h3>
                  </div>
                  <p className="text-pink-700">
                    Perched on a hill overlooking the Arabian Sea in the Bandra suburb of Mumbai, Mount Mary
                    Basilica is one of the most visited churches in western India. The origins of the shrine
                    date to the 16th century, when Jesuit missionaries installed a statue of the Blessed
                    Virgin brought from Portugal. The annual Bandra Fair (September, around the feast of the
                    Nativity of Mary) draws hundreds of thousands of devotees of all faiths, making it one
                    of Mumbai&apos;s most iconic religious-cultural events.
                  </p>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <Star className="w-5 h-5 text-green-600" />
                    <h3 className="text-lg font-semibold text-green-800">
                      Basilica of Our Lady of Ransom, Vallarpadam, Kochi
                    </h3>
                  </div>
                  <p className="text-green-700">
                    Situated on the island of Vallarpadam in the backwaters of Kochi, this basilica is one
                    of Kerala&apos;s most important Marian shrines. The origins of devotion here trace to the
                    16th century, when Portuguese missionaries established a church dedicated to Our Lady
                    of Ransom. The shrine gained national prominence when Pope Benedict XVI elevated it to a
                    basilica in 2002, and it was the site of a major celebration during the Marian Year of
                    the Indian Church.
                  </p>
                </div>

                <div className="bg-amber-50 p-6 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <Star className="w-5 h-5 text-amber-600" />
                    <h3 className="text-lg font-semibold text-amber-800">
                      Bandel Church, Hooghly, West Bengal
                    </h3>
                  </div>
                  <p className="text-amber-700">
                    The Basilica of the Holy Rosary at Bandel, built by Portuguese Augustinian friars in
                    1599, is one of the oldest churches in Bengal and eastern India. Dedicated to Our Lady
                    of the Holy Rosary, the church survived the Mughal destruction of the Portuguese
                    settlement in 1632 and was rebuilt. It houses a celebrated statue of the Blessed Virgin
                    that is the focus of deep popular devotion in the region.
                  </p>
                </div>
              </div>
            </div>

            {/* Other Sites and Heritage */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Other Notable Sites and Catholic Heritage
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-800 mb-3">Other Major Pilgrimage Sites</h3>
                  <ul className="text-purple-700 space-y-2 text-sm">
                    <li><strong>Infant Jesus Shrine, Vivek Nagar, Bangalore:</strong> One of the most visited churches in South India, drawing enormous crowds on Thursdays and during the January feast.</li>
                    <li><strong>St. Philomena&apos;s Church, Mysore:</strong> A striking neo-Gothic church built in 1936, modeled on the Cologne Cathedral, housing relics of St. Philomena.</li>
                    <li><strong>Santa Cruz Basilica, Fort Kochi:</strong> Originally built in 1505 by the Portuguese (one of the earliest European churches in India), the current structure dates to 1905. Elevated to basilica status in 1984.</li>
                  </ul>
                </div>

                <div className="bg-indigo-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-indigo-800 mb-3">Catholic Art and Architecture</h3>
                  <ul className="text-indigo-700 space-y-2 text-sm">
                    <li><strong>Indo-Portuguese Baroque:</strong> A distinctive architectural style blending European Baroque with Indian decorative elements, seen at its finest in Old Goa and across the Konkan coast.</li>
                    <li><strong>Nasrani Cross (<em>Mar Thoma Sliba</em>):</strong> The distinctive Persian cross with floral motifs used by the Thomas Christians, representing one of the oldest Christian artistic traditions in the world.</li>
                    <li><strong>Kerala Church Architecture:</strong> Thomas Christian churches in Kerala feature a unique architectural style heavily influenced by Hindu temple design, with granite foundations, tiled roofs, elaborate woodwork, and the use of oil lamps and flower decorations &mdash; a living example of centuries-old inculturation.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Sources */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Sources &amp; Further Reading</h3>
              <ol className="text-gray-700 space-y-2 list-decimal list-inside">
                <li>A. Pereira, <em>Baroque Goa: The Architecture of Portuguese India</em> (New Delhi: Books &amp; Books, 1995).</li>
                <li>Archaeological Survey of India, official site documentation for Old Goa monuments.</li>
                <li>Susan Bayly, <em>Saints, Goddesses and Kings: Muslims and Christians in South Indian Society, 1700&ndash;1900</em> (Cambridge University Press, 1989).</li>
                <li>Velankanni Shrine, official records and publications.</li>
                <li>George Menachery, ed., <em>The St. Thomas Christian Encyclopaedia of India</em>, 3 vols. (Thrissur: STCEI, 1973&ndash;2010).</li>
              </ol>
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* TAB 8: MODERN CHURCH                                         */}
        {/* ============================================================ */}
        {activeTab === 'modern' && (
          <div className="space-y-8">
            {/* Education */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Education: India&apos;s Largest Private Education Provider
              </h2>
              <p className="text-gray-600 mb-6">
                The Catholic Church is the single largest private provider of education in India, operating
                an estimated <strong>25,000+ educational institutions</strong> serving millions of students of
                all faiths. From village primary schools in remote tribal areas to some of the most prestigious
                universities in the country, the Church&apos;s educational mission is one of its most visible and
                widely respected contributions to Indian society.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">Notable Institutions</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="text-blue-700 space-y-2">
                    <li><strong>St. Xavier&apos;s College, Mumbai</strong> (founded 1869) &mdash; one of India&apos;s most prestigious colleges, run by the Jesuits.</li>
                    <li><strong>Loyola College, Chennai</strong> (founded 1925) &mdash; a leading Jesuit institution in South India.</li>
                    <li><strong>Christ University, Bangalore</strong> &mdash; one of the top-ranked universities in India, originally founded by the CMI Fathers.</li>
                  </ul>
                  <ul className="text-blue-700 space-y-2">
                    <li><strong>Don Bosco network</strong> &mdash; Salesian-run schools and technical institutes across India, with special focus on the northeast and tribal areas.</li>
                    <li><strong>De La Salle schools</strong> &mdash; La Salle Brothers&apos; network of schools serving lower-income communities.</li>
                    <li><strong>Jesuit educational network</strong> &mdash; dozens of schools and colleges across all regions, including Xavier Labour Relations Institute (XLRI) in Jamshedpur, one of India&apos;s top business schools.</li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-800 mb-3">Distinctive Features</h3>
                <p className="text-green-700">
                  Catholic schools in India are distinctive for their emphasis on serving students regardless
                  of religion &mdash; the vast majority of students in Catholic institutions are not Catholic. The
                  Church&apos;s educational mission has been particularly transformative in tribal and Dalit
                  communities, where Catholic schools have often been the first or only educational institutions
                  available. This commitment to inclusive education, rooted in Catholic social teaching on human
                  dignity and the preferential option for the poor, has earned the Church widespread respect
                  across Indian society, even among those who otherwise view Christian institutions with suspicion.
                </p>
              </div>
            </div>

            {/* Healthcare */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Healthcare: A Network of Mercy
              </h2>
              <div className="bg-purple-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-purple-800 mb-3">Catholic Health Association of India (CHAI)</h3>
                <p className="text-purple-700 mb-3">
                  Founded in 1943, CHAI is one of the largest non-governmental healthcare networks in the
                  world, coordinating the work of <strong>~5,000+ Catholic healthcare facilities</strong> across
                  India. These include major hospitals, clinics, dispensaries, rehabilitation centers, and
                  community health programs, many of them serving the poorest and most marginalized communities
                  in areas where government healthcare is minimal or nonexistent.
                </p>
                <p className="text-purple-700">
                  In addition to CHAI&apos;s network, the Missionaries of Charity (founded by St. Teresa of
                  Calcutta) run homes for the dying, orphanages, and AIDS hospices across India. Catholic
                  Relief Services (CRS) and Caritas India coordinate disaster relief, development programs,
                  and humanitarian aid.
                </p>
              </div>
            </div>

            {/* Social Justice */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Social Justice and Advocacy
              </h2>
              <div className="bg-red-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-red-800 mb-3">Dalit Rights</h3>
                <p className="text-red-700 mb-3">
                  The Catholic Church has been one of the most vocal institutional advocates for the rights
                  of Dalits (formerly called &ldquo;untouchables&rdquo;) in India. A significant portion of
                  Indian Catholics &mdash; particularly in Tamil Nadu, Andhra Pradesh, and other regions &mdash;
                  come from Dalit backgrounds.
                </p>
                <p className="text-red-700">
                  A major ongoing struggle involves the <strong>Scheduled Castes Order of 1950</strong>, a
                  presidential decree that originally restricted affirmative action benefits (reservations)
                  to Hindu Dalits. While Sikh and Buddhist Dalits were later included, <strong>Dalit
                  Christians and Muslims remain excluded</strong>, meaning that Dalits who convert to
                  Christianity lose access to government reservations in education, employment, and political
                  representation. The CBCI and numerous Catholic organizations have long campaigned for the
                  removal of this religious discrimination, which they argue violates India&apos;s constitutional
                  guarantee of equality.
                </p>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-amber-800 mb-3">Tribal Ministry</h3>
                <p className="text-amber-700">
                  The Catholic Church has a particularly strong presence among tribal (Adivasi) communities
                  in Jharkhand, Chhattisgarh, Odisha, and the northeastern states (Meghalaya, Mizoram,
                  Nagaland, and others). In the northeast, several states have majority or significant
                  Christian populations, largely the result of 19th and 20th century missionary work. The
                  Church&apos;s commitment to education, healthcare, and land rights advocacy has made it a
                  vital institution in tribal life, though it also faces challenges from anti-conversion
                  legislation and communal tensions.
                </p>
              </div>
            </div>

            {/* Inculturation */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Inculturation and Interreligious Dialogue
              </h2>
              <div className="bg-indigo-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-indigo-800 mb-3">The Indian Mass and Liturgical Inculturation</h3>
                <p className="text-indigo-700 mb-3">
                  In the spirit of the Second Vatican Council&apos;s call for liturgical adaptation, Indian
                  Catholic liturgists pioneered significant experiments in inculturation. Fr. D. S.
                  Amalorpavadass and the National Biblical, Catechetical, and Liturgical Centre (NBCLC) in
                  Bangalore developed the <em>Bharatiya Puja</em> (Indian Mass), incorporating elements such as:
                </p>
                <ul className="text-indigo-700 space-y-1">
                  <li>Traditional Indian <em>bhajans</em> (devotional songs) and <em>kirtans</em> in place of Western hymns.</li>
                  <li>Oil lamps (<em>deepa</em>), flowers, and incense in Indian ritual styles.</li>
                  <li>Sitting on the floor in the Indian manner.</li>
                  <li>Sanskrit and vernacular language prayers alongside Latin and English.</li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-green-800 mb-3">The Ashram Movement</h3>
                <p className="text-green-700">
                  One of the most distinctive contributions of Indian Catholicism to the universal Church has
                  been the Christian ashram movement. Inspired by the Hindu tradition of forest-dwelling
                  contemplative communities, Catholic pioneers established ashrams combining Christian monastic
                  life with Indian spiritual practices. The most famous is <strong>Saccidananda Ashram
                  (Shantivanam)</strong> in Tamil Nadu, founded by Fr. Jules Monchanin and Benedictine monk
                  Henri Le Saux (Abhishiktananda) in 1950, and later led by the English Benedictine Bede
                  Griffiths (1968&ndash;1993). These ashrams became centers of Hindu-Christian dialogue,
                  contemplative prayer, and a distinctively Indian approach to the Gospel.
                </p>
              </div>
            </div>

            {/* Challenges */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Contemporary Challenges
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-orange-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-orange-800 mb-3">Anti-Conversion Laws</h3>
                  <p className="text-orange-700 text-sm">
                    Several Indian states have enacted &ldquo;Freedom of Religion&rdquo; laws (commonly known as
                    anti-conversion laws) that restrict or regulate religious conversions, particularly those
                    deemed to involve &ldquo;force, fraud, or allurement.&rdquo; The Church has consistently opposed
                    these laws as violations of the fundamental right to religious freedom guaranteed by the
                    Indian Constitution (Article 25), arguing that they are often used to target Christians
                    and suppress legitimate evangelization.
                  </p>
                </div>

                <div className="bg-red-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-red-800 mb-3">Communal Tensions</h3>
                  <p className="text-red-700 text-sm">
                    Indian Christians, including Catholics, have at times faced communal violence, particularly
                    in tribal areas where conversion activity is perceived as threatening traditional social
                    structures. The 2008 anti-Christian violence in Kandhamal, Odisha, which left dozens dead
                    and thousands displaced, was the most severe such incident in recent memory. The Church
                    continues to advocate for religious harmony and interfaith dialogue while insisting on
                    the right of all Indians to practice and share their faith freely.
                  </p>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-800 mb-3">Syro-Malabar Liturgy Dispute</h3>
                  <p className="text-purple-700 text-sm">
                    The Syro-Malabar Catholic Church has been engaged in a prolonged and painful internal
                    dispute over the mode of celebrating the Holy Qurbana. The controversy centers on whether
                    the priest should face the people (<em>versus populum</em>) or face the altar/east (<em>ad
                    orientem</em>) during the Eucharistic Prayer. The Holy See has intervened multiple times,
                    prescribing a uniform mode, but compliance has been uneven, particularly in the
                    Archdiocese of Ernakulam-Angamaly.
                  </p>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-800 mb-3">Vocations and Demographic Shifts</h3>
                  <p className="text-blue-700 text-sm">
                    While India remains one of the top countries in the world for priestly and religious
                    vocations, some traditional strongholds (particularly in urban Kerala) have seen declining
                    numbers. Urbanization, rising prosperity, smaller family sizes, and changing cultural
                    attitudes are all factors. However, newer Catholic communities in tribal areas and the
                    north continue to produce significant numbers of vocations.
                  </p>
                </div>
              </div>
            </div>

            {/* India as Global Source */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                India as a Global Source of Catholic Vitality
              </h2>
              <p className="text-gray-600 mb-6">
                In the 21st century, India has emerged as one of the most important sources of Catholic
                vitality in the global Church. The numbers are striking:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                <div className="bg-amber-50 p-6 rounded-lg text-center">
                  <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Cross className="w-6 h-6 text-amber-700" />
                  </div>
                  <h3 className="text-2xl font-bold text-amber-800">~35,000</h3>
                  <p className="text-amber-700 text-sm">Priests serving in India and worldwide</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg text-center">
                  <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Heart className="w-6 h-6 text-blue-700" />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-800">~90,000</h3>
                  <p className="text-blue-700 text-sm">Women religious (sisters and nuns)</p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg text-center">
                  <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Globe className="w-6 h-6 text-green-700" />
                  </div>
                  <h3 className="text-2xl font-bold text-green-800">5+ Continents</h3>
                  <p className="text-green-700 text-sm">Indian priests and religious serving worldwide</p>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg text-center">
                  <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center mx-auto mb-3">
                    <BookOpen className="w-6 h-6 text-purple-700" />
                  </div>
                  <h3 className="text-2xl font-bold text-purple-800">World-Class</h3>
                  <p className="text-purple-700 text-sm">Theologians and scholars</p>
                </div>
              </div>

              <div className="bg-teal-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-teal-800 mb-3">Indian Theologians of Global Significance</h3>
                <p className="text-teal-700 mb-3">
                  Indian Catholic theologians have made distinctive contributions to global theological
                  discourse, particularly in the areas of interreligious dialogue, liberation theology, and
                  the theology of religions:
                </p>
                <ul className="text-teal-700 space-y-2">
                  <li><strong>Raimon Panikkar (1918&ndash;2010):</strong> Spanish-Indian priest and philosopher, a pioneer of Hindu-Christian dialogue whose concept of &ldquo;the cosmotheandric experience&rdquo; influenced interfaith theology worldwide.</li>
                  <li><strong>Michael Amaladoss, SJ (b. 1936):</strong> Indian Jesuit theologian whose work on the theology of religions, Asian theology, and inculturation has been widely influential.</li>
                  <li><strong>Felix Wilfred (b. 1948):</strong> Lay theologian and founder of the Asian Centre for Cross-Cultural Studies, known for his work on Asian Christianity, Dalit theology, and the Church in the public sphere.</li>
                </ul>
              </div>

              <div className="bg-pink-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-pink-800 mb-3">Diaspora Eparchies</h3>
                <p className="text-pink-700">
                  Reflecting the global migration of Indian Catholics, both the Syro-Malabar and
                  Syro-Malankara Churches have established diaspora eparchies on multiple continents. The
                  Syro-Malabar Church has eparchies in the <strong>United States</strong> (St. Thomas Syro-Malabar
                  Diocese of Chicago, St. Thomas the Apostle Syro-Malabar Eparchy of Dallas), <strong>Canada,
                  the United Kingdom, Australia,</strong> and <strong>Europe</strong>, ensuring that Indian
                  Catholics abroad can worship in their own rite and maintain their distinctive spiritual
                  heritage. Indian priests of the Latin Rite also serve in significant numbers in dioceses
                  across Europe, North America, Africa, and Oceania, filling the vocational gaps left by
                  declining numbers in the West.
                </p>
              </div>
            </div>

            {/* Sources */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Sources &amp; Further Reading</h3>
              <ol className="text-gray-700 space-y-2 list-decimal list-inside">
                <li>Catholic Bishops&apos; Conference of India (CBCI), official publications and pastoral letters.</li>
                <li>Jose Kanjamala, SVD, <em>The Future of the Church in India</em> (Mumbai: St. Pauls, 2014).</li>
                <li>Rowena Robinson, <em>Christians of India</em> (New Delhi: Sage Publications, 2003).</li>
                <li>C. B. Firth, <em>An Introduction to Indian Church History</em> (Delhi: ISPCK, 1961; revised editions).</li>
                <li>Michael Amaladoss, SJ, <em>The Asian Jesus</em> (Maryknoll, NY: Orbis Books, 2006).</li>
              </ol>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
