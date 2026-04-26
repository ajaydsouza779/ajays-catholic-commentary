'use client'

import { useState } from 'react'
import {
  Telescope,
  User,
  BookOpen,
  Scale,
  Heart,
  ScrollText,
  Calendar,
  Star,
  Church,
  Globe,
  AlertTriangle,
  Quote,
  BookMarked,
  GraduationCap,
  Shield,
  Eye,
  Sun,
  Moon,
  MessageCircle,
  CheckCircle,
  XCircle,
  Info,
  FileText,
  Lightbulb,
  Clock,
  MapPin,
  Award,
  Cross,
} from 'lucide-react'

type TabKey =
  | 'the-man'
  | 'the-controversy'
  | 'the-trial'
  | 'maria-celeste'
  | 'bible-and-sun'
  | 'rehabilitation'

export default function GalileoPage() {
  const [activeTab, setActiveTab] = useState<TabKey>('the-man')

  const tabs: { key: TabKey; label: string }[] = [
    { key: 'the-man', label: 'The Man' },
    { key: 'the-controversy', label: 'The Controversy' },
    { key: 'the-trial', label: 'The Trial' },
    { key: 'maria-celeste', label: 'His Daughter Maria Celeste' },
    { key: 'bible-and-sun', label: 'Does the Bible Say the Sun Revolves?' },
    { key: 'rehabilitation', label: 'The Rehabilitation' },
  ]

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            The Galileo Affair
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The story of Galileo Galilei and the Catholic Church is the most famous episode in the
            history of science and religion &mdash; and also one of the most misunderstood. Far from a
            simple tale of faith versus reason, the Galileo affair is a complex human drama involving
            brilliant science, stubborn personalities, genuine theological questions, political intrigue,
            and a friendship gone terribly wrong. Understanding what actually happened is essential for
            anyone interested in the relationship between faith and science.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg shadow-lg p-1 overflow-x-auto">
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
        {/* TAB 1: THE MAN                                               */}
        {/* ============================================================ */}
        {activeTab === 'the-man' && (
          <div className="space-y-8">
            {/* Life Overview */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Galileo Galilei (1564&ndash;1642)
              </h2>
              <p className="text-gray-600 mb-6">
                Galileo Galilei was born on February 15, 1564, in Pisa, in the Grand Duchy of Tuscany &mdash;
                the same year that Shakespeare was born and Michelangelo died. He was the eldest of six
                children in a family of minor Florentine nobility. His father, Vincenzo Galilei, was a
                talented musician and music theorist whose experimental approach to acoustics likely
                influenced his son&apos;s scientific temperament. From the beginning, Galileo was a man shaped
                by the Catholic culture of Renaissance Italy &mdash; baptized at the Cathedral of Pisa, educated
                by monks, and deeply embedded in a world where faith and learning were inseparable.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Early Life and Education</h3>
                    <p className="text-gray-600 mt-2">
                      At age eleven, Galileo was sent to the Camaldolese monastery at Vallombrosa, where he
                      received his early education and briefly considered becoming a monk. His father, hoping
                      for a more lucrative career, enrolled him at the University of Pisa to study medicine in
                      1581. But Galileo was captivated by mathematics, and legend has it that he discovered the
                      isochronism of the pendulum by watching a swinging chandelier in the Cathedral of Pisa and
                      timing its oscillations against his own pulse. By 1585, he had left the university without a
                      degree, determined to pursue mathematics and natural philosophy instead.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">The Professor at Padua (1592&ndash;1610)</h3>
                    <p className="text-gray-600 mt-2">
                      After a brief appointment at Pisa, Galileo secured the chair of mathematics at the
                      University of Padua in the Republic of Venice &mdash; a position he would hold for eighteen
                      years and later call the happiest period of his life. At Padua, he lectured on Euclid,
                      Ptolemy, and military engineering, took private students, and supplemented his modest salary
                      by manufacturing mathematical instruments. He was a gifted teacher with a flair for
                      demonstration and argument. It was here that he began his experiments with motion, laying
                      the groundwork for what would become modern kinematics &mdash; the study of bodies in motion
                      irrespective of the forces acting on them.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Family Life</h3>
                    <p className="text-gray-600 mt-2">
                      During his years at Padua, Galileo entered into a relationship with Marina Gamba, a
                      Venetian woman, with whom he had three children: Virginia (born 1600), Livia (born 1601),
                      and Vincenzo (born 1606). He never married Marina, and when he moved to Florence in 1610,
                      the relationship ended. His two daughters, born out of wedlock and therefore considered
                      unmarriageable by the social conventions of the time, were placed in the convent of San
                      Matteo in Arcetri. Virginia, as Sister Maria Celeste, would become the greatest emotional
                      anchor of his life.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* The Telescope */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                <div className="flex items-center gap-3">
                  <Telescope className="w-8 h-8 text-indigo-600" />
                  <span>The Telescope Revolution (1609&ndash;1610)</span>
                </div>
              </h2>
              <p className="text-gray-600 mb-6">
                In the summer of 1609, Galileo heard reports of a new optical instrument from the
                Netherlands &mdash; a &ldquo;spyglass&rdquo; that could make distant objects appear closer. He did not
                invent the telescope, but he did something far more important: he turned it toward the
                sky. Within months, he had built instruments with magnifications of up to 20x and began
                a campaign of observations that would overturn two thousand years of cosmology. In March
                1610, he published his findings in a short book called <em>Sidereus Nuncius</em> (The Starry
                Messenger), and overnight he became the most famous scientist in Europe.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-indigo-50 p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-indigo-200 rounded-full flex items-center justify-center">
                      <Moon className="w-5 h-5 text-indigo-700" />
                    </div>
                    <h3 className="text-xl font-semibold text-indigo-800">Mountains on the Moon</h3>
                  </div>
                  <p className="text-indigo-700">
                    Through his telescope, Galileo saw that the Moon was not a perfect, smooth sphere as
                    Aristotelian physics demanded, but had mountains, valleys, and craters &mdash; just like
                    the Earth. This shattered the ancient distinction between the &ldquo;perfect&rdquo; celestial
                    realm and the &ldquo;corrupt&rdquo; terrestrial world. The Moon was a place, not an ethereal
                    light.
                  </p>
                </div>

                <div className="bg-amber-50 p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-amber-200 rounded-full flex items-center justify-center">
                      <Star className="w-5 h-5 text-amber-700" />
                    </div>
                    <h3 className="text-xl font-semibold text-amber-800">Moons of Jupiter</h3>
                  </div>
                  <p className="text-amber-700">
                    On January 7, 1610, Galileo observed three small &ldquo;stars&rdquo; near Jupiter. Over the
                    following nights, he realized they were moons orbiting the planet. He named them the
                    &ldquo;Medicean Stars&rdquo; in honor of his patrons, the Medici family. This was revolutionary:
                    it proved that not everything in the cosmos orbited the Earth. Jupiter had its own
                    satellite system &mdash; a miniature model of the Copernican solar system.
                  </p>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-green-200 rounded-full flex items-center justify-center">
                      <Sun className="w-5 h-5 text-green-700" />
                    </div>
                    <h3 className="text-xl font-semibold text-green-800">Phases of Venus</h3>
                  </div>
                  <p className="text-green-700">
                    Galileo observed that Venus exhibited a full set of phases, just like the Moon &mdash; from
                    crescent to gibbous to full. This was impossible under the Ptolemaic system, where
                    Venus always stayed between the Earth and the Sun and could never appear &ldquo;full.&rdquo;
                    The phases of Venus proved conclusively that Venus orbited the Sun, not the Earth.
                    This was one of the strongest pieces of observational evidence against pure geocentrism.
                  </p>
                </div>

                <div className="bg-red-50 p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-red-200 rounded-full flex items-center justify-center">
                      <Sun className="w-5 h-5 text-red-700" />
                    </div>
                    <h3 className="text-xl font-semibold text-red-800">Sunspots</h3>
                  </div>
                  <p className="text-red-700">
                    Galileo observed dark spots on the surface of the Sun that appeared, moved, and
                    disappeared over time. This provided further evidence that celestial bodies were not
                    the immutable, perfect entities that Aristotelian cosmology claimed. The Sun itself
                    was changing and imperfect. This discovery also led to a bitter priority dispute with
                    the Jesuit astronomer Christoph Scheiner &mdash; a conflict that would come back to haunt
                    Galileo.
                  </p>
                </div>
              </div>
            </div>

            {/* Personality */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                The Personality: Brilliant, Combative, Irresistible
              </h2>
              <p className="text-gray-600 mb-6">
                To understand the Galileo affair, you must understand the man himself. Galileo was not a
                quiet, retiring scholar. He was a force of nature &mdash; intellectually dazzling, rhetorically
                devastating, socially ambitious, and sometimes breathtakingly arrogant. He wrote not in
                dry academic Latin but in vivid, witty Italian, reaching a wide audience beyond the
                universities. He was a brilliant polemicist who demolished opponents with sarcasm and
                mockery. He could charm cardinals and princes, but he could also make enemies with a
                cutting remark at a dinner party. His personality is essential to understanding both his
                triumphs and his downfall.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <Lightbulb className="w-5 h-5 text-blue-600" />
                    <h3 className="text-lg font-semibold text-blue-800">The Genius</h3>
                  </div>
                  <p className="text-blue-700 text-sm">
                    Einstein called Galileo &ldquo;the father of modern physics &mdash; indeed, of modern science
                    altogether.&rdquo; His combination of mathematical reasoning and experimental observation
                    created a new way of understanding nature. He didn&apos;t just discover things; he invented
                    the method by which we discover things.
                  </p>
                </div>

                <div className="bg-orange-50 p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <MessageCircle className="w-5 h-5 text-orange-600" />
                    <h3 className="text-lg font-semibold text-orange-800">The Writer</h3>
                  </div>
                  <p className="text-orange-700 text-sm">
                    Galileo was one of the finest prose stylists of his age. Italo Calvino ranked him among
                    the greatest Italian writers. His dialogues are alive with humor, dramatic tension, and
                    devastating logic. He chose to write in Italian rather than Latin specifically to reach
                    a broader audience and shape public opinion &mdash; a decision that made him both wildly
                    popular and politically dangerous.
                  </p>
                </div>

                <div className="bg-red-50 p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <AlertTriangle className="w-5 h-5 text-red-600" />
                    <h3 className="text-lg font-semibold text-red-800">The Combatant</h3>
                  </div>
                  <p className="text-red-700 text-sm">
                    Galileo could not resist a fight. He publicly humiliated opponents, picked quarrels with
                    the Jesuits (who had initially confirmed his discoveries), and consistently underestimated
                    the importance of keeping powerful people on his side. His friend and supporter Cardinal
                    Maffeo Barberini once warned him: &ldquo;You have more enemies than you think.&rdquo; Galileo did
                    not listen.
                  </p>
                </div>
              </div>
            </div>

            {/* Church Support */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                <div className="flex items-center gap-3">
                  <Church className="w-8 h-8 text-green-600" />
                  <span>The Church&apos;s Initial Support</span>
                </div>
              </h2>
              <p className="text-gray-600 mb-6">
                One of the most overlooked facts about the Galileo affair is how enthusiastically the
                Catholic Church initially embraced both Galileo and his discoveries. The popular image
                of a Church that was inherently hostile to science is simply false. Galileo operated within
                a Catholic world that was deeply interested in astronomy, mathematics, and natural philosophy.
              </p>

              <div className="space-y-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-800 mb-3">
                    The Jesuits at the Collegio Romano
                  </h3>
                  <p className="text-green-700 mb-3">
                    When Galileo published his telescopic discoveries in 1610, many were skeptical. But the
                    Jesuit astronomers at the Collegio Romano &mdash; the flagship educational institution of the
                    Catholic world &mdash; confirmed every one of his observations. In March 1611, Galileo visited
                    Rome and was welcomed as a celebrity. The Jesuits held a special ceremony at the Collegio
                    Romano to honor him. Fr. Christoph Clavius, the most respected astronomer of the age (and
                    the man behind the Gregorian calendar reform), personally endorsed Galileo&apos;s findings.
                  </p>
                  <p className="text-green-700">
                    This is worth emphasizing: the official scientific establishment of the Catholic Church
                    confirmed Galileo&apos;s observations. The Church did not reject the telescope or refuse to
                    look through it &mdash; that is a myth. The Jesuits looked, they confirmed, and they celebrated.
                  </p>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-purple-800 mb-3">
                    Cardinal Maffeo Barberini: Friend and Admirer
                  </h3>
                  <p className="text-purple-700 mb-3">
                    Among Galileo&apos;s most enthusiastic supporters was Cardinal Maffeo Barberini, a cultured
                    Florentine intellectual who loved poetry, science, and spirited debate. Barberini was
                    genuinely fascinated by Galileo&apos;s work and wrote a poem in his honor. The two men
                    developed a warm friendship, dining together, exchanging letters, and enjoying long
                    conversations about philosophy and science.
                  </p>
                  <p className="text-purple-700">
                    In 1623, Barberini was elected Pope Urban VIII. Galileo was overjoyed &mdash; his great
                    friend and admirer was now the most powerful man in Christendom. He traveled to Rome
                    and had six private audiences with the new Pope. Urban was encouraging and gave Galileo
                    permission to write about the Copernican system, provided he treated it as a hypothesis
                    rather than established fact. This friendship, and its spectacular collapse, is the
                    emotional heart of the entire Galileo affair.
                  </p>
                </div>

                <div className="bg-amber-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-amber-800 mb-3">
                    The Accademia dei Lincei
                  </h3>
                  <p className="text-amber-700">
                    Galileo was a proud member of the Accademia dei Lincei (&ldquo;Academy of the Lynx-Eyed&rdquo;),
                    one of the world&apos;s first scientific academies, founded in 1603 by Prince Federico Cesi,
                    a young Roman nobleman and devout Catholic. The Linceans published several of Galileo&apos;s
                    works and provided him with a network of intellectual support. The name &ldquo;telescope&rdquo;
                    itself was coined by a fellow Lincean, the Greek mathematician Giovanni Demisiani, at
                    a banquet in Galileo&apos;s honor in 1611. Far from being isolated, Galileo was embedded in
                    a Catholic scientific community that championed his work.
                  </p>
                </div>
              </div>
            </div>

            {/* Key Dates */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                <div className="flex items-center gap-3">
                  <Calendar className="w-8 h-8 text-teal-600" />
                  <span>Key Dates at a Glance</span>
                </div>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <span className="font-bold text-teal-700 min-w-[80px]">1564</span>
                  <span className="text-gray-700">Born in Pisa, February 15</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <span className="font-bold text-teal-700 min-w-[80px]">1581</span>
                  <span className="text-gray-700">Enters University of Pisa (medicine)</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <span className="font-bold text-teal-700 min-w-[80px]">1592</span>
                  <span className="text-gray-700">Appointed professor at Padua</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <span className="font-bold text-teal-700 min-w-[80px]">1609</span>
                  <span className="text-gray-700">Builds his first telescope</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <span className="font-bold text-teal-700 min-w-[80px]">1610</span>
                  <span className="text-gray-700">Publishes <em>Sidereus Nuncius</em>; moves to Florence</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <span className="font-bold text-teal-700 min-w-[80px]">1611</span>
                  <span className="text-gray-700">Triumphal visit to Rome; Jesuits confirm findings</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <span className="font-bold text-teal-700 min-w-[80px]">1616</span>
                  <span className="text-gray-700">Copernican system declared &ldquo;foolish and absurd&rdquo;</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <span className="font-bold text-teal-700 min-w-[80px]">1623</span>
                  <span className="text-gray-700">Friend Barberini elected Pope Urban VIII</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <span className="font-bold text-teal-700 min-w-[80px]">1632</span>
                  <span className="text-gray-700">Publishes <em>Dialogue on the Two Chief World Systems</em></span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <span className="font-bold text-teal-700 min-w-[80px]">1633</span>
                  <span className="text-gray-700">Tried and condemned; house arrest begins</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <span className="font-bold text-teal-700 min-w-[80px]">1638</span>
                  <span className="text-gray-700">Publishes <em>Two New Sciences</em> (his greatest work)</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <span className="font-bold text-teal-700 min-w-[80px]">1642</span>
                  <span className="text-gray-700">Dies at Arcetri, January 8, age 77</span>
                </div>
              </div>
            </div>

            {/* Sources */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Sources &amp; Further Reading</h3>
              <ol className="text-gray-700 space-y-2 list-decimal list-inside">
                <li>Stillman Drake, <em>Galileo at Work: His Scientific Biography</em> (University of Chicago Press, 1978).</li>
                <li>J. L. Heilbron, <em>Galileo</em> (Oxford University Press, 2010).</li>
                <li>Dava Sobel, <em>Galileo&apos;s Daughter: A Historical Memoir of Science, Faith, and Love</em> (Walker &amp; Company, 1999).</li>
                <li>Maurice A. Finocchiaro, <em>The Galileo Affair: A Documentary History</em> (University of California Press, 1989).</li>
                <li>Mario Biagioli, <em>Galileo, Courtier: The Practice of Science in the Culture of Absolutism</em> (University of Chicago Press, 1993).</li>
              </ol>
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* TAB 2: THE CONTROVERSY                                       */}
        {/* ============================================================ */}
        {activeTab === 'the-controversy' && (
          <div className="space-y-8">
            {/* The Copernican Revolution */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                <div className="flex items-center gap-3">
                  <Globe className="w-8 h-8 text-blue-600" />
                  <span>The Copernican Revolution</span>
                </div>
              </h2>
              <p className="text-gray-600 mb-6">
                The controversy at the heart of the Galileo affair did not begin with Galileo. It began in
                1543 when the Polish canon and astronomer Nicolaus Copernicus published <em>De Revolutionibus
                Orbium Coelestium</em> (&ldquo;On the Revolutions of the Heavenly Spheres&rdquo;), proposing that the
                Earth and the other planets revolve around the Sun. Copernicus dedicated his book to Pope
                Paul III, and the work circulated for decades without serious ecclesiastical objection. It
                was Galileo who turned a quiet academic hypothesis into a public firestorm.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">What Copernicus Actually Proposed</h3>
                <p className="text-blue-700 mb-3">
                  Copernicus proposed a heliocentric (sun-centered) model to replace the geocentric
                  (earth-centered) model of Ptolemy that had dominated Western astronomy for fourteen
                  centuries. In the Ptolemaic system, the Earth sat motionless at the center of the universe,
                  and the Sun, Moon, planets, and stars all revolved around it in complex nested spheres. In
                  the Copernican system, the Sun occupied the center, and the Earth became just another planet
                  orbiting it.
                </p>
                <p className="text-blue-700">
                  Crucially, Copernicus&apos;s model was not obviously better at predicting planetary positions than
                  Ptolemy&apos;s. It still used circular orbits (Kepler&apos;s elliptical orbits wouldn&apos;t come until 1609),
                  and it still needed epicycles to match observations. The heliocentric model was simpler in
                  some ways, but it lacked decisive empirical proof. This distinction between &ldquo;mathematically
                  useful&rdquo; and &ldquo;physically true&rdquo; would become the crux of the entire controversy.
                </p>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-amber-800 mb-3">
                  Tycho Brahe&apos;s Middle Way
                </h3>
                <p className="text-amber-700">
                  It is important to understand that in Galileo&apos;s time, the debate was not simply
                  &ldquo;Copernicus vs. Ptolemy.&rdquo; The great Danish astronomer Tycho Brahe (1546&ndash;1601) had
                  proposed a compromise system in which the planets orbited the Sun, but the Sun (with
                  its orbiting planets) orbited the Earth. This &ldquo;Tychonic&rdquo; system was mathematically
                  equivalent to Copernicus&apos;s for most observations, and it had the advantage of not
                  requiring the Earth to move &mdash; which seemed to contradict both common sense and
                  Scripture. Many Jesuit astronomers favored the Tychonic system, and it represented a
                  legitimate scientific alternative that Galileo tended to dismiss too hastily.
                </p>
              </div>
            </div>

            {/* The Theological Objection */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                <div className="flex items-center gap-3">
                  <BookOpen className="w-8 h-8 text-amber-600" />
                  <span>The Theological Objection</span>
                </div>
              </h2>
              <p className="text-gray-600 mb-6">
                The problem was not that the Church was anti-science. The problem was that several biblical
                passages seemed to describe a moving Sun and a stationary Earth. In the context of the
                Counter-Reformation, when the Church was defending the authority of Scripture against
                Protestant challenges, this was a sensitive issue. If Scripture could be wrong about
                astronomy, Protestants might ask, what else could it be wrong about?
              </p>

              <div className="space-y-4 mb-6">
                <div className="bg-red-50 p-5 rounded-lg border-l-4 border-red-300">
                  <h4 className="font-semibold text-red-800 mb-2">
                    <div className="flex items-center gap-2">
                      <ScrollText className="w-5 h-5" />
                      <span>Joshua 10:12&ndash;13</span>
                    </div>
                  </h4>
                  <p className="text-red-700 italic mb-2">
                    &ldquo;Then Joshua spoke to the Lord in the day when the Lord delivered up the Amorites
                    before the children of Israel, and he said in the sight of Israel: &lsquo;Sun, stand still
                    over Gibeon; and Moon, in the Valley of Aijalon.&rsquo; So the sun stood still, and the
                    moon stopped, till the people had revenge upon their enemies.&rdquo;
                  </p>
                  <p className="text-red-700 text-sm">
                    If the Sun &ldquo;stood still,&rdquo; it must normally be moving. This was the passage most
                    frequently cited against Copernicus and Galileo.
                  </p>
                </div>

                <div className="bg-orange-50 p-5 rounded-lg border-l-4 border-orange-300">
                  <h4 className="font-semibold text-orange-800 mb-2">
                    <div className="flex items-center gap-2">
                      <ScrollText className="w-5 h-5" />
                      <span>Psalm 93:1</span>
                    </div>
                  </h4>
                  <p className="text-orange-700 italic mb-2">
                    &ldquo;The world is firmly established; it shall never be moved.&rdquo;
                  </p>
                  <p className="text-orange-700 text-sm">
                    If the world &ldquo;shall never be moved,&rdquo; how could the Earth be hurtling through space?
                  </p>
                </div>

                <div className="bg-yellow-50 p-5 rounded-lg border-l-4 border-yellow-300">
                  <h4 className="font-semibold text-yellow-800 mb-2">
                    <div className="flex items-center gap-2">
                      <ScrollText className="w-5 h-5" />
                      <span>Ecclesiastes 1:5</span>
                    </div>
                  </h4>
                  <p className="text-yellow-700 italic mb-2">
                    &ldquo;The sun also rises, and the sun goes down, and hastens to the place where it arose.&rdquo;
                  </p>
                  <p className="text-yellow-700 text-sm">
                    This appears to describe the Sun as moving in a daily circuit around a stationary Earth.
                  </p>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <div className="flex items-center gap-2 mb-3">
                  <Quote className="w-5 h-5 text-green-700" />
                  <h3 className="text-xl font-semibold text-green-800">Cardinal Baronius&apos;s Famous Quip</h3>
                </div>
                <p className="text-green-700 mb-3">
                  Galileo himself, in his famous 1615 Letter to the Grand Duchess Christina, quoted a remark
                  attributed to Cardinal Cesare Baronius, the great Church historian:
                </p>
                <blockquote className="text-green-800 italic text-lg pl-4 border-l-4 border-green-400 mb-3">
                  &ldquo;The intention of the Holy Spirit is to teach us how to go to heaven, not how the heavens go.&rdquo;
                </blockquote>
                <p className="text-green-700">
                  This brilliant aphorism captures the principle that the Bible teaches salvation, not natural
                  science. Galileo used it to argue that Scripture should not be read as an astronomy textbook.
                  Ironically, this principle would eventually be vindicated by the Church itself &mdash; but not before
                  Galileo suffered for championing it prematurely and too aggressively.
                </p>
              </div>
            </div>

            {/* Bellarmine's Position */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                <div className="flex items-center gap-3">
                  <Scale className="w-8 h-8 text-purple-600" />
                  <span>Cardinal Bellarmine&apos;s Position (1615)</span>
                </div>
              </h2>
              <p className="text-gray-600 mb-6">
                The most important theologian involved in the controversy was St. Robert Bellarmine, a
                Jesuit cardinal and Doctor of the Church. Bellarmine was no obscurantist &mdash; he was one
                of the most learned men in Europe. His position on the Copernican question was more
                nuanced than is often realized, and it deserves careful attention.
              </p>

              <div className="bg-purple-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-purple-800 mb-3">
                  The Letter to Foscarini (April 12, 1615)
                </h3>
                <p className="text-purple-700 mb-3">
                  In response to a Carmelite friar named Paolo Antonio Foscarini who had published a book
                  arguing that Copernicanism was compatible with Scripture, Bellarmine wrote a careful letter
                  laying out his position. His argument had three key points:
                </p>
                <ol className="text-purple-700 space-y-3 list-decimal list-inside">
                  <li>
                    <strong>The mathematical hypothesis is fine.</strong> There is no problem with treating
                    heliocentrism as a useful mathematical model for calculating planetary positions. Astronomers
                    had always used such hypotheses.
                  </li>
                  <li>
                    <strong>Asserting physical truth is different.</strong> To claim that the Sun is really at the
                    center and the Earth really moves is a much stronger claim. It would require reinterpreting
                    Scripture, which should not be done lightly.
                  </li>
                  <li>
                    <strong>If a true demonstration is found, we must reconsider.</strong> Bellarmine explicitly
                    acknowledged that if heliocentrism were ever conclusively proven, the Church would need to
                    reinterpret the relevant biblical passages. He compared it to the discovery that the
                    &ldquo;waters above the firmament&rdquo; in Genesis do not literally exist.
                  </li>
                </ol>
              </div>

              <div className="bg-teal-50 p-6 rounded-lg">
                <div className="flex items-center gap-2 mb-3">
                  <Info className="w-5 h-5 text-teal-700" />
                  <h3 className="text-xl font-semibold text-teal-800">Was Bellarmine Being Reasonable?</h3>
                </div>
                <p className="text-teal-700 mb-3">
                  By the standards of modern philosophy of science, Bellarmine&apos;s position was actually quite
                  defensible. He was essentially saying: &ldquo;You need empirical proof before we overturn the
                  consensus interpretation of Scripture.&rdquo; And in 1615, Galileo genuinely did not have
                  conclusive proof. His strongest evidence &mdash; the phases of Venus &mdash; proved that Venus
                  orbited the Sun, but was equally compatible with the Tychonic system. The decisive
                  proof &mdash; stellar parallax, which would show that the Earth moves around the Sun &mdash;
                  would not be observed until Friedrich Bessel measured it in 1838, more than two centuries later.
                </p>
                <p className="text-teal-700">
                  The philosopher of science Pierre Duhem later argued that Bellarmine had a better grasp of
                  the relationship between scientific theories and physical reality than Galileo did. This does
                  not mean Galileo was wrong about heliocentrism &mdash; he was right &mdash; but it does mean the Church
                  was not being unreasonable in asking for proof that Galileo could not yet fully provide.
                </p>
              </div>
            </div>

            {/* The 1616 Decree */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                <div className="flex items-center gap-3">
                  <FileText className="w-8 h-8 text-red-600" />
                  <span>The 1616 Decree</span>
                </div>
              </h2>
              <p className="text-gray-600 mb-6">
                In February 1616, the Holy Office (the Inquisition) asked a panel of theological consultors
                to evaluate two propositions: (1) that the Sun is the center of the world and does not move,
                and (2) that the Earth is not the center of the world and moves. The consultors declared the
                first proposition &ldquo;foolish and absurd in philosophy, and formally heretical,&rdquo; and the
                second &ldquo;at least erroneous in faith.&rdquo;
              </p>

              <div className="bg-red-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-red-800 mb-3">What Actually Happened</h3>
                <ul className="text-red-700 space-y-3">
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span>
                      Copernicus&apos;s <em>De Revolutionibus</em> was placed on the Index of Forbidden Books
                      &ldquo;until corrected.&rdquo; The corrections (made in 1620) were minor &mdash; they changed language
                      claiming heliocentrism was physically true to language presenting it as a hypothesis.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span>
                      Foscarini&apos;s book was banned outright, since it had explicitly argued for the
                      compatibility of Copernicanism and Scripture.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span>
                      Galileo himself was NOT condemned or punished. Cardinal Bellarmine privately informed
                      him of the decree and told him he could no longer &ldquo;hold or defend&rdquo; heliocentrism
                      as physical truth.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span>
                      Galileo received a certificate from Bellarmine stating that he had NOT been forced
                      to abjure or do penance &mdash; important for defending his reputation.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg">
                <div className="flex items-center gap-2 mb-3">
                  <AlertTriangle className="w-5 h-5 text-amber-700" />
                  <h3 className="text-xl font-semibold text-amber-800">The Mysterious Injunction</h3>
                </div>
                <p className="text-amber-700">
                  A document in the Vatican archives records that on February 26, 1616, the Commissary
                  General of the Inquisition, Fr. Michelangelo Seghizzi, issued Galileo a formal injunction
                  &ldquo;not to hold, teach, or defend in any way whatsoever&rdquo; the Copernican doctrine. This
                  injunction was stricter than what Bellarmine had told Galileo, and its authenticity and
                  exact circumstances have been debated by scholars for centuries. It would play a crucial
                  role at Galileo&apos;s trial in 1633, when prosecutors used it to argue that Galileo had
                  violated a direct order. Whether Galileo even knew about this stricter injunction remains
                  one of the great unresolved questions of the affair.
                </p>
              </div>
            </div>

            {/* The Missing Proof */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                <div className="flex items-center gap-3">
                  <Eye className="w-8 h-8 text-indigo-600" />
                  <span>The Missing Proof: Stellar Parallax</span>
                </div>
              </h2>
              <p className="text-gray-600 mb-6">
                Here is a fact that many popular accounts of the Galileo affair omit: the Church was
                actually asking a scientifically legitimate question. If the Earth truly orbits the Sun,
                then nearby stars should appear to shift slightly against the background of distant stars
                as the Earth moves &mdash; a phenomenon called &ldquo;stellar parallax.&rdquo; No one had ever observed
                this shift.
              </p>

              <div className="bg-indigo-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-indigo-800 mb-3">Why Couldn&apos;t Galileo Find It?</h3>
                <p className="text-indigo-700 mb-3">
                  The answer is that the stars are unimaginably far away &mdash; much farther than anyone in
                  Galileo&apos;s time could have guessed. The nearest star, Proxima Centauri, has a parallax
                  of only 0.77 arcseconds &mdash; a shift so tiny that it was completely undetectable with
                  17th-century instruments. Galileo correctly argued that the absence of observed parallax
                  simply meant the stars were very far away, but he could not prove this.
                </p>
                <p className="text-indigo-700">
                  Stellar parallax was finally measured in 1838 by Friedrich Wilhelm Bessel, who detected
                  the parallax of the star 61 Cygni. This was 196 years after Galileo&apos;s condemnation.
                  The delay illustrates just how ahead of his time Galileo was &mdash; and also how the Church&apos;s
                  demand for proof, while ultimately misguided in its application, was not scientifically
                  unreasonable.
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <div className="flex items-center gap-2 mb-3">
                  <Lightbulb className="w-5 h-5 text-green-700" />
                  <h3 className="text-xl font-semibold text-green-800">The Key Lesson</h3>
                </div>
                <p className="text-green-700">
                  The Galileo controversy was not a conflict between science and religion. It was a conflict
                  about the relationship between scientific theories, empirical evidence, and the interpretation
                  of Scripture. The Church made errors &mdash; serious ones &mdash; but the situation was far more
                  complex than the popular myth of benighted churchmen suppressing obvious truth. The truth
                  was obvious to Galileo, but he could not yet prove it to the satisfaction of the prevailing
                  standards of evidence. History vindicated him, but the path from insight to proof was longer
                  than either side anticipated.
                </p>
              </div>
            </div>

            {/* Sources */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Sources &amp; Further Reading</h3>
              <ol className="text-gray-700 space-y-2 list-decimal list-inside">
                <li>Maurice A. Finocchiaro, <em>The Galileo Affair: A Documentary History</em> (University of California Press, 1989).</li>
                <li>Ernan McMullin, ed., <em>The Church and Galileo</em> (University of Notre Dame Press, 2005).</li>
                <li>Annibale Fantoli, <em>Galileo: For Copernicanism and for the Church</em>, 3rd ed. (Vatican Observatory Publications, 2003).</li>
                <li>Richard J. Blackwell, <em>Galileo, Bellarmine, and the Bible</em> (University of Notre Dame Press, 1991).</li>
                <li>Pierre Duhem, <em>To Save the Phenomena: An Essay on the Idea of Physical Theory from Plato to Galileo</em> (University of Chicago Press, 1969).</li>
              </ol>
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* TAB 3: THE TRIAL                                             */}
        {/* ============================================================ */}
        {activeTab === 'the-trial' && (
          <div className="space-y-8">
            {/* The Dialogue */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                <div className="flex items-center gap-3">
                  <BookOpen className="w-8 h-8 text-blue-600" />
                  <span>The Dialogue (1632)</span>
                </div>
              </h2>
              <p className="text-gray-600 mb-6">
                After the 1616 decree, Galileo largely stayed quiet about Copernicanism for several years.
                But when his friend Cardinal Barberini was elected Pope Urban VIII in 1623, Galileo saw his
                chance. Over the course of six private audiences, the Pope gave Galileo permission to write
                a book discussing both the Ptolemaic and Copernican systems &mdash; provided he treated the
                Copernican system as a hypothesis and not as established truth, and that he include the
                Pope&apos;s own philosophical argument about the limits of human knowledge of the physical world.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">
                  <em>Dialogue Concerning the Two Chief World Systems</em>
                </h3>
                <p className="text-blue-700 mb-3">
                  Galileo spent the next several years writing what would become his masterwork: the
                  <em> Dialogue Concerning the Two Chief World Systems</em>, published in February 1632.
                  Written in Italian (not Latin) as a conversation among three characters, it is a work of
                  literary genius as much as scientific argument.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Salviati</h4>
                    <p className="text-blue-700 text-sm">
                      Named after Galileo&apos;s deceased friend Filippo Salviati. He is the brilliant advocate
                      of the Copernican system &mdash; clearly Galileo&apos;s mouthpiece. Articulate, learned, and
                      devastatingly logical.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Sagredo</h4>
                    <p className="text-blue-700 text-sm">
                      Named after another deceased friend, Giovanni Francesco Sagredo. He is the intelligent
                      layman, open-minded and curious, who listens to both sides and invariably finds
                      Salviati&apos;s arguments more compelling.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-red-800 mb-2">Simplicio</h4>
                    <p className="text-red-700 text-sm">
                      The defender of the Ptolemaic system and Aristotelian philosophy. His name ostensibly
                      honored the ancient Aristotelian commentator Simplicius, but to Italian ears it
                      sounded like &ldquo;simpleton.&rdquo; This would prove catastrophic.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 p-6 rounded-lg">
                <div className="flex items-center gap-2 mb-3">
                  <AlertTriangle className="w-5 h-5 text-red-700" />
                  <h3 className="text-xl font-semibold text-red-800">The Fatal Mistake</h3>
                </div>
                <p className="text-red-700 mb-3">
                  Despite the Pope&apos;s explicit instructions to present the Copernican system as a hypothesis,
                  the <em>Dialogue</em> was anything but balanced. Salviati (Galileo) wins every argument.
                  Simplicio is made to look foolish throughout. And here is the devastating detail: Galileo
                  put Pope Urban VIII&apos;s own favorite argument &mdash; that God in His omnipotence could produce
                  any natural effect by means we cannot imagine, so we should not be too confident about
                  physical explanations &mdash; into the mouth of Simplicio.
                </p>
                <p className="text-red-700">
                  Whether Galileo intended this as a deliberate insult is debated. He may have been careless
                  rather than malicious. But the effect was devastating. When Urban VIII read the <em>Dialogue</em>,
                  he was furious. He felt personally betrayed by a man he had considered a friend. The Pope
                  who had given Galileo permission to write the book now became his implacable enemy. As one
                  historian has put it: &ldquo;The Galileo affair is not primarily a story about science versus
                  religion. It is a story about a friendship gone wrong.&rdquo;
                </p>
              </div>
            </div>

            {/* The Trial Itself */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                <div className="flex items-center gap-3">
                  <Scale className="w-8 h-8 text-amber-600" />
                  <span>The Trial of 1633</span>
                </div>
              </h2>
              <p className="text-gray-600 mb-6">
                In the summer of 1632, the Pope ordered the sale of the <em>Dialogue</em> to be halted and
                appointed a special commission to examine it. In September, Galileo was summoned to Rome
                to appear before the Inquisition. He delayed for months, citing illness and old age (he
                was 68 and in poor health), but eventually arrived in Rome in February 1633.
              </p>

              <div className="space-y-6">
                <div className="bg-amber-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-amber-800 mb-3">The Proceedings</h3>
                  <p className="text-amber-700 mb-3">
                    The trial of Galileo was not the dramatic courtroom confrontation of popular imagination.
                    It consisted of four formal interrogations spread over several months (April 12, April 30,
                    May 10, and June 21, 1633). The key issue was a legal one: had Galileo violated the 1616
                    injunction not to &ldquo;hold, teach, or defend in any way whatsoever&rdquo; the Copernican doctrine?
                  </p>
                  <p className="text-amber-700">
                    Galileo&apos;s defense was that he had not actually advocated Copernicanism in the <em>Dialogue</em>,
                    but had merely presented arguments on both sides. This defense was frankly implausible &mdash;
                    anyone reading the book could see that it was a powerful argument for Copernicanism. The
                    inquisitors were not convinced.
                  </p>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-purple-800 mb-3">The Verdict</h3>
                  <p className="text-purple-700 mb-3">
                    On June 22, 1633, Galileo was found &ldquo;vehemently suspect of heresy&rdquo; &mdash; note: suspect
                    of heresy, not guilty of heresy. The distinction matters. He was required to &ldquo;abjure,
                    curse, and detest&rdquo; the Copernican opinions and was sentenced to imprisonment at the
                    pleasure of the Inquisition. The <em>Dialogue</em> was banned.
                  </p>
                  <p className="text-purple-700">
                    The famous story that Galileo muttered &ldquo;Eppur si muove&rdquo; (&ldquo;And yet it moves&rdquo;)
                    after his abjuration is almost certainly a legend, first appearing more than a century
                    after his death. But it captures the spirit of defiance that makes Galileo such a
                    compelling figure in the history of science.
                  </p>
                </div>
              </div>
            </div>

            {/* Myths vs. Reality */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                <div className="flex items-center gap-3">
                  <Shield className="w-8 h-8 text-green-600" />
                  <span>Myths vs. Reality: What Actually Happened to Galileo</span>
                </div>
              </h2>
              <p className="text-gray-600 mb-6">
                The popular image of Galileo&apos;s fate is almost entirely wrong. Let us separate myth from
                documented historical fact.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg">
                  <div className="flex-shrink-0 mt-1">
                    <XCircle className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">MYTH: Galileo was thrown into a dungeon.</h4>
                    <p className="text-green-700 mt-1">
                      <strong>FACT:</strong> During the trial, Galileo stayed at the Tuscan Embassy in Rome
                      and later in apartments within the Vatican itself. He was never in a prison cell.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg">
                  <div className="flex-shrink-0 mt-1">
                    <XCircle className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">MYTH: Galileo was tortured.</h4>
                    <p className="text-green-700 mt-1">
                      <strong>FACT:</strong> There is no evidence that Galileo was tortured. The Inquisition&apos;s
                      records mention the &ldquo;threat of torture&rdquo; as a standard legal formula (the <em>territio
                      verbalis</em>), but this was a procedural formality. Galileo was 69 years old and in
                      poor health; the Inquisition&apos;s own rules prohibited torture of the elderly and infirm.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg">
                  <div className="flex-shrink-0 mt-1">
                    <XCircle className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">MYTH: Galileo was locked away for the rest of his life.</h4>
                    <p className="text-green-700 mt-1">
                      <strong>FACT:</strong> Galileo&apos;s &ldquo;imprisonment&rdquo; was immediately commuted to house arrest.
                      He first stayed with the Archbishop of Siena (a friend and supporter), and then was
                      allowed to return to his own villa at Arcetri, near Florence, where he lived in
                      relative comfort with servants, visitors, and the freedom to continue his work.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg">
                  <div className="flex-shrink-0 mt-1">
                    <XCircle className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">MYTH: Galileo was silenced and forbidden from working.</h4>
                    <p className="text-green-700 mt-1">
                      <strong>FACT:</strong> During his house arrest, Galileo wrote and published his greatest
                      scientific work &mdash; the <em>Discorsi e dimostrazioni matematiche intorno a due nuove
                      scienze</em> (Discourses and Mathematical Demonstrations Relating to Two New Sciences),
                      published in 1638 in Leiden, the Netherlands. This book, on the strength of materials
                      and the science of motion, laid the foundations of modern physics. It is widely
                      considered more important than the <em>Dialogue</em>.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg">
                  <div className="flex-shrink-0 mt-1">
                    <XCircle className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">MYTH: The Church executed Galileo or he died in prison.</h4>
                    <p className="text-green-700 mt-1">
                      <strong>FACT:</strong> Galileo died in his own bed in his own villa on January 8, 1642,
                      at the age of 77. He was attended by his student Vincenzo Viviani and received the
                      sacraments of the Church. He was buried in the Basilica of Santa Croce in Florence,
                      and his remains were later moved to a grand tomb across the nave from Michelangelo&apos;s.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* The Final Years */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                <div className="flex items-center gap-3">
                  <Clock className="w-8 h-8 text-teal-600" />
                  <span>The Final Years at Arcetri (1634&ndash;1642)</span>
                </div>
              </h2>
              <p className="text-gray-600 mb-6">
                The last years of Galileo&apos;s life at Arcetri were marked by both sorrow and extraordinary
                intellectual achievement. In 1634, his beloved daughter Maria Celeste died, plunging him
                into a depression from which he never fully recovered. By 1638, he had gone completely
                blind &mdash; a cruel fate for the man who had seen more of the heavens than any human before him.
              </p>

              <div className="bg-teal-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-teal-800 mb-3">Two New Sciences (1638)</h3>
                <p className="text-teal-700 mb-3">
                  Yet even blind and grieving, Galileo produced his masterpiece. The <em>Two New Sciences</em>,
                  smuggled out of Italy and published in the Protestant Netherlands by the Elzevir press,
                  founded the modern sciences of materials strength and kinematics. In it, Galileo
                  established the law of falling bodies, analyzed projectile motion, and laid the mathematical
                  groundwork that Isaac Newton would later build upon to create classical mechanics.
                </p>
                <p className="text-teal-700">
                  Newton himself, born the year Galileo died, famously said: &ldquo;If I have seen further, it
                  is by standing on the shoulders of giants.&rdquo; Galileo was one of those giants.
                </p>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-amber-800 mb-3">Visitors and Disciples</h3>
                <p className="text-amber-700">
                  Despite his house arrest, Galileo received a stream of visitors at Arcetri, including the
                  young English poet John Milton (who later mentioned the visit in <em>Paradise Lost</em>) and
                  the philosopher Thomas Hobbes. His students Evangelista Torricelli (who invented the
                  barometer) and Vincenzo Viviani carried on his scientific legacy. Galileo remained
                  intellectually active until the very end, dictating ideas and observations even after
                  losing his sight. He died on January 8, 1642, still a faithful Catholic, surrounded by
                  his students and having received the last rites of the Church.
                </p>
              </div>
            </div>

            {/* Three of Ten Judges */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                A Telling Detail: Three Judges Who Refused to Sign
              </h2>
              <p className="text-gray-600 mb-6">
                Of the ten cardinal-inquisitors appointed to judge Galileo&apos;s case, only seven signed the
                sentence. Three cardinals refused to add their signatures: Cardinal Francesco Barberini
                (the Pope&apos;s own nephew), Cardinal Gaspare Borgia, and Cardinal Laudivio Zacchia. The
                reasons for their refusal are not recorded, but it is a striking indication that even within
                the Inquisition, the condemnation of Galileo was not unanimous. Some in the Church recognized,
                even at the time, that something had gone wrong.
              </p>
            </div>

            {/* Sources */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Sources &amp; Further Reading</h3>
              <ol className="text-gray-700 space-y-2 list-decimal list-inside">
                <li>Maurice A. Finocchiaro, <em>The Galileo Affair: A Documentary History</em> (University of California Press, 1989).</li>
                <li>Maurice A. Finocchiaro, <em>Retrying Galileo, 1633&ndash;1992</em> (University of California Press, 2005).</li>
                <li>Annibale Fantoli, <em>Galileo: For Copernicanism and for the Church</em>, 3rd ed. (Vatican Observatory Publications, 2003).</li>
                <li>Giorgio de Santillana, <em>The Crime of Galileo</em> (University of Chicago Press, 1955).</li>
                <li>Rivka Feldhay, <em>Galileo and the Church: Political Inquisition or Critical Dialogue?</em> (Cambridge University Press, 1995).</li>
              </ol>
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* TAB 4: HIS DAUGHTER MARIA CELESTE                            */}
        {/* ============================================================ */}
        {activeTab === 'maria-celeste' && (
          <div className="space-y-8">
            {/* Virginia Galilei */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                <div className="flex items-center gap-3">
                  <Heart className="w-8 h-8 text-rose-600" />
                  <span>Virginia Galilei &mdash; Sister Maria Celeste (1600&ndash;1634)</span>
                </div>
              </h2>
              <p className="text-gray-600 mb-6">
                No account of the Galileo affair is complete without the story of his eldest daughter, Virginia.
                Born in Padua on August 13, 1600, she was the first child of Galileo and Marina Gamba. Because
                she was born out of wedlock, the social conventions of the time made her effectively unmarriageable
                in respectable Florentine society. In 1613, when she was just thirteen years old, Galileo placed
                her and her younger sister Livia in the convent of San Matteo in Arcetri, a poor Franciscan
                community on the hills overlooking Florence.
              </p>

              <div className="bg-rose-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-rose-800 mb-3">Entering the Convent</h3>
                <p className="text-rose-700 mb-3">
                  Virginia took the veil at sixteen and chose the religious name Maria Celeste &mdash; &ldquo;Mary of
                  the Heavens&rdquo; &mdash; a name that scholars have seen as a tribute to her father&apos;s devotion
                  to the study of the celestial realm. Her sister Livia became Sister Arcangela but struggled
                  with convent life and suffered from chronic depression. Maria Celeste, by contrast, embraced
                  her vocation with remarkable grace, intelligence, and warmth.
                </p>
                <p className="text-rose-700">
                  The convent of San Matteo was desperately poor. The nuns often lacked basic necessities &mdash;
                  food, medicine, clothing. Maria Celeste served as the convent apothecary, preparing medicines
                  and herbal remedies. She was also a skilled seamstress who mended her father&apos;s shirt collars
                  and made confections and preserves that she sent to him as gifts.
                </p>
              </div>
            </div>

            {/* The Letters */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                <div className="flex items-center gap-3">
                  <ScrollText className="w-8 h-8 text-purple-600" />
                  <span>The Letters: A Window into Two Souls</span>
                </div>
              </h2>
              <p className="text-gray-600 mb-6">
                Maria Celeste and Galileo maintained an extraordinarily close correspondence throughout
                her adult life. She was his emotional anchor, his confidante, his practical helper, and
                in many ways his closest friend. One hundred and twenty-four of her letters to him survive &mdash;
                tender, witty, concerned, and deeply affectionate. They are among the most moving documents
                of the 17th century.
              </p>

              <div className="bg-purple-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-purple-800 mb-3">What the Letters Reveal</h3>
                <p className="text-purple-700 mb-3">
                  Galileo&apos;s letters to Maria Celeste were destroyed after her death &mdash; probably by the convent,
                  in accordance with custom, or possibly to protect Galileo from further scrutiny by the
                  Inquisition. But her letters to him paint a vivid picture of their relationship and of life
                  in a 17th-century Italian convent.
                </p>
                <div className="space-y-4 mt-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-800 mb-2">A Devoted Daughter</h4>
                    <p className="text-purple-700 text-sm">
                      Maria Celeste worried constantly about her father&apos;s health, his diet, his disputes with
                      rivals, and his dealings with powerful men. She counseled patience and prudence &mdash; advice
                      that Galileo, characteristically, did not always follow. She sent him food, medicines,
                      and candied fruits, and asked for news of his latest work with genuine intellectual curiosity.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-800 mb-2">An Intelligent Mind</h4>
                    <p className="text-purple-700 text-sm">
                      Her letters reveal a woman of sharp intelligence and considerable literary skill. She
                      managed the convent&apos;s accounts, dealt with workmen and tradespeople, and handled
                      practical matters for her father&apos;s household during his long absences. She also served
                      as an intermediary between Galileo and church officials, displaying diplomatic tact that
                      her father often lacked.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-800 mb-2">A Woman of Deep Faith</h4>
                    <p className="text-purple-700 text-sm">
                      Maria Celeste&apos;s faith was genuine and profound. She accepted the hardships of convent
                      life without complaint and saw her vocation as meaningful and redemptive. She prayed
                      constantly for her father, especially during his troubles with the Inquisition, and
                      encouraged him to trust in God&apos;s providence. Her faith was not naive but tested by
                      poverty, illness, and the anguish of watching her father suffer.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <Quote className="w-5 h-5 text-amber-700" />
                  <h3 className="text-xl font-semibold text-amber-800">From Her Letters</h3>
                </div>
                <div className="space-y-4">
                  <blockquote className="text-amber-800 italic pl-4 border-l-4 border-amber-400">
                    &ldquo;I do not think it possible for me to go on living if I am unable to hear from you
                    frequently, and to know the state of your health, which I crave to learn about more
                    than anything else in the world.&rdquo;
                  </blockquote>
                  <blockquote className="text-amber-800 italic pl-4 border-l-4 border-amber-400">
                    &ldquo;If I could help to alleviate your distress by taking on all the suffering myself,
                    most willingly would I do so.&rdquo;
                  </blockquote>
                  <blockquote className="text-amber-800 italic pl-4 border-l-4 border-amber-400">
                    &ldquo;I send you two pots of electuary as a restorative: one made of quince and the
                    other of the roses that are just now beginning to open in our garden.&rdquo;
                  </blockquote>
                </div>
              </div>
            </div>

            {/* During the Trial */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                <div className="flex items-center gap-3">
                  <Scale className="w-8 h-8 text-indigo-600" />
                  <span>During the Trial</span>
                </div>
              </h2>
              <p className="text-gray-600 mb-6">
                When Galileo was summoned to Rome in 1632, Maria Celeste was beside herself with worry.
                Her letters from this period are filled with anxiety and fervent prayers for her father&apos;s
                safety. She took on the burden of managing his household and finances during his absence,
                dealing with creditors, maintaining the garden, and keeping his affairs in order.
              </p>

              <div className="bg-indigo-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-indigo-800 mb-3">
                  A Penance Taken On
                </h3>
                <p className="text-indigo-700 mb-3">
                  After Galileo&apos;s condemnation, part of his sentence included the recitation of the seven
                  penitential psalms once a week for three years. Maria Celeste wrote to her father asking
                  permission to perform this penance on his behalf &mdash; and she did, faithfully reciting the
                  psalms until her death. It was an act of extraordinary love: a daughter taking on her
                  father&apos;s spiritual punishment as her own.
                </p>
                <p className="text-indigo-700">
                  When Galileo finally returned to Arcetri under house arrest, he was close enough to
                  visit the convent, and the two resumed their daily contact. For Maria Celeste, her
                  father&apos;s proximity was a source of joy after the long months of separation and fear.
                </p>
              </div>
            </div>

            {/* Her Death */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                <div className="flex items-center gap-3">
                  <Cross className="w-8 h-8 text-gray-600" />
                  <span>Her Death and Galileo&apos;s Grief</span>
                </div>
              </h2>
              <p className="text-gray-600 mb-6">
                On April 2, 1634, just a few months after Galileo&apos;s return to Arcetri, Maria Celeste
                fell ill with dysentery. She died on the same day, at the age of thirty-three. The loss
                devastated Galileo. He fell into a deep depression and was unable to work for months.
              </p>

              <div className="bg-gray-100 p-6 rounded-lg mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <Quote className="w-5 h-5 text-gray-700" />
                  <h3 className="text-xl font-semibold text-gray-800">Galileo&apos;s Own Words</h3>
                </div>
                <blockquote className="text-gray-700 italic text-lg pl-4 border-l-4 border-gray-400 mb-3">
                  &ldquo;Here I was struck by the sad news of the death of my beloved daughter, a woman of
                  exquisite mind, singular goodness, and most tenderly attached to me.&rdquo;
                </blockquote>
                <p className="text-gray-600">
                  In a letter to a friend, Galileo wrote that he felt &ldquo;an immense sadness and melancholy,
                  together with extreme loss of appetite,&rdquo; and that he &ldquo;continually heard my beloved
                  daughter calling to me.&rdquo; He described her loss as the greatest sorrow of his life &mdash;
                  greater even than his condemnation by the Inquisition.
                </p>
              </div>

              <div className="bg-rose-50 p-6 rounded-lg">
                <div className="flex items-center gap-2 mb-3">
                  <Heart className="w-5 h-5 text-rose-700" />
                  <h3 className="text-xl font-semibold text-rose-800">The Catholic Dimension of Galileo&apos;s Life</h3>
                </div>
                <p className="text-rose-700 mb-3">
                  The story of Galileo and Maria Celeste reveals a dimension of the Galileo affair that is
                  often overlooked: Galileo was not an enemy of the Catholic Church. He was a devout Catholic
                  whose eldest daughter was a Franciscan nun. He attended Mass, said his prayers, and believed
                  in God&apos;s creation. His quarrel was never with the faith itself but with specific churchmen
                  who, he believed, were interpreting Scripture too rigidly and refusing to acknowledge what
                  nature was revealing.
                </p>
                <p className="text-rose-700">
                  The relationship between Galileo and Maria Celeste also shows that the convent was not a
                  place of oppression for Virginia but became a genuine vocation. Through her letters, we see
                  a woman who found meaning, purpose, and deep spiritual life within the religious community.
                  Father and daughter, scientist and nun, loved and supported each other with a devotion that
                  transcended the controversies swirling around them. Their story humanizes the Galileo affair
                  in ways that abstract theological and scientific arguments cannot.
                </p>
              </div>
            </div>

            {/* Dava Sobel */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                <div className="flex items-center gap-3">
                  <BookMarked className="w-8 h-8 text-teal-600" />
                  <span>Dava Sobel&apos;s <em>Galileo&apos;s Daughter</em></span>
                </div>
              </h2>
              <p className="text-gray-600 mb-6">
                The full story of the relationship between Galileo and Maria Celeste was brought to wide
                public attention by the American science writer Dava Sobel in her 1999 bestseller
                <em> Galileo&apos;s Daughter: A Historical Memoir of Science, Faith, and Love</em>. Sobel translated
                all 124 surviving letters from Maria Celeste and wove them into a narrative of the
                Galileo affair that puts the human relationship at the center.
              </p>

              <div className="bg-teal-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-teal-800 mb-3">Why This Book Matters</h3>
                <p className="text-teal-700 mb-3">
                  Sobel&apos;s book transformed our understanding of Galileo by revealing the deeply personal,
                  emotional, and Catholic context of his life. Before <em>Galileo&apos;s Daughter</em>, most popular
                  accounts focused exclusively on the scientific and political dimensions of the affair.
                  Sobel showed that behind the famous trial was a father who loved his daughter, a daughter
                  who loved her father, and a faith that sustained them both through suffering.
                </p>
                <p className="text-teal-700">
                  The book also challenged the simplistic narrative of &ldquo;science versus religion&rdquo; by showing
                  how deeply intertwined faith and inquiry were in Galileo&apos;s world. Maria Celeste&apos;s letters
                  reveal a convent that was connected to the wider intellectual life of its time, not sealed
                  off from it. She asked about her father&apos;s work, commented on his publications, and
                  participated in his life in every way she could. Faith and reason coexisted in the Galilei
                  household &mdash; even if they collided in the corridors of the Vatican.
                </p>
              </div>
            </div>

            {/* The Convent Today */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                <div className="flex items-center gap-3">
                  <Church className="w-8 h-8 text-amber-600" />
                  <span>San Matteo in Arcetri Today</span>
                </div>
              </h2>
              <p className="text-gray-600 mb-6">
                The convent of San Matteo in Arcetri, where Maria Celeste spent her entire adult life, was
                suppressed during the Napoleonic era and fell into ruin. Today, little remains of the
                original structures, though the site is near the Arcetri Astrophysical Observatory &mdash; a
                fitting coincidence, as the place where Galileo&apos;s daughter prayed is now surrounded by the
                telescopes of modern astronomy. Maria Celeste is buried somewhere in the convent grounds,
                in an unmarked grave, as was the Franciscan custom.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-amber-800 mb-3">A Legacy of Faith and Love</h3>
                <p className="text-amber-700">
                  Maria Celeste has no feast day, no process of canonization, and no monument beyond her
                  father&apos;s grief and her own luminous letters. But she is one of the most compelling figures
                  in the history of the relationship between faith and science. In her, we see that the
                  Galileo affair was not a battle between the Church and a lone heroic scientist. It was a
                  deeply human drama involving people of genuine faith, genuine love, and genuine fallibility.
                  She reminds us that behind the great controversies of history are ordinary people who suffered,
                  prayed, and loved.
                </p>
              </div>
            </div>

            {/* Sources */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Sources &amp; Further Reading</h3>
              <ol className="text-gray-700 space-y-2 list-decimal list-inside">
                <li>Dava Sobel, <em>Galileo&apos;s Daughter: A Historical Memoir of Science, Faith, and Love</em> (Walker &amp; Company, 1999).</li>
                <li>Dava Sobel, ed. and trans., <em>Letters to Father: Suor Maria Celeste to Galileo, 1623&ndash;1633</em> (Walker &amp; Company, 2001).</li>
                <li>J. L. Heilbron, <em>Galileo</em> (Oxford University Press, 2010), ch. 10&ndash;12.</li>
                <li>Stillman Drake, <em>Galileo at Work: His Scientific Biography</em> (University of Chicago Press, 1978).</li>
              </ol>
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* TAB 5: DOES THE BIBLE SAY THE SUN REVOLVES?                  */}
        {/* ============================================================ */}
        {activeTab === 'bible-and-sun' && (
          <div className="space-y-8">
            {/* The Question */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                <div className="flex items-center gap-3">
                  <Sun className="w-8 h-8 text-amber-600" />
                  <span>Does the Bible Teach That the Sun Orbits the Earth?</span>
                </div>
              </h2>
              <p className="text-gray-600 mb-6">
                This is the question at the heart of the Galileo controversy &mdash; and it remains relevant
                today whenever someone asks how to reconcile the Bible with modern science. Several
                biblical passages appear to describe a stationary Earth and a moving Sun. Did the
                biblical authors intend to teach astronomy? Does the Bible contradict Copernicus?
                The answer, as the Catholic Church now clearly affirms, is no. The Bible uses
                phenomenological language &mdash; the language of appearances &mdash; and teaches religious truth,
                not natural science.
              </p>
            </div>

            {/* The Key Passages */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                <div className="flex items-center gap-3">
                  <ScrollText className="w-8 h-8 text-indigo-600" />
                  <span>Examining the Key Passages</span>
                </div>
              </h2>

              <div className="space-y-6">
                <div className="bg-red-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-red-800 mb-3">Joshua 10:12&ndash;13 &mdash; &ldquo;Sun, Stand Still&rdquo;</h3>
                  <p className="text-red-700 italic mb-3">
                    &ldquo;Then Joshua spoke to the Lord in the day when the Lord delivered up the Amorites before
                    the children of Israel, and he said in the sight of Israel: &lsquo;Sun, stand still over
                    Gibeon; and Moon, in the Valley of Aijalon.&rsquo; So the sun stood still, and the moon
                    stopped, till the people had revenge upon their enemies.&rdquo;
                  </p>
                  <div className="bg-white p-4 rounded-lg mt-3">
                    <h4 className="font-semibold text-red-800 mb-2">Catholic Understanding</h4>
                    <p className="text-red-700 text-sm mb-2">
                      This passage is a narrative account of a miraculous event, using the everyday language
                      of observation. Joshua commanded the Sun to &ldquo;stand still&rdquo; because that is how
                      the phenomenon would have appeared to observers on the ground. We still say the Sun
                      &ldquo;rises&rdquo; and &ldquo;sets&rdquo; even though we know it is the Earth that rotates.
                      The passage tells us something about God&apos;s power and Israel&apos;s deliverance, not about
                      the mechanics of the solar system.
                    </p>
                    <p className="text-red-700 text-sm">
                      Moreover, the passage is describing a miracle &mdash; by definition, an event that transcends
                      the ordinary course of nature. You cannot derive ordinary cosmological principles from an
                      account of God suspending or altering those principles.
                    </p>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">Psalm 93:1 &mdash; &ldquo;The World Shall Never Be Moved&rdquo;</h3>
                  <p className="text-blue-700 italic mb-3">
                    &ldquo;The Lord reigns, He is clothed with majesty; the Lord is clothed, He has girded
                    Himself with strength. Surely the world is established, so that it cannot be moved.&rdquo;
                  </p>
                  <div className="bg-white p-4 rounded-lg mt-3">
                    <h4 className="font-semibold text-blue-800 mb-2">Catholic Understanding</h4>
                    <p className="text-blue-700 text-sm mb-2">
                      This is a hymn of praise celebrating God&apos;s sovereignty over creation. The statement
                      that the world &ldquo;cannot be moved&rdquo; is a poetic affirmation of God&apos;s providential
                      care and the stability of the created order, not a claim about orbital mechanics. The
                      Hebrew word for &ldquo;moved&rdquo; (<em>mot</em>) carries connotations of being shaken, toppled,
                      or destabilized &mdash; it is the same word used in Psalm 16:8 (&ldquo;I shall not be
                      moved&rdquo;), where it obviously does not mean physical immobility.
                    </p>
                    <p className="text-blue-700 text-sm">
                      Reading this psalm as an astronomy textbook is to commit a genre error &mdash; like reading
                      a love poem as a biology paper.
                    </p>
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-800 mb-3">Psalm 104:5 &mdash; &ldquo;Foundations of the Earth&rdquo;</h3>
                  <p className="text-green-700 italic mb-3">
                    &ldquo;He set the earth on its foundations, so that it should never be shaken.&rdquo;
                  </p>
                  <div className="bg-white p-4 rounded-lg mt-3">
                    <h4 className="font-semibold text-green-800 mb-2">Catholic Understanding</h4>
                    <p className="text-green-700 text-sm">
                      Again, this is poetry praising God as Creator. The &ldquo;foundations&rdquo; of the Earth is
                      metaphorical language expressing the dependable order of creation. The same psalm
                      describes God &ldquo;wrapping himself in light as with a garment&rdquo; (v. 2) and &ldquo;making
                      the clouds his chariot&rdquo; (v. 3) &mdash; images that no one takes as literal descriptions
                      of God&apos;s mode of transportation. The entire psalm is a hymn celebrating creation
                      through vivid imagery, not a cosmological treatise.
                    </p>
                  </div>
                </div>

                <div className="bg-amber-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-amber-800 mb-3">Ecclesiastes 1:5 &mdash; &ldquo;The Sun Also Rises&rdquo;</h3>
                  <p className="text-amber-700 italic mb-3">
                    &ldquo;The sun also rises, and the sun goes down, and hastens to the place where it arose.&rdquo;
                  </p>
                  <div className="bg-white p-4 rounded-lg mt-3">
                    <h4 className="font-semibold text-amber-800 mb-2">Catholic Understanding</h4>
                    <p className="text-amber-700 text-sm">
                      Ecclesiastes is a meditation on the cyclical, seemingly meaningless nature of human
                      existence &mdash; &ldquo;vanity of vanities, all is vanity.&rdquo; The author uses the daily cycle
                      of the Sun as a poetic image of repetition and futility, not as a statement about
                      celestial mechanics. This is phenomenological language at its most obvious: every
                      human being on Earth experiences the Sun as &ldquo;rising&rdquo; and &ldquo;setting,&rdquo; regardless
                      of what they know about planetary motion. The author is describing human experience,
                      not teaching astronomy.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* What the Church Actually Teaches */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                <div className="flex items-center gap-3">
                  <BookMarked className="w-8 h-8 text-purple-600" />
                  <span>What the Catholic Church Actually Teaches</span>
                </div>
              </h2>
              <p className="text-gray-600 mb-6">
                The Catholic Church has a rich and nuanced tradition of biblical interpretation that
                addresses exactly this kind of question. Far from being a modern concession to science,
                the principles involved were articulated centuries before Galileo.
              </p>

              <div className="space-y-6">
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-purple-800 mb-3">
                    <div className="flex items-center gap-2">
                      <Star className="w-5 h-5" />
                      <span>St. Augustine (5th Century)</span>
                    </div>
                  </h3>
                  <p className="text-purple-700 mb-3">
                    St. Augustine, writing in the early 400s &mdash; more than a thousand years before Galileo &mdash;
                    already warned Christians against using Scripture to make scientific claims that could be
                    contradicted by observation and reason. In his commentary <em>De Genesi ad Litteram</em>
                    (On the Literal Interpretation of Genesis), he wrote:
                  </p>
                  <blockquote className="text-purple-800 italic pl-4 border-l-4 border-purple-400 mb-3">
                    &ldquo;Usually, even a non-Christian knows something about the Earth, the heavens, and the
                    other elements of this world... and this knowledge he holds to as being certain from
                    reason and experience. Now, it is a disgraceful and dangerous thing for an infidel to
                    hear a Christian, presumably giving the meaning of Holy Scripture, talking nonsense on
                    these topics.&rdquo;
                  </blockquote>
                  <p className="text-purple-700">
                    Augustine argued that when Scripture appears to conflict with well-established natural
                    knowledge, we should look for a non-literal interpretation. The Bible was not written to
                    teach science, and forcing it to do so discredits the faith.
                  </p>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">
                    <div className="flex items-center gap-2">
                      <Star className="w-5 h-5" />
                      <span>St. Thomas Aquinas (13th Century)</span>
                    </div>
                  </h3>
                  <p className="text-blue-700">
                    St. Thomas Aquinas, the greatest Catholic theologian, argued that Scripture can have
                    multiple senses and that the literal sense must be understood in light of the author&apos;s
                    intention. In the <em>Summa Theologica</em>, he noted that Moses described creation
                    &ldquo;in a manner suited to the understanding of the people of that time,&rdquo; accommodating
                    human language and understanding. Aquinas also explicitly stated that different scientific
                    hypotheses about the heavens could be compatible with Scripture, since Scripture does not
                    intend to settle questions of natural philosophy.
                  </p>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-800 mb-3">
                    <div className="flex items-center gap-2">
                      <Star className="w-5 h-5" />
                      <span>Cardinal Bellarmine (1615)</span>
                    </div>
                  </h3>
                  <p className="text-green-700">
                    As we saw in the previous tab, even Cardinal Bellarmine &mdash; the churchman most associated
                    with opposing Galileo &mdash; acknowledged that if heliocentrism were conclusively proven, the
                    Church would need to reinterpret the relevant biblical passages. He was not saying the
                    Bible could be wrong; he was saying our interpretation of it could be wrong. This is a
                    crucial distinction in Catholic theology.
                  </p>
                </div>

                <div className="bg-amber-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-amber-800 mb-3">
                    <div className="flex items-center gap-2">
                      <Star className="w-5 h-5" />
                      <span>The Pontifical Biblical Commission (1909)</span>
                    </div>
                  </h3>
                  <p className="text-amber-700">
                    In 1909, the Pontifical Biblical Commission addressed the question of scientific language
                    in Scripture and affirmed that the sacred writers used &ldquo;popular description&rdquo; &mdash; the
                    language of appearances &mdash; rather than precise scientific terminology. This official ruling
                    confirmed that phenomenological language in the Bible does not constitute scientific teaching.
                  </p>
                </div>

                <div className="bg-teal-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-teal-800 mb-3">
                    <div className="flex items-center gap-2">
                      <Star className="w-5 h-5" />
                      <span>The Catechism of the Catholic Church</span>
                    </div>
                  </h3>
                  <p className="text-teal-700 mb-3">
                    The <em>Catechism of the Catholic Church</em> (1992) addresses the relationship between
                    Scripture and science directly:
                  </p>
                  <blockquote className="text-teal-800 italic pl-4 border-l-4 border-teal-400 mb-3">
                    &ldquo;The question about the origins of the world and of man has been the object of many
                    scientific studies which have splendidly enriched our knowledge... These discoveries invite
                    us to even greater admiration for the greatness of the Creator.&rdquo; (CCC 283)
                  </blockquote>
                  <p className="text-teal-700">
                    CCC 289 further states that we must take into account &ldquo;the literary genres&rdquo; used in
                    Scripture and that the inspired authors wrote in ways appropriate to their time and
                    culture. The Bible teaches the truth about creation &mdash; that everything comes from God &mdash;
                    but it does not teach the scientific mechanism of how the physical world operates.
                  </p>
                </div>
              </div>
            </div>

            {/* Phenomenological Language */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                <div className="flex items-center gap-3">
                  <Eye className="w-8 h-8 text-orange-600" />
                  <span>What Is &ldquo;Phenomenological Language&rdquo;?</span>
                </div>
              </h2>
              <p className="text-gray-600 mb-6">
                &ldquo;Phenomenological language&rdquo; means language that describes how things appear to an
                observer, rather than how they work scientifically. We all use this kind of language
                every day without thinking about it &mdash; and without anyone accusing us of being
                scientifically wrong.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-orange-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-orange-800 mb-3">We Say...</h3>
                  <ul className="text-orange-700 space-y-2">
                    <li className="flex items-start gap-2">
                      <Sun className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>&ldquo;The sun rises at 6:30 AM&rdquo;</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Sun className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>&ldquo;What a beautiful sunset&rdquo;</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>&ldquo;The stars come out at night&rdquo;</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Moon className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>&ldquo;The moon is up&rdquo;</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-800 mb-3">Scientifically...</h3>
                  <ul className="text-blue-700 space-y-2">
                    <li className="flex items-start gap-2">
                      <Globe className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>The Earth rotates to face the Sun</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Globe className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>The Earth rotates away from the Sun</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Globe className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>Stars are always there; the sky darkens</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Globe className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>The Moon reflects sunlight in our direction</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg mt-6">
                <div className="flex items-center gap-2 mb-3">
                  <Lightbulb className="w-5 h-5 text-green-700" />
                  <h3 className="text-xl font-semibold text-green-800">The Point</h3>
                </div>
                <p className="text-green-700 mb-3">
                  No one accuses a weather forecaster of scientific ignorance for saying &ldquo;sunrise is at
                  6:30.&rdquo; No one accuses a poet of error for writing about a sunset. We understand that
                  this is phenomenological language &mdash; a perfectly valid and useful way of describing how
                  things appear to us on the surface of the Earth.
                </p>
                <p className="text-green-700">
                  The biblical authors used exactly this kind of language. They described the world as it
                  appeared to them, using the common expressions of their time and culture. They were not
                  making claims about orbital mechanics any more than a modern meteorologist is. The Bible
                  teaches us about God, about human nature, about sin and redemption, about how to live &mdash;
                  not about the arrangement of the solar system.
                </p>
              </div>
            </div>

            {/* The Lesson */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                <div className="flex items-center gap-3">
                  <BookOpen className="w-8 h-8 text-rose-600" />
                  <span>The Enduring Lesson</span>
                </div>
              </h2>
              <p className="text-gray-600 mb-6">
                The Galileo affair teaches a lesson that remains vital for Catholics today: the Bible and
                science speak to different dimensions of reality, and confusing them serves neither faith
                nor reason.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-rose-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-rose-800 mb-3">What the Bible Teaches</h3>
                  <ul className="text-rose-700 space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>God created everything that exists</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>Creation is good and purposeful</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>Human beings are made in God&apos;s image</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>God sustains and governs creation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>The meaning and purpose of human existence</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-indigo-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-indigo-800 mb-3">What Science Investigates</h3>
                  <ul className="text-indigo-700 space-y-2">
                    <li className="flex items-start gap-2">
                      <Telescope className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>How physical processes work</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Telescope className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>The mathematical laws governing nature</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Telescope className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>The structure and history of the universe</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Telescope className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>The mechanisms of biological life</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Telescope className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>Empirically testable hypotheses about nature</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-100 p-6 rounded-lg mt-6">
                <div className="flex items-center gap-2 mb-3">
                  <Quote className="w-5 h-5 text-gray-700" />
                  <h3 className="text-xl font-semibold text-gray-800">Pope John Paul II</h3>
                </div>
                <blockquote className="text-gray-700 italic text-lg pl-4 border-l-4 border-gray-400">
                  &ldquo;Science can purify religion from error and superstition; religion can purify science
                  from idolatry and false absolutes. Each can draw the other into a wider world, a world
                  in which both can flourish.&rdquo;
                </blockquote>
                <p className="text-gray-600 mt-2 text-sm">&mdash; Letter to Fr. George V. Coyne, Director of the Vatican Observatory (1988)</p>
              </div>
            </div>

            {/* Sources */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Sources &amp; Further Reading</h3>
              <ol className="text-gray-700 space-y-2 list-decimal list-inside">
                <li>St. Augustine, <em>De Genesi ad Litteram</em> (On the Literal Interpretation of Genesis), Book I.</li>
                <li>St. Thomas Aquinas, <em>Summa Theologica</em>, I, q. 68, a. 1.</li>
                <li>Pontifical Biblical Commission, <em>Response on the Historical Character of Genesis</em> (1909).</li>
                <li><em>Catechism of the Catholic Church</em>, nos. 283, 289, 337&ndash;349.</li>
                <li>Pope Leo XIII, Encyclical <em>Providentissimus Deus</em> (1893), on Sacred Scripture.</li>
                <li>Pope John Paul II, Letter to Fr. George V. Coyne (1988), on faith and science.</li>
                <li>Richard J. Blackwell, <em>Galileo, Bellarmine, and the Bible</em> (University of Notre Dame Press, 1991).</li>
              </ol>
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* TAB 6: THE REHABILITATION                                    */}
        {/* ============================================================ */}
        {activeTab === 'rehabilitation' && (
          <div className="space-y-8">
            {/* The Galileo Commission */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                <div className="flex items-center gap-3">
                  <Calendar className="w-8 h-8 text-blue-600" />
                  <span>The Galileo Commission (1981&ndash;1992)</span>
                </div>
              </h2>
              <p className="text-gray-600 mb-6">
                For three and a half centuries after Galileo&apos;s condemnation, the Catholic Church did not
                formally address the case. The <em>Dialogue</em> remained on the Index of Forbidden Books
                until 1835. Copernicus&apos;s <em>De Revolutionibus</em> was removed in 1758. But there was no
                official re-examination of the verdict itself until Pope John Paul II took the remarkable
                step of reopening the case.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">
                  Pope John Paul II and the Galileo Question
                </h3>
                <p className="text-blue-700 mb-3">
                  Karol Wojtyla, even before becoming Pope, was deeply interested in the relationship
                  between faith and science. As a philosopher, he understood that the Galileo affair
                  represented a wound in the Church&apos;s credibility that needed to be honestly addressed.
                  On November 10, 1979 &mdash; just a year after his election &mdash; he told the Pontifical Academy
                  of Sciences:
                </p>
                <blockquote className="text-blue-800 italic pl-4 border-l-4 border-blue-400 mb-3">
                  &ldquo;I would like the theologians, scholars, and historians, in a spirit of sincere
                  collaboration, to examine more deeply the Galileo case, and in an honest recognition
                  of wrongs on whatever side they may have occurred, to remove the barriers that this
                  case still sets up, in many minds, to a fruitful harmony between science and faith.&rdquo;
                </blockquote>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-amber-800 mb-3">
                  The Commission&apos;s Work
                </h3>
                <p className="text-amber-700 mb-3">
                  In 1981, John Paul II established a special commission to study the Galileo case. The
                  commission was divided into four working groups:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-amber-800 mb-2">Exegetical Section</h4>
                    <p className="text-amber-700 text-sm">
                      Studied the biblical interpretation questions at the heart of the controversy.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-amber-800 mb-2">Cultural Section</h4>
                    <p className="text-amber-700 text-sm">
                      Examined the broader intellectual and cultural context of the 17th century.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-amber-800 mb-2">Scientific-Epistemological Section</h4>
                    <p className="text-amber-700 text-sm">
                      Analyzed the scientific arguments and the philosophy of science involved.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-amber-800 mb-2">Historical-Juridical Section</h4>
                    <p className="text-amber-700 text-sm">
                      Reviewed the legal proceedings of the 1633 trial and related documents.
                    </p>
                  </div>
                </div>
                <p className="text-amber-700 mt-4">
                  The commission worked for eleven years, publishing its findings in stages. Its work
                  was thorough, scholarly, and honest &mdash; though some critics felt it did not go far enough
                  in its conclusions.
                </p>
              </div>
            </div>

            {/* Cardinal Poupard's Report */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                <div className="flex items-center gap-3">
                  <FileText className="w-8 h-8 text-purple-600" />
                  <span>Cardinal Poupard&apos;s Report</span>
                </div>
              </h2>
              <p className="text-gray-600 mb-6">
                On October 31, 1992, Cardinal Paul Poupard, president of the Pontifical Council for
                Culture, presented the commission&apos;s final report to the Pontifical Academy of Sciences
                in the presence of Pope John Paul II.
              </p>

              <div className="bg-purple-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-purple-800 mb-3">Key Findings</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-purple-200 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-purple-700 font-bold text-sm">1</span>
                    </div>
                    <p className="text-purple-700">
                      <strong>The theologians of the time made a serious error.</strong> They failed to
                      distinguish between the Bible itself and the interpretation of the Bible. They treated
                      a particular interpretation of certain biblical passages as if it were the teaching of
                      Scripture itself.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-purple-200 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-purple-700 font-bold text-sm">2</span>
                    </div>
                    <p className="text-purple-700">
                      <strong>The consultors of the Holy Office were wrong</strong> to declare heliocentrism
                      &ldquo;formally heretical&rdquo; and &ldquo;at least erroneous in faith.&rdquo; They confused
                      the question of biblical interpretation with the question of physical truth.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-purple-200 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-purple-700 font-bold text-sm">3</span>
                    </div>
                    <p className="text-purple-700">
                      <strong>Galileo, for his part, had the better theology.</strong> His principle that
                      Scripture uses the language of appearances and does not intend to teach natural science
                      was in continuity with St. Augustine and was later vindicated by Catholic biblical
                      scholarship.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-purple-200 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-purple-700 font-bold text-sm">4</span>
                    </div>
                    <p className="text-purple-700">
                      <strong>The condemnation was the result of a &ldquo;tragic mutual incomprehension.&rdquo;</strong> Both
                      sides bore some responsibility, but the greater error lay with the churchmen who used
                      their authority to enforce what was ultimately a fallible theological opinion.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* John Paul II's Address */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                <div className="flex items-center gap-3">
                  <Award className="w-8 h-8 text-amber-600" />
                  <span>Pope John Paul II&apos;s Address (October 31, 1992)</span>
                </div>
              </h2>
              <p className="text-gray-600 mb-6">
                After Cardinal Poupard presented the commission&apos;s report, Pope John Paul II delivered a
                major address to the Pontifical Academy of Sciences. This speech is one of the most
                important papal statements on science and faith in modern history.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-amber-800 mb-3">What the Pope Said</h3>
                <div className="space-y-4">
                  <blockquote className="text-amber-800 italic pl-4 border-l-4 border-amber-400">
                    &ldquo;Thanks to his intuition as a brilliant physicist and by relying on different arguments,
                    Galileo, who practically invented the experimental method, understood why only the Sun
                    could function as the centre of the world, as it was then known, that is to say, as a
                    planetary system. The error of the theologians of the time, when they maintained the
                    centrality of the Earth, was to think that our understanding of the physical world&apos;s
                    structure was, in some way, imposed by the literal sense of Sacred Scripture.&rdquo;
                  </blockquote>
                  <blockquote className="text-amber-800 italic pl-4 border-l-4 border-amber-400">
                    &ldquo;The problem posed by theologians of that age was, therefore, that of the
                    compatibility between heliocentrism and Scripture. Thus the new science, with its
                    methods and the freedom of research which they implied, obliged theologians to examine
                    their own criteria of scriptural interpretation. Most of them did not know how to do so.&rdquo;
                  </blockquote>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-green-800 mb-3">
                  The Acknowledged Error
                </h3>
                <p className="text-green-700 mb-3">
                  John Paul II explicitly acknowledged that the Church had erred in its treatment of Galileo.
                  This was not a casual or grudging admission but a carefully considered act of institutional
                  honesty. The Pope stated that Galileo&apos;s judges had committed a &ldquo;subjective error of
                  judgment&rdquo; and that the Church should learn from this mistake.
                </p>
                <p className="text-green-700">
                  He went further, articulating a principle that went beyond the specific case: the Church must
                  never again confuse a particular theological interpretation with revealed truth, especially
                  when dealing with questions that fall within the domain of natural science. Scripture teaches
                  the truths necessary for salvation, not the details of how the physical world operates.
                </p>
              </div>
            </div>

            {/* What the Rehabilitation Means */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                <div className="flex items-center gap-3">
                  <Info className="w-8 h-8 text-teal-600" />
                  <span>What the Rehabilitation Does and Does Not Mean</span>
                </div>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-800 mb-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5" />
                      <span>What It Does Mean</span>
                    </div>
                  </h3>
                  <ul className="text-green-700 space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0 text-green-500" />
                      <span>The Church officially acknowledged that Galileo&apos;s judges were wrong to condemn him.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0 text-green-500" />
                      <span>It affirmed that Galileo had the better interpretation of Scripture on this point.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0 text-green-500" />
                      <span>It established the principle that theological interpretation must not override scientific evidence.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0 text-green-500" />
                      <span>It demonstrated the Church&apos;s willingness to honestly examine and acknowledge its mistakes.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0 text-green-500" />
                      <span>It reinforced the Church&apos;s commitment to the harmony of faith and reason.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-red-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-red-800 mb-3">
                    <div className="flex items-center gap-2">
                      <XCircle className="w-5 h-5" />
                      <span>What It Does Not Mean</span>
                    </div>
                  </h3>
                  <ul className="text-red-700 space-y-3">
                    <li className="flex items-start gap-2">
                      <XCircle className="w-5 h-5 mt-0.5 flex-shrink-0 text-red-500" />
                      <span>It does not mean the Church was historically &ldquo;anti-science&rdquo; &mdash; the Galileo case was exceptional, not typical.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-5 h-5 mt-0.5 flex-shrink-0 text-red-500" />
                      <span>It does not mean Galileo was blameless &mdash; his arrogance and personal attacks contributed to the conflict.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-5 h-5 mt-0.5 flex-shrink-0 text-red-500" />
                      <span>It does not mean the Bible is unreliable &mdash; it means the Bible should be read according to its literary genres.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-5 h-5 mt-0.5 flex-shrink-0 text-red-500" />
                      <span>It does not mean science overrides faith &mdash; faith and science address different but complementary dimensions of reality.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-5 h-5 mt-0.5 flex-shrink-0 text-red-500" />
                      <span>It does not validate the &ldquo;warfare thesis&rdquo; &mdash; the idea that science and religion are inherently in conflict remains discredited by historians.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Pope Benedict XVI */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                <div className="flex items-center gap-3">
                  <User className="w-8 h-8 text-indigo-600" />
                  <span>Pope Benedict XVI&apos;s Reflections</span>
                </div>
              </h2>
              <p className="text-gray-600 mb-6">
                Pope Benedict XVI, one of the most intellectually formidable popes in modern history,
                reflected on the Galileo affair multiple times during his pontificate and before it.
              </p>

              <div className="bg-indigo-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-indigo-800 mb-3">As Cardinal Ratzinger</h3>
                <p className="text-indigo-700 mb-3">
                  In a 1990 lecture at La Sapienza University in Rome, Cardinal Joseph Ratzinger quoted the
                  philosopher Paul Feyerabend&apos;s provocative observation that &ldquo;the Church at the time of
                  Galileo was much more faithful to reason than Galileo himself, and also took into consideration
                  the ethical and social consequences of Galileo&apos;s doctrine.&rdquo; This controversial quotation
                  was widely misunderstood as defending the condemnation of Galileo. In fact, Ratzinger was
                  making a more subtle philosophical point about the complexity of the relationship between
                  scientific theories and social consequences.
                </p>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-800 mb-3">As Pope</h3>
                <p className="text-purple-700 mb-3">
                  During the International Year of Astronomy in 2009, Pope Benedict XVI praised Galileo&apos;s
                  contributions to science and used the occasion to reaffirm the harmony of faith and reason:
                </p>
                <blockquote className="text-purple-800 italic pl-4 border-l-4 border-purple-400 mb-3">
                  &ldquo;Galileo saw nature as a book whose author is God in the same way that Scripture has
                  God as its author. It is a book whose history, whose evolution, whose &lsquo;writing&rsquo; and
                  meaning, we &lsquo;read&rsquo; according to the different approaches of the sciences, while all
                  the time presupposing the foundational presence of the author who wished to reveal
                  himself therein.&rdquo;
                </blockquote>
                <p className="text-purple-700">
                  Benedict&apos;s point was that Galileo himself saw no conflict between studying nature and
                  believing in God. Both the &ldquo;book of nature&rdquo; and the &ldquo;book of Scripture&rdquo; come from
                  the same Author and cannot ultimately contradict each other.
                </p>
              </div>
            </div>

            {/* The Broader Lesson */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                <div className="flex items-center gap-3">
                  <Lightbulb className="w-8 h-8 text-amber-600" />
                  <span>The Broader Lesson for Faith and Science</span>
                </div>
              </h2>
              <p className="text-gray-600 mb-6">
                The Galileo affair is not simply a historical episode to be filed away. It remains a
                living lesson for how the Catholic Church &mdash; and all people of faith &mdash; should approach
                the relationship between religious belief and scientific discovery.
              </p>

              <div className="space-y-6">
                <div className="bg-amber-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-amber-800 mb-3">A Cautionary Tale</h3>
                  <p className="text-amber-700 mb-3">
                    The Galileo affair is best understood not as a story of the Church suppressing science,
                    but as a cautionary tale about what happens when theological interpretation is confused
                    with revealed truth. The churchmen who condemned Galileo were not villains; many were
                    learned men who sincerely believed they were defending the faith. Their error was to treat
                    their own reading of Scripture as if it were the Word of God itself, rather than
                    recognizing that human interpretation of Scripture is always provisional and can be refined
                    by new knowledge.
                  </p>
                  <p className="text-amber-700">
                    This is a lesson that applies in every age. Whenever Christians insist that a particular
                    scientific question can be settled by quoting a Bible verse, they risk repeating the error
                    of Galileo&apos;s judges. The Bible teaches us the &ldquo;why&rdquo; of creation &mdash; its meaning, its
                    purpose, its Author. Science investigates the &ldquo;how&rdquo; &mdash; the mechanisms, the processes,
                    the mathematical laws. These are complementary inquiries, not competing ones.
                  </p>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">
                    The Church and Science: The Wider Picture
                  </h3>
                  <p className="text-blue-700 mb-3">
                    The Galileo case, precisely because it is so famous, can distort our picture of the
                    overall relationship between Catholicism and science. The wider picture tells a very
                    different story:
                  </p>
                  <ul className="text-blue-700 space-y-2">
                    <li className="flex items-start gap-2">
                      <Star className="w-5 h-5 mt-0.5 flex-shrink-0 text-blue-500" />
                      <span>The Catholic Church founded the European university system in the Middle Ages.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="w-5 h-5 mt-0.5 flex-shrink-0 text-blue-500" />
                      <span>A Catholic priest, Fr. Georges Lemaitre, proposed the Big Bang theory.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="w-5 h-5 mt-0.5 flex-shrink-0 text-blue-500" />
                      <span>A Catholic friar, Gregor Mendel, founded the science of genetics.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="w-5 h-5 mt-0.5 flex-shrink-0 text-blue-500" />
                      <span>The Jesuits have operated one of the world&apos;s oldest astronomical observatories since 1774.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="w-5 h-5 mt-0.5 flex-shrink-0 text-blue-500" />
                      <span>The Vatican Observatory continues active research in astrophysics today.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="w-5 h-5 mt-0.5 flex-shrink-0 text-blue-500" />
                      <span>The Pontifical Academy of Sciences includes Nobel laureates and leading researchers.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-800 mb-3">
                    Galileo&apos;s Own Insight
                  </h3>
                  <p className="text-green-700 mb-3">
                    Perhaps the most fitting conclusion comes from Galileo himself. In his 1615 Letter to
                    the Grand Duchess Christina, he wrote a passage that the Catholic Church now fully
                    endorses:
                  </p>
                  <blockquote className="text-green-800 italic text-lg pl-4 border-l-4 border-green-400 mb-3">
                    &ldquo;I do not feel obliged to believe that the same God who has endowed us with senses,
                    reason, and intellect has intended us to forgo their use and by some other means to
                    give us knowledge which we can attain by them.&rdquo;
                  </blockquote>
                  <p className="text-green-700">
                    This is, in the end, the Catholic position. God gave us minds to investigate His creation.
                    Science is not the enemy of faith; it is the exploration of the work of the Creator.
                    The Galileo affair is a reminder of what happens when we forget this &mdash; and a call to
                    never forget it again.
                  </p>
                </div>
              </div>
            </div>

            {/* Timeline of Rehabilitation */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                <div className="flex items-center gap-3">
                  <Clock className="w-8 h-8 text-teal-600" />
                  <span>Timeline of Rehabilitation</span>
                </div>
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">1718</h3>
                    <p className="text-gray-600">
                      The ban on printing Galileo&apos;s <em>Dialogue</em> is relaxed; new editions are permitted
                      with minor corrections.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">1758</h3>
                    <p className="text-gray-600">
                      Copernicus&apos;s <em>De Revolutionibus</em> is removed from the Index of Forbidden Books.
                      The general ban on heliocentric works is dropped.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">1835</h3>
                    <p className="text-gray-600">
                      Galileo&apos;s <em>Dialogue</em> is removed from the Index of Forbidden Books.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">1893</h3>
                    <p className="text-gray-600">
                      Pope Leo XIII&apos;s encyclical <em>Providentissimus Deus</em> affirms that the Bible does
                      not intend to teach natural science, vindicating Galileo&apos;s hermeneutical principle.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">1979</h3>
                    <p className="text-gray-600">
                      Pope John Paul II calls for a re-examination of the Galileo case.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">1981</h3>
                    <p className="text-gray-600">
                      The Galileo Commission is established to study the case.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">1992</h3>
                    <p className="text-gray-600">
                      Cardinal Poupard presents the commission&apos;s findings. Pope John Paul II acknowledges that
                      Galileo&apos;s judges committed an error and affirms the harmony of faith and reason.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">2008</h3>
                    <p className="text-gray-600">
                      Plans announced for a statue of Galileo in the Vatican Gardens (though the project
                      was ultimately not completed as planned). Pope Benedict XVI praises Galileo during the
                      International Year of Astronomy.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sources */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Sources &amp; Further Reading</h3>
              <ol className="text-gray-700 space-y-2 list-decimal list-inside">
                <li>Pope John Paul II, &ldquo;Address to the Pontifical Academy of Sciences&rdquo; (October 31, 1992).</li>
                <li>Cardinal Paul Poupard, &ldquo;Galileo: Report on Papal Commission Findings&rdquo; (October 31, 1992).</li>
                <li>Maurice A. Finocchiaro, <em>Retrying Galileo, 1633&ndash;1992</em> (University of California Press, 2005).</li>
                <li>Ernan McMullin, ed., <em>The Church and Galileo</em> (University of Notre Dame Press, 2005).</li>
                <li>Pope John Paul II, Letter to Fr. George V. Coyne, Director of the Vatican Observatory (1988).</li>
                <li>Pope Leo XIII, Encyclical <em>Providentissimus Deus</em> (1893).</li>
                <li>Pope Benedict XVI, Address to the Pontifical Academy of Sciences (2008).</li>
              </ol>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
