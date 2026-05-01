'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Anchor,
  Users,
  MapPin,
  Flame,
  ArrowRight,
  BookOpen,
  Globe,
  Crown,
  Star,
  Shield,
  Heart,
  Cross,
  Scroll,
  Church,
  Sword,
  User,
} from 'lucide-react'

type TabId = 'the-twelve' | 'paul' | 'missions' | 'martyrdom'

const tabs: { id: TabId; label: string }[] = [
  { id: 'the-twelve', label: 'The Twelve' },
  { id: 'paul', label: 'St. Paul' },
  { id: 'missions', label: 'Missions to the World' },
  { id: 'martyrdom', label: 'Martyrdom & Legacy' },
]

export default function ApostlesHistoryPage() {
  const [activeTab, setActiveTab] = useState<TabId>('the-twelve')

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 font-serif">
            History of the Apostles
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The twelve Apostles, chosen by Christ himself, became the foundation stones of the Church.
            After Pentecost, they carried the Gospel to the ends of the known world &mdash; and nearly
            all of them sealed their testimony with their blood. Their story is the story of how
            Christianity began.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Link
            href="/history/christ"
            className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 text-amber-700 rounded-lg border border-amber-200 hover:bg-amber-100 transition-colors text-sm font-medium"
          >
            <Cross className="w-4 h-4" />
            Lord Jesus Christ
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link
            href="/history/resurrection"
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-lg border border-blue-200 hover:bg-blue-100 transition-colors text-sm font-medium"
          >
            <Star className="w-4 h-4" />
            The Resurrection
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link
            href="/history/church"
            className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-lg border border-green-200 hover:bg-green-100 transition-colors text-sm font-medium"
          >
            <Church className="w-4 h-4" />
            Church History
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg shadow-lg p-1 overflow-x-auto">
            <div className="flex flex-nowrap gap-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2.5 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
                    activeTab === tab.id
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

        {/* ==================== TAB 1: THE TWELVE ==================== */}
        {activeTab === 'the-twelve' && (
          <div className="space-y-8">

            {/* Intro */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800 font-serif">The Twelve Apostles</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Jesus chose twelve men as his closest disciples &mdash; a deliberate echo of the twelve
                tribes of Israel, signalling that he was reconstituting the people of God. The word
                &ldquo;apostle&rdquo; (Greek: <em>apostolos</em>) means &ldquo;one who is sent.&rdquo; After
                the Resurrection and Pentecost, they were sent to the whole world.
              </p>
              <p className="text-gray-700 leading-relaxed">
                After the betrayal and suicide of Judas Iscariot, the Eleven gathered and elected Matthias
                by lot to restore the number to twelve (Acts 1:15&ndash;26). The Twelve are the foundation
                stones of the New Jerusalem (Rev 21:14).
              </p>
            </div>

            {/* Apostle Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

              {/* 1. Peter */}
              <div className="bg-white rounded-xl border border-gray-200 border-l-4 border-l-amber-400 p-5 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-amber-50">
                    <Anchor className="w-5 h-5 text-amber-700" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-gray-900">Simon Peter</h3>
                    <p className="text-xs text-gray-500">Bethsaida, Galilee &bull; Fisherman</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Brother of Andrew; a fisherman whom Jesus renamed &ldquo;Cephas&rdquo; (Rock). Led the
                  early Jerusalem Church, delivered the first sermon at Pentecost, and wrote two epistles.
                  Tradition identifies him as the first Bishop of Rome. Crucified upside down in Rome
                  c. AD 64&ndash;68; his tomb lies beneath St. Peter&rsquo;s Basilica.
                </p>
              </div>

              {/* 2. Andrew */}
              <div className="bg-white rounded-xl border border-gray-200 border-l-4 border-l-amber-400 p-5 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-amber-50">
                    <Anchor className="w-5 h-5 text-amber-700" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-gray-900">Andrew</h3>
                    <p className="text-xs text-gray-500">Bethsaida, Galilee &bull; Fisherman</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Peter&rsquo;s brother and the first Apostle called (John 1:40&ndash;42); he immediately
                  brought his brother to Jesus. The Eastern Church honours him as &ldquo;Protocletos&rdquo;
                  &mdash; the first-called. Preached in Cappadocia, Scythia, and Greece; martyred by
                  crucifixion on an X-shaped cross at Patras. Patron saint of Scotland.
                </p>
              </div>

              {/* 3. James son of Zebedee */}
              <div className="bg-white rounded-xl border border-gray-200 border-l-4 border-l-amber-400 p-5 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-amber-50">
                    <Crown className="w-5 h-5 text-amber-700" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-gray-900">James son of Zebedee</h3>
                    <p className="text-xs text-gray-500">Capernaum, Galilee &bull; Fisherman</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Brother of John; one of the &ldquo;Sons of Thunder.&rdquo; Part of the inner circle
                  present at the Transfiguration and Gethsemane. The first Apostle martyred &mdash;
                  beheaded by Herod Agrippa I c. AD 44, the only apostolic martyrdom recorded in
                  Scripture (Acts 12:2). Patron of Spain; his shrine at Santiago de Compostela became
                  the greatest pilgrimage site in medieval Christendom.
                </p>
              </div>

              {/* 4. John */}
              <div className="bg-white rounded-xl border border-gray-200 border-l-4 border-l-amber-400 p-5 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-amber-50">
                    <Heart className="w-5 h-5 text-amber-700" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-gray-900">John</h3>
                    <p className="text-xs text-gray-500">Capernaum, Galilee &bull; Fisherman</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  James&rsquo;s brother; &ldquo;the Beloved Disciple.&rdquo; Stood at the foot of the Cross
                  and was entrusted with Mary (John 19:26&ndash;27). Author of the Gospel of John, three
                  Letters, and the Book of Revelation. Settled in Ephesus where he lived to old age
                  &mdash; the only Apostle not killed for his faith, though he suffered exile to Patmos
                  under Emperor Domitian.
                </p>
              </div>

              {/* 5. Philip */}
              <div className="bg-white rounded-xl border border-gray-200 border-l-4 border-l-indigo-200 p-5 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-indigo-50">
                    <User className="w-5 h-5 text-indigo-700" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-gray-900">Philip</h3>
                    <p className="text-xs text-gray-500">Bethsaida, Galilee</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Brought Nathanael to Jesus with the invitation &ldquo;Come and see&rdquo; (John 1:46).
                  At the Last Supper, he asked Jesus, &ldquo;Show us the Father&rdquo; (John 14:8),
                  prompting one of Christ&rsquo;s most direct revelations of his identity. Preached in
                  Phrygia (modern Turkey) and was martyred by crucifixion at Hierapolis c. AD 80.
                </p>
              </div>

              {/* 6. Bartholomew */}
              <div className="bg-white rounded-xl border border-gray-200 border-l-4 border-l-indigo-200 p-5 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-indigo-50">
                    <User className="w-5 h-5 text-indigo-700" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-gray-900">Bartholomew (Nathanael)</h3>
                    <p className="text-xs text-gray-500">Cana, Galilee</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Identified with Nathanael, whom Jesus called &ldquo;a true Israelite in whom there is
                  no deceit&rdquo; (John 1:47). Traditionally preached in Armenia and northwest India.
                  Martyred in Armenia by flaying alive and crucifixion; depicted in Michelangelo&rsquo;s
                  <em> Last Judgment</em> holding his own flayed skin.
                </p>
              </div>

              {/* 7. Matthew */}
              <div className="bg-white rounded-xl border border-gray-200 border-l-4 border-l-indigo-200 p-5 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-indigo-50">
                    <Scroll className="w-5 h-5 text-indigo-700" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-gray-900">Matthew (Levi)</h3>
                    <p className="text-xs text-gray-500">Capernaum &bull; Tax Collector</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  A tax collector called at his tax booth (Matt 9:9) &mdash; a calling that shocked his
                  contemporaries, since tax collectors were despised as Roman collaborators. Author of
                  the Gospel of Matthew. Preached in Judea and later in Ethiopia and Persia. Martyrdom
                  accounts vary; most traditions hold that he died for the faith.
                </p>
              </div>

              {/* 8. Thomas */}
              <div className="bg-white rounded-xl border border-gray-200 border-l-4 border-l-indigo-200 p-5 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-indigo-50">
                    <Globe className="w-5 h-5 text-indigo-700" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-gray-900">Thomas (Didymus)</h3>
                    <p className="text-xs text-gray-500">Galilee &bull; &ldquo;The Twin&rdquo;</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Famous for doubting the Resurrection (John 20:24&ndash;29), yet he became the first
                  to make the highest confession: &ldquo;My Lord and my God!&rdquo; (John 20:28). The
                  greatest missionary Apostle in reach &mdash; travelling to Parthia, Persia, and India.
                  The Saint Thomas Christian community in Kerala traces its origin directly to his
                  mission. Martyred at Mylapore (modern Chennai) c. AD 72.{' '}
                  <Link href="/history/indian-church" className="text-amber-700 underline hover:text-amber-900">
                    The Church in India &rarr;
                  </Link>
                </p>
              </div>

              {/* 9. James son of Alphaeus */}
              <div className="bg-white rounded-xl border border-gray-200 border-l-4 border-l-indigo-200 p-5 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-indigo-50">
                    <User className="w-5 h-5 text-indigo-700" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-gray-900">James son of Alphaeus</h3>
                    <p className="text-xs text-gray-500">&ldquo;James the Less&rdquo;</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Called &ldquo;James the Less&rdquo; (perhaps younger or shorter than James son of
                  Zebedee). Little is recorded of him in Scripture beyond the lists of the Twelve.
                  Traditions associate him with mission to Egypt or Persia. His martyrdom accounts vary;
                  some traditions hold he was stoned or clubbed to death.
                </p>
              </div>

              {/* 10. Thaddaeus / Jude */}
              <div className="bg-white rounded-xl border border-gray-200 border-l-4 border-l-indigo-200 p-5 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-indigo-50">
                    <BookOpen className="w-5 h-5 text-indigo-700" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-gray-900">Thaddaeus (Jude)</h3>
                    <p className="text-xs text-gray-500">&ldquo;Judas, not Iscariot&rdquo; (John 14:22)</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Also called Lebbaeus; the &ldquo;Judas not Iscariot&rdquo; who asked Jesus why he
                  revealed himself to the disciples and not to the world (John 14:22). Author of the
                  Letter of Jude. Preached in Syria, Mesopotamia, and Persia alongside Simon the Zealot.
                  Martyred in Persia; patron of hopeless causes.
                </p>
              </div>

              {/* 11. Simon the Zealot */}
              <div className="bg-white rounded-xl border border-gray-200 border-l-4 border-l-indigo-200 p-5 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-indigo-50">
                    <Flame className="w-5 h-5 text-indigo-700" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-gray-900">Simon the Zealot</h3>
                    <p className="text-xs text-gray-500">Formerly of the Zealot movement</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Identified as &ldquo;the Zealot,&rdquo; suggesting possible former membership in the
                  Zealot resistance movement against Roman rule &mdash; making his brotherhood in the
                  Twelve with Matthew the tax collector a remarkable testimony to Christ&rsquo;s unifying
                  power. Preached in Egypt and Persia; martyred in Persia alongside Thaddaeus.
                </p>
              </div>

              {/* 12. Matthias */}
              <div className="bg-white rounded-xl border border-gray-200 border-l-4 border-l-indigo-200 p-5 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-indigo-50">
                    <Star className="w-5 h-5 text-indigo-700" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-gray-900">Matthias</h3>
                    <p className="text-xs text-gray-500">Chosen to replace Judas Iscariot</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Chosen by the casting of lots to fill the vacancy left by Judas Iscariot (Acts
                  1:15&ndash;26). He had been a follower of Jesus from his baptism to the Ascension,
                  qualifying as a witness to the Resurrection. Preached in Judea and possibly Colchis
                  (modern Georgia) or Ethiopia; martyrdom traditions vary.
                </p>
              </div>

            </div>

            {/* Judas note */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
              <h3 className="font-serif text-lg font-semibold text-gray-800 mb-2">A Note on Judas Iscariot</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Judas Iscariot was one of the original Twelve &mdash; called, taught, and trusted with the
                common purse. He betrayed Jesus to the chief priests for thirty pieces of silver (Matt
                26:14&ndash;16); his kiss in Gethsemane identified Jesus to the arresting soldiers. Overcome
                with remorse, he returned the silver and hanged himself (Matt 27:3&ndash;5). Jesus himself
                referred to him as &ldquo;the son of destruction&rdquo; (John 17:12). His place was taken
                by Matthias.
              </p>
            </div>

            {/* Cross-link */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <p className="text-amber-800 text-sm mb-3">
                The mission of the Apostles did not end with their deaths &mdash; it continues in the Church
                they founded, sustained by apostolic succession.
              </p>
              <Link
                href="/history/church"
                className="inline-flex items-center gap-2 text-amber-700 hover:text-amber-900 font-medium text-sm"
              >
                <ArrowRight className="w-4 h-4" />
                The Church &mdash; continuing the Apostolic mission
              </Link>
            </div>

          </div>
        )}

        {/* ==================== TAB 2: ST. PAUL ==================== */}
        {activeTab === 'paul' && (
          <div className="space-y-8">

            {/* Introduction */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Globe className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800 font-serif">The Thirteenth Apostle</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Paul of Tarsus was not one of the original Twelve. He never walked with Jesus during his
                earthly ministry, and in fact spent the early years of the Church trying to destroy it. Yet
                he is universally regarded as an Apostle &mdash; not by human appointment but because he
                was called directly by the risen Christ on the road to Damascus. He describes himself as
                &ldquo;one abnormally born&rdquo; (1 Cor 15:8) &mdash; an apostle born out of due time,
                not in the ordinary way.
              </p>
              <p className="text-gray-700 leading-relaxed">
                No single figure did more to carry the Gospel into the Gentile world, to establish the
                churches of the Mediterranean, or to articulate the theology of grace that forms the
                intellectual backbone of Christianity. He wrote nearly half the New Testament. He is
                universally venerated as one of the two great Apostles of Rome, alongside Peter.
              </p>
            </div>

            {/* Background */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800 font-serif">Background: Saul of Tarsus</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Paul was born c. AD 5 in Tarsus, a prosperous city in Cilicia (modern southern Turkey).
                His birth name was Saul &mdash; a Hebrew name honouring the tribe of Benjamin, to which
                he belonged (Phil 3:5). Crucially, he was a Roman citizen by birth (Acts 22:27&ndash;28),
                a status that would later protect him from summary execution and allow him to appeal to
                Caesar.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                He was educated in Jerusalem under Gamaliel, one of the most eminent rabbis of the era
                (Acts 22:3), and became a Pharisee of exceptional zeal. He describes his pre-Christian
                life thus: &ldquo;I was advancing in Judaism beyond many of my own age among my people,
                so extremely zealous was I for the traditions of my fathers&rdquo; (Gal 1:14).
              </p>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">The Persecutor</h3>
                <p className="text-blue-800 leading-relaxed mb-3">
                  Saul considered the claim that the crucified Jesus was the Messiah to be blasphemy of
                  the worst kind, and he acted accordingly. He was present holding the cloaks of those
                  who stoned Stephen, the first Christian martyr (Acts 7:58). He then launched a
                  systematic campaign: &ldquo;Saul was ravaging the church, and entering house after
                  house, he dragged off men and women and committed them to prison&rdquo; (Acts 8:3).
                  He obtained letters from the High Priest authorising him to travel to Damascus and
                  arrest Christians there.
                </p>
                <p className="text-blue-800 leading-relaxed">
                  He never reached that destination as the man he had been.
                </p>
              </div>
            </div>

            {/* Damascus Road */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Flame className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800 font-serif">The Damascus Road (c. AD 33&ndash;36)</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                On the road to Damascus, Saul was suddenly struck down by a blinding light. A voice
                spoke to him: &ldquo;Saul, Saul, why are you persecuting me?&rdquo; (Acts 9:4). When
                Saul asked who was speaking, the answer came: &ldquo;I am Jesus, whom you are
                persecuting.&rdquo; Blinded for three days, he neither ate nor drank. In Damascus he
                was baptised by Ananias and received his sight back.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">His First Words as a Christian (Acts 9:20)</h3>
                <p className="text-amber-800 italic mb-2">
                  &ldquo;Immediately he began to proclaim Jesus in the synagogues, saying, &lsquo;He is
                  the Son of God.&rsquo;&rdquo;
                </p>
                <p className="text-amber-700 text-sm">&mdash; <em>Acts 9:20</em></p>
                <p className="text-amber-800 text-sm mt-3 leading-relaxed">
                  The very first thing Paul did after his baptism was to proclaim the thing he had most
                  violently denied. This instantaneous reversal &mdash; from Christianity&rsquo;s most
                  dangerous enemy to its most passionate herald &mdash; is one of the strongest
                  historical evidences for the reality of the Resurrection.
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed">
                Paul spent several years in Arabia and Damascus before returning to Jerusalem around
                AD 35&ndash;36, where he spent fifteen days with Peter and met James, the brother of
                the Lord (Gal 1:17&ndash;19). It was during this visit that he most likely received
                the early creed now recorded in 1 Corinthians 15:3&ndash;8, which dates the
                resurrection tradition to within just a few years of the events.
              </p>
            </div>

            {/* Missionary Journeys */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-green-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800 font-serif">Three Missionary Journeys</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                Beginning around AD 46, Paul undertook three great missionary journeys that planted
                churches from Cyprus to Greece and established the Christian presence across the
                eastern Mediterranean. He travelled by ship and on foot, preaching in synagogues
                and marketplaces, founding communities, appointing elders, and returning to
                strengthen them.
              </p>

              <div className="space-y-4">
                <div className="bg-green-50 p-5 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-900 mb-2">First Journey (c. AD 46&ndash;48)</h3>
                  <p className="text-green-800 text-sm leading-relaxed">
                    With Barnabas: <strong>Cyprus</strong> &rarr; <strong>Pisidian Antioch</strong> (first
                    synagogue sermon to Gentiles) &rarr; <strong>Iconium</strong> &rarr; <strong>Lystra</strong>
                    (stoned and left for dead) &rarr; <strong>Derbe</strong>, then the return route
                    strengthening the churches. The Jerusalem Council (Acts 15, c. AD 49) confirmed the
                    Gentile mission at the end of this phase.
                  </p>
                </div>
                <div className="bg-green-50 p-5 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-900 mb-2">Second Journey (c. AD 49&ndash;52)</h3>
                  <p className="text-green-800 text-sm leading-relaxed">
                    With Silas: Through <strong>Syria and Asia Minor</strong> &rarr; a divine vision
                    calling them to <strong>Macedonia</strong> &rarr; <strong>Philippi</strong>
                    (imprisonment and miraculous release) &rarr; <strong>Thessalonica</strong> &rarr;
                    <strong>Berea</strong> &rarr; <strong>Athens</strong> (the Areopagus speech, Acts 17,
                    arguing for the one God from the altar to the Unknown God) &rarr; <strong>Corinth</strong>
                    (18 months; wrote 1 &amp; 2 Thessalonians here).
                  </p>
                </div>
                <div className="bg-green-50 p-5 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-900 mb-2">Third Journey (c. AD 53&ndash;57)</h3>
                  <p className="text-green-800 text-sm leading-relaxed">
                    <strong>Ephesus</strong> (three years; wrote 1 Corinthians; the silversmiths&rsquo;
                    riot) &rarr; <strong>Macedonia and Corinth</strong> (wrote Galatians, Romans, 2
                    Corinthians) &rarr; <strong>Jerusalem</strong> with the collection for the poor saints,
                    where his arrest would end his free mission.
                  </p>
                </div>
              </div>
            </div>

            {/* Arrest and Imprisonment */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-indigo-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800 font-serif">Arrest, Trials, and Rome (AD 57&ndash;62)</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                In Jerusalem, a riot in the Temple led to Paul&rsquo;s arrest by Roman soldiers (Acts
                21:30&ndash;33). Transferred to Caesarea, he stood trial before the governors Felix and
                Festus and before King Agrippa II. Facing a potentially unfair outcome, he exercised
                his Roman citizenship and appealed to Caesar (Acts 25:11), triggering a voyage to Rome
                that included a famous shipwreck on Malta (Acts 27).
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                In Rome he spent at least two years under house arrest (Acts 28:30&ndash;31), freely
                preaching and writing letters &mdash; including Ephesians, Philippians, Colossians,
                and Philemon. Tradition holds that he was released, possibly travelled to Spain and
                the eastern Mediterranean again, and was then rearrested under Nero and executed
                c. AD 67.
              </p>
            </div>

            {/* The Letters */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Scroll className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800 font-serif">The Pauline Letters</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Thirteen letters in the New Testament bear Paul&rsquo;s name. They were written to
                address specific problems in real communities and are among the most theologically
                rich documents ever produced. They cover the full sweep of Christian life: justification
                by faith, the nature of the Church, the resurrection of the body, the ethics of love,
                the sovereignty of grace, and the cosmic lordship of Christ.
              </p>
              <div className="bg-gray-50 rounded-lg p-5 mb-4">
                <p className="text-sm text-gray-700 leading-relaxed">
                  <strong>The thirteen letters:</strong> Romans &bull; 1 &amp; 2 Corinthians &bull;
                  Galatians &bull; Ephesians &bull; Philippians &bull; Colossians &bull; 1 &amp; 2
                  Thessalonians &bull; 1 &amp; 2 Timothy &bull; Titus &bull; Philemon
                </p>
              </div>

              {/* Key quotes */}
              <div className="space-y-4">
                <div className="bg-amber-50 p-5 rounded-lg">
                  <p className="text-amber-800 italic mb-1">
                    &ldquo;I have been crucified with Christ and I no longer live, but Christ lives in
                    me. The life I now live in the body, I live by faith in the Son of God, who loved me
                    and gave himself for me.&rdquo;
                  </p>
                  <p className="text-amber-700 text-sm">&mdash; <em>Galatians 2:20</em></p>
                </div>
                <div className="bg-amber-50 p-5 rounded-lg">
                  <p className="text-amber-800 italic mb-1">
                    &ldquo;I can do all this through him who gives me strength.&rdquo;
                  </p>
                  <p className="text-amber-700 text-sm">&mdash; <em>Philippians 4:13</em></p>
                </div>
                <div className="bg-amber-50 p-5 rounded-lg">
                  <p className="text-amber-800 italic mb-1">
                    &ldquo;For I am convinced that neither death nor life, neither angels nor demons,
                    neither the present nor the future, nor any powers, neither height nor depth, nor
                    anything else in all creation, will be able to separate us from the love of God that
                    is in Christ Jesus our Lord.&rdquo;
                  </p>
                  <p className="text-amber-700 text-sm">&mdash; <em>Romans 8:38&ndash;39</em></p>
                </div>
                <div className="bg-amber-50 p-5 rounded-lg">
                  <p className="text-amber-800 italic mb-1">
                    &ldquo;For what I received I passed on to you as of first importance: that Christ
                    died for our sins according to the Scriptures, that he was buried, that he was raised
                    on the third day according to the Scriptures, and that he appeared to Cephas, and then
                    to the Twelve&hellip;&rdquo;
                  </p>
                  <p className="text-amber-700 text-sm">&mdash; <em>1 Corinthians 15:3&ndash;5</em> (the earliest written resurrection creed)</p>
                </div>
              </div>
            </div>

            {/* Martyrdom */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <Crown className="w-6 h-6 text-red-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800 font-serif">Martyrdom at Rome (c. AD 67)</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Paul was beheaded &mdash; the method of execution reserved for Roman citizens, considered
                more dignified than crucifixion &mdash; at a place outside Rome called Tre Fontane
                (Three Fountains), c. AD 67, during the persecution of Nero. The Basilica of St. Paul
                Outside the Walls marks the traditional site of his burial on the Via Ostiensis.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Clement of Rome, writing c. AD 96 within living memory of the events, attests that Paul
                &ldquo;bore chains seven times, was banished, was stoned, became a herald in East and
                West, and won the noble renown which was the reward of his faith, having taught
                righteousness to the whole world and having reached the farthest limits of the West;
                and when he had borne his testimony before the rulers, he thus departed from the world
                and went to the holy place, having become an outstanding example of patient
                endurance&rdquo; (1 Clement 5).
              </p>
              <div className="bg-amber-50 p-5 rounded-lg">
                <p className="text-amber-800 italic mb-1">
                  &ldquo;For to me, to live is Christ and to die is gain.&rdquo;
                </p>
                <p className="text-amber-700 text-sm">&mdash; <em>Philippians 1:21</em></p>
              </div>
            </div>

            {/* Cross-link */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <p className="text-amber-800 text-sm mb-3">
                Paul&rsquo;s entire mission was built on the one foundation: the risen Christ who
                appeared to him on the Damascus road.
              </p>
              <Link
                href="/history/christ"
                className="inline-flex items-center gap-2 text-amber-700 hover:text-amber-900 font-medium text-sm"
              >
                <ArrowRight className="w-4 h-4" />
                Learn about Jesus himself
              </Link>
            </div>

          </div>
        )}

        {/* ==================== TAB 3: MISSIONS ==================== */}
        {activeTab === 'missions' && (
          <div className="space-y-8">

            {/* Great Commission */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Globe className="w-6 h-6 text-green-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800 font-serif">The Great Commission</h2>
              </div>
              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <p className="text-amber-800 italic mb-2 text-lg leading-relaxed">
                  &ldquo;Go therefore and make disciples of all nations, baptising them in the name of
                  the Father and of the Son and of the Holy Spirit, teaching them to observe all that I
                  have commanded you. And behold, I am with you always, to the end of the age.&rdquo;
                </p>
                <p className="text-amber-700 text-sm">&mdash; <em>Matthew 28:19&ndash;20</em></p>
              </div>
              <p className="text-gray-700 leading-relaxed">
                These words, spoken by the Risen Christ to his disciples on a mountain in Galilee, set
                in motion one of the most extraordinary episodes of religious expansion in human history.
                Within a generation, the Gospel had spread from Jerusalem to Rome; within three centuries,
                it had reached from Ireland to India. What follows is a record of where each Apostle went.
              </p>
            </div>

            {/* Mission Table */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800 font-serif">Where the Apostles Went</h2>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-gray-700 bg-gray-50 rounded-tl-lg">Apostle</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700 bg-gray-50">Primary Territory</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700 bg-gray-50 rounded-tr-lg">Key Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr className="hover:bg-amber-50 transition-colors">
                      <td className="py-3 px-4 font-semibold text-gray-900">Peter</td>
                      <td className="py-3 px-4 text-gray-700">Jerusalem &rarr; Antioch &rarr; Rome</td>
                      <td className="py-3 px-4 text-gray-600">Founded the Roman Church; first Bishop of Rome; crucified upside down c. AD 64&ndash;68</td>
                    </tr>
                    <tr className="hover:bg-amber-50 transition-colors">
                      <td className="py-3 px-4 font-semibold text-gray-900">Andrew</td>
                      <td className="py-3 px-4 text-gray-700">Cappadocia, Galatia, Bithynia &rarr; Scythia &rarr; Greece (Patras)</td>
                      <td className="py-3 px-4 text-gray-600">&ldquo;Protocletos&rdquo; (first-called) in Eastern tradition; patron of Scotland; martyred on an X-shaped cross</td>
                    </tr>
                    <tr className="hover:bg-amber-50 transition-colors">
                      <td className="py-3 px-4 font-semibold text-gray-900">James son of Zebedee</td>
                      <td className="py-3 px-4 text-gray-700">Judea; Spain (tradition)</td>
                      <td className="py-3 px-4 text-gray-600">Martyred early (c. AD 44) before extensive missions; shrine at Santiago de Compostela in Spain</td>
                    </tr>
                    <tr className="hover:bg-amber-50 transition-colors">
                      <td className="py-3 px-4 font-semibold text-gray-900">John</td>
                      <td className="py-3 px-4 text-gray-700">Jerusalem (decades) &rarr; Ephesus; Patmos (exile)</td>
                      <td className="py-3 px-4 text-gray-600">Wrote Gospel, three Letters, and Revelation; died naturally at Ephesus c. AD 100</td>
                    </tr>
                    <tr className="hover:bg-amber-50 transition-colors">
                      <td className="py-3 px-4 font-semibold text-gray-900">Philip</td>
                      <td className="py-3 px-4 text-gray-700">Phrygia &amp; Asia Minor (Hierapolis); some traditions add Ethiopia</td>
                      <td className="py-3 px-4 text-gray-600">Martyred at Hierapolis c. AD 80</td>
                    </tr>
                    <tr className="hover:bg-amber-50 transition-colors">
                      <td className="py-3 px-4 font-semibold text-gray-900">Bartholomew</td>
                      <td className="py-3 px-4 text-gray-700">Armenia; northwest India tradition; possibly Persia</td>
                      <td className="py-3 px-4 text-gray-600">A separate Indian tradition from Thomas; martyred in Armenia by flaying</td>
                    </tr>
                    <tr className="hover:bg-amber-50 transition-colors">
                      <td className="py-3 px-4 font-semibold text-gray-900">Matthew</td>
                      <td className="py-3 px-4 text-gray-700">Judea &rarr; Ethiopia and/or Persia</td>
                      <td className="py-3 px-4 text-gray-600">Author of the First Gospel; martyrdom accounts vary</td>
                    </tr>
                    <tr className="hover:bg-green-50 transition-colors border-l-4 border-green-400">
                      <td className="py-3 px-4 font-semibold text-gray-900">Thomas</td>
                      <td className="py-3 px-4 text-gray-700">Parthia &rarr; Persia &rarr; India (Kerala, Malabar coast)</td>
                      <td className="py-3 px-4 text-gray-600">
                        Founded the Saint Thomas Christian (Nasrani) community in Kerala; martyred at Mylapore (Chennai) c. AD 72.
                        Attested by Eusebius, Jerome, and the unbroken Syro-Malabar tradition.{' '}
                        <Link href="/history/indian-church" className="text-green-700 underline hover:text-green-900 font-medium">
                          The Church in India &rarr;
                        </Link>
                      </td>
                    </tr>
                    <tr className="hover:bg-amber-50 transition-colors">
                      <td className="py-3 px-4 font-semibold text-gray-900">James son of Alphaeus</td>
                      <td className="py-3 px-4 text-gray-700">Various traditions; possibly Egypt</td>
                      <td className="py-3 px-4 text-gray-600">Little scriptural record; traditions vary</td>
                    </tr>
                    <tr className="hover:bg-amber-50 transition-colors">
                      <td className="py-3 px-4 font-semibold text-gray-900">Thaddaeus / Jude</td>
                      <td className="py-3 px-4 text-gray-700">Syria &rarr; Mesopotamia &rarr; Persia (with Simon)</td>
                      <td className="py-3 px-4 text-gray-600">Author of the Letter of Jude; martyred in Persia</td>
                    </tr>
                    <tr className="hover:bg-amber-50 transition-colors">
                      <td className="py-3 px-4 font-semibold text-gray-900">Simon the Zealot</td>
                      <td className="py-3 px-4 text-gray-700">Egypt, Persia; some traditions include Britain</td>
                      <td className="py-3 px-4 text-gray-600">Martyred in Persia alongside Thaddaeus</td>
                    </tr>
                    <tr className="hover:bg-amber-50 transition-colors">
                      <td className="py-3 px-4 font-semibold text-gray-900">Paul</td>
                      <td className="py-3 px-4 text-gray-700">Cyprus &rarr; Asia Minor &rarr; Macedonia &rarr; Greece &rarr; Rome &rarr; possibly Spain</td>
                      <td className="py-3 px-4 text-gray-600">Three missionary journeys; 13 letters; beheaded at Rome c. AD 67</td>
                    </tr>
                    <tr className="hover:bg-blue-50 transition-colors">
                      <td className="py-3 px-4 font-semibold text-gray-900">Mark <span className="text-xs font-normal text-gray-500">(not of the Twelve)</span></td>
                      <td className="py-3 px-4 text-gray-700">Egypt, Alexandria</td>
                      <td className="py-3 px-4 text-gray-600">Companion of Peter; author of the Second Gospel; founded the Coptic Church in Alexandria</td>
                    </tr>
                    <tr className="hover:bg-blue-50 transition-colors">
                      <td className="py-3 px-4 font-semibold text-gray-900">Luke <span className="text-xs font-normal text-gray-500">(not of the Twelve)</span></td>
                      <td className="py-3 px-4 text-gray-700">Accompanied Paul throughout his journeys</td>
                      <td className="py-3 px-4 text-gray-600">Author of the Gospel of Luke and the Acts of the Apostles; the historian of the early Church</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Thomas note */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h3 className="font-serif text-lg font-semibold text-green-900 mb-3">Thomas and India: One of the Best-Attested Apostolic Missions</h3>
              <p className="text-green-800 text-sm leading-relaxed mb-3">
                The mission of Thomas to India is one of the most historically credible of all the
                apostolic traditions. Eusebius of Caesarea (c. AD 313) records Thomas&rsquo;s mission
                to Parthia; St. Jerome (c. AD 393) explicitly names India. The Syriac Acts of Thomas
                (3rd century) provides a detailed narrative. Most significantly, the Saint Thomas
                Christian community of Kerala &mdash; the Nasrani, also known as the Syro-Malabar
                Church &mdash; has maintained an unbroken tradition of Thomasine origin from at least
                the 3rd century, long before European contact.
              </p>
              <p className="text-green-800 text-sm leading-relaxed mb-3">
                The Santhome Basilica in Chennai (formerly Mylapore) marks Thomas&rsquo;s traditional
                burial site, confirmed by excavations conducted in the 16th century by Portuguese
                missionaries who found the tomb and relics.
              </p>
              <Link
                href="/history/indian-church"
                className="inline-flex items-center gap-2 text-green-700 hover:text-green-900 font-medium text-sm"
              >
                <ArrowRight className="w-4 h-4" />
                The Church in India &mdash; Thomas&rsquo;s Legacy
              </Link>
            </div>

          </div>
        )}

        {/* ==================== TAB 4: MARTYRDOM & LEGACY ==================== */}
        {activeTab === 'martyrdom' && (
          <div className="space-y-8">

            {/* Tertullian quote */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <Crown className="w-6 h-6 text-red-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800 font-serif">The Blood of Martyrs</h2>
              </div>
              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <p className="text-amber-800 italic text-lg mb-2">
                  &ldquo;The blood of martyrs is the seed of the Church.&rdquo;
                </p>
                <p className="text-amber-700 text-sm">&mdash; <em>Tertullian, Apologeticus, c. AD 197</em></p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Tertullian&rsquo;s famous observation captures a paradox that puzzled Rome: the more the
                Empire persecuted the Christians, the faster the Church grew. The willingness of the
                Apostles and their followers to die rather than deny Christ was not weakness &mdash; it
                was the most powerful possible testimony to what they believed they had witnessed.
              </p>
              <p className="text-gray-700 leading-relaxed">
                No conspiracy theory or collective delusion adequately explains men choosing prolonged
                suffering and death for an event they themselves could have exposed as false. The
                Apostles were not dying for a faith they had received from others; they were dying
                for events they personally claimed to have seen. Their willingness to face death is
                among the strongest historical arguments for the truth of the Resurrection.
              </p>
            </div>

            {/* How they died */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <Sword className="w-6 h-6 text-red-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800 font-serif">How the Apostles Died</h2>
              </div>

              <div className="bg-red-50 rounded-xl p-6 mb-2">
                <div className="space-y-5">

                  <div className="border-b border-red-100 pb-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0"></div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Peter &mdash; Crucified upside down (c. AD 64&ndash;68), Rome</h3>
                        <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                          Crucified on Vatican Hill during Nero&rsquo;s persecution. He asked to be
                          crucified upside down, declaring he was unworthy to die in the same manner as
                          his Lord. His tomb beneath St. Peter&rsquo;s Basilica was identified in
                          excavations conducted 1939&ndash;1949.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border-b border-red-100 pb-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0"></div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Paul &mdash; Beheaded (c. AD 67), Rome</h3>
                        <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                          As a Roman citizen, Paul was entitled to a more dignified death than crucifixion.
                          Beheaded at Tre Fontane (Three Fountains) outside Rome, also under Nero. The
                          Basilica of St. Paul Outside the Walls marks his burial site on the Via Ostiensis.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border-b border-red-100 pb-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0"></div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Andrew &mdash; Crucified on an X-shaped cross (c. AD 60), Patras, Greece</h3>
                        <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                          The <em>Crux decussata</em> &mdash; the X-shaped cross &mdash; bears his name
                          (St. Andrew&rsquo;s Cross) and appears on the Saltire flag of Scotland, of which
                          Andrew is patron. Tradition records he was bound rather than nailed, prolonging
                          his suffering, and preached from the cross for two days.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border-b border-red-100 pb-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0"></div>
                      <div>
                        <h3 className="font-semibold text-gray-900">James son of Zebedee &mdash; Beheaded (c. AD 44), Jerusalem</h3>
                        <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                          The only Apostle whose martyrdom is explicitly recorded in the New Testament:
                          &ldquo;He killed James the brother of John with the sword&rdquo; (Acts 12:2).
                          Herod Agrippa I ordered his execution to please the Jewish leadership. He was the
                          first of the Twelve to die for the faith.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border-b border-red-100 pb-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0"></div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Philip &mdash; Crucified (c. AD 80), Hierapolis, Asia Minor</h3>
                        <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                          After decades of ministry in Phrygia, Philip was arrested during a
                          confrontation with pagan priests at Hierapolis. He was crucified upside down.
                          Excavations at Hierapolis have uncovered a martyrium (memorial shrine) believed
                          to mark the site.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border-b border-red-100 pb-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0"></div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Bartholomew &mdash; Flayed alive and crucified, Armenia</h3>
                        <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                          Tradition records one of the most gruesome of the apostolic martyrdoms: he was
                          flayed (skinned) alive and then crucified or beheaded in Armenia. Michelangelo
                          depicted him in the <em>Last Judgment</em> in the Sistine Chapel holding his
                          own skin &mdash; the skin bearing Michelangelo&rsquo;s own face in a moment of
                          dark self-reflection.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border-b border-red-100 pb-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0"></div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Matthew &mdash; Martyrdom accounts vary; Ethiopia or Persia</h3>
                        <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                          Sources differ on the manner and location of Matthew&rsquo;s death &mdash;
                          some traditions say he was killed by the sword in Ethiopia, others by spear in
                          Persia. Some early sources suggest he may have died a natural death. The
                          uncertainty itself reflects the limits of early tradition.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border-b border-red-100 pb-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0"></div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Thomas &mdash; Speared (c. AD 72), Mylapore, India</h3>
                        <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                          Thomas was martyred by spear on a hill outside Mylapore (modern Chennai,
                          Tamil Nadu, India). The Santhome Basilica &mdash; built originally by the
                          Portuguese in 1523 over earlier structures, and elevated to a basilica in 1956
                          &mdash; marks his traditional burial place. He is one of only three Apostles
                          (with Peter and James) whose tomb site has a continuous devotional tradition
                          traceable to antiquity.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border-b border-red-100 pb-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0"></div>
                      <div>
                        <h3 className="font-semibold text-gray-900">James son of Alphaeus &mdash; Stoned or clubbed; accounts vary</h3>
                        <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                          Traditions place his martyrdom in Egypt or Persia; some accounts say he was
                          stoned, others that he was beaten to death with a fuller&rsquo;s club &mdash;
                          a wooden implement used for preparing cloth &mdash; which became his artistic
                          symbol.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border-b border-red-100 pb-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0"></div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Thaddaeus / Jude &mdash; Clubbed and/or speared, Persia</h3>
                        <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                          Martyred in Persia alongside Simon the Zealot. His artistic symbol is a club
                          or axe. As the patron of hopeless causes, his intercessory reputation has made
                          him one of the most popular saints in popular Catholic devotion.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border-b border-red-100 pb-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0"></div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Simon the Zealot &mdash; Martyred in Persia (with Thaddaeus)</h3>
                        <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                          Tradition consistently pairs Simon with Thaddaeus in Persia. Some accounts
                          describe him as sawn in two, others as crucified. A minority British tradition
                          (largely legendary) holds that he reached Britain.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border-b border-red-100 pb-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0"></div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Matthias &mdash; Stoned and beheaded; traditions vary</h3>
                        <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                          The tradition most commonly cited records him stoned and then beheaded in
                          Colchis (modern Georgia) or in Judea. His feast day is 14 May in the Roman Rite.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                      <div>
                        <h3 className="font-semibold text-gray-900">John &mdash; Died naturally at Ephesus (c. AD 100)</h3>
                        <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                          John alone among the Twelve is believed to have died of old age &mdash; though
                          not without suffering. He was banished to the island of Patmos by Emperor
                          Domitian, where he received the visions of the Book of Revelation. Tradition
                          records that he was also briefly thrown into boiling oil in Rome, from which he
                          emerged unharmed. He returned to Ephesus and lived to extreme old age, his last
                          words said to be: &ldquo;Little children, love one another.&rdquo;
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Apologetic argument */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800 font-serif">Why This Matters: The Apologetic Argument</h2>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <p className="text-blue-800 leading-relaxed mb-4">
                  People will die for beliefs they sincerely hold &mdash; members of many religions have
                  done so throughout history. This in itself proves nothing about the truth of those
                  beliefs. What is historically unique about the Apostles is different: they were not
                  dying for a theological system they had received from others. They were dying for
                  specific, concrete, empirical events that they personally claimed to have witnessed
                  &mdash; above all, the bodily resurrection of Jesus from the dead.
                </p>
                <p className="text-blue-800 leading-relaxed mb-4">
                  The Apostles were in a unique epistemic position. They knew whether the resurrection
                  had happened or not. If it had not happened &mdash; if the tomb was not empty, if the
                  appearances were fabricated &mdash; they would have known it was a lie. Men and women
                  sometimes die for beliefs they think are true but which are false. But no coherent
                  psychological or sociological explanation accounts for a group of people who knew their
                  central claim was false, yet chose torture and death rather than renounce it, with
                  nothing to gain and everything to lose.
                </p>
                <p className="text-blue-800 leading-relaxed">
                  Not one of the Apostles recanted. Not one, under threat of death, said: &ldquo;It was
                  a deception.&rdquo; The martyrdom of the Apostles is not proof of the Resurrection in
                  the strict logical sense, but it is among the strongest circumstantial arguments that
                  what they proclaimed was what they genuinely believed they had seen &mdash; and that
                  they had very good reason for that belief.
                </p>
              </div>
              <Link
                href="/history/resurrection"
                className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-900 font-medium"
              >
                <ArrowRight className="w-4 h-4" />
                Explore the full historical case for the Resurrection
              </Link>
            </div>

            {/* Apostolic Succession */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Church className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800 font-serif">Apostolic Succession</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Before the Apostles died, they passed on their authority by the laying on of hands
                &mdash; ordaining bishops to lead the communities they had founded. This transmission
                of authority in an unbroken chain from the Apostles to the bishops of today is called
                Apostolic Succession. The Catholic Church holds that this succession is essential to
                the identity and authority of the Church.
              </p>
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">The Catechism of the Catholic Church</h3>
                <p className="text-blue-800 italic mb-3">
                  &ldquo;In order that the mission entrusted to them might be continued after their death,
                  [the Apostles] consigned, by will and testament, as it were, to their immediate
                  collaborators the duty of completing and consolidating the work they had begun,
                  urging them to tend to the whole flock, in which the Holy Spirit had appointed them
                  to shepherd the Church of God.&rdquo;
                </p>
                <p className="text-blue-700 text-sm">&mdash; <em>CCC 861</em></p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                The earliest evidence for apostolic succession comes from within a generation of the
                Apostles themselves. Clement of Rome (c. AD 96) already speaks of the authority passed
                from Christ to the Apostles, and from the Apostles to their appointed successors. The
                unbroken chain of episcopal ordinations means that every validly ordained bishop in
                the Catholic Church today can trace his ordination lineage &mdash; through the laying
                on of hands &mdash; back to the Apostles themselves.
              </p>
              <div className="bg-gray-50 rounded-lg p-5">
                <p className="text-sm text-gray-600">
                  <strong>CCC References:</strong> 857&ndash;865 on the Apostles and their successors;
                  861&ndash;862 specifically on apostolic succession and the college of bishops.
                </p>
              </div>
            </div>

            {/* Sources */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Sources &amp; Further Reading</h3>
              <ol className="text-sm text-gray-600 space-y-1.5 list-decimal list-inside">
                <li>Eusebius of Caesarea, <em>Ecclesiastical History</em> (c. AD 313) &mdash; the primary ancient source for apostolic traditions</li>
                <li>Clement of Rome, <em>1 Clement</em> (c. AD 96), chapters 4&ndash;6 &mdash; the earliest extra-biblical witness to the deaths of Peter and Paul</li>
                <li>Ignatius of Antioch, seven letters (c. AD 107), especially <em>To the Romans</em></li>
                <li>Sean McDowell, <em>The Fate of the Apostles: Examining the Martyrdom Accounts of the Closest Followers of Jesus</em> (Routledge, 2015) &mdash; the most thorough modern scholarly treatment</li>
                <li>F.F. Bruce, <em>The Spreading Flame</em> (Paternoster, 1958)</li>
                <li>Margherita Guarducci, <em>The Tomb of St. Peter</em> (Hawthorn Books, 1960) &mdash; on the Vatican excavations of 1939&ndash;1949 and the identification of Peter&apos;s relics</li>
                <li>A. Mathias Mundadan, <em>History of Christianity in India, Vol. 1: From the Beginnings up to the Middle of the Sixteenth Century</em> (Bangalore, 1989) &mdash; on the Saint Thomas tradition in Kerala</li>
                <li><em>New Catholic Encyclopedia</em>, &ldquo;Apostles&rdquo; entries (2nd ed., Gale)</li>
                <li><em>Catechism of the Catholic Church</em>, CCC 857&ndash;865 (The Apostles and their Successors)</li>
              </ol>
            </div>

          </div>
        )}

      </div>
    </div>
  )
}
