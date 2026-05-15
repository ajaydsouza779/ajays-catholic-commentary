'use client'

import { useState } from 'react'
import {
  BookOpen,
  Eye,
  Star,
  Shield,
  Church,
  Flame,
  Scroll,
  Heart,
  Globe,
  Crown,
  Search,
  ArrowRight,
  Users,
  Wind,
  Brain,
} from 'lucide-react'

type TabId = 'overview' | 'bilocation' | 'levitation' | 'visions' | 'mystical-states' | 'sources'

const tabs: { id: TabId; label: string }[] = [
  { id: 'overview', label: 'Overview' },
  { id: 'bilocation', label: 'Bilocation' },
  { id: 'levitation', label: 'Levitation' },
  { id: 'visions', label: 'Visions & Locutions' },
  { id: 'mystical-states', label: 'Mystical States' },
  { id: 'sources', label: 'Sources' },
]

export default function MysticalPhenomenaPage() {
  const [activeTab, setActiveTab] = useState<TabId>('overview')

  return (
    <div className="py-8">
      <div className="container mx-auto px-4 max-w-5xl">

        {/* Hero Section */}
        <div className="text-center mb-8">
          <div className="inline-block mb-4">
            <span
              className="px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide"
              style={{ backgroundColor: '#EEF2FF', color: '#4338CA' }}
            >
              Mysteries of the Faith
            </span>
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Mystical Phenomena
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            The Catholic tradition has long recognized that some souls, advanced in union with God,
            experience extraordinary graces that transcend ordinary nature. These phenomena —
            bilocation, levitation, visions, mystical fasting — are not the goal of the spiritual
            life, but signs of its depth.
          </p>
        </div>

        {/* Doctrinal Anchor Box */}
        <div
          className="rounded-xl border p-6 mb-6"
          style={{ backgroundColor: '#EEF2FF', borderColor: '#C7D2FE' }}
        >
          <div className="flex items-start gap-4">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
              style={{ backgroundColor: '#C7D2FE' }}
            >
              <BookOpen className="w-5 h-5" style={{ color: '#4338CA' }} />
            </div>
            <div>
              <h2 className="text-lg font-bold mb-2" style={{ color: '#312E81' }}>
                Doctrinal Foundation
              </h2>
              <p className="text-sm leading-relaxed mb-3" style={{ color: '#3730A3' }}>
                <strong>CCC 2014:</strong> "Spiritual progress tends toward ever more intimate union
                with Christ. This union is called mystical, because it participates in the mystery of
                Christ through the sacraments — 'the holy mysteries' — and, in him, in the mystery of
                the Holy Trinity." The mystical life is fundamentally about union with God, not
                extraordinary phenomena.
              </p>
              <p className="text-sm leading-relaxed mb-3" style={{ color: '#3730A3' }}>
                <strong>St. John of the Cross</strong> — the Church's pre-eminent mystical theologian
                — consistently warned against seeking or trusting extraordinary phenomena. He taught
                that genuine mystics should be indifferent to visions, locutions, and bodily phenomena,
                preferring the "dark night" of faith over sensible consolations.
              </p>
              <p className="text-sm font-semibold" style={{ color: '#4338CA' }}>
                The Church does not require belief in any specific instance of mystical phenomena.
                These are extraordinary graces, not the ordinary path to holiness.
              </p>
            </div>
          </div>
        </div>

        {/* Info Strip — Three Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div
            className="rounded-xl border p-5"
            style={{ backgroundColor: '#F5F3FF', borderColor: '#DDD6FE' }}
          >
            <div className="flex items-center gap-2 mb-2">
              <Wind className="w-5 h-5" style={{ color: '#6D28D9' }} />
              <h3 className="font-bold text-sm" style={{ color: '#4C1D95' }}>Not Sought</h3>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: '#5B21B6' }}>
              Mystical phenomena are involuntary. Saints who experienced them typically tried to hide
              or suppress them — they found them embarrassing, not glorifying to themselves.
            </p>
          </div>
          <div
            className="rounded-xl border p-5"
            style={{ backgroundColor: '#F5F3FF', borderColor: '#DDD6FE' }}
          >
            <div className="flex items-center gap-2 mb-2">
              <Shield className="w-5 h-5" style={{ color: '#6D28D9' }} />
              <h3 className="font-bold text-sm" style={{ color: '#4C1D95' }}>Not Required</h3>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: '#5B21B6' }}>
              No extraordinary phenomena are needed for holiness or for canonization. The Church looks
              for heroic virtue, not miracles of body. Most saints experienced none of these things.
            </p>
          </div>
          <div
            className="rounded-xl border p-5"
            style={{ backgroundColor: '#F5F3FF', borderColor: '#DDD6FE' }}
          >
            <div className="flex items-center gap-2 mb-2">
              <Search className="w-5 h-5" style={{ color: '#6D28D9' }} />
              <h3 className="font-bold text-sm" style={{ color: '#4C1D95' }}>Not Proof</h3>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: '#5B21B6' }}>
              Mystical phenomena do not prove sainthood. The Church requires rigorous investigation of
              virtue and the exclusion of natural causes before attributing anything to divine action.
            </p>
          </div>
        </div>

        {/* Scrollable Tab Bar */}
        <div className="mb-8 overflow-x-auto">
          <div className="flex gap-2 min-w-max px-1 pb-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors whitespace-nowrap"
                style={
                  activeTab === tab.id
                    ? { backgroundColor: '#4338CA', color: 'white' }
                    : { backgroundColor: 'white', color: '#374151', border: '1px solid #E5E7EB' }
                }
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* ==================== TAB 1: OVERVIEW ==================== */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: '#EEF2FF' }}
                >
                  <Star className="w-6 h-6" style={{ color: '#4338CA' }} />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">What Are Mystical Phenomena?</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                Mystical phenomena are extraordinary graces associated with advanced states of union
                with God, experienced by some saints in the course of deep contemplative life. They
                are not the ordinary path of Christian holiness. The vast majority of the Church's
                canonized saints experienced none of them. They are gifts — not achievements — and
                their presence or absence says nothing about the degree of a person's holiness in the
                sight of God.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>CCC 2003</strong> states that charismata "are oriented toward sanctifying
                grace and are intended for the common good of the Church. They do not of themselves
                confer holiness upon their recipients." This principle governs the whole field of
                mystical phenomena: they are ordered to the Church's good and the recipient's union
                with God, not to the recipient's status or reputation.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                The classic Catholic theology of mystical phenomena is drawn primarily from St. John
                of the Cross (<em>Ascent of Mount Carmel</em>, <em>Dark Night of the Soul</em>),
                St. Teresa of Ávila (<em>Interior Castle</em>, <em>Book of Her Life</em>), and
                summarized systematically by Fr. Adolphe Tanquerey in <em>The Spiritual Life</em>
                (1930) — still the standard Catholic theological reference on the subject.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                St. John of the Cross, the Church's greatest mystical theologian, was deeply suspicious
                of extraordinary phenomena. He warned spiritual directors and their charges to regard
                all visions, locutions, and bodily phenomena with extreme caution, preferring the bare
                darkness of faith. This does not mean he denied they occurred — he himself documented
                and experienced them. It means he insisted that attachment to them is a spiritual
                danger.
              </p>

              {/* Classification Box */}
              <div
                className="rounded-lg border p-6 mb-6"
                style={{ backgroundColor: '#F5F3FF', borderColor: '#DDD6FE' }}
              >
                <h3 className="text-lg font-bold mb-4" style={{ color: '#312E81' }}>
                  Tanquerey's Classification of Mystical Graces
                </h3>
                <div className="space-y-3">
                  <div>
                    <span className="font-semibold text-sm" style={{ color: '#4338CA' }}>
                      1. Ascetical Grace
                    </span>
                    <p className="text-sm text-gray-700 mt-0.5">
                      The ordinary path of prayer, mortification, and virtue — open to all, required
                      of all. The indispensable foundation.
                    </p>
                  </div>
                  <div>
                    <span className="font-semibold text-sm" style={{ color: '#4338CA' }}>
                      2. Mystical Grace (Infused Contemplation)
                    </span>
                    <p className="text-sm text-gray-700 mt-0.5">
                      The passive reception of God's self-communication in prayer — not produced by
                      human effort. The beginning of the mystical life proper.
                    </p>
                  </div>
                  <div>
                    <span className="font-semibold text-sm" style={{ color: '#4338CA' }}>
                      3. Charismatic Phenomena
                    </span>
                    <p className="text-sm text-gray-700 mt-0.5">
                      Extraordinary graces — bilocation, levitation, visions, locutions, mystical
                      fasting — that may accompany the mystical life but are not its essence or its
                      goal. Often unwanted by the recipient and embarrassing to the Church.
                    </p>
                  </div>
                </div>
              </div>

              {/* Types Overview */}
              <h3 className="text-xl font-bold text-gray-800 mb-4">Phenomena Covered in This Section</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    icon: Globe,
                    title: 'Bilocation',
                    desc: 'The simultaneous presence of a person in two distinct places at the same time.',
                  },
                  {
                    icon: Wind,
                    title: 'Levitation',
                    desc: 'Bodily rising above the ground during prayer, without physical support.',
                  },
                  {
                    icon: Eye,
                    title: 'Visions & Locutions',
                    desc: 'Corporeal, imaginative, or intellectual visions; exterior and interior voices.',
                  },
                  {
                    icon: Flame,
                    title: 'Mystical Fasting (Inedia)',
                    desc: 'Surviving apparently without food, sustained by the Eucharist alone.',
                  },
                  {
                    icon: Heart,
                    title: 'Odor of Sanctity',
                    desc: 'An inexplicable fragrance associated with holy persons during life or after death.',
                  },
                  {
                    icon: Brain,
                    title: 'Reading of Souls',
                    desc: "Supernatural knowledge of the interior state of another person's conscience.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-3 p-4 rounded-lg border"
                    style={{ backgroundColor: '#FAFAFA', borderColor: '#E5E7EB' }}
                  >
                    <item.icon className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#4338CA' }} />
                    <div>
                      <div className="font-semibold text-sm text-gray-800">{item.title}</div>
                      <div className="text-sm text-gray-600 mt-0.5">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="mt-6 rounded-lg border p-4"
                style={{ backgroundColor: '#EEF2FF', borderColor: '#C7D2FE' }}
              >
                <p className="text-sm font-semibold" style={{ color: '#312E81' }}>
                  Key theological principle: none of these phenomena are necessary for salvation.
                  The saints who experienced them often wished they would stop. The Church does not
                  require belief in any specific instance.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ==================== TAB 2: BILOCATION ==================== */}
        {activeTab === 'bilocation' && (
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: '#EEF2FF' }}
                >
                  <Globe className="w-6 h-6" style={{ color: '#4338CA' }} />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">
                  Bilocation — The Mystery of Being in Two Places
                </h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                Bilocation is the simultaneous presence of a person in two distinct places at the
                same time. It is distinct from a simple apparition in that the person present at the
                distant location acts, speaks, and is recognized by multiple people who know them well.
              </p>

              <div
                className="rounded-lg border p-5 mb-8"
                style={{ backgroundColor: '#EEF2FF', borderColor: '#C7D2FE' }}
              >
                <h3 className="font-bold mb-2" style={{ color: '#312E81' }}>
                  Theological Interpretation
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#3730A3' }}>
                  Classic Catholic theology does not teach that the physical body is physically divided.
                  The common interpretation is that God allows the person's presence to be perceived
                  at a distance — analogous to how Christ appeared to the disciples (John 20:19) through
                  closed doors. It is not a matter of the physical body being literally in two places,
                  but of a divine action enabling real presence at a distance. Some theologians compare
                  it to the gifted body of the resurrection (1 Cor 15:43–44).
                </p>
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-6">Six Documented Cases</h3>

              <div className="space-y-6">
                {/* Case 1 */}
                <div className="rounded-xl border p-6" style={{ borderColor: '#C7D2FE' }}>
                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: '#EEF2FF' }}
                    >
                      <Crown className="w-5 h-5" style={{ color: '#4338CA' }} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-800">
                        St. Anthony of Padua (1195–1231)
                      </h4>
                      <p className="text-sm text-gray-500 mb-2">Lisbon / Padua — Franciscan Friar Minor</p>
                      <p className="text-gray-700 leading-relaxed text-sm">
                        The most famous medieval case. While preaching in a church in Limoges on Holy
                        Thursday 1226, Anthony was simultaneously seen kneeling in the choir of the
                        church where he was living several kilometers away. Witnesses testified to both
                        presences. This is the first broadly documented bilocation in Church history.
                        He was canonized in 1232 — less than one year after his death, the fastest
                        canonization in history at that time.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Case 2 */}
                <div className="rounded-xl border p-6" style={{ borderColor: '#C7D2FE' }}>
                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: '#EEF2FF' }}
                    >
                      <Heart className="w-5 h-5" style={{ color: '#4338CA' }} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-800">
                        St. Martin de Porres (1579–1639)
                      </h4>
                      <p className="text-sm text-gray-500 mb-2">Lima, Peru — Dominican Lay Brother</p>
                      <p className="text-gray-700 leading-relaxed text-sm">
                        The Dominican lay brother was reported to have appeared in Mexico, China, Japan,
                        and Africa — all while never leaving the Dominican convent in Lima, verified by
                        witnesses who saw him there simultaneously. He reportedly spoke to missionaries
                        in their own languages in distant lands. This was well-documented in the
                        canonization process. Canonized 1962 by Pope John XXIII. Feast: November 3.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Case 3 */}
                <div className="rounded-xl border p-6" style={{ borderColor: '#C7D2FE' }}>
                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: '#EEF2FF' }}
                    >
                      <Globe className="w-5 h-5" style={{ color: '#4338CA' }} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-800">
                        Ven. Maria de Ágreda (1602–1665)
                      </h4>
                      <p className="text-sm text-gray-500 mb-2">
                        Ágreda, Spain — Conceptionist Abbess, Author of <em>The Mystical City of God</em>
                      </p>
                      <p className="text-gray-700 leading-relaxed text-sm">
                        Spanish Franciscan missionaries claimed that Maria appeared to the Jumano tribe
                        in Texas and New Mexico between 1620 and 1629, instructing them in the faith
                        and preparing them for baptism — while she herself never left Spain. When the
                        missionaries eventually met her in person and showed her a cross the tribe had
                        given them, she recognized it. The Spanish Inquisition investigated in 1630 and
                        found no fault. The Bishop of New Mexico accepted the testimonies. Her cause for
                        beatification remains open — a fascinating intersection of mysticism and
                        American missionary history.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Case 4 */}
                <div className="rounded-xl border p-6" style={{ borderColor: '#C7D2FE' }}>
                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: '#EEF2FF' }}
                    >
                      <Church className="w-5 h-5" style={{ color: '#4338CA' }} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-800">
                        St. Alphonsus Liguori (1696–1787)
                      </h4>
                      <p className="text-sm text-gray-500 mb-2">
                        Sant'Agata dei Goti, Italy — Bishop, Founder of the Redemptorists
                      </p>
                      <p className="text-gray-700 leading-relaxed text-sm">
                        In September 1774, Alphonsus fell into a state of unconsciousness lasting several
                        days. When he awoke, he said he had been at the deathbed of Pope Clement XIV in
                        Rome — two days' journey away. News arrived from Rome that the Pope had indeed
                        died at that hour. Multiple witnesses in Rome had seen Alphonsus present.
                        Alphonsus himself neither confirmed nor denied the claim. Canonized 1839. Doctor
                        of the Church, patron of moral theologians. Feast: August 1.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Case 5 */}
                <div className="rounded-xl border p-6" style={{ borderColor: '#C7D2FE' }}>
                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: '#EEF2FF' }}
                    >
                      <Star className="w-5 h-5" style={{ color: '#4338CA' }} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-800">
                        St. Padre Pio (1887–1968)
                      </h4>
                      <p className="text-sm text-gray-500 mb-2">
                        San Giovanni Rotondo, Italy — Capuchin Franciscan Priest
                      </p>
                      <p className="text-gray-700 leading-relaxed text-sm">
                        The most extensively witnessed modern case. Reports of his bilocation came from
                        across Italy and from WWII soldiers in North Africa. In one documented case, the
                        future Pope John XXIII (then Archbishop Roncalli) reported seeing Padre Pio in
                        his quarters in Paris in 1947 — when Padre Pio was under Vatican restrictions
                        and had not left San Giovanni Rotondo. Over 1,000 letters from people claiming
                        to have seen him arrived at the friary during his lifetime. Canonized 2002.
                        Feast: September 23.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Case 6 */}
                <div className="rounded-xl border p-6" style={{ borderColor: '#C7D2FE' }}>
                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: '#EEF2FF' }}
                    >
                      <Scroll className="w-5 h-5" style={{ color: '#4338CA' }} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-800">
                        St. John Joseph of the Cross (1654–1734)
                      </h4>
                      <p className="text-sm text-gray-500 mb-2">
                        Ischia, Italy — Capuchin Franciscan
                      </p>
                      <p className="text-gray-700 leading-relaxed text-sm">
                        Multiple credible witnesses testified to his simultaneous presence in different
                        places on documented occasions. Their testimonies were collected and examined
                        during the canonization process. Canonized 1839 — the same year as St. Alphonsus
                        Liguori — by Pope Gregory XVI.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== TAB 3: LEVITATION ==================== */}
        {activeTab === 'levitation' && (
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: '#EEF2FF' }}
                >
                  <Wind className="w-6 h-6" style={{ color: '#4338CA' }} />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">
                  Levitation — Rising Against Gravity in Prayer
                </h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                Levitation is the bodily rising of a person above the ground during prayer, without
                any physical support — against the laws of gravity. It is distinct from any trick or
                performance. In the hagiographical record, levitation is almost universally described
                as involuntary: saints who levitated typically tried to hide it, prevent it, or prayed
                to be relieved of it. The recipients found it embarrassing rather than glorifying.
              </p>

              <div
                className="rounded-lg border p-5 mb-8"
                style={{ backgroundColor: '#EEF2FF', borderColor: '#C7D2FE' }}
              >
                <h3 className="font-bold mb-2" style={{ color: '#312E81' }}>
                  Theological Context
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#3730A3' }}>
                  No Church doctrine requires levitation for holiness. St. John of the Cross was
                  skeptical of ecstatic bodily phenomena. However, when they occur in the context of
                  genuine holiness and prayer, the Church has not rejected them — they have been accepted
                  as part of the saint's documented spiritual life, investigated during canonization
                  processes, and judged as compatible with genuine holiness.
                </p>
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-6">Five Documented Cases</h3>

              <div className="space-y-6">
                {/* Case 1 */}
                <div className="rounded-xl border p-6" style={{ borderColor: '#C7D2FE' }}>
                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: '#EEF2FF' }}
                    >
                      <Crown className="w-5 h-5" style={{ color: '#4338CA' }} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-800">
                        St. Teresa of Ávila (1515–1582)
                      </h4>
                      <p className="text-sm text-gray-500 mb-2">
                        Ávila, Spain — Carmelite, Doctor of the Church
                      </p>
                      <p className="text-gray-700 leading-relaxed text-sm">
                        Teresa describes her own levitations in <em>Book of Her Life</em> (ch. 20)
                        with remarkable theological and psychological precision. She describes being
                        lifted by an invisible force during prayer or the Divine Office, unable to
                        prevent it. She found it mortifying and asked God to end it, writing: "I implore
                        You to grant me no more favors which have external and visible signs." Her
                        confessor Fr. García de Toledo witnessed it; other sisters witnessed it. The
                        levitations ceased late in her life. Doctor of the Church 1970. Feast: October 15.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Case 2 */}
                <div className="rounded-xl border p-6" style={{ borderColor: '#C7D2FE' }}>
                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: '#EEF2FF' }}
                    >
                      <Star className="w-5 h-5" style={{ color: '#4338CA' }} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-800">
                        St. Joseph of Cupertino (1603–1663)
                      </h4>
                      <p className="text-sm text-gray-500 mb-2">
                        Cupertino, Lecce, Italy — Franciscan Conventual, Patron of Aviators
                      </p>
                      <p className="text-gray-700 leading-relaxed text-sm">
                        The canonical levitation saint — documented more thoroughly than any other in
                        Church history. His levitations were frequent, public, and witnessed by enormous
                        numbers of people over 35 years. Eyewitnesses include the Duke of Brunswick (a
                        Lutheran who converted to Catholicism after witnessing one), Pope Urban VIII,
                        and Johann Friedrich, Duke of Brunswick-Lüneburg (another Protestant royal,
                        also reportedly moved toward conversion). The levitations often occurred during
                        Mass, at the name of Jesus, or upon seeing devotional objects. Church authorities,
                        embarrassed by disruptions to the liturgy, repeatedly moved him to remote
                        locations. His canonization process collected more than 5,000 witness testimonies.
                        Canonized 1767. Feast: September 18.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Case 3 */}
                <div className="rounded-xl border p-6" style={{ borderColor: '#C7D2FE' }}>
                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: '#EEF2FF' }}
                    >
                      <BookOpen className="w-5 h-5" style={{ color: '#4338CA' }} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-800">
                        St. John of the Cross (1542–1591)
                      </h4>
                      <p className="text-sm text-gray-500 mb-2">
                        Ávila / Granada, Spain — Carmelite, Doctor of the Church
                      </p>
                      <p className="text-gray-700 leading-relaxed text-sm">
                        The great mystical theologian who was most deeply skeptical of extraordinary
                        phenomena — and warned consistently against them — was himself documented to
                        have experienced them. His biographer Jerónimo de San José recorded a levitation
                        witnessed by a brother who found John raised from the floor during evening prayer
                        in his cell. It is perhaps the most theologically ironic detail in the history
                        of mystical theology: the saint most insistent on distrusting extraordinary
                        phenomena was himself given them.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Case 4 */}
                <div className="rounded-xl border p-6" style={{ borderColor: '#C7D2FE' }}>
                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: '#EEF2FF' }}
                    >
                      <Flame className="w-5 h-5" style={{ color: '#4338CA' }} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-800">
                        St. Christina the Astonishing (1150–1224)
                      </h4>
                      <p className="text-sm text-gray-500 mb-2">
                        Sint-Truiden, Belgium — Lay mystic
                      </p>
                      <p className="text-gray-700 leading-relaxed text-sm">
                        One of the strangest cases in hagiography. Christina appeared to die aged 21
                        and came back to life during her own funeral Mass — immediately levitating to
                        the rafters of the church. Contemporary witness Thomas of Cantimpré documented
                        her life shortly after her death, recording frequent levitations and extreme
                        asceticism throughout her long life. She was never formally canonized but was
                        beatified and her cult was approved by local authorities. Her case continues to
                        fascinate historians of medieval mysticism.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Case 5 */}
                <div className="rounded-xl border p-6" style={{ borderColor: '#C7D2FE' }}>
                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: '#EEF2FF' }}
                    >
                      <Star className="w-5 h-5" style={{ color: '#4338CA' }} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-800">
                        St. Padre Pio (1887–1968)
                      </h4>
                      <p className="text-sm text-gray-500 mb-2">
                        San Giovanni Rotondo, Italy — Capuchin Franciscan Priest
                      </p>
                      <p className="text-gray-700 leading-relaxed text-sm">
                        Multiple witnesses reported seeing Padre Pio levitate in his cell or during
                        prayer. His religious superiors and spiritual directees documented these
                        experiences alongside his bilocation, stigmata, and the reading of souls.
                        Together, Padre Pio represents the most comprehensively documented case of
                        multiple mystical phenomena occurring in a single person in the modern era.
                        Canonized 2002. Feast: September 23.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== TAB 4: VISIONS & LOCUTIONS ==================== */}
        {activeTab === 'visions' && (
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: '#EEF2FF' }}
                >
                  <Eye className="w-6 h-6" style={{ color: '#4338CA' }} />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">
                  Visions, Locutions, and Interior Knowledge
                </h2>
              </div>

              {/* Classification Box */}
              <div
                className="rounded-lg border p-6 mb-8"
                style={{ backgroundColor: '#EEF2FF', borderColor: '#C7D2FE' }}
              >
                <h3 className="font-bold mb-4" style={{ color: '#312E81' }}>
                  Classification of Visions (Augustine, Aquinas, Tanquerey)
                </h3>
                <div className="space-y-4">
                  <div>
                    <span className="font-semibold text-sm" style={{ color: '#4338CA' }}>
                      Corporeal Visions
                    </span>
                    <p className="text-sm text-gray-700 mt-0.5">
                      A physical form seen with bodily eyes. Most rare, most open to illusion, and
                      least often credited by the mystical theologians.
                    </p>
                  </div>
                  <div>
                    <span className="font-semibold text-sm" style={{ color: '#4338CA' }}>
                      Imaginative Visions
                    </span>
                    <p className="text-sm text-gray-700 mt-0.5">
                      Perceived through the imagination during sleep or waking — the most common in
                      Scripture (Jacob's ladder, Isaiah's throne, Ezekiel's chariot, John's Revelation).
                      Can be of divine or human origin and require discernment.
                    </p>
                  </div>
                  <div>
                    <span className="font-semibold text-sm" style={{ color: '#4338CA' }}>
                      Intellectual Visions
                    </span>
                    <p className="text-sm text-gray-700 mt-0.5">
                      Direct impression on the intellect without sensory form — no image, just clear
                      knowledge. St. Teresa of Ávila, St. Ignatius, and others describe this form.
                      Considered by mystical theologians to be the purest and least open to illusion.
                    </p>
                  </div>
                </div>
                <div className="border-t mt-4 pt-4" style={{ borderColor: '#C7D2FE' }}>
                  <h3 className="font-bold mb-3" style={{ color: '#312E81' }}>
                    Classification of Locutions
                  </h3>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-700">
                      <strong>Exterior (auricular):</strong> heard with the physical ears — most
                      subject to illusion and self-deception.
                    </p>
                    <p className="text-sm text-gray-700">
                      <strong>Interior (imaginative):</strong> heard clearly within the mind without
                      external sound.
                    </p>
                    <p className="text-sm text-gray-700">
                      <strong>Intellectual:</strong> direct infusion of knowledge without words or
                      images — the most certain form.
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-6">Four Major Examples</h3>

              <div className="space-y-6">
                {/* Case 1 */}
                <div className="rounded-xl border p-6" style={{ borderColor: '#C7D2FE' }}>
                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: '#EEF2FF' }}
                    >
                      <BookOpen className="w-5 h-5" style={{ color: '#4338CA' }} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-800">
                        St. Hildegard of Bingen (1098–1179)
                      </h4>
                      <p className="text-sm text-gray-500 mb-2">
                        Disibodenberg / Rupertsberg, Germany — Benedictine Abbess, Doctor of the Church
                      </p>
                      <p className="text-gray-700 leading-relaxed text-sm mb-3">
                        Hildegard describes her visions as "the living light" — not seen with bodily
                        eyes but with the eyes of the soul. She wrote to St. Bernard of Clairvaux for
                        discernment of her visions; he encouraged her to write them down. The result
                        was <em>Scivias</em> (Know the Ways), <em>Liber Vitae Meritorum</em>, and
                        <em> Liber Divinorum Operum</em> — major prophetic and theological works.
                        She also composed over 70 liturgical hymns (the <em>Symphonia</em>).
                      </p>
                      <p className="text-gray-700 leading-relaxed text-sm">
                        Her contemporaries submitted her visions to Pope Eugenius III (1147–48), who
                        had them examined by a synod at Trier and approved. She was declared Doctor
                        of the Church in 2012. Feast: September 17.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Case 2 */}
                <div className="rounded-xl border p-6" style={{ borderColor: '#C7D2FE' }}>
                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: '#EEF2FF' }}
                    >
                      <Heart className="w-5 h-5" style={{ color: '#4338CA' }} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-800">
                        St. Catherine of Siena (1347–1380)
                      </h4>
                      <p className="text-sm text-gray-500 mb-2">
                        Siena, Italy — Dominican Tertiary, Doctor of the Church, Co-Patroness of Europe
                      </p>
                      <p className="text-gray-700 leading-relaxed text-sm">
                        Catherine describes a "mystical marriage" with Christ — an intellectual vision
                        in which she experienced total union with Christ and received the invisible
                        stigmata. She also received the grace of reading souls, by which she could
                        discern the state of people's consciences with remarkable accuracy. Over 380
                        of her letters are preserved, and her <em>Dialogue</em> was dictated while in
                        ecstasy — she could not write herself. Her confessor Raymond of Capua and
                        other witnesses document these states extensively. Feast: April 29.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Case 3 */}
                <div className="rounded-xl border p-6" style={{ borderColor: '#C7D2FE' }}>
                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: '#EEF2FF' }}
                    >
                      <Flame className="w-5 h-5" style={{ color: '#4338CA' }} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-800">
                        St. Faustina Kowalska (1905–1938)
                      </h4>
                      <p className="text-sm text-gray-500 mb-2">
                        Warsaw, Poland — Congregation of Our Lady of Mercy
                      </p>
                      <p className="text-gray-700 leading-relaxed text-sm mb-3">
                        Her diary, <em>Divine Mercy in My Soul</em> (663 pages), records an extensive
                        series of visions and locutions related to the message of Divine Mercy. Christ
                        appears to her and dictates the Chaplet of Divine Mercy; he reveals the "rays
                        of mercy" that form the basis of the Divine Mercy image. The diary was initially
                        suppressed by the Holy Office in 1959 due to concerns about translation errors
                        and theological novelties.
                      </p>
                      <p className="text-gray-700 leading-relaxed text-sm">
                        The suppression was fully lifted after Cardinal Karol Wojtyla (future Pope John
                        Paul II) conducted a thorough investigation in 1978 and found no theological
                        error in the properly translated text. She was canonized in the Jubilee Year
                        2000 by John Paul II. Feast: October 5 (Divine Mercy Sunday).
                      </p>
                    </div>
                  </div>
                </div>

                {/* Case 4 */}
                <div className="rounded-xl border p-6" style={{ borderColor: '#C7D2FE' }}>
                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: '#EEF2FF' }}
                    >
                      <Scroll className="w-5 h-5" style={{ color: '#4338CA' }} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-800">
                        Bl. Anne Catherine Emmerich (1774–1824)
                      </h4>
                      <p className="text-sm text-gray-500 mb-2">
                        Dülmen, Westphalia, Germany — Augustinian
                      </p>
                      <p className="text-gray-700 leading-relaxed text-sm">
                        Her visions of the entire life of Christ — the Nativity, the hidden life, the
                        Passion in extraordinary detail — were transcribed by the Romantic poet Clemens
                        Brentano and published as <em>The Dolorous Passion of Our Lord Jesus Christ</em>
                        (1833) and <em>The Life of the Blessed Virgin Mary</em>. The visions provided
                        topographical details later found to be partly corroborated by archaeology: the
                        House of the Virgin Mary in Ephesus was identified partly through details
                        appearing in her visions. Mel Gibson's <em>The Passion of the Christ</em> draws
                        extensively on her Passion visions. Beatified 2004. Feast: February 9.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== TAB 5: MYSTICAL STATES ==================== */}
        {activeTab === 'mystical-states' && (
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: '#EEF2FF' }}
                >
                  <Shield className="w-6 h-6" style={{ color: '#4338CA' }} />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">
                  Mystical Fasting, Odor of Sanctity & Other Phenomena
                </h2>
              </div>

              {/* Section A: Mystical Fasting */}
              <div className="mb-10">
                <div className="flex items-center gap-2 mb-4">
                  <Flame className="w-5 h-5" style={{ color: '#4338CA' }} />
                  <h3 className="text-xl font-bold text-gray-800">
                    Section A — Mystical Fasting (Inedia)
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4 text-sm">
                  Inedia is the alleged ability to survive without normal food and water, sustained
                  apparently only by the Eucharist. This is not a teaching of the Church and is not
                  required for holiness. The Church is extremely cautious. The investigative question
                  is always the same: is there genuine inedia (whatever its mechanism), or is there
                  deception? Supervised fasting periods under medical and Church observation have been
                  used to investigate such cases.
                </p>

                <div className="space-y-4">
                  {[
                    {
                      name: 'Bl. Alexandrina da Costa (1904–1955)',
                      location: 'Balasar, Portugal',
                      body: 'For 13 years (1942–1955) Alexandrina took nothing but the Eucharist. She was examined by physicians from the University of Porto, who confirmed she consumed no other nourishment during the investigated period. Beatified 2004. Feast: October 13.',
                    },
                    {
                      name: 'Ven. Theresa Neumann (1898–1962)',
                      location: 'Konnersreuth, Bavaria, Germany',
                      body: 'From 1922, Theresa claimed to live on the Eucharist alone. In 1927, a 14-day supervised fast was conducted under both Church and medical observation, which confirmed she took no nourishment. She also bore the stigmata from 1926 until her death. Her cause for beatification is currently open.',
                    },
                    {
                      name: 'Bl. Nicolas of Flüe — St. Klaus (1417–1487)',
                      location: 'Obwalden, Switzerland — Patron Saint of Switzerland',
                      body: 'For 19 years of his hermit life, Nicolas reputedly ate nothing. He was examined by local civil and ecclesiastical officials on multiple occasions. Canonized 1947. Feast: March 21.',
                    },
                    {
                      name: 'St. Catherine of Siena (1347–1380)',
                      location: 'Siena, Italy',
                      body: 'Catherine lived for extended periods apparently without food late in her life, a fact documented by her confessor Raymond of Capua in his Life of Catherine (1395). She herself regarded this as a burden rather than a gift.',
                    },
                  ].map((item) => (
                    <div
                      key={item.name}
                      className="rounded-lg border p-5"
                      style={{ borderColor: '#C7D2FE', backgroundColor: '#FAFBFF' }}
                    >
                      <h4 className="font-bold text-gray-800 text-sm">{item.name}</h4>
                      <p className="text-xs text-gray-500 mb-2">{item.location}</p>
                      <p className="text-sm text-gray-700 leading-relaxed">{item.body}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section B: Odor of Sanctity */}
              <div className="mb-10">
                <div className="flex items-center gap-2 mb-4">
                  <Heart className="w-5 h-5" style={{ color: '#4338CA' }} />
                  <h3 className="text-xl font-bold text-gray-800">
                    Section B — Odor of Sanctity
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-3 text-sm">
                  A pleasant fragrance, often described as flowers or perfume, associated with holy
                  persons during life or after death. The New Testament describes holiness in fragrant
                  terms: 2 Corinthians 2:15 says, "For we are the aroma of Christ to God among those
                  who are being saved." This is primarily metaphorical in Paul's usage, but the Church
                  has long associated physical fragrance with the presence of sanctity.
                </p>

                <div className="space-y-4">
                  {[
                    {
                      name: 'St. Padre Pio',
                      body: 'Witnesses reported a fragrance of violets or roses around him and around objects he had blessed. Letters arrived at the friary from around the world reporting that the writer had "smelled the padre" — a distinctive perfume with no local source — when they were in distress. Documented in his canonization process.',
                    },
                    {
                      name: 'St. Thérèse of Lisieux',
                      body: 'She promised before death to "spend heaven doing good on earth, sending a shower of roses." Reports of rose fragrance in answer to prayer are among the most widely documented phenomena associated with her intercession — so common that it has become her recognized sign.',
                    },
                    {
                      name: 'St. Catherine of Siena',
                      body: 'Raymond of Capua reports a sweet fragrance associated with Catherine during life and persisting after death — an example of the broader medieval and Renaissance Catholic tradition of the odor of sanctity as a recognized sign of holiness.',
                    },
                    {
                      name: 'St. Francis of Assisi',
                      body: 'His biographer Thomas of Celano, writing in 1229, reports fragrance emanating from Francis at his death — among the earliest documented instances of this phenomenon in the Franciscan tradition.',
                    },
                  ].map((item) => (
                    <div
                      key={item.name}
                      className="rounded-lg border p-5"
                      style={{ borderColor: '#C7D2FE', backgroundColor: '#FAFBFF' }}
                    >
                      <h4 className="font-bold text-gray-800 text-sm mb-1">{item.name}</h4>
                      <p className="text-sm text-gray-700 leading-relaxed">{item.body}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section C: Reading of Souls */}
              <div className="mb-10">
                <div className="flex items-center gap-2 mb-4">
                  <Brain className="w-5 h-5" style={{ color: '#4338CA' }} />
                  <h3 className="text-xl font-bold text-gray-800">
                    Section C — Reading of Souls (Cardiognosis)
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-3 text-sm">
                  Cardiognosis is the alleged ability to know, supernaturally, the interior state of
                  a person's conscience — sins, spiritual condition, and sometimes past and future events
                  in their life. St. Thomas Aquinas distinguishes between knowledge that comes from
                  demonic agency (which is not supernatural but natural knowledge of great scope) and
                  genuine infused knowledge from God. The discernment criterion: does it lead to
                  holiness, conversion, and submission to the Church?
                </p>

                <div className="space-y-4">
                  {[
                    {
                      name: 'St. Padre Pio',
                      body: 'Thousands of accounts from his confessional document that he knew penitents\' sins before they spoke them, called people by name they had not given, and told people things only God could know. His confessional sometimes had queues lasting more than a month. The Vatican\'s own investigators noted this phenomenon without being able to account for it naturally.',
                    },
                    {
                      name: 'St. John Vianney — the Curé of Ars',
                      body: 'His confessional drew up to 300 pilgrims a day in the last years of his life (1825–1859). He reportedly knew people\'s sins before they spoke and called strangers by specific details only they knew. This was thoroughly documented in his canonization process. Canonized 1925 by Pope Pius XI, patron of parish priests.',
                    },
                  ].map((item) => (
                    <div
                      key={item.name}
                      className="rounded-lg border p-5"
                      style={{ borderColor: '#C7D2FE', backgroundColor: '#FAFBFF' }}
                    >
                      <h4 className="font-bold text-gray-800 text-sm mb-1">{item.name}</h4>
                      <p className="text-sm text-gray-700 leading-relaxed">{item.body}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section D: Mystical Marriage */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Crown className="w-5 h-5" style={{ color: '#4338CA' }} />
                  <h3 className="text-xl font-bold text-gray-800">
                    Section D — Mystical Marriage
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4 text-sm">
                  Mystical marriage is a term in Catholic mystical theology for an advanced stage of
                  spiritual union between the soul and Christ, described by some mystics as an
                  experience of total union analogous to marriage. It is a state of the soul, not a
                  physical event — the culmination of the interior life as described by the great
                  Carmelite Doctors.
                </p>
                <div className="space-y-4">
                  {[
                    {
                      name: 'St. Teresa of Ávila — Interior Castle, 7th Mansion',
                      body: 'The "spiritual marriage" is a permanent state of union with God, distinct from the earlier and less stable "spiritual betrothal." The soul experiences God as an indwelling presence — not occasional touches or consolations, but a constant awareness of the Trinity within. Teresa considered this the goal of the entire Interior Castle journey.',
                    },
                    {
                      name: 'St. Catherine of Siena',
                      body: 'Catherine experienced a mystical marriage on Shrove Tuesday, 1367. In a vision, Christ presented her with a ring — invisible to others — as a sign of their union. She received the invisible stigmata at the same time. Raymond of Capua records both events in the Life of Catherine.',
                    },
                    {
                      name: 'St. John of the Cross — Spiritual Canticle',
                      body: 'John describes the soul\'s union with the Word in terms drawn from the Song of Songs — the Biblical book he regarded as the supreme scriptural image of mystical union. The Spiritual Canticle traces the soul\'s journey from seeking to union to total transformation in God.',
                    },
                  ].map((item) => (
                    <div
                      key={item.name}
                      className="rounded-lg border p-5"
                      style={{ borderColor: '#C7D2FE', backgroundColor: '#FAFBFF' }}
                    >
                      <h4 className="font-bold text-gray-800 text-sm mb-1">{item.name}</h4>
                      <p className="text-sm text-gray-700 leading-relaxed">{item.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== TAB 6: SOURCES ==================== */}
        {activeTab === 'sources' && (
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: '#EEF2FF' }}
                >
                  <Scroll className="w-6 h-6" style={{ color: '#4338CA' }} />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Sources & Theological Reading</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The following sources constitute the primary theological, historical, and magisterial
                foundations for the study of Catholic mystical phenomena. Readers wishing to go deeper
                should begin with Tanquerey and Thurston — one a comprehensive systematic treatment,
                the other a rigorous historical investigation.
              </p>

              <div
                className="rounded-xl border p-6"
                style={{ backgroundColor: '#EEF2FF', borderColor: '#C7D2FE' }}
              >
                <h3 className="font-bold mb-5" style={{ color: '#312E81' }}>
                  Magisterial & Scriptural Sources
                </h3>
                <ul className="space-y-3 mb-8">
                  {[
                    'Catechism of the Catholic Church. §§ 2003, 2014. Vatican City: Libreria Editrice Vaticana, 1992. (Charismatic gifts; mystical union.)',
                    '2 Corinthians 12:7–9. (Paul\'s thorn in the flesh — God\'s grace is sufficient without extraordinary phenomena.)',
                    '2 Corinthians 2:15. (The Christian life as the aroma of Christ — basis for the theology of the odor of sanctity.)',
                  ].map((source, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#4338CA' }} />
                      <span className="text-sm text-gray-700 leading-relaxed">{source}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="font-bold mb-5" style={{ color: '#312E81' }}>
                  Primary Mystical Sources
                </h3>
                <ul className="space-y-3 mb-8">
                  {[
                    'St. John of the Cross. Ascent of Mount Carmel. Book II, chs. 16–29. (On visions and locutions — the classic warning against seeking extraordinary phenomena.)',
                    'St. Teresa of Ávila. Interior Castle. 6th and 7th Mansions. Trans. E. Allison Peers. New York: Doubleday, 1961.',
                    'St. Teresa of Ávila. Book of Her Life. Ch. 20. (First-person account of levitation.)',
                    'St. John of the Cross. Spiritual Canticle. (The soul\'s union with the Word in terms of the Song of Songs.)',
                  ].map((source, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#4338CA' }} />
                      <span className="text-sm text-gray-700 leading-relaxed">{source}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="font-bold mb-5" style={{ color: '#312E81' }}>
                  Standard Theological References
                </h3>
                <ul className="space-y-3 mb-8">
                  {[
                    'Tanquerey, Adolphe. The Spiritual Life: A Treatise on Ascetical and Mystical Theology. Tournai: Desclée, 1930. (The standard Catholic seminary text on mystical theology — still definitive.)',
                    'Poulain, Augustin. The Graces of Interior Prayer (Des grâces d\'oraison). London: Kegan Paul, 1910. (Comprehensive Jesuit study of mystical states.)',
                    'Thurston, Herbert, SJ. The Physical Phenomena of Mysticism. London: Burns Oates, 1952. (Rigorous Jesuit historical study — skeptical but thorough; essential for serious readers.)',
                  ].map((source, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#4338CA' }} />
                      <span className="text-sm text-gray-700 leading-relaxed">{source}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="font-bold mb-5" style={{ color: '#312E81' }}>
                  Hagiographical & Historical Sources
                </h3>
                <ul className="space-y-3 mb-8">
                  {[
                    'Raymond of Capua. Life of Catherine of Siena (Legenda Major). Trans. Conleth Kearns, OP. Wilmington: Michael Glazier, 1980.',
                    'Thomas of Celano. First Life of St. Francis. 1229. (Primary source for the stigmata and the odor of sanctity at Francis\'s death.)',
                    'Cruz, Joan Carroll. Mysteries, Marvels, Miracles in the Lives of the Saints. TAN Books, 1997. (Accessible Catholic survey.)',
                    'Keating, Thomas. Open Mind, Open Heart. New York: Continuum, 1986. (Contemporary Centering Prayer, grounded in the apophatic tradition of Meister Eckhart and The Cloud of Unknowing.)',
                  ].map((source, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#4338CA' }} />
                      <span className="text-sm text-gray-700 leading-relaxed">{source}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="font-bold mb-5" style={{ color: '#312E81' }}>
                  Patristic & Scholarly Context
                </h3>
                <ul className="space-y-3">
                  {[
                    'Moreschini, Claudio, and Norelli, Enrico. Early Christian Greek and Latin Literature. Vol. 1. Peabody: Hendrickson, 2005. (Context for patristic mystical theology.)',
                  ].map((source, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#4338CA' }} />
                      <span className="text-sm text-gray-700 leading-relaxed">{source}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer Note */}
              <div
                className="mt-6 rounded-lg border p-4"
                style={{ backgroundColor: '#F5F3FF', borderColor: '#DDD6FE' }}
              >
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#6D28D9' }} />
                  <p className="text-sm leading-relaxed" style={{ color: '#4C1D95' }}>
                    <strong>A note on discernment:</strong> The Church's investigation of mystical
                    phenomena follows the principle articulated by St. John of the Cross and codified
                    in the norms for canonization: heroic virtue comes first. No phenomenon, however
                    extraordinary, substitutes for the long practice of charity, humility, and fidelity
                    to the Church's life and sacraments. The saints are studied not because of their
                    phenomena but because of their virtue.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}
