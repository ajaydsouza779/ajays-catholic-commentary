'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  BookOpen,
  Heart,
  Star,
  Sun,
  Moon,
  Cross,
  ArrowRight,
  Scroll,
  Globe,
  Users,
} from 'lucide-react'

type TabId =
  | 'origin-history'
  | 'joyful-mysteries'
  | 'sorrowful-mysteries'
  | 'glorious-mysteries'
  | 'luminous-mysteries'
  | 'how-to-pray'

const tabs: { id: TabId; label: string }[] = [
  { id: 'origin-history', label: 'Origin & History' },
  { id: 'joyful-mysteries', label: 'Joyful Mysteries' },
  { id: 'sorrowful-mysteries', label: 'Sorrowful Mysteries' },
  { id: 'glorious-mysteries', label: 'Glorious Mysteries' },
  { id: 'luminous-mysteries', label: 'Luminous Mysteries' },
  { id: 'how-to-pray', label: 'How to Pray the Rosary' },
]

export default function RosaryPage() {
  const [activeTab, setActiveTab] = useState<TabId>('origin-history')

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            The Holy Rosary
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A compendium of the Gospel &mdash; the history, mysteries, and practice of the Rosary,
            the most beloved Marian prayer of the Catholic Church.
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

            {/* Card 1: What Is the Rosary? */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">What Is the Rosary?</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The Rosary is a Marian prayer that combines vocal prayer with meditation on the life
                of Christ, seen through Mary&rsquo;s eyes. It weaves together the <em>Our Father</em>,
                the <em>Hail Mary</em>, and the <em>Glory Be</em> into a rhythm of contemplation,
                leading the pray-er through the great mysteries of salvation history &mdash; the
                Incarnation, the Passion, the Resurrection, and the life of the early Church.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Pope John Paul II, in his apostolic letter <em>Rosarium Virginis Mariae</em> (2002),
                called the Rosary &ldquo;a compendium of the Gospel.&rdquo; It is not, he insisted, a
                mechanical repetition of words but a deeply Christocentric meditation: each decade
                is an invitation to dwell on a specific moment in the life of Christ, with Mary as
                the model contemplative who &ldquo;kept all these things and pondered them in her
                heart&rdquo; (Luke 2:19).
              </p>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">
                  The Rosary Is Not Just Repetitive Prayer
                </h3>
                <p className="text-amber-800 mb-3">
                  Each decade of Hail Marys is meant to be a meditation on a mystery of Christ&rsquo;s
                  life. The vocal prayers create a contemplative rhythm that frees the mind and
                  heart for deeper encounter with God. Pope John Paul II described this rhythm
                  as &ldquo;a kind of mantra&rdquo; (<em>Rosarium Virginis Mariae</em> &sect;26) &mdash;
                  not in an Eastern sense but as a repetition that settles and centers the soul,
                  allowing the imagination to rest on the mystery being contemplated.
                </p>
                <p className="text-amber-700 text-sm">
                  &mdash; Cf. CCC 2708: &ldquo;Meditation engages thought, imagination, emotion, and desire.
                  This mobilization of faculties is necessary in order to deepen our convictions of
                  faith, prompt the conversion of our heart, and strengthen our will to follow Christ.&rdquo;
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed">
                The Rosary belongs to a tradition of <em>lectio divina</em> &mdash; prayerful reading
                and meditation on Scripture &mdash; that runs throughout Catholic spirituality. By
                meditating on the mysteries, the pray-er enters into the scenes of the Gospel and
                allows the Holy Spirit to apply their meaning to his or her own life.
              </p>
            </div>

            {/* Card 2: Medieval Origins */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Scroll className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Medieval Origins</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The practice of counting prayers on beads is ancient, reaching back to early
                Christian monasticism. The Desert Fathers used pebbles or knotted cords to count
                their repetitions of the Jesus Prayer or Psalms. This practice of <em>metered
                repetition</em> spread through monastic communities as a way to pray continuously
                (cf. 1 Thess 5:17).
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                By the 12th and 13th centuries, the practice of praying 150 Hail Marys &mdash;
                one for each of the 150 Psalms &mdash; had developed among lay people who could not
                recite the Latin Psalter. This &ldquo;Our Lady&rsquo;s Psalter&rdquo; became the direct
                ancestor of the Rosary as we know it. The practice spread widely in the context
                of 12th-century Marian devotion.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">
                  St. Dominic and the Dominican Tradition
                </h3>
                <p className="text-blue-800 mb-3">
                  Pious tradition credits St. Dominic de Guzm&aacute;n (1170&ndash;1221) with receiving
                  the Rosary from Our Lady herself. This is cherished tradition rather than established
                  historical fact; modern scholarship locates the standardized fifteen-decade Rosary
                  in the Dominican Confraternity movement of the 15th century. The Catechism and papal
                  documents present the Dominican connection as tradition rather than proven history.
                  What is certain is that the Dominicans became the great promoters and evangelizers
                  of the Rosary throughout Europe.
                </p>
                <p className="text-blue-700 text-sm">
                  &mdash; Cf. CCC 971: &ldquo;The Church&rsquo;s Marian prayer is not in competition with
                  the prayer addressed to God the Father, but glorifies him, since it comes from
                  him and leads back to him.&rdquo;
                </p>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">
                  Alain de la Roche (1428&ndash;1475)
                </h3>
                <p className="text-amber-800 mb-3">
                  The Flemish Dominican Alain de la Roche (Alanus de Rupe) is largely responsible
                  for the standardized form of the Rosary we pray today. Around 1470 he founded the
                  <em> Confraternity of the Most Holy Rosary</em> and promoted the fifteen-mystery,
                  150-Hail-Mary structure across northern Europe. His confraternities spread rapidly
                  and helped make the Rosary a universal Catholic devotion.
                </p>
              </div>
            </div>

            {/* Card 3: Historical Milestones */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Globe className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Historical Milestones</h2>
              </div>

              <div className="space-y-6">

                <div className="bg-blue-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-2">
                    Battle of Lepanto (1571)
                  </h3>
                  <p className="text-blue-800 text-sm">
                    Pope Pius V credited the Christian naval victory over the Ottoman fleet at
                    Lepanto to the intercession of Our Lady of the Rosary. He had called on all
                    of Europe to pray the Rosary for the fleet&rsquo;s success. Following the victory,
                    he established the feast of Our Lady of Victory (October 7), later renamed
                    Our Lady of the Rosary &mdash; still observed on October 7 to this day.
                  </p>
                </div>

                <div className="bg-amber-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-amber-900 mb-2">
                    Pope Leo XIII &mdash; &ldquo;The Pope of the Rosary&rdquo; (1878&ndash;1903)
                  </h3>
                  <p className="text-amber-800 text-sm">
                    Pope Leo XIII wrote eleven encyclicals and apostolic letters dedicated to the
                    Rosary &mdash; more than any other pope. He made October the official &ldquo;Month of
                    the Holy Rosary&rdquo; and issued <em>Supremi Apostolatus Officio</em> (1883),
                    the first of his great Rosary encyclicals. His consistent teaching: the Rosary
                    is a weapon against evil, a school of Christian life, and a source of social
                    and family renewal.
                  </p>
                </div>

                <div className="bg-green-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-2">
                    Our Lady of F&aacute;tima (1917)
                  </h3>
                  <p className="text-green-800 text-sm">
                    In each of the six apparitions at F&aacute;tima (May&ndash;October 1917), Our Lady
                    asked the shepherd children &mdash; Lucia, Francisco, and Jacinta &mdash; to pray
                    the Rosary every day &ldquo;for peace in the world and the end of the war.&rdquo; The
                    F&aacute;tima message gave the Rosary renewed urgency in the 20th century and
                    introduced the F&aacute;tima Prayer still prayed after the Glory Be at the end
                    of each decade.
                  </p>
                </div>

                <div className="bg-purple-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-purple-900 mb-2">
                    Vatican II and Lumen Gentium (1964)
                  </h3>
                  <p className="text-purple-800 text-sm">
                    The Second Vatican Council did not diminish Marian devotion but placed it
                    within its proper Christological context. Chapter 8 of <em>Lumen Gentium</em>
                    presents Mary as the pre-eminent member of the Church and model of faith, not
                    a separate figure above the Church. This Christological grounding was embraced
                    by Pope John Paul II, who made the Rosary explicitly a &ldquo;Gospel prayer&rdquo;
                    that meditates on Christ.
                  </p>
                </div>

                <div className="bg-blue-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-2">
                    Pope John Paul II &mdash; <em>Rosarium Virginis Mariae</em> (2002)
                  </h3>
                  <p className="text-blue-800 text-sm">
                    In October 2002, John Paul II declared 2002&ndash;2003 the &ldquo;Year of the Rosary&rdquo;
                    and issued <em>Rosarium Virginis Mariae</em>, one of the most important documents
                    on the Rosary ever written. He added the five Luminous Mysteries (the Mysteries
                    of Light), covering Christ&rsquo;s public ministry &mdash; a dimension absent from
                    the traditional three sets of mysteries. He called the Rosary his
                    &ldquo;favorite prayer&rdquo; and &ldquo;a compendium of the Gospel.&rdquo;
                  </p>
                </div>

              </div>
            </div>

          </div>
        )}

        {/* ==================== TAB 2: JOYFUL MYSTERIES ==================== */}
        {activeTab === 'joyful-mysteries' && (
          <div className="space-y-8">

            {/* Card 1: Introduction */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Joyful Mysteries</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The Joyful Mysteries are prayed on <strong>Mondays and Saturdays</strong>. They
                meditate on the events of the Annunciation, Incarnation, and Christ&rsquo;s hidden
                life &mdash; the &ldquo;joyful&rdquo; mysteries because they recount the dawn of salvation,
                the coming of God into the world, and the quiet years in Nazareth. They form a
                meditation on <em>humility</em> &mdash; God emptying Himself to become a child
                (Philippians 2:6&ndash;8).
              </p>

              <div className="space-y-6">

                {/* Mystery 1 */}
                <div className="bg-amber-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-amber-900 mb-2">
                    1. The Annunciation <span className="font-normal text-amber-700">(Luke 1:26&ndash;38)</span>
                  </h3>
                  <p className="text-amber-800 mb-3">
                    The Angel Gabriel announces to the Virgin Mary that she will conceive by the
                    Holy Spirit and bear the Son of God. Mary&rsquo;s response &mdash; <em>&ldquo;Let it be
                    done to me according to your word&rdquo;</em> (<em>fiat</em>) &mdash; is the pivotal
                    moment of human history: the New Eve says &ldquo;yes&rdquo; where the first Eve said
                    &ldquo;no.&rdquo; The Incarnation &mdash; God becoming flesh &mdash; begins at this
                    moment of consent.
                  </p>
                  <p className="text-amber-700 text-sm font-medium">
                    Fruit of the mystery: <strong>Humility and faith</strong>
                  </p>
                </div>

                {/* Mystery 2 */}
                <div className="bg-amber-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-amber-900 mb-2">
                    2. The Visitation <span className="font-normal text-amber-700">(Luke 1:39&ndash;56)</span>
                  </h3>
                  <p className="text-amber-800 mb-3">
                    Immediately after the Annunciation, Mary travels &ldquo;in haste&rdquo; to the hill
                    country of Judah to visit her cousin Elizabeth, who is six months pregnant with
                    John the Baptist. At Mary&rsquo;s greeting, John leaps in the womb and Elizabeth
                    is filled with the Holy Spirit: &ldquo;Blessed are you among women, and blessed is
                    the fruit of your womb!&rdquo; Mary responds with the <em>Magnificat</em> (Luke
                    1:46&ndash;55), the great canticle of the Church prayed every evening at Vespers.
                  </p>
                  <p className="text-amber-700 text-sm font-medium">
                    Fruit of the mystery: <strong>Charity and love of neighbor</strong>
                  </p>
                </div>

                {/* Mystery 3 */}
                <div className="bg-amber-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-amber-900 mb-2">
                    3. The Nativity <span className="font-normal text-amber-700">(Luke 2:1&ndash;20)</span>
                  </h3>
                  <p className="text-amber-800 mb-3">
                    The Second Person of the Trinity is born in a stable in Bethlehem, laid in a
                    manger because there was no room at the inn. Angels proclaim &ldquo;Glory to God in
                    the highest&rdquo; to shepherds in the fields. The Incarnation reaches its
                    culmination: Emmanuel, &ldquo;God with us.&rdquo; Meditating on the Nativity invites
                    a spirit of detachment from material comfort &mdash; God Himself chose poverty
                    and hiddenness as the setting for His entry into the world.
                  </p>
                  <p className="text-amber-700 text-sm font-medium">
                    Fruit of the mystery: <strong>Poverty of spirit and detachment from worldly things</strong>
                  </p>
                </div>

                {/* Mystery 4 */}
                <div className="bg-amber-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-amber-900 mb-2">
                    4. The Presentation <span className="font-normal text-amber-700">(Luke 2:22&ndash;38)</span>
                  </h3>
                  <p className="text-amber-800 mb-3">
                    Forty days after the birth, Mary and Joseph bring the infant Jesus to the Temple
                    in Jerusalem to fulfill the Law (Lev 12:1&ndash;8; Exod 13:2). The elderly Simeon,
                    moved by the Holy Spirit, recognizes the child as the &ldquo;light of revelation to
                    the Gentiles&rdquo; and prophesies that a sword will pierce Mary&rsquo;s own soul
                    (Luke 2:35) &mdash; the first hint of the Passion. The prophetess Anna also
                    gives thanks and speaks of the child to all who await the redemption of Jerusalem.
                  </p>
                  <p className="text-amber-700 text-sm font-medium">
                    Fruit of the mystery: <strong>Purity and obedience</strong>
                  </p>
                </div>

                {/* Mystery 5 */}
                <div className="bg-amber-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-amber-900 mb-2">
                    5. The Finding in the Temple <span className="font-normal text-amber-700">(Luke 2:41&ndash;52)</span>
                  </h3>
                  <p className="text-amber-800 mb-3">
                    When Jesus is twelve years old, his family travels to Jerusalem for Passover.
                    On the journey home, Mary and Joseph realize he is not in the caravan. After
                    three days of searching (a prefigurement of the three days in the tomb), they
                    find him in the Temple, sitting among the teachers, listening and asking
                    questions. His response to his anxious parents: &ldquo;Did you not know that I
                    must be in my Father&rsquo;s house?&rdquo; (Luke 2:49). Luke notes that Mary &ldquo;kept
                    all these things in her heart&rdquo; (Luke 2:51).
                  </p>
                  <p className="text-amber-700 text-sm font-medium">
                    Fruit of the mystery: <strong>Zeal for God and fidelity to vocation</strong>
                  </p>
                </div>

              </div>
            </div>

          </div>
        )}

        {/* ==================== TAB 3: SORROWFUL MYSTERIES ==================== */}
        {activeTab === 'sorrowful-mysteries' && (
          <div className="space-y-8">

            {/* Card 1: Introduction */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <Cross className="w-6 h-6 text-red-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Sorrowful Mysteries</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The Sorrowful Mysteries are prayed on <strong>Tuesdays and Fridays</strong>. They
                meditate on the Passion of Christ &mdash; His agony, arrest, scourging, crowning,
                the carrying of the cross, and His death on Calvary. These mysteries stand at the
                heart of Christian faith: the Passion is not a tragedy to be mourned but the
                supreme act of love by which the world was redeemed. Mary stood at the foot of the
                cross (John 19:25) and is uniquely qualified to lead us through these mysteries.
              </p>

              <div className="space-y-6">

                {/* Mystery 1 */}
                <div className="bg-red-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-red-900 mb-2">
                    1. The Agony in the Garden
                    <span className="font-normal text-red-700"> (Luke 22:39&ndash;46; Matt 26:36&ndash;46)</span>
                  </h3>
                  <p className="text-red-800 mb-3">
                    In the Garden of Gethsemane, Jesus prays that &ldquo;this cup&rdquo; might pass from him
                    &mdash; yet yields completely to the Father&rsquo;s will: &ldquo;Not my will, but yours
                    be done.&rdquo; Luke records that his sweat became like drops of blood
                    (<em>hematidrosis</em>), a recognized medical phenomenon under extreme stress.
                    An angel strengthens him. His disciples, asked to keep watch, fall asleep.
                    This mystery teaches conformity to God&rsquo;s will in our own dark moments.
                  </p>
                  <p className="text-red-700 text-sm font-medium">
                    Fruit of the mystery: <strong>Contrition and conformity to God&rsquo;s will</strong>
                  </p>
                </div>

                {/* Mystery 2 */}
                <div className="bg-red-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-red-900 mb-2">
                    2. The Scourging at the Pillar
                    <span className="font-normal text-red-700"> (John 19:1; Isa 53:5)</span>
                  </h3>
                  <p className="text-red-800 mb-3">
                    Pilate orders Jesus flogged. Roman <em>flagellatio</em> was administered with
                    the <em>flagrum</em> &mdash; a multi-thonged whip with lead balls or bone chips
                    attached &mdash; and could be lethally brutal. Isaiah had prophesied centuries
                    earlier: &ldquo;By his stripes we are healed&rdquo; (Isa 53:5). The physical suffering
                    of the Passion begins. Meditating on this mystery calls the faithful to a spirit
                    of mortification and purity of heart.
                  </p>
                  <p className="text-red-700 text-sm font-medium">
                    Fruit of the mystery: <strong>Purity and mortification</strong>
                  </p>
                </div>

                {/* Mystery 3 */}
                <div className="bg-red-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-red-900 mb-2">
                    3. The Crowning with Thorns
                    <span className="font-normal text-red-700"> (Matt 27:27&ndash;31; John 19:2&ndash;3)</span>
                  </h3>
                  <p className="text-red-800 mb-3">
                    The Roman soldiers take Jesus into the praetorium, dress him in a purple robe,
                    weave a crown of thorns and place it on his head, put a reed in his right hand,
                    and mockingly kneel before him: &ldquo;Hail, King of the Jews!&rdquo; Then they strike
                    him, spit on him, and beat the crown deeper into his head. The mockery was meant
                    to humiliate; in fact it proclaimed the truth &mdash; he is the King. Meditating
                    on this mystery fosters courage to endure mockery for the faith.
                  </p>
                  <p className="text-red-700 text-sm font-medium">
                    Fruit of the mystery: <strong>Moral courage and patience in suffering</strong>
                  </p>
                </div>

                {/* Mystery 4 */}
                <div className="bg-red-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-red-900 mb-2">
                    4. The Carrying of the Cross
                    <span className="font-normal text-red-700"> (Luke 23:26&ndash;32; John 19:17)</span>
                  </h3>
                  <p className="text-red-800 mb-3">
                    Jesus carries his cross toward Golgotha, the Place of the Skull. Weakened by the
                    scourging, he falls; Simon of Cyrene is pressed into service to help carry the
                    crossbeam. The women of Jerusalem weep for him; he speaks to them (Luke
                    23:28&ndash;31). He has told his disciples: &ldquo;If any man will come after me,
                    let him deny himself and take up his cross daily and follow me&rdquo; (Luke 9:23).
                    The carrying of the cross is not metaphor but literal and historical &mdash; and
                    the model for every Christian&rsquo;s spiritual life.
                  </p>
                  <p className="text-red-700 text-sm font-medium">
                    Fruit of the mystery: <strong>Patience and perseverance</strong>
                  </p>
                </div>

                {/* Mystery 5 */}
                <div className="bg-red-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-red-900 mb-2">
                    5. The Crucifixion
                    <span className="font-normal text-red-700"> (John 19:17&ndash;30; Luke 23:33&ndash;46)</span>
                  </h3>
                  <p className="text-red-800 mb-3">
                    At Calvary, Jesus is nailed to the cross and lifted up between two criminals.
                    The darkness covers the land from noon until three o&rsquo;clock. He speaks
                    the Seven Last Words. At the ninth hour he cries out and gives up his spirit.
                    The veil of the Temple is torn in two from top to bottom. A soldier pierces his
                    side with a lance and blood and water flow out &mdash; a sign of the Eucharist and
                    Baptism (John 19:34). Mary stands at the foot of the cross. &ldquo;It is finished&rdquo;
                    (John 19:30). This is the central event of all salvation history.
                  </p>
                  <p className="text-red-700 text-sm font-medium">
                    Fruit of the mystery: <strong>Salvation and faith in the Paschal Mystery</strong>
                  </p>
                </div>

              </div>
            </div>

          </div>
        )}

        {/* ==================== TAB 4: GLORIOUS MYSTERIES ==================== */}
        {activeTab === 'glorious-mysteries' && (
          <div className="space-y-8">

            {/* Card 1: Introduction */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Sun className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Glorious Mysteries</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The Glorious Mysteries are prayed on <strong>Wednesdays and Sundays</strong>. They
                meditate on Christ&rsquo;s triumph over death, His ascent to the Father, the gift of the
                Holy Spirit at Pentecost, and the final glorification of Mary &mdash; previewing the
                destiny promised to all who share in the Paschal Mystery. These mysteries are the
                fruit of the Sorrowful ones: the Resurrection is the answer to the Crucifixion;
                the Coronation of Mary is the first fruit of what Christ&rsquo;s victory means for
                redeemed humanity.
              </p>

              <div className="space-y-6">

                {/* Mystery 1 */}
                <div className="bg-amber-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-amber-900 mb-2">
                    1. The Resurrection
                    <span className="font-normal text-amber-700"> (Matt 28:1&ndash;10; John 20:1&ndash;18)</span>
                  </h3>
                  <p className="text-amber-800 mb-3">
                    On the first day of the week, the women find the tomb empty and an angel proclaims:
                    &ldquo;He is not here, for he has risen, as he said&rdquo; (Matt 28:6). Mary Magdalene
                    encounters the risen Christ in the garden and is sent as the first apostle of
                    the Resurrection: &ldquo;Go to my brothers and tell them&rdquo; (John 20:17). The
                    Resurrection is not resuscitation but the entrance of Jesus&rsquo; glorified body
                    into the New Creation &mdash; the &ldquo;firstfruits of those who have fallen asleep&rdquo;
                    (1 Cor 15:20).
                  </p>
                  <p className="text-amber-700 text-sm font-medium">
                    Fruit of the mystery: <strong>Faith in the resurrection of the body</strong>
                  </p>
                </div>

                {/* Mystery 2 */}
                <div className="bg-amber-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-amber-900 mb-2">
                    2. The Ascension
                    <span className="font-normal text-amber-700"> (Acts 1:9&ndash;11; Mark 16:19)</span>
                  </h3>
                  <p className="text-amber-800 mb-3">
                    Forty days after the Resurrection, Jesus leads his disciples to the Mount of
                    Olives and is taken up into heaven in their sight, a cloud hiding him from their
                    view. Two men in white garments appear: &ldquo;Men of Galilee, why do you stand
                    looking up into heaven?&rdquo; Christ ascends not to abandon us but to prepare a
                    place for us (John 14:2) and to reign at the right hand of the Father as eternal
                    High Priest (Heb 4:14), interceding for us.
                  </p>
                  <p className="text-amber-700 text-sm font-medium">
                    Fruit of the mystery: <strong>Desire for heaven and hope</strong>
                  </p>
                </div>

                {/* Mystery 3 */}
                <div className="bg-amber-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-amber-900 mb-2">
                    3. The Descent of the Holy Spirit
                    <span className="font-normal text-amber-700"> (Acts 2:1&ndash;13)</span>
                  </h3>
                  <p className="text-amber-800 mb-3">
                    Ten days after the Ascension, on the Jewish feast of Pentecost, the Holy Spirit
                    descends on the disciples gathered with Mary in the upper room: tongues of fire
                    rest on each of them and they are filled with the Holy Spirit, speaking in the
                    languages of all the peoples gathered in Jerusalem. Peter&rsquo;s first sermon results
                    in three thousand baptisms. The Church is born. This mystery invites meditation
                    on the gifts of the Spirit in our own lives.
                  </p>
                  <p className="text-amber-700 text-sm font-medium">
                    Fruit of the mystery: <strong>Wisdom and zeal for souls</strong>
                  </p>
                </div>

                {/* Mystery 4 */}
                <div className="bg-amber-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-amber-900 mb-2">
                    4. The Assumption of Mary
                    <span className="font-normal text-amber-700"> (Defined by Pope Pius XII, <em>Munificentissimus Deus</em>, 1950)</span>
                  </h3>
                  <p className="text-amber-800 mb-3">
                    At the end of her earthly life, Mary was taken up body and soul into heavenly
                    glory. Pope Pius XII defined this as a dogma of faith in 1950. The Assumption
                    has deep Scriptural types: Revelation 12:1 (&ldquo;a woman clothed with the sun&rdquo;)
                    and the pattern of Elijah (2 Kings 2:11) and Enoch (Gen 5:24). Mary&rsquo;s bodily
                    glorification is the first fruits of what the Resurrection promises to all the
                    redeemed. CCC 966: She is &ldquo;already sharing in the glory of her Son&rsquo;s
                    Resurrection.&rdquo;
                  </p>
                  <p className="text-amber-700 text-sm font-medium">
                    Fruit of the mystery: <strong>Grace of a holy death</strong>
                  </p>
                </div>

                {/* Mystery 5 */}
                <div className="bg-amber-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-amber-900 mb-2">
                    5. The Coronation of Mary
                    <span className="font-normal text-amber-700"> (Rev 12:1; CCC 966)</span>
                  </h3>
                  <p className="text-amber-800 mb-3">
                    Mary is crowned Queen of Heaven and Earth, reigning with her Son as intercessor
                    and mother of all the redeemed. <em>Lumen Gentium</em> 59: she &ldquo;was exalted by
                    the Lord as Queen of the universe, that she might be the more fully conformed
                    to her Son, the Lord of lords and the conqueror of sin and death.&rdquo; As Queen,
                    Mary does not compete with Christ&rsquo;s unique mediation but exercises a
                    subordinate intercession that flows entirely from his.
                  </p>
                  <p className="text-amber-700 text-sm font-medium">
                    Fruit of the mystery: <strong>Trust in Mary&rsquo;s intercession</strong>
                  </p>
                </div>

              </div>
            </div>

          </div>
        )}

        {/* ==================== TAB 5: LUMINOUS MYSTERIES ==================== */}
        {activeTab === 'luminous-mysteries' && (
          <div className="space-y-8">

            {/* Card 1: Introduction by JPII */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Moon className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Luminous Mysteries (Mysteries of Light)</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The Luminous Mysteries are prayed on <strong>Thursdays</strong>. They were added by
                Pope John Paul II in his apostolic letter <em>Rosarium Virginis Mariae</em>
                (&sect;&sect;19&ndash;22, October 2002) to fill a gap in the traditional Rosary: the
                fifteen classic mysteries moved from the Incarnation (Joyful) directly to the
                Passion (Sorrowful), skipping Christ&rsquo;s entire public ministry. The five Luminous
                Mysteries fill this gap by covering the key moments of Christ&rsquo;s mission between
                the Jordan and the Last Supper.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">
                  Pope John Paul II on the Luminous Mysteries
                </h3>
                <p className="text-blue-800 italic mb-2">
                  &ldquo;Each of these mysteries is a revelation of the Kingdom now present in the very
                  person of Jesus. It is the Luminous Mystery par excellence. Contemplating these
                  events together with Mary is the means proposed to us for assimilating the wisdom
                  of Christ.&rdquo;
                </p>
                <p className="text-blue-700 text-sm">&mdash; <em>Rosarium Virginis Mariae</em> &sect;21</p>
              </div>

              <div className="space-y-6">

                {/* Mystery 1 */}
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">
                    1. The Baptism in the Jordan
                    <span className="font-normal text-blue-700"> (Matt 3:13&ndash;17; Mark 1:9&ndash;11)</span>
                  </h3>
                  <p className="text-blue-800 mb-3">
                    Jesus comes to John at the Jordan and is baptized, even though he has no sin.
                    The heavens open, the Spirit descends as a dove, and the Father&rsquo;s voice
                    declares: &ldquo;This is my beloved Son, in whom I am well pleased.&rdquo; The Trinitarian
                    mystery is fully revealed. The Baptism of Christ inaugurates his public ministry
                    and hallows water as the instrument of our own baptismal rebirth (CCC 1224).
                  </p>
                  <p className="text-blue-700 text-sm font-medium">
                    Fruit of the mystery: <strong>Openness to the Holy Spirit</strong>
                  </p>
                </div>

                {/* Mystery 2 */}
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">
                    2. The Wedding at Cana
                    <span className="font-normal text-blue-700"> (John 2:1&ndash;12)</span>
                  </h3>
                  <p className="text-blue-800 mb-3">
                    At a wedding feast in Cana of Galilee, Mary notices that the wine has run out
                    and brings the need to Jesus. Despite his initial response, she tells the servants:
                    &ldquo;Do whatever he tells you&rdquo; &mdash; words that remain the whole content of
                    Marian spirituality. Jesus turns six stone jars of water into wine &mdash; his
                    first sign, revealing his glory and prompting his disciples to believe in him
                    (John 2:11). Mary&rsquo;s role as mediatrix of intercession is here established.
                  </p>
                  <p className="text-blue-700 text-sm font-medium">
                    Fruit of the mystery: <strong>Obedience to Christ; trust in Mary&rsquo;s intercession</strong>
                  </p>
                </div>

                {/* Mystery 3 */}
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">
                    3. The Proclamation of the Kingdom
                    <span className="font-normal text-blue-700"> (Mark 1:14&ndash;15; Luke 4:16&ndash;21)</span>
                  </h3>
                  <p className="text-blue-800 mb-3">
                    Jesus begins his public preaching: &ldquo;The time is fulfilled, and the kingdom of
                    God is at hand; repent and believe in the Gospel.&rdquo; In Nazareth he reads Isaiah
                    61 (&ldquo;The Spirit of the Lord is upon me&rdquo;) and declares it fulfilled in
                    their hearing. The Sermon on the Mount, the Beatitudes, the parables of the
                    Kingdom, and the call to discipleship all belong to this mystery. It is an
                    invitation to continual conversion.
                  </p>
                  <p className="text-blue-700 text-sm font-medium">
                    Fruit of the mystery: <strong>Repentance and conversion</strong>
                  </p>
                </div>

                {/* Mystery 4 */}
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">
                    4. The Transfiguration
                    <span className="font-normal text-blue-700"> (Matt 17:1&ndash;8; Mark 9:2&ndash;8)</span>
                  </h3>
                  <p className="text-blue-800 mb-3">
                    Jesus takes Peter, James, and John up Mount Tabor. Before them he is
                    transfigured &mdash; his face shines like the sun, his garments become dazzling
                    white. Moses and Elijah appear and speak with him about his coming &ldquo;departure&rdquo;
                    (exodus) in Jerusalem. A bright cloud overshadows them and the Father&rsquo;s voice
                    speaks: &ldquo;This is my beloved Son; listen to him.&rdquo; The Transfiguration is a
                    foretaste of the Resurrection glory, given to strengthen the disciples before
                    the Passion.
                  </p>
                  <p className="text-blue-700 text-sm font-medium">
                    Fruit of the mystery: <strong>Desire for holiness; spiritual transformation</strong>
                  </p>
                </div>

                {/* Mystery 5 */}
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">
                    5. The Institution of the Eucharist
                    <span className="font-normal text-blue-700"> (Matt 26:26&ndash;29; 1 Cor 11:23&ndash;26)</span>
                  </h3>
                  <p className="text-blue-800 mb-3">
                    At the Last Supper, Jesus takes bread, gives thanks, breaks it and gives it
                    to his disciples: &ldquo;This is my Body.&rdquo; Then the cup: &ldquo;This is my Blood of the
                    covenant, which is poured out for many for the forgiveness of sins.&rdquo; He commands:
                    &ldquo;Do this in memory of me.&rdquo; The Eucharist is the culmination of the Luminous
                    Mysteries and the center of the Christian life (CCC 1324). John Paul II called
                    this mystery the heart of the Rosary&rsquo;s entire meditation on Christ.
                  </p>
                  <p className="text-blue-700 text-sm font-medium">
                    Fruit of the mystery: <strong>Eucharistic adoration and love</strong>
                  </p>
                </div>

              </div>
            </div>

          </div>
        )}

        {/* ==================== TAB 6: HOW TO PRAY THE ROSARY ==================== */}
        {activeTab === 'how-to-pray' && (
          <div className="space-y-8">

            {/* Card 1: Step-by-Step Guide */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">How to Pray the Rosary</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The Rosary can be prayed alone or with others, kneeling or walking, at home or
                in church. You do not need to understand all the theology to begin. The oral prayers
                create a contemplative rhythm that gradually forms the soul. Pope John Paul II
                called this rhythm &ldquo;a kind of mantra&rdquo; (<em>Rosarium Virginis Mariae</em> &sect;26)
                &mdash; not in an Eastern sense but as a sacred repetition that centers the heart on
                Christ.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-4">
                  Step-by-Step Guide
                </h3>
                <ol className="text-amber-800 space-y-4">
                  <li>
                    <strong>1.</strong> Hold the crucifix and pray the <strong>Apostles&rsquo; Creed</strong>.
                  </li>
                  <li>
                    <strong>2.</strong> On the first large bead (nearest the crucifix), pray the <strong>Our Father</strong>.
                  </li>
                  <li>
                    <strong>3.</strong> On the three small beads, pray the <strong>Hail Mary</strong> three times
                    &mdash; traditionally for faith, hope, and charity, or for the intentions of the Pope.
                  </li>
                  <li>
                    <strong>4.</strong> Pray the <strong>Glory Be</strong>.
                  </li>
                  <li>
                    <strong>5.</strong> <strong>Announce the first mystery</strong> by name, reflect briefly on it,
                    and pray the <strong>Our Father</strong> on the large bead.
                  </li>
                  <li>
                    <strong>6.</strong> Pray the <strong>Hail Mary</strong> ten times on the ten small beads,
                    meditating on the announced mystery throughout.
                  </li>
                  <li>
                    <strong>7.</strong> Pray the <strong>Glory Be</strong>, then the <strong>F&aacute;tima Prayer</strong>:
                    &ldquo;O my Jesus, forgive us our sins, save us from the fires of hell, lead all souls to
                    heaven, especially those most in need of your mercy.&rdquo;
                  </li>
                  <li>
                    <strong>8.</strong> Repeat steps 5&ndash;7 for each of the remaining four decades,
                    announcing a new mystery at the beginning of each decade.
                  </li>
                  <li>
                    <strong>9.</strong> After the fifth decade, close with the <strong>Hail Holy Queen</strong>
                    (<em>Salve Regina</em>).
                  </li>
                  <li>
                    <strong>10.</strong> A closing prayer may be added: &ldquo;O God, whose only-begotten Son...&rdquo;
                    (traditional concluding collect).
                  </li>
                </ol>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">
                  Practical Tips
                </h3>
                <ul className="text-blue-800 space-y-2 text-sm">
                  <li>&bull; The Rosary can be prayed while walking, driving, or during quiet moments &mdash; the beads help maintain your place without mental effort.</li>
                  <li>&bull; A single decade is better than nothing. If time is short, pray one mystery.</li>
                  <li>&bull; Announce the mystery aloud, even when alone &mdash; it helps the mind remain focused.</li>
                  <li>&bull; Begin with the set of mysteries assigned to that day; consistency builds the habit.</li>
                  <li>&bull; Silence after a Hail Mary can be more fruitful than speed through the words.</li>
                </ul>
              </div>

            </div>

            {/* Card 2: The Prayers */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Scroll className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Prayers of the Rosary</h2>
              </div>

              <div className="space-y-6">

                <div className="bg-amber-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-amber-900 mb-3">
                    The Hail Mary <span className="font-normal text-amber-700">(Luke 1:28, 42 + petition)</span>
                  </h3>
                  <p className="text-amber-800 mb-3">
                    Hail Mary, full of grace, the Lord is with thee. Blessed art thou amongst
                    women, and blessed is the fruit of thy womb, Jesus. Holy Mary, Mother of God,
                    pray for us sinners, now and at the hour of our death. Amen.
                  </p>
                  <p className="text-amber-700 text-sm">
                    The first part is the Angel&rsquo;s greeting (Luke 1:28) and Elizabeth&rsquo;s greeting
                    (Luke 1:42); the second part is the Church&rsquo;s petition, added over centuries
                    of liturgical practice.
                  </p>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-900 mb-3">
                    The Hail Holy Queen (<em>Salve Regina</em>)
                  </h3>
                  <p className="text-blue-800 mb-3">
                    Hail, Holy Queen, Mother of Mercy, hail our life, our sweetness, and our hope.
                    To thee do we cry, poor banished children of Eve. To thee do we send up our
                    sighs, mourning and weeping in this valley of tears. Turn then, most gracious
                    advocate, thine eyes of mercy toward us, and after this our exile, show unto
                    us the blessed fruit of thy womb, Jesus. O clement, O loving, O sweet Virgin Mary.
                  </p>
                  <p className="text-blue-800 mb-1">
                    V. Pray for us, O Holy Mother of God.
                  </p>
                  <p className="text-blue-800">
                    R. That we may be made worthy of the promises of Christ.
                  </p>
                  <p className="text-blue-700 text-sm mt-3">
                    Attributed to Herman of Reichenau (c. 1050); one of the oldest and most beloved
                    Marian antiphons of the Latin Church.
                  </p>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-900 mb-3">
                    The F&aacute;tima Prayer (added 1917)
                  </h3>
                  <p className="text-green-800 mb-3">
                    O my Jesus, forgive us our sins, save us from the fires of hell, lead all souls
                    to heaven, especially those most in need of your mercy.
                  </p>
                  <p className="text-green-700 text-sm">
                    Requested by Our Lady at F&aacute;tima, prayed after the Glory Be at the end of
                    each decade.
                  </p>
                </div>

              </div>
            </div>

            {/* Card 3: Plenary Indulgence */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-purple-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Plenary Indulgence</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                A <strong>plenary indulgence</strong> (applicable to souls in Purgatory) is granted
                when the Rosary is prayed under one of the following conditions, together with the
                usual requirements (sacramental Confession, Eucharistic Communion, and a prayer for
                the intentions of the Pope):
              </p>

              <div className="bg-purple-50 p-6 rounded-lg mb-6">
                <ul className="text-purple-800 space-y-3 text-sm">
                  <li>
                    &bull; <strong>In a church or public oratory</strong>, or in a family group, a religious community,
                    or pious association, when the five decades are prayed continuously with vocal
                    and mental prayer (meditation on the mysteries).
                  </li>
                  <li>
                    &bull; <strong>Privately</strong>, when the above conditions of vocal prayer and meditation are
                    fulfilled, and the pray-er is in a state of grace. A <em>partial</em> indulgence
                    is granted in other circumstances.
                  </li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed">
                The indulgence reflects the Church&rsquo;s ancient conviction that the Rosary is one of
                the most effective prayers available to the faithful &mdash; a conviction rooted in
                centuries of saints&rsquo; experience and multiple papal endorsements.
              </p>
            </div>

            {/* Card 4: JPII Quote + Sources */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Sources &amp; Further Reading</h2>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">
                  Pope John Paul II, <em>Rosarium Virginis Mariae</em> &sect;2 (2002)
                </h3>
                <p className="text-blue-800 italic mb-2">
                  &ldquo;The Rosary of the Virgin Mary, which gradually took form in the second millennium
                  under the guidance of the Spirit of God, is a prayer loved by countless Saints and
                  encouraged by the Magisterium. Simple yet profound, it still remains, at the dawn
                  of this third millennium, a prayer of great significance, destined to bring forth
                  a harvest of holiness.&rdquo;
                </p>
                <p className="text-blue-700 text-sm">&mdash; <em>Rosarium Virginis Mariae</em> &sect;2, Pope John Paul II (2002)</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-amber-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-amber-900 mb-3">Magisterial &amp; Official</h3>
                  <ul className="text-amber-800 text-sm space-y-2">
                    <li>Pope John Paul II, <em>Rosarium Virginis Mariae</em> (2002)</li>
                    <li><em>Catechism of the Catholic Church</em>, &sect;971 (Marian devotion)</li>
                    <li><em>Catechism of the Catholic Church</em>, &sect;2678 (Hail Mary)</li>
                    <li><em>Catechism of the Catholic Church</em>, &sect;2708 (meditation)</li>
                    <li><em>Catechism of the Catholic Church</em>, &sect;&sect;2676&ndash;2678 (Marian prayer)</li>
                    <li><em>Catechism of the Catholic Church</em>, &sect;&sect;963&ndash;972 (Mary in the Church)</li>
                    <li>Vatican II, <em>Lumen Gentium</em>, &sect;&sect;53&ndash;69 (Mary in the mystery of the Church)</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-3">Papal Documents on the Rosary</h3>
                  <ul className="text-blue-800 text-sm space-y-2">
                    <li>Pope Leo XIII, <em>Supremi Apostolatus Officio</em> (1883)</li>
                    <li>Pope Leo XIII, <em>Octobri Mense</em> (1891)</li>
                    <li>Pope Leo XIII, <em>Laetitiae Sanctae</em> (1893)</li>
                    <li>Pope Pius XII, <em>Ingruentium Malorum</em> (1951)</li>
                    <li>Pope Paul VI, <em>Marialis Cultus</em> (1974)</li>
                    <li>Pope John Paul II, <em>Rosarium Virginis Mariae</em> (2002)</li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-purple-900 mb-3">Historical &amp; Devotional Works</h3>
                  <ul className="text-purple-800 text-sm space-y-2">
                    <li>St. Louis de Montfort, <em>The Secret of the Rosary</em></li>
                    <li>St. Alphonsus Liguori, <em>The Glories of Mary</em></li>
                    <li>Edward Sri, <em>The New Rosary in Scripture</em> (Servant Books, 2003)</li>
                    <li>Antonio Rum&ograve;, <em>A History of the Rosary</em> &mdash; historical scholarship on Alain de la Roche</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-3">Scripture References</h3>
                  <ul className="text-green-800 text-sm space-y-2">
                    <li>Luke 1:26&ndash;56 (Annunciation and Visitation)</li>
                    <li>Luke 2:1&ndash;52 (Nativity, Presentation, Finding)</li>
                    <li>Matt 26&ndash;27; John 18&ndash;19 (Passion)</li>
                    <li>Matt 28; John 20; Acts 1&ndash;2 (Resurrection, Ascension, Pentecost)</li>
                    <li>Rev 12:1 (Woman clothed with the sun)</li>
                    <li>John 2:1&ndash;12; Matt 3:13&ndash;17; Matt 17:1&ndash;8 (Luminous Mysteries)</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* ==================== CROSS-LINKS ==================== */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
              <ArrowRight className="w-6 h-6 text-amber-700" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Explore Further</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link
              href="/prayer/marian-devotions"
              className="block bg-amber-50 hover:bg-amber-100 transition-colors rounded-lg p-5"
            >
              <h3 className="font-semibold text-amber-900 mb-1">Marian Devotions</h3>
              <p className="text-amber-800 text-sm">
                The broader tradition of Marian devotion in the Catholic Church.
              </p>
            </Link>
            <Link
              href="/prayer/overview"
              className="block bg-blue-50 hover:bg-blue-100 transition-colors rounded-lg p-5"
            >
              <h3 className="font-semibold text-blue-900 mb-1">What Is Prayer?</h3>
              <p className="text-blue-800 text-sm">
                An introduction to Catholic teaching on prayer, contemplation, and the life of faith.
              </p>
            </Link>
            <Link
              href="/mysteries/public-revelation"
              className="block bg-green-50 hover:bg-green-100 transition-colors rounded-lg p-5"
            >
              <h3 className="font-semibold text-green-900 mb-1">Public Revelation</h3>
              <p className="text-green-800 text-sm">
                How God has revealed Himself through Scripture, Tradition, and the Magisterium.
              </p>
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}
