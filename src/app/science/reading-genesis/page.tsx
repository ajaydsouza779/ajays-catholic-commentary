'use client'

import { useState } from 'react'
import {
  BookOpen,
  Layers,
  ScrollText,
  Quote,
  FileText,
  Church,
  Heart,
  Star,
  Scale,
  Clock,
  Calendar,
  Sparkles,
  CheckCircle,
  HelpCircle,
  Users,
  Shield,
  Globe,
  Lightbulb,
  Waves,
  GraduationCap,
} from 'lucide-react'

type TabId =
  | 'what-kind-of-text'
  | 'four-senses'
  | 'six-days'
  | 'adam-eve'
  | 'ancient-near-east'
  | 'key-documents'

const tabs: { id: TabId; label: string }[] = [
  { id: 'what-kind-of-text', label: 'What Kind of Text?' },
  { id: 'four-senses', label: 'The Four Senses' },
  { id: 'six-days', label: 'The Six Days Debate' },
  { id: 'adam-eve', label: 'Adam & Eve' },
  { id: 'ancient-near-east', label: 'Ancient Near Eastern Context' },
  { id: 'key-documents', label: 'Key Documents & Voices' },
]

export default function ReadingGenesisPage() {
  const [activeTab, setActiveTab] = useState<TabId>('what-kind-of-text')

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Reading Genesis
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            How should Catholics read the creation accounts and primeval history of Genesis? The
            Church&rsquo;s rich tradition provides multiple frameworks &mdash; none of them requiring
            a conflict with modern science.
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

        {/* ==================== TAB 1: WHAT KIND OF TEXT? ==================== */}
        {activeTab === 'what-kind-of-text' && (
          <div className="space-y-8">

            {/* Card 1: Genesis 1–11 as Primeval History */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Genesis 1&ndash;11 as Primeval History</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Scholars of the ancient world use the phrase &ldquo;primeval history&rdquo; to describe
                a recognized literary category in ancient Near Eastern writing &mdash; texts that address
                ultimate questions about the origin of the world, the nature of humanity, and the
                relationship between God (or the gods) and creation. Genesis 1&ndash;11 belongs to this
                category. It covers Genesis 1 (the creation of the world), Genesis 2&ndash;3 (the Garden
                of Eden and the Fall), Genesis 4 (Cain and Abel), Genesis 5 (the antediluvian
                genealogies), Genesis 6&ndash;9 (the great flood), and Genesis 10&ndash;11 (the Table of
                Nations and the Tower of Babel).
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Identifying this literary category is not a concession to scepticism &mdash; it is the
                first step in reading the text as the Church has always insisted it must be read: on its
                own terms, in its own historical and literary context, with attention to what the sacred
                author actually intended to communicate.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">Three Things Genesis 1&ndash;11 Is NOT</h3>
                <ul className="text-amber-800 space-y-3">
                  <li>
                    <span className="font-semibold">Not a modern science textbook.</span> The author
                    was not writing to answer &ldquo;how long did creation take?&rdquo; in the modern
                    sense. Questions of biological mechanism, geological timescale, and cosmological
                    chronology were simply outside the scope of what the text was composed to address.
                  </li>
                  <li>
                    <span className="font-semibold">Not mythology in the dismissive sense.</span> These
                    texts make serious, binding truth-claims about God, humanity, and the world&rsquo;s
                    origin. They are not fables or entertainment &mdash; they are divinely inspired
                    theological declarations.
                  </li>
                  <li>
                    <span className="font-semibold">Not pure history in the modern journalistic sense.</span> The
                    texts use highly symbolic, artistically structured, and theologically charged
                    language. The Church does not require that every element be read as a blow-by-blow
                    chronicle of events in chronological sequence.
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-green-900 mb-3">What the Church Consistently Teaches</h3>
                <p className="text-green-800">
                  These texts convey <em>theological truths</em> through literary forms appropriate to
                  their ancient context. The truths they convey &mdash; that God alone created all
                  things, that creation is genuinely good, that humanity is uniquely made in God&rsquo;s
                  image, that sin entered through a real historical act of human freedom &mdash; are
                  binding on all Catholics. The literary vehicle through which those truths are
                  expressed is not itself a doctrinal matter requiring one fixed interpretation.
                </p>
              </div>
            </div>

            {/* Card 2: What Makes Genesis 1 Different */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Layers className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">What Makes Genesis 1 Distinctive</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Genesis 1 is one of the most carefully structured pieces of writing in the entire Bible.
                Its seven-day framework &mdash; six days of creative work followed by one day of divine
                rest &mdash; is not a haphazard narrative but a deliberately crafted literary and
                theological composition. Recognizing its structure is essential to reading it correctly.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-4">The Parallel Framework Structure</h3>
                <p className="text-blue-800 mb-4">
                  Days 1&ndash;3 create <em>domains</em>; Days 4&ndash;6 <em>fill</em> those domains with
                  their respective inhabitants. This is an artistically intentional literary framework,
                  not a scientific timetable:
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-blue-100 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Days 1&ndash;3: Creating Spaces</h4>
                    <ul className="text-blue-800 text-sm space-y-1">
                      <li><span className="font-medium">Day 1:</span> Light (separated from darkness)</li>
                      <li><span className="font-medium">Day 2:</span> Sky and seas (separated from each other)</li>
                      <li><span className="font-medium">Day 3:</span> Dry land and vegetation</li>
                    </ul>
                  </div>
                  <div className="bg-blue-100 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Days 4&ndash;6: Filling Spaces</h4>
                    <ul className="text-blue-800 text-sm space-y-1">
                      <li><span className="font-medium">Day 4:</span> Sun, moon, stars (fill the light)</li>
                      <li><span className="font-medium">Day 5:</span> Birds and fish (fill sky and seas)</li>
                      <li><span className="font-medium">Day 6:</span> Land animals and humanity (fill the land)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                This parallel structure &mdash; sometimes called the &ldquo;framework hypothesis&rdquo; by
                modern biblical scholars &mdash; is an ancient observation, not a modern invention. The
                text&rsquo;s artistry conveys theology: God is orderly, purposeful, and sovereign;
                creation progresses toward humanity as its crown; the Sabbath is built into the very
                structure of existence.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">Two Creation Accounts &mdash; Not a Contradiction</h3>
                <p className="text-amber-800 mb-3">
                  Genesis 1:1&ndash;2:4a and Genesis 2:4b&ndash;25 present the creation of humanity in
                  noticeably different ways. In the first account, humanity is created last, on the sixth
                  day, male and female simultaneously. In the second, the man is formed first from the
                  ground, then the woman from his side. Ancient readers understood these as complementary
                  perspectives, not competing accounts. Genesis 1 emphasizes humanity&rsquo;s dignity as
                  the crown of creation; Genesis 2 emphasizes humanity&rsquo;s intimate relationship with
                  God, the earth, and each other. The Church has never required harmonizing them as though
                  they were sequential news reports.
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed">
                The refrain &ldquo;And there was evening and there was morning, the Nth day&rdquo; is a
                liturgical formula &mdash; an artistic punctuation of the narrative that signals the
                completion of each creative movement. Whether &ldquo;evening and morning&rdquo; denotes a
                literal 24-hour cycle or serves as a structural marker has been debated by Catholic
                interpreters since at least the fourth century.
              </p>
            </div>

            {/* Card 3: Official Guidance on Genre */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <ScrollText className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Church&rsquo;s Official Guidance on Genre</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Far from leaving Catholics to guess how to read Genesis, the Church&rsquo;s magisterium
                has issued a series of authoritative documents that provide clear hermeneutical
                principles. Taken together, they constitute a consistent and coherent approach to the
                literary interpretation of the creation narratives.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-4">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">Dei Verbum 12 (Vatican II, 1965)</h3>
                <p className="text-blue-800 italic mb-3">
                  &ldquo;For a correct understanding of what the sacred author wanted to affirm, due
                  attention must be paid to the customary and characteristic styles of feeling, speaking,
                  and narrating which prevailed at the time of the sacred writer.&rdquo;
                </p>
                <p className="text-blue-700 text-sm">&mdash; <em>Dei Verbum</em>, 12</p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mb-4">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">Providentissimus Deus (Leo XIII, 1893)</h3>
                <p className="text-blue-800 italic mb-3">
                  &ldquo;The sacred writers did not intend to teach men these things &mdash; things in no
                  way profitable unto salvation &mdash; [i.e., the essential nature of the things of the
                  visible universe].&rdquo;
                </p>
                <p className="text-blue-700 text-sm">&mdash; Pope Leo XIII, <em>Providentissimus Deus</em> (1893)</p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mb-4">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">CCC 116 &amp; 390</h3>
                <p className="text-blue-800 italic mb-2">
                  &ldquo;The literal sense is the meaning conveyed by the words of Scripture and
                  discovered by exegesis, following the rules of sound interpretation. All other senses
                  of Sacred Scripture are based on the literal.&rdquo;
                </p>
                <p className="text-blue-700 text-sm mb-3">&mdash; CCC 116</p>
                <p className="text-blue-800 italic mb-2">
                  &ldquo;The account of the fall in Genesis 3 uses figurative language, but affirms a
                  primeval event, a deed that took place at the beginning of the history of man.&rdquo;
                </p>
                <p className="text-blue-700 text-sm">&mdash; CCC 390</p>
              </div>

              <p className="text-gray-700 leading-relaxed">
                The Pontifical Biblical Commission&rsquo;s landmark 1993 document, <em>The Interpretation
                of the Bible in the Church</em>, provides the most comprehensive modern survey of
                approved exegetical methods. It affirms that identifying the literary genre of a biblical
                text is not optional &mdash; it is essential for understanding what the inspired author
                actually intended to communicate.
              </p>
            </div>

            {/* Card 4: Augustine's Warning */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Quote className="w-6 h-6 text-purple-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">St. Augustine&rsquo;s Prescient Warning (c. 415 AD)</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Sixteen hundred years ago, one of the greatest theologians in the history of the Church
                issued a warning that reads as though it were written for our own time. St. Augustine of
                Hippo, who devoted more intellectual energy to the interpretation of Genesis than to
                almost any other book of Scripture, warned his fellow Christians against the dangers of
                over-literal, over-confident readings of the creation narrative.
              </p>

              <div className="bg-purple-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-purple-900 mb-3">The Famous Warning</h3>
                <p className="text-purple-800 italic mb-3">
                  &ldquo;It is a disgraceful and dangerous thing for an unbeliever to hear a Christian,
                  presumably giving the meaning of Holy Scripture, talking nonsense on these topics; and
                  we should take all means to prevent such an embarrassing situation, in which people
                  show up vast ignorance in a Christian and laugh it to scorn.&rdquo;
                </p>
                <p className="text-purple-700 text-sm">&mdash; St. Augustine, <em>De Genesi ad Litteram</em>, I.19.39 (c. 415 AD)</p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Augustine himself wrote <em>four</em> separate attempts at a commentary on Genesis,
                finding the text extraordinarily difficult and repeatedly revising his views. His
                magnum opus on the subject, <em>De Genesi ad Litteram</em> (&ldquo;On the Literal
                Meaning of Genesis&rdquo;), took him fifteen years to complete &mdash; and even then he
                expressed significant uncertainty about many of its interpretations.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-purple-50 p-5 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">Augustine&rsquo;s Key Insights on Genesis</h4>
                  <ul className="text-purple-800 text-sm space-y-2">
                    <li>&ldquo;Day&rdquo; may not mean a literal 24-hour period</li>
                    <li>Time itself was created with the universe</li>
                    <li>God does not exist <em>before</em> the universe in a temporal sense</li>
                    <li>When Scripture seems to conflict with certain natural knowledge, we must re-examine our interpretation of Scripture</li>
                    <li>Multiple valid readings of Genesis may coexist; intellectual humility is required</li>
                  </ul>
                </div>
                <div className="bg-amber-50 p-5 rounded-lg">
                  <h4 className="font-semibold text-amber-900 mb-2">Augustine&rsquo;s Four Genesis Commentaries</h4>
                  <ul className="text-amber-800 text-sm space-y-2">
                    <li><em>De Genesi contra Manichaeos</em> (388 AD) &mdash; Against Manichaean dualism</li>
                    <li><em>De Genesi ad Litteram Imperfectus Liber</em> (393 AD) &mdash; Abandoned as unsatisfactory</li>
                    <li><em>Confessions</em>, Books XI&ndash;XIII (400 AD) &mdash; Mystical and philosophical</li>
                    <li><em>De Genesi ad Litteram</em> (401&ndash;415 AD) &mdash; The definitive attempt, 12 books</li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">
                Augustine&rsquo;s approach establishes a principle the Church has never abandoned: the
                interpretation of Genesis must be guided by intellectual honesty, theological
                seriousness, and willingness to hold open questions with appropriate humility. He is
                not a &ldquo;liberal&rdquo; interpreter undermining Scripture &mdash; he is one of the
                most orthodox theologians in Catholic history, insisting that the truth of Scripture
                be defended by reading it correctly.
              </p>
            </div>
          </div>
        )}

        {/* ==================== TAB 2: THE FOUR SENSES ==================== */}
        {activeTab === 'four-senses' && (
          <div className="space-y-8">

            {/* Card 1: Introduction */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Layers className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Catholic Tradition of Multi-Layered Reading</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                One of the distinctive glories of the Catholic intellectual tradition is its insistence
                that Scripture operates on multiple levels simultaneously. This is not a concession to
                ambiguity or a retreat from the text&rsquo;s plain meaning &mdash; it is a recognition
                that the Word of God is inexhaustibly rich, capable of speaking to human beings at
                every level of their existence: historical, doctrinal, moral, and eschatological.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                This multi-layered approach goes back to Origen of Alexandria (3rd century), was
                systematized by John Cassian (5th century), and was definitively formulated by the
                medieval theologians, especially St. Thomas Aquinas. It was preserved in Vatican II&rsquo;s
                <em> Dei Verbum</em> and codified in the Catechism of the Catholic Church at paragraphs
                115&ndash;118.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">The Classic Medieval Couplet</h3>
                <p className="text-amber-800 italic mb-3 text-lg">
                  &ldquo;Littera gesta docet, quid credas allegoria,<br />
                  moralis quid agas, quo tendas anagogia.&rdquo;
                </p>
                <p className="text-amber-700 text-sm mb-2">
                  &ldquo;The literal teaches what happened; the allegorical what to believe;<br />
                  the moral what to do; the anagogical where you&rsquo;re going.&rdquo;
                </p>
                <p className="text-amber-700 text-sm">&mdash; Traditional scholastic mnemonic, attributed to Augustine of Dacia (c. 1260)</p>
              </div>

              <p className="text-gray-700 leading-relaxed">
                Applying these four senses to Genesis transforms the question &ldquo;are the six days
                literal?&rdquo; from the only question worth asking into one question among many &mdash;
                and arguably not the most important one. The Church has much richer questions to put to
                the text than how many hours each creative act took.
              </p>
            </div>

            {/* Card 2: Literal Sense */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <FileText className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Literal Sense</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The literal sense is what the text actually says, understood in the light of the
                literary form the author employed. The crucial point &mdash; one that is regularly
                misunderstood &mdash; is that &ldquo;literal&rdquo; does <em>not</em> mean
                &ldquo;literalistic.&rdquo; It means understanding what the author <em>intended</em>
                to communicate. If an author writes a poem, the literal sense of the poem is what the
                poem means as a poem &mdash; not what its images would mean if they were treated as
                prose descriptions of physical events.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">CCC 116</h3>
                <p className="text-blue-800 italic mb-3">
                  &ldquo;The literal sense is the meaning conveyed by the words of Scripture and
                  discovered by exegesis, following the rules of sound interpretation. All other senses
                  of Sacred Scripture are based on the literal.&rdquo;
                </p>
                <p className="text-blue-700 text-sm">&mdash; Catechism of the Catholic Church, 116</p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                For Genesis 1, the literal sense &mdash; what the author intended to communicate &mdash;
                includes the following binding theological affirmations:
              </p>

              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6 ml-4">
                <li>God alone created everything that exists, freely and out of love</li>
                <li>Creation is genuinely good &mdash; not evil matter to be escaped (against Gnosticism and Manichaeism)</li>
                <li>Humanity is the crown of creation, uniquely made in God&rsquo;s image and likeness</li>
                <li>The Sabbath is holy &mdash; rest is built into the structure of creation itself</li>
                <li>The created order is intelligible and orderly, reflecting the mind of its Creator</li>
              </ul>

              <p className="text-gray-700 leading-relaxed">
                What the literal sense does <em>not</em> necessarily include is a definitive answer
                about the age of the universe, the biological mechanisms of creation, or the number
                of hours in each &ldquo;day.&rdquo; These questions were not within the author&rsquo;s
                communicative intention.
              </p>
            </div>

            {/* Card 3: Allegorical Sense */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Church className="w-6 h-6 text-purple-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Allegorical Sense</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The allegorical sense &mdash; also called the typological sense &mdash; asks how the
                text of the Old Testament points forward to Christ, the Church, and the sacraments.
                This is not arbitrary &ldquo;reading things into&rdquo; the text; it is the logic
                of salvation history, in which earlier events and figures anticipate and are fulfilled
                in Christ. St. Paul himself established this principle: &ldquo;Adam&hellip; is a type
                of the one who was to come&rdquo; (Romans 5:14).
              </p>

              <div className="bg-purple-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-purple-900 mb-3">Allegorical Readings of Genesis</h3>
                <ul className="text-purple-800 space-y-3">
                  <li>
                    <span className="font-semibold">The waters of creation</span> &rarr; Baptism: water
                    and the Spirit bringing new life (cf. John 3:5; the Spirit hovering over the waters
                    in Gen 1:2 and hovering at Christ&rsquo;s baptism)
                  </li>
                  <li>
                    <span className="font-semibold">Adam</span> &rarr; Christ as the &ldquo;New
                    Adam&rdquo; (Romans 5:14; 1 Corinthians 15:45): where the first Adam brought death
                    through disobedience, the New Adam brings life through obedience
                  </li>
                  <li>
                    <span className="font-semibold">Eve formed from Adam&rsquo;s side</span> &rarr; the
                    Church born from the pierced side of Christ on the Cross (blood and water, John
                    19:34)
                  </li>
                  <li>
                    <span className="font-semibold">Light on Day 1</span> &rarr; Christ who is &ldquo;the
                    Light of the world&rdquo; (John 8:12), whose coming is the new act of divine creation
                  </li>
                  <li>
                    <span className="font-semibold">The six days</span> &rarr; the six ages of salvation
                    history, culminating in the seventh age of rest in God (a common patristic reading
                    in Augustine, Isidore, and the medieval schoolmen)
                  </li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed">
                The allegorical sense does not displace the literal sense but enriches it. Genesis 1
                is not merely a creation account &mdash; it is a prophetic anticipation of the new
                creation in Christ. The first words of John&rsquo;s Gospel (&ldquo;In the beginning
                was the Word&rdquo;) deliberately echo Genesis 1:1 to make precisely this point.
              </p>
            </div>

            {/* Card 4: Moral Sense */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-green-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Moral Sense</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The moral sense &mdash; also called the tropological sense &mdash; draws from the
                sacred text guidance for how to live. It asks: what does this passage call me to do or
                to become? For Genesis, the moral implications are extraordinarily rich and form the
                foundation of Catholic social teaching on the environment, human dignity, work, and
                the family.
              </p>

              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-green-900 mb-3">Moral Readings of Genesis</h3>
                <ul className="text-green-800 space-y-3">
                  <li>
                    <span className="font-semibold">The Sabbath rest</span> &rarr; We must rest in God,
                    not in our own works. The injunction against overwork and the obligation of religious
                    observance are embedded in the structure of creation itself.
                  </li>
                  <li>
                    <span className="font-semibold">The naming of the animals (Gen 2:19&ndash;20)</span> &rarr;
                    Human beings have been given dominion over creation &mdash; not to exploit it but
                    to care for it as stewards. This is the biblical foundation of Catholic ecological
                    ethics, developed in Pope Francis&rsquo;s <em>Laudato Si&rsquo;</em> (2015).
                  </li>
                  <li>
                    <span className="font-semibold">Creation is &ldquo;very good&rdquo; (Gen 1:31)</span> &rarr;
                    Respect for the created order as a moral obligation; the theology of the body is
                    grounded here (the body is good, not a prison for the soul).
                  </li>
                  <li>
                    <span className="font-semibold">The Fall (Gen 3)</span> &rarr; The constant human
                    temptation to &ldquo;be like God&rdquo; on our own terms, without reference to the
                    divine will. Pride &mdash; putting self before God &mdash; is identified as the root
                    of all sin.
                  </li>
                  <li>
                    <span className="font-semibold">The Imago Dei (Gen 1:26&ndash;27)</span> &rarr;
                    Every human being, regardless of age, condition, or achievement, possesses
                    inalienable dignity because each is made in the image and likeness of God. This is
                    the foundation of Catholic teaching on human rights.
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 5: Anagogical Sense */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Anagogical Sense</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The anagogical sense &mdash; from the Greek <em>anag&#333;g&#275;</em>, &ldquo;leading
                upward&rdquo; &mdash; asks how the text points toward our ultimate destiny: the
                beatific vision, the resurrection of the body, the life of the world to come. It reads
                the events and images of Scripture as anticipations of heaven. Genesis, which begins
                with creation, provides the opening notes of a symphony that will not resolve until
                the new heavens and new earth of the Apocalypse.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">Anagogical Readings of Genesis</h3>
                <ul className="text-amber-800 space-y-3">
                  <li>
                    <span className="font-semibold">The Garden of Eden</span> &rarr; The heavenly
                    Jerusalem. Revelation 22 deliberately echoes Genesis 2: the river of life, the tree
                    of life, the absence of night, and the direct presence of God are all restored in the
                    new creation. What was lost in the Fall is more than recovered in Christ.
                  </li>
                  <li>
                    <span className="font-semibold">The Sabbath rest on the seventh day</span> &rarr;
                    The eternal Sabbath rest in God. Hebrews 4:1&ndash;11 develops this typology
                    explicitly: &ldquo;A sabbath rest still remains for the people of God.&rdquo; Our
                    earthly Sunday rest anticipates the endless rest of the blessed.
                  </li>
                  <li>
                    <span className="font-semibold">Light at creation</span> &rarr; The light of the Lamb
                    in the New Jerusalem: &ldquo;The city has no need of sun or moon to shine on it, for
                    the glory of God is its light, and its lamp is the Lamb&rdquo; (Rev 21:23).
                  </li>
                  <li>
                    <span className="font-semibold">God walking in the garden (Gen 3:8)</span> &rarr; The
                    beatific vision: the direct, face-to-face communion with God that is the goal of
                    human existence, lost through sin and restored through Christ.
                  </li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed">
                Origen, Ambrose, and Augustine all developed rich anagogical readings of Genesis. For
                them, the creation narrative was not merely backward-looking (what happened at the
                beginning) but forward-looking: where is the entire created order going? The answer
                is the new creation in Christ &mdash; and Genesis 1 already anticipates it.
              </p>
            </div>

            {/* Card 6: Practical Application */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Reading Genesis Today: A Practical Guide</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                A Catholic reader of Genesis 1 does not have to choose between &ldquo;taking it
                seriously&rdquo; and &ldquo;accepting modern science.&rdquo; The Church&rsquo;s
                tradition provides a far richer set of questions to bring to the text than the
                narrow either/or that dominates popular debate.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">Four Questions a Catholic Reader Asks</h3>
                <ul className="text-amber-800 space-y-3">
                  <li>
                    <span className="font-semibold">Literal:</span> What did this text communicate to
                    ancient Israel? What was the author&rsquo;s theological intention? What truths does
                    the text bind us to hold?
                  </li>
                  <li>
                    <span className="font-semibold">Allegorical:</span> How does this passage point to
                    Christ and the Church? Where are the types and foreshadowings of the new creation?
                  </li>
                  <li>
                    <span className="font-semibold">Moral:</span> What does this text call me to do?
                    How does it shape my relationships with God, other people, and the natural world?
                  </li>
                  <li>
                    <span className="font-semibold">Anagogical:</span> What does this text tell me
                    about my ultimate destiny &mdash; and the destiny of all creation?
                  </li>
                </ul>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-green-50 p-5 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="w-5 h-5 text-green-700" />
                    <h4 className="font-semibold text-green-900">Settled by the Church</h4>
                  </div>
                  <ul className="text-green-800 text-sm space-y-2">
                    <li>God is Creator of all things</li>
                    <li>Creation is genuinely good</li>
                    <li>The human soul is specially created</li>
                    <li>Sin entered through a real historical Fall</li>
                    <li>All humans share one nature in Adam and one redemption in Christ</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-5 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <HelpCircle className="w-5 h-5 text-blue-700" />
                    <h4 className="font-semibold text-blue-900">Left Open by the Church</h4>
                  </div>
                  <ul className="text-blue-800 text-sm space-y-2">
                    <li>Whether the &ldquo;days&rdquo; are 24 hours or longer epochs</li>
                    <li>The age of the universe in years</li>
                    <li>Whether Adam and Eve are a single pair or a founding population</li>
                    <li>The precise biological mechanism of creation</li>
                    <li>The literary source history of Genesis</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== TAB 3: THE SIX DAYS DEBATE ==================== */}
        {activeTab === 'six-days' && (
          <div className="space-y-8">

            {/* Card 1: A Catholic Spectrum */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Scale className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">A Catholic Spectrum of Views</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The meaning of the &ldquo;six days&rdquo; of Genesis 1 is one of the oldest debates in
                biblical interpretation. Catholics have disagreed about it since at least the second
                century &mdash; and the Church has never settled the question by a definitive dogmatic
                definition. This is not a failure of nerve but a recognition that the text itself
                permits multiple interpretations, all of which can be held in good faith.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">The Church&rsquo;s Position in Brief</h3>
                <p className="text-amber-800 mb-2">
                  The Church has <span className="font-semibold">never defined</span> the precise
                  meaning of <em>yom</em> (Hebrew: &ldquo;day&rdquo;) in Genesis 1. The Pontifical
                  Biblical Commission&rsquo;s 1909 response to questions about Genesis explicitly
                  declined to require a particular interpretation of the six days.
                </p>
                <p className="text-amber-800">
                  What the Church has defined is the <span className="font-semibold">theological
                  content</span> of Genesis 1 &mdash; not the precise literary or chronological form.
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed">
                The following survey covers the main positions held by Catholics in good standing,
                from the most literal to the most symbolic, with the historical and scholarly context
                of each. A Catholic may hold any of these positions without contradiction of defined
                Catholic doctrine &mdash; provided they also affirm the Church&rsquo;s binding
                theological teaching on creation (summarized in the final card).
              </p>
            </div>

            {/* Card 2: 24-Hour Day Literalism */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">24-Hour Day Literalism (Young Earth)</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The most literal reading of Genesis 1 takes the six days as six sequential 24-hour
                periods, placing the creation of the universe approximately 6,000&ndash;10,000 years
                ago. This view is most commonly associated with certain strands of Protestant
                fundamentalism, though it has some traditional Catholic advocates.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-green-50 p-5 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="w-5 h-5 text-green-700" />
                    <h4 className="font-semibold text-green-900">What Can Be Said for It</h4>
                  </div>
                  <ul className="text-green-800 text-sm space-y-2">
                    <li>Takes the text at its most surface reading</li>
                    <li>Held by some early Church Fathers (Theophilus of Antioch)</li>
                    <li>Reflects a sincere desire to honor the authority of Scripture</li>
                    <li>The Church has never formally condemned it</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-5 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <HelpCircle className="w-5 h-5 text-red-700" />
                    <h4 className="font-semibold text-red-900">Challenges to Consider</h4>
                  </div>
                  <ul className="text-red-800 text-sm space-y-2">
                    <li>The age of the universe (~13.8 billion years) is among the most well-confirmed findings in modern science</li>
                    <li>Never the mainstream Catholic scholarly position</li>
                    <li>Augustine, Origen, Clement of Alexandria all resisted strictly literal readings</li>
                    <li>The PBC (1909) declined to define the meaning of &ldquo;day&rdquo;</li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">
                It is important to note that <em>the Church has never required this view</em>. Young
                Earth creationism is a permissible personal opinion for a Catholic, but it has never
                been the dominant Catholic theological position and has never been defined as
                obligatory. Catholics who hold it should be aware that they are in a distinct minority
                within the Catholic scholarly tradition.
              </p>
            </div>

            {/* Card 3: Day-Age Theory */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Day-Age Theory</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The Day-Age theory holds that the Hebrew word <em>yom</em> (&ldquo;day&rdquo;) in
                Genesis 1 refers not to a 24-hour period but to a long epoch or era of indeterminate
                length. This interpretation is well-supported by the Hebrew text itself, where
                <em> yom</em> is used with a range of meanings.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">Linguistic Evidence</h3>
                <p className="text-blue-800 mb-3">
                  The Hebrew <em>yom</em> can mean: (1) a 24-hour day; (2) the daylight portion of a
                  day; (3) a period or season; (4) an era or epoch. Context determines meaning. The
                  most striking example is Genesis 2:4: &ldquo;In the day (<em>yom</em>) that the LORD
                  God made the earth and the heavens&rdquo; &mdash; here <em>yom</em> clearly refers to
                  the entire creative period of Genesis 1, not a single 24-hour day.
                </p>
                <p className="text-blue-700 text-sm">&mdash; Cf. also Psalm 90:4; 2 Peter 3:8: &ldquo;With the Lord one day is like a thousand years, and a thousand years are like one day.&rdquo;</p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Early Catholic advocates of a non-literal reading of the &ldquo;days&rdquo; include
                St. Justin Martyr (2nd century), St. Irenaeus of Lyon (2nd century), and St. Clement
                of Alexandria (2nd&ndash;3rd century). In modern times, Gerald Schroeder&rsquo;s
                <em> The Science of God</em> (1997) attempted to reconcile the six days with modern
                cosmology using the framework of relativistic time dilation &mdash; a speculative but
                interesting approach.
              </p>

              <p className="text-gray-700 leading-relaxed">
                This interpretation was widely accepted in the early Church and remains a fully
                legitimate Catholic option. It allows the plain sequence of Genesis 1 &mdash; water,
                sky, land, vegetation, animals, humans &mdash; to be read as broadly corresponding
                to the sequence of development in the natural sciences, without requiring exact
                correspondence in detail.
              </p>
            </div>

            {/* Card 4: Framework/Literary Hypothesis */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Layers className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Framework / Literary Hypothesis</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The framework hypothesis, developed in the 20th century but rooted in ancient
                observations, holds that the six days of Genesis 1 are a literary and theological
                structure &mdash; not a chronological account at all. The parallel arrangement of days
                (Days 1&ndash;3 creating domains; Days 4&ndash;6 filling them) is artistically
                intentional theology, not a timeline.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">The Parallel Structure Revisited</h3>
                <div className="grid sm:grid-cols-3 gap-3">
                  <div className="bg-blue-100 p-3 rounded">
                    <p className="font-semibold text-blue-900 text-sm">Day 1 / Day 4</p>
                    <p className="text-blue-800 text-sm">Light created &rarr; Lights (sun, moon, stars) placed in it</p>
                  </div>
                  <div className="bg-blue-100 p-3 rounded">
                    <p className="font-semibold text-blue-900 text-sm">Day 2 / Day 5</p>
                    <p className="text-blue-800 text-sm">Sky and seas &rarr; Birds and fish fill them</p>
                  </div>
                  <div className="bg-blue-100 p-3 rounded">
                    <p className="font-semibold text-blue-900 text-sm">Day 3 / Day 6</p>
                    <p className="text-blue-800 text-sm">Dry land and plants &rarr; Land animals and humans fill it</p>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                On this reading, the seven-day structure conveys a single theological message in
                artistic form: God is the all-sovereign Creator who brings order out of chaos,
                fills emptiness with life, and crowns the whole with humanity made in His image &mdash;
                before entering into His Sabbath rest, which He invites humanity to share. The
                &ldquo;week&rdquo; is a theological poem, not a historical schedule.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Modern Catholic biblical scholars have been broadly sympathetic to this reading. It
                is fully compatible with modern cosmology because it does not make any historical or
                scientific claims at all &mdash; it makes theological ones. Interestingly, John H.
                Walton&rsquo;s &ldquo;cosmic temple&rdquo; proposal (<em>The Lost World of Genesis
                One</em>, 2009) &mdash; widely cited in Catholic theological circles &mdash; develops
                a similar reading from the perspective of ancient Near Eastern functional ontology.
              </p>
            </div>

            {/* Card 5: Augustine's Instantaneous Creation */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-purple-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Augustine&rsquo;s &ldquo;Instantaneous Creation&rdquo;</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                St. Augustine of Hippo proposed the most radical solution of all. In his
                <em> De Genesi ad Litteram</em>, he argued that God created everything simultaneously
                &mdash; in a single instant &mdash; and that the &ldquo;days&rdquo; of Genesis 1 are
                a conceptual framework provided for human understanding, not an account of a temporal
                sequence in the mind of God.
              </p>

              <div className="bg-purple-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-purple-900 mb-3">Augustine&rsquo;s Key Insight</h3>
                <p className="text-purple-800 italic mb-3">
                  &ldquo;Perhaps Scripture said &lsquo;day&rsquo; and &lsquo;night&rsquo; in
                  reference to some spiritual knowledge in the angels, not to this visible world.&rdquo;
                </p>
                <p className="text-purple-700 text-sm mb-4">&mdash; <em>De Genesi ad Litteram</em>, IV.28.45</p>
                <p className="text-purple-800">
                  Augustine also developed the concept of <em>rationes seminales</em> &mdash;
                  &ldquo;seminal reasons&rdquo; or seed-principles &mdash; implanted by God in matter
                  at the moment of creation, which subsequently develop and unfold according to God&rsquo;s
                  design. This is sometimes cited as a patristic anticipation of evolutionary development.
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Augustine&rsquo;s deepest insight was philosophical: <em>time itself was created with
                the universe.</em> God does not exist in time; God is the Creator of time. Therefore
                it is literally meaningless to ask &ldquo;what was God doing before creation?&rdquo; &mdash;
                there was no &ldquo;before.&rdquo; This insight was later developed by Thomas Aquinas
                and continues to be relevant to modern cosmological discussions about the origin of time.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Thomas Aquinas, who surveyed all the patristic opinions on the six days, concluded that
                Augustine&rsquo;s approach was &ldquo;more subtle and profound,&rdquo; while also
                affirming that more literal readings were not contrary to faith
                (<em>Summa Theologiae</em>, I, Q.74, art.2). This double affirmation &mdash; that
                both are legitimate &mdash; is itself instructive about the Church&rsquo;s approach.
              </p>
            </div>

            {/* Card 6: What the Church Requires */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-green-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">What the Church Actually Requires</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Whatever interpretation of the six days one holds, the following theological
                affirmations are required by Catholic faith. These are not negotiable positions:
                they are the settled doctrinal content that Genesis 1&ndash;3 communicates, and which
                the Church has defined in her creeds, catechisms, and conciliar documents.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-green-50 p-5 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle className="w-5 h-5 text-green-700" />
                    <h4 className="font-semibold text-green-900">Required by Catholic Faith</h4>
                  </div>
                  <ul className="text-green-800 text-sm space-y-2">
                    <li>God freely created the world from nothing (<em>ex nihilo</em>) &mdash; CCC 296&ndash;298</li>
                    <li>Creation is genuinely good &mdash; CCC 299</li>
                    <li>Human beings are created in the image of God (<em>imago Dei</em>) &mdash; CCC 355&ndash;361</li>
                    <li>The human soul is immediately created by God &mdash; <em>Humani Generis</em>, 36</li>
                    <li>A real, historical Fall introduced sin into human history &mdash; CCC 390, 396&ndash;409</li>
                    <li>Original sin is transmitted to all humans &mdash; CCC 404&ndash;406</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-5 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <HelpCircle className="w-5 h-5 text-blue-700" />
                    <h4 className="font-semibold text-blue-900">Not Required by Catholic Faith</h4>
                  </div>
                  <ul className="text-blue-800 text-sm space-y-2">
                    <li>A specific age of the universe in years</li>
                    <li>Literal 24-hour creative days</li>
                    <li>Young-earth chronology (~6,000&ndash;10,000 years)</li>
                    <li>A specific biological mechanism of creation</li>
                    <li>Rejection of the scientific evidence for an ancient universe</li>
                  </ul>
                </div>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">The Principle That Holds It Together</h3>
                <p className="text-amber-800">
                  Truth cannot contradict truth. The God who speaks in Scripture is the same God who
                  created the universe that science studies. If the sciences reveal genuine truths about
                  the age and structure of the cosmos, those truths are truths about God&rsquo;s
                  creation &mdash; and the Catholic faithful have nothing to fear from them. What the
                  sciences cannot tell us is <em>why</em> the universe exists, <em>who</em> created
                  it, or what our place in it ultimately means. That is the domain of Scripture and
                  Tradition &mdash; and Genesis speaks with full authority on all three.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ==================== TAB 4: ADAM & EVE ==================== */}
        {activeTab === 'adam-eve' && (
          <div className="space-y-8">

            {/* Card 1: The Hardest Question */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <HelpCircle className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Hardest Question</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The historicity of Adam and Eve is the most theologically sensitive question in the
                dialogue between Catholic faith and modern science. It touches the heart of Catholic
                doctrine on original sin, which &mdash; per CCC 404 &mdash; requires a <em>real
                historical event</em> at the origin of the human race. It is not a peripheral
                question but a central one: the entire theology of redemption in Christ as the
                &ldquo;New Adam&rdquo; depends on there being a &ldquo;First Adam&rdquo; whose sin
                required redemption.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                The challenge from modern science comes primarily from population genetics. Genetic
                analysis of the human genome indicates that the human population never passed through
                a bottleneck of fewer than approximately 10,000 individuals. This creates an apparent
                tension with the traditional doctrine of monogenism &mdash; the belief that all humans
                descend from a single first couple.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">Why This Matters Theologically</h3>
                <p className="text-amber-800 mb-2">
                  The doctrine of original sin, as defined at the Council of Trent and explained in
                  the Catechism, holds that:
                </p>
                <ul className="text-amber-800 space-y-2">
                  <li>Original sin was committed by a real historical individual (or couple)</li>
                  <li>It is transmitted to all humans by propagation, not merely by imitation</li>
                  <li>All humans are therefore in solidarity in both sin and redemption</li>
                  <li>Christ&rsquo;s redemption is truly universal because the original fall was truly universal</li>
                </ul>
              </div>
            </div>

            {/* Card 2: Church's Core Teaching */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Church&rsquo;s Core Teaching: Monogenism</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Monogenism</strong> is the teaching that all human beings descend from a
                single first couple. It has been the consistent teaching of the Church and is
                closely bound up with the doctrine of original sin. The operative magisterial text
                remains Pius XII&rsquo;s encyclical <em>Humani Generis</em> (1950).
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-4">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">CCC 360</h3>
                <p className="text-blue-800 italic mb-3">
                  &ldquo;Because of its common origin the human race forms a unity.&rdquo;
                </p>
                <p className="text-blue-700 text-sm">&mdash; Catechism of the Catholic Church, 360</p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mb-4">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">CCC 404</h3>
                <p className="text-blue-800 italic mb-3">
                  &ldquo;By yielding to the tempter, Adam and Eve committed a personal sin, but this
                  sin affected the human nature that they would then transmit in a fallen state.&rdquo;
                </p>
                <p className="text-blue-700 text-sm">&mdash; Catechism of the Catholic Church, 404</p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">Humani Generis, &sect;37 (Pius XII, 1950)</h3>
                <p className="text-blue-800 italic mb-3">
                  &ldquo;It is in no way apparent how such an opinion [polygenism] can be reconciled
                  with that which the sources of revealed truth and the documents of the Teaching
                  Authority of the Church propose with regard to original sin, which proceeds from a
                  sin actually committed by an individual Adam and which through generation is passed
                  on to all and is in everyone as his own.&rdquo;
                </p>
                <p className="text-blue-700 text-sm">&mdash; Pius XII, <em>Humani Generis</em>, 37 (1950)</p>
              </div>

              <p className="text-gray-700 leading-relaxed">
                This passage remains the operative magisterial text on this question. No subsequent
                document from the Magisterium has overtly contradicted or formally superseded it. Any
                Catholic proposal for reconciling genetic science with original sin must take this
                text seriously and show how it is compatible with the doctrinal substance Pius XII
                was protecting.
              </p>
            </div>

            {/* Card 3: The Genetic Challenge */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Globe className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Genetic Challenge: What Population Genetics Shows</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Population genetics studies patterns of genetic variation within and between
                populations to reconstruct demographic history. Applied to the human species, it has
                produced results that are directly relevant to the question of human origins.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">The Core Finding</h3>
                <p className="text-blue-800 mb-3">
                  The human genome carries patterns of genetic variation &mdash; particularly in the
                  diversity of alleles at multiple loci &mdash; that could not have passed through a
                  single ancestral couple without miraculous creation of extraordinary genetic
                  diversity. Geneticist Francis Collins, founder of BioLogos and former director of
                  the Human Genome Project, has stated:
                </p>
                <p className="text-blue-800 italic mb-3">
                  &ldquo;We know with great certainty that humans share a common ancestor with other
                  primates and that the size of the ancestral population was never less than several
                  thousand.&rdquo;
                </p>
                <p className="text-blue-700 text-sm">&mdash; Francis Collins, <em>The Language of God</em> (2006)</p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                Denis Venema and Scot McKnight&rsquo;s <em>Adam and the Genome</em> (2017) presents
                the genetic evidence in comprehensive detail and concludes that the traditional view
                of a single founding couple is incompatible with the population genetics data.
                However, both authors are Protestant, and neither engages deeply with the specific
                Catholic theological framework (the transmission of a wounded nature, not merely
                sinful behavior) that makes the question more complex for Catholics.
              </p>

              <p className="text-gray-700 leading-relaxed">
                The key theological question for Catholics is not primarily a genetic one but a
                doctrinal one: does the Church&rsquo;s teaching on original sin require literal
                biological descent from exactly two individuals &mdash; or does it require a real,
                historical originating event involving what we might call a &ldquo;founding
                population&rdquo;? This is a genuinely open question in current Catholic theology.
              </p>
            </div>

            {/* Card 4: Catholic Responses */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Catholic Responses to the Challenge</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Several serious Catholic thinkers have proposed solutions that attempt to honor both
                the genetic evidence and the Church&rsquo;s doctrinal commitments. None of these
                proposals has been officially endorsed or condemned by the Magisterium &mdash; the
                question remains genuinely open.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg mb-4">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">Kenneth Kemp&rsquo;s Proposal (2011)</h3>
                <p className="text-amber-800 mb-2">
                  Kenneth Kemp, a Catholic philosopher, proposed in &ldquo;Science, Theology, and
                  Monogenism&rdquo; (<em>American Catholic Philosophical Quarterly</em>, 2011) a
                  solution that has been widely discussed. He distinguishes between biological
                  humanity (<em>Homo sapiens</em> as a species) and philosophical/theological humanity
                  (beings with rational souls made in the image of God).
                </p>
                <p className="text-amber-800">
                  On his view, a population of biological <em>Homo sapiens</em> may have existed, but
                  God specially elevated two individuals within that population to full rational and
                  spiritual status &mdash; creating the <em>imago Dei</em> in them specifically. These
                  two were the first true human beings in the theological sense, and original sin was
                  transmitted from them spiritually as well as biologically. The surrounding population
                  eventually merged into the spiritually-elevated lineage.
                </p>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg mb-4">
                <h3 className="text-lg font-semibold text-purple-900 mb-3">Pope Benedict XVI / Joseph Ratzinger</h3>
                <p className="text-purple-800 mb-2">
                  Benedict XVI never directly addressed the genetic polygenism question but
                  consistently insisted on a <em>historical</em> Fall. In his 1986 catechetical
                  addresses published as <em>In the Beginning</em>:
                </p>
                <p className="text-purple-800 italic mb-2">
                  &ldquo;At its beginning is always a personal act of sin. There is a historical
                  beginning to it.&rdquo;
                </p>
                <p className="text-purple-700 text-sm">&mdash; Joseph Ratzinger, <em>In the Beginning</em> (Eerdmans, 1995)</p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">International Theological Commission, <em>Communion and Stewardship</em> (2004)</h3>
                <p className="text-blue-800 italic mb-3">
                  &ldquo;Catholic theology affirms that the emergence of the first members of the
                  human species (whether as individuals or in populations) represents an event that is
                  not susceptible of a purely natural explanation and can appropriately be attributed
                  to divine intervention.&rdquo;
                </p>
                <p className="text-blue-700 text-sm">&mdash; ITC, <em>Communion and Stewardship</em>, &sect;70 (2004); endorsed by then-Cardinal Ratzinger</p>
              </div>

              <p className="text-gray-700 leading-relaxed">
                Note the ITC&rsquo;s careful formulation: &ldquo;whether as individuals or in
                populations.&rdquo; This phrase suggests that the Commission deliberately left open
                the question of whether the first humans were a single couple or a founding
                population, while insisting that their emergence involves divine action that exceeds
                purely natural explanation.
              </p>
            </div>

            {/* Card 5: What Must Be Held */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-green-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">What Must Be Held</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Given the genuine openness of this question in current Catholic theology, it is worth
                being precise about what is and is not required. The following summary distinguishes
                defined doctrine from open theological questions.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-green-50 p-5 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle className="w-5 h-5 text-green-700" />
                    <h4 className="font-semibold text-green-900">Required</h4>
                  </div>
                  <ul className="text-green-800 text-sm space-y-2">
                    <li>There was a real, historical originating event &mdash; a &ldquo;Fall&rdquo; &mdash; in which humanity turned from God</li>
                    <li>Original sin is transmitted to all humans; it is not merely imitated</li>
                    <li>The <em>imago Dei</em> is conferred by God, not produced by evolution alone</li>
                    <li>All humans share one human nature and one solidarity in original sin and redemption</li>
                    <li>The human soul is immediately created by God (<em>Humani Generis</em>, 36)</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-5 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <HelpCircle className="w-5 h-5 text-blue-700" />
                    <h4 className="font-semibold text-blue-900">Currently Open</h4>
                  </div>
                  <ul className="text-blue-800 text-sm space-y-2">
                    <li>Whether &ldquo;Adam and Eve&rdquo; are a single genetic couple or a representative founding population</li>
                    <li>The precise biological mechanism by which original sin is transmitted</li>
                    <li>Whether pre-human <em>Homo sapiens</em> existed alongside the spiritually-created first humans</li>
                    <li>The exact relationship between population genetics and doctrinal monogenism</li>
                  </ul>
                </div>
              </div>

              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-red-900 mb-3">What Is Not Permitted</h3>
                <p className="text-red-800">
                  Catholics may not hold polygenism <em>in the sense condemned by Pius XII</em> &mdash;
                  that is, a view according to which original sin is merely a cultural inheritance or
                  a pattern of behavior that spreads through imitation, rather than a real wounding of
                  human nature transmitted by propagation. The theological substance of
                  <em> Humani Generis</em> &sect;37 remains binding: original sin has a real historical
                  origin and is truly transmitted to every human being.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ==================== TAB 5: ANCIENT NEAR EASTERN CONTEXT ==================== */}
        {activeTab === 'ancient-near-east' && (
          <div className="space-y-8">

            {/* Card 1: Why Context Matters */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Globe className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Why Ancient Context Matters</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Genesis was written for ancient Israel &mdash; most likely during the period roughly
                spanning the 10th to the 6th centuries BC, whether in a single authorial act or through
                a process of composition and editing that modern scholars continue to debate. It was not
                written for 21st-century Western readers shaped by Enlightenment science. Understanding
                what Genesis was <em>responding to</em> in its historical context is not a threat to
                faith; it is the first step toward understanding the text as God intended it to be
                understood.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">Dei Verbum&rsquo;s Directive</h3>
                <p className="text-amber-800 italic mb-3">
                  &ldquo;For a correct understanding of what the sacred author wanted to affirm, due
                  attention must be paid to the customary and characteristic styles of feeling,
                  speaking, and narrating which prevailed at the time of the sacred writer.&rdquo;
                </p>
                <p className="text-amber-700 text-sm">&mdash; <em>Dei Verbum</em>, 12 (Vatican II, 1965)</p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The ancient world in which Israel lived was saturated with creation stories. Egypt,
                Mesopotamia, Canaan, and Ugarit all had their own accounts of how the world came to
                be, who the gods were, and what human beings were created for. Genesis did not emerge
                in a vacuum &mdash; it emerged in conversation (and deliberate contrast) with this
                broader world.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Recognizing this context reveals the theological genius of Genesis: it takes the
                forms, images, and questions of its world, and answers them with a radically
                different &mdash; and divinely revealed &mdash; theological vision.
              </p>
            </div>

            {/* Card 2: Enuma Elish */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The <em>Enuma Elish</em>: Babylonian Creation Epic</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The <em>Enuma Elish</em> (Akkadian: &ldquo;When on high&hellip;&rdquo;) is the
                great Babylonian creation epic, dating in its written form to approximately
                1750&ndash;1200 BC, though it preserves much older traditions. It was the official
                creation narrative of the Babylonian empire and was publicly recited at the
                New Year festival.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">The Babylonian Story</h3>
                <p className="text-blue-800 mb-3">
                  In the beginning, the primordial waters &mdash; the freshwater god Apsu and the
                  saltwater goddess Tiamat &mdash; mingle together. From them the first gods are born.
                  When the younger gods&rsquo; noise disturbs Apsu, he plans to destroy them. The god
                  Ea kills Apsu first. Tiamat then goes to war against the younger gods. The hero-god
                  Marduk defeats Tiamat, splits her body in two like a shellfish, and from her corpse
                  forms the sky and earth. Humans are created from the blood of the rebel god Kingu to
                  serve as slaves of the gods.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-amber-50 p-5 rounded-lg">
                  <h4 className="font-semibold text-amber-900 mb-2">Parallels with Genesis</h4>
                  <ul className="text-amber-800 text-sm space-y-2">
                    <li>Primordial waters at the beginning</li>
                    <li>A wind/spirit moving over the waters</li>
                    <li>Separation of waters above and below</li>
                    <li>A progression from chaos to ordered creation</li>
                    <li>The importance of light in the first act of creation</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-5 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">Genesis&rsquo; Theological Contrasts</h4>
                  <ul className="text-green-800 text-sm space-y-2">
                    <li><span className="font-medium">One God</span> vs. a warring pantheon</li>
                    <li><span className="font-medium">Creation is good</span> &mdash; not made from a slain monster&rsquo;s body</li>
                    <li><span className="font-medium">Humans are God&rsquo;s image</span> &mdash; not slaves made from rebel blood</li>
                    <li><span className="font-medium">God rests in sovereign peace</span> &mdash; not exhausted from battle</li>
                    <li><span className="font-medium">No chaos-god</span> &mdash; evil is not co-equal with God</li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">
                Genesis 1 is, among other things, a deliberate theological polemic against Babylonian
                cosmology. The Hebrew word for the primordial deep &mdash; <em>t&ecirc;h&ocirc;m</em> &mdash;
                is linguistically related to Tiamat. But in Genesis, the deep is not a hostile
                goddess &mdash; it is simply formless matter over which God&rsquo;s Spirit moves. God
                does not struggle; God speaks, and it is so. This is a revolutionary theological claim
                in its ancient context.
              </p>
            </div>

            {/* Card 3: Atrahasis Epic and the Flood */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Waves className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Atrahasis Epic and the Flood Narrative</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The <em>Atrahasis Epic</em> (c. 1700 BC, Babylonian) is the most important
                parallel text for Genesis 6&ndash;9. Its story of a great flood survived by a single
                righteous man has obvious similarities to the Noah narrative &mdash; and equally
                important differences that reveal Genesis&rsquo; theological purpose.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">The Babylonian Flood Story</h3>
                <p className="text-blue-800">
                  In the Atrahasis Epic, the gods send a flood to reduce human overpopulation, because
                  the noise of humanity disturbs the god Enlil&rsquo;s sleep. Enki (the water-god,
                  equivalent to Ea) warns Atrahasis (&ldquo;exceedingly wise&rdquo;) to build a boat.
                  Atrahasis survives with his family and animals. After the flood, the gods smell the
                  sacrifice and gather &ldquo;like flies&rdquo; because they are hungry. A similar
                  story appears in the Epic of Gilgamesh (Tablet XI), with the flood survivor named
                  Utnapishtim.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-amber-50 p-5 rounded-lg">
                  <h4 className="font-semibold text-amber-900 mb-2">Shared Elements</h4>
                  <ul className="text-amber-800 text-sm space-y-2">
                    <li>A boat built to survive a catastrophic flood</li>
                    <li>Animals taken on board</li>
                    <li>A single family surviving</li>
                    <li>Birds sent out to test for dry land</li>
                    <li>A sacrifice offered after the flood</li>
                    <li>A divine response to the sacrifice</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-5 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">Genesis&rsquo; Radical Differences</h4>
                  <ul className="text-green-800 text-sm space-y-2">
                    <li>The flood is <em>moral judgment</em>, not divine irritation at noise</li>
                    <li>Noah is saved because he is righteous, not because a god favors him arbitrarily</li>
                    <li>God makes a <em>covenant</em> with Noah after the flood &mdash; a binding promise</li>
                    <li>The flood is not repeated &mdash; God commits Himself to the preservation of creation</li>
                    <li>One God acts consistently &mdash; no divine conflict or caprice</li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">
                The Genesis flood narrative is not &ldquo;copied&rdquo; from Atrahasis but addresses
                the same primordial human questions &mdash; Why does catastrophe come? Is there a God
                who saves? &mdash; with a radically different theological answer. The God of Genesis
                acts with moral purpose, extends covenantal mercy, and commits Himself to the
                preservation of creation. That is the theological content the narrative was inspired
                to communicate.
              </p>
            </div>

            {/* Card 4: Documentary Hypothesis */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <FileText className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Documentary Hypothesis (J, E, D, P)</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Since the 19th century, many Old Testament scholars have proposed that the Pentateuch
                is not the work of a single author (traditionally Moses) but a composite of several
                distinct literary sources, brought together by editors over centuries. This theory,
                known as the Documentary Hypothesis, was developed principally by Julius Wellhausen
                (1878) and Karl Graf. It has been enormously influential in academic biblical
                scholarship, though it has also been significantly revised and debated.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">The Four Proposed Sources</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="bg-blue-100 p-3 rounded">
                    <p className="font-semibold text-blue-900 text-sm">J (Yahwist, c. 950 BC)</p>
                    <p className="text-blue-800 text-sm">Uses &ldquo;YHWH&rdquo; for God; anthropomorphic style; Gen 2:4b onward (the Eden story)</p>
                  </div>
                  <div className="bg-blue-100 p-3 rounded">
                    <p className="font-semibold text-blue-900 text-sm">E (Elohist, c. 850 BC)</p>
                    <p className="text-blue-800 text-sm">Uses &ldquo;Elohim&rdquo;; more distant, transcendent God; fragments throughout Genesis</p>
                  </div>
                  <div className="bg-blue-100 p-3 rounded">
                    <p className="font-semibold text-blue-900 text-sm">D (Deuteronomist, c. 620 BC)</p>
                    <p className="text-blue-800 text-sm">Primarily Deuteronomy; characteristic hortatory style</p>
                  </div>
                  <div className="bg-blue-100 p-3 rounded">
                    <p className="font-semibold text-blue-900 text-sm">P (Priestly, c. 550 BC)</p>
                    <p className="text-blue-800 text-sm">Uses &ldquo;Elohim&rdquo;; systematic, formulaic style; Gen 1:1&ndash;2:4a (the seven-day account)</p>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">The Catholic Response</h3>
                <p className="text-amber-800 mb-2">
                  The Pontifical Biblical Commission&rsquo;s 1906 response permitted careful scholarly
                  use of source criticism. The PBC&rsquo;s landmark 1993 document, <em>The
                  Interpretation of the Bible in the Church</em>, acknowledged that source theories
                  are working hypotheses, not settled facts, and that subsequent scholarship has
                  significantly modified and contested Wellhausen&rsquo;s original model.
                </p>
                <p className="text-amber-800">
                  The Church does not define the literary history of Genesis. What is essential is
                  that the canonical text, as received by the Church, is the inspired Word of God
                  &mdash; whatever compositional history lies behind it. The Church reads the
                  canonical text.
                </p>
              </div>
            </div>

            {/* Card 5: Genesis as Theological Statement */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-green-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Genesis as Theological Statement, Not Competitor to Science</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Seen against its ancient Near Eastern background, Genesis 1 emerges as a document
                of extraordinary theological precision. It answers every major question its ancient
                audience would have been asking about the creation myths of the surrounding cultures
                &mdash; and it answers them with a radically different and divinely revealed vision.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-green-50 p-5 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">Questions Genesis Answers</h4>
                  <ul className="text-green-800 text-sm space-y-2">
                    <li><span className="font-medium">Who</span> created? God alone &mdash; not Marduk, not the Enneads of Egypt</li>
                    <li><span className="font-medium">Why</span> did God create? Out of love and sovereign freedom &mdash; not from war or necessity</li>
                    <li><span className="font-medium">What is</span> creation? Genuinely good &mdash; not evil matter or a monster&rsquo;s corpse</li>
                    <li><span className="font-medium">Who are</span> humans? Image of God &mdash; not slaves made from rebel blood</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-5 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">Questions Genesis Does Not Answer</h4>
                  <ul className="text-blue-800 text-sm space-y-2">
                    <li>How long did creation take in years?</li>
                    <li>What biological mechanisms were used?</li>
                    <li>When in absolute chronological terms?</li>
                    <li>What were the intermediate stages of biological development?</li>
                  </ul>
                </div>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">Dei Verbum 11: The Key Principle</h3>
                <p className="text-amber-800 italic mb-3">
                  &ldquo;The books of Scripture must be acknowledged as teaching firmly, faithfully,
                  and without error that truth which God wanted put into them for the sake of our
                  salvation.&rdquo;
                </p>
                <p className="text-amber-700 text-sm mb-3">&mdash; <em>Dei Verbum</em>, 11 (Vatican II, 1965)</p>
                <p className="text-amber-800">
                  Natural science questions were not the purpose of Genesis. That is not a limitation
                  &mdash; it is the genius of divine revelation: giving Israel, and through Israel all
                  of humanity, the truths essential for salvation while leaving the legitimate work of
                  natural science to human reason. The perceived conflict between Genesis and science
                  dissolves when the text is allowed to answer the questions it was actually asked to
                  answer.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ==================== TAB 6: KEY DOCUMENTS & VOICES ==================== */}
        {activeTab === 'key-documents' && (
          <div className="space-y-8">

            {/* Card 1: Magisterial Documents */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <ScrollText className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Magisterial Documents</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The Church has addressed the interpretation of Genesis and the relationship between
                Scripture and natural science in a series of authoritative documents spanning more
                than a century. Taken together, they constitute a coherent and consistently
                developing body of magisterial guidance.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg mb-4">
                <h3 className="text-lg font-semibold text-amber-900 mb-2">Providentissimus Deus (Leo XIII, 1893)</h3>
                <p className="text-amber-800 mb-2">
                  The first major papal encyclical on biblical interpretation. Leo XIII established
                  the foundational principle: &ldquo;The sacred writers did not intend to teach men
                  these things, things in no way profitable unto salvation.&rdquo; He taught that
                  Scripture is not a manual of natural science and that apparent conflicts between
                  Scripture and science should prompt a re-examination of the scriptural
                  interpretation, not a rejection of either.
                </p>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg mb-4">
                <h3 className="text-lg font-semibold text-amber-900 mb-2">Pascendi Dominici Gregis (Pius X, 1907)</h3>
                <p className="text-amber-800 mb-2">
                  Condemned Modernism&rsquo;s reduction of Scripture to purely human documents shaped
                  by historical forces. Insisted on divine inspiration as essential to Catholic
                  understanding of Scripture. A needed corrective to the tendency to dissolve
                  Scripture into mere human literature &mdash; but not a mandate for literalism.
                </p>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg mb-4">
                <h3 className="text-lg font-semibold text-amber-900 mb-2">Divino Afflante Spiritu (Pius XII, 1943)</h3>
                <p className="text-amber-800 mb-2">
                  A watershed document &mdash; the &ldquo;Magna Carta&rdquo; of Catholic biblical
                  scholarship. Pius XII actively encouraged Catholic scholars to use historical-critical
                  methods; stressed the identification of the <em>genus litterarium</em> (literary
                  genre) as essential to correct interpretation; called for studying the ancient Near
                  Eastern context. This document opened the door to the rich tradition of Catholic
                  biblical scholarship that flourished in the second half of the 20th century.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mb-4">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">Dei Verbum (Vatican II, 1965)</h3>
                <p className="text-blue-800 italic mb-3">
                  &ldquo;The books of Scripture must be acknowledged as teaching firmly, faithfully,
                  and without error that truth which God wanted put into them for the sake of our
                  salvation. Thus &lsquo;all Scripture is divinely inspired and has its use for
                  teaching the truth and refuting error, for reformation of manners and discipline
                  in right living&rsquo; (2 Tim 3:16&ndash;17).&rdquo;
                </p>
                <p className="text-blue-700 text-sm">&mdash; <em>Dei Verbum</em>, 11</p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                <em>Dei Verbum</em> is the Church&rsquo;s most complete teaching on Scripture. Its
                definition of inerrancy &mdash; that Scripture is without error in &ldquo;that truth
                which God wanted put into them for the sake of our salvation&rdquo; &mdash; is
                deliberately formulated to exclude the claim that Scripture must be scientifically
                accurate in all its natural descriptions.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">PBC, <em>The Interpretation of the Bible in the Church</em> (1993)</h3>
                <p className="text-blue-800">
                  The most comprehensive modern survey of approved methods for interpreting Scripture.
                  The document warmly endorses the historical-critical method (with appropriate
                  cautions), surveys narrative, rhetorical, canonical, and reader-response approaches,
                  and issues an explicit warning against both fundamentalism (&ldquo;a kind of
                  intellectual suicide&rdquo;) and excessive rationalism that evacuates the text of
                  divine meaning. Available in full at the Vatican website.
                </p>
              </div>
            </div>

            {/* Card 2: Church Fathers */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Quote className="w-6 h-6 text-purple-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Church Fathers on Genesis</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The interpretation of Genesis is not a modern problem. The Church Fathers wrestled
                with it intensively, and their range of approaches &mdash; from the more literal to
                the highly allegorical &mdash; establishes the breadth of legitimate Catholic
                interpretation across the centuries.
              </p>

              <div className="bg-purple-50 p-6 rounded-lg mb-4">
                <h3 className="text-lg font-semibold text-purple-900 mb-2">St. Augustine of Hippo (354&ndash;430)</h3>
                <p className="text-purple-800 mb-2">
                  <em>De Genesi ad Litteram</em> (12 books, 401&ndash;415 AD): Augustine&rsquo;s
                  magisterial, fifteen-year engagement with Genesis. He accepted that &ldquo;day&rdquo;
                  may not mean a 24-hour period; proposed that time was created with the universe;
                  suggested God may have created everything simultaneously with the &ldquo;days&rdquo;
                  being an ordered conceptual framework; introduced the concept of <em>rationes
                  seminales</em> &mdash; seed-principles in matter that unfold according to God&rsquo;s
                  design. His insistence that Christian interpreters must not make themselves a
                  laughingstock before unbelievers through overconfident literal readings remains
                  the gold standard of Catholic hermeneutical wisdom.
                </p>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg mb-4">
                <h3 className="text-lg font-semibold text-purple-900 mb-2">St. Basil the Great (329&ndash;379)</h3>
                <p className="text-purple-800 mb-2">
                  <em>Hexaemeron</em> (&ldquo;On the Six Days&rdquo;) &mdash; nine homilies preached
                  during Holy Week, probably in 378 AD. Basil accepted a broadly more literal reading
                  of the six days but was deeply interested in the natural science of his day, drawing
                  on Aristotle and the Greek natural philosophers throughout. His principle:
                  &ldquo;It is not difficult for a physician to understand the Book of Nature.&rdquo;
                  He treated the creation narrative as entirely compatible with careful observation
                  of the natural world.
                </p>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg mb-4">
                <h3 className="text-lg font-semibold text-purple-900 mb-2">St. John Chrysostom (349&ndash;407)</h3>
                <p className="text-purple-800 mb-2">
                  <em>Homilies on Genesis</em> &mdash; 67 homilies covering the entire book. Chrysostom
                  emphasized the moral and tropological sense of the text; resisted overly speculative
                  allegorical readings (he was more cautious than Origen or Augustine in this regard);
                  and consistently brought the text to bear on the practical spiritual life of his
                  congregation in Antioch and later Constantinople.
                </p>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-purple-900 mb-2">St. Thomas Aquinas (1225&ndash;1274)</h3>
                <p className="text-purple-800 mb-2">
                  <em>Summa Theologiae</em>, I, Questions 65&ndash;74 (On the Work of the Six Days).
                  Aquinas surveyed the full range of patristic opinions on the six days and reached
                  a characteristically Thomistic conclusion: multiple interpretations are legitimate
                  as long as none of them contradicts defined doctrine or certain natural knowledge.
                  He held Augustine&rsquo;s instantaneous creation view to be &ldquo;more subtle and
                  profound&rdquo; but did not require it. His principle: where Scripture does not
                  define the matter, we should hold our interpretation humbly and be willing to revise
                  it in light of further evidence.
                </p>
              </div>
            </div>

            {/* Card 3: Modern Catholic Voices */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Modern Catholic Voices</h2>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mb-4">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Pope Benedict XVI / Joseph Ratzinger</h3>
                <p className="text-blue-800 mb-2">
                  <em>In the Beginning</em> (1986, published in English by Eerdmans, 1995): A series
                  of catechetical addresses on creation, the Fall, and redemption. Ratzinger insisted
                  on reading Genesis in terms of its theological intention &mdash; the affirmation of
                  the <em>Logos</em>, the rational structure of creation &mdash; rather than as a
                  competitor to science. His 2007 Castel Gandolfo conference on creation and evolution
                  brought together some of Europe&rsquo;s leading Catholic scientists and theologians
                  for a serious engagement with the question. Key theme: &ldquo;The universe is not
                  the result of chance, as some would like to make us believe. Contemplating it, we
                  are invited to read something profound in it: the wisdom of the Creator, the
                  inexhaustible creativity of God.&rdquo;
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mb-4">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Pope John Paul II</h3>
                <p className="text-blue-800 mb-2">
                  Address to the Pontifical Academy of Sciences (1996): &ldquo;Today, more than a
                  half-century after the appearance of that encyclical [<em>Humani Generis</em>],
                  some new findings lead us toward the recognition of evolution as more than a
                  hypothesis.&rdquo; John Paul II affirmed evolutionary science for the origin of the
                  body while insisting: &ldquo;If the human body has its origin in living material
                  which pre-exists it, the spiritual soul is immediately created by God.&rdquo; His
                  <em> Theology of the Body</em> (1979&ndash;1984) developed a rich reading of
                  Genesis 1&ndash;3 as the foundation of Catholic anthropology and sexual ethics.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mb-4">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">International Theological Commission, <em>Communion and Stewardship</em> (2004)</h3>
                <p className="text-blue-800 mb-2">
                  The most comprehensive recent document on creation, evolution, and human origins,
                  produced by the ITC under then-President Cardinal Ratzinger. It affirms evolution,
                  insists on divine action in the emergence of the first human beings, addresses
                  intelligent design critically (while sympathetic to &ldquo;purposeful design&rdquo;),
                  and leaves open whether &ldquo;the first members of the human species&rdquo; emerged
                  &ldquo;as individuals or in populations.&rdquo; Essential reading for any Catholic
                  engaging these questions seriously.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Stephen M. Barr</h3>
                <p className="text-blue-800">
                  Particle physicist and Catholic apologist. <em>Modern Physics and Ancient Faith</em>
                  (University of Notre Dame Press, 2003) is one of the most rigorous Catholic
                  engagements with the alleged conflict between modern physics and Christian faith.
                  Barr argues that modern physics &mdash; far from undermining belief in God &mdash;
                  has actually undermined the materialist worldview that claimed to be based on
                  science. His chapter on creation and the Big Bang is particularly relevant to the
                  interpretation of Genesis.
                </p>
              </div>
            </div>

            {/* Card 4: Sources for Further Study */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Sources for Further Study</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The following sources represent the essential reading for a Catholic who wishes to
                engage these questions seriously. They range from primary magisterial documents
                (freely available on the Vatican website) to specialist scholarly works.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Magisterial &amp; Official Documents</h3>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li><span className="font-medium">CCC 279&ndash;421</span> &mdash; Creation, the Fall, Original Sin</li>
                    <li><span className="font-medium">Dei Verbum</span> (Vatican II, 1965) &mdash; Full text</li>
                    <li><span className="font-medium">Humani Generis</span> (Pius XII, 1950) &mdash; esp. &sect;&sect;36&ndash;37</li>
                    <li><span className="font-medium">Divino Afflante Spiritu</span> (Pius XII, 1943)</li>
                    <li><span className="font-medium">Providentissimus Deus</span> (Leo XIII, 1893)</li>
                    <li><span className="font-medium">PBC, <em>The Interpretation of the Bible in the Church</em></span> (1993)</li>
                    <li><span className="font-medium">ITC, <em>Communion and Stewardship</em></span> (2004)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Books</h3>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>Joseph Ratzinger, <em>In the Beginning</em> (Eerdmans, 1995)</li>
                    <li>John H. Walton, <em>The Lost World of Genesis One</em> (IVP, 2009)</li>
                    <li>Kenneth Kemp, &ldquo;Science, Theology, and Monogenesis,&rdquo; <em>ACPQ</em> 85 (2011)</li>
                    <li>Francis Collins, <em>The Language of God</em> (Free Press, 2006)</li>
                    <li>Stephen M. Barr, <em>Modern Physics and Ancient Faith</em> (Notre Dame, 2003)</li>
                    <li>St. Augustine, <em>De Genesi ad Litteram</em>, tr. J. H. Taylor (Newman Press)</li>
                    <li>Denis Venema &amp; Scot McKnight, <em>Adam and the Genome</em> (Brazos, 2017)</li>
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
