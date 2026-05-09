'use client'

import { useState } from 'react'
import {
  Globe,
  Users,
  Layers,
  Calendar,
  Scale,
  Clock,
  ArrowRight,
  XCircle,
  BookOpen,
  AlertTriangle,
  Church,
  Sunrise,
  MapPin,
} from 'lucide-react'

type TabId =
  | 'overview'
  | 'dispensationalism'
  | 'the-rapture'
  | 'millennium-views'
  | 'amillennialism'
  | 'left-behind'

const tabs: { id: TabId; label: string }[] = [
  { id: 'overview', label: 'Overview' },
  { id: 'dispensationalism', label: 'Dispensationalism' },
  { id: 'the-rapture', label: 'The Rapture' },
  { id: 'millennium-views', label: 'Millennial Views' },
  { id: 'amillennialism', label: 'Amillennialism & Postmillennialism' },
  { id: 'left-behind', label: 'Left Behind & Popular Culture' },
]

export default function ProtestantViewsPage() {
  const [activeTab, setActiveTab] = useState<TabId>('overview')

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Protestant End Times Views
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The theology of the Rapture, the Great Tribulation, the Millennial Kingdom, and Dispensationalism
            is a distinctly modern Protestant development. This page presents these views accurately and
            charitably, explains their origins, and examines them critically.
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

        {/* ==================== TAB 1: OVERVIEW ==================== */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Globe className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Landscape of Protestant Eschatology</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Protestant Christianity has no single authoritative teaching body &mdash; so eschatological
                views vary widely across denominations, traditions, and individual theologians. The major
                positions differ on: the timing of Christ&rsquo;s return, a literal &ldquo;Rapture,&rdquo;
                the Millennium (Rev 20), the role of national Israel, and the Great Tribulation.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">The Main Systems</h3>
                <ul className="text-amber-800 space-y-3">
                  <li><strong>Dispensationalism:</strong> Pre-tribulation Rapture, literal 7-year Tribulation,
                  literal 1,000-year reign of Christ from Jerusalem. A 19th-century innovation.</li>
                  <li><strong>Historic Premillennialism:</strong> Christ returns before the millennium; no
                  pre-trib Rapture; millennium is literal but not dispensationalist.</li>
                  <li><strong>Amillennialism:</strong> No literal future millennium; the 1,000 years symbolizes
                  the Church age. Common among Reformed Protestants and Catholics.</li>
                  <li><strong>Postmillennialism:</strong> The Church gradually Christianizes the world;
                  Christ returns after the millennium.</li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed">
                A crucial distinction: the Rapture + 7-year Tribulation + Millennium sequence is uniquely
                <em> Dispensationalist</em> &mdash; it is <strong>not</strong> the common heritage of all
                Protestants. Many mainline, Reformed, and Lutheran Protestants reject Dispensationalism
                as firmly as Catholics do.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Why This Matters for Catholic&ndash;Protestant Dialogue</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                When Catholics hear &ldquo;Protestant End Times theology,&rdquo; they are often encountering
                Dispensationalism &mdash; but many mainline, Reformed, and Lutheran Protestants reject
                Dispensationalism as firmly as Catholics do. The <em>Left Behind</em> series by LaHaye
                and Jenkins represents popular Dispensationalism, not historic Protestant eschatology.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">Common Ground Across the Divide</h3>
                <ul className="text-blue-800 space-y-2">
                  <li>Christ will return personally and visibly</li>
                  <li>The dead will be resurrected bodily</li>
                  <li>There will be a final judgment for all</li>
                  <li>Heaven and Hell are real eternal destinies</li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed">
                Understanding these distinctions allows for much more productive dialogue. Catholics and
                most historic Protestants are not as far apart on eschatology as the popular evangelical
                end-times industry would suggest.
              </p>
            </div>
          </div>
        )}

        {/* ==================== TAB 2: DISPENSATIONALISM ==================== */}
        {activeTab === 'dispensationalism' && (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Layers className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">What Is Dispensationalism?</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Dispensationalism is a theological system that divides history into distinct &ldquo;dispensations&rdquo;
                &mdash; periods in which God deals with humanity differently. It originated with
                <strong> John Nelson Darby</strong> (1800&ndash;1882) of the Plymouth Brethren in Ireland
                and England.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">Darby&rsquo;s Key Innovations (c. 1830s)</h3>
                <ul className="text-amber-800 space-y-2">
                  <li>A sharp distinction between Israel (God&rsquo;s earthly people) and the Church (God&rsquo;s
                  heavenly people)</li>
                  <li>The Pre-Tribulation Rapture &mdash; the Church is secretly removed before the 7-year
                  Tribulation</li>
                  <li>A future literal earthly kingdom for national Israel</li>
                  <li>A literal 1,000-year reign of Christ from Jerusalem</li>
                </ul>
              </div>

              <div className="bg-red-50 p-5 rounded-lg">
                <h4 className="font-semibold text-red-900 mb-2">A 19th-Century Innovation</h4>
                <p className="text-red-800 text-sm">
                  Before Darby (c. 1830s), <strong>no</strong> Protestant theologian, Catholic theologian,
                  or Church Father taught the pre-tribulation Rapture. It is a 19th-century innovation
                  with no precedent in two thousand years of Christian theology.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Globe className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Spread of Dispensationalism</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Darby traveled to the United States multiple times (1862&ndash;1877), finding receptive
                audiences among American evangelicals. From there, Dispensationalism spread through
                several key channels.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">Key Milestones</h3>
                <ul className="text-blue-800 space-y-3">
                  <li><strong>Cyrus I. Scofield</strong> (<em>Scofield Reference Bible</em>, 1909): Put
                  Dispensationalist interpretation directly into Bible footnotes; became the
                  &ldquo;study Bible&rdquo; of American evangelicalism for decades.</li>
                  <li><strong>Dallas Theological Seminary</strong> (founded 1924): The institutional home
                  of academic Dispensationalism; produced Chafer, Walvoord, and Ryrie.</li>
                  <li><strong>Hal Lindsey</strong>, <em>The Late, Great Planet Earth</em> (1970): Over
                  35 million copies; popularized end-times date-setting for a mass audience.</li>
                  <li><strong>Tim LaHaye &amp; Jerry Jenkins</strong>, <em>Left Behind</em> series
                  (1995&ndash;2007): Over 65 million copies; the most successful Christian fiction
                  series in history.</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Classic Dispensationalist Timetable</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The Dispensationalist sequence of end-time events is one of the most elaborate
                prophetic systems ever constructed. Its key feature throughout is that national Israel
                &mdash; not the Church &mdash; is central to God&rsquo;s plan.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <ol className="text-blue-800 space-y-3 list-decimal list-inside">
                  <li>The Church Age ends with the <strong>Pre-Tribulation Rapture</strong> (all Christians
                  suddenly disappear mid-sentence; cars crash, planes fall)</li>
                  <li><strong>7-Year Tribulation:</strong> The Antichrist rises; signs a peace treaty with
                  Israel; breaks it after 3.5 years (&ldquo;Abomination of Desolation&rdquo;)</li>
                  <li><strong>The Great Tribulation</strong> (second half): Bowls of wrath (Rev 16); 144,000
                  Jewish evangelists; global persecution of those who refused the mark</li>
                  <li><strong>Battle of Armageddon</strong> in the Valley of Jezreel; Christ returns at
                  its climax to rescue Israel</li>
                  <li><strong>The Millennium:</strong> Christ reigns literally from Jerusalem for 1,000
                  years; Temple rebuilt; (controversially) animal sacrifices resume</li>
                  <li>Final Rebellion, Last Judgment, New Heaven and New Earth</li>
                </ol>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <Scale className="w-6 h-6 text-red-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Theological Criticisms of Dispensationalism</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Dispensationalism faces serious objections not only from Catholic theology but from the
                mainstream of Protestant biblical scholarship. The following criticisms are widely shared
                across traditions.
              </p>

              <div className="bg-red-50 p-6 rounded-lg mb-6">
                <ul className="text-red-800 space-y-4">
                  <li><strong>Two peoples of God:</strong> Paul (Gal 3:28&ndash;29; Eph 2:11&ndash;22)
                  insists on the <em>one</em> people of God in Christ &mdash; the Church/Israel distinction
                  is rejected by most biblical scholars.</li>
                  <li><strong>The &ldquo;gap&rdquo; in Daniel 9:</strong> Dispensationalism requires a
                  2,000-year gap between the 69th and 70th &ldquo;week&rdquo; of Daniel 9 &mdash; a reading
                  not supported by the text itself.</li>
                  <li><strong>Two second comings:</strong> A secret Rapture <em>plus</em> a visible
                  Paro&uuml;sia requires essentially two second comings &mdash; no historical precedent
                  before Darby.</li>
                  <li><strong>Animal sacrifices in the Millennium:</strong> The idea that OT sacrifices
                  resume is rejected by most Protestant theologians; Hebrews 9&ndash;10 is definitive
                  on their abolition.</li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed">
                Most Reformed, Lutheran, Anglican, and Methodist theologians reject Dispensationalism.
                Its dominance is largely an American evangelical phenomenon, not the historic mainstream
                of Protestantism.
              </p>
            </div>
          </div>
        )}

        {/* ==================== TAB 3: THE RAPTURE ==================== */}
        {activeTab === 'the-rapture' && (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <ArrowRight className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Pre-Tribulation Rapture: The Doctrine</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The central distinctive of Dispensationalism is the pre-tribulation Rapture: before the
                7-year Tribulation, all true Christians are suddenly and secretly removed from the earth.
                The classic text is 1 Thessalonians 4:16&ndash;17:
              </p>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <p className="text-amber-800 italic mb-3">
                  &ldquo;For the Lord himself will descend from heaven with a cry of command&hellip; and
                  the dead in Christ will rise first. Then we who are alive, who are left, will be caught
                  up together with them in the clouds to meet the Lord in the air.&rdquo;
                </p>
                <p className="text-amber-700 text-sm">&mdash; 1 Thessalonians 4:16&ndash;17 (RSV)</p>
              </div>

              <p className="text-gray-700 leading-relaxed">
                &ldquo;Caught up&rdquo; translates the Latin <em>raptus</em> &mdash; hence &ldquo;the
                Rapture.&rdquo; In the Dispensationalist scenario, Christians disappear mid-sentence;
                cars crash, planes fall from the sky; the world descends into chaos; non-Christians
                are &ldquo;left behind&rdquo; to face the Antichrist and Tribulation.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Rapture in Historical Perspective</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The pre-tribulation Rapture has no precedent in the history of Christian theology before
                the 19th century. This is not a disputed claim &mdash; it is the consensus of
                church-history scholarship across Catholic, Orthodox, and mainline Protestant traditions.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">The Historical Record</h3>
                <ul className="text-blue-800 space-y-2">
                  <li>No Church Father, medieval theologian, or Reformer ever taught a pre-tribulation Rapture</li>
                  <li>Luther, Calvin, Zwingli, Wesley: all expected persecution and tribulation before Christ&rsquo;s
                  return; none envisioned a secret departure</li>
                  <li><strong>John Nelson Darby</strong> (c. 1830s): First systematic proponent; some scholars
                  trace the idea to a prophetic utterance by Margaret MacDonald (1830, Port Glasgow, Scotland)</li>
                  <li>The concept&rsquo;s rapid spread was driven largely by the Scofield Reference Bible
                  and American evangelical networks</li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed">
                The early Church was martyred under Nero and Domitian. Those Christians did not interpret
                their suffering as a &ldquo;tribulation that Christians would be spared.&rdquo; They
                endured it as participation in the Cross.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Scale className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Variants: Pre-, Mid-, Post-Tribulation</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Even within Dispensationalism, the timing of the Rapture is contested. The following
                positions reflect internal debates within the system:
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <ul className="text-blue-800 space-y-3">
                  <li><strong>Pre-Tribulation Rapture:</strong> Christians removed before the 7 years begin
                  (Darby, Scofield, LaHaye, Dallas Seminary position)</li>
                  <li><strong>Mid-Tribulation Rapture:</strong> Christians removed at the 3.5-year midpoint
                  (a minority Dispensationalist position)</li>
                  <li><strong>Pre-Wrath Rapture:</strong> Christians removed before the final &ldquo;bowl
                  judgments&rdquo; but after the Tribulation proper (Marvin Rosenthal, 1990)</li>
                  <li><strong>Post-Tribulation Rapture:</strong> Christians go through the Tribulation and
                  are &ldquo;caught up&rdquo; to escort the returning Christ &mdash; not an escape but a
                  royal reception (Historic Premillennialism; George Eldon Ladd)</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <XCircle className="w-6 h-6 text-red-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Catholic (and Most Protestant) Objection</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The Catholic objection to the pre-tribulation Rapture is rooted in a careful reading of
                the very texts Dispensationalists cite.
              </p>

              <div className="bg-red-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-red-900 mb-3">Key Arguments</h3>
                <ul className="text-red-800 space-y-3">
                  <li>The &ldquo;meeting in the air&rdquo; (1 Thess 4:17) draws on a Roman custom:
                  when a dignitary arrived, citizens came out to <em>meet</em> him and escort him
                  <em> into</em> the city &mdash; not to escape with him. This is a <em>parousia</em>
                  reception, not an evacuation.</li>
                  <li>1 Thess 4:16 describes &ldquo;a cry of command, the voice of an archangel, and
                  the sound of the trumpet of God&rdquo; &mdash; <em>nothing</em> secret about it.</li>
                  <li>Matt 24:27: &ldquo;As the lightning comes from the east and shines to the west,
                  so will be the coming of the Son of Man&rdquo; &mdash; visible, not hidden.</li>
                  <li>There is <em>one</em> coming, <em>one</em> trumpet, <em>one</em> resurrection,
                  <em> one</em> event in the NT &mdash; not a two-stage process.</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* ==================== TAB 4: MILLENNIAL VIEWS ==================== */}
        {activeTab === 'millennium-views' && (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Scale className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Three Main Views</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The millennium (Rev 20:1&ndash;6) is the most contested text in Revelation. The entire
                doctrine of the literal Millennium rests on this one passage &mdash; six verses in a book
                written in the apocalyptic genre, where numbers are symbolic throughout.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <ul className="text-amber-800 space-y-3">
                  <li><strong>Premillennialism:</strong> Christ returns <em>before</em> the millennium;
                  he reigns on earth for 1,000 years. Subdivided into Dispensational and Historic forms.</li>
                  <li><strong>Amillennialism:</strong> No future literal millennium; the &ldquo;1,000
                  years&rdquo; symbolizes the current Church age; Christ reigns spiritually through the
                  Church and the Eucharist.</li>
                  <li><strong>Postmillennialism:</strong> The Church progressively Christianizes the world;
                  Christ returns <em>after</em> a golden age (the &ldquo;millennium&rdquo;) achieved through
                  the Gospel&rsquo;s spread.</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Sunrise className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Historic Premillennialism</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Historic Premillennialism is distinct from Dispensationalism: it has no special role for
                national Israel, no pre-tribulation Rapture, and no temple rebuilding. The Church goes
                through the Tribulation; Christ returns at the end to inaugurate a millennial kingdom.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">Key Advocates</h3>
                <ul className="text-blue-800 space-y-2">
                  <li>Early proponents: Justin Martyr (2nd c.), Irenaeus (<em>Against Heresies</em>, c. 180)</li>
                  <li>These early Fathers had a literal reading of Rev 20 &mdash; but their premillennialism
                  was firmly rejected by Augustine and has not been the mainstream Catholic or Reformed
                  Protestant reading since</li>
                  <li>Modern Protestant advocates: George Eldon Ladd (Fuller Seminary), Wayne Grudem,
                  Craig Blomberg</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Globe className="w-6 h-6 text-green-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Postmillennialism</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Postmillennialism holds that the kingdom of God gradually expands through the preaching
                of the Gospel until most of the world is Christianized &mdash; this long period of
                Christian dominion is the &ldquo;millennium.&rdquo; Christ then returns at its end.
              </p>

              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <ul className="text-green-800 space-y-2">
                  <li>Historical advocates: Jonathan Edwards (18th c.), Charles Hodge, B.B. Warfield
                  (Princeton School)</li>
                  <li>Associated with &ldquo;Christian Reconstruction&rdquo; (Rushdoony, North) and
                  Dominionism in some forms</li>
                  <li>Challenged by: two World Wars, the Holocaust, and 20th-century atrocities, which
                  made optimistic postmillennialism difficult to sustain; declined sharply after 1914</li>
                  <li>Still held by some Reformed Presbyterians (theonomists) and some charismatic
                  / NAR circles today</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Church className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Catholic Position</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The Church&rsquo;s position on the millennium is clear and explicit. Amillennialism &mdash;
                the reading that the &ldquo;1,000 years&rdquo; symbolizes the Church age &mdash; is the
                Catholic position, established by Augustine and confirmed by the Magisterium.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">CCC 676 &mdash; The Church&rsquo;s Direct Teaching</h3>
                <p className="text-amber-800 italic mb-3">
                  &ldquo;The Antichrist&rsquo;s deception already begins to take shape in the world every
                  time the claim is made to realize within history that messianic hope which can only be
                  realized beyond history through the eschatological judgment. The Church has rejected
                  even modified forms of this falsification of the kingdom to come under the name of
                  millenarianism.&rdquo;
                </p>
                <p className="text-amber-700 text-sm">&mdash; <em>Catechism of the Catholic Church</em>, 676</p>
              </div>

              <p className="text-gray-700 leading-relaxed">
                This rejection of millenarianism is shared by Augustine (dominant since ~400 AD), the
                Reformed tradition (Calvin, Hodge, Vos), Lutheran theology, and Eastern Orthodoxy.
                The Catholic and Reformed Protestant traditions are remarkably united on this point.
              </p>
            </div>
          </div>
        )}

        {/* ==================== TAB 5: AMILLENNIALISM & POSTMILLENNIALISM ==================== */}
        {activeTab === 'amillennialism' && (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Layers className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Amillennialism: A Positive Account</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                &ldquo;Amillennialism&rdquo; is a confusing label (literally: &ldquo;no millennium&rdquo;)
                but is better described as &ldquo;already-realized&rdquo; or &ldquo;spiritual&rdquo;
                millennialism. The Kingdom of God is present <em>now</em> &mdash; in the Church, in the
                sacraments, in the reign of Christ through the Spirit.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">The Amillennial Reading of Revelation 20</h3>
                <ul className="text-amber-800 space-y-3">
                  <li><strong>&ldquo;The thousand years&rdquo;:</strong> A symbolic period representing
                  the era between Christ&rsquo;s first and second comings &mdash; the entire Church age.</li>
                  <li><strong>&ldquo;Satan bound&rdquo;:</strong> Not perfectly (he still tempts and
                  persecutes) but in the sense that the Gospel can now go to all nations (cf. Matt 12:29
                  &mdash; the strong man is bound).</li>
                  <li><strong>&ldquo;First resurrection&rdquo;:</strong> Spiritual resurrection &mdash;
                  baptism, conversion, regeneration. John 5:25: &ldquo;The hour is coming, and now is,
                  when the dead will hear the voice of the Son of God.&rdquo;</li>
                  <li><strong>&ldquo;The second death&rdquo;:</strong> Eternal separation from God, from
                  which the spiritually resurrected are safe.</li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed">
                Augustine established this reading in <em>City of God</em> (Book XX, ~420 AD), and it
                has governed Catholicism, Reformed Protestantism, and Lutheran theology ever since.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Biblical Foundations of Amillennialism</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The amillennial reading is not a retreat from the Bible; it rests on extensive New
                Testament evidence that the Kingdom of God is both <em>already</em> present and
                <em> not yet</em> fully revealed.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">Already</h3>
                <ul className="text-blue-800 space-y-2 mb-4">
                  <li>&ldquo;I saw Satan fall like lightning from heaven&rdquo; (Luke 10:18 &mdash; during
                  Jesus&rsquo; ministry)</li>
                  <li>&ldquo;Now is the ruler of this world cast out&rdquo; (John 12:31)</li>
                  <li>&ldquo;He disarmed the rulers and authorities&rdquo; (Col 2:15)</li>
                  <li>&ldquo;The kingdom of God has come upon you&rdquo; (Matt 12:28)</li>
                  <li>&ldquo;God seated him at his right hand&hellip; far above all rule and
                  authority&rdquo; (Eph 1:20&ndash;21)</li>
                </ul>
                <h3 className="text-lg font-semibold text-blue-900 mb-3">Not Yet</h3>
                <ul className="text-blue-800 space-y-2">
                  <li>The full visible manifestation awaits the Parousia</li>
                  <li>&ldquo;We groan inwardly waiting for the redemption of our bodies&rdquo;
                  (Rom 8:23)</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Globe className="w-6 h-6 text-green-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Postmillennial Critique and Catholic Response</h2>
              </div>

              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-green-900 mb-3">Postmillennialism&rsquo;s Genuine Strengths</h3>
                <ul className="text-green-800 space-y-2">
                  <li>Takes seriously the power of the Gospel to transform societies</li>
                  <li>Encourages vigorous cultural engagement and social reform</li>
                  <li>Has a robust theology of history as moving toward a goal</li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Where postmillennialism has been challenged: World War I devastated Christian Europe and
                killed postmillennial optimism; the Holocaust, Gulags, and mass atrocities of the
                20th century made progressive Christianization less plausible. Many postmillennialists
                have moderated their position, allowing for setbacks within an overall positive trajectory.
              </p>

              <p className="text-gray-700 leading-relaxed">
                The Catholic approach is broadly positive about the Church&rsquo;s transforming mission
                in history (Catholic Social Teaching, <em>Laudato Si&rsquo;</em>) but without the
                expectation of a millennial golden age before the Second Coming. The Kingdom grows
                quietly, like a mustard seed (Matt 13:31&ndash;32), until the Lord&rsquo;s return.
              </p>
            </div>
          </div>
        )}

        {/* ==================== TAB 6: LEFT BEHIND & POPULAR CULTURE ==================== */}
        {activeTab === 'left-behind' && (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The <em>Left Behind</em> Series</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                <em>Left Behind</em> (1995&ndash;2007): a 16-volume series by Tim LaHaye (theologian)
                and Jerry Jenkins (novelist), with total sales over 65 million copies, multiple films,
                and a cultural footprint that made it the most successful Christian fiction series in
                history.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">The Premise</h3>
                <p className="text-amber-800">
                  A pre-tribulation Rapture; the &ldquo;Tribulation Force&rdquo; of converts who missed
                  the Rapture must survive and resist the Antichrist (Nicolae Carpathia, Secretary-General
                  of a UN-like organization) and the global false religion (&ldquo;Enigma Babylon One
                  World Faith&rdquo;). The series popularized Dispensationalist eschatology for millions
                  who might never read John Walvoord&rsquo;s theology.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-red-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Theological Problems in <em>Left Behind</em></h2>
              </div>

              <div className="bg-red-50 p-6 rounded-lg mb-6">
                <ul className="text-red-800 space-y-3">
                  <li><strong>The secret Rapture:</strong> No biblical or historical basis before Darby
                  (1830s); contradicted by every major Church Father and Reformer.</li>
                  <li><strong>The Church as &ldquo;parenthetical&rdquo;:</strong> True believers escape
                  history while &ldquo;secular&rdquo; humanity faces consequences &mdash; a profoundly
                  un-Catholic and un-historic Protestant view of the Church&rsquo;s mission.</li>
                  <li><strong>The Antichrist as political figure:</strong> The Antichrist in the NT
                  (1 John 2:18&ndash;22; 2 Thess 2:1&ndash;12) is primarily a theological category;
                  the series hyper-literalizes it as a single world politician.</li>
                  <li><strong>The UN/EU as Beast:</strong> Long tradition of mapping current institutions
                  onto prophetic figures &mdash; always fails when the institution changes.</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Globe className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Hal Lindsey: <em>The Late, Great Planet Earth</em> (1970)</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Hal Lindsey&rsquo;s <em>The Late, Great Planet Earth</em> (1970, with Carole C. Carlson)
                sold over 35 million copies and launched the modern evangelical end-times publishing
                industry.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <ul className="text-blue-800 space-y-2">
                  <li>Applied Dispensationalism to 1970s current events: Soviet Union = Gog and Magog;
                  China = the 200-million-man army of Rev 9; Common Market = Revived Roman Empire</li>
                  <li>Israel&rsquo;s 1967 Six-Day War as prophetic fulfillment; strongly implied the
                  end within a generation (40 years) of 1948 &mdash; i.e., by 1988</li>
                  <li>1988 passed; Lindsey revised his calculations, but the pattern of failed predictions
                  continued &mdash; as it always does</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Church className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">A Catholic Assessment</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The immense popularity of <em>Left Behind</em> and similar works reflects a genuine
                human longing: to make sense of history, to know that God wins, to find meaning in
                current chaos. These are legitimate spiritual needs. The Catholic tradition has better
                answers &mdash; but must engage compassionately, not dismissively.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">The Catholic Alternative</h3>
                <ul className="text-amber-800 space-y-2">
                  <li>Revelation as liturgical drama: Scott Hahn, <em>The Lamb&rsquo;s Supper</em></li>
                  <li>Eschatology rooted in hope, not fear: Benedict XVI, <em>Spe Salvi</em> (2007)</li>
                  <li>The four last things: Death, Judgment, Heaven, Hell &mdash; immediate and concrete</li>
                  <li>The Eucharist as the already-present foretaste of the Kingdom</li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed">
                Pope Francis: &ldquo;Christians must not become paralyzed by apocalyptic fears. We must
                act now, in this world, as those who know that God is faithful to his promises.&rdquo;
              </p>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}
