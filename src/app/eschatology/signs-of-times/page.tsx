'use client'

import { useState } from 'react'
import {
  Eye,
  Scale,
  Church,
  Layers,
  AlertTriangle,
  Waves,
  Star,
  XCircle,
  Clock,
  Heart,
  Sunrise,
  BookOpen,
  Users,
  CheckCircle,
} from 'lucide-react'

type TabId =
  | 'what-are-signs'
  | 'matthew-24'
  | 'marian-apparitions'
  | 'avoiding-date-setting'
  | 'hope-virtue'
  | 'practical-living'

const tabs: { id: TabId; label: string }[] = [
  { id: 'what-are-signs', label: 'What Are “Signs of the Times”?' },
  { id: 'matthew-24', label: 'Matthew 24 Revisited' },
  { id: 'marian-apparitions', label: 'Marian Apparitions & End Times' },
  { id: 'avoiding-date-setting', label: 'Avoiding Date-Setting' },
  { id: 'hope-virtue', label: 'Hope as Eschatological Virtue' },
  { id: 'practical-living', label: 'Practical Living' },
]

export default function SignsOfTimesPage() {
  const [activeTab, setActiveTab] = useState<TabId>('what-are-signs')

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Signs of the Times
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            How does the Church approach current events in light of eschatology? What does Jesus mean
            by &ldquo;signs of the times&rdquo;? How do we avoid both false alarm and blind complacency?
            This page presents the Catholic framework for reading history and current events.
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

        {/* ==================== TAB 1: WHAT ARE "SIGNS OF THE TIMES"? ==================== */}
        {activeTab === 'what-are-signs' && (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Eye className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Source: Matthew 16:3</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Jesus rebukes the Pharisees: &ldquo;You know how to interpret the appearance of the sky,
                but you cannot interpret the signs of the times&rdquo; (Matt 16:3). Also: &ldquo;When
                you see these things happening, you know that the kingdom of God is near&rdquo;
                (Luke 21:31).
              </p>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">The Phrase in Catholic Tradition</h3>
                <p className="text-amber-800 mb-3">
                  Pope John XXIII used &ldquo;signs of the times&rdquo; in his 1961 apostolic constitution
                  <em> Humanae Salutis</em> convening Vatican II: &ldquo;In the present order of things,
                  Divine Providence is leading us to a new order of human relations.&rdquo;
                </p>
                <p className="text-amber-800 italic mb-3">
                  &ldquo;The Church has always had the duty of scrutinizing the signs of the times and
                  of interpreting them in the light of the Gospel.&rdquo;
                </p>
                <p className="text-amber-700 text-sm">&mdash; <em>Gaudium et Spes</em> 4 (Vatican II)</p>
              </div>

              <p className="text-gray-700 leading-relaxed">
                This is a call to <em>discernment</em>, not calculation; attentiveness to history, not
                alarm. The Church reads history not to predict the hour of the end but to understand
                what God is calling his people to do <em>now</em>.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Scale className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Two Kinds of &ldquo;Signs&rdquo;</h2>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-1">Eschatological Signs (pointing to the end)</h4>
                    <p className="text-blue-800">Evangelization of all nations; the conversion of Israel;
                    the final trial; the Antichrist &mdash; CCC 673&ndash;677. These are real future
                    events whose fulfillment only God knows.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-1">Signs of the Times (reading present history)</h4>
                    <p className="text-blue-800">Social, cultural, political, and spiritual developments
                    that illuminate the Church&rsquo;s mission in the present. These call for discernment
                    and response, not prophetic calculation.</p>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                Confusion of these two categories leads to either:
              </p>
              <ul className="text-gray-700 space-y-2 ml-4">
                <li><em>Over-reading:</em> Every earthquake = the end is near; every political crisis =
                the Antichrist has arrived.</li>
                <li><em>Under-reading:</em> Spiritual blindness to genuine challenges that require the
                Church&rsquo;s response &mdash; climate crisis, poverty, persecution of Christians.</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Church className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Church&rsquo;s Role in History</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The Church is not a passive observer waiting for the end; she is the Body of Christ
                actively working in history for the Kingdom.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <p className="text-amber-800 italic mb-3">
                  &ldquo;The Church, by reason of her role and competence, is not identified in any way
                  with the political community nor bound to any political system&hellip; At the same time,
                  she serves as a leaven and as a kind of soul for human society.&rdquo;
                </p>
                <p className="text-amber-700 text-sm">&mdash; <em>Gaudium et Spes</em> 40</p>
              </div>

              <p className="text-gray-700 leading-relaxed">
                Eschatology does not license quietism or withdrawal from the world; it calls for
                <em> deeper</em> engagement. We act in history knowing that history is heading toward
                God&rsquo;s kingdom, and that nothing done in love will be wasted (1 Cor 15:58).
              </p>
            </div>
          </div>
        )}

        {/* ==================== TAB 2: MATTHEW 24 REVISITED ==================== */}
        {activeTab === 'matthew-24' && (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Layers className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Double-Horizon Structure</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Matthew 24 has a &ldquo;double horizon&rdquo; &mdash; addressing both the destruction
                of Jerusalem in 70 AD and the final end of history. Understanding which verses belong
                to which horizon is essential to reading the chapter correctly.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-amber-900 mb-1">Signs Already Fulfilled (70 AD)</h4>
                    <p className="text-amber-800">False messiahs (there were many in the Jewish War);
                    wars and rumors of wars; the Temple&rsquo;s destruction (v. 2: &ldquo;not one stone
                    will be left on another&rdquo;); the spread of the Gospel to all nations before the
                    end of the apostolic generation.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-900 mb-1">Signs That Remain</h4>
                    <p className="text-amber-800">Cosmic disturbances (sun darkened, stars falling);
                    the visible Paro&uuml;sia of the Son of Man; the general resurrection and gathering
                    of the elect.</p>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">
                Key pastoral insight: the fall of Jerusalem in 70 AD was a <em>type</em> or preview of
                the final judgment. History has already shown us what divine judgment looks like &mdash;
                and it is both terrible and redemptive.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">&ldquo;Wars and Rumors of Wars&rdquo;</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Matt 24:6&ndash;7: &ldquo;You will hear of wars and rumors of wars&hellip; nation will
                rise against nation.&rdquo; Jesus explicitly says: <strong>&ldquo;See that you are not
                alarmed, for this must take place, but the end is not yet.&rdquo;</strong>
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <ul className="text-blue-800 space-y-2">
                  <li>The Church&rsquo;s call: do <em>not</em> interpret every war as a sign of the end.
                  These are normal features of fallen human history.</li>
                  <li>The 20th century had two World Wars; neither was &ldquo;the end.&rdquo; The
                  end-times industry produced countless books identifying each conflict as the final
                  one &mdash; all were wrong.</li>
                  <li>Catholic response to war: prayer, peacemaking, solidarity with victims &mdash;
                  not calculation of eschatological timetables.</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Waves className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Natural Disasters</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Matt 24:7: &ldquo;there will be famines and earthquakes in various places. All these
                are but the beginning of the birth pains.&rdquo; &ldquo;Beginning of birth pains&rdquo;
                &mdash; these are not signs of the end but normal features of the creation awaiting
                redemption.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <p className="text-blue-800 italic mb-3">
                  &ldquo;The whole creation has been groaning together in the pains of childbirth
                  until now.&rdquo;
                </p>
                <p className="text-blue-700 text-sm mb-4">&mdash; Romans 8:22</p>
                <p className="text-blue-800">
                  Pope Francis, <em>Laudato Si&rsquo;</em> (2015): Climate change and the ecological
                  crisis are signs of the times calling for conversion and care for creation &mdash;
                  not an end-times trigger but a present moral call. The Catholic response is compassion,
                  relief work, and structural change, not eschatological calculation.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ==================== TAB 3: MARIAN APPARITIONS & END TIMES ==================== */}
        {activeTab === 'marian-apparitions' && (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Fatima and Eschatological Language</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Fatima (1917) is the most prominent approved apparition with eschatological elements:
                Russia&rsquo;s errors spreading, wars, the &ldquo;annihilation of nations&rdquo; if
                people do not repent, and the promise of the Triumph of the Immaculate Heart.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">The Third Secret and Its Interpretation</h3>
                <p className="text-amber-800 mb-3">
                  The Third Secret (revealed by the Vatican in 2000): a vision of a bishop in white
                  (widely interpreted as a past or future Pope) being killed amid a ruined city. The
                  Vatican&rsquo;s official interpretation is that it refers to 20th-century persecutions
                  &mdash; not a future event.
                </p>
                <p className="text-amber-800">
                  The &ldquo;conversion of Russia&rdquo; and the Triumph of the Immaculate Heart are
                  read by many in the Church as fulfilled in the fall of Soviet communism &mdash; not
                  a future millennial scenario.
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed">
                The Church&rsquo;s teaching: Private revelations (even approved ones like Fatima) do
                not add to the deposit of faith; they are calls to prayer, conversion, and penance &mdash;
                not timetables for the end.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Church className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">What Approved Apparitions Say (and Don&rsquo;t Say)</h2>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <p className="text-blue-800 italic mb-3">
                  &ldquo;Throughout the ages, there have been so-called &lsquo;private&rsquo;
                  revelations&hellip; It is not their role to improve or complete Christ&rsquo;s
                  definitive Revelation, but to help live more fully by it in a certain period
                  of history.&rdquo;
                </p>
                <p className="text-blue-700 text-sm mb-4">&mdash; <em>Catechism of the Catholic Church</em>, 67</p>
                <ul className="text-blue-800 space-y-2">
                  <li>Approved apparitions (Fatima, Lourdes, Guadalupe, Kibeho): Calls to prayer,
                  penance, and conversion; acknowledgment of present crises; hope in Mary&rsquo;s
                  intercession.</li>
                  <li><strong>None</strong> of the approved apparitions gives a specific date for
                  the end of the world.</li>
                  <li>The Church&rsquo;s consistent teaching: the message of Marian apparitions is
                  always the same &mdash; pray, repent, trust in God; not end-times chronologies.</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-red-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Unapproved Apparitions and Sensationalism</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Many claimed apparitions that have <em>not</em> been approved by the Church contain
                sensational end-times predictions, specific dates, and catastrophic scenarios.
              </p>

              <div className="bg-red-50 p-6 rounded-lg mb-6">
                <ul className="text-red-800 space-y-3">
                  <li>Examples: Bayside (New York, condemned by the Diocese of Brooklyn), Garabandal
                  (not approved), Medjugorje (under investigation; messages not approved for public
                  devotion)</li>
                  <li>The pattern: unapproved apparitions tend to create dependency, fear, and
                  distraction from the sacramental life of the Church</li>
                  <li>The Catholic test: Does the message draw people closer to the Church, the
                  sacraments, and prayer? Or does it create fear, schism, or dependency on the
                  visionary?</li>
                  <li>The Church&rsquo;s discernment process is precisely designed to protect the
                  faithful from exploitation of eschatological fear</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* ==================== TAB 4: AVOIDING DATE-SETTING ==================== */}
        {activeTab === 'avoiding-date-setting' && (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <XCircle className="w-6 h-6 text-red-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Clear Prohibition</h2>
              </div>

              <div className="bg-red-50 p-6 rounded-lg mb-6">
                <p className="text-red-800 italic mb-2">
                  &ldquo;But about that day or hour no one knows, not even the angels in heaven,
                  nor the Son, but only the Father.&rdquo;
                </p>
                <p className="text-red-700 text-sm mb-4">&mdash; Matthew 24:36 / Mark 13:32</p>
                <p className="text-red-800 italic mb-2">
                  &ldquo;It is not for you to know times or seasons that the Father has fixed by
                  his own authority.&rdquo;
                </p>
                <p className="text-red-700 text-sm mb-4">&mdash; Acts 1:7</p>
                <p className="text-red-800 italic mb-2">
                  &ldquo;The day of the Lord will come like a thief in the night.&rdquo;
                </p>
                <p className="text-red-700 text-sm">&mdash; 1 Thessalonians 5:2</p>
              </div>

              <p className="text-gray-700 leading-relaxed">
                Jesus&rsquo; statement is categorical: no human being can know the timing of the end.
                These texts are not suggestions; they are direct prohibitions on end-times calculation.
                Every teacher who has set a date has violated these texts directly.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">A Brief History of Failed Predictions</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Every single end-times prediction in 2,000 years of Christianity has been wrong.
                This is not a coincidence; it is a direct consequence of violating Jesus&rsquo;
                explicit teaching.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <ul className="text-amber-800 space-y-3">
                  <li><strong>Montanus</strong> (~156 AD): Proclaimed the New Jerusalem would descend
                  in Phrygia; the church condemned Montanism as heresy.</li>
                  <li><strong>Hippolytus of Rome</strong> (~235 AD): Calculated the end in 500 AD
                  based on the dimensions of the Ark.</li>
                  <li><strong>Martin Luther</strong> (~1520): Believed the end was approximately
                  50 years away.</li>
                  <li><strong>William Miller</strong> (Baptist): Predicted Christ&rsquo;s return on
                  October 22, 1844; the &ldquo;Great Disappointment&rdquo; shattered his movement;
                  the Adventist movement emerged from this failure.</li>
                  <li><strong>Charles Russell</strong> (JW founder): Predicted the end in 1914;
                  the organization has revised its predictions multiple times since.</li>
                  <li><strong>Hal Lindsey</strong>: <em>The Late, Great Planet Earth</em> (1970)
                  strongly implied the end by 1988; it did not happen.</li>
                  <li><strong>Harold Camping</strong>: Predicted May 21, 2011, then October 21,
                  2011; both failed; he died in 2013.</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-red-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Spiritual Danger of Date-Setting</h2>
              </div>

              <div className="bg-red-50 p-6 rounded-lg mb-6">
                <ul className="text-red-800 space-y-3">
                  <li><strong>Immediate harm:</strong> People sell possessions, abandon schooling,
                  damage relationships, and withdraw from civic life.</li>
                  <li><strong>Long-term harm:</strong> When the prediction fails, faith collapses;
                  vulnerable people are devastated and sometimes abandon Christianity entirely.</li>
                  <li><strong>Theological harm:</strong> Each failed prediction makes the Gospel
                  look foolish; it is a gift to atheists and skeptics.</li>
                  <li><strong>Personal harm to the teacher:</strong> Living under self-imposed
                  eschatological pressure; the need to constantly revise and explain away failures.</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-green-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Virtue of Eschatological Humility</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The Church&rsquo;s posture is constant readiness without anxious calculation. This
                readiness is not a burden; it is a gift &mdash; the freedom to live fully in the
                present, engaged with the world, trusting God with the future.
              </p>

              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <ul className="text-green-800 space-y-3">
                  <li>St. Francis of Assisi (attributed): &ldquo;If I knew the world would end
                  tomorrow, I would plant an apple tree today&rdquo; &mdash; engagement with the
                  present, trust in God&rsquo;s timing.</li>
                  <li>St. Thomas More (hours before execution): Calmly declared he was the king&rsquo;s
                  good servant, but God&rsquo;s first &mdash; the eschatological perspective gives
                  equanimity, not paralysis.</li>
                  <li>Benedict XVI, <em>Spe Salvi</em> &sect;15: &ldquo;We must accept that what
                  awaits us is not something we can reach by our own efforts &mdash; it is a gift,
                  and this is why we can say that hope is not just a human virtue; it is a
                  theological virtue.&rdquo;</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* ==================== TAB 5: HOPE AS ESCHATOLOGICAL VIRTUE ==================== */}
        {activeTab === 'hope-virtue' && (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Sunrise className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Hope: The Theological Virtue of the Future</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The three theological virtues (1 Cor 13:13): Faith, Hope, Love. Hope is specifically
                <em> eschatological</em> &mdash; oriented toward the future, toward what God has promised.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <p className="text-amber-800 italic mb-3">
                  &ldquo;Hope is the theological virtue by which we desire the kingdom of heaven and
                  eternal life as our happiness, placing our trust in Christ&rsquo;s promises and
                  relying not on our own strength, but on the help of the grace of the Holy Spirit.&rdquo;
                </p>
                <p className="text-amber-700 text-sm">&mdash; <em>Catechism of the Catholic Church</em>, 1817</p>
              </div>

              <p className="text-gray-700 leading-relaxed">
                Hope is not optimism (a temperament) or wishful thinking; it is a theological virtue
                grounded in God&rsquo;s promises, made possible by grace. It is the distinctive
                Christian response to the future &mdash; neither anxiety nor complacency.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Benedict XVI&rsquo;s <em>Spe Salvi</em> (2007)</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                One of the most important papal documents of the 21st century; a sustained meditation
                on Christian hope and its relevance to the present age.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <ul className="text-blue-800 space-y-3">
                  <li>&ldquo;We have been saved by hope&rdquo; (Rom 8:24) &mdash; the past tense
                  paradox: saved <em>already</em> in hope, but not yet in full possession.</li>
                  <li>The great temptations: materialism (salvation through technology and progress);
                  nihilism (no future, no meaning); individualism (private afterlife without cosmic
                  dimension).</li>
                  <li>The Catholic alternative: a hope that is personal but also cosmic; individual
                  but also ecclesial; present but also future.</li>
                  <li>&ldquo;The darkness of the next day&rsquo;s journey is pierced by the certainty
                  that God is good, and that death has been conquered&rdquo; &mdash; the resurrection
                  as the unshakeable ground of hope.</li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed">
                True hope relativizes present suffering without denying it. It makes action possible
                without making it desperate. It is the secret of the saints&rsquo; joy in the midst
                of tribulation.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-green-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Eschatological Hope and Social Action</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The coming Kingdom does not render present action meaningless &mdash; it gives it
                ultimate meaning. Everything done in love will be taken up into the renewed creation.
              </p>

              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <p className="text-green-800 italic mb-3">
                  &ldquo;Therefore, my beloved brothers, be steadfast, immovable, always abounding
                  in the work of the Lord, knowing that in the Lord your labor is not in vain.&rdquo;
                </p>
                <p className="text-green-700 text-sm mb-4">&mdash; 1 Corinthians 15:58</p>
                <ul className="text-green-800 space-y-2">
                  <li>Justice now, because the Kingdom demands justice</li>
                  <li>Care for creation, because creation will be renewed (not discarded)</li>
                  <li>Dignity of every person, because all are destined for eternity</li>
                  <li>The Kingdom is both &ldquo;already&rdquo; (present in the Church, the Eucharist,
                  acts of charity) and &ldquo;not yet&rdquo; (awaiting final manifestation)</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Church className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Marana Tha: The Church&rsquo;s Prayer</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The oldest Christian prayer: &ldquo;Marana tha!&rdquo; &mdash; Aramaic for &ldquo;Come,
                Lord!&rdquo; or &ldquo;Our Lord, come!&rdquo; (1 Cor 16:22; Rev 22:20; <em>Didache</em> 10).
                The final prayer of Revelation: &ldquo;Come, Lord Jesus!&rdquo;
              </p>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <p className="text-amber-800 mb-3">
                  This prayer does <em>not</em> mean: &ldquo;Bring catastrophe as soon as possible.&rdquo;
                  It means: &ldquo;Let Your kingdom come in its fullness; complete what You have begun
                  in us and in your creation.&rdquo;
                </p>
                <p className="text-amber-800">
                  The Eucharist: Every Mass is an anticipation of the heavenly banquet; in the Mass,
                  the &ldquo;already&rdquo; and &ldquo;not yet&rdquo; meet. &ldquo;Until he comes&rdquo;
                  (1 Cor 11:26) &mdash; every Eucharist is a proclamation of his death AND his coming;
                  time is oriented toward the Paro&uuml;sia.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ==================== TAB 6: PRACTICAL LIVING ==================== */}
        {activeTab === 'practical-living' && (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Christian Response to Eschatology</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Not fear, not obsession, not withdrawal from the world &mdash; but readiness, engagement,
                and hope. The three great parables of Matthew 25 define what eschatological readiness
                looks like:
              </p>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <ul className="text-amber-800 space-y-4">
                  <li><strong>The parable of the talents</strong> (Matt 25:14&ndash;30): We are judged
                  on what we <em>did</em> with what we were given &mdash; faithful stewardship, not
                  passivity or hoarding.</li>
                  <li><strong>The parable of the ten virgins</strong> (Matt 25:1&ndash;13): Readiness
                  = keeping the lamp burning (the life of prayer and the sacraments), not calculating
                  the hour of arrival.</li>
                  <li><strong>The parable of the sheep and goats</strong> (Matt 25:31&ndash;46):
                  Judgment is based on concrete acts of mercy &mdash; feeding the hungry, clothing the
                  naked, visiting the imprisoned. Eschatological readiness is love in action.</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Church className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Sacramental Life as Eschatological Preparation</h2>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <ul className="text-blue-800 space-y-3">
                  <li><strong>Regular Mass:</strong> Each Eucharist is a foretaste of the heavenly
                  banquet; participating keeps our orientation correct and our hope alive.</li>
                  <li><strong>Regular Confession:</strong> Readiness requires being in a state of grace
                  &mdash; the particular judgment can come at any moment, for any of us.</li>
                  <li><strong>Lectio Divina and prayer:</strong> Nourishing the &ldquo;lamp&rdquo;
                  (Matt 25:4) &mdash; the life of prayer that keeps the soul awake and oriented.</li>
                  <li><strong>The Liturgy of the Hours:</strong> The Church&rsquo;s daily rhythm of
                  prayer structures time itself around the coming Kingdom.</li>
                  <li><strong>Preparation for death:</strong> The Church&rsquo;s traditional practice
                  of a good final Confession, the Anointing of the Sick, and Viaticum (final Communion)
                  &mdash; practical eschatological readiness that every Catholic can make.</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-green-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Signs of the Times: A Discernment Checklist</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                When facing a claimed &ldquo;sign of the times&rdquo; or end-times prediction, ask
                these questions:
              </p>

              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <ul className="text-green-800 space-y-3">
                  <li>&#10003; Does this align with what the Church&rsquo;s Magisterium has taught?
                  (CCC 673&ndash;677)</li>
                  <li>&#10003; Is this drawing me closer to prayer, the sacraments, and charity &mdash;
                  or into fear and anxiety?</li>
                  <li>&#10003; Is the source seeking financial gain or unhealthy spiritual dependency?</li>
                  <li>&#10003; Has this apparition or teaching been approved by the local bishop or
                  the Holy See?</li>
                  <li>&#10003; Am I treating it as a supplement to the Gospel &mdash; or as a
                  replacement for ordinary Catholic life?</li>
                  <li>&#10007; If any source sets a specific date, reject it immediately &mdash; Jesus
                  said explicitly that no one knows the hour.</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Recommended Resources</h2>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <ul className="text-amber-800 space-y-2">
                  <li><em>Catechism of the Catholic Church</em>, 668&ndash;682 (The Last Things,
                  Paro&uuml;sia)</li>
                  <li>Pope Benedict XVI, <em>Spe Salvi</em> (2007) &mdash; on Christian hope</li>
                  <li>Joseph Ratzinger, <em>Eschatology: Death and Eternal Life</em> (CUA Press, 1988)</li>
                  <li>Frank Sheed, <em>Theology and Sanity</em>, chapters on the Four Last Things</li>
                  <li><em>Gaudium et Spes</em> 4, 38&ndash;45 (Vatican II on signs of the times)</li>
                  <li>N.T. Wright, <em>Surprised by Hope</em> (HarperOne, 2008)</li>
                  <li>Scott Hahn, <em>The Lamb&rsquo;s Supper</em> (Doubleday, 1999) &mdash; the
                  Eucharist and Revelation</li>
                  <li>For contrast: Tim LaHaye &amp; Jerry Jenkins, <em>Left Behind</em> (1995) &mdash;
                  read critically to understand the Dispensationalist worldview</li>
                </ul>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}
