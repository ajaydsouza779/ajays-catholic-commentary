'use client'

import { useState } from 'react'
import {
  BookOpen,
  Clock,
  Sun,
  Moon,
  Star,
  Users,
  Calendar,
  Heart,
  Music,
  Scroll,
  Church,
  Globe,
} from 'lucide-react'

type TabId =
  | 'what-is-it'
  | 'history'
  | 'the-seven-hours'
  | 'structure'
  | 'obligation-and-laity'
  | 'liturgical-year-connection'

const tabs: { id: TabId; label: string }[] = [
  { id: 'what-is-it', label: 'What Is the LOTH?' },
  { id: 'history', label: 'History' },
  { id: 'the-seven-hours', label: 'The Seven Hours' },
  { id: 'structure', label: 'Structure of the Office' },
  { id: 'obligation-and-laity', label: 'Obligation & Laity' },
  { id: 'liturgical-year-connection', label: 'The Liturgical Year' },
]

export default function LiturgyOfHoursPage() {
  const [activeTab, setActiveTab] = useState<TabId>('what-is-it')

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Liturgy of the Hours
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The Divine Office &mdash; the Church&rsquo;s unceasing prayer sanctifying every hour of the day,
            from the Desert Fathers to Vatican II, from monasteries to smartphones.
          </p>
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
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tab Content */}

        {/* ==================== TAB 1: WHAT IS THE LOTH? ==================== */}
        {activeTab === 'what-is-it' && (
          <div className="space-y-8">

            {/* Card 1: The Basic Definition */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Church&rsquo;s Official Daily Prayer</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The Liturgy of the Hours (<em>Liturgia Horarum</em>, also called the Divine Office or
                <em> Officium Divinum</em>) is the official prayer of the Church sanctifying the hours of
                the day. It is not private prayer but the public, communal prayer of the Church herself
                &mdash; second only to the Eucharist in liturgical dignity.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">
                  Catechism of the Catholic Church &mdash; CCC 1174
                </h3>
                <p className="text-blue-800 italic mb-2">
                  &ldquo;The mystery of Christ, his Incarnation and Passover, which we celebrate in the
                  Eucharist especially at the Sunday assembly, permeates and transfigures the time of
                  each day, through the celebration of the Liturgy of the Hours, &lsquo;the divine
                  office.&rsquo;&rdquo;
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">
                  Catechism of the Catholic Church &mdash; CCC 1175
                </h3>
                <p className="text-blue-800 italic mb-2">
                  &ldquo;The Liturgy of the Hours is intended to become the prayer of the whole People of
                  God. In it Christ himself &lsquo;continues his priestly work through his Church.&rsquo;&rdquo;
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The primary purpose of the LOTH is the <strong>sanctification of time</strong> itself
                &mdash; to consecrate time to God. By praying at fixed hours throughout the day, the
                Church transforms ordinary human time into sacred time, making the whole day a continuous
                act of worship. This is not a new idea: it is the ancient instinct of every culture that
                has known God, expressed now in the fullness of Christian revelation.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Even when prayed alone (as most laypeople do), the LOTH is always the prayer of the
                universal Church. The priest praying Morning Prayer in his rectory, the religious in her
                chapel, and the layperson on the subway are all praying the same words at the same hours,
                united with the whole Church worldwide. It is this universality that distinguishes the
                Liturgy of the Hours from personal devotional prayer.
              </p>
            </div>

            {/* Card 2: The Opus Dei */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Church className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The <em>Opus Dei</em> &mdash; the Work of God</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                St. Benedict of Nursia (480&ndash;547) called the Divine Office the <em>Opus Dei</em>
                &mdash; the &ldquo;Work of God.&rdquo; In his <em>Rule</em>, nothing was to be preferred to
                it. For Benedictine monks, the Office is the center around which all other activity
                revolves. Manual labor, study, and hospitality exist in service of the Opus Dei, not the
                other way around. This Benedictine insight shaped the entire medieval Western Church and
                remains the proper ordering of any Christian life.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                The LOTH and the Eucharist are the two pillars of the Church&rsquo;s official prayer.
                <em> Sacrosanctum Concilium</em> (Vatican II, 1963) &sect;&sect;83&ndash;101 treats them
                together. The Mass is the summit; the LOTH extends the Eucharistic grace throughout the
                day. Many monasteries celebrate the full Office culminating in a daily Mass &mdash; the
                two forming a single integrated prayer life, morning to night.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">
                  St. Pius X on the Prayer of Christ
                </h3>
                <p className="text-amber-800 italic mb-3">
                  &ldquo;The Liturgy of the Hours is the prayer of Christ continued in time by the
                  Church.&rdquo;
                </p>
                <p className="text-amber-700 text-sm">
                  When we pray the Hours, we join the 24-hour unceasing prayer that rises from the Church
                  across all time zones, offering perpetual praise to the Father through the Son in the
                  Holy Spirit. The sun never sets on the Church at prayer.
                </p>
              </div>
            </div>

            {/* Sources */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                  <Scroll className="w-6 h-6 text-gray-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Sources & Further Reading</h2>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li><strong>CCC 1174&ndash;1178</strong> &mdash; The Liturgy of the Hours in the Catechism</li>
                <li><strong>CCC 2768&ndash;2772</strong> &mdash; The Lord&rsquo;s Prayer and the Hours</li>
                <li><strong><em>Sacrosanctum Concilium</em> &sect;&sect;83&ndash;101</strong> (Vatican II, 1963) &mdash; The Divine Office</li>
                <li><strong>GILH</strong> &mdash; General Instruction of the Liturgy of the Hours (Paul VI, 1971)</li>
                <li><strong><em>Laudis Canticum</em></strong> (Paul VI, 1971) &mdash; Apostolic Constitution promulgating the reformed Office</li>
                <li><strong>Robert Taft SJ</strong>, <em>The Liturgy of the Hours in East and West</em></li>
                <li><strong>Aelred Squire OP</strong>, <em>Asking the Fathers</em></li>
                <li><strong>William Storey</strong>, <em>The Complete Liturgy of the Hours</em></li>
                <li><strong>Canon 276 &sect;2</strong>, 1983 Code of Canon Law &mdash; Obligation of clergy</li>
                <li><a href="https://universalis.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Universalis.com</a> &mdash; Full LOTH online and app</li>
                <li><a href="https://divineoffice.org" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">DivineOffice.org</a> &mdash; Free audio recordings of the Hours</li>
              </ul>
            </div>

          </div>
        )}

        {/* ==================== TAB 2: HISTORY ==================== */}
        {activeTab === 'history' && (
          <div className="space-y-8">

            {/* Card 1: Old Testament Roots */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Old Testament & Temple Roots</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The Liturgy of the Hours did not begin with Christianity. Its roots reach deep into the
                Old Testament. Psalm 119:164 establishes the pattern: <em>&ldquo;Seven times a day I praise
                you.&rdquo;</em> The Temple in Jerusalem had morning and evening sacrifices (<em>tamid</em>)
                accompanied by psalms and prayer. The daily synagogue prayers &mdash; <em>Shacharit</em>
                (morning), <em>Mincha</em> (afternoon), and <em>Maariv</em> (evening) &mdash; continued
                this tradition after the Temple&rsquo;s destruction.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                The Qumran community (Dead Sea Scrolls, 2nd century BC &ndash; 1st century AD) prayed
                at fixed hours with extraordinary discipline. Their scrolls reveal a community organized
                entirely around the rhythm of prayer &mdash; anticipating in remarkable ways the later
                monastic movement. Fixed-hour prayer was not a Christian innovation; it was the
                inheritance of a tradition that understood time as belonging to God.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">The New Testament Witness</h3>
                <ul className="space-y-2 text-amber-800 text-sm">
                  <li><strong>Acts 2:15</strong> &mdash; Peter and John at the Temple at the 9th hour (3 p.m.) for prayer</li>
                  <li><strong>Acts 3:1</strong> &mdash; &ldquo;They were going up to the Temple at the hour of prayer, the ninth hour&rdquo;</li>
                  <li><strong>Acts 10:9</strong> &mdash; Peter prays at the 6th hour (noon) on the rooftop &mdash; the hour of his vision</li>
                  <li><strong>Acts 16:25</strong> &mdash; Paul and Silas pray and sing hymns at midnight in prison</li>
                  <li><strong>The Didache</strong> (c. 100 AD) &mdash; prescribes saying the Lord&rsquo;s Prayer three times daily</li>
                </ul>
              </div>
            </div>

            {/* Card 2: Desert Fathers and Benedict */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Sun className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Desert Fathers & St. Benedict</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The monks of Egypt and Syria (3rd&ndash;4th centuries) developed extensive prayer schedules
                &mdash; vigil prayer at night, rising for Matins, praying at the set hours through the
                day. John Cassian (<em>Conferences</em>, early 5th century) transmitted the Eastern monastic
                practice to the West, becoming the great bridge between the Desert and the Latin Church.
                Through Cassian, the practice of the canonical hours entered every Western monastery.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Benedict of Nursia (480&ndash;547) codified the Office in his <em>Rule</em> &mdash; eight
                Offices per day: Vigils (Matins), Lauds, Prime, Terce, Sext, None, Vespers, Compline. He
                established the four-week psalter cycle and the norms for how many psalms were sung at
                each Hour. The <em>Rule</em> governed thousands of monasteries and shaped the entire
                Western Church&rsquo;s prayer life for over a millennium. Wherever Benedictine monasticism
                went, the Divine Office went with it.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">The Breviary</h3>
                <p className="text-blue-800 mb-3">
                  By the high Middle Ages, the Breviary &mdash; a portable single-volume compilation
                  of all Office texts &mdash; allowed clergy to pray the Office privately without
                  requiring choir. This democratized the Office but also individualized it. The
                  cathedral offices (especially Vespers and Matins) maintained their communal character,
                  while clerics discharged their obligation alone. Polyphonic choral settings of Vespers
                  &mdash; Monteverdi (1610), Mozart, Handel &mdash; mark the Office&rsquo;s high cultural
                  impact on Western music.
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed">
                <em>Sacrosanctum Concilium</em> (1963) &sect;&sect;83&ndash;101 called for thorough reform:
                adapting the Office to modern life, making it accessible to laypeople, and restoring a
                genuine prayer of the hours rather than an obligation hastily discharged. Paul VI issued
                the reformed <em>Liturgia Horarum</em> in 1971 (<em>Laudis Canticum</em>), abolishing
                Prime, reducing the required Nocturns, and creating a four-week psalter cycle. The
                reformed LOTH is shorter and more manageable without sacrificing the tradition&rsquo;s
                depth.
              </p>
            </div>

            {/* Highlight Box */}
            <div className="bg-amber-50 border-l-4 border-amber-500 rounded-lg p-8">
              <h3 className="text-xl font-bold text-amber-900 mb-4">The Indestructible Prayer</h3>
              <p className="text-amber-800 leading-relaxed">
                The Office survived the most dramatic cultural and political upheavals of Western history
                &mdash; the Roman collapse, the medieval crisis, the Reformation, the French Revolution
                &mdash; because it is not a human institution but the voice of the Church praying through
                Christ to the Father. Every attempt to extinguish it has failed. It will outlast whatever
                comes next.
              </p>
            </div>

          </div>
        )}

        {/* ==================== TAB 3: THE SEVEN HOURS ==================== */}
        {activeTab === 'the-seven-hours' && (
          <div className="space-y-8">

            {/* Intro */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Seven Canonical Hours</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                The reformed LOTH has seven canonical Hours. Together they sanctify the entire arc of the
                day &mdash; from the first light of morning through the silence of night. Each Hour has
                its own theological character, its own dominant scriptural canticle, and its own place in
                the rhythm of prayer.
              </p>
            </div>

            {/* Office of Readings */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-purple-700" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">1. Office of Readings</h2>
                <span className="text-sm text-gray-500 italic">(<em>Officium Lectionis</em>, formerly Matins)</span>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                May be prayed at any hour of the day or even anticipated the night before as a Vigil.
                This flexibility reflects the Hour&rsquo;s contemplative character &mdash; it is primarily
                an act of deep listening rather than a time-specific ritual.
              </p>

              <div className="bg-purple-50 p-5 rounded-lg mb-4">
                <h3 className="font-semibold text-purple-900 mb-2">Contents:</h3>
                <ul className="text-purple-800 text-sm space-y-1">
                  <li>Opening verse &bull; Hymn &bull; Three psalms with antiphons</li>
                  <li>Versicle and response</li>
                  <li><strong>Two long readings</strong>: one from Scripture, one from the Fathers/saints</li>
                  <li>Responsory &bull; Closing prayer</li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed">
                The richest Hour for reading and meditation. Over four years of readings, the Office of
                Readings presents the entire treasury of patristic, medieval, and modern Catholic thought
                &mdash; Augustine, Aquinas, Bernard, Teresa of Avila, Newman, and hundreds more.
              </p>
            </div>

            {/* Morning Prayer */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                  <Sun className="w-6 h-6 text-yellow-700" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">2. Morning Prayer (Lauds)</h2>
                <span className="text-sm text-gray-500 italic">(<em>Laudes Matutinae</em>)</span>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                Prayed at sunrise or first light &mdash; historically the most important of the daytime
                Hours alongside Vespers. <em>Lauds</em> means &ldquo;praise.&rdquo; The morning is the
                hour of the Resurrection; Lauds consecrates the new day to God.
              </p>

              <div className="bg-yellow-50 p-5 rounded-lg mb-4">
                <h3 className="font-semibold text-yellow-900 mb-2">Contents:</h3>
                <ul className="text-yellow-800 text-sm space-y-1">
                  <li>Opening verse &bull; Hymn</li>
                  <li>Psalms: always including a morning psalm and an OT canticle</li>
                  <li>Short reading &bull; Responsory</li>
                  <li><strong>The Benedictus</strong> (Canticle of Zechariah, Luke 1:68&ndash;79)</li>
                  <li>Intercessions &bull; Lord&rsquo;s Prayer &bull; Closing prayer and blessing</li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed">
                The <strong>Benedictus</strong> is the great morning canticle of the Latin Church:
                <em> &ldquo;Blessed be the Lord God of Israel, for he has visited and ransomed his
                people&hellip;&rdquo;</em> (Luke 1:68). Zechariah&rsquo;s song of praise at the birth of
                John the Baptist has opened the Christian day for fifteen centuries.
              </p>
            </div>

            {/* Daytime Prayer */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-orange-700" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">3. Daytime Prayer (Terce, Sext, None)</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                Three optional Hours, any one of which satisfies the obligation of daytime prayer. Each
                is short &mdash; a hymn, three psalms, a short reading, versicle, and prayer &mdash;
                taking approximately five to ten minutes.
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-orange-900 mb-2">Terce (9 a.m.)</h3>
                  <p className="text-orange-800 text-sm">
                    Midmorning. The hour of Pentecost (Acts 2:15) and the beginning of Christ&rsquo;s
                    trial before Pilate.
                  </p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-orange-900 mb-2">Sext (Noon)</h3>
                  <p className="text-orange-800 text-sm">
                    Midday. The hour of Peter&rsquo;s vision on the rooftop (Acts 10:9) and the hour
                    the Crucifixion began.
                  </p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-orange-900 mb-2">None (3 p.m.)</h3>
                  <p className="text-orange-800 text-sm">
                    Midafternoon &mdash; the &ldquo;Hour of Mercy,&rdquo; the hour Christ died
                    (Matt 27:46). The Divine Mercy chaplet echoes this ancient practice.
                  </p>
                </div>
              </div>
            </div>

            {/* Evening Prayer */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-indigo-700" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">4. Evening Prayer (Vespers)</h2>
                <span className="text-sm text-gray-500 italic">(<em>Vesperae</em>)</span>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                The &ldquo;hinge&rdquo; Hour of the day alongside Lauds &mdash; the most solemn daytime
                Hour. Vespers is the Sunday celebration par excellence in the Eastern tradition, and
                <em> Sacrosanctum Concilium</em> called for its restoration as a communal celebration
                in the Western Church.
              </p>

              <div className="bg-indigo-50 p-5 rounded-lg mb-4">
                <h3 className="font-semibold text-indigo-900 mb-2">Contents:</h3>
                <ul className="text-indigo-800 text-sm space-y-1">
                  <li>Opening verse &bull; Hymn</li>
                  <li>Two psalms and a NT canticle</li>
                  <li>Short reading &bull; Responsory</li>
                  <li><strong>The Magnificat</strong> (Luke 1:46&ndash;55, Mary&rsquo;s canticle)</li>
                  <li>Intercessions (evening; oriented toward the living and the dead)</li>
                  <li>Lord&rsquo;s Prayer &bull; Prayer and blessing</li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed">
                The <strong>Magnificat</strong> is the great evening canticle:
                <em> &ldquo;My soul proclaims the greatness of the Lord&hellip;&rdquo;</em> (Luke 1:46).
                Mary&rsquo;s song of total self-gift and praise has closed the Christian afternoon for
                fifteen hundred years. The evening intercessions are richer and more developed than the
                morning ones, encompassing the Church, the world, the dead, and particular needs.
              </p>
            </div>

            {/* Night Prayer */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Moon className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">5. Night Prayer (Compline)</h2>
                <span className="text-sm text-gray-500 italic">(<em>Completorium</em>)</span>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                The last prayer before sleep. Night Prayer is short &mdash; roughly ten minutes &mdash;
                and its texts rotate only within a single week, making it easy to learn. It is the ideal
                first step for anyone new to the Office.
              </p>

              <div className="bg-blue-50 p-5 rounded-lg mb-4">
                <h3 className="font-semibold text-blue-900 mb-2">Contents:</h3>
                <ul className="text-blue-800 text-sm space-y-1">
                  <li>Brief examination of conscience &bull; Hymn &bull; One or two psalms &bull; Short reading &bull; Responsory</li>
                  <li><strong>The Nunc Dimittis</strong> (Simeon&rsquo;s canticle, Luke 2:29&ndash;32)</li>
                  <li>Antiphon of Our Lady (varies by season: <em>Salve Regina</em> / <em>Alma Redemptoris</em> / <em>Ave Regina Caelorum</em> / <em>Regina Caeli</em>)</li>
                  <li>Closing blessing</li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed">
                The <strong>Nunc Dimittis</strong> &mdash; <em>&ldquo;Lord, now you let your servant go in
                peace&hellip;&rdquo;</em> (Luke 2:29) &mdash; is Simeon&rsquo;s prayer of readiness to die having
                seen the Messiah. To end each day with this prayer is to practice the art of dying well:
                surrendering the day, and ultimately one&rsquo;s life, into the hands of God.
              </p>
            </div>

            {/* Highlight Box: Three Canticles */}
            <div className="bg-amber-50 border-l-4 border-amber-500 rounded-lg p-8">
              <h3 className="text-xl font-bold text-amber-900 mb-4">The Three Great Canticles</h3>
              <p className="text-amber-800 leading-relaxed mb-4">
                The three Gospel canticles mark the three great moments of Christian life:
              </p>
              <div className="space-y-3">
                <p className="text-amber-800">
                  <strong>Benedictus (dawn)</strong> &mdash; Zechariah&rsquo;s song at the new day,
                  like the Incarnation breaking into history.
                </p>
                <p className="text-amber-800">
                  <strong>Magnificat (evening)</strong> &mdash; Mary&rsquo;s praise of total
                  self-gift, the posture of every Christian soul before God.
                </p>
                <p className="text-amber-800">
                  <strong>Nunc Dimittis (night)</strong> &mdash; Simeon&rsquo;s readiness to die
                  in peace, having seen the Salvation of God.
                </p>
              </div>
              <p className="text-amber-700 mt-4 text-sm italic">
                The entire arc of Christian life &mdash; Incarnation, self-gift, and peaceful death
                &mdash; is contained in these three songs prayed each day.
              </p>
            </div>

          </div>
        )}

        {/* ==================== TAB 4: STRUCTURE OF THE OFFICE ==================== */}
        {activeTab === 'structure' && (
          <div className="space-y-8">

            {/* Opening */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Music className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Anatomy of an Hour</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Each Hour shares a common skeleton with variation by season, feast, and weekday. Once
                you learn the structure, praying any Hour in any season becomes intuitive. Here is the
                anatomy, element by element.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">The Opening Verse</h3>
                <p className="text-amber-800 italic mb-2">
                  &ldquo;O God, come to my assistance. O Lord, make haste to help me.&rdquo;
                </p>
                <p className="text-amber-700 text-sm italic mb-2">
                  (<em>Deus, in adiutorium meum intende. Domine, ad adiuvandum me festina.</em>)
                </p>
                <p className="text-amber-700 text-sm">
                  Psalm 69:2 &mdash; used since Cassian&rsquo;s time as the opening of every canonical
                  Hour. This single verse acknowledges our complete dependence on God before every
                  prayer. Followed by the Glory Be: <em>&ldquo;Glory to the Father and to the Son and to
                  the Holy Spirit. As it was in the beginning&hellip;&rdquo;</em>
                </p>
              </div>

              <div className="space-y-6">

                <div className="border-l-4 border-amber-300 pl-5">
                  <h3 className="font-semibold text-gray-800 mb-2">The Hymn</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    A brief metrically structured hymn, varying by Hour, day, and season. The ancient
                    Latin hymns of the breviary &mdash; many written by St. Ambrose of Milan (4th c.)
                    &mdash; are among the oldest liturgical poetry of the Western Church. These
                    Ambrosian hymns shaped the entire tradition of Christian hymnody.
                  </p>
                </div>

                <div className="border-l-4 border-amber-300 pl-5">
                  <h3 className="font-semibold text-gray-800 mb-2">Psalms and Canticles</h3>
                  <p className="text-gray-700 text-sm leading-relaxed mb-3">
                    The heart of the Office. The 150 Psalms are distributed across a four-week psalter
                    cycle &mdash; no psalm is repeated within a single week. A person praying all Hours
                    daily prays the entire Psalter in four weeks.
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed mb-3">
                    <strong>Antiphons</strong>: Short phrases sung before and after each psalm or
                    canticle, often drawn from the psalm itself or the liturgical feast. They frame the
                    psalm&rsquo;s meaning for the day, showing how the Church reads the Psalter
                    christologically.
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    <strong>NT Canticles</strong>: The LOTH includes canticles from other OT books (at
                    Morning Prayer) and from the NT (at Evening Prayer): the Canticle of the Lamb
                    (Rev 19:1&ndash;7), Ephesians 1:3&ndash;10, Colossians 1:12&ndash;20, and others.
                  </p>
                </div>

                <div className="border-l-4 border-amber-300 pl-5">
                  <h3 className="font-semibold text-gray-800 mb-2">The Reading (<em>Lectio Brevis</em>)</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    A short Scripture passage (a few verses), varying daily and seasonally. At the Office
                    of Readings, two longer readings: first from Scripture, second from the Fathers of
                    the Church, saints&rsquo; writings, or Church documents &mdash; an inexhaustible
                    treasury spanning two thousand years.
                  </p>
                </div>

                <div className="border-l-4 border-amber-300 pl-5">
                  <h3 className="font-semibold text-gray-800 mb-2">The Responsory (<em>Responsorium Breve</em>)</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    A short verse and response, sung or recited, meditating on the reading just
                    proclaimed. In the monastic tradition, the responsory was chanted at length; in the
                    reformed Office it is brief but retains its contemplative function.
                  </p>
                </div>

              </div>
            </div>

            {/* Gospel Canticles */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">The Gospel Canticles</h2>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-yellow-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-yellow-900 mb-2">Morning &mdash; Benedictus</h3>
                  <p className="text-yellow-800 text-sm mb-2">Zechariah (Luke 1:68&ndash;79)</p>
                  <p className="text-yellow-700 text-sm italic">
                    &ldquo;Blessed be the Lord God of Israel, for he has visited and ransomed his
                    people&hellip;&rdquo;
                  </p>
                </div>
                <div className="bg-indigo-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-indigo-900 mb-2">Evening &mdash; Magnificat</h3>
                  <p className="text-indigo-800 text-sm mb-2">Mary (Luke 1:46&ndash;55)</p>
                  <p className="text-indigo-700 text-sm italic">
                    &ldquo;My soul proclaims the greatness of the Lord, my spirit rejoices in God my
                    savior&hellip;&rdquo;
                  </p>
                </div>
                <div className="bg-blue-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-2">Night &mdash; Nunc Dimittis</h3>
                  <p className="text-blue-800 text-sm mb-2">Simeon (Luke 2:29&ndash;32)</p>
                  <p className="text-blue-700 text-sm italic">
                    &ldquo;Lord, now you let your servant go in peace; your word has been
                    fulfilled&hellip;&rdquo;
                  </p>
                </div>
              </div>
            </div>

            {/* Intercessions and Lord's Prayer */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-green-700" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Intercessions, Lord&rsquo;s Prayer & Collect</h2>
              </div>

              <div className="space-y-4">
                <div className="bg-green-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-2">Morning Intercessions</h3>
                  <p className="text-green-800 text-sm">
                    Petitions for the day ahead, the work we will do, those we will encounter. The
                    morning intercessions consecrate the coming hours to God.
                  </p>
                </div>
                <div className="bg-green-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-2">Evening Intercessions</h3>
                  <p className="text-green-800 text-sm">
                    Richer and more developed &mdash; petitions for the Church, the world, the dead, and
                    specific needs. Evening prayer carries the accumulated weight of the day and offers
                    it all to God.
                  </p>
                </div>
                <div className="bg-green-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-2">The Lord&rsquo;s Prayer</h3>
                  <p className="text-green-800 text-sm">
                    Prayed at Morning and Evening Prayer &mdash; the summit of all intercession, as
                    Christ himself taught it (Matt 6:9&ndash;13; Luke 11:2&ndash;4).
                  </p>
                </div>
                <div className="bg-green-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-2">Collect (Closing Prayer)</h3>
                  <p className="text-green-800 text-sm">
                    The presidential prayer, drawn from the sacramentary, varying daily and seasonally.
                    It &ldquo;collects&rdquo; the prayers of all who have prayed this Hour and presents
                    them to the Father through the Son.
                  </p>
                </div>
              </div>
            </div>

            {/* Highlight: Patristic Treasury */}
            <div className="bg-amber-50 border-l-4 border-amber-500 rounded-lg p-8">
              <h3 className="text-xl font-bold text-amber-900 mb-4">The Patristic Treasury</h3>
              <p className="text-amber-800 leading-relaxed">
                The Office of Readings includes texts from the Apostolic Fathers (Clement of Rome,
                Ignatius, Polycarp), great medieval theologians (Bernard, Aquinas, Bonaventure),
                Reformation-era saints (Thomas More, Teresa of Avila, John of the Cross), and modern
                writers (Newman, Th&eacute;r&egrave;se, Edith Stein). Over four years of readings, you
                encounter the entire tradition of Catholic thought &mdash; not as a historical curiosity
                but as a living voice addressing you today.
              </p>
            </div>

          </div>
        )}

        {/* ==================== TAB 5: OBLIGATION & LAITY ==================== */}
        {activeTab === 'obligation-and-laity' && (
          <div className="space-y-8">

            {/* Who Is Bound */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Who Is Required to Pray the LOTH</h2>
              </div>

              <div className="space-y-4">
                <div className="bg-red-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-red-900 mb-2">Ordained Priests</h3>
                  <p className="text-red-800 text-sm mb-2">
                    Bound to pray the full LOTH daily &mdash; all five major Hours (Office of Readings,
                    Lauds, one daytime Hour, Vespers, Compline) &mdash; by universal law. This obligation
                    dates to at least the Council of Trent and has been maintained in the 1983 Code of
                    Canon Law.
                  </p>
                  <p className="text-red-700 text-xs italic">Canon 276 &sect;2; GILH &sect;29</p>
                </div>

                <div className="bg-orange-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-orange-900 mb-2">Permanent Deacons</h3>
                  <p className="text-orange-800 text-sm mb-2">
                    Bound to pray Lauds and Vespers daily.
                  </p>
                  <p className="text-orange-700 text-xs italic">GILH &sect;29</p>
                </div>

                <div className="bg-yellow-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-yellow-900 mb-2">Religious (Clergy and Vowed Religious)</h3>
                  <p className="text-yellow-800 text-sm">
                    According to their Rule and constitutions. Some are bound to the full Office in
                    choir; others to certain Hours. The Benedictine tradition binds its members to the
                    full daily Office &mdash; the Opus Dei &mdash; in community.
                  </p>
                </div>

                <div className="bg-green-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-2">Laity</h3>
                  <p className="text-green-800 text-sm mb-2">
                    <strong>NOT bound by law</strong>; strongly encouraged.
                  </p>
                  <p className="text-green-800 text-sm italic mb-2">
                    <em>Sacrosanctum Concilium</em> &sect;100: &ldquo;Pastors of souls should see to it that
                    the chief Hours, especially Vespers, are celebrated in common in church on Sundays
                    and on the more solemn feasts.&rdquo;
                  </p>
                  <p className="text-green-800 text-sm italic">
                    GILH &sect;27: &ldquo;Lay people&hellip; are encouraged to celebrate the Liturgy of
                    the Hours.&rdquo;
                  </p>
                </div>
              </div>
            </div>

            {/* How Laypeople Can Pray */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">How Laypeople Can Pray the LOTH</h2>
              </div>

              <div className="space-y-4 mb-6">
                <div className="bg-blue-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-2">Start with Night Prayer (Compline)</h3>
                  <p className="text-blue-800 text-sm">
                    Very short (&sim;10 minutes). The texts rotate only within a single week &mdash; easy
                    to learn by heart. Ending the day in the Church&rsquo;s prayer is itself
                    transformative and is the most widely recommended first step.
                  </p>
                </div>
                <div className="bg-blue-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-2">Morning and Evening Prayer Minimum</h3>
                  <p className="text-blue-800 text-sm">
                    Starting with just Lauds and Vespers is the classic recommendation for those new to
                    the Office. These two &ldquo;hinge&rdquo; Hours are the most important and most
                    ancient, and together give the day a clear sacred structure.
                  </p>
                </div>
                <div className="bg-blue-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-2">Office of Readings at Any Time</h3>
                  <p className="text-blue-800 text-sm">
                    Can be done any time of day &mdash; morning, midday, or before sleep as a Vigil.
                    Excellent for spiritual reading; the patristic texts alone justify daily prayer of
                    this Hour.
                  </p>
                </div>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">Physical Forms of the LOTH</h3>
                <ul className="space-y-2 text-amber-800 text-sm">
                  <li><strong>4-volume <em>Liturgia Horarum</em></strong> &mdash; The complete Latin edition</li>
                  <li><strong>4-volume <em>Liturgy of the Hours</em></strong> &mdash; ICEL English translation (1974&ndash;1975); standard for clergy and religious; beautiful but expensive</li>
                  <li><strong>1-volume <em>Christian Prayer</em></strong> &mdash; Abbreviated form with Lauds, Vespers, Compline, and some Office of Readings; excellent for laypeople; affordable</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Digital Resources</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li><strong>iBreviary</strong> (app) &mdash; Full LOTH in multiple languages; free or paid</li>
                  <li><strong>Universalis</strong> (app/website) &mdash; Beautiful presentation; full Office with audio; subscription</li>
                  <li><strong>DivineOffice.org</strong> &mdash; Free audio recordings of the Hours prayed communally; very accessible for beginners</li>
                  <li><strong>Hallow app</strong> &mdash; Includes guided versions of some Hours; popular among younger Catholics</li>
                  <li><strong>LiturgyoftheHours.app</strong> &mdash; Simple, clean interface; good for those starting out</li>
                </ul>
              </div>
            </div>

            {/* Indulgence */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-purple-700" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Plenary Indulgence</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                A plenary indulgence is attached to the communal celebration of Lauds or Vespers (with
                at least one other person present), with the usual conditions: sacramental Confession,
                Eucharistic Communion, prayer for the Holy Father&rsquo;s intentions, and detachment from
                all sin. This is the Church&rsquo;s way of signaling the extraordinary spiritual value
                she places on the communal prayer of the Hours.
              </p>
            </div>

            {/* Highlight */}
            <div className="bg-amber-50 border-l-4 border-amber-500 rounded-lg p-8">
              <h3 className="text-xl font-bold text-amber-900 mb-4">Don&rsquo;t Let Complexity Intimidate You</h3>
              <p className="text-amber-800 leading-relaxed">
                Start with Night Prayer (Compline) &mdash; it takes 10 minutes, the texts rotate only
                within a single week, and ending the day in the Church&rsquo;s prayer is itself
                transformative. Millions of Catholics have discovered the LOTH late in life and wish
                they had started sooner. The Office is not a spiritual achievement; it is a gift waiting
                to be received.
              </p>
            </div>

          </div>
        )}

        {/* ==================== TAB 6: THE LITURGICAL YEAR ==================== */}
        {activeTab === 'liturgical-year-connection' && (
          <div className="space-y-8">

            {/* Intro */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The LOTH & the Liturgical Year</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                The LOTH and the Mass share the same calendar. Every day of the liturgical year &mdash;
                from Advent through Ordinary Time &mdash; shapes both the Mass readings and the Office.
                The antiphons, responsories, readings, and hymns of the LOTH all reflect the season.
                To pray the Office is to live inside the liturgical year with extraordinary intensity.
              </p>
            </div>

            {/* Advent and Christmas */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-purple-700" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Advent & Christmas</h2>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-gray-800 mb-3">The O Antiphons (December 17&ndash;23)</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The great <em>O Antiphons</em> &mdash; sung before the Magnificat at Vespers on the
                  seven days before Christmas Eve &mdash; are among the most beautiful texts in the
                  entire Office. Each begins with &ldquo;O&rdquo; and addresses the Messiah under a
                  title drawn from the Old Testament:
                </p>
                <div className="bg-purple-50 p-5 rounded-lg">
                  <ul className="text-purple-800 text-sm space-y-1">
                    <li>Dec 17 &mdash; <em>O Sapientia</em> &mdash; O Wisdom</li>
                    <li>Dec 18 &mdash; <em>O Adonai</em> &mdash; O Lord</li>
                    <li>Dec 19 &mdash; <em>O Radix Jesse</em> &mdash; O Root of Jesse</li>
                    <li>Dec 20 &mdash; <em>O Clavis David</em> &mdash; O Key of David</li>
                    <li>Dec 21 &mdash; <em>O Oriens</em> &mdash; O Rising Sun</li>
                    <li>Dec 22 &mdash; <em>O Rex Gentium</em> &mdash; O King of Nations</li>
                    <li>Dec 23 &mdash; <em>O Emmanuel</em> &mdash; O God-with-us, come and save us</li>
                  </ul>
                </div>
                <p className="text-gray-700 text-sm mt-3 italic">
                  These ancient antiphons are the source of the Advent hymn <em>O Come, O Come
                  Emmanuel</em>. The initial letters of the titles, read backwards in Latin, spell
                  &ldquo;ero cras&rdquo; &mdash; &ldquo;I will be there tomorrow.&rdquo;
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed">
                At Christmas, the Office of Readings contains both the genealogy from Matthew and the
                prologue of John (1:1&ndash;18). The Liturgy of the Hours makes Christmas an octave of
                celebration, not just a single day &mdash; the entire week rings with the mystery of the
                Incarnation.
              </p>
            </div>

            {/* Lent and Holy Week */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                  <Globe className="w-6 h-6 text-gray-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Lent, Holy Week & the Triduum</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                During Lent, the LOTH takes on a penitential character. The <em>Alleluia</em> antiphon
                is suppressed &mdash; its absence is itself a form of liturgical fasting. The Office of
                Readings includes patristic meditations on Lenten themes: fasting, baptismal renewal,
                the slow approach to Easter. Many parishes celebrate Vespers during Lent with the
                Liturgy of the Hours as communal prayer.
              </p>

              <div className="bg-gray-50 p-5 rounded-lg mb-4">
                <h3 className="font-semibold text-gray-800 mb-2">Holy Week & the Triduum</h3>
                <p className="text-gray-700 text-sm mb-3">
                  The LOTH in Holy Week is deeply moving. On Good Friday, the Office of Readings
                  includes Melito of Sardis&rsquo;s <em>Easter Homily</em> (2nd century) &mdash; one of
                  the most beautiful and theologically rich texts in the entire Office:
                  <em> &ldquo;He who hung the earth is hanging; he who fixed the heavens has been
                  fixed&hellip;&rdquo;</em>
                </p>
                <p className="text-gray-700 text-sm">
                  On Holy Saturday morning, Lauds is prayed in the Church&rsquo;s most profound silence
                  &mdash; the silence of the Tomb, the one day in all history when the Body of Christ lay
                  still.
                </p>
              </div>
            </div>

            {/* Easter */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                  <Sun className="w-6 h-6 text-yellow-700" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Easter, Pentecost & Ordinary Time</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                The Easter octave rings with <em>Alleluia</em> suppressed for forty days &mdash; every
                day is a solemnity. The <em>Regina Caeli</em> (&ldquo;Queen of Heaven, rejoice,
                Alleluia&rdquo;) replaces the Marian antiphon at Compline throughout the Easter season.
                At Pentecost, the sequence <em>Veni, Sancte Spiritus</em> is one of the great hymns of
                the Church; the Office of Readings on Pentecost Sunday includes the full account of
                Acts 2.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>The Sanctoral Cycle</strong>: Each saint&rsquo;s feast day brings proper
                antiphons, readings from the saint&rsquo;s writings (or hagiographic texts) in the
                Office of Readings, and a proper Collect. Over time, praying the LOTH means absorbing
                the lives and teachings of hundreds of saints &mdash; a continuous apprenticeship in
                holiness.
              </p>

              <p className="text-gray-700 leading-relaxed">
                <strong>Sunday Vespers and the Lord&rsquo;s Day</strong>: In the early Church, Sunday
                Vespers was a major communal celebration &mdash; second only to the Sunday Eucharist.
                <em> Sacrosanctum Concilium</em> called for its restoration. Where communities celebrate
                Sunday Vespers, there is a profound sense of the Lord&rsquo;s Day as the
                &ldquo;eighth day&rdquo; &mdash; a foretaste of eternity, the day that has no evening.
              </p>
            </div>

            {/* Cross-links */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Related Topics</h2>
              </div>
              <div className="grid sm:grid-cols-3 gap-4">
                <a
                  href="/commentary/liturgical-calendar"
                  className="bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  <h3 className="font-semibold text-blue-900 mb-1">The Liturgical Calendar</h3>
                  <p className="text-blue-700 text-sm">Seasons, feasts, and the structure of the Church year</p>
                </a>
                <a
                  href="/history/mass-history"
                  className="bg-amber-50 p-4 rounded-lg hover:bg-amber-100 transition-colors"
                >
                  <h3 className="font-semibold text-amber-900 mb-1">History of the Mass</h3>
                  <p className="text-amber-700 text-sm">From the Last Supper through the Roman Rite today</p>
                </a>
                <a
                  href="/prayer/overview"
                  className="bg-green-50 p-4 rounded-lg hover:bg-green-100 transition-colors"
                >
                  <h3 className="font-semibold text-green-900 mb-1">What Is Prayer?</h3>
                  <p className="text-green-700 text-sm">Catholic teaching on the forms and nature of prayer</p>
                </a>
              </div>
            </div>

            {/* Sources */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                  <Scroll className="w-6 h-6 text-gray-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Sources & Further Reading</h2>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li><strong>CCC 1174&ndash;1178</strong> &mdash; The Liturgy of the Hours</li>
                <li><strong>CCC 2768&ndash;2772</strong> &mdash; The Lord&rsquo;s Prayer in the Hours</li>
                <li><strong><em>Sacrosanctum Concilium</em> &sect;&sect;83&ndash;101</strong> (Vatican II, 1963)</li>
                <li><strong>GILH</strong> &mdash; General Instruction of the Liturgy of the Hours</li>
                <li><strong><em>Laudis Canticum</em></strong> (Paul VI, 1971) &mdash; Apostolic Constitution promulgating the reformed Office</li>
                <li><strong>Robert Taft SJ</strong>, <em>The Liturgy of the Hours in East and West</em></li>
                <li><strong>Aelred Squire OP</strong>, <em>Asking the Fathers</em></li>
                <li><strong>William Storey</strong>, <em>The Complete Liturgy of the Hours</em></li>
                <li><strong>Canon 276 &sect;2</strong>, 1983 Code of Canon Law</li>
                <li><a href="https://universalis.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Universalis.com</a></li>
                <li><a href="https://divineoffice.org" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">DivineOffice.org</a></li>
              </ul>
            </div>

          </div>
        )}

      </div>
    </div>
  )
}
