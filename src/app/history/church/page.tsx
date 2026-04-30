'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Flame,
  BookOpen,
  Crown,
  Globe,
  Church,
  Users,
  Shield,
  Scroll,
  Star,
  Cross,
  Landmark,
  ArrowRight,
  Calendar,
  Heart,
  MapPin,
} from 'lucide-react'

type TabId = 'apostolic' | 'patristic' | 'medieval' | 'reformation' | 'modern' | 'today'

const tabs: { id: TabId; label: string; years: string }[] = [
  { id: 'apostolic', label: 'Apostolic Age', years: '33–100' },
  { id: 'patristic', label: 'Patristic Era', years: '100–500' },
  { id: 'medieval', label: 'Medieval Church', years: '500–1400' },
  { id: 'reformation', label: 'Reformation & Renewal', years: '1400–1700' },
  { id: 'modern', label: 'Modern Era', years: '1700–Present' },
  { id: 'today', label: 'Church Today', years: '21st Century' },
]

export default function ChurchHistoryPage() {
  const [activeTab, setActiveTab] = useState<TabId>('apostolic')

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

      {/* Page Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">
          History of the Catholic Church
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          From the upper room in Jerusalem to 1.4 billion members across every nation, the story of
          the Catholic Church spans two thousand years — centuries of saints and sinners, councils
          and controversies, missionaries and martyrs. This is the longest continuous institutional
          history in the Western world.
        </p>
      </div>

      {/* Tab Bar */}
      <div className="flex justify-center mb-8">
        <div className="bg-white rounded-lg shadow-lg p-1 overflow-x-auto max-w-full">
          <div className="flex flex-nowrap gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2.5 rounded-md text-sm font-medium transition-colors whitespace-nowrap flex flex-col items-center gap-0.5 ${
                  activeTab === tab.id
                    ? 'bg-amber-100 text-amber-800 font-semibold border-b-2 border-amber-500'
                    : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                }`}
              >
                <span>{tab.label}</span>
                <span className={`text-xs font-normal ${activeTab === tab.id ? 'text-amber-600' : 'text-gray-400'}`}>
                  ({tab.years})
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ==================== TAB 1: APOSTOLIC AGE ==================== */}
      {activeTab === 'apostolic' && (
        <div className="space-y-6">

          {/* Introduction */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center shrink-0">
                <Flame className="w-5 h-5 text-amber-700" />
              </div>
              <h2 className="text-2xl font-serif font-bold text-gray-900">The Apostolic Age (AD 33–100)</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              The Church was born not with a manifesto or a constitution, but with a rushing wind and tongues
              of fire. On the day of Pentecost, fifty days after the Resurrection of Christ, the Holy Spirit
              descended upon the Apostles gathered in Jerusalem. Peter stood up and preached, and three thousand
              were baptized in a single day. From that moment, the movement that would become the Catholic
              Church began its inexorable spread across the Roman world and beyond.
            </p>
          </div>

          {/* Pentecost and Jerusalem Community */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-xl font-serif font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Flame className="w-5 h-5 text-amber-600" /> Pentecost and the Jerusalem Community
            </h3>

            <div className="bg-amber-50 border-l-4 border-amber-400 p-5 rounded-r-lg mb-5">
              <p className="text-amber-900 italic leading-relaxed">
                &ldquo;They devoted themselves to the apostles&apos; teaching and fellowship, to the breaking
                of bread and the prayers.&rdquo;
              </p>
              <p className="text-amber-700 text-sm mt-2">&mdash; Acts 2:42 (NABRE)</p>
            </div>

            <p className="text-gray-700 leading-relaxed mb-4">
              Pentecost (Acts 2:1–41) marks the Church&apos;s public birth. The Holy Spirit descends as tongues
              of fire; Peter preaches that the crucified and risen Jesus is Lord and Christ; three thousand
              people are baptized. Acts 2:42 then gives us a programmatic description of the early community,
              built on four pillars: <strong>apostles&apos; teaching</strong> (doctrine),{' '}
              <strong>fellowship</strong> (koinonia), <strong>breaking of bread</strong> (Eucharist), and{' '}
              <strong>prayers</strong> (liturgical worship). These four pillars remain the skeleton of Catholic
              life to this day.
            </p>

            <p className="text-gray-700 leading-relaxed">
              This first community in Jerusalem shared goods, cared for the poor, and met daily in the Temple
              courts and in houses for the breaking of bread. It was recognizably communal, sacramental, and
              hierarchical — led by the Twelve under Peter&apos;s presidency.
            </p>
          </div>

          {/* Key Events Timeline */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-xl font-serif font-semibold text-gray-900 mb-5 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-gray-500" /> Key Events
            </h3>

            <div className="space-y-4">
              {[
                {
                  year: 'c. 33',
                  event: 'Pentecost — Holy Spirit descends; Peter\'s sermon; 3,000 baptized (Acts 2)',
                },
                {
                  year: 'c. 34',
                  event: 'First deacons chosen (Acts 6): Stephen, Philip, and five others appointed to serve the poor',
                },
                {
                  year: 'c. 34',
                  event: 'Stephen martyred — the first Christian martyr; as he dies: "Lord, do not hold this sin against them" (Acts 7:60)',
                },
                {
                  year: 'c. 35',
                  event: 'Saul\'s conversion on the road to Damascus — blinded by light, hears: "Saul, Saul, why are you persecuting me?" (Acts 9)',
                },
                {
                  year: 'c. 41',
                  event: 'Peter\'s vision; baptism of Cornelius the centurion (Acts 10) — Gentiles explicitly included in the Church',
                },
                {
                  year: 'c. 43',
                  event: 'Antioch: disciples "first called Christians" (Acts 11:26) — the name that would define the movement',
                },
                {
                  year: 'c. 49',
                  event: 'Council of Jerusalem (Acts 15): Apostles and elders settle the Gentile question — circumcision not required; first council in Church history',
                },
                {
                  year: '46–57',
                  event: 'Paul\'s three missionary journeys: Cyprus & Galatia; Macedonia, Athens & Corinth; Ephesus — planting churches across the empire',
                },
                {
                  year: 'c. 50–67',
                  event: 'Paul\'s letters (Romans, Corinthians, Galatians, Philippians, Thessalonians…) — the earliest New Testament writings',
                },
                {
                  year: '64',
                  event: 'Nero\'s persecution: Rome burns; Christians blamed; Peter and Paul martyred in Rome',
                },
                {
                  year: '70',
                  event: 'Destruction of Jerusalem Temple by Roman general Titus — the decisive rupture with Temple Judaism; Church center shifts West',
                },
                {
                  year: 'c. 90–100',
                  event: 'John at Ephesus: the Fourth Gospel and Book of Revelation written; John is the only Apostle to die of natural causes (c. 100)',
                },
              ].map((item) => (
                <div key={item.year + item.event} className="flex gap-4 items-start">
                  <span className="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full whitespace-nowrap shrink-0 mt-1 font-medium">
                    AD {item.year}
                  </span>
                  <p className="text-gray-700 text-sm leading-relaxed">{item.event}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Council of Jerusalem */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-xl font-serif font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-600" /> The Council of Jerusalem (~AD 49)
            </h3>
            <div className="bg-blue-50 rounded-lg p-5">
              <p className="text-blue-900 leading-relaxed mb-3">
                The first Council of Jerusalem (Acts 15) is the prototype for all future Church councils. The
                question: must Gentile Christians be circumcised and observe the Mosaic Law? After debate,
                Peter speaks decisively, then James pronounces the judgment: Gentiles are not to be burdened
                with the full Mosaic law. A letter is dispatched to the churches.
              </p>
              <p className="text-blue-800 text-sm">
                The decision&apos;s form is significant: &ldquo;It seemed good to the Holy Spirit and to
                us&hellip;&rdquo; (Acts 15:28). Collegial discernment under the Spirit&apos;s guidance — not
                individual interpretation — becomes the Church&apos;s permanent mode of resolving doctrinal
                disputes.
              </p>
            </div>
          </div>

          {/* Cross-link to Apostles */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-serif font-semibold text-gray-900 mb-1">The Apostles — Profiles & Missions</h3>
                <p className="text-sm text-gray-600">
                  Detailed accounts of each Apostle: their missions, traditions, and martyrdom.
                </p>
              </div>
              <Link
                href="/history/apostles"
                className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 text-amber-700 rounded-lg border border-amber-200 hover:bg-amber-100 transition-colors text-sm font-medium shrink-0 ml-4"
              >
                The Apostles <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Sources */}
          <div className="bg-gray-50 rounded-lg p-5">
            <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">Sources &amp; Further Reading</h4>
            <ol className="text-sm text-gray-600 space-y-1.5 list-decimal list-inside">
              <li>Acts of the Apostles (NABRE) — primary source for the Apostolic Age</li>
              <li>Eusebius of Caesarea, <em>Ecclesiastical History</em> (c. AD 313) — earliest Church history</li>
              <li>Raymond E. Brown, <em>An Introduction to the New Testament</em> (Anchor Bible Reference Library, Doubleday, 1997)</li>
              <li>Larry W. Hurtado, <em>Lord Jesus Christ: Devotion to Jesus in Earliest Christianity</em> (Eerdmans, 2003)</li>
              <li>N.T. Wright, <em>The New Testament and the People of God</em> (Fortress, 1992)</li>
              <li><em>Catechism of the Catholic Church</em> (CCC) §§ 748–810: &ldquo;The Church in God&apos;s Plan&rdquo;</li>
            </ol>
          </div>

        </div>
      )}

      {/* ==================== TAB 2: PATRISTIC ERA ==================== */}
      {activeTab === 'patristic' && (
        <div className="space-y-6">

          {/* Introduction */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                <Scroll className="w-5 h-5 text-blue-700" />
              </div>
              <h2 className="text-2xl font-serif font-bold text-gray-900">The Patristic Era (AD 100–500)</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              The four centuries after the Apostles saw the Church emerge from underground persecution to become
              the official religion of the Roman Empire — and simultaneously produce a body of theological
              reflection that remains definitive to this day. The Church Fathers, writing in Greek and Latin,
              hammered out the doctrines of the Trinity and the Incarnation in the fire of controversy. By the
              time Rome fell in 476, the Catholic Church had inherited the task of preserving civilization itself.
            </p>
          </div>

          {/* Age of Martyrs */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-xl font-serif font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5 text-red-600" /> The Age of Martyrs (100–313)
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              For two hundred years, to be a Christian was potentially a capital offence. Persecution was
              periodic rather than continuous — but under emperors like Domitian (81–96), Decius (249–251),
              and Diocletian (303–311), it was savage and systematic. Thousands died rather than offer a pinch
              of incense to the emperor. Far from destroying the Church, this witness drew more converts.
            </p>
            <div className="bg-red-50 border-l-4 border-red-400 p-5 rounded-r-lg">
              <p className="text-red-900 italic leading-relaxed">
                &ldquo;The blood of the martyrs is the seed of the Church.&rdquo;
              </p>
              <p className="text-red-700 text-sm mt-2">&mdash; Tertullian, <em>Apologeticus</em> (c. AD 197)</p>
            </div>
          </div>

          {/* Key Fathers */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-xl font-serif font-semibold text-gray-900 mb-5 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-blue-600" /> The Church Fathers
            </h3>
            <div className="bg-blue-50 rounded-lg p-5">
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    name: 'Ignatius of Antioch (c. 35–107)',
                    desc: 'Bishop of Antioch; on his way to martyrdom in Rome, wrote seven letters describing the Eucharist as "medicine of immortality" and establishing the hierarchy of bishop, priest, and deacon.',
                  },
                  {
                    name: 'Justin Martyr (c. 100–165)',
                    desc: 'First great Christian philosopher; his First Apology (c. 155) gives the earliest detailed description of Sunday Eucharist: readings, homily, prayers, bread and cup. Martyred in Rome.',
                  },
                  {
                    name: 'Irenaeus of Lyon (c. 130–202)',
                    desc: 'Against Heresies demolished Gnosticism; articulated apostolic succession as the guarantee of authentic doctrine: the same faith passed from Apostles through bishops.',
                  },
                  {
                    name: 'Origen of Alexandria (c. 185–253)',
                    desc: 'First systematic theologian; pioneered allegorical Scripture interpretation; his Hexapla was the first critical edition of the Bible. Some views later condemned.',
                  },
                  {
                    name: 'Cyprian of Carthage (c. 210–258)',
                    desc: '"He cannot have God for his Father who has not the Church for his mother." Martyred under Valerian; his letters define episcopal collegiality and Church unity.',
                  },
                  {
                    name: 'Athanasius of Alexandria (296–373)',
                    desc: '"Athanasius against the world" (contra mundum) — exiled five times by Arian emperors, never compromised on Nicene orthodoxy. His persistence secured the Trinity for future generations.',
                  },
                  {
                    name: 'Ambrose of Milan (340–397)',
                    desc: 'Confronted Emperor Theodosius after the massacre at Thessalonica: "The Emperor is within the Church, not above it." Established the Church\'s moral authority over civil power.',
                  },
                  {
                    name: 'Augustine of Hippo (354–430)',
                    desc: 'The most influential theologian in Western Christianity. Confessions (autobiography of the soul), City of God (theology of history), and a vast correspondence; defined grace, original sin, and just war.',
                  },
                ].map((f) => (
                  <div key={f.name} className="bg-white rounded-lg p-4 border border-blue-100">
                    <p className="font-semibold text-blue-900 text-sm mb-1">{f.name}</p>
                    <p className="text-blue-800 text-sm leading-relaxed">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Councils */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-xl font-serif font-semibold text-gray-900 mb-5 flex items-center gap-2">
              <Landmark className="w-5 h-5 text-amber-600" /> The Great Councils
            </h3>

            <div className="space-y-4">
              <div className="bg-amber-50 border-l-4 border-amber-400 p-5 rounded-r-lg">
                <p className="font-semibold text-amber-900 mb-1">Edict of Milan (313)</p>
                <p className="text-amber-800 text-sm leading-relaxed">
                  Emperor Constantine grants religious freedom across the Empire. The Church emerges from the
                  catacombs. Basilicas are built; bishops become public figures. Christianity goes from persecuted
                  sect to favoured religion within a generation.
                </p>
              </div>

              <div className="bg-blue-50 rounded-lg p-5">
                <p className="font-semibold text-blue-900 mb-1">First Council of Nicaea (325)</p>
                <p className="text-blue-800 text-sm leading-relaxed mb-2">
                  Called by Constantine to settle the Arian controversy: Arius taught that the Son was a
                  creature — "there was a time when he was not." Nicaea condemned Arianism and proclaimed that
                  the Son is <em>homoousios</em> — consubstantial, of one being with the Father. The Nicene
                  Creed is born.
                </p>
                <p className="text-blue-700 text-xs italic">
                  "We believe in one Lord, Jesus Christ, the only Son of God, eternally begotten of the
                  Father, God from God, Light from Light, true God from true God, begotten, not made,
                  consubstantial with the Father…"
                </p>
              </div>

              <div className="bg-blue-50 rounded-lg p-5">
                <p className="font-semibold text-blue-900 mb-1">Cappadocian Fathers and Council of Constantinople (381)</p>
                <p className="text-blue-800 text-sm leading-relaxed">
                  Basil the Great, Gregory of Nyssa, and Gregory of Nazianzus articulate the full doctrine of
                  the Trinity: three Persons, one divine Nature. Constantinople I completes the Nicene Creed,
                  affirming the full divinity of the Holy Spirit: &ldquo;the Lord, the giver of life, who
                  proceeds from the Father, who with the Father and the Son is adored and glorified.&rdquo;
                </p>
              </div>

              <div className="bg-green-50 rounded-lg p-5">
                <p className="font-semibold text-green-900 mb-1">Council of Ephesus (431) — Mary as Theotokos</p>
                <p className="text-green-800 text-sm leading-relaxed">
                  Nestorius, patriarch of Constantinople, refused to call Mary <em>Theotokos</em>
                  (God-Bearer), preferring <em>Christotokos</em>. Ephesus declared Mary truly Theotokos — not
                  to exalt Mary for her own sake, but to protect the doctrine that Jesus is truly one divine
                  Person, not a human person merely inhabited by God.
                </p>
              </div>

              <div className="bg-green-50 rounded-lg p-5">
                <p className="font-semibold text-green-900 mb-1">Council of Chalcedon (451) — The Two Natures of Christ</p>
                <p className="text-green-800 text-sm leading-relaxed mb-2">
                  The most precise Christological definition in history. Christ is one divine Person in two
                  complete natures — human and divine — united "without confusion, without change, without
                  division, without separation." The <em>Tome of Leo</em> (Pope Leo I&apos;s letter to the
                  Council) was read out and acclaimed: "Peter has spoken through Leo."
                </p>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-400 p-5 rounded-r-lg">
                <p className="font-semibold text-amber-900 mb-1">Fall of Western Roman Empire (476)</p>
                <p className="text-amber-800 text-sm leading-relaxed">
                  When the last Western emperor Romulus Augustulus is deposed, the Catholic Church becomes the
                  primary institution preserving Roman law, Latin literacy, the classics, and the very concept
                  of civilization. The Papacy and the episcopate take up the work of governance, scholarship,
                  and charity that the Empire can no longer perform.
                </p>
              </div>
            </div>
          </div>

          {/* Sources */}
          <div className="bg-gray-50 rounded-lg p-5">
            <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">Sources &amp; Further Reading</h4>
            <ol className="text-sm text-gray-600 space-y-1.5 list-decimal list-inside">
              <li><em>Early Christian Writings</em> (Penguin Classics) — Ignatius, Justin, Irenaeus, and others in translation</li>
              <li>Henry Chadwick, <em>The Early Church</em> (Penguin History of the Church, Vol. 1, rev. ed. 1993)</li>
              <li>Jaroslav Pelikan, <em>The Christian Tradition, Vol. 1: The Emergence of the Catholic Tradition (100&ndash;600)</em> (University of Chicago, 1971)</li>
              <li>Norman P. Tanner SJ (ed.), <em>Decrees of the Ecumenical Councils, Vol. 1: Nicaea I to Lateran V</em> (Sheed &amp; Ward / Georgetown, 1990)</li>
              <li>St. Augustine, <em>Confessions</em> and <em>City of God</em> (Penguin Classics editions)</li>
              <li><em>Catechism of the Catholic Church</em> (CCC) §§ 811–870: &ldquo;The Church — One, Holy, Catholic, Apostolic&rdquo;</li>
            </ol>
          </div>

        </div>
      )}

      {/* ==================== TAB 3: MEDIEVAL CHURCH ==================== */}
      {activeTab === 'medieval' && (
        <div className="space-y-6">

          {/* Introduction */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center shrink-0">
                <Crown className="w-5 h-5 text-amber-700" />
              </div>
              <h2 className="text-2xl font-serif font-bold text-gray-900">The Medieval Church (AD 500–1400)</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              The Middle Ages are often caricatured as a period of ignorance and oppression. In reality, the
              Catholic Church during these nine centuries founded Europe&apos;s universities, built its greatest
              art and architecture, codified its law, fed its poor through monastic networks, and produced
              some of the most brilliant thinkers in Western history. It was also a period of serious failures
              — political entanglement, schism, and excess — that sowed the seeds of later crisis.
            </p>
          </div>

          {/* Monasticism */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-xl font-serif font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Heart className="w-5 h-5 text-green-600" /> Monasticism and the Preservation of Civilization
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Benedict of Nursia (~480–547)</strong> founded Monte Cassino and wrote the Rule of Saint
              Benedict — perhaps the most influential document in Western cultural history after the Bible.
              Its motto <em>ora et labora</em> (pray and work) balanced contemplation and manual labour.
              Benedictine monasteries became the libraries, hospitals, farms, schools, and inns of medieval
              Europe. They copied manuscripts through the dark centuries after Rome&apos;s fall, preserving
              Virgil and Cicero alongside Scripture and the Fathers.
            </p>
            <div className="bg-green-50 rounded-lg p-5">
              <p className="text-green-900 font-semibold mb-2">What the Monasteries Gave Europe:</p>
              <ul className="text-green-800 text-sm space-y-1.5">
                <li className="flex items-start gap-2"><span className="font-bold mt-0.5">&bull;</span><span>Preservation of classical manuscripts (Latin and Greek)</span></li>
                <li className="flex items-start gap-2"><span className="font-bold mt-0.5">&bull;</span><span>Agricultural innovation: crop rotation, land drainage, viticulture</span></li>
                <li className="flex items-start gap-2"><span className="font-bold mt-0.5">&bull;</span><span>Care of the sick — monastic infirmaries are the ancestors of hospitals</span></li>
                <li className="flex items-start gap-2"><span className="font-bold mt-0.5">&bull;</span><span>Schools and scriptoria: literacy preserved in a post-literate world</span></li>
                <li className="flex items-start gap-2"><span className="font-bold mt-0.5">&bull;</span><span>Hospitality to travellers: monasteries were the motorway service stations of the medieval world</span></li>
              </ul>
            </div>
          </div>

          {/* Key events */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-xl font-serif font-semibold text-gray-900 mb-5 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-gray-500" /> Key Events
            </h3>
            <div className="space-y-4">
              {[
                {
                  year: '590–604',
                  event: 'Gregory the Great — called himself "servant of servants of God"; codified Gregorian chant; sent Augustine of Canterbury to evangelize England (596); set the template for the medieval papacy',
                },
                {
                  year: '622',
                  event: 'Muhammad\'s Hijra — Islam founded; within a century, North Africa, the Middle East, Spain, and Persia fall to Islamic armies; the Church loses its oldest sees',
                },
                {
                  year: '800',
                  event: 'Charlemagne crowned Holy Roman Emperor by Pope Leo III on Christmas Day — the birth of the idea of Christendom: a unified Christian civilization under shared spiritual and temporal authority',
                },
                {
                  year: '1049–1122',
                  event: 'Gregorian Reform: Pope Gregory VII battles Emperor Henry IV over investiture (who appoints bishops). Henry is excommunicated; stands barefoot in snow at Canossa (1077) begging absolution. The Church asserts its independence from secular power',
                },
                {
                  year: '1054',
                  event: 'Great Schism: mutual excommunications between Pope Leo IX\'s legate and Patriarch Michael Cerularius of Constantinople. Theological disputes (filioque, papal primacy) and political rivalry produce the permanent split between Catholic and Orthodox — though full separation was gradual over subsequent centuries',
                },
                {
                  year: '1088–1167',
                  event: 'Universities founded under Church patronage: Bologna (1088), Paris (c. 1150), Oxford (c. 1167) — the Church creates the modern university',
                },
                {
                  year: '1095',
                  event: 'First Crusade: Pope Urban II at Clermont — "Deus vult!" Nine Crusades follow over two centuries. Mixed legacy: defense of pilgrim routes and Eastern Christians vs. the sack of Jerusalem and Constantinople; Jewish communities targeted',
                },
                {
                  year: '1209–1221',
                  event: 'Mendicant orders founded: Francis of Assisi (Franciscans, 1209) — poverty, joy, "Rebuild my Church"; Dominic (Dominicans, 1216) — preaching and scholarship. Renewal from below',
                },
                {
                  year: '1225–1274',
                  event: 'Thomas Aquinas: Summa Theologiae — the greatest synthesis of faith and reason. Five philosophical proofs for God\'s existence; theology as "science of God." Still the foundation of Catholic intellectual tradition',
                },
                {
                  year: '1309–1377',
                  event: 'Avignon Papacy: seven French popes reside in Avignon, France — perceived as captivity to French crown. Catherine of Siena (a young Dominican laywoman) writes boldly to Gregory XI, persuading him to return to Rome (1377)',
                },
                {
                  year: '1378–1417',
                  event: 'Great Western Schism: rival papal claimants (at one point three simultaneously). Resolved by Council of Constance — a crisis that raises lasting questions about the relationship between pope and council',
                },
              ].map((item) => (
                <div key={item.year} className="flex gap-4 items-start">
                  <span className="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full whitespace-nowrap shrink-0 mt-1 font-medium">
                    {item.year}
                  </span>
                  <p className="text-gray-700 text-sm leading-relaxed">{item.event}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Medieval Thinkers */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-xl font-serif font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-blue-600" /> Great Medieval Thinkers
            </h3>
            <div className="bg-blue-50 rounded-lg p-5">
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    name: 'Anselm of Canterbury (1033–1109)',
                    desc: 'Ontological argument for God\'s existence; coined the phrase "faith seeking understanding" (fides quaerens intellectum) — the motto of Catholic intellectual life.',
                  },
                  {
                    name: 'Bernard of Clairvaux (1090–1153)',
                    desc: 'Cistercian renewal; mystical theology of love; profound Mariology. Combined contemplation and action — preached the Second Crusade, reformed corrupt monasteries.',
                  },
                  {
                    name: 'Thomas Aquinas (1225–1274)',
                    desc: 'Summa Theologiae — synthesis of Aristotle and Christian revelation. The Five Ways to God. "Doctor Communis" of the Church. His thought was declared normative by Leo XIII in 1879.',
                  },
                  {
                    name: 'Dante Alighieri (1265–1321)',
                    desc: 'The Divine Comedy — not a theologian but the greatest poetic expression of medieval Catholic thought: the journey of the soul through Hell, Purgatory, and Paradise.',
                  },
                ].map((f) => (
                  <div key={f.name} className="bg-white rounded-lg p-4 border border-blue-100">
                    <p className="font-semibold text-blue-900 text-sm mb-1">{f.name}</p>
                    <p className="text-blue-800 text-sm leading-relaxed">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Great Schism cross-link */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-serif font-semibold text-gray-900 mb-1">The Great Schism & Church Divisions</h3>
                <p className="text-sm text-gray-600">
                  Explore the full history of schisms, separations, and how Christianity fragmented over the centuries.
                </p>
              </div>
              <Link
                href="/history/church-divisions"
                className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 text-amber-700 rounded-lg border border-amber-200 hover:bg-amber-100 transition-colors text-sm font-medium shrink-0 ml-4"
              >
                Church Divisions <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Sources */}
          <div className="bg-gray-50 rounded-lg p-5">
            <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">Sources &amp; Further Reading</h4>
            <ol className="text-sm text-gray-600 space-y-1.5 list-decimal list-inside">
              <li>Eamon Duffy, <em>Saints &amp; Sinners: A History of the Popes</em> (Yale, 4th ed., 2014)</li>
              <li>Norman Cantor, <em>The Civilization of the Middle Ages</em> (HarperCollins, rev. ed. 1993)</li>
              <li>Brian Tierney, <em>The Crisis of Church and State, 1050&ndash;1300</em> (Toronto, 1988)</li>
              <li>Thomas E. Woods Jr., <em>How the Catholic Church Built Western Civilization</em> (Regnery, 2005)</li>
              <li>St. Thomas Aquinas, <em>Summa Theologiae</em> (multiple translations; classic ed. by the English Dominican Province)</li>
              <li><em>Catechism of the Catholic Church</em> (CCC) §§ 871–962: &ldquo;The Hierarchical Constitution of the Church&rdquo;</li>
            </ol>
          </div>

        </div>
      )}

      {/* ==================== TAB 4: REFORMATION & RENEWAL ==================== */}
      {activeTab === 'reformation' && (
        <div className="space-y-6">

          {/* Introduction */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center shrink-0">
                <Flame className="w-5 h-5 text-orange-700" />
              </div>
              <h2 className="text-2xl font-serif font-bold text-gray-900">Reformation &amp; Renewal (1400–1700)</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              The sixteenth century shattered the unity of Western Christianity. The Reformation was not
              simply the revolt of one German monk; it was the intersection of genuine calls for moral
              reform, Renaissance humanism&apos;s new tools of textual criticism, Gutenberg&apos;s printing
              press, and a series of catastrophically weak or corrupt Church leaders. The Catholic response —
              the Council of Trent and the Counter-Reformation — was belated but thoroughgoing, producing a
              renewed Catholicism that would endure for four centuries.
            </p>
          </div>

          {/* Background */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-xl font-serif font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-gray-600" /> Background and Pre-Reform Critics
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              The abuses that fuelled the Reformation — simony (buying church offices), nepotism, absentee
              bishops, the commercial sale of indulgences — were not new. Reformers had been raising these
              complaints for a century before Luther.
            </p>
            <div className="space-y-3">
              <div className="flex gap-4 items-start">
                <span className="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full whitespace-nowrap shrink-0 mt-1 font-medium">d. 1384</span>
                <p className="text-gray-700 text-sm leading-relaxed"><strong>John Wycliffe</strong> (England): translated the Bible into English; attacked papal authority and transubstantiation. His followers, the Lollards, were suppressed. His bones were later exhumed and burned.</p>
              </div>
              <div className="flex gap-4 items-start">
                <span className="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full whitespace-nowrap shrink-0 mt-1 font-medium">d. 1415</span>
                <p className="text-gray-700 text-sm leading-relaxed"><strong>Jan Huss</strong> (Bohemia): influenced by Wycliffe; called for reform, rejected indulgences. Burned at the stake at the Council of Constance despite a promise of safe conduct.</p>
              </div>
              <div className="flex gap-4 items-start">
                <span className="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full whitespace-nowrap shrink-0 mt-1 font-medium">1509</span>
                <p className="text-gray-700 text-sm leading-relaxed"><strong>Erasmus of Rotterdam</strong>: <em>In Praise of Folly</em> skewered clerical corruption with biting satire. He called for reform from within — and refused to break with Rome when Luther did. "Erasmus laid the egg; Luther hatched it," contemporaries said.</p>
              </div>
              <div className="flex gap-4 items-start">
                <span className="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full whitespace-nowrap shrink-0 mt-1 font-medium">1440</span>
                <p className="text-gray-700 text-sm leading-relaxed"><strong>Gutenberg&apos;s printing press</strong>: Luther&apos;s pamphlets reached every corner of Germany within weeks. The printing press transformed religious controversy in the same way the internet would transform politics five centuries later.</p>
              </div>
            </div>
          </div>

          {/* Luther and the Protestant Split */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-xl font-serif font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Flame className="w-5 h-5 text-red-600" /> Luther and the Protestant Reformation
            </h3>

            <div className="bg-amber-50 border-l-4 border-amber-400 p-5 rounded-r-lg mb-5">
              <p className="text-amber-900 italic leading-relaxed">
                &ldquo;Here I stand. I can do no other. God help me. Amen.&rdquo;
              </p>
              <p className="text-amber-700 text-sm mt-2">&mdash; Martin Luther, Diet of Worms, April 18, 1521 (traditional account)</p>
            </div>

            <p className="text-gray-700 leading-relaxed mb-4">
              On October 31, 1517, Martin Luther, an Augustinian monk and professor at Wittenberg, posted
              (or circulated) his 95 Theses — a list of arguments against the sale of indulgences. The
              immediate cause was Johann Tetzel&apos;s notorious campaign, where people were told: "As soon
              as the coin in the coffer rings, the soul from Purgatory springs." Luther&apos;s core theological
              insights — <em>sola fide</em> (faith alone justifies), <em>sola scriptura</em> (Scripture alone
              is the rule of faith) — struck at the foundations of medieval Catholic practice and authority.
            </p>

            <div className="bg-red-50 rounded-lg p-5">
              <p className="font-semibold text-red-900 mb-3">Protestant Branches</p>
              <div className="space-y-2">
                {[
                  { name: 'Lutheranism', detail: 'Luther (Wittenberg, 1517); sola fide, sola scriptura; retained bishops and liturgy' },
                  { name: 'Reformed / Calvinist', detail: 'Zwingli (Zurich, 1519); Calvin (Geneva, 1536); predestination; simpler worship; Presbyterian polity' },
                  { name: 'Anglican', detail: 'Henry VIII\'s Act of Supremacy (1534) — a split over marriage and royal authority, not primarily over doctrine; Cranmer\'s Book of Common Prayer' },
                  { name: 'Anabaptist', detail: 'Radical reformers; rebaptism of adults; separation of church and state; pacifism; persecuted by Catholics and Protestants alike' },
                ].map((b) => (
                  <div key={b.name} className="flex items-start gap-2">
                    <span className="font-bold text-red-700 text-sm mt-0.5">&bull;</span>
                    <p className="text-red-800 text-sm"><strong>{b.name}:</strong> {b.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Council of Trent */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-xl font-serif font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Landmark className="w-5 h-5 text-blue-600" /> Council of Trent (1545–1563)
            </h3>
            <div className="bg-blue-50 rounded-lg p-5 mb-4">
              <p className="text-blue-900 leading-relaxed mb-3">
                The Catholic Church&apos;s response to the Reformation. Trent met in three sessions over
                eighteen years and addressed both doctrine and discipline simultaneously:
              </p>
              <div className="space-y-2">
                {[
                  'Affirmed Scripture AND Tradition as sources of revelation (against sola scriptura)',
                  'Affirmed justification by faith — but as a process involving cooperation with grace, not "faith alone" in Luther\'s sense',
                  'Defined transubstantiation precisely: the substance of bread and wine become the Body and Blood of Christ',
                  'Affirmed seven sacraments against Protestant reductions',
                  'Required seminaries in every diocese — the single most practical reform, raising the standard of the priesthood',
                  'Ended the worst abuses: simony, absenteeism, nepotism, sale of indulgences (the formal sale was abolished)',
                  'Standardised the Tridentine Mass, which would remain the Roman Rite for four centuries',
                ].map((point) => (
                  <div key={point} className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold text-sm mt-0.5">✓</span>
                    <p className="text-blue-800 text-sm leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Saints of the Counter-Reformation */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-xl font-serif font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Star className="w-5 h-5 text-amber-600" /> Saints of the Renewal
            </h3>
            <div className="bg-blue-50 rounded-lg p-5">
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    name: 'Ignatius of Loyola (1491–1556)',
                    desc: 'Founded the Society of Jesus (Jesuits, 1540). "Ad Majorem Dei Gloriam" (AMDG). Spiritual Exercises. Jesuits became the shock troops of the Counter-Reformation: educators, missionaries, papal servants.',
                  },
                  {
                    name: 'Teresa of Avila (1515–1582)',
                    desc: 'Interior Castle — a masterwork of mystical theology. Reformed the Carmelite order. First woman declared Doctor of the Church (1970). Said: "God has no hands but yours."',
                  },
                  {
                    name: 'John of the Cross (1542–1591)',
                    desc: 'Dark Night of the Soul — the classic account of spiritual purification. Co-founder of the Discalced Carmelites with Teresa. Doctor of the Church.',
                  },
                  {
                    name: 'Francis Xavier (1506–1552)',
                    desc: 'Jesuit missionary to India, Malacca, the Moluccas, and Japan. Baptised an estimated 300,000 people. Died waiting to enter China. Patron of foreign missions.',
                  },
                  {
                    name: 'Matteo Ricci (1552–1610)',
                    desc: 'Jesuit to China; mastered Mandarin and Confucian classics; became a court mandarin; pioneered inculturation — presenting the Gospel in Chinese categories.',
                  },
                  {
                    name: 'Bartolomé de las Casas (1484–1566)',
                    desc: 'Dominican friar; former conquistador; became the greatest defender of the indigenous peoples of the Americas, arguing before the Spanish crown for their full humanity and rights.',
                  },
                ].map((f) => (
                  <div key={f.name} className="bg-white rounded-lg p-4 border border-blue-100">
                    <p className="font-semibold text-blue-900 text-sm mb-1">{f.name}</p>
                    <p className="text-blue-800 text-sm leading-relaxed">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Peace of Westphalia */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="bg-amber-50 border-l-4 border-amber-400 p-5 rounded-r-lg">
              <p className="font-semibold text-amber-900 mb-2">Peace of Westphalia (1648)</p>
              <p className="text-amber-800 text-sm leading-relaxed">
                After the catastrophic Thirty Years&apos; War (8 million dead), the Peace of Westphalia
                established the principle <em>cuius regio, eius religio</em> — "whose realm, his religion."
                Christianity was permanently fragmented across national lines. The age of a single Christian
                Europe was over. The modern secular state — defined by territory rather than religion — begins
                here.
              </p>
            </div>
          </div>

          {/* Sources */}
          <div className="bg-gray-50 rounded-lg p-5">
            <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">Sources &amp; Further Reading</h4>
            <ol className="text-sm text-gray-600 space-y-1.5 list-decimal list-inside">
              <li>Diarmaid MacCulloch, <em>The Reformation: A History</em> (Viking, 2003) — definitive modern account</li>
              <li>John W. O&apos;Malley SJ, <em>Trent: What Happened at the Council</em> (Harvard, 2013)</li>
              <li>Norman P. Tanner SJ (ed.), <em>Decrees of the Ecumenical Councils, Vol. 2: Trent to Vatican II</em> (Sheed &amp; Ward / Georgetown, 1990)</li>
              <li>Brad S. Gregory, <em>The Unintended Reformation</em> (Harvard, 2012)</li>
              <li>St. Teresa of Avila, <em>The Interior Castle</em>; St. John of the Cross, <em>Dark Night of the Soul</em> (ICS Publications)</li>
              <li><em>Catechism of the Catholic Church</em> (CCC) §§ 874–896: &ldquo;The Ordained Ministry&rdquo;</li>
            </ol>
          </div>

        </div>
      )}

      {/* ==================== TAB 5: MODERN ERA ==================== */}
      {activeTab === 'modern' && (
        <div className="space-y-6">

          {/* Introduction */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center shrink-0">
                <Globe className="w-5 h-5 text-purple-700" />
              </div>
              <h2 className="text-2xl font-serif font-bold text-gray-900">The Modern Era (1700–Present)</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Modernity — the age of Enlightenment, revolution, industrialization, and totalitarianism —
              presented the Catholic Church with a series of challenges unlike anything since the fall of
              Rome. Two world wars, communist and fascist persecution, the sexual revolution, and the
              secularization of the West tested the Church to its foundations. Yet these centuries also
              produced some of the greatest popes in history, the Second Vatican Council&apos;s renewal, and
              a global Catholicism more diverse and more numerous than ever before.
            </p>
          </div>

          {/* Timeline: 18th-19th Century */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-xl font-serif font-semibold text-gray-900 mb-5 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-gray-500" /> Enlightenment to Vatican I
            </h3>
            <div className="space-y-4">
              {[
                {
                  year: '1700s',
                  event: 'The Enlightenment: reason over revelation; Voltaire, Hume, and later Feuerbach challenge the intellectual foundations of faith. Deism replaces Christianity among European elites. The Church is put on the intellectual defensive.',
                },
                {
                  year: '1789–99',
                  event: 'French Revolution: de-Christianization campaign; priests massacred or exiled; Notre Dame turned into a "Temple of Reason"; Popes Pius VI and VII both imprisoned. The Revolution\'s violence gives the Church martyrs — including the sixteen Carmelites of Compiègne, beatified 1906.',
                },
                {
                  year: '1801',
                  event: 'Napoleon\'s Concordat with Pius VII: partial restoration of the Church\'s position in France. Napoleon later turns on the Pope again — but the agreement shows the Church cannot simply be erased.',
                },
                {
                  year: '1854',
                  event: 'Pius IX defines the Immaculate Conception of the Blessed Virgin Mary as dogma in the bull Ineffabilis Deus — solemnly defined by the pope alone, sixteen years before Vatican I would formally articulate the doctrine of papal infallibility (1870).',
                },
                {
                  year: '1858',
                  event: 'Our Lady of Lourdes: eighteen apparitions to Bernadette Soubirous; healing spring; six million pilgrims per year today. A powerful sign of continued supernatural presence in the industrial age.',
                },
                {
                  year: '1864',
                  event: 'Pius IX\'s Syllabus of Errors: a list of 80 condemned propositions, including liberalism and the separation of Church and state. The Church and modernity in open conflict.',
                },
                {
                  year: '1869–70',
                  event: 'Vatican I: defines papal primacy and infallibility (Pastor Aeternus). The Council is interrupted when Italian troops seize Rome; the Pope becomes a "prisoner in the Vatican" until the Lateran Treaty of 1929.',
                },
              ].map((item) => (
                <div key={item.year} className="flex gap-4 items-start">
                  <span className="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full whitespace-nowrap shrink-0 mt-1 font-medium">
                    {item.year}
                  </span>
                  <p className="text-gray-700 text-sm leading-relaxed">{item.event}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Catholic Social Teaching */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-xl font-serif font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Heart className="w-5 h-5 text-green-600" /> Catholic Social Teaching: Leo XIII and Rerum Novarum (1891)
            </h3>
            <div className="bg-green-50 rounded-lg p-5 mb-4">
              <p className="text-green-900 leading-relaxed mb-3">
                <strong>Rerum Novarum</strong> (&ldquo;On New Things&rdquo;, 1891) by Leo XIII is the founding
                document of modern Catholic Social Teaching. Written at the height of the Industrial Revolution,
                it confronted the exploitation of workers — and simultaneously rejected both laissez-faire
                capitalism and Marxist socialism as incompatible with human dignity.
              </p>
              <div className="space-y-2">
                {[
                  'Workers have the right to a just and living wage',
                  'Private property is a natural right — but it carries social obligations',
                  'Workers have the right to form trade unions',
                  'The State may intervene when the market destroys human dignity',
                  'Neither capital nor labour can crush the other; both must serve the common good',
                ].map((point) => (
                  <div key={point} className="flex items-start gap-2">
                    <span className="text-green-500 font-bold text-sm mt-0.5">✓</span>
                    <p className="text-green-800 text-sm leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 20th Century */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-xl font-serif font-semibold text-gray-900 mb-5 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-gray-500" /> The Twentieth Century
            </h3>
            <div className="space-y-4">
              {[
                {
                  year: '1914–18',
                  event: 'World War I: Benedict XV proposes peace negotiations ("the useless slaughter"); ignored by all sides. He coordinates prisoner-of-war exchanges and relief efforts.',
                },
                {
                  year: '1937',
                  event: 'Mit brennender Sorge (Pius XI): the first official condemnation of Nazism by any government or institution, smuggled into Germany and read from every pulpit on Palm Sunday.',
                },
                {
                  year: '1939–45',
                  event: 'World War II and Pius XII: a complex and still-debated role. Pius XII opened Vatican City and Roman convents and seminaries to shelter Jews; Vatican-organized networks saved an estimated 700,000–800,000 Jewish lives across Europe, with Roman rabbi Israel Zolli converting after the war and taking the name "Eugenio" in gratitude. Critics argue Pius\'s public condemnations of the Holocaust were too restrained, fearing reprisals would worsen Nazi violence. Vatican archives opened to scholars in 2020.',
                },
                {
                  year: '1903–14',
                  event: 'Pius X: promoted early and frequent reception of Communion; anti-Modernism campaign; reformed Church music; began the codification of Canon Law.',
                },
                {
                  year: '1929',
                  event: 'Lateran Treaty (Pius XI / Mussolini): Vatican City established as an independent state; the "Roman Question" resolved sixty years after 1870.',
                },
              ].map((item) => (
                <div key={item.year + item.event.slice(0, 20)} className="flex gap-4 items-start">
                  <span className="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full whitespace-nowrap shrink-0 mt-1 font-medium">
                    {item.year}
                  </span>
                  <p className="text-gray-700 text-sm leading-relaxed">{item.event}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Vatican II */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-xl font-serif font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Landmark className="w-5 h-5 text-blue-600" /> The Second Vatican Council (1962–1965)
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Pope John XXIII shocked the world by calling an Ecumenical Council — the first since Vatican I
              nearly a century earlier. He used the Italian word <em>aggiornamento</em> (bringing up to date)
              and <em>ressourcement</em> (return to the sources). Continued by Paul VI after John&apos;s
              death in 1963, Vatican II produced sixteen documents. The four constitutions are the heart of the
              Council:
            </p>
            <div className="bg-blue-50 rounded-lg p-5">
              <div className="space-y-3">
                {[
                  {
                    name: 'Sacrosanctum Concilium (Liturgy)',
                    desc: 'Liturgical reform: vernacular languages permitted; active participation of the faithful emphasized; the Novus Ordo Mass follows in 1969.',
                  },
                  {
                    name: 'Lumen Gentium (The Church)',
                    desc: 'The Church as "People of God" and "Body of Christ." Affirms the universal call to holiness; clarifies the role of the laity; restores the theology of episcopal collegiality.',
                  },
                  {
                    name: 'Dei Verbum (Scripture and Tradition)',
                    desc: 'Scripture and Tradition as two modes of one Deposit of Faith; the Church subject to the Word of God, not above it; recovery of biblical theology.',
                  },
                  {
                    name: 'Gaudium et Spes (Church in the Modern World)',
                    desc: '"The joys and the hopes, the griefs and the anxieties of the men of this age…" The Church in dialogue with the modern world on family, culture, economics, peace, and human dignity.',
                  },
                  {
                    name: 'Nostra Aetate (World Religions)',
                    desc: 'Repudiates collective Jewish guilt for the death of Christ; affirms truth in non-Christian religions; the watershed document in Catholic-Jewish relations.',
                  },
                ].map((doc) => (
                  <div key={doc.name} className="bg-white rounded-lg p-4 border border-blue-100">
                    <p className="font-semibold text-blue-900 text-sm mb-1">{doc.name}</p>
                    <p className="text-blue-800 text-sm leading-relaxed">{doc.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Post-Conciliar Popes */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-xl font-serif font-semibold text-gray-900 mb-5 flex items-center gap-2">
              <Crown className="w-5 h-5 text-amber-600" /> Post-Conciliar Popes
            </h3>
            <div className="space-y-4">
              {[
                {
                  year: '1968',
                  event: 'Paul VI: Humanae Vitae — reaffirms the Church\'s prohibition of artificial contraception; one of the most contested documents in modern Catholic history. Also promulgated the Novus Ordo Mass (1969).',
                },
                {
                  year: '1978–2005',
                  event: 'John Paul II: first non-Italian pope in 455 years; survived assassination attempt (1981); Theology of the Body; Catechism of the Catholic Church (1992); over 100 countries visited; 1.17 billion Catholics at his death; beatified 2011, canonised 2014. His moral support for Solidarity helped end communism in Poland.',
                },
                {
                  year: '2005–2013',
                  event: 'Benedict XVI: Summorum Pontificum (2007) — liberalized the traditional Latin Mass; three encyclicals on love, hope, and charity; resigned February 28, 2013 — first voluntary papal resignation since Gregory XII in 1415.',
                },
                {
                  year: '2013–present',
                  event: 'Francis: first Jesuit pope; first from the Americas; Laudato Si\' (2015, environment and integral ecology); Amoris Laetitia (2016, family and mercy); Synod on Synodality (2021–24).',
                },
              ].map((item) => (
                <div key={item.year} className="flex gap-4 items-start">
                  <span className="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full whitespace-nowrap shrink-0 mt-1 font-medium">
                    {item.year}
                  </span>
                  <p className="text-gray-700 text-sm leading-relaxed">{item.event}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Sources */}
          <div className="bg-gray-50 rounded-lg p-5">
            <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">Sources &amp; Further Reading</h4>
            <ol className="text-sm text-gray-600 space-y-1.5 list-decimal list-inside">
              <li>Austin Flannery OP (ed.), <em>Vatican Council II: The Conciliar and Post Conciliar Documents</em> (Liturgical Press, rev. ed. 1996)</li>
              <li>John W. O&apos;Malley SJ, <em>What Happened at Vatican II</em> (Harvard, 2008)</li>
              <li>Pope Leo XIII, <em>Rerum Novarum</em> (1891); Pius XI, <em>Quadragesimo Anno</em> (1931); John Paul II, <em>Centesimus Annus</em> (1991) — the social encyclicals</li>
              <li>George Weigel, <em>Witness to Hope: The Biography of Pope John Paul II</em> (HarperCollins, 1999)</li>
              <li>Joseph Ratzinger / Benedict XVI, <em>Jesus of Nazareth</em>, 3 vols. (Doubleday/Ignatius, 2007&ndash;2012)</li>
              <li>James Hitchcock, <em>History of the Catholic Church: From the Apostolic Age to the Third Millennium</em> (Ignatius, 2012)</li>
              <li><em>Catechism of the Catholic Church</em> (CCC) §§ 748–975: &ldquo;The Profession of Faith&rdquo;</li>
            </ol>
          </div>

        </div>
      )}

      {/* ==================== TAB 6: CHURCH TODAY ==================== */}
      {activeTab === 'today' && (
        <div className="space-y-6">

          {/* Introduction */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                <Globe className="w-5 h-5 text-green-700" />
              </div>
              <h2 className="text-2xl font-serif font-bold text-gray-900">The Church Today (21st Century)</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              The Catholic Church enters the twenty-first century as the world&apos;s largest and oldest
              religious institution — 1.4 billion members, every nation on earth, parishes in rainforests and
              skyscrapers. It faces profound challenges: the clergy abuse crisis, rapid secularization in its
              historic heartlands, and fierce internal debates about doctrine and governance. It also possesses
              extraordinary resources: a global network of schools, hospitals, and charities; a two-thousand-year
              intellectual tradition; and communities of extraordinary holiness.
            </p>
          </div>

          {/* Statistics */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-xl font-serif font-semibold text-gray-900 mb-5 flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-600" /> The Global Church: A Portrait (2024)
            </h3>
            <div className="grid sm:grid-cols-2 gap-4 mb-5">
              {[
                { stat: '1.4 billion', label: 'Catholics worldwide', note: '17.4% of the world\'s population' },
                { stat: '~5,600', label: 'Bishops worldwide', note: 'Leading dioceses and religious orders' },
                { stat: '~400,000', label: 'Parishes globally', note: 'Plus missions and communities' },
                { stat: '~220,000', label: 'Catholic schools', note: 'Educating over 60 million students' },
                { stat: '~5,500', label: 'Catholic hospitals', note: 'Largest non-governmental healthcare provider' },
                { stat: '23', label: 'Eastern Catholic Churches', note: 'In full communion with Rome' },
              ].map((item) => (
                <div key={item.label} className="bg-blue-50 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-blue-800">{item.stat}</p>
                  <p className="text-sm font-medium text-blue-700 mt-0.5">{item.label}</p>
                  <p className="text-xs text-blue-600 mt-0.5">{item.note}</p>
                </div>
              ))}
            </div>
            <div className="space-y-3">
              <div className="bg-green-50 rounded-lg p-4">
                <p className="font-semibold text-green-900 text-sm mb-1">Growing Regions</p>
                <p className="text-green-800 text-sm">Sub-Saharan Africa is the fastest-growing region (over 250 million Catholics, growing rapidly). Also strong growth in the Philippines, Vietnam, South Korea, and parts of Latin America.</p>
              </div>
              <div className="bg-amber-50 rounded-lg p-4">
                <p className="font-semibold text-amber-900 text-sm mb-1">Declining Regions</p>
                <p className="text-amber-800 text-sm">Western Europe and North America see declining Mass attendance, secularization, and a crisis of transmission to the next generation. Ireland, once 90%+ Catholic, now sees weekly Mass attendance below 35%.</p>
              </div>
            </div>
          </div>

          {/* Pope Francis */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-xl font-serif font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Heart className="w-5 h-5 text-amber-600" /> Pope Francis and the &ldquo;Field Hospital&rdquo; Church
            </h3>
            <div className="bg-amber-50 border-l-4 border-amber-400 p-5 rounded-r-lg mb-4">
              <p className="text-amber-900 italic leading-relaxed">
                &ldquo;I see clearly that the thing the Church needs most today is the ability to heal wounds
                and to warm the hearts of the faithful; it needs nearness, proximity. I see the Church as a
                field hospital after battle. It is useless to ask a seriously injured person if he has high
                cholesterol and about the level of his blood sugars! You have to heal his wounds. Then we can
                talk about everything else.&rdquo;
              </p>
              <p className="text-amber-700 text-sm mt-2">&mdash; Pope Francis, Interview with Antonio Spadaro SJ, <em>La Civiltà Cattolica</em>, August 2013</p>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Francis&apos;s pontificate has been marked by emphases on mercy, the poor, environmental
              responsibility, and the reform of Vatican governance. His apostolic exhortation{' '}
              <em>Evangelii Gaudium</em> (2013) sets out his vision of a missionary Church that &ldquo;goes
              out&rdquo; rather than waiting for people to come in. <em>Laudato Si&apos;</em> (2015)
              applies Catholic Social Teaching to the ecological crisis.
            </p>
          </div>

          {/* Key Issues */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-xl font-serif font-semibold text-gray-900 mb-5 flex items-center gap-2">
              <Shield className="w-5 h-5 text-gray-600" /> Key Issues Facing the Church
            </h3>
            <div className="space-y-4">

              <div className="bg-red-50 rounded-lg p-5">
                <p className="font-semibold text-red-900 mb-2">Clergy Abuse Crisis and Reforms</p>
                <p className="text-red-800 text-sm leading-relaxed">
                  The sexual abuse scandal — first exposed at scale in Boston in 2002 — remains the most
                  serious credibility crisis in modern Church history. Responses include the Dallas Charter
                  (2002, USA): mandatory reporting, removal of accused priests, lay review boards.
                  Globally: <em>Vos Estis Lux Mundi</em> (2019) — new norms holding bishops accountable.
                  Much healing remains to be done.
                </p>
              </div>

              <div className="bg-blue-50 rounded-lg p-5">
                <p className="font-semibold text-blue-900 mb-2">New Evangelization</p>
                <p className="text-blue-800 text-sm leading-relaxed">
                  John Paul II coined the term: re-evangelizing cultures that were once Christian but have
                  become post-Christian. Not missions to the unbaptized (that is the "first evangelization")
                  but re-proposing the faith with new ardor, new methods, and new expressions to the baptized
                  who have drifted away.
                </p>
              </div>

              <div className="bg-green-50 rounded-lg p-5">
                <p className="font-semibold text-green-900 mb-2">Ecumenism</p>
                <p className="text-green-800 text-sm leading-relaxed">
                  The Joint Declaration on the Doctrine of Justification (1999): Catholics and Lutherans sign
                  a common statement on justification — the very issue at the heart of the Reformation split.
                  Ongoing dialogues with Anglicans, Orthodox, and other churches. Full visible unity remains
                  a distant goal, but the tone of the last sixty years has transformed from polemic to prayer.
                </p>
              </div>

              <div className="bg-blue-50 rounded-lg p-5">
                <p className="font-semibold text-blue-900 mb-2">Eastern Catholic Churches</p>
                <p className="text-blue-800 text-sm leading-relaxed">
                  Twenty-three Churches are in full communion with Rome while maintaining their own liturgical
                  rites, disciplines, and spiritual traditions — Maronite, Ukrainian Greek Catholic,
                  Syro-Malabar, Coptic Catholic, Melkite, and others. They are not "Roman Catholic" but are
                  fully Catholic. Their existence shows that Catholic unity does not mean liturgical uniformity.
                </p>
              </div>

              <div className="bg-amber-50 rounded-lg p-5">
                <p className="font-semibold text-amber-900 mb-2">Synod on Synodality (2021–2024)</p>
                <p className="text-amber-800 text-sm leading-relaxed">
                  The largest formal consultation in Church history: every diocese in the world invited to
                  gather input from the faithful on how the Church should operate. Francis describes synodality
                  — walking together, listening to the Spirit in all members — as the Church&apos;s defining
                  way of being in the 21st century. Controversial among both progressives (wanting doctrinal
                  change) and traditionalists (fearing confusion).
                </p>
              </div>

            </div>
          </div>

          {/* Four Marks */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-xl font-serif font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Church className="w-5 h-5 text-amber-600" /> One, Holy, Catholic, Apostolic
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Nicene Creed professes faith in &ldquo;one, holy, catholic, and apostolic Church.&rdquo;
              These Four Marks are not achievements but vocations — what the Church is called to be and, by
              God&apos;s grace, already is in an imperfect but real way.
            </p>
            <div className="bg-blue-50 rounded-lg p-5">
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    mark: 'One',
                    desc: 'One Lord, one faith, one baptism (Eph 4:5). Unity of doctrine, sacraments, and governance — despite the scandals and failures that have wounded that unity.',
                  },
                  {
                    mark: 'Holy',
                    desc: 'The Church is holy not because all its members are sinless, but because it is the Body of Christ and the Temple of the Spirit, and because it produces genuine holiness — the saints.',
                  },
                  {
                    mark: 'Catholic',
                    desc: 'Katholikos: "according to the whole." Universal — for all peoples, all times, all cultures. Not a sect or a national religion, but humanity\'s universal sacrament of salvation.',
                  },
                  {
                    mark: 'Apostolic',
                    desc: 'Founded on the Apostles (Eph 2:20); the same faith transmitted unbroken; bishops in succession from the Apostles who are successors of those sent by Christ himself.',
                  },
                ].map((m) => (
                  <div key={m.mark} className="bg-white rounded-lg p-4 border border-blue-100">
                    <p className="font-bold text-blue-900 text-base mb-1">{m.mark}</p>
                    <p className="text-blue-800 text-sm leading-relaxed">{m.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Cross-link to Church Tree */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-serif font-semibold text-gray-900 mb-1">Church History Tree</h3>
                <p className="text-sm text-gray-600">
                  Visual exploration of how the Church has branched and divided across two millennia.
                </p>
              </div>
              <Link
                href="/history/church-tree"
                className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 text-amber-700 rounded-lg border border-amber-200 hover:bg-amber-100 transition-colors text-sm font-medium shrink-0 ml-4"
              >
                Church History Tree <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Sources */}
          <div className="bg-gray-50 rounded-lg p-5">
            <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">Sources &amp; Further Reading</h4>
            <ol className="text-sm text-gray-600 space-y-1.5 list-decimal list-inside">
              <li><em>Annuarium Statisticum Ecclesiae</em> (Vatican Statistical Yearbook of the Church, 2024)</li>
              <li>Pope Francis, <em>Evangelii Gaudium</em> &mdash; The Joy of the Gospel (2013); <em>Laudato Si&apos;</em> (2015); <em>Fratelli Tutti</em> (2020)</li>
              <li>John Paul II, <em>Ut Unum Sint</em> (1995, on ecumenism); <em>Tertio Millennio Adveniente</em> (1994)</li>
              <li>Pew Research Center, <em>The Future of World Religions</em> (2015 and updates)</li>
              <li>Synod of Bishops, <em>Final Document of the Synod on Synodality</em> (October 2024)</li>
              <li>Lumen Gentium and Unitatis Redintegratio (Vatican II) &mdash; foundational documents on the Church and ecumenism</li>
              <li><em>Catechism of the Catholic Church</em> (CCC) §§ 748–810: &ldquo;The Church in God&apos;s Plan&rdquo;</li>
            </ol>
          </div>

        </div>
      )}

    </div>
  )
}
