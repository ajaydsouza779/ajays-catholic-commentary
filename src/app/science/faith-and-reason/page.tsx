'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  BookOpen,
  Lightbulb,
  Scale,
  Cross,
  Telescope,
  Quote,
  Feather,
  Crown,
  Shield,
  AlertTriangle,
  Sparkles,
  GraduationCap,
  Heart,
  Users,
  ArrowRight,
  ScrollText,
  Star,
  Eye,
  Compass,
  Brain,
  CheckCircle,
  XCircle,
  Award,
} from 'lucide-react'

type TabKey =
  | 'two-wings'
  | 'tradition'
  | 'vatican-i'
  | 'natural-theology'
  | 'two-errors'
  | 'modern-voices'

export default function FaithAndReasonPage() {
  const [activeTab, setActiveTab] = useState<TabKey>('two-wings')

  const tabs: { key: TabKey; label: string }[] = [
    { key: 'two-wings', label: 'Two Wings' },
    { key: 'tradition', label: 'The Tradition' },
    { key: 'vatican-i', label: 'Vatican I & Beyond' },
    { key: 'natural-theology', label: 'Natural Theology' },
    { key: 'two-errors', label: 'Two Errors' },
    { key: 'modern-voices', label: 'Modern Voices' },
  ]

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Faith &amp; Reason</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The Catholic Church teaches that faith and reason are not enemies but allies &mdash;
            two complementary paths to truth that originate in the same God. Far from opposing
            scientific or philosophical inquiry, the Church insists that honest investigation of
            the world ultimately leads toward the Creator. This page explores why.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg shadow-lg p-1 overflow-x-auto max-w-full">
            <div className="flex flex-nowrap gap-1">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`px-4 py-2.5 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
                    activeTab === tab.key
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

        {/* ============================================================ */}
        {/* TAB 1: TWO WINGS                                              */}
        {/* ============================================================ */}
        {activeTab === 'two-wings' && (
          <div className="space-y-8">
            {/* Hero quote */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-amber-400">
              <div className="flex items-start gap-4">
                <Feather className="w-10 h-10 text-amber-600 flex-shrink-0" />
                <div>
                  <p className="text-xl text-gray-800 italic leading-relaxed mb-3">
                    &ldquo;Faith and reason are like two wings on which the human spirit rises to
                    the contemplation of truth; and God has placed in the human heart a desire to
                    know the truth &mdash; in a word, to know himself &mdash; so that, by knowing
                    and loving God, men and women may also come to the fullness of truth about
                    themselves.&rdquo;
                  </p>
                  <p className="text-sm font-semibold text-amber-800">
                    &mdash; St. John Paul II, opening line of <em>Fides et Ratio</em> (1998)
                  </p>
                </div>
              </div>
            </div>

            {/* The central image */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">The Central Image</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The metaphor of the two wings is the simplest and most powerful summary of the
                Catholic position. A bird with one wing cannot fly. The human spirit, given the
                capacity both to <em>reason</em> about the natural order and to <em>believe</em>{' '}
                what God reveals, needs both to reach what it is made for: the truth about itself,
                the world, and God.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Reason without faith is not wrong &mdash; it is incomplete. It can take you a long
                way: to mathematics, to natural science, to a great deal of philosophy, even
                (Catholics hold) to a rational conviction that God exists. But it cannot, by
                itself, deliver the inner life of God or the destiny of the human person.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Faith without reason is not virtue &mdash; it is sentimentality, or worse,
                credulity. Catholic faith has always understood itself as a <em>reasonable</em>{' '}
                trust in God who has spoken, not a leap into the dark. From the very first
                centuries, Christians defended the faith publicly with arguments, not slogans.
              </p>
            </div>

            {/* Three core claims */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Three Core Claims</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-amber-700">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Truth is one because God is one.
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      The God who reveals himself in Scripture is the same God who creates and
                      sustains the natural world that science studies. Whatever is true in physics
                      cannot ultimately contradict whatever is true in theology, because both are
                      grounded in the same divine intellect.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-amber-700">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Apparent conflicts have explanations.
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      When a sincere conflict appears between a scientific finding and a
                      theological claim, one of three things has happened: the science has been
                      misunderstood, the Scripture has been misread, or both. The Church has
                      historically been willing to revisit its <em>interpretation</em> of Scripture
                      &mdash; never the inspired text itself &mdash; in the light of demonstrated
                      truths about nature.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-amber-700">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Faith and reason need each other.
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Reason rescues faith from superstition; faith rescues reason from despair
                      and from the temptation to absolutize itself. Each purifies the other. JPII
                      called this their &ldquo;circular relationship.&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CCC 159 */}
            <div className="bg-indigo-50 rounded-lg p-8 border border-indigo-200">
              <div className="flex items-start gap-3 mb-4">
                <BookOpen className="w-7 h-7 text-indigo-700 flex-shrink-0" />
                <h2 className="text-2xl font-bold text-indigo-900">
                  Catechism of the Catholic Church, 159
                </h2>
              </div>
              <p className="text-indigo-900 italic leading-relaxed mb-4">
                &ldquo;Though faith is above reason, there can never be any real discrepancy
                between faith and reason. Since the same God who reveals mysteries and infuses
                faith has bestowed the light of reason on the human mind, God cannot deny himself,
                nor can truth ever contradict truth.&rdquo;
              </p>
              <p className="text-indigo-800 text-sm">
                The Catechism here quotes Vatican I&apos;s <em>Dei Filius</em> (1870) almost
                verbatim &mdash; binding teaching that has never been retracted or relaxed.
              </p>
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* TAB 2: THE TRADITION                                          */}
        {/* ============================================================ */}
        {activeTab === 'tradition' && (
          <div className="space-y-8">
            {/* Augustine */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center">
                  <Cross className="w-6 h-6 text-rose-700" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">St. Augustine of Hippo (354&ndash;430)</h2>
                  <p className="text-sm text-gray-500">&ldquo;Believe that you may understand.&rdquo;</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Augustine&apos;s formula <em>crede ut intelligas</em> &mdash; &ldquo;believe so
                that you may understand&rdquo; &mdash; sets the pattern. Faith is not a substitute
                for thinking; it is what makes the deepest kind of thinking possible. The believer
                does not stop reasoning when he believes; he reasons all the harder, now with new
                light.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                In <em>The Literal Meaning of Genesis</em> (Book I, Ch. 19), Augustine warns
                Christians not to make fools of themselves by insisting on a literal reading of
                Scripture against well-established natural knowledge:
              </p>
              <div className="bg-gray-50 rounded-lg p-5 border-l-4 border-rose-400 italic text-gray-700">
                &ldquo;It is a disgraceful and dangerous thing for an unbeliever to hear a
                Christian, presumably giving the meaning of Holy Scripture, talking nonsense on
                these topics&hellip; If they find a Christian mistaken in a field which they
                themselves know well and hear him maintaining his foolish opinions about our
                books, how are they going to believe those books in matters concerning the
                resurrection of the dead, the hope of eternal life, and the kingdom of
                heaven?&rdquo;
              </div>
              <p className="text-sm text-gray-500 mt-3">
                Written around AD 415 &mdash; twelve centuries before Galileo. The Church Fathers
                had this conversation already.
              </p>
            </div>

            {/* Anselm */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                  <Crown className="w-6 h-6 text-indigo-700" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">St. Anselm of Canterbury (1033&ndash;1109)</h2>
                  <p className="text-sm text-gray-500"><em>Fides quaerens intellectum</em> &mdash; &ldquo;Faith seeking understanding.&rdquo;</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Anselm gave the project its motto. The phrase <em>fides quaerens intellectum</em>{' '}
                describes the lifelong work of the Christian intellect: not to prove faith from
                scratch, but to penetrate ever more deeply into what faith already holds.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Anselm is also famous for the <em>ontological argument</em> for the existence of
                God in his <em>Proslogion</em> &mdash; an attempt to show, from the very concept
                of &ldquo;that than which nothing greater can be thought,&rdquo; that God must
                exist. Whether or not the argument succeeds (philosophers still debate it), it is
                a striking example of a believing monk taking reason as far as reason will go.
              </p>
            </div>

            {/* Aquinas */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-amber-700" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">St. Thomas Aquinas (1225&ndash;1274)</h2>
                  <p className="text-sm text-gray-500">The Angelic Doctor; the great synthesis.</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Aquinas inherited a Christian world that had just rediscovered Aristotle through
                Arabic and Jewish commentators. Some thought Aristotelian naturalism would
                destroy the faith. Aquinas instead <em>baptized</em> Aristotle &mdash; showing
                that the best pagan philosophy, properly understood, was a friend of Christian
                theology, not its enemy.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                His distinction between the <strong>preambles of faith</strong> (truths that
                reason can establish &mdash; God&apos;s existence, the soul&apos;s immortality)
                and the <strong>articles of faith</strong> (truths that exceed reason but do not
                contradict it &mdash; the Trinity, the Incarnation) became the standard map for
                eight centuries.
              </p>
              <div className="bg-amber-50 rounded-lg p-5 border border-amber-200">
                <p className="text-gray-700 italic mb-2">
                  &ldquo;The light of natural reason, whereby we discern what is true from what
                  is false, was given by God; and God could not be God&apos;s own contrary.
                  Therefore, the truths of faith cannot contradict the principles known by
                  natural reason.&rdquo;
                </p>
                <p className="text-sm text-amber-800 font-semibold">
                  &mdash; Aquinas, <em>Summa Contra Gentiles</em>, I.7
                </p>
              </div>
            </div>

            {/* Bonaventure */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-emerald-700" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">St. Bonaventure (1221&ndash;1274)</h2>
                  <p className="text-sm text-gray-500">The Seraphic Doctor; reason in love.</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Aquinas&apos; Franciscan contemporary represented a complementary stream. Where
                Aquinas built a vast architecture of distinctions, Bonaventure emphasized that
                the <em>journey of the mind to God</em> (his book&apos;s title:{' '}
                <em>Itinerarium Mentis in Deum</em>) is a journey of love as well as logic.
                Reason discovers traces of God everywhere &mdash; in the world, in the soul, in
                the very structure of being &mdash; but only love brings reason home.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The two great doctors are often contrasted; in fact they are two notes of the
                same chord. Faith and reason cooperate in different ways for different
                temperaments &mdash; analytical and contemplative, scholarly and mystical.
              </p>
            </div>

            {/* The Catholic intellectual tradition */}
            <div className="bg-indigo-50 rounded-lg p-8 border border-indigo-200">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="w-7 h-7 text-indigo-700" />
                <h2 className="text-2xl font-bold text-indigo-900">The Tradition Continues</h2>
              </div>
              <p className="text-indigo-900 leading-relaxed mb-3">
                The same project &mdash; faith seeking understanding &mdash; runs through every
                century after the medievals: Suárez, Bellarmine, Newman, Maritain, Gilson, Edith
                Stein, Karol Wojtyła. It is not a museum piece. It is a living conversation.
              </p>
              <p className="text-indigo-900 leading-relaxed">
                For the historical figures who took this conviction into the laboratory and
                observatory, see{' '}
                <Link
                  href="/science/catholic-scientists"
                  className="font-semibold underline hover:text-indigo-700"
                >
                  Catholic Scientists &rarr;
                </Link>
              </p>
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* TAB 3: VATICAN I & BEYOND                                     */}
        {/* ============================================================ */}
        {activeTab === 'vatican-i' && (
          <div className="space-y-8">
            {/* Vatican I */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <ScrollText className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">
                  Vatican I &mdash; <em>Dei Filius</em> (1870)
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                The First Vatican Council&apos;s Dogmatic Constitution on the Catholic Faith,
                <em> Dei Filius</em>, gave the Church&apos;s teaching on faith and reason its
                most formal and binding shape. It was promulgated against two errors that 19th
                century European thought had thrown up: <em>rationalism</em> (which dismissed
                revelation as superfluous) and <em>fideism</em> (which dismissed reason as
                useless).
              </p>
              <div className="bg-amber-50 rounded-lg p-5 border-l-4 border-amber-400 mb-4">
                <p className="text-gray-700 italic mb-2">
                  &ldquo;Even though faith is above reason, nevertheless there can never be any
                  real disagreement between faith and reason, since it is the same God who
                  reveals the mysteries and infuses faith, and who has endowed the human mind
                  with the light of reason. God cannot deny himself, nor can truth ever
                  contradict truth.&rdquo;
                </p>
                <p className="text-sm text-amber-800 font-semibold">
                  &mdash; <em>Dei Filius</em>, Chapter 4
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed">
                The Council also taught that the existence of God can be known with certainty
                from the things he has made, by the natural light of human reason &mdash; a
                position rooted in Romans 1:20 and developed by the entire Catholic
                philosophical tradition.
              </p>
            </div>

            {/* The four canons */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">What Dei Filius Defines</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Dei Filius does four important things:
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">
                      Affirms God&apos;s knowability by reason.
                    </h3>
                    <p className="text-gray-700 text-sm">
                      Against fideism, the Council teaches that the human mind, even without
                      revelation, can come to a certain knowledge of God&apos;s existence by
                      reflecting on creation.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">
                      Affirms revelation&apos;s necessity.
                    </h3>
                    <p className="text-gray-700 text-sm">
                      Against rationalism, the Council teaches that some truths necessary for
                      salvation exceed what unaided reason can reach &mdash; e.g., the Trinity,
                      the Incarnation, our supernatural destiny.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">
                      Distinguishes the two orders.
                    </h3>
                    <p className="text-gray-700 text-sm">
                      Faith and reason operate in distinct but related ways: same source (God),
                      different methods (reasoning from creatures vs. believing God&apos;s
                      revealed word).
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">
                      Rules out real conflict.
                    </h3>
                    <p className="text-gray-700 text-sm">
                      Apparent conflicts must be resolved by deeper investigation &mdash; never
                      by demanding that science abandon its proper methods or that theology
                      abandon defined doctrine.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Leo XIII */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Crown className="w-6 h-6 text-purple-700" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">
                  Pope Leo XIII &mdash; <em>Aeterni Patris</em> (1879)
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Nine years after Vatican I, Leo XIII issued <em>Aeterni Patris</em>, restoring
                Thomistic philosophy to its central place in Catholic seminaries and
                universities. Leo&apos;s argument was simple: if you want a tradition equipped to
                engage modern science honestly without losing its theological nerve, Aquinas is
                the model.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Leo also re-founded the Vatican Observatory in 1891 &ldquo;so that everyone
                might see clearly that the Church and her Pastors are not opposed to true and
                solid science&hellip; but that they embrace it, encourage it, and promote it
                with the fullest possible devotion.&rdquo;
              </p>
            </div>

            {/* Vatican II - Dei Verbum & Gaudium et Spes */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-emerald-700" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">
                  Vatican II &mdash; <em>Gaudium et Spes</em> (1965)
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Second Vatican Council&apos;s Pastoral Constitution on the Church in the
                Modern World, in paragraph 36, treats the question directly:
              </p>
              <div className="bg-emerald-50 rounded-lg p-5 border-l-4 border-emerald-400 mb-4">
                <p className="text-gray-700 italic mb-2">
                  &ldquo;If methodical investigation within every branch of learning is carried
                  out in a genuinely scientific manner and in accord with moral norms, it never
                  truly conflicts with faith. For earthly matters and the concerns of faith
                  derive from the same God.&rdquo;
                </p>
                <p className="text-sm text-emerald-800 font-semibold">
                  &mdash; <em>Gaudium et Spes</em> 36
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed">
                The same paragraph contains a remarkable expression of regret: &ldquo;We cannot
                but deplore certain habits of mind, which are sometimes found among Christians,
                which do not sufficiently attend to the rightful independence of science.&rdquo;
                The Council names the failure and asks Catholics to do better.
              </p>
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* TAB 4: NATURAL THEOLOGY                                       */}
        {/* ============================================================ */}
        {activeTab === 'natural-theology' && (
          <div className="space-y-8">
            {/* Romans 1:20 */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-emerald-400">
              <div className="flex items-start gap-4">
                <Quote className="w-10 h-10 text-emerald-600 flex-shrink-0" />
                <div>
                  <p className="text-xl text-gray-800 italic leading-relaxed mb-3">
                    &ldquo;Ever since the creation of the world his invisible nature, namely his
                    eternal power and deity, has been clearly perceived in the things that have
                    been made.&rdquo;
                  </p>
                  <p className="text-sm font-semibold text-emerald-800">&mdash; Romans 1:20</p>
                </div>
              </div>
            </div>

            {/* What is natural theology */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">What Is Natural Theology?</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Natural theology</strong> is the project of reasoning about God using
                only the resources of unaided reason &mdash; what the world tells us, what
                logic tells us, what our own experience tells us. It does not appeal to
                Scripture or revelation. It is, in effect, the part of theology that an
                attentive non-believer could in principle do.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Catholic teaching holds that natural theology, done well, can establish:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>That God exists.</li>
                <li>That God is one, not many.</li>
                <li>That God is intelligent and good.</li>
                <li>That the human soul is immaterial and immortal.</li>
                <li>That there is a moral law written on the human heart.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                These are the <em>preambles of faith</em> &mdash; not the content of faith
                itself, but the rational foreground in front of which faith makes sense.
              </p>
            </div>

            {/* Five Ways */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Aquinas&apos; Five Ways
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                The most famous attempt at natural theology is Aquinas&apos; <em>quinque viae</em>{' '}
                in <em>Summa Theologiae</em> I, Q. 2, Art. 3 &mdash; five short arguments for
                the existence of God, each starting from an everyday observation about the
                world:
              </p>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
                  <h3 className="font-semibold text-gray-800 mb-1">1. The Argument from Motion</h3>
                  <p className="text-gray-700 text-sm">
                    Things change. Whatever changes is changed by something else. There must be
                    a first unchanged changer &mdash; what we call God.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
                  <h3 className="font-semibold text-gray-800 mb-1">2. The Argument from Causation</h3>
                  <p className="text-gray-700 text-sm">
                    Things have causes. Causes have causes. There must be a first uncaused
                    cause &mdash; God.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
                  <h3 className="font-semibold text-gray-800 mb-1">3. The Argument from Contingency</h3>
                  <p className="text-gray-700 text-sm">
                    Things in the world might or might not exist. There must be something whose
                    existence is necessary, on which all the contingent things depend &mdash;
                    God.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
                  <h3 className="font-semibold text-gray-800 mb-1">4. The Argument from Degrees</h3>
                  <p className="text-gray-700 text-sm">
                    Things are more or less good, true, noble. Such gradations require a
                    maximum &mdash; an unsurpassably perfect being &mdash; God.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
                  <h3 className="font-semibold text-gray-800 mb-1">5. The Argument from Design</h3>
                  <p className="text-gray-700 text-sm">
                    Natural bodies act for ends. Things without intelligence cannot direct
                    themselves toward ends. There must be an intelligence that directs all
                    natural things toward their ends &mdash; God.
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                Each of these is a <em>sketch</em> &mdash; Aquinas wrote them as opening moves,
                not knockout blows. Centuries of philosophy have refined and challenged them.
                Catholics do not have to find them all persuasive; the Church has never
                canonised any particular argument for God&apos;s existence.
              </p>
            </div>

            {/* Modern formulations */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Modern Formulations</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Natural theology did not stop at Aquinas. Contemporary philosophers continue
                the work in fresh idioms:
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">
                    <strong>The Kalam cosmological argument</strong> (William Lane Craig,
                    drawing on medieval Islamic thought): the universe began to exist;
                    whatever begins to exist has a cause; therefore the universe has a cause.
                    Big Bang cosmology has given this argument new visibility.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">
                    <strong>Fine-tuning arguments</strong>: the physical constants of the
                    universe sit on a knife&apos;s edge for life. Either we won the
                    multiverse lottery or there is a designer.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">
                    <strong>Arguments from consciousness</strong>: the existence of
                    irreducible first-person experience is hard to fit into a purely material
                    universe.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">
                    <strong>Moral arguments</strong>: the existence of objective moral truths
                    is most naturally explained by a moral lawgiver.
                  </p>
                </div>
              </div>
            </div>

            {/* What natural theology cannot do */}
            <div className="bg-amber-50 rounded-lg p-8 border border-amber-200">
              <div className="flex items-start gap-3 mb-3">
                <AlertTriangle className="w-7 h-7 text-amber-700 flex-shrink-0" />
                <h2 className="text-2xl font-bold text-amber-900">What Natural Theology Cannot Do</h2>
              </div>
              <p className="text-amber-900 leading-relaxed mb-3">
                Natural theology can take you to a Creator. It cannot, by itself, take you to
                the Trinity, the Incarnation, the Cross, the Eucharist, or the resurrection of
                the dead. Those belong to <em>revealed</em> theology &mdash; the truths God has
                personally disclosed through Israel and supremely in Christ.
              </p>
              <p className="text-amber-900 leading-relaxed">
                Natural theology builds the runway. Faith provides the flight.
              </p>
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* TAB 5: TWO ERRORS                                             */}
        {/* ============================================================ */}
        {activeTab === 'two-errors' && (
          <div className="space-y-8">
            {/* Intro */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Errors at Both Extremes
              </h2>
              <p className="text-gray-700 leading-relaxed">
                The Catholic position on faith and reason is often misunderstood because both
                of its denials have loud advocates. To grasp the Catholic view, it helps to see
                clearly what the Church <em>rejects</em> on either side.
              </p>
            </div>

            {/* Fideism */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-rose-400">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center">
                  <XCircle className="w-6 h-6 text-rose-700" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Error #1: Fideism</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Fideism</strong> is the view that faith stands entirely on its own,
                without need for reason &mdash; or even that reason is hostile to faith and
                must be silenced for faith to flourish. In its purest form, fideism says:
                &ldquo;don&apos;t think, just believe.&rdquo;
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Some Protestant strands have flirted with fideism (Tertullian&apos;s &ldquo;I
                believe because it is absurd&rdquo; is the misquoted slogan; Kierkegaard&apos;s
                &ldquo;leap of faith&rdquo; is sometimes read this way). Within the
                contemporary Christian world, varieties of <em>presuppositionalism</em> and
                anti-intellectualism have similar effects.
              </p>
              <div className="bg-rose-50 rounded-lg p-5 border border-rose-200 mb-4">
                <h3 className="font-semibold text-rose-900 mb-2">Why the Church rejects it:</h3>
                <ul className="list-disc pl-5 text-rose-900 space-y-1 text-sm">
                  <li>It contradicts Romans 1:20 and the witness of Scripture itself.</li>
                  <li>
                    It makes faith arbitrary &mdash; how would one decide between competing
                    revelations if reason had nothing to say?
                  </li>
                  <li>
                    It is self-defeating &mdash; the claim &ldquo;reason can&apos;t be
                    trusted&rdquo; is itself a claim of reason.
                  </li>
                  <li>
                    It makes the Christian intellectual tradition &mdash; the universities,
                    the doctors, the scientists &mdash; inexplicable.
                  </li>
                </ul>
              </div>
              <p className="text-sm text-gray-600">
                Vatican I&apos;s <em>Dei Filius</em> condemned fideism by name. The Magisterium
                has repeated the condemnation throughout the modern era.
              </p>
            </div>

            {/* Rationalism */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-sky-400">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center">
                  <XCircle className="w-6 h-6 text-sky-700" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Error #2: Rationalism</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Rationalism</strong> is the mirror error: the claim that human reason
                is the sole and sufficient source of truth, and that anything which cannot be
                derived from or verified by reason is to be discarded. In its hard form
                (associated with parts of the Enlightenment), it dismisses revelation as
                superstition.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Rationalism comes in two species:
              </p>
              <div className="space-y-3 mb-4">
                <div className="bg-sky-50 rounded-lg p-4 border border-sky-200">
                  <h3 className="font-semibold text-sky-900 mb-1">Classical rationalism</h3>
                  <p className="text-sky-900 text-sm">
                    Pure reason can in principle reach all truth. (Spinoza, parts of Leibniz,
                    much of 18th-century deism.)
                  </p>
                </div>
                <div className="bg-sky-50 rounded-lg p-4 border border-sky-200">
                  <h3 className="font-semibold text-sky-900 mb-1">Scientism</h3>
                  <p className="text-sky-900 text-sm">
                    The narrower modern claim: only what can be established by the empirical
                    sciences counts as knowledge. Everything else is &ldquo;just opinion.&rdquo;
                  </p>
                </div>
              </div>
              <div className="bg-sky-50 rounded-lg p-5 border border-sky-200">
                <h3 className="font-semibold text-sky-900 mb-2">Why the Church rejects it:</h3>
                <ul className="list-disc pl-5 text-sky-900 space-y-1 text-sm">
                  <li>
                    Reason itself shows its own limits &mdash; logic cannot prove logic, and
                    science cannot prove that only science gives knowledge (the claim is not
                    itself a scientific claim).
                  </li>
                  <li>
                    It cannot account for genuine human experience &mdash; love, beauty,
                    moral obligation, religious experience &mdash; without explaining them
                    away.
                  </li>
                  <li>
                    Historically, it has not delivered on its promise of unifying knowledge;
                    it has tended instead to fragment it.
                  </li>
                  <li>
                    It is, in the end, another form of credulity: an act of faith that
                    nothing exists beyond what reason can grasp.
                  </li>
                </ul>
              </div>
            </div>

            {/* The Catholic via media */}
            <div className="bg-emerald-50 rounded-lg p-8 border border-emerald-200">
              <div className="flex items-start gap-3 mb-4">
                <CheckCircle className="w-7 h-7 text-emerald-700 flex-shrink-0" />
                <h2 className="text-2xl font-bold text-emerald-900">
                  The Catholic <em>Via Media</em>
                </h2>
              </div>
              <p className="text-emerald-900 leading-relaxed mb-3">
                Between fideism and rationalism, the Catholic position holds: reason is real
                and trustworthy within its proper sphere; faith is reasonable, addressed to
                rational beings, and capable of dialogue with every honest discipline. Neither
                is to be exalted over the other; each must be allowed to do its own work.
              </p>
              <p className="text-emerald-900 leading-relaxed">
                This is not a clever compromise. It is the natural posture of someone who
                believes that <em>the same God</em> is the author of both the natural order
                and the order of grace.
              </p>
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* TAB 6: MODERN VOICES                                          */}
        {/* ============================================================ */}
        {activeTab === 'modern-voices' && (
          <div className="space-y-8">
            {/* Newman */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center">
                  <Compass className="w-6 h-6 text-rose-700" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">St. John Henry Newman (1801&ndash;1890)</h2>
                  <p className="text-sm text-gray-500"><em>The Idea of a University</em>; <em>Grammar of Assent</em>.</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Newman&apos;s <em>The Idea of a University</em> (1852) is the great modern
                argument for genuine theology as a university discipline alongside, and in
                conversation with, the empirical sciences. To exclude theology from the
                curriculum, Newman argues, is not neutrality but a positive metaphysical claim
                &mdash; namely, that the question of God is not worth asking.
              </p>
              <p className="text-gray-700 leading-relaxed">
                His <em>Grammar of Assent</em> (1870) is one of the most original Catholic
                treatments of how reasonable people actually come to firm convictions on
                matters that don&apos;t admit of strict demonstration &mdash; a category that
                includes most of life, including most of science.
              </p>
            </div>

            {/* JPII */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Crown className="w-6 h-6 text-amber-700" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">St. John Paul II (1920&ndash;2005)</h2>
                  <p className="text-sm text-gray-500">Philosopher-pope; <em>Fides et Ratio</em>.</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                JPII&apos;s 1998 encyclical <em>Fides et Ratio</em> is the most important
                modern magisterial document on this topic. Its central worry is not so much
                aggressive atheism as <em>weak reason</em> &mdash; a postmodern culture that
                has lost confidence in reason&apos;s ability to reach truth at all, and so has
                lost interest in the question of God along with everything else.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                JPII&apos;s answer is not to retreat into authority but to push reason back
                toward its full scope: metaphysical, moral, capable of contemplating ultimate
                questions.
              </p>
              <div className="bg-amber-50 rounded-lg p-5 border-l-4 border-amber-400">
                <p className="text-gray-700 italic mb-2">
                  &ldquo;Faith&apos;s encounter with different cultures has created something
                  new. When faith reaches a culture, it is the people themselves who become
                  the bearers of reason in their lives. Faith and reason walk together not as
                  adversaries but as companions.&rdquo;
                </p>
                <p className="text-sm text-amber-800 font-semibold">
                  &mdash; <em>Fides et Ratio</em>, paraphrasing themes of §70&ndash;71
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed mt-4">
                JPII also issued the famous 1996 message to the Pontifical Academy of Sciences
                acknowledging that &ldquo;new knowledge has led to the recognition that the
                theory of evolution is no longer a mere hypothesis.&rdquo; See{' '}
                <Link href="/science/evolution" className="font-semibold text-amber-700 underline hover:text-amber-900">
                  Evolution &amp; Creation &rarr;
                </Link>
              </p>
            </div>

            {/* Benedict XVI */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                  <Brain className="w-6 h-6 text-indigo-700" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">Benedict XVI (1927&ndash;2022)</h2>
                  <p className="text-sm text-gray-500">The Regensburg Address (2006).</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                In a 2006 lecture at the University of Regensburg &mdash; instantly notorious
                for an unrelated quotation about Islam, but worth re-reading on its actual
                topic &mdash; Benedict offered a sustained argument that the de-coupling of
                faith from reason damages both. A faith without reason becomes violent;
                a reason without faith becomes narrow.
              </p>
              <div className="bg-indigo-50 rounded-lg p-5 border-l-4 border-indigo-400 mb-4">
                <p className="text-gray-700 italic mb-2">
                  &ldquo;Not to act in accordance with reason is contrary to the nature of
                  God&hellip; The encounter between the biblical message and Greek thought
                  did not happen by chance.&rdquo;
                </p>
                <p className="text-sm text-indigo-800 font-semibold">
                  &mdash; Benedict XVI, Regensburg Address, 12 September 2006
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Benedict&apos;s lifelong project &mdash; visible in <em>Introduction to
                Christianity</em>, <em>Truth and Tolerance</em>, and many essays &mdash; was
                to argue that Christianity is not <em>one</em> world religion among others, but
                a particular kind of religion in which the &ldquo;Logos&rdquo; (the Greek word
                for reason) is divine.
              </p>
            </div>

            {/* Francis */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-emerald-700" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">Pope Francis (b. 1936)</h2>
                  <p className="text-sm text-gray-500"><em>Laudato Si&apos;</em> (2015); <em>Lumen Fidei</em> (2013).</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Francis&apos; <em>Lumen Fidei</em> &mdash; co-written with Benedict XVI and
                officially issued in his first year &mdash; explicitly continues the JPII /
                Benedict line: &ldquo;Faith is not a light which scatters all our darkness, but
                a lamp which guides our steps in the night and suffices for the journey&rdquo;
                (§57).
              </p>
              <p className="text-gray-700 leading-relaxed">
                <em>Laudato Si&apos;</em> (2015), the encyclical on care for our common home,
                is also a sustained engagement with the natural sciences &mdash; climate
                science, ecology, biodiversity &mdash; from a position of confidence that
                faith and rigorous empirical work can speak to one another about the same
                world.
              </p>
            </div>

            {/* Response to New Atheism */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-purple-700" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">A Note on the New Atheism</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                The 2000s saw a wave of anti-religious bestsellers &mdash; Dawkins, Hitchens,
                Harris, Dennett &mdash; arguing that religion is irrational and incompatible
                with science. Catholic and other Christian thinkers responded in detail.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Among the most substantial replies:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>
                  <strong>David Bentley Hart</strong>, <em>The Experience of God</em> (2013)
                  &mdash; argues that the New Atheists are largely attacking a deity (a
                  cosmic engineer) that classical theism never affirmed.
                </li>
                <li>
                  <strong>Edward Feser</strong>, <em>The Last Superstition</em> (2008) &mdash;
                  a vigorous Thomist defense.
                </li>
                <li>
                  <strong>John Lennox</strong> (Oxford mathematician), <em>God&apos;s
                  Undertaker: Has Science Buried God?</em> (2009) &mdash; addresses the
                  scientific claims directly.
                </li>
                <li>
                  <strong>Alister McGrath</strong>, <em>The Dawkins Delusion?</em> (2007).
                </li>
                <li>
                  <strong>Bishop Robert Barron</strong>&apos;s extensive online ministry,
                  much of it dedicated to making the Catholic intellectual tradition
                  accessible to a popular audience.
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                The New Atheist moment has largely passed. The deeper problem JPII identified
                &mdash; a culture that has stopped asking the big questions at all &mdash;
                remains.
              </p>
            </div>

            {/* Cross-links */}
            <div className="bg-indigo-50 border border-indigo-200 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-indigo-900 mb-3 flex items-center gap-2">
                <ArrowRight className="w-5 h-5" />
                Continue Reading
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <Link
                  href="/science/catholic-scientists"
                  className="bg-white rounded-lg p-4 border border-indigo-200 hover:border-indigo-400 hover:shadow transition-all"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <Users className="w-4 h-4 text-indigo-700" />
                    <span className="font-semibold text-gray-800">Catholic Scientists</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    The biographies &mdash; faith and reason in working laboratories.
                  </p>
                </Link>
                <Link
                  href="/science/galileo"
                  className="bg-white rounded-lg p-4 border border-indigo-200 hover:border-indigo-400 hover:shadow transition-all"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <Telescope className="w-4 h-4 text-indigo-700" />
                    <span className="font-semibold text-gray-800">The Galileo Affair</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    The hard case &mdash; how the Church handled (and mishandled) it.
                  </p>
                </Link>
                <Link
                  href="/science/evolution"
                  className="bg-white rounded-lg p-4 border border-indigo-200 hover:border-indigo-400 hover:shadow transition-all"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <Award className="w-4 h-4 text-indigo-700" />
                    <span className="font-semibold text-gray-800">Evolution &amp; Creation</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Faith and reason on the origins of life and the human person.
                  </p>
                </Link>
                <Link
                  href="/science/church-and-science"
                  className="bg-white rounded-lg p-4 border border-indigo-200 hover:border-indigo-400 hover:shadow transition-all"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <Eye className="w-4 h-4 text-indigo-700" />
                    <span className="font-semibold text-gray-800">Church &amp; Science Index</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Back to the section overview and full list of articles.
                  </p>
                </Link>
              </div>
            </div>

            {/* Sources */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-700 mb-3 uppercase tracking-wide text-sm">
                Sources &amp; Further Reading
              </h3>
              <ul className="text-sm text-gray-600 space-y-1.5 list-disc pl-5">
                <li>St. John Paul II, <em>Fides et Ratio</em> (1998)</li>
                <li>Vatican I, <em>Dei Filius</em> (1870), Chapter 4</li>
                <li>Vatican II, <em>Gaudium et Spes</em> §36, §59 (1965)</li>
                <li><em>Catechism of the Catholic Church</em>, §§31&ndash;38, §159</li>
                <li>St. Thomas Aquinas, <em>Summa Theologiae</em> I, Q. 1&ndash;2; <em>Summa Contra Gentiles</em> I.3&ndash;9</li>
                <li>St. Augustine, <em>The Literal Meaning of Genesis</em> (esp. Book I, Ch. 19)</li>
                <li>St. Anselm, <em>Proslogion</em>; <em>Cur Deus Homo</em></li>
                <li>St. John Henry Newman, <em>The Idea of a University</em>; <em>Grammar of Assent</em></li>
                <li>Benedict XVI, Regensburg Address (12 September 2006)</li>
                <li>Pope Leo XIII, <em>Aeterni Patris</em> (1879)</li>
                <li>Étienne Gilson, <em>The Spirit of Medieval Philosophy</em></li>
                <li>Edward Feser, <em>Aquinas: A Beginner&apos;s Guide</em></li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
