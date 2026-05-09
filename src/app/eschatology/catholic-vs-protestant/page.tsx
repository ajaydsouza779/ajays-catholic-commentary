'use client'

import { useState } from 'react'
import {
  CheckCircle,
  Users,
  BookOpen,
  XCircle,
  Clock,
  Scale,
  Church,
  MapPin,
  Flame,
  Layers,
  Heart,
} from 'lucide-react'

type TabId =
  | 'common-ground'
  | 'the-rapture-response'
  | 'the-millennium'
  | 'israel-end-times'
  | 'purgatory-eschatology'
  | 'different-frameworks'

const tabs: { id: TabId; label: string }[] = [
  { id: 'common-ground', label: 'Common Ground' },
  { id: 'the-rapture-response', label: 'The Rapture: Catholic Response' },
  { id: 'the-millennium', label: 'The Millennium' },
  { id: 'israel-end-times', label: 'Israel & End Times' },
  { id: 'purgatory-eschatology', label: 'Purgatory' },
  { id: 'different-frameworks', label: 'Different Frameworks' },
]

export default function CatholicVsProtestantPage() {
  const [activeTab, setActiveTab] = useState<TabId>('common-ground')

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Catholic vs. Protestant End Times
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Catholics and most Protestants share the essential eschatological beliefs: Christ will
            return, the dead will be raised, there will be a Last Judgment. But on the Rapture,
            the Millennium, Israel, and Purgatory they differ significantly. This page examines
            both the common ground and the differences honestly.
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

        {/* ==================== TAB 1: COMMON GROUND ==================== */}
        {activeTab === 'common-ground' && (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-green-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">What All Orthodox Christians Share</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Before exploring the differences, it is vital to affirm the very substantial eschatological
                confession that Catholics and Protestants share. The Nicene Creed &mdash; &ldquo;He will
                come again in glory to judge the living and the dead, and his kingdom will have no end&rdquo;
                &mdash; is recited by both every Sunday.
              </p>

              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-green-900 mb-3">Shared Confessions</h3>
                <ul className="text-green-800 space-y-2">
                  <li>The Second Coming: Christ will return personally, visibly, bodily (Acts 1:11)</li>
                  <li>The Resurrection of the Dead: All who have ever lived will be raised
                  (John 5:28&ndash;29; 1 Cor 15:51&ndash;52)</li>
                  <li>The Last Judgment: All will be judged by Christ (Matt 25:31&ndash;46; 2 Cor 5:10)</li>
                  <li>Heaven and Hell as real eternal destinies &mdash; not universal salvation</li>
                  <li>The defeat of Satan and all evil</li>
                  <li>A New Heaven and New Earth (Rev 21:1; 2 Pet 3:13)</li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed">
                This is a very substantial common confession. The differences are real, but they exist
                within a framework of deep agreement about the ultimate shape of history and its end.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Where Most Protestants and Catholics Agree (Against Dispensationalism)</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Catholics are often surprised to discover that many of their eschatological positions
                are shared by the mainstream of historic Protestant theology. The real divide is not
                between Catholics and Protestants as such, but between the Catholic and historic
                Protestant mainstream on one side and 19th-century Dispensationalism on the other.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <ul className="text-blue-800 space-y-3">
                  <li><strong>No pre-tribulation Rapture:</strong> Rejected by Catholics, most mainline
                  Protestants, Lutherans, Anglicans, Reformed Presbyterians, and Orthodox Christians.
                  Not just a Catholic position.</li>
                  <li><strong>Amillennialism:</strong> The dominant position of Augustine, the Reformed
                  tradition, Lutheran theology, and Catholicism. No future literal millennium.</li>
                  <li><strong>No separate eschatological track for national Israel:</strong> Paul&rsquo;s
                  teaching in Romans 9&ndash;11 and Ephesians 2 is read as one people of God, not
                  two parallel tracks.</li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed">
                Critical point: Catholics are not the only ones rejecting Dispensationalism; they share
                their position with the majority of the world&rsquo;s historical Protestant theologians.
                The caricature of &ldquo;all Protestants believe in the Rapture&rdquo; is simply false.
              </p>
            </div>
          </div>
        )}

        {/* ==================== TAB 2: THE RAPTURE: CATHOLIC RESPONSE ==================== */}
        {activeTab === 'the-rapture-response' && (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Key Text and Catholic Reading</h2>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <p className="text-amber-800 italic mb-3">
                  &ldquo;For the Lord himself will descend from heaven with a cry of command, with the
                  voice of an archangel, and with the sound of the trumpet of God. And the dead in Christ
                  will rise first. Then we who are alive, who are left, will be caught up together with
                  them in the clouds to meet the Lord in the air, and so we will always be with the
                  Lord.&rdquo;
                </p>
                <p className="text-amber-700 text-sm">&mdash; 1 Thessalonians 4:16&ndash;17 (RSV)</p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Catholic interpretation: this describes <em>one</em> event &mdash; the Second Coming
                with the resurrection of the dead. The &ldquo;meeting in the air&rdquo; (Greek:
                <em> apant&#275;sis</em>) is a technical term for a royal reception. When a king or
                general arrived at a city, citizens came out to <em>meet</em> him and <em>escort him in</em>.
                Paul uses this deliberately: we go out to meet the coming Christ and escort him as the
                victorious King.
              </p>

              <p className="text-gray-700 leading-relaxed">
                There is no &ldquo;escape from earth&rdquo; &mdash; we go out to meet him and come
                back with him to the renewed creation. This is not a departure; it is a coronation
                procession.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <XCircle className="w-6 h-6 text-red-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">No &ldquo;Secret&rdquo; Rapture in the Text</h2>
              </div>

              <div className="bg-red-50 p-6 rounded-lg mb-6">
                <ul className="text-red-800 space-y-3">
                  <li>1 Thess 4:16 specifies: &ldquo;a cry of command,&rdquo; &ldquo;the voice of an
                  archangel,&rdquo; &ldquo;the sound of the trumpet of God&rdquo; &mdash; nothing
                  secret about it.</li>
                  <li>Matt 24:27: &ldquo;As the lightning comes from the east and shines as far as
                  the west, so will be the coming of the Son of Man&rdquo; &mdash; visible, unmistakable,
                  global.</li>
                  <li>1 Cor 15:51&ndash;52: &ldquo;We shall all be changed, in a moment, in the
                  twinkling of an eye, at the <em>last</em> trumpet&rdquo; &mdash; the resurrection
                  happens at &ldquo;the last trumpet,&rdquo; the same trumpet as 1 Thess 4.</li>
                  <li>There is <em>one</em> coming, <em>one</em> trumpet, <em>one</em> resurrection,
                  <em> one</em> event in the NT &mdash; not a two-stage process separated by seven years.</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Historical Argument</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Every Church Father expected Christians to face tribulation and persecution &mdash; they
                did not expect a pre-tribulation escape.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <ul className="text-blue-800 space-y-2">
                  <li>The early Church was martyred under Nero and Domitian; they did not interpret their
                  suffering as tribulation that &ldquo;true Christians&rdquo; would be spared</li>
                  <li>Polycarp (~155 AD), Ignatius (~107 AD), Justin Martyr (~165 AD), Irenaeus (~200 AD),
                  Tertullian (~200 AD), Origen, Athanasius, Augustine &mdash; none taught a pre-tribulation
                  Rapture</li>
                  <li>The concept simply did not exist until John Nelson Darby in the 1830s &mdash; this
                  is the unanimous judgment of church-history scholarship</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Scale className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Matt 24:40&ndash;41: &ldquo;One Taken, One Left&rdquo;</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                This passage is commonly used to support the Rapture: &ldquo;Two men will be in the
                field; one will be taken and one left.&rdquo;
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">The Context Reverses the Rapture Reading</h3>
                <p className="text-blue-800 mb-3">
                  Jesus compares the coming of the Son of Man to Noah&rsquo;s flood (Matt 24:37&ndash;42).
                  In the flood, those &ldquo;taken away&rdquo; were the <em>wicked</em> &mdash; they
                  drowned. The survivors were <em>left</em> (on the ark). The &ldquo;taken&rdquo; in
                  Matt 24 are taken <em>in judgment</em>; the &ldquo;left&rdquo; are those who survive.
                  This is the exact opposite of the Rapture reading.
                </p>
                <p className="text-blue-800">
                  Luke 17:37 confirms: when the disciples ask &ldquo;Where?&rdquo; (where are the
                  taken?), Jesus answers: &ldquo;Where the corpse is, there the vultures will gather&rdquo;
                  &mdash; the taken go to <em>judgment</em>.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ==================== TAB 3: THE MILLENNIUM ==================== */}
        {activeTab === 'the-millennium' && (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Revelation 20:1&ndash;6: The Text</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The entire doctrine of the literal Millennium rests on this one passage (six verses)
                in Revelation &mdash; a book written entirely in the apocalyptic genre, where numbers
                are symbolic throughout.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <p className="text-amber-800 italic mb-3">
                  &ldquo;Then I saw an angel coming down from heaven&hellip; He seized the dragon,
                  that ancient serpent, who is the devil and Satan, and bound him for a thousand
                  years&hellip; Then I saw thrones, and seated on them were those to whom the
                  authority to judge was committed&hellip; They came to life and reigned with Christ
                  for a thousand years.&rdquo;
                </p>
                <p className="text-amber-700 text-sm">&mdash; Revelation 20:1&ndash;4 (RSV)</p>
              </div>

              <p className="text-gray-700 leading-relaxed">
                Key features: an angel binds Satan; a &ldquo;first resurrection&rdquo;; a 1,000-year
                reign; then Satan is released, defeated, and the Last Judgment follows. The question
                is whether these elements describe a literal future period or the spiritual reality
                of the present Church age.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Scale className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Why 1,000 Years Is Symbolic</h2>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <ul className="text-blue-800 space-y-3">
                  <li>In apocalyptic literature, numbers are consistently symbolic. &ldquo;1,000&rdquo;
                  = 10&sup3; = ultimate completeness (cf. Ps 50:10 &ldquo;cattle on a thousand hills&rdquo;
                  = all cattle; Deut 7:9 &ldquo;to a thousand generations&rdquo; = forever).</li>
                  <li>In Revelation itself: 144,000 = 12 &times; 12 &times; 1,000 = symbolic fullness
                  of God&rsquo;s people (not a literal headcount).</li>
                  <li>&ldquo;A thousand years&rdquo; = a very long, complete period &mdash; the entire
                  Church age from the Resurrection to the Second Coming.</li>
                  <li>Taking <em>one</em> number literally (1,000 years in Rev 20) while treating all
                  other Revelation numbers symbolically is inconsistent hermeneutics.</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <XCircle className="w-6 h-6 text-red-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The CCC Rejection of Millenarianism</h2>
              </div>

              <div className="bg-red-50 p-6 rounded-lg mb-6">
                <p className="text-red-800 italic mb-3">
                  &ldquo;The Antichrist&rsquo;s deception already begins to take shape in the world
                  every time the claim is made to realize within history that messianic hope which can
                  only be realized beyond history through the eschatological judgment. The Church has
                  rejected even modified forms of this falsification of the kingdom to come under the
                  name of millenarianism.&rdquo;
                </p>
                <p className="text-red-700 text-sm">&mdash; <em>Catechism of the Catholic Church</em>, 676</p>
              </div>

              <p className="text-gray-700 leading-relaxed">
                This is a clear, direct magisterial rejection of literalist premillennialism &mdash;
                including Dispensationalism. The Church&rsquo;s teaching: there will be no earthly
                golden age of Church or Kingdom power before the Paro&uuml;sia. The &ldquo;millennium&rdquo;
                is already happening now &mdash; it is the Church age.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-purple-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Augustine: The Definitive Catholic Reading</h2>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-purple-900 mb-3">
                  <em>City of God</em>, Book XX (~420 AD)
                </h3>
                <ul className="text-purple-800 space-y-3">
                  <li><strong>&ldquo;The thousand years&rdquo;:</strong> The entire period from Christ&rsquo;s
                  first coming to the final persecution &mdash; the Church age.</li>
                  <li><strong>&ldquo;Satan bound&rdquo;:</strong> Satan&rsquo;s power to blind the
                  nations is limited; the Gospel can now spread to all peoples (Matt 12:29).</li>
                  <li><strong>&ldquo;First resurrection&rdquo;:</strong> The spiritual resurrection of
                  conversion and baptism &mdash; &ldquo;the hour is coming, and now is, when the dead
                  will hear the voice of the Son of God&rdquo; (John 5:25).</li>
                  <li><strong>&ldquo;The second death&rdquo;:</strong> Eternal separation from God, from
                  which the spiritually resurrected are safe.</li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed">
                Augustine&rsquo;s reading governed Catholicism, Reformed Protestantism, and Lutheran
                theology from the 5th century onward. It remains the dominant position across all
                historic Christian traditions today.
              </p>
            </div>
          </div>
        )}

        {/* ==================== TAB 4: ISRAEL & END TIMES ==================== */}
        {activeTab === 'israel-end-times' && (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Dispensationalist View of Israel</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Central to classic Dispensationalism is its doctrine of two peoples of God with distinct
                eternal destinies. This is perhaps its most distinctive and most contested teaching.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <ul className="text-amber-800 space-y-3">
                  <li>God has two peoples &mdash; Israel (earthly) and the Church (heavenly) &mdash; with
                  separate covenants and distinct eternal destinies</li>
                  <li>The Church age is a &ldquo;parenthesis&rdquo; in God&rsquo;s plan for Israel;
                  after the Rapture, God resumes his direct dealings with Israel</li>
                  <li>The establishment of the modern State of Israel (1948) = prophetic fulfillment</li>
                  <li>A rebuilt Temple in Jerusalem is expected; the Antichrist signs and then breaks
                  a peace treaty with Israel</li>
                  <li>The 144,000 (Rev 7) = literal Jewish evangelists who convert during the Tribulation</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Church className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Catholic and Reformed Protestant View</h2>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">One People of God in Christ</h3>
                <ul className="text-blue-800 space-y-3">
                  <li>Paul (Gal 3:28&ndash;29; Rom 4:11&ndash;17; Eph 2:11&ndash;22): Gentile believers
                  are &ldquo;grafted in&rdquo; to the one olive tree (Israel); there is &ldquo;neither
                  Jew nor Greek&rdquo; in Christ.</li>
                  <li>The Church is the fulfillment of Israel&rsquo;s calling &mdash; not a replacement
                  but an organic completion; the promises to Abraham are fulfilled in Christ and in
                  those who belong to Christ.</li>
                  <li>CCC 674: &ldquo;The glorious Messiah&rsquo;s coming is suspended at every moment
                  of history until his recognition by &lsquo;all Israel&rsquo;&rdquo; &mdash; Romans
                  11:25&ndash;26 speaks of a future conversion of the Jewish people near the end.</li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed">
                This is not the Dispensationalist scenario; it is an organic fulfillment of Israel&rsquo;s
                own messianic hope in Jesus Christ, achieved through the same Gospel, not through a
                separate &ldquo;Israel track&rdquo; that bypasses the Cross.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Romans 11: The Catholic Reading</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Romans 9&ndash;11 is the most sustained NT treatment of Israel&rsquo;s relationship
                to the Church and to salvation. Paul concludes with a mystery:
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <p className="text-blue-800 italic mb-3">
                  &ldquo;A partial hardening has come upon Israel, until the fullness of the Gentiles
                  has come in. And in this way all Israel will be saved.&rdquo;
                </p>
                <p className="text-blue-700 text-sm mb-4">&mdash; Romans 11:25&ndash;26 (RSV)</p>
                <p className="text-blue-800">
                  Catholic interpretation: there will be a future conversion of many (perhaps most)
                  Jewish people to Jesus as their Messiah near the end of history &mdash; not through
                  a separate &ldquo;Israel track&rdquo; but through the same Gospel that the Church
                  has always preached. CCC 674 identifies this conversion as the event that precedes
                  the Paro&uuml;sia.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ==================== TAB 5: PURGATORY ==================== */}
        {activeTab === 'purgatory-eschatology' && (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Flame className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Purgatory as Eschatological Stage</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Purgatory is uniquely Catholic (and Orthodox in modified form). Mainstream Protestants
                rejected it at the Reformation: Luther rejected indulgences and ultimately purgatory as
                a corruption without sufficient scriptural warrant; Calvin denied it as undermining the
                sufficiency of Christ&rsquo;s atonement.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">The Catholic Understanding</h3>
                <p className="text-amber-800">
                  Purgatory is not &ldquo;working off&rdquo; punishment from an unsatisfied God. It is
                  the completion of a sanctification process for those who die in God&rsquo;s friendship
                  but are &ldquo;not yet&rdquo; fully conformed to Christ. Those in purgatory are
                  already saved &mdash; they are on the way to heaven, being completed in God&rsquo;s
                  presence.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Scriptural Basis for Purgatory</h2>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <ul className="text-blue-800 space-y-4">
                  <li><strong>2 Macc 12:44&ndash;46:</strong> Judas Maccabeus offers prayers and sacrifices
                  for soldiers who died wearing pagan amulets &mdash; explicitly: &ldquo;he made
                  atonement for the dead, so that they might be delivered from their sin.&rdquo;</li>
                  <li><strong>1 Cor 3:15:</strong> &ldquo;If anyone&rsquo;s work is burned up, he will
                  suffer loss, though he himself will be saved, but only as through fire&rdquo; &mdash;
                  a clear image of post-death purification.</li>
                  <li><strong>Matt 12:32:</strong> Jesus says a sin against the Holy Spirit &ldquo;will
                  not be forgiven, either in this age or in the age to come&rdquo; &mdash; implying
                  some things <em>can</em> be forgiven in the age to come.</li>
                  <li><strong>1 Pet 3:18&ndash;20:</strong> Christ &ldquo;preached to the spirits in
                  prison&rdquo; &mdash; often read as Christ liberating the righteous dead (the
                  Harrowing of Hell in Catholic tradition).</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Scale className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Protestant Objections and Catholic Responses</h2>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <div className="space-y-5">
                  <div>
                    <p className="text-blue-900 font-semibold mb-1">Objection: &ldquo;It is finished&rdquo; (John 19:30) &mdash; purgatory implies more payment is needed.</p>
                    <p className="text-blue-800">Response: Purgatory is not a second atonement &mdash; it IS the application of Christ&rsquo;s
                    finished work. We receive forgiveness immediately; purgatory completes the healing of
                    sin&rsquo;s effects in the soul.</p>
                  </div>
                  <div>
                    <p className="text-blue-900 font-semibold mb-1">Objection: &ldquo;Absent from the body, present with the Lord&rdquo; (2 Cor 5:8).</p>
                    <p className="text-blue-800">Response: Those in purgatory <em>are</em> with the Lord &mdash; they are already saved,
                    on the way to heaven, being completed in his presence, not separated from him.</p>
                  </div>
                  <div>
                    <p className="text-blue-900 font-semibold mb-1">Objection: 2 Maccabees is not in the Protestant canon.</p>
                    <p className="text-blue-800">Response: The early Church universally used the Septuagint (which included 2 Macc);
                    Luther removed it precisely because it supported purgatory &mdash; the canonical
                    argument cuts both ways.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== TAB 6: DIFFERENT FRAMEWORKS ==================== */}
        {activeTab === 'different-frameworks' && (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Layers className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Why the Disagreements Are So Deep</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The Catholic&ndash;Protestant differences on eschatology are not just about individual
                texts; they reflect fundamentally different frameworks for authority, the Church, and
                the interpretation of Scripture.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <ul className="text-amber-800 space-y-4">
                  <li><strong>The Church:</strong> Catholics hold that the visible, hierarchical Church
                  IS the continuation of Christ&rsquo;s body, with sacraments, apostolic succession,
                  and definitive teaching authority. Protestant views vary: for Luther and Calvin, the
                  Church is defined by right preaching and administration of sacraments; for others,
                  by invisible bonds of faith.</li>
                  <li><strong>Scripture and Tradition:</strong> Catholics interpret Scripture within
                  the living Tradition of the Church. Most Protestants hold <em>sola scriptura</em>
                  &mdash; Scripture alone as the rule of faith.</li>
                  <li><strong>The Magisterium:</strong> Catholics have a definitive teaching authority
                  that settles disputed questions (e.g., CCC 676 on millenarianism). Protestants have
                  no equivalent &mdash; hence the proliferation of end-times systems.</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800"><em>Sola Scriptura</em> and Eschatological Diversity</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The proliferation of Protestant end-times views &mdash; over a dozen distinct positions
                &mdash; is partly the result of <em>sola scriptura</em> without a definitive interpretive
                authority. Each reader goes directly to the text; different starting assumptions produce
                different systems from the same passages.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <p className="text-blue-800">
                  The same passages (1 Thess 4:17; Rev 20) produce: pre-trib/mid-trib/post-trib Rapture,
                  historic premillennialism, amillennialism, postmillennialism &mdash; depending on
                  presuppositions about genre, hermeneutics, and the role of Israel.
                </p>
                <p className="text-blue-800 mt-3">
                  The Catholic answer: the Church&rsquo;s Tradition and Magisterium provides a definitive
                  interpretive framework that rules out certain readings (CCC 676), establishing the
                  bounds within which Catholics approach these texts.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-green-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Points of Genuine Dialogue</h2>
              </div>

              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <ul className="text-green-800 space-y-3">
                  <li><strong>N.T. Wright</strong> (Anglican bishop and NT scholar), <em>Surprised by
                  Hope</em> (2008): His eschatology is remarkably close to Catholic teaching &mdash;
                  bodily resurrection, renewed creation, rejection of the Rapture and Dispensationalism;
                  widely read in Catholic circles.</li>
                  <li><strong>Most Reformed Protestants</strong> (Presbyterian, Dutch Reformed) agree
                  with Catholics on amillennialism and rejection of the Rapture.</li>
                  <li><strong>Many evangelical scholars</strong> (D.A. Carson, Scot McKnight, Kevin
                  DeYoung) have explicitly distanced themselves from Dispensationalism in recent decades.</li>
                  <li><strong>Prayer for the dead:</strong> Some Anglican and Lutheran traditions retain
                  versions of this practice; the doctrine of &ldquo;soul sleep&rdquo; is not universal
                  among Protestants.</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Catholic Invitation</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Catholics can charitably challenge Dispensationalism without being dismissive of the
                genuine faith of Protestant brothers and sisters. Not all Protestants are Dispensationalists
                &mdash; most Lutherans, Anglicans, Reformed, and Methodist Christians share Catholic
                amillennialism and rejection of the Rapture.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <ul className="text-amber-800 space-y-2">
                  <li>Point to the 19th-century origin of the Rapture doctrine &mdash; no Church Father
                  taught it</li>
                  <li>Highlight CCC 676&rsquo;s explicit magisterial rejection of millenarianism</li>
                  <li>Invite Protestants to the richness of Catholic eschatology: the four last things,
                  purgatory, the communion of saints, the bodily resurrection, and above all
                  <em> hope</em> (<em>Spe Salvi</em>)</li>
                  <li>Engage compassionately with the genuine spiritual longing that Dispensationalism
                  addresses &mdash; the desire to know that God wins and that history has meaning</li>
                </ul>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}
