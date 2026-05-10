'use client'

import { useState } from 'react'
import {
  Flame,
  BookOpen,
  Star,
  Globe,
  Users,
  Heart,
  Wind,
  Compass,
  ArrowRight,
  Scale,
} from 'lucide-react'

type TabId =
  | 'origins'
  | 'gifts-of-the-spirit'
  | 'papal-endorsements'
  | 'charis'
  | 'ccr-vs-pentecostalism'
  | 'how-to-participate'

const tabs: { id: TabId; label: string }[] = [
  { id: 'origins', label: 'Origins' },
  { id: 'gifts-of-the-spirit', label: 'Gifts of the Spirit' },
  { id: 'papal-endorsements', label: 'Papal Endorsements' },
  { id: 'charis', label: 'CHARIS' },
  { id: 'ccr-vs-pentecostalism', label: 'CCR vs. Pentecostalism' },
  { id: 'how-to-participate', label: 'How to Participate' },
]

export default function CharismaticRenewalPage() {
  const [activeTab, setActiveTab] = useState<TabId>('origins')

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Catholic Charismatic Renewal
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Born at Duquesne in 1967, now 160 million strong &mdash; the CCR is a movement of the
            Holy Spirit within the Catholic Church, not a denomination, bringing renewal to
            sacramental, Marian, and papal faith.
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

        {/* ==================== TAB 1: ORIGINS ==================== */}
        {activeTab === 'origins' && (
          <div className="space-y-8">

            {/* Card 1: The Context */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Context (1960s)</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The Second Vatican Council (1962&ndash;1965) had called for renewal in the Church.
                Among laypeople and theologians, there was a growing hunger for a deeper, more
                conscious experience of the Holy Spirit promised in the New Testament. Vatican II&rsquo;s
                constitutions and decrees opened the windows of the Church to fresh air &mdash; and
                for many, that meant a rediscovery of the charismatic dimension that had always been
                present in the Church but had often gone unnoticed.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                The Council&rsquo;s <em>Lumen Gentium</em> &sect;12 explicitly affirmed charisms as
                integral to the life of the Church: <em>&ldquo;These charismatic gifts, whether they
                are the more outstanding or the more simple and widely diffused, are to be received
                with thanksgiving and consolation, for they are perfectly suited to and useful for
                the needs of the Church.&rdquo;</em> This conciliar statement gave theological
                legitimacy to what was about to happen in Pittsburgh, Pennsylvania in February 1967.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  Lumen Gentium &sect;12 (Vatican II, 1964)
                </h3>
                <p className="text-blue-800 italic">
                  &ldquo;It is not only through the sacraments and the ministries of the Church that the
                  Holy Spirit sanctifies and leads the people of God and enriches it with virtues, but,
                  allotting his gifts to everyone according as he wills, he distributes special graces
                  among the faithful of every rank.&rdquo;
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed">
                The generation of Catholics who came of age in the 1960s had lived through the
                extraordinary experience of an ecumenical council. They had seen bishops and
                theologians speak with renewed freshness about Scripture, the liturgy, the Holy
                Spirit, and the mission of the Church. Into this prepared soil, the charismatic
                renewal took root.
              </p>
            </div>

            {/* Card 2: The Duquesne Weekend */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Flame className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Duquesne Weekend (February 17&ndash;19, 1967)</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The founding event of the CCR in the United States &mdash; and effectively in the
                modern Catholic Church worldwide &mdash; was a weekend retreat held at the
                &ldquo;Ark and the Dove&rdquo; retreat house on the campus of Duquesne University
                in Pittsburgh, Pennsylvania. A group of about 25 students and faculty gathered
                for what was billed as a simple spiritual retreat.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                In preparation, several participants had been reading David Wilkerson&rsquo;s
                <em> The Cross and the Switchblade</em> &mdash; a Protestant charismatic text about
                ministry among street gangs &mdash; and <em>Catholic Pentecostals</em> by Kevin
                Ranaghan. They had also been meeting weekly for prayer and asking God to renew
                the gifts of the Spirit in their lives. The preparation was not spectacular: it
                was marked by Scripture reading, prayer, and sincere desire.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                During the Saturday night prayer meeting in the chapel, a student spontaneously
                picked up the Bible and opened it to Acts 2 &mdash; the account of Pentecost.
                Within hours, many in the group experienced what they described as a profound
                and unmistakable encounter with the Holy Spirit: some spoke in tongues for the
                first time, others experienced deep peace, prophecy, and a burning sense of
                God&rsquo;s presence. The atmosphere was not hysteria but awe.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">Key Figures at Duquesne</h3>
                <ul className="space-y-2 text-amber-800">
                  <li><strong>Patrick Bourgeois</strong> &mdash; the first to receive the gift of tongues that weekend</li>
                  <li><strong>Ralph Keifer</strong> &mdash; a theology instructor who helped lead the retreat</li>
                  <li><strong>David Mangan</strong> &mdash; a student whose experience on the chapel stairs became iconic in CCR history</li>
                  <li><strong>Kevin and Dorothy Ranaghan</strong> &mdash; who documented the early events and wrote <em>Catholic Pentecostals Today</em></li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <p className="text-green-800 italic text-base leading-relaxed">
                  The Duquesne Weekend was not an explosion from nowhere. It was prepared for by
                  prayer, Scripture reading, and a genuine desire for God. Many who were there said
                  that what they experienced was not foreign to Catholicism but was a rediscovery of
                  what their sacraments already contained &mdash; the living power of the Holy Spirit
                  poured out at Baptism and Confirmation.
                </p>
              </div>
            </div>

            {/* Card 3: Spread */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Globe className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">From Pittsburgh to the World</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The experience spread with remarkable speed. Within two months of the Duquesne
                Weekend, similar prayer meetings were happening at Notre Dame, Michigan State, and
                other Catholic universities across the United States. The first national CCR
                conference was held at Notre Dame in 1967 with only 87 participants. By 1973,
                the annual Notre Dame conference had grown to 22,000 attendees.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                The <strong>Word of God community</strong> in Ann Arbor, Michigan became one of
                the most influential early centers of the CCR, developing structured formation
                programs, teaching materials, and covenant community life that would be replicated
                around the world. The community&rsquo;s <em>Life in the Spirit Seminars</em> became
                the standard entry point for new participants worldwide.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                From the USA, the CCR spread rapidly to Latin America, Europe, Africa, and Asia.
                By the 1980s it was present in over 100 countries. The pivotal moment of
                international visibility came on <strong>Pentecost Sunday 1975</strong>, when the
                International Congress of the Charismatic Renewal in Rome brought 10,000
                charismatics to St. Peter&rsquo;s Square for a meeting with Pope Paul VI &mdash;
                who called the renewal &ldquo;a chance for the Church.&rdquo;
              </p>

              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">The Name Explained</h3>
                <p className="text-amber-800 leading-relaxed">
                  The movement is called &ldquo;charismatic&rdquo; from the Greek <em>charisma</em>
                  (gift of grace) and &ldquo;renewal&rdquo; because it understood itself not as
                  creating something new but as recovering what was always present in the Church
                  &mdash; the power of the Holy Spirit poured out at Pentecost (Acts 2) and
                  conferred in every Baptism and Confirmation. It is a renewal of what already
                  exists, not a replacement for it.
                </p>
              </div>
            </div>

          </div>
        )}

        {/* ==================== TAB 2: GIFTS OF THE SPIRIT ==================== */}
        {activeTab === 'gifts-of-the-spirit' && (
          <div className="space-y-8">

            {/* Card 1: Two Categories */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Wind className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Two Categories of Gifts</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Catholic theology distinguishes two main categories of gifts given by the Holy
                Spirit. Understanding this distinction is essential to understanding what the CCR
                claims and what it does not claim.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-900 mb-3">
                    Sanctifying Gifts (Isaiah 11:2&ndash;3)
                  </h3>
                  <p className="text-blue-800 mb-3 text-sm">
                    Confirmed in the rite of Confirmation; given for the personal holiness of
                    the recipient:
                  </p>
                  <ul className="text-blue-700 text-sm space-y-1">
                    <li>Wisdom</li>
                    <li>Understanding</li>
                    <li>Counsel</li>
                    <li>Fortitude</li>
                    <li>Knowledge</li>
                    <li>Piety</li>
                    <li>Fear of the Lord</li>
                  </ul>
                </div>
                <div className="bg-amber-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-amber-900 mb-3">
                    Charisms (1 Cor 12; Rom 12; Eph 4)
                  </h3>
                  <p className="text-amber-800 mb-3 text-sm">
                    Special gifts of the Holy Spirit given for the building up of the Church
                    and the proclamation of the Gospel. The CCR focuses particularly on these:
                  </p>
                  <ul className="text-amber-700 text-sm space-y-1">
                    <li>Word of wisdom, word of knowledge</li>
                    <li>Faith, healing, miraculous powers</li>
                    <li>Prophecy, distinguishing spirits</li>
                    <li>Tongues, interpretation of tongues</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  CCC 799&ndash;801
                </h3>
                <p className="text-blue-800 italic mb-2">
                  &ldquo;Whether extraordinary or simple and humble, charisms are graces of the Holy
                  Spirit which directly or indirectly benefit the Church, ordered as they are to her
                  building up, to the good of men, and to the needs of the world.&rdquo;
                </p>
                <p className="text-blue-700 text-sm">
                  CCC 800: &ldquo;Charisms are to be accepted with gratitude by the person who receives
                  them and by all members of the Church as well... Extraordinary charisms are not to
                  be rashly sought after.&rdquo;
                </p>
              </div>
            </div>

            {/* Card 2: Glossolalia */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Glossolalia: Speaking in Tongues</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The most well-known and most debated charism. In Acts 2, the Apostles spoke in
                foreign languages that were miraculously understood by people of every nation
                present in Jerusalem for Pentecost. This was a sign to unbelievers and a dramatic
                proclamation of the Gospel across linguistic barriers.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Paul in 1 Corinthians 14 distinguishes carefully between tongues as a sign
                for unbelievers and tongues as a personal prayer language between the soul and
                God, not necessarily understood by the intellect: <em>&ldquo;For if I pray in a tongue,
                my spirit prays but my mind is unfruitful&rdquo;</em> (1 Cor 14:14). In CCR practice,
                the latter &mdash; often called &ldquo;praying in the Spirit&rdquo; or &ldquo;singing in the
                Spirit&rdquo; &mdash; is the common experience. It is not necessarily a foreign human
                language; it is understood as a surrender of the tongue to the Spirit as a form
                of praise beyond the capacity of ordinary speech.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Paul also speaks of &ldquo;tongues of men and of angels&rdquo; (1 Cor 13:1) and says
                that he himself speaks in tongues more than all the Corinthians (1 Cor 14:18),
                while also insisting that in the assembly, prophecy is more useful than tongues
                unless there is interpretation (1 Cor 14:5).
              </p>

              <div className="bg-green-50 p-6 rounded-lg">
                <p className="text-green-800 italic leading-relaxed">
                  The CCR does not claim that speaking in tongues is a required sign of the
                  Spirit&rsquo;s presence &mdash; unlike many Pentecostal denominations. The charisms
                  are distributed as the Spirit wills (1 Cor 12:11) and serve the community,
                  not personal prestige. Many faithful CCR members pray in tongues privately;
                  others receive different charisms entirely.
                </p>
              </div>
            </div>

            {/* Card 3: Prophecy and Baptism in the Spirit */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Flame className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Prophecy and Baptism in the Holy Spirit</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Prophecy</strong>: Paul says to &ldquo;earnestly desire to prophesy&rdquo;
                (1 Cor 14:1). In CCR practice, prophecy is understood as speaking a word of
                encouragement, consolation, or exhortation that one believes is prompted by the
                Holy Spirit &mdash; not the same as the canonical prophecy of the Old Testament
                prophets or a new addition to the deposit of faith (which is closed with the death
                of the Apostles). CCC 801 notes that charisms &ldquo;are not to be rashly sought after,
                nor are the fruits of apostolic works to be presumptuously expected from them.&rdquo;
                All prophecy is to be tested against Scripture and Church teaching (1 Thess 5:19&ndash;21).
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Baptism in the Holy Spirit</strong>: This is the central experience of the
                CCR. In Catholic theology, it is carefully understood as a &ldquo;release&rdquo; or
                &ldquo;actualization&rdquo; of the graces already received in the sacraments of
                Baptism and Confirmation &mdash; not a third sacrament, not a second baptism,
                not a correction of a deficient first baptism. CCC 1302&ndash;1305 teaches that
                Confirmation &ldquo;brings an increase and deepening of baptismal grace.&rdquo; The
                Baptism in the Spirit is the conscious, experiential appropriation of what was
                given sacramentally, often through prayer with laying on of hands.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">
                  Why &ldquo;Baptism in the Spirit&rdquo; Is Not a New Sacrament
                </h3>
                <p className="text-amber-800 leading-relaxed">
                  The Church teaches that there are seven sacraments, instituted by Christ,
                  and they cannot be augmented. The &ldquo;Baptism in the Spirit&rdquo; is not
                  an eighth sacrament but a sacramental act (like a blessing or a prayer of
                  intercession) through which God is asked to bring to conscious life what was
                  already given. Francis Sullivan SJ, a leading Catholic theologian of the CCR,
                  described it as &ldquo;a renewal of the grace of Christian initiation.&rdquo;
                </p>
              </div>
            </div>

          </div>
        )}

        {/* ==================== TAB 3: PAPAL ENDORSEMENTS ==================== */}
        {activeTab === 'papal-endorsements' && (
          <div className="space-y-8">

            {/* Intro */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">A Movement Affirmed by Four Popes</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                No modern ecclesial movement has received such consistent and enthusiastic papal
                support across four consecutive pontificates. From Paul VI to Francis, each pope
                has affirmed the CCR in terms that go well beyond polite acknowledgment &mdash;
                calling it &ldquo;a chance for the Church,&rdquo; &ldquo;co-essential&rdquo; to
                the Church&rsquo;s life, a &ldquo;gift of the Lord,&rdquo; and linking it to a
                &ldquo;new Pentecost.&rdquo;
              </p>
            </div>

            {/* Paul VI */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Compass className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Pope Paul VI (1975)</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The pivotal papal encounter came on <strong>May 19, 1975</strong> &mdash; Pentecost
                Sunday &mdash; when Paul VI addressed the International Charismatic Congress in
                Rome, attended by 10,000 charismatics. In his address, the Pope called the CCR
                &ldquo;a chance for the Church and for the world.&rdquo; He asked: &ldquo;How then
                could this &lsquo;spiritual renewal&rsquo; not be a &lsquo;chance&rsquo; for the
                Church and for the world? And how, in this case, could one not take all the means
                necessary to ensure that it remains so?&rdquo;
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  Paul VI, Final Mass Address, St. Peter&rsquo;s Square, May 19, 1975
                </h3>
                <p className="text-blue-800 italic">
                  &ldquo;Nothing is more necessary to this more and more secularized world than the
                  witness of this &lsquo;spiritual renewal&rsquo; that we see the Holy Spirit
                  evoking in the most diverse regions and milieux. It is above all this renewal
                  that we desire.&rdquo;
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed">
                The final Mass on Pentecost Sunday brought 50,000 people to St. Peter&rsquo;s
                Square. Paul VI&rsquo;s endorsement at this moment cemented the CCR&rsquo;s status
                as a legitimate and welcomed movement within the universal Church.
              </p>
            </div>

            {/* John Paul II */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Pope John Paul II (1978&ndash;2005)</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                John Paul II had a deep personal affinity for charismatic spirituality throughout
                his pontificate. At Notre Dame in October 1979 he addressed 1,500 charismatics
                and praised the renewal. He used the phrase &ldquo;new Pentecost&rdquo; repeatedly
                in his teaching. At the CCR International Congress in 1998, he declared: &ldquo;The
                institutional and the charismatic aspects are co-essential to the life and mission
                of the Church.&rdquo;
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  <em>Novo Millennio Ineunte</em> &sect;44 (JPII, 2001)
                </h3>
                <p className="text-blue-800 italic">
                  Calls for &ldquo;a spirituality of communion&rdquo; as the foundational program
                  for the Church in the third millennium &mdash; an aspiration that echoes the
                  CCR&rsquo;s communal and relational dimension at its best.
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed">
                JPII&rsquo;s phrase &ldquo;co-essential&rdquo; for the institutional and charismatic
                dimensions of the Church became a touchstone for CCR theology and was later
                repeated by Benedict XVI and Francis.
              </p>
            </div>

            {/* Benedict XVI */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Pope Benedict XVI (2005&ndash;2013)</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Benedict XVI addressed 350,000 members of ecclesial movements and new communities
                &mdash; including the CCR &mdash; at St. Peter&rsquo;s Square on Pentecost 2006.
                He repeated JPII&rsquo;s formulation: &ldquo;The institutional and charismatic
                dimensions of the Church are co-essential.&rdquo;
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Benedict was personally more reserved about highly experiential forms of religion,
                but he consistently affirmed the CCR&rsquo;s legitimate place in the Church, met
                with CCR leaders in formal audience, and endorsed the creation of CHARIS in its
                planning stages. His theological writings on the Holy Spirit in <em>Jesus of
                Nazareth</em> provided a rich doctrinal foundation that CCR teachers drew upon
                extensively.
              </p>
            </div>

            {/* Francis */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Flame className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Pope Francis (2013&ndash;present)</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Francis has had the most intense personal relationship with the CCR of any pope.
                At Castel Gandolfo on October 1, 2014, speaking at the 40th anniversary gathering
                of CCR in Italy and Europe, he said: &ldquo;You, the Catholic Charismatic Renewal,
                have received a great gift from the Lord. You were born of the will of the Spirit
                as a renewal of grace in the whole Church.&rdquo;
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  Francis, 50th Anniversary of the CCR, June 4, 2017
                </h3>
                <p className="text-blue-800 italic">
                  &ldquo;I expect from you to share with everyone in the Church the grace of Baptism
                  in the Holy Spirit.&rdquo;
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                In 2019, Francis personally established CHARIS (see the CHARIS tab) and addressed
                35,000 charismatics at Rome&rsquo;s Circus Maximus for the 52nd anniversary congress
                with the words: &ldquo;Go, do not be afraid, and serve.&rdquo; Francis also personally
                participates in informal charismatic prayer meetings, having been closely associated
                with CCR communities in Argentina before his election.
              </p>

              <div className="bg-green-50 p-6 rounded-lg">
                <p className="text-green-800 italic leading-relaxed">
                  No modern ecclesial movement has received such consistent and enthusiastic papal
                  support across four pontificates. The CCR&rsquo;s emphasis on the Holy Spirit,
                  personal conversion, communal prayer, Scripture, and evangelization aligns with
                  the central concerns of each pope who has addressed it.
                </p>
              </div>
            </div>

          </div>
        )}

        {/* ==================== TAB 4: CHARIS ==================== */}
        {activeTab === 'charis' && (
          <div className="space-y-8">

            {/* Card 1: What is CHARIS */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Globe className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">What Is CHARIS?</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>CHARIS</strong> &mdash; Catholic Charismatic Renewal International Service
                &mdash; is the official umbrella body for the CCR worldwide. It was established by
                Pope Francis on <strong>June 8, 2019</strong> (the Feast of Pentecost), through a
                decree of the Dicastery for Laity, Family and Life. The name <em>CHARIS</em> is
                itself from the Greek <em>charis</em> (grace, gift), reflecting the movement&rsquo;s
                emphasis on the freely given gifts of the Holy Spirit.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                CHARIS replaces two previous international CCR service bodies that had operated
                in parallel for decades:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-2">
                    ICCRS (founded 1972)
                  </h3>
                  <p className="text-blue-800 text-sm">
                    International Catholic Charismatic Renewal Services &mdash; served prayer
                    groups and individual charismatics worldwide; based at the Vatican.
                  </p>
                </div>
                <div className="bg-amber-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-amber-900 mb-2">
                    Catholic Fraternity (founded 1990)
                  </h3>
                  <p className="text-amber-800 text-sm">
                    Catholic Fraternity of Charismatic Covenant Communities and Fellowships
                    &mdash; served covenant communities and intentional communities within the CCR.
                  </p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">
                CHARIS unifies these two bodies under a single structure with a single canonical
                identity, responding to Francis&rsquo;s call for unity within the renewal.
              </p>
            </div>

            {/* Card 2: Canonical Status and Governance */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Scale className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Canonical Status and Governance</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                CHARIS is recognized by the Holy See as a <strong>private international
                association of the faithful</strong>, governed by statutes approved by the
                Dicastery for Laity, Family and Life. It reports directly to the Dicastery.
                This gives it a formal canonical standing &mdash; it is not a parachurch
                organization but an entity recognized by Church law.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                CHARIS is led by a president and a board representing the geographic and
                cultural diversity of the CCR worldwide. Its secretariat is based in Rome
                (formerly at the Pontifical University of St. Thomas Aquinas, the Angelicum).
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">
                  Mandate from Pope Francis (June 2019)
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-blue-800">1. Unity</p>
                    <p className="text-blue-700 text-sm">
                      &ldquo;All the members of the Renewal in the Catholic Church, under the
                      umbrella of CHARIS, express and strengthen their unity.&rdquo;
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-blue-800">2. Holiness</p>
                    <p className="text-blue-700 text-sm">
                      &ldquo;To help all the baptized to live the grace of Baptism in the Spirit
                      and to exercise the charisms.&rdquo;
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-blue-800">3. Mission</p>
                    <p className="text-blue-700 text-sm">
                      &ldquo;To bring the proclamation of the Gospel, in the power of the Holy
                      Spirit, to every person.&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: Launch and Global Scale */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Launch and Global Scale</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                CHARIS was formally launched at a gathering of <strong>35,000 charismatics</strong>
                at Rome&rsquo;s Circus Maximus on June 8, 2019. Pope Francis addressed the crowd:
                &ldquo;Go, do not be afraid, and serve.&rdquo; The event was a visible sign of the
                CCR&rsquo;s institutional maturity and its place within the universal Church.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                The CCR under CHARIS is present in <strong>235 countries</strong>, with an
                estimated 160 million Catholics involved worldwide &mdash; making it numerically
                the largest Catholic movement in the Church. Each country with significant CCR
                presence has a National Service (NSC) affiliated with CHARIS, coordinating
                formation programs, national congresses, and ecumenical dialogue.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">
                  Notable National Communities
                </h3>
                <ul className="space-y-1 text-amber-800 text-sm">
                  <li><strong>United States</strong>: Catholic Charismatic Renewal Services (CCRS)</li>
                  <li><strong>India</strong>: ICCRS India (one of the oldest and largest national CCR bodies)</li>
                  <li><strong>Philippines</strong>: Catholic Charismatic Renewal of the Philippines (among the largest globally)</li>
                  <li><strong>Brazil</strong>: Renovacao Carismatica Catolica (enormous in size, deeply rooted in parish life)</li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <p className="text-green-800 italic leading-relaxed">
                  The creation of CHARIS represents the Holy See&rsquo;s desire to shepherd the
                  CCR more closely &mdash; providing unity, doctrinal guidance, and connection to
                  the universal Church&rsquo;s structures, while preserving the movement&rsquo;s
                  charismatic vitality and its fundamental orientation to the Holy Spirit.
                </p>
              </div>
            </div>

          </div>
        )}

        {/* ==================== TAB 5: CCR VS. PENTECOSTALISM ==================== */}
        {activeTab === 'ccr-vs-pentecostalism' && (
          <div className="space-y-8">

            {/* Card 1: Why This Distinction Matters */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Scale className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Why This Distinction Matters</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The CCR emerged partly through contact with Protestant Pentecostalism &mdash; the
                Duquesne group was reading Wilkerson&rsquo;s <em>The Cross and the Switchblade</em>,
                a Protestant charismatic text. Many Catholics and non-Catholics confuse the two
                movements or assume the CCR is simply &ldquo;Pentecostalism with rosaries.&rdquo;
                This is deeply mistaken. They share some spiritual experiences but are founded on
                radically different theologies.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-amber-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-amber-900 mb-3">What They Share</h3>
                  <ul className="space-y-2 text-amber-800 text-sm">
                    <li>Emphasis on the Holy Spirit and the charisms (tongues, prophecy, healing)</li>
                    <li>Personal conversion and &ldquo;Baptism in the Spirit&rdquo;</li>
                    <li>Communal prayer with spontaneous expressions of praise</li>
                    <li>Scripture as the living word of God</li>
                    <li>Evangelization and personal witness</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-3">Where They Part Ways</h3>
                  <p className="text-blue-800 text-sm">
                    The differences are not peripheral but go to the heart of Catholic faith:
                    sacraments, Mary, the papacy, the Eucharist, Tradition, and the nature of
                    the Church. The CCR is irrevocably Catholic in all of these.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: Comparison Table */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Fundamental Differences</h2>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-amber-100">
                      <th className="border border-amber-200 p-3 text-left text-amber-900 font-semibold">Feature</th>
                      <th className="border border-amber-200 p-3 text-left text-amber-900 font-semibold">Catholic CCR</th>
                      <th className="border border-amber-200 p-3 text-left text-amber-900 font-semibold">Classical Pentecostalism</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 p-3 font-medium text-gray-800">Sacraments</td>
                      <td className="border border-gray-200 p-3 text-gray-700">Baptism, Confirmation, Eucharist are primary; charisms flow from and return to sacramental life</td>
                      <td className="border border-gray-200 p-3 text-gray-700">No sacraments as efficacious signs; ordinances only (baptism, communion as memorials)</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 p-3 font-medium text-gray-800">Mary</td>
                      <td className="border border-gray-200 p-3 text-gray-700">Strong Marian devotion; Our Lady as Mother of the Church; rosary, scapular widely practiced</td>
                      <td className="border border-gray-200 p-3 text-gray-700">Marian devotion absent or explicitly rejected as unscriptural</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 p-3 font-medium text-gray-800">Papal Authority</td>
                      <td className="border border-gray-200 p-3 text-gray-700">Full obedience to Rome; CCR submitted to the Magisterium; bishops and Dicasteries can evaluate and correct</td>
                      <td className="border border-gray-200 p-3 text-gray-700">No church hierarchy with binding doctrinal authority; <em>sola scriptura</em></td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 p-3 font-medium text-gray-800">Tongues as Sign</td>
                      <td className="border border-gray-200 p-3 text-gray-700">Tongues are ONE charism, not the required evidence of Spirit-baptism</td>
                      <td className="border border-gray-200 p-3 text-gray-700">Tongues as the &ldquo;initial evidence&rdquo; of Spirit-baptism (Assemblies of God position)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 p-3 font-medium text-gray-800">Eucharist</td>
                      <td className="border border-gray-200 p-3 text-gray-700">The Eucharist is the summit of Christian life; charismatic prayer is ordered toward Mass</td>
                      <td className="border border-gray-200 p-3 text-gray-700">No Eucharistic theology; the Lord&rsquo;s Supper is a symbolic memorial only</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 p-3 font-medium text-gray-800">Saints</td>
                      <td className="border border-gray-200 p-3 text-gray-700">Veneration of saints; invoking their intercession as part of the Communion of Saints</td>
                      <td className="border border-gray-200 p-3 text-gray-700">Saints venerated only as examples; not invoked as intercessors</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 p-3 font-medium text-gray-800">Scripture + Tradition</td>
                      <td className="border border-gray-200 p-3 text-gray-700">Bible interpreted within the Church&rsquo;s living Tradition and Magisterium</td>
                      <td className="border border-gray-200 p-3 text-gray-700"><em>Sola scriptura</em>; tradition viewed as human addition to be tested against private interpretation</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Card 3: Ecumenical Dialogue and Suenens */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Ecumenical Dimension</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Since 1972, the Vatican&rsquo;s Pontifical Council for Promoting Christian Unity
                has conducted formal theological dialogue with classical Pentecostals. The CCR
                has served as a natural bridge in this ecumenical conversation: its members share
                common spiritual experiences with Pentecostals while maintaining full Catholic
                identity in doctrine, sacraments, and structure.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Cardinal <strong>L&eacute;on Joseph Suenens</strong> of Belgium, the most prominent
                episcopal champion of the CCR in the 1970s, articulated its Catholic identity with
                elegance: &ldquo;The Renewal is nothing other than the rediscovery of the third
                article of the Creed&rdquo; &mdash; the article that says &ldquo;I believe in the
                Holy Spirit.&rdquo; It is not an import from Protestantism; it is a recovery of
                what the Catholic Creed has always confessed.
              </p>

              <div className="bg-green-50 p-6 rounded-lg">
                <p className="text-green-800 italic leading-relaxed">
                  Cardinal Suenens, <em>A New Pentecost?</em> (1974): &ldquo;The Renewal is
                  nothing other than the rediscovery of the third article of the Creed &mdash; the
                  Holy Spirit. It is profoundly Catholic: ordered to the Incarnation, the sacraments,
                  and the Communion of Saints.&rdquo;
                </p>
              </div>
            </div>

          </div>
        )}

        {/* ==================== TAB 6: HOW TO PARTICIPATE ==================== */}
        {activeTab === 'how-to-participate' && (
          <div className="space-y-8">

            {/* Card 1: Life in the Spirit Seminars */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Life in the Spirit Seminars (LSS)</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The standard 7-week formation program for those new to the CCR. Developed at the
                Word of God community in Ann Arbor, Michigan, in the late 1960s, the Life in the
                Spirit Seminars have been used worldwide for over fifty years to introduce
                Catholics to charismatic renewal.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">
                  The Seven-Week Structure
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <p className="font-semibold text-amber-800 text-sm">Week 1</p>
                    <p className="text-amber-700 text-sm">God&rsquo;s love: the foundation</p>
                  </div>
                  <div>
                    <p className="font-semibold text-amber-800 text-sm">Week 2</p>
                    <p className="text-amber-700 text-sm">Salvation: what Christ has done</p>
                  </div>
                  <div>
                    <p className="font-semibold text-amber-800 text-sm">Week 3</p>
                    <p className="text-amber-700 text-sm">The new life in the Spirit</p>
                  </div>
                  <div>
                    <p className="font-semibold text-amber-800 text-sm">Week 4</p>
                    <p className="text-amber-700 text-sm">Receiving the gifts of the Spirit</p>
                  </div>
                  <div>
                    <p className="font-semibold text-amber-800 text-sm">Week 5 (climax)</p>
                    <p className="text-amber-700 text-sm">Prayer for Baptism in the Holy Spirit</p>
                  </div>
                  <div>
                    <p className="font-semibold text-amber-800 text-sm">Weeks 6&ndash;7</p>
                    <p className="text-amber-700 text-sm">Growth, transformation, service in the community</p>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">
                The LSS is available through most CCR communities and through many parishes
                worldwide. It is recommended as the starting point for anyone wishing to explore
                the CCR seriously.
              </p>
            </div>

            {/* Card 2: Prayer Groups */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Prayer Groups</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The foundational unit of the CCR. Prayer groups typically meet weekly for 1&ndash;2
                hours and follow a characteristic pattern: charismatic praise and worship songs,
                spontaneous prayer in tongues (corporate), prophecies and words of knowledge shared
                with the group, teaching from Scripture, and intercessory prayer. They are open to
                any Catholic.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                If you are attending for the first time, it is encouraged to go with someone
                knowledgeable in CCR spirituality who can help you interpret what you experience.
                A good CCR prayer group will always be linked to a parish and ideally have a
                priest chaplain or deacon guide.
              </p>

              <div className="bg-blue-50 p-5 rounded-lg">
                <p className="text-blue-800 text-sm">
                  <strong>Pastoral Note</strong>: Bishops&rsquo; Conferences of many countries have
                  issued pastoral guidelines for CCR prayer groups. Key principles: prayer groups
                  should be linked to a parish or diocese; charisms should be exercised in an
                  ordered, not disruptive, way (1 Cor 14:40 &mdash; &ldquo;let all things be done
                  decently and in order&rdquo;); formation in Catholic doctrine is essential alongside
                  any charismatic experience.
                </p>
              </div>
            </div>

            {/* Card 3: Covenant Communities */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Covenant Communities</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                More committed forms of CCR life in which members live in proximity, pool some
                resources, meet regularly for formation and prayer, and commit to one another in
                formal covenants. These are not religious orders &mdash; members are laypeople,
                priests, and deacons living in the world &mdash; but they involve a significant
                communal commitment.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">
                  Major Covenant Communities
                </h3>
                <ul className="space-y-2 text-amber-800 text-sm">
                  <li><strong>Emmanuel Community</strong> (France, 1972; now worldwide; ~12,000 members) &mdash; known for its integration of contemplation, evangelization, and mercy for the poor</li>
                  <li><strong>Chemin Neuf</strong> (Lyon, France; 1973) &mdash; ecumenical in spirit, with Protestant members alongside Catholics, active in family ministry and formation</li>
                  <li><strong>Word of God</strong> (Ann Arbor, Michigan; 1967) &mdash; the original large covenant community; pioneered LSS and CCR formation materials</li>
                  <li><strong>Sword of the Spirit</strong> (international network; 1982) &mdash; includes both Catholic and Protestant communities in formal association</li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed">
                Covenant communities are not for everyone. They require genuine commitment and
                should be entered only after discernment, ideally under the guidance of a spiritual
                director. Visiting a community&rsquo;s retreat or conference before making any
                commitment is strongly recommended.
              </p>
            </div>

            {/* Card 4: Discernment Criteria */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Compass className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Discernment Criteria and Cautions</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The Church does not require anyone to seek charismatic experiences. They are
                freely given by the Spirit. You do not need to speak in tongues to be holy.
                The following criteria help distinguish a genuinely Catholic CCR community from
                one that has drifted:
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                  <span className="text-amber-700 font-bold text-lg mt-0.5">1</span>
                  <div>
                    <p className="font-semibold text-gray-800">Parish Connection</p>
                    <p className="text-gray-600 text-sm">A sound CCR prayer group has a chaplain (priest or deacon) or is formally linked to a parish priest. Isolation from the local Church is a warning sign.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                  <span className="text-amber-700 font-bold text-lg mt-0.5">2</span>
                  <div>
                    <p className="font-semibold text-gray-800">Order in Prayer</p>
                    <p className="text-gray-600 text-sm">1 Cor 14:40 &mdash; &ldquo;let all things be done decently and in order.&rdquo; Genuine CCR prayer is fervent but not chaotic; it builds up the community rather than overwhelming individuals.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                  <span className="text-amber-700 font-bold text-lg mt-0.5">3</span>
                  <div>
                    <p className="font-semibold text-gray-800">Catholic Doctrinal Formation</p>
                    <p className="text-gray-600 text-sm">Formation in the Catechism, sacramental theology, Mariology, and Church history must accompany any charismatic experience. Experience without doctrine is unstable.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                  <span className="text-amber-700 font-bold text-lg mt-0.5">4</span>
                  <div>
                    <p className="font-semibold text-gray-800">Full Sacramental Life</p>
                    <p className="text-gray-600 text-sm">Regular Mass attendance, frequent Confession, and reception of the Eucharist must accompany charismatic experience. Any community that marginalizes the sacraments has drifted from Catholic identity.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                  <span className="text-amber-700 font-bold text-lg mt-0.5">5</span>
                  <div>
                    <p className="font-semibold text-gray-800">Testing Alleged Prophecy</p>
                    <p className="text-gray-600 text-sm">1 Thess 5:19&ndash;21 &mdash; &ldquo;do not quench the Spirit... but test everything.&rdquo; Any alleged prophetic word must be measured against Scripture and Church teaching. Private revelation never has the binding force of Scripture or Magisterium.</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <p className="text-green-800 italic leading-relaxed">
                  If you are drawn to explore the CCR, seek out a solid community with good
                  doctrinal formation. Bring your questions to your pastor or spiritual director.
                  The test of any spiritual experience is its fruits: &ldquo;love, joy, peace,
                  patience, kindness, goodness, faithfulness, gentleness, self-control&rdquo;
                  (Gal 5:22&ndash;23).
                </p>
              </div>
            </div>

            {/* Related Links */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Related Pages</h2>
              <div className="grid sm:grid-cols-3 gap-4">
                <a
                  href="/prayer/overview"
                  className="flex items-center gap-3 p-4 bg-amber-50 rounded-lg hover:bg-amber-100 transition-colors group"
                >
                  <Wind className="w-5 h-5 text-amber-700 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-amber-900 text-sm group-hover:text-amber-800">What Is Prayer?</p>
                    <p className="text-amber-700 text-xs">Overview of Catholic prayer</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-amber-700 ml-auto" />
                </a>
                <a
                  href="/prayer/contemplative-prayer"
                  className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors group"
                >
                  <Heart className="w-5 h-5 text-blue-700 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-blue-900 text-sm group-hover:text-blue-800">Contemplative Prayer</p>
                    <p className="text-blue-700 text-xs">Lectio Divina, mental prayer</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-blue-700 ml-auto" />
                </a>
                <a
                  href="/history/church-divisions"
                  className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
                >
                  <Globe className="w-5 h-5 text-gray-700 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900 text-sm group-hover:text-gray-800">Church Divisions</p>
                    <p className="text-gray-600 text-xs">Including Pentecostalism as Protestant tradition</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-700 ml-auto" />
                </a>
              </div>
            </div>

          </div>
        )}

        {/* ==================== SOURCES (shown on all tabs) ==================== */}
        <div className="bg-white rounded-lg shadow-lg p-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Sources & Further Reading</h2>
          <div className="grid md:grid-cols-2 gap-3 text-sm text-gray-700">
            <div className="p-3 bg-gray-50 rounded">
              <strong>Lumen Gentium &sect;12</strong> (Vatican II, 1964) &mdash; conciliar foundation for charisms in the Church
            </div>
            <div className="p-3 bg-gray-50 rounded">
              <strong>CCC 799&ndash;801</strong> &mdash; Catholic teaching on charisms; their ordering to the Church&rsquo;s mission
            </div>
            <div className="p-3 bg-gray-50 rounded">
              <strong>CCC 1830&ndash;1832</strong> &mdash; the gifts of the Holy Spirit and their relation to moral life
            </div>
            <div className="p-3 bg-gray-50 rounded">
              <strong>CCC 1302&ndash;1305</strong> &mdash; Confirmation as deepening of baptismal grace; basis for Baptism in the Spirit
            </div>
            <div className="p-3 bg-gray-50 rounded">
              <strong>Novo Millennio Ineunte</strong> (John Paul II, 2001) &sect;44 &mdash; spirituality of communion
            </div>
            <div className="p-3 bg-gray-50 rounded">
              <strong>CHARIS Statutes and Decree</strong>, Dicastery for Laity, Family and Life (June 8, 2019)
            </div>
            <div className="p-3 bg-gray-50 rounded">
              <strong>Kevin Ranaghan</strong>, <em>Catholic Pentecostals Today</em> (1969) &mdash; primary account of the Duquesne Weekend
            </div>
            <div className="p-3 bg-gray-50 rounded">
              <strong>Pope Francis</strong>, Address to CCR, 50th Anniversary, June 4, 2017
            </div>
            <div className="p-3 bg-gray-50 rounded">
              <strong>Pope Paul VI</strong>, Address to the International Charismatic Congress, Rome, May 19, 1975
            </div>
            <div className="p-3 bg-gray-50 rounded">
              <strong>Cardinal L&eacute;on Suenens</strong>, <em>A New Pentecost?</em> (Darton, Longman & Todd, 1974)
            </div>
            <div className="p-3 bg-gray-50 rounded">
              <strong>Francis Sullivan SJ</strong>, <em>Charisms and Charismatic Renewal</em> (Servant Books, 1982)
            </div>
            <div className="p-3 bg-gray-50 rounded">
              <strong>CDF</strong>, <em>Letter to the Bishops of the Catholic Church on Some Aspects of Christian Meditation</em> (1989) &mdash; broader spiritual discernment principles
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
