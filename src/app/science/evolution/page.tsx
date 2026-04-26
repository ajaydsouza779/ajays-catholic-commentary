'use client'

import { useState } from 'react'
import {
  Dna,
  BookOpen,
  Lightbulb,
  Scale,
  Users,
  ScrollText,
  Church,
  GraduationCap,
  AlertTriangle,
  Quote,
  FileText,
  Microscope,
  Brain,
  Heart,
  Sparkles,
  HelpCircle,
  Shield,
  Globe,
  Layers,
  CheckCircle,
  XCircle,
  ArrowRight,
} from 'lucide-react'

type TabId =
  | 'catholic-position'
  | 'genesis-science'
  | 'theistic-evolution'
  | 'monogenism'
  | 'id-creationism'
  | 'key-documents'

const tabs: { id: TabId; label: string }[] = [
  { id: 'catholic-position', label: 'The Catholic Position' },
  { id: 'genesis-science', label: 'Genesis & Science' },
  { id: 'theistic-evolution', label: 'Theistic Evolution' },
  { id: 'monogenism', label: 'The Monogenism Question' },
  { id: 'id-creationism', label: 'Intelligent Design & Creationism' },
  { id: 'key-documents', label: 'Key Documents & Quotes' },
]

export default function EvolutionPage() {
  const [activeTab, setActiveTab] = useState<TabId>('catholic-position')

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Evolution &amp; Creation
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The Catholic Church does not oppose the theory of evolution. For over a century, popes,
            theologians, and scientists have explored how evolutionary science and the doctrine of creation
            complement rather than contradict each other. This page presents the Catholic understanding
            of this relationship &mdash; honestly, carefully, and with attention to the genuine
            questions that remain.
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

        {/* ==================== TAB 1: THE CATHOLIC POSITION ==================== */}
        {activeTab === 'catholic-position' && (
          <div className="space-y-8">
            {/* Opening Section */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Church className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Church Does Not Oppose Evolution</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                One of the most persistent misconceptions about Catholicism is that the Church opposes
                the theory of evolution. This is simply false. The Catholic Church has never condemned
                evolutionary theory, has never required belief in a young earth, and has never taught
                that the Genesis creation accounts must be read as scientific descriptions of the
                mechanism by which God created the world. For well over a century, the Church has
                consistently taught that Catholics are free to accept the scientific evidence for
                evolution &mdash; with one crucial theological caveat: the human soul is immediately
                created by God and cannot be a product of purely material processes.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                This position may surprise those who assume that all Christians read Genesis literally
                or that &ldquo;religion versus science&rdquo; is an inevitable conflict. But the Catholic
                intellectual tradition has always insisted that truth cannot contradict truth. If
                evolutionary science reveals something genuine about the natural world, then it reveals
                something about God&rsquo;s creation &mdash; and the Church has no reason to fear it.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">
                  The Key Principle: Truth Cannot Contradict Truth
                </h3>
                <p className="text-amber-800 mb-3">
                  The Catholic approach to evolution rests on a foundational conviction articulated by
                  Pope Leo XIII in <em>Providentissimus Deus</em> (1893) and echoed throughout the
                  Catholic tradition: since both faith and reason come from God, they cannot ultimately
                  be in conflict. If there appears to be a contradiction between a scientific finding and
                  a theological teaching, then either the science is incomplete or the theology has been
                  misunderstood &mdash; or both.
                </p>
                <p className="text-amber-700 text-sm">
                  &mdash; Cf. <em>Catechism of the Catholic Church</em>, 159; Vatican I,
                  <em> Dei Filius</em>, ch. 4
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed">
                What follows is a careful survey of the most important magisterial statements on
                evolution, tracing how the Church&rsquo;s engagement with this question has developed
                from the mid-twentieth century to the present day.
              </p>
            </div>

            {/* Pius XII */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <ScrollText className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Pius XII: <em>Humani Generis</em> (1950)</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The most foundational magisterial text on evolution is Pope Pius XII&rsquo;s encyclical
                <em> Humani Generis</em>, issued in 1950. This document addresses a range of theological
                concerns, but its treatment of evolution is the passage that has shaped Catholic
                engagement with the question ever since.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">
                  The Critical Passage (Paragraph 36)
                </h3>
                <p className="text-blue-800 italic mb-3">
                  &ldquo;The Teaching Authority of the Church does not forbid that, in conformity with
                  the present state of human sciences and sacred theology, research and discussions, on
                  the part of men experienced in both fields, take place with regard to the doctrine of
                  evolution, in so far as it inquires into the origin of the human body as coming from
                  pre-existent and living matter &mdash; for the Catholic faith obliges us to hold that
                  souls are immediately created by God.&rdquo;
                </p>
                <p className="text-blue-700 text-sm">
                  &mdash; Pius XII, <em>Humani Generis</em>, 36 (1950)
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                Several things are worth noting about this text. First, the Pope explicitly states that
                the Church &ldquo;does not forbid&rdquo; research and discussion on evolution. This is
                not a grudging concession but a recognition that evolutionary science falls within the
                legitimate domain of human inquiry. Second, the permission extends specifically to
                research into &ldquo;the origin of the human body as coming from pre-existent and
                living matter&rdquo; &mdash; that is, the evolution of the physical human body from
                earlier life forms. Third, and crucially, there is a non-negotiable theological
                boundary: &ldquo;souls are immediately created by God.&rdquo;
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-green-50 p-5 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="w-5 h-5 text-green-700" />
                    <h4 className="font-semibold text-green-900">What Pius XII Permitted</h4>
                  </div>
                  <ul className="text-green-800 text-sm space-y-2">
                    <li>Research into the evolution of the human body</li>
                    <li>Discussion between scientists and theologians</li>
                    <li>The possibility that the body comes from pre-existing living matter</li>
                    <li>Scientific inquiry into the mechanisms of evolution</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-5 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <XCircle className="w-5 h-5 text-red-700" />
                    <h4 className="font-semibold text-red-900">What Pius XII Required</h4>
                  </div>
                  <ul className="text-red-800 text-sm space-y-2">
                    <li>The human soul is immediately created by God</li>
                    <li>Evolution must not be treated as a proven, certain doctrine</li>
                    <li>Arguments on both sides must be weighed with seriousness</li>
                    <li>The question of monogenism vs. polygenism must be treated carefully</li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">
                <em>Humani Generis</em> thus established the framework that has governed Catholic
                engagement with evolution ever since: the body may have evolved, but the soul is
                directly created by God. Scientific inquiry is welcomed, but philosophical materialism
                &mdash; the claim that matter is all there is &mdash; is rejected.
              </p>
            </div>

            {/* John Paul II */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-purple-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">John Paul II: &ldquo;More Than a Hypothesis&rdquo; (1996)</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                On 22 October 1996, Pope John Paul II delivered a message to the Pontifical Academy
                of Sciences that made headlines around the world. In it, he acknowledged that the
                scientific evidence for evolution had grown considerably since Pius XII&rsquo;s time
                and offered a remarkably positive assessment of the theory.
              </p>

              <div className="bg-purple-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-purple-900 mb-3">
                  The Key Statement
                </h3>
                <p className="text-purple-800 italic mb-3">
                  &ldquo;Today, almost half a century after the publication of the Encyclical, new
                  knowledge has led to the recognition of the theory of evolution as more than a
                  hypothesis. It is indeed remarkable that this theory has been progressively accepted
                  by researchers, following a series of discoveries in various fields of knowledge.
                  The convergence, neither sought nor fabricated, of the results of work that was
                  conducted independently is in itself a significant argument in favour of this
                  theory.&rdquo;
                </p>
                <p className="text-purple-700 text-sm">
                  &mdash; John Paul II, Message to the Pontifical Academy of Sciences, 22 October 1996
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                John Paul II&rsquo;s phrase &ldquo;more than a hypothesis&rdquo; was widely reported as
                the Pope &ldquo;accepting&rdquo; evolution. This was somewhat misleading: the Church
                had never rejected evolution. What John Paul II did was acknowledge that the
                convergent evidence from palaeontology, genetics, molecular biology, and other
                disciplines had elevated evolution from a speculative hypothesis to a well-supported
                scientific theory.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                At the same time, John Paul II was careful to distinguish between different
                &ldquo;theories of evolution&rdquo; &mdash; noting that some are compatible with the
                Christian understanding of the human person, and some are not. Specifically, he rejected
                any theory that treats the human mind and spirit as mere epiphenomena of matter:
              </p>

              <div className="bg-amber-50 p-6 rounded-lg">
                <p className="text-amber-800 italic mb-3">
                  &ldquo;Theories of evolution which, in accordance with the philosophies inspiring them,
                  consider the mind as emerging from the forces of living matter, or as a mere
                  epiphenomenon of this matter, are incompatible with the truth about man. Nor are
                  they able to ground the dignity of the person.&rdquo;
                </p>
                <p className="text-amber-700 text-sm">
                  &mdash; John Paul II, Message to the Pontifical Academy of Sciences, 1996
                </p>
              </div>
            </div>

            {/* Benedict XVI */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-green-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Benedict XVI: Creation and Evolution Are Complementary (2007)</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Pope Benedict XVI (Joseph Ratzinger), one of the most intellectually formidable
                theologians to occupy the Chair of Peter, addressed the question of evolution with
                characteristic precision. In September 2006, he organised a seminar at Castel Gandolfo
                on &ldquo;Creation and Evolution,&rdquo; bringing together former doctoral students
                and scientists for a rigorous dialogue. The proceedings were published in 2007.
              </p>

              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-green-900 mb-3">
                  Benedict&rsquo;s Key Insight
                </h3>
                <p className="text-green-800 mb-3">
                  Benedict XVI argued that the question is not &ldquo;evolution or creation&rdquo; but
                  rather how creation works through the processes that science discovers. The doctrine
                  of creation is not a competing scientific theory &mdash; it is a philosophical and
                  theological affirmation that everything that exists depends on God for its existence.
                  Evolution describes <em>how</em> life has developed; creation explains <em>why</em>
                  there is anything at all.
                </p>
                <p className="text-green-800">
                  As Ratzinger wrote even before becoming Pope: &ldquo;The clay became man at the
                  moment in which a being for the first time was capable of forming, however dimly,
                  the thought &lsquo;God.&rsquo; The first &lsquo;thou&rsquo; that &mdash; however
                  stammering &mdash; was said by human lips to God marks the moment in which spirit
                  arose in the world.&rdquo;
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed">
                Benedict&rsquo;s approach reflects the traditional Catholic distinction between
                primary and secondary causation (developed most fully by St. Thomas Aquinas). God is
                the primary cause of everything; natural processes, including evolution, are secondary
                causes through which God works. There is no competition between the two because they
                operate at different levels of explanation.
              </p>
            </div>

            {/* Pope Francis */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Globe className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Pope Francis: &ldquo;God Is Not a Magician&rdquo; (2014)</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                On 27 October 2014, Pope Francis addressed the Pontifical Academy of Sciences on the
                occasion of the unveiling of a bust of Pope Benedict XVI. His remarks on creation and
                evolution were characteristically direct:
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <p className="text-blue-800 italic mb-3">
                  &ldquo;When we read about creation in Genesis, we run the risk of imagining God was
                  a magician, with a magic wand able to do everything. But that is not so. He created
                  human beings and let them develop according to the internal laws that he gave to each
                  one so they would reach their fulfilment.&rdquo;
                </p>
                <p className="text-blue-800 italic mb-3">
                  &ldquo;The Big Bang, which today we hold to be the origin of the world, does not
                  contradict the intervention of the divine creator but, rather, requires it. Evolution
                  in nature is not inconsistent with the notion of creation, because evolution
                  presupposes the creation of beings that evolve.&rdquo;
                </p>
                <p className="text-blue-700 text-sm">
                  &mdash; Pope Francis, Address to the Pontifical Academy of Sciences, 27 October 2014
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed">
                Pope Francis&rsquo;s language was less technical than his predecessors&rsquo;, but the
                substance was entirely consistent with the Catholic tradition. God is not a &ldquo;magician&rdquo;
                who conjures things into existence by bypassing natural processes. Rather, God is the
                Creator who establishes the natural order &mdash; including the processes of evolution
                &mdash; and sustains it in being. Evolution does not make God unnecessary; it reveals
                something about how God creates.
              </p>
            </div>

            {/* The Catechism */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <FileText className="w-6 h-6 text-purple-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Catechism on Creation (CCC 282-289)</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The <em>Catechism of the Catholic Church</em>, promulgated in 1992, addresses creation
                in a way that is deliberately open to evolutionary science while firmly grounded in
                theological essentials.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">Key Catechism Teachings</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-amber-800 font-medium mb-1">CCC 282-283: The Question of Origins</p>
                    <p className="text-amber-800 text-sm">
                      Catechesis on creation is of major importance. It concerns the very foundations
                      of human and Christian life. Scientific discoveries invite us to &ldquo;even
                      greater admiration for the greatness of the Creator.&rdquo;
                    </p>
                  </div>
                  <div>
                    <p className="text-amber-800 font-medium mb-1">CCC 284: The Role of Reason</p>
                    <p className="text-amber-800 text-sm">
                      Human intelligence can certainly find an answer to the question of origins,
                      since the existence of God the Creator can be known with certainty through
                      his works, by the light of human reason.
                    </p>
                  </div>
                  <div>
                    <p className="text-amber-800 font-medium mb-1">CCC 285-286: Against Materialism</p>
                    <p className="text-amber-800 text-sm">
                      The Catechism rejects dualism, Gnosticism, and materialism, while affirming
                      that &ldquo;creation is the work of the Holy Trinity&rdquo; and that God
                      created &ldquo;freely, directly, and without any help.&rdquo;
                    </p>
                  </div>
                  <div>
                    <p className="text-amber-800 font-medium mb-1">CCC 289: Scripture and Creation</p>
                    <p className="text-amber-800 text-sm">
                      The inspired authors placed the truth about creation at the beginning of
                      Scripture to express in solemn language the truths of creation, its origin
                      and end in God, its order and goodness, and humanity&rsquo;s special vocation.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">
                Notice what the Catechism does <em>not</em> say: it does not specify the age of the
                earth, the mechanism by which species develop, or whether evolution occurred. It
                focuses entirely on the theological meaning of creation &mdash; that everything depends
                on God, that creation is good, and that human beings have a unique dignity. This
                deliberate silence on scientific specifics is itself a theological statement: the
                Church claims authority over matters of faith and morals, not over the findings of
                natural science.
              </p>
            </div>

            {/* Sources */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Sources &amp; Further Reading</h3>
              <ol className="list-decimal list-inside text-gray-600 space-y-2 text-sm">
                <li>Pius XII, <em>Humani Generis</em> (1950), especially paragraphs 35-37.</li>
                <li>John Paul II, &ldquo;Message to the Pontifical Academy of Sciences on Evolution,&rdquo; 22 October 1996.</li>
                <li>Joseph Ratzinger (Benedict XVI), <em>In the Beginning: A Catholic Understanding of the Story of Creation and the Fall</em> (Eerdmans, 1995).</li>
                <li>Stephan Horn, ed., <em>Creation and Evolution: A Conference with Pope Benedict XVI in Castel Gandolfo</em> (Ignatius Press, 2008).</li>
                <li>Pope Francis, Address to the Pontifical Academy of Sciences, 27 October 2014.</li>
                <li><em>Catechism of the Catholic Church</em>, nos. 282-289, 355-379.</li>
              </ol>
            </div>
          </div>
        )}

        {/* ==================== TAB 2: GENESIS & SCIENCE ==================== */}
        {activeTab === 'genesis-science' && (
          <div className="space-y-8">
            {/* How to Read Genesis */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">How to Read Genesis 1-3</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The first three chapters of Genesis are among the most theologically rich &mdash;
                and most frequently misunderstood &mdash; texts in all of Scripture. These chapters
                address the deepest questions of human existence: Why is there something rather than
                nothing? Why are we here? Why is the world beautiful and yet broken? But they address
                these questions in a specific literary mode that is neither modern science nor mere
                mythology. Understanding that mode is essential for reading Genesis faithfully.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                The Catholic Church teaches that the Bible is the inspired Word of God, but inspiration
                does not mean dictation. God worked through human authors who used the literary forms,
                languages, and cultural assumptions of their time. To understand what God is
                communicating through Scripture, we must understand how the human author intended to
                communicate &mdash; and that requires attention to literary genre.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">
                  A Catholic Principle of Interpretation
                </h3>
                <p className="text-amber-800 italic mb-3">
                  &ldquo;In order to discover the sacred authors&rsquo; intention, the reader must
                  take into account the conditions of their time and culture, the literary genres in
                  use at that time, and the modes of feeling, speaking and narrating then current.
                  &lsquo;For the fact is that truth is differently presented and expressed in the
                  various types of historical writing, in prophetical and poetical texts, and in
                  other forms of literary expression.&rsquo;&rdquo;
                </p>
                <p className="text-amber-700 text-sm">
                  &mdash; <em>Catechism of the Catholic Church</em>, 110; quoting Vatican II,
                  <em> Dei Verbum</em>, 12
                </p>
              </div>
            </div>

            {/* The Six Days */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Layers className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Six &ldquo;Days&rdquo; of Creation</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The question of whether the six days of Genesis 1 are literal 24-hour periods is
                <em> not</em> a modern question forced on the Church by science. Catholic thinkers
                have debated this for at least 1,600 years. The most significant voice in this
                discussion is St. Augustine of Hippo, one of the four great Doctors of the Latin
                Church, who addressed it in the fifth century &mdash; fourteen centuries before Darwin.
              </p>

              <div className="bg-purple-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-purple-900 mb-3">
                  St. Augustine on the Days of Genesis (5th Century)
                </h3>
                <p className="text-purple-800 mb-3">
                  In his masterwork <em>De Genesi ad Litteram</em> (&ldquo;The Literal Meaning of
                  Genesis&rdquo;), Augustine argued that the six &ldquo;days&rdquo; of creation
                  should not be understood as ordinary 24-hour periods. He proposed that God created
                  everything simultaneously, and that the &ldquo;days&rdquo; represent a logical,
                  not temporal, ordering of creation. Augustine also introduced the concept of
                  <em> rationes seminales</em> (&ldquo;seminal reasons&rdquo;) &mdash; the idea that
                  God implanted the seeds of all future beings into creation from the beginning,
                  which would unfold over time.
                </p>
                <p className="text-purple-800 italic mb-3">
                  &ldquo;Perhaps we ought not to think of these as creation days in the sense of
                  the days we are familiar with now, or at any rate not without very careful
                  consideration.&rdquo;
                </p>
                <p className="text-purple-700 text-sm">
                  &mdash; Augustine, <em>De Genesi ad Litteram</em>, V.2
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Augustine&rsquo;s approach is remarkable for several reasons. He was not trying to
                accommodate evolution (which was unknown in his time) but was simply reading the text
                carefully and honestly. His concept of <em>rationes seminales</em> has often been
                noted as a striking anticipation of the idea that God created a world with built-in
                potentialities that would unfold over vast periods of time.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">
                  The Pontifical Biblical Commission (1909)
                </h3>
                <p className="text-blue-800 mb-3">
                  In 1909, the Pontifical Biblical Commission issued a decree on the historical
                  character of the first three chapters of Genesis. While affirming that Genesis
                  teaches real truths about creation, the Commission explicitly stated that the
                  word <em>yom</em> (&ldquo;day&rdquo;) in Genesis 1 need not be taken to mean
                  a natural day of 24 hours. Catholics were free to interpret &ldquo;day&rdquo; as a
                  period of time or as a literary device.
                </p>
                <p className="text-blue-800 text-sm">
                  This was in 1909 &mdash; well before the modern scientific consensus on the age
                  of the earth was fully established. The Church was not reacting to science; it was
                  drawing on its own ancient tradition of careful biblical interpretation.
                </p>
              </div>
            </div>

            {/* Two Creation Accounts */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Scale className="w-6 h-6 text-green-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Two Creation Accounts</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                A fact that surprises many readers encountering the Bible carefully for the first
                time: Genesis contains not one but <em>two</em> distinct creation accounts, and they
                differ significantly in structure, vocabulary, and emphasis. This is not a mistake
                or a contradiction &mdash; it is a deliberate literary arrangement that tells us
                something important about how these texts should be read.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div className="bg-amber-50 p-5 rounded-lg">
                  <h4 className="font-semibold text-amber-900 mb-3">Genesis 1:1 &ndash; 2:3</h4>
                  <ul className="text-amber-800 text-sm space-y-2">
                    <li><strong>Structure:</strong> The seven-day framework with the refrain &ldquo;And
                    there was evening and there was morning&rdquo;</li>
                    <li><strong>God&rsquo;s name:</strong> <em>Elohim</em> (God)</li>
                    <li><strong>Style:</strong> Cosmic, liturgical, hymn-like</li>
                    <li><strong>Order:</strong> Plants, then animals, then humans (male and female together)</li>
                    <li><strong>Emphasis:</strong> The orderliness and goodness of creation; God&rsquo;s
                    sovereign power; the sabbath rest</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-5 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-3">Genesis 2:4 &ndash; 3:24</h4>
                  <ul className="text-blue-800 text-sm space-y-2">
                    <li><strong>Structure:</strong> No day framework; a continuous narrative</li>
                    <li><strong>God&rsquo;s name:</strong> <em>YHWH Elohim</em> (the LORD God)</li>
                    <li><strong>Style:</strong> Intimate, earthly, narrative</li>
                    <li><strong>Order:</strong> Man first, then plants and animals, then woman</li>
                    <li><strong>Emphasis:</strong> Human relationships, the garden, the call to stewardship,
                    the reality of temptation and sin</li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">
                These two accounts are not competing versions of the same event. They are two
                complementary theological perspectives, each illuminating different aspects of
                creation&rsquo;s meaning. Genesis 1 teaches that the universe is God&rsquo;s ordered
                and good creation; Genesis 2-3 teaches that humanity stands in a unique, intimate
                relationship with God and has a moral vocation that can be embraced or rejected.
                Reading them as a single scientific narrative misses the point of both.
              </p>
            </div>

            {/* What Genesis Teaches vs. What It Does Not */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-purple-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">What Genesis Teaches &mdash; and What It Does Not</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The Catholic Church reads Genesis as conveying fundamental theological truths through
                literary forms appropriate to the ancient world. The Catechism identifies these truths
                with great care (CCC 337-349):
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div className="bg-green-50 p-5 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle className="w-5 h-5 text-green-700" />
                    <h4 className="font-semibold text-green-900">What Genesis Teaches</h4>
                  </div>
                  <ul className="text-green-800 text-sm space-y-2">
                    <li>God created everything that exists &mdash; there is no uncreated matter</li>
                    <li>Creation is inherently good (&ldquo;God saw that it was good&rdquo;)</li>
                    <li>Human beings are made in the image and likeness of God (<em>imago Dei</em>)</li>
                    <li>Humanity has a unique dignity and vocation among all creatures</li>
                    <li>Man and woman are equal in dignity, complementary in nature</li>
                    <li>The world is not the result of blind chance or cosmic necessity</li>
                    <li>Original sin is a real event that wounded human nature</li>
                    <li>Humanity stands in need of redemption</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-5 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <XCircle className="w-5 h-5 text-red-700" />
                    <h4 className="font-semibold text-red-900">What Genesis Does NOT Teach</h4>
                  </div>
                  <ul className="text-red-800 text-sm space-y-2">
                    <li>The age of the earth (4.5 billion years, per modern science)</li>
                    <li>The mechanism by which species developed</li>
                    <li>Scientific cosmology (the Big Bang, expansion of the universe)</li>
                    <li>The chronological sequence of biological development</li>
                    <li>The material composition of human bodies</li>
                    <li>A timeline for human history</li>
                    <li>Geology, astronomy, or physics</li>
                  </ul>
                </div>
              </div>

              <div className="bg-red-50 border-l-4 border-red-400 p-5 rounded-r-lg">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-red-900 mb-2">Young Earth Creationism Is Not Catholic Teaching</h4>
                    <p className="text-red-800 text-sm">
                      The belief that the earth is approximately 6,000-10,000 years old, based on
                      a literal reading of Genesis genealogies and creation days, has no support
                      in Catholic theology. Catholic biblical interpretation has never required
                      literalism of this kind, and the tradition of non-literal reading goes back
                      to the earliest Church Fathers. Catholics who hold Young Earth views do so
                      despite, not because of, the Church&rsquo;s teaching tradition.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* The Catechism on Creation's Goodness */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">CCC 337-349: Creation&rsquo;s Goodness and Order</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The Catechism&rsquo;s treatment of Genesis (CCC 337-349) focuses on what these
                texts reveal about God&rsquo;s purposes rather than on scientific questions. Key
                themes include:
              </p>

              <div className="space-y-4 mb-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-green-800">
                    <strong>CCC 339:</strong> &ldquo;Each creature possesses its own particular
                    goodness and perfection&rdquo; &mdash; every part of creation has intrinsic
                    value, not merely instrumental usefulness to humanity.
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-green-800">
                    <strong>CCC 341:</strong> &ldquo;The beauty of the universe: The order and
                    harmony of the created world results from the diversity of beings and from the
                    relationships which exist among them.&rdquo;
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-green-800">
                    <strong>CCC 342:</strong> The hierarchy of creatures, with humanity at the
                    summit, reflects a purposeful order. But this hierarchy is one of vocation
                    and responsibility, not mere domination.
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-green-800">
                    <strong>CCC 349:</strong> The Sabbath is at the heart of the creation narrative,
                    pointing toward the ultimate purpose of all creation: rest in God.
                  </p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">
                These teachings are entirely compatible with evolutionary science. An evolving
                universe of astonishing complexity and beauty, unfolding over billions of years,
                is no less &ldquo;good&rdquo; in the theological sense than a universe created
                instantaneously. If anything, the sheer grandeur of an evolutionary creation
                deepens our sense of the Creator&rsquo;s wisdom.
              </p>
            </div>

            {/* Sources */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Sources &amp; Further Reading</h3>
              <ol className="list-decimal list-inside text-gray-600 space-y-2 text-sm">
                <li>Augustine of Hippo, <em>De Genesi ad Litteram</em> (The Literal Meaning of Genesis), trans. John Hammond Taylor, S.J. (Paulist Press, 1982).</li>
                <li>Pontifical Biblical Commission, &ldquo;On the Historical Character of the First Three Chapters of Genesis&rdquo; (1909).</li>
                <li>Vatican II, <em>Dei Verbum</em> (1965), esp. 11-12.</li>
                <li><em>Catechism of the Catholic Church</em>, nos. 109-119 (interpretation), 337-349 (creation).</li>
                <li>Scott Hahn and Curtis Mitch, <em>Genesis</em>, Ignatius Catholic Study Bible (Ignatius Press, 2010).</li>
                <li>Gary A. Anderson, <em>The Genesis of Perfection: Adam and Eve in Jewish and Christian Imagination</em> (Westminster John Knox, 2001).</li>
              </ol>
            </div>
          </div>
        )}

        {/* ==================== TAB 3: THEISTIC EVOLUTION ==================== */}
        {activeTab === 'theistic-evolution' && (
          <div className="space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Dna className="w-6 h-6 text-green-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">How Catholics Can Embrace Evolution</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                &ldquo;Theistic evolution&rdquo; is the view that God created the world and that
                evolution is the process through which God&rsquo;s creative purposes unfold. It is
                not a compromise between faith and science, nor a watering down of either. It is
                simply the recognition that the God who creates is also the God who sustains natural
                processes &mdash; and that evolution is one of those processes.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                For Catholic thinkers, theistic evolution is not a new idea. It flows naturally from
                some of the deepest currents in Catholic philosophy and theology, especially the
                Thomistic distinction between primary and secondary causation. What modern science
                has provided is a vastly more detailed understanding of the secondary causes through
                which God works &mdash; but the philosophical framework for integrating this
                understanding with faith has been in place for centuries.
              </p>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-green-900 mb-3">The Core Idea</h3>
                <p className="text-green-800">
                  God is the Creator. Evolution is the mechanism. These are not competing
                  explanations but answers to different questions. Asking &ldquo;Did God create
                  us or did we evolve?&rdquo; is like asking &ldquo;Did the architect design
                  the building or did the construction workers build it?&rdquo; The answer, of
                  course, is both &mdash; but at different levels of explanation.
                </p>
              </div>
            </div>

            {/* Primary and Secondary Causes */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Brain className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Primary and Secondary Causation: The Thomistic Framework</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The most important philosophical tool for understanding how Catholics integrate
                evolution and creation is the distinction between primary and secondary causes,
                developed most fully by St. Thomas Aquinas in the thirteenth century.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">
                  Aquinas on Causation
                </h3>
                <p className="text-blue-800 mb-4">
                  According to Aquinas, God is the <strong>primary cause</strong> of everything
                  that exists. God creates, sustains, and governs all things. But God ordinarily
                  works <em>through</em> <strong>secondary causes</strong> &mdash; the natural
                  processes and agents that operate within the created order.
                </p>
                <p className="text-blue-800 mb-4">
                  A crucial point: secondary causes are <em>real</em> causes. When fire heats
                  water, the fire really does cause the heating &mdash; God does not heat the
                  water directly while the fire merely appears to do so. But the fire&rsquo;s
                  ability to cause heating depends entirely on God&rsquo;s sustaining it in
                  existence and endowing it with its natural powers.
                </p>
                <p className="text-blue-800 italic mb-3">
                  &ldquo;The same effect is not attributed to a natural cause and to divine
                  power in such a way that it is partly done by God, and partly by the natural
                  agent; rather, it is wholly done by both, according to a different way, just
                  as the same effect is wholly attributed to the instrument and also wholly to
                  the principal agent.&rdquo;
                </p>
                <p className="text-blue-700 text-sm">
                  &mdash; St. Thomas Aquinas, <em>Summa Contra Gentiles</em>, III, 70
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Applied to evolution: natural selection, genetic mutation, genetic drift, and other
                evolutionary mechanisms are <em>real secondary causes</em>. They genuinely cause
                biological change. But their existence and operation depend on God as the primary
                cause who creates and sustains the natural order in which they function. God does not
                compete with evolution; God is the reason evolution is possible at all.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">Why This Matters</h3>
                <p className="text-amber-800 mb-3">
                  The Thomistic framework dissolves the apparent conflict between evolution and
                  creation by showing that they operate at different causal levels. Science
                  investigates secondary causes &mdash; it asks <em>how</em> natural processes
                  work. Theology and philosophy address the primary cause &mdash; they ask
                  <em> why</em> there is a natural order at all, and what ultimate purpose it serves.
                </p>
                <p className="text-amber-800">
                  A scientist who discovers a new evolutionary mechanism has not made God less
                  necessary. She has discovered another way in which God&rsquo;s creative power
                  works through the natural order.
                </p>
              </div>
            </div>

            {/* Materialism vs. Scientific Method */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Microscope className="w-6 h-6 text-purple-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Materialism vs. Scientific Methodology</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                A critical distinction that Catholics must understand in the evolution discussion
                is the difference between <em>methodological naturalism</em> and <em>philosophical
                materialism</em>. Confusing these two is the source of enormous confusion on both
                sides of the faith-science dialogue.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div className="bg-green-50 p-5 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-3">
                    Methodological Naturalism (Compatible with Faith)
                  </h4>
                  <p className="text-green-800 text-sm mb-3">
                    Science, by its nature, investigates natural causes. When a biologist studies
                    evolution, she looks for natural mechanisms &mdash; mutation, selection,
                    drift, gene flow. This is not a claim that natural causes are the <em>only</em>
                    causes that exist; it is simply the proper method of science.
                  </p>
                  <p className="text-green-800 text-sm">
                    A doctor who diagnoses a disease by looking for physical causes is not denying
                    God&rsquo;s existence. She is doing her job. The same is true of an
                    evolutionary biologist.
                  </p>
                </div>
                <div className="bg-red-50 p-5 rounded-lg">
                  <h4 className="font-semibold text-red-900 mb-3">
                    Philosophical Materialism (Incompatible with Faith)
                  </h4>
                  <p className="text-red-800 text-sm mb-3">
                    Materialism is the philosophical claim that matter and energy are all that exist
                    &mdash; that there is no God, no soul, no spiritual reality. When some
                    prominent scientists claim that evolution proves there is no God or that
                    human beings are &ldquo;nothing but&rdquo; their genes, they are making a
                    philosophical claim, not a scientific one.
                  </p>
                  <p className="text-red-800 text-sm">
                    The Church emphatically rejects this philosophy, not because it opposes science,
                    but because materialism <em>exceeds</em> what science can legitimately claim.
                  </p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">
                This distinction is crucial. Catholics can fully accept the scientific theory of
                evolution &mdash; natural selection, common descent, deep time, the whole framework
                &mdash; while rejecting the philosophical claim that evolution means the universe is
                purposeless. The science is one thing; the atheistic philosophy sometimes draped
                over it is something else entirely.
              </p>
            </div>

            {/* The Soul */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Soul Cannot Evolve</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The one absolute theological boundary in the Catholic engagement with evolution is
                the doctrine of the soul. The Church teaches &mdash; and this is non-negotiable
                &mdash; that the human soul is directly created by God for each individual person.
                The soul does not evolve. It does not emerge from material processes. It is not
                a product of natural selection.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <p className="text-amber-800 italic mb-3">
                  &ldquo;The Catholic faith obliges us to hold that souls are immediately created
                  by God.&rdquo;
                </p>
                <p className="text-amber-700 text-sm">
                  &mdash; Pius XII, <em>Humani Generis</em>, 36 (1950)
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                This teaching rests on the philosophical principle that the spiritual cannot be
                produced by the material. The soul is immaterial &mdash; it is the principle of
                intellect, will, and self-awareness that makes human persons capable of knowing
                truth, choosing good, and relating to God. No rearrangement of atoms, however
                complex, can produce an immaterial reality. Therefore, each human soul must be
                the direct creative act of God.
              </p>

              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-purple-900 mb-3">
                  How the Body-Soul Relationship Works in an Evolutionary Framework
                </h3>
                <p className="text-purple-800 mb-3">
                  Catholic theology holds that the human being is a unity of body and soul &mdash;
                  not a ghost in a machine, but one reality with material and spiritual dimensions.
                  In an evolutionary framework, the picture looks something like this:
                </p>
                <div className="space-y-2 text-purple-800 text-sm">
                  <p>
                    <strong>1.</strong> The human body evolved from earlier primates through ordinary
                    natural processes over millions of years.
                  </p>
                  <p>
                    <strong>2.</strong> At the point where God willed the first true human beings to
                    exist, He directly created rational, immortal souls and infused them into bodies
                    that had been prepared by the evolutionary process.
                  </p>
                  <p>
                    <strong>3.</strong> This &ldquo;ensoulment&rdquo; transformed the creature from a
                    highly developed animal into a human person &mdash; a being with intellect,
                    free will, moral responsibility, and the capacity for relationship with God.
                  </p>
                  <p>
                    <strong>4.</strong> Every human person since has received a soul directly from God
                    at the moment of conception.
                  </p>
                </div>
              </div>
            </div>

            {/* Communion and Stewardship */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <FileText className="w-6 h-6 text-green-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">&ldquo;Communion and Stewardship&rdquo; (2004)</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                In 2004, the International Theological Commission (which advises the Congregation
                for the Doctrine of the Faith) published a landmark document entitled <em>Communion
                and Stewardship: Human Persons Created in the Image of God</em>. This document
                provides the most detailed official Catholic treatment of evolution and creation
                produced to date.
              </p>

              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-green-900 mb-3">
                  A Key Distinction
                </h3>
                <p className="text-green-800 mb-3">
                  The document makes a crucial observation about the language often used to describe
                  evolution. When scientists describe evolution as an &ldquo;unguided, unplanned
                  process of random variation and natural selection,&rdquo; the Commission points
                  out that the words &ldquo;unguided&rdquo; and &ldquo;unplanned&rdquo; are
                  philosophical claims, not scientific findings.
                </p>
                <p className="text-green-800 mb-3">
                  Science can describe the mechanisms of evolution &mdash; mutation, selection,
                  drift. But science cannot determine whether these processes are ultimately guided
                  by a Creator. That question falls outside the competence of natural science.
                  A scientist who says evolution is &ldquo;unguided&rdquo; in an absolute
                  metaphysical sense has moved from science into philosophy.
                </p>
                <p className="text-green-800 italic">
                  &ldquo;An unguided evolutionary process &mdash; one that falls outside the
                  bounds of divine providence &mdash; simply cannot exist.&rdquo;
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The document also affirms that the emergence of the first members of the human
                species &mdash; whether as individuals or in populations &mdash; represents an event
                that is not reducible to purely natural forces: the creation of spiritual souls,
                which are not transmitted through biological generation but created directly by God.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">The Document&rsquo;s Balanced Conclusion</h3>
                <p className="text-blue-800 text-sm">
                  <em>Communion and Stewardship</em> is notable for its balance. It accepts the
                  mainstream scientific account of evolutionary development. It recognises the
                  convergent evidence for common descent. It affirms the unique spiritual nature
                  of the human person. And it insists that the philosophical interpretation of
                  evolution must not exceed what the science actually demonstrates. This is the
                  model of how Catholic thinking engages with science: receptive to evidence,
                  rigorous about philosophy, firm on theology.
                </p>
              </div>
            </div>

            {/* Sources */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Sources &amp; Further Reading</h3>
              <ol className="list-decimal list-inside text-gray-600 space-y-2 text-sm">
                <li>St. Thomas Aquinas, <em>Summa Contra Gentiles</em>, Book III, esp. chapters 65-77.</li>
                <li>St. Thomas Aquinas, <em>Summa Theologica</em>, I, qq. 44-49 (on creation and divine governance).</li>
                <li>International Theological Commission, <em>Communion and Stewardship: Human Persons Created in the Image of God</em> (2004).</li>
                <li>William E. Carroll, <em>Creation and Science: Has Science Eliminated God?</em> (CTS Publications, 2011).</li>
                <li>Nicanor Austriaco, O.P., et al., <em>Thomistic Evolution: A Catholic Approach to Understanding Evolution in the Light of Faith</em> (Cluny Media, 2016).</li>
                <li>Edward Feser, <em>Aquinas</em> (Oneworld, 2009), esp. ch. 3 on causation.</li>
              </ol>
            </div>
          </div>
        )}

        {/* ==================== TAB 4: THE MONOGENISM QUESTION ==================== */}
        {activeTab === 'monogenism' && (
          <div className="space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-red-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Most Genuinely Difficult Question</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                If there is one area where the Catholic engagement with evolution encounters a
                genuine and unresolved theological difficulty, it is the question of
                <strong> monogenism</strong> &mdash; the teaching that all human beings descend
                from a single original couple. This is not a minor point. It touches on one of the
                most central doctrines of Christian faith: original sin, the fall, and the need for
                redemption in Christ.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Unlike the other topics on this page, where the path to reconciling faith and science
                is reasonably clear, the monogenism question involves a real tension between current
                scientific evidence and traditional theological formulations. Catholic thinkers are
                actively working on this question, and it is important to present the issue honestly
                rather than pretending the difficulty does not exist.
              </p>

              <div className="bg-red-50 border-l-4 border-red-400 p-5 rounded-r-lg">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-red-900 mb-2">An Open Question</h4>
                    <p className="text-red-800 text-sm">
                      The Church has not definitively resolved the monogenism question in light of
                      modern genetics. The discussion that follows represents the current state of
                      Catholic theological reflection &mdash; not a settled conclusion.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* What Humani Generis Says */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <ScrollText className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">What <em>Humani Generis</em> Says</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The key magisterial text on monogenism is paragraph 37 of <em>Humani Generis</em>
                (1950), which immediately follows the passage permitting research on evolution:
              </p>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <p className="text-amber-800 italic mb-3">
                  &ldquo;When, however, there is question of another conjectural opinion, namely
                  polygenism, the children of the Church by no means enjoy such liberty. For the
                  faithful cannot embrace that opinion which maintains that either after Adam there
                  existed on this earth true men who did not take their origin through natural
                  generation from him as from the first parent of all, or that Adam represents a
                  certain number of first parents. Now it is in no way apparent how such an opinion
                  can be reconciled with that which the sources of revealed truth and the documents
                  of the Teaching Authority of the Church propose with regard to original sin, which
                  proceeds from a sin actually committed by an individual Adam and which, through
                  generation, is passed on to all and is in everyone as his own.&rdquo;
                </p>
                <p className="text-amber-700 text-sm">
                  &mdash; Pius XII, <em>Humani Generis</em>, 37 (1950)
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The language here is notably careful. Pius XII does not define monogenism as a dogma.
                He says that polygenism <em>cannot be reconciled</em> with the doctrine of original
                sin &ldquo;as it is proposed&rdquo; by the Church&rsquo;s teaching. The phrasing
                leaves open the possibility that a future theological development could find a way to
                reconcile the two &mdash; but the Pope could not see how at the time of writing, and
                therefore Catholics were not free to embrace polygenism.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">Why Monogenism Matters Theologically</h3>
                <p className="text-blue-800 mb-3">
                  The insistence on monogenism is not about biology. It is about the doctrine of
                  original sin, which is foundational to the entire Christian understanding of
                  salvation. The logic runs as follows:
                </p>
                <div className="space-y-2 text-blue-800 text-sm">
                  <p>
                    <strong>1.</strong> All human beings are in a state of original sin &mdash; a
                    wounded condition inherited from the first human act of disobedience (CCC 388-390).
                  </p>
                  <p>
                    <strong>2.</strong> Original sin is not merely a metaphor for the general tendency
                    to do wrong. It is a real condition, transmitted through generation, that
                    affects every human person (Romans 5:12; CCC 404).
                  </p>
                  <p>
                    <strong>3.</strong> If original sin is transmitted through generation, there must
                    have been a first human act of sin &mdash; and therefore first human parents
                    from whom all other humans descend.
                  </p>
                  <p>
                    <strong>4.</strong> The entire theology of redemption depends on this: Christ is
                    the &ldquo;new Adam&rdquo; who undoes what the first Adam did (Romans 5:12-21;
                    1 Corinthians 15:21-22, 45-49).
                  </p>
                </div>
              </div>
            </div>

            {/* The Scientific Challenge */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Dna className="w-6 h-6 text-purple-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Scientific Challenge</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Modern population genetics presents a significant challenge to a simple reading of
                monogenism. Based on analysis of genetic diversity in the current human population,
                geneticists have estimated that the human species never had an effective population
                size smaller than several thousand individuals. This does not mean there could not
                have been a single couple at some point in human ancestry, but it does mean that
                this couple was never the <em>only</em> humans alive at any given time.
              </p>

              <div className="bg-purple-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-purple-900 mb-3">
                  Key Scientific Points
                </h3>
                <ul className="text-purple-800 space-y-3 text-sm">
                  <li>
                    <strong>Effective population size:</strong> Genetic evidence suggests the human
                    lineage descended from a breeding population of roughly 10,000 individuals, not
                    a single pair. This is based on the diversity of alleles (gene variants) in the
                    modern human genome.
                  </li>
                  <li>
                    <strong>Mitochondrial Eve and Y-chromosomal Adam:</strong> These are real
                    scientific concepts, but they do not refer to a literal first couple. They refer
                    to the most recent common ancestor of all living humans through the maternal
                    (mitochondrial) and paternal (Y-chromosome) lines respectively &mdash; and
                    these two ancestors likely lived thousands of years apart.
                  </li>
                  <li>
                    <strong>Genealogical vs. genetic ancestry:</strong> An important distinction.
                    It is mathematically possible for all living humans to share common genealogical
                    ancestors (through family trees) even if the population was never just two
                    people. This distinction has become important in recent theological proposals.
                  </li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed">
                It is important to note that population genetics estimates are based on mathematical
                models that carry assumptions. The science is strong but not absolutely certain, and
                the estimates involve ranges rather than precise numbers. Nevertheless, the
                convergent evidence from multiple independent lines of research makes it very
                difficult to maintain that the human population was ever reduced to a single couple
                in the strictly genetic sense.
              </p>
            </div>

            {/* Theological Approaches */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-green-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">How Catholic Theologians Are Working on This</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Catholic theologians have proposed several approaches to reconciling the doctrine of
                original sin with the scientific evidence. None of these has been officially endorsed
                by the Magisterium, but they represent serious theological work by faithful Catholic
                scholars.
              </p>

              <div className="space-y-6">
                <div className="bg-amber-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-amber-900 mb-3">
                    Karl Rahner&rsquo;s Approach
                  </h3>
                  <p className="text-amber-800 mb-3">
                    The great twentieth-century Jesuit theologian Karl Rahner argued that monogenism
                    is theologically connected to the unity of the human race and the universality
                    of original sin, but that the specific biological mechanism is not the central
                    theological point. What matters is that all humanity shares a common origin and
                    a common fallen condition &mdash; and that this condition is the result of a
                    real, historical event of turning away from God.
                  </p>
                  <p className="text-amber-800 text-sm">
                    Rahner suggested that the theological content of the Adam narrative could
                    potentially be preserved even if the biological details are understood differently
                    than in a strictly literal reading.
                  </p>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-900 mb-3">
                    Kenneth Kemp&rsquo;s Philosophical Model
                  </h3>
                  <p className="text-blue-800 mb-3">
                    Philosopher Kenneth Kemp (University of St. Thomas, Minnesota) has proposed an
                    influential model that distinguishes between <em>biological</em> humans and
                    <em> theological</em> humans. In this model:
                  </p>
                  <ul className="text-blue-800 text-sm space-y-2 ml-4">
                    <li>A population of biologically human organisms existed (consistent with
                    population genetics).</li>
                    <li>God selected one pair from this population and infused them with rational
                    souls, making them the first <em>true</em> humans in the theological sense
                    &mdash; persons with intellect, will, and a relationship with God.</li>
                    <li>These first true humans committed the original sin.</li>
                    <li>Their descendants eventually intermarried with the surrounding biological
                    population, and through this process, the entire biological population
                    eventually became &ldquo;ensouled&rdquo; descendants of the original pair.</li>
                  </ul>
                  <p className="text-blue-800 text-sm mt-3">
                    This model preserves both the scientific evidence (a large breeding population)
                    and the theological requirements (descent from a single pair, a real original
                    sin). It has been discussed favourably by several Catholic theologians and
                    philosophers.
                  </p>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-900 mb-3">
                    The Genealogical Adam Proposal
                  </h3>
                  <p className="text-green-800 mb-3">
                    S. Joshua Swamidass, a computational biologist at Washington University in
                    St. Louis, has proposed the &ldquo;Genealogical Adam and Eve&rdquo; model.
                    This is based on the mathematical distinction between <em>genetic</em>
                    ancestors and <em>genealogical</em> ancestors. While the human population was
                    never genetically reduced to two, it is mathematically possible for a single
                    couple living a few thousand years ago to be <em>genealogical</em> ancestors of
                    every living human &mdash; meaning they appear somewhere in everyone&rsquo;s
                    family tree, even though they were not the only people alive at the time.
                  </p>
                  <p className="text-green-800 text-sm">
                    While not specifically Catholic in origin, this model has attracted attention
                    from Catholic theologians because it offers another possible way to preserve
                    both the science and the theological tradition.
                  </p>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">
                    The Ongoing Discussion
                  </h3>
                  <p className="text-purple-800 mb-3">
                    It is important to be honest: this question is not settled. The Church has not
                    issued any new definitive teaching on monogenism since <em>Humani Generis</em>.
                    The scientific evidence has grown considerably stronger since 1950. Catholic
                    theologians continue to explore how the essential theological truths &mdash;
                    the unity of the human race, the reality of original sin, the need for
                    redemption &mdash; can be faithfully maintained in light of what we now know
                    about human origins.
                  </p>
                  <p className="text-purple-800">
                    What is <em>not</em> an option is to simply abandon the doctrine of original sin.
                    The Council of Trent defined original sin as a real condition affecting all of
                    Adam&rsquo;s descendants (Session V, 1546). Whatever solution emerges must
                    preserve this essential truth.
                  </p>
                </div>
              </div>
            </div>

            {/* What Catholics Can Hold */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">What Catholics Must Hold</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                While the biological details remain an open question, certain theological truths
                are non-negotiable:
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-amber-50 p-5 rounded-lg">
                  <h4 className="font-semibold text-amber-900 mb-2">Non-Negotiable</h4>
                  <ul className="text-amber-800 text-sm space-y-2">
                    <li>Original sin is real, not merely a metaphor</li>
                    <li>It results from a real, historical act of disobedience</li>
                    <li>It affects all human beings (except the Blessed Virgin Mary)</li>
                    <li>It is transmitted through generation, not imitation</li>
                    <li>The human race has a fundamental unity</li>
                    <li>Each human soul is directly created by God</li>
                    <li>Christ&rsquo;s redemption undoes the damage of the fall</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-5 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">Open for Discussion</h4>
                  <ul className="text-blue-800 text-sm space-y-2">
                    <li>The precise biological mechanism of human origins</li>
                    <li>Whether &ldquo;Adam&rdquo; refers to a single individual or has a broader reference</li>
                    <li>How original sin is &ldquo;transmitted through generation&rdquo; in biological terms</li>
                    <li>The relationship between theological and biological definitions of &ldquo;human&rdquo;</li>
                    <li>The exact population structure of early humanity</li>
                    <li>How to reconcile population genetics with the theological tradition</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Sources */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Sources &amp; Further Reading</h3>
              <ol className="list-decimal list-inside text-gray-600 space-y-2 text-sm">
                <li>Pius XII, <em>Humani Generis</em> (1950), paragraphs 36-37.</li>
                <li>Council of Trent, Session V, Decree on Original Sin (1546).</li>
                <li>Karl Rahner, &ldquo;Theological Reflections on Monogenism,&rdquo; in <em>Theological Investigations</em>, Vol. 1 (Helicon Press, 1961).</li>
                <li>Kenneth Kemp, &ldquo;Science, Theology, and Monogenesis,&rdquo; <em>American Catholic Philosophical Quarterly</em> 85, no. 2 (2011): 217-236.</li>
                <li>S. Joshua Swamidass, <em>The Genealogical Adam and Eve</em> (IVP Academic, 2019).</li>
                <li>Dennis R. Venema and Scot McKnight, <em>Adam and the Genome</em> (Brazos Press, 2017).</li>
                <li>Nicanor Austriaco, O.P., &ldquo;Defending Adam after Darwin,&rdquo; <em>Homiletic and Pastoral Review</em> (2015).</li>
              </ol>
            </div>
          </div>
        )}

        {/* ==================== TAB 5: INTELLIGENT DESIGN & CREATIONISM ==================== */}
        {activeTab === 'id-creationism' && (
          <div className="space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Scale className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">A Careful Distinction</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                In the popular imagination, the debate over evolution is often framed as
                &ldquo;evolution vs. creation&rdquo; or &ldquo;science vs. religion.&rdquo; Within
                this framing, the Catholic Church is sometimes assumed to be aligned with the
                Intelligent Design movement or with Young Earth Creationism. Neither assumption
                is correct.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                The Catholic Church occupies a distinctive position that is not captured by any of
                the labels commonly used in American culture-war debates. Understanding why requires
                careful attention to the difference between philosophical arguments about purpose in
                nature (which the Church affirms) and specific claims about what should be taught
                in science classrooms (which are a different matter entirely).
              </p>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">
                  Three Distinct Positions
                </h3>
                <div className="space-y-3 text-blue-800 text-sm">
                  <p>
                    <strong>Young Earth Creationism:</strong> The earth is 6,000-10,000 years old;
                    Genesis 1 is a literal scientific account; evolution did not occur.
                    <span className="text-red-700 font-medium"> Not Catholic teaching.</span>
                  </p>
                  <p>
                    <strong>Intelligent Design (ID):</strong> Certain features of the natural world
                    are best explained by an intelligent cause rather than undirected natural processes;
                    this is a scientific, not religious, claim.
                    <span className="text-amber-700 font-medium"> The Church appreciates the philosophical
                    intuition but does not endorse ID as a scientific theory.</span>
                  </p>
                  <p>
                    <strong>Theistic Evolution / Evolutionary Creation:</strong> God created the world
                    and sustains it through natural processes, including evolution; science and faith
                    address different levels of reality.
                    <span className="text-green-700 font-medium"> Most consistent with Catholic teaching.</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Intelligent Design */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Intelligent Design: What the Church Actually Thinks</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The Intelligent Design (ID) movement, associated with figures such as Michael Behe,
                William Dembski, and the Discovery Institute, argues that certain biological
                structures (such as the bacterial flagellum) are &ldquo;irreducibly complex&rdquo;
                and cannot be adequately explained by Darwinian natural selection. They propose
                that an &ldquo;intelligent designer&rdquo; is the best scientific explanation for
                these features.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                The Catholic Church&rsquo;s relationship to this movement is nuanced. On one hand,
                the philosophical idea that creation shows evidence of design is deeply rooted in
                Catholic thought. On the other hand, the specific claims of the ID movement raise
                theological and philosophical problems that many Catholic thinkers find troubling.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div className="bg-green-50 p-5 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-3">What the Church Appreciates</h4>
                  <ul className="text-green-800 text-sm space-y-2">
                    <li>
                      <strong>The teleological argument:</strong> The philosophical argument from
                      design has a long and distinguished history in Catholic thought, going back
                      at least to Aquinas&rsquo;s Fifth Way: the argument from the governance of
                      things to an intelligent Governor.
                    </li>
                    <li>
                      <strong>Resistance to materialism:</strong> The Church shares ID&rsquo;s
                      rejection of the claim that the universe is purposeless and that matter
                      is all there is.
                    </li>
                    <li>
                      <strong>Openness to purpose:</strong> Catholic teaching affirms that the
                      universe is not the product of blind chance but of a loving Creator with
                      purposes for creation.
                    </li>
                  </ul>
                </div>
                <div className="bg-red-50 p-5 rounded-lg">
                  <h4 className="font-semibold text-red-900 mb-3">What the Church Questions</h4>
                  <ul className="text-red-800 text-sm space-y-2">
                    <li>
                      <strong>God as a scientific hypothesis:</strong> Catholic theology does not
                      treat God as one cause among many that can be detected by scientific methods.
                      God is the transcendent ground of <em>all</em> causation.
                    </li>
                    <li>
                      <strong>The &ldquo;God of the gaps&rdquo; problem:</strong> ID argues that
                      certain things cannot be explained by natural processes. But Catholic theology
                      has always held that God works <em>through</em> natural processes, not in
                      their gaps.
                    </li>
                    <li>
                      <strong>Confusing levels of explanation:</strong> Design is a philosophical
                      conclusion, not a scientific finding. Treating it as science risks both
                      bad science and bad theology.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">
                  Aquinas&rsquo;s Fifth Way Is Not Intelligent Design
                </h3>
                <p className="text-amber-800 mb-3">
                  A common confusion: Aquinas&rsquo;s Fifth Way (the argument from the governance
                  of things) is sometimes presented as an ancient version of Intelligent Design.
                  But there is a crucial difference. Aquinas does not argue that certain natural
                  things are <em>too complex</em> to have natural causes. Rather, he argues that the
                  very existence of natural things that act for ends (purpose) requires an intelligent
                  being who directs them to those ends. The Fifth Way is about <em>all</em> natural
                  order, not about specific structures that science cannot yet explain.
                </p>
                <p className="text-amber-800 text-sm">
                  In other words, for Aquinas, the more we discover about how natural causes work,
                  the <em>more</em> evidence we have for an intelligent Governor &mdash; not less.
                  This is the opposite of a &ldquo;God of the gaps&rdquo; argument.
                </p>
              </div>
            </div>

            {/* Cardinal Schonborn */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <FileText className="w-6 h-6 text-purple-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Sch&ouml;nborn Controversy (2005)</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                On 7 July 2005, Cardinal Christoph Sch&ouml;nborn, the Archbishop of Vienna and
                lead editor of the <em>Catechism of the Catholic Church</em>, published an op-ed
                in <em>The New York Times</em> titled &ldquo;Finding Design in Nature.&rdquo; The
                article caused a sensation because it appeared to align the Catholic Church with
                the Intelligent Design movement.
              </p>

              <div className="bg-purple-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-purple-900 mb-3">
                  What Sch&ouml;nborn Wrote
                </h3>
                <p className="text-purple-800 mb-3">
                  Sch&ouml;nborn argued that John Paul II&rsquo;s 1996 statement about evolution
                  being &ldquo;more than a hypothesis&rdquo; had been &ldquo;rather vague and
                  unimportant&rdquo; and was being used to suggest that the Church accepts
                  &ldquo;neo-Darwinism&rdquo; uncritically. He insisted that the Church affirms
                  purpose and design in nature, and that &ldquo;any system of thought that denies
                  or seeks to explain away the overwhelming evidence for design in biology is
                  ideology, not science.&rdquo;
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">
                  The Clarification
                </h3>
                <p className="text-blue-800 mb-3">
                  The op-ed generated significant controversy and required clarification.
                  Sch&ouml;nborn subsequently explained that he was not endorsing the Intelligent
                  Design movement as a scientific programme, nor was he rejecting evolution.
                  His point was philosophical: the Church insists that the universe shows purpose
                  and that a purely materialistic interpretation of evolution (which denies all
                  purpose) is philosophically inadequate.
                </p>
                <p className="text-blue-800 mb-3">
                  This clarification was important because it restored the distinction between
                  a philosophical affirmation of purpose in nature (which is Catholic teaching) and
                  a scientific claim that design can be detected by laboratory methods (which is
                  the ID movement&rsquo;s specific claim, and which the Church has not endorsed).
                </p>
                <p className="text-blue-800 text-sm">
                  The episode illustrates the confusion that arises when the word &ldquo;design&rdquo;
                  is used without specifying whether one means philosophical design (purpose, teleology)
                  or empirical design (a scientific hypothesis about biological mechanisms).
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed">
                The Vatican astronomer Fr. George Coyne, S.J., publicly responded to Sch&ouml;nborn&rsquo;s
                op-ed, and the Castel Gandolfo seminar organised by Benedict XVI in 2006 was partly a
                response to the controversy. The eventual consensus, reflected in Benedict&rsquo;s own
                remarks, was that the Church affirms purpose in creation (a philosophical point) while
                accepting the mainstream scientific account of evolutionary development.
              </p>
            </div>

            {/* Young Earth Creationism */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <XCircle className="w-6 h-6 text-red-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Young Earth Creationism: Not Catholic</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Young Earth Creationism (YEC) &mdash; the belief that the earth is approximately
                6,000 to 10,000 years old, that the six days of Genesis are literal 24-hour periods,
                and that biological evolution did not occur &mdash; is primarily a Protestant
                phenomenon, rooted in the tradition of biblical literalism associated with
                American fundamentalism. It has no basis in Catholic theology.
              </p>

              <div className="bg-red-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-red-900 mb-3">
                  Why YEC Is Incompatible with Catholicism
                </h3>
                <ul className="text-red-800 space-y-3 text-sm">
                  <li>
                    <strong>Biblical interpretation:</strong> Catholic biblical interpretation has
                    <em> never</em> required the kind of literalism that YEC demands. The Church
                    has always recognised multiple senses of Scripture (literal, allegorical, moral,
                    anagogical) and has always held that the literal sense of a text depends on
                    the literary genre the author is using.
                  </li>
                  <li>
                    <strong>The Church Fathers:</strong> As noted above, St. Augustine in the fifth
                    century already argued that the &ldquo;days&rdquo; of Genesis are not 24-hour
                    periods. Origen in the third century explicitly rejected a crude literal reading
                    of the creation narrative.
                  </li>
                  <li>
                    <strong>The Pontifical Biblical Commission:</strong> In 1909, the Commission
                    stated that the &ldquo;days&rdquo; of Genesis need not be taken as literal
                    24-hour periods.
                  </li>
                  <li>
                    <strong>The Catechism:</strong> The Catechism speaks of creation &ldquo;in a
                    state of journeying&rdquo; (<em>in statu viae</em>) toward its ultimate
                    perfection (CCC 302). This language of ongoing development is compatible
                    with an ancient, evolving universe &mdash; not a recently created one.
                  </li>
                </ul>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">
                  CCC 302: Creation &ldquo;In a State of Journeying&rdquo;
                </h3>
                <p className="text-amber-800 italic mb-3">
                  &ldquo;Creation has its own goodness and proper perfection, but it did not spring
                  forth complete from the hands of the Creator. The universe was created &lsquo;in
                  a state of journeying&rsquo; (<em>in statu viae</em>) toward an ultimate
                  perfection yet to be attained, to which God has destined it.&rdquo;
                </p>
                <p className="text-amber-800 text-sm mb-3">
                  This remarkable passage describes a creation that is not static but dynamic &mdash;
                  not finished but developing toward its fulfilment. An evolving universe, unfolding
                  over billions of years toward its God-given destiny, is precisely a creation
                  &ldquo;in a state of journeying.&rdquo;
                </p>
                <p className="text-amber-700 text-sm">
                  &mdash; <em>Catechism of the Catholic Church</em>, 302
                </p>
              </div>
            </div>

            {/* The Catholic Way */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Church className="w-6 h-6 text-green-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Catholic Way: Neither ID nor YEC</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The Catholic approach to evolution does not fit neatly into the categories defined
                by American culture-war debates. The Church is:
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3 bg-green-50 p-4 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-700 mt-0.5 flex-shrink-0" />
                  <p className="text-green-800 text-sm">
                    <strong>Pro-science:</strong> The Church accepts the mainstream scientific account
                    of evolution, the age of the earth, and the Big Bang. It has its own Pontifical
                    Academy of Sciences with some of the world&rsquo;s leading scientists as members.
                  </p>
                </div>
                <div className="flex items-start gap-3 bg-green-50 p-4 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-700 mt-0.5 flex-shrink-0" />
                  <p className="text-green-800 text-sm">
                    <strong>Pro-purpose:</strong> The Church insists that the universe has meaning
                    and purpose, that creation shows the wisdom of the Creator, and that human
                    beings have a unique dignity that cannot be reduced to biology.
                  </p>
                </div>
                <div className="flex items-start gap-3 bg-green-50 p-4 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-700 mt-0.5 flex-shrink-0" />
                  <p className="text-green-800 text-sm">
                    <strong>Anti-materialism:</strong> The Church rejects the philosophical claim
                    that matter is all there is, that the universe is purposeless, or that human
                    beings are &ldquo;nothing but&rdquo; their genes.
                  </p>
                </div>
                <div className="flex items-start gap-3 bg-amber-50 p-4 rounded-lg">
                  <ArrowRight className="w-5 h-5 text-amber-700 mt-0.5 flex-shrink-0" />
                  <p className="text-amber-800 text-sm">
                    <strong>Carefully nuanced:</strong> The Church does not endorse ID as a scientific
                    programme, does not support teaching ID or creationism as science in schools,
                    and does not treat God as a scientific hypothesis to be tested.
                  </p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">
                This position may seem unsatisfying to those who want a simple answer. But the
                Catholic intellectual tradition has always preferred careful distinctions over
                slogans. The relationship between God and creation is not captured by
                &ldquo;evolution vs. creation&rdquo; any more than the relationship between an
                author and a novel is captured by &ldquo;the author wrote it vs. the characters
                did things.&rdquo;
              </p>
            </div>

            {/* Sources */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Sources &amp; Further Reading</h3>
              <ol className="list-decimal list-inside text-gray-600 space-y-2 text-sm">
                <li>Cardinal Christoph Sch&ouml;nborn, &ldquo;Finding Design in Nature,&rdquo; <em>The New York Times</em>, 7 July 2005.</li>
                <li>Cardinal Christoph Sch&ouml;nborn, <em>Chance or Purpose? Creation, Evolution, and a Rational Faith</em> (Ignatius Press, 2007).</li>
                <li>St. Thomas Aquinas, <em>Summa Theologica</em>, I, q. 2, a. 3 (the Five Ways, esp. the Fifth Way).</li>
                <li>Edward Feser, &ldquo;Intelligent Design Theory and the Thomistic Tradition,&rdquo; in <em>Aquinas</em> (Oneworld, 2009).</li>
                <li><em>Catechism of the Catholic Church</em>, 302.</li>
                <li>George Coyne, S.J., &ldquo;God&rsquo;s Chance Creation,&rdquo; <em>The Tablet</em>, 6 August 2005.</li>
                <li>William E. Carroll, &ldquo;Creation, Evolution, and Thomas Aquinas,&rdquo; <em>Revue des Questions Scientifiques</em> 171, no. 4 (2000): 319-347.</li>
              </ol>
            </div>
          </div>
        )}

        {/* ==================== TAB 6: KEY DOCUMENTS & QUOTES ==================== */}
        {activeTab === 'key-documents' && (
          <div className="space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <ScrollText className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Key Documents &amp; Quotes</h2>
              </div>

              <p className="text-gray-700 leading-relaxed">
                This tab gathers the most important primary texts on evolution and creation from
                the Catholic tradition. These are the sources that any serious student of this
                question should know. They are arranged chronologically, from the Church Fathers
                to the present day, so that the development of Catholic thought on this topic
                can be traced clearly.
              </p>
            </div>

            {/* Church Fathers */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Quote className="w-6 h-6 text-purple-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Church Fathers on Creation</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Long before the modern evolution debate, the Church Fathers wrestled with how to
                read the Genesis creation accounts. Their insights demonstrate that non-literal
                reading of Genesis is not a modern accommodation to science but an ancient
                Christian tradition.
              </p>

              <div className="space-y-6">
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">
                    Origen of Alexandria (c. 185-254)
                  </h3>
                  <p className="text-purple-800 italic mb-3">
                    &ldquo;What man of intelligence will believe that the first and the second and
                    the third day, and the evening and the morning existed without the sun and
                    moon and stars? And that the first day, if we may so call it, was even without
                    a heaven? And who is so silly as to believe that God, after the manner of a
                    farmer, planted a paradise eastward in Eden, and set in it a visible and
                    palpable tree of life, of such a sort that anyone who tasted its fruit with
                    his bodily teeth would gain life?&rdquo;
                  </p>
                  <p className="text-purple-700 text-sm mb-3">
                    &mdash; Origen, <em>De Principiis</em> (On First Principles), IV.3.1
                  </p>
                  <p className="text-purple-800 text-sm">
                    Origen, one of the greatest minds of the early Church, explicitly rejected a
                    crudely literal reading of the Genesis narrative. He argued that these texts
                    contain deep spiritual truths expressed through figurative language, and that
                    treating them as plain historical reportage misses their meaning.
                  </p>
                </div>

                <div className="bg-amber-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-amber-900 mb-3">
                    St. Augustine of Hippo (354-430)
                  </h3>
                  <p className="text-amber-800 italic mb-3">
                    &ldquo;Usually, even a non-Christian knows something about the earth, the
                    heavens, and the other elements of this world, about the motion and orbit of
                    the stars and even their size and relative positions, about the predictable
                    eclipses of the sun and moon, the cycles of the years and the seasons, about
                    the kinds of animals, shrubs, stones, and so forth, and this knowledge he
                    holds to as being certain from reason and experience.&rdquo;
                  </p>
                  <p className="text-amber-800 italic mb-3">
                    &ldquo;Now, it is a disgraceful and dangerous thing for an infidel to hear a
                    Christian, presumably giving the meaning of Holy Scripture, talking nonsense
                    on these topics; and we should take all means to prevent such an embarrassing
                    situation, in which people show up vast ignorance in a Christian and laugh it
                    to scorn.&rdquo;
                  </p>
                  <p className="text-amber-700 text-sm mb-3">
                    &mdash; Augustine, <em>De Genesi ad Litteram</em>, I.19.39
                  </p>
                  <p className="text-amber-800 text-sm">
                    Augustine&rsquo;s warning has extraordinary relevance today. He argues that
                    Christians must not use Scripture to make claims about natural phenomena that
                    contradict what can be established by reason and experience. When they do, they
                    bring ridicule on the faith and make the Gospel harder to believe.
                  </p>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-900 mb-3">
                    Augustine on <em>Rationes Seminales</em> (Seminal Reasons)
                  </h3>
                  <p className="text-green-800 italic mb-3">
                    &ldquo;In the seed, then, there was invisibly present all that would develop
                    in time into a tree. And in this same way we must picture the world, when God
                    made all things together, as having had all things which were made in it and
                    with it when day was made. This includes not only heaven with sun, moon, and
                    stars... but also the beings which water and earth produced in potency and in
                    their causes, before they came forth in the course of time.&rdquo;
                  </p>
                  <p className="text-green-700 text-sm mb-3">
                    &mdash; Augustine, <em>De Genesi ad Litteram</em>, V.23.45
                  </p>
                  <p className="text-green-800 text-sm">
                    Augustine&rsquo;s concept of <em>rationes seminales</em> &mdash; that God
                    implanted the seeds or potentialities of all future things into creation at the
                    beginning &mdash; is often noted as a remarkable anticipation of the idea of
                    an evolving creation. While Augustine could not have imagined natural selection
                    or DNA, his theological framework of a creation with built-in potentialities
                    that unfold over time is strikingly compatible with evolutionary thought.
                  </p>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-900 mb-3">
                    St. Thomas Aquinas (1225-1274) on Primary and Secondary Causes
                  </h3>
                  <p className="text-blue-800 italic mb-3">
                    &ldquo;Nature is nothing but the plan of some art, namely a divine one, put
                    into things themselves, by which those things move towards a concrete end: as
                    if the man who builds up a ship could give to the pieces of wood that they
                    could move themselves to produce the form of the ship.&rdquo;
                  </p>
                  <p className="text-blue-700 text-sm mb-3">
                    &mdash; Aquinas, Commentary on Aristotle&rsquo;s <em>Physics</em>, II, lect. 14
                  </p>
                  <p className="text-blue-800 italic mb-3">
                    &ldquo;God is the cause of everything&rsquo;s action inasmuch as he gives
                    everything the power to act, and preserves it in being and applies it to
                    action, and inasmuch as by his power every other power acts.&rdquo;
                  </p>
                  <p className="text-blue-700 text-sm mb-3">
                    &mdash; Aquinas, <em>De Potentia</em>, q. 3, a. 7
                  </p>
                  <p className="text-blue-800 text-sm">
                    Aquinas&rsquo;s metaphor of God as an artisan who builds self-moving capacities
                    into creation is a perfect philosophical framework for understanding theistic
                    evolution. God does not need to intervene at every step; God has created things
                    with the intrinsic capacity to develop according to their own natures.
                  </p>
                </div>
              </div>
            </div>

            {/* Magisterial Documents */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <FileText className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Key Magisterial Documents</h2>
              </div>

              <div className="space-y-6">
                <div className="bg-amber-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-amber-900 mb-3">
                    Pius XII, <em>Humani Generis</em> (1950)
                  </h3>
                  <p className="text-amber-800 mb-3">
                    The foundational document. Key paragraphs:
                  </p>
                  <div className="space-y-3 text-amber-800 text-sm">
                    <div>
                      <p className="font-medium">Paragraph 35 &mdash; On the limits of science:</p>
                      <p className="italic">
                        &ldquo;The Magisterium of the Church does not prohibit that the doctrine of
                        evolution be treated in research and discussions by experts in both fields
                        &mdash; insofar as the inquiry is about the origin of the human body from
                        already existing and living matter.&rdquo;
                      </p>
                    </div>
                    <div>
                      <p className="font-medium">Paragraph 36 &mdash; On the soul:</p>
                      <p className="italic">
                        &ldquo;The Catholic faith obliges us to hold that souls are immediately
                        created by God.&rdquo;
                      </p>
                    </div>
                    <div>
                      <p className="font-medium">Paragraph 37 &mdash; On monogenism:</p>
                      <p className="italic">
                        &ldquo;The faithful cannot embrace that opinion which maintains that either
                        after Adam there existed on this earth true men who did not take their origin
                        through natural generation from him as from the first parent of all, or that
                        Adam represents a certain number of first parents.&rdquo;
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-900 mb-3">
                    John Paul II, Message to the Pontifical Academy of Sciences (1996)
                  </h3>
                  <div className="space-y-3 text-blue-800 text-sm">
                    <p className="italic">
                      &ldquo;Today, almost half a century after the publication of the Encyclical,
                      new knowledge has led to the recognition of the theory of evolution as more
                      than a hypothesis. It is indeed remarkable that this theory has been
                      progressively accepted by researchers, following a series of discoveries in
                      various fields of knowledge. The convergence, neither sought nor fabricated,
                      of the results of work that was conducted independently is in itself a
                      significant argument in favour of this theory.&rdquo;
                    </p>
                    <p className="italic">
                      &ldquo;It is by virtue of his spiritual soul that the whole person possesses
                      such a dignity even in his body. Pius XII stressed this essential point: if
                      the human body takes its origin from pre-existent living matter, the spiritual
                      soul is immediately created by God.&rdquo;
                    </p>
                    <p className="italic">
                      &ldquo;Consequently, theories of evolution which, in accordance with the
                      philosophies inspiring them, consider the mind as emerging from the forces of
                      living matter, or as a mere epiphenomenon of this matter, are incompatible
                      with the truth about man.&rdquo;
                    </p>
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-900 mb-3">
                    <em>Catechism of the Catholic Church</em> (1992): Key Paragraphs
                  </h3>
                  <div className="space-y-3 text-green-800 text-sm">
                    <div>
                      <p className="font-medium">CCC 159 &mdash; Faith and science:</p>
                      <p className="italic">
                        &ldquo;Though faith is above reason, there can never be any real discrepancy
                        between faith and reason. Since the same God who reveals mysteries and infuses
                        faith has bestowed the light of reason on the human mind, God cannot deny
                        himself, nor can truth ever contradict truth.&rdquo;
                      </p>
                    </div>
                    <div>
                      <p className="font-medium">CCC 283 &mdash; On the question of origins:</p>
                      <p className="italic">
                        &ldquo;The question about the origins of the world and of man has been the
                        object of many scientific studies which have splendidly enriched our knowledge
                        of the age and dimensions of the cosmos, the development of life-forms and
                        the appearance of man.&rdquo;
                      </p>
                    </div>
                    <div>
                      <p className="font-medium">CCC 302 &mdash; Creation in a state of journeying:</p>
                      <p className="italic">
                        &ldquo;Creation has its own goodness and proper perfection, but it did not
                        spring forth complete from the hands of the Creator. The universe was created
                        &lsquo;in a state of journeying&rsquo; (<em>in statu viae</em>) toward an
                        ultimate perfection yet to be attained, to which God has destined it.&rdquo;
                      </p>
                    </div>
                    <div>
                      <p className="font-medium">CCC 355 &mdash; The human person:</p>
                      <p className="italic">
                        &ldquo;&lsquo;God created man in his own image, in the image of God he
                        created him, male and female he created them.&rsquo; Man occupies a unique
                        place in creation.&rdquo;
                      </p>
                    </div>
                    <div>
                      <p className="font-medium">CCC 362-368 &mdash; Body and soul:</p>
                      <p className="italic">
                        &ldquo;The human person, created in the image of God, is a being at once
                        corporeal and spiritual... The unity of soul and body is so profound that one
                        has to consider the soul to be the &lsquo;form&rsquo; of the body... Spirit
                        and matter, in man, are not two natures united, but rather their union forms
                        a single nature.&rdquo;
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">
                    International Theological Commission, <em>Communion and Stewardship</em> (2004)
                  </h3>
                  <div className="space-y-3 text-purple-800 text-sm">
                    <div>
                      <p className="font-medium">Paragraph 62 &mdash; On divine providence and evolution:</p>
                      <p className="italic">
                        &ldquo;According to the widely accepted scientific account, the universe
                        erupted 15 billion years ago in an explosion called the &lsquo;Big Bang&rsquo;
                        and has been expanding and cooling ever since... Many neo-Darwinian scientists,
                        as well as some of their critics, have concluded that, if evolution is driven
                        by natural selection acting on random genetic variation, then there can be
                        no overall direction to evolution, and the emergence of human beings is an
                        accident of history... But it is important to note that, according to the
                        Catholic understanding of divine causality, true contingency in the created
                        order is not incompatible with a purposeful divine providence.&rdquo;
                      </p>
                    </div>
                    <div>
                      <p className="font-medium">Paragraph 63 &mdash; On the limits of science:</p>
                      <p className="italic">
                        &ldquo;According to St. Thomas Aquinas: &lsquo;The causality of God, Who is
                        the first agent, extends to all being... It necessarily follows that
                        everything that exists in whatsoever manner, exists as a participant in
                        being and is caused by God.&rsquo; An unguided evolutionary process &mdash;
                        one that falls outside the bounds of divine providence &mdash; simply
                        cannot exist.&rdquo;
                      </p>
                    </div>
                    <div>
                      <p className="font-medium">Paragraph 70 &mdash; On the human person:</p>
                      <p className="italic">
                        &ldquo;With respect to the immediate creation of the human soul, Catholic
                        theology affirms that particular actions of God bring about effects that
                        transcend the capacity of created causes acting according to their natures.&rdquo;
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pope Benedict XVI and Pope Francis */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-green-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Benedict XVI and Francis: Recent Papal Statements</h2>
              </div>

              <div className="space-y-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-900 mb-3">
                    Pope Benedict XVI, Castel Gandolfo Seminar (2006-2007)
                  </h3>
                  <p className="text-green-800 italic mb-3">
                    &ldquo;The question is not to either make a decision for a creationism that
                    fundamentally excludes science, or for an evolutionary theory that covers over
                    its own gaps and does not want to see the questions that reach beyond the
                    methodological possibilities of natural science... I find it important to
                    underline that the theory of evolution implies questions that must be assigned
                    to philosophy and which themselves lead beyond the realms of science.&rdquo;
                  </p>
                  <p className="text-green-700 text-sm">
                    &mdash; Joseph Ratzinger/Benedict XVI, from the Castel Gandolfo proceedings,
                    <em> Creation and Evolution</em> (2007)
                  </p>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-900 mb-3">
                    Pope Benedict XVI, Homily at Regensburg (2006)
                  </h3>
                  <p className="text-blue-800 italic mb-3">
                    &ldquo;We are not some casual and meaningless product of evolution. Each of us
                    is the result of a thought of God. Each of us is willed, each of us is loved,
                    each of us is necessary.&rdquo;
                  </p>
                  <p className="text-blue-700 text-sm">
                    &mdash; Benedict XVI, Inaugural Homily, 24 April 2005
                  </p>
                </div>

                <div className="bg-amber-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-amber-900 mb-3">
                    Pope Francis, Address to the Pontifical Academy of Sciences (2014)
                  </h3>
                  <p className="text-amber-800 italic mb-3">
                    &ldquo;When we read about creation in Genesis, we run the risk of imagining
                    God was a magician, with a magic wand able to do everything. But that is not
                    so. He created human beings and let them develop according to the internal
                    laws that he gave to each one so they would reach their fulfilment.&rdquo;
                  </p>
                  <p className="text-amber-800 italic mb-3">
                    &ldquo;The Big Bang, which today we hold to be the origin of the world, does
                    not contradict the intervention of the divine creator but, rather, requires
                    it. Evolution in nature is not inconsistent with the notion of creation,
                    because evolution presupposes the creation of beings that evolve.&rdquo;
                  </p>
                  <p className="text-amber-700 text-sm">
                    &mdash; Pope Francis, Address to the Pontifical Academy of Sciences, 27 October 2014
                  </p>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">
                    Pope Francis, <em>Laudato Si&rsquo;</em> (2015)
                  </h3>
                  <p className="text-purple-800 italic mb-3">
                    &ldquo;Although we are often not aware of it, we depend on these larger systems
                    for our own existence. We need only recall how ecosystems interact in
                    dispersing carbon dioxide, purifying water, controlling illnesses and
                    epidemics, forming soil, breaking down waste, and in many other ways which we
                    overlook or simply do not know about. Once they are removed from their natural
                    environment or their complementarity is destroyed, they will be unable to do
                    what they normally do.&rdquo;
                  </p>
                  <p className="text-purple-800 text-sm mb-3">
                    While <em>Laudato Si&rsquo;</em> is primarily about ecology and environmental
                    stewardship, it reflects a deeply evolutionary understanding of creation &mdash;
                    interconnected, developing, and entrusted to human care. Francis treats the
                    natural world as a dynamic, interconnected system, not a static backdrop.
                  </p>
                  <p className="text-purple-700 text-sm">
                    &mdash; Pope Francis, <em>Laudato Si&rsquo;</em>, 34 (2015)
                  </p>
                </div>
              </div>
            </div>

            {/* Summary Table */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Layers className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Timeline of Catholic Engagement with Evolution</h2>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-gray-800">Date</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-800">Document / Event</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-800">Key Point</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 whitespace-nowrap font-medium">c. 230 AD</td>
                      <td className="py-3 px-4">Origen, <em>De Principiis</em></td>
                      <td className="py-3 px-4">Rejects crude literal reading of Genesis creation narrative</td>
                    </tr>
                    <tr className="border-b border-gray-100 bg-gray-50">
                      <td className="py-3 px-4 whitespace-nowrap font-medium">c. 415 AD</td>
                      <td className="py-3 px-4">Augustine, <em>De Genesi ad Litteram</em></td>
                      <td className="py-3 px-4">Days are not 24-hour periods; <em>rationes seminales</em>; warns against embarrassing the faith with bad science</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 whitespace-nowrap font-medium">c. 1270</td>
                      <td className="py-3 px-4">Aquinas, <em>Summa Contra Gentiles</em></td>
                      <td className="py-3 px-4">Primary and secondary causation; God works through natural causes</td>
                    </tr>
                    <tr className="border-b border-gray-100 bg-gray-50">
                      <td className="py-3 px-4 whitespace-nowrap font-medium">1893</td>
                      <td className="py-3 px-4">Leo XIII, <em>Providentissimus Deus</em></td>
                      <td className="py-3 px-4">Truth cannot contradict truth; proper biblical interpretation</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 whitespace-nowrap font-medium">1909</td>
                      <td className="py-3 px-4">Pontifical Biblical Commission</td>
                      <td className="py-3 px-4">The &ldquo;days&rdquo; of Genesis need not be 24-hour periods</td>
                    </tr>
                    <tr className="border-b border-gray-100 bg-gray-50">
                      <td className="py-3 px-4 whitespace-nowrap font-medium">1950</td>
                      <td className="py-3 px-4">Pius XII, <em>Humani Generis</em></td>
                      <td className="py-3 px-4">Research on evolution permitted; soul directly created by God; caution on polygenism</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 whitespace-nowrap font-medium">1992</td>
                      <td className="py-3 px-4"><em>Catechism of the Catholic Church</em></td>
                      <td className="py-3 px-4">Creation &ldquo;in a state of journeying&rdquo;; science enriches knowledge; no conflict with faith</td>
                    </tr>
                    <tr className="border-b border-gray-100 bg-gray-50">
                      <td className="py-3 px-4 whitespace-nowrap font-medium">1996</td>
                      <td className="py-3 px-4">John Paul II, Address to Pontifical Academy</td>
                      <td className="py-3 px-4">Evolution is &ldquo;more than a hypothesis&rdquo;; convergent evidence; materialist theories of mind rejected</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 whitespace-nowrap font-medium">2004</td>
                      <td className="py-3 px-4">ITC, <em>Communion and Stewardship</em></td>
                      <td className="py-3 px-4">&ldquo;Unguided&rdquo; evolution is a philosophical claim; divine providence governs all</td>
                    </tr>
                    <tr className="border-b border-gray-100 bg-gray-50">
                      <td className="py-3 px-4 whitespace-nowrap font-medium">2005</td>
                      <td className="py-3 px-4">Sch&ouml;nborn NYT op-ed and clarification</td>
                      <td className="py-3 px-4">Purpose in nature affirmed; ID not endorsed as science</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 whitespace-nowrap font-medium">2007</td>
                      <td className="py-3 px-4">Benedict XVI, Castel Gandolfo seminar</td>
                      <td className="py-3 px-4">Evolution and creation are complementary, not competing</td>
                    </tr>
                    <tr className="border-b border-gray-100 bg-gray-50">
                      <td className="py-3 px-4 whitespace-nowrap font-medium">2014</td>
                      <td className="py-3 px-4">Pope Francis, Address to Pontifical Academy</td>
                      <td className="py-3 px-4">&ldquo;God is not a magician&rdquo;; evolution requires a Creator</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 whitespace-nowrap font-medium">2015</td>
                      <td className="py-3 px-4">Pope Francis, <em>Laudato Si&rsquo;</em></td>
                      <td className="py-3 px-4">Creation as interconnected, dynamic system; ecological responsibility</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Recommended Reading */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Recommended Reading</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                For those wishing to explore this topic further, the following books represent
                the best of Catholic engagement with evolutionary science:
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-amber-50 p-5 rounded-lg">
                  <h4 className="font-semibold text-amber-900 mb-3">For General Readers</h4>
                  <ul className="text-amber-800 text-sm space-y-3">
                    <li>
                      <strong>Joseph Ratzinger, <em>In the Beginning</em></strong> (Eerdmans, 1995)
                      &mdash; Four homilies on creation, lucid and accessible.
                    </li>
                    <li>
                      <strong>Christoph Sch&ouml;nborn, <em>Chance or Purpose?</em></strong>
                      (Ignatius Press, 2007) &mdash; A cardinal&rsquo;s careful exploration of
                      evolution, faith, and reason.
                    </li>
                    <li>
                      <strong>Stephen Barr, <em>Modern Physics and Ancient Faith</em></strong>
                      (University of Notre Dame Press, 2003) &mdash; A Catholic physicist on
                      science and faith.
                    </li>
                    <li>
                      <strong>Edward Feser, <em>Aquinas</em></strong> (Oneworld, 2009)
                      &mdash; Essential introduction to the Thomistic framework.
                    </li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-5 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-3">For Advanced Study</h4>
                  <ul className="text-blue-800 text-sm space-y-3">
                    <li>
                      <strong>Nicanor Austriaco, O.P., et al., <em>Thomistic Evolution</em></strong>
                      (Cluny Media, 2016) &mdash; The most thorough Catholic treatment of evolution
                      and Thomistic theology.
                    </li>
                    <li>
                      <strong>William E. Carroll, <em>Creation and Science</em></strong>
                      (CTS Publications, 2011) &mdash; A philosopher on Aquinas and modern science.
                    </li>
                    <li>
                      <strong>Stephan Horn, ed., <em>Creation and Evolution</em></strong>
                      (Ignatius Press, 2008) &mdash; Proceedings of Benedict XVI&rsquo;s seminar.
                    </li>
                    <li>
                      <strong>Kenneth Kemp, <em>The War That Never Was</em></strong>
                      (Cluny Media, 2023) &mdash; The relationship between Catholic theology
                      and evolutionary science.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Sources */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Sources &amp; Further Reading</h3>
              <ol className="list-decimal list-inside text-gray-600 space-y-2 text-sm">
                <li>Origen, <em>De Principiis</em> (On First Principles), trans. G.W. Butterworth (Peter Smith, 1973).</li>
                <li>Augustine, <em>De Genesi ad Litteram</em>, trans. John Hammond Taylor, S.J. (Paulist Press, 1982).</li>
                <li>St. Thomas Aquinas, <em>Summa Theologica</em> and <em>Summa Contra Gentiles</em>, various editions.</li>
                <li>Pius XII, <em>Humani Generis</em> (1950), Vatican website.</li>
                <li>John Paul II, &ldquo;Message to the Pontifical Academy of Sciences,&rdquo; 22 October 1996, Vatican website.</li>
                <li><em>Catechism of the Catholic Church</em>, 2nd ed. (Libreria Editrice Vaticana, 1997).</li>
                <li>International Theological Commission, <em>Communion and Stewardship</em> (2004), Vatican website.</li>
                <li>Stephan Horn, ed., <em>Creation and Evolution</em> (Ignatius Press, 2008).</li>
                <li>Pope Francis, Address to the Pontifical Academy of Sciences, 27 October 2014, Vatican website.</li>
                <li>Pope Francis, <em>Laudato Si&rsquo;</em> (2015), Vatican website.</li>
              </ol>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
