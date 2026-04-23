'use client'

import { useState } from 'react'
import {
  BookOpen,
  Clock,
  Music,
  Church,
  Globe,
  Cross,
  Calendar,
  Landmark,
  Award,
  Heart,
  Star,
  Sun,
  Users,
  FileText,
  Flame,
} from 'lucide-react'

type TabId = 'origins' | 'early-church' | 'roman-canon' | 'eastern-rites' | 'sacred-arts' | 'tridentine' | 'vatican-ii' | 'mass-today'

const tabs: { id: TabId; label: string }[] = [
  { id: 'origins', label: 'Origins' },
  { id: 'early-church', label: 'Early Church' },
  { id: 'roman-canon', label: 'The Roman Canon' },
  { id: 'eastern-rites', label: 'Eastern Rites' },
  { id: 'sacred-arts', label: 'Sacred Arts' },
  { id: 'tridentine', label: 'The Tridentine Mass' },
  { id: 'vatican-ii', label: 'Vatican II Reforms' },
  { id: 'mass-today', label: 'The Mass Today' },
]

export default function MassHistoryPage() {
  const [activeTab, setActiveTab] = useState<TabId>('origins')

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            History of the Holy Mass
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trace the development of the Catholic Mass from the Last Supper through the early Church,
            the great councils, and into the present day. Discover how the central act of Catholic
            worship has been celebrated, protected, and renewed across two millennia.
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

        {/* ==================== TAB 1: ORIGINS ==================== */}
        {activeTab === 'origins' && (
          <div className="space-y-8">
            {/* The Last Supper */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Cross className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Last Supper: Institution of the Eucharist</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The Holy Mass has its origin in a single, defining moment of salvation history: the Last Supper,
                on the night before Jesus Christ suffered and died. At this Passover meal in the Upper Room in
                Jerusalem, Jesus took bread and wine and gave them an entirely new meaning, instituting the
                sacrament that would become the centre of Christian worship for all time. Every Mass celebrated
                across the world today is a re-presentation of this foundational act.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">The Words of Institution</h3>
                <p className="text-amber-800 italic mb-3">
                  &ldquo;While they were eating, Jesus took bread, and when he had given thanks, he broke it and
                  gave it to his disciples, saying, &lsquo;Take and eat; this is my body.&rsquo; Then he took
                  a cup, and when he had given thanks, he gave it to them, saying, &lsquo;Drink from it, all
                  of you. This is my blood of the covenant, which is poured out for many for the forgiveness
                  of sins.&rsquo;&rdquo;
                </p>
                <p className="text-amber-700 text-sm">&mdash; <em>Matthew 26:26-28</em></p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                The Passover context is essential for understanding the Eucharist. The Jewish Passover (Pesach)
                commemorated God&rsquo;s liberation of Israel from slavery in Egypt, with the sacrificial lamb
                whose blood saved the firstborn from the angel of death (Exodus 12). Jesus deliberately chose
                this feast to institute the Eucharist, presenting himself as the new Paschal Lamb whose blood
                would seal a new and eternal covenant. St. Paul makes this connection explicit: &ldquo;Christ,
                our Passover lamb, has been sacrificed&rdquo; (<em>1 Corinthians 5:7</em>).
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                The command &ldquo;Do this in remembrance of me&rdquo; (<em>Luke 22:19</em>;
                <em> 1 Corinthians 11:24-25</em>) was not merely a request to recall a past event.
                The Greek word <em>anamnesis</em> carries a far richer meaning: a liturgical memorial
                that makes the saving event truly present. The earliest Christians understood this command
                as an instruction to continue celebrating the Eucharistic meal, and they did so from the
                very beginning.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">St. Paul&rsquo;s Eucharistic Tradition</h3>
                <p className="text-blue-800 mb-3">
                  Writing around 54-55 AD, St. Paul provides the earliest written account of the institution
                  of the Eucharist &mdash; predating even the Gospels:
                </p>
                <p className="text-blue-800 italic mb-3">
                  &ldquo;For I received from the Lord what I also passed on to you: The Lord Jesus, on the
                  night he was betrayed, took bread, and when he had given thanks, he broke it and said,
                  &lsquo;This is my body, which is for you; do this in remembrance of me.&rsquo; In the
                  same way, after supper he took the cup, saying, &lsquo;This cup is the new covenant in
                  my blood; do this, whenever you drink it, in remembrance of me.&rsquo; For whenever you
                  eat this bread and drink this cup, you proclaim the Lord&rsquo;s death until he comes.&rdquo;
                </p>
                <p className="text-blue-700 text-sm">&mdash; <em>1 Corinthians 11:23-26</em></p>
              </div>
            </div>

            {/* The Apostolic Eucharist */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-green-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Apostolic Eucharist</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The Acts of the Apostles provides our earliest glimpse of the Eucharist as a regular
                practice of the Christian community. From the very first days after Pentecost, the
                &ldquo;breaking of bread&rdquo; was one of the four pillars of apostolic community life.
              </p>

              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-green-900 mb-3">The Four Pillars of Apostolic Life</h3>
                <p className="text-green-800 italic mb-3">
                  &ldquo;They devoted themselves to the apostles&rsquo; teaching and to fellowship,
                  to the breaking of bread and to prayer.&rdquo;
                </p>
                <p className="text-green-700 text-sm mb-4">&mdash; <em>Acts 2:42</em></p>
                <ul className="text-green-800 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="font-bold">1.</span>
                    <span><strong>The Apostles&rsquo; Teaching</strong> &mdash; corresponding to the Liturgy of the Word</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">2.</span>
                    <span><strong>Fellowship</strong> (<em>koinonia</em>) &mdash; the communal dimension of worship</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">3.</span>
                    <span><strong>The Breaking of Bread</strong> &mdash; the Eucharistic celebration itself</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">4.</span>
                    <span><strong>Prayer</strong> &mdash; the liturgical and devotional life of the community</span>
                  </li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                By the time of Paul&rsquo;s missionary journeys, the pattern of Sunday worship was already
                established. In Troas, Luke records that &ldquo;on the first day of the week we came together
                to break bread&rdquo; (<em>Acts 20:7</em>). This Sunday gathering &mdash; the Lord&rsquo;s Day,
                the day of the Resurrection &mdash; became the normative day for Eucharistic worship, a practice
                that has continued without interruption for two thousand years.
              </p>

              <p className="text-gray-700 leading-relaxed">
                The early Eucharistic celebrations likely followed the pattern of the Jewish synagogue service
                (readings and prayers) combined with a communal meal. Over time, the sacred meal was separated
                from the common meal (<em>agape</em> feast), in part because of abuses that Paul had to address
                at Corinth (<em>1 Corinthians 11:17-34</em>), where some were eating and drinking to excess
                while others went hungry.
              </p>
            </div>

            {/* The Didache */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <FileText className="w-6 h-6 text-purple-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Didache (~50-120 AD)</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The <em>Didache</em>, or &ldquo;Teaching of the Twelve Apostles,&rdquo; is one of the earliest
                Christian documents outside the New Testament. Discovered in 1873 in a Constantinople library,
                this remarkable text offers a window into how the first Christians actually worshipped.
                Scholars date it variously from as early as 50 AD to around 120 AD, with most placing its
                core material in the late first century.
              </p>

              <div className="bg-purple-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-purple-900 mb-3">Eucharistic Prayers (Chapters 9-10)</h3>
                <p className="text-purple-800 mb-3">
                  The <em>Didache</em> preserves some of the earliest Eucharistic prayers known to exist.
                  These prayers follow a pattern rooted in Jewish <em>berakah</em> (blessing) prayers:
                </p>
                <p className="text-purple-800 italic mb-3">
                  &ldquo;We thank you, our Father, for the holy vine of David your servant, which you made
                  known to us through Jesus your servant. To you be glory forever. As this broken bread was
                  scattered over the hills and then was gathered and became one loaf, so may your Church be
                  gathered from the ends of the earth into your kingdom.&rdquo;
                </p>
                <p className="text-purple-700 text-sm">&mdash; <em>Didache</em>, Chapter 9</p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                Chapter 14 of the <em>Didache</em> provides explicit instruction about the Sunday gathering:
                &ldquo;On the Lord&rsquo;s Day, gather together, break bread, and give thanks, having first
                confessed your sins so that your sacrifice may be pure.&rdquo; The language of &ldquo;sacrifice&rdquo;
                is significant: even at this very early date, the Eucharist was understood not merely as a
                communal meal but as a true sacrifice, fulfilling the prophecy of Malachi 1:11 about a
                &ldquo;pure offering&rdquo; among the nations.
              </p>

              <p className="text-gray-700 leading-relaxed">
                The <em>Didache</em> also stipulates that only the baptised may receive the Eucharist,
                showing that the discipline of communion was established from the earliest period. This
                requirement has remained constant throughout the history of the Church.
              </p>
            </div>

            {/* Justin Martyr */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-red-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">St. Justin Martyr&rsquo;s First Apology (~155 AD)</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Around 155 AD, the philosopher and convert Justin Martyr wrote his <em>First Apology</em> to
                the Roman Emperor Antoninus Pius, defending Christians against charges of atheism and immorality.
                In chapters 65-67, Justin provides the most complete early description of the Eucharistic
                liturgy &mdash; and what he describes is remarkably recognisable to any Catholic who attends
                Mass today.
              </p>

              <div className="bg-red-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-red-900 mb-3">Justin&rsquo;s Description Mapped to the Modern Mass</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="bg-red-200 text-red-900 text-xs font-bold px-2 py-1 rounded">1</span>
                    <p className="text-red-800"><strong>Readings from Scripture</strong> &mdash; &ldquo;The memoirs of the apostles or the writings of the prophets are read, as long as time permits.&rdquo;</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-red-200 text-red-900 text-xs font-bold px-2 py-1 rounded">2</span>
                    <p className="text-red-800"><strong>Homily</strong> &mdash; &ldquo;The president verbally instructs and exhorts to the imitation of these good things.&rdquo;</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-red-200 text-red-900 text-xs font-bold px-2 py-1 rounded">3</span>
                    <p className="text-red-800"><strong>Prayers of the Faithful</strong> &mdash; &ldquo;We all rise together and pray.&rdquo;</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-red-200 text-red-900 text-xs font-bold px-2 py-1 rounded">4</span>
                    <p className="text-red-800"><strong>Kiss of Peace</strong> &mdash; &ldquo;We salute one another with a kiss.&rdquo;</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-red-200 text-red-900 text-xs font-bold px-2 py-1 rounded">5</span>
                    <p className="text-red-800"><strong>Presentation of Gifts</strong> &mdash; &ldquo;Bread and a cup of wine mixed with water are brought to the president.&rdquo;</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-red-200 text-red-900 text-xs font-bold px-2 py-1 rounded">6</span>
                    <p className="text-red-800"><strong>Eucharistic Prayer</strong> &mdash; &ldquo;He offers praise and glory to the Father&hellip; and gives thanks at considerable length.&rdquo;</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-red-200 text-red-900 text-xs font-bold px-2 py-1 rounded">7</span>
                    <p className="text-red-800"><strong>Communion</strong> &mdash; &ldquo;Distribution and participation of the eucharisted elements is made to each, and sent to those absent by the deacons.&rdquo;</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-red-200 text-red-900 text-xs font-bold px-2 py-1 rounded">8</span>
                    <p className="text-red-800"><strong>Collection for the Poor</strong> &mdash; &ldquo;Those who are well-to-do give what each thinks fit; and what is collected is deposited with the president.&rdquo;</p>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                Justin is equally clear about the Real Presence: &ldquo;Not as common bread and common drink
                do we receive these; but&hellip; the food which is blessed by the prayer of his word, and from
                which our blood and flesh by transmutation are nourished, is the flesh and blood of that Jesus
                who was made flesh.&rdquo; This testimony from the mid-second century demolishes any claim that
                belief in the Real Presence was a medieval invention.
              </p>
            </div>

            {/* St. Ignatius of Antioch */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                  <Flame className="w-6 h-6 text-indigo-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">St. Ignatius of Antioch (d. ~107 AD)</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Ignatius, the third bishop of Antioch and a disciple of the Apostle John, was arrested during
                the persecution under Emperor Trajan and transported to Rome for execution. Along the way, he
                wrote seven letters to various churches that are among the most important documents of early
                Christianity. These letters reveal a Church that already possessed a clearly defined liturgical
                structure centred on the bishop.
              </p>

              <div className="bg-indigo-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-indigo-900 mb-3">Bishop-Centred Liturgy</h3>
                <p className="text-indigo-800 italic mb-3">
                  &ldquo;Let that be deemed a proper Eucharist which is administered either by the bishop,
                  or by one to whom he has entrusted it. Wherever the bishop shall appear, there let the
                  multitude also be; even as wherever Jesus Christ is, there is the Catholic Church.&rdquo;
                </p>
                <p className="text-indigo-700 text-sm">&mdash; <em>Letter to the Smyrnaeans</em>, Chapter 8</p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                This passage is remarkable for several reasons. It is the first known use of the term
                &ldquo;Catholic Church&rdquo; (<em>he katholike ekklesia</em>) in Christian literature.
                It also establishes the essential link between the Eucharist and the episcopal office:
                the valid celebration of the Eucharist requires a bishop or his delegate (a priest). This
                principle remains foundational to Catholic sacramental theology today.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Ignatius also provides powerful testimony to the Real Presence. Writing against the Docetists
                who denied that Christ had a real body, he declares: &ldquo;They abstain from the Eucharist
                and from prayer, because they do not confess that the Eucharist is the flesh of our Saviour
                Jesus Christ, which suffered for our sins, and which the Father, of his goodness, raised up
                again&rdquo; (<em>Letter to the Smyrnaeans</em>, ch. 7). The logic is striking: those who
                deny Christ&rsquo;s physical incarnation also deny his physical Eucharistic presence &mdash;
                because the two doctrines are inseparable.
              </p>
            </div>

            {/* Sources */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Sources &amp; Further Reading</h3>
              <ol className="list-decimal list-inside text-gray-600 space-y-2 text-sm">
                <li>The <em>Didache</em>, trans. Aaron Milavec, <em>The Didache: Faith, Hope, and Life of the Earliest Christian Communities</em> (Paulist Press, 2003).</li>
                <li>Justin Martyr, <em>First Apology</em>, in <em>Ante-Nicene Fathers</em>, Vol. 1, eds. Alexander Roberts and James Donaldson.</li>
                <li>St. Ignatius of Antioch, <em>Letters</em>, in <em>Ante-Nicene Fathers</em>, Vol. 1.</li>
                <li>Josef A. Jungmann, <em>The Mass of the Roman Rite: Its Origins and Development</em>, 2 vols. (Benziger, 1951-1955).</li>
                <li><em>Catechism of the Catholic Church</em>, nos. 1322-1419.</li>
                <li>Paul F. Bradshaw, <em>The Search for the Origins of Christian Worship</em>, 2nd ed. (Oxford, 2002).</li>
              </ol>
            </div>
          </div>
        )}

        {/* ==================== TAB 2: EARLY CHURCH ==================== */}
        {activeTab === 'early-church' && (
          <div className="space-y-8">
            {/* House Churches */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Church className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">House Churches and the Domus Ecclesiae</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                For the first three centuries, Christians worshipped primarily in private homes. St. Paul
                sends greetings to &ldquo;the church that meets at their house&rdquo; (<em>Romans 16:5</em>;
                cf. <em>1 Corinthians 16:19</em>, <em>Colossians 4:15</em>, <em>Philemon 1:2</em>). These
                were not purpose-built churches but ordinary dwellings adapted for liturgical use.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">The Dura-Europos House Church (~232 AD)</h3>
                <p className="text-amber-800 mb-3">
                  The most remarkable archaeological evidence of early Christian worship comes from Dura-Europos,
                  a Roman garrison town on the Euphrates in modern-day Syria. Excavated in the 1930s, this
                  converted house is the oldest identifiable Christian church building. It features a large
                  assembly room that could hold about 60 people, a raised platform at one end (likely for
                  the presider), and a separate baptistery with wall frescoes depicting the Good Shepherd,
                  Adam and Eve, and the healing of the paralytic. The layout already suggests the twofold
                  structure of Word and Sacrament that would characterise all later church buildings.
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed">
                These early house churches shaped the intimate, communal character of early Eucharistic worship.
                The presider faced the assembly across a simple table. Readings were proclaimed, prayers were
                offered, bread and wine were consecrated, and communion was distributed &mdash; all in a domestic
                setting that echoed the Upper Room itself. As the community grew, some houses were permanently
                converted into churches (<em>domus ecclesiae</em>), with walls removed to create larger assembly
                spaces, foreshadowing the great basilicas to come.
              </p>
            </div>

            {/* The Apostolic Tradition */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Apostolic Tradition (~215 AD)</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Traditionally attributed to Hippolytus of Rome, the <em>Apostolic Tradition</em> is arguably
                the single most important liturgical document of the pre-Nicene Church. While modern scholars
                debate its precise authorship and dating, it preserves the earliest complete text of a
                Eucharistic prayer &mdash; a prayer whose structure and theology would profoundly influence
                all subsequent liturgical development, including the creation of Eucharistic Prayer II in the
                1970 reformed Missal.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">Structure of the Eucharistic Prayer</h3>
                <p className="text-blue-800 mb-4">
                  The Eucharistic prayer in the <em>Apostolic Tradition</em> contains all the essential
                  elements that would become standard in every Christian liturgy:
                </p>
                <ul className="text-blue-800 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-blue-600">&bull;</span>
                    <span><strong>Dialogue</strong> &mdash; &ldquo;The Lord be with you / And with your spirit / Lift up your hearts / We lift them to the Lord / Let us give thanks&hellip;&rdquo;</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-blue-600">&bull;</span>
                    <span><strong>Thanksgiving</strong> (<em>eucharistia</em>) &mdash; Praise of God for creation and salvation history</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-blue-600">&bull;</span>
                    <span><strong>Institution Narrative</strong> &mdash; The words of Christ at the Last Supper over the bread and wine</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-blue-600">&bull;</span>
                    <span><strong>Anamnesis</strong> &mdash; The memorial of Christ&rsquo;s death and resurrection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-blue-600">&bull;</span>
                    <span><strong>Epiclesis</strong> &mdash; Invocation of the Holy Spirit upon the gifts and the assembly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-blue-600">&bull;</span>
                    <span><strong>Doxology</strong> &mdash; Final glorification of the Trinity</span>
                  </li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed">
                The opening dialogue of the <em>Apostolic Tradition</em> &mdash; &ldquo;The Lord be with you /
                And with your spirit / Lift up your hearts / We lift them to the Lord&rdquo; &mdash; has been
                prayed by Christians in essentially the same words for over 1,800 years. It remains the
                universal opening of the Eucharistic Prayer in both Eastern and Western liturgies, a living
                thread connecting every Mass celebrated today to the worship of the earliest Church in Rome.
              </p>
            </div>

            {/* The Basilica Revolution */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Landmark className="w-6 h-6 text-green-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Edict of Milan and the Basilica Revolution</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The Edict of Milan in 313 AD, issued by Emperors Constantine and Licinius, ended the
                persecution of Christians and transformed the conditions of worship overnight. Christianity
                moved from the catacombs and house churches into the public sphere, and with this change came
                a revolution in liturgical space, ceremonial, and scale.
              </p>

              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-green-900 mb-3">Great Constantinian Basilicas</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-green-800"><strong>Lateran Basilica (~324 AD)</strong> &mdash; The
                    cathedral of Rome and &ldquo;mother of all churches,&rdquo; built on land donated by
                    Constantine. It served as the pope&rsquo;s principal church for over a thousand years.</p>
                  </div>
                  <div>
                    <p className="text-green-800"><strong>Old St. Peter&rsquo;s (~326 AD)</strong> &mdash; Built
                    over the traditional site of Peter&rsquo;s tomb on Vatican Hill. Its vast nave could hold
                    thousands, transforming the Eucharist from an intimate domestic gathering into a grand
                    public celebration.</p>
                  </div>
                  <div>
                    <p className="text-green-800"><strong>Church of the Holy Sepulchre (~335 AD)</strong> &mdash;
                    Built in Jerusalem over Golgotha and the empty tomb, making pilgrimage and stational
                    liturgy central to Christian worship.</p>
                  </div>
                  <div>
                    <p className="text-green-800"><strong>Church of the Nativity (~339 AD)</strong> &mdash;
                    Built in Bethlehem over the traditional site of Christ&rsquo;s birth, another major
                    pilgrimage destination that shaped the liturgical calendar.</p>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                With the building of great basilicas came a shift in liturgical language. In Rome, the
                transition from Greek to Latin occurred gradually during the third and fourth centuries.
                Pope Damasus I (366-384) promoted Latin as the liturgical language, and by the time of
                Pope Leo the Great (440-461), the Roman liturgy was conducted entirely in Latin &mdash;
                which was, crucially, the common language of the people in the Western Roman Empire at
                that time.
              </p>

              <p className="text-gray-700 leading-relaxed">
                The liturgy also became more elaborate. Processions, chanted psalmody, the use of incense
                and candles (originally practical in dark basilicas), and more complex vestments all
                developed during this period. The bishop&rsquo;s chair (<em>cathedra</em>) was placed in
                the apse, and the altar was positioned between the clergy and the people &mdash; a layout
                that influenced church architecture for centuries.
              </p>
            </div>

            {/* Mystagogical Catecheses */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-purple-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Great Mystagogical Catecheses</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The fourth century produced a golden age of liturgical catechesis. Newly baptised Christians
                received &ldquo;mystagogical&rdquo; instruction (from the Greek <em>mystagogia</em>,
                &ldquo;initiation into mysteries&rdquo;) explaining the sacraments they had just received.
                These catechetical homilies are invaluable witnesses to how the Eucharist was actually
                celebrated in different regions of the ancient Church.
              </p>

              <div className="bg-purple-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-purple-900 mb-3">St. Cyril of Jerusalem (~348-350 AD)</h3>
                <p className="text-purple-800 mb-3">
                  Cyril&rsquo;s <em>Mystagogical Catecheses</em>, delivered to the newly baptised during
                  Easter Week in the Church of the Holy Sepulchre, provide a detailed commentary on the
                  Eucharistic liturgy as practised in Jerusalem. He describes the washing of hands, the
                  kiss of peace, the <em>Sursum Corda</em> dialogue, the Sanctus, the epiclesis, the
                  Lord&rsquo;s Prayer, and communion &mdash; receiving the Body in the right hand
                  (&ldquo;making a throne for the King&rdquo;) and the Blood from the chalice.
                </p>
              </div>

              <div className="bg-indigo-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-indigo-900 mb-3">St. Ambrose of Milan (~390 AD)</h3>
                <p className="text-indigo-800 mb-3">
                  Ambrose&rsquo;s <em>De Sacramentis</em> (&ldquo;On the Sacraments&rdquo;) is of
                  extraordinary importance because it quotes portions of the Eucharistic prayer used
                  in Milan that are nearly identical to the Roman Canon as it existed until 1969. The
                  words of consecration Ambrose records &mdash; &ldquo;<em>Hoc est enim corpus meum</em>&rdquo;
                  (&ldquo;For this is my body&rdquo;) &mdash; demonstrate that the core of the Roman Canon
                  was already fixed by the late fourth century and remained essentially unchanged for
                  over 1,500 years.
                </p>
              </div>

              <div className="bg-rose-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-rose-900 mb-3">Theodore of Mopsuestia (~390-428 AD)</h3>
                <p className="text-rose-800">
                  Theodore, writing from Antioch in modern-day Turkey, provides the Eastern perspective.
                  His catechetical homilies describe the liturgy as a dramatic re-enactment of Christ&rsquo;s
                  passion, death, and resurrection. The deacons carrying the bread and wine to the altar
                  represent the angels bearing Christ&rsquo;s body to the tomb. This rich symbolism became
                  characteristic of the Eastern liturgical tradition.
                </p>
              </div>
            </div>

            {/* Liturgical Families */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                  <Globe className="w-6 h-6 text-teal-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Regional Liturgical Families</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                By the fifth century, distinct liturgical families had developed across the Christian world,
                each with its own Eucharistic prayers, calendar, chants, and ceremonial. While all shared
                the same essential structure of Word and Sacrament, the diversity of expression was remarkable.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">Western Rites</h4>
                  <ul className="text-blue-800 space-y-1 text-sm">
                    <li>&bull; <strong>Roman</strong> &mdash; Sober, concise, juridical in tone</li>
                    <li>&bull; <strong>Ambrosian</strong> &mdash; Milan; survives to this day</li>
                    <li>&bull; <strong>Gallican</strong> &mdash; Gaul; elaborate, influenced by the East</li>
                    <li>&bull; <strong>Mozarabic</strong> &mdash; Spain; preserved in Toledo to this day</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">Eastern Rites</h4>
                  <ul className="text-green-800 space-y-1 text-sm">
                    <li>&bull; <strong>Byzantine</strong> &mdash; Constantinople; most widely used Eastern rite</li>
                    <li>&bull; <strong>Antiochene (West Syrian)</strong> &mdash; Rich anaphoral tradition</li>
                    <li>&bull; <strong>East Syrian (Chaldean)</strong> &mdash; Mesopotamia and India</li>
                    <li>&bull; <strong>Alexandrian</strong> &mdash; Egypt and Ethiopia</li>
                    <li>&bull; <strong>Armenian</strong> &mdash; Unique synthesis of East and West</li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                Several fixed elements became universal across all traditions during this period. The
                <strong> Sanctus</strong> (&ldquo;Holy, Holy, Holy&rdquo;), drawn from Isaiah 6:3 and the
                heavenly liturgy of Revelation 4:8, was incorporated into virtually every Eucharistic
                prayer by the fourth century. The <strong>Nicene-Constantinopolitan Creed</strong> entered
                the liturgy at Antioch around 471, was adopted at Constantinople in 511, and reached Rome
                only in 1014 when Emperor Henry II insisted on its inclusion at his imperial coronation Mass.
                The <strong>Lord&rsquo;s Prayer</strong> was placed within the Communion Rite by most
                traditions, with Pope Gregory the Great fixing its position immediately after the Canon
                in the Roman Rite.
              </p>
            </div>

            {/* Sources */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Sources &amp; Further Reading</h3>
              <ol className="list-decimal list-inside text-gray-600 space-y-2 text-sm">
                <li>Paul F. Bradshaw, Maxwell E. Johnson, and L. Edward Phillips, <em>The Apostolic Tradition: A Commentary</em> (Fortress Press, 2002).</li>
                <li>St. Cyril of Jerusalem, <em>Mystagogical Catecheses</em>, in <em>Nicene and Post-Nicene Fathers</em>, Series II, Vol. 7.</li>
                <li>St. Ambrose of Milan, <em>De Sacramentis</em>, trans. T. Thompson (SPCK, 1919).</li>
                <li>Robert Taft, <em>The Liturgy of the Hours in East and West</em> (Liturgical Press, 1986).</li>
                <li>Josef A. Jungmann, <em>The Mass of the Roman Rite</em>, Vol. 1 (Benziger, 1951).</li>
                <li>L. Michael White, <em>The Social Origins of Christian Architecture</em>, 2 vols. (Trinity Press, 1996).</li>
              </ol>
            </div>
          </div>
        )}

        {/* ==================== TAB 3: THE ROMAN CANON ==================== */}
        {activeTab === 'roman-canon' && (
          <div className="space-y-8">
            {/* Formation of the Canon */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <FileText className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Formation of the Roman Canon (4th-7th Century)</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The Roman Canon &mdash; the ancient Eucharistic Prayer of the Roman Rite, known today as
                Eucharistic Prayer I &mdash; is one of the most venerable prayers in Christendom. Its
                formation was not the work of a single author or a single moment but a gradual process
                spanning several centuries, with key contributions from some of the greatest popes and
                theologians of the early Church.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">Key Figures in the Canon&rsquo;s Formation</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-amber-800"><strong>St. Ambrose of Milan (~340-397)</strong> &mdash; The
                    earliest witness to the Roman Canon. His <em>De Sacramentis</em> quotes substantial portions
                    that are recognisably the same prayer used in Rome, proving the Canon&rsquo;s core was
                    established by the late fourth century.</p>
                  </div>
                  <div>
                    <p className="text-amber-800"><strong>Pope Leo the Great (440-461)</strong> &mdash; Contributed
                    several of the variable prefaces and refined the theological precision of the Canon&rsquo;s
                    language. His elegant Latin style left a lasting mark on Roman liturgical prose.</p>
                  </div>
                  <div>
                    <p className="text-amber-800"><strong>Pope Gregory the Great (590-604)</strong> &mdash; Made
                    the last major additions, including the phrase &ldquo;<em>diesque nostros in tua pace
                    disponas</em>&rdquo; (&ldquo;order our days in your peace&rdquo;) in the <em>Hanc igitur</em>
                    prayer, and fixed the Lord&rsquo;s Prayer immediately after the Canon. After Gregory, the
                    Roman Canon remained essentially unchanged for nearly 1,400 years.</p>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                From roughly the eighth century onward, the Canon was prayed silently by the priest,
                a practice known as the &ldquo;Canon of Silence.&rdquo; The congregation heard only
                the opening dialogue, the Sanctus, and the final doxology with their &ldquo;Amen.&rdquo;
                This practice of the silent Canon became one of the most distinctive features of the
                Roman Rite and continued until the liturgical reforms of the 1960s. Defenders of the
                practice argued that the silence created a space of profound mystery and adoration,
                while reformers contended that the people should be able to hear and follow the central
                prayer of the Mass.
              </p>
            </div>

            {/* The Sacramentaries */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Great Sacramentaries</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Before the development of the complete <em>Missale</em> (missal), the prayers of the Mass
                were contained in books called sacramentaries. These contained only the presider&rsquo;s
                texts &mdash; readings, chants, and rubrics were in separate books. Three great sacramentaries
                shaped the Roman liturgy:
              </p>

              <div className="space-y-4 mb-6">
                <div className="bg-blue-50 p-5 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">The Leonine (Veronese) Sacramentary (~6th Century)</h3>
                  <p className="text-blue-800">
                    Not a true sacramentary but a collection of Mass prayers (orations, prefaces, etc.),
                    many attributed to Pope Leo the Great. It is the oldest surviving collection of Roman
                    liturgical texts and provides crucial evidence for the development of the Roman Canon
                    and the variable prayers of the Mass. The manuscript was discovered in the cathedral
                    library of Verona.
                  </p>
                </div>

                <div className="bg-green-50 p-5 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-900 mb-2">The Gelasian Sacramentary (~7th Century)</h3>
                  <p className="text-green-800">
                    Attributed (inaccurately) to Pope Gelasius I (492-496), the <em>Sacramentarium
                    Gelasianum</em> is the first complete Roman sacramentary. It contains the Mass prayers
                    organised by the liturgical year, along with ordination rites, blessings, and the full
                    text of the Roman Canon. It represents the Roman liturgy as practised in the parish
                    churches (<em>tituli</em>) of Rome, as distinct from the papal liturgy.
                  </p>
                </div>

                <div className="bg-purple-50 p-5 rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-900 mb-2">The Gregorian Sacramentary (Late 7th-8th Century)</h3>
                  <p className="text-purple-800">
                    Named after Pope Gregory the Great, this sacramentary represents the papal liturgy of
                    Rome. It became the most influential of all liturgical books when Charlemagne requested
                    a copy from Pope Hadrian I around 785-786 to serve as the standard for liturgical
                    worship throughout the Frankish Empire. The copy Hadrian sent, however, was incomplete
                    for Frankish needs, leading to a momentous supplement.
                  </p>
                </div>
              </div>
            </div>

            {/* Charlemagne's Unification */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-red-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Charlemagne&rsquo;s Liturgical Unification</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The Carolingian liturgical reform of the eighth and ninth centuries was one of the most
                consequential events in the history of the Mass. Charlemagne (r. 768-814), seeking to
                unify his vast empire culturally and religiously, made the Roman liturgy the standard
                throughout his domains. The story of how this happened reveals the complex interplay
                between Rome and the Frankish lands that created the liturgy most Catholics know.
              </p>

              <div className="bg-red-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-red-900 mb-3">The Alcuin Supplement (~801 AD)</h3>
                <p className="text-red-800 mb-3">
                  When the Gregorian Sacramentary from Rome proved incomplete for Frankish parish use
                  (it covered only the papal stational liturgy), the scholar Alcuin of York compiled a
                  supplement drawing heavily on Gallican liturgical traditions. This supplement &mdash;
                  distinguished by the heading <em>&ldquo;Hucusque&rdquo;</em> (&ldquo;up to this point&rdquo;)
                  &mdash; added prayers for Sundays after Pentecost, votive Masses, blessings, and other
                  material that the pure Roman books lacked.
                </p>
                <p className="text-red-800">
                  Over time, the boundary between the original Roman material and Alcuin&rsquo;s Gallican
                  supplement was lost. The result was a hybrid <strong>Romano-Frankish liturgy</strong>
                  that combined Roman sobriety with Gallican richness. When this hybrid was re-imported
                  to Rome in the tenth and eleventh centuries by the German emperors, it gradually
                  replaced the older, pure Roman usage. The Mass that the medieval and Tridentine Church
                  would know was, in fact, this Romano-Frankish synthesis.
                </p>
              </div>
            </div>

            {/* The Missale Romanum Before Trent */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-indigo-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Missale Romanum Before Trent</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The high and late Middle Ages saw both the consolidation and the fragmentation of the
                Roman Rite. On one hand, the <em>Ordo Romanus Primus</em> (~700 AD) described a
                magnificent papal liturgy that served as the ideal. On the other hand, local practices
                proliferated, creating a bewildering variety of &ldquo;Uses&rdquo; that, while sharing
                the Roman Canon, differed in almost everything else.
              </p>

              <div className="bg-indigo-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-indigo-900 mb-3">Notable Medieval Uses</h3>
                <ul className="text-indigo-800 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="font-bold">&bull;</span>
                    <span><strong>Sarum Use</strong> &mdash; The Use of Salisbury, the most widespread English variant, known for its elaborate ceremonial and distinctive chant repertoire. It shaped English Catholicism until the Reformation.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">&bull;</span>
                    <span><strong>Dominican Use</strong> &mdash; The Friars Preachers developed their own streamlined rite suited to their itinerant life. It was celebrated worldwide wherever Dominicans served.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">&bull;</span>
                    <span><strong>Carmelite, Carthusian, and Premonstratensian Uses</strong> &mdash; Each major religious order had its own liturgical customs.</span>
                  </li>
                </ul>
                <p className="text-indigo-800 mt-3">
                  The first printed <em>Missale Romanum</em> appeared in Milan in 1474, a milestone that
                  would make liturgical standardisation both possible and inevitable.
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                The growth of &ldquo;Low Mass&rdquo; (<em>Missa privata</em>) was another major medieval
                development. Originally, the Mass was always a communal celebration. But the multiplication
                of Mass stipends, the theology of applying the fruits of the Mass for particular intentions
                (especially for the dead), and the increase in priest-monks in monasteries led to the
                widespread practice of priests celebrating Mass alone or with only a server. This &ldquo;Low
                Mass&rdquo; eventually became the most common form of the Roman Rite, with the more elaborate
                &ldquo;High Mass&rdquo; reserved for Sundays and feasts.
              </p>
            </div>

            {/* Council of Trent */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                  <Landmark className="w-6 h-6 text-emerald-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Council of Trent and the 1570 Missal</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The Protestant Reformation posed the most serious theological challenge to the Mass since
                the early heresies. Luther, Calvin, and Zwingli all attacked the Catholic understanding of
                the Mass as a sacrifice, the Real Presence, and the ministerial priesthood. The Council of
                Trent (1545-1563) responded with definitive doctrinal and liturgical action.
              </p>

              <div className="bg-emerald-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-emerald-900 mb-3">Session XXII (September 17, 1562)</h3>
                <p className="text-emerald-800 mb-3">
                  The Council&rsquo;s <em>Doctrine on the Most Holy Sacrifice of the Mass</em> defined:
                </p>
                <ul className="text-emerald-800 space-y-2">
                  <li>&bull; The Mass is a true, proper, and propitiatory sacrifice, not merely a sacrifice of praise or a memorial</li>
                  <li>&bull; Christ instituted the priesthood at the Last Supper and commanded the Apostles to &ldquo;do this in remembrance of me&rdquo;</li>
                  <li>&bull; The sacrifice of the Mass is identical with the sacrifice of the Cross, differing only in the manner of offering</li>
                  <li>&bull; The Mass benefits the living and the dead</li>
                  <li>&bull; The Canon of the Mass is free from error and contains nothing that does not savour of holiness and piety</li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                The Council also mandated a revision of the Missal, which was carried out under Pope Pius V.
                His <em>Missale Romanum</em> of 1570, promulgated by the bull <em>Quo Primum</em>, established
                a uniform Roman Rite throughout the Western Church. Crucially, Pius V exempted any rite that
                could demonstrate more than 200 years of continuous use &mdash; which preserved the Ambrosian,
                Mozarabic, Dominican, Carmelite, and several other rites.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                The Congregation of Rites, established by Pope Sixtus V in 1588, became the guardian of
                liturgical observance. Subsequent revisions by Pope Clement VIII (1604) and Pope Urban VIII
                (1634) corrected errors and updated rubrics, but the substance of the Mass remained stable.
                The Roman Canon prayed at a Mass in 1570 was virtually identical to the Roman Canon prayed
                at a Mass in 1962 &mdash; nearly four centuries of remarkable continuity.
              </p>
            </div>

            {/* Sources */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Sources &amp; Further Reading</h3>
              <ol className="list-decimal list-inside text-gray-600 space-y-2 text-sm">
                <li>Josef A. Jungmann, <em>The Mass of the Roman Rite</em>, Vol. 1, Chapters 4-8 (Benziger, 1951).</li>
                <li>Council of Trent, Session XXII, in Denzinger, <em>Enchiridion Symbolorum</em>, nos. 1738-1759.</li>
                <li>Pope Pius V, Apostolic Constitution <em>Quo Primum</em> (July 14, 1570).</li>
                <li>Cyrille Vogel, <em>Medieval Liturgy: An Introduction to the Sources</em>, trans. W. Storey and N. Rasmussen (Pastoral Press, 1986).</li>
                <li>Alcuin Reid, <em>The Organic Development of the Liturgy</em>, 2nd ed. (Ignatius Press, 2005).</li>
                <li>Marcel Metzger, <em>History of the Liturgy: The Major Stages</em> (Liturgical Press, 1997).</li>
              </ol>
            </div>
          </div>
        )}

        {/* ==================== TAB 4: EASTERN RITES ==================== */}
        {activeTab === 'eastern-rites' && (
          <div className="space-y-8">
            {/* Byzantine Divine Liturgy */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Church className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Byzantine Divine Liturgy</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The Byzantine Divine Liturgy is the most widely celebrated liturgy in Eastern Christianity,
                used by some 300 million Christians worldwide &mdash; Orthodox, Greek Catholic, and other
                Eastern Catholics in communion with Rome. It is a liturgy of extraordinary beauty and
                theological depth, in which every gesture, chant, and visual element is saturated with
                meaning.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">Three Forms of the Divine Liturgy</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-amber-800"><strong>Divine Liturgy of St. John Chrysostom</strong> &mdash;
                    The ordinary form, celebrated on most days of the year. St. John Chrysostom (347-407),
                    Archbishop of Constantinople, is traditionally credited with its final form, though its
                    roots are much older. It is characterised by its relative brevity and the beauty of its
                    prayers.</p>
                  </div>
                  <div>
                    <p className="text-amber-800"><strong>Divine Liturgy of St. Basil the Great</strong> &mdash;
                    A longer and more ancient anaphora, celebrated about ten times per year (the Sundays of
                    Lent, Holy Thursday, Holy Saturday, Christmas Eve, Theophany Eve, and the feast of
                    St. Basil on January 1). Its Eucharistic prayer is notably more expansive in its
                    theology of salvation history.</p>
                  </div>
                  <div>
                    <p className="text-amber-800"><strong>Liturgy of the Presanctified Gifts</strong> &mdash;
                    A Lenten service in which communion is distributed from gifts consecrated at the previous
                    Sunday&rsquo;s liturgy. No consecration takes place; it is essentially Vespers combined
                    with communion, reflecting the ancient tradition that the full Divine Liturgy is not
                    celebrated on Lenten weekdays.</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">Distinctive Features of the Byzantine Liturgy</h3>
                <ul className="text-blue-800 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="font-bold">&bull;</span>
                    <span><strong>The Iconostasis</strong> &mdash; A screen of icons separating the sanctuary from the nave, representing the boundary between heaven and earth. The Royal Doors open and close at key moments, creating a powerful sense of divine mystery.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">&bull;</span>
                    <span><strong>The Great Entrance</strong> &mdash; The solemn procession of the bread and wine from the preparation table through the nave to the altar, accompanied by the Cherubic Hymn. The congregation bows in reverence as the gifts pass.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">&bull;</span>
                    <span><strong>The Epiclesis</strong> &mdash; The invocation of the Holy Spirit upon the gifts holds particular prominence in Byzantine theology. While the Western tradition emphasises the words of institution as the moment of consecration, the East emphasises the epiclesis, though both elements are considered essential.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">&bull;</span>
                    <span><strong>Leavened Bread</strong> &mdash; The Byzantine tradition uses leavened bread (<em>prosphora</em>), symbolising the risen Christ. This contrasts with the Western use of unleavened bread (azymes).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">&bull;</span>
                    <span><strong>Communion by Intinction</strong> &mdash; The faithful receive both the Body and Blood together, administered with a golden spoon (<em>cochlear</em>) from the chalice.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* West Syrian */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Globe className="w-6 h-6 text-green-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">West Syrian (Antiochene) Tradition</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Antioch, where the followers of Jesus were first called &ldquo;Christians&rdquo;
                (<em>Acts 11:26</em>), developed one of the richest liturgical traditions in Christendom.
                The West Syrian or Antiochene family is distinguished above all by the sheer number and
                variety of its anaphoras (Eucharistic prayers) &mdash; over 70 are known, far more than
                any other tradition.
              </p>

              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-green-900 mb-3">The Anaphora of St. James</h3>
                <p className="text-green-800 mb-3">
                  The most venerable prayer of this tradition is the Anaphora of St. James, attributed to
                  James the &ldquo;brother of the Lord&rdquo; and first bishop of Jerusalem. While its
                  current form dates to the fourth-fifth century, it contains material of great antiquity.
                  It is characterised by its rich theological imagery, its extensive intercessions, and its
                  vivid epiclesis. The Anaphora of St. James is still used in the Syriac Orthodox Church
                  and by some Eastern Catholic communities.
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                Two Eastern Catholic Churches preserve this tradition in communion with Rome. The
                <strong> Maronite Catholic Church</strong>, centred in Lebanon, has its own distinctive
                Syriac liturgy with both East and West Syrian elements. The <strong>Syro-Malankara
                Catholic Church</strong> in India, established through reunion with Rome in 1930,
                celebrates the West Syrian liturgy with Indian cultural adaptations.
              </p>
            </div>

            {/* East Syrian */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Cross className="w-6 h-6 text-purple-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">East Syrian (Chaldean) Tradition</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The East Syrian tradition traces its roots to the Apostolic mission to Mesopotamia, traditionally
                associated with the Apostles Thomas and Thaddeus (Addai) and his disciple Mari. This tradition
                spread from present-day Iraq eastward along the Silk Road, reaching China by the seventh century,
                making it one of the most geographically extensive Christian traditions in history.
              </p>

              <div className="bg-purple-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-purple-900 mb-3">The Anaphora of Addai and Mari</h3>
                <p className="text-purple-800 mb-3">
                  This is perhaps the most remarkable and controversial Eucharistic prayer in existence.
                  Possibly dating to the third century, the Anaphora of Addai and Mari is unique among
                  all surviving anaphoras because it contains <strong>no explicit institution narrative</strong>
                  &mdash; the words &ldquo;This is my body&rdquo; and &ldquo;This is my blood&rdquo; do not
                  appear in the text. Instead, the institution of the Eucharist is woven implicitly throughout
                  the prayer&rsquo;s thanksgiving and intercession.
                </p>
                <p className="text-purple-800">
                  In 2001, the Pontifical Council for Promoting Christian Unity issued a historic declaration
                  recognising the validity of this anaphora as celebrated by the Assyrian Church of the East,
                  permitting Chaldean Catholics in certain pastoral situations to receive communion at Assyrian
                  liturgies. This decision was significant for ecumenical theology, demonstrating that the
                  institution narrative, while normative, need not be present in the form familiar from
                  Western Eucharistic prayers for a valid Eucharist.
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                The East Syrian liturgy is known as the <strong>Qurbana</strong> (from the Syriac word for
                &ldquo;offering&rdquo;). The <strong>Syro-Malabar Catholic Church</strong> in India, one
                of the largest Eastern Catholic Churches with over 4 million members, celebrates this
                tradition. The Syro-Malabar Church traces its origins to the Apostle Thomas, who according
                to tradition arrived in Kerala in 52 AD, making the Indian Christian community one of the
                oldest in the world.
              </p>
            </div>

            {/* Alexandrian */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <Sun className="w-6 h-6 text-red-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Alexandrian Tradition</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Alexandria, the great intellectual capital of the ancient world, developed a liturgical
                tradition of remarkable depth and antiquity. The Alexandrian family includes the
                Coptic and Ethiopian traditions, each with distinctive characteristics.
              </p>

              <div className="bg-red-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-red-900 mb-3">The Liturgy of St. Mark</h3>
                <p className="text-red-800">
                  The ancient Alexandrian liturgy is attributed to St. Mark the Evangelist, traditionally
                  the founder of the Church of Alexandria. Its Eucharistic prayer is notable for placing
                  the intercessions before the institution narrative &mdash; a structural feature unique
                  to the Alexandrian family. The <strong>Coptic Catholic Church</strong> preserves this
                  heritage in communion with Rome, celebrating the Liturgy of St. Basil (adapted for
                  Coptic use), St. Gregory, and St. Cyril.
                </p>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-orange-900 mb-3">The Ethiopian Tradition</h3>
                <p className="text-orange-800">
                  The <strong>Ethiopian Catholic Church</strong> possesses one of the most extraordinary
                  liturgical heritages in Christendom. The Ethiopian Rite includes <strong>14 different
                  anaphoras</strong>, more than any other tradition. Its worship is characterised by
                  <strong> liturgical dance</strong>, the use of the <strong>sistrum</strong> (a percussion
                  instrument with ancient Egyptian roots), and chanting in Ge&rsquo;ez, the classical
                  Ethiopian language. Ethiopian Christianity preserves many features reminiscent of Old
                  Testament worship, including a strong emphasis on the Ark of the Covenant and the
                  observance of Saturday as well as Sunday.
                </p>
              </div>
            </div>

            {/* Armenian */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-teal-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Armenian Tradition</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Armenia holds the distinction of being the first nation to adopt Christianity as its
                state religion, around 301 AD under King Tiridates III and St. Gregory the Illuminator.
                The Armenian liturgy is a fascinating synthesis, drawing on both Antiochene and
                Constantinopolitan elements while developing its own unique character.
              </p>

              <div className="bg-teal-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-teal-900 mb-3">Distinctive Armenian Features</h3>
                <ul className="text-teal-800 space-y-2">
                  <li>&bull; The principal Eucharistic prayer is the <strong>Anaphora of St. Athanasius</strong> (not the Alexandrian saint but a local attribution)</li>
                  <li>&bull; Like the Roman Rite, the Armenian tradition uses <strong>unleavened bread</strong> &mdash; unique among Eastern traditions</li>
                  <li>&bull; Wine is not mixed with water, another distinctive practice</li>
                  <li>&bull; The liturgy is celebrated in <strong>classical Armenian</strong> (<em>Grabar</em>), preserving a linguistic link to the earliest period of Armenian Christianity</li>
                  <li>&bull; The <em>Badarak</em> (Divine Liturgy) includes a magnificent curtain ceremony, where a curtain is drawn across the sanctuary at key moments</li>
                </ul>
              </div>
            </div>

            {/* Unity in Diversity */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-indigo-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Unity in Diversity</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Despite their rich diversity, all of these liturgical traditions share essential elements that
                testify to their common apostolic origin. Every authentic Eucharistic liturgy &mdash; East
                and West &mdash; includes the proclamation of Scripture, a Eucharistic prayer of thanksgiving,
                the consecration of bread and wine, communion, and the understanding of the Eucharist as a
                true sacrifice that makes present the one sacrifice of Christ on the Cross.
              </p>

              <div className="bg-indigo-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-indigo-900 mb-3">Vatican II: <em>Orientalium Ecclesiarum</em> (1964)</h3>
                <p className="text-indigo-800">
                  The Second Vatican Council&rsquo;s decree on the Eastern Catholic Churches affirmed the
                  equal dignity of all rites and urged Eastern Catholics to preserve and return to their
                  authentic liturgical traditions. &ldquo;All Eastern Rite members should know and be
                  convinced that they can and should always preserve their legitimate liturgical rite and
                  their established way of life, and that these may not be altered except to obtain for
                  themselves an organic improvement&rdquo; (OE 6). This represented a decisive rejection of
                  &ldquo;Latinisation&rdquo; &mdash; the centuries-long tendency to impose Roman liturgical
                  practices on Eastern Catholics.
                </p>
              </div>
            </div>

            {/* Sources */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Sources &amp; Further Reading</h3>
              <ol className="list-decimal list-inside text-gray-600 space-y-2 text-sm">
                <li>Robert F. Taft, <em>The Byzantine Rite: A Short History</em> (Liturgical Press, 1992).</li>
                <li>Robert F. Taft, <em>A History of the Liturgy of St. John Chrysostom</em>, 6 vols. (Pontifical Oriental Institute, 1975-2008).</li>
                <li>Vatican II, Decree <em>Orientalium Ecclesiarum</em> (November 21, 1964).</li>
                <li>Pontifical Council for Promoting Christian Unity, &ldquo;Guidelines for Admission to the Eucharist between the Chaldean Church and the Assyrian Church of the East&rdquo; (2001).</li>
                <li>Archdale A. King, <em>The Rites of Eastern Christendom</em>, 2 vols. (Gorgias Press, 2007 reprint).</li>
                <li>Baby Varghese, <em>West Syrian Liturgical Theology</em> (Ashgate, 2004).</li>
              </ol>
            </div>
          </div>
        )}

        {/* ==================== TAB 5: SACRED ARTS ==================== */}
        {activeTab === 'sacred-arts' && (
          <div className="space-y-8">
            {/* Gregorian Chant */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Music className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Gregorian Chant</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Gregorian chant is the quintessential music of the Roman Rite &mdash; a vast repertoire of
                unaccompanied, monophonic melodies that has been the Church&rsquo;s musical backbone for
                over a millennium. Named after Pope Gregory the Great (590-604), who was traditionally
                credited with codifying the repertoire, modern scholarship has shown that the chant as
                we know it actually developed during the Carolingian era (8th-9th centuries) as a synthesis
                of Roman and Frankish (Gallican) musical traditions.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">&ldquo;Pride of Place&rdquo;</h3>
                <p className="text-amber-800 italic mb-3">
                  &ldquo;The Church acknowledges Gregorian chant as specially suited to the Roman liturgy:
                  therefore, other things being equal, it should be given pride of place in liturgical services.&rdquo;
                </p>
                <p className="text-amber-700 text-sm">&mdash; <em>Sacrosanctum Concilium</em>, 116 (Vatican II, 1963)</p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                The chant repertoire encompasses a variety of forms, each corresponding to a particular
                liturgical function: the <strong>Introit</strong> (entrance chant), <strong>Gradual</strong>
                (responsorial psalm after the first reading), <strong>Alleluia</strong> (before the Gospel),
                <strong> Offertory</strong>, and <strong>Communion</strong> antiphons. These &ldquo;Proper&rdquo;
                chants change with each feast or season, while the &ldquo;Ordinary&rdquo; settings (Kyrie,
                Gloria, Credo, Sanctus, Agnus Dei) remain constant. The official collection is the
                <em> Graduale Romanum</em>.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">The Solesmes Revival</h3>
                <p className="text-blue-800">
                  By the nineteenth century, Gregorian chant had fallen into serious decline, with
                  corrupted melodies and heavy-handed performance practices. The Benedictine monks of
                  Solesmes Abbey in France, led by Dom Prosper Gueranger (1805-1875) and later Dom
                  Joseph Pothier and Dom Andre Mocquereau, undertook a monumental restoration of the
                  chant based on the oldest manuscripts. Their work, culminating in the Vatican Edition
                  of the <em>Graduale Romanum</em> (1908) commissioned by Pope Pius X, restored the
                  authentic melodies and established the flowing, prayer-like rhythmic interpretation
                  that characterises good chant performance today.
                </p>
              </div>
            </div>

            {/* Polyphony */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Music className="w-6 h-6 text-purple-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Sacred Polyphony</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The development of polyphony &mdash; music in multiple independent voices &mdash; is one
                of the great contributions of the Catholic Church to Western civilisation. Beginning with
                simple two-voice <em>organum</em> in the ninth century, sacred polyphony grew in complexity
                and beauty over the following centuries, reaching its apex in the Renaissance.
              </p>

              <div className="bg-purple-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-purple-900 mb-3">The Palestrina Legend</h3>
                <p className="text-purple-800 mb-3">
                  Giovanni Pierluigi da Palestrina (1525-1594) is the most celebrated composer of sacred
                  polyphony. According to a famous legend, his <em>Missa Papae Marcelli</em> (1567)
                  &ldquo;saved&rdquo; polyphony from being banned by the Council of Trent. While the
                  story is almost certainly apocryphal, it contains a kernel of truth: the Council Fathers
                  did express concerns about overly elaborate polyphony that obscured the sacred texts.
                </p>
                <p className="text-purple-800">
                  What Trent actually legislated was more nuanced: music should be composed &ldquo;not
                  to give empty pleasure to the ear, but in such a way that the words may be clearly
                  understood by all&rdquo; (Session XXII, <em>Decretum de observandis et evitandis in
                  celebratione missarum</em>). Palestrina&rsquo;s crystalline textures, in which the
                  text is always audible, became the gold standard for how this principle could be
                  realised in practice.
                </p>
              </div>

              <div className="bg-rose-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-rose-900 mb-3">Other Masters of Sacred Polyphony</h3>
                <ul className="text-rose-800 space-y-2">
                  <li>&bull; <strong>Tomas Luis de Victoria</strong> (1548-1611) &mdash; Spanish mystic whose <em>Officium Defunctorum</em> is considered one of the greatest works of sacred music</li>
                  <li>&bull; <strong>William Byrd</strong> (1543-1623) &mdash; English Catholic who composed three settings of the Mass in secret during the persecution, works of exquisite beauty and faith</li>
                  <li>&bull; <strong>Orlando di Lasso</strong> (1532-1594) &mdash; Prolific Franco-Flemish composer whose output encompassed over 2,000 works</li>
                </ul>
                <p className="text-rose-800 mt-3">
                  The <strong>Cecilian Movement</strong> of the nineteenth century sought to restore
                  Palestrina-style polyphony to parish churches, countering the operatic excess that
                  had infiltrated liturgical music during the Baroque and Classical periods.
                </p>
              </div>
            </div>

            {/* The Organ */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Music className="w-6 h-6 text-green-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Pipe Organ: King of Instruments</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The pipe organ holds a unique place in Catholic liturgical tradition. Pope Pius X, in
                his landmark motu proprio <em>Tra le sollecitudini</em> (1903), declared that &ldquo;the
                traditional instrument of the Church is the organ,&rdquo; and the Second Vatican Council
                confirmed that &ldquo;the pipe organ is to be held in high esteem, for it is the
                traditional musical instrument which adds a wonderful splendour to the Church&rsquo;s
                ceremonies and powerfully lifts up man&rsquo;s mind to God&rdquo;
                (<em>Sacrosanctum Concilium</em>, 120).
              </p>

              <div className="bg-green-50 p-6 rounded-lg">
                <p className="text-green-800">
                  From small medieval portative organs to the great instruments of Cavaille-Coll in
                  France and Schnitger in Germany, the organ has accompanied the Mass for over a
                  thousand years. Its unique ability to sustain tone indefinitely, to fill vast spaces
                  with sound, and to provide a tonal foundation for congregational singing makes it
                  ideally suited to the liturgy. The great organ repertoire of Bach, Franck, Widor,
                  Messiaen, and Durufle represents some of the finest music ever composed in service
                  of the sacred.
                </p>
              </div>
            </div>

            {/* Architecture */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Landmark className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Sacred Architecture</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Church architecture is not merely functional &mdash; it is theology in stone, a built
                expression of the community&rsquo;s faith and understanding of the liturgy. The
                development of sacred architecture mirrors the development of the Mass itself.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-blue-50 p-5 rounded-lg">
                  <h3 className="text-base font-semibold text-blue-900 mb-2">Catacomb Art (1st-4th c.)</h3>
                  <p className="text-blue-800 text-sm">The earliest Christian art in the Roman catacombs features symbolic images: the fish (<em>ichthys</em>), the anchor of hope, the Good Shepherd, and Eucharistic symbols of bread, wine, and fish. These encoded images protected the faith in times of persecution.</p>
                </div>
                <div className="bg-green-50 p-5 rounded-lg">
                  <h3 className="text-base font-semibold text-green-900 mb-2">Basilica Form (4th c.)</h3>
                  <p className="text-green-800 text-sm">The Roman basilica &mdash; originally a civic building &mdash; was adapted for Christian worship. Its long nave oriented the assembly toward the altar and the apse beyond, creating a spatial metaphor for the pilgrim journey toward God.</p>
                </div>
                <div className="bg-amber-50 p-5 rounded-lg">
                  <h3 className="text-base font-semibold text-amber-900 mb-2">Romanesque (10th-12th c.)</h3>
                  <p className="text-amber-800 text-sm">Massive stone walls, rounded arches, barrel vaults, and thick pillars created interiors of solemn grandeur. The crypt beneath the altar connected the celebration of Mass to the veneration of relics and the communion of saints.</p>
                </div>
                <div className="bg-purple-50 p-5 rounded-lg">
                  <h3 className="text-base font-semibold text-purple-900 mb-2">Gothic (12th-16th c.)</h3>
                  <p className="text-purple-800 text-sm">The pointed arch, ribbed vault, and flying buttress dissolved the walls into vast expanses of stained glass, creating what Abbot Suger of Saint-Denis called &ldquo;theology in light.&rdquo; Chartres, Notre-Dame, and Cologne are supreme expressions of this vision.</p>
                </div>
              </div>

              <div className="bg-red-50 p-5 rounded-lg">
                <h3 className="text-base font-semibold text-red-900 mb-2">Baroque (16th-18th c.)</h3>
                <p className="text-red-800 text-sm">The Counter-Reformation produced churches of dramatic splendour designed to overwhelm the senses and draw the faithful into the mystery of the Mass. Gold, marble, frescoes, and dynamic sculptural programs (Bernini&rsquo;s baldachin in St. Peter&rsquo;s) created immersive environments of glory.</p>
              </div>
            </div>

            {/* Vestments and Vessels */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-indigo-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Vestments, Vessels, and Sacred Objects</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Liturgical vestments evolved from the ordinary clothing of the late Roman Empire. As secular
                fashion changed, the Church preserved the older forms, which gradually took on sacred
                significance. Each vestment carries symbolic meaning.
              </p>

              <div className="bg-indigo-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-indigo-900 mb-3">Liturgical Vestments</h3>
                <ul className="text-indigo-800 space-y-2">
                  <li>&bull; <strong>Alb</strong> &mdash; A white linen garment symbolising baptismal purity, derived from the Roman <em>tunica alba</em></li>
                  <li>&bull; <strong>Chasuble</strong> &mdash; The outermost vestment of the priest, from the Roman travelling cloak (<em>casula</em> or &ldquo;little house&rdquo;); its colour varies with the liturgical season</li>
                  <li>&bull; <strong>Stole</strong> &mdash; A band of fabric worn around the neck, the sign of priestly authority and the &ldquo;yoke of Christ&rdquo;</li>
                </ul>
              </div>

              <div className="bg-rose-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-rose-900 mb-3">Liturgical Colours</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-white border border-gray-300"></div>
                    <span className="text-rose-800 text-sm"><strong>White</strong> &mdash; Joy, glory, purity</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-red-600"></div>
                    <span className="text-rose-800 text-sm"><strong>Red</strong> &mdash; Martyrdom, Holy Spirit</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-green-600"></div>
                    <span className="text-rose-800 text-sm"><strong>Green</strong> &mdash; Ordinary Time, hope</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-violet-600"></div>
                    <span className="text-rose-800 text-sm"><strong>Violet</strong> &mdash; Penance, preparation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-pink-400"></div>
                    <span className="text-rose-800 text-sm"><strong>Rose</strong> &mdash; Gaudete, Laetare</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-gray-900"></div>
                    <span className="text-rose-800 text-sm"><strong>Black</strong> &mdash; Funerals, mourning</span>
                  </div>
                </div>
              </div>

              <div className="bg-teal-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-teal-900 mb-3">Sacred Vessels</h3>
                <ul className="text-teal-800 space-y-2">
                  <li>&bull; <strong>Chalice</strong> &mdash; The cup for the Precious Blood, traditionally of gold or silver</li>
                  <li>&bull; <strong>Paten</strong> &mdash; The plate for the host, used since the earliest centuries</li>
                  <li>&bull; <strong>Ciborium</strong> &mdash; A covered vessel for distributing and reserving the Eucharist</li>
                  <li>&bull; <strong>Monstrance</strong> &mdash; Developed in the 13th-14th century following the institution of the feast of Corpus Christi (1264) by Pope Urban IV and the growth of Eucharistic devotion. Its radiant design frames the consecrated Host for adoration.</li>
                </ul>
                <p className="text-teal-800 mt-3">
                  Incense, bells, and sacred gesture (genuflection, signs of the cross, bowing) complete
                  the sensory vocabulary of the Mass, engaging the whole person &mdash; body, mind, and
                  spirit &mdash; in the act of worship.
                </p>
              </div>
            </div>

            {/* Sources */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Sources &amp; Further Reading</h3>
              <ol className="list-decimal list-inside text-gray-600 space-y-2 text-sm">
                <li>Pope Pius X, Motu Proprio <em>Tra le sollecitudini</em> (November 22, 1903).</li>
                <li>Vatican II, <em>Sacrosanctum Concilium</em>, nos. 112-130 (December 4, 1963).</li>
                <li>Joseph Ratzinger (Benedict XVI), <em>The Spirit of the Liturgy</em> (Ignatius Press, 2000).</li>
                <li>Richard H. Hoppin, <em>Medieval Music</em> (Norton, 1978).</li>
                <li>Louis Bouyer, <em>Liturgy and Architecture</em> (Notre Dame Press, 1967).</li>
                <li>David Hiley, <em>Gregorian Chant</em> (Cambridge, 2009).</li>
              </ol>
            </div>
          </div>
        )}

        {/* ==================== TAB 6: THE TRIDENTINE MASS ==================== */}
        {activeTab === 'tridentine' && (
          <div className="space-y-8">
            {/* Structure of the Mass */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Cross className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Structure of the Tridentine Mass</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The Tridentine Mass &mdash; the form of the Roman Rite codified by Pope Pius V in 1570 and
                used with minor modifications until 1969 &mdash; is a liturgy of extraordinary richness
                and precision. Every word, gesture, and movement is prescribed by the rubrics, creating
                a ritual of hieratic beauty that shaped Catholic spirituality for four centuries.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">Prayers at the Foot of the Altar</h3>
                <p className="text-amber-800 mb-3">
                  The Mass begins with the priest and servers at the foot of the altar steps, reciting
                  Psalm 42 (<em>Judica me, Deus</em> &mdash; &ldquo;Judge me, O God, and distinguish my
                  cause from the nation that is not holy&rdquo;) as a prayer of preparation, followed
                  by the <em>Confiteor</em> (&ldquo;I confess&rdquo;), in which the priest and then
                  the servers acknowledge their sinfulness before ascending to the altar. The priest
                  then ascends, kisses the altar (venerating the relics within), and moves to the
                  right side for the Introit.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">Liturgy of the Word</h3>
                <p className="text-blue-800 mb-3">
                  The &ldquo;Mass of the Catechumens&rdquo; (as this portion was traditionally called)
                  includes the Introit, Kyrie eleison, Gloria (on Sundays and feasts), the Collect,
                  the Epistle (read at the south side of the altar), the Gradual and Alleluia (or Tract
                  in penitential seasons), the Gospel (read at the north side, facing liturgical north
                  to symbolise preaching to the unconverted), and the Creed on Sundays and major feasts.
                  In the Tridentine Rite, the Scripture readings follow a one-year cycle.
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-green-900 mb-3">The Offertory</h3>
                <p className="text-green-800">
                  The Offertory prayers of the Tridentine Mass are among its most distinctive features.
                  The <em>Suscipe, sancte Pater</em> (&ldquo;Accept, O holy Father&rdquo;) explicitly
                  offers the bread as a &ldquo;spotless victim&rdquo; (<em>hostiam immaculatam</em>)
                  even before the consecration, expressing the sacrificial character of the Mass with
                  great clarity. The wine and water are mixed, incense is offered (at High Mass),
                  the priest washes his hands reciting Psalm 25, and the <em>Secreta</em> (Secret prayer,
                  said silently) concludes the Offertory.
                </p>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-purple-900 mb-3">The Canon</h3>
                <p className="text-purple-800 mb-3">
                  The heart of the Tridentine Mass is the Canon, prayed silently by the priest. After
                  the Preface and Sanctus, the Canon unfolds in a series of ancient prayers: the
                  <em> Te igitur</em>, <em>Memento</em> of the living, <em>Communicantes</em> (listing
                  the saints), <em>Hanc igitur</em>, and <em>Quam oblationem</em>, leading to the
                  Consecration. The priest genuflects after each elevation of the Host and Chalice.
                  A distinctive feature is that the word <em>Mysterium fidei</em> (&ldquo;Mystery
                  of faith&rdquo;) is embedded within the words of consecration over the chalice &mdash;
                  a peculiarity unique to the Roman Canon whose origin remains debated.
                </p>
                <p className="text-purple-800">
                  After the Consecration come the <em>Unde et memores</em> (anamnesis), <em>Supra
                  quae</em>, <em>Supplices te rogamus</em>, the <em>Memento</em> of the dead, and the
                  <em> Nobis quoque peccatoribus</em>, concluding with the great doxology.
                </p>
              </div>

              <div className="bg-red-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-red-900 mb-3">Communion Rite and Concluding Rites</h3>
                <p className="text-red-800 mb-3">
                  The <em>Pater Noster</em> (Lord&rsquo;s Prayer) is chanted or recited by the priest
                  alone (the congregation responds only with the final petition). The <em>Agnus Dei</em>
                  is followed by the priest&rsquo;s communion and then the communion of the faithful,
                  who receive kneeling at the altar rail, on the tongue only, the host placed directly
                  by the priest.
                </p>
                <p className="text-red-800 mb-3">
                  After the <em>Ite, missa est</em> (&ldquo;Go, the Mass is ended&rdquo;) and the
                  blessing, the priest reads the <strong>Last Gospel</strong> &mdash; the Prologue
                  of St. John (<em>John 1:1-14</em>): &ldquo;In the beginning was the Word&rdquo;
                  &mdash; a practice added in the thirteenth century that became a beloved feature
                  of the Tridentine Mass.
                </p>
                <p className="text-red-800">
                  After 1884, Pope Leo XIII added the <strong>Leonine Prayers</strong> after Low Mass:
                  three Hail Marys, the Salve Regina, a prayer for the conversion of sinners, and the
                  Prayer to St. Michael the Archangel. These were originally offered for the defence
                  of the Papal States and later for the conversion of Russia.
                </p>
              </div>
            </div>

            {/* Forms of the Mass */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Forms of Celebration</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-blue-50 p-5 rounded-lg">
                  <h3 className="text-base font-semibold text-blue-900 mb-2">Low Mass (<em>Missa Lecta</em>)</h3>
                  <p className="text-blue-800 text-sm">The simplest form: one priest, one server, no singing. All texts are read quietly. This was the most commonly experienced form of Mass for most Catholics from the medieval period onward.</p>
                </div>
                <div className="bg-green-50 p-5 rounded-lg">
                  <h3 className="text-base font-semibold text-green-900 mb-2">High Mass (<em>Missa Cantata</em>)</h3>
                  <p className="text-green-800 text-sm">One priest with the Propers and Ordinary chanted. Incense is used. This was the standard Sunday parish Mass.</p>
                </div>
                <div className="bg-purple-50 p-5 rounded-lg">
                  <h3 className="text-base font-semibold text-purple-900 mb-2">Solemn Mass (<em>Missa Solemnis</em>)</h3>
                  <p className="text-purple-800 text-sm">Priest with deacon and subdeacon. Full ceremonial with incense, chanting, and elaborate ritual. The ideal form of the Roman Rite.</p>
                </div>
                <div className="bg-amber-50 p-5 rounded-lg">
                  <h3 className="text-base font-semibold text-amber-900 mb-2">Pontifical Mass</h3>
                  <p className="text-amber-800 text-sm">Celebrated by a bishop with full pontifical ceremonies, including the use of the crosier, mitre, and throne, and additional ministers.</p>
                </div>
              </div>
            </div>

            {/* The Liturgical Movement */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-indigo-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Liturgical Movement</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Long before the Second Vatican Council, a powerful movement within the Church sought to
                deepen the faithful&rsquo;s participation in the liturgy. This &ldquo;Liturgical Movement&rdquo;
                was not a call for revolution but for ressourcement &mdash; a return to the sources of
                Christian worship.
              </p>

              <div className="space-y-4 mb-6">
                <div className="bg-indigo-50 p-5 rounded-lg">
                  <p className="text-indigo-800"><strong>Dom Prosper Gueranger (1805-1875)</strong> &mdash;
                  The founder of the Liturgical Movement, Gueranger restored the Benedictine abbey of
                  Solesmes and championed the Roman Rite against Gallican particularism. His multi-volume
                  <em> The Liturgical Year</em> made the riches of the liturgical calendar accessible to
                  laypeople for the first time.</p>
                </div>
                <div className="bg-teal-50 p-5 rounded-lg">
                  <p className="text-teal-800"><strong>Pope St. Pius X (1903-1914)</strong> &mdash;
                  Lowered the age of First Communion, encouraged frequent (even daily) reception of the
                  Eucharist, and reformed the chant. His motu proprio <em>Tra le sollecitudini</em> (1903)
                  called for &ldquo;active participation&rdquo; (<em>actuosa participatio</em>) in the
                  liturgy &mdash; the phrase that would become the watchword of Vatican II.</p>
                </div>
                <div className="bg-green-50 p-5 rounded-lg">
                  <p className="text-green-800"><strong>Dom Lambert Beauduin (1873-1960)</strong> &mdash;
                  A Belgian monk who, at the Catholic Congress of Malines in 1909, launched the pastoral
                  phase of the Liturgical Movement, calling for the faithful to pray the Mass rather than
                  merely pray during Mass.</p>
                </div>
                <div className="bg-amber-50 p-5 rounded-lg">
                  <p className="text-amber-800"><strong>Pope Pius XII</strong> &mdash;
                  His encyclical <em>Mediator Dei</em> (1947) was the most authoritative papal statement
                  on the liturgy before Vatican II, affirming the Liturgical Movement while warning against
                  &ldquo;antiquarianism.&rdquo; He also restored the Easter Vigil (1951) and reformed
                  the Holy Week liturgy (1955). The 1962 Missal of Pope John XXIII represents the final
                  edition of the Tridentine Missal, incorporating Pius XII&rsquo;s reforms.</p>
                </div>
              </div>
            </div>

            {/* Theological Emphases */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-rose-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Theological Emphases of the Tridentine Mass</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The Tridentine Mass expresses certain theological truths with particular clarity and force.
                Understanding these emphases helps explain both its enduring appeal and the reasons for
                the reforms that would follow.
              </p>

              <div className="bg-rose-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-rose-900 mb-3">Key Theological Themes</h3>
                <ul className="text-rose-800 space-y-3">
                  <li><strong>Sacrificial Character</strong> &mdash; The Offertory prayers, the silent Canon, and the entire ritual language emphasise that the Mass is first and foremost a sacrifice offered to God, not primarily a communal meal. The priest acts <em>in persona Christi</em> (in the person of Christ) as both priest and victim.</li>
                  <li><strong>The Canon of Silence</strong> &mdash; The silent Canon creates an atmosphere of sacred mystery. The faithful do not merely listen to the prayer; they enter into a profound silence in which the great mystery of transubstantiation takes place. Many defenders of the Tridentine Mass consider this its most powerful feature.</li>
                  <li><strong><em>Ad Orientem</em> Celebration</strong> &mdash; The priest and people face the same direction &mdash; liturgical East, toward the rising sun, the symbol of the returning Christ. This orientation emphasises that priest and people are together facing God, not facing each other.</li>
                  <li><strong><em>Lex Orandi, Lex Credendi</em></strong> &mdash; &ldquo;The law of prayer is the law of belief.&rdquo; The Tridentine Mass embodies the principle that how we pray shapes what we believe. Every word and gesture teaches doctrine.</li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed">
                Daily Catholic life before Vatican II was deeply shaped by the Tridentine Mass. Latin was
                the universal language of worship; a Catholic could attend Mass anywhere in the world and
                hear the same words. Hand missals with parallel Latin-English (or vernacular) text became
                essential companions. Eucharistic devotions &mdash; Benediction of the Blessed Sacrament,
                Forty Hours Devotion, and Corpus Christi processions &mdash; extended the encounter with
                Christ&rsquo;s Eucharistic presence beyond the Mass itself.
              </p>
            </div>

            {/* Sources */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Sources &amp; Further Reading</h3>
              <ol className="list-decimal list-inside text-gray-600 space-y-2 text-sm">
                <li><em>Missale Romanum</em>, editio typica 1962.</li>
                <li>Pope Pius XII, Encyclical <em>Mediator Dei</em> (November 20, 1947).</li>
                <li>Alcuin Reid, <em>The Organic Development of the Liturgy</em>, 2nd ed. (Ignatius Press, 2005).</li>
                <li>Adrian Fortescue and J. B. O&rsquo;Connell, <em>Ceremonies of the Roman Rite Described</em>, 15th ed. (Burns &amp; Oates, 2009).</li>
                <li>Keith Pecklers, <em>The Unread Vision: The Liturgical Movement in the United States of America 1926-1955</em> (Liturgical Press, 1998).</li>
                <li>Laszlo Dobszay, <em>The Restoration and Organic Development of the Roman Rite</em> (T&amp;T Clark, 2010).</li>
              </ol>
            </div>
          </div>
        )}

        {/* ==================== TAB 7: VATICAN II REFORMS ==================== */}
        {activeTab === 'vatican-ii' && (
          <div className="space-y-8">
            {/* Sacrosanctum Concilium */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Landmark className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800"><em>Sacrosanctum Concilium</em> (December 4, 1963)</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The Constitution on the Sacred Liturgy was the first document promulgated by the Second
                Vatican Council, approved by the Council Fathers by a vote of 2,147 to 4 &mdash; the most
                overwhelming margin of any conciliar document. It set out principles for liturgical renewal
                that would reshape Catholic worship more dramatically than any reform since the Council
                of Trent.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">Key Principles</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-amber-800"><strong>Full, Conscious, Active Participation (SC 14)</strong> &mdash;
                    &ldquo;Mother Church earnestly desires that all the faithful should be led to that fully
                    conscious, and active participation in liturgical celebrations which is demanded by the
                    very nature of the liturgy.&rdquo; This became the guiding principle of all subsequent reform.
                    The Latin term <em>actuosa participatio</em> (first used by Pius X in 1903) does not
                    necessarily mean external activity but an engaged, interior union with the sacred action.</p>
                  </div>
                  <div>
                    <p className="text-amber-800"><strong>Scripture Primacy (SC 24, 35, 51)</strong> &mdash;
                    &ldquo;Sacred Scripture is of the greatest importance in the celebration of the liturgy.&rdquo;
                    The Council called for &ldquo;more ample, more varied, and more suitable&rdquo; readings,
                    so that &ldquo;the treasures of the Bible are to be opened up more lavishly, so that
                    richer fare may be provided for the faithful at the table of God&rsquo;s word.&rdquo;</p>
                  </div>
                  <div>
                    <p className="text-amber-800"><strong>Noble Simplicity (SC 34)</strong> &mdash;
                    &ldquo;The rites should be distinguished by a noble simplicity; they should be short,
                    clear, and unencumbered by useless repetitions.&rdquo;</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">What the Council Actually Said About Latin and Chant</h3>
                <p className="text-blue-800 mb-3">
                  A common misconception is that Vatican II abolished Latin and Gregorian chant. The
                  Council&rsquo;s actual statements are more nuanced:
                </p>
                <ul className="text-blue-800 space-y-2">
                  <li>&bull; <strong>SC 36.1:</strong> &ldquo;Particular law remaining in force, the use of the Latin language is to be preserved in the Latin rites.&rdquo;</li>
                  <li>&bull; <strong>SC 36.2:</strong> &ldquo;But since the use of the mother tongue&hellip; may frequently be of great advantage to the people, the limits of its employment may be extended. This will apply in the first place to the readings and directives, and to some of the prayers and chants.&rdquo;</li>
                  <li>&bull; <strong>SC 54:</strong> &ldquo;Steps should be taken so that the faithful may also be able to say or to sing together in Latin those parts of the Ordinary of the Mass which pertain to them.&rdquo;</li>
                  <li>&bull; <strong>SC 116:</strong> Gregorian chant is to be given &ldquo;pride of place&rdquo; in liturgical services.</li>
                </ul>
                <p className="text-blue-800 mt-3">
                  The near-total displacement of Latin by the vernacular was a post-conciliar development
                  that went considerably beyond what the Council Fathers envisioned.
                </p>
              </div>
            </div>

            {/* The Consilium and the Novus Ordo */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <FileText className="w-6 h-6 text-green-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Consilium and the New Missal (1964-1970)</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Pope Paul VI established the <em>Consilium ad exsequendam Constitutionem de Sacra Liturgia</em>
                (&ldquo;Council for the Implementation of the Constitution on the Sacred Liturgy&rdquo;)
                in 1964, under Cardinal Giacomo Lercaro, with Fr. Annibale Bugnini as secretary. Over
                the next five years, this body oversaw the most comprehensive reform of the Roman Rite
                in its history.
              </p>

              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-green-900 mb-3">Key Changes in the 1970 <em>Missale Romanum</em></h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-green-800"><strong>Four Eucharistic Prayers</strong> &mdash; The Roman
                    Canon was retained as Eucharistic Prayer I, but three new prayers were added: EP II (based
                    on the <em>Apostolic Tradition</em> of Hippolytus), EP III (a new composition drawing on
                    Gallican and Eastern sources), and EP IV (with a fixed preface, influenced by the Eastern
                    anaphora of St. Basil). This was the first time in Roman history that alternatives to the
                    Canon were officially provided.</p>
                  </div>
                  <div>
                    <p className="text-green-800"><strong>Revised Introductory Rites</strong> &mdash; The Prayers
                    at the Foot of the Altar were replaced by a simpler Penitential Rite at the beginning of Mass.</p>
                  </div>
                  <div>
                    <p className="text-green-800"><strong>Revised Offertory</strong> &mdash; The Tridentine
                    Offertory prayers (with their explicit sacrificial language) were replaced by new prayers
                    modelled on Jewish <em>berakah</em> (blessing) prayers: &ldquo;Blessed are you, Lord God
                    of all creation&hellip;&rdquo;</p>
                  </div>
                  <div>
                    <p className="text-green-800"><strong>Suppressed Elements</strong> &mdash; The Last Gospel
                    (Prologue of John), the Leonine Prayers, Psalm 42 at the beginning, and many of the
                    priest&rsquo;s private preparatory prayers were removed.</p>
                  </div>
                  <div>
                    <p className="text-green-800"><strong>Restored Elements</strong> &mdash; The Prayer of the
                    Faithful (general intercessions), absent from the Roman Rite since the fifth century, was
                    restored. The homily was made obligatory on Sundays and holy days.</p>
                  </div>
                  <div>
                    <p className="text-green-800"><strong>Communion Practices</strong> &mdash; Communion under
                    both kinds was permitted in certain circumstances. Communion in the hand (though not mandated
                    by the reform) was gradually authorised in many countries through indults. The altar rail
                    began to disappear from many churches.</p>
                  </div>
                  <div>
                    <p className="text-green-800"><strong><em>Versus Populum</em></strong> &mdash; Celebration
                    facing the people became widespread, though it was never formally mandated by any conciliar
                    or post-conciliar document. The <em>General Instruction of the Roman Missal</em> (GIRM)
                    presupposes both orientations as possible.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* The Lectionary */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-purple-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Expanded Lectionary</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                One of the most universally praised reforms was the creation of the new Lectionary. The
                old one-year cycle was replaced by a vastly expanded system:
              </p>

              <div className="bg-purple-50 p-6 rounded-lg mb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-base font-semibold text-purple-900 mb-2">Sunday Lectionary</h3>
                    <p className="text-purple-800 text-sm">A three-year cycle (Years A, B, C) with three readings per Sunday (Old Testament, Epistle, Gospel) plus a Responsorial Psalm. Year A focuses on Matthew, Year B on Mark, Year C on Luke, with John distributed throughout.</p>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-purple-900 mb-2">Weekday Lectionary</h3>
                    <p className="text-purple-800 text-sm">A two-year cycle (Years I and II) for the first reading, with the Gospel on a single annual cycle. This dramatically increased the amount of Scripture proclaimed at Mass.</p>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">
                The result was that a Catholic attending Mass daily would hear a far greater portion of
                the Bible over time than under the old system. Many Protestant communities subsequently
                adopted the Catholic Lectionary (with modifications) as the Revised Common Lectionary,
                creating an unexpected ecumenical convergence around the table of God&rsquo;s Word.
              </p>
            </div>

            {/* Controversies */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <Flame className="w-6 h-6 text-red-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Controversy and Response</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The liturgical reform was not without controversy. The most significant opposition came in
                1969, when Cardinals Alfredo Ottaviani and Antonio Bacci presented to Pope Paul VI a
                &ldquo;Short Critical Study of the New Order of Mass&rdquo; (the <em>Ottaviani
                Intervention</em>), expressing concern that the new Missal &ldquo;represents, both as a
                whole and in its details, a striking departure from the Catholic theology of the Mass as
                it was formulated in Session XXII of the Council of Trent.&rdquo;
              </p>

              <div className="bg-red-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-red-900 mb-3">Pope Paul VI&rsquo;s Response</h3>
                <p className="text-red-800 mb-3">
                  Paul VI took the criticisms seriously and made several changes to the <em>General
                  Instruction</em> before its final publication, strengthening the language about the
                  sacrificial nature of the Mass and the Real Presence. The definition of the Mass in
                  GIRM 7 was revised from a formulation that critics called ambiguous to one that
                  explicitly affirmed the Mass as the &ldquo;sacred banquet and sacrifice.&rdquo;
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                The French Archbishop Marcel Lefebvre (1905-1991) became the most prominent leader of
                resistance to the reforms. He founded the Society of St. Pius X (SSPX) in 1970 and
                continued to celebrate exclusively the Tridentine Mass. His unauthorised episcopal
                consecrations in 1988 resulted in his excommunication by Pope John Paul II. The SSPX
                remains in an irregular canonical situation, though efforts at reconciliation have
                continued under subsequent popes.
              </p>
            </div>

            {/* English Translation */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                  <Globe className="w-6 h-6 text-teal-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The English Translation Saga</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The translation of the Latin Missal into the vernacular has been one of the most contentious
                aspects of the post-conciliar reform, particularly in the English-speaking world.
              </p>

              <div className="space-y-4 mb-6">
                <div className="bg-teal-50 p-5 rounded-lg">
                  <h3 className="text-base font-semibold text-teal-900 mb-2">1973 ICEL Translation</h3>
                  <p className="text-teal-800 text-sm">The International Commission on English in the Liturgy (ICEL) produced the first English translation using the principle of &ldquo;dynamic equivalence&rdquo; &mdash; translating the sense rather than the exact words of the Latin. Critics argued this resulted in a flattened, impoverished text that lost much of the theological richness and literary beauty of the original. &ldquo;And also with you&rdquo; for <em>&ldquo;Et cum spiritu tuo&rdquo;</em> became the most debated example.</p>
                </div>
                <div className="bg-indigo-50 p-5 rounded-lg">
                  <h3 className="text-base font-semibold text-indigo-900 mb-2"><em>Liturgiam Authenticam</em> (2001)</h3>
                  <p className="text-indigo-800 text-sm">This instruction from the Congregation for Divine Worship mandated a new approach: &ldquo;formal equivalence&rdquo; or &ldquo;faithful translation,&rdquo; in which the vocabulary, syntax, and style of the Latin original are preserved as closely as possible in the vernacular.</p>
                </div>
                <div className="bg-amber-50 p-5 rounded-lg">
                  <h3 className="text-base font-semibold text-amber-900 mb-2">2010 English Translation</h3>
                  <p className="text-amber-800 text-sm">The new translation, implemented on the First Sunday of Advent 2011, introduced the now-familiar &ldquo;And with your spirit,&rdquo; the expanded Confiteor (&ldquo;through my fault, through my fault, through my most grievous fault&rdquo;), and the restored &ldquo;consubstantial with the Father&rdquo; in the Creed. While initially controversial, the translation has become accepted by most Catholics as a more faithful rendering of the Latin texts.</p>
                </div>
              </div>
            </div>

            {/* Sources */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Sources &amp; Further Reading</h3>
              <ol className="list-decimal list-inside text-gray-600 space-y-2 text-sm">
                <li>Vatican II, Constitution <em>Sacrosanctum Concilium</em> (December 4, 1963).</li>
                <li>Pope Paul VI, Apostolic Constitution <em>Missale Romanum</em> (April 3, 1969).</li>
                <li><em>General Instruction of the Roman Missal</em>, 3rd typical edition (2002/2008).</li>
                <li>Congregation for Divine Worship, Instruction <em>Liturgiam Authenticam</em> (March 28, 2001).</li>
                <li>Annibale Bugnini, <em>The Reform of the Liturgy 1948-1975</em> (Liturgical Press, 1990).</li>
                <li>Nicola Giampietro, <em>The Development of the Liturgical Reform</em> (Roman Catholic Books, 2009).</li>
              </ol>
            </div>
          </div>
        )}

        {/* ==================== TAB 8: THE MASS TODAY ==================== */}
        {activeTab === 'mass-today' && (
          <div className="space-y-8">
            {/* Summorum Pontificum and Traditionis Custodes */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Two Forms, One Rite: An Ongoing Conversation</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The relationship between the older and newer forms of the Roman Rite has been one of the
                defining pastoral and theological questions of recent decades. Two landmark papal documents
                have shaped the discussion.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-3"><em>Summorum Pontificum</em> (Benedict XVI, 2007)</h3>
                <p className="text-amber-800 mb-3">
                  Pope Benedict XVI&rsquo;s motu proprio declared that the 1962 Missal had &ldquo;never
                  been juridically abrogated&rdquo; and established two forms of the Roman Rite: the
                  &ldquo;Ordinary Form&rdquo; (the 1970 Missal of Paul VI) and the &ldquo;Extraordinary
                  Form&rdquo; (the 1962 Missal of John XXIII). Any priest of the Latin Rite could
                  celebrate the Extraordinary Form privately without permission, and stable groups of
                  the faithful could request its public celebration.
                </p>
                <p className="text-amber-800">
                  Benedict envisioned a &ldquo;mutual enrichment&rdquo; between the two forms: the
                  Extraordinary Form could benefit from the expanded Lectionary and updated calendar of
                  the Ordinary Form, while the Ordinary Form could recover something of the reverence,
                  silence, and sacral beauty of the older rite.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3"><em>Traditionis Custodes</em> (Francis, 2021)</h3>
                <p className="text-blue-800 mb-3">
                  Pope Francis&rsquo;s motu proprio significantly restricted access to the 1962 Missal,
                  returning authority over its use to diocesan bishops and declaring that the liturgical
                  books promulgated after Vatican II are &ldquo;the unique expression of the <em>lex
                  orandi</em> of the Roman Rite.&rdquo; New restrictions included: priests needing
                  diocesan permission to celebrate the 1962 Mass, no celebrations in parish churches
                  (without explicit episcopal authorisation), and the celebration of certain sacraments
                  only in the Ordinary Form.
                </p>
                <p className="text-blue-800">
                  Communities dedicated to the 1962 Missal &mdash; including the Priestly Fraternity
                  of St. Peter (FSSP) and the Institute of Christ the King (ICKSP) &mdash; continue
                  to celebrate the older form under various provisions and permissions.
                </p>
              </div>
            </div>

            {/* Inculturation */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Globe className="w-6 h-6 text-green-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Inculturation of the Mass</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                <em>Sacrosanctum Concilium</em> 37-40 established principles for adapting the liturgy
                to the cultures and traditions of different peoples, provided that the substantial unity
                of the Roman Rite is preserved. This principle of &ldquo;inculturation&rdquo; has
                produced some of the most creative developments in contemporary liturgical practice.
              </p>

              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-green-900 mb-3">The Zaire Use (Congolese Rite)</h3>
                <p className="text-green-800 mb-3">
                  The most fully developed example of liturgical inculturation is the <em>Missel Romain
                  pour les dioceses du Zaire</em>, approved by Rome in 1988. This adaptation of the
                  Roman Mass incorporates African cultural elements:
                </p>
                <ul className="text-green-800 space-y-1">
                  <li>&bull; The Penitential Rite is moved to after the homily (where African culture places reconciliation before the communal meal)</li>
                  <li>&bull; An invocation of the saints and ancestors opens the liturgy</li>
                  <li>&bull; Liturgical dance accompanies processions</li>
                  <li>&bull; The assembly actively dialogues with the presider throughout</li>
                  <li>&bull; African musical instruments are used</li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed">
                Other notable experiments include Indian liturgical adaptations incorporating elements
                from Hindu worship (removal of shoes, oil lamps, flowers, prostrations), Filipino
                and Korean cultural adaptations, and various experiments in Latin America. Pope Francis
                has shown particular interest in promoting the Zaire Use as a model for how the Roman
                Rite can be enriched by diverse cultural expressions while maintaining its essential unity.
              </p>
            </div>

            {/* The Mass and Evangelisation */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-purple-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Mass and the New Evangelisation</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Recent popes have repeatedly emphasised the Eucharist as the source and summit of the
                Church&rsquo;s evangelising mission.
              </p>

              <div className="space-y-4 mb-6">
                <div className="bg-purple-50 p-5 rounded-lg">
                  <p className="text-purple-800"><strong>St. John Paul II, <em>Ecclesia de Eucharistia</em> (2003)</strong> &mdash;
                  &ldquo;The Church draws her life from the Eucharist.&rdquo; Written near the end of his
                  pontificate, this encyclical reaffirmed the centrality of the Eucharist in Catholic life
                  and warned against liturgical abuses and the erosion of Eucharistic faith.</p>
                </div>
                <div className="bg-indigo-50 p-5 rounded-lg">
                  <p className="text-indigo-800"><strong>Benedict XVI, <em>Sacramentum Caritatis</em> (2007)</strong> &mdash;
                  &ldquo;The sacrament of charity, the Holy Eucharist, is the gift that Jesus Christ makes
                  of himself, thus revealing to us God&rsquo;s infinite love for every man and woman.&rdquo;
                  Benedict emphasised <em>ars celebrandi</em> (the art of celebrating) and the need for
                  beauty, reverence, and silence in the liturgy.</p>
                </div>
                <div className="bg-teal-50 p-5 rounded-lg">
                  <p className="text-teal-800"><strong>Pope Francis, <em>Evangelii Gaudium</em> 135-144 (2013)</strong> &mdash;
                  Francis dedicated significant attention to the homily, calling it &ldquo;the touchstone
                  for judging a pastor&rsquo;s closeness and ability to communicate to his people.&rdquo;
                  He insisted that preaching should be brief, clear, positive, and connect the Word of God
                  to the daily lives of the faithful.</p>
                </div>
                <div className="bg-rose-50 p-5 rounded-lg">
                  <p className="text-rose-800"><strong>US National Eucharistic Revival (2022-2025)</strong> &mdash;
                  Launched by the US Conference of Catholic Bishops in response to surveys showing declining
                  belief in the Real Presence, this multi-year initiative has included parish renewal programs,
                  diocesan Eucharistic congresses, and the National Eucharistic Congress in Indianapolis (2024).
                  It represents the largest coordinated Eucharistic initiative in American Catholic history.</p>
                </div>
              </div>
            </div>

            {/* Structure of the Ordinary Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Cross className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Structure of the Ordinary Form Today</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The Mass as celebrated in most Catholic parishes around the world follows this structure:
              </p>

              <div className="space-y-3">
                <div className="bg-amber-50 p-5 rounded-lg">
                  <h3 className="text-base font-semibold text-amber-900 mb-2">Introductory Rites</h3>
                  <p className="text-amber-800 text-sm">
                    Entrance Procession and Chant &mdash; Sign of the Cross and Greeting &mdash; Penitential Act
                    (Confiteor or other forms) &mdash; Kyrie eleison &mdash; Gloria (Sundays and solemnities
                    outside Advent and Lent) &mdash; Collect (Opening Prayer).
                  </p>
                </div>
                <div className="bg-blue-50 p-5 rounded-lg">
                  <h3 className="text-base font-semibold text-blue-900 mb-2">Liturgy of the Word</h3>
                  <p className="text-blue-800 text-sm">
                    First Reading (usually Old Testament) &mdash; Responsorial Psalm &mdash; Second Reading
                    (Epistle, on Sundays) &mdash; Gospel Acclamation (Alleluia) &mdash; Gospel &mdash;
                    Homily &mdash; Profession of Faith (Creed) &mdash; Prayer of the Faithful (Universal Prayer).
                  </p>
                </div>
                <div className="bg-green-50 p-5 rounded-lg">
                  <h3 className="text-base font-semibold text-green-900 mb-2">Liturgy of the Eucharist</h3>
                  <p className="text-green-800 text-sm">
                    Preparation of the Gifts (Offertory) &mdash; Prayer over the Offerings &mdash; Eucharistic
                    Prayer (Preface, Sanctus, Epiclesis, Institution Narrative and Consecration, Anamnesis,
                    Offering, Intercessions, Final Doxology and Great Amen) &mdash; Communion Rite (Lord&rsquo;s
                    Prayer, Sign of Peace, Fraction and Agnus Dei, Communion, Prayer after Communion).
                  </p>
                </div>
                <div className="bg-purple-50 p-5 rounded-lg">
                  <h3 className="text-base font-semibold text-purple-900 mb-2">Concluding Rites</h3>
                  <p className="text-purple-800 text-sm">
                    Brief Announcements &mdash; Final Blessing &mdash; Dismissal (&ldquo;Go forth, the Mass
                    is ended&rdquo; or other formulas) &mdash; Veneration of the Altar and Recessional.
                  </p>
                </div>
              </div>
            </div>

            {/* Eucharistic Adoration */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <Sun className="w-6 h-6 text-red-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Eucharistic Adoration and Devotion</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Beyond the Mass itself, the Catholic tradition of Eucharistic devotion extends the encounter
                with Christ&rsquo;s Real Presence into the daily life of the faithful. These devotions,
                far from being separate from the Mass, flow from it and lead back to it.
              </p>

              <div className="bg-red-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-red-900 mb-3">Corpus Christi and the Monstrance</h3>
                <p className="text-red-800 mb-3">
                  The feast of Corpus Christi was instituted by Pope Urban IV in 1264, following the
                  Eucharistic miracle at Bolsena (1263), where a consecrated Host reportedly bled onto
                  the corporal. St. Thomas Aquinas composed the magnificent office and hymns for the
                  feast, including the <em>Pange Lingua</em>, <em>Tantum Ergo</em>, and
                  <em> O Salutaris Hostia</em>.
                </p>
                <p className="text-red-800">
                  The monstrance &mdash; the ornate vessel in which the consecrated Host is displayed
                  for adoration &mdash; developed in the thirteenth and fourteenth centuries as Eucharistic
                  devotion flourished. Its sunburst design symbolises Christ as the Light of the World.
                  Perpetual Adoration chapels, where the Eucharist is exposed around the clock, have
                  experienced a significant revival in recent decades.
                </p>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-orange-900 mb-3">Eucharistic Miracles</h3>
                <p className="text-orange-800">
                  The Church recognises numerous Eucharistic miracles throughout history. The miracle
                  of <strong>Lanciano</strong> (8th century, Italy), where the consecrated bread and wine
                  reportedly transformed into visible flesh and blood, was subjected to modern scientific
                  analysis in 1971 and 1981; the studies identified the tissue as human cardiac muscle
                  (myocardium) and the blood as type AB. The miracle of <strong>Bolsena</strong> (1263)
                  inspired the institution of Corpus Christi and Raphael&rsquo;s famous fresco in the
                  Vatican. These miracles, while not objects of required belief, serve as signs pointing
                  to the reality that the Church teaches as dogma: the bread and wine truly become the
                  Body and Blood of Christ.
                </p>
              </div>
            </div>

            {/* Looking Ahead */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-indigo-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Looking Ahead: The Eternal Banquet</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The history of the Mass is not merely a story of the past. It is an ongoing, living
                tradition that continues to develop under the guidance of the Holy Spirit. The great
                questions of our time &mdash; the relationship between the older and newer forms of the
                rite, the proper balance of Latin and the vernacular, the role of sacred music and
                architecture, the challenge of inculturation, the call to deeper Eucharistic faith &mdash;
                are chapters still being written.
              </p>

              <div className="bg-indigo-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-indigo-900 mb-3">The Heavenly Liturgy</h3>
                <p className="text-indigo-800 italic mb-3">
                  &ldquo;In the earthly liturgy we take part in a foretaste of that heavenly liturgy
                  which is celebrated in the holy city of Jerusalem toward which we journey as pilgrims,
                  where Christ is sitting at the right hand of God.&rdquo;
                </p>
                <p className="text-indigo-700 text-sm mb-4">&mdash; <em>Sacrosanctum Concilium</em>, 8</p>
                <p className="text-indigo-800">
                  The Book of Revelation (chapters 4-5) portrays the heavenly worship around the throne
                  of God and the Lamb: elders prostrate in adoration, the Sanctus sung by the four living
                  creatures, incense rising with the prayers of the saints, and the eternal offering of
                  the Lamb who was slain. Every Mass, in every time and place, is a participation in this
                  heavenly liturgy. The Catechism teaches: &ldquo;The Eucharist is the sum and summary of
                  our faith&rdquo; (CCC 1327). And until the Lord comes again, his Church will continue to
                  obey his command: &ldquo;Do this in remembrance of me.&rdquo;
                </p>
              </div>

              <div className="bg-rose-50 p-6 rounded-lg">
                <p className="text-rose-800 italic text-center">
                  &ldquo;In the Eucharist we break the one bread that provides the medicine of immortality,
                  the antidote for death, and the food that makes us live forever in Jesus Christ.&rdquo;
                </p>
                <p className="text-rose-700 text-sm text-center mt-2">&mdash; St. Ignatius of Antioch, <em>Letter to the Ephesians</em>, ch. 20 (~107 AD)</p>
              </div>
            </div>

            {/* Sources */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Sources &amp; Further Reading</h3>
              <ol className="list-decimal list-inside text-gray-600 space-y-2 text-sm">
                <li>Pope Benedict XVI, Motu Proprio <em>Summorum Pontificum</em> (July 7, 2007).</li>
                <li>Pope Francis, Motu Proprio <em>Traditionis Custodes</em> (July 16, 2021).</li>
                <li>Pope St. John Paul II, Encyclical <em>Ecclesia de Eucharistia</em> (April 17, 2003).</li>
                <li>Pope Benedict XVI, Apostolic Exhortation <em>Sacramentum Caritatis</em> (February 22, 2007).</li>
                <li>Pope Francis, Apostolic Exhortation <em>Evangelii Gaudium</em>, nos. 135-144 (November 24, 2013).</li>
                <li><em>Catechism of the Catholic Church</em>, nos. 1322-1419.</li>
                <li>Robert Barron, <em>Eucharist</em> (Word on Fire, 2021).</li>
              </ol>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
