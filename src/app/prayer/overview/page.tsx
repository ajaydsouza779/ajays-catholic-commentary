'use client'

import { useState } from 'react'
import {
  Heart,
  BookOpen,
  Mic,
  CloudRain,
  GraduationCap,
  Star,
  ArrowRight,
} from 'lucide-react'

type TabId =
  | 'what-is-prayer'
  | 'forms-of-prayer'
  | 'vocal-mental-contemplative'
  | 'obstacles-distractions'
  | 'school-of-prayer'
  | 'the-our-father'

const tabs: { id: TabId; label: string }[] = [
  { id: 'what-is-prayer', label: 'What Is Prayer?' },
  { id: 'forms-of-prayer', label: 'Forms of Prayer' },
  { id: 'vocal-mental-contemplative', label: 'Vocal, Mental & Contemplative' },
  { id: 'obstacles-distractions', label: 'Obstacles & Distractions' },
  { id: 'school-of-prayer', label: 'The School of Prayer' },
  { id: 'the-our-father', label: "The Lord's Prayer" },
]

export default function PrayerOverviewPage() {
  const [activeTab, setActiveTab] = useState<TabId>('what-is-prayer')

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            What Is Prayer?
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The Catholic understanding of prayer &mdash; its nature, forms, obstacles, and the
            Lord&rsquo;s own model for how we should pray.
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

        {/* ==================== TAB 1: WHAT IS PRAYER? ==================== */}
        {activeTab === 'what-is-prayer' && (
          <div className="space-y-8">

            {/* Card 1: The Definition */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Raising of the Heart to God</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Prayer is not merely a religious exercise or a list of requests presented to a distant
                deity. At its core, Catholic theology understands prayer as a <em>relationship</em>
                &mdash; a living, personal encounter between the human person and the living God. St.
                John Damascene, quoted in the Catechism at CCC 2559, defines it with elegant simplicity:
                &ldquo;Prayer is the raising of one&rsquo;s mind and heart to God or the requesting of
                good things from God.&rdquo; This raising is not merely intellectual: it is the whole
                person &mdash; intellect, will, memory, imagination, and desire &mdash; being oriented
                toward its origin and end.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                St. Th&eacute;r&egrave;se of Lisieux, Doctor of the Church, captures the intimacy of
                this movement with characteristic simplicity: &ldquo;For me, prayer is a surge of the
                heart; it is a simple look turned toward heaven, it is a cry of recognition and of
                love.&rdquo; (<em>Story of a Soul</em>, Ch. 11). Th&eacute;r&egrave;se demystifies
                prayer: it requires no elaborate technique, no learned vocabulary, no spiritual
                credential. What it requires is the heart &mdash; turned toward God.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">
                  Catechism of the Catholic Church
                </h3>
                <p className="text-blue-800 italic mb-2">
                  &ldquo;Prayer is the raising of one&rsquo;s mind and heart to God or the requesting
                  of good things from God.&rdquo;
                </p>
                <p className="text-blue-700 text-sm">&mdash; St. John Damascene, cited in CCC 2559</p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The Catechism deepens this definition by grounding prayer in <strong>covenant</strong>.
                CCC 2560&ndash;2561 reveal a startling reversal: it is <em>God</em> who thirsts for us
                first. Drawing on John 4:10, where Christ asks the Samaritan woman for a drink, the
                Catechism notes that the marvel of prayer is that God&rsquo;s thirst meets ours.
                Prayer is not the human initiative ascending to a reluctant God; it is the human
                response to a God who has already been calling, already been seeking, already been
                thirsting.
              </p>

              <p className="text-gray-700 leading-relaxed">
                CCC 2562 adds a crucial anthropological note: &ldquo;the heart is the place of
                encounter&rdquo; with God. The &ldquo;heart&rdquo; in biblical and Catholic tradition
                means something deeper than the emotional center: it is the seat of the whole person,
                the place where intellect, will, and love converge. When the Catechism says prayer
                comes from the heart, it means prayer engages the whole person in the act of
                turning toward God &mdash; not just feelings, not just words, not just duty.
              </p>
            </div>

            {/* Card 2: Scripture Foundation */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Scriptural Foundation of Prayer</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The New Testament issues an unqualified call to prayer. In Matthew 7:7&ndash;8,
                Christ commands: &ldquo;Ask, and it will be given to you; seek, and you will find;
                knock, and the door will be opened to you.&rdquo; This is not a conditional promise
                hedged about with qualifications &mdash; it is a direct imperative from the Son of
                God, who knows the Father&rsquo;s heart perfectly. The threefold parallelism
                (ask/seek/knock) escalates in intensity: from verbal petition to active searching to
                persistent, determined knocking.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                St. Paul, writing to the Thessalonians, goes further still: &ldquo;Pray without
                ceasing&rdquo; (1 Thess 5:17). This is not a call to perpetual verbal prayer but to a
                continuous interior orientation of life toward God &mdash; what the tradition calls the
                &ldquo;prayer of the heart&rdquo; or the <em>oratio continua</em> of the Desert
                Fathers. In Luke 18:1, Christ himself introduces the parable of the persistent widow
                with an explicit theological gloss: he told the disciples the parable &ldquo;about the
                necessity of praying always and not losing heart.&rdquo; Perseverance is not
                optional &mdash; it is of the essence of Christian prayer.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">
                  Three Movements of Christian Prayer
                </h3>
                <div className="grid sm:grid-cols-3 gap-4">
                  <div>
                    <p className="font-semibold text-amber-800 mb-1">Praise</p>
                    <p className="text-amber-700 text-sm">Glorifying God for who he is &mdash; not for what he gives, but for his own infinite goodness and beauty.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-amber-800 mb-1">Gratitude</p>
                    <p className="text-amber-700 text-sm">Acknowledging God as the source of every gift, from existence itself to the particular blessings of our lives.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-amber-800 mb-1">Petition</p>
                    <p className="text-amber-700 text-sm">Asking God for what we need &mdash; an act of humility and trust, not of distrust or weakness.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: Communication vs. Communion */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Communication vs. Communion</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                A critical distinction in Catholic prayer theology is the difference between prayer as
                <em>communication</em> and prayer as <em>communion</em>. Communication involves the
                exchange of information or requests &mdash; telling God what we need, thanking him for
                what we have received, even praising him in formal phrases. This is real prayer and
                has genuine value. But the tradition has always insisted that it is not the
                fullness of what prayer is meant to be.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Communion is something deeper: a mutual indwelling, a resting in God&rsquo;s
                presence, a union of wills. The mystics &mdash; John of the Cross, Teresa of
                &Aacute;vila, Thomas Aquinas in his later years &mdash; point to this as the ultimate
                orientation of all Christian prayer. The goal is not merely to talk to God but to be
                united with him. This is why contemplative prayer, which may involve no words at all,
                stands as the highest expression of the impulse that begins in even the simplest
                petition.
              </p>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-green-900 mb-3">
                  The Heart of the Matter
                </h3>
                <p className="text-green-800 mb-3">
                  Prayer is not primarily about changing God&rsquo;s mind or obtaining specific
                  outcomes. It is about aligning our will with his, deepening our knowledge of him,
                  and being transformed by that encounter. The Catechism&rsquo;s Part IV is devoted
                  entirely to prayer for precisely this reason: prayer is not an add-on to Christian
                  life &mdash; it is the <em>breath</em> of Christian life.
                </p>
                <p className="text-green-700 text-sm italic">
                  &ldquo;Seeking the face of God&rdquo; &mdash; CCC 2566 describes prayer as humanity&rsquo;s
                  most fundamental act, begun in the heart of God&rsquo;s first call and never ceasing.
                </p>
              </div>
            </div>

            {/* Sources */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Sources & Further Reading</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  'CCC 2558&ndash;2567 (What is prayer?)',
                  'CCC 2559&ndash;2561 (Covenant dimension)',
                  'CCC 2562 (The heart as place of encounter)',
                  'Matthew 7:7&ndash;8; 1 Thessalonians 5:17; Luke 18:1',
                  'St. Th&eacute;r&egrave;se of Lisieux, <em>Story of a Soul</em>, Ch. 11',
                  'St. John Damascene, <em>De Fide Orthodoxa</em> III, 24',
                ].map((source, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-gray-700 text-sm" dangerouslySetInnerHTML={{ __html: source }} />
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* ==================== TAB 2: FORMS OF PRAYER ==================== */}
        {activeTab === 'forms-of-prayer' && (
          <div className="space-y-8">

            {/* Card 1: Overview */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Six Expressions of Prayer</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The Catechism of the Catholic Church (CCC 2626&ndash;2643) identifies six distinct
                expressions or forms of prayer, each rooted in Scripture and refined by centuries of
                lived Christian experience. These are not competing approaches to God but facets of
                a single jewel &mdash; different angles from which the human heart approaches the
                divine. Most prayer in practice combines several of these forms simultaneously.
              </p>

              {/* Form 1 */}
              <div className="border-l-4 border-amber-400 pl-6 mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">1. Blessing and Adoration</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  CCC 2626&ndash;2628 explains that blessing is a fundamental movement of Christian
                  prayer: God blesses the human heart, and the human heart blesses God in return.
                  <em>Adoration</em> &mdash; from the Latin <em>adoratio</em>, to bow before &mdash;
                  is the creature&rsquo;s fundamental acknowledgment of its Creator: &ldquo;We are
                  not our own; we are his.&rdquo; The Psalms are filled with this double movement:
                  &ldquo;Come, let us worship and bow down; let us kneel before the Lord, our
                  Maker&rdquo; (Psalm 95:6). The Book of Revelation closes with the heavenly
                  liturgy of adoration: &ldquo;Blessing and glory and wisdom and thanksgiving and
                  honor and power and might be to our God&rdquo; (Rev 7:12).
                </p>
              </div>

              {/* Form 2 */}
              <div className="border-l-4 border-blue-400 pl-6 mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">2. Prayer of Petition</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  CCC 2629&ndash;2633 grounds petition in the recognition of our radical dependence on
                  God. Petitionary prayer is not a sign of weak faith &mdash; the Catechism notes
                  that even Christ himself petitioned the Father (&ldquo;Father, let this cup pass
                  from me&rdquo; &mdash; Matt 26:39). CCC 2631 identifies the first movement of
                  petition as asking for forgiveness, because that is the foundational human need
                  before God. Matthew 7:7 sets the scope: &ldquo;Ask, and it will be given to
                  you.&rdquo; Petition expresses trust: we ask because we believe the Father
                  hears and cares.
                </p>
              </div>

              {/* Form 3 */}
              <div className="border-l-4 border-green-400 pl-6 mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">3. Prayer of Intercession</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  CCC 2634&ndash;2636 describes intercession as prayer that leads us to pray as
                  Jesus does &mdash; for others, including enemies. The great biblical models are
                  Abraham interceding for Sodom (Gen 18), Moses pleading for the people after
                  the golden calf (&ldquo;Turn from your fierce wrath; relent and do not bring
                  disaster on your people&rdquo; &mdash; Ex 32:11&ndash;14), and Paul&rsquo;s constant
                  intercession for his communities (&ldquo;I do not cease to give thanks for
                  you&rdquo; &mdash; Col 1:3). Intercession is the ultimate school of charity:
                  when we pray for others, our hearts expand to encompass them.
                </p>
              </div>

              {/* Form 4 */}
              <div className="border-l-4 border-purple-400 pl-6 mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">4. Prayer of Thanksgiving</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  CCC 2637&ndash;2638 insists that every event in life can become an occasion for
                  thanksgiving. The Greek word <em>eucharistia</em> means &ldquo;thanksgiving,&rdquo;
                  and the Eucharist &mdash; the central act of Catholic worship &mdash; is therefore
                  the Church&rsquo;s supreme prayer of thanksgiving. Thanksgiving is not passive
                  contentment; it is the active recognition that everything we have &mdash; being,
                  breath, grace, redemption &mdash; is pure gift. Paul commands it unconditionally:
                  &ldquo;Give thanks in all circumstances&rdquo; (1 Thess 5:18).
                </p>
              </div>

              {/* Form 5 */}
              <div className="border-l-4 border-rose-400 pl-6 mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">5. Prayer of Praise</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  CCC 2639&ndash;2643 distinguishes praise from thanksgiving: thanksgiving is
                  gratitude for what God <em>does</em>; praise is glory given to God for who he
                  <em>is</em>. Praise is the most purely theocentric form of prayer &mdash; it asks
                  nothing, celebrates nothing particular, expects nothing in return. It simply
                  glorifies God because God is infinitely worthy of glory. The 150 Psalms, taken
                  together, form the Church&rsquo;s original school of praise &mdash; covering
                  every human emotion from lament and desolation to ecstatic joy.
                </p>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">
                  The Psalms: The Church&rsquo;s Original Prayer Book
                </h3>
                <p className="text-amber-800 mb-3">
                  The 150 Psalms cover every form of prayer: lament, petition, praise, thanksgiving,
                  intercession, trust, and complaint. Jesus himself prayed the Psalms &mdash; Psalm 22
                  from the cross, Psalm 31 with his final breath. The Church has structured her
                  Liturgy of the Hours around the Psalms for over 1,500 years. To pray the Psalms
                  is to pray with the whole Church, across all time.
                </p>
                <p className="text-amber-700 text-sm italic">
                  &ldquo;Let the Psalter be always in hand: it will be both a source of spiritual
                  progress and a mirror of the life of the soul.&rdquo; &mdash; St. Ambrose,
                  <em>Commentary on Psalm 1</em>
                </p>
              </div>
            </div>

            {/* Sources */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Sources & Further Reading</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  'CCC 2626&ndash;2643 (Forms of prayer)',
                  'CCC 2626&ndash;2628 (Blessing and adoration)',
                  'CCC 2629&ndash;2633 (Petition)',
                  'CCC 2634&ndash;2636 (Intercession)',
                  'CCC 2637&ndash;2638 (Thanksgiving)',
                  'CCC 2639&ndash;2643 (Praise)',
                  'Psalm 95:6; Revelation 7:12; Matthew 7:7',
                  'St. Ambrose, <em>Commentary on Psalm 1</em>',
                ].map((source, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-gray-700 text-sm" dangerouslySetInnerHTML={{ __html: source }} />
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* ==================== TAB 3: VOCAL, MENTAL & CONTEMPLATIVE ==================== */}
        {activeTab === 'vocal-mental-contemplative' && (
          <div className="space-y-8">

            {/* Card 1: Three Expressions */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Mic className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Three Ways the Heart Prays</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                CCC 2700 opens with a clarification that matters: the three expressions of
                prayer &mdash; vocal, mental, and contemplative &mdash; are not three separate
                categories for three different types of Christians. They are three ways the same
                prayer finds expression in human beings who are at once embodied, rational, and
                spiritual. A devout lay person praying the Rosary on a bus may be engaged
                simultaneously in all three: speaking the vocal formulas, meditating on the
                mysteries, and resting in the silent presence of Mary&rsquo;s Son.
              </p>

              {/* Vocal Prayer */}
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-bold text-blue-900 mb-3">Vocal Prayer (CCC 2700&ndash;2704)</h3>
                <p className="text-blue-800 leading-relaxed mb-3">
                  Vocal prayer is prayer expressed in words &mdash; spoken aloud, whispered, or
                  even voiced interiorly. It encompasses the great liturgical prayers (the Mass, the
                  Liturgy of the Hours), traditional devotions (the Rosary, the Angelus, litanies),
                  and spontaneous personal prayer. The incarnational logic of vocal prayer is strong:
                  because we are embodied beings, our bodies participate in prayer. Jesus himself
                  prayed aloud &mdash; &ldquo;Father, into your hands I commend my spirit&rdquo;
                  (Luke 23:46). The Church has never accepted a purely interior, wordless spirituality
                  that despises vocal expression.
                </p>
                <p className="text-blue-700 leading-relaxed">
                  The danger CCC 2702 warns against is <em>mere recitation</em> without interior
                  engagement. Christ&rsquo;s rebuke from Isaiah applies here: &ldquo;This people
                  honors me with their lips, but their hearts are far from me&rdquo; (Mk 7:6).
                  Vocal prayer without interior attention risks becoming the &ldquo;vain
                  repetition&rdquo; Jesus warns against (Matt 6:7). The remedy is not to stop
                  praying vocal prayers but to bring the heart along.
                </p>
              </div>

              {/* Meditation */}
              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-bold text-green-900 mb-3">Meditation (CCC 2705&ndash;2708)</h3>
                <p className="text-green-800 leading-relaxed mb-3">
                  CCC 2705 defines meditation as &ldquo;a prayerful quest engaging thought,
                  imagination, emotion, and desire.&rdquo; Unlike casual reading, meditation
                  re-reads, lingers, questions, savors &mdash; allowing a Scripture passage or
                  doctrinal truth to penetrate the soul. The goal, per CCC 2708, is to turn the
                  text toward <em>action</em>: &ldquo;Christian prayer tries above all to meditate
                  on the mysteries of Christ.&rdquo;
                </p>
                <p className="text-green-800 leading-relaxed mb-3">
                  The Catholic tradition has developed rich methods of meditation. <em>Lectio
                  Divina</em> (sacred reading) &mdash; the Benedictine method of reading,
                  meditating, praying, and contemplating a scriptural text &mdash; remains the
                  primary school of Catholic meditation. The Ignatian method invites the
                  practitioner to place themselves imaginatively within a Gospel scene. The
                  Carmelite tradition developed more affective and volitional forms. The Rosary,
                  properly prayed, is itself a school of meditation on the mysteries of Christ&rsquo;s
                  life through Mary&rsquo;s eyes.
                </p>
              </div>

              {/* Contemplative Prayer */}
              <div className="bg-purple-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-bold text-purple-900 mb-3">Contemplative Prayer (CCC 2709&ndash;2724)</h3>
                <p className="text-purple-800 leading-relaxed mb-3">
                  CCC 2715 offers the most beautiful description: &ldquo;Contemplative prayer is
                  the simple expression of the mystery of prayer. It is a gaze of faith fixed on
                  Jesus, an attentiveness to the Word of God, a silent love.&rdquo; Contemplation
                  does not mean emptying the mind in an Eastern sense; it is a loving, attentive
                  gaze toward a Person &mdash; the Person of Christ.
                </p>
                <p className="text-purple-800 leading-relaxed mb-3">
                  The Catholic tradition distinguishes between <em>acquired</em> contemplation
                  &mdash; the fruit of sustained faithful prayer &mdash; and <em>infused</em>
                  contemplation, which is a pure gift of grace that God grants without any
                  technique or merit on our part. The Desert Fathers of the 3rd&ndash;4th centuries
                  pioneered the pursuit of hesychia (stillness) as the condition for contemplative
                  union. John of the Cross mapped the progressive deepening of contemplation in his
                  poetry and theological treatises.
                </p>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">
                  No Hierarchy of Holiness
                </h3>
                <p className="text-amber-800">
                  The progression from vocal to mental to contemplative prayer is <em>not</em> a
                  spiritual hierarchy in which contemplatives are holier than Rosary-praying
                  grandmothers. The Desert Fathers recognized that a simple person praying from
                  pure faith and love can be more united to God than a technically accomplished
                  contemplative who harbors pride or self-attachment. What matters is the
                  sincerity of the heart&rsquo;s turning, not the sophistication of the method.
                </p>
              </div>
            </div>

            {/* Sources */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Sources & Further Reading</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  'CCC 2700&ndash;2724 (Three expressions of prayer)',
                  'CCC 2700&ndash;2704 (Vocal prayer)',
                  'CCC 2705&ndash;2708 (Meditation)',
                  'CCC 2709&ndash;2724 (Contemplative prayer)',
                  'CCC 2715 (&ldquo;A gaze of faith fixed on Jesus&rdquo;)',
                  'Mark 7:6; Luke 23:46; Matthew 6:7',
                  'St. John of the Cross, <em>The Ascent of Mount Carmel</em>',
                  'St. Teresa of &Aacute;vila, <em>The Interior Castle</em>',
                ].map((source, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-gray-700 text-sm" dangerouslySetInnerHTML={{ __html: source }} />
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* ==================== TAB 4: OBSTACLES & DISTRACTIONS ==================== */}
        {activeTab === 'obstacles-distractions' && (
          <div className="space-y-8">

            {/* Card 1: The Battle */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <CloudRain className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Battle of Prayer</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                CCC 2725 begins with a realistic acknowledgment: &ldquo;Prayer is both a gift of
                grace and a determined response on our part. It always presupposes effort.&rdquo;
                Anyone who has tried to maintain a regular life of prayer knows this is not
                poetry &mdash; it is a description of lived experience. The tradition calls the
                interior struggle of prayer the <em>militia spiritus</em>, the spiritual warfare,
                in which the human will, wounded by original sin and pulled by distraction and
                lethargy, must continually be brought back to God.
              </p>

              {/* Distraction */}
              <div className="border-l-4 border-yellow-400 pl-6 mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Distraction (CCC 2729)</h3>
                <p className="text-gray-700 leading-relaxed">
                  The most common obstacle: the mind wanders, images and anxieties intrude, the
                  grocery list surfaces at the Our Father. CCC 2729 offers a key pastoral counsel:
                  do not pursue each distraction or chase it away with violence, but return
                  gently to the heart. The Catechism notes that distractions often reveal our
                  attachments &mdash; what our minds drift to during prayer is itself diagnostic
                  of what most occupies our hearts. They are not sins; they are invitations to
                  renewed attention.
                </p>
              </div>

              {/* Dryness */}
              <div className="border-l-4 border-blue-400 pl-6 mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Dryness / Aridity (CCC 2731)</h3>
                <p className="text-gray-700 leading-relaxed">
                  Dryness is when prayer feels empty, God seems absent, and the consolations
                  that once made prayer easy have vanished. CCC 2731 warns that dryness is not
                  always caused by negligence or sin &mdash; it can be part of God&rsquo;s own
                  pedagogy. St. John of the Cross analyzed this as the &ldquo;dark night of
                  the senses&rdquo;: God is purifying our love by weaning us from the
                  <em>consolations of prayer</em> so that we learn to seek the <em>God of
                  consolations</em> rather than the consolations themselves. Persevering in dry
                  prayer is often more meritorious than praying in spiritual sweetness.
                </p>
              </div>

              {/* Acedia */}
              <div className="border-l-4 border-red-400 pl-6 mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Lukewarmness / Acedia (CCC 2733)</h3>
                <p className="text-gray-700 leading-relaxed">
                  CCC 2733 describes acedia as &ldquo;a form of depression stemming from lax
                  ascetical practice, decreasing vigilance, carelessness of heart.&rdquo; It is
                  more than laziness: it is a spiritual despondency that makes God&rsquo;s
                  demands seem burdensome and prayer feel pointless. Thomas Aquinas treated acedia
                  as a capital sin in the <em>Summa Theologiae</em> (II&ndash;II, q.35) because it
                  attacks the very foundation of the spiritual life &mdash; the joy and peace of
                  knowing God. The remedy is not forced emotional enthusiasm but disciplined
                  fidelity: showing up even when nothing is felt.
                </p>
              </div>

              {/* Difficulties of Faith */}
              <div className="border-l-4 border-purple-400 pl-6 mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Difficulties of Faith (CCC 2732)</h3>
                <p className="text-gray-700 leading-relaxed">
                  CCC 2732 identifies three related temptations: <em>discouragement</em> (&ldquo;my
                  prayers are not heard&rdquo;), <em>presumption</em> (&ldquo;God must answer in
                  the way I want&rdquo;), and <em>false humility</em> (&ldquo;I am not holy
                  enough to pray, so why bother?&rdquo;). All three misunderstand what prayer
                  is for. Prayer is not a transaction in which sufficient technique or holiness
                  unlocks divine favor; it is a relationship with a Father who loves his
                  children unconditionally and answers in ways that are best for them, not
                  always as they prefer.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">
                  The Remedy: Perseverance
                </h3>
                <p className="text-blue-800 leading-relaxed mb-3">
                  CCC 2742&ndash;2745 returns to the Pauline injunction: &ldquo;Pray constantly&rdquo;
                  (1 Thess 5:17). The key is not to wait until we feel like praying. CCC 2742
                  reminds us that &ldquo;the Holy Spirit&hellip; teaches us to pray and intercedes
                  for us&rdquo; (Rom 8:26&ndash;27): when we cannot pray, the Spirit prays in us.
                  We are never alone in the struggle.
                </p>
                <p className="text-blue-700 text-sm italic">
                  Bl. Teresa of Calcutta endured over 40 years of spiritual darkness &mdash; praying
                  without consolation, without felt presence of God &mdash; yet continued to pray,
                  minister, and smile. Her dark night, revealed only after her death, is one of
                  the great modern witnesses to perseverance.
                </p>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">
                  St. Th&eacute;r&egrave;se on Falling Asleep in Prayer
                </h3>
                <p className="text-amber-800 italic mb-2">
                  &ldquo;I should be distressed about it, but I am not. I bear in mind that little
                  children are just as pleasing to their parents when they are asleep as when
                  they are awake.&rdquo;
                </p>
                <p className="text-amber-700 text-sm">
                  &mdash; St. Th&eacute;r&egrave;se of Lisieux, <em>Story of a Soul</em>
                </p>
              </div>
            </div>

            {/* Sources */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Sources & Further Reading</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  'CCC 2725&ndash;2745 (The battle of prayer)',
                  'CCC 2729 (Distraction)',
                  'CCC 2731 (Dryness and aridity)',
                  'CCC 2732 (Difficulties of faith)',
                  'CCC 2733 (Acedia / lukewarmness)',
                  'CCC 2742&ndash;2745 (Perseverance)',
                  '1 Thessalonians 5:17; Romans 8:26&ndash;27',
                  'Thomas Aquinas, <em>Summa Theologiae</em> II&ndash;II, q.35',
                  'St. John of the Cross, <em>Dark Night of the Soul</em>',
                  'St. Th&eacute;r&egrave;se, <em>Story of a Soul</em>',
                ].map((source, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-gray-700 text-sm" dangerouslySetInnerHTML={{ __html: source }} />
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* ==================== TAB 5: SCHOOL OF PRAYER ==================== */}
        {activeTab === 'school-of-prayer' && (
          <div className="space-y-8">

            {/* Card 1: Who Teaches Us */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Who Teaches Us to Pray?</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                CCC 2683&ndash;2696 treats the &ldquo;school of prayer&rdquo; &mdash; the various
                teachers, communities, and traditions that the Holy Spirit has raised up in the
                Church to form Christian people in the life of prayer. Prayer is not self-taught.
                Even solitary mystics were formed within traditions, under spiritual directors,
                shaped by the liturgy of the Church. The <em>ars orandi</em> (art of prayer) is
                handed on, just as the <em>ars vivendi</em> (art of living) is.
              </p>

              {/* The Family */}
              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-bold text-amber-900 mb-3">The Family: First School of Prayer</h3>
                <p className="text-amber-800 leading-relaxed mb-3">
                  CCC 2685&ndash;2686 calls the family the first school of prayer and the
                  &ldquo;domestic church.&rdquo; Parents are the &ldquo;first heralds of
                  faith&rdquo; (Lumen Gentium 11) and the first teachers of prayer: blessing
                  children before bed, praying before meals, making the Sign of the Cross, praying
                  the Rosary together. These seemingly small acts transmit a whole theology &mdash;
                  that life is lived before God, that God is present at table, that the day is
                  offered and closed in prayer.
                </p>
                <p className="text-amber-700 text-sm italic">
                  Studies of adult Catholics who maintain a robust prayer life consistently find
                  that childhood formation in family prayer is the single strongest predictor
                  of adult faithfulness.
                </p>
              </div>

              {/* The Holy Spirit */}
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-bold text-blue-900 mb-3">The Holy Spirit: Ultimate Teacher</h3>
                <p className="text-blue-800 leading-relaxed mb-3">
                  CCC 2680&ndash;2682 insists that the deepest teacher of prayer is the Holy
                  Spirit himself. Romans 8:26 is the foundational text: &ldquo;The Spirit helps
                  us in our weakness; for we do not know how to pray as we ought, but the Spirit
                  himself intercedes for us with sighs too deep for words.&rdquo; This is not
                  a description of an emergency fallback when our prayer fails; it is a
                  description of the normal condition of Christian prayer. We never pray alone;
                  we always pray in and through and with the Spirit who dwells in us.
                </p>
              </div>

              {/* Priests, Catechesis, Consecrated Life */}
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-green-900 mb-2">Priests & Deacons</h3>
                  <p className="text-green-800 text-sm leading-relaxed">
                    CCC 2686 notes that the ordained are called to form their people in prayer
                    through preaching, liturgy, and personal witness. The priest who prays is
                    a more powerful teacher than the priest who merely teaches about prayer.
                    The Liturgy of the Hours &mdash; which the ordained are bound to pray daily
                    &mdash; is their primary school of prayer.
                  </p>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-purple-900 mb-2">Consecrated Life</h3>
                  <p className="text-purple-800 text-sm leading-relaxed">
                    CCC 2687 honors the role of monasteries and religious communities as
                    &ldquo;schools of prayer for centuries&rdquo; &mdash; Benedictine abbeys,
                    Carmelite convents, mendicant friars. The contemplative life is not
                    marginal to the Church&rsquo;s mission; it is its heart, interceding
                    for the world and embodying the Kingdom that is coming.
                  </p>
                </div>
              </div>

              {/* Saints as Models */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Saints as Models of Prayer</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  CCC 2683 notes: &ldquo;The witnesses who have preceded us into the kingdom,
                  especially those whom the Church recognizes as saints, share in the living
                  tradition of prayer.&rdquo; Each saint embodies a particular charism of prayer
                  that illumines the whole:
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold text-gray-800 mb-1">St. Francis of Assisi</p>
                    <p className="text-gray-600 text-sm">Prayer as total poverty before God, rejoicing in creation as God&rsquo;s gift; the Canticle of the Sun as the fruit of contemplation.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 mb-1">St. Ignatius of Loyola</p>
                    <p className="text-gray-600 text-sm">Prayer as discernment of spirits; the <em>Spiritual Exercises</em> as the great Catholic manual of prayer in action.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 mb-1">St. Th&eacute;r&egrave;se of Lisieux</p>
                    <p className="text-gray-600 text-sm">The Little Way: prayer accessible to all, not as heroic asceticism but as childlike trust in the Father&rsquo;s love.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 mb-1">St. John Vianney</p>
                    <p className="text-gray-600 text-sm">The Cur&eacute; d&rsquo;Ars who spent hours in silent adoration before the Blessed Sacrament; the model of the praying parish priest.</p>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">
                  Prayer in Community
                </h3>
                <p className="text-amber-800">
                  From ancient desert monasteries to modern charismatic prayer groups and parish
                  lectio divina circles, the Church has always recognized that praying together
                  deepens individual prayer. Jesus promised: &ldquo;Where two or three are gathered
                  in my name, I am there among them&rdquo; (Matt 18:20). Community prayer does not
                  replace personal prayer; it feeds and sustains it, and situates the individual
                  within the great stream of the Church&rsquo;s unceasing prayer.
                </p>
              </div>
            </div>

            {/* Sources */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Sources & Further Reading</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  'CCC 2680&ndash;2696 (The school of prayer)',
                  'CCC 2683 (Saints as teachers of prayer)',
                  'CCC 2685&ndash;2686 (Family as first school)',
                  'CCC 2687 (Consecrated life)',
                  'CCC 2688 (Catechesis and prayer)',
                  'Lumen Gentium 11 (parents as heralds of faith)',
                  'Romans 8:26&ndash;27 (Spirit intercedes for us)',
                  'Matthew 18:20',
                  'St. Ignatius, <em>Spiritual Exercises</em>',
                  'St. Francis, <em>Canticle of the Sun</em>',
                ].map((source, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-gray-700 text-sm" dangerouslySetInnerHTML={{ __html: source }} />
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* ==================== TAB 6: THE LORD'S PRAYER ==================== */}
        {activeTab === 'the-our-father' && (
          <div className="space-y-8">

            {/* Card 1: Introduction */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Summary of the Whole Gospel</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Tertullian called the Lord&rsquo;s Prayer &ldquo;the summary of the whole
                gospel&rdquo; (<em>On Prayer</em>, ch. 1). Thomas Aquinas called it &ldquo;the most
                perfect of prayers&rdquo; (<em>Summa Theologiae</em> II&ndash;II, q.83, a.9):
                &ldquo;In it we ask not only for all the things we can rightly desire, but also in the
                order in which they should be desired.&rdquo; The Catechism devotes CCC 2759&ndash;2865
                &mdash; over 100 paragraphs &mdash; to the Our Father alone, making it the longest
                single treatment in Part IV on prayer.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                The setting matters: in Luke 11:1&ndash;2, a disciple watches Jesus at prayer and
                asks, &ldquo;Lord, teach us to pray.&rdquo; Jesus responds not with a treatise on
                prayer but with a <em>prayer</em>: the Our Father. Matthew&rsquo;s version (6:9&ndash;13)
                is the longer, liturgical form used in the Church&rsquo;s worship; Luke&rsquo;s is
                more intimate and condensed. CCC 2759&ndash;2760 notes that the Our Father is at once
                a revelation of the Father&rsquo;s name, a summary of the Kingdom&rsquo;s demands,
                and a model for all prayer.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">
                  Catechism of the Catholic Church
                </h3>
                <p className="text-blue-800 italic mb-2">
                  &ldquo;The Lord&rsquo;s Prayer is truly the summary of the whole gospel.&rdquo;
                </p>
                <p className="text-blue-700 text-sm">&mdash; Tertullian, cited in CCC 2761</p>
              </div>
            </div>

            {/* Card 2: The Petitions */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">The Seven Petitions</h2>

              {/* Our Father */}
              <div className="border-l-4 border-amber-400 pl-6 mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-2">&ldquo;Our Father&rdquo; (CCC 2779&ndash;2785)</h3>
                <p className="text-gray-700 leading-relaxed">
                  The address is itself a revolution. Not &ldquo;My Father&rdquo; &mdash; but
                  <em>Our</em> Father: we pray as a body, as a family, as the Church. CCC 2780
                  explains that we can call God Father only through the Son, in the Spirit &mdash;
                  this address is possible only for the baptized, who have been adopted as children
                  in Christ. The Greek word <em>parresia</em> (boldness) captures the audacity of
                  this address: we approach the Creator of the universe as a child approaches a
                  loving parent.
                </p>
              </div>

              {/* Who art in heaven */}
              <div className="border-l-4 border-blue-400 pl-6 mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-2">&ldquo;Who art in heaven&rdquo; (CCC 2794&ndash;2796)</h3>
                <p className="text-gray-700 leading-relaxed">
                  CCC 2794 notes that &ldquo;heaven&rdquo; here is not a spatial location above
                  the clouds &mdash; it is a mode of being, a quality of transcendence and glory.
                  Heaven is where God&rsquo;s will is done perfectly, and this phrase orients the
                  whole prayer eschatologically: we pray as people whose true home is not yet
                  fully realized, who live between the first and second comings of Christ.
                </p>
              </div>

              {/* Hallowed be thy name */}
              <div className="border-l-4 border-green-400 pl-6 mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-2">&ldquo;Hallowed be thy name&rdquo; (CCC 2807&ndash;2815)</h3>
                <p className="text-gray-700 leading-relaxed">
                  This first petition is a prayer that God&rsquo;s name be recognized as holy &mdash;
                  not because God needs our acknowledgment to be holy, but because the world
                  needs to know it. CCC 2814 links this to Ezekiel 36:23 and to the baptismal
                  vocation: we hallow God&rsquo;s name by holy lives. The petition is both a
                  prayer and a commitment.
                </p>
              </div>

              {/* Thy kingdom come */}
              <div className="border-l-4 border-purple-400 pl-6 mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-2">&ldquo;Thy kingdom come&rdquo; (CCC 2816&ndash;2821)</h3>
                <p className="text-gray-700 leading-relaxed">
                  The Kingdom is already present in Christ but not yet fully manifest &mdash; this
                  tension defines Christian eschatology. CCC 2818 notes that by the Lord&rsquo;s
                  Prayer we are &ldquo;detached from temporal attachments to grow in desire for the
                  Kingdom.&rdquo; The Aramaic <em>Maranatha</em> &mdash; &ldquo;Come, Lord Jesus&rdquo;
                  (Rev 22:20) &mdash; is the briefest expression of this petition, preserved from
                  the earliest Christian liturgy.
                </p>
              </div>

              {/* Thy will be done */}
              <div className="border-l-4 border-rose-400 pl-6 mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-2">&ldquo;Thy will be done&rdquo; (CCC 2822&ndash;2827)</h3>
                <p className="text-gray-700 leading-relaxed">
                  Not passive resignation but active surrender. CCC 2823 identifies the will of
                  God as &ldquo;our salvation&rdquo; (citing 1 Tim 2:4) &mdash; this is not an
                  arbitrary divine demand but the expression of infinite love. The supreme model
                  is Gethsemane (Matt 26:39): &ldquo;Not as I will, but as you will.&rdquo; Christ&rsquo;s
                  prayer in the garden teaches us what this petition really costs &mdash; and what
                  it gives.
                </p>
              </div>

              {/* Daily bread */}
              <div className="border-l-4 border-yellow-400 pl-6 mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-2">&ldquo;Give us this day our daily bread&rdquo; (CCC 2828&ndash;2837)</h3>
                <p className="text-gray-700 leading-relaxed">
                  The Greek word <em>epiousios</em> &mdash; translated &ldquo;daily&rdquo; &mdash; is
                  a uniquely Christian coinage, found nowhere else in Greek literature. Jerome
                  rendered it <em>supersubstantialis</em> (&ldquo;supersubstantial&rdquo;) in the
                  Latin Vulgate of Matthew, hinting at the Eucharistic bread that surpasses all
                  ordinary nourishment. CCC 2837 holds both dimensions together: literal bread
                  (our dependence on God for physical life) and the Eucharist (our dependence on
                  God for eternal life).
                </p>
              </div>

              {/* Forgive us */}
              <div className="border-l-4 border-indigo-400 pl-6 mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-2">&ldquo;And forgive us our trespasses...&rdquo; (CCC 2838&ndash;2845)</h3>
                <p className="text-gray-700 leading-relaxed">
                  The sixth petition is the most demanding precisely because it contains a
                  condition: we ask to be forgiven &ldquo;as we forgive those who trespass against
                  us.&rdquo; Matt 6:14&ndash;15 and CCC 2840 make the connection explicit and
                  sobering: our reception of divine forgiveness is linked to our willingness to
                  extend it. Augustine&rsquo;s <em>Letter 130 to Proba</em> meditates extensively
                  on this as the heart of Christian moral life: the forgiven must become forgivers.
                </p>
              </div>

              {/* Lead us not / deliver us */}
              <div className="border-l-4 border-gray-400 pl-6 mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-2">&ldquo;Lead us not into temptation&hellip; deliver us from evil&rdquo; (CCC 2846&ndash;2865)</h3>
                <p className="text-gray-700 leading-relaxed">
                  This petition does not suggest God tempts us &mdash; James 1:13 explicitly
                  denies it. Rather, we ask not to be led onto the paths that lead to sin, and
                  to be delivered from the Evil One. CCC 2851 notes that &ldquo;evil&rdquo; in
                  Matthew 6:13 is <em>tou ponerou</em> (the Evil One, i.e., the devil) in the
                  original Greek &mdash; a personal opponent, not an abstract force. The doxology
                  (&ldquo;For thine is the kingdom&hellip;&rdquo;) is not in Luke and was added
                  liturgically, drawing on 1 Chronicles 29:11&ndash;13.
                </p>
              </div>
            </div>

            {/* Card 3: Scholar highlight */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-green-900 mb-3">
                  Pope Benedict XVI on the Our Father
                </h3>
                <p className="text-green-800 leading-relaxed mb-3">
                  In <em>Jesus of Nazareth</em> Vol. 1, Ch. 5, Pope Benedict XVI offers a sustained
                  theological meditation on the Lord&rsquo;s Prayer. He argues that the Our Father
                  is not merely a set of requests but a &ldquo;transformation of ourselves&rdquo;:
                  in praying it, we allow our desires to be reshaped by God&rsquo;s desires, our
                  will to be aligned with his. Each petition, Benedict argues, is also a
                  commitment &mdash; a promise to live in the direction of what we pray.
                </p>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">
                  St. Augustine on Praying Well
                </h3>
                <p className="text-amber-800 italic mb-2">
                  &ldquo;If we pray rightly and fittingly, we can say nothing other than what is
                  contained in this prayer of the Lord.&rdquo;
                </p>
                <p className="text-amber-700 text-sm">
                  &mdash; Augustine, <em>Letter 130 to Proba</em>
                </p>
              </div>
            </div>

            {/* Sources */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Sources & Further Reading</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  'CCC 2759&ndash;2865 (The Lord&rsquo;s Prayer)',
                  'CCC 2779&ndash;2785 (&ldquo;Our Father&rdquo;)',
                  'CCC 2816&ndash;2821 (&ldquo;Thy kingdom come&rdquo;)',
                  'CCC 2828&ndash;2837 (&ldquo;Daily bread&rdquo;)',
                  'CCC 2838&ndash;2845 (Forgiveness)',
                  'CCC 2846&ndash;2865 (Temptation and deliverance)',
                  'Matthew 6:9&ndash;13; Luke 11:1&ndash;2',
                  'Tertullian, <em>On Prayer</em>, ch. 1',
                  'Thomas Aquinas, <em>Summa Theologiae</em> II&ndash;II, q.83, a.9',
                  'Augustine, <em>Letter 130 to Proba</em>',
                  'Pope Benedict XVI, <em>Jesus of Nazareth</em> Vol. 1, Ch. 5',
                ].map((source, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-gray-700 text-sm" dangerouslySetInnerHTML={{ __html: source }} />
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* ==================== CROSS-LINKS ==================== */}
        <div className="bg-white rounded-lg shadow-lg p-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Explore Related Topics</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <a
              href="/prayer/rosary"
              className="flex items-center gap-3 p-4 rounded-lg border border-gray-200 hover:border-amber-400 hover:bg-amber-50 transition-colors"
            >
              <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Heart className="w-5 h-5 text-amber-700" />
              </div>
              <div>
                <p className="font-semibold text-gray-800">The Holy Rosary</p>
                <p className="text-gray-500 text-sm flex items-center gap-1">
                  Learn more <ArrowRight className="w-3 h-3" />
                </p>
              </div>
            </a>
            <a
              href="/prayer/contemplative-prayer"
              className="flex items-center gap-3 p-4 rounded-lg border border-gray-200 hover:border-amber-400 hover:bg-amber-50 transition-colors"
            >
              <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Star className="w-5 h-5 text-amber-700" />
              </div>
              <div>
                <p className="font-semibold text-gray-800">Contemplative Prayer</p>
                <p className="text-gray-500 text-sm flex items-center gap-1">
                  Learn more <ArrowRight className="w-3 h-3" />
                </p>
              </div>
            </a>
            <a
              href="/mysteries/public-revelation"
              className="flex items-center gap-3 p-4 rounded-lg border border-gray-200 hover:border-amber-400 hover:bg-amber-50 transition-colors"
            >
              <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-5 h-5 text-amber-700" />
              </div>
              <div>
                <p className="font-semibold text-gray-800">Public Revelation</p>
                <p className="text-gray-500 text-sm flex items-center gap-1">
                  Learn more <ArrowRight className="w-3 h-3" />
                </p>
              </div>
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}
