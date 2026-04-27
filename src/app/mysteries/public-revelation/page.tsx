'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  BookOpen,
  Shield,
  Cross,
  Crown,
  ArrowRight,
  Flame,
  Star,
  FileText,
  Users,
  Church,
  Eye,
  Scroll,
  Scale,
  Heart,
  Landmark,
} from 'lucide-react'

type TabId = 'divinity-of-christ' | 'sacred-scripture' | 'sacred-tradition' | 'magisterium' | 'deposit-of-faith' | 'key-documents'

const tabs: { id: TabId; label: string }[] = [
  { id: 'divinity-of-christ', label: 'Divinity of Christ' },
  { id: 'sacred-scripture', label: 'Sacred Scripture' },
  { id: 'sacred-tradition', label: 'Sacred Tradition' },
  { id: 'magisterium', label: 'The Magisterium' },
  { id: 'deposit-of-faith', label: 'Deposit of Faith' },
  { id: 'key-documents', label: 'Key Documents' },
]

export default function PublicRevelationPage() {
  const [activeTab, setActiveTab] = useState<TabId>('divinity-of-christ')

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Public Revelation
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Public Revelation is the definitive self-communication of God to humanity, completed with the
            death of the last Apostle. It is contained in Sacred Scripture and Sacred Tradition, and is
            authoritatively interpreted by the Magisterium of the Catholic Church. At its centre stands
            the person of Jesus Christ &mdash; true God and true man &mdash; the fullness of God&rsquo;s
            revelation.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex justify-center gap-4 mb-8">
          <Link
            href="/history/christ"
            className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 text-amber-700 rounded-lg border border-amber-200 hover:bg-amber-100 transition-colors text-sm font-medium"
          >
            <Cross className="w-4 h-4" />
            Lord Jesus Christ
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link
            href="/history/resurrection"
            className="inline-flex items-center gap-2 px-4 py-2 bg-rose-50 text-rose-700 rounded-lg border border-rose-200 hover:bg-rose-100 transition-colors text-sm font-medium"
          >
            <Flame className="w-4 h-4" />
            The Resurrection
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
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

        {/* ==================== TAB 1: DIVINITY OF CHRIST ==================== */}
        {activeTab === 'divinity-of-christ' && (
          <div className="space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Crown className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Jesus Is God</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The central claim of Christianity is not merely that Jesus was a great teacher, a wise
                prophet, or an extraordinary man. It is that Jesus of Nazareth is God &mdash; the second
                Person of the Holy Trinity, the eternal Word made flesh. This claim was not a later
                invention; it was present from the earliest strata of the New Testament and was
                the driving force behind the explosive growth of the early Church.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">C.S. Lewis&rsquo;s Trilemma</h3>
                <p className="text-amber-800 leading-relaxed">
                  &ldquo;A man who was merely a man and said the sort of things Jesus said would not be a
                  great moral teacher. He would either be a lunatic &mdash; on the level with the man who
                  says he is a poached egg &mdash; or else he would be the Devil of Hell. You must make your
                  choice. Either this man was, and is, the Son of God, or else a madman or something worse.
                  You can shut him up for a fool, you can spit at him and kill him as a demon, or you can
                  fall at his feet and call him Lord and God. But let us not come with any patronising
                  nonsense about his being a great human teacher. He has not left that open to us. He did
                  not intend to.&rdquo;<sup className="text-amber-600 font-semibold cursor-help">(a)</sup>
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-5 mt-6">
                <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">Notes</h4>
                <div className="text-sm text-gray-600 space-y-2">
                  <p><span className="font-semibold text-amber-600">(a)</span> C.S. Lewis, <em>Mere Christianity</em> (1952), Book II, Chapter 3. The argument is sometimes called &ldquo;Lord, Liar, or Lunatic.&rdquo;</p>
                </div>
              </div>
            </div>

            {/* Scriptural Evidence */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Scriptural Evidence for the Divinity of Christ</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The New Testament contains multiple, independent witnesses to the divinity of Jesus. These
                range from explicit declarations to implicit claims embedded in his actions and self-understanding.
              </p>

              <div className="space-y-4 mb-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-900 mb-3">The Prologue of John (John 1:1&ndash;14)</h3>
                  <p className="text-blue-800 italic mb-3">
                    &ldquo;In the beginning was the Word, and the Word was with God, and the Word was God.
                    He was with God in the beginning. Through him all things were made; without him nothing
                    was made that has been made&hellip; The Word became flesh and made his dwelling among us.
                    We have seen his glory, the glory of the one and only Son, who came from the Father,
                    full of grace and truth.&rdquo;
                  </p>
                  <p className="text-blue-700 text-sm">&mdash; <em>John 1:1&ndash;3, 14</em></p>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-900 mb-3">The &ldquo;I AM&rdquo; Statements</h3>
                  <p className="text-green-800 leading-relaxed mb-3">
                    In the Gospel of John, Jesus makes seven solemn &ldquo;I AM&rdquo; (<em>ego eimi</em>)
                    declarations that echo God&rsquo;s self-revelation to Moses at the burning bush:
                    &ldquo;I AM WHO I AM&rdquo; (Exodus 3:14). The most explicit is:
                  </p>
                  <p className="text-green-800 italic mb-3">
                    &ldquo;Very truly I tell you, before Abraham was born, I am!&rdquo;
                  </p>
                  <p className="text-green-700 text-sm mb-3">&mdash; <em>John 8:58</em></p>
                  <p className="text-green-800 leading-relaxed">
                    The audience understood precisely what he was claiming &mdash; they picked up stones to
                    execute him for blasphemy (John 8:59). Jesus was not merely claiming to have existed before
                    Abraham; he was claiming the divine Name for himself.<sup className="text-amber-600 font-semibold cursor-help">(a)</sup>
                  </p>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">The Philippians Hymn (Philippians 2:5&ndash;11)</h3>
                  <p className="text-purple-800 italic mb-3">
                    &ldquo;Who, being in very nature God, did not consider equality with God something to be
                    used to his own advantage; rather, he made himself nothing by taking the very nature of a
                    servant, being made in human likeness. And being found in appearance as a man, he humbled
                    himself by becoming obedient to death &mdash; even death on a cross! Therefore God exalted
                    him to the highest place and gave him the name that is above every name, that at the name
                    of Jesus every knee should bow&hellip; and every tongue acknowledge that Jesus Christ is
                    Lord, to the glory of God the Father.&rdquo;
                  </p>
                  <p className="text-purple-700 text-sm">&mdash; <em>Philippians 2:6&ndash;11</em></p>
                  <p className="text-purple-800 leading-relaxed mt-3">
                    Most scholars regard this as a pre-Pauline hymn &mdash; already in liturgical use before
                    Paul incorporated it into his letter (c. AD 62). It affirms that Christ existed &ldquo;in
                    very nature God&rdquo; (<em>en morph&ecirc; theou</em>) before the incarnation.<sup className="text-amber-600 font-semibold cursor-help">(b)</sup>
                  </p>
                </div>

                <div className="bg-rose-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-rose-900 mb-3">Further Key Texts</h3>
                  <ul className="text-rose-800 space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="font-bold mt-0.5">&bull;</span>
                      <span><strong>John 10:30</strong> &mdash; &ldquo;I and the Father are one.&rdquo;</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold mt-0.5">&bull;</span>
                      <span><strong>John 14:9</strong> &mdash; &ldquo;Anyone who has seen me has seen the Father.&rdquo;</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold mt-0.5">&bull;</span>
                      <span><strong>John 20:28</strong> &mdash; Thomas&rsquo;s confession: &ldquo;My Lord and my God!&rdquo;</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold mt-0.5">&bull;</span>
                      <span><strong>Colossians 1:15&ndash;20</strong> &mdash; &ldquo;He is the image of the invisible God, the firstborn over all creation. For in him all things were created.&rdquo;</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold mt-0.5">&bull;</span>
                      <span><strong>Hebrews 1:1&ndash;3</strong> &mdash; &ldquo;The Son is the radiance of God&rsquo;s glory and the exact representation of his being, sustaining all things by his powerful word.&rdquo;</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold mt-0.5">&bull;</span>
                      <span><strong>Titus 2:13</strong> &mdash; &ldquo;Our great God and Saviour, Jesus Christ.&rdquo;</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-5 mt-6">
                <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">Notes</h4>
                <div className="text-sm text-gray-600 space-y-2">
                  <p><span className="font-semibold text-amber-600">(a)</span> Raymond E. Brown, <em>An Introduction to New Testament Christology</em> (Paulist Press, 1994), pp. 137&ndash;144, demonstrates that the <em>ego eimi</em> statements in John reflect the absolute use of the divine Name from Exodus 3:14 and Isaiah 43:10.</p>
                  <p><span className="font-semibold text-amber-600">(b)</span> Larry Hurtado, <em>Lord Jesus Christ</em> (Eerdmans, 2003), pp. 83&ndash;107: &ldquo;The devotional pattern reflected in this passage indicates a remarkably high christology that was already characteristic of Christian worship within the first couple of decades.&rdquo;</p>
                </div>
              </div>
            </div>

            {/* Conciliar Definitions */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                  <Landmark className="w-6 h-6 text-indigo-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Great Councils</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The early Church was forced to articulate precisely what it believed about the divinity and
                humanity of Christ in response to various heresies. Through the first seven Ecumenical
                Councils, the Church defined the doctrine of the Trinity and the person of Christ with
                increasing precision &mdash; not inventing new doctrine, but clarifying what was always
                believed.
              </p>

              <div className="space-y-4 mb-6">
                <div className="bg-indigo-50 p-5 rounded-lg">
                  <h3 className="text-lg font-semibold text-indigo-900 mb-2">Council of Nicaea (AD 325)</h3>
                  <p className="text-indigo-800 text-sm leading-relaxed mb-3">
                    Against Arius, who taught that the Son was a created being (&ldquo;there was a time when
                    he was not&rdquo;), the Council declared that the Son is <em>homoousios</em>
                    (&ldquo;one in being&rdquo; or &ldquo;consubstantial&rdquo;) with the Father &mdash;
                    &ldquo;God from God, Light from Light, true God from true God, begotten not made.&rdquo;
                  </p>
                  <p className="text-indigo-800 text-sm leading-relaxed">
                    The Nicene Creed, professed at every Sunday Mass, is the lasting fruit of this Council.<sup className="text-amber-600 font-semibold cursor-help">(a)</sup>
                  </p>
                </div>
                <div className="bg-indigo-50 p-5 rounded-lg">
                  <h3 className="text-lg font-semibold text-indigo-900 mb-2">Council of Constantinople (AD 381)</h3>
                  <p className="text-indigo-800 text-sm leading-relaxed">
                    Expanded the Nicene Creed to affirm the full divinity of the Holy Spirit (&ldquo;the Lord,
                    the Giver of Life, who proceeds from the Father&rdquo;) and the completeness of
                    Christ&rsquo;s humanity against the Apollinarian heresy, which denied that Christ had a
                    human rational soul.
                  </p>
                </div>
                <div className="bg-indigo-50 p-5 rounded-lg">
                  <h3 className="text-lg font-semibold text-indigo-900 mb-2">Council of Ephesus (AD 431)</h3>
                  <p className="text-indigo-800 text-sm leading-relaxed">
                    Against Nestorius, who seemed to divide Christ into two separate persons (one divine, one
                    human), the Council affirmed that Mary is <em>Theotokos</em> (&ldquo;God-bearer&rdquo; or
                    &ldquo;Mother of God&rdquo;) &mdash; not because Mary is the source of the divine nature,
                    but because the child she bore is one divine Person with two natures.
                  </p>
                </div>
                <div className="bg-indigo-50 p-5 rounded-lg">
                  <h3 className="text-lg font-semibold text-indigo-900 mb-2">Council of Chalcedon (AD 451)</h3>
                  <p className="text-indigo-800 text-sm leading-relaxed">
                    Produced the definitive statement on the person of Christ: he is one Person (divine) in
                    two natures (divine and human), &ldquo;without confusion, without change, without division,
                    without separation.&rdquo;<sup className="text-amber-600 font-semibold cursor-help">(b)</sup> The
                    two natures are united in the one divine Person of the Word (the &ldquo;hypostatic union&rdquo;).
                    This formula remains the standard of orthodox Christology to this day.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-5 mt-6">
                <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">Notes</h4>
                <div className="text-sm text-gray-600 space-y-2">
                  <p><span className="font-semibold text-amber-600">(a)</span> The creed as prayed at Mass today is technically the Niceno-Constantinopolitan Creed, incorporating the work of both the 325 and 381 councils. See J.N.D. Kelly, <em>Early Christian Creeds</em>, 3rd edition (Continuum, 1972).</p>
                  <p><span className="font-semibold text-amber-600">(b)</span> The Chalcedonian Definition guards against four errors: confusing the natures (Eutyches), changing one into the other, dividing the Person (Nestorius), or separating the natures as if they merely co-existed. See <em>CCC</em> 464&ndash;469.</p>
                </div>
              </div>
            </div>

            {/* Cross-links */}
            <div className="bg-indigo-50 border border-indigo-200 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-indigo-900 mb-2">Related Sections</h3>
              <p className="text-indigo-800 text-sm mb-4">
                The divinity of Christ is grounded in the historical evidence for his life and vindicated
                by his bodily resurrection from the dead.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/history/christ"
                  className="inline-flex items-center gap-2 text-indigo-700 hover:text-indigo-900 font-medium"
                >
                  <ArrowRight className="w-4 h-4" />
                  Lord Jesus Christ &mdash; Historical Evidence
                </Link>
                <Link
                  href="/history/resurrection"
                  className="inline-flex items-center gap-2 text-indigo-700 hover:text-indigo-900 font-medium"
                >
                  <ArrowRight className="w-4 h-4" />
                  The Resurrection &mdash; Cornerstone of Faith
                </Link>
              </div>
            </div>

            {/* Sources */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Sources &amp; Further Reading</h3>
              <ol className="text-sm text-gray-600 space-y-1.5 list-decimal list-inside">
                <li>Raymond E. Brown, <em>An Introduction to New Testament Christology</em> (Paulist Press, 1994)</li>
                <li>Larry Hurtado, <em>Lord Jesus Christ: Devotion to Jesus in Earliest Christianity</em> (Eerdmans, 2003)</li>
                <li>J.N.D. Kelly, <em>Early Christian Doctrines</em>, 5th revised edition (Continuum, 1977)</li>
                <li>C.S. Lewis, <em>Mere Christianity</em> (1952), Book II</li>
                <li><em>Catechism of the Catholic Church</em>, 422&ndash;478 (&ldquo;I Believe in Jesus Christ&rdquo;)</li>
              </ol>
            </div>
          </div>
        )}

        {/* ==================== TAB 2: SACRED SCRIPTURE ==================== */}
        {activeTab === 'sacred-scripture' && (
          <div className="space-y-8">
            {/* Divine Inspiration */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Divine Inspiration</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Catholics believe that Sacred Scripture is the written Word of God &mdash; authored by human
                beings under the inspiration of the Holy Spirit. The human authors wrote freely, using their
                own languages, literary styles, and cultural contexts, yet God is the principal author who
                guided them so that they wrote &ldquo;everything and only those things which He wanted.&rdquo;
              </p>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">2 Timothy 3:16&ndash;17</h3>
                <p className="text-amber-800 italic mb-3">
                  &ldquo;All Scripture is God-breathed and is useful for teaching, rebuking, correcting and
                  training in righteousness, so that the servant of God may be thoroughly equipped for every
                  good work.&rdquo;
                </p>
                <p className="text-amber-700 text-sm">&mdash; <em>2 Timothy 3:16&ndash;17</em></p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">2 Peter 1:20&ndash;21</h3>
                <p className="text-blue-800 italic mb-3">
                  &ldquo;Above all, you must understand that no prophecy of Scripture came about by the
                  prophet&rsquo;s own interpretation of things. For prophecy never had its origin in the
                  human will, but prophets, though human, spoke from God as they were carried along by the
                  Holy Spirit.&rdquo;
                </p>
                <p className="text-blue-700 text-sm">&mdash; <em>2 Peter 1:20&ndash;21</em></p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-green-900 mb-3">Dei Verbum on Inspiration</h3>
                <p className="text-green-800 italic mb-3">
                  &ldquo;The books of both the Old and New Testaments in their entirety, with all their parts,
                  are sacred and canonical because written under the inspiration of the Holy Spirit, they
                  have God as their author and have been handed on as such to the Church herself.&rdquo;
                </p>
                <p className="text-green-700 text-sm">&mdash; <em>Dei Verbum</em>, 11 (Vatican II, 1965)</p>
              </div>

              <p className="text-gray-700 leading-relaxed">
                Inspiration does not mean dictation. God did not override the human authors&rsquo; freedom
                or personality. Rather, he worked through their talents, knowledge, and circumstances so
                that the final written text faithfully communicates divine truth. The result is a text that
                is truly the Word of God in human words.<sup className="text-amber-600 font-semibold cursor-help">(a)</sup>
              </p>

              <div className="bg-gray-50 rounded-lg p-5 mt-6">
                <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">Notes</h4>
                <div className="text-sm text-gray-600 space-y-2">
                  <p><span className="font-semibold text-amber-600">(a)</span> <em>CCC</em> 106: &ldquo;God inspired the human authors of the sacred books. To compose the sacred books, God chose certain men who, all the while he employed them in this task, made full use of their own faculties and powers so that, though he acted in them and by them, it was as true authors that they consigned to writing whatever he wanted written, and no more.&rdquo;</p>
                </div>
              </div>
            </div>

            {/* The Canon */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <FileText className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Canon of Scripture</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The &ldquo;canon&rdquo; (from Greek <em>kanon</em>, &ldquo;rule&rdquo; or &ldquo;measuring
                stick&rdquo;) is the official list of books recognised by the Church as divinely inspired.
                The Catholic Bible contains 73 books: 46 in the Old Testament and 27 in the New Testament.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-blue-50 p-5 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Old Testament</h3>
                  <p className="text-blue-800 text-sm leading-relaxed">
                    The Catholic Old Testament follows the Septuagint (the Greek translation used by the
                    apostles and the early Church), which includes seven books not found in the later
                    Jewish/Protestant canon: Tobit, Judith, 1&ndash;2 Maccabees, Wisdom, Sirach (Ecclesiasticus),
                    and Baruch, plus additions to Esther and Daniel. These are called the
                    &ldquo;deuterocanonical&rdquo; books.<sup className="text-amber-600 font-semibold cursor-help">(a)</sup>
                  </p>
                </div>
                <div className="bg-blue-50 p-5 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">New Testament</h3>
                  <p className="text-blue-800 text-sm leading-relaxed">
                    The 27 books of the New Testament were formally listed by the Councils of Hippo (AD 393)
                    and Carthage (AD 397), ratified by Pope Innocent I (AD 405), and solemnly defined by the
                    Council of Trent (AD 1546). The criteria for inclusion were: apostolic origin or connection,
                    universal use in the churches, and consistency with the &ldquo;rule of faith.&rdquo;
                  </p>
                </div>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-purple-900 mb-3">Who Decided Which Books Belong in the Bible?</h3>
                <p className="text-purple-800 leading-relaxed">
                  The canon was not imposed by a single decree but emerged through the lived experience of
                  the Church guided by the Holy Spirit. It was the Catholic Church &mdash; through her
                  councils, bishops, and liturgical practice &mdash; that discerned and defined which books
                  are inspired. As St. Augustine wrote: &ldquo;I would not believe the Gospel unless the
                  authority of the Catholic Church moved me to do so.&rdquo;<sup className="text-amber-600 font-semibold cursor-help">(b)</sup>
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-5 mt-6">
                <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">Notes</h4>
                <div className="text-sm text-gray-600 space-y-2">
                  <p><span className="font-semibold text-amber-600">(a)</span> The Septuagint was the Bible of the early Church. The New Testament authors quote the Old Testament from the Septuagint far more often than from the Hebrew text. See Martin Hengel, <em>The Septuagint as Christian Scripture</em> (T&amp;T Clark, 2002).</p>
                  <p><span className="font-semibold text-amber-600">(b)</span> St. Augustine, <em>Against the Fundamental Letter of Manichaeus</em>, 5.6 (c. AD 397).</p>
                </div>
              </div>
            </div>

            {/* Four Senses */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Eye className="w-6 h-6 text-green-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Four Senses of Scripture</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The Catholic tradition recognises that Scripture operates on multiple levels of meaning
                simultaneously. Following the Church Fathers and the medieval tradition (summarised in
                the <em>Catechism</em>, 115&ndash;119), there are four senses:
              </p>

              <div className="space-y-4 mb-6">
                <div className="bg-green-50 p-5 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-900 mb-2">1. Literal Sense</h3>
                  <p className="text-green-800 text-sm leading-relaxed">
                    The meaning conveyed by the words of Scripture, understood according to the literary genre
                    and historical context. This is the foundation of all other senses. It includes metaphor,
                    poetry, and symbolism where the author intended them &mdash; &ldquo;literal&rdquo; does
                    not mean &ldquo;literalistic.&rdquo;
                  </p>
                </div>
                <div className="bg-green-50 p-5 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-900 mb-2">2. Allegorical Sense</h3>
                  <p className="text-green-800 text-sm leading-relaxed">
                    Events, persons, or things in the Old Testament are recognised as &ldquo;types&rdquo;
                    (prefigurations) of realities in the New Testament. For example, the crossing of the Red
                    Sea prefigures baptism; the sacrifice of Isaac prefigures Christ&rsquo;s sacrifice on the
                    Cross; the manna in the desert prefigures the Eucharist.
                  </p>
                </div>
                <div className="bg-green-50 p-5 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-900 mb-2">3. Moral (Tropological) Sense</h3>
                  <p className="text-green-800 text-sm leading-relaxed">
                    Scripture teaches us how to live justly. The events and commands of Scripture have
                    implications for our moral conduct. For example, the Ten Commandments directly guide
                    behaviour; the story of David&rsquo;s sin with Bathsheba warns against lust and abuse
                    of power.
                  </p>
                </div>
                <div className="bg-green-50 p-5 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-900 mb-2">4. Anagogical Sense</h3>
                  <p className="text-green-800 text-sm leading-relaxed">
                    Scripture points toward our eternal destiny. The Promised Land, the heavenly Jerusalem,
                    and the beatific vision are realities toward which the whole of salvation history is
                    directed. The Church on earth is a pilgrim journeying toward the heavenly city
                    (Hebrews 12:22&ndash;23; Revelation 21&ndash;22).
                  </p>
                </div>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">The Medieval Memory Aid</h3>
                <p className="text-amber-800 italic">
                  &ldquo;The letter teaches events; allegory, what you should believe; the moral sense, what
                  you should do; anagogy, where you are heading.&rdquo;
                </p>
                <p className="text-amber-700 text-sm mt-2">&mdash; Augustine of Dacia (13th century), summarising a tradition going back to John Cassian (5th century)</p>
              </div>
            </div>

            {/* Sources */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Sources &amp; Further Reading</h3>
              <ol className="text-sm text-gray-600 space-y-1.5 list-decimal list-inside">
                <li><em>Dei Verbum</em> (Vatican II, 1965), chapters 1&ndash;3</li>
                <li><em>Catechism of the Catholic Church</em>, 101&ndash;141 (&ldquo;Sacred Scripture&rdquo;)</li>
                <li>Scott Hahn, <em>Ignatius Catholic Study Bible</em> &mdash; General Introduction</li>
                <li>Raymond E. Brown, <em>101 Questions &amp; Answers on the Bible</em> (Paulist Press, 2003)</li>
                <li>Martin Hengel, <em>The Septuagint as Christian Scripture</em> (T&amp;T Clark, 2002)</li>
              </ol>
            </div>
          </div>
        )}

        {/* ==================== TAB 3: SACRED TRADITION ==================== */}
        {activeTab === 'sacred-tradition' && (
          <div className="space-y-8">
            {/* What is Tradition */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Flame className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">What Is Sacred Tradition?</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Sacred Tradition is the living transmission of the Gospel message from the Apostles to
                their successors (the bishops) and through them to the whole Church. It is not a separate
                &ldquo;second source&rdquo; alongside Scripture, but the broader reality of which Scripture
                itself is a part &mdash; the full apostolic inheritance, transmitted in the Church&rsquo;s
                teaching, worship, and life.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">2 Thessalonians 2:15</h3>
                <p className="text-amber-800 italic mb-3">
                  &ldquo;So then, brothers and sisters, stand firm and hold fast to the traditions
                  (<em>paradoseis</em>) that you were taught by us, either by word of mouth or by our
                  letter.&rdquo;
                </p>
                <p className="text-amber-700 text-sm">&mdash; <em>2 Thessalonians 2:15</em></p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                St. Paul explicitly refers to both oral (&ldquo;word of mouth&rdquo;) and written
                (&ldquo;letter&rdquo;) modes of transmission. The early Church did not have a complete
                New Testament for decades after Pentecost. The faith was first transmitted orally &mdash;
                through preaching, catechesis, and liturgical worship &mdash; before any Gospel was written
                down. The New Testament itself emerged from and presupposes this living Tradition.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">Tradition vs. Traditions</h3>
                <p className="text-blue-800 leading-relaxed">
                  It is essential to distinguish Sacred Tradition (capital &ldquo;T&rdquo;) from traditions
                  (small &ldquo;t&rdquo;). Sacred Tradition refers to the deposit of faith handed on from
                  the Apostles &mdash; it is unchangeable in substance, though its formulation may develop.
                  Traditions (small &ldquo;t&rdquo;) are customs, practices, and disciplinary norms that can
                  change over time (e.g., fasting rules, liturgical language, clerical celibacy in the Latin
                  rite).<sup className="text-amber-600 font-semibold cursor-help">(a)</sup>
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-5 mt-6">
                <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">Notes</h4>
                <div className="text-sm text-gray-600 space-y-2">
                  <p><span className="font-semibold text-amber-600">(a)</span> <em>CCC</em> 83: &ldquo;The Tradition here in question comes from the apostles and hands on what they received from Jesus&rsquo;s teaching and example and what they learned from the Holy Spirit. The first generation of Christians did not yet have a written New Testament, and the New Testament itself demonstrates the process of living Tradition.&rdquo;</p>
                </div>
              </div>
            </div>

            {/* The Church Fathers */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-green-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Role of the Church Fathers</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The Church Fathers are the early Christian writers (c. 1st&ndash;8th centuries) who received,
                interpreted, and transmitted the apostolic faith. Their unanimous testimony on a point of
                doctrine is considered a reliable witness to Sacred Tradition. Key figures include:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-green-50 p-5 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-900 mb-2">St. Irenaeus of Lyon (c. 130&ndash;202)</h3>
                  <p className="text-green-800 text-sm leading-relaxed">
                    Disciple of Polycarp (who knew the Apostle John). In <em>Against Heresies</em>, he
                    appealed to the chain of apostolic succession in major churches (especially Rome) as
                    proof that the true faith had been faithfully preserved: &ldquo;It is within the power
                    of all who may wish to see the truth, to contemplate clearly the tradition of the
                    apostles manifested throughout the whole world.&rdquo;
                  </p>
                </div>
                <div className="bg-green-50 p-5 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-900 mb-2">St. Augustine of Hippo (354&ndash;430)</h3>
                  <p className="text-green-800 text-sm leading-relaxed">
                    The most influential Western Father. Augustine saw Scripture and Tradition as inseparable:
                    the Church gave us the Bible, and the Bible presupposes the Church. His theological
                    synthesis shaped Western Christianity for a millennium and remains foundational for
                    Catholic theology.
                  </p>
                </div>
                <div className="bg-green-50 p-5 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-900 mb-2">St. Athanasius (c. 296&ndash;373)</h3>
                  <p className="text-green-800 text-sm leading-relaxed">
                    The great defender of Nicene orthodoxy against Arianism. Exiled five times for his faith,
                    he demonstrated that Tradition is not merely what is popular but what is apostolic.
                    &ldquo;<em>Athanasius contra mundum</em>&rdquo; (&ldquo;Athanasius against the
                    world&rdquo;) became a byword for fidelity to truth.
                  </p>
                </div>
                <div className="bg-green-50 p-5 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-900 mb-2">St. Vincent of L&eacute;rins (d. c. 445)</h3>
                  <p className="text-green-800 text-sm leading-relaxed">
                    Formulated the classic test for authentic Catholic teaching: &ldquo;<em>Quod ubique, quod
                    semper, quod ab omnibus</em>&rdquo; &mdash; &ldquo;what has been believed everywhere,
                    always, and by all.&rdquo; This &ldquo;Vincentian Canon&rdquo; remains a valuable guide
                    for distinguishing true development of doctrine from corruption.
                  </p>
                </div>
              </div>
            </div>

            {/* Development of Doctrine */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-purple-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Development of Doctrine</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Does doctrine change? Blessed John Henry Newman, in his landmark <em>An Essay on the
                Development of Christian Doctrine</em> (1845), distinguished between legitimate development
                and corruption. Like an acorn growing into an oak tree, doctrine develops organically &mdash;
                it becomes more explicit, more precisely formulated, and more deeply understood &mdash; but
                it does not become something different in substance.
              </p>

              <div className="bg-purple-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-purple-900 mb-3">Newman&rsquo;s Principle</h3>
                <p className="text-purple-800 italic mb-3">
                  &ldquo;In a higher world it is otherwise, but here below to live is to change, and to be
                  perfect is to have changed often.&rdquo;
                </p>
                <p className="text-purple-700 text-sm">&mdash; Bl. John Henry Newman, <em>An Essay on the Development of Christian Doctrine</em> (1845), ch. 1</p>
              </div>

              <p className="text-gray-700 leading-relaxed">
                The Trinity, the canon of Scripture, the two natures of Christ, and the Immaculate Conception
                are all examples of doctrines whose formulation became more precise over time, while their
                substance was present from the beginning in the Church&rsquo;s faith. Development is not
                adding new content to revelation (which closed with the Apostles) but penetrating more deeply
                into what was already given.
              </p>
            </div>

            {/* Sources */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Sources &amp; Further Reading</h3>
              <ol className="text-sm text-gray-600 space-y-1.5 list-decimal list-inside">
                <li><em>Dei Verbum</em> (Vatican II, 1965), chapter 2: &ldquo;Handing On Divine Revelation&rdquo;</li>
                <li><em>Catechism of the Catholic Church</em>, 74&ndash;100 (&ldquo;The Transmission of Divine Revelation&rdquo;)</li>
                <li>Bl. John Henry Newman, <em>An Essay on the Development of Christian Doctrine</em> (1845; many editions)</li>
                <li>Yves Congar, <em>Tradition and Traditions</em> (Burns &amp; Oates, 1966)</li>
                <li>St. Irenaeus, <em>Against Heresies</em>, Books 3&ndash;4 (in the <em>Ante-Nicene Fathers</em> series)</li>
              </ol>
            </div>
          </div>
        )}

        {/* ==================== TAB 4: THE MAGISTERIUM ==================== */}
        {activeTab === 'magisterium' && (
          <div className="space-y-8">
            {/* What is the Magisterium */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Teaching Authority of the Church</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The Magisterium (from Latin <em>magister</em>, &ldquo;teacher&rdquo;) is the teaching office
                of the Catholic Church, exercised by the Pope and the bishops in communion with him. Christ
                entrusted the Apostles with the mission to teach all nations (Matt 28:18&ndash;20), and
                this mission continues in their successors.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">The Commission of Christ</h3>
                <p className="text-amber-800 italic mb-3">
                  &ldquo;All authority in heaven and on earth has been given to me. Therefore go and make
                  disciples of all nations, baptising them in the name of the Father and of the Son and of
                  the Holy Spirit, and teaching them to obey everything I have commanded you. And surely I
                  am with you always, to the very end of the age.&rdquo;
                </p>
                <p className="text-amber-700 text-sm">&mdash; <em>Matthew 28:18&ndash;20</em></p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">Catechism on the Magisterium</h3>
                <p className="text-blue-800 italic mb-3">
                  &ldquo;The task of giving an authentic interpretation of the Word of God, whether in its
                  written form or in the form of Tradition, has been entrusted to the living teaching office
                  of the Church alone. Its authority in this matter is exercised in the name of Jesus Christ.
                  This means that the task of interpretation has been entrusted to the bishops in communion
                  with the successor of Peter, the Bishop of Rome.&rdquo;
                </p>
                <p className="text-blue-700 text-sm">&mdash; <em>CCC</em> 85</p>
              </div>

              <p className="text-gray-700 leading-relaxed">
                The Magisterium does not stand above the Word of God but serves it. It cannot teach
                anything contrary to Scripture or Tradition. Its role is to guard, interpret, and faithfully
                transmit the deposit of faith.<sup className="text-amber-600 font-semibold cursor-help">(a)</sup>
              </p>

              <div className="bg-gray-50 rounded-lg p-5 mt-6">
                <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">Notes</h4>
                <div className="text-sm text-gray-600 space-y-2">
                  <p><span className="font-semibold text-amber-600">(a)</span> <em>Dei Verbum</em> 10: &ldquo;The teaching office is not above the word of God, but serves it, teaching only what has been handed on, listening to it devoutly, guarding it scrupulously and explaining it faithfully.&rdquo;</p>
                </div>
              </div>
            </div>

            {/* Levels of Magisterial Authority */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Scale className="w-6 h-6 text-green-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Levels of Teaching Authority</h2>
              </div>

              <div className="space-y-4 mb-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-900 mb-3">Extraordinary Magisterium</h3>
                  <p className="text-green-800 leading-relaxed mb-3">
                    The highest level of teaching authority, exercised in two ways:
                  </p>
                  <ul className="text-green-800 space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="font-bold mt-0.5">&bull;</span>
                      <span><strong>Ecumenical Councils:</strong> All bishops gathered in union with the Pope define a doctrine for the universal Church (e.g., Nicaea, Chalcedon, Trent, Vatican I and II).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold mt-0.5">&bull;</span>
                      <span><strong>Papal <em>ex cathedra</em> definitions:</strong> The Pope, as pastor and teacher of all Christians, defines a doctrine of faith or morals to be held by the whole Church. Examples: the Immaculate Conception (1854) and the Assumption of Mary (1950).</span>
                    </li>
                  </ul>
                  <p className="text-green-800 leading-relaxed mt-3">
                    These teachings are <strong>infallible</strong> &mdash; guaranteed by the Holy Spirit to be
                    free from error.<sup className="text-amber-600 font-semibold cursor-help">(a)</sup>
                  </p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-900 mb-3">Ordinary &amp; Universal Magisterium</h3>
                  <p className="text-blue-800 leading-relaxed">
                    When the bishops dispersed around the world, in communion with the Pope, agree in teaching
                    a doctrine as definitively to be held, this also enjoys infallibility. This is the way most
                    Catholic doctrine has been taught throughout history &mdash; not through dramatic
                    conciliar definitions, but through the steady, universal consensus of the bishops across
                    time and space.
                  </p>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">Ordinary (Non-Definitive) Magisterium</h3>
                  <p className="text-purple-800 leading-relaxed">
                    Encyclicals, apostolic exhortations, and other papal and episcopal documents that teach
                    on faith and morals without invoking the charism of infallibility. These require
                    &ldquo;religious submission of mind and will&rdquo; (<em>CCC</em> 892) but are not
                    irreformable. They carry varying degrees of authority depending on the level of papal
                    engagement and the subject matter.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-5 mt-6">
                <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">Notes</h4>
                <div className="text-sm text-gray-600 space-y-2">
                  <p><span className="font-semibold text-amber-600">(a)</span> Papal infallibility was solemnly defined at Vatican I (1870) in the constitution <em>Pastor Aeternus</em>. It is often misunderstood: it does not mean the Pope is always right about everything, nor that he receives new revelations. It means that when he teaches <em>ex cathedra</em> on faith or morals, the Holy Spirit protects him from defining error. This charism has been invoked only twice since its formal definition. See <em>CCC</em> 891.</p>
                </div>
              </div>
            </div>

            {/* Sources */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Sources &amp; Further Reading</h3>
              <ol className="text-sm text-gray-600 space-y-1.5 list-decimal list-inside">
                <li><em>Lumen Gentium</em> (Vatican II, 1964), chapter 3: &ldquo;On the Hierarchical Structure of the Church&rdquo;</li>
                <li><em>Pastor Aeternus</em> (Vatican I, 1870): Definition of Papal Infallibility</li>
                <li><em>Catechism of the Catholic Church</em>, 85&ndash;87, 888&ndash;892</li>
                <li>Avery Dulles, <em>Magisterium: Teacher and Guardian of the Faith</em> (Sapientia Press, 2007)</li>
                <li>Francis A. Sullivan, <em>Magisterium: Teaching Authority in the Catholic Church</em> (Paulist Press, 1983)</li>
              </ol>
            </div>
          </div>
        )}

        {/* ==================== TAB 5: DEPOSIT OF FAITH ==================== */}
        {activeTab === 'deposit-of-faith' && (
          <div className="space-y-8">
            {/* What is the Deposit */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Deposit of Faith</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The &ldquo;deposit of faith&rdquo; (<em>depositum fidei</em>) is the total content of
                divine revelation entrusted by Christ and the Holy Spirit to the Apostles. It is contained
                in Sacred Scripture and Sacred Tradition together, forming one sacred deposit that the
                Church guards, interprets, and hands on.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">Dei Verbum 10</h3>
                <p className="text-amber-800 italic mb-3">
                  &ldquo;Sacred tradition and Sacred Scripture form one sacred deposit of the word of God,
                  committed to the Church. Holding fast to this deposit the entire holy people united with
                  their shepherds remain always steadfast in the teaching of the Apostles.&rdquo;
                </p>
                <p className="text-amber-700 text-sm">&mdash; <em>Dei Verbum</em>, 10 (Vatican II, 1965)</p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">1 Timothy 6:20</h3>
                <p className="text-blue-800 italic mb-3">
                  &ldquo;Timothy, guard what has been entrusted to your care (<em>t&ecirc;n parathek&ecirc;n</em>).
                  Turn away from godless chatter and the opposing ideas of what is falsely called
                  knowledge.&rdquo;
                </p>
                <p className="text-blue-700 text-sm">&mdash; <em>1 Timothy 6:20</em></p>
              </div>

              <p className="text-gray-700 leading-relaxed">
                The Greek word <em>parathek&ecirc;</em> means a &ldquo;deposit&rdquo; or &ldquo;trust&rdquo;
                placed in someone&rsquo;s care &mdash; a financial metaphor. Timothy is charged with
                guarding this deposit, not altering it, adding to it, or subtracting from it. Every bishop
                in the Catholic Church inherits this same charge.
              </p>
            </div>

            {/* Closure of Revelation */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Cross className="w-6 h-6 text-green-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Closure of Public Revelation</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Public Revelation was completed with the death of the last Apostle (traditionally identified
                as St. John, c. AD 100). No new public revelation will be given before Christ returns in
                glory. This does not mean God has stopped speaking to his people &mdash; the Holy Spirit
                continues to guide the Church into deeper understanding of what was given &mdash; but it does
                mean that no genuinely new doctrine can emerge.
              </p>

              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-green-900 mb-3">Catechism on the Closure of Revelation</h3>
                <p className="text-green-800 italic mb-3">
                  &ldquo;The Christian economy, therefore, since it is the new and definitive Covenant, will
                  never pass away; and no new public revelation is to be expected before the glorious
                  manifestation of our Lord Jesus Christ.&rdquo;
                </p>
                <p className="text-green-700 text-sm">&mdash; <em>CCC</em> 66</p>
              </div>
            </div>

            {/* Private Revelations */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Eye className="w-6 h-6 text-purple-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Relationship to Private Revelations</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Private revelations &mdash; such as the apparitions at Lourdes, Fatima, and Guadalupe &mdash;
                are distinct from Public Revelation. Even when approved by the Church, they do not add to
                the deposit of faith. Their role is to help people live the faith more fully in a particular
                historical moment.
              </p>

              <div className="bg-purple-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-purple-900 mb-3">CCC 67</h3>
                <p className="text-purple-800 italic mb-3">
                  &ldquo;Throughout the ages, there have been so-called &lsquo;private&rsquo; revelations,
                  some of which have been recognised by the authority of the Church. They do not belong,
                  however, to the deposit of faith. It is not their role to improve or complete Christ&rsquo;s
                  definitive Revelation, but to help live more fully by it in a certain period of history.
                  Guided by the Magisterium of the Church, the <em>sensus fidelium</em> knows how to discern
                  and welcome in these revelations whatever constitutes an authentic call of Christ or his
                  saints to the Church.&rdquo;
                </p>
                <p className="text-purple-700 text-sm">&mdash; <em>CCC</em> 67</p>
              </div>

              <div className="bg-indigo-50 border border-indigo-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-indigo-900 mb-2">Explore Further</h3>
                <p className="text-indigo-800 text-sm mb-4">
                  Learn more about the Church&rsquo;s investigation and approval of private revelations,
                  including Marian apparitions, eucharistic miracles, and mystical phenomena.
                </p>
                <Link
                  href="/mysteries/private-revelations"
                  className="inline-flex items-center gap-2 text-indigo-700 hover:text-indigo-900 font-medium"
                >
                  <ArrowRight className="w-4 h-4" />
                  Private Revelations &mdash; Approved Visions, Locutions &amp; Mystical Experiences
                </Link>
              </div>
            </div>

            {/* Sources */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Sources &amp; Further Reading</h3>
              <ol className="text-sm text-gray-600 space-y-1.5 list-decimal list-inside">
                <li><em>Dei Verbum</em> (Vatican II, 1965), chapters 1&ndash;2</li>
                <li><em>Catechism of the Catholic Church</em>, 65&ndash;67, 74&ndash;100</li>
                <li>Joseph Ratzinger, <em>The Theology of History in St. Bonaventure</em> (Franciscan Herald Press, 1971)</li>
                <li>Joseph Ratzinger, <em>Theological Commentary on the Third Secret of Fatima</em> (CDF, 2000)</li>
              </ol>
            </div>
          </div>
        )}

        {/* ==================== TAB 6: KEY DOCUMENTS ==================== */}
        {activeTab === 'key-documents' && (
          <div className="space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Scroll className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Key Documents on Revelation</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The Church&rsquo;s understanding of divine revelation has been shaped and articulated through
                a series of landmark documents spanning from the 19th century to the present. These encyclicals
                and conciliar constitutions represent the living Magisterium engaging with the deposit of faith
                in response to the challenges of each era.
              </p>
            </div>

            {/* Dei Verbum */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800"><em>Dei Verbum</em> (1965)</h2>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Dogmatic Constitution on Divine Revelation</h3>
                <p className="text-blue-800 text-sm mb-1">Second Vatican Council &bull; Promulgated by Pope Paul VI &bull; November 18, 1965</p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                The most important Church document on revelation in modern times. <em>Dei Verbum</em>
                (&ldquo;Word of God&rdquo;) presents revelation not primarily as a set of propositions but
                as God&rsquo;s personal self-communication, culminating in the person of Jesus Christ. Key
                teachings:
              </p>

              <ul className="text-gray-700 space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <span className="font-bold mt-0.5">&bull;</span>
                  <span>Christ is the &ldquo;mediator and fullness of all revelation&rdquo; (DV 2)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold mt-0.5">&bull;</span>
                  <span>Scripture and Tradition &ldquo;flow from the same divine wellspring&rdquo; and form &ldquo;one sacred deposit&rdquo; (DV 9&ndash;10)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold mt-0.5">&bull;</span>
                  <span>Scripture is inerrant in what it teaches &ldquo;for the sake of our salvation&rdquo; (DV 11)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold mt-0.5">&bull;</span>
                  <span>Catholics should have &ldquo;easy access to Sacred Scripture&rdquo; (DV 22)</span>
                </li>
              </ul>
            </div>

            {/* Earlier Documents */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <FileText className="w-6 h-6 text-green-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Major Documents in Historical Order</h2>
              </div>

              <div className="space-y-4 mb-6">
                <div className="bg-green-50 p-5 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-900 mb-2"><em>Providentissimus Deus</em> (1893)</h3>
                  <p className="text-green-800 text-sm leading-relaxed mb-1"><strong>Pope Leo XIII</strong> &bull; &ldquo;On the Study of Holy Scripture&rdquo;</p>
                  <p className="text-green-800 text-sm leading-relaxed">
                    The first major papal encyclical devoted entirely to Scripture. Leo XIII affirmed the
                    divine inspiration and inerrancy of the Bible while encouraging responsible use of
                    historical, linguistic, and archaeological methods in biblical study. He established the
                    Pontifical Biblical Commission to promote and guide Catholic biblical scholarship.
                  </p>
                </div>
                <div className="bg-green-50 p-5 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-900 mb-2"><em>Divino Afflante Spiritu</em> (1943)</h3>
                  <p className="text-green-800 text-sm leading-relaxed mb-1"><strong>Pope Pius XII</strong> &bull; &ldquo;Inspired by the Holy Spirit&rdquo;</p>
                  <p className="text-green-800 text-sm leading-relaxed">
                    A watershed encyclical that opened the door to modern Catholic biblical scholarship. Pius
                    XII encouraged scholars to study the original languages (Hebrew, Aramaic, Greek), to pay
                    attention to literary genres, and to use the historical-critical method &mdash; all while
                    maintaining the faith conviction that Scripture is divinely inspired. This encyclical
                    prepared the ground for <em>Dei Verbum</em>.
                  </p>
                </div>
                <div className="bg-green-50 p-5 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-900 mb-2"><em>Fides et Ratio</em> (1998)</h3>
                  <p className="text-green-800 text-sm leading-relaxed mb-1"><strong>Pope John Paul II</strong> &bull; &ldquo;On the Relationship Between Faith and Reason&rdquo;</p>
                  <p className="text-green-800 text-sm leading-relaxed">
                    A landmark encyclical on the complementarity of faith and reason. John Paul II argued
                    that faith and reason are &ldquo;two wings on which the human spirit rises to the
                    contemplation of truth.&rdquo; Revelation does not oppose reason but fulfils and
                    elevates it. The encyclical defends the capacity of human reason to know truth,
                    including metaphysical and moral truth, against contemporary relativism and scepticism.
                  </p>
                </div>
                <div className="bg-green-50 p-5 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-900 mb-2"><em>Verbum Domini</em> (2010)</h3>
                  <p className="text-green-800 text-sm leading-relaxed mb-1"><strong>Pope Benedict XVI</strong> &bull; &ldquo;The Word of the Lord&rdquo;</p>
                  <p className="text-green-800 text-sm leading-relaxed">
                    An apostolic exhortation following the 2008 Synod of Bishops on the Word of God. Benedict
                    XVI emphasised the Christological interpretation of Scripture (Jesus is the key that
                    unlocks the whole Bible), the importance of Scripture in the liturgy, and the need for
                    Catholics to encounter the living Word of God in personal prayer and study. He also
                    stressed the unity of Scripture and Tradition, and the role of the Magisterium as
                    servant of the Word.
                  </p>
                </div>
              </div>
            </div>

            {/* The Three Pillars */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Church className="w-6 h-6 text-purple-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Three Pillars: A Summary</h2>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg mb-6">
                <p className="text-purple-800 italic mb-3">
                  &ldquo;It is clear, therefore, that sacred tradition, Sacred Scripture and the teaching
                  authority of the Church, in accord with God&rsquo;s most wise design, are so linked and
                  joined together that one cannot stand without the others, and that all together and each
                  in its own way under the action of the one Holy Spirit contribute effectively to the
                  salvation of souls.&rdquo;
                </p>
                <p className="text-purple-700 text-sm">&mdash; <em>Dei Verbum</em>, 10</p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Scripture, Tradition, and the Magisterium are not three separate authorities in competition.
                They are three dimensions of one reality: God&rsquo;s self-communication to humanity,
                preserved and transmitted in the Church. Scripture is the Word of God in written form.
                Tradition is the living context in which Scripture was born and is rightly understood.
                The Magisterium is the servant and guardian of both, ensuring that the faith is handed on
                faithfully from generation to generation.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-amber-50 p-5 rounded-lg text-center">
                  <BookOpen className="w-8 h-8 text-amber-700 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-amber-900 mb-2">Sacred Scripture</h3>
                  <p className="text-amber-800 text-sm">The written Word of God, inspired by the Holy Spirit</p>
                </div>
                <div className="bg-blue-50 p-5 rounded-lg text-center">
                  <Flame className="w-8 h-8 text-blue-700 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Sacred Tradition</h3>
                  <p className="text-blue-800 text-sm">The living transmission of the apostolic faith</p>
                </div>
                <div className="bg-green-50 p-5 rounded-lg text-center">
                  <Shield className="w-8 h-8 text-green-700 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-green-900 mb-2">The Magisterium</h3>
                  <p className="text-green-800 text-sm">The teaching authority that guards and interprets</p>
                </div>
              </div>
            </div>

            {/* Cross-links */}
            <div className="bg-indigo-50 border border-indigo-200 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-indigo-900 mb-2">Explore Further</h3>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/history/christ"
                  className="inline-flex items-center gap-2 text-indigo-700 hover:text-indigo-900 font-medium"
                >
                  <ArrowRight className="w-4 h-4" />
                  Lord Jesus Christ &mdash; The Fullness of Revelation
                </Link>
                <Link
                  href="/history/resurrection"
                  className="inline-flex items-center gap-2 text-indigo-700 hover:text-indigo-900 font-medium"
                >
                  <ArrowRight className="w-4 h-4" />
                  The Resurrection &mdash; God&rsquo;s Vindication
                </Link>
                <Link
                  href="/mysteries/private-revelations"
                  className="inline-flex items-center gap-2 text-indigo-700 hover:text-indigo-900 font-medium"
                >
                  <ArrowRight className="w-4 h-4" />
                  Private Revelations
                </Link>
              </div>
            </div>

            {/* Sources */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Sources &amp; Further Reading</h3>
              <ol className="text-sm text-gray-600 space-y-1.5 list-decimal list-inside">
                <li><em>Dei Verbum</em> (Vatican II, 1965)</li>
                <li><em>Providentissimus Deus</em> (Leo XIII, 1893)</li>
                <li><em>Divino Afflante Spiritu</em> (Pius XII, 1943)</li>
                <li><em>Fides et Ratio</em> (John Paul II, 1998)</li>
                <li><em>Verbum Domini</em> (Benedict XVI, 2010)</li>
                <li><em>Catechism of the Catholic Church</em>, 50&ndash;141 (&ldquo;The Revelation of God&rdquo; and &ldquo;Sacred Scripture&rdquo;)</li>
              </ol>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}
