'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  BookOpen,
  Sunrise,
  Users,
  ShieldCheck,
  Flame,
  Eye,
  Cross,
  ArrowRight,
  Shield,
  Clock,
  Heart,
  Star,
  FileText,
  Church,
  Crown,
} from 'lucide-react'

type TabId = 'empty-tomb' | 'appearances' | 'disciples-transformed' | 'alternative-theories' | 'early-church' | 'theological-significance'

const tabs: { id: TabId; label: string }[] = [
  { id: 'empty-tomb', label: 'The Empty Tomb' },
  { id: 'appearances', label: 'Appearances' },
  { id: 'disciples-transformed', label: 'Disciples Transformed' },
  { id: 'alternative-theories', label: 'Alternative Theories' },
  { id: 'early-church', label: 'Early Church' },
  { id: 'theological-significance', label: 'Theological Significance' },
]

export default function ResurrectionPage() {
  const [activeTab, setActiveTab] = useState<TabId>('empty-tomb')

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            The Resurrection
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The bodily resurrection of Jesus Christ is the cornerstone of the Catholic faith. &ldquo;If
            Christ has not been raised, then our preaching is in vain and your faith is in vain&rdquo;
            (1 Cor 15:14). This section examines the historical evidence, the eyewitness testimony,
            and the theological significance of the event that changed the world.
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

        {/* ==================== TAB 1: THE EMPTY TOMB ==================== */}
        {activeTab === 'empty-tomb' && (
          <div className="space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Sunrise className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Discovery of the Empty Tomb</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                On the Sunday morning after the crucifixion, a group of women went to the tomb of Jesus to
                anoint his body with spices &mdash; a standard Jewish burial practice that had been impossible
                on the Sabbath. What they found was not a dead body but an empty tomb, and an announcement
                that shattered every expectation: &ldquo;He is not here; he has risen&rdquo; (Matt 28:6).
              </p>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">The Four Gospel Accounts</h3>
                <p className="text-amber-800 leading-relaxed mb-3">
                  All four Gospels independently record the discovery of the empty tomb on the first day of
                  the week:
                </p>
                <ul className="text-amber-800 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="font-bold mt-0.5">&bull;</span>
                    <span><strong>Mark 16:1&ndash;8</strong> &mdash; Mary Magdalene, Mary the mother of James, and Salome find the stone rolled away and a young man in white who announces the resurrection.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold mt-0.5">&bull;</span>
                    <span><strong>Matthew 28:1&ndash;10</strong> &mdash; An earthquake and angel roll back the stone. The angel tells the women Jesus has risen and they meet the risen Jesus on their way to tell the disciples.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold mt-0.5">&bull;</span>
                    <span><strong>Luke 24:1&ndash;12</strong> &mdash; The women find the stone rolled away and two men in dazzling clothes. Peter runs to the tomb and finds only the linen cloths.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold mt-0.5">&bull;</span>
                    <span><strong>John 20:1&ndash;10</strong> &mdash; Mary Magdalene finds the stone removed and alerts Peter and the Beloved Disciple, who race to the tomb and see the burial wrappings lying neatly in place.</span>
                  </li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                The variations in detail between the four accounts are precisely what we would expect from
                independent eyewitness testimony &mdash; the core facts agree (empty tomb, Sunday morning,
                women as first witnesses, angelic announcement) while the peripheral details reflect
                different vantage points and emphases. Fabricated accounts would be suspiciously uniform.<sup className="text-amber-600 font-semibold cursor-help">(a)</sup>
              </p>

              <div className="bg-gray-50 rounded-lg p-5 mt-6">
                <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">Notes</h4>
                <div className="text-sm text-gray-600 space-y-2">
                  <p><span className="font-semibold text-amber-600">(a)</span> As the legal scholar Simon Greenleaf (Harvard Law School) argued in his <em>Testimony of the Evangelists</em> (1846): the discrepancies in circumstantial detail are &ldquo;the natural character of honest witnesses&rdquo; and would strengthen rather than weaken the testimony in any courtroom.</p>
                </div>
              </div>
            </div>

            {/* Women as Witnesses */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center">
                  <Eye className="w-6 h-6 text-rose-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Women as First Witnesses</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                One of the most powerful arguments for the historicity of the empty tomb is the fact that
                all four Gospels name women &mdash; above all Mary Magdalene &mdash; as the first witnesses.
                This is a detail that no one in the first century would have invented.
              </p>

              <div className="bg-rose-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-rose-900 mb-3">The Criterion of Embarrassment</h3>
                <p className="text-rose-800 leading-relaxed mb-3">
                  In first-century Jewish and Roman culture, the testimony of women was considered unreliable
                  and was generally inadmissible in court.<sup className="text-amber-600 font-semibold cursor-help">(a)</sup> Josephus
                  writes: &ldquo;The testimony of women is not accepted because of the levity and temerity
                  of their sex&rdquo; (<em>Antiquities</em>, 4.8.15). Celsus, the 2nd-century pagan critic
                  of Christianity, specifically mocked the reliance on female testimony.
                </p>
                <p className="text-rose-800 leading-relaxed">
                  If the early Christians were inventing the resurrection story to persuade a sceptical
                  audience, they would have named male witnesses &mdash; Peter, John, or the other apostles
                  &mdash; as the first to discover the empty tomb. The fact that they consistently named women
                  as first witnesses, despite the cultural embarrassment, is powerful evidence that they were
                  recording what actually happened.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-5 mt-6">
                <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">Notes</h4>
                <div className="text-sm text-gray-600 space-y-2">
                  <p><span className="font-semibold text-amber-600">(a)</span> N.T. Wright, <em>The Resurrection of the Son of God</em> (Fortress Press, 2003), p. 607: &ldquo;If they could have invented stories of fine, upstanding, reliable male witnesses being first at the tomb, they would have done so.&rdquo;</p>
                </div>
              </div>
            </div>

            {/* The Grave Cloths */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <FileText className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Grave Cloths (John 20:5&ndash;7)</h2>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <p className="text-blue-800 italic mb-3">
                  &ldquo;He bent over and looked in at the strips of linen lying there but did not go in.
                  Then Simon Peter came along behind him and went straight into the tomb. He saw the strips
                  of linen lying there, as well as the cloth that had been wrapped around Jesus&rsquo;s
                  head. The cloth was still lying in its place, separate from the linen.&rdquo;
                </p>
                <p className="text-blue-700 text-sm">&mdash; <em>John 20:5&ndash;7</em></p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                John&rsquo;s detail about the grave cloths is remarkably specific. The burial wrappings
                were not torn off or scattered &mdash; they were lying in place, with the head cloth
                folded separately. This detail is inconsistent with grave robbery (a thief would not
                unwrap and neatly fold burial linens) and points to something entirely different: the body
                had simply passed through the wrappings, leaving them undisturbed.<sup className="text-amber-600 font-semibold cursor-help">(a)</sup>
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                The reaction of the Beloved Disciple is telling: &ldquo;He saw and believed&rdquo;
                (John 20:8). The arrangement of the cloths was itself evidence that something other than
                theft had occurred.
              </p>

              <div className="bg-gray-50 rounded-lg p-5 mt-6">
                <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">Notes</h4>
                <div className="text-sm text-gray-600 space-y-2">
                  <p><span className="font-semibold text-amber-600">(a)</span> The specificity of this detail suggests eyewitness memory. See Richard Bauckham, <em>Jesus and the Eyewitnesses</em> (Eerdmans, 2006), pp. 385&ndash;393, on the Beloved Disciple as an eyewitness source for the Fourth Gospel.</p>
                </div>
              </div>
            </div>

            {/* Sources */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Sources &amp; Further Reading</h3>
              <ol className="text-sm text-gray-600 space-y-1.5 list-decimal list-inside">
                <li>N.T. Wright, <em>The Resurrection of the Son of God</em> (Fortress Press, 2003)</li>
                <li>William Lane Craig, <em>Assessing the New Testament Evidence for the Historicity of the Resurrection of Jesus</em> (Edwin Mellen Press, 1989; rev. 2002)</li>
                <li>Richard Bauckham, <em>Jesus and the Eyewitnesses</em> (Eerdmans, 2006)</li>
                <li>Simon Greenleaf, <em>The Testimony of the Evangelists</em> (1846; reprinted Kregel, 1995)</li>
              </ol>
            </div>
          </div>
        )}

        {/* ==================== TAB 2: APPEARANCES ==================== */}
        {activeTab === 'appearances' && (
          <div className="space-y-8">
            {/* The 1 Cor 15 Creed */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Earliest Creed: 1 Corinthians 15:3&ndash;8</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The single most important historical document for the resurrection is not a Gospel but a
                passage in one of St. Paul&rsquo;s letters, written around AD 55. Paul explicitly identifies
                this as a received tradition &mdash; something he had been taught, not invented.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <p className="text-amber-800 italic mb-3">
                  &ldquo;For what I received I passed on to you as of first importance: that Christ died for
                  our sins according to the Scriptures, that he was buried, that he was raised on the third
                  day according to the Scriptures, and that he appeared to Cephas, and then to the Twelve.
                  After that, he appeared to more than five hundred of the brothers and sisters at the same
                  time, most of whom are still living, though some have fallen asleep. Then he appeared to
                  James, then to all the apostles, and last of all he appeared to me also, as to one
                  abnormally born.&rdquo;
                </p>
                <p className="text-amber-700 text-sm">&mdash; <em>1 Corinthians 15:3&ndash;8</em></p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-green-900 mb-3">Why This Creed Is Decisive</h3>
                <p className="text-green-800 leading-relaxed mb-3">
                  Scholars of all backgrounds agree on several key points about this passage:
                </p>
                <ul className="text-green-800 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="font-bold mt-0.5">&bull;</span>
                    <span><strong>It is pre-Pauline.</strong> Paul says he &ldquo;received&rdquo; (<em>parelabon</em>) this tradition, using technical language for the transmission of authoritative teaching. He did not compose it.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold mt-0.5">&bull;</span>
                    <span><strong>It dates to within 3&ndash;5 years of the crucifixion.</strong> Paul most likely received this creed during his visit to Jerusalem around AD 35&ndash;36, when he spent 15 days with Peter (Gal 1:18&ndash;19). Some scholars date the creed&rsquo;s formulation even earlier.<sup className="text-amber-600 font-semibold cursor-help">(a)</sup></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold mt-0.5">&bull;</span>
                    <span><strong>It names eyewitnesses.</strong> Paul lists specific individuals (Cephas/Peter, James) and groups (the Twelve, 500+ at once) as witnesses. He even notes that most of the 500 are &ldquo;still living&rdquo; &mdash; a clear invitation to verify the claim.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold mt-0.5">&bull;</span>
                    <span><strong>It bridges directly to the events.</strong> The chain of transmission from the eyewitnesses to Paul is short and traceable. There was not time for legend to develop.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-5 mt-6">
                <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">Notes</h4>
                <div className="text-sm text-gray-600 space-y-2">
                  <p><span className="font-semibold text-amber-600">(a)</span> Gary Habermas, <em>The Historical Jesus: Ancient Evidence for the Life of Christ</em> (College Press, 1996), pp. 152&ndash;157. Even the sceptical scholar Gerd L&uuml;demann concedes: &ldquo;The elements in the tradition are to be dated to the first two years after the crucifixion&hellip; not later than three years after the death of Jesus.&rdquo; (<em>The Resurrection of Jesus</em>, 1994, p. 38).</p>
                </div>
              </div>
            </div>

            {/* The Individual Appearances */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Eye className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Resurrection Appearances</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The Gospels and Paul together record at least twelve distinct appearances of the risen
                Jesus over a period of forty days (Acts 1:3). These appearances were varied in setting,
                time, and audience &mdash; to individuals and groups, indoors and outdoors, to believers
                and sceptics.
              </p>

              <div className="space-y-4 mb-6">
                <div className="bg-blue-50 p-5 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">To Mary Magdalene (John 20:11&ndash;18)</h3>
                  <p className="text-blue-800 text-sm leading-relaxed">
                    The first to see the risen Lord was Mary Magdalene, weeping at the empty tomb. She
                    initially mistook him for the gardener until he called her by name: &ldquo;Mary.&rdquo;
                    She recognised his voice &mdash; the Good Shepherd who calls his sheep by name
                    (John 10:3). Jesus commissioned her to bring the news to the disciples, making her
                    the &ldquo;Apostle to the Apostles.&rdquo;
                  </p>
                </div>
                <div className="bg-blue-50 p-5 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">To Peter (1 Cor 15:5; Luke 24:34)</h3>
                  <p className="text-blue-800 text-sm leading-relaxed">
                    Paul lists an appearance to &ldquo;Cephas&rdquo; (Peter) as the first appearance to a
                    male disciple. Luke confirms this: &ldquo;The Lord has risen indeed, and has appeared to
                    Simon!&rdquo; (24:34). This private encounter &mdash; between the risen Lord and the
                    disciple who had denied him three times &mdash; is one of the most intimate moments in
                    the Gospels. Its content is never described, but Peter emerged from it transformed.
                  </p>
                </div>
                <div className="bg-blue-50 p-5 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">On the Road to Emmaus (Luke 24:13&ndash;35)</h3>
                  <p className="text-blue-800 text-sm leading-relaxed">
                    Two disciples walking from Jerusalem to Emmaus encountered the risen Jesus but did not
                    recognise him until he broke bread with them &mdash; an action recalling the Last Supper
                    and the Eucharist. &ldquo;Were not our hearts burning within us while he talked with us
                    on the road and opened the Scriptures to us?&rdquo; (Luke 24:32).
                  </p>
                </div>
                <div className="bg-blue-50 p-5 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">To the Twelve &amp; Thomas (John 20:19&ndash;29)</h3>
                  <p className="text-blue-800 text-sm leading-relaxed">
                    Jesus appeared to the disciples behind locked doors, showing them his hands and side.
                    Thomas, absent initially, declared he would not believe unless he could touch the wounds.
                    A week later, Jesus appeared again and invited Thomas to do exactly that. Thomas&rsquo;s
                    response is the highest christological confession in the Gospels: &ldquo;My Lord and my
                    God!&rdquo; (John 20:28).
                  </p>
                </div>
                <div className="bg-blue-50 p-5 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">To Over 500 at Once (1 Cor 15:6)</h3>
                  <p className="text-blue-800 text-sm leading-relaxed">
                    Paul records an appearance to more than five hundred people simultaneously, adding that
                    most of them were still alive at the time of writing (c. AD 55). This is a bold claim
                    that could easily have been refuted if untrue &mdash; Paul is effectively saying: &ldquo;Go
                    ask them yourselves.&rdquo;<sup className="text-amber-600 font-semibold cursor-help">(a)</sup>
                  </p>
                </div>
                <div className="bg-blue-50 p-5 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">To James &amp; Paul (1 Cor 15:7&ndash;8)</h3>
                  <p className="text-blue-800 text-sm leading-relaxed">
                    James, the &ldquo;brother of the Lord&rdquo; (Gal 1:19), did not believe during
                    Jesus&rsquo;s earthly ministry (John 7:5). After an encounter with the risen Christ, he
                    became the leader of the Jerusalem church and was eventually martyred. Similarly, Paul
                    &mdash; once a violent persecutor of Christians &mdash; was transformed by his encounter
                    with the risen Lord on the road to Damascus (Acts 9). Both conversions demand explanation.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-5 mt-6">
                <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">Notes</h4>
                <div className="text-sm text-gray-600 space-y-2">
                  <p><span className="font-semibold text-amber-600">(a)</span> William Lane Craig, <em>Reasonable Faith</em>, 3rd edition (Crossway, 2008), pp. 380&ndash;381: &ldquo;This is extraordinarily strong evidence. Paul is in effect challenging his readers to check out his claim by asking the witnesses.&rdquo;</p>
                </div>
              </div>
            </div>

            {/* Sources */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Sources &amp; Further Reading</h3>
              <ol className="text-sm text-gray-600 space-y-1.5 list-decimal list-inside">
                <li>Gary Habermas, <em>The Historical Jesus: Ancient Evidence for the Life of Christ</em> (College Press, 1996)</li>
                <li>William Lane Craig, <em>Reasonable Faith</em>, 3rd edition (Crossway, 2008), chapters 8&ndash;9</li>
                <li>N.T. Wright, <em>The Resurrection of the Son of God</em> (Fortress Press, 2003), Part IV</li>
                <li>Michael Licona, <em>The Resurrection of Jesus: A New Historiographical Approach</em> (IVP Academic, 2010)</li>
              </ol>
            </div>
          </div>
        )}

        {/* ==================== TAB 3: DISCIPLES TRANSFORMED ==================== */}
        {activeTab === 'disciples-transformed' && (
          <div className="space-y-8">
            {/* From Fear to Fearlessness */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-green-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">From Fear to Fearlessness</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                On Good Friday, the disciples of Jesus were a broken, scattered group. Peter had denied
                knowing Jesus three times. The rest had fled at his arrest (Mark 14:50). They were hiding
                behind locked doors &ldquo;for fear of the Jews&rdquo; (John 20:19). Their leader was dead,
                publicly executed as a criminal by the most powerful empire on earth.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Within weeks, these same men were standing in the streets of Jerusalem &mdash; the very city
                where Jesus had been crucified &mdash; publicly proclaiming that God had raised him from the
                dead. They never recanted, despite persecution, imprisonment, torture, and death. The
                transformation is dramatic and demands an explanation.
              </p>

              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-green-900 mb-3">Peter&rsquo;s Transformation</h3>
                <p className="text-green-800 leading-relaxed mb-3">
                  Peter &mdash; who had cowered before a servant girl and denied knowing Jesus &mdash; stood
                  up at Pentecost and proclaimed to thousands:
                </p>
                <p className="text-green-800 italic mb-3">
                  &ldquo;This man was handed over to you by God&rsquo;s deliberate plan and foreknowledge;
                  and you, with the help of wicked men, put him to death by nailing him to the cross. But
                  God raised him from the dead, freeing him from the agony of death, because it was
                  impossible for death to keep its hold on him.&rdquo;
                </p>
                <p className="text-green-700 text-sm">&mdash; <em>Acts 2:23&ndash;24</em></p>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">No Earthly Motive</h3>
                <p className="text-amber-800 leading-relaxed">
                  People will die for what they believe to be true (martyrs of all religions do this), but
                  people do not die for what they know to be a lie. The apostles were in a unique position:
                  they were not simply believing a received tradition &mdash; they were claiming to be
                  eyewitnesses. If the resurrection was a deception, they would have known it. Yet not one
                  of them, under threat of death, ever recanted.<sup className="text-amber-600 font-semibold cursor-help">(a)</sup> They
                  gained nothing worldly from their proclamation &mdash; no wealth, no power, no prestige
                  &mdash; only suffering and death.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-5 mt-6">
                <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">Notes</h4>
                <div className="text-sm text-gray-600 space-y-2">
                  <p><span className="font-semibold text-amber-600">(a)</span> The earliest apostolic martyrdoms are well-attested: James the son of Zebedee was executed by Herod Agrippa I around AD 44 (Acts 12:2). Peter and Paul were martyred in Rome under Nero (c. AD 64&ndash;67), according to Clement of Rome (1 Clement 5, c. AD 96) and other early sources. See Sean McDowell, <em>The Fate of the Apostles</em> (Routledge, 2015).</p>
                </div>
              </div>
            </div>

            {/* Conversion of Sceptics */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Flame className="w-6 h-6 text-purple-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Conversion of Sceptics</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">James, Brother of the Lord</h3>
                  <p className="text-purple-800 text-sm leading-relaxed">
                    During Jesus&rsquo;s earthly ministry, his brothers did not believe in him (John 7:5;
                    Mark 3:21 records that his family thought he was &ldquo;out of his mind&rdquo;). After
                    the resurrection, James became the leader of the Jerusalem church (Acts 15:13; Gal 2:9),
                    wrote the Epistle of James, and was martyred around AD 62.<sup className="text-amber-600 font-semibold cursor-help">(a)</sup> What
                    changed his mind? Paul tells us: the risen Christ appeared to him (1 Cor 15:7).
                  </p>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">Saul of Tarsus (St. Paul)</h3>
                  <p className="text-purple-800 text-sm leading-relaxed">
                    Saul was a Pharisee who actively persecuted the early Church, &ldquo;breathing threats
                    and murder against the disciples&rdquo; (Acts 9:1). He was present at the stoning of
                    Stephen (Acts 7:58). On the road to Damascus, he encountered the risen Christ and was
                    transformed from Christianity&rsquo;s fiercest enemy into its greatest missionary. He
                    went on to establish churches across the Roman Empire, write nearly half the New
                    Testament, and was martyred in Rome around AD 64&ndash;67.
                  </p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">
                The conversion of hostile sceptics is a particularly strong form of evidence. James and Paul
                had every reason not to believe &mdash; James knew Jesus as his ordinary older brother, and
                Paul was ideologically committed to destroying the Christian movement. Both were transformed
                by an encounter with the risen Christ.
              </p>

              <div className="bg-gray-50 rounded-lg p-5 mt-6">
                <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">Notes</h4>
                <div className="text-sm text-gray-600 space-y-2">
                  <p><span className="font-semibold text-amber-600">(a)</span> Josephus, <em>Antiquities</em> 20.9.1, records the execution of James &ldquo;the brother of Jesus, who was called Christ&rdquo; by the high priest Ananus in AD 62. Hegesippus (c. AD 180, preserved in Eusebius, <em>Church History</em> 2.23) provides additional detail.</p>
                </div>
              </div>
            </div>

            {/* The Explosion of the Church */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Church className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Explosive Growth of the Church</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Within 300 years, a movement that began with a handful of frightened Galilean fishermen
                had conquered the Roman Empire &mdash; not by the sword, but by witness, charity, and
                willingness to die. By AD 100, there were Christian communities in every major city of
                the Mediterranean. By AD 313, Emperor Constantine issued the Edict of Milan, granting
                legal toleration. By AD 380, Christianity became the official religion of the empire.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">The Historical Puzzle</h3>
                <p className="text-blue-800 leading-relaxed">
                  The explosive growth of Christianity requires a historical cause. The crucifixion of a
                  messianic claimant should have ended the movement &mdash; as it did for every other
                  failed messiah in Jewish history.<sup className="text-amber-600 font-semibold cursor-help">(a)</sup> Instead,
                  the death of Jesus became the foundation of the movement&rsquo;s proclamation. Something
                  happened after the crucifixion that transformed defeat into victory. The earliest
                  Christians identified that something as the bodily resurrection of Jesus from the dead.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-5 mt-6">
                <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">Notes</h4>
                <div className="text-sm text-gray-600 space-y-2">
                  <p><span className="font-semibold text-amber-600">(a)</span> N.T. Wright, <em>The Resurrection of the Son of God</em> (2003), pp. 697&ndash;706, surveys the pattern: when a messianic figure was killed, his followers either gave up (Bar Kochba, AD 135) or found a new messiah. They never claimed he was alive again. The Christian claim is unique in Jewish history.</p>
                </div>
              </div>
            </div>

            {/* Sources */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Sources &amp; Further Reading</h3>
              <ol className="text-sm text-gray-600 space-y-1.5 list-decimal list-inside">
                <li>Sean McDowell, <em>The Fate of the Apostles</em> (Routledge, 2015)</li>
                <li>Rodney Stark, <em>The Rise of Christianity</em> (HarperOne, 1997)</li>
                <li>Larry Hurtado, <em>Destroyer of the Gods: Early Christian Distinctiveness in the Roman World</em> (Baylor, 2016)</li>
                <li>N.T. Wright, <em>The Resurrection of the Son of God</em> (Fortress Press, 2003)</li>
              </ol>
            </div>
          </div>
        )}

        {/* ==================== TAB 4: ALTERNATIVE THEORIES ==================== */}
        {activeTab === 'alternative-theories' && (
          <div className="space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Examining the Alternatives</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                If the resurrection did not happen, some alternative explanation must account for the
                established historical facts: the empty tomb, the post-mortem appearances, the transformation
                of the disciples, and the explosive rise of the Church. Over the centuries, many alternatives
                have been proposed. Each fails to account for the full range of evidence.
              </p>
            </div>

            {/* Swoon Theory */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-red-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Swoon Theory</h2>
              </div>

              <div className="bg-red-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-red-900 mb-2">Claim</h3>
                <p className="text-red-800 leading-relaxed">
                  Jesus did not actually die on the cross; he merely fell unconscious (&ldquo;swooned&rdquo;)
                  and later revived in the cool tomb.
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Problems:</strong> Roman soldiers were professional executioners who verified death.
                John 19:34 records that a soldier pierced Jesus&rsquo;s side with a spear, and &ldquo;blood
                and water&rdquo; flowed out &mdash; medically consistent with post-mortem separation of
                blood and pericardial or pleural fluid.<sup className="text-amber-600 font-semibold cursor-help">(a)</sup> A
                man who had been scourged, crucified, and speared &mdash; even if somehow alive &mdash;
                would have been in a desperate, barely surviving condition, not the radiant, powerful figure
                described by the eyewitnesses. As the 19th-century sceptic David Friedrich Strauss himself
                argued, a half-dead Jesus dragging himself out of a tomb would never have convinced the
                disciples that he had conquered death.
              </p>

              <div className="bg-gray-50 rounded-lg p-5 mt-6">
                <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">Notes</h4>
                <div className="text-sm text-gray-600 space-y-2">
                  <p><span className="font-semibold text-amber-600">(a)</span> The Journal of the American Medical Association published a detailed medical analysis concluding: &ldquo;The weight of the historical and medical evidence indicates that Jesus was dead before the wound to his side was inflicted.&rdquo; William D. Edwards et al., &ldquo;On the Physical Death of Jesus Christ,&rdquo; <em>JAMA</em> 255:11 (1986), pp. 1455&ndash;1463.</p>
                </div>
              </div>
            </div>

            {/* Stolen Body */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-indigo-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Stolen Body Theory</h2>
              </div>

              <div className="bg-indigo-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-indigo-900 mb-2">Claim</h3>
                <p className="text-indigo-800 leading-relaxed">
                  The disciples stole the body and then fabricated the resurrection story.
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Problems:</strong> This is the oldest alternative &mdash; Matthew records that it was
                the explanation circulated by the Jewish authorities (Matt 28:11&ndash;15), which itself
                confirms the tomb was empty.<sup className="text-amber-600 font-semibold cursor-help">(a)</sup> But
                the theory founders on multiple points: (1) The tomb was sealed and guarded (Matt 27:62&ndash;66).
                (2) The disciples were hiding in fear, not plotting a heist. (3) Stolen bodies do not
                explain the post-mortem appearances to multiple independent witnesses. (4) Men do not
                willingly suffer persecution and martyrdom for a lie they themselves invented. (5) The
                neatly arranged grave cloths (John 20:5&ndash;7) are inconsistent with a hurried theft.
              </p>

              <div className="bg-gray-50 rounded-lg p-5 mt-6">
                <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">Notes</h4>
                <div className="text-sm text-gray-600 space-y-2">
                  <p><span className="font-semibold text-amber-600">(a)</span> That the Jewish authorities needed to circulate an alternative explanation (the disciples stole the body) implies that the empty tomb was a known, undisputed fact. They did not dispute that the tomb was empty; they disputed the explanation. See William Lane Craig, <em>The Son Rises</em> (Moody Press, 1981), pp. 35&ndash;42.</p>
                </div>
              </div>
            </div>

            {/* Hallucination */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-purple-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Hallucination Theory</h2>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-purple-900 mb-2">Claim</h3>
                <p className="text-purple-800 leading-relaxed">
                  The disciples experienced grief-induced hallucinations and mistook them for real appearances
                  of the risen Jesus.
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Problems:</strong> Hallucinations are private, individual experiences &mdash; they do
                not occur simultaneously in groups of people. Yet the appearances were to groups (the Twelve,
                500 at once) as well as individuals. Hallucinations also do not explain the empty tomb &mdash;
                the body would still have been in the grave, and the authorities could simply have produced it
                to refute the claims.<sup className="text-amber-600 font-semibold cursor-help">(a)</sup> Furthermore,
                hallucinations typically occur to people who are expecting or hoping for something. But the
                disciples were not expecting a resurrection (they thought it was over), James was a sceptic,
                and Paul was a persecutor.
              </p>

              <div className="bg-gray-50 rounded-lg p-5 mt-6">
                <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">Notes</h4>
                <div className="text-sm text-gray-600 space-y-2">
                  <p><span className="font-semibold text-amber-600">(a)</span> Gary Habermas, &ldquo;Explaining Away Jesus&rsquo;s Resurrection: The Recent Revival of Hallucination Theories,&rdquo; <em>Christian Research Journal</em> 23:4 (2001). Habermas identifies over a dozen specific problems with the hallucination hypothesis.</p>
                </div>
              </div>
            </div>

            {/* Legend Theory */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-green-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Legend / Myth Theory</h2>
              </div>

              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-green-900 mb-2">Claim</h3>
                <p className="text-green-800 leading-relaxed">
                  The resurrection story developed gradually over decades as legend and theological embellishment
                  accumulated around the memory of a dead teacher.
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Problems:</strong> The 1 Corinthians 15 creed &mdash; which contains the core
                resurrection claim with named eyewitnesses &mdash; dates to within 3&ndash;5 years of the
                crucifixion. This is far too early for legendary development. The Roman historian A.N. Sherwin-White
                studied the rate at which legends develop in antiquity and concluded that &ldquo;even two
                generations is too short a span to allow the mythical tendency to prevail over the hard
                historic core.&rdquo;<sup className="text-amber-600 font-semibold cursor-help">(a)</sup> The
                resurrection was proclaimed from the very beginning, in the very city where Jesus had been
                publicly crucified, while eyewitnesses to the events were still alive.
              </p>

              <div className="bg-gray-50 rounded-lg p-5 mt-6">
                <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">Notes</h4>
                <div className="text-sm text-gray-600 space-y-2">
                  <p><span className="font-semibold text-amber-600">(a)</span> A.N. Sherwin-White, <em>Roman Society and Roman Law in the New Testament</em> (Oxford, 1963), pp. 188&ndash;191. Sherwin-White was a noted historian of the Greco-Roman world at Oxford, not a theologian.</p>
                </div>
              </div>
            </div>

            {/* Sources */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Sources &amp; Further Reading</h3>
              <ol className="text-sm text-gray-600 space-y-1.5 list-decimal list-inside">
                <li>William Lane Craig, <em>The Son Rises: The Historical Evidence for the Resurrection of Jesus</em> (Moody Press, 1981)</li>
                <li>Gary Habermas &amp; Michael Licona, <em>The Case for the Resurrection of Jesus</em> (Kregel, 2004)</li>
                <li>A.N. Sherwin-White, <em>Roman Society and Roman Law in the New Testament</em> (Oxford, 1963)</li>
                <li>Edwards, Gabel, &amp; Hosmer, &ldquo;On the Physical Death of Jesus Christ,&rdquo; <em>JAMA</em> 255:11 (1986)</li>
              </ol>
            </div>
          </div>
        )}

        {/* ==================== TAB 5: EARLY CHURCH ==================== */}
        {activeTab === 'early-church' && (
          <div className="space-y-8">
            {/* The Kerygma */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Flame className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Kerygma: The Earliest Proclamation</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The <em>kerygma</em> (Greek: &ldquo;proclamation&rdquo;) is the core message preached by the
                earliest Christians. As recorded in the Acts of the Apostles, the resurrection was not a
                peripheral belief or a later addition &mdash; it was the very heart of the message from day one.
              </p>

              <div className="space-y-4 mb-6">
                <div className="bg-amber-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-amber-900 mb-3">Peter at Pentecost (Acts 2:22&ndash;36)</h3>
                  <p className="text-amber-800 italic mb-3">
                    &ldquo;God has raised this Jesus to life, and we are all witnesses of it. Exalted to
                    the right hand of God, he has received from the Father the promised Holy Spirit and has
                    poured out what you now see and hear&hellip; Therefore let all Israel be assured of this:
                    God has made this Jesus, whom you crucified, both Lord and Messiah.&rdquo;
                  </p>
                  <p className="text-amber-700 text-sm">&mdash; <em>Acts 2:32&ndash;33, 36</em></p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-900 mb-3">Peter&rsquo;s Second Sermon (Acts 3:13&ndash;15)</h3>
                  <p className="text-blue-800 italic mb-3">
                    &ldquo;You killed the author of life, but God raised him from the dead. We are witnesses
                    of this.&rdquo;
                  </p>
                  <p className="text-blue-700 text-sm">&mdash; <em>Acts 3:15</em></p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-900 mb-3">Peter to Cornelius (Acts 10:39&ndash;43)</h3>
                  <p className="text-green-800 italic mb-3">
                    &ldquo;They killed him by hanging him on a cross, but God raised him from the dead on
                    the third day and caused him to be seen. He was not seen by all the people, but by
                    witnesses whom God had already chosen &mdash; by us who ate and drank with him after he
                    rose from the dead.&rdquo;
                  </p>
                  <p className="text-green-700 text-sm">&mdash; <em>Acts 10:39&ndash;41</em></p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">
                Note the consistent pattern: in every sermon, the resurrection of Jesus is the central
                claim, and the apostles present themselves as direct eyewitnesses. The message was proclaimed
                publicly, in Jerusalem, to audiences who could have challenged and refuted it if it were false.
              </p>
            </div>

            {/* Early Church Fathers */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-purple-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Church Fathers&rsquo; Witness</h2>
              </div>

              <div className="space-y-4 mb-6">
                <div className="bg-purple-50 p-5 rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-900 mb-2">St. Clement of Rome (c. AD 96)</h3>
                  <p className="text-purple-800 text-sm leading-relaxed">
                    Writing from Rome to the Corinthians within a generation of the apostles, Clement
                    refers to the resurrection as established fact and mentions the martyrdoms of Peter and
                    Paul as recent events. His letter (<em>1 Clement</em>) is the earliest surviving
                    Christian document outside the New Testament, written while some who had known the
                    apostles may still have been alive.
                  </p>
                </div>
                <div className="bg-purple-50 p-5 rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-900 mb-2">St. Ignatius of Antioch (c. AD 107)</h3>
                  <p className="text-purple-800 text-sm leading-relaxed">
                    Writing on his way to martyrdom in Rome, Ignatius insists on the reality of the bodily
                    resurrection against docetic heretics who claimed Jesus only appeared to have a body:
                    &ldquo;He truly suffered, as also he truly raised himself. It is not as some unbelievers
                    say, that his passion was merely in appearance&rdquo; (<em>Letter to the Smyrnaeans</em>, 2).
                  </p>
                </div>
                <div className="bg-purple-50 p-5 rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-900 mb-2">St. Polycarp of Smyrna (c. AD 69&ndash;155)</h3>
                  <p className="text-purple-800 text-sm leading-relaxed">
                    A disciple of the Apostle John, Polycarp provides a direct link to the eyewitness
                    generation. Irenaeus, who knew Polycarp in his youth, records that Polycarp &ldquo;was
                    instructed by apostles, and conversed with many who had seen Christ&rdquo; (Irenaeus,
                    <em>Against Heresies</em> 3.3.4). At age 86, facing martyrdom, Polycarp declared:
                    &ldquo;Eighty-six years have I served him, and he has done me no wrong. How can I
                    blaspheme my King who saved me?&rdquo;
                  </p>
                </div>
              </div>
            </div>

            {/* Sunday Worship */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Sunday Revolution</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The earliest Christians were Jews who had observed the Sabbath (Saturday) all their lives.
                Within a generation, they had shifted their primary day of worship to Sunday &mdash; &ldquo;the
                first day of the week&rdquo; (Acts 20:7; 1 Cor 16:2; Rev 1:10). This is an extraordinary
                change that requires a powerful cause. They called it &ldquo;the Lord&rsquo;s Day&rdquo;
                because it was the day Jesus rose from the dead.<sup className="text-amber-600 font-semibold cursor-help">(a)</sup>
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">Baptism: Sharing in the Resurrection</h3>
                <p className="text-blue-800 italic mb-3">
                  &ldquo;Don&rsquo;t you know that all of us who were baptised into Christ Jesus were
                  baptised into his death? We were therefore buried with him through baptism into death
                  in order that, just as Christ was raised from the dead through the glory of the Father,
                  we too may live a new life.&rdquo;
                </p>
                <p className="text-blue-700 text-sm">&mdash; <em>Romans 6:3&ndash;4</em></p>
              </div>

              <p className="text-gray-700 leading-relaxed">
                The very sacramental life of the early Church was structured around the resurrection.
                Baptism was understood as dying and rising with Christ. The Eucharist proclaimed &ldquo;the
                Lord&rsquo;s death until he comes&rdquo; (1 Cor 11:26) &mdash; presupposing that the dead
                Lord is now alive and will return. Sunday worship, baptismal theology, and eucharistic
                practice all point back to a single conviction: Jesus is risen.
              </p>

              <div className="bg-gray-50 rounded-lg p-5 mt-6">
                <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">Notes</h4>
                <div className="text-sm text-gray-600 space-y-2">
                  <p><span className="font-semibold text-amber-600">(a)</span> The <em>Didache</em> (c. AD 50&ndash;120), one of the earliest Christian documents, instructs: &ldquo;On the Lord&rsquo;s Day, gather together, break bread, and give thanks&rdquo; (14.1). Justin Martyr (c. AD 155) explains: &ldquo;Sunday is the day on which we all hold our common assembly, because it is the first day on which God&hellip; made the world; and Jesus Christ our Saviour on the same day rose from the dead&rdquo; (<em>First Apology</em>, 67).</p>
                </div>
              </div>
            </div>

            {/* Sources */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Sources &amp; Further Reading</h3>
              <ol className="text-sm text-gray-600 space-y-1.5 list-decimal list-inside">
                <li>C.H. Dodd, <em>The Apostolic Preaching and Its Developments</em> (Hodder &amp; Stoughton, 1936)</li>
                <li>Larry Hurtado, <em>Lord Jesus Christ: Devotion to Jesus in Earliest Christianity</em> (Eerdmans, 2003)</li>
                <li>Michael Green, <em>Evangelism in the Early Church</em>, revised edition (Eerdmans, 2003)</li>
                <li>The Apostolic Fathers: <em>1 Clement</em>, <em>Letters of Ignatius</em>, <em>Martyrdom of Polycarp</em> (Loeb Classical Library or Penguin Classics editions)</li>
              </ol>
            </div>
          </div>
        )}

        {/* ==================== TAB 6: THEOLOGICAL SIGNIFICANCE ==================== */}
        {activeTab === 'theological-significance' && (
          <div className="space-y-8">
            {/* The Cornerstone */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Cross className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Cornerstone of Faith</h2>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <p className="text-amber-800 italic mb-3">
                  &ldquo;If Christ has not been raised, our preaching is useless and so is your faith. More
                  than that, we are then found to be false witnesses about God, for we have testified about
                  God that he raised Christ from the dead&hellip; And if Christ has not been raised, your
                  faith is futile; you are still in your sins.&rdquo;
                </p>
                <p className="text-amber-700 text-sm">&mdash; <em>1 Corinthians 15:14&ndash;15, 17</em></p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                St. Paul is remarkably honest: if the resurrection did not happen, Christianity is false.
                Everything depends on it. The resurrection is not merely one belief among many; it is the
                foundation upon which all other Christian claims rest. If Jesus is still dead, he was not who
                he claimed to be, his death did not atone for sins, and there is no hope of eternal life.
                But if he rose, then everything he said is vindicated.
              </p>
            </div>

            {/* What the Resurrection Proves */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-green-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">What the Resurrection Vindicates</h2>
              </div>

              <div className="space-y-4 mb-6">
                <div className="bg-green-50 p-5 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-900 mb-2">1. Jesus Is Who He Claimed to Be</h3>
                  <p className="text-green-800 text-sm leading-relaxed">
                    Jesus claimed a unique relationship with God the Father, claimed authority to forgive
                    sins, and accepted worship. If these claims were false, God would not have raised him.
                    The resurrection is God&rsquo;s vindication of Jesus&rsquo;s identity: he is the Christ,
                    the Son of the living God. &ldquo;He was declared to be the Son of God in power according
                    to the Spirit of holiness by his resurrection from the dead&rdquo; (Romans 1:4).
                  </p>
                </div>
                <div className="bg-green-50 p-5 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-900 mb-2">2. Sin Is Conquered</h3>
                  <p className="text-green-800 text-sm leading-relaxed">
                    The cross was not a defeat but a victory. By dying for our sins and rising again, Jesus
                    broke the power of sin and reconciled humanity with God. &ldquo;He was delivered over to
                    death for our sins and was raised to life for our justification&rdquo; (Romans 4:25).
                  </p>
                </div>
                <div className="bg-green-50 p-5 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-900 mb-2">3. Death Is Defeated</h3>
                  <p className="text-green-800 text-sm leading-relaxed">
                    &ldquo;Where, O death, is your victory? Where, O death, is your sting?&rdquo; (1 Cor
                    15:55). The resurrection reveals that death is not the end. Christ has passed through
                    death and out the other side, and those who are united with him by faith and baptism
                    share in his victory over death.
                  </p>
                </div>
                <div className="bg-green-50 p-5 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-900 mb-2">4. Our Own Resurrection Is Promised</h3>
                  <p className="text-green-800 text-sm leading-relaxed">
                    &ldquo;Christ has indeed been raised from the dead, the firstfruits of those who have
                    fallen asleep&rdquo; (1 Cor 15:20). The resurrection of Jesus is not an isolated event
                    but the beginning of a cosmic transformation. What happened to him will happen to all who
                    believe: bodily resurrection and eternal life with God.
                  </p>
                </div>
              </div>
            </div>

            {/* The Catechism */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Church className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Church&rsquo;s Teaching (CCC 638&ndash;658)</h2>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">Catechism of the Catholic Church</h3>
                <p className="text-blue-800 italic mb-3">
                  &ldquo;The Resurrection of Jesus is the crowning truth of our faith in Christ, a faith
                  believed and lived as the central truth by the first Christian community; handed on as
                  fundamental by Tradition; established by the documents of the New Testament; and preached
                  as an essential part of the Paschal mystery along with the cross.&rdquo;
                </p>
                <p className="text-blue-700 text-sm">&mdash; <em>CCC 638</em></p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                The Catechism teaches that the resurrection is a real, historical event with empirically
                verified dimensions (the empty tomb, the appearances) and a transcendent dimension (entry
                into God&rsquo;s glory) that surpasses history. It is both historical and meta-historical:
                it happened in time and space, yet its significance extends beyond time into eternity.
              </p>

              <div className="bg-purple-50 p-6 rounded-lg mb-6">
                <p className="text-purple-800 italic mb-3">
                  &ldquo;Although the Resurrection was an historical event that could be verified by the
                  sign of the empty tomb and by the reality of the apostles&rsquo; encounters with the
                  risen Christ, still it remains at the very heart of the mystery of faith as something
                  that transcends and surpasses history.&rdquo;
                </p>
                <p className="text-purple-700 text-sm">&mdash; <em>CCC 647</em></p>
              </div>
            </div>

            {/* Cross-links */}
            <div className="bg-indigo-50 border border-indigo-200 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-indigo-900 mb-2">Explore Further</h3>
              <p className="text-indigo-800 text-sm mb-4">
                The resurrection vindicates the claims of Christ and grounds the entire deposit of faith.
                Learn more about the historical Jesus and the fullness of God&rsquo;s self-revelation.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/history/christ"
                  className="inline-flex items-center gap-2 text-indigo-700 hover:text-indigo-900 font-medium"
                >
                  <ArrowRight className="w-4 h-4" />
                  Lord Jesus Christ &mdash; The Historical Evidence
                </Link>
                <Link
                  href="/mysteries/public-revelation"
                  className="inline-flex items-center gap-2 text-indigo-700 hover:text-indigo-900 font-medium"
                >
                  <ArrowRight className="w-4 h-4" />
                  Public Revelation &mdash; Jesus Is God
                </Link>
              </div>
            </div>

            {/* Sources */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Sources &amp; Further Reading</h3>
              <ol className="text-sm text-gray-600 space-y-1.5 list-decimal list-inside">
                <li><em>Catechism of the Catholic Church</em>, 638&ndash;658</li>
                <li>Pope Benedict XVI, <em>Jesus of Nazareth: Holy Week</em> (Ignatius Press, 2011), chapters 9&ndash;10</li>
                <li>N.T. Wright, <em>Surprised by Hope: Rethinking Heaven, the Resurrection, and the Mission of the Church</em> (HarperOne, 2008)</li>
                <li>Joseph Ratzinger, <em>Eschatology: Death and Eternal Life</em> (CUA Press, 1988)</li>
              </ol>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}
