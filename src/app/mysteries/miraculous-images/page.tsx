'use client'

import { useState } from 'react'
import {
  BookOpen,
  Eye,
  Star,
  Shield,
  Church,
  Flame,
  Scroll,
  Heart,
  Globe,
  Crown,
  Search,
  ArrowRight,
  Microscope,
  FlaskConical,
} from 'lucide-react'

type TabId = 'overview' | 'tilma' | 'shroud' | 'icons' | 'holy-face' | 'reading'

const tabs: { id: TabId; label: string }[] = [
  { id: 'overview', label: 'Overview' },
  { id: 'tilma', label: 'The Tilma of Guadalupe' },
  { id: 'shroud', label: 'The Shroud of Turin' },
  { id: 'icons', label: 'Sacred Icons' },
  { id: 'holy-face', label: 'The Holy Face' },
  { id: 'reading', label: 'Further Reading' },
]

export default function MiraculousImagesPage() {
  const [activeTab, setActiveTab] = useState<TabId>('overview')

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">

        {/* Hero Section */}
        <div className="text-center mb-8">
          <div className="inline-block mb-4">
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold uppercase tracking-wide"
              style={{ backgroundColor: '#FEF3C7', color: '#92400E' }}
            >
              <Star className="w-4 h-4" />
              Mysteries of the Faith
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 font-serif">
            Miraculous Images
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Throughout Catholic history, certain sacred images have been venerated as windows to the
            divine &mdash; objects associated with inexplicable physical phenomena, healings, and
            supernatural characteristics that have withstood centuries of scrutiny. The Second Council
            of Nicaea (787 AD) declared that &ldquo;honor paid to an image passes to its prototype&rdquo;
            &mdash; establishing the theological foundation for their veneration.
          </p>
        </div>

        {/* Doctrinal Anchor Box */}
        <div
          className="rounded-xl p-6 mb-8 border"
          style={{ backgroundColor: '#FFFBEB', borderColor: '#FDE68A' }}
        >
          <div className="flex items-start gap-4">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
              style={{ backgroundColor: '#FEF3C7' }}
            >
              <BookOpen className="w-5 h-5" style={{ color: '#92400E' }} />
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-2">
                Sacred Images in Catholic Faith
              </h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong>CCC 1159:</strong> &ldquo;The sacred image, the liturgical icon, principally
                represents Christ. It cannot represent the invisible and incomprehensible God, but the
                incarnation of the Son of God has ushered in a new &lsquo;economy&rsquo; of images.&rdquo;
              </p>
              <p className="text-gray-700 leading-relaxed">
                The Church draws a precise distinction between <em>latria</em> (worship, due to God
                alone), <em>dulia</em> (veneration, given to the saints), and <em>hyperdulia</em>
                (veneration of the Blessed Virgin Mary). Images are not idols; they are signs pointing
                beyond themselves. To venerate an image is to honor the person it represents &mdash;
                never to worship the object itself (<em>CCC</em> 2130&ndash;2132).
              </p>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg shadow-lg p-1 overflow-x-auto max-w-full">
            <div className="flex flex-nowrap gap-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className="px-4 py-2.5 rounded-md text-sm font-medium transition-colors whitespace-nowrap"
                  style={
                    activeTab === tab.id
                      ? { backgroundColor: '#92400E', color: 'white' }
                      : { color: '#6B7280' }
                  }
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ==================== TAB 1: OVERVIEW ==================== */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FEF3C7' }}>
                  <BookOpen className="w-6 h-6" style={{ color: '#92400E' }} />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Theology of Sacred Images</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                A <strong>miraculous image</strong> is a sacred representation &mdash; a painting,
                icon, cloth, or sculpture &mdash; that has been associated with one or more of the
                following phenomena: supernatural healing, weeping (myrrh, blood, or oil), luminous
                events, astronomical anomalies occurring at the moment of origin, or inexplicable
                physical characteristics that defy scientific reproduction. The Church does not require
                belief in any particular miraculous image, but she has formally permitted and
                encouraged veneration of many of them when the evidence and the fruits of devotion
                have warranted it.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold mb-3" style={{ color: '#78350F' }}>
                  The Theological Foundation: Second Council of Nicaea (787 AD)
                </h3>
                <p className="leading-relaxed mb-3" style={{ color: '#92400E' }}>
                  The Seventh Ecumenical Council, convened by Empress Irene and Pope Adrian I in
                  response to Byzantine iconoclasm, definitively resolved the question of sacred
                  images. Drawing on St. Basil the Great&rsquo;s principle that &ldquo;the honor
                  paid to an image passes to its prototype&rdquo; (<em>De Spiritu Sancto</em>, 18),
                  the Council affirmed that Christians may venerate images of Christ, the Theotokos,
                  and the saints &mdash; provided they reserve the absolute worship of <em>latria</em>
                  for God alone.
                </p>
                <p className="text-sm" style={{ color: '#A16207' }}>
                  <em>CCC</em> 1159&ndash;1162; Second Council of Nicaea, Definition on Holy Images (DS 600&ndash;601)
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h3 className="text-base font-semibold text-gray-800 mb-2">Vatican II on Sacred Images</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    <em>Sacrosanctum Concilium</em> 125 instructs that sacred images be maintained in
                    churches, that their number should not be excessive, and that their arrangement
                    should express right order, so they may better lead the faithful toward the sacred
                    mysteries they signify.
                  </p>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h3 className="text-base font-semibold text-gray-800 mb-2">Veneration vs. Worship</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    <em>Latria</em> (adoration/worship) is owed to God alone. <em>Dulia</em>
                    (veneration) is given to the saints. <em>Hyperdulia</em> is the special
                    veneration accorded to the Blessed Virgin Mary as the greatest of saints.
                    No image is an object of worship. It is always a sign pointing to a person.
                  </p>
                </div>
              </div>

              {/* History of Iconoclasm */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">History of Iconoclasm and the Church&rsquo;s Defense</h3>
                <div className="space-y-4">
                  <div className="border-l-4 pl-4" style={{ borderColor: '#FDE68A' }}>
                    <h4 className="font-semibold text-gray-800 mb-1">Byzantine Iconoclasm (726&ndash;843)</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Emperor Leo III ordered the destruction of icons in 726, igniting a
                      century-long conflict. The Empress Irene convened Nicaea II (787) to restore
                      icon veneration, but iconoclasm returned under Leo V (815&ndash;842) before
                      the &ldquo;Triumph of Orthodoxy&rdquo; under Empress Theodora (843) &mdash;
                      still celebrated in Eastern Christianity on the first Sunday of Lent.
                    </p>
                  </div>
                  <div className="border-l-4 pl-4" style={{ borderColor: '#FDE68A' }}>
                    <h4 className="font-semibold text-gray-800 mb-1">Protestant Reformation (16th Century)</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Calvin and Zwingli led iconoclastic campaigns, with mobs destroying statues
                      and stained glass across northern Europe. Luther&rsquo;s position was more
                      moderate. The Catholic response came at the Council of Trent.
                    </p>
                  </div>
                  <div className="border-l-4 pl-4" style={{ borderColor: '#FDE68A' }}>
                    <h4 className="font-semibold text-gray-800 mb-1">Council of Trent, Session XXV (1563)</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      The Decree on Sacred Images reaffirmed the Nicene tradition: images of
                      Christ, the Virgin Mother of God, and the other saints are to be kept and
                      retained in churches, and due honor and veneration is to be given to them.
                      The honor is referred to the persons they represent, not to the images
                      themselves.
                    </p>
                  </div>
                </div>
              </div>

              {/* Types of Miraculous Phenomena */}
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Types of Miraculous Phenomena</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    {
                      icon: Microscope,
                      label: 'Inexplicable Physical Composition',
                      desc: 'Pigments, fibers, or materials that cannot be identified or replicated by any known natural process.',
                    },
                    {
                      icon: Heart,
                      label: 'Healing',
                      desc: 'Documented cures associated with veneration of a particular image, often investigated by medical authorities.',
                    },
                    {
                      icon: Eye,
                      label: 'Weeping',
                      desc: 'Images observed to exude myrrh, blood, or oil &mdash; a distinct phenomenon treated on a separate page.',
                    },
                    {
                      icon: Flame,
                      label: 'Luminous Phenomena',
                      desc: 'Light emanating from an image, witnessed by multiple persons simultaneously, often at moments of devotion.',
                    },
                    {
                      icon: Shield,
                      label: 'Resistance to Destruction',
                      desc: 'Images that have survived fires, floods, or deliberate attack without damage, or with inexplicable preservation.',
                    },
                    {
                      icon: Star,
                      label: 'Astronomical Correspondences',
                      desc: 'Features encoded in an image that correspond to sky conditions or celestial positions at the moment of origin.',
                    },
                  ].map((item) => {
                    const Icon = item.icon
                    return (
                      <div key={item.label} className="bg-amber-50 p-4 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <Icon className="w-4 h-4" style={{ color: '#92400E' }} />
                          <span className="font-semibold text-sm text-gray-800">{item.label}</span>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== TAB 2: TILMA ==================== */}
        {activeTab === 'tilma' && (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FEF3C7' }}>
                  <Crown className="w-6 h-6" style={{ color: '#92400E' }} />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Our Lady of Guadalupe &mdash; The Tilma</h2>
              </div>

              {/* Historical Context */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Historical Context</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  On December 9&ndash;12, 1531, the Blessed Virgin Mary appeared four times to
                  Juan Diego Cuauhtlatoatzin (canonized by Pope John Paul II, July 31, 2002) on
                  Tepeyac Hill, near what is now Mexico City. On December 12, she instructed Juan
                  Diego to carry flowers in his <em>tilma</em> (cloak) to Bishop Juan de
                  Zumárraga as a sign. When Juan Diego opened his tilma before the bishop, he
                  poured out the flowers &mdash; and the image of the Virgin was found miraculously
                  imprinted on the fabric. The bishop fell to his knees.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  The tilma is approximately 170 &times; 105 cm, made of <em>ayate</em> fiber
                  &mdash; coarsely woven from the threads of a maguey cactus (agave) plant, with
                  two pieces sewn together down the center. Such fabric, under normal conditions,
                  would have decayed within 20&ndash;30 years. The tilma has lasted nearly 495 years.
                  It had no protective glass until 1647, no backing material until 1789, and was
                  handled freely by pilgrims for more than a century after its appearance.
                </p>
              </div>

              {/* Scientific Investigations */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Scientific Investigations</h3>
                <div className="space-y-4">
                  <div className="border border-amber-200 rounded-lg p-5" style={{ backgroundColor: '#FFFBEB' }}>
                    <div className="flex items-start gap-3">
                      <FlaskConical className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#92400E' }} />
                      <div>
                        <h4 className="font-bold text-gray-800 mb-1">
                          1936 &mdash; Dr. Richard Kuhn (Nobel Prize in Chemistry, 1938)
                        </h4>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          Analysis of the pigments in the tilma revealed that they match no known
                          mineral, vegetable, or animal colorant identifiable at the time. The
                          colors could not be classified within any natural or artificial pigment
                          category known to science.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border border-amber-200 rounded-lg p-5" style={{ backgroundColor: '#FFFBEB' }}>
                    <div className="flex items-start gap-3">
                      <Microscope className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#92400E' }} />
                      <div>
                        <h4 className="font-bold text-gray-800 mb-1">
                          1979 &mdash; Dr. Philip Callahan (Infrared Photography, NASA)
                        </h4>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          Under infrared light, the image shows no brushstrokes of any kind. There
                          is no sizing (preparatory layer) applied to the fabric before the image
                          was set &mdash; violating every known rule of painting on fabric. The
                          stars on Mary&rsquo;s mantle correspond, in their arrangement, to the
                          constellations of the winter sky as they appeared over Mexico City on
                          December 12, 1531 &mdash; a correspondence not noted until the era of
                          modern astronomy.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border border-amber-200 rounded-lg p-5" style={{ backgroundColor: '#FFFBEB' }}>
                    <div className="flex items-start gap-3">
                      <Search className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#92400E' }} />
                      <div>
                        <h4 className="font-bold text-gray-800 mb-1">
                          1979 &mdash; Dr. José Aste Tönnsmann (Digital Image Analysis)
                        </h4>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          Using 2,500&times; magnification on digital enlargements of the Virgin&rsquo;s
                          eyes, reflected images of multiple human figures were discovered &mdash;
                          consistent with what would be optically visible if the eyes were living
                          eyes at the moment Juan Diego opened his tilma before the bishop. The
                          reflected scene includes what appear to be Juan Diego, Bishop Zumarraga,
                          his interpreter, and other figures present in the room.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border border-amber-200 rounded-lg p-5" style={{ backgroundColor: '#FFFBEB' }}>
                    <div className="flex items-start gap-3">
                      <Eye className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#92400E' }} />
                      <div>
                        <h4 className="font-bold text-gray-800 mb-1">
                          Ophthalmological Examination &mdash; Graef Fernández & Sodi Pallares
                        </h4>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          A medical analysis of the eyes found the presence of the
                          Purkinje&ndash;Sanson effect &mdash; the triple reflection of light
                          observable only in living eyes, produced by the cornea, the anterior
                          surface of the lens, and the posterior surface of the lens. This optical
                          phenomenon is not reproducible in any painted surface.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border border-amber-200 rounded-lg p-5" style={{ backgroundColor: '#FFFBEB' }}>
                    <div className="flex items-start gap-3">
                      <Globe className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#92400E' }} />
                      <div>
                        <h4 className="font-bold text-gray-800 mb-1">
                          Structural Analysis &mdash; The Image on the Fabric
                        </h4>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          The image has no definitive underdrawing, no sizing, no varnish. The
                          colors sit directly on the surface of the fabric fibers without any
                          preparatory medium. The technique is unknown to any school or period of
                          painting. Even restoration attempts in the 18th century left the original
                          image untouched, as the added portions were visibly inferior and were
                          later removed.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Theological Significance */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Theological Significance</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The apparition coincided with one of the most dramatic mass conversions in the
                  history of the Church. Within seven years of the image&rsquo;s appearance, an
                  estimated 8 million indigenous Mexicans received baptism &mdash; a rate unprecedented
                  in Christian mission history. The image itself was an act of inculturation: Mary
                  appeared clothed in indigenous symbolic garments, with a blue-green mantle (the
                  color of Aztec royalty and divinity), a <em>maternity band</em> (indicating she
                  carried a child), and standing before the sun &mdash; symbolically overcoming the
                  Aztec sun god Huitzilopochtli. She stood on a crescent moon, crushing the serpent
                  Quetzalcoatl. She was depicted as mestiza, a woman of mixed heritage, identifying
                  with the very people she came to evangelize.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  The tilma is permanently enshrined at the Basilica of Our Lady of Guadalupe
                  at Tepeyac, Mexico City &mdash; the most visited Marian shrine in the world,
                  welcoming more than 20 million pilgrims annually. The feast of Our Lady of
                  Guadalupe is celebrated on December 12; she is Patroness of the Americas and
                  of the unborn.
                </p>
              </div>

              <div className="bg-amber-50 p-5 rounded-lg border" style={{ borderColor: '#FDE68A' }}>
                <p className="text-sm" style={{ color: '#78350F' }}>
                  <strong>Primary Sources:</strong> Callahan, Philip.
                  <em> The Tilma Under Infra-Red Radiation.</em> CARA Studies on Popular Devotion,
                  1981. &bull; Aste Tönnsmann, José. <em>El Secreto de Sus Ojos.</em> Mexico City:
                  Editorial Diana, 1998. &bull; Graef Fernández, Carlos. <em>Estudio científico de
                  la imagen guadalupana.</em> Mexico City, 1967.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ==================== TAB 3: SHROUD ==================== */}
        {activeTab === 'shroud' && (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FEF3C7' }}>
                  <Scroll className="w-6 h-6" style={{ color: '#92400E' }} />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Holy Shroud of Turin</h2>
              </div>

              {/* What Is It */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">What Is the Shroud?</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The Shroud of Turin is a linen cloth measuring 441 &times; 113 cm bearing the
                  full-length image of a crucified man &mdash; front and back &mdash; together with
                  bloodstains whose location corresponds precisely to the wounds of crucifixion:
                  the wrists (not the palms), the feet, the side, lacerations consistent with a
                  crown of thorns around the head, and approximately 120 scourge marks consistent
                  with the Roman <em>flagrum</em> (a multi-thonged whip with lead or bone tips).
                </p>
                <p className="text-gray-700 leading-relaxed">
                  The Shroud is permanently housed at the Cathedral of San Giovanni Battista in
                  Turin, Italy. It has been shown publicly on rare occasions; the most recent
                  exposition was in 2015. It is the most studied artifact in human history.
                </p>
              </div>

              {/* History */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Historical Record</h3>
                <div className="space-y-3">
                  {[
                    { year: 'c. 30 AD', event: 'Crucifixion of Jesus of Nazareth (if the Shroud is authentic).' },
                    { year: '1353', event: 'First documented in Lirey, France, in the possession of knight Geoffroi de Charny.' },
                    { year: '1453', event: 'Given to the House of Savoy; enshrined at Chambéry.' },
                    { year: '1532', event: 'Fire at Chambéry. Molten silver from the reliquary burned triangular holes into the folded cloth, repaired by Poor Clare nuns. These burn marks remain visible.' },
                    { year: '1578', event: 'Transferred to Turin, where it remains today.' },
                    { year: '1389', event: 'Bishop Pierre d\'Arcis memo to Pope Clement VII raised doubts; a painter was alleged to have confessed to making it. The memo has never been fully corroborated.' },
                  ].map((item) => (
                    <div key={item.year} className="flex gap-4">
                      <span className="font-bold text-sm w-16 flex-shrink-0" style={{ color: '#92400E' }}>{item.year}</span>
                      <p className="text-gray-700 text-sm leading-relaxed">{item.event}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Church Position */}
              <div className="bg-amber-50 border rounded-lg p-5 mb-8" style={{ borderColor: '#FDE68A' }}>
                <h3 className="text-lg font-bold mb-3" style={{ color: '#78350F' }}>The Church&rsquo;s Official Position</h3>
                <p className="text-gray-700 leading-relaxed text-sm mb-3">
                  The Catholic Church makes no official pronouncement on the Shroud&rsquo;s
                  authenticity. It has permitted veneration since the 14th century and allows
                  pilgrimage to it as a sacred image, whatever its ultimate physical origin. The
                  Church treats it as an icon of Christ&rsquo;s Passion, worthy of devotional
                  contemplation regardless of scientific questions.
                </p>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: '#92400E' }} />
                    <span><strong>Pope Francis (2015):</strong> Called the Shroud &ldquo;an icon of Holy Saturday&rdquo; &mdash; the image of the dead Christ lying in the tomb.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: '#92400E' }} />
                    <span><strong>Pope John Paul II:</strong> Venerated the Shroud twice (1980, 1998). In 1998 he called it &ldquo;a mirror of the Gospel.&rdquo;</span>
                  </li>
                </ul>
              </div>

              {/* Scientific Investigations */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Scientific Investigations</h3>
                <div className="space-y-4">
                  <div className="border rounded-lg p-5" style={{ backgroundColor: '#FFFBEB', borderColor: '#FDE68A' }}>
                    <h4 className="font-bold text-gray-800 mb-2">1978 &mdash; STURP (Shroud of Turin Research Project)</h4>
                    <p className="text-gray-700 text-sm leading-relaxed mb-3">
                      A team of 40 American scientists, including specialists in physics, chemistry,
                      biology, and forensic pathology, spent five days with direct access to the
                      Shroud. Their principal findings:
                    </p>
                    <ul className="text-gray-700 text-sm space-y-2">
                      {[
                        'The image is NOT painted. No pigment, dye, or stain was found to account for the image in sufficient quantity.',
                        'The image is superficial — affecting only the top 2–3 fibrils (200–600 nanometers) of the outermost threads, not the underlying thread or the fabric as a whole.',
                        'The bloodstains are genuine human blood, type AB.',
                        'The image was formed by some oxidation/dehydration process not reproducible by any known artificial or natural method.',
                        'There is no evidence of artificial aging of the linen fibers in the image area.',
                      ].map((point, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="font-bold" style={{ color: '#92400E' }}>&bull;</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border rounded-lg p-5" style={{ backgroundColor: '#FFFBEB', borderColor: '#FDE68A' }}>
                    <h4 className="font-bold text-gray-800 mb-2">3D Encoding &mdash; VP-8 Image Analyzer (NASA, 1977)</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      When the Shroud image was processed by a VP-8 Image Analyzer (a NASA tool
                      designed to convert pixel density to altitude data), it produced a perfect
                      three-dimensional relief of a human face. No known photograph or painting,
                      when subjected to the same process, yields a coherent 3D image. The Shroud
                      encodes spatial information consistent with a cloth draped over a body
                      &mdash; not a painted flat surface.
                    </p>
                  </div>

                  <div className="border rounded-lg p-5 border-red-200" style={{ backgroundColor: '#FFF5F5' }}>
                    <h4 className="font-bold text-gray-800 mb-2">1988 &mdash; Radiocarbon Dating (Three Laboratories)</h4>
                    <p className="text-gray-700 text-sm leading-relaxed mb-3">
                      Laboratories in Zurich, Oxford, and Tucson (Arizona) independently dated
                      samples to 1260&ndash;1390 AD &mdash; the medieval period. This is the
                      strongest scientific argument against the Shroud&rsquo;s authenticity as
                      Christ&rsquo;s burial cloth. However, subsequent critiques have raised
                      substantive challenges:
                    </p>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li className="flex items-start gap-2">
                        <span style={{ color: '#92400E' }}>&bull;</span>
                        <span><strong>Reweaved repair area:</strong> Textile expert Mechthild Flury-Lemberg and others have argued that the samples came from a corner of the cloth that was reweaved in the medieval period &mdash; not original linen.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span style={{ color: '#92400E' }}>&bull;</span>
                        <span><strong>Fire contamination:</strong> The 1532 fire introduced carbon contamination that may have skewed the dating.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span style={{ color: '#92400E' }}>&bull;</span>
                        <span><strong>Microbial contamination:</strong> Dr. Leoncio Garza-Valdes (University of Texas, San Antonio, 1998) identified a bioplastic coating of bacteria and fungi on the fibers that could significantly affect carbon dating.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border rounded-lg p-5" style={{ backgroundColor: '#FFFBEB', borderColor: '#FDE68A' }}>
                    <h4 className="font-bold text-gray-800 mb-2">Pollen Analysis &mdash; Max Frei (1973)</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Swiss criminologist Max Frei identified 58 pollen types on the Shroud.
                      Among these were pollens from plants native to Palestine and Turkey, as
                      well as European species &mdash; consistent with a cloth that traveled from
                      Jerusalem through Constantinople and into France. Several of the identified
                      pollens are specific to the region around the Dead Sea.
                    </p>
                  </div>
                </div>
              </div>

              {/* Sudarium of Oviedo */}
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">The Sudarium of Oviedo</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  A smaller cloth measuring 84 &times; 53 cm, kept in the Cathedral of San Salvador
                  in Oviedo, Spain, since the 7th century, is identified by tradition as the face
                  cloth of Christ mentioned in John 20:7: &ldquo;and the cloth that had covered
                  his head, not lying with the linen wraps but rolled up in a separate place.&rdquo;
                  The Sudarium&rsquo;s historical record goes back to 570 AD (documented by Antoninus
                  of Piacenza), predating the first documented record of the Shroud by nearly 800 years.
                </p>
                <ul className="text-gray-700 text-sm space-y-2">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: '#92400E' }} />
                    <span>Blood type AB &mdash; identical to the Shroud.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: '#92400E' }} />
                    <span>Pollen types from Palestine, consistent with the Shroud.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: '#92400E' }} />
                    <span>When the stain pattern of the Sudarium is superimposed on the face of the Shroud, the blood and fluid marks correspond geometrically &mdash; consistent with the same face covered by the same cloth at different moments.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* ==================== TAB 4: ICONS ==================== */}
        {activeTab === 'icons' && (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FEF3C7' }}>
                  <Church className="w-6 h-6" style={{ color: '#92400E' }} />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Icons and Miraculous Images</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-8">
                Beyond the Tilma and the Shroud, the Catholic tradition preserves numerous icons
                and sacred images associated with miraculous phenomena, extraordinary origins, or
                profound historical significance in the life of the Church.
              </p>

              {/* Our Lady of Czestochowa */}
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FEF3C7' }}>
                    <Crown className="w-4 h-4" style={{ color: '#92400E' }} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    A &mdash; Our Lady of Częstochowa (The Black Madonna)
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The Black Madonna of Jasna Góra is the most venerated image in Poland and one
                  of the most celebrated Marian icons in Catholic history. The icon measures
                  approximately 122 &times; 82 cm on a lime wood panel. By strong tradition, it
                  was painted by St. Luke the Evangelist &mdash; a claim understood within the
                  theology of icon-making, wherein the painter functions as an instrument of the
                  Holy Spirit rather than a merely human artist. The icon was brought to the
                  Jasna Góra monastery in Częstochowa, Poland, in 1382 by Prince Ladislaus of Opole.
                </p>
                <div className="bg-amber-50 p-5 rounded-lg mb-4" style={{ borderLeft: '4px solid #FDE68A' }}>
                  <h4 className="font-bold text-gray-800 mb-2">The Sword Scars</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    In 1430, Hussite raiders attacked the monastery and slashed the icon&rsquo;s
                    left cheek with swords, leaving two deep gashes. When restorers attempted to
                    repaint over the scars, the original paints continuously flaked off any new
                    layer applied over the damaged areas. The scars remain visible on the icon
                    to this day, and Mary is sometimes called <em>Our Lady of the Sword Marks</em>
                    in reference to this event.
                  </p>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  During the Swedish invasion of Poland in 1655 &mdash; the catastrophic period
                  known in Polish history as &ldquo;The Deluge&rdquo; &mdash; the Jasna Góra
                  monastery was besieged by Swedish forces. Against overwhelming military odds,
                  the monastery held. King Jan II Casimir attributed the defense to the
                  intercession of Our Lady and, on April 1, 1656, in the Cathedral of Lviv,
                  consecrated Poland to the Blessed Virgin Mary, naming her Queen of Poland.
                  This consecration has been renewed by every subsequent Polish government.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  The image was crowned by a legate of Pope Clement XI in 1717 &mdash; the first
                  Marian image to be crowned by papal authority in Poland. Pope John Paul II, who
                  kept a copy of the icon in his private chapel in Rome, visited Jasna Góra four
                  times as Pope. The feast of Our Lady of Częstochowa is celebrated on August 26.
                </p>
              </div>

              {/* Our Lady of Perpetual Help */}
              <div className="mb-10 border-t border-gray-100 pt-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FEF3C7' }}>
                    <Heart className="w-4 h-4" style={{ color: '#92400E' }} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">B &mdash; Our Lady of Perpetual Help</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  A Byzantine icon dating to approximately the 15th century, measuring 54 &times; 40 cm,
                  the image of Our Lady of Perpetual Help depicts the Blessed Virgin in the
                  <em> Hodegetria</em> style (&ldquo;She who shows the way&rdquo;), holding the Christ
                  Child, who clings to her hand. On either side of the Madonna, the archangels
                  Michael and Gabriel bear the instruments of the Passion &mdash; the cross, the
                  nails, and the lance. The Child&rsquo;s sandal is slipping from his foot as he
                  looks at Gabriel presenting the Cross; tradition understands this as Christ
                  instinctively reaching for his Mother at the sight of the instrument of his
                  future suffering.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The image is currently enshrined at the Church of Sant&rsquo;Alfonso di Liguori
                  (Via Merulana, Rome), served by the Redemptorists. Its history in Rome includes
                  time in the Church of San Matteo, where it was kept until the French occupation
                  of 1798, when it was lost. It was recovered in 1863, and in 1866 Pope Pius IX
                  entrusted the image to the Redemptorist Congregation with the mandate to &ldquo;make
                  her known throughout the world.&rdquo; Pope Gregory XVI had earlier confirmed its
                  miraculous properties.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  The novena to Our Lady of Perpetual Help is among the most widely prayed novenas
                  in the Catholic world. Millions of copies of the icon have been distributed in
                  parishes and homes on every continent.
                </p>
              </div>

              {/* Holy Face of Manoppello */}
              <div className="mb-10 border-t border-gray-100 pt-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FEF3C7' }}>
                    <Eye className="w-4 h-4" style={{ color: '#92400E' }} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">C &mdash; The Holy Face of Manoppello</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  A translucent veil measuring 17 &times; 24 cm, bearing the image of a male face,
                  is kept in the Capuchin sanctuary of the Holy Face in Manoppello, Pescara, Italy.
                  The cloth is identified by a significant body of scholarly research as the
                  <em> Sudarium</em> &mdash; the cloth associated in medieval tradition with the Veil
                  of Veronica, said to have wiped the face of Christ on the Via Dolorosa and received
                  his likeness.
                </p>
                <div className="bg-amber-50 p-5 rounded-lg mb-4" style={{ borderLeft: '4px solid #FDE68A' }}>
                  <h4 className="font-bold text-gray-800 mb-2">The Material Problem</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Prof. Donato Vittore of the University of Bari has identified the material as
                    <em> byssus</em> (sea silk) &mdash; a fiber produced from the secretions of a
                    Mediterranean shellfish (<em>Pinna nobilis</em>). Byssus is so fine and smooth
                    that pigments do not adhere to it. Yet the image is present and visible from both
                    sides of the cloth. No known pigment or dye has been found on the fabric.
                  </p>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Sr. Blandina Paschalis Schlömer (Trappist), in her detailed research, superimposed
                  the face visible on the Manoppello veil over the face on the Shroud of Turin and
                  found a correspondence in facial dimensions and wound markings consistent with
                  the two images representing the same person.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Pope Benedict XVI visited Manoppello on September 1, 2006 &mdash; the first papal
                  visit to the shrine. He prayed before the veil in silence and described the image
                  as &ldquo;mysterious.&rdquo;
                </p>
              </div>

              {/* San Damiano Cross */}
              <div className="border-t border-gray-100 pt-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FEF3C7' }}>
                    <Flame className="w-4 h-4" style={{ color: '#92400E' }} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">D &mdash; The San Damiano Cross</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  A 12th-century painted crucifix, now permanently housed at the Basilica of
                  Santa Chiara (St. Clare) in Assisi, Italy, the San Damiano Cross holds a unique
                  place in Catholic history as the image that initiated the founding of the
                  Franciscan Order.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  In 1205&ndash;1206, the young Francis of Assisi &mdash; still in the early stages
                  of his conversion &mdash; was praying before this cross in the ruined, neglected
                  church of San Damiano outside Assisi when he heard a voice speaking to him from
                  the image: &ldquo;Francis, go and repair my Church, which you see is falling into
                  ruins.&rdquo; Francis initially understood the command literally, and set about
                  physically repairing the crumbling building. Over time, he came to understand
                  the call as a vocation to reform the broader Church through evangelical poverty,
                  preaching, and fraternal life.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  This cross is the origin of the Franciscan Order and the great reforming movement
                  of the 13th century. The original cross was kept at San Damiano until St. Clare&rsquo;s
                  death (1253), and then transferred to the basilica built in her honor, where it has
                  remained ever since. It is venerated as a sacred relic and a historically significant
                  object through which God spoke a renewal to the whole Church.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ==================== TAB 5: HOLY FACE ==================== */}
        {activeTab === 'holy-face' && (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FEF3C7' }}>
                  <Eye className="w-6 h-6" style={{ color: '#92400E' }} />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Devotion to the Holy Face of Jesus</h2>
              </div>

              {/* Theological Foundation */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Theological Foundation</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The devotion to the Holy Face of Jesus is grounded in two scriptural pillars.
                  Isaiah 53:3 prophesies the Suffering Servant: &ldquo;He was despised and rejected
                  by others; a man of suffering and acquainted with infirmity; and as one from whom
                  others hide their faces he was despised, and we held him of no account.&rdquo; Psalm 27:8
                  expresses the desire at the heart of all prayer: &ldquo;My heart says to you, &lsquo;Your
                  face, Lord, do I seek.&rsquo;&rdquo;
                </p>
                <p className="text-gray-700 leading-relaxed">
                  The Holy Face, in Catholic devotion, represents both dimensions: the face of
                  Christ suffering in his Passion (the basis for reparatory prayer), and the face
                  of the glorified, living Christ who now reigns at the right hand of the Father
                  and who will come again. To seek the Holy Face is to seek the Person of Christ
                  himself &mdash; in contemplation, in reparation, and in love.
                </p>
              </div>

              {/* Veil of Veronica */}
              <div className="bg-amber-50 p-6 rounded-lg mb-8 border" style={{ borderColor: '#FDE68A' }}>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#78350F' }}>The Veil of Veronica</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Medieval tradition holds that a woman named Veronica wiped the face of Christ
                  on the Via Dolorosa (the Way of the Cross) and received his likeness miraculously
                  imprinted on her veil. The name &ldquo;Veronica&rdquo; may itself derive from the
                  Latin-Greek compound <em>vera icon</em> &mdash; &ldquo;true image&rdquo; &mdash;
                  suggesting that the name may have been assigned to the cloth before the woman.
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Three relics claim to be this veil: one is kept in St. Peter&rsquo;s Basilica
                  (Vatican); one is the Manoppello image (see Sacred Icons tab); and one is kept
                  in the Cathedral of Jaén, Spain. None of the three has been subjected to the
                  same comprehensive scientific investigation as the Shroud of Turin.
                </p>
                <p className="text-gray-700 text-sm">
                  Bl. Anne Catherine Emmerich (1774&ndash;1824), the Augustinian mystic whose
                  visions were transcribed by the poet Clemens Brentano, described the Veil of
                  Veronica and its use on the Via Dolorosa in detail in <em>The Dolorous Passion
                  of Our Lord Jesus Christ</em>.
                </p>
              </div>

              {/* Saints */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Saints and the Holy Face</h3>
                <div className="space-y-5">
                  <div className="border-l-4 pl-5 py-1" style={{ borderColor: '#FDE68A' }}>
                    <h4 className="font-bold text-gray-800 mb-1">St. Teresa of Ávila (1515&ndash;1582)</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Teresa describes in her <em>Autobiography</em> how a decisive deepening of her
                      prayer life came while contemplating a statue of the wounded Christ &mdash; an
                      <em> ecce homo</em> image. The sight of the suffering Face so moved her that
                      she was unable to rise from her knees until she had begged God for the grace
                      of deep conversion. The Holy Face became a touchstone of her contemplative life.
                    </p>
                  </div>

                  <div className="border-l-4 pl-5 py-1" style={{ borderColor: '#FDE68A' }}>
                    <h4 className="font-bold text-gray-800 mb-1">Sr. Marie of St. Peter, OCD (1816&ndash;1848)</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      A Carmelite nun of Tours, France, Sr. Marie received interior locutions beginning
                      in 1843 in which Our Lord asked for a work of reparation to the Holy Face in
                      response to blasphemy, profanation of Sunday, and atheism. The devotion
                      was formally approved by Bishop Morlot of Tours in 1844. Sr. Marie died young,
                      at age 32, in 1848. The feast of the Holy Face is observed on November 2 in
                      the Diocese of Tours.
                    </p>
                  </div>

                  <div className="border-l-4 pl-5 py-1" style={{ borderColor: '#FDE68A' }}>
                    <h4 className="font-bold text-gray-800 mb-1">Ven. Léon Papin Dupont (1797&ndash;1876)</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Known as &ldquo;the Holy Man of Tours,&rdquo; Léon Dupont was the great lay
                      promoter of Holy Face devotion in the 19th century. He kept a lamp burning
                      before a copy of the Veil of Veronica in his Tours apartment, which became
                      a center of popular devotion. After his death, documented miracles of healing
                      were associated with the oil from the lamp before the Holy Face image. His
                      cause for beatification is open.
                    </p>
                  </div>

                  <div className="border-l-4 pl-5 py-1" style={{ borderColor: '#FDE68A' }}>
                    <h4 className="font-bold text-gray-800 mb-1">St. Thérèse of Lisieux (1873&ndash;1897)</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      The Little Flower took as her religious name &ldquo;Thérèse of the Child Jesus
                      and the Holy Face&rdquo; &mdash; uniting in a single name the mystery of the
                      Incarnation and the mystery of the Passion. She wrote that the Holy Face was
                      the &ldquo;book&rdquo; that taught her the depths of love, and she meditated
                      especially on Isaiah 53 as prophetic of her beloved Lord&rsquo;s concealed
                      beauty. In her theology of the <em>little way</em>, the Holy Face represents
                      the hidden, despised, rejected Christ with whom the &ldquo;little souls&rdquo;
                      especially identify. Feast: October 1.
                    </p>
                  </div>
                </div>
              </div>

              {/* Papal Approval */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Papal Approval and the Archconfraternity</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Pope Leo XIII formally approved the Archconfraternity of the Holy Face in 1885
                  and personally composed the <em>Act of Reparation to the Holy Face</em>
                  &mdash; a prayer of reparation for blasphemy, desecration, and the sins of nations
                  offered to the Face of the suffering Christ.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Since STURP&rsquo;s 1978 investigations, the face visible on the Shroud of Turin
                  has served as the primary devotional focus for Holy Face devotion among those
                  Catholics who closely associate the Shroud with Christ&rsquo;s burial cloth.
                  The image of the face extracted from Shroud photographs is widely reproduced in
                  prayer cards, chapels, and shrines dedicated to the Holy Face.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ==================== TAB 6: FURTHER READING ==================== */}
        {activeTab === 'reading' && (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FEF3C7' }}>
                  <BookOpen className="w-6 h-6" style={{ color: '#92400E' }} />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Sources &amp; Theological Reflection</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-8">
                Miraculous images function theologically not as proofs that compel belief but as
                <em> signs</em> offered within the economy of salvation. The Church has always
                distinguished between what is necessary for salvation (the deposit of faith, preserved
                in Scripture and Tradition) and what is offered as a gift to strengthen and enrich
                the faithful&rsquo;s devotion. Sacred images, when accompanied by credible phenomena
                and fruitful piety, invite the believer deeper into the mystery of the Incarnation
                &mdash; God who became visible, who assumed a human face, who suffered in a body
                that left physical traces. The honor given to them reaches, always, the Person they
                represent.
              </p>

              <h3 className="text-xl font-bold text-gray-800 mb-6">Primary &amp; Scholarly Sources</h3>

              <div className="space-y-4">

                {/* Magisterium */}
                <div className="border border-amber-100 rounded-lg overflow-hidden">
                  <div className="px-5 py-3 font-bold text-sm uppercase tracking-wide" style={{ backgroundColor: '#FEF3C7', color: '#92400E' }}>
                    Magisterium
                  </div>
                  <div className="divide-y divide-gray-100">
                    <div className="px-5 py-4">
                      <p className="text-gray-800 font-semibold text-sm mb-1">Catechism of the Catholic Church</p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        1159&ndash;1162 (theology of sacred images and the icon); 2130&ndash;2132 (idolatry vs. veneration).
                      </p>
                    </div>
                    <div className="px-5 py-4">
                      <p className="text-gray-800 font-semibold text-sm mb-1">Second Council of Nicaea (787 AD)</p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Definition on the Veneration of Images (DS 600&ndash;601). The foundational conciliar text establishing the theology of sacred images in East and West.
                      </p>
                    </div>
                    <div className="px-5 py-4">
                      <p className="text-gray-800 font-semibold text-sm mb-1">Council of Trent, Session XXV (1563)</p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Decree on Sacred Images. The Counter-Reformation reaffirmation of the Nicene tradition against Protestant iconoclasm.
                      </p>
                    </div>
                    <div className="px-5 py-4">
                      <p className="text-gray-800 font-semibold text-sm mb-1">Vatican II, Sacrosanctum Concilium 125</p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        On the place and governance of sacred images in the reformed liturgy.
                      </p>
                    </div>
                    <div className="px-5 py-4">
                      <p className="text-gray-800 font-semibold text-sm mb-1">St. Basil the Great</p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        <em>De Spiritu Sancto</em>, 18. The foundational patristic source for the principle &ldquo;honor paid to an image passes to its prototype.&rdquo;
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tilma of Guadalupe */}
                <div className="border border-amber-100 rounded-lg overflow-hidden">
                  <div className="px-5 py-3 font-bold text-sm uppercase tracking-wide" style={{ backgroundColor: '#FEF3C7', color: '#92400E' }}>
                    Tilma of Guadalupe
                  </div>
                  <div className="divide-y divide-gray-100">
                    <div className="px-5 py-4">
                      <p className="text-gray-800 font-semibold text-sm mb-1">Callahan, Philip</p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        <em>The Tilma Under Infra-Red Radiation.</em> CARA Studies on Popular Devotion, 1981. The primary scientific report on infrared analysis.
                      </p>
                    </div>
                    <div className="px-5 py-4">
                      <p className="text-gray-800 font-semibold text-sm mb-1">Aste Tönnsmann, José</p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        <em>El Secreto de Sus Ojos.</em> Mexico City: Editorial Diana, 1998. The definitive study of the eyes of the Virgin and the reflected images discovered by digital magnification.
                      </p>
                    </div>
                    <div className="px-5 py-4">
                      <p className="text-gray-800 font-semibold text-sm mb-1">Graef Fernández, Carlos</p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        <em>Estudio cient&iacute;fico de la imagen guadalupana.</em> Mexico City, 1967. Ophthalmological examination; Purkinje&ndash;Sanson effect in the eyes of the image.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Shroud of Turin */}
                <div className="border border-amber-100 rounded-lg overflow-hidden">
                  <div className="px-5 py-3 font-bold text-sm uppercase tracking-wide" style={{ backgroundColor: '#FEF3C7', color: '#92400E' }}>
                    Shroud of Turin
                  </div>
                  <div className="divide-y divide-gray-100">
                    <div className="px-5 py-4">
                      <p className="text-gray-800 font-semibold text-sm mb-1">Wilson, Ian</p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        <em>The Shroud of Turin.</em> New York: Doubleday, 1978. The standard popular-scholarly account of the Shroud&rsquo;s history and investigation, updated in subsequent editions.
                      </p>
                    </div>
                    <div className="px-5 py-4">
                      <p className="text-gray-800 font-semibold text-sm mb-1">Faccini, Bruno, and Schwortz, Barrie</p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        &ldquo;A Summary of STURP&rsquo;s Conclusions.&rdquo; STURP Final Report, 1981. The official summary of the 40-scientist investigation. Available at www.shroud.com.
                      </p>
                    </div>
                    <div className="px-5 py-4">
                      <p className="text-gray-800 font-semibold text-sm mb-1">Heller, John H., and Adler, Alan D.</p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        &ldquo;A Chemical Investigation of the Shroud of Turin.&rdquo; <em>Canadian Society of Forensic Science Journal</em> 14:3 (1981). The detailed biochemical analysis establishing no pigment in the image area.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Holy Face of Manoppello */}
                <div className="border border-amber-100 rounded-lg overflow-hidden">
                  <div className="px-5 py-3 font-bold text-sm uppercase tracking-wide" style={{ backgroundColor: '#FEF3C7', color: '#92400E' }}>
                    Holy Face of Manoppello
                  </div>
                  <div className="divide-y divide-gray-100">
                    <div className="px-5 py-4">
                      <p className="text-gray-800 font-semibold text-sm mb-1">Schlömer, Sr. Blandina Paschalis</p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        <em>The Face of God: The Rediscovery of the True Face of Jesus in the Veil of Manoppello.</em> Gracewing, 2005. Scholarly analysis by the Trappist nun who superimposed the Manoppello face on the Shroud of Turin.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Holy Face Devotion */}
                <div className="border border-amber-100 rounded-lg overflow-hidden">
                  <div className="px-5 py-3 font-bold text-sm uppercase tracking-wide" style={{ backgroundColor: '#FEF3C7', color: '#92400E' }}>
                    Holy Face Devotion
                  </div>
                  <div className="divide-y divide-gray-100">
                    <div className="px-5 py-4">
                      <p className="text-gray-800 font-semibold text-sm mb-1">Sr. Marie of St. Peter, OCD</p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Her locutions and the establishment of Holy Face devotion are documented in: Dupont, Léon.
                        <em> The Holy Man of Tours</em> (biography). Trans. from the French. TAN Books, 1982.
                      </p>
                    </div>
                    <div className="px-5 py-4">
                      <p className="text-gray-800 font-semibold text-sm mb-1">St. Thérèse of Lisieux</p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        <em>Story of a Soul</em> (<em>L&rsquo;Histoire d&rsquo;une &Acirc;me</em>). Third edition, trans. John Clarke OCD. ICS Publications, 1996.
                        References to the Holy Face throughout, especially in manuscript B.
                      </p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Closing Note */}
              <div className="mt-8 bg-amber-50 p-6 rounded-lg border" style={{ borderColor: '#FDE68A' }}>
                <h3 className="font-bold text-gray-800 mb-3" style={{ color: '#78350F' }}>A Note on Discernment</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  The study of miraculous images belongs to the category of <em>private
                  revelation</em> and <em>pious phenomena</em> &mdash; not public revelation. The
                  Church does not require assent to any particular miraculous image as a matter of
                  faith. What the Church does require is an openness to God&rsquo;s action in the world,
                  a charitable assessment of evidence, and the recognition that the Incarnation
                  itself established the principle: matter can bear the presence of God. The Word
                  became flesh. The body of Christ lay in a tomb. It is not surprising that traces
                  of the sacred persist in material things &mdash; and it is not unworthy of faith
                  to investigate them honestly.
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}
