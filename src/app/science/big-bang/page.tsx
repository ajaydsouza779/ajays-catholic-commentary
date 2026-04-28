'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Atom,
  Telescope,
  User,
  Quote,
  ScrollText,
  Sparkles,
  Crown,
  AlertTriangle,
  CheckCircle,
  Clock,
  Star,
  HelpCircle,
  Lightbulb,
  Cross,
  ArrowRight,
  Globe,
  Calendar,
  Award,
  BookOpen,
  Microscope,
  Eye,
  Shield,
  Infinity as InfinityIcon,
} from 'lucide-react'

type TabKey =
  | 'lemaitre'
  | 'science'
  | 'pius-xii'
  | 'creation'
  | 'fine-tuning'
  | 'open-questions'

export default function BigBangPage() {
  const [activeTab, setActiveTab] = useState<TabKey>('lemaitre')

  const tabs: { key: TabKey; label: string }[] = [
    { key: 'lemaitre', label: 'Lemaître’s Discovery' },
    { key: 'science', label: 'The Science Today' },
    { key: 'pius-xii', label: 'Pius XII & The Pope' },
    { key: 'creation', label: 'Creation ex Nihilo' },
    { key: 'fine-tuning', label: 'Fine-Tuning' },
    { key: 'open-questions', label: 'Open Questions' },
  ]

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Big Bang &amp; Cosmology</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The theory that the universe began from an unimaginably hot, dense state roughly
            13.8 billion years ago was not invented by an atheist looking to dethrone God. It
            was proposed in 1927 by a Belgian Catholic priest, Fr. Georges Lema&icirc;tre, who
            insisted to the end of his life that science and faith are distinct paths to the
            truth &mdash; neither to be confused, neither to be dismissed.
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
        {/* TAB 1: LEMAITRE'S DISCOVERY                                   */}
        {/* ============================================================ */}
        {activeTab === 'lemaitre' && (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-amber-400">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Cross className="w-8 h-8 text-amber-700" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">
                    Fr. Georges Lema&icirc;tre (1894&ndash;1966)
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Catholic priest. Mathematician. Cosmologist. World War I artillery
                    officer. Professor at the University of Louvain. Member, then president, of
                    the Pontifical Academy of Sciences. Father of the Big Bang theory.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">A Quick Sketch of His Life</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Lema&icirc;tre was born in Charleroi, Belgium, in 1894 into a devout
                  Catholic family. He entered a Jesuit school as a boy and decided very early
                  that he wanted to be both a priest and a scientist. The First World War
                  interrupted his studies; he served as an artillery officer in the Belgian
                  army and was decorated with the Croix de Guerre.
                </p>
                <p>
                  After the war he completed doctorates in mathematics at Louvain (1920) and
                  later at MIT (1927), studied at Cambridge under Sir Arthur Eddington, and
                  was ordained a priest of the Archdiocese of Mechelen-Brussels in 1923. He
                  spent most of his career as professor of physics at the Catholic University
                  of Louvain.
                </p>
                <p>
                  He wore the Roman collar to his physics lectures. He celebrated daily Mass.
                  He was, by every account of those who knew him, a serene and good-humored
                  man, equally at home in a chapel and at a chalkboard.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                  <ScrollText className="w-6 h-6 text-indigo-700" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">The 1927 Paper</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                In 1927, Lema&icirc;tre published a paper in the obscure{' '}
                <em>Annales de la Soci&eacute;t&eacute; Scientifique de Bruxelles</em> with
                a long French title that translates as &ldquo;A homogeneous universe of
                constant mass and increasing radius accounting for the radial velocity of
                extragalactic nebulae.&rdquo; Buried in the technical equations was an
                astonishing claim: <strong>the universe is expanding</strong>, and the
                expansion can be measured.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Lema&icirc;tre had derived the result independently of Einstein&apos;s general
                relativity solutions, and from it he extracted what is now called{' '}
                <strong>Hubble&apos;s law</strong>: distant galaxies recede from us at speeds
                proportional to their distance. He even calculated a value for what would
                become the Hubble constant &mdash; two years before Edwin Hubble&apos;s famous
                1929 observational paper.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Because the journal was Belgian and the paper in French, the result went
                largely unnoticed in the English-speaking world. It was Eddington who
                rescued it and arranged for an English translation in 1931.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-rose-700" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Einstein&apos;s Famous Misjudgment</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                In 1927, Lema&icirc;tre cornered Einstein at the Solvay Conference in
                Brussels. Einstein listened, but dismissed the work with a famous
                phrase:
              </p>
              <div className="bg-rose-50 rounded-lg p-5 border-l-4 border-rose-400 mb-4">
                <p className="text-gray-700 italic mb-2">
                  &ldquo;Your calculations are correct, but your physics is
                  abominable.&rdquo;
                </p>
                <p className="text-sm text-rose-800 font-semibold">
                  &mdash; Albert Einstein to Lema&icirc;tre, Solvay 1927
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Einstein wanted a static, eternal universe. He had even introduced an arbitrary
                &ldquo;cosmological constant&rdquo; into his equations specifically to keep
                the universe from expanding or contracting. The idea of a universe with a
                <em> beginning</em> seemed to him &mdash; for both aesthetic and metaphysical
                reasons &mdash; an inelegant intrusion of theology into physics.
              </p>
              <p className="text-gray-700 leading-relaxed">
                By 1933, after Hubble&apos;s observations and a second meeting with
                Lema&icirc;tre at Mount Wilson Observatory in California, Einstein
                publicly recanted: &ldquo;This is the most beautiful and satisfactory
                explanation of creation to which I have ever listened.&rdquo; Einstein later
                called the cosmological constant his &ldquo;greatest blunder.&rdquo;
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Atom className="w-6 h-6 text-purple-700" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">The &ldquo;Primeval Atom&rdquo;</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                In a 1931 paper in <em>Nature</em>, Lema&icirc;tre took the next step. If the
                universe is expanding, then in the past it must have been smaller, denser,
                hotter. Run the film backwards far enough and you reach an initial moment of
                extreme density &mdash; a state Lema&icirc;tre poetically called{' '}
                <strong>l&apos;atome primitif</strong>, the &ldquo;primeval atom.&rdquo;
              </p>
              <div className="bg-purple-50 rounded-lg p-5 border-l-4 border-purple-400">
                <p className="text-gray-700 italic mb-2">
                  &ldquo;The evolution of the world can be compared to a display of
                  fireworks that has just ended: some few red wisps, ashes and smoke.
                  Standing on a cooled cinder, we see the slow fading of the suns, and we
                  try to recall the vanished brilliance of the origin of the
                  worlds.&rdquo;
                </p>
                <p className="text-sm text-purple-800 font-semibold">
                  &mdash; Lema&icirc;tre, <em>The Primeval Atom</em> (1946)
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Quote className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">
                  &ldquo;Big Bang&rdquo; &mdash; A Mocking Nickname That Stuck
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                The phrase &ldquo;Big Bang&rdquo; was coined in a 1949 BBC radio broadcast
                by the British astronomer <strong>Sir Fred Hoyle</strong>, who detested the
                theory and championed a rival &ldquo;steady-state&rdquo; model. Hoyle meant
                the term as ridicule: a religious-sounding singular event, suspiciously
                close to Genesis. The name stuck. Hoyle&apos;s steady-state model died with
                the discovery of the cosmic microwave background in 1965. Lema&icirc;tre,
                who lived just long enough to learn of that discovery from his hospital
                bed, was vindicated.
              </p>
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* TAB 2: THE SCIENCE TODAY                                      */}
        {/* ============================================================ */}
        {activeTab === 'science' && (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                What the Big Bang Theory Actually Says
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Big Bang is not, as the cartoon version sometimes implies, an
                explosion <em>in</em> empty space. It is the expansion <em>of</em> space
                itself, beginning from an early state in which all of what is now the
                observable universe was packed into an enormously dense, hot region.
              </p>
              <p className="text-gray-700 leading-relaxed">
                As space expanded, matter and radiation thinned and cooled. Subatomic
                particles condensed into protons and neutrons, then into hydrogen and
                helium nuclei, then (after about 380,000 years) into neutral atoms.
                Eventually gravity gathered matter into stars, galaxies, planets &mdash;
                and us.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                The Three Pillars of Evidence
              </h2>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-400 pl-5">
                  <div className="flex items-center gap-3 mb-2">
                    <Telescope className="w-6 h-6 text-blue-700" />
                    <h3 className="text-xl font-semibold text-gray-800">
                      1. Cosmic Expansion (Hubble, 1929)
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Edwin Hubble showed that distant galaxies recede from us, and the
                    farther away they are, the faster they recede. Their light is shifted
                    toward the red end of the spectrum &mdash; the cosmic
                    &ldquo;redshift&rdquo; &mdash; in proportion to distance. The universe
                    is not static. It is expanding. Run the film backwards and there must
                    have been a beginning to the expansion.
                  </p>
                </div>

                <div className="border-l-4 border-amber-400 pl-5">
                  <div className="flex items-center gap-3 mb-2">
                    <Microscope className="w-6 h-6 text-amber-700" />
                    <h3 className="text-xl font-semibold text-gray-800">
                      2. The Cosmic Microwave Background (Penzias &amp; Wilson, 1965)
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-2">
                    Two Bell Labs radio engineers, trying to debug a noisy antenna, kept
                    picking up a faint hum coming from every direction in the sky. The
                    &ldquo;noise&rdquo; turned out to be the predicted afterglow of a
                    once-hot, dense early universe &mdash; light released about 380,000
                    years after the Big Bang, now redshifted into microwaves at a chilly
                    2.7 Kelvin.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    The CMB is the smoking gun. It killed the steady-state model overnight.
                    Subsequent satellite missions &mdash; COBE (1992, Nobel Prize), WMAP,
                    Planck &mdash; have mapped tiny temperature variations in the CMB with
                    extraordinary precision and found them in beautiful agreement with the
                    Big Bang model.
                  </p>
                </div>

                <div className="border-l-4 border-emerald-400 pl-5">
                  <div className="flex items-center gap-3 mb-2">
                    <Atom className="w-6 h-6 text-emerald-700" />
                    <h3 className="text-xl font-semibold text-gray-800">
                      3. Big Bang Nucleosynthesis (BBN)
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    In the first few minutes after the Big Bang, conditions were right for
                    nuclear reactions to fuse the lightest elements. The theory predicts
                    that the universe should be roughly 75% hydrogen, 25% helium, with
                    trace amounts of deuterium, lithium, and beryllium &mdash; numbers we
                    observe to remarkable accuracy in the oldest, most pristine gas clouds.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-7 h-7 text-amber-600" />
                <h2 className="text-2xl font-bold text-gray-800">A Brief Cosmic Timeline</h2>
              </div>
              <div className="space-y-2 text-sm">
                {[
                  { t: '0', e: 'The Big Bang. Time and space begin (in classical physics; quantum gravity may modify this).' },
                  { t: '10⁻⁴³ s', e: 'Planck epoch ends. Physics as we know it begins.' },
                  { t: '10⁻³⁶ s', e: 'Cosmic inflation: a fraction of a second of exponential expansion.' },
                  { t: '10⁻⁶ s', e: 'Quarks combine into protons and neutrons.' },
                  { t: '3 min', e: 'Big Bang Nucleosynthesis: hydrogen and helium nuclei form.' },
                  { t: '380,000 yr', e: 'Universe cools enough for neutral atoms; the CMB is released.' },
                  { t: '~150 Myr', e: 'First stars ignite (the &ldquo;cosmic dawn&rdquo;).' },
                  { t: '~1 Gyr', e: 'First galaxies form.' },
                  { t: '9.2 Gyr', e: 'Solar System forms (~4.6 billion years ago).' },
                  { t: '13.8 Gyr', e: 'Today.' },
                ].map((row) => (
                  <div key={row.t} className="flex items-start gap-4 py-2 border-b border-gray-100 last:border-0">
                    <div className="w-24 text-right">
                      <span className="font-mono text-sm font-semibold text-amber-700">{row.t}</span>
                    </div>
                    <p
                      className="text-gray-700 flex-1"
                      dangerouslySetInnerHTML={{ __html: row.e }}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-amber-50 rounded-lg p-8 border border-amber-200">
              <div className="flex items-start gap-3 mb-4">
                <AlertTriangle className="w-7 h-7 text-amber-700 flex-shrink-0" />
                <h2 className="text-2xl font-bold text-amber-900">
                  Common Misconceptions
                </h2>
              </div>
              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold text-amber-900 mb-1">
                    &ldquo;The Big Bang explains where everything came from.&rdquo;
                  </h3>
                  <p className="text-amber-900 text-sm">
                    No. The theory describes how the universe <em>evolved</em> from a very
                    hot, dense early state. It does not claim to explain why there was
                    anything at all. That is a different question.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-amber-900 mb-1">
                    &ldquo;The Big Bang was an explosion <em>in</em> space.&rdquo;
                  </h3>
                  <p className="text-amber-900 text-sm">
                    No. It was an expansion <em>of</em> space. There is no
                    &ldquo;outside&rdquo; that the universe expanded into.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-amber-900 mb-1">
                    &ldquo;The Big Bang is just a theory.&rdquo;
                  </h3>
                  <p className="text-amber-900 text-sm">
                    In ordinary English, &ldquo;just a theory&rdquo; means a guess. In
                    science, a theory is a unified explanatory framework supported by
                    observation. Big Bang cosmology has the same evidential standing as
                    plate tectonics or atomic theory.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* TAB 3: PIUS XII & THE POPE                                    */}
        {/* ============================================================ */}
        {activeTab === 'pius-xii' && (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Crown className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">
                  Pius XII&apos;s 1951 Address
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                On 22 November 1951, Pope Pius XII addressed the Pontifical Academy of
                Sciences with a speech titled <em>The Proofs for the Existence of God in
                the Light of Modern Natural Science</em>. In it, he spoke approvingly of
                the Big Bang theory, which had been gaining ground over the previous two
                decades. He came close to saying that the cosmological evidence for an
                expanding, finite-aged universe was a scientific confirmation of the
                doctrine of creation.
              </p>
              <div className="bg-amber-50 rounded-lg p-5 border-l-4 border-amber-400 mb-4">
                <p className="text-gray-700 italic mb-2">
                  &ldquo;It would seem that present-day science, with one sweep back
                  across the centuries, has succeeded in bearing witness to that
                  primordial &lsquo;Fiat lux&rsquo; uttered at the moment when, along with
                  matter, there burst forth from nothing a sea of light and radiation,
                  while the particles of the chemical elements split and formed into
                  millions of galaxies.&rdquo;
                </p>
                <p className="text-sm text-amber-800 font-semibold">
                  &mdash; Pius XII, 22 November 1951
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Catholic and secular newspapers picked up the speech as a triumphant
                claim that science had proven Genesis. Atheist commentators, predictably,
                were outraged. And in Belgium, Lema&icirc;tre was deeply uncomfortable.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-indigo-400">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-indigo-700" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">
                  Lema&icirc;tre&apos;s Quiet Pushback
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Lema&icirc;tre &mdash; the Catholic priest who proposed the theory in the
                first place &mdash; firmly believed that physics and theology must not be
                conflated. A scientific theory is provisional and might be revised
                tomorrow; the doctrine of creation is a metaphysical and theological
                truth that does not depend on any particular cosmological model. To tie
                the second to the first would be to put the Church in the position of
                hostage to the next scientific revision.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Through Cardinal Tisserant and other channels, Lema&icirc;tre quietly but
                firmly asked the Pope not to make such pronouncements again. To his
                great credit, Pius XII listened.
              </p>
              <div className="bg-indigo-50 rounded-lg p-5 border border-indigo-200 mb-4">
                <p className="text-gray-700 italic mb-2">
                  &ldquo;As far as I can see, such a theory remains entirely outside any
                  metaphysical or religious question. It leaves the materialist free to
                  deny any transcendental Being&hellip; For the believer, it removes any
                  attempt at familiarity with God&hellip; It is consonant with Isaiah
                  speaking of the hidden God, hidden even in the beginning of the
                  universe.&rdquo;
                </p>
                <p className="text-sm text-indigo-800 font-semibold">
                  &mdash; Lema&icirc;tre, in conversation
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed">
                When Pius XII addressed the International Astronomical Union in
                September 1952, he conspicuously did <em>not</em> repeat the 1951
                claims. The lesson was learned. The Magisterium has, ever since,
                respected the autonomy of the science.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Why This Episode Matters
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Lema&icirc;tre&apos;s instinct was right, and it represents a maturation
                in the Catholic engagement with science. The lesson:
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">
                    <strong>Don&apos;t baptize provisional science.</strong> A scientific
                    theory may be confirmed today and replaced tomorrow. The theology of
                    creation must rest on something deeper than the current best model.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">
                    <strong>Don&apos;t stake faith on a particular cosmology.</strong> The
                    same mistake was made (in reverse) at the time of Galileo. The
                    Church does not need to defend Aristotelian physics, Ptolemaic
                    astronomy, or the Big Bang.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">
                    <strong>Let science speak as science.</strong> If the data lead to a
                    universe with a beginning, that is interesting. If they lead
                    elsewhere, theology can absorb that, too &mdash; because the doctrine
                    of creation is not principally about the first moment.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-emerald-700" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Later Popes &amp; Cosmology</h2>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
                  <h3 className="font-semibold text-gray-800 mb-1">St. John Paul II (1981)</h3>
                  <p className="text-gray-700 text-sm">
                    Addressing the Pontifical Academy of Sciences: &ldquo;Any scientific
                    hypothesis on the origin of the world, such as the hypothesis of a
                    primitive atom from which the whole of the physical universe would
                    have derived, leaves open the problem concerning the universe&apos;s
                    beginning. Science cannot itself solve this question.&rdquo;
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
                  <h3 className="font-semibold text-gray-800 mb-1">Benedict XVI (2008)</h3>
                  <p className="text-gray-700 text-sm">
                    Addressing the Pontifical Academy: &ldquo;The Big Bang theory does
                    not contradict creation; on the contrary, it requires it.&rdquo;
                    (Paraphrase; he repeatedly emphasized that the universe speaks of an
                    underlying intelligibility.)
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
                  <h3 className="font-semibold text-gray-800 mb-1">Pope Francis (2014)</h3>
                  <p className="text-gray-700 text-sm">
                    To the Pontifical Academy of Sciences: &ldquo;The Big Bang theory,
                    which is proposed today as the origin of the world, does not
                    contradict the divine act of creating, but rather requires it.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* TAB 4: CREATION EX NIHILO                                     */}
        {/* ============================================================ */}
        {activeTab === 'creation' && (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Creation <em>ex Nihilo</em>: What It Actually Means
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Catholic doctrine of creation <em>ex nihilo</em> &mdash; &ldquo;out of
                nothing&rdquo; &mdash; is one of the most-misunderstood pieces of
                Christian theology. It is <strong>not</strong> the claim that there was a
                first moment of time and that God lit the fuse. It is something deeper.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Creation <em>ex nihilo</em> is the metaphysical claim that{' '}
                <strong>everything other than God depends, at every moment of its
                existence, on God&apos;s ongoing creative act</strong>. There is no
                pre-existing &ldquo;stuff&rdquo; from which God shaped the world; the very
                being of every creature is a participation in God&apos;s gift.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Whether the universe had a temporal beginning, or has existed for all
                time, or even (in some speculative scenarios) has cyclical or eternal
                inflationary structure &mdash; none of that touches the doctrine. A
                universe with no first moment would still be <em>created</em>, in the
                Catholic sense, because its being would still be sustained by God.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-amber-400">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">
                  Aquinas: Creation Doesn&apos;t Require a Beginning
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                In <em>Summa Theologiae</em> I, Q. 46, St. Thomas Aquinas considers
                whether the eternity of the world &mdash; the idea that the universe has
                always existed &mdash; can be disproved by reason alone. His answer
                surprises many people.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Aquinas says no.</strong> The temporal beginning of the universe
                is known to Christians only through revelation (Genesis), not through
                philosophy. Reason cannot conclusively prove that the world had a
                first moment. Aristotle, after all, thought it was eternal &mdash; and
                Aquinas considers that view a respectable philosophical position, just
                a wrong one.
              </p>
              <div className="bg-amber-50 rounded-lg p-5 border-l-4 border-amber-400 mb-4">
                <p className="text-gray-700 italic mb-2">
                  &ldquo;That the world had a beginning is an object of faith, not of
                  demonstration or science. And it is useful to consider this, lest
                  anyone, presuming to demonstrate what is of faith, should bring
                  forward reasons that are not cogent &mdash; furnishing material for
                  unbelievers to laugh at.&rdquo;
                </p>
                <p className="text-sm text-amber-800 font-semibold">
                  &mdash; Aquinas, <em>Summa Theologiae</em> I, Q. 46, Art. 2
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed">
                In other words: even if (counterfactually) the universe had no temporal
                beginning, it would still be created by God. The Big Bang is welcome
                evidence for what Genesis already declared, but the <em>doctrine</em> of
                creation does not depend on it.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Why This Distinction Matters
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Lightbulb className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">
                    <strong>Against atheists who say:</strong> &ldquo;If we discover the
                    universe has no first moment (e.g., in some quantum gravity model),
                    the doctrine of creation is refuted.&rdquo; &mdash; <em>No.</em> The
                    doctrine never depended on it.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Lightbulb className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">
                    <strong>Against zealous apologists who say:</strong> &ldquo;The Big
                    Bang proves Genesis.&rdquo; &mdash; Be careful. Cosmology supports a
                    finite-aged universe; that is consonant with the Christian intuition
                    but does not <em>prove</em> creation in the theological sense, which
                    is about ontological dependence rather than temporal start.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Lightbulb className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">
                    <strong>Against pantheists and materialists who say:</strong> &ldquo;The
                    universe is self-sustaining.&rdquo; &mdash; The doctrine of creation
                    insists that no contingent being is its own ground; the question of
                    why anything exists at all (the &ldquo;Leibniz question&rdquo;)
                    cannot be answered from inside the universe.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-indigo-50 rounded-lg p-8 border border-indigo-200">
              <div className="flex items-center gap-3 mb-3">
                <BookOpen className="w-7 h-7 text-indigo-700" />
                <h2 className="text-2xl font-bold text-indigo-900">From the Catechism</h2>
              </div>
              <div className="space-y-4 text-indigo-900 leading-relaxed">
                <p>
                  <strong>CCC 296:</strong> &ldquo;We believe that God needs no pre-existent
                  thing or any help in order to create&hellip; God creates freely
                  &lsquo;out of nothing&rsquo;.&rdquo;
                </p>
                <p>
                  <strong>CCC 301:</strong> &ldquo;With creation, God does not abandon his
                  creatures to themselves. He not only gives them being and existence,
                  but also, and at every moment, upholds and sustains them in being,
                  enables them to act and brings them to their final end.&rdquo;
                </p>
                <p>
                  <strong>CCC 283:</strong> &ldquo;The question about the origins of the
                  world and of man has been the object of many scientific studies which
                  have splendidly enriched our knowledge&hellip; These discoveries invite
                  us to even greater admiration for the greatness of the Creator.&rdquo;
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* TAB 5: FINE-TUNING                                            */}
        {/* ============================================================ */}
        {activeTab === 'fine-tuning' && (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                The Fine-Tuning Problem
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Modern physics has uncovered an unexpected fact about our universe:{' '}
                <strong>it sits on a knife&apos;s edge for life.</strong> The
                fundamental constants of nature &mdash; the strength of gravity, the
                ratio of electron to proton mass, the cosmological constant, the
                strength of the strong and weak nuclear forces &mdash; have values that
                fall in extraordinarily narrow ranges, and if any of them were
                slightly different, no stars, no chemistry, no life would exist.
              </p>
              <p className="text-gray-700 leading-relaxed">
                This is not a theological claim. It is an observation made by
                cosmologists and theoretical physicists, many of them atheists. The
                question is what to make of it.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <Star className="w-7 h-7 text-amber-600" />
                <h2 className="text-2xl font-bold text-gray-800">Some Striking Examples</h2>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
                  <h3 className="font-semibold text-gray-800 mb-1">
                    The cosmological constant (&Lambda;)
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Naive quantum field theory predicts a value 10<sup>120</sup> times
                    larger than what we observe. If it were even slightly larger, the
                    universe would have flown apart before galaxies could form.
                    Physicists openly call this &ldquo;the worst prediction in
                    physics.&rdquo;
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
                  <h3 className="font-semibold text-gray-800 mb-1">
                    The strong nuclear force
                  </h3>
                  <p className="text-gray-700 text-sm">
                    A 2% increase and protons could not form, leaving a hydrogen-only
                    universe. A 5% decrease and the deuteron is unstable, halting
                    stellar fusion.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
                  <h3 className="font-semibold text-gray-800 mb-1">
                    The matter&ndash;antimatter asymmetry
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Roughly one extra matter particle per billion in the early universe
                    is what saved any matter at all from complete annihilation.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
                  <h3 className="font-semibold text-gray-800 mb-1">
                    The Hoyle resonance
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Carbon (and therefore us) only forms inside stars because of an
                    energy resonance in the carbon-12 nucleus that Fred Hoyle
                    famously predicted on anthropic grounds &mdash; before it was
                    observed.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Three Ways to Make Sense of This
              </h2>
              <div className="space-y-4">
                <div className="border-l-4 border-rose-400 pl-5">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    1. Coincidence
                  </h3>
                  <p className="text-gray-700">
                    The constants just happen to take the values they do. The trouble:
                    the precision required is so extreme that &ldquo;coincidence&rdquo;
                    starts to look indistinguishable from a miracle.
                  </p>
                </div>
                <div className="border-l-4 border-sky-400 pl-5">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    2. Multiverse
                  </h3>
                  <p className="text-gray-700">
                    Maybe ours is one of an enormous (perhaps infinite) ensemble of
                    universes with different physical constants. We observe a
                    finely-tuned one because we have to: the others are sterile and have
                    no observers. This is the favored answer in much contemporary
                    cosmology &mdash; though many physicists object that the multiverse
                    is itself an article of faith with no empirical handle, and others
                    note that even an infinite multiverse needs a fine-tuned generator.
                  </p>
                </div>
                <div className="border-l-4 border-emerald-400 pl-5">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    3. Design
                  </h3>
                  <p className="text-gray-700">
                    The fine-tuning is what you would expect if a Mind chose the
                    constants to make a universe in which intelligent life could arise.
                    This is not a &ldquo;God of the gaps&rdquo; argument; it is an
                    inference to the best explanation, parallel to the way archaeologists
                    infer intelligent agency behind structured artifacts.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Eye className="w-6 h-6 text-purple-700" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">
                  The Anthropic Principle
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                The <strong>weak anthropic principle</strong> says: of course the
                universe is compatible with our existence, otherwise we would not be
                here to ask. This is just observation selection.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The <strong>strong anthropic principle</strong> says something more: the
                universe must be such as to admit observers within it. Some physicists
                read this metaphysically (verging on theism); others as a constraint
                that any acceptable theory must satisfy.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Catholic thought has generally been comfortable with both formulations
                &mdash; not as proofs of God, but as part of a cumulative case that the
                universe is more than a brute fact.
              </p>
            </div>

            <div className="bg-amber-50 rounded-lg p-8 border-l-4 border-amber-400">
              <div className="flex items-start gap-4">
                <Quote className="w-10 h-10 text-amber-600 flex-shrink-0" />
                <div>
                  <p className="text-lg text-gray-800 italic leading-relaxed mb-3">
                    &ldquo;A common-sense interpretation of the facts suggests that a
                    superintellect has monkeyed with physics, as well as with chemistry
                    and biology, and that there are no blind forces worth speaking about
                    in nature. The numbers one calculates from the facts seem to me so
                    overwhelming as to put this conclusion almost beyond
                    question.&rdquo;
                  </p>
                  <p className="text-sm text-amber-800 font-semibold">
                    &mdash; Sir Fred Hoyle (the same Hoyle who coined &ldquo;Big
                    Bang&rdquo; in mockery), 1981
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* TAB 6: OPEN QUESTIONS                                         */}
        {/* ============================================================ */}
        {activeTab === 'open-questions' && (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                What Cosmology Cannot Tell Us
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Big Bang model is one of the most successful theories in physics. It
                also has limits, and it is intellectually honest to acknowledge them.
                Several questions either lie at or beyond the frontier of current
                cosmology &mdash; and a few are, in principle, beyond the reach of
                science altogether.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-purple-700" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">&ldquo;What Came Before the Big Bang?&rdquo;</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                The classical Big Bang model says: the question may not be
                well-formed. Time itself begins at the Big Bang in classical general
                relativity, so &ldquo;before the Big Bang&rdquo; is like asking
                &ldquo;what is north of the North Pole?&rdquo;
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                But classical general relativity is known to break down at the
                singularity. A complete theory of quantum gravity &mdash; we don&apos;t
                yet have one &mdash; might give a different picture: a quantum
                fluctuation, a cyclic bounce, eternal inflation, a string-theoretic
                landscape. None of these are currently observable. They are
                mathematical possibilities being explored.
              </p>
              <p className="text-gray-700 leading-relaxed">
                For a Catholic, the question is less urgent than it sounds. As we saw
                in the previous tab, the doctrine of creation does not depend on the
                universe having a first moment. Whatever cosmology eventually settles
                on, the deeper question of <em>why anything exists at all</em> remains.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                  <InfinityIcon className="w-6 h-6 text-indigo-700" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">The Multiverse</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Several speculative theories &mdash; eternal inflation, the
                string-theoretic landscape, many-worlds quantum mechanics &mdash;
                suggest our observable universe might be one among many. The status of
                these proposals varies widely: some are extrapolations of well-tested
                physics, others are mathematical conjectures with no empirical contact.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Catholic thinkers have not been doctrinally exercised by the multiverse.
                If God can create one universe, He can create many. A multiverse is
                still <em>created</em>; the metaphysical question of being is no
                different in kind. What Catholics push back on is the use of the
                multiverse as a rhetorical eraser of the fine-tuning problem &mdash; a
                move that explains too much by assuming too much.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-amber-400">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <HelpCircle className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">
                  &ldquo;Why Is There Something Rather Than Nothing?&rdquo;
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Leibniz&apos;s great question. It is, by its very form, not a scientific
                question, because any scientific answer would have to invoke
                <em> something</em> (a law, a field, a quantum vacuum) and the question
                would then bounce: why <em>that</em>?
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Stephen Hawking and Lawrence Krauss have argued in popular books that
                modern physics dissolves the question, because a quantum vacuum can
                fluctuate into existence &ldquo;from nothing.&rdquo; Catholic
                philosophers (and many of their atheist colleagues) have pointed out
                that a quantum vacuum is not <em>nothing</em>; it is a richly structured
                physical state with laws, symmetries, and energies. Calling it
                &ldquo;nothing&rdquo; is a category error.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The ancient question is still standing. The Catholic answer is the
                ancient one: <em>everything that exists, exists because God shares
                being with it</em>. That answer is not in tension with anything physics
                says. It is asking a different question.
              </p>
            </div>

            <div className="bg-emerald-50 rounded-lg p-8 border border-emerald-200">
              <div className="flex items-start gap-3 mb-3">
                <Sparkles className="w-7 h-7 text-emerald-700 flex-shrink-0" />
                <h2 className="text-2xl font-bold text-emerald-900">
                  Where That Leaves Us
                </h2>
              </div>
              <p className="text-emerald-900 leading-relaxed mb-3">
                Big Bang cosmology has given us the most beautiful and detailed
                description of the universe&apos;s history that humans have ever
                possessed. It is a triumph of human reason, made possible by the
                patient labor of (among many others) a Belgian priest who saw no
                conflict between the Mass he celebrated each morning and the equations
                he wrote each afternoon.
              </p>
              <p className="text-emerald-900 leading-relaxed">
                It has also revealed how much remains beyond the reach of
                cosmology &mdash; questions of being, meaning, purpose, and ultimate
                origin that science by its very method does not pretend to address.
                Faith and reason, on the Catholic view, fill in different parts of the
                same picture.
              </p>
            </div>

            <div className="bg-indigo-50 border border-indigo-200 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-indigo-900 mb-3 flex items-center gap-2">
                <ArrowRight className="w-5 h-5" />
                Continue Reading
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <Link
                  href="/science/faith-and-reason"
                  className="bg-white rounded-lg p-4 border border-indigo-200 hover:border-indigo-400 hover:shadow transition-all"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <Lightbulb className="w-4 h-4 text-indigo-700" />
                    <span className="font-semibold text-gray-800">Faith &amp; Reason</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    The Catholic framework that lets a priest write cosmology equations.
                  </p>
                </Link>
                <Link
                  href="/science/catholic-scientists"
                  className="bg-white rounded-lg p-4 border border-indigo-200 hover:border-indigo-400 hover:shadow transition-all"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <Award className="w-4 h-4 text-indigo-700" />
                    <span className="font-semibold text-gray-800">Catholic Scientists</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Lema&icirc;tre is one of dozens; a roll call of priest-physicists.
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
                    The cautionary tale Lema&icirc;tre had in mind when he asked Pius XII
                    to slow down.
                  </p>
                </Link>
                <Link
                  href="/science/church-and-science"
                  className="bg-white rounded-lg p-4 border border-indigo-200 hover:border-indigo-400 hover:shadow transition-all"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <Globe className="w-4 h-4 text-indigo-700" />
                    <span className="font-semibold text-gray-800">Church &amp; Science Index</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Back to the section overview and full list of articles.
                  </p>
                </Link>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-700 mb-3 uppercase tracking-wide text-sm">
                Sources &amp; Further Reading
              </h3>
              <ul className="text-sm text-gray-600 space-y-1.5 list-disc pl-5">
                <li>
                  Lema&icirc;tre, &ldquo;Un univers homog&egrave;ne de masse constante et
                  de rayon croissant&rdquo; (1927)
                </li>
                <li>Lema&icirc;tre, <em>The Primeval Atom: An Essay on Cosmogony</em> (1946)</li>
                <li>Pius XII, address to the Pontifical Academy of Sciences (22 Nov 1951)</li>
                <li>St. John Paul II, address to the Pontifical Academy (10 Nov 1979)</li>
                <li>Aquinas, <em>Summa Theologiae</em> I, Q. 46 (on the eternity of the world)</li>
                <li>
                  <em>Catechism of the Catholic Church</em>, §§279&ndash;301 (creation)
                </li>
                <li>
                  Stephen Hawking &amp; Roger Penrose, <em>The Nature of Space and Time</em>{' '}
                  (1996)
                </li>
                <li>
                  John Barrow &amp; Frank Tipler, <em>The Anthropic Cosmological Principle</em>{' '}
                  (1986)
                </li>
                <li>
                  Robert Spitzer SJ, <em>New Proofs for the Existence of God: Contributions of
                  Contemporary Physics and Philosophy</em> (2010)
                </li>
                <li>
                  William E. Carroll, &ldquo;Aquinas and the Big Bang,&rdquo; <em>First Things</em>{' '}
                  (Nov 1999)
                </li>
                <li>
                  Helge Kragh, <em>Cosmology and Controversy: The Historical Development of
                  Two Theories of the Universe</em> (1996)
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
