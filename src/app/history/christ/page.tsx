'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  BookOpen,
  Clock,
  MapPin,
  Calendar,
  Cross,
  Users,
  Scroll,
  Shield,
  Globe,
  Landmark,
  FileText,
  Star,
  Flame,
  ArrowRight,
  Crown,
  Search,
  Heart,
  Church,
  Eye,
} from 'lucide-react'

type TabId = 'historical-evidence' | 'gospel-accounts' | 'birth-childhood' | 'public-ministry' | 'passion-death' | 'first-century-context'

const tabs: { id: TabId; label: string }[] = [
  { id: 'historical-evidence', label: 'Historical Evidence' },
  { id: 'gospel-accounts', label: 'Gospel Accounts' },
  { id: 'birth-childhood', label: 'Birth & Childhood' },
  { id: 'public-ministry', label: 'Public Ministry' },
  { id: 'passion-death', label: 'Passion & Death' },
  { id: 'first-century-context', label: 'First-Century Context' },
]

export default function ChristHistoryPage() {
  const [activeTab, setActiveTab] = useState<TabId>('historical-evidence')

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Lord Jesus Christ
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Jesus of Nazareth is the most influential figure in human history. As Catholics, we believe
            he is the Son of God made man &mdash; true God and true man. This section explores the
            historical evidence, the Gospel accounts, and the world in which he lived, taught, suffered,
            died, and rose again.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex justify-center gap-4 mb-8">
          <Link
            href="/history/resurrection"
            className="inline-flex items-center gap-2 px-4 py-2 bg-rose-50 text-rose-700 rounded-lg border border-rose-200 hover:bg-rose-100 transition-colors text-sm font-medium"
          >
            <Flame className="w-4 h-4" />
            The Resurrection
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link
            href="/mysteries/public-revelation"
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-lg border border-blue-200 hover:bg-blue-100 transition-colors text-sm font-medium"
          >
            <BookOpen className="w-4 h-4" />
            Public Revelation
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

        {/* ==================== TAB 1: HISTORICAL EVIDENCE ==================== */}
        {activeTab === 'historical-evidence' && (
          <div className="space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Search className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Jesus in Non-Christian Sources</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The historical existence of Jesus of Nazareth is one of the best-attested facts of the
                ancient world. While the Gospels remain our richest source, a remarkable number of
                non-Christian writers from the first and second centuries mention Jesus, his followers,
                or his execution &mdash; often in passing, precisely because his existence was not in
                dispute. These sources confirm the broad outline of the Gospel narrative: a Jewish teacher
                from Palestine who gathered followers, was executed under Pontius Pilate during the reign
                of Tiberius, and whose movement spread rapidly across the Roman Empire.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">What Historians Agree On</h3>
                <p className="text-amber-800 mb-3">
                  Virtually all scholars of antiquity &mdash; Christian, Jewish, agnostic, and atheist &mdash;
                  accept the following as historically certain:
                </p>
                <ul className="text-amber-800 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="font-bold mt-0.5">&bull;</span>
                    <span>Jesus of Nazareth existed as a real historical person</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold mt-0.5">&bull;</span>
                    <span>He was baptised by John the Baptist</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold mt-0.5">&bull;</span>
                    <span>He was a Jewish teacher and healer who gathered disciples in Galilee and Judea</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold mt-0.5">&bull;</span>
                    <span>He was crucified under Pontius Pilate in Jerusalem, around AD 30&ndash;33</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold mt-0.5">&bull;</span>
                    <span>His followers believed he had risen from the dead and proclaimed this belief from the very beginning</span>
                  </li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed">
                The distinguished historian E.P. Sanders writes: &ldquo;The almost universal verdict of
                modern scholarship is that Jesus of Nazareth was a real historical figure.&rdquo;<sup className="text-amber-600 font-semibold cursor-help">(a)</sup> Even
                Bart Ehrman, a prominent agnostic scholar, states: &ldquo;He certainly existed, as
                virtually every competent scholar of antiquity, Christian or non-Christian, agrees.&rdquo;<sup className="text-amber-600 font-semibold cursor-help">(b)</sup>
              </p>

              <div className="bg-gray-50 rounded-lg p-5 mt-6">
                <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">Notes</h4>
                <div className="text-sm text-gray-600 space-y-2">
                  <p><span className="font-semibold text-amber-600">(a)</span> E.P. Sanders, <em>The Historical Figure of Jesus</em> (Penguin, 1993), p. 10.</p>
                  <p><span className="font-semibold text-amber-600">(b)</span> Bart D. Ehrman, <em>Did Jesus Exist? The Historical Argument for Jesus of Nazareth</em> (HarperOne, 2012), p. 4.</p>
                </div>
              </div>
            </div>

            {/* Josephus */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Scroll className="w-6 h-6 text-green-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Flavius Josephus (AD 37 &ndash; c. 100)</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Josephus was a Jewish historian who served as a commander in the First Jewish&ndash;Roman
                War before becoming a Roman citizen and court historian under the Flavian emperors. His
                two major works, <em>The Jewish War</em> and <em>Antiquities of the Jews</em>, are
                indispensable sources for first-century Jewish history. He mentions Jesus in two separate
                passages.
              </p>

              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-green-900 mb-3">The <em>Testimonium Flavianum</em> (Antiquities 18.3.3)</h3>
                <p className="text-green-800 italic mb-3">
                  &ldquo;About this time there lived Jesus, a wise man, if indeed one ought to call him a
                  man. For he was one who performed surprising deeds and was a teacher of such people as
                  accept the truth gladly. He won over many Jews and many of the Greeks. He was the Christ.
                  And when, upon the accusation of the principal men among us, Pilate had condemned him to a
                  cross, those who had first come to love him did not cease. He appeared to them spending a
                  third day restored to life, for the prophets of God had foretold these things and a
                  thousand other marvels about him. And the tribe of the Christians, so called after him,
                  has still to this day not disappeared.&rdquo;
                </p>
                <p className="text-green-700 text-sm">&mdash; Josephus, <em>Antiquities of the Jews</em>, 18.3.3 (c. AD 93&ndash;94)</p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                This passage has been the subject of intense scholarly debate. Most scholars agree that the
                core of the passage is authentic but that later Christian copyists inserted or modified
                certain phrases &mdash; particularly &ldquo;if indeed one ought to call him a man,&rdquo;
                &ldquo;He was the Christ,&rdquo; and the reference to the resurrection.<sup className="text-amber-600 font-semibold cursor-help">(a)</sup> The
                reconstructed &ldquo;core&rdquo; that most scholars accept as genuinely from Josephus
                confirms: Jesus existed, he was a teacher, he was reputed to perform remarkable deeds,
                Pilate crucified him at the instigation of Jewish leaders, and his followers continued
                after his death.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">The James Passage (Antiquities 20.9.1)</h3>
                <p className="text-blue-800 italic mb-3">
                  &ldquo;He assembled the Sanhedrin of judges, and brought before them the brother of Jesus,
                  who was called Christ, whose name was James, and some others; and when he had formed an
                  accusation against them as breakers of the law, he delivered them to be stoned.&rdquo;
                </p>
                <p className="text-blue-700 text-sm">&mdash; Josephus, <em>Antiquities of the Jews</em>, 20.9.1 (c. AD 93&ndash;94)</p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                This second passage is almost universally accepted as authentic.<sup className="text-amber-600 font-semibold cursor-help">(b)</sup> It
                identifies James by his relationship to &ldquo;Jesus, who was called Christ&rdquo; &mdash;
                a natural way for Josephus to distinguish this Jesus from the many other men named Jesus
                in his writings. The passage confirms the existence of Jesus, that he was known as &ldquo;the
                Christ&rdquo; (Messiah) by his followers, and the existence of his brother James, who led
                the Jerusalem church.
              </p>

              <div className="bg-gray-50 rounded-lg p-5 mt-6">
                <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">Notes</h4>
                <div className="text-sm text-gray-600 space-y-2">
                  <p><span className="font-semibold text-amber-600">(a)</span> A 10th-century Arabic version by Agapius of Hierapolis preserves what appears to be a less embellished form of the <em>Testimonium</em>: &ldquo;At this time there was a wise man who was called Jesus&hellip; Pilate condemned him to be crucified and to die. And those who had become his disciples did not abandon his discipleship. They reported that he had appeared to them after his crucifixion and that he was alive.&rdquo; See Shlomo Pines, <em>An Arabic Version of the Testimonium Flavianum and its Implications</em> (Jerusalem, 1971).</p>
                  <p><span className="font-semibold text-amber-600">(b)</span> Louis H. Feldman, <em>Josephus and Modern Scholarship</em> (Berlin: de Gruyter, 1984), pp. 704&ndash;707. Feldman notes that the authenticity of this passage is &ldquo;almost universally acknowledged.&rdquo;</p>
                </div>
              </div>
            </div>

            {/* Tacitus */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <Landmark className="w-6 h-6 text-red-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Tacitus (AD 56 &ndash; c. 120)</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Cornelius Tacitus is widely regarded as the greatest Roman historian. Writing around AD 116,
                he describes Nero&rsquo;s persecution of Christians after the Great Fire of Rome in AD 64.
                In doing so, he provides the most important Roman reference to Jesus.
              </p>

              <div className="bg-red-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-red-900 mb-3">Annals 15.44</h3>
                <p className="text-red-800 italic mb-3">
                  &ldquo;Nero fastened the guilt and inflicted the most exquisite tortures on a class hated
                  for their abominations, called Christians by the populace. Christus, from whom the name
                  had its origin, suffered the extreme penalty during the reign of Tiberius at the hands
                  of one of our procurators, Pontius Pilatus, and a most mischievous superstition, thus
                  checked for the moment, again broke out not only in Judaea, the first source of the evil,
                  but even in Rome, where all things hideous and shameful from every part of the world find
                  their centre and become popular.&rdquo;
                </p>
                <p className="text-red-700 text-sm">&mdash; Tacitus, <em>Annals</em>, 15.44 (c. AD 116)</p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                This passage is of immense historical value. Tacitus was no friend of Christianity &mdash;
                he calls it a &ldquo;mischievous superstition&rdquo; and an &ldquo;evil.&rdquo; His
                testimony is therefore hostile and independent, making it all the more reliable as
                historical evidence.<sup className="text-amber-600 font-semibold cursor-help">(a)</sup> He
                confirms: the founder was called &ldquo;Christus,&rdquo; he was executed under Pontius
                Pilate during the reign of Tiberius, the movement originated in Judea, and it had spread
                to Rome by the 60s AD despite the execution of its founder.
              </p>

              <div className="bg-gray-50 rounded-lg p-5 mt-6">
                <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">Notes</h4>
                <div className="text-sm text-gray-600 space-y-2">
                  <p><span className="font-semibold text-amber-600">(a)</span> Robert Van Voorst, <em>Jesus Outside the New Testament</em> (Eerdmans, 2000), pp. 39&ndash;53, calls this &ldquo;probably the most important reference to Jesus outside the New Testament.&rdquo;</p>
                </div>
              </div>
            </div>

            {/* Pliny the Younger */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <FileText className="w-6 h-6 text-purple-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Pliny the Younger (AD 61 &ndash; c. 113)</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Pliny the Younger was a Roman senator and governor of Bithynia-Pontus (modern-day northern
                Turkey). Around AD 112, he wrote to Emperor Trajan asking how to deal with Christians in
                his province. His letter provides a remarkable window into early Christian worship.
              </p>

              <div className="bg-purple-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-purple-900 mb-3">Letters 10.96</h3>
                <p className="text-purple-800 italic mb-3">
                  &ldquo;They [the Christians] were in the habit of meeting on a certain fixed day before
                  it was light, when they sang in alternate verses a hymn to Christ, as to a god, and
                  bound themselves by a solemn oath not to commit any wicked deeds&hellip; after which it
                  was their custom to depart and to assemble again to partake of food &mdash; but food of
                  an ordinary and innocent kind.&rdquo;
                </p>
                <p className="text-purple-700 text-sm">&mdash; Pliny the Younger, <em>Letters</em>, 10.96 (c. AD 112)</p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                Pliny&rsquo;s letter confirms several key facts: within 80 years of the crucifixion,
                Christians in a Roman province were worshipping Christ &ldquo;as to a god&rdquo;
                (<em>quasi deo</em>), meeting on a fixed day (Sunday), singing hymns, binding themselves
                to moral conduct, and sharing a common meal (the Eucharist).<sup className="text-amber-600 font-semibold cursor-help">(a)</sup> The
                rapid spread of Christianity from Palestine to Asia Minor and the intensity of devotion to
                Christ as divine requires historical explanation.
              </p>

              <div className="bg-gray-50 rounded-lg p-5 mt-6">
                <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">Notes</h4>
                <div className="text-sm text-gray-600 space-y-2">
                  <p><span className="font-semibold text-amber-600">(a)</span> Larry Hurtado, <em>Lord Jesus Christ: Devotion to Jesus in Earliest Christianity</em> (Eerdmans, 2003), argues that this worship of Christ as divine emerged remarkably early &mdash; within the first two decades after the crucifixion &mdash; and demands historical explanation.</p>
                </div>
              </div>
            </div>

            {/* Other Sources */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                  <Globe className="w-6 h-6 text-indigo-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Further Non-Christian Sources</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-indigo-50 p-5 rounded-lg">
                  <h3 className="text-lg font-semibold text-indigo-900 mb-2">Suetonius (c. AD 121)</h3>
                  <p className="text-indigo-800 text-sm leading-relaxed">
                    In <em>Life of Claudius</em> 25.4, Suetonius reports that Emperor Claudius
                    &ldquo;expelled the Jews from Rome, since they were always making disturbances because
                    of Chrestus.&rdquo;<sup className="text-amber-600 font-semibold cursor-help">(a)</sup> Most scholars identify &ldquo;Chrestus&rdquo; as a reference to Christ, indicating disputes
                    in Roman synagogues about Jesus by the late 40s AD &mdash; consistent with Acts 18:2.
                  </p>
                </div>
                <div className="bg-indigo-50 p-5 rounded-lg">
                  <h3 className="text-lg font-semibold text-indigo-900 mb-2">Mara bar Serapion (c. AD 73+)</h3>
                  <p className="text-indigo-800 text-sm leading-relaxed">
                    A Syrian Stoic philosopher, writing from prison to his son, compares the deaths of
                    Socrates, Pythagoras, and &ldquo;the wise king of the Jews&rdquo; whom &ldquo;the Jews
                    executed.&rdquo; He notes that their nation was destroyed shortly after (the fall of
                    Jerusalem in AD 70), and that the &ldquo;wise king&rdquo; lives on through the new
                    laws he established.
                  </p>
                </div>
                <div className="bg-indigo-50 p-5 rounded-lg">
                  <h3 className="text-lg font-semibold text-indigo-900 mb-2">Babylonian Talmud (c. 200&ndash;500)</h3>
                  <p className="text-indigo-800 text-sm leading-relaxed">
                    Sanhedrin 43a records: &ldquo;On the eve of the Passover Yeshu was hanged&hellip; because
                    he practised sorcery and enticed Israel to apostasy.&rdquo;<sup className="text-amber-600 font-semibold cursor-help">(b)</sup> While
                    hostile, this passage independently confirms: a figure called Yeshu (Jesus), who was
                    reputed to work wonders (&ldquo;sorcery&rdquo;), who attracted followers, and who was
                    executed around Passover.
                  </p>
                </div>
                <div className="bg-indigo-50 p-5 rounded-lg">
                  <h3 className="text-lg font-semibold text-indigo-900 mb-2">Lucian of Samosata (c. AD 170)</h3>
                  <p className="text-indigo-800 text-sm leading-relaxed">
                    This satirist mocks Christians for worshipping &ldquo;the man who was crucified in
                    Palestine because he introduced this new cult into the world.&rdquo; He notes their
                    mutual love, contempt for death, willingness to share property, and devotion to their
                    &ldquo;crucified sage&rdquo; and his laws (<em>The Death of Peregrinus</em>, 11&ndash;13).
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-5 mt-6">
                <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">Notes</h4>
                <div className="text-sm text-gray-600 space-y-2">
                  <p><span className="font-semibold text-amber-600">(a)</span> &ldquo;Chrestus&rdquo; was a common misspelling of &ldquo;Christus&rdquo; in pagan Latin sources. Suetonius, <em>Divus Claudius</em>, 25.4. See also Acts 18:2, which records that Aquila and Priscilla had recently come from Rome &ldquo;because Claudius had commanded all the Jews to leave Rome.&rdquo;</p>
                  <p><span className="font-semibold text-amber-600">(b)</span> The dating and authenticity of this passage is debated; some scholars date the core tradition to the Tannaitic period (before AD 200). See Peter Sch&auml;fer, <em>Jesus in the Talmud</em> (Princeton, 2007), pp. 63&ndash;74.</p>
                </div>
              </div>
            </div>

            {/* Sources for this tab */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Sources &amp; Further Reading</h3>
              <ol className="text-sm text-gray-600 space-y-1.5 list-decimal list-inside">
                <li>Josephus, <em>Antiquities of the Jews</em>, Books 18 and 20 (c. AD 93&ndash;94)</li>
                <li>Tacitus, <em>Annals</em>, 15.44 (c. AD 116)</li>
                <li>Pliny the Younger, <em>Letters</em>, 10.96&ndash;97 (c. AD 112)</li>
                <li>Robert Van Voorst, <em>Jesus Outside the New Testament</em> (Eerdmans, 2000)</li>
                <li>F.F. Bruce, <em>Jesus and Christian Origins Outside the New Testament</em> (Hodder &amp; Stoughton, 1974)</li>
                <li>Bart D. Ehrman, <em>Did Jesus Exist? The Historical Argument for Jesus of Nazareth</em> (HarperOne, 2012)</li>
                <li>E.P. Sanders, <em>The Historical Figure of Jesus</em> (Penguin, 1993)</li>
                <li>Larry Hurtado, <em>Lord Jesus Christ: Devotion to Jesus in Earliest Christianity</em> (Eerdmans, 2003)</li>
                <li>Peter Sch&auml;fer, <em>Jesus in the Talmud</em> (Princeton University Press, 2007)</li>
              </ol>
            </div>
          </div>
        )}

        {/* ==================== TAB 2: GOSPEL ACCOUNTS ==================== */}
        {activeTab === 'gospel-accounts' && (
          <div className="space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Four Gospels as Historical Documents</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The four canonical Gospels &mdash; Matthew, Mark, Luke, and John &mdash; are the primary
                sources for the life, teaching, death, and resurrection of Jesus Christ. Written within
                living memory of the events they describe, they belong to the ancient genre of <em>bios</em>
                (biography) and have proven remarkably reliable when tested against archaeological and
                external historical evidence.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">Key Fact</h3>
                <p className="text-amber-800">
                  The New Testament is by far the best-attested document of the ancient world. We possess
                  over 5,800 Greek manuscripts, over 10,000 Latin manuscripts, and over 9,300 manuscripts
                  in other early languages.<sup className="text-amber-600 font-semibold cursor-help">(a)</sup> By
                  comparison, the next best-attested classical work &mdash; Homer&rsquo;s <em>Iliad</em> &mdash;
                  survives in about 1,800 manuscripts, and most classical works survive in fewer than 20.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-5 mt-6">
                <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">Notes</h4>
                <div className="text-sm text-gray-600 space-y-2">
                  <p><span className="font-semibold text-amber-600">(a)</span> The figures come from the Institut f&uuml;r Neutestamentliche Textforschung in M&uuml;nster, Germany, the leading centre for New Testament manuscript cataloguing. See also Daniel B. Wallace, &ldquo;The Number of Textual Variants: An Evangelical Miscount,&rdquo; in <em>Revisiting the Corruption of the New Testament</em> (Kregel, 2011).</p>
                </div>
              </div>
            </div>

            {/* The Four Gospels */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <FileText className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Authorship, Dating &amp; Character</h2>
              </div>

              <div className="space-y-6">
                {/* Mark */}
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-900 mb-3">The Gospel of Mark (c. AD 65&ndash;70)</h3>
                  <p className="text-green-800 leading-relaxed mb-3">
                    The earliest Gospel, traditionally attributed to John Mark, a companion of the Apostle
                    Peter.<sup className="text-amber-600 font-semibold cursor-help">(a)</sup> Mark
                    writes with urgency and vivid detail, emphasising Jesus as the suffering Messiah. His
                    Gospel is the shortest and most action-oriented, using the word &ldquo;immediately&rdquo;
                    (<em>euthys</em>) over 40 times. Papias of Hierapolis (c. AD 130) records that Mark was
                    &ldquo;Peter&rsquo;s interpreter&rdquo; who wrote down accurately, though not in order,
                    what Peter remembered of the Lord&rsquo;s words and deeds.
                  </p>
                  <p className="text-green-800 leading-relaxed">
                    <strong>Key themes:</strong> The Messianic Secret, discipleship through the cross,
                    the humanity and suffering of Christ. Mark&rsquo;s account of the Passion is the most
                    detailed and raw of the four Gospels.
                  </p>
                </div>

                {/* Matthew */}
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-900 mb-3">The Gospel of Matthew (c. AD 70&ndash;85)</h3>
                  <p className="text-blue-800 leading-relaxed mb-3">
                    Traditionally attributed to the Apostle Matthew (Levi), a former tax collector. Matthew
                    writes primarily for a Jewish-Christian audience, presenting Jesus as the fulfilment of
                    the Old Testament. He includes more than 60 explicit quotations from the Hebrew
                    Scriptures, often introduced with the formula &ldquo;this was to fulfil what was spoken
                    by the prophet.&rdquo;
                  </p>
                  <p className="text-blue-800 leading-relaxed">
                    <strong>Key themes:</strong> Jesus as the new Moses, the Kingdom of Heaven, the five
                    great discourses (including the Sermon on the Mount), the Church (<em>ekklesia</em>)
                    founded on Peter (Matt 16:18). Matthew&rsquo;s is the most &ldquo;ecclesial&rdquo; Gospel.
                  </p>
                </div>

                {/* Luke */}
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">The Gospel of Luke (c. AD 75&ndash;85)</h3>
                  <p className="text-purple-800 leading-relaxed mb-3">
                    Written by Luke, a physician and companion of St. Paul (Col 4:14). Luke is the only
                    Gentile author in the New Testament and the most literary of the evangelists. His
                    prologue (Luke 1:1&ndash;4) explicitly states his method: he investigated everything
                    carefully from eyewitnesses and servants of the word, and wrote an orderly account.<sup className="text-amber-600 font-semibold cursor-help">(b)</sup>
                  </p>
                  <p className="text-purple-800 leading-relaxed">
                    <strong>Key themes:</strong> Universal salvation (for Gentiles, women, the poor, sinners),
                    the role of the Holy Spirit, prayer, joy, mercy. Luke alone records the parables of the
                    Good Samaritan and the Prodigal Son. His sequel, the Acts of the Apostles, continues the
                    story of the early Church.
                  </p>
                </div>

                {/* John */}
                <div className="bg-rose-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-rose-900 mb-3">The Gospel of John (c. AD 90&ndash;100)</h3>
                  <p className="text-rose-800 leading-relaxed mb-3">
                    Traditionally attributed to the Apostle John, &ldquo;the disciple whom Jesus loved.&rdquo;
                    John&rsquo;s Gospel is the most theological, opening with the cosmic prologue: &ldquo;In
                    the beginning was the Word, and the Word was with God, and the Word was God&rdquo;
                    (John 1:1). Written later than the Synoptics, John provides supplementary material and a
                    profound meditation on the identity of Christ.
                  </p>
                  <p className="text-rose-800 leading-relaxed">
                    <strong>Key themes:</strong> The seven &ldquo;I AM&rdquo; statements, the seven signs
                    (miracles), the divinity of Christ, the Farewell Discourse (John 13&ndash;17), the role
                    of the Holy Spirit as Paraclete. John makes the highest christological claims explicitly:
                    &ldquo;I and the Father are one&rdquo; (10:30).
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-5 mt-6">
                <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">Notes</h4>
                <div className="text-sm text-gray-600 space-y-2">
                  <p><span className="font-semibold text-amber-600">(a)</span> The testimony of Papias is preserved in Eusebius, <em>Church History</em>, 3.39.15: &ldquo;Mark, having become the interpreter of Peter, wrote down accurately, though not in order, whatsoever he remembered of the things said or done by Christ.&rdquo;</p>
                  <p><span className="font-semibold text-amber-600">(b)</span> Luke 1:1&ndash;4: &ldquo;Since many have undertaken to set down an orderly account of the events that have been fulfilled among us, just as they were handed on to us by those who from the beginning were eyewitnesses and servants of the word, I too decided, after investigating everything carefully from the very first, to write an orderly account for you, most excellent Theophilus.&rdquo;</p>
                </div>
              </div>
            </div>

            {/* Manuscript Evidence */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                  <Scroll className="w-6 h-6 text-indigo-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Manuscript Evidence</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The manuscript tradition of the New Testament is extraordinarily strong. The earliest
                surviving fragment is Papyrus 52 (P52), a portion of John&rsquo;s Gospel dated to c. AD
                125 &mdash; within 30 years of the Gospel&rsquo;s composition. This means we have copies
                closer in time to the originals than for virtually any other ancient text.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-indigo-50 p-5 rounded-lg">
                  <h3 className="text-lg font-semibold text-indigo-900 mb-2">Papyrus 52 (c. AD 125)</h3>
                  <p className="text-indigo-800 text-sm leading-relaxed">
                    A fragment of John 18:31&ndash;33, 37&ndash;38 from the John Rylands Library, Manchester.
                    The earliest known New Testament manuscript. Found in Egypt, it demonstrates that
                    John&rsquo;s Gospel had already spread from Asia Minor to Egypt within decades of
                    composition.
                  </p>
                </div>
                <div className="bg-indigo-50 p-5 rounded-lg">
                  <h3 className="text-lg font-semibold text-indigo-900 mb-2">Papyrus 66 (c. AD 200)</h3>
                  <p className="text-indigo-800 text-sm leading-relaxed">
                    Nearly complete manuscript of John&rsquo;s Gospel from the Bodmer collection.
                    Contains John 1:1&ndash;6:11, 6:35&ndash;14:26, and fragments of subsequent chapters.
                    One of the most important early witnesses to the text of the Fourth Gospel.
                  </p>
                </div>
                <div className="bg-indigo-50 p-5 rounded-lg">
                  <h3 className="text-lg font-semibold text-indigo-900 mb-2">Papyrus 75 (c. AD 175&ndash;225)</h3>
                  <p className="text-indigo-800 text-sm leading-relaxed">
                    Contains most of Luke and John. Its text is remarkably close to Codex Vaticanus (4th
                    century), demonstrating the stability of the manuscript tradition over centuries.
                  </p>
                </div>
                <div className="bg-indigo-50 p-5 rounded-lg">
                  <h3 className="text-lg font-semibold text-indigo-900 mb-2">Great Uncials (4th&ndash;5th century)</h3>
                  <p className="text-indigo-800 text-sm leading-relaxed">
                    Codex Sinaiticus (c. 330&ndash;360) and Codex Vaticanus (c. 325&ndash;350) are the
                    earliest complete or near-complete Bibles. They were produced within 300 years of the
                    originals &mdash; an extraordinarily small gap by ancient standards.
                  </p>
                </div>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">The Synoptic Problem</h3>
                <p className="text-amber-800 leading-relaxed mb-3">
                  Matthew, Mark, and Luke share so much material that they are called the &ldquo;Synoptic&rdquo;
                  Gospels (from Greek <em>synoptikos</em>, &ldquo;seeing together&rdquo;). The dominant scholarly
                  view is that Mark was written first, and that Matthew and Luke independently used Mark plus a
                  now-lost collection of sayings called &ldquo;Q&rdquo; (from German <em>Quelle</em>, &ldquo;source&rdquo;).
                </p>
                <p className="text-amber-800 leading-relaxed">
                  Far from undermining reliability, the Synoptic relationships demonstrate that the evangelists
                  worked with established traditions and eyewitness accounts, transmitting the same core events
                  while each shaping the material for their particular audience and theological emphasis.
                </p>
              </div>
            </div>

            {/* Sources for this tab */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Sources &amp; Further Reading</h3>
              <ol className="text-sm text-gray-600 space-y-1.5 list-decimal list-inside">
                <li>Richard Bauckham, <em>Jesus and the Eyewitnesses: The Gospels as Eyewitness Testimony</em> (Eerdmans, 2006; 2nd ed. 2017)</li>
                <li>Craig Keener, <em>The Historical Jesus of the Gospels</em> (Eerdmans, 2009)</li>
                <li>Bruce Metzger &amp; Bart Ehrman, <em>The Text of the New Testament</em>, 4th edition (Oxford, 2005)</li>
                <li>Martin Hengel, <em>The Four Gospels and the One Gospel of Jesus Christ</em> (SCM Press, 2000)</li>
                <li>Craig Blomberg, <em>The Historical Reliability of the Gospels</em>, 2nd edition (IVP Academic, 2007)</li>
                <li>Eusebius of Caesarea, <em>Church History</em>, 3.39 (on Papias&rsquo;s testimony about Mark and Matthew)</li>
                <li><em>Dei Verbum</em> (Vatican II, 1965), chapter 5: &ldquo;The New Testament&rdquo;</li>
              </ol>
            </div>
          </div>
        )}

        {/* ==================== TAB 3: BIRTH & CHILDHOOD ==================== */}
        {activeTab === 'birth-childhood' && (
          <div className="space-y-8">
            {/* The Annunciation */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Annunciation &amp; Incarnation</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The story of Jesus begins not in Bethlehem but in Nazareth, a small village in Galilee,
                where the angel Gabriel appeared to a young Jewish woman named Mary. She was betrothed
                to Joseph, a descendant of King David, but they had not yet lived together. The angel
                announced that she would conceive by the power of the Holy Spirit and bear a son who
                would be called &ldquo;the Son of the Most High&rdquo; (Luke 1:32).
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">The Annunciation (Luke 1:26&ndash;38)</h3>
                <p className="text-blue-800 italic mb-3">
                  &ldquo;The angel said to her, &lsquo;Do not be afraid, Mary; you have found favour with
                  God. You will conceive and give birth to a son, and you are to call him Jesus. He will
                  be great and will be called the Son of the Most High. The Lord God will give him the
                  throne of his father David, and he will reign over Jacob&rsquo;s descendants for ever;
                  his kingdom will never end.&rsquo;&rdquo;
                </p>
                <p className="text-blue-700 text-sm">&mdash; <em>Luke 1:30&ndash;33</em></p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                Mary&rsquo;s response &mdash; &ldquo;Let it be done to me according to your word&rdquo;
                (Luke 1:38) &mdash; is one of the most profound acts of faith in all of Scripture. The
                Church Fathers saw in her <em>fiat</em> the reversal of Eve&rsquo;s disobedience:
                where Eve said &ldquo;no&rdquo; to God, Mary said &ldquo;yes,&rdquo; and through that
                &ldquo;yes,&rdquo; the Word became flesh.<sup className="text-amber-600 font-semibold cursor-help">(a)</sup>
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                The doctrine of the virginal conception of Jesus is attested independently by both Matthew
                (1:18&ndash;25) and Luke (1:26&ndash;38) &mdash; two authors who drew on different
                sources.<sup className="text-amber-600 font-semibold cursor-help">(b)</sup> Joseph,
                described as a &ldquo;righteous man&rdquo; (Matt 1:19), initially planned to divorce
                Mary quietly until an angel appeared to him in a dream confirming that her child was
                conceived by the Holy Spirit and would &ldquo;save his people from their sins&rdquo;
                (Matt 1:21).
              </p>

              <div className="bg-gray-50 rounded-lg p-5 mt-6">
                <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">Notes</h4>
                <div className="text-sm text-gray-600 space-y-2">
                  <p><span className="font-semibold text-amber-600">(a)</span> St. Irenaeus of Lyon, <em>Against Heresies</em>, 3.22.4 (c. AD 180): &ldquo;The knot of Eve&rsquo;s disobedience was loosed by the obedience of Mary. For what the virgin Eve had bound fast through unbelief, this did the virgin Mary set free through faith.&rdquo;</p>
                  <p><span className="font-semibold text-amber-600">(b)</span> Raymond E. Brown, <em>The Birth of the Messiah</em> (Doubleday, 1993), pp. 517&ndash;533, argues that the independent attestation of the virginal conception in two separate sources strengthens the case for its historical basis.</p>
                </div>
              </div>
            </div>

            {/* The Nativity */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Nativity: When and Where</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Both Matthew and Luke agree that Jesus was born in Bethlehem of Judea during the reign of
                King Herod the Great.<sup className="text-amber-600 font-semibold cursor-help">(a)</sup> Since
                Herod died in 4 BC (by our reckoning), Jesus was likely born between 6 and 4 BC. The
                discrepancy with our calendar arose from a 6th-century miscalculation by Dionysius Exiguus,
                the monk who devised the AD dating system.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-amber-50 p-5 rounded-lg">
                  <h3 className="text-lg font-semibold text-amber-900 mb-2">Bethlehem</h3>
                  <p className="text-amber-800 text-sm leading-relaxed">
                    A small town about 10 km south of Jerusalem, the ancestral home of King David.
                    The prophet Micah had foretold: &ldquo;But you, Bethlehem Ephrathah, though you are
                    small among the clans of Judah, out of you will come for me one who will be ruler over
                    Israel&rdquo; (Micah 5:2). The Church of the Nativity, built by Emperor Constantine in
                    the 4th century over a cave venerated since the 2nd century, marks the traditional site.
                  </p>
                </div>
                <div className="bg-amber-50 p-5 rounded-lg">
                  <h3 className="text-lg font-semibold text-amber-900 mb-2">The Census</h3>
                  <p className="text-amber-800 text-sm leading-relaxed">
                    Luke 2:1&ndash;2 records that a census under Augustus brought Joseph and Mary to
                    Bethlehem. While the exact census has been debated, Roman provincial censuses were common
                    and periodic.<sup className="text-amber-600 font-semibold cursor-help">(b)</sup> Luke&rsquo;s
                    mention of Quirinius as governor likely refers to an earlier administrative role before
                    his better-known governorship in AD 6.
                  </p>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-green-900 mb-3">The Magi and the Star</h3>
                <p className="text-green-800 leading-relaxed mb-3">
                  Matthew alone records the visit of the Magi (&ldquo;wise men&rdquo;) from the East, guided
                  by a star. These were likely astrologer-scholars from Persia or Babylon. Their gifts of gold,
                  frankincense, and myrrh carried symbolic meaning: gold for a king, frankincense for God,
                  myrrh for one who would die.<sup className="text-amber-600 font-semibold cursor-help">(c)</sup>
                </p>
                <p className="text-green-800 leading-relaxed">
                  Various astronomical explanations for the &ldquo;Star of Bethlehem&rdquo; have been proposed,
                  including a conjunction of Jupiter and Saturn in 7 BC, a nova recorded by Chinese astronomers
                  in 5 BC, or a comet. Whether natural or supernatural, the Magi&rsquo;s journey symbolises the
                  Gentile world recognising the Jewish Messiah.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-5 mt-6">
                <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">Notes</h4>
                <div className="text-sm text-gray-600 space-y-2">
                  <p><span className="font-semibold text-amber-600">(a)</span> Herod the Great died in the spring of 4 BC. See Harold W. Hoehner, <em>Chronological Aspects of the Life of Christ</em> (Zondervan, 1977), pp. 11&ndash;27.</p>
                  <p><span className="font-semibold text-amber-600">(b)</span> For a defence of Luke&rsquo;s accuracy on the census, see John McRay, <em>Archaeology and the New Testament</em> (Baker Academic, 1991), pp. 153&ndash;157. Census records from Roman Egypt show a 14-year cycle of provincial enrolments.</p>
                  <p><span className="font-semibold text-amber-600">(c)</span> St. Irenaeus, <em>Against Heresies</em>, 3.9.2; Origen, <em>Against Celsus</em>, 1.60.</p>
                </div>
              </div>
            </div>

            {/* Childhood */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-green-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Hidden Years: Nazareth</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                After the flight to Egypt to escape Herod&rsquo;s slaughter of the innocents (Matt
                2:13&ndash;18) and their return after Herod&rsquo;s death, the Holy Family settled in
                Nazareth of Galilee. The Gospels are largely silent about the years between infancy and
                the beginning of the public ministry &mdash; a period the Church calls &ldquo;the hidden
                life&rdquo; of Jesus.
              </p>

              <div className="bg-purple-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-purple-900 mb-3">The Finding in the Temple (Luke 2:41&ndash;52)</h3>
                <p className="text-purple-800 italic mb-3">
                  &ldquo;After three days they found him in the temple courts, sitting among the teachers,
                  listening to them and asking them questions. Everyone who heard him was amazed at his
                  understanding and his answers. When his parents saw him, they were astonished. His mother
                  said to him, &lsquo;Son, why have you treated us like this? Your father and I have been
                  anxiously searching for you.&rsquo; &lsquo;Why were you searching for me?&rsquo; he asked.
                  &lsquo;Didn&rsquo;t you know I had to be in my Father&rsquo;s house?&rsquo;&rdquo;
                </p>
                <p className="text-purple-700 text-sm">&mdash; <em>Luke 2:46&ndash;49</em></p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                This is the only canonical account of Jesus between infancy and adulthood. At age twelve,
                the customary age for a Jewish boy to begin learning the commandments, Jesus already
                displayed extraordinary wisdom and a profound sense of divine sonship &mdash; &ldquo;my
                Father&rsquo;s house.&rdquo; Yet Luke immediately adds: &ldquo;He went down to Nazareth
                with them and was obedient to them&rdquo; (Luke 2:51).
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                Jesus grew up in Nazareth, an insignificant village of perhaps 400&ndash;500 people.<sup className="text-amber-600 font-semibold cursor-help">(a)</sup> He
                learned the trade of a <em>tekton</em> (Mark 6:3) &mdash; a craftsman who worked in wood,
                stone, and possibly construction &mdash; from Joseph. He would have spoken Aramaic as his
                mother tongue, likely knew Hebrew from synagogue worship and Scripture study, and may have
                known some Greek, the common language of commerce in Galilee.
              </p>

              <div className="bg-gray-50 rounded-lg p-5 mt-6">
                <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">Notes</h4>
                <div className="text-sm text-gray-600 space-y-2">
                  <p><span className="font-semibold text-amber-600">(a)</span> Archaeological excavations at Nazareth in the early 2000s, led by Yardenna Alexandre of the Israel Antiquities Authority, revealed first-century houses, agricultural terraces, and a small wine press. The site confirms a modest Jewish village, consistent with the Gospels&rsquo; portrayal. See &ldquo;Archaeologists find first-century Nazareth dwelling,&rdquo; <em>Biblical Archaeology Review</em>, March 2010.</p>
                </div>
              </div>
            </div>

            {/* Sources for this tab */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Sources &amp; Further Reading</h3>
              <ol className="text-sm text-gray-600 space-y-1.5 list-decimal list-inside">
                <li>Raymond E. Brown, <em>The Birth of the Messiah</em>, revised edition (Doubleday, 1993)</li>
                <li>Harold W. Hoehner, <em>Chronological Aspects of the Life of Christ</em> (Zondervan, 1977)</li>
                <li>John McRay, <em>Archaeology and the New Testament</em> (Baker Academic, 1991)</li>
                <li>Jonathan L. Reed, <em>Archaeology and the Galilean Jesus</em> (Trinity Press, 2000)</li>
                <li><em>Catechism of the Catholic Church</em>, 422&ndash;534 (&ldquo;I Believe in Jesus Christ, the Only Son of God&rdquo;)</li>
              </ol>
            </div>
          </div>
        )}

        {/* ==================== TAB 4: PUBLIC MINISTRY ==================== */}
        {activeTab === 'public-ministry' && (
          <div className="space-y-8">
            {/* Baptism */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Cross className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Baptism by John</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The public ministry of Jesus began with his baptism by John the Baptist in the River Jordan,
                around AD 28&ndash;29. This event is recorded in all four Gospels and is considered one of
                the most historically certain facts about Jesus.<sup className="text-amber-600 font-semibold cursor-help">(a)</sup> John
                was a prophetic figure who preached repentance and the coming of the Kingdom of God, drawing
                large crowds to the wilderness of Judea.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">The Baptism (Mark 1:9&ndash;11)</h3>
                <p className="text-blue-800 italic mb-3">
                  &ldquo;At that time Jesus came from Nazareth in Galilee and was baptised by John in the
                  Jordan. Just as Jesus was coming up out of the water, he saw heaven being torn open and
                  the Spirit descending on him like a dove. And a voice came from heaven: &lsquo;You are
                  my Son, whom I love; with you I am well pleased.&rsquo;&rdquo;
                </p>
                <p className="text-blue-700 text-sm">&mdash; <em>Mark 1:9&ndash;11</em></p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                The baptism is widely accepted as historical because of the &ldquo;criterion of
                embarrassment&rdquo;: it would have been awkward for early Christians to invent a story
                in which the sinless Son of God underwent a baptism of repentance. The fact that all four
                evangelists include it, and that Matthew explicitly addresses the difficulty (Matt 3:14&ndash;15),
                points to authentic tradition.<sup className="text-amber-600 font-semibold cursor-help">(b)</sup>
              </p>

              <div className="bg-gray-50 rounded-lg p-5 mt-6">
                <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">Notes</h4>
                <div className="text-sm text-gray-600 space-y-2">
                  <p><span className="font-semibold text-amber-600">(a)</span> John P. Meier, <em>A Marginal Jew: Rethinking the Historical Jesus</em>, Vol. 2 (Doubleday, 1994), pp. 100&ndash;116, rates the baptism as historically certain by multiple criteria.</p>
                  <p><span className="font-semibold text-amber-600">(b)</span> The &ldquo;criterion of embarrassment&rdquo; states that early Christians would not have invented traditions that created theological difficulties for them. Jesus being baptised by John implied subordination and need for repentance &mdash; neither of which early Christianity wished to assert.</p>
                </div>
              </div>
            </div>

            {/* Teaching & Kingdom */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Crown className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Kingdom of God</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The central theme of Jesus&rsquo;s teaching was the Kingdom of God (<em>basileia tou
                theou</em>). Mark summarises his inaugural preaching: &ldquo;The time has come. The Kingdom
                of God has come near. Repent and believe the good news!&rdquo; (Mark 1:15). Jesus
                proclaimed that in his person and ministry, God&rsquo;s decisive rule was breaking into
                history.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">The Parables</h3>
                <p className="text-amber-800 leading-relaxed mb-3">
                  Jesus taught primarily through parables &mdash; vivid, memorable stories drawn from
                  everyday life that revealed the nature of God&rsquo;s Kingdom. Over 40 parables are
                  recorded in the Synoptic Gospels. Among the most famous:
                </p>
                <ul className="text-amber-800 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="font-bold mt-0.5">&bull;</span>
                    <span><strong>The Prodigal Son</strong> (Luke 15:11&ndash;32) &mdash; God&rsquo;s boundless mercy and joy at the return of sinners</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold mt-0.5">&bull;</span>
                    <span><strong>The Good Samaritan</strong> (Luke 10:25&ndash;37) &mdash; love of neighbour transcends ethnic and religious boundaries</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold mt-0.5">&bull;</span>
                    <span><strong>The Sower</strong> (Mark 4:1&ndash;20) &mdash; the word of God falls on different hearts with different results</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold mt-0.5">&bull;</span>
                    <span><strong>The Mustard Seed</strong> (Mark 4:30&ndash;32) &mdash; the Kingdom begins small but grows to encompass the whole world</span>
                  </li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                Jesus&rsquo;s teaching was recognised as carrying unique authority. &ldquo;The crowds were
                amazed at his teaching, because he taught as one who had authority, and not as their
                teachers of the law&rdquo; (Matt 7:28&ndash;29). Unlike the scribes, who cited previous
                rabbinical authorities, Jesus spoke with the direct authority of God: &ldquo;You have
                heard that it was said&hellip; But I tell you&hellip;&rdquo; (Matt 5:21&ndash;22).
              </p>
            </div>

            {/* Miracles */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Flame className="w-6 h-6 text-green-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Miracles</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The Gospels record approximately 37 specific miracles performed by Jesus, plus numerous
                summary statements of healing activity. Historians of all persuasions acknowledge that
                Jesus was known as a healer and wonder-worker &mdash; this is attested not only by the
                Gospels but by hostile sources (the Talmud calls it &ldquo;sorcery&rdquo;; Celsus, a
                2nd-century pagan critic, attributes it to magic learned in Egypt).<sup className="text-amber-600 font-semibold cursor-help">(a)</sup>
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-green-50 p-5 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-900 mb-2">Healings</h3>
                  <p className="text-green-800 text-sm leading-relaxed">
                    Jesus healed the blind, the deaf, the paralysed, lepers, and those with various
                    diseases. He cast out demons. These healings were signs that the Kingdom of God was
                    present: &ldquo;If I drive out demons by the finger of God, then the Kingdom of God
                    has come upon you&rdquo; (Luke 11:20).
                  </p>
                </div>
                <div className="bg-green-50 p-5 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-900 mb-2">Nature Miracles</h3>
                  <p className="text-green-800 text-sm leading-relaxed">
                    Jesus calmed storms, walked on water, multiplied loaves and fish, and turned water
                    into wine at the wedding at Cana. These demonstrations of power over nature pointed
                    to his divine identity &mdash; in the Old Testament, only God commands the seas and
                    provides bread from heaven.
                  </p>
                </div>
                <div className="bg-green-50 p-5 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-900 mb-2">Raisings from the Dead</h3>
                  <p className="text-green-800 text-sm leading-relaxed">
                    Three individuals are recorded as raised from the dead during Jesus&rsquo;s ministry:
                    the daughter of Jairus (Mark 5:21&ndash;43), the widow&rsquo;s son at Nain (Luke
                    7:11&ndash;17), and Lazarus of Bethany (John 11:1&ndash;44). These foreshadowed the
                    supreme miracle: Jesus&rsquo;s own resurrection.
                  </p>
                </div>
                <div className="bg-green-50 p-5 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-900 mb-2">The Transfiguration</h3>
                  <p className="text-green-800 text-sm leading-relaxed">
                    On a high mountain (traditionally Mount Tabor), Jesus was transfigured before Peter,
                    James, and John &mdash; his face shone like the sun and his clothes became dazzling
                    white. Moses and Elijah appeared, representing the Law and the Prophets. A voice from
                    heaven declared: &ldquo;This is my beloved Son&rdquo; (Matt 17:1&ndash;8).
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-5 mt-6">
                <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">Notes</h4>
                <div className="text-sm text-gray-600 space-y-2">
                  <p><span className="font-semibold text-amber-600">(a)</span> John P. Meier, <em>A Marginal Jew</em>, Vol. 2 (Doubleday, 1994), pp. 617&ndash;631: &ldquo;The miracle tradition is so woven into every strand of Gospel material that to remove it would be to destroy the fabric of the narrative.&rdquo; Even the sceptical Jesus Seminar acknowledged that Jesus was a healer.</p>
                </div>
              </div>
            </div>

            {/* The Disciples */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-purple-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Twelve Apostles</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Jesus chose twelve men as his closest disciples &mdash; a number deliberately echoing the
                twelve tribes of Israel, signalling the reconstitution of God&rsquo;s people. They left
                their families and livelihoods to follow him, witnessed his teaching and miracles, and
                were commissioned to continue his mission after his ascension.
              </p>

              <div className="bg-purple-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-purple-900 mb-3">Peter&rsquo;s Confession (Matthew 16:13&ndash;19)</h3>
                <p className="text-purple-800 italic mb-3">
                  &ldquo;Jesus asked, &lsquo;Who do you say I am?&rsquo; Simon Peter answered, &lsquo;You
                  are the Christ, the Son of the living God.&rsquo; Jesus replied, &lsquo;Blessed are you,
                  Simon son of Jonah, for this was not revealed to you by flesh and blood, but by my Father
                  in heaven. And I tell you that you are Peter, and on this rock I will build my church,
                  and the gates of Hades will not overcome it.&rsquo;&rdquo;
                </p>
                <p className="text-purple-700 text-sm">&mdash; <em>Matthew 16:15&ndash;18</em></p>
              </div>

              <p className="text-gray-700 leading-relaxed">
                This confession at Caesarea Philippi is a turning point in the Gospels. Peter &mdash;
                speaking for the Twelve &mdash; declares Jesus to be the Messiah and the Son of the living
                God. Jesus responds by establishing Peter as the foundation stone of his Church, giving
                him the &ldquo;keys of the kingdom of heaven&rdquo; (Matt 16:19). Catholics see in this
                passage the institution of the papacy &mdash; an office that has continued in unbroken
                succession for nearly two thousand years.
              </p>
            </div>

            {/* Sources for this tab */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Sources &amp; Further Reading</h3>
              <ol className="text-sm text-gray-600 space-y-1.5 list-decimal list-inside">
                <li>John P. Meier, <em>A Marginal Jew: Rethinking the Historical Jesus</em>, Vols. 1&ndash;5 (Doubleday/Yale, 1991&ndash;2016)</li>
                <li>N.T. Wright, <em>Jesus and the Victory of God</em> (Fortress Press, 1996)</li>
                <li>Craig Keener, <em>Miracles: The Credibility of the New Testament Accounts</em>, 2 vols. (Baker Academic, 2011)</li>
                <li>Pope Benedict XVI, <em>Jesus of Nazareth</em>, 3 vols. (Doubleday/Ignatius, 2007&ndash;2012)</li>
                <li><em>Catechism of the Catholic Church</em>, 535&ndash;570 (&ldquo;The Mysteries of Jesus&rsquo;s Public Life&rdquo;)</li>
              </ol>
            </div>
          </div>
        )}

        {/* ==================== TAB 5: PASSION & DEATH ==================== */}
        {activeTab === 'passion-death' && (
          <div className="space-y-8">
            {/* The Last Supper */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Church className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Last Supper</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                On the night before his death, Jesus gathered with the Twelve in an upper room in Jerusalem
                to celebrate the Passover meal. During this supper, he took bread and wine, gave thanks, and
                declared them to be his body and blood &mdash; instituting the Eucharist, the central
                sacrament of the Catholic faith. &ldquo;Do this in remembrance of me&rdquo; (Luke 22:19).
              </p>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">The Institution of the Eucharist</h3>
                <p className="text-amber-800 italic mb-3">
                  &ldquo;While they were eating, Jesus took bread, and when he had given thanks, he broke it
                  and gave it to his disciples, saying, &lsquo;Take and eat; this is my body.&rsquo; Then he
                  took a cup, and when he had given thanks, he gave it to them, saying, &lsquo;Drink from it,
                  all of you. This is my blood of the covenant, which is poured out for many for the
                  forgiveness of sins.&rsquo;&rdquo;
                </p>
                <p className="text-amber-700 text-sm">&mdash; <em>Matthew 26:26&ndash;28</em></p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                At the same supper, Jesus washed the feet of his disciples (John 13:1&ndash;17) &mdash; an
                act of radical humility that established the model of servant leadership for all Christian
                ministry. He also delivered the Farewell Discourse (John 13&ndash;17), his most intimate
                teaching, including the new commandment: &ldquo;Love one another as I have loved you&rdquo;
                (John 13:34), and his High Priestly Prayer for the unity of all believers (John 17).
              </p>
            </div>

            {/* Gethsemane & Arrest */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-green-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Gethsemane &amp; the Arrest</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                After the supper, Jesus led his disciples to the Garden of Gethsemane on the Mount of Olives.
                There he prayed in agony: &ldquo;Father, if you are willing, take this cup from me; yet not
                my will, but yours be done&rdquo; (Luke 22:42). Luke, the physician, records that &ldquo;his
                sweat was like drops of blood falling to the ground&rdquo; (Luke 22:44) &mdash; a condition
                known in medical literature as hematidrosis, caused by extreme stress.<sup className="text-amber-600 font-semibold cursor-help">(a)</sup>
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                Judas Iscariot, one of the Twelve, arrived with an armed crowd and identified Jesus with a
                kiss. Jesus was arrested and taken first to the house of the high priest. Peter followed at a
                distance but denied knowing Jesus three times before the cock crowed &mdash; exactly as Jesus
                had predicted (Mark 14:66&ndash;72).
              </p>

              <div className="bg-gray-50 rounded-lg p-5 mt-6">
                <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">Notes</h4>
                <div className="text-sm text-gray-600 space-y-2">
                  <p><span className="font-semibold text-amber-600">(a)</span> Hematidrosis (sweating blood) is a rare but documented medical condition associated with extreme psychological stress. See Frederick T. Zugibe, <em>The Crucifixion of Jesus: A Forensic Inquiry</em> (M. Evans, 2005), pp. 8&ndash;11.</p>
                </div>
              </div>
            </div>

            {/* Trial & Crucifixion */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <Cross className="w-6 h-6 text-red-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Trial, Crucifixion &amp; Burial</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Jesus was tried before the Sanhedrin (the Jewish supreme court) and then before the Roman
                prefect Pontius Pilate. The charge before the Sanhedrin was blasphemy &mdash; Jesus had
                affirmed that he was the Christ, the Son of the Blessed One (Mark 14:61&ndash;64). Before
                Pilate, the charge was political: claiming to be &ldquo;King of the Jews&rdquo; (Mark 15:2).
              </p>

              <div className="bg-red-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-red-900 mb-3">The Crucifixion</h3>
                <p className="text-red-800 leading-relaxed mb-3">
                  Jesus was scourged, crowned with thorns, and crucified at Golgotha (&ldquo;the Place
                  of the Skull&rdquo;) outside Jerusalem. Crucifixion was the most brutal form of execution
                  in the Roman world &mdash; reserved for slaves, rebels, and the worst criminals. The
                  victim was nailed or tied to a wooden cross and left to die of asphyxiation, shock, and
                  exposure, a process that could take hours or days.
                </p>
                <p className="text-red-800 leading-relaxed">
                  The Gospels record seven last words of Jesus from the Cross, including &ldquo;Father,
                  forgive them, for they do not know what they are doing&rdquo; (Luke 23:34) and &ldquo;It
                  is finished&rdquo; (John 19:30). He died on a Friday afternoon, probably on April 7,
                  AD 30, or April 3, AD 33.<sup className="text-amber-600 font-semibold cursor-help">(a)</sup>
                </p>
              </div>

              <div className="bg-indigo-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-indigo-900 mb-3">Archaeological Corroboration</h3>
                <p className="text-indigo-800 leading-relaxed mb-3">
                  The historicity of the crucifixion narrative is supported by multiple lines of archaeological
                  evidence:
                </p>
                <ul className="text-indigo-800 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="font-bold mt-0.5">&bull;</span>
                    <span><strong>The Pilate Stone</strong> (discovered 1961 at Caesarea Maritima) &mdash; a limestone inscription bearing the name &ldquo;Pontius Pilatus, Prefect of Judea,&rdquo; confirming his historical existence and title.<sup className="text-amber-600 font-semibold cursor-help">(b)</sup></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold mt-0.5">&bull;</span>
                    <span><strong>The Crucified Man of Giv&rsquo;at ha-Mivtar</strong> (discovered 1968) &mdash; the only known archaeological remains of a crucified person from the Roman period. An iron nail was still embedded through the heel bone, confirming the method described in the Gospels.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold mt-0.5">&bull;</span>
                    <span><strong>The Church of the Holy Sepulchre</strong> &mdash; archaeological evidence confirms this church stands over an ancient quarry and tomb area outside the first-century city walls, consistent with the Gospel accounts of the crucifixion and burial site.</span>
                  </li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                After Jesus died, Joseph of Arimathea, a member of the Sanhedrin who had not consented to
                the decision against Jesus, requested the body from Pilate and placed it in his own new
                rock-hewn tomb (Matt 27:57&ndash;60). A large stone was rolled across the entrance.
                Nicodemus brought spices for the burial (John 19:39&ndash;40). The tomb was sealed and
                a guard posted (Matt 27:62&ndash;66).
              </p>

              <div className="bg-gray-50 rounded-lg p-5 mt-6">
                <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">Notes</h4>
                <div className="text-sm text-gray-600 space-y-2">
                  <p><span className="font-semibold text-amber-600">(a)</span> The two most commonly proposed dates are April 7, AD 30 and April 3, AD 33, based on astronomical calculations of when Passover (Nisan 14) fell on a Friday during Pilate&rsquo;s prefecture. See Colin J. Humphreys, <em>The Mystery of the Last Supper</em> (Cambridge, 2011).</p>
                  <p><span className="font-semibold text-amber-600">(b)</span> The Pilate Stone reads in part: &ldquo;[...]S TIBERIEUM [...PON]TIUS PILATUS [...PRAEF]ECTUS IUDA[EAE].&rdquo; It is now housed in the Israel Museum, Jerusalem.</p>
                </div>
              </div>
            </div>

            {/* Cross-link to Resurrection */}
            <div className="bg-indigo-50 border border-indigo-200 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-indigo-900 mb-2">Continue Reading</h3>
              <p className="text-indigo-800 text-sm mb-4">
                The story does not end at the tomb. On the third day, the crucified Jesus rose bodily from
                the dead &mdash; the event that transformed a band of frightened disciples into fearless
                witnesses who changed the world.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/history/resurrection"
                  className="inline-flex items-center gap-2 text-indigo-700 hover:text-indigo-900 font-medium"
                >
                  <ArrowRight className="w-4 h-4" />
                  The Resurrection &mdash; Historical Evidence &amp; Significance
                </Link>
              </div>
            </div>

            {/* Sources for this tab */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Sources &amp; Further Reading</h3>
              <ol className="text-sm text-gray-600 space-y-1.5 list-decimal list-inside">
                <li>Raymond E. Brown, <em>The Death of the Messiah</em>, 2 vols. (Doubleday, 1994)</li>
                <li>Martin Hengel, <em>Crucifixion in the Ancient World and the Folly of the Message of the Cross</em> (Fortress, 1977)</li>
                <li>Frederick T. Zugibe, <em>The Crucifixion of Jesus: A Forensic Inquiry</em> (M. Evans, 2005)</li>
                <li>Colin J. Humphreys, <em>The Mystery of the Last Supper</em> (Cambridge University Press, 2011)</li>
                <li>Jack Finegan, <em>The Archaeology of the New Testament</em>, revised edition (Princeton, 1992)</li>
                <li><em>Catechism of the Catholic Church</em>, 571&ndash;637 (&ldquo;Jesus Christ Suffered under Pontius Pilate, Was Crucified, Died, and Was Buried&rdquo;)</li>
              </ol>
            </div>
          </div>
        )}

        {/* ==================== TAB 6: FIRST-CENTURY CONTEXT ==================== */}
        {activeTab === 'first-century-context' && (
          <div className="space-y-8">
            {/* Roman Palestine */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Globe className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Roman Palestine</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                To understand Jesus, we must understand his world. He was born into a Jewish society under
                Roman occupation, in a land seething with political tension, messianic expectation, and
                religious diversity. The land of Israel in the first century was a crossroads of cultures
                &mdash; Jewish, Greek, and Roman &mdash; and the tensions between them shaped the events
                of the Gospel.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-amber-50 p-5 rounded-lg">
                  <h3 className="text-lg font-semibold text-amber-900 mb-2">The Herodian Dynasty</h3>
                  <p className="text-amber-800 text-sm leading-relaxed">
                    Herod the Great (37&ndash;4 BC) was a client king of Rome who rebuilt the Jerusalem
                    Temple on a magnificent scale but was notorious for brutality and paranoia. After his
                    death, his kingdom was divided among his sons: Archelaus ruled Judea (until AD 6, when
                    Rome imposed direct rule), Herod Antipas ruled Galilee and Perea (the &ldquo;Herod&rdquo;
                    who executed John the Baptist), and Philip ruled territories to the northeast.
                  </p>
                </div>
                <div className="bg-amber-50 p-5 rounded-lg">
                  <h3 className="text-lg font-semibold text-amber-900 mb-2">Roman Prefects</h3>
                  <p className="text-amber-800 text-sm leading-relaxed">
                    From AD 6, Judea was governed by Roman prefects (later procurators), of whom Pontius
                    Pilate (AD 26&ndash;36) is the most famous. The prefect commanded Roman troops, collected
                    taxes, and held the power of life and death. He normally resided in Caesarea on the coast
                    but came to Jerusalem during major festivals to maintain order.
                  </p>
                </div>
              </div>
            </div>

            {/* Religious Groups */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Jewish Religious Groups</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                First-century Judaism was not monolithic. Several distinct groups competed for influence,
                each with different theological emphases and approaches to the Roman occupation. Jesus
                interacted with all of them, and his teaching often stood in creative tension with each.
              </p>

              <div className="space-y-4 mb-6">
                <div className="bg-blue-50 p-5 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Pharisees</h3>
                  <p className="text-blue-800 text-sm leading-relaxed">
                    The most popular and influential group among ordinary Jews. They believed in the
                    resurrection of the dead, angels, and the binding authority of the oral law (the
                    &ldquo;traditions of the elders&rdquo;). Jesus shared several beliefs with the Pharisees
                    (resurrection, afterlife, the importance of the whole Torah) but clashed with them over
                    legalism, hypocrisy, and their interpretations of Sabbath and purity laws. Pharisaism
                    survived the destruction of the Temple in AD 70 and became the foundation of rabbinic
                    Judaism.
                  </p>
                </div>
                <div className="bg-green-50 p-5 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-900 mb-2">Sadducees</h3>
                  <p className="text-green-800 text-sm leading-relaxed">
                    The priestly aristocracy who controlled the Temple. They accepted only the written Torah
                    (the five books of Moses) as authoritative, denied the resurrection of the dead and the
                    existence of angels, and cooperated with Rome to maintain their privileged position. The
                    high priest who presided over Jesus&rsquo;s trial, Caiaphas, was a Sadducee. The group
                    disappeared after the Temple&rsquo;s destruction in AD 70.
                  </p>
                </div>
                <div className="bg-purple-50 p-5 rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-900 mb-2">Essenes</h3>
                  <p className="text-purple-800 text-sm leading-relaxed">
                    A separatist group who withdrew from mainstream Jewish life, considering the Temple
                    establishment corrupt. Most scholars identify them with the community that produced the
                    Dead Sea Scrolls at Qumran.<sup className="text-amber-600 font-semibold cursor-help">(a)</sup> They practised
                    strict purity, communal living, and apocalyptic expectation. While the Gospels do not
                    mention the Essenes directly, their writings illuminate the messianic expectations of
                    the era.
                  </p>
                </div>
                <div className="bg-red-50 p-5 rounded-lg">
                  <h3 className="text-lg font-semibold text-red-900 mb-2">Zealots</h3>
                  <p className="text-red-800 text-sm leading-relaxed">
                    Militant nationalists who sought to overthrow Roman rule by force. They believed that
                    God would grant victory if Israel rose up in holy war. Simon the Zealot was one of
                    Jesus&rsquo;s Twelve Apostles (Luke 6:15). The Zealot movement eventually led to the
                    Great Revolt (AD 66&ndash;70), which ended in the catastrophic destruction of Jerusalem
                    and the Temple by the Romans.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-5 mt-6">
                <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">Notes</h4>
                <div className="text-sm text-gray-600 space-y-2">
                  <p><span className="font-semibold text-amber-600">(a)</span> The Dead Sea Scrolls were discovered beginning in 1947 in caves near Qumran by the Dead Sea. They include the oldest known manuscripts of the Hebrew Bible (1,000 years older than previously known copies) and sectarian documents that reveal the beliefs and practices of a Jewish community from the 2nd century BC to the 1st century AD. See James VanderKam, <em>The Dead Sea Scrolls Today</em>, revised edition (Eerdmans, 2010).</p>
                </div>
              </div>
            </div>

            {/* The Temple */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Landmark className="w-6 h-6 text-green-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Temple of Jerusalem</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The Temple in Jerusalem was the beating heart of Jewish religious life. Rebuilt by Herod the
                Great beginning around 20 BC (a project not fully completed until AD 63, only seven years
                before its destruction), it was one of the architectural wonders of the Roman world. Josephus
                described it as appearing &ldquo;to strangers, when at a distance, like a mountain covered
                with snow, for those parts that were not gilt were exceeding white&rdquo;
                (<em>Jewish War</em>, 5.5.6).
              </p>

              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-green-900 mb-3">Jesus and the Temple</h3>
                <p className="text-green-800 leading-relaxed mb-3">
                  Jesus had a complex and ultimately confrontational relationship with the Temple. He
                  worshipped there (Luke 2:41&ndash;52), taught in its courts (Mark 12:35), and wept over
                  Jerusalem&rsquo;s coming destruction (Luke 19:41&ndash;44). But he also &ldquo;cleansed&rdquo;
                  the Temple by driving out the money changers (Mark 11:15&ndash;17) and predicted its total
                  destruction: &ldquo;Not one stone here will be left on another&rdquo; (Mark 13:2).
                </p>
                <p className="text-green-800 leading-relaxed">
                  This prophecy was fulfilled in AD 70 when Roman legions under Titus destroyed the Temple.
                  The only portion remaining today is the Western Wall (<em>Kotel</em>), a retaining wall of
                  Herod&rsquo;s Temple Mount platform.
                </p>
              </div>
            </div>

            {/* Messianic Expectations */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Crown className="w-6 h-6 text-purple-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Messianic Expectations</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                First-century Jews held diverse expectations about the coming Messiah (<em>Mashiach</em>,
                &ldquo;the Anointed One&rdquo;). Most expected a political-military deliverer from the
                line of David who would overthrow the Romans, restore the kingdom of Israel, and usher in
                an age of peace and prosperity. The Dead Sea Scrolls reveal that some communities expected
                two Messiahs &mdash; a priestly one and a kingly one.
              </p>

              <div className="bg-purple-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-purple-900 mb-3">Why Jesus Was Unexpected</h3>
                <p className="text-purple-800 leading-relaxed mb-3">
                  Jesus fulfilled the messianic prophecies in ways that no one anticipated. He was indeed
                  from the line of David, born in Bethlehem, and filled with the Spirit. But instead of
                  military conquest, he preached love of enemies. Instead of a throne, he chose a cross.
                  Instead of overthrowing Rome, he conquered sin and death itself.
                </p>
                <p className="text-purple-800 leading-relaxed">
                  The early Christians understood that Jesus fulfilled the prophecies of the <em>Suffering
                  Servant</em> of Isaiah 53 &mdash; one who would be &ldquo;pierced for our transgressions&rdquo;
                  and &ldquo;by his wounds we are healed.&rdquo; This combination of Davidic kingship and
                  suffering servanthood was without precedent in pre-Christian Jewish expectation, yet it is
                  precisely what the Gospels present.
                </p>
              </div>
            </div>

            {/* Cross-links */}
            <div className="bg-indigo-50 border border-indigo-200 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-indigo-900 mb-2">Explore Further</h3>
              <p className="text-indigo-800 text-sm mb-4">
                Discover how the historical evidence for the Resurrection and the theological understanding
                of Christ&rsquo;s divinity build upon the historical foundation explored in this section.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/history/resurrection"
                  className="inline-flex items-center gap-2 text-indigo-700 hover:text-indigo-900 font-medium"
                >
                  <ArrowRight className="w-4 h-4" />
                  The Resurrection
                </Link>
                <Link
                  href="/mysteries/public-revelation"
                  className="inline-flex items-center gap-2 text-indigo-700 hover:text-indigo-900 font-medium"
                >
                  <ArrowRight className="w-4 h-4" />
                  Public Revelation &mdash; Jesus is God
                </Link>
              </div>
            </div>

            {/* Sources for this tab */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Sources &amp; Further Reading</h3>
              <ol className="text-sm text-gray-600 space-y-1.5 list-decimal list-inside">
                <li>E.P. Sanders, <em>Judaism: Practice and Belief, 63 BCE &ndash; 66 CE</em> (SCM Press, 1992)</li>
                <li>Josephus, <em>The Jewish War</em> and <em>Antiquities of the Jews</em> (Loeb Classical Library)</li>
                <li>James VanderKam, <em>The Dead Sea Scrolls Today</em>, revised edition (Eerdmans, 2010)</li>
                <li>N.T. Wright, <em>The New Testament and the People of God</em> (Fortress Press, 1992)</li>
                <li>Jonathan L. Reed, <em>Archaeology and the Galilean Jesus</em> (Trinity Press, 2000)</li>
                <li>Craig Evans, <em>Jesus and His World: The Archaeological Evidence</em> (Westminster John Knox, 2012)</li>
              </ol>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}
