'use client'

import { useState } from 'react'
import {
  GraduationCap,
  Atom,
  Telescope,
  Microscope,
  FlaskConical,
  Globe,
  User,
  BookOpen,
  Landmark,
  Church,
  Star,
  Brain,
  Dna,
  Zap,
  Mountain,
  Award,
  Cross,
  Calendar,
  Lightbulb,
  Users,
  Crown,
  MapPin,
} from 'lucide-react'

type TabId = 'overview' | 'priest-scientists' | 'lay-scientists' | 'jesuits' | 'medieval' | 'pontifical-academy'

const tabs: { id: TabId; label: string }[] = [
  { id: 'overview', label: 'Overview' },
  { id: 'priest-scientists', label: 'Priest-Scientists' },
  { id: 'lay-scientists', label: 'Catholic Lay Scientists' },
  { id: 'jesuits', label: 'The Jesuits & Science' },
  { id: 'medieval', label: 'Medieval Catholic Science' },
  { id: 'pontifical-academy', label: 'Pontifical Academy of Sciences' },
]

export default function CatholicScientistsPage() {
  const [activeTab, setActiveTab] = useState<TabId>('overview')

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Catholic Scientists
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From the founders of genetics and the Big Bang theory to the creators of the university
            system itself, Catholic priests, religious, and laypersons have shaped virtually every
            branch of modern science. Their faith did not hinder their discoveries &mdash; it
            inspired them.
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
            {/* Introduction */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Church: History&rsquo;s Greatest Patron of Science</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The popular myth of a &ldquo;war between science and religion&rdquo; collapses under
                the weight of historical evidence. The Catholic Church is, by any objective measure,
                one of the single greatest institutional patrons of scientific inquiry in the history
                of Western civilization. The medieval university system &mdash; the very institution
                that made modern science possible &mdash; was created, funded, and protected by the
                Church. Catholic clergy and religious have made foundational contributions to physics,
                astronomy, genetics, geology, chemistry, mathematics, and biology. Catholic laypersons
                have won Nobel Prizes in every scientific discipline.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                This is not a matter of cherry-picking a few convenient examples. The sheer volume
                of Catholic scientific achievement is staggering. The Jesuits alone have 35 lunar
                craters named after their members. A Catholic priest proposed the Big Bang theory.
                An Augustinian friar founded the science of genetics. The calendar the modern world
                uses was designed by a Jesuit mathematician. The father of modern geology was a
                bishop. The list goes on and on.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Far from being an obstacle to scientific progress, the Catholic intellectual tradition
                &mdash; with its emphasis on the rationality of the created order, the goodness of the
                material world, and the duty of the human intellect to explore God&rsquo;s creation &mdash;
                provided the philosophical foundations that made the Scientific Revolution possible in
                Christian Europe rather than elsewhere.
              </p>
            </div>

            {/* Key Statistics */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Catholic Science by the Numbers</h2>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <div className="bg-amber-50 rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold text-amber-800 mb-2">35</div>
                  <p className="text-amber-700 font-medium">Lunar craters named after Jesuit scientists</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold text-blue-800 mb-2">~1088</div>
                  <p className="text-blue-700 font-medium">Year the Church founded the first university (Bologna)</p>
                </div>
                <div className="bg-green-50 rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold text-green-800 mb-2">1582</div>
                  <p className="text-green-700 font-medium">Gregorian Calendar introduced by the Church</p>
                </div>
                <div className="bg-purple-50 rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold text-purple-800 mb-2">1603</div>
                  <p className="text-purple-700 font-medium">Year the Pontifical Academy of Sciences was first founded</p>
                </div>
                <div className="bg-red-50 rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold text-red-800 mb-2">1891</div>
                  <p className="text-red-700 font-medium">Vatican Observatory established &mdash; still operating today</p>
                </div>
                <div className="bg-indigo-50 rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold text-indigo-800 mb-2">~80</div>
                  <p className="text-indigo-700 font-medium">Current members of the Pontifical Academy of Sciences</p>
                </div>
              </div>
            </div>

            {/* Foundational Catholic Contributions */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Atom className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Fields Founded or Transformed by Catholics</h2>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-amber-50 rounded-lg p-5">
                  <h3 className="font-semibold text-amber-900 mb-2 flex items-center gap-2">
                    <Atom className="w-5 h-5" /> Big Bang Cosmology
                  </h3>
                  <p className="text-amber-800 text-sm">
                    Fr. Georges Lemaitre, a Belgian diocesan priest, first proposed the expansion of the
                    universe from a &ldquo;primeval atom&rdquo; in 1927 &mdash; the theory now known as
                    the Big Bang. He published his hypothesis two years before Edwin Hubble&rsquo;s
                    observational confirmation.
                  </p>
                </div>

                <div className="bg-blue-50 rounded-lg p-5">
                  <h3 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                    <Dna className="w-5 h-5" /> Genetics
                  </h3>
                  <p className="text-blue-800 text-sm">
                    Fr. Gregor Mendel, an Augustinian friar, discovered the laws of heredity through
                    meticulous experiments with pea plants at his monastery in Brno. His work, ignored
                    for 35 years, became the foundation of modern genetics when rediscovered in 1900.
                  </p>
                </div>

                <div className="bg-green-50 rounded-lg p-5">
                  <h3 className="font-semibold text-green-900 mb-2 flex items-center gap-2">
                    <Mountain className="w-5 h-5" /> Geology &amp; Stratigraphy
                  </h3>
                  <p className="text-green-800 text-sm">
                    Bl. Nicolas Steno, a Danish convert who became a Catholic bishop, established the
                    foundational principles of stratigraphy and modern geology. His principles of
                    superposition and original horizontality remain fundamental to geological science.
                    He was beatified in 1988.
                  </p>
                </div>

                <div className="bg-purple-50 rounded-lg p-5">
                  <h3 className="font-semibold text-purple-900 mb-2 flex items-center gap-2">
                    <Telescope className="w-5 h-5" /> Astrophysics
                  </h3>
                  <p className="text-purple-800 text-sm">
                    Fr. Angelo Secchi, a Jesuit priest, is considered the father of astrophysics. He was
                    the first to classify stars by their spectral type, establishing the system that
                    became the basis for all modern stellar classification.
                  </p>
                </div>

                <div className="bg-red-50 rounded-lg p-5">
                  <h3 className="font-semibold text-red-900 mb-2 flex items-center gap-2">
                    <Microscope className="w-5 h-5" /> Microbiology &amp; Germ Theory
                  </h3>
                  <p className="text-red-800 text-sm">
                    Louis Pasteur, a devout Catholic layman, is the father of microbiology. His
                    discoveries of germ theory, pasteurization, and vaccines saved countless millions of
                    lives. He famously declared: &ldquo;A little science distances you from God, but a
                    lot of science brings you back.&rdquo;
                  </p>
                </div>

                <div className="bg-indigo-50 rounded-lg p-5">
                  <h3 className="font-semibold text-indigo-900 mb-2 flex items-center gap-2">
                    <Zap className="w-5 h-5" /> Electrodynamics &amp; the Battery
                  </h3>
                  <p className="text-indigo-800 text-sm">
                    Andre-Marie Ampere, a devout Catholic, founded the science of electrodynamics.
                    Alessandro Volta, also Catholic, invented the electric battery. The units of electrical
                    current (ampere) and voltage (volt) bear their names &mdash; a permanent reminder of
                    Catholic contributions to physics.
                  </p>
                </div>
              </div>
            </div>

            {/* The Myth of Conflict */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-red-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The &ldquo;Conflict Thesis&rdquo; Debunked</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The idea that the Catholic Church and science have been locked in perpetual warfare
                is a myth manufactured in the late 19th century, primarily by two books: John William
                Draper&rsquo;s <em>History of the Conflict Between Religion and Science</em> (1874)
                and Andrew Dickson White&rsquo;s <em>A History of the Warfare of Science with Theology
                in Christendom</em> (1896). Modern historians of science have thoroughly demolished
                this narrative.
              </p>

              <div className="bg-amber-50 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">What Historians Actually Say</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-amber-400 pl-4">
                    <p className="text-amber-800 italic text-sm">
                      &ldquo;The greatest myth in the history of science and religion holds that they
                      have been in a state of constant conflict.&rdquo;
                    </p>
                    <p className="text-amber-700 text-xs mt-1">
                      &mdash; Ronald Numbers, historian of science, University of Wisconsin
                    </p>
                  </div>
                  <div className="border-l-4 border-amber-400 pl-4">
                    <p className="text-amber-800 italic text-sm">
                      &ldquo;The Jesuits were the single most important contributor to experimental physics
                      in the seventeenth century.&rdquo;
                    </p>
                    <p className="text-amber-700 text-xs mt-1">
                      &mdash; Jonathan Wright, <em>God&rsquo;s Soldiers: Adventure, Politics, Intrigue, and Power &mdash;
                      A History of the Jesuits</em>
                    </p>
                  </div>
                  <div className="border-l-4 border-amber-400 pl-4">
                    <p className="text-amber-800 italic text-sm">
                      &ldquo;No institution did more to promote the study of astronomy in the period from
                      the late Middle Ages into the Enlightenment than the Roman Catholic Church.&rdquo;
                    </p>
                    <p className="text-amber-700 text-xs mt-1">
                      &mdash; J.L. Heilbron, <em>The Sun in the Church: Cathedrals as Solar Observatories</em>
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">
                The evidence is overwhelming. The Catholic Church founded the universities, supported
                scientific research for centuries, and its clergy and faithful produced an extraordinary
                number of the most important scientists in history. The conflict thesis is not merely
                an oversimplification &mdash; it is a demonstrable falsehood, rejected by virtually all
                serious historians of science working today.
              </p>
            </div>

            {/* Key Institutions */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Landmark className="w-6 h-6 text-purple-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Catholic Scientific Institutions</h2>
              </div>

              <div className="space-y-6">
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">The Medieval University System</h3>
                  <p className="text-blue-800 text-sm">
                    The Church created the university as an institution. Bologna (1088), Paris (c. 1150),
                    Oxford (1096&ndash;1167), and Cambridge (1209) were all founded under Church auspices.
                    Canon law protected academic freedom, granting scholars legal protections that enabled
                    free inquiry. By 1500, the Church had established over 60 universities across Europe.
                    This institutional infrastructure was essential for the later Scientific Revolution.
                  </p>
                </div>

                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-green-900 mb-2">The Pontifical Academy of Sciences</h3>
                  <p className="text-green-800 text-sm">
                    Originally founded in 1603 as the Accademia dei Lincei (Galileo was a member),
                    it was refounded by Pope Pius XI in 1936 as the Pontifical Academy of Sciences.
                    Today it has approximately 80 members appointed by the Pope, including non-Catholic
                    and even non-believing scientists &mdash; membership is based purely on scientific
                    merit. Past members and attendees have included Max Planck, Niels Bohr, Werner
                    Heisenberg, Paul Dirac, Erwin Schrodinger, and Stephen Hawking.
                  </p>
                </div>

                <div className="bg-purple-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-purple-900 mb-2">The Vatican Observatory (Specola Vaticana)</h3>
                  <p className="text-purple-800 text-sm">
                    Established in 1891 by Pope Leo XIII, the Vatican Observatory is one of the oldest
                    astronomical research institutions in the world. It operates the Vatican Advanced
                    Technology Telescope (VATT) at the Mount Graham International Observatory in Arizona.
                    Its staff of Jesuit astronomers conducts cutting-edge research in observational
                    astronomy, cosmology, and the philosophy of science.
                  </p>
                </div>
              </div>
            </div>

            {/* Sources */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Sources &amp; Further Reading</h3>
              <ol className="list-decimal list-inside text-gray-600 space-y-2 text-sm">
                <li>Thomas E. Woods Jr., <em>How the Catholic Church Built Western Civilization</em> (Regnery, 2005).</li>
                <li>John L. Heilbron, <em>The Sun in the Church: Cathedrals as Solar Observatories</em> (Harvard University Press, 1999).</li>
                <li>Ronald L. Numbers (ed.), <em>Galileo Goes to Jail and Other Myths About Science and Religion</em> (Harvard University Press, 2009).</li>
                <li>Jonathan Wright, <em>God&rsquo;s Soldiers: Adventure, Politics, Intrigue, and Power &mdash; A History of the Jesuits</em> (Doubleday, 2004).</li>
                <li>Edward Grant, <em>God and Reason in the Middle Ages</em> (Cambridge University Press, 2001).</li>
                <li>Lawrence M. Principe, <em>Science and Religion</em> (The Great Courses, 2006).</li>
                <li>Agustin Udias, <em>Jesuit Contribution to Science: A History</em> (Springer, 2015).</li>
              </ol>
            </div>
          </div>
        )}

        {/* ==================== TAB 2: PRIEST-SCIENTISTS ==================== */}
        {activeTab === 'priest-scientists' && (
          <div className="space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Cross className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Priests Who Changed the World Through Science</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                One of the most remarkable facts in the history of science is the extraordinary number of
                ordained Catholic priests and vowed religious who made foundational contributions to
                scientific knowledge. These men did not see any contradiction between their priesthood and
                their scientific work. On the contrary, they understood the study of nature as an extension
                of their vocation &mdash; an exploration of the Creator&rsquo;s handiwork that deepened
                rather than diminished their faith.
              </p>

              <div className="bg-amber-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-2">A Note on Vocation</h3>
                <p className="text-amber-800 text-sm">
                  The priest-scientists listed here were not scientists who happened to be priests. For
                  most of them, their religious life and their scientific work were deeply intertwined.
                  Mendel conducted his experiments in his monastery garden. Lemaitre developed the Big Bang
                  theory while serving as a professor at a Catholic university. Boscovich traveled
                  Europe on Jesuit missions that also advanced his scientific research. The priesthood
                  provided these men with the education, institutional support, and intellectual freedom
                  to pursue groundbreaking discoveries.
                </p>
              </div>
            </div>

            {/* Fr. Georges Lemaitre */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-purple-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Fr. Georges Lemaitre (1894&ndash;1966)</h2>
              </div>

              <div className="flex flex-wrap gap-3 mb-6">
                <span className="bg-purple-100 text-purple-800 text-xs font-medium px-3 py-1 rounded-full">Belgian Diocesan Priest</span>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">Cosmologist</span>
                <span className="bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full">Father of the Big Bang Theory</span>
                <span className="bg-amber-100 text-amber-800 text-xs font-medium px-3 py-1 rounded-full">President, Pontifical Academy of Sciences</span>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                Georges Lemaitre was a Belgian Catholic priest, astronomer, and professor of physics at the
                Catholic University of Leuven. In 1927, he published a paper proposing that the universe is
                expanding &mdash; deriving what is now known as Hubble&rsquo;s law two years before Hubble
                himself published his observational evidence. Lemaitre went further, proposing that the
                universe had originated from a single &ldquo;primeval atom&rdquo; or &ldquo;cosmic egg&rdquo;
                &mdash; the theory that Fred Hoyle would later mockingly call the &ldquo;Big Bang,&rdquo;
                a name that stuck.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                Lemaitre&rsquo;s theory was initially met with skepticism. Albert Einstein himself told
                Lemaitre, &ldquo;Your calculations are correct, but your physics is atrocious.&rdquo;
                Einstein later changed his mind, calling his own resistance to the expanding universe
                &ldquo;the biggest blunder of my life.&rdquo; By the 1930s, the observational evidence
                had vindicated Lemaitre completely.
              </p>

              <div className="bg-purple-50 rounded-lg p-6 mb-4">
                <h3 className="text-lg font-semibold text-purple-900 mb-3">The Lemaitre-Pius XII Episode</h3>
                <p className="text-purple-800 text-sm mb-3">
                  In 1951, Pope Pius XII gave an address to the Pontifical Academy of Sciences in which he
                  enthusiastically declared that the Big Bang theory confirmed the biblical account of
                  creation: &ldquo;It would seem that present-day science, with one sweep back across the
                  centuries, has succeeded in bearing witness to the august instant of the primordial
                  Fiat Lux.&rdquo;
                </p>
                <p className="text-purple-800 text-sm mb-3">
                  Lemaitre was uncomfortable with this claim. He personally approached the Pope and urged
                  him to stop making such statements. Science, Lemaitre insisted, should stand on its own
                  evidence. A scientific theory should be accepted or rejected on scientific grounds, not
                  because it appears to confirm or deny a theological proposition. The Pope graciously
                  accepted Lemaitre&rsquo;s advice and never repeated the argument.
                </p>
                <p className="text-purple-800 text-sm">
                  This episode beautifully illustrates the Catholic understanding of the proper relationship
                  between faith and reason: they are complementary but methodologically distinct. Lemaitre&rsquo;s
                  intellectual honesty &mdash; a priest telling the Pope to stop using his own theory to
                  prove Genesis &mdash; is one of the great moments in the history of science and religion.
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed">
                In 1960, Lemaitre was elected president of the Pontifical Academy of Sciences, a position
                he held until his death in 1966. He learned of the discovery of cosmic microwave background
                radiation &mdash; the definitive confirmation of the Big Bang &mdash; shortly before he died,
                knowing that his life&rsquo;s work had been vindicated.
              </p>
            </div>

            {/* Fr. Gregor Mendel */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Dna className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Fr. Gregor Mendel (1822&ndash;1884)</h2>
              </div>

              <div className="flex flex-wrap gap-3 mb-6">
                <span className="bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full">Augustinian Friar</span>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">Father of Genetics</span>
                <span className="bg-amber-100 text-amber-800 text-xs font-medium px-3 py-1 rounded-full">Abbot of St. Thomas&rsquo;s Abbey, Brno</span>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                Gregor Johann Mendel was an Augustinian friar and abbot of St. Thomas&rsquo;s Abbey in
                Brno, Moravia (now the Czech Republic). Between 1856 and 1863, Mendel conducted a
                series of meticulously designed experiments on approximately 28,000 pea plants in the
                monastery garden. Through this work, he discovered the fundamental laws of heredity &mdash;
                the Law of Segregation and the Law of Independent Assortment &mdash; that govern how
                traits are passed from parents to offspring.
              </p>

              <div className="bg-green-50 rounded-lg p-6 mb-4">
                <h3 className="text-lg font-semibold text-green-900 mb-3">Ignored for 35 Years</h3>
                <p className="text-green-800 text-sm">
                  Mendel published his findings in 1866 in the <em>Proceedings of the Natural History
                  Society of Brunn</em>. The paper was essentially ignored by the scientific community
                  for 35 years. It was not until 1900 that three scientists &mdash; Hugo de Vries,
                  Carl Correns, and Erich von Tschermak &mdash; independently rediscovered Mendel&rsquo;s
                  laws and recognized his priority. Mendel&rsquo;s work then became the foundation of
                  the entire science of genetics. The friar who counted peas in a monastery garden had
                  single-handedly created one of the most important branches of modern biology.
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed">
                Mendel&rsquo;s story is a powerful reminder that the monastic life, far from being an
                obstacle to scientific inquiry, provided exactly the conditions &mdash; time, education,
                institutional support, and intellectual curiosity &mdash; needed for groundbreaking
                research. The monastery garden at Brno is now a museum and pilgrimage site for
                geneticists from around the world.
              </p>
            </div>

            {/* Fr. Roger Boscovich */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Atom className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Fr. Roger Boscovich (1711&ndash;1787)</h2>
              </div>

              <div className="flex flex-wrap gap-3 mb-6">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">Croatian Jesuit</span>
                <span className="bg-purple-100 text-purple-800 text-xs font-medium px-3 py-1 rounded-full">Physicist &amp; Mathematician</span>
                <span className="bg-amber-100 text-amber-800 text-xs font-medium px-3 py-1 rounded-full">Precursor to Atomic Theory</span>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                Ruder Josip Boskovic (known in the West as Roger Boscovich) was a Croatian Jesuit
                priest who made remarkable contributions to physics, astronomy, mathematics,
                geodesy, and natural philosophy. Born in Dubrovnik (then the Republic of Ragusa), he
                entered the Jesuits at age 14 and was educated at the Collegium Romanum in Rome, where
                he later became a professor.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                His masterwork, <em>Theoria Philosophiae Naturalis</em> (Theory of Natural Philosophy,
                1758), proposed a radical new understanding of matter. Boscovich argued that matter is
                not composed of solid, indivisible particles but rather of dimensionless points
                surrounded by alternating zones of attractive and repulsive force. This theory
                anticipated many features of modern atomic and nuclear physics by more than a century.
              </p>

              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">Influence on Later Scientists</h3>
                <p className="text-blue-800 text-sm">
                  Boscovich&rsquo;s ideas directly influenced later scientists including Michael Faraday,
                  James Clerk Maxwell, Lord Kelvin, and even the young Werner Heisenberg. The physicist
                  and Nobel laureate Niels Bohr acknowledged Boscovich as a precursor of modern atomic
                  models. His concept of point particles interacting through fields of force bears a
                  striking resemblance to aspects of modern quantum field theory.
                </p>
              </div>
            </div>

            {/* Fr. Athanasius Kircher */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Microscope className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Fr. Athanasius Kircher (1602&ndash;1680)</h2>
              </div>

              <div className="flex flex-wrap gap-3 mb-6">
                <span className="bg-amber-100 text-amber-800 text-xs font-medium px-3 py-1 rounded-full">German Jesuit</span>
                <span className="bg-purple-100 text-purple-800 text-xs font-medium px-3 py-1 rounded-full">Polymath</span>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">&ldquo;The Last Man Who Knew Everything&rdquo;</span>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                Athanasius Kircher was a German Jesuit scholar and polymath who has been called &ldquo;the
                last man who knew everything&rdquo; and &ldquo;the master of a hundred arts.&rdquo;
                Based at the Collegium Romanum in Rome for most of his career, Kircher published over 40
                major works on an astonishing range of subjects including geology, medicine, music theory,
                optics, Egyptology, magnetism, combinatorics, and comparative religion.
              </p>

              <div className="bg-amber-50 rounded-lg p-6 mb-4">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">Pioneering Contributions</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-amber-800 text-sm mb-1">Microscopy &amp; Disease</h4>
                    <p className="text-amber-700 text-xs">
                      Using one of the earliest microscopes, Kircher observed what he called &ldquo;tiny
                      worms&rdquo; in the blood of plague victims &mdash; an early, if imprecise,
                      anticipation of germ theory, two centuries before Pasteur.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-amber-800 text-sm mb-1">Geology &amp; Volcanology</h4>
                    <p className="text-amber-700 text-xs">
                      His <em>Mundus Subterraneus</em> (1665) was a pioneering study of the earth&rsquo;s
                      interior, including volcanoes, fossils, and underground water systems. He had
                      himself lowered into the crater of Vesuvius to make observations.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-amber-800 text-sm mb-1">Egyptology</h4>
                    <p className="text-amber-700 text-xs">
                      Kircher was one of the first Europeans to study Egyptian hieroglyphics systematically.
                      While many of his interpretations were wrong, his work laid the groundwork for the
                      field of Egyptology and influenced Jean-Francois Champollion&rsquo;s later
                      decipherment of the Rosetta Stone.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-amber-800 text-sm mb-1">Magnetism &amp; Optics</h4>
                    <p className="text-amber-700 text-xs">
                      His <em>Magnes</em> (1641) and <em>Ars Magna Lucis et Umbrae</em> (1646) made
                      significant contributions to the study of magnetism and optics, including early
                      work on the magic lantern (a precursor to the film projector).
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">
                Kircher&rsquo;s museum at the Collegium Romanum &mdash; the Museum Kircherianum &mdash; was
                one of the first public museums in Europe, a cabinet of curiosities that drew visitors from
                across the continent. He remains one of the most extraordinary intellectual figures of the
                early modern period.
              </p>
            </div>

            {/* Fr. Pierre Teilhard de Chardin */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <Globe className="w-6 h-6 text-red-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Fr. Pierre Teilhard de Chardin (1881&ndash;1955)</h2>
              </div>

              <div className="flex flex-wrap gap-3 mb-6">
                <span className="bg-red-100 text-red-800 text-xs font-medium px-3 py-1 rounded-full">French Jesuit</span>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">Paleontologist &amp; Geologist</span>
                <span className="bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full">Co-Discoverer of Peking Man</span>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                Pierre Teilhard de Chardin was a French Jesuit priest, paleontologist, and geologist who
                spent decades conducting fieldwork in China, Africa, and elsewhere. He was part of the
                team that discovered <em>Sinanthropus pekinensis</em> (Peking Man, now classified as
                <em> Homo erectus pekinensis</em>) near Beijing in 1929 &mdash; one of the most important
                paleoanthropological discoveries of the 20th century.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                Teilhard is equally famous &mdash; and controversial &mdash; for his ambitious theological
                and philosophical writings. In works such as <em>The Phenomenon of Man</em> (published
                posthumously in 1955) and <em>The Divine Milieu</em>, he attempted to synthesize
                evolutionary science with Christian theology, proposing that the universe is evolving
                toward an &ldquo;Omega Point&rdquo; of maximum consciousness and complexity, which he
                identified with Christ.
              </p>

              <div className="bg-red-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-red-900 mb-3">A Complex Legacy</h3>
                <p className="text-red-800 text-sm mb-3">
                  Teilhard&rsquo;s theological writings were viewed with suspicion by the Vatican during his
                  lifetime, and he was prohibited from publishing them. A <em>monitum</em> (warning) was
                  issued by the Holy Office in 1962, cautioning readers about ambiguities and errors in his
                  philosophical works. However, his scientific contributions were never questioned, and his
                  influence on later Catholic thinkers &mdash; including Pope Benedict XVI, who cited him
                  appreciatively &mdash; has been significant.
                </p>
                <p className="text-red-800 text-sm">
                  Teilhard remains a figure of admiration and debate within the Church: a brilliant
                  scientist and a daring, if sometimes imprecise, theological thinker whose vision of a
                  universe oriented toward Christ continues to inspire many Catholics engaged in science.
                </p>
              </div>
            </div>

            {/* Sources */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Sources &amp; Further Reading</h3>
              <ol className="list-decimal list-inside text-gray-600 space-y-2 text-sm">
                <li>John Farrell, <em>The Day Without Yesterday: Lemaitre, Einstein, and the Birth of Modern Cosmology</em> (Thunder&rsquo;s Mouth Press, 2005).</li>
                <li>Robin Marantz Henig, <em>The Monk in the Garden: The Lost and Found Genius of Gregor Mendel</em> (Houghton Mifflin, 2000).</li>
                <li>Roger Joseph Boscovich, <em>A Theory of Natural Philosophy</em>, trans. J.M. Child (MIT Press, 1966).</li>
                <li>Paula Findlen (ed.), <em>Athanasius Kircher: The Last Man Who Knew Everything</em> (Routledge, 2004).</li>
                <li>Amir D. Aczel, <em>The Jesuit and the Skull: Teilhard de Chardin, Evolution, and the Search for Peking Man</em> (Riverhead Books, 2007).</li>
                <li>Agustin Udias, <em>Jesuit Contribution to Science: A History</em> (Springer, 2015).</li>
                <li>William B. Ashworth Jr., &ldquo;Catholicism and Early Modern Science,&rdquo; in David C. Lindberg and Ronald L. Numbers (eds.), <em>God and Nature</em> (University of California Press, 1986).</li>
              </ol>
            </div>
          </div>
        )}

        {/* ==================== TAB 3: CATHOLIC LAY SCIENTISTS ==================== */}
        {activeTab === 'lay-scientists' && (
          <div className="space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Faithful Laypersons, Extraordinary Scientists</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                The contributions of Catholic laypeople to science are no less remarkable than those of
                the clergy. These men and women pursued scientific discovery not in spite of their faith
                but often because of it. Many of them spoke explicitly about how their Catholic
                convictions motivated their work, and several of them are now on the path to
                canonization. Their achievements span mathematics, physics, chemistry, biology,
                geology, and medicine.
              </p>

              <p className="text-gray-700 leading-relaxed">
                From Copernicus, who dedicated his revolutionary work to the Pope, to Pasteur, who saw
                deep science as a path back to God, these scientists demonstrate that Catholic faith and
                rigorous scientific inquiry are not merely compatible but mutually enriching.
              </p>
            </div>

            {/* Nicolas Copernicus */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Globe className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Nicolas Copernicus (1473&ndash;1543)</h2>
              </div>

              <div className="flex flex-wrap gap-3 mb-6">
                <span className="bg-amber-100 text-amber-800 text-xs font-medium px-3 py-1 rounded-full">Canon of Frombork Cathedral</span>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">Astronomer &amp; Mathematician</span>
                <span className="bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full">Heliocentric Model</span>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                Nicolaus Copernicus was a canon of the Cathedral of Frombork in Poland &mdash; a
                Church position that provided him with the financial security and time to pursue
                his astronomical research. His epoch-making work, <em>De Revolutionibus Orbium
                Coelestium</em> (On the Revolutions of the Celestial Spheres, 1543), proposed the
                heliocentric model of the solar system, placing the Sun rather than the Earth at
                the center.
              </p>

              <div className="bg-amber-50 rounded-lg p-6 mb-4">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">Dedicated to the Pope</h3>
                <p className="text-amber-800 text-sm">
                  Copernicus dedicated <em>De Revolutionibus</em> to Pope Paul III. The dedication is not
                  merely formal &mdash; Copernicus explicitly asks the Pope to protect his work from
                  critics. He was encouraged to publish by Cardinal Nikolaus von Schonberg and Bishop
                  Tiedemann Giese. The myth that the Church immediately suppressed Copernicus is false;
                  his book circulated freely for decades and was used by the Church&rsquo;s own
                  astronomers to reform the calendar. It was not placed on the Index until 1616, 73 years
                  after publication, and then only &ldquo;until corrected&rdquo; (a few sentences were
                  modified to present heliocentrism as a hypothesis rather than a proven fact).
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed">
                Copernicus was a devout Catholic throughout his life. He served his diocese as a
                physician, administrator, and diplomat. He died in 1543, shortly after receiving the
                first printed copy of his masterwork. In 2010, his remains were reinterred with
                full honours in Frombork Cathedral, with a black granite tombstone identifying him
                as the founder of the heliocentric theory.
              </p>
            </div>

            {/* Blaise Pascal */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Brain className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Blaise Pascal (1623&ndash;1662)</h2>
              </div>

              <div className="flex flex-wrap gap-3 mb-6">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">French Mathematician</span>
                <span className="bg-purple-100 text-purple-800 text-xs font-medium px-3 py-1 rounded-full">Physicist</span>
                <span className="bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full">Philosopher &amp; Theologian</span>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                Blaise Pascal was one of the most brilliant minds of the 17th century &mdash; a child
                prodigy who wrote a major treatise on projective geometry at age 16. His contributions
                to science and mathematics are staggering in their range: he founded probability theory
                (in correspondence with Pierre de Fermat), invented one of the first mechanical
                calculators (the Pascaline), conducted groundbreaking experiments in fluid mechanics and
                hydraulics, and established Pascal&rsquo;s Law governing pressure in fluids. The SI unit
                of pressure (the pascal) is named after him.
              </p>

              <div className="bg-blue-50 rounded-lg p-6 mb-4">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">The Night of Fire &amp; the Pensees</h3>
                <p className="text-blue-800 text-sm mb-3">
                  On the night of 23 November 1654, Pascal experienced a profound mystical encounter with
                  God &mdash; his &ldquo;Night of Fire&rdquo; &mdash; which transformed his life. He
                  recorded the experience on a parchment (the <em>Memorial</em>) that he sewed into
                  the lining of his coat and carried with him until his death. After this experience,
                  Pascal devoted much of his intellectual energy to defending the Catholic faith.
                </p>
                <p className="text-blue-800 text-sm">
                  His <em>Pensees</em> (Thoughts), published posthumously, is one of the masterpieces of
                  Catholic apologetics &mdash; a profound and deeply personal defence of Christianity. It
                  contains the famous &ldquo;Pascal&rsquo;s Wager,&rdquo; an argument for belief in God
                  based on decision theory: given the infinite stakes involved, it is rational to
                  &ldquo;wager&rdquo; on God&rsquo;s existence even if the probability seems uncertain.
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed">
                Pascal died at age 39, having accomplished more in his short life than most scientists
                achieve in a long one. He remains one of the supreme examples of a thinker in whom
                scientific genius and deep Catholic faith were inseparable.
              </p>
            </div>

            {/* Louis Pasteur */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Microscope className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Louis Pasteur (1822&ndash;1895)</h2>
              </div>

              <div className="flex flex-wrap gap-3 mb-6">
                <span className="bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full">French Chemist &amp; Microbiologist</span>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">Father of Microbiology</span>
                <span className="bg-amber-100 text-amber-800 text-xs font-medium px-3 py-1 rounded-full">Devout Catholic</span>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                Louis Pasteur is one of the most important scientists who ever lived. His discoveries
                saved millions of lives and transformed medicine, agriculture, and industry. He
                discovered that microorganisms cause fermentation and disease (germ theory), developed
                the process of pasteurization to make milk and wine safe, created vaccines for anthrax
                and rabies, and disproved the long-held theory of spontaneous generation.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                Pasteur was a devout Catholic throughout his life. His son-in-law recorded that Pasteur
                prayed the Rosary regularly. When asked about his faith, Pasteur reportedly replied:
                &ldquo;The more I study nature, the more I stand amazed at the work of the Creator. I
                pray while I am engaged in my work in the laboratory.&rdquo;
              </p>

              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-3">Science and Faith</h3>
                <p className="text-green-800 text-sm italic mb-3">
                  &ldquo;A little science distances you from God, but a lot of science brings you
                  back to Him.&rdquo;
                </p>
                <p className="text-green-800 text-sm">
                  This famous quotation, attributed to Pasteur, captures the conviction shared by many
                  Catholic scientists: that superficial knowledge may create the illusion of conflict
                  between science and faith, but deep, rigorous inquiry ultimately reveals the order,
                  beauty, and intelligibility of creation &mdash; pointing back to the Creator.
                </p>
              </div>
            </div>

            {/* Andre-Marie Ampere */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Zap className="w-6 h-6 text-purple-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Andre-Marie Ampere (1775&ndash;1836)</h2>
              </div>

              <div className="flex flex-wrap gap-3 mb-6">
                <span className="bg-purple-100 text-purple-800 text-xs font-medium px-3 py-1 rounded-full">French Physicist &amp; Mathematician</span>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">Founder of Electrodynamics</span>
                <span className="bg-amber-100 text-amber-800 text-xs font-medium px-3 py-1 rounded-full">Devout Catholic</span>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                Andre-Marie Ampere is considered one of the founders of classical electromagnetism. He
                was the first to develop a mathematical theory of electrodynamics &mdash; the study of
                the relationship between electric currents and magnetic fields. His name is permanently
                enshrined in science: the ampere (amp), the SI unit of electric current, is named
                after him. James Clerk Maxwell called him &ldquo;the Newton of electricity.&rdquo;
              </p>

              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-purple-900 mb-3">Faith Through Suffering</h3>
                <p className="text-purple-800 text-sm">
                  Ampere endured terrible personal tragedies, including the execution of his father during
                  the French Revolution when Ampere was just 18. He found solace in his Catholic faith. He
                  wrote extensively about the relationship between faith and reason, and his journals reveal
                  a man of deep prayer and devotion. On his deathbed, he asked that the words of Psalm 36:9
                  be inscribed on his tombstone: &ldquo;O Lord, how great are Thy works! Thy thoughts are
                  very deep.&rdquo; His tombstone in the Montmartre Cemetery in Paris bears this inscription
                  to this day.
                </p>
              </div>
            </div>

            {/* Alessandro Volta */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-indigo-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Alessandro Volta (1745&ndash;1827)</h2>
              </div>

              <div className="flex flex-wrap gap-3 mb-6">
                <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-3 py-1 rounded-full">Italian Physicist</span>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">Inventor of the Electric Battery</span>
                <span className="bg-amber-100 text-amber-800 text-xs font-medium px-3 py-1 rounded-full">Catholic</span>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                Alessandro Volta, an Italian physicist and Catholic, invented the voltaic pile in 1800 &mdash;
                the first true electric battery, capable of producing a steady, continuous flow of
                electric current. This invention was revolutionary: it provided scientists with a reliable
                source of electricity for the first time, enabling all subsequent research into
                electromagnetism, electrochemistry, and electrical engineering. The volt, the SI unit of
                electrical potential, is named in his honour.
              </p>

              <div className="bg-indigo-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-indigo-900 mb-3">Faith and Public Life</h3>
                <p className="text-indigo-800 text-sm">
                  Volta was a practising Catholic who maintained his faith throughout his career. In a
                  letter written in 1815, he stated clearly: &ldquo;I am not ashamed of the Gospel,
                  may it produce good fruit!&rdquo; He served as a professor at the University of Pavia
                  for nearly 40 years and was honoured by Napoleon, who made him a Count. He retired to
                  his estate in Camnago, where he lived a quiet life of faith until his death.
                </p>
              </div>
            </div>

            {/* Bl. Nicolas Steno */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Mountain className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Bl. Nicolas Steno (1638&ndash;1686)</h2>
              </div>

              <div className="flex flex-wrap gap-3 mb-6">
                <span className="bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full">Danish Convert to Catholicism</span>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">Father of Geology &amp; Stratigraphy</span>
                <span className="bg-amber-100 text-amber-800 text-xs font-medium px-3 py-1 rounded-full">Bishop &amp; Blessed</span>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                Niels Stensen (Latinized as Nicolas Steno) was a Danish anatomist and geologist who
                converted to Catholicism in 1667 and eventually became a bishop. Before his conversion
                and ordination, he made some of the most important discoveries in the history of earth
                science. His <em>De Solido</em> (1669) established the foundational principles of
                stratigraphy &mdash; the study of rock layers &mdash; including the principles of
                superposition, original horizontality, and lateral continuity, which remain fundamental
                to geology today.
              </p>

              <div className="bg-green-50 rounded-lg p-6 mb-4">
                <h3 className="text-lg font-semibold text-green-900 mb-3">From Scientist to Bishop to Blessed</h3>
                <p className="text-green-800 text-sm">
                  After his conversion, Steno was ordained a priest in 1675 and consecrated a bishop
                  in 1677. He served as a missionary bishop in northern Germany and Scandinavia, living
                  in great poverty and austerity. He died in 1686 in Schwerin, Germany. His cause for
                  canonization was opened, and he was beatified by Pope John Paul II on 23 October 1988.
                  He is one of the very few scientists in history who is also a Blessed of the Catholic
                  Church &mdash; a man whose pursuit of truth in nature led him to the Truth of faith.
                </p>
              </div>
            </div>

            {/* Jerome Lejeune */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <Dna className="w-6 h-6 text-red-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Jerome Lejeune (1926&ndash;1994)</h2>
              </div>

              <div className="flex flex-wrap gap-3 mb-6">
                <span className="bg-red-100 text-red-800 text-xs font-medium px-3 py-1 rounded-full">French Geneticist</span>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">Discovered Trisomy 21</span>
                <span className="bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full">Venerable</span>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                Jerome Lejeune was a French geneticist who, in 1958, discovered that Down syndrome is
                caused by an extra copy of chromosome 21 (Trisomy 21). This was the first time a
                chromosomal abnormality had been linked to a specific condition of intellectual
                disability, opening an entirely new field of medicine: clinical cytogenetics.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                Lejeune became increasingly distressed when his discovery was used to justify prenatal
                screening and selective abortion of children with Down syndrome. He became one of the
                most vocal defenders of the right to life of the unborn, especially those with
                disabilities. This stance cost him professionally &mdash; he was passed over for
                awards and ostracized by some colleagues &mdash; but he never wavered.
              </p>

              <div className="bg-red-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-red-900 mb-3">Cause for Canonization</h3>
                <p className="text-red-800 text-sm">
                  Pope John Paul II, a close friend, appointed Lejeune as the first president of the
                  Pontifical Academy for Life in 1994. Lejeune died just 33 days later, on Easter
                  Sunday. His cause for canonization was opened in 2012, and on 21 January 2021, Pope
                  Francis declared him &ldquo;Venerable,&rdquo; recognizing his heroic virtues. If
                  canonized, Lejeune would be one of the few modern scientists elevated to the altars
                  of the Church.
                </p>
              </div>
            </div>

            {/* Maria Gaetana Agnesi */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-purple-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Maria Gaetana Agnesi (1718&ndash;1799)</h2>
              </div>

              <div className="flex flex-wrap gap-3 mb-6">
                <span className="bg-purple-100 text-purple-800 text-xs font-medium px-3 py-1 rounded-full">Italian Mathematician</span>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">First Woman Math Professor</span>
                <span className="bg-amber-100 text-amber-800 text-xs font-medium px-3 py-1 rounded-full">Devoted to Charitable Work</span>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                Maria Gaetana Agnesi was an Italian mathematician and philosopher who became the first
                woman appointed as a full professor of mathematics at a university. In 1750, Pope
                Benedict XIV appointed her to the chair of mathematics and natural philosophy at the
                University of Bologna &mdash; an extraordinary distinction for any scholar, let alone
                a woman, in the 18th century.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                Her magnum opus, <em>Instituzioni Analitiche ad Uso della Gioventu Italiana</em>
                (Analytical Institutions for the Use of Italian Youth, 1748), was the first
                comprehensive textbook covering both differential and integral calculus. It was
                translated into French and English and became a standard reference work across Europe.
                The curve known as the &ldquo;Witch of Agnesi&rdquo; (a mistranslation of the Italian
                &ldquo;versiera&rdquo;) is named after her.
              </p>

              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-purple-900 mb-3">A Life of Service</h3>
                <p className="text-purple-800 text-sm">
                  After her father&rsquo;s death in 1752, Agnesi gradually withdrew from mathematics to
                  devote herself entirely to charitable and religious work. She turned her home into a
                  hospice for the poor and sick, and in 1783 she was appointed directress of the Pio
                  Albergo Trivulzio, a home for the elderly in Milan. She spent the last 28 years of
                  her life in service to the poor, using her considerable intellect and administrative
                  gifts for works of mercy. She died in poverty in 1799, having given away everything.
                  Hers is a remarkable story of a woman who mastered the highest mathematics of her age
                  and then chose to serve the least of Christ&rsquo;s brethren.
                </p>
              </div>
            </div>

            {/* Sources */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Sources &amp; Further Reading</h3>
              <ol className="list-decimal list-inside text-gray-600 space-y-2 text-sm">
                <li>Owen Gingerich, <em>The Book Nobody Read: Chasing the Revolutions of Nicolaus Copernicus</em> (Walker &amp; Company, 2004).</li>
                <li>Marvin R. O&rsquo;Connell, <em>Blaise Pascal: Reasons of the Heart</em> (Eerdmans, 1997).</li>
                <li>Patrice Debre, <em>Louis Pasteur</em>, trans. Elborg Forster (Johns Hopkins University Press, 1998).</li>
                <li>James R. Hofmann, <em>Andre-Marie Ampere: Enlightenment and Electrodynamics</em> (Cambridge University Press, 1995).</li>
                <li>Alan Cutler, <em>The Seashell on the Mountaintop: How Nicolaus Steno Solved an Ancient Mystery and Created a Science of the Earth</em> (Dutton, 2003).</li>
                <li>Anne Bernet, <em>Jerome Lejeune: The Father of Modern Genetics</em> (Ignatius Press, 2021).</li>
                <li>Massimo Mazzotti, <em>The World of Maria Gaetana Agnesi, Mathematician of God</em> (Johns Hopkins University Press, 2007).</li>
              </ol>
            </div>
          </div>
        )}

        {/* ==================== TAB 4: THE JESUITS & SCIENCE ==================== */}
        {activeTab === 'jesuits' && (
          <div className="space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Church className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Society of Jesus: Science&rsquo;s Greatest Religious Order</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                The Society of Jesus (the Jesuits), founded by St. Ignatius of Loyola in 1540, has
                been called &ldquo;the single most important contributor to experimental physics in the
                seventeenth century&rdquo; by historian Jonathan Wright. This is not an exaggeration.
                The Jesuits operated the largest network of educational institutions in the world for
                centuries, and their members made foundational contributions to astronomy, mathematics,
                physics, seismology, meteorology, and biology.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                The Jesuit commitment to science arose from the order&rsquo;s foundational principles.
                St. Ignatius insisted that Jesuits receive the best education available, and the
                <em> Ratio Studiorum</em> (Plan of Studies, 1599) &mdash; the Jesuit educational
                framework &mdash; gave a central place to mathematics and natural philosophy. The
                order&rsquo;s global missionary presence also made the Jesuits uniquely positioned
                to conduct scientific observations across the world, from China to South America
                to the Arctic.
              </p>

              <div className="bg-amber-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">35 Lunar Craters</h3>
                <p className="text-amber-800 text-sm">
                  Perhaps the most striking testament to Jesuit contributions to astronomy is the fact
                  that 35 craters on the Moon are named after Jesuit scientists and mathematicians.
                  No other religious order, university, or scientific society can match this distinction.
                  These craters honour Jesuits who made significant contributions to lunar observation,
                  mathematical astronomy, and optics from the 16th through the 19th centuries.
                </p>
              </div>
            </div>

            {/* The Gregorian Calendar */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Gregorian Calendar</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                The calendar used by the entire modern world &mdash; the Gregorian Calendar &mdash; was
                designed by the Jesuit mathematician and astronomer Christopher Clavius (1538&ndash;1612)
                for Pope Gregory XIII. It was promulgated in 1582 by the papal bull <em>Inter
                Gravissimas</em>.
              </p>

              <div className="bg-blue-50 rounded-lg p-6 mb-4">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">Fr. Christopher Clavius (1538&ndash;1612)</h3>
                <p className="text-blue-800 text-sm mb-3">
                  Clavius was a German Jesuit who served as professor of mathematics at the Collegium
                  Romanum for nearly 50 years. He was the most respected mathematician and astronomer
                  of his era, and his textbooks were used throughout Jesuit colleges worldwide. When
                  Pope Gregory XIII commissioned the reform of the Julian Calendar, which had accumulated
                  an error of about 10 days, it was Clavius who did the mathematical heavy lifting.
                </p>
                <p className="text-blue-800 text-sm">
                  The Gregorian Calendar corrected the Julian Calendar&rsquo;s overestimation of the
                  solar year by 0.002% &mdash; a tiny error that had accumulated to 10 days over 1,600
                  years. Clavius&rsquo;s solution (the system of leap years we still use today) was
                  so accurate that it will not need correction for about 3,300 years. The calendar used
                  by every nation on earth is the direct product of Jesuit mathematics commissioned by
                  the Pope.
                </p>
              </div>
            </div>

            {/* Jesuit Astronomy */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Telescope className="w-6 h-6 text-purple-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Jesuit Astronomy</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Astronomy was the premier Jesuit science. From the earliest days of the order, Jesuits
                built observatories, made observations, published star catalogues, and corresponded with
                the leading astronomers of their age. Their contributions span four centuries.
              </p>

              <div className="space-y-6">
                <div className="bg-purple-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-purple-900 mb-2">Fr. Angelo Secchi (1818&ndash;1878)</h3>
                  <p className="text-purple-800 text-sm mb-3">
                    Angelo Secchi, an Italian Jesuit, is considered the father of astrophysics. Working at
                    the Roman College Observatory, he was the first to classify stars by their spectral
                    type, developing a system of four (later five) spectral classes based on the absorption
                    lines in their spectra. This work was the foundation upon which the Harvard
                    Classification Scheme and all subsequent stellar classification systems were built.
                  </p>
                  <p className="text-purple-800 text-sm">
                    Secchi also made pioneering studies of the Sun, producing some of the first detailed
                    drawings of sunspots and solar prominences. He studied the planets, particularly
                    Mars (he was one of the first to use the term &ldquo;canali&rdquo; for surface
                    features), and made contributions to meteorology and terrestrial magnetism. A crater
                    on the Moon and a crater on Mars are named in his honour.
                  </p>
                </div>

                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Fr. Giovanni Battista Riccioli (1598&ndash;1671)</h3>
                  <p className="text-blue-800 text-sm">
                    Riccioli, an Italian Jesuit, created the system of lunar nomenclature that is still
                    used today. His <em>Almagestum Novum</em> (New Almagest, 1651) named lunar features
                    after famous astronomers and scientists &mdash; a convention adopted by all subsequent
                    selenographers. He also performed some of the first precise experiments on the
                    acceleration of falling bodies, contributing to the development of gravitational theory.
                  </p>
                </div>

                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-green-900 mb-2">Fr. Christoph Scheiner (1573&ndash;1650)</h3>
                  <p className="text-green-800 text-sm">
                    Scheiner, a German Jesuit, was one of the first to observe sunspots through a telescope,
                    independently of Galileo. His work <em>Rosa Ursina</em> (1630) was the most
                    comprehensive study of sunspots produced in the 17th century and included important
                    innovations in solar observation techniques, including the projection method still used
                    by amateur astronomers today.
                  </p>
                </div>
              </div>
            </div>

            {/* Seismology: The Jesuit Science */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <Mountain className="w-6 h-6 text-red-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Seismology: &ldquo;The Jesuit Science&rdquo;</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                Seismology has been called &ldquo;the Jesuit science&rdquo; because of the extraordinary
                role that Jesuit scientists played in establishing and developing it. The Jesuits were
                uniquely suited to seismological research because of their global network of colleges,
                observatories, and mission stations, which provided an infrastructure for monitoring
                earthquakes across the world.
              </p>

              <div className="bg-red-50 rounded-lg p-6 mb-4">
                <h3 className="text-lg font-semibold text-red-900 mb-3">Key Jesuit Seismologists</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-red-800 text-sm">Fr. James B. Macelwane (1883&ndash;1956)</h4>
                    <p className="text-red-700 text-xs">
                      American Jesuit, considered the father of American seismology. He established the Jesuit
                      Seismological Association, which coordinated a network of seismological stations across
                      North America. His textbook <em>Introduction to Theoretical Seismology</em> (1936) was
                      the standard reference for decades. The American Geophysical Union&rsquo;s medal for
                      young geophysicists is named in his honour.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-red-800 text-sm">Fr. Frederick Odenbach (1857&ndash;1933)</h4>
                    <p className="text-red-700 text-xs">
                      American Jesuit who established the first network of seismological stations in the United
                      States, placing instruments in 15 Jesuit colleges and universities across the country.
                      This network was the precursor of the modern U.S. seismological monitoring system.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">
                By the mid-20th century, Jesuit-operated seismological stations formed one of the most
                important global networks for earthquake monitoring. The Jesuits did not merely contribute
                to seismology &mdash; they effectively created the institutional infrastructure that made
                the modern science possible.
              </p>
            </div>

            {/* Other Jesuit Sciences */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <FlaskConical className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Jesuits Across the Sciences</h2>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-green-50 rounded-lg p-5">
                  <h3 className="font-semibold text-green-900 mb-2 flex items-center gap-2">
                    <FlaskConical className="w-5 h-5" /> Meteorology
                  </h3>
                  <p className="text-green-800 text-sm">
                    Jesuits established weather observation stations around the world. The Manila
                    Observatory, founded by the Jesuits in the Philippines in 1865, became a world leader
                    in typhoon research and weather forecasting for the Pacific region. Fr. Jose Algue
                    invented the barocyclonometer, an instrument for detecting approaching cyclones.
                  </p>
                </div>

                <div className="bg-blue-50 rounded-lg p-5">
                  <h3 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                    <Brain className="w-5 h-5" /> Mathematics
                  </h3>
                  <p className="text-blue-800 text-sm">
                    Jesuits made major contributions to mathematics. Clavius and his students advanced
                    algebra and geometry. Fr. Andre Tacquet anticipated integral calculus.
                    Fr. Girolamo Saccheri&rsquo;s work on non-Euclidean geometry (1733) was a
                    precursor to the revolutionary geometries of Bolyai, Lobachevsky, and Riemann.
                  </p>
                </div>

                <div className="bg-purple-50 rounded-lg p-5">
                  <h3 className="font-semibold text-purple-900 mb-2 flex items-center gap-2">
                    <Atom className="w-5 h-5" /> Physics
                  </h3>
                  <p className="text-purple-800 text-sm">
                    Beyond Boscovich, Jesuits made important contributions to optics (Scheiner,
                    Grimaldi), magnetism (Kircher), and acoustics. Fr. Francesco Maria Grimaldi
                    discovered the diffraction of light (1665), a phenomenon that would later be
                    central to the wave theory of light and quantum mechanics.
                  </p>
                </div>

                <div className="bg-amber-50 rounded-lg p-5">
                  <h3 className="font-semibold text-amber-900 mb-2 flex items-center gap-2">
                    <Microscope className="w-5 h-5" /> Biology &amp; Natural History
                  </h3>
                  <p className="text-amber-800 text-sm">
                    Jesuit missionaries in Asia, Africa, and the Americas were among the first
                    Europeans to document local flora, fauna, and geology. They produced detailed
                    natural histories and sent specimens back to European collections. The quinine
                    bark (cinchona), which became the primary treatment for malaria, was promoted in
                    Europe by Jesuit missionaries who learned of it from indigenous peoples in Peru.
                  </p>
                </div>
              </div>
            </div>

            {/* The Vatican Observatory */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                  <Telescope className="w-6 h-6 text-indigo-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Vatican Observatory (Specola Vaticana)</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                The Vatican Observatory was established in 1891 by Pope Leo XIII, who wished to demonstrate
                that the Church was not opposed to genuine science. Its roots, however, go back even
                further: the Tower of the Winds in the Vatican was used for astronomical observations as
                early as 1580, and a formal observatory existed at the Roman College from the 18th century.
              </p>

              <div className="bg-indigo-50 rounded-lg p-6 mb-4">
                <h3 className="text-lg font-semibold text-indigo-900 mb-3">VATT: The Vatican Advanced Technology Telescope</h3>
                <p className="text-indigo-800 text-sm mb-3">
                  Due to light pollution near Rome, the Observatory relocated its research activities. Today,
                  it operates the Vatican Advanced Technology Telescope (VATT) at the Mount Graham
                  International Observatory in southeastern Arizona. The VATT is a 1.8-metre Gregorian
                  telescope that uses cutting-edge technology to conduct research in observational cosmology,
                  the physics of stars, and the search for extrasolar planets.
                </p>
                <p className="text-indigo-800 text-sm">
                  The Observatory is staffed by Jesuit astronomers and hosts the biennial Vatican Observatory
                  Summer School, which brings together young astronomers from around the world for advanced
                  study. It also maintains a collection of meteorites that is one of the largest in the world.
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed">
                The Vatican Observatory is a powerful symbol of the Church&rsquo;s ongoing commitment to
                scientific research. It is not a relic or a museum piece but an active research institution
                whose scientists publish in peer-reviewed journals and participate in international
                scientific collaborations.
              </p>
            </div>

            {/* Sources */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Sources &amp; Further Reading</h3>
              <ol className="list-decimal list-inside text-gray-600 space-y-2 text-sm">
                <li>Agustin Udias, <em>Jesuit Contribution to Science: A History</em> (Springer, 2015).</li>
                <li>Jonathan Wright, <em>God&rsquo;s Soldiers: Adventure, Politics, Intrigue, and Power &mdash; A History of the Jesuits</em> (Doubleday, 2004).</li>
                <li>John L. Heilbron, <em>The Sun in the Church: Cathedrals as Solar Observatories</em> (Harvard University Press, 1999).</li>
                <li>Agustin Udias, <em>Searching the Heavens and the Earth: The History of Jesuit Observatories</em> (Kluwer Academic, 2003).</li>
                <li>William B. Ashworth Jr., &ldquo;Catholicism and Early Modern Science,&rdquo; in David C. Lindberg and Ronald L. Numbers (eds.), <em>God and Nature</em> (University of California Press, 1986).</li>
                <li>Sabina Pavone et al. (eds.), <em>The Jesuits and the Sciences, 1540&ndash;1995</em> (Institutum Historicum Societatis Iesu, 2015).</li>
                <li>Guy Consolmagno and Dan M. Davis, <em>Turn Left at Orion</em> (Cambridge University Press, 2011) &mdash; by a Jesuit astronomer at the Vatican Observatory.</li>
              </ol>
            </div>
          </div>
        )}

        {/* ==================== TAB 5: MEDIEVAL CATHOLIC SCIENCE ==================== */}
        {activeTab === 'medieval' && (
          <div className="space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Landmark className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Medieval Church: Cradle of Modern Science</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                The popular image of the Middle Ages as a &ldquo;Dark Age&rdquo; of intellectual stagnation,
                in which the Church suppressed scientific inquiry, is one of the most persistent and
                damaging myths in Western culture. Modern historians have thoroughly demolished this
                narrative. The medieval period &mdash; particularly from the 12th century onward &mdash;
                was an era of enormous intellectual innovation, technological advancement, and institutional
                creativity. And the Catholic Church was at the centre of it all.
              </p>

              <div className="bg-amber-50 rounded-lg p-6 mb-4">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">The &ldquo;Dark Ages&rdquo; Myth</h3>
                <p className="text-amber-800 text-sm mb-3">
                  The term &ldquo;Dark Ages&rdquo; was coined by the Italian humanist Petrarch in the
                  14th century, not as a description of intellectual darkness but as a literary metaphor
                  contrasting his own era with classical antiquity. It was later popularized by
                  Enlightenment-era polemicists who had an ideological interest in portraying the
                  Church-dominated Middle Ages as a period of ignorance and superstition.
                </p>
                <p className="text-amber-800 text-sm">
                  Modern historians of science have moved decisively away from this narrative. As historian
                  Edward Grant has demonstrated, the medieval period produced fundamental innovations in
                  logic, mathematics, optics, mechanics, and astronomy. The institutional and intellectual
                  foundations of the Scientific Revolution were laid in the medieval universities, which
                  were themselves products of the Church.
                </p>
              </div>
            </div>

            {/* The University System */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The University: A Catholic Invention</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The university as an institution &mdash; a self-governing community of scholars with
                defined curricula, degree programs, academic freedom, and legal protections &mdash; was
                invented by the Catholic Church. Nothing like it existed in the ancient world, in Islam,
                in China, or in any other civilization. It is a uniquely European and specifically
                Catholic creation.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 rounded-lg p-5">
                  <h3 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                    <MapPin className="w-5 h-5" /> University of Bologna (1088)
                  </h3>
                  <p className="text-blue-800 text-sm">
                    Generally considered the oldest university in the Western world. Founded by scholars
                    studying Roman law, it received papal recognition and became the model for the
                    &ldquo;student university,&rdquo; where students themselves governed the institution.
                  </p>
                </div>

                <div className="bg-green-50 rounded-lg p-5">
                  <h3 className="font-semibold text-green-900 mb-2 flex items-center gap-2">
                    <MapPin className="w-5 h-5" /> University of Paris (c. 1150)
                  </h3>
                  <p className="text-green-800 text-sm">
                    Grew out of the cathedral school of Notre-Dame. It became the model for the
                    &ldquo;masters&rsquo; university,&rdquo; governed by the professors. Its theology
                    faculty was the most prestigious in Christendom. Thomas Aquinas, Bonaventure, and
                    Albert the Great all taught here.
                  </p>
                </div>

                <div className="bg-purple-50 rounded-lg p-5">
                  <h3 className="font-semibold text-purple-900 mb-2 flex items-center gap-2">
                    <MapPin className="w-5 h-5" /> University of Oxford (1096&ndash;1167)
                  </h3>
                  <p className="text-purple-800 text-sm">
                    The oldest university in the English-speaking world. Grew from informal gatherings
                    of scholars under Church patronage. It produced some of the most important medieval
                    scientists, including Robert Grosseteste and Roger Bacon.
                  </p>
                </div>

                <div className="bg-red-50 rounded-lg p-5">
                  <h3 className="font-semibold text-red-900 mb-2 flex items-center gap-2">
                    <MapPin className="w-5 h-5" /> University of Cambridge (1209)
                  </h3>
                  <p className="text-red-800 text-sm">
                    Founded by scholars who left Oxford after a dispute. Like Oxford, it was a Church
                    institution from its inception. By 1500, the Church had established over 60
                    universities across Europe, creating an unprecedented continent-wide infrastructure
                    for learning and research.
                  </p>
                </div>
              </div>

              <div className="bg-indigo-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-indigo-900 mb-3">Canon Law and Academic Freedom</h3>
                <p className="text-indigo-800 text-sm">
                  A crucial and often overlooked fact: the Church&rsquo;s canon law provided scholars with
                  legal protections that enabled free inquiry. University scholars enjoyed special legal
                  status (the <em>privilegium fori</em>) that shielded them from local secular authorities.
                  Popes regularly issued bulls confirming university privileges and protecting academic
                  freedom. The <em>Parens Scientiarum</em> (1231), issued by Pope Gregory IX for the
                  University of Paris, has been called &ldquo;the Magna Carta of the university,&rdquo;
                  granting the university the right to self-governance, including the power to suspend
                  lectures as a protest against interference. This institutional protection of intellectual
                  freedom was a necessary precondition for the later development of modern science.
                </p>
              </div>
            </div>

            {/* St. Albert the Great */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">St. Albert the Great (c. 1200&ndash;1280)</h2>
              </div>

              <div className="flex flex-wrap gap-3 mb-6">
                <span className="bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full">Dominican Friar</span>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">Doctor of the Church</span>
                <span className="bg-amber-100 text-amber-800 text-xs font-medium px-3 py-1 rounded-full">Patron Saint of Natural Scientists</span>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                Albert the Great (Albertus Magnus) was a German Dominican friar who is the patron saint
                of natural scientists &mdash; a title officially bestowed by Pope Pius XII in 1941. He
                was one of the most prolific scholars of the Middle Ages, writing on an astonishing
                range of subjects including biology, chemistry, physics, astronomy, geography, botany,
                zoology, mineralogy, and philosophy.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                Albert was remarkable for his insistence on observation and experiment at a time when
                most scholars were content to cite ancient authorities. His works on botany and zoology
                include detailed, original descriptions of plants and animals based on his own
                observations &mdash; not simply repetitions of Aristotle or Pliny. He was the first
                medieval scholar to make original contributions to the natural sciences based on
                empirical investigation.
              </p>

              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-3">Teacher of Thomas Aquinas</h3>
                <p className="text-green-800 text-sm">
                  Albert&rsquo;s most famous student was Thomas Aquinas, whom Albert recognized early on
                  as a genius. When other students mocked the quiet young friar as a &ldquo;dumb ox,&rdquo;
                  Albert reportedly said: &ldquo;We call this young man a dumb ox, but his bellowing in
                  doctrine will one day resound throughout the world.&rdquo; Together, Albert and Aquinas
                  developed the great synthesis of faith and reason that became the intellectual backbone
                  of the Catholic tradition &mdash; and which created the philosophical framework within
                  which modern science could emerge.
                </p>
              </div>
            </div>

            {/* Roger Bacon */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <FlaskConical className="w-6 h-6 text-purple-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Roger Bacon (c. 1214&ndash;1292)</h2>
              </div>

              <div className="flex flex-wrap gap-3 mb-6">
                <span className="bg-purple-100 text-purple-800 text-xs font-medium px-3 py-1 rounded-full">Franciscan Friar</span>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">Pioneer of the Experimental Method</span>
                <span className="bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full">&ldquo;Doctor Mirabilis&rdquo;</span>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                Roger Bacon was an English Franciscan friar and one of the earliest European advocates
                of the empirical and experimental method in science. Known as <em>Doctor Mirabilis</em>
                (&ldquo;Wonderful Teacher&rdquo;), Bacon argued forcefully that knowledge should be
                grounded in observation and experiment rather than mere reliance on ancient authorities.
              </p>

              <div className="bg-purple-50 rounded-lg p-6 mb-4">
                <h3 className="text-lg font-semibold text-purple-900 mb-3">Contributions</h3>
                <p className="text-purple-800 text-sm mb-3">
                  Bacon&rsquo;s <em>Opus Majus</em> (Great Work, 1267), written at the request of Pope
                  Clement IV, is a vast encyclopaedia of the sciences. It includes major sections on
                  optics, mathematics, and natural philosophy, as well as a passionate argument for
                  the value of experimental science (<em>scientia experimentalis</em>).
                </p>
                <p className="text-purple-800 text-sm">
                  In optics, Bacon made significant advances in understanding the behaviour of light,
                  lenses, and the rainbow. He proposed the use of corrective lenses for vision
                  (anticipating spectacles) and may have conceived of the telescope and microscope. He
                  also wrote on gunpowder (though he did not invent it), geography, and calendar reform.
                  His emphasis on mathematics as the foundation of all science was far ahead of his time.
                </p>
              </div>
            </div>

            {/* Robert Grosseteste */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Robert Grosseteste (c. 1175&ndash;1253)</h2>
              </div>

              <div className="flex flex-wrap gap-3 mb-6">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">Bishop of Lincoln</span>
                <span className="bg-purple-100 text-purple-800 text-xs font-medium px-3 py-1 rounded-full">Pioneer of Scientific Method</span>
                <span className="bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full">Optics &amp; Astronomy</span>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                Robert Grosseteste was the Bishop of Lincoln &mdash; the largest diocese in England &mdash;
                and one of the most important intellectual figures of the 13th century. He is considered
                by many historians to be one of the earliest proponents of what would later be called
                the scientific method. He argued that scientific inquiry should proceed by a combination
                of observation, hypothesis formation, and experimental testing &mdash; a remarkably
                modern approach for a 13th-century bishop.
              </p>

              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">Light and the Science of Optics</h3>
                <p className="text-blue-800 text-sm">
                  Grosseteste was fascinated by the nature of light and wrote extensively on optics. His
                  treatise <em>De Luce</em> (On Light) proposed that light was the fundamental form from
                  which all things were made &mdash; an idea that, while couched in medieval metaphysics,
                  anticipated in a remarkable way the modern understanding of electromagnetic radiation
                  as fundamental to the physical universe. He also wrote on the rainbow, planetary motion,
                  and the tides. His student, Roger Bacon, carried forward and expanded his work.
                </p>
              </div>
            </div>

            {/* Jean Buridan */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <Atom className="w-6 h-6 text-red-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Jean Buridan (c. 1301&ndash;1358)</h2>
              </div>

              <div className="flex flex-wrap gap-3 mb-6">
                <span className="bg-red-100 text-red-800 text-xs font-medium px-3 py-1 rounded-full">Catholic Priest</span>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">Rector, University of Paris</span>
                <span className="bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full">Theory of Impetus</span>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                Jean Buridan was a French Catholic priest who served twice as rector of the University
                of Paris, the most prestigious university in medieval Christendom. His most important
                contribution to science was his theory of impetus, which he developed as a critique
                of Aristotelian physics.
              </p>

              <div className="bg-red-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-red-900 mb-3">The Theory of Impetus: Precursor to Newton</h3>
                <p className="text-red-800 text-sm mb-3">
                  Aristotle had taught that a moving object requires a continuous external force to keep
                  it moving. Buridan rejected this, arguing instead that when an object is set in motion,
                  it acquires an internal force &mdash; an <em>impetus</em> &mdash; that keeps it moving
                  until it is diminished by air resistance or gravity.
                </p>
                <p className="text-red-800 text-sm">
                  This theory was a critical step on the road from Aristotelian physics to Newtonian
                  mechanics. Buridan&rsquo;s impetus is a direct precursor to Newton&rsquo;s first law
                  of motion (the law of inertia). He even applied the concept to celestial bodies,
                  suggesting that God could have given the heavenly spheres an initial impetus at
                  creation, after which they would continue to move without further divine intervention
                  &mdash; an idea that anticipated the mechanistic worldview of later centuries.
                </p>
              </div>
            </div>

            {/* Nicole Oresme */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                  <Globe className="w-6 h-6 text-indigo-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Nicole Oresme (c. 1320&ndash;1382)</h2>
              </div>

              <div className="flex flex-wrap gap-3 mb-6">
                <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-3 py-1 rounded-full">Bishop of Lisieux</span>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">Mathematician &amp; Economist</span>
                <span className="bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full">Anticipated Copernicus</span>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                Nicole Oresme was a French cleric who became Bishop of Lisieux and was one of the most
                brilliant and original thinkers of the 14th century. His contributions span mathematics,
                physics, astronomy, economics, and philosophy.
              </p>

              <div className="bg-indigo-50 rounded-lg p-6 mb-4">
                <h3 className="text-lg font-semibold text-indigo-900 mb-3">Groundbreaking Innovations</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-indigo-800 text-sm">Graphing Techniques</h4>
                    <p className="text-indigo-700 text-xs">
                      Oresme invented a system of graphing that used rectangular coordinates to represent
                      the variation of qualities &mdash; a direct precursor to the Cartesian coordinate
                      system developed by Descartes 250 years later. He used these graphs to prove the
                      mean speed theorem, which relates uniform acceleration to distance traveled.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-indigo-800 text-sm">The Rotation of the Earth</h4>
                    <p className="text-indigo-700 text-xs">
                      Over 150 years before Copernicus, Oresme considered the possibility that the Earth
                      rotates on its axis rather than the heavens rotating around the Earth. While he
                      ultimately did not endorse this view as proven, his analysis of the arguments for
                      and against was remarkably sophisticated and directly anticipated the Copernican
                      revolution.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-indigo-800 text-sm">Monetary Theory</h4>
                    <p className="text-indigo-700 text-xs">
                      Oresme&rsquo;s <em>De Moneta</em> (On Money) is considered the first work of
                      monetary economics, anticipating by centuries the ideas of later economists. He
                      argued against currency debasement by rulers and defended the rights of the people
                      against government manipulation of the money supply.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Medieval Innovation */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Medieval Technological Revolution</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Far from being an era of stagnation, the medieval period saw an extraordinary burst of
                technological innovation, much of it driven by the monastic and cathedral communities
                of the Church. The medieval economy was transformed by innovations that had no precedent
                in the ancient world.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-green-900 text-sm mb-1">The Mechanical Clock</h4>
                  <p className="text-green-800 text-xs">
                    Invented in medieval Europe (c. 1280), likely in monastic settings where precise
                    timekeeping was needed for the Liturgy of the Hours. The mechanical clock was
                    arguably the most important invention of the Middle Ages, enabling the precise
                    measurement of time that modern science and industry require.
                  </p>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-900 text-sm mb-1">Eyeglasses</h4>
                  <p className="text-blue-800 text-xs">
                    Invented in Italy around 1286, probably by a Franciscan or Dominican friar. Roger
                    Bacon had written about the magnifying properties of lenses shortly before. This
                    invention dramatically extended the productive life of scholars and craftsmen, and
                    was a precursor to the telescope and microscope.
                  </p>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-900 text-sm mb-1">The Printing Press</h4>
                  <p className="text-purple-800 text-xs">
                    Gutenberg&rsquo;s movable type printing press (c. 1440) revolutionized the
                    transmission of knowledge. The Church was the printing press&rsquo;s greatest
                    patron and customer. The first book printed was the Bible. Printing made the
                    Scientific Revolution possible by enabling the rapid dissemination of new ideas.
                  </p>
                </div>
                <div className="bg-amber-50 rounded-lg p-4">
                  <h4 className="font-semibold text-amber-900 text-sm mb-1">Agricultural Innovations</h4>
                  <p className="text-amber-800 text-xs">
                    Monasteries, particularly the Cistercians, were centres of agricultural innovation.
                    The heavy plough, the horse collar, three-field crop rotation, and water-powered
                    mills were developed and spread through monastic networks, dramatically increasing
                    food production and freeing labour for intellectual pursuits.
                  </p>
                </div>
              </div>
            </div>

            {/* Sources */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Sources &amp; Further Reading</h3>
              <ol className="list-decimal list-inside text-gray-600 space-y-2 text-sm">
                <li>Edward Grant, <em>God and Reason in the Middle Ages</em> (Cambridge University Press, 2001).</li>
                <li>Edward Grant, <em>The Foundations of Modern Science in the Middle Ages</em> (Cambridge University Press, 1996).</li>
                <li>David C. Lindberg, <em>The Beginnings of Western Science</em>, 2nd ed. (University of Chicago Press, 2007).</li>
                <li>Thomas E. Woods Jr., <em>How the Catholic Church Built Western Civilization</em> (Regnery, 2005).</li>
                <li>James Hannam, <em>God&rsquo;s Philosophers: How the Medieval World Laid the Foundations of Modern Science</em> (Icon Books, 2009).</li>
                <li>Toby E. Huff, <em>The Rise of Early Modern Science: Islam, China, and the West</em>, 2nd ed. (Cambridge University Press, 2003).</li>
                <li>Jean Gimpel, <em>The Medieval Machine: The Industrial Revolution of the Middle Ages</em> (Penguin, 1977).</li>
              </ol>
            </div>
          </div>
        )}

        {/* ==================== TAB 6: PONTIFICAL ACADEMY OF SCIENCES ==================== */}
        {activeTab === 'pontifical-academy' && (
          <div className="space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Crown className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Pontifical Academy of Sciences</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                The Pontifical Academy of Sciences is the Vatican&rsquo;s scientific advisory body and one
                of the most remarkable institutions in the world. It is the only supranational academy of
                sciences in existence, and its members include some of the most distinguished scientists
                on earth &mdash; regardless of their nationality, race, or religious belief. Membership is
                based purely on scientific merit, and the Academy includes Catholics, Protestants, Jews,
                Muslims, and atheists alike.
              </p>

              <p className="text-gray-700 leading-relaxed">
                The Academy serves as the Church&rsquo;s primary interface with the world of cutting-edge
                science. It advises the Pope and the Holy See on scientific matters, organizes study
                weeks and conferences on pressing scientific questions, and publishes its proceedings for
                the benefit of both the Church and the broader scientific community.
              </p>
            </div>

            {/* History */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">A History Stretching Back to 1603</h2>
              </div>

              <div className="space-y-6">
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">The Accademia dei Lincei (1603)</h3>
                  <p className="text-blue-800 text-sm mb-3">
                    The Academy traces its origins to the <em>Accademia dei Lincei</em> (Academy of the
                    Lynx-Eyed), founded in Rome on 17 August 1603 by the 18-year-old Roman prince Federico
                    Cesi, along with three other young scholars. The Lincei was one of the earliest
                    scientific academies in Europe, predating both the Royal Society of London (1660) and
                    the French Academie des Sciences (1666).
                  </p>
                  <p className="text-blue-800 text-sm">
                    Its most famous member was Galileo Galilei, who joined in 1611 and was so proud of his
                    membership that he signed himself &ldquo;Galileo Galilei Linceo&rdquo; on the title
                    page of several of his works. The original Accademia dei Lincei declined after
                    Cesi&rsquo;s death in 1630 but was revived several times.
                  </p>
                </div>

                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-green-900 mb-2">Papal Refounding (1847 &amp; 1936)</h3>
                  <p className="text-green-800 text-sm mb-3">
                    In 1847, Pope Pius IX refounded the academy as the <em>Pontificia Accademia dei Nuovi
                    Lincei</em> (Pontifical Academy of the New Lynxes). In 1936, Pope Pius XI gave the
                    academy its current name and new statutes, establishing it as the Pontifical Academy
                    of Sciences (<em>Pontificia Academia Scientiarum</em>). Pius XI defined its purpose:
                    to honour pure science wherever it is found, to promote freedom of scientific research,
                    and to foster the relationship between faith and reason.
                  </p>
                  <p className="text-green-800 text-sm">
                    The 1936 refounding was a deliberate statement by the Church that it valued and supported
                    scientific inquiry at the highest level. By appointing members regardless of religious
                    affiliation, the Pope signalled that the Church recognized truth wherever it was found
                    and honoured the vocation of the scientist as a genuine service to humanity.
                  </p>
                </div>
              </div>
            </div>

            {/* Notable Members */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-purple-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Nobel Laureates and Distinguished Members</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The Pontifical Academy of Sciences has counted among its members many of the greatest
                scientists of the 20th and 21st centuries. The list of Nobel Prize winners who have been
                members is extraordinary:
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div className="bg-purple-50 rounded-lg p-5">
                  <h3 className="font-semibold text-purple-900 mb-3">Physics</h3>
                  <ul className="text-purple-800 text-sm space-y-2">
                    <li className="flex items-start gap-2">
                      <Atom className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span><strong>Max Planck</strong> (Nobel 1918) &mdash; Founder of quantum theory</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Atom className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span><strong>Niels Bohr</strong> (Nobel 1922) &mdash; Atomic structure and quantum mechanics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Atom className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span><strong>Werner Heisenberg</strong> (Nobel 1932) &mdash; Uncertainty principle</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Atom className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span><strong>Erwin Schrodinger</strong> (Nobel 1933) &mdash; Wave mechanics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Atom className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span><strong>Paul Dirac</strong> (Nobel 1933) &mdash; Quantum electrodynamics</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-lg p-5">
                  <h3 className="font-semibold text-blue-900 mb-3">Other Sciences</h3>
                  <ul className="text-blue-800 text-sm space-y-2">
                    <li className="flex items-start gap-2">
                      <Dna className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span><strong>Alexander Fleming</strong> (Nobel 1945) &mdash; Discovery of penicillin</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Dna className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span><strong>Charles Hard Townes</strong> (Nobel 1964) &mdash; Laser physics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Dna className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span><strong>Abdus Salam</strong> (Nobel 1979) &mdash; Electroweak unification (Muslim member)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Dna className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span><strong>Ahmed Zewail</strong> (Nobel 1999) &mdash; Femtochemistry</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Dna className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span><strong>Stephen Hawking</strong> &mdash; Attended meetings; presented to Popes</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-amber-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">Membership by the Numbers</h3>
                <p className="text-amber-800 text-sm">
                  The Academy currently has approximately 80 members, appointed for life by the Pope on the
                  recommendation of existing academicians. Members come from every continent and represent
                  every major branch of the natural and mathematical sciences. Over its history, the Academy
                  has included more than 50 Nobel laureates. This makes the Pontifical Academy of Sciences
                  one of the most prestigious scientific bodies in the world &mdash; and it is governed by
                  the Pope.
                </p>
              </div>
            </div>

            {/* Structure and Work */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Landmark className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">How the Academy Works</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The Academy is headquartered in the Casina Pio IV, an elegant 16th-century villa in the
                Vatican Gardens. It conducts its work through plenary sessions, study weeks, workshops,
                and conferences, bringing together leading scientists to address topics of pressing
                importance.
              </p>

              <div className="space-y-4">
                <div className="bg-green-50 rounded-lg p-5">
                  <h3 className="font-semibold text-green-900 mb-2">Plenary Sessions</h3>
                  <p className="text-green-800 text-sm">
                    The full Academy meets every two years in a plenary session devoted to a major
                    scientific theme. Recent themes have included the science of sustainability, the
                    implications of artificial intelligence, and the frontiers of neuroscience. The Pope
                    typically addresses the academicians at the opening or closing of each plenary session.
                  </p>
                </div>

                <div className="bg-blue-50 rounded-lg p-5">
                  <h3 className="font-semibold text-blue-900 mb-2">Study Weeks</h3>
                  <p className="text-blue-800 text-sm">
                    The Academy organizes intensive study weeks on specific topics, inviting both members
                    and outside experts. These events produce detailed reports and policy recommendations
                    that inform the Holy See&rsquo;s positions on scientific and ethical issues. Topics
                    have included gene editing, nuclear energy, food security, and water resource management.
                  </p>
                </div>

                <div className="bg-purple-50 rounded-lg p-5">
                  <h3 className="font-semibold text-purple-900 mb-2">Publications</h3>
                  <p className="text-purple-800 text-sm">
                    The Academy publishes its proceedings in the <em>Acta</em> and <em>Scripta Varia</em>
                    series, making the results of its deliberations available to the wider scientific
                    community and the public. It also issues statements and declarations on matters of
                    scientific and ethical significance.
                  </p>
                </div>
              </div>
            </div>

            {/* Current Engagement */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <Globe className="w-6 h-6 text-red-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Addressing the Challenges of Today</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The Pontifical Academy of Sciences is not a historical curiosity or a ceremonial body.
                It is actively engaged with the most pressing scientific and ethical challenges facing
                humanity today. The Academy&rsquo;s recent work includes:
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-red-50 rounded-lg p-5">
                  <h3 className="font-semibold text-red-900 mb-2 flex items-center gap-2">
                    <Globe className="w-5 h-5" /> Climate Change
                  </h3>
                  <p className="text-red-800 text-sm">
                    The Academy has been a leading voice on climate science. Its members provided scientific
                    input for Pope Francis&rsquo;s encyclical <em>Laudato Si&rsquo;</em> (2015) on care
                    for the environment. The Academy has convened multiple workshops on climate change,
                    deforestation, and biodiversity loss, producing detailed scientific assessments that
                    have informed Church teaching and international policy discussions.
                  </p>
                </div>

                <div className="bg-blue-50 rounded-lg p-5">
                  <h3 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                    <Atom className="w-5 h-5" /> Nuclear Disarmament
                  </h3>
                  <p className="text-blue-800 text-sm">
                    Since the Cold War, the Academy has been involved in the movement for nuclear
                    disarmament. It has convened scientists and policymakers to discuss the dangers of
                    nuclear weapons, the ethics of deterrence, and pathways to a nuclear-weapons-free
                    world. This work has informed successive Popes&rsquo; calls for nuclear abolition.
                  </p>
                </div>

                <div className="bg-purple-50 rounded-lg p-5">
                  <h3 className="font-semibold text-purple-900 mb-2 flex items-center gap-2">
                    <Brain className="w-5 h-5" /> Artificial Intelligence Ethics
                  </h3>
                  <p className="text-purple-800 text-sm">
                    The Academy has convened workshops on the ethical implications of artificial
                    intelligence, including questions of algorithmic bias, surveillance, autonomous
                    weapons, and the impact of AI on employment and human dignity. The Vatican has been
                    one of the most active voices in the global conversation about AI governance and ethics.
                  </p>
                </div>

                <div className="bg-green-50 rounded-lg p-5">
                  <h3 className="font-semibold text-green-900 mb-2 flex items-center gap-2">
                    <Dna className="w-5 h-5" /> Genetic Engineering &amp; Bioethics
                  </h3>
                  <p className="text-green-800 text-sm">
                    With the advent of CRISPR and other gene-editing technologies, the Academy has
                    addressed the profound ethical questions raised by the ability to modify the human
                    genome. It has also studied issues related to stem cell research, organ transplantation,
                    and end-of-life care, providing scientific context for the Church&rsquo;s moral
                    teachings.
                  </p>
                </div>

                <div className="bg-amber-50 rounded-lg p-5">
                  <h3 className="font-semibold text-amber-900 mb-2 flex items-center gap-2">
                    <Users className="w-5 h-5" /> Sustainable Development
                  </h3>
                  <p className="text-amber-800 text-sm">
                    The Academy has worked extensively on issues of sustainable development, food security,
                    and access to clean water, particularly for the world&rsquo;s poorest populations.
                    It collaborates with the United Nations and other international bodies to bring
                    scientific expertise to bear on global development challenges.
                  </p>
                </div>

                <div className="bg-indigo-50 rounded-lg p-5">
                  <h3 className="font-semibold text-indigo-900 mb-2 flex items-center gap-2">
                    <Microscope className="w-5 h-5" /> Pandemic Response
                  </h3>
                  <p className="text-indigo-800 text-sm">
                    During the COVID-19 pandemic, the Academy played an active role in providing scientific
                    guidance to the Holy See. It convened experts on vaccine development, public health
                    policy, and the ethical distribution of vaccines, advocating strongly for equitable
                    global access to vaccination.
                  </p>
                </div>
              </div>
            </div>

            {/* The Bridge Between Faith and Science */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-indigo-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Bridge Between Faith and Science</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                The Pontifical Academy of Sciences represents the Church&rsquo;s enduring conviction
                that faith and reason are not enemies but allies. By bringing together the world&rsquo;s
                finest scientific minds &mdash; regardless of their personal beliefs &mdash; to advise
                the Pope and serve humanity, the Academy embodies the principle articulated by St. John
                Paul II: &ldquo;Faith and reason are like two wings on which the human spirit rises to
                the contemplation of truth.&rdquo;
              </p>

              <div className="bg-indigo-50 rounded-lg p-6 mb-4">
                <h3 className="text-lg font-semibold text-indigo-900 mb-3">Papal Statements on Science</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-indigo-400 pl-4">
                    <p className="text-indigo-800 italic text-sm">
                      &ldquo;The Church and her pastors are not opposed to true and solid science, whether
                      human or divine, but embrace it, encourage it, and promote it with the fullest
                      possible devotion.&rdquo;
                    </p>
                    <p className="text-indigo-700 text-xs mt-1">&mdash; First Vatican Council (1870)</p>
                  </div>
                  <div className="border-l-4 border-indigo-400 pl-4">
                    <p className="text-indigo-800 italic text-sm">
                      &ldquo;Science can purify religion from error and superstition; religion can purify
                      science from idolatry and false absolutes. Each can draw the other into a wider
                      world, a world in which both can flourish.&rdquo;
                    </p>
                    <p className="text-indigo-700 text-xs mt-1">&mdash; Pope St. John Paul II, Letter to Fr. George Coyne (1988)</p>
                  </div>
                  <div className="border-l-4 border-indigo-400 pl-4">
                    <p className="text-indigo-800 italic text-sm">
                      &ldquo;There cannot be a contradiction between faith and science because God is the
                      author of both nature and revelation, and He cannot contradict Himself.&rdquo;
                    </p>
                    <p className="text-indigo-700 text-xs mt-1">&mdash; Pope Benedict XVI (paraphrasing the teaching of Vatican I)</p>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">
                The existence of the Pontifical Academy of Sciences &mdash; a body of the world&rsquo;s
                leading scientists, appointed by the Pope, meeting in the Vatican Gardens &mdash; is
                perhaps the single most powerful refutation of the myth that the Catholic Church is
                opposed to science. It is a living institution that demonstrates, year after year, that
                the pursuit of scientific truth and the life of faith can and do go together.
              </p>
            </div>

            {/* Sources */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Sources &amp; Further Reading</h3>
              <ol className="list-decimal list-inside text-gray-600 space-y-2 text-sm">
                <li>Pontifical Academy of Sciences, official website: <em>www.pas.va</em>.</li>
                <li>Nicola Cabibbo et al. (eds.), <em>Science and the Future of Mankind: Science for Man and Man for Science</em> (Pontifical Academy of Sciences, 2000).</li>
                <li>Marcelo Sanchez Sorondo (ed.), <em>The Pontifical Academy of Sciences: A Historical Profile</em> (Libreria Editrice Vaticana, 2003).</li>
                <li>Pope St. John Paul II, <em>Fides et Ratio</em> (Encyclical on Faith and Reason, 1998).</li>
                <li>Pope Francis, <em>Laudato Si&rsquo;</em> (Encyclical on Care for Our Common Home, 2015).</li>
                <li>Mariano Artigas and Melchor Sanchez de Toca, <em>Galileo and the Vatican: The Story of the Pontifical Academy of Sciences</em> (Vatican Observatory Publications, 2006).</li>
                <li>George V. Coyne and Alessandro Omizzolo, <em>Wayfarers in the Cosmos: The Human Quest for Meaning</em> (Crossroad, 2002).</li>
              </ol>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}
