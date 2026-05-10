'use client'

import { useState } from 'react'
import {
  BookOpen,
  Heart,
  Cross,
  MapPin,
  ScrollText,
  Compass,
  ArrowRight,
} from 'lucide-react'

type TabId =
  | 'origin-history'
  | 'traditional-stations'
  | 'scriptural-stations'
  | 'how-to-pray'
  | 'theology-of-the-cross'
  | 'carrying-your-cross'

const tabs: { id: TabId; label: string }[] = [
  { id: 'origin-history', label: 'Origin & History' },
  { id: 'traditional-stations', label: 'Traditional 14 Stations' },
  { id: 'scriptural-stations', label: 'The Scriptural Stations' },
  { id: 'how-to-pray', label: 'How to Pray' },
  { id: 'theology-of-the-cross', label: 'Theology of the Cross' },
  { id: 'carrying-your-cross', label: 'Carrying Your Cross' },
]

export default function WayOfTheCrossPage() {
  const [activeTab, setActiveTab] = useState<TabId>('origin-history')

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Way of the Cross
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The history, structure, and theology of the Via Crucis &mdash; from the streets of Jerusalem
            to the churches of the world, tracing Christ&rsquo;s steps from Pilate&rsquo;s court to Calvary.
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

        {/* ==================== TAB 1: ORIGIN & HISTORY ==================== */}
        {activeTab === 'origin-history' && (
          <div className="space-y-8">

            {/* Card 1: Pilgrimage to Jerusalem */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Christian Pilgrimage to Jerusalem</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                From the earliest centuries of the Church, Christians made pilgrimages to the holy sites
                of the Passion. The route Jesus walked from Pilate&rsquo;s judgment hall to Calvary became
                the <strong>Via Dolorosa</strong> &mdash; the &ldquo;Way of Suffering&rdquo; &mdash; in
                Jerusalem. Egeria&rsquo;s <em>Itinerarium</em> (late 4th century) describes processions
                along this route during Holy Week, with the faithful gathering at sacred sites to hear
                the Gospel accounts read aloud in the very places where they occurred.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                The impulse behind this pilgrimage was not merely archaeological curiosity but a
                profound desire to pray <em>in loco</em> &mdash; in the actual places where salvation
                was won. The stones of Jerusalem became sacramental in the minds of early pilgrims:
                places where the Word made flesh had suffered, wept, and died. Helena, mother of
                Emperor Constantine, made a famous pilgrimage to Jerusalem around 326 AD and oversaw
                the identification and veneration of the holy sites, including Golgotha and the Holy
                Sepulchre. The Church of the Holy Sepulchre, consecrated in 335 AD, became the
                destination of countless pilgrims from across the known world.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">
                  Egeria&rsquo;s Itinerarium (late 4th century)
                </h3>
                <p className="text-amber-800 mb-3">
                  Egeria, a Western pilgrim (possibly a Spanish nun), left one of the most detailed
                  accounts of liturgical practice in fourth-century Jerusalem. She describes the Holy
                  Week ceremonies: on Good Friday, the faithful gathered at Golgotha from noon until
                  three in the afternoon, listening to readings from all the Gospels concerning the
                  Passion. This communal, site-specific walking and praying of the Passion narrative
                  is the direct ancestor of the Way of the Cross as it developed in subsequent centuries.
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed">
                By the medieval period, the desire to walk in Christ&rsquo;s footsteps had become one of
                the most powerful forces in Catholic spirituality. Pilgrimage to Jerusalem was the
                supreme act of devotion &mdash; but it was expensive, dangerous (especially during
                the Crusades and their aftermath), and impossible for most Christians. The challenge
                was to find a way to make this transformative journey accessible to ordinary believers
                who could not travel to the Holy Land.
              </p>
            </div>

            {/* Card 2: The Franciscans as Guardians */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Cross className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Franciscans as Guardians of the Holy Land</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                In 1342, Pope Clement VI entrusted the care of the holy sites in Jerusalem to the
                Franciscan Order. The Franciscans became the <strong>Custodians of the Holy Land</strong>
                &mdash; a role they hold to this day. Their presence in Jerusalem gave them an intimate
                familiarity with the actual route of the Via Dolorosa and a pastoral concern for pilgrims
                who came to walk it.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                As pilgrimage became increasingly dangerous and expensive &mdash; particularly after
                the Ottoman conquest of Jerusalem in 1517 &mdash; the Franciscans began promoting
                &ldquo;spiritual pilgrimages&rdquo;: the practice of praying a structured series of
                stations in one&rsquo;s local church, meditating on the events of the Passion as if
                one were physically present in Jerusalem. This democratization of the Passion pilgrimage
                was one of the most significant acts of pastoral creativity in medieval Catholicism.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Franciscan preachers &mdash; especially St. Leonard of Port Maurice (1676&ndash;1746),
                who is said to have erected over 500 sets of stations &mdash; became the great apostles
                of the Way of the Cross throughout Europe. Their mendicant preaching missions invariably
                included the erection of stations and the teaching of this devotion to ordinary
                laypeople. St. Francis of Assisi himself had a profound devotion to the Passion of
                Christ, receiving the stigmata in 1224 &mdash; the wounds of Christ in his own body
                &mdash; and his order carried this Passion-centered spirituality into every corner
                of Christendom.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">
                  St. Leonard of Port Maurice
                </h3>
                <p className="text-amber-800">
                  This Franciscan missionary, canonized by Pius IX in 1867, was the greatest promoter
                  of the Way of the Cross in the 18th century. He erected stations in venues including
                  the Colosseum in Rome (1749), where the Via Crucis remains a living practice to this
                  day. Pope John Paul II led the Good Friday Stations of the Cross at the Colosseum
                  annually throughout his pontificate.
                </p>
              </div>
            </div>

            {/* Card 3: Development of the 14 Stations */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <ScrollText className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Development of the 14 Stations</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The number of stations was not fixed at 14 from the beginning. Various sets of stations
                &mdash; 7, 12, 14, and 15 &mdash; were used in different times and places, reflecting
                different emphases in the Passion narrative and varying pastoral traditions. The
                seven-station form was common in early Franciscan practice; other traditions used
                twelve stations corresponding to hours of the day.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                The 14-station form was standardized by the Franciscans in the 17th and 18th centuries.
                The papal history of indulgences attached to the stations reflects the gradual
                standardization of this form:
              </p>

              <div className="space-y-3 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="font-semibold text-blue-900">1686 &mdash; Pope Innocent XI</p>
                  <p className="text-blue-800 text-sm">Approved indulgences for the Franciscan churches
                  in Jerusalem for those who prayed the stations erected there.</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="font-semibold text-blue-900">1726 &mdash; Pope Benedict XIII</p>
                  <p className="text-blue-800 text-sm">Extended the indulgences to all churches
                  with properly erected stations &mdash; a landmark decision that spread the devotion
                  universally.</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="font-semibold text-blue-900">1731 &mdash; Pope Clement XII</p>
                  <p className="text-blue-800 text-sm">Confirmed and standardized the earlier grants,
                  establishing the canonical form of 14 stations with wooden crosses as the basis for
                  the indulgence &mdash; the form that persists to this day.</p>
                </div>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">
                  The Art Tradition
                </h3>
                <p className="text-amber-800 mb-3">
                  The stations became one of the most important commissions in Catholic church art
                  &mdash; relief carvings, paintings, frescoes, and stained glass. Great artists
                  (including followers of El Greco and Caravaggio, and countless anonymous craftsmen)
                  created station images that both beautified churches and served as visual aids for
                  the illiterate faithful meditating on the Passion. The <em>Stabat Mater</em>
                  (&ldquo;The sorrowful mother stood&rdquo;), attributed to Jacopone da Todi (13th
                  century), became the great medieval hymn accompanying the devotion &mdash; sung
                  between stations in the communal celebration.
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Many churches, shrines, and retreat centers built outdoor Stations of the Cross
                &mdash; from the elaborate baroque stations in Bavarian mountain churches to simple
                wooden crosses in gardens and hillsides. The tradition spread worldwide with Catholic
                missions: from the Philippines to South America, from sub-Saharan Africa to North
                America, the Way of the Cross became a universal Catholic practice.
              </p>

              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-purple-900 mb-3">
                  A Pilgrimage in Miniature
                </h3>
                <p className="text-purple-800">
                  The Way of the Cross combines bodily movement &mdash; walking from station to
                  station &mdash; with meditation. It is a pilgrimage in miniature. The faithful
                  literally trace the path of Christ&rsquo;s Passion in their bodies, not just their
                  minds. This embodied quality &mdash; the procession, the kneeling, the movement
                  &mdash; distinguishes the Way of the Cross from purely intellectual meditation and
                  gives it a distinctive sacramental character as prayer involving the whole person.
                </p>
              </div>
            </div>

          </div>
        )}

        {/* ==================== TAB 2: TRADITIONAL 14 STATIONS ==================== */}
        {activeTab === 'traditional-stations' && (
          <div className="space-y-8">

            {/* Intro Card */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Cross className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Traditional 14 Stations</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                The traditional 14 stations combine events explicitly narrated in the Gospel Passion
                accounts with events drawn from pious tradition &mdash; particularly the three falls
                of Jesus under the weight of the cross, and Veronica wiping his face. These traditional
                stations, while not all directly in Scripture, carry deep theological meaning developed
                over centuries of meditation on the Passion.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Each station is listed below with its scriptural or traditional basis and a brief
                note on its theological significance. References cite the NABRE.
              </p>
            </div>

            {/* Stations 1-7 */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Stations I &ndash; VII</h2>
              <div className="space-y-6">

                <div className="border-l-4 border-amber-400 pl-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-1">
                    I. Jesus is condemned to death
                  </h3>
                  <p className="text-sm text-amber-700 font-medium mb-2">Matt 27:24&ndash;26</p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Pilate washes his hands; the crowd chooses Barabbas. Jesus is sentenced despite
                    Pilate finding no guilt in him. The condemnation of the innocent by human authority
                    fulfills the Servant Songs of Isaiah and reveals the depth of human injustice that
                    the Son of God chose to enter and redeem.
                  </p>
                </div>

                <div className="border-l-4 border-amber-400 pl-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-1">
                    II. Jesus takes up the Cross
                  </h3>
                  <p className="text-sm text-amber-700 font-medium mb-2">John 19:17</p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    &ldquo;Carrying the cross by himself, he went out to what is called The Place of the
                    Skull.&rdquo; The weight of the world&rsquo;s sin borne on the shoulders of the Lamb.
                    John&rsquo;s account does not mention Simon of Cyrene &mdash; perhaps a deliberate
                    theological emphasis on Christ carrying his own cross as the new Isaac carrying
                    the wood for his own sacrifice (cf. Gen 22:6).
                  </p>
                </div>

                <div className="border-l-4 border-gray-300 pl-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-1">
                    III. Jesus falls the first time
                  </h3>
                  <p className="text-sm text-gray-500 font-medium mb-2">Traditional (cf. Isa 53:6)</p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Not directly narrated in the Gospels; derived from Isa 53:6 and traditional
                    accounts of the Via Dolorosa. The physical exhaustion from the scourging, blood
                    loss, and crown of thorns is medically credible. Spiritually, the three falls of
                    Jesus mirror the repeated failures of humanity &mdash; and God&rsquo;s patient
                    willingness to rise again for our sake.
                  </p>
                </div>

                <div className="border-l-4 border-gray-300 pl-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-1">
                    IV. Jesus meets his Mother
                  </h3>
                  <p className="text-sm text-gray-500 font-medium mb-2">Traditional (cf. John 19:25&ndash;27)</p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Not explicitly narrated in the Passion accounts, though John 19:25&ndash;27 places
                    Mary at Calvary. The meeting along the way is a theological elaboration drawn from
                    Mary&rsquo;s presence throughout the Passion narrative. Mary the co-sufferer &mdash;
                    the <em>Mater Dolorosa</em> &mdash; fulfills Simeon&rsquo;s prophecy that a sword
                    would pierce her own soul (Luke 2:35).
                  </p>
                </div>

                <div className="border-l-4 border-amber-400 pl-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-1">
                    V. Simon of Cyrene carries the Cross
                  </h3>
                  <p className="text-sm text-amber-700 font-medium mb-2">Luke 23:26; Mark 15:21</p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Simon is &ldquo;pressed into service&rdquo; as he comes in from the country. Mark names
                    his sons Alexander and Rufus &mdash; apparently known to the early Christian community
                    (cf. Rom 16:13). A model of involuntary discipleship that becomes voluntary: Simon
                    did not choose to carry the cross, yet in doing so he became the first disciple
                    literally to take up Christ&rsquo;s cross (cf. Luke 9:23).
                  </p>
                </div>

                <div className="border-l-4 border-gray-300 pl-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-1">
                    VI. Veronica wipes the face of Jesus
                  </h3>
                  <p className="text-sm text-gray-500 font-medium mb-2">Traditional</p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Not found in the canonical Gospels. The <em>Vera Icon</em> (&ldquo;true image&rdquo;)
                    &mdash; the cloth bearing Christ&rsquo;s face &mdash; is venerated in St. Peter&rsquo;s
                    Basilica. The name &ldquo;Veronica&rdquo; may itself be a folk etymology from
                    <em>vera icon</em>. Theologically, the station meditates on the human desire to
                    see the face of Christ (Ps 27:8) and the compassionate act of offering small
                    comforts in the face of great suffering.
                  </p>
                </div>

                <div className="border-l-4 border-gray-300 pl-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-1">
                    VII. Jesus falls the second time
                  </h3>
                  <p className="text-sm text-gray-500 font-medium mb-2">Traditional</p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Traditional; from the weight of the cross and continuing physical deterioration.
                    The second fall deepens the meditation on Christ&rsquo;s complete embrace of human
                    weakness &mdash; the all-powerful God choosing to be utterly powerless, that no
                    human being might ever feel that their weakness places them beyond Christ&rsquo;s
                    understanding.
                  </p>
                </div>

              </div>
            </div>

            {/* Stations 8-14 */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Stations VIII &ndash; XIV</h2>
              <div className="space-y-6">

                <div className="border-l-4 border-amber-400 pl-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-1">
                    VIII. Jesus meets the women of Jerusalem
                  </h3>
                  <p className="text-sm text-amber-700 font-medium mb-2">Luke 23:27&ndash;31</p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    &ldquo;Daughters of Jerusalem, do not weep for me, weep for yourselves and for your
                    children.&rdquo; A prophetic saying about the coming destruction of Jerusalem in 70 AD
                    &mdash; Christ&rsquo;s concern, even in his own suffering, is for those around him.
                    This station invites meditation on how Christ&rsquo;s Passion is always oriented
                    outward, toward the salvation of others.
                  </p>
                </div>

                <div className="border-l-4 border-gray-300 pl-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-1">
                    IX. Jesus falls the third time
                  </h3>
                  <p className="text-sm text-gray-500 font-medium mb-2">Traditional</p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Traditional; the final near-complete exhaustion before reaching Golgotha. In many
                    spiritual interpretations the three falls correspond to the three times Peter
                    denied Christ &mdash; and the three times Christ rose each time, as an answer
                    to every human failure and denial.
                  </p>
                </div>

                <div className="border-l-4 border-amber-400 pl-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-1">
                    X. Jesus is stripped of his garments
                  </h3>
                  <p className="text-sm text-amber-700 font-medium mb-2">John 19:23&ndash;24; Ps 22:18</p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    &ldquo;They divided my clothes among them and cast lots for my garment.&rdquo; The
                    humiliation and explicit fulfillment of prophecy (Ps 22:18). Catholic spirituality
                    reads this station as an invitation to detachment &mdash; the stripping of all
                    that the world values: dignity, reputation, status &mdash; so that the soul
                    may be clothed with Christ alone.
                  </p>
                </div>

                <div className="border-l-4 border-amber-400 pl-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-1">
                    XI. Jesus is nailed to the Cross
                  </h3>
                  <p className="text-sm text-amber-700 font-medium mb-2">John 19:18; Luke 23:33&ndash;34</p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    &ldquo;Father, forgive them, for they know not what they do.&rdquo; The nailing:
                    archaeological evidence from the Yohanan ben Hagkol ossuary (discovered 1968)
                    confirms Roman crucifixion practice &mdash; a nail driven through the heel bones.
                    Even at the moment of greatest agony, Christ prays for his executioners. The first
                    word from the cross is forgiveness.
                  </p>
                </div>

                <div className="border-l-4 border-amber-400 pl-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-1">
                    XII. Jesus dies on the Cross
                  </h3>
                  <p className="text-sm text-amber-700 font-medium mb-2">John 19:30; Luke 23:46</p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    &ldquo;It is finished&rdquo; (<em>Tetelestai</em> &mdash; the debt paid, the mission
                    accomplished). &ldquo;Father, into your hands I commend my spirit.&rdquo; The curtain
                    of the Temple torn in two (Matt 27:51) &mdash; the barrier between God and humanity
                    rent open. The soldier pierces his side and blood and water flow (John 19:34)
                    &mdash; read by the Fathers as the birth of the Church in Baptism and Eucharist.
                  </p>
                </div>

                <div className="border-l-4 border-amber-400 pl-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-1">
                    XIII. Jesus is taken down from the Cross
                  </h3>
                  <p className="text-sm text-amber-700 font-medium mb-2">John 19:38&ndash;40</p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Joseph of Arimathea and Nicodemus &mdash; both secret disciples who emerge at the
                    moment of Christ&rsquo;s death &mdash; take down the body with reverence. Mary
                    holds the body of her Son: the <em>Piet&agrave;</em> tradition, made immortal by
                    Michelangelo. The urgency of burial before sunset (beginning of Sabbath) underscores
                    the historical concreteness of the Passion.
                  </p>
                </div>

                <div className="border-l-4 border-amber-400 pl-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-1">
                    XIV. Jesus is laid in the tomb
                  </h3>
                  <p className="text-sm text-amber-700 font-medium mb-2">John 19:41&ndash;42; Matt 27:60</p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Joseph&rsquo;s own new tomb in a garden near Golgotha. The great stone sealed.
                    &ldquo;The Word was made flesh and dwelt among us&rdquo; &mdash; now he lies in
                    silence, awaiting the dawn of the third day. The sealed tomb is not the end of
                    the story; it is the penultimate moment before the definitive act of God&rsquo;s
                    power in the Resurrection.
                  </p>
                </div>

              </div>
            </div>

            {/* Note on 15th station */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-green-900 mb-3">
                  A Note on the 15th Station
                </h3>
                <p className="text-green-800">
                  Some traditions add a 15th station &mdash; <strong>The Resurrection</strong> &mdash;
                  to complete the Paschal Mystery rather than end in death. This addition has been
                  encouraged by several popes as a reminder that the Way of the Cross, rightly
                  understood, leads not to a sealed tomb but to an empty one. The cross is not the
                  last word; it is the door through which the last word &mdash; &ldquo;He is risen&rdquo;
                  &mdash; is spoken.
                </p>
              </div>
            </div>

          </div>
        )}

        {/* ==================== TAB 3: SCRIPTURAL STATIONS ==================== */}
        {activeTab === 'scriptural-stations' && (
          <div className="space-y-8">

            {/* Background Card */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Scriptural Stations of the Cross</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                In 1991, Pope John Paul II introduced a new set of 14 stations for the traditional
                Good Friday <em>Via Crucis</em> at the Colosseum in Rome. All 14 stations are drawn
                directly from Scripture &mdash; replacing the three falls and Veronica (which are pious
                traditions, not scriptural) with explicitly biblical moments from the Passion narrative.
                These are commonly known as the <strong>Scriptural Stations</strong> or
                <strong>JPII&rsquo;s Via Crucis</strong>.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                JPII&rsquo;s use of the scriptural stations at the Colosseum reflected his commitment
                to biblical renewal in Catholic devotional life following Vatican II&rsquo;s
                <em>Dei Verbum</em>. The scriptural stations are also widely used in ecumenical
                services: because all 14 stations are taken directly from the canonical Gospels,
                Protestant communities can participate in the devotion more readily than in a form
                that includes pious traditions not found in Scripture.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">
                  Ecumenical Value
                </h3>
                <p className="text-blue-800">
                  JPII&rsquo;s introduction of the scriptural stations was a fruit of the ecumenical
                  spirit of Vatican II. Protestant and Anglican communities have used these stations
                  in joint Good Friday services, finding a common Passion narrative in Scripture
                  alone. The Congregation for Divine Worship (2007) clarified that the traditional
                  14 stations remain the normative form for indulgences, but the scriptural stations
                  are fully licit for parish celebrations and personal devotion.
                </p>
              </div>
            </div>

            {/* The 14 Scriptural Stations */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">The 14 Scriptural Stations</h2>
              <div className="space-y-5">

                {[
                  {
                    num: 'I',
                    title: 'Jesus in the Garden of Gethsemane',
                    ref: 'Matt 26:36–41',
                    desc: 'The agony in the garden: “Not my will, but yours, be done.” The scriptural stations begin before the arrest, at the moment of Christ’s supreme act of surrender to the Father’s will. The disciples sleep; Jesus watches and prays — alone in the darkness, sweating blood (Luke 22:44).',
                  },
                  {
                    num: 'II',
                    title: 'Jesus, betrayed by Judas, is arrested',
                    ref: 'Mark 14:43–46',
                    desc: 'Judas identifies Jesus with a kiss — the ultimate betrayal of friendship. Jesus is handed over by one of the Twelve, fulfilling his own prediction. The arrest in the garden mirrors the first disobedience in a garden (Eden); Christ’s obedience in Gethsemane begins to undo what Adam’s disobedience caused.',
                  },
                  {
                    num: 'III',
                    title: 'Jesus is condemned by the Sanhedrin',
                    ref: 'Luke 22:66–71',
                    desc: 'The high priest asks directly: “Are you the Son of God?” Jesus answers: “You say that I am.” The Sanhedrin condemns him for blasphemy — because he tells the truth. The irony is total: the Son of God is condemned for claiming to be who he is.',
                  },
                  {
                    num: 'IV',
                    title: 'Jesus is denied by Peter',
                    ref: 'Matt 26:75',
                    desc: '“And he went out and wept bitterly.” The first pope denies Christ three times — and is broken by it. This station meditates on human weakness, the sorrow of betrayal from within the inner circle, and Christ’s subsequent restoration of Peter (John 21:15–17): “Do you love me?”',
                  },
                  {
                    num: 'V',
                    title: 'Jesus is judged by Pilate',
                    ref: 'Mark 15:1–5, 15',
                    desc: 'Pilate finds no guilt in Jesus but delivers him to be crucified to satisfy the crowd. Political cowardice confronts divine innocence. Pilate’s question “What is truth?” (John 18:38) becomes history’s most ironic question — posed to the one who is the Truth (John 14:6).',
                  },
                  {
                    num: 'VI',
                    title: 'Jesus is scourged and crowned with thorns',
                    ref: 'John 19:1–3',
                    desc: 'The soldiers mock the King of Kings with purple robe and crown of thorns. The scourging — 39 lashes by Roman custom — fulfills Isaiah 53:5: “By his wounds we are healed.” The mockery of royal insignia reveals the paradox at the heart of the Gospel: the true King comes not in power but in suffering.',
                  },
                  {
                    num: 'VII',
                    title: 'Jesus takes up his cross',
                    ref: 'John 19:6b, 15b–17',
                    desc: '“Carrying the cross himself, he went out.” The voluntary acceptance of the instrument of death is itself a theological statement: no one takes Christ’s life from him; he lays it down of his own accord (John 10:18).',
                  },
                  {
                    num: 'VIII',
                    title: 'Simon of Cyrene helps Jesus carry the cross',
                    ref: 'Mark 15:20–21',
                    desc: 'Pressed into service, Simon becomes the first person to literally fulfill the dominical command: “Take up your cross and follow me.” His sons Alexander and Rufus were apparently known to Mark’s community — a detail that gives this station historical specificity and suggests a family whose faith was shaped by their father’s encounter with Christ.',
                  },
                  {
                    num: 'IX',
                    title: 'Jesus meets the women of Jerusalem',
                    ref: 'Luke 23:27–31',
                    desc: '“Daughters of Jerusalem, do not weep for me; weep for yourselves and for your children.” Even on the way to his death, Christ turns prophet, warning of the coming destruction of Jerusalem. His compassion is for others, not himself.',
                  },
                  {
                    num: 'X',
                    title: 'Jesus is crucified',
                    ref: 'Luke 23:33–34',
                    desc: '“Father, forgive them, for they know not what they do.” The first word from the cross is an intercession for his executioners. The crucifixion at “The Skull” (Golgotha/Calvary) is the center of history: the place where God’s love and human sin meet definitively, and love wins.',
                  },
                  {
                    num: 'XI',
                    title: 'Jesus promises his kingdom to the good thief',
                    ref: 'Luke 23:39–43',
                    desc: '“Today you will be with me in Paradise.” The last person converted by the earthly Christ is a condemned criminal. This station, unique to the scriptural form, is a profound meditation on the mercy of God: no one is too far gone, no death-bed conversion too late.',
                  },
                  {
                    num: 'XII',
                    title: 'Jesus speaks to his mother and the beloved disciple',
                    ref: 'John 19:25–27',
                    desc: '“Woman, behold your son… Behold your mother.” From the cross, Jesus entrusts Mary to John and John to Mary. Catholic tradition reads this as the spiritual motherhood of Mary over all the disciples — the Church is born at the foot of the cross.',
                  },
                  {
                    num: 'XIII',
                    title: 'Jesus dies on the cross',
                    ref: 'Luke 23:44–46',
                    desc: '“Father, into your hands I commend my spirit.” The darkness over the land, the tearing of the Temple curtain, the final commendation of his spirit to the Father: Jesus dies as he lived — in total trust and surrender to God. “It is finished” (John 19:30): the redemption is accomplished.',
                  },
                  {
                    num: 'XIV',
                    title: 'Jesus is laid in the tomb',
                    ref: 'Matt 27:57–60',
                    desc: 'Joseph of Arimathea, a disciple, buries Jesus in his own new tomb. The stone is rolled to the door. Silence. The disciples are scattered and afraid. But the silence of Holy Saturday is not emptiness — it is the silence before the most world-shaking event in history.',
                  },
                ].map((station) => (
                  <div key={station.num} className="border-l-4 border-amber-400 pl-6">
                    <h3 className="text-base font-bold text-gray-800 mb-1">
                      {station.num}. {station.title}
                    </h3>
                    <p className="text-sm text-amber-700 font-medium mb-2">{station.ref}</p>
                    <p className="text-gray-700 text-sm leading-relaxed">{station.desc}</p>
                  </div>
                ))}

              </div>
            </div>

            {/* Comparison Card */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Compass className="w-6 h-6 text-purple-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Comparing the Two Forms</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-amber-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-amber-900 mb-3">Traditional Stations</h3>
                  <ul className="text-amber-800 text-sm space-y-2">
                    <li>Includes three falls (devotionally rich tradition)</li>
                    <li>Includes Veronica (theologically significant &mdash; the <em>vera icon</em>)</li>
                    <li>The canonical form for the plenary indulgence</li>
                    <li>Reflects 700+ years of Catholic Passion piety</li>
                    <li>Includes meeting of Jesus and Mary</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-3">Scriptural Stations (JPII)</h3>
                  <ul className="text-blue-800 text-sm space-y-2">
                    <li>All 14 stations from the canonical Gospels</li>
                    <li>Includes Gethsemane, Judas&rsquo; betrayal, Peter&rsquo;s denial</li>
                    <li>Includes the good thief and John 19:25&ndash;27</li>
                    <li>Ideal for ecumenical settings</li>
                    <li>Reflects post-Vatican II biblical renewal</li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">
                Both forms are fully licit and spiritually fruitful. The traditional stations carry
                the weight of centuries of Catholic Passion piety; the scriptural stations bring the
                faithful into direct contact with the Gospel texts. Many spiritual directors recommend
                alternating between the two forms during Lent, allowing each to illuminate different
                dimensions of the Passion.
              </p>
            </div>

          </div>
        )}

        {/* ==================== TAB 4: HOW TO PRAY ==================== */}
        {activeTab === 'how-to-pray' && (
          <div className="space-y-8">

            {/* Basic Structure */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Basic Structure</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The Way of the Cross has no single mandatory form: it is a structured meditation rather
                than a liturgical rite requiring exact prescribed texts. What is essential is movement
                from station to station with prayerful attention to Christ&rsquo;s Passion. The following
                describes the most common form used in Catholic parishes.
              </p>

              <div className="space-y-4 mb-6">
                <div className="bg-amber-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-amber-900 mb-2">1. Opening</h3>
                  <p className="text-amber-800 text-sm">
                    Begin at the first station with an act of contrition or a brief prayer expressing
                    the intention: to meditate on Christ&rsquo;s Passion for the remission of sins
                    and the salvation of souls. The leader may begin with the Sign of the Cross and
                    a short prayer inviting the Holy Spirit to open the heart to the mystery of
                    Christ&rsquo;s suffering.
                  </p>
                </div>
                <div className="bg-amber-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-amber-900 mb-2">2. At Each Station</h3>
                  <p className="text-amber-800 text-sm">
                    The leader announces: &ldquo;The [N]th Station: [Title].&rdquo; A brief Scripture
                    passage or meditation text is read. A moment of silence is observed. The traditional
                    versicle and response is prayed: <em>&ldquo;We adore you, O Christ, and we praise
                    you. Because by your holy cross you have redeemed the world.&rdquo;</em> A short
                    prayer concludes the station.
                  </p>
                </div>
                <div className="bg-amber-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-amber-900 mb-2">3. Between Stations</h3>
                  <p className="text-amber-800 text-sm">
                    The congregation moves to the next station. The <em>Stabat Mater</em> or another
                    Passion hymn may be sung between stations &mdash; one verse or stanza between
                    each. In silent individual prayer, the movement itself is the prayer: walking
                    slowly, holding the intention.
                  </p>
                </div>
                <div className="bg-amber-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-amber-900 mb-2">4. Closing</h3>
                  <p className="text-amber-800 text-sm">
                    After the 14th station, a closing prayer is offered. Many forms include a brief
                    meditation on the Resurrection, reminding the faithful that the Way of the Cross
                    leads to Easter. A final blessing may be given if led by a priest or deacon.
                  </p>
                </div>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-purple-900 mb-3">
                  The Traditional Versicle
                </h3>
                <p className="text-purple-800 italic text-center text-lg mb-2">
                  &ldquo;We adore you, O Christ, and we praise you.&rdquo;
                </p>
                <p className="text-purple-700 italic text-center text-lg">
                  &ldquo;Because by your holy cross you have redeemed the world.&rdquo;
                </p>
              </div>
            </div>

            {/* Individual Prayer */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Individual & Communal Prayer</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-3">Individual Prayer</h3>
                  <p className="text-blue-800 text-sm leading-relaxed">
                    One can walk the stations alone in a church, kneeling briefly at each one. A
                    prayer booklet guides the meditation &mdash; many approved booklets exist, including
                    those written by St. Alphonsus Liguori, Cardinal Newman, and Pope John Paul II.
                    Individual prayer allows a deeper, more personal pace: one may spend five minutes
                    at a station that particularly speaks to one&rsquo;s own life.
                  </p>
                </div>
                <div className="bg-green-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-3">Communal Prayer</h3>
                  <p className="text-green-800 text-sm leading-relaxed">
                    Led by a priest, deacon, or lay leader. Popular in parishes on the Fridays of
                    Lent, especially Good Friday. Groups in many cultures walk outdoor stations
                    carrying a cross &mdash; the Filipino <em>Visita Iglesia</em>, the Latin American
                    Via Crucis procession, and the Rome Colosseum stations led by the Pope all
                    demonstrate the universality of this communal form.
                  </p>
                </div>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">
                  Prayer Books for the Way of the Cross
                </h3>
                <ul className="text-amber-800 text-sm space-y-2">
                  <li><strong>St. Alphonsus Liguori</strong> &mdash; <em>The Way of the Cross</em>: The most widely used traditional booklet; rich in acts of contrition and love at each station.</li>
                  <li><strong>Cardinal Newman</strong> &mdash; <em>Meditations on the Stations of the Cross</em>: Theologically deep; recommended for those who want extended meditation.</li>
                  <li><strong>Pope John Paul II</strong> &mdash; <em>Via Crucis al Colosseo</em>: The scriptural stations with JPII&rsquo;s own meditations; available in multiple languages.</li>
                  <li><strong>Pope Francis</strong> &mdash; has written several Good Friday Via Crucis meditations for the Colosseum; often centered on contemporary themes of suffering and mercy.</li>
                </ul>
              </div>
            </div>

            {/* Indulgences */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <ScrollText className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Plenary Indulgence</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                A plenary indulgence is granted for piously walking the Way of the Cross. The
                <em>Enchiridion Indulgentiarum</em> (the Church&rsquo;s official handbook of indulgences)
                sets out the conditions:
              </p>

              <div className="space-y-3 mb-6">
                {[
                  { num: '1', text: 'Meditate prayerfully on the Passion and death of Christ while moving from station to station.' },
                  { num: '2', text: 'Move from station to station in the prescribed order. If physically unable to move, one can gain a partial indulgence by meditating for at least half an hour on the Passion.' },
                  { num: '3', text: 'The stations must be legitimately erected — 14 crosses (with images optional) installed in a church or oratory with proper ecclesiastical approval.' },
                  { num: '4', text: 'Be in the state of grace (free from mortal sin).' },
                  { num: '5', text: 'Receive sacramental Confession within 20 days before or after.' },
                  { num: '6', text: 'Receive Holy Communion (Eucharist).' },
                  { num: '7', text: 'Pray for the intentions of the Holy Father.' },
                ].map((item) => (
                  <div key={item.num} className="flex gap-3 bg-amber-50 p-4 rounded-lg">
                    <span className="w-7 h-7 bg-amber-700 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {item.num}
                    </span>
                    <p className="text-amber-800 text-sm">{item.text}</p>
                  </div>
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed">
                The Way of the Cross can take as little as 15 minutes or as long as 2 hours depending
                on the depth of meditation chosen. There is no required format &mdash; what matters
                is prayerful attention to the suffering of Christ and a willingness to allow his
                Passion to speak to one&rsquo;s own life.
              </p>
            </div>

            {/* Stations in Lent */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Compass className="w-6 h-6 text-purple-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Way of the Cross in Lent</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Friday is the traditional day of penance in the Church &mdash; the day of the
                crucifixion. During Lent, many parishes offer communal Stations of the Cross every
                Friday evening, often followed by Benediction of the Blessed Sacrament. It is one
                of the primary ways Catholics enter into the Lenten season of penance and preparation.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Rome&rsquo;s Colosseum stations on Good Friday &mdash; led annually by the Pope &mdash;
                are a global event, broadcast and watched by millions worldwide. Many pilgrimage
                sites (F&aacute;tima, Lourdes, Czestochowa) feature prominent outdoor Stations of
                the Cross, some set in dramatic natural landscapes, integrating the mystery of the
                Passion with creation.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">
                  Flexibility of Format
                </h3>
                <p className="text-amber-800">
                  The Way of the Cross can be prayed in 15 minutes or 2 hours. It can be led by a
                  priest at the altar rail, or walked alone in an empty church on a Tuesday afternoon.
                  It can be prayed as a family around printed images, or on a mountainside shrine in
                  Bavaria. The essential element is not the format but the intention: to accompany
                  Christ on the way of his Passion, and to allow his love to transform the one who
                  prays.
                </p>
              </div>
            </div>

          </div>
        )}

        {/* ==================== TAB 5: THEOLOGY OF THE CROSS ==================== */}
        {activeTab === 'theology-of-the-cross' && (
          <div className="space-y-8">

            {/* The Paschal Mystery */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Cross className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Paschal Mystery</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The Way of the Cross immerses the faithful in the central mystery of the Christian
                faith: the Paschal Mystery &mdash; Christ&rsquo;s suffering, death, and resurrection
                as the one act of redemption. The <em>Catechism of the Catholic Church</em> states
                plainly: &ldquo;The Paschal mystery of Christ&rsquo;s cross and Resurrection stands
                at the center of the Good News that the apostles, and the Church following them,
                are to proclaim to the world&rdquo; (CCC 571).
              </p>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">
                  CCC 571&ndash;630: The Paschal Mystery
                </h3>
                <p className="text-amber-800 italic mb-2">
                  &ldquo;The Paschal mystery of Christ&rsquo;s cross and Resurrection stands at the
                  center of the Good News that the apostles, and the Church following them, are to
                  proclaim to the world. God&rsquo;s saving plan was accomplished &lsquo;once for all&rsquo;
                  by the redemptive death of his Son Jesus Christ.&rdquo;
                </p>
                <p className="text-amber-700 text-sm">&mdash; CCC 571</p>
              </div>

              <p className="text-gray-700 leading-relaxed">
                The cross is not an unfortunate episode in the life of a good teacher; it is the
                definitive act of God&rsquo;s love, the moment when the eternal Son of God took upon
                himself the full weight of human sin, suffering, and death, and transformed them
                from within by his own divine life. The Way of the Cross is not a meditation on
                tragedy; it is a meditation on how tragedy becomes triumph through love.
              </p>
            </div>

            {/* Scandalon and Foolishness */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Scandalon & Foolishness: Paul&rsquo;s Paradox</h2>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <p className="text-blue-800 italic text-lg mb-2">
                  &ldquo;We preach Christ crucified, a stumbling block to Jews and foolishness to
                  Gentiles, but to those who are called, both Jews and Greeks, Christ the power of
                  God and the wisdom of God.&rdquo;
                </p>
                <p className="text-blue-700 text-sm">&mdash; 1 Cor 1:23&ndash;24</p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Paul&rsquo;s great paradox stands at the heart of Christian theology. The cross is a
                <em>skandalon</em> &mdash; a stumbling block, an offense &mdash; to those who expect
                a conquering Messiah (the Jewish expectation) or a wise philosopher (the Greek
                expectation). A God who suffers and dies on a criminal&rsquo;s instrument of execution
                looks like defeat.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                But Paul inverts the categories: the cross is not failure but the definitive act of
                divine wisdom and power. God&rsquo;s &ldquo;weakness&rdquo; (1 Cor 1:25) is stronger
                than human strength; his &ldquo;foolishness&rdquo; is wiser than human wisdom. This
                inversion &mdash; the last shall be first, the servant the greatest, the condemned
                the savior &mdash; is the permanent scandal of the Gospel. The Way of the Cross
                forces the believer to pray this scandal into their bones, to accept that God&rsquo;s
                logic is not ours.
              </p>
            </div>

            {/* Salvifici Doloris */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <ScrollText className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800"><em>Salvifici Doloris</em> &mdash; JPII on Redemptive Suffering</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                On February 11, 1984, Pope John Paul II issued <em>Salvifici Doloris</em>
                (&ldquo;On the Christian Meaning of Human Suffering&rdquo;), his major apostolic
                letter on the theology of suffering. It remains one of the most profound Catholic
                documents of the 20th century.
              </p>

              <div className="space-y-4 mb-6">
                <div className="bg-amber-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-amber-900 mb-2">Key Theme 1: The Universal Human Experience</h3>
                  <p className="text-amber-800 text-sm">
                    Suffering is universal and irreducibly human. Every person, in every time and
                    culture, encounters the mystery of suffering &mdash; physical, psychological,
                    moral, spiritual. JPII refuses to explain suffering away; he faces it directly
                    as the central problem of human existence.
                  </p>
                </div>
                <div className="bg-amber-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-amber-900 mb-2">Key Theme 2: Christ&rsquo;s Passion as the Definitive Answer</h3>
                  <p className="text-amber-800 text-sm">
                    Christ&rsquo;s Passion does not abolish suffering or explain it philosophically;
                    it transforms it from within. By entering into the worst suffering that humanity
                    can endure, the Son of God makes it possible for every human suffering to be
                    joined to his. Suffering has not been destroyed; it has been redeemed.
                  </p>
                </div>
                <div className="bg-amber-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-amber-900 mb-2">Key Theme 3: Completing What Is Lacking in Christ&rsquo;s Afflictions</h3>
                  <p className="text-amber-800 text-sm">
                    Col 1:24: &ldquo;I rejoice in my sufferings for your sake, and in my flesh I am
                    filling up what is lacking in Christ&rsquo;s afflictions.&rdquo; JPII interprets
                    this not as Christ&rsquo;s redemption being incomplete but as human beings being
                    called to enter into the mystery of Christ&rsquo;s suffering &mdash; to allow
                    their own suffering to become salvific for others when united to his.
                  </p>
                </div>
                <div className="bg-amber-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-amber-900 mb-2">Key Theme 4: The Dignity of Suffering</h3>
                  <p className="text-amber-800 text-sm">
                    Suffering united with Christ is not meaningless or wasted. It has salvific value
                    &mdash; for the one who suffers and for others. This is the foundation of the
                    Catholic tradition of &ldquo;offering up&rdquo; suffering as prayer, and of the
                    Church&rsquo;s accompaniment of the sick and dying as a genuine pastoral and
                    theological mission.
                  </p>
                </div>
              </div>
            </div>

            {/* Cross and Eucharist */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-green-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Cross and the Eucharist</h2>
              </div>

              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-green-900 mb-3">
                  CCC 1366&ndash;1367
                </h3>
                <p className="text-green-800 italic mb-2">
                  &ldquo;The sacrifice of Christ and the sacrifice of the Eucharist are one single
                  sacrifice: &lsquo;The victim is one and the same: the same now offers through the
                  ministry of priests, who then offered himself on the cross; only the manner of
                  offering is different.&rsquo;&rdquo;
                </p>
                <p className="text-green-700 text-sm">&mdash; CCC 1367, quoting the Council of Trent</p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The Eucharist makes present the one sacrifice of the cross &mdash; not a repetition
                but a re-presentation, rendering present again the one event of Calvary across time.
                The Way of the Cross, prayed in the context of a parish community on a Friday in
                Lent, leads naturally to the Sunday Mass as its completion: the community that walks
                the Stations on Friday gathers at the altar on Sunday to receive the Body and Blood
                of the one who walked to Calvary.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">
                  The Theology of the Wounds
                </h3>
                <p className="text-amber-800 mb-3">
                  The risen Christ retains his wounds (John 20:27 &mdash; Thomas sees the wounds).
                  Catholic theology reads these glorified wounds as permanent: they are not erased
                  by the Resurrection but transformed. The wounds of Christ in his risen body become
                  sources of grace and mercy rather than signs of defeat. &ldquo;By his wounds you
                  have been healed&rdquo; (1 Pet 2:24; Isa 53:5) &mdash; past tense, accomplished
                  once for all, yet perpetually efficacious in the glorified body of the Risen Lord.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">
                  Mary&rsquo;s Role: Co-suffering, Not Co-redemption
                </h3>
                <p className="text-blue-800">
                  The term <em>co-redemptrix</em> has been used by many popes and theologians to
                  describe Mary&rsquo;s role in the Passion &mdash; she co-suffered with Christ, and
                  Simeon&rsquo;s sword (Luke 2:35) was fulfilled at Calvary. The title has never been
                  formally defined as dogma; the Church has not prohibited it but has not elevated
                  it to dogmatic status. What is clear: Mary&rsquo;s role is entirely subordinate to
                  Christ&rsquo;s. She does not redeem alongside him on equal footing; she participates
                  in his redemption as its most perfect recipient and cooperator, by God&rsquo;s
                  gift, not by her own autonomous merit.
                </p>
              </div>
            </div>

          </div>
        )}

        {/* ==================== TAB 6: CARRYING YOUR CROSS ==================== */}
        {activeTab === 'carrying-your-cross' && (
          <div className="space-y-8">

            {/* The Dominical Command */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Cross className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Dominical Command</h2>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <p className="text-amber-800 italic text-lg mb-2">
                  &ldquo;Then he said to all, &lsquo;If any want to become my followers, let them deny
                  themselves and take up their cross daily and follow me.&rsquo;&rdquo;
                </p>
                <p className="text-amber-700 text-sm">&mdash; Luke 9:23</p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The word &ldquo;daily&rdquo; is crucial and easily overlooked. Jesus is not speaking
                only of dramatic martyrdom or heroic self-sacrifice. He is describing the ordinary
                Christian life &mdash; the daily practice of dying to self, renouncing what is
                contrary to God, and following Christ through the small deaths that constitute a
                faithful life: patience in annoyance, fidelity in tedium, love in ingratitude.
              </p>

              <p className="text-gray-700 leading-relaxed">
                The Way of the Cross, prayed regularly, trains the believer to see their own life
                through the lens of the Passion. Each station becomes a mirror: not just a historical
                scene from first-century Jerusalem but a pattern that repeats in every human life
                that chooses to follow Christ. The Way of the Cross is ultimately not about Jesus;
                it is about what it means for us to walk the same way.
              </p>
            </div>

            {/* Stations as Examination of Conscience */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Compass className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Stations as Examination of Conscience</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Each station corresponds to interior spiritual realities that the honest believer
                recognizes in their own life. The following is one classic approach, long used in
                Lenten retreats:
              </p>

              <div className="space-y-4 mb-6">
                {[
                  {
                    station: 'Jesus condemned',
                    reflection: 'Times I was unjustly judged, and how I responded. Times I judged others unfairly or condemned without mercy.',
                  },
                  {
                    station: 'Jesus falls',
                    reflection: 'My own repeated failures — the same sins I confess again and again. God\'s patient willingness to raise me each time, not because I deserve it but because he loves me.',
                  },
                  {
                    station: 'Meeting his Mother',
                    reflection: 'The role of family in bearing suffering. Those who have walked beside me in my own Via Dolorosa.',
                  },
                  {
                    station: 'Simon of Cyrene',
                    reflection: 'The unexpected ways God uses others to bear my burdens — and asks me to help others with theirs, even when I didn\'t volunteer.',
                  },
                  {
                    station: 'The women of Jerusalem',
                    reflection: 'Compassion in the face of suffering. The times I walked past suffering without stopping.',
                  },
                  {
                    station: 'Stripping of garments',
                    reflection: 'Detachment from dignity, reputation, status. The things I cling to that prevent full surrender to God.',
                  },
                  {
                    station: 'The Crucifixion',
                    reflection: 'Complete self-gift. What would it mean for me to say, with Christ: "Not my will, but yours"?',
                  },
                ].map((item) => (
                  <div key={item.station} className="bg-blue-50 p-4 rounded-lg">
                    <p className="font-semibold text-blue-900 mb-1"><em>{item.station}</em></p>
                    <p className="text-blue-800 text-sm">{item.reflection}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Uniting Suffering with Christ */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Uniting Suffering with Christ</h2>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">
                  <em>Salvifici Doloris</em> &sect;19 (JPII, 1984)
                </h3>
                <p className="text-amber-800 italic mb-2">
                  &ldquo;In the Cross of Christ not only is the Redemption accomplished through
                  suffering, but also human suffering itself has been redeemed.&rdquo;
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Suffering united to Christ&rsquo;s is not wasted. It does not disappear into
                meaninglessness. In the economy of salvation, it has value &mdash; for the person
                who suffers and for others. This is the foundation of the ancient Catholic practice
                of &ldquo;offering up&rdquo; pain, illness, frustration, grief: not as a masochistic
                indulgence but as a deliberate act of union with the crucified Christ, whose own
                suffering has been shown to be redemptive.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">
                  <em>Spe Salvi</em> &sect;&sect;37&ndash;40 (Benedict XVI, 2007)
                </h3>
                <p className="text-blue-800 italic mb-2">
                  &ldquo;It is not by sidestepping or fleeing from suffering that we are healed,
                  but rather by our capacity for accepting it, maturing through it and finding
                  meaning through union with Christ, who suffered with infinite love.&rdquo;
                </p>
                <p className="text-blue-700 text-sm mb-3">&mdash; <em>Spe Salvi</em>, &sect;37</p>
                <p className="text-blue-800 text-sm">
                  Benedict draws on the examples of the Ugandan martyrs and Josephine Bakhita
                  (a Sudanese slave who endured horrific suffering before converting and becoming
                  a joyful religious) to illustrate how suffering, when accepted and united with
                  Christ, is transformed by hope. The key is not stoic endurance but the active
                  love that gives suffering its meaning.
                </p>
              </div>
            </div>

            {/* Stations in Spiritual Direction */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <ScrollText className="w-6 h-6 text-purple-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Stations in Spiritual Direction & The Forward Vision</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Many spiritual directors use the Stations of the Cross as a framework for reviewing
                a directed retreat or a period of spiritual dryness. The sequence of events mirrors
                the classic pattern of the soul&rsquo;s journey in mystical theology: surrender (the
                condemnation and taking up of the cross), repeated falling and rising (the three falls),
                unexpected help (Simon), compassionate accompaniment (the women and Mary), stripping
                away of what is false (the garments), and finally complete self-gift at the
                crucifixion. Each &ldquo;fall&rdquo; in prayer is not defeat but an occasion for
                divine mercy and a deeper surrender.
              </p>

              <div className="bg-purple-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-purple-900 mb-3">
                  The Via Crucis and the Resurrection
                </h3>
                <p className="text-purple-800">
                  The Way of the Cross, properly understood, does not end at the tomb. The 14th
                  station points forward &mdash; the sealed tomb will be opened on the third day.
                  Every cross borne in union with Christ contains within it the seed of resurrection.
                  The Christian does not walk the Via Crucis in despair; they walk it in the certain
                  hope of Easter. The silence of the sealed tomb is not the final word; it is the
                  pause before the definitive word that God speaks in the Resurrection.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <a
                  href="/prayer/divine-mercy"
                  className="bg-amber-50 p-5 rounded-lg hover:bg-amber-100 transition-colors group"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Heart className="w-5 h-5 text-amber-700" />
                    <h3 className="font-semibold text-amber-900">Divine Mercy</h3>
                  </div>
                  <p className="text-amber-800 text-sm mb-2">
                    The mercy flowing from Christ&rsquo;s wounded side &mdash; the completion of
                    the Cross&rsquo;s message.
                  </p>
                  <span className="text-amber-700 text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    Explore <ArrowRight className="w-4 h-4" />
                  </span>
                </a>
                <a
                  href="/history/resurrection"
                  className="bg-blue-50 p-5 rounded-lg hover:bg-blue-100 transition-colors group"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Cross className="w-5 h-5 text-blue-700" />
                    <h3 className="font-semibold text-blue-900">The Resurrection</h3>
                  </div>
                  <p className="text-blue-800 text-sm mb-2">
                    The Resurrection as history and theology &mdash; where the Via Crucis leads.
                  </p>
                  <span className="text-blue-700 text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    Explore <ArrowRight className="w-4 h-4" />
                  </span>
                </a>
                <a
                  href="/prayer/overview"
                  className="bg-green-50 p-5 rounded-lg hover:bg-green-100 transition-colors group"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <BookOpen className="w-5 h-5 text-green-700" />
                    <h3 className="font-semibold text-green-900">What Is Prayer?</h3>
                  </div>
                  <p className="text-green-800 text-sm mb-2">
                    The foundations of Catholic prayer &mdash; how the Way of the Cross fits the
                    broader tradition.
                  </p>
                  <span className="text-green-700 text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    Explore <ArrowRight className="w-4 h-4" />
                  </span>
                </a>
              </div>
            </div>

            {/* Sources */}
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
                    <li><em>Catechism of the Catholic Church</em>, &sect;&sect;571&ndash;630 (The Paschal Mystery)</li>
                    <li><em>Catechism of the Catholic Church</em>, &sect;&sect;1366&ndash;1367 (Eucharist as Sacrifice)</li>
                    <li><em>Enchiridion Indulgentiarum</em>, 4th ed. (2004) &mdash; Way of the Cross indulgence conditions</li>
                    <li>Congregation for Divine Worship, note on the Stations of the Cross (2007)</li>
                    <li>Vatican II, <em>Dei Verbum</em> &mdash; on biblical renewal in devotional life</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-3">Papal Documents</h3>
                  <ul className="text-blue-800 text-sm space-y-2">
                    <li>Pope John Paul II, <em>Salvifici Doloris</em> (February 11, 1984) &mdash; On the Christian Meaning of Human Suffering</li>
                    <li>Pope Benedict XVI, <em>Spe Salvi</em> (November 2007) &sect;&sect;37&ndash;40 &mdash; on suffering and hope</li>
                    <li>Pope John Paul II, <em>Via Crucis al Colosseo</em> (1991) &mdash; the scriptural stations text</li>
                    <li>Pope Clement XII, decree confirming stations indulgences (1731)</li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-purple-900 mb-3">Classic Devotional Sources</h3>
                  <ul className="text-purple-800 text-sm space-y-2">
                    <li>St. Alphonsus Liguori, <em>The Way of the Cross</em> (18th c.) &mdash; the most widely used traditional booklet</li>
                    <li>Cardinal John Henry Newman, <em>Meditations on the Stations of the Cross</em></li>
                    <li>Egeria, <em>Itinerarium</em> (late 4th c.) &mdash; earliest eyewitness account of Jerusalem Passion processions</li>
                    <li>Jacopone da Todi (attr.), <em>Stabat Mater</em> (13th c.) &mdash; the classic hymn of the stations</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-3">Historical &amp; Scholarly</h3>
                  <ul className="text-green-800 text-sm space-y-2">
                    <li>Herbert Thurston, SJ, <em>The Stations of the Cross: An Account of Their History and Devotional Purpose</em> (1906) &mdash; the definitive historical study</li>
                    <li>Raymond E. Brown, SS, <em>The Death of the Messiah</em>, 2 vols. (Anchor Bible Reference Library, 1994) &mdash; comprehensive exegesis of the Passion narratives</li>
                    <li>John Dominic Crossan & Jonathan L. Reed, <em>Excavating Jesus</em> (2001) &mdash; on the Yohanan crucifixion ossuary and Roman practice</li>
                    <li>Servus Gieben, OFM Cap., &ldquo;Historical Survey of the Way of the Cross,&rdquo; <em>Laurentianum</em> (1969) &mdash; scholarly history of the stations&rsquo; development</li>
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
