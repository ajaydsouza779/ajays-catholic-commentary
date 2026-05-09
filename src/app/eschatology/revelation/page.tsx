'use client'

import { useState } from 'react'
import {
  BookOpen,
  Clock,
  Calendar,
  MapPin,
  Layers,
  ArrowRight,
  Mail,
  Globe,
  Crown,
  Landmark,
  AlertTriangle,
  Star,
  Quote,
  ScrollText,
  Heart,
  Church,
} from 'lucide-react'

type TabId =
  | 'authorship-date'
  | 'structure'
  | 'seven-churches'
  | 'symbolic-language'
  | 'catholic-reading'
  | 'revelation-today'

const tabs: { id: TabId; label: string }[] = [
  { id: 'authorship-date', label: 'Authorship & Date' },
  { id: 'structure', label: 'Structure of Revelation' },
  { id: 'seven-churches', label: 'The Seven Churches' },
  { id: 'symbolic-language', label: 'Symbolic Language' },
  { id: 'catholic-reading', label: 'Catholic Interpretation' },
  { id: 'revelation-today', label: 'Revelation & Today' },
]

export default function RevelationPage() {
  const [activeTab, setActiveTab] = useState<TabId>('authorship-date')

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            The Book of Revelation
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The Apocalypse of St. John is the most symbolic, most misread, and most misused book
            in the Bible. This page presents its historical context, structure, symbolic language,
            and the Catholic interpretive tradition that has guided the Church&rsquo;s reading of
            it for twenty centuries.
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
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tab Content */}

        {/* ==================== TAB 1: AUTHORSHIP & DATE ==================== */}
        {activeTab === 'authorship-date' && (
          <div className="space-y-8">
            {/* John of Patmos */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Author: John of Patmos</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Revelation opens with a direct self-identification: &ldquo;I, John, your brother
                and fellow partaker in the tribulation and kingdom and patient endurance that are in
                the Christ, was on the island called Patmos on account of the word of God and the
                testimony of Jesus&rdquo; (Rev 1:9). The author is John &mdash; exiled to Patmos
                for his faith &mdash; writing to seven churches in the Roman province of Asia
                (modern western Turkey).
              </p>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">
                  The Question of Apostolic Authorship
                </h3>
                <ul className="text-amber-800 space-y-2 text-sm">
                  <li>
                    <strong>Early tradition (Justin Martyr, Irenaeus, Tertullian):</strong> identified
                    this John with the Apostle John, son of Zebedee, author of the Fourth Gospel
                  </li>
                  <li>
                    <strong>Dionysius of Alexandria (3rd c.):</strong> noted significant linguistic and
                    stylistic differences between Revelation and the Gospel/Letters of John, and proposed
                    a distinct author, &ldquo;John the Elder&rdquo;
                  </li>
                  <li>
                    <strong>Current scholarly discussion:</strong> Most scholars today distinguish the
                    author of Revelation from the author of the Fourth Gospel; he may have been a
                    Jewish-Christian prophet in the Johannine tradition
                  </li>
                  <li>
                    <strong>Catholic position:</strong> The Church has never dogmatically defined the
                    precise human authorship; what matters is the book&rsquo;s divine inspiration and
                    canonical status, which are certain
                  </li>
                </ul>
              </div>
            </div>

            {/* Dating */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Date: Domitian (~95 AD) or Nero (~65 AD)?</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Two main dates are proposed for the composition of Revelation, each with significant
                consequences for interpretation. The date affects how much of the book&rsquo;s
                prophetic content was &ldquo;predictive&rdquo; (speaking of events yet to come when
                written) versus &ldquo;contemporaneous description&rdquo; (using symbolic language
                to describe the current Roman situation).
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 p-5 rounded-lg">
                  <h3 className="text-base font-semibold text-blue-900 mb-3">
                    Domitianic Dating (~95 AD) &mdash; Traditional Consensus
                  </h3>
                  <ul className="text-blue-800 text-sm space-y-2">
                    <li>Irenaeus (c. 180 AD) states explicitly that the Apocalypse was seen &ldquo;at the end of Domitian&rsquo;s reign&rdquo;</li>
                    <li>Domitian (r. 81&ndash;96 AD) demanded divine honors, requiring the titles <em>Dominus et Deus</em> (&ldquo;Lord and God&rdquo;)</li>
                    <li>The imperial cult pressure would explain the book&rsquo;s intense focus on emperor worship and economic exclusion</li>
                    <li>Most widely accepted by Catholic and mainline scholarship</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-5 rounded-lg">
                  <h3 className="text-base font-semibold text-blue-900 mb-3">
                    Neronian Dating (~65 AD)
                  </h3>
                  <ul className="text-blue-800 text-sm space-y-2">
                    <li>Proposed by scholars including Kenneth Gentry and J.A.T. Robinson</li>
                    <li>Would place composition before the fall of Jerusalem (70 AD), making Rev primarily a prophecy of that event</li>
                    <li>&ldquo;666&rdquo; as Nero Caesar (<em>gematria</em>) fits both dates; Nero was the first major persecutor of Christians</li>
                    <li>Less widely accepted but not without scholarly support</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Patmos */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Island of Patmos</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Patmos is a small volcanic island (approximately 13 km / 8 miles long) in the
                Dodecanese Islands, off the western coast of modern Turkey. In the Roman period it
                was used as a place of exile for political and religious troublemakers.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">Patmos Today</h3>
                <p className="text-amber-800 mb-3">
                  The Cave of the Apocalypse &mdash; a grotto on the slope below the Monastery of
                  St. John the Theologian &mdash; is the traditional site where John received his
                  visions. The monastery and the cave are now a UNESCO World Heritage Site and a
                  major destination for Christian pilgrimage. The Greek Orthodox Church maintains
                  active liturgical life there to this day.
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed">
                John likely wrote or dictated his visions while still on Patmos, addressing them
                to the seven churches of Asia Minor (modern western Turkey): Ephesus, Smyrna,
                Pergamum, Thyatira, Sardis, Philadelphia, and Laodicea &mdash; communities he
                knew and was responsible for as a prophetic leader.
              </p>
            </div>
          </div>
        )}

        {/* ==================== TAB 2: STRUCTURE OF REVELATION ==================== */}
        {activeTab === 'structure' && (
          <div className="space-y-8">
            {/* Overall Structure */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Layers className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Overall Structure of Revelation</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Revelation is not a random collection of visions. It has a careful literary
                structure, shaped by the repeated use of the number seven, by liturgical patterns,
                and by extensive quotation and allusion to the Old Testament (especially Ezekiel,
                Daniel, Isaiah, and Zechariah). Understanding the structure is the first step
                toward responsible interpretation.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">Chapter-by-Chapter Overview</h3>
                <ul className="text-amber-800 space-y-2 text-sm">
                  <li><strong>Rev 1:</strong> Prologue; Vision of the Risen Christ among seven golden lampstands</li>
                  <li><strong>Rev 2&ndash;3:</strong> The Seven Letters to the Seven Churches of Asia Minor</li>
                  <li><strong>Rev 4&ndash;5:</strong> The Heavenly Throne Room; the Scroll with Seven Seals; the Lamb who was slain</li>
                  <li><strong>Rev 6&ndash;7:</strong> Opening of the Seven Seals; the Four Horsemen; the 144,000</li>
                  <li><strong>Rev 8&ndash;11:</strong> The Seven Trumpets; the Two Witnesses; the Seventh Trumpet</li>
                  <li><strong>Rev 12&ndash;14:</strong> The Woman and the Dragon; the Beast from the Sea (666); the Beast from the Land; the Harvest</li>
                  <li><strong>Rev 15&ndash;16:</strong> The Seven Bowls of God&rsquo;s Wrath</li>
                  <li><strong>Rev 17&ndash;18:</strong> The Judgment of Babylon the Great (Rome)</li>
                  <li><strong>Rev 19&ndash;20:</strong> The Victory of Christ; the Millennium; the Final Battle; the Last Judgment</li>
                  <li><strong>Rev 21&ndash;22:</strong> The New Jerusalem; the New Creation; the Epilogue and final blessing</li>
                </ul>
              </div>
            </div>

            {/* Recapitulation */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <ArrowRight className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Key Structural Principle: Recapitulation</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The single most important insight for reading Revelation is that it is not a
                chronological sequence. Reading the seals, trumpets, and bowls as successive
                chapters of a future timeline produces endless confusion and irreconcilable
                contradictions within the text itself (multiple apparent &ldquo;end of the
                world&rdquo; moments, recurring cosmic catastrophes, etc.).
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">
                  Recapitulation Explained
                </h3>
                <p className="text-blue-800 mb-3">
                  The dominant Catholic and scholarly reading &mdash; established by Tyconius
                  (4th c.) and Augustine (*City of God*, Book XX) &mdash; holds that the three
                  great seven-fold sequences (seals, trumpets, bowls) are <em>parallel</em>,
                  not successive. Each covers the same period &mdash; the whole Church age from
                  the Resurrection to the Parousia &mdash; from a different angle or perspective.
                  Each sequence ends at the final judgment before a new sequence begins. This
                  is &ldquo;recapitulation.&rdquo;
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                Modern scholar G.K. Beale (<em>The Book of Revelation</em>, NIGTC, 1999) provides
                the most thorough scholarly defense of the recapitulationist reading. His work
                demonstrates how deeply Revelation draws on Old Testament prophetic texts and
                how the recapitulationist structure is embedded in the book&rsquo;s own literary
                architecture.
              </p>
            </div>

            {/* The Lamb and the Scroll */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Lamb and the Scroll (Rev 4&ndash;5)</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The central theological vision of Revelation, and its interpretive key, comes in
                chapters 4&ndash;5. Everything that follows flows from and depends on this vision.
                If one misunderstands chapters 4&ndash;5, one will misread the rest.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">
                  The Vision&rsquo;s Theological Content
                </h3>
                <ul className="text-amber-800 space-y-2 text-sm">
                  <li>
                    <strong>Rev 4: The Heavenly Throne Room</strong> &mdash; God enthroned in glory,
                    surrounded by 24 elders and 4 living creatures in ceaseless praise: &ldquo;Holy,
                    holy, holy, Lord God Almighty, who was and is and is to come&rdquo; (echoing
                    Isaiah 6 and Ezekiel 1)
                  </li>
                  <li>
                    <strong>Rev 5: The Scroll Sealed Seven Times</strong> &mdash; no one in all
                    creation is worthy to open it; John weeps; then &ldquo;the Lion of Judah, the
                    Root of David&rdquo; is announced &mdash; and appears as &ldquo;a Lamb standing,
                    as though it had been slain&rdquo;
                  </li>
                  <li>
                    <strong>The Theological Point:</strong> Christ is sovereign over all of history;
                    he has <em>already</em> won the decisive victory through the cross; the entire
                    book of Revelation is the Lamb&rsquo;s unfolding of what is already accomplished
                  </li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed">
                The paradox of the Lion/Lamb &mdash; announced as conquering Lion, revealed as
                slaughtered Lamb &mdash; is the heart of Revelation&rsquo;s theology. It declares
                that God&rsquo;s sovereign power operates through self-giving love, not coercive
                force. The Lamb conquers by being slain.
              </p>
            </div>
          </div>
        )}

        {/* ==================== TAB 3: THE SEVEN CHURCHES ==================== */}
        {activeTab === 'seven-churches' && (
          <div className="space-y-8">
            {/* Letters to Real Churches */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Letters to Real Historical Churches</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Revelation 2&ndash;3 contains seven letters to seven actual Christian communities
                in the Roman province of Asia (modern western Turkey). These are not allegorical
                placeholders; they are addressed to real congregations with real problems that
                John knew from pastoral experience.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">
                  The Recurring Pattern of Each Letter
                </h3>
                <ul className="text-amber-800 space-y-2 text-sm">
                  <li><strong>Description of Christ:</strong> drawn from the vision in Rev 1, tailored to each church&rsquo;s situation</li>
                  <li><strong>Commendation:</strong> what the church is doing right (&ldquo;I know your works&hellip;&rdquo;)</li>
                  <li><strong>Criticism:</strong> what needs to change (absent in Smyrna and Philadelphia)</li>
                  <li><strong>Warning or encouragement:</strong> consequence of faithfulness or failure</li>
                  <li><strong>Promise:</strong> &ldquo;to the one who conquers&rdquo; &mdash; a distinct eschatological reward for each church</li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed">
                The letters reveal the actual pressures on first-century Christians: emperor
                worship (required by the imperial cult), economic exclusion (trade guilds in Asia
                Minor required acknowledgment of patron deities as a condition of doing business),
                false teaching from within, wealth-induced complacency, and violent persecution.
              </p>
            </div>

            {/* The Seven Churches */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Seven Churches and Their Messages</h2>
              </div>

              <div className="space-y-4">
                <div className="bg-blue-50 p-5 rounded-lg">
                  <h3 className="text-base font-semibold text-blue-900 mb-2">Ephesus &mdash; Rev 2:1&ndash;7</h3>
                  <p className="text-blue-800 text-sm">
                    Commended for doctrinal soundness and rejection of false apostles. Criticized:
                    &ldquo;You have abandoned the love you had at first.&rdquo; Warning: repent
                    or the lampstand will be removed. Promise: the tree of life.
                  </p>
                </div>

                <div className="bg-blue-50 p-5 rounded-lg">
                  <h3 className="text-base font-semibold text-blue-900 mb-2">Smyrna &mdash; Rev 2:8&ndash;11</h3>
                  <p className="text-blue-800 text-sm">
                    No criticism. Suffering community; materially poor but spiritually rich.
                    &ldquo;Be faithful unto death, and I will give you the crown of life.&rdquo;
                    The paradigmatic church under persecution.
                  </p>
                </div>

                <div className="bg-blue-50 p-5 rounded-lg">
                  <h3 className="text-base font-semibold text-blue-900 mb-2">Pergamum &mdash; Rev 2:12&ndash;17</h3>
                  <p className="text-blue-800 text-sm">
                    Located where &ldquo;Satan&rsquo;s throne is&rdquo; (the great altar of Zeus
                    and the imperial cult temple). Some have compromised with false teaching
                    (the Nicolaitan doctrine) and idol food. Call to repentance.
                  </p>
                </div>

                <div className="bg-blue-50 p-5 rounded-lg">
                  <h3 className="text-base font-semibold text-blue-900 mb-2">Thyatira &mdash; Rev 2:18&ndash;29</h3>
                  <p className="text-blue-800 text-sm">
                    Commended for growth in love and service. Criticized for tolerating
                    &ldquo;Jezebel,&rdquo; a prophetess leading members into sexual immorality
                    and the eating of food sacrificed to idols (a common trade-guild compromise).
                  </p>
                </div>

                <div className="bg-blue-50 p-5 rounded-lg">
                  <h3 className="text-base font-semibold text-blue-900 mb-2">Sardis &mdash; Rev 3:1&ndash;6</h3>
                  <p className="text-blue-800 text-sm">
                    &ldquo;You have a reputation for being alive, but you are dead.&rdquo;
                    Spiritually complacent; good reputation with no substance. Only a small
                    remnant has not soiled its garments.
                  </p>
                </div>

                <div className="bg-blue-50 p-5 rounded-lg">
                  <h3 className="text-base font-semibold text-blue-900 mb-2">Philadelphia &mdash; Rev 3:7&ndash;13</h3>
                  <p className="text-blue-800 text-sm">
                    No criticism. Small but faithful; &ldquo;I have set before you an open door,
                    which no one is able to shut.&rdquo; Commended for keeping Christ&rsquo;s
                    word and not denying his name under pressure.
                  </p>
                </div>

                <div className="bg-blue-50 p-5 rounded-lg">
                  <h3 className="text-base font-semibold text-blue-900 mb-2">Laodicea &mdash; Rev 3:14&ndash;22</h3>
                  <p className="text-blue-800 text-sm">
                    The famous &ldquo;lukewarm&rdquo; church. Wealthy, self-sufficient, spiritually
                    blind. &ldquo;I am about to spit you out of my mouth.&rdquo; Christ stands at
                    the door knocking: &ldquo;If anyone hears my voice and opens the door, I will
                    come in to him and eat with him, and he with me.&rdquo;
                  </p>
                </div>
              </div>
            </div>

            {/* Universal Application */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Globe className="w-6 h-6 text-green-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Universal Application</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The seven churches represent the whole Church (7 = completeness) in every age and
                culture. This is the reason the letters are addressed to &ldquo;the seven
                churches,&rdquo; not to the wider Roman Empire or to humanity in general: they
                are addressed to <em>us</em>.
              </p>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-green-900 mb-3">Questions for Every Generation</h3>
                <ul className="text-green-800 space-y-2 text-sm">
                  <li>Do we have the first love of Ephesus &mdash; or have we become merely orthodox without fire?</li>
                  <li>Do we bear the suffering witness of Smyrna without compromise?</li>
                  <li>Have we accommodated ourselves to the &ldquo;Pergamum&rdquo; pressure of cultural idol worship?</li>
                  <li>Do we have the &ldquo;Sardis&rdquo; reputation for life while being spiritually dead?</li>
                  <li>Are we the &ldquo;Laodicea&rdquo; of our age &mdash; wealthy, comfortable, and oblivious?</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* ==================== TAB 4: SYMBOLIC LANGUAGE ==================== */}
        {activeTab === 'symbolic-language' && (
          <div className="space-y-8">
            {/* Throne Room Imagery */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Crown className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Throne Room Imagery (Rev 4&ndash;5)</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Revelation&rsquo;s heavenly throne room in chapters 4&ndash;5 is built almost
                entirely from Old Testament imagery, which original readers saturated in the
                Hebrew Scriptures would have recognized immediately. Modern readers who do not
                know Ezekiel 1, Isaiah 6, and Daniel 7 will inevitably misread Revelation.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">Key Symbols Decoded</h3>
                <ul className="text-amber-800 space-y-2 text-sm">
                  <li>
                    <strong>24 Elders:</strong> Likely the 12 patriarchs of Israel + the 12 apostles &mdash;
                    the whole people of God, Old and New Covenants together before the throne
                  </li>
                  <li>
                    <strong>4 Living Creatures</strong> (lion, ox, man, eagle): Draw on Ezekiel 1 and
                    Isaiah 6; traditionally interpreted as the four evangelists (Matthew/man, Mark/lion,
                    Luke/ox, John/eagle) and as all of creation in worship before God
                  </li>
                  <li>
                    <strong>The Sea of Glass:</strong> The separation between God&rsquo;s holiness and
                    creation; at the end (Rev 21:1) &ldquo;the sea was no more&rdquo; &mdash; direct
                    access restored
                  </li>
                  <li>
                    <strong>&ldquo;Holy, Holy, Holy&rdquo;:</strong> The <em>Trisagion</em> from
                    Isaiah 6:3, woven into the Church&rsquo;s liturgy as the Sanctus of the Mass
                  </li>
                </ul>
              </div>
            </div>

            {/* Babylon / The Whore */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <Landmark className="w-6 h-6 text-red-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Babylon / The Whore (Rev 17&ndash;18)</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Revelation 17&ndash;18 presents one of the book&rsquo;s most powerful symbolic
                figures: the Great Whore Babylon, seated on the Beast, on &ldquo;seven
                mountains&rdquo; (17:9), drunk with &ldquo;the blood of the saints and the blood
                of the witnesses to Jesus&rdquo; (17:6). For original readers, this figure needed
                no decoding: it is Rome.
              </p>

              <div className="bg-red-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-red-900 mb-3">
                  Rome as &ldquo;Babylon&rdquo;
                </h3>
                <ul className="text-red-800 space-y-2 text-sm">
                  <li><strong>&ldquo;Seven mountains&rdquo; (Rev 17:9):</strong> Rome was universally known as the city on seven hills; ancient sources routinely use this description</li>
                  <li><strong>&ldquo;Drunk with the blood of saints&rdquo;:</strong> Rome had murdered Peter, Paul, and thousands of Christians in the arenas under Nero</li>
                  <li><strong>&ldquo;Babylon&rdquo; as a cipher for Rome:</strong> Also used in 1 Peter 5:13 (&ldquo;She who is at Babylon&hellip; greets you&rdquo;), confirming it was a common early Christian code</li>
                  <li><strong>Universal application:</strong> Any empire or culture that oppresses God&rsquo;s people and demands ultimate allegiance inherits the &ldquo;Babylon&rdquo; symbol</li>
                </ul>
              </div>
            </div>

            {/* Mark of the Beast */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-red-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Mark of the Beast (666)</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Rev 13:16&ndash;18 describes a mark on the right hand or forehead, without which
                &ldquo;no one can buy or sell,&rdquo; and identifies it with the number 666, &ldquo;the
                number of a man.&rdquo; This passage has generated more speculation and fear than
                almost any other in the Bible. Understanding its historical context dissolves
                most of that speculation.
              </p>

              <div className="bg-red-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-red-900 mb-3">What 666 Meant to Original Readers</h3>
                <p className="text-red-800 mb-3">
                  <em>Gematria</em> is the ancient practice of assigning numerical values to letters.
                  The Hebrew letters of &ldquo;Nero Caesar&rdquo; (NRWN QSR) sum to exactly 666:
                  N(50) + R(200) + W(6) + N(50) + Q(100) + S(60) + R(200) = 666. This
                  is now the strong scholarly consensus. The &ldquo;mark&rdquo; itself refers to
                  participation in the Roman imperial cult &mdash; the economic and religious system
                  that excluded those who refused to acknowledge the emperor as divine.
                </p>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">What 666 Does NOT Refer To</h3>
                <p className="text-amber-800 mb-3">
                  Despite recurring claims, there is no credible scholarly or magisterial basis for
                  identifying the &ldquo;mark of the Beast&rdquo; with: Universal Product Code
                  (UPC) barcodes, RFID microchips, Social Security numbers, credit cards, COVID-19
                  vaccines, or any current technology. Each generation has proposed its own
                  candidate; each has been wrong. The mark&rsquo;s deeper application is to any
                  system that demands ultimate loyalty against God &mdash; a category that applies
                  to many situations across history.
                </p>
              </div>
            </div>

            {/* The New Jerusalem */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-green-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The New Jerusalem (Rev 21&ndash;22)</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The climax of Revelation is not judgment but renewal &mdash; the descent of the
                New Jerusalem from heaven, the dwelling of God with humanity, and the restoration
                of creation. This is not a retreat from the earth but its transformation.
              </p>

              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-green-900 mb-3">
                  The New Jerusalem: Key Symbols
                </h3>
                <ul className="text-green-800 space-y-2 text-sm">
                  <li><strong>A city descending from heaven:</strong> The New Creation comes as God&rsquo;s gift, not human achievement</li>
                  <li><strong>Dimensions (12,000 stadia, perfectly cubical):</strong> Symbolic completeness; the cube shape echoes the Holy of Holies in Solomon&rsquo;s Temple &mdash; the whole city is God&rsquo;s presence</li>
                  <li><strong>12 gates (named for the 12 tribes), 12 foundations (named for the 12 apostles):</strong> The whole people of God, Old and New Testaments, constitute the city</li>
                  <li><strong>No temple:</strong> &ldquo;The Lord God Almighty and the Lamb are its temple&rdquo; &mdash; the separation is ended; direct access</li>
                  <li><strong>No sun or moon:</strong> &ldquo;The Lamb is its lamp&rdquo; &mdash; God&rsquo;s own light fills everything</li>
                  <li><strong>The River of Life and the Tree of Life (Rev 22:1&ndash;2):</strong> Eden restored; the curse of Genesis 3 is reversed; death is no more</li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-green-900 mb-3">
                  The Final Promise
                </h3>
                <p className="text-green-800 italic mb-3">
                  &ldquo;The throne of God and of the Lamb will be in it, and his servants will
                  worship him. They will see his face, and his name will be on their foreheads.
                  And night will be no more. They will need no light of lamp or sun, for the
                  Lord God will be their light, and they will reign forever and ever.&rdquo;
                </p>
                <p className="text-green-700 text-sm">&mdash; Revelation 22:3&ndash;5</p>
              </div>
            </div>
          </div>
        )}

        {/* ==================== TAB 5: CATHOLIC INTERPRETATION ==================== */}
        {activeTab === 'catholic-reading' && (
          <div className="space-y-8">
            {/* Recapitulationist Reading */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Layers className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Recapitulationist Reading (Amillennial)</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The dominant reading in Catholic tradition goes back to Tyconius (c. 380 AD) and
                Augustine (<em>City of God</em>, Book XX, c. 420 AD). It is broadly called
                &ldquo;amillennialism&rdquo; &mdash; not because it denies the millennium, but
                because it reads the &ldquo;1,000 years&rdquo; as the present Church age rather
                than a literal future period.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">Key Elements of the Catholic Reading</h3>
                <ul className="text-amber-800 space-y-2 text-sm">
                  <li><strong>The three septets (seals, trumpets, bowls) recapitulate:</strong> they are parallel coverages of the same Church-age period, not successive future chapters</li>
                  <li><strong>The &ldquo;1,000 years&rdquo; (Rev 20):</strong> symbolizes the current Church age between Christ&rsquo;s Resurrection and the Parousia</li>
                  <li><strong>Satan is &ldquo;bound&rdquo;:</strong> in the sense that the Gospel can now spread to all nations (cf. Matt 12:29 &mdash; the strong man is bound)</li>
                  <li><strong>The &ldquo;first resurrection&rdquo;:</strong> baptism and spiritual regeneration; the &ldquo;second resurrection&rdquo; is the bodily resurrection at the Last Day</li>
                  <li><strong>Grounding in the whole NT:</strong> Christ has <em>already</em> conquered (Col 2:15); we are <em>already</em> &ldquo;seated with him in heavenly places&rdquo; (Eph 2:6)</li>
                </ul>
              </div>
            </div>

            {/* Key Fathers and Theologians */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Quote className="w-6 h-6 text-purple-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Key Church Fathers and Theologians</h2>
              </div>

              <div className="space-y-4">
                <div className="bg-purple-50 p-5 rounded-lg">
                  <h3 className="text-base font-semibold text-purple-900 mb-2">Tyconius (~380 AD)</h3>
                  <p className="text-purple-800 text-sm">
                    A Donatist scholar whose <em>Liber Regularum</em> (Book of Rules) established the
                    symbolic, recapitulationist reading of Revelation. Although Donatist, his biblical
                    hermeneutic was so sound that Augustine incorporated it wholesale, and it became
                    the foundation of mainstream Catholic Revelation interpretation.
                  </p>
                </div>

                <div className="bg-purple-50 p-5 rounded-lg">
                  <h3 className="text-base font-semibold text-purple-900 mb-2">St. Augustine, <em>City of God</em> Book XX (~420 AD)</h3>
                  <p className="text-purple-800 text-sm">
                    The most influential Catholic reading of Revelation in Church history. Augustine
                    argues that the &ldquo;1,000 years&rdquo; of Rev 20 represents the Church age;
                    the &ldquo;first resurrection&rdquo; is the conversion and baptism of sinners;
                    the &ldquo;city of God&rdquo; versus the &ldquo;city of man&rdquo; is the
                    fundamental eschatological tension of all history. This reading prevailed and
                    has been the standard Catholic approach ever since.
                  </p>
                </div>

                <div className="bg-purple-50 p-5 rounded-lg">
                  <h3 className="text-base font-semibold text-purple-900 mb-2">Cardinal Joseph Ratzinger / Pope Benedict XVI, <em>Eschatology</em> (1977)</h3>
                  <p className="text-purple-800 text-sm">
                    A comprehensive Catholic eschatology; skeptical of all literalistic end-times
                    readings; focused on the theological content of Christian hope: the resurrection,
                    purgatory, heaven, and the final consummation. The most rigorous modern Catholic
                    treatment of the subject.
                  </p>
                </div>
              </div>
            </div>

            {/* CCC on Revelation */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <ScrollText className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The CCC on Revelation</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The Catechism does not comment verse-by-verse on Revelation, but uses it
                extensively in presenting Catholic teaching on eschatology and the New Creation.
                The key texts are concentrated in CCC 668&ndash;682 and 1020&ndash;1060.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">Key Catechism Uses of Revelation</h3>
                <ul className="text-blue-800 space-y-2 text-sm">
                  <li><strong>Rev 1:8 (&ldquo;Alpha and Omega&rdquo;):</strong> Cited in CCC 2 on God&rsquo;s eternal nature and purpose in creation</li>
                  <li><strong>Rev 7:9 (the great multitude):</strong> Cited in CCC 1045 on the New Jerusalem as the goal of all history</li>
                  <li><strong>Rev 20:12 (the books opened at judgment):</strong> Cited in CCC 1040 on the Last Judgment</li>
                  <li><strong>Rev 21:1&ndash;5 (all things new):</strong> Cited in CCC 1042&ndash;1043 on the renewal of the universe</li>
                </ul>
              </div>

              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-red-900 mb-3">CCC 676: The Definitive Rejection of Millenarianism</h3>
                <p className="text-red-800 italic mb-3">
                  &ldquo;The Antichrist&rsquo;s deception already begins to take shape in the world
                  every time the claim is made to realize within history that messianic hope which
                  can only be realized beyond history through the eschatological judgement. The
                  Church has rejected even modified forms of this falsification of the kingdom
                  to come under the name of millenarianism, especially the &lsquo;intrinsically
                  perverse&rsquo; political form of a secular messianism.&rdquo;
                </p>
                <p className="text-red-700 text-sm">&mdash; CCC 676</p>
              </div>
            </div>
          </div>
        )}

        {/* ==================== TAB 6: REVELATION & TODAY ==================== */}
        {activeTab === 'revelation-today' && (
          <div className="space-y-8">
            {/* Revelation as Pastoral Document */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-green-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Revelation as Pastoral Document</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Revelation was written to encourage suffering Christians. Its primary purpose is
                not prediction &mdash; it is encouragement. Understanding this pastoral purpose
                transforms how we read the book.
              </p>

              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-green-900 mb-3">
                  The Central Message of Revelation
                </h3>
                <p className="text-green-800 italic mb-3">
                  &ldquo;I know your tribulation and your poverty (but you are rich) and the slander
                  of those who say that they are Jews and are not, but are a synagogue of Satan.
                  Do not fear what you are about to suffer. Behold, the devil is about to throw
                  some of you into prison, that you may be tested, and for ten days you will have
                  tribulation. Be faithful unto death, and I will give you the crown of life.&rdquo;
                </p>
                <p className="text-green-700 text-sm">&mdash; Revelation 2:9&ndash;10 (to Smyrna)</p>
              </div>

              <p className="text-gray-700 leading-relaxed">
                Every generation since the 1st century has been tempted to identify its own
                political crises as the &ldquo;final tribulation&rdquo; and its own persecutors
                as &ldquo;the Antichrist.&rdquo; Every such identification has eventually been
                proven wrong. But the message &mdash; God is sovereign; the Lamb has conquered;
                bear up in faithfulness &mdash; has proven true in every generation and remains
                directly applicable to Christians under pressure today.
              </p>
            </div>

            {/* Liturgical Reading */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Church className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Liturgical Reading of Revelation</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                A characteristically Catholic way to read Revelation is through the lens of the
                Mass. Scott Hahn&rsquo;s <em>The Lamb&rsquo;s Supper</em> (Doubleday, 1999) argues
                &mdash; drawing on patristic and liturgical tradition &mdash; that the best
                commentary on Revelation is not a prophecy handbook but the Order of the Mass
                itself. The Catholic liturgy is the earthly participation in the heavenly liturgy
                of Revelation 4&ndash;5.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">Revelation in the Mass</h3>
                <ul className="text-amber-800 space-y-2 text-sm">
                  <li><strong>Sanctus (&ldquo;Holy, Holy, Holy&rdquo;):</strong> Directly from Rev 4:8 and Isaiah 6:3 &mdash; the ceaseless hymn of the four living creatures</li>
                  <li><strong>The Gloria:</strong> Echoes the hymns of praise in Rev 4&ndash;5</li>
                  <li><strong>The Eucharistic Prayer:</strong> Contains elements of the heavenly liturgy &mdash; the incense of prayers, the altar, the Lamb who was slain</li>
                  <li><strong>The Communion rite:</strong> Prefigures the Wedding Feast of the Lamb (Rev 19:9)</li>
                </ul>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg">
                <p className="text-amber-800 italic mb-3">
                  &ldquo;In the earthly liturgy we take part in a foretaste of that heavenly liturgy
                  which is celebrated in the holy city of Jerusalem toward which we journey as
                  pilgrims, where Christ is sitting at the right hand of God.&rdquo;
                </p>
                <p className="text-amber-700 text-sm">&mdash; CCC 1090, citing <em>Sacrosanctum Concilium</em> 8</p>
              </div>
            </div>

            {/* Already but Not Yet */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <ArrowRight className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Living in the &ldquo;Already but Not Yet&rdquo;</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The entire New Testament is shaped by a fundamental eschatological tension:
                the Kingdom of God has <em>already</em> come in Christ&rsquo;s death and
                resurrection; it has <em>not yet</em> come in its fullness. Revelation gives
                this tension its most dramatic expression.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div className="bg-green-50 p-5 rounded-lg">
                  <h3 className="text-base font-semibold text-green-900 mb-3">Already</h3>
                  <ul className="text-green-800 text-sm space-y-2">
                    <li>Christ has risen from the dead</li>
                    <li>The Spirit has been poured out on the Church</li>
                    <li>Satan has been &ldquo;cast down&rdquo; (Rev 12:9; John 12:31)</li>
                    <li>Death has been conquered in principle (1 Cor 15:54&ndash;55)</li>
                    <li>We are &ldquo;already&rdquo; seated with Christ in heavenly places (Eph 2:6)</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-5 rounded-lg">
                  <h3 className="text-base font-semibold text-blue-900 mb-3">Not Yet</h3>
                  <ul className="text-blue-800 text-sm space-y-2">
                    <li>We still suffer, die, and experience evil</li>
                    <li>Christ has not yet returned in glory</li>
                    <li>The dead have not yet been raised in body</li>
                    <li>Creation has not yet been renewed</li>
                    <li>God&rsquo;s Kingdom has not yet been fully manifested</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">
                  Revelation&rsquo;s Final Prayer
                </h3>
                <p className="text-blue-800 italic mb-3">
                  &ldquo;He who testifies to these things says, &lsquo;Surely I am coming
                  soon.&rsquo; Amen. Come, Lord Jesus!&rdquo;
                </p>
                <p className="text-blue-700 text-sm">&mdash; Revelation 22:20</p>
                <p className="text-blue-800 text-sm mt-3">
                  <em>Maranatha</em> (&ldquo;Come, Lord&rdquo;; 1 Cor 16:22) &mdash; the earliest
                  Christian prayer, preserved in Aramaic, expressing the Church&rsquo;s perennial
                  longing for the fullness of God&rsquo;s Kingdom. This is the final word of
                  Revelation and of the entire New Testament: not fear, not calculation, but
                  longing.
                </p>
              </div>
            </div>

            {/* Approved Resources */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Approved Resources</h2>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-amber-50 p-5 rounded-lg">
                  <h3 className="text-base font-semibold text-amber-900 mb-3">Magisterial Documents</h3>
                  <ul className="text-amber-800 text-sm space-y-2">
                    <li><em>Catechism of the Catholic Church</em>, 668&ndash;682, 1020&ndash;1060 (especially 1042&ndash;1044 on the New Creation)</li>
                    <li>Augustine, <em>City of God</em>, Book XX &mdash; the classic Catholic reading</li>
                    <li><em>Sacrosanctum Concilium</em> 8 (CCC 1090 on liturgy as foretaste of heaven)</li>
                  </ul>
                </div>
                <div className="bg-amber-50 p-5 rounded-lg">
                  <h3 className="text-base font-semibold text-amber-900 mb-3">Scholarly Works</h3>
                  <ul className="text-amber-800 text-sm space-y-2">
                    <li>Joseph Ratzinger / Benedict XVI, <em>Eschatology: Death and Eternal Life</em> (CUA Press, 1988)</li>
                    <li>Scott Hahn, <em>The Lamb&rsquo;s Supper</em> (Doubleday, 1999)</li>
                    <li>G.K. Beale, <em>The Book of Revelation</em> (NIGTC, 1999)</li>
                    <li>Michael Gorman, <em>Reading Revelation Responsibly</em> (Cascade, 2011)</li>
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
