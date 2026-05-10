'use client'

import { useState } from 'react'
import {
  BookOpen,
  Heart,
  Star,
  Flame,
  Wind,
  AlertTriangle,
  Scale,
  Search,
  ArrowRight,
  Compass,
  Cross,
  Users,
  Eye,
} from 'lucide-react'

type TabId =
  | 'what-is-contemplation'
  | 'lectio-divina'
  | 'jesus-prayer'
  | 'carmelite-tradition'
  | 'ignatian-prayer'
  | 'discernment-cautions'

const tabs: { id: TabId; label: string }[] = [
  { id: 'what-is-contemplation', label: 'What Is Contemplation?' },
  { id: 'lectio-divina', label: 'Lectio Divina' },
  { id: 'jesus-prayer', label: 'The Jesus Prayer' },
  { id: 'carmelite-tradition', label: 'Carmelite Tradition' },
  { id: 'ignatian-prayer', label: 'Ignatian Prayer' },
  { id: 'discernment-cautions', label: 'Discernment & Cautions' },
]

export default function ContemplativePrayerPage() {
  const [activeTab, setActiveTab] = useState<TabId>('what-is-contemplation')

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Contemplative Prayer
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From Lectio Divina to the Jesus Prayer, the Carmelite mystics to the Ignatian Exercises &mdash;
            the rich tradition of Catholic contemplative and mystical prayer.
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

        {/* ==================== TAB 1: WHAT IS CONTEMPLATION? ==================== */}
        {activeTab === 'what-is-contemplation' && (
          <div className="space-y-8">

            {/* Card 1: The Church's Definition */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Eye className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Church&rsquo;s Understanding of Contemplation</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The Catechism of the Catholic Church devotes an entire section to contemplative prayer,
                beginning with the words of St. Teresa of &Aacute;vila &mdash; one of the great Doctors of
                the Church and one of history&rsquo;s most celebrated teachers of prayer. Her definition
                has become the Church&rsquo;s own:
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">
                  CCC 2709 &mdash; Teresa&rsquo;s Definition
                </h3>
                <p className="text-blue-800 italic mb-2">
                  &ldquo;What is contemplative prayer? St. Teresa answers: &lsquo;Contemplative prayer
                  [<em>oraci&oacute;n mental</em>] in my opinion is nothing else than a close sharing
                  between friends; it means taking time frequently to be alone with him who we know
                  loves us.&rsquo;&rdquo;
                </p>
                <p className="text-blue-700 text-sm">&mdash; CCC 2709</p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">
                  CCC 2715 &mdash; A Gaze of Faith
                </h3>
                <p className="text-blue-800 italic mb-2">
                  &ldquo;Contemplative prayer is the simple expression of the mystery of prayer. It is a
                  gaze of faith fixed on Jesus, an attentiveness to the Word of God, a silent love.
                  It achieves real union with the prayer of Christ to the extent that it makes us
                  share in his mystery.&rdquo;
                </p>
                <p className="text-blue-700 text-sm">&mdash; CCC 2715</p>
              </div>

              <p className="text-gray-700 leading-relaxed">
                These two definitions together capture the essence of the Catholic contemplative
                tradition: contemplative prayer is relational (between persons), Christocentric (fixed
                on Jesus), attentive (to the Word), and silent (beyond ordinary verbal communication).
                It is neither an exotic spiritual technique nor an achievement of spiritual virtuosos
                &mdash; it is, at root, friendship with God.
              </p>
            </div>

            {/* Card 2: Acquired vs. Infused Contemplation */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Acquired vs. Infused Contemplation</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The tradition makes an important distinction that helps clarify what we can do and what
                only God can give:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-amber-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-amber-900 mb-2">Acquired (Active) Contemplation</h3>
                  <p className="text-amber-800 text-sm">
                    A disposition we cultivate &mdash; quieting the mind, stilling distraction, resting
                    in God&rsquo;s presence. We can grow in this through practice, fidelity to prayer,
                    and cooperation with grace. It is the fruit of faithful effort over time.
                  </p>
                </div>
                <div className="bg-purple-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-purple-900 mb-2">Infused (Passive) Contemplation</h3>
                  <p className="text-purple-800 text-sm">
                    A gift God gives, not produced by human effort &mdash; what the great mystics
                    describe as mystical union, the dark night, or transforming love. It cannot be
                    manufactured or forced; it can only be received with open hands.
                  </p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Both are part of the same Catholic tradition. Thomas Aquinas in the <em>Summa Theologiae</em>
                (II-II, q.180) treats contemplation as the highest form of the Christian life &mdash;
                not a special vocation for monks, but the natural endpoint of every Christian&rsquo;s
                journey toward God.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">
                  Contemplation vs. Meditation
                </h3>
                <p className="text-amber-800 mb-3">
                  <strong>Meditation</strong> involves active mental work &mdash; thinking, imagining, reasoning
                  about spiritual truths. It is discursive: it moves from one thought to another.
                  <strong> Contemplation</strong> is simpler &mdash; a loving, wordless attention to God beyond
                  concepts, images, and reasoning.
                </p>
                <p className="text-amber-700 text-sm">
                  John of the Cross offers a vivid analogy: meditation is like a child learning to
                  walk &mdash; much effort, deliberate steps. Contemplation is like a grown person
                  walking naturally &mdash; the same movement, but now easy, free, and unreflective.
                  Meditation prepares the soul for contemplation; contemplation is not its replacement
                  but its ripening.
                </p>
              </div>
            </div>

            {/* Card 3: Apophatic and Kataphatic Traditions */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Compass className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Apophatic and Kataphatic Traditions</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Catholic mystical theology recognizes two great approaches to prayer, both ancient,
                both valid, both ultimately needing each other:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-green-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-2">Kataphatic Prayer (<em>Via Positiva</em>)</h3>
                  <p className="text-green-800 text-sm">
                    Using images, words, feelings, concepts, and created beauty to encounter God.
                    The Rosary, the Stations of the Cross, Ignatian imaginative contemplation, and
                    Lectio Divina all draw on kataphatic methods. God is known through what he has
                    made and revealed.
                  </p>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Apophatic Prayer (<em>Via Negativa</em>)</h3>
                  <p className="text-gray-700 text-sm">
                    Stripping away all images and concepts to rest in the divine darkness &mdash;
                    approaching God through what he is <em>not</em>, since his reality surpasses every
                    created category. The apophatic way is found in John of the Cross, the author of
                    <em> The Cloud of Unknowing</em>, and Pseudo-Dionysius (<em>The Divine Names</em>;
                    <em> Mystical Theology</em>).
                  </p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">
                Both ways are valid; both need each other. The kataphatic approach without apophatic
                purification risks confusing our images of God with God himself. The apophatic approach
                without kataphatic grounding risks an empty abstraction. The great Catholic mystics
                typically move through both.
              </p>
            </div>

            {/* Card 4: Contemplation as the Goal of Christian Life */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-purple-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Contemplation as the Goal of Christian Life</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                CCC 2558 reminds us that &ldquo;prayer is the whole life of a Christian&rdquo; &mdash; not an
                activity alongside other activities, but the animating relationship from which all
                else flows. Contemplative prayer is not a specialized department of this life; it
                is its inner depth.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">
                  Vatican II: <em>Perfectae Caritatis</em> (1965), &sect;7
                </h3>
                <p className="text-amber-800 italic mb-2">
                  &ldquo;Those members who are devoted to the contemplative life offer to God a sacrifice
                  of praise; they illuminate the People of God with the richest fruits of holiness.&rdquo;
                </p>
                <p className="text-amber-700 text-sm">
                  The contemplative orders &mdash; Carmelites, Cistercians, Camaldolese, Carthusians
                  &mdash; are not spiritual escapists but intercessors at the heart of the Church&rsquo;s
                  mission. Their prayer sustains the whole Body of Christ.
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-green-900 mb-3">
                  The Little Way: Contemplation for All
                </h3>
                <p className="text-green-800 mb-3">
                  Contemplation is not reserved for monks and nuns. St. Th&eacute;r&egrave;se of Lisieux
                  showed that a simple, childlike love of God &mdash; her &ldquo;Little Way&rdquo; &mdash; is
                  itself a form of contemplation available to all the faithful. Her insight was
                  revolutionary: the ordinary, humble, loving attention to God in the midst of
                  daily duties is as profound as any mystical experience in a cloister.
                </p>
                <p className="text-green-700 text-sm">
                  Named a Doctor of the Church (1997), Th&eacute;r&egrave;se remains one of the most
                  widely read spiritual teachers in Catholic history &mdash; precisely because she
                  made holiness and contemplation accessible.
                </p>
              </div>
            </div>

          </div>
        )}

        {/* ==================== TAB 2: LECTIO DIVINA ==================== */}
        {activeTab === 'lectio-divina' && (
          <div className="space-y-8">

            {/* Card 1: Name, Meaning, and Origins */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Sacred Reading: Name, Meaning, and Origins</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                <em>Lectio Divina</em> means &ldquo;Sacred Reading&rdquo; or &ldquo;Divine Reading&rdquo; in Latin.
                It is a method of praying with Scripture that moves from reading to meditation to
                prayer to contemplation &mdash; a structured yet deeply personal encounter with the
                living Word of God.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                The roots of <em>Lectio Divina</em> lie among the Desert Fathers of the 3rd and 4th
                centuries, who practiced <em>ruminatio</em> &mdash; a Latin word meaning &ldquo;chewing&rdquo;
                or &ldquo;ruminating,&rdquo; as a cow chews its cud. They read the Scriptures slowly,
                memorizing and repeating passages until the words sank from the mind into the heart.
                St. Benedict (480&ndash;547) incorporated this practice into the <em>Rule of St. Benedict</em>
                as a central monastic activity alongside the <em>Opus Dei</em> (the Liturgy of the Hours)
                and manual labor.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">
                  Guigo II: <em>Scala Claustralium</em> (The Ladder of Monks, 12th c.)
                </h3>
                <p className="text-amber-800 mb-3">
                  The classic systematic treatment of <em>Lectio Divina</em> comes from the Carthusian
                  prior Guigo II in his <em>Scala Claustralium</em> (c.1150). Guigo describes four
                  rungs of a ladder leading from earth to heaven: (1) <strong>Lectio</strong> (reading),
                  (2) <strong>Meditatio</strong> (meditation), (3) <strong>Oratio</strong> (prayer),
                  (4) <strong>Contemplatio</strong> (contemplation). A fifth step, <strong>Actio</strong>
                  (action), is often added in modern presentations.
                </p>
                <p className="text-amber-700 text-sm">
                  Guigo writes: &ldquo;Reading seeks for the sweetness of a blessed life, meditation
                  perceives it, prayer asks for it, contemplation tastes it.&rdquo;
                </p>
              </div>
            </div>

            {/* Card 2: The Four (Five) Steps in Detail */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Search className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Four Steps in Detail</h2>
              </div>

              <div className="space-y-6">

                <div className="border-l-4 border-amber-400 pl-6">
                  <h3 className="text-xl font-bold text-amber-800 mb-2">1. Lectio &mdash; Read</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Read a short Scripture passage slowly, attentively, even aloud. Let the words
                    sink in. Repeat a word or phrase that strikes you. This is different from Bible
                    study &mdash; you are not analyzing the text but listening to it. The tradition
                    recommends reading the same short passage several times, unhurriedly, until one
                    word or phrase catches your attention like a finger on the shoulder.
                  </p>
                </div>

                <div className="border-l-4 border-blue-400 pl-6">
                  <h3 className="text-xl font-bold text-blue-800 mb-2">2. Meditatio &mdash; Meditate</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Dwell on the word or phrase. Turn it over in your mind. Ask: what is God saying
                    to me here? What does this touch in my life? The Church Fathers compared this to
                    a cow chewing cud &mdash; slowly drawing out all the nourishment from what was
                    first taken in. There is no hurry; no goal but receptivity. Meditatio is not
                    biblical analysis; it is allowing Scripture to speak into your particular
                    situation, history, and heart.
                  </p>
                </div>

                <div className="border-l-4 border-green-400 pl-6">
                  <h3 className="text-xl font-bold text-green-800 mb-2">3. Oratio &mdash; Pray</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Respond to God from the heart. If the text brings consolation, offer thanks.
                    If it brings challenge or conviction, offer that to God honestly. Ask for grace
                    to live what you have received. <em>Oratio</em> is the turning point from
                    receptivity to response &mdash; from listening to speaking. It should flow
                    naturally from what arose in <em>meditatio</em>, not be imposed from outside.
                    No special words are required; only honesty.
                  </p>
                </div>

                <div className="border-l-4 border-purple-400 pl-6">
                  <h3 className="text-xl font-bold text-purple-800 mb-2">4. Contemplatio &mdash; Contemplate</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Simply rest in God&rsquo;s presence. No words, no thoughts &mdash; just loving
                    attention. This is not achieved by effort; it is received as a gift. When
                    <em> oratio</em> becomes wordless and the soul simply rests in God&rsquo;s nearness,
                    <em> contemplatio</em> has begun. Remain still as long as God holds you there.
                    Do not force it; do not resist it. Let it come when God gives it.
                  </p>
                </div>

                <div className="border-l-4 border-gray-400 pl-6">
                  <h3 className="text-xl font-bold text-gray-700 mb-2">5. Actio &mdash; Act <span className="text-sm font-normal text-gray-500">(Added in modern practice)</span></h3>
                  <p className="text-gray-700 leading-relaxed">
                    Bring what was received into daily life. What concrete action does God&rsquo;s word
                    call me to? What must change? What must I do or stop doing? <em>Lectio Divina</em>
                    that never reaches action risks becoming spiritual self-indulgence. The Word
                    that enters us in prayer must transform us in living.
                  </p>
                </div>

              </div>
            </div>

            {/* Card 3: Vatican II Encouragement and Practical Guidance */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-green-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Vatican II&rsquo;s Encouragement & Practical Guidance</h2>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">
                  <em>Dei Verbum</em>, &sect;25 (Dogmatic Constitution on Divine Revelation, 1965)
                </h3>
                <p className="text-blue-800 italic mb-2">
                  &ldquo;And let them remember that prayer should accompany the reading of Sacred Scripture,
                  so that God and man may talk together; for &lsquo;we speak to Him when we pray; we
                  hear Him when we read the divine sayings.&rsquo;&rdquo;
                </p>
                <p className="text-blue-700 text-sm">
                  The quotation within is from St. Ambrose of Milan &mdash; one of the earliest patristic
                  articulations of what would later be called <em>Lectio Divina</em>.
                </p>
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-4">Practical Guidance for Beginners</h3>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-amber-50 p-4 rounded-lg">
                  <p className="font-semibold text-amber-900 mb-1">Start with a prayer</p>
                  <p className="text-amber-800 text-sm">Invoke the Holy Spirit before beginning. Ask God to speak through his Word and grant understanding.</p>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg">
                  <p className="font-semibold text-amber-900 mb-1">Choose a short passage</p>
                  <p className="text-amber-800 text-sm">A lectionary passage, a short Gospel scene, or a psalm &mdash; 5 to 15 verses is sufficient. Length is not the point.</p>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg">
                  <p className="font-semibold text-amber-900 mb-1">Use a quality translation</p>
                  <p className="text-amber-800 text-sm">The NABRE (New American Bible, Revised Edition) or RSV-CE (Revised Standard Version, Catholic Edition) are recommended.</p>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg">
                  <p className="font-semibold text-amber-900 mb-1">20&ndash;30 minutes is sufficient</p>
                  <p className="text-amber-800 text-sm">Daily consistency matters more than length. A short daily practice is worth far more than occasional long sessions.</p>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-green-900 mb-3">
                  The Key Distinction
                </h3>
                <p className="text-green-800 mb-3">
                  <em>Lectio Divina</em> is not Bible study. It is not about extracting information,
                  completing a reading plan, or acquiring theological knowledge. It is about
                  encountering the living God through his written word. The goal is not to
                  finish the passage &mdash; it is to let the passage work on you.
                </p>
                <p className="text-green-700 text-sm">
                  A person who spends twenty minutes on a single verse and comes away changed has
                  practiced <em>Lectio Divina</em> perfectly. A person who races through three
                  chapters in twenty minutes has done something else entirely.
                </p>
              </div>
            </div>

          </div>
        )}

        {/* ==================== TAB 3: THE JESUS PRAYER ==================== */}
        {activeTab === 'jesus-prayer' && (
          <div className="space-y-8">

            {/* Card 1: The Prayer Itself */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Cross className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Prayer of the Heart</h2>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <p className="text-2xl text-center text-amber-900 font-serif italic mb-3">
                  &ldquo;Lord Jesus Christ, Son of God, have mercy on me, a sinner.&rdquo;
                </p>
                <p className="text-center text-amber-700 text-sm">
                  In Greek: <em>K&yacute;rie I&emacr;so&ucirc; Christe, Hu&iacute;e Theo&ucirc;, el&eacute;is&oacute;n me t&oacute;n hamartolon.</em>
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The Jesus Prayer is a complete act of faith, adoration, and contrition compressed
                into a single breath. In its few words it encompasses the whole of Christian theology:
                the lordship of Christ, the Incarnation, the Trinity, the need for grace, and the
                honest acknowledgment of sin. To pray it attentively &mdash; not mechanically, but
                with focused heart &mdash; is to make a profound act of faith with every repetition.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">Scriptural Roots</h3>
                <div className="space-y-3">
                  <p className="text-blue-800 text-sm">
                    <strong>Bartimaeus (Mark 10:47):</strong> &ldquo;Jesus, Son of David, have mercy on me!&rdquo; &mdash;
                    the blind man who would not be silenced, whose cry of faith opened his eyes.
                  </p>
                  <p className="text-blue-800 text-sm">
                    <strong>The Tax Collector (Luke 18:13):</strong> &ldquo;God, be merciful to me, a sinner!&rdquo; &mdash;
                    the prayer Jesus himself praised as justifying before God.
                  </p>
                  <p className="text-blue-800 text-sm">
                    <strong><em>Kyrie Eleison</em> (Lord, have mercy):</strong> The oldest liturgical prayer of
                    the Church, preserved in every Mass since the earliest centuries.
                  </p>
                </div>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">
                  CCC 2667 on the Holy Name
                </h3>
                <p className="text-amber-800 italic mb-2">
                  &ldquo;The invocation of the holy name of Jesus is the simplest way of praying always.&rdquo;
                </p>
                <p className="text-amber-700 text-sm">&mdash; CCC 2667</p>
              </div>
            </div>

            {/* Card 2: Hesychasm and the Philokalia */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Wind className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Hesychasm and the <em>Philokalia</em></h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The Jesus Prayer is the heart of the <strong>hesychast</strong> tradition. The Greek
                word <em>hesychia</em> means &ldquo;stillness,&rdquo; &ldquo;quiet,&rdquo; or &ldquo;inner peace.&rdquo;
                Hesychasm is the Eastern Christian practice of stilling the passions, focusing the
                mind in the heart, and using the Jesus Prayer to achieve union with God. It was
                developed by the Desert Fathers &mdash; Evagrius Ponticus, John Climacus (<em>The
                Ladder of Divine Ascent</em>) &mdash; and reached its fullest theological expression
                in the 14th century through Gregory Palamas.
              </p>

              <div className="bg-purple-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-purple-900 mb-3">
                  The <em>Philokalia</em> (1782)
                </h3>
                <p className="text-purple-800 mb-3">
                  A collection of writings by Eastern Christian mystics on prayer and the spiritual
                  life, compiled by St. Nikodemos of the Holy Mountain and St. Makarios of Corinth
                  (1782). The <em>Philokalia</em> (&ldquo;Love of Beauty&rdquo;) is a foundational text of
                  hesychasm and one of the great treasures of Christian spiritual literature.
                </p>
                <p className="text-purple-700 text-sm">
                  The <em>Philokalia</em> originates in the Orthodox tradition but is recognized
                  in Catholic spiritual circles as a valuable resource &mdash; its teaching on
                  attentiveness, purification of the heart, and union with God is fully consonant
                  with Catholic mystical theology.
                </p>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">Breath Prayer</h3>
                <p className="text-amber-800 mb-3">
                  The Jesus Prayer is traditionally synchronized with breathing: on the inhale,
                  &ldquo;Lord Jesus Christ, Son of God&rdquo;; on the exhale, &ldquo;have mercy on me, a sinner.&rdquo;
                  This physio-spiritual technique helps quiet mental distraction and unites body
                  and soul in prayer. The breathing is not magical &mdash; the value is in the
                  prayer and the intention, not the technique itself. The body is engaged because
                  the whole person &mdash; body and soul together &mdash; is called to pray.
                </p>
              </div>
            </div>

            {/* Card 3: The Way of a Pilgrim and Catholic Context */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-green-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800"><em>The Way of a Pilgrim</em> and Catholic Context</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                <em>The Way of a Pilgrim</em> is a 19th-century Russian anonymous spiritual classic
                in which a simple peasant seeks to fulfill St. Paul&rsquo;s command to &ldquo;pray without
                ceasing&rdquo; (1 Thess 5:17). He learns the Jesus Prayer from a <em>starets</em>
                (spiritual father) and discovers that, through faithful practice, the prayer moves
                from his lips to his mind to his heart &mdash; becoming what the tradition calls the
                <strong> Prayer of the Heart</strong>: a ceaseless interior prayer that eventually continues
                without conscious effort, like a heartbeat.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">The Prayer of the Heart</h3>
                <p className="text-blue-800 mb-3">
                  In the hesychast tradition, the movement of the Jesus Prayer from lips to mind
                  to heart is the central goal. &ldquo;Heart&rdquo; here does not mean emotion but the
                  Biblical sense: the deep center of the person, the seat of the will, where God
                  and the human person meet. When the prayer descends into the heart, it becomes
                  a ceaseless orientation of the whole person toward God.
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-green-900 mb-3">
                  The Jesus Prayer in Catholic Spirituality
                </h3>
                <p className="text-green-800 mb-3">
                  The Jesus Prayer is primarily associated with Eastern Christianity (Orthodox and
                  Eastern Catholic) but is fully compatible with Catholic theology and has been
                  adopted widely in Western Catholic contemplative circles. It is emphatically not
                  a mantra in the Eastern religious sense &mdash; it does not aim at emptying the
                  mind or dissolving the self into an impersonal Absolute. It is a theologically
                  precise act of Christian faith addressed to a personal God.
                </p>
                <p className="text-green-700 text-sm">
                  To pray it attentively is to make an act of deep faith with every breath: &ldquo;Lord&rdquo;
                  proclaims his lordship; &ldquo;Jesus Christ&rdquo; confesses the Incarnation; &ldquo;Son of God&rdquo;
                  affirms the Trinity; &ldquo;have mercy on me&rdquo; acknowledges the need for grace;
                  &ldquo;a sinner&rdquo; is honest self-knowledge. Every word carries weight.
                </p>
              </div>
            </div>

          </div>
        )}

        {/* ==================== TAB 4: CARMELITE TRADITION ==================== */}
        {activeTab === 'carmelite-tradition' && (
          <div className="space-y-8">

            {/* Card 1: The Carmelite Order */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Flame className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Carmelite Order and Its Origins</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The Carmelite Order was founded on Mt. Carmel in present-day Israel by 12th-century
                Latin Crusaders who gathered around a spring where the prophet Elijah had prayed
                (1 Kings 18&ndash;19). When the Crusades ended, they returned to Europe and became a
                mendicant order. Our Lady of Mt. Carmel is their patroness, and the order has always
                placed Marian devotion at the heart of its spirituality. The Discalced Carmelites
                (the reformed branch) were founded by St. Teresa of &Aacute;vila and St. John of the
                Cross in 16th-century Spain.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">
                  The Three Great Carmelite Doctors
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <p className="font-semibold text-amber-800 mb-1">St. Teresa of &Aacute;vila (1515&ndash;1582)</p>
                    <p className="text-amber-700 text-sm">Co-founder of the Discalced Carmelites; first woman Doctor of the Church (1970); author of <em>The Interior Castle</em>.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-amber-800 mb-1">St. John of the Cross (1542&ndash;1591)</p>
                    <p className="text-amber-700 text-sm">Poet, mystic, Doctor of the Church; author of <em>The Dark Night of the Soul</em> and <em>The Ascent of Mount Carmel</em>.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-amber-800 mb-1">St. Th&eacute;r&egrave;se of Lisieux (1873&ndash;1897)</p>
                    <p className="text-amber-700 text-sm">Doctor of the Church (1997); Co-Patroness of the Missions; author of <em>Story of a Soul</em>.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: St. Teresa of Avila */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-purple-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">St. Teresa of &Aacute;vila: The Interior Castle</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Teresa of &Aacute;vila wrote <em>The Interior Castle</em> (<em>Las Moradas</em>) in 1577
                &mdash; reportedly in two weeks of intense inspiration. It is widely considered the
                masterpiece of Western mystical literature. Her central image: the soul is like a
                crystal castle with seven <em>mansions</em> or dwellings. Prayer is the journey from
                the outer rooms inward toward the innermost chamber, where God himself dwells.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="font-semibold text-purple-900 mb-1">Outer Mansions (1&ndash;3)</p>
                  <p className="text-purple-800 text-sm">Vocal prayer, penance, beginning of self-knowledge. The soul begins its journey but remains largely exterior.</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="font-semibold text-purple-900 mb-1">Middle Mansions (4&ndash;5)</p>
                  <p className="text-purple-800 text-sm">Prayer of recollection, prayer of quiet. Infused graces begin; the soul starts to receive more than it gives.</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="font-semibold text-purple-900 mb-1">Inner Mansions (6&ndash;7)</p>
                  <p className="text-purple-800 text-sm">The sixth: mystical betrothal, intense purification, locutions, raptures. The seventh: transforming union &mdash; &ldquo;spiritual marriage.&rdquo;</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="font-semibold text-blue-900 mb-1">Teresa&rsquo;s Four Degrees of Prayer</p>
                  <p className="text-blue-800 text-sm">Drawing water from a well &rarr; the water wheel &rarr; irrigation channel &rarr; rain from heaven. Each stage: less human effort, more divine gift.</p>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="text-blue-800 italic mb-2">
                  &ldquo;Let nothing disturb you, let nothing frighten you; all things pass away, God
                  never changes. Patience obtains all things. Nothing is wanting to him who
                  possesses God. God alone suffices.&rdquo;
                </p>
                <p className="text-blue-700 text-sm">&mdash; St. Teresa of &Aacute;vila, <em>Bookmark</em></p>
              </div>
            </div>

            {/* Card 3: St. John of the Cross */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                  <Cross className="w-6 h-6 text-gray-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">St. John of the Cross: The Dark Night</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                John of the Cross is the great theologian of mystical purification. His four major
                works &mdash; <em>The Ascent of Mount Carmel</em>, <em>The Dark Night of the Soul</em>,
                <em> The Spiritual Canticle</em>, and <em>The Living Flame of Love</em> &mdash; constitute
                the most rigorous and systematic body of mystical theology in the Catholic tradition.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">The Dark Night of the Senses</h3>
                  <p className="text-gray-700 text-sm">
                    God withdraws consolations from prayer and from life. The soul feels spiritually
                    dry, confused, bored in prayer &mdash; as if God has abandoned it. In fact, God
                    is purifying the soul&rsquo;s attachment to spiritual <em>feelings</em>, teaching it
                    to seek God himself rather than the comfort of God&rsquo;s presence.
                  </p>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">The Dark Night of the Spirit</h3>
                  <p className="text-gray-700 text-sm">
                    A deeper purification of the intellect, memory, and will &mdash; the very
                    faculties of the soul. More painful than the first night; experienced by fewer
                    souls. Both nights are God&rsquo;s merciful work. Both are painful; both produce
                    freedom. The soul comes out purified, detached, and capable of union.
                  </p>
                </div>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">
                  The Ascent: Active Purification
                </h3>
                <p className="text-amber-800 mb-3">
                  <em>The Ascent of Mount Carmel</em> is John&rsquo;s guide to the active (willed) purification
                  of the soul &mdash; the dispositions we can choose. Its core principle: detachment
                  from all that is not God frees the soul to receive all that God wishes to give.
                </p>
                <p className="text-amber-700 italic text-sm">
                  &ldquo;To reach satisfaction in all, desire satisfaction in nothing. To come to possess
                  all, desire the possession of nothing.&rdquo; &mdash; <em>Ascent</em>, Book I, ch.13
                </p>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-purple-900 mb-3">
                  The Carmelite Promise: Not Comfort but Union
                </h3>
                <p className="text-purple-800 mb-3">
                  The Carmelite tradition does not promise that contemplative prayer will be
                  comfortable. John of the Cross said that the souls who make the most progress
                  often experience the greatest desolation. The dark nights are not signs of
                  God&rsquo;s absence &mdash; they are signs of his working. The soul is being
                  purified for an intimacy it could not otherwise bear.
                </p>
              </div>
            </div>

            {/* Card 4: St. Therese of Lisieux */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-green-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">St. Th&eacute;r&egrave;se of Lisieux: The Little Way</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Th&eacute;r&egrave;se Martin entered the Carmelite convent at Lisieux at age 15 and died of
                tuberculosis at 24. Her autobiography, <em>Story of a Soul</em> (<em>Histoire d&rsquo;une
                &acirc;me</em>), written under obedience and published posthumously, became one of the
                most widely read spiritual autobiographies in history. She was named a Doctor of
                the Church in 1997 and Co-Patroness of the Missions &mdash; remarkable for a woman
                who never left her convent.
              </p>

              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-green-900 mb-3">The &ldquo;Little Way&rdquo;</h3>
                <p className="text-green-800 mb-3">
                  Th&eacute;r&egrave;se discovered that holiness did not require heroic external deeds &mdash;
                  it required childlike trust in God and doing small things with great love.
                  Her &ldquo;Little Way&rdquo; is the way of spiritual childhood: abandoning oneself completely
                  to God&rsquo;s mercy, like a small child in the arms of a father.
                </p>
                <p className="text-green-700 italic text-sm mb-3">
                  &ldquo;I have always wanted to become a saint... instead of becoming discouraged, I
                  said to myself: God would not inspire in me desires which could not be realized.&rdquo;
                  &mdash; <em>Story of a Soul</em>
                </p>
                <p className="text-green-700 text-sm">
                  She found, in her own words, the &ldquo;elevator&rdquo; to holiness &mdash; childlike trust
                  &mdash; for those who cannot climb the steep staircase of traditional asceticism.
                  The Little Way is itself a form of contemplation: a continuous, loving attentiveness
                  to God in the midst of the ordinary.
                </p>
              </div>
            </div>

          </div>
        )}

        {/* ==================== TAB 5: IGNATIAN PRAYER ==================== */}
        {activeTab === 'ignatian-prayer' && (
          <div className="space-y-8">

            {/* Card 1: Ignatius and the Spiritual Exercises */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Compass className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Ignatius of Loyola and the <em>Spiritual Exercises</em></h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                St. Ignatius of Loyola (1491&ndash;1556) was a Basque soldier wounded at the Battle of
                Pamplona in 1521. During his long recovery, he read the life of Christ and the lives
                of the saints &mdash; and experienced a profound conversion. He founded the Society
                of Jesus (the Jesuits) in 1540, and his <em>Spiritual Exercises</em>, written between
                1522 and 1548, were approved by Pope Paul III in 1548. They remain one of the most
                widely used instruments of spiritual formation in the Catholic Church.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">The Principle and Foundation</h3>
                <p className="text-amber-800 italic mb-2">
                  &ldquo;Man is created to praise, reverence, and serve God our Lord, and by this means
                  to save his soul. The other things on the face of the earth are created for man
                  to help him in attaining the end for which he is created.&rdquo;
                </p>
                <p className="text-amber-700 text-sm">&mdash; <em>Spiritual Exercises</em>, &sect;23</p>
              </div>

              <p className="text-gray-700 leading-relaxed">
                The <em>Spiritual Exercises</em> are a 4-week intensive retreat format &mdash; or, as the
                &ldquo;19th Annotation,&rdquo; a retreat spread over 30 weeks for those in ordinary life
                who cannot make a residential retreat. Their purpose is the deepening of one&rsquo;s
                relationship with God, discernment of vocation, and making decisions in accord
                with God&rsquo;s will.
              </p>
            </div>

            {/* Card 2: The Four Weeks */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Four Weeks</h2>
              </div>

              <div className="space-y-4">
                <div className="bg-amber-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-amber-900 mb-2">Week 1 &mdash; Foundation, Sin, and Mercy</h3>
                  <p className="text-amber-800 text-sm">
                    The Principle and Foundation; examination of conscience; meditation on sin and
                    its consequences; receiving God&rsquo;s mercy. The soul begins by understanding
                    its dependence on God and the radical disorder of sin, so that it can receive
                    mercy with genuine gratitude.
                  </p>
                </div>
                <div className="bg-blue-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-2">Week 2 &mdash; The Life and Ministry of Christ</h3>
                  <p className="text-blue-800 text-sm">
                    Imaginative contemplation of the life of Christ; the Two Standards (of Christ
                    vs. the devil); the Three Classes of Persons; the Three Degrees of Humility;
                    discernment of spirits. This week is especially focused on deepening the
                    retreatant&rsquo;s desire to follow Christ.
                  </p>
                </div>
                <div className="bg-purple-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-purple-900 mb-2">Week 3 &mdash; The Passion of Christ</h3>
                  <p className="text-purple-800 text-sm">
                    Contemplating the suffering and death of Christ; deepening identification
                    with the suffering Lord. The retreatant is invited to grieve with Christ,
                    to be present at the Passion, and to ask for the grace of compassion.
                  </p>
                </div>
                <div className="bg-green-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-2">Week 4 &mdash; The Resurrection and Contemplation to Attain Divine Love</h3>
                  <p className="text-green-800 text-sm">
                    Contemplating the risen Christ; consolation and joy. The week closes with the
                    <em> Contemplatio ad Amorem</em> (Contemplation to Attain Divine Love) &mdash;
                    giving all to God and receiving all from God in return. The most famous prayer
                    of the Exercises: &ldquo;Take, Lord, and receive all my liberty&hellip;&rdquo;
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3: Key Methods */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Search className="w-6 h-6 text-green-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Key Methods of Ignatian Prayer</h2>
              </div>

              <div className="space-y-6">
                <div className="border-l-4 border-amber-400 pl-6">
                  <h3 className="text-lg font-bold text-amber-800 mb-2">Composition of Place (<em>Compositio Loci</em>)</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Before meditating on a Gospel scene, the retreatant &ldquo;composes&rdquo; the scene in
                    imagination &mdash; sees the place, hears the sounds, smells the air, feels the
                    heat or cold. Then enters the scene as a participant. The Gospel does not remain
                    a distant historical event; it happens <em>around and to</em> the one praying.
                    This method leverages the imagination &mdash; which Ignatius considered a
                    God-given capacity &mdash; as a vehicle for genuine encounter with Christ.
                  </p>
                </div>

                <div className="border-l-4 border-blue-400 pl-6">
                  <h3 className="text-lg font-bold text-blue-800 mb-2">Application of the Five Senses</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Related to composition of place: meditating through each sense on a Gospel scene.
                    What do you see? What do you hear? What do you smell and taste? What do you touch?
                    This engages the whole person &mdash; not just the intellect &mdash; in prayer.
                    It is especially used to consolidate what was received in earlier meditations
                    on the same passage.
                  </p>
                </div>

                <div className="border-l-4 border-purple-400 pl-6">
                  <h3 className="text-lg font-bold text-purple-800 mb-2">The Colloquy (<em>Coloquio</em>)</h3>
                  <p className="text-gray-700 leading-relaxed">
                    The intimate conversation with God &mdash; Father, Son, or Holy Spirit &mdash;
                    at the end of a meditation. Ignatius describes it as speaking &ldquo;as a friend
                    speaks to a friend&rdquo; &mdash; not formal address but personal, honest conversation.
                    The retreatant speaks directly to God about what arose in prayer: desires,
                    fears, gratitude, confusion, love.
                  </p>
                </div>

                <div className="border-l-4 border-green-400 pl-6">
                  <h3 className="text-lg font-bold text-green-800 mb-2">Discernment of Spirits</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Ignatius&rsquo;s carefully developed rules for distinguishing the interior movements
                    of <strong>consolation</strong> (from God) and <strong>desolation</strong> (from
                    the enemy or one&rsquo;s own weakness). Two sets of rules: the First Week rules for
                    beginners; the Second Week rules for those more advanced. One of the most
                    practically useful bodies of spiritual teaching in the Church &mdash; widely
                    taught in spiritual direction today. The <em>Exercises</em> do not merely teach
                    how to pray; they teach how to read one&rsquo;s own interior life.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 4: Ignatian Prayer Today */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Ignatian Prayer Today</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The <em>Spiritual Exercises</em> were originally designed for a 30-day residential
                retreat. The 19th Annotation retreat (also called the &ldquo;Retreat in Daily Life&rdquo;
                or &ldquo;Retreat on the Go&rdquo;) adapts the Exercises for people who cannot leave their
                ordinary commitments, spreading the four weeks over 30 weeks with daily prayer and
                regular meetings with a spiritual director.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-amber-50 p-4 rounded-lg">
                  <p className="font-semibold text-amber-900 mb-1">Jesuit Retreat Houses</p>
                  <p className="text-amber-800 text-sm">Worldwide network offering 8-day directed retreats, individually guided retreats, and thematic programs based on the Exercises.</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="font-semibold text-blue-900 mb-1">Ignatian Spiritual Direction</p>
                  <p className="text-blue-800 text-sm">One of the most widespread forms of spiritual direction in the Latin Church today. Many trained Ignatian directors work with laity in parishes and retreat centers.</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="font-semibold text-green-900 mb-1">The Daily Examen</p>
                  <p className="text-green-800 text-sm">A 15-minute daily prayer practice from the Exercises: give thanks, ask for light, review the day, ask for forgiveness, look toward tomorrow. Practiced by millions of Catholics daily.</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="font-semibold text-purple-900 mb-1">Ignatian Discernment</p>
                  <p className="text-purple-800 text-sm">The Exercises&rsquo; rules for discernment of spirits have become a standard resource in Catholic pastoral formation, seminary training, and lay spirituality programs.</p>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* ==================== TAB 6: DISCERNMENT & CAUTIONS ==================== */}
        {activeTab === 'discernment-cautions' && (
          <div className="space-y-8">

            {/* Card 1: The Problem */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Authentic Contemplation and the Problem of Counterfeits</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Since the Second Vatican Council, various forms of Eastern-influenced meditation
                and prayer have entered Catholic spiritual practice &mdash; some compatible with
                authentic Christian prayer, some genuinely problematic. The desire for contemplative
                depth is entirely right; the methods used to pursue it require careful discernment.
                The Church has given clear and careful guidance on this question.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">
                  CDF Letter on Christian Meditation (October 15, 1989)
                </h3>
                <p className="text-amber-800 mb-3">
                  The Congregation for the Doctrine of the Faith, under Cardinal Joseph Ratzinger
                  (later Pope Benedict XVI), issued a <em>Letter to the Bishops of the Catholic Church
                  on Some Aspects of Christian Meditation</em> (1989). It is a carefully balanced
                  document: it strongly affirms the validity and beauty of Catholic contemplative
                  prayer while identifying specific dangers in methods imported from non-Christian
                  traditions.
                </p>
                <p className="text-amber-700 text-sm">
                  The letter begins: &ldquo;The call to prayer and contemplation that resounds in the
                  prophets and in the psalms &mdash; &lsquo;Be still and know that I am God&rsquo; (Ps 46:10)
                  &mdash; has never ceased to find an echo in the hearts of Christians.&rdquo; Its purpose
                  is guidance, not condemnation.
                </p>
              </div>
            </div>

            {/* Card 2: Centering Prayer */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Wind className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Centering Prayer: The Practice and the Concerns</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Centering Prayer is a method developed in the 1970s and 1980s by Fr. Thomas Keating
                OCSO, Fr. Basil Pennington OCSO, and Fr. Thomas Clarke SJ, drawing on
                <em> The Cloud of Unknowing</em> (14th century) and the writings of John of the Cross.
                The practice: choose a &ldquo;sacred word&rdquo; as a symbol of consent to God&rsquo;s presence;
                sit silently for 20 minutes; whenever thoughts arise, gently return to the sacred word.
              </p>

              <h3 className="text-xl font-bold text-gray-800 mb-4">Why Theologians Urge Caution (Not Condemnation)</h3>

              <div className="space-y-4 mb-6">
                <div className="bg-orange-50 p-5 rounded-lg">
                  <h4 className="font-semibold text-orange-900 mb-2">1. CDF Warning on Technique</h4>
                  <p className="text-orange-800 text-sm">
                    The 1989 CDF letter warned against methods that use bodily postures or breathing
                    techniques in ways that <em>mechanically produce</em> spiritual states; against
                    emptying the mind in a way that is not oriented to a <em>personal</em> God;
                    against any confusion between the Christian God and an impersonal Absolute.
                  </p>
                </div>
                <div className="bg-orange-50 p-5 rounded-lg">
                  <h4 className="font-semibold text-orange-900 mb-2">2. The Theological Question</h4>
                  <p className="text-orange-800 text-sm">
                    Fr. Aidan Nichols OP, Fr. Thomas Dubay SM (<em>Fire Within</em>), and other Catholic
                    theologians have questioned whether Centering Prayer&rsquo;s passive emptying of the
                    mind is authentically Carmelite or apophatic &mdash; or whether it risks
                    fostering a non-personal, non-theistic kind of &ldquo;contemplation.&rdquo;
                  </p>
                </div>
                <div className="bg-orange-50 p-5 rounded-lg">
                  <h4 className="font-semibold text-orange-900 mb-2">3. The Central Distinction</h4>
                  <p className="text-orange-800 text-sm">
                    Authentic Catholic apophatic prayer (John of the Cross) is not about emptying the
                    mind &mdash; it is about the soul&rsquo;s loving, active attentiveness to a personal
                    God who transcends all images. The emptiness is not a vacuum but a posture of
                    loving receptivity toward <em>someone</em>. Some implementations of Centering
                    Prayer have drifted toward techniques indistinguishable from Transcendental
                    Meditation or Buddhist mindfulness.
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">What the CDF Letter Affirms</h3>
                <p className="text-blue-800 mb-3">
                  The same 1989 letter strongly affirms the validity and beauty of Catholic
                  contemplative prayer. It is an encouragement to seek <em>authentic</em> Christian
                  mysticism &mdash; not a rejection of contemplation. The letter explicitly commends
                  the Ignatian method, the Rosary, Lectio Divina, and the Liturgy of the Hours as
                  reliable forms of Catholic contemplative prayer.
                </p>
              </div>
            </div>

            {/* Card 3: Eastern Meditation and How to Discern */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Scale className="w-6 h-6 text-green-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Eastern Practices and How to Discern</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Yoga, Zen sitting, Transcendental Meditation, and secular mindfulness practices
                are widely used in the West, including by Catholics. The Church does not condemn
                these practices as inherently evil. The guidance is more nuanced: when any practice
                is used by Catholics for <em>spiritual</em> purposes, the theological framework
                matters enormously.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">The Pastoral Principle</h3>
                <p className="text-amber-800 mb-3">
                  A Catholic may use breathing techniques, body postures, or stillness practices
                  for relaxation or health without adopting the metaphysics of Hinduism or Buddhism.
                  But a Catholic who practices Zen <em>as a path to enlightenment</em>, or TM
                  <em> as a means of union with Brahman</em>, is adopting a theological framework
                  that is not Christianity. The technique and the theology are not always separable
                  in practice.
                </p>
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-4">Six Questions for Discerning Authentic Catholic Contemplative Practice</h3>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3 bg-green-50 p-4 rounded-lg">
                  <ArrowRight className="w-5 h-5 text-green-700 mt-0.5 flex-shrink-0" />
                  <p className="text-green-800 text-sm"><strong>Is God personal?</strong> Does the practice orient you toward the Father, Son, and Holy Spirit &mdash; or toward an impersonal Absolute or universal consciousness?</p>
                </div>
                <div className="flex items-start gap-3 bg-green-50 p-4 rounded-lg">
                  <ArrowRight className="w-5 h-5 text-green-700 mt-0.5 flex-shrink-0" />
                  <p className="text-green-800 text-sm"><strong>Is Christ central?</strong> Is the Incarnation, Passion, and Resurrection of Jesus Christ honored as the center of the relationship with God?</p>
                </div>
                <div className="flex items-start gap-3 bg-green-50 p-4 rounded-lg">
                  <ArrowRight className="w-5 h-5 text-green-700 mt-0.5 flex-shrink-0" />
                  <p className="text-green-800 text-sm"><strong>Is the Eucharist honored?</strong> Does the practice deepen one&rsquo;s participation in the Mass and Eucharist as the summit and source of the Christian life?</p>
                </div>
                <div className="flex items-start gap-3 bg-green-50 p-4 rounded-lg">
                  <ArrowRight className="w-5 h-5 text-green-700 mt-0.5 flex-shrink-0" />
                  <p className="text-green-800 text-sm"><strong>Is there submission to the Magisterium?</strong> Is the practitioner open to the Church&rsquo;s guidance and willing to submit the practice to theological review?</p>
                </div>
                <div className="flex items-start gap-3 bg-green-50 p-4 rounded-lg">
                  <ArrowRight className="w-5 h-5 text-green-700 mt-0.5 flex-shrink-0" />
                  <p className="text-green-800 text-sm"><strong>Does it bear good fruit?</strong> Does the practice produce the fruits of the Spirit (Galatians 5:22&ndash;23): love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, self-control?</p>
                </div>
                <div className="flex items-start gap-3 bg-green-50 p-4 rounded-lg">
                  <ArrowRight className="w-5 h-5 text-green-700 mt-0.5 flex-shrink-0" />
                  <p className="text-green-800 text-sm"><strong>Is there a spiritual director?</strong> Contemplative prayer benefits greatly from the guidance of a trained, orthodox Catholic spiritual director who can evaluate interior movements and correct errors.</p>
                </div>
              </div>
            </div>

            {/* Card 4: Sources & Further Reading */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Sources &amp; Further Reading</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The following primary sources and scholarly works underlie this page.
                Readers who wish to go deeper will find these indispensable.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-amber-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-amber-900 mb-3">Magisterial &amp; Official</h3>
                  <ul className="text-amber-800 text-sm space-y-2">
                    <li><em>Catechism of the Catholic Church</em>, &sect;&sect;2709&ndash;2724 (Contemplative prayer)</li>
                    <li><em>Catechism of the Catholic Church</em>, &sect;&sect;2712&ndash;2719 (Characteristics of contemplation)</li>
                    <li>CDF, <em>Letter to the Bishops on Some Aspects of Christian Meditation</em> (October 15, 1989)</li>
                    <li>Vatican II, <em>Dei Verbum</em>, &sect;25 (Scripture and prayer)</li>
                    <li>Vatican II, <em>Perfectae Caritatis</em>, &sect;7 (The contemplative life)</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-3">Primary Sources &mdash; Carmelite</h3>
                  <ul className="text-blue-800 text-sm space-y-2">
                    <li>St. Teresa of &Aacute;vila, <em>The Interior Castle</em> (1577)</li>
                    <li>St. Teresa of &Aacute;vila, <em>The Way of Perfection</em></li>
                    <li>St. John of the Cross, <em>The Ascent of Mount Carmel</em></li>
                    <li>St. John of the Cross, <em>The Dark Night of the Soul</em></li>
                    <li>St. John of the Cross, <em>The Spiritual Canticle</em></li>
                    <li>St. Th&eacute;r&egrave;se of Lisieux, <em>Story of a Soul</em> (1898)</li>
                    <li>Guigo II, <em>Scala Claustralium</em> (<em>The Ladder of Monks</em>, c.1150)</li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-purple-900 mb-3">Primary Sources &mdash; Ignatian &amp; Eastern</h3>
                  <ul className="text-purple-800 text-sm space-y-2">
                    <li>St. Ignatius of Loyola, <em>The Spiritual Exercises</em> (1522&ndash;1548)</li>
                    <li>Anonymous, <em>The Way of a Pilgrim</em> (19th century)</li>
                    <li>Anonymous, <em>The Cloud of Unknowing</em> (14th century)</li>
                    <li>Pseudo-Dionysius, <em>The Divine Names</em>; <em>Mystical Theology</em></li>
                    <li>St. Nikodemos and St. Makarios, eds., <em>The Philokalia</em> (1782)</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-3">Scholarly &amp; Pastoral</h3>
                  <ul className="text-green-800 text-sm space-y-2">
                    <li>Fr. Thomas Dubay SM, <em>Fire Within</em> (Ignatius Press, 1989) &mdash; the definitive Catholic study of Teresa and John of the Cross on prayer</li>
                    <li>Thomas Merton OCSO, <em>New Seeds of Contemplation</em> (New Directions, 1961)</li>
                    <li>Thomas Aquinas, <em>Summa Theologiae</em> II-II, q.180 (on contemplative life)</li>
                    <li>Evelyn Underhill, <em>Mysticism</em> (1911) &mdash; classic scholarly study</li>
                    <li>Fr. Timothy Gallagher OMV, <em>The Discernment of Spirits</em> (Crossroad, 2005) &mdash; the best modern guide to Ignatian discernment</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 bg-gray-50 p-5 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-3">Related Pages</h3>
                <div className="flex flex-wrap gap-3">
                  <a href="/prayer/overview" className="inline-flex items-center gap-1 text-amber-700 hover:text-amber-900 text-sm font-medium">
                    <ArrowRight className="w-4 h-4" />
                    What Is Prayer?
                  </a>
                  <a href="/prayer/liturgy-of-hours" className="inline-flex items-center gap-1 text-amber-700 hover:text-amber-900 text-sm font-medium">
                    <ArrowRight className="w-4 h-4" />
                    Liturgy of the Hours
                  </a>
                  <a href="/mysteries/public-revelation" className="inline-flex items-center gap-1 text-amber-700 hover:text-amber-900 text-sm font-medium">
                    <ArrowRight className="w-4 h-4" />
                    Sacred Tradition
                  </a>
                </div>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  )
}
