'use client'

import { useState } from 'react'
import {
  BookOpen,
  Heart,
  Star,
  Sun,
  Clock,
  ScrollText,
  Lightbulb,
  Cross,
  Users,
  ArrowRight,
} from 'lucide-react'

type TabId =
  | 'st-faustina'
  | 'the-image'
  | 'the-chaplet'
  | 'divine-mercy-sunday'
  | 'diary-passages'
  | 'theology-of-mercy'

const tabs: { id: TabId; label: string }[] = [
  { id: 'st-faustina', label: 'St. Faustina' },
  { id: 'the-image', label: 'The Divine Mercy Image' },
  { id: 'the-chaplet', label: 'The Chaplet' },
  { id: 'divine-mercy-sunday', label: 'Divine Mercy Sunday' },
  { id: 'diary-passages', label: 'Key Diary Passages' },
  { id: 'theology-of-mercy', label: 'Theology of Mercy' },
]

export default function DivineMercyPage() {
  const [activeTab, setActiveTab] = useState<TabId>('st-faustina')

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Divine Mercy
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The revelations given to St. Faustina Kowalska, the Divine Mercy image, chaplet,
            and feast &mdash; and the Church&rsquo;s theology of God&rsquo;s infinite mercy.
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
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tab Content */}

        {/* ==================== TAB 1: ST. FAUSTINA ==================== */}
        {activeTab === 'st-faustina' && (
          <div className="space-y-8">

            {/* Card 1: Life and Call */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Life and Early Call</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Helena Kowalska was born on August 25, 1905, in the village of G&#322;ogowiec, in
                what was then Russian-occupied Poland. She was the third of ten children born to
                Marianna and Stanis&#322;aw Kowalski, a poor peasant family of deep faith. From
                childhood, Helena felt a persistent interior call to religious life, a longing she
                could not silence even as the family&rsquo;s poverty made entrance into a convent
                seem impossible.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                After several years of working as a domestic servant to save money for a required
                dowry, Helena was accepted by the Congregation of the Sisters of Our Lady of Mercy
                in Warsaw in 1925. She was twenty years old. Upon entering, she received the
                religious name <strong>Sister Maria Faustina of the Blessed Sacrament</strong>.
                The congregation&rsquo;s apostolate was the rehabilitation of troubled women and girls
                &mdash; a fitting setting for someone who would become the messenger of God&rsquo;s
                mercy to the world.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">
                  Key Facts
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold text-amber-800 mb-1">Birth</p>
                    <p className="text-amber-700 text-sm">August 25, 1905, G&#322;ogowiec, Poland (under Russian partition)</p>
                  </div>
                  <div>
                    <p className="font-semibold text-amber-800 mb-1">Death</p>
                    <p className="text-amber-700 text-sm">October 5, 1938, Krak&oacute;w, Poland &mdash; age 33, of tuberculosis</p>
                  </div>
                  <div>
                    <p className="font-semibold text-amber-800 mb-1">Religious Congregation</p>
                    <p className="text-amber-700 text-sm">Sisters of Our Lady of Mercy, Warsaw (entered 1925)</p>
                  </div>
                  <div>
                    <p className="font-semibold text-amber-800 mb-1">Canonized</p>
                    <p className="text-amber-700 text-sm">April 30, 2000, by Pope John Paul II in Rome</p>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">
                Faustina lived an outwardly unremarkable religious life &mdash; obedient, humble,
                assigned to kitchen and garden work in the congregation&rsquo;s houses in Warsaw,
                Vilnius, and Krak&oacute;w. Her interior life, however, was extraordinary: a life
                of mystical visions, locutions, and an intense consciousness of the suffering of
                Christ and the desperate need of sinners for mercy.
              </p>
            </div>

            {/* Card 2: The First Vision and the Mission */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The First Vision: Płock, 1931</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                On the evening of February 22, 1931, in P&#322;ock, Poland, Faustina received the
                vision that would define her entire mission. Christ appeared to her clothed in a
                white garment, with two rays of light streaming from his heart &mdash; one red,
                one white (pale). He spoke directly to her:
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <p className="text-blue-800 italic mb-2">
                  &ldquo;Paint an image according to the pattern you see, with the signature: <em>Jesus,
                  I trust in You.</em> I desire that this image be venerated, first in your chapel,
                  and then throughout the world. I promise that the soul that will venerate this
                  image will not perish.&rdquo;
                </p>
                <p className="text-blue-700 text-sm">&mdash; <em>Diary</em> &sect;47&ndash;48</p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                This vision established Faustina&rsquo;s central mission: to be the instrument
                through which God would reveal His mercy to the world in a new and urgent way.
                The requests were specific and concrete: an image to be painted, a feast to be
                established, a chaplet to be prayed, and a message to be spread. Faustina began
                recording these visions and interior locutions in a spiritual diary at the direction
                of her confessor.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Faustina continued to receive visions and locutions throughout the remainder of her
                short life. She recorded them in six notebooks totaling approximately 600 pages,
                known collectively as the <em>Diary of St. Faustina</em> or <em>Divine Mercy in
                My Soul</em>. The <em>Diary</em> records not only the visions but Faustina&rsquo;s
                prayers, interior struggles, and her deep sense of unworthiness alongside an
                unshakeable trust in God&rsquo;s mercy.
              </p>
            </div>

            {/* Card 3: Fr. Sopocko and the Temporary Suppression */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-purple-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Fr. Michał Sopoćko and the Path to Recognition</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                In Vilnius in 1933, Faustina was assigned Fr. Micha&#322; Sopo&#263;ko as her spiritual
                director. He was initially skeptical &mdash; a trained theologian and professor
                at the Stefan Batory University, not easily moved by claims of private revelation.
                After careful examination of Faustina&rsquo;s visions and spiritual state, he came
                to believe her experiences were genuine and began to support her mission actively.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                At Fr. Sopo&#263;ko&rsquo;s initiative, the first painting of the Divine Mercy image was
                commissioned from artist Eugeniusz Kazimirowski in 1934 in Vilnius. This painting,
                executed under Faustina&rsquo;s guidance and with her corrections, is considered the
                closest to her description of the original vision. Fr. Sopo&#263;ko also published
                the first theological articles on the Divine Mercy devotion and worked tirelessly
                to obtain ecclesiastical approval.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">
                  The 1959 Suppression and Its Reversal
                </h3>
                <p className="text-amber-800 mb-3">
                  In 1959, the Holy Office (now the Congregation for the Doctrine of the Faith)
                  issued a notification cautioning against the widespread dissemination of Faustina&rsquo;s
                  writings and the associated devotional forms. The notification did not condemn the
                  devotion outright but expressed concern about the theological formulations in
                  translations of the <em>Diary</em> that had been circulating.
                </p>
                <p className="text-amber-800">
                  This suppression was reversed in 1978 by Pope Paul VI, following a thorough
                  theological investigation led in large part by Cardinal Karol Wojty&#322;a, Archbishop
                  of Krak&oacute;w. The investigation concluded that the concerns had been based on
                  faulty translations and that the devotion itself was theologically sound. Less than
                  a year later, Wojty&#322;a became Pope John Paul II &mdash; and became the most
                  powerful advocate Divine Mercy had ever known.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">
                  Beatification and Canonization
                </h3>
                <p className="text-blue-800 mb-3">
                  Pope John Paul II beatified Sister Faustina on April 18, 1993 &mdash; the Second
                  Sunday of Easter, the very Sunday Christ had asked to be the feast of Divine Mercy.
                  Seven years later, on April 30, 2000, JPII canonized her in St. Peter&rsquo;s Square,
                  simultaneously declaring Divine Mercy Sunday an observance of the universal Latin
                  Church. At the canonization, he called her the <em>&ldquo;Apostle of Divine Mercy&rdquo;</em>
                  and said: &ldquo;By this act of canonization I intend today to pass this message on to
                  the third millennium.&rdquo;
                </p>
                <p className="text-blue-700 text-sm">
                  &mdash; JPII, Homily at the Canonization of St. Faustina Kowalska (April 30, 2000)
                </p>
              </div>
            </div>

          </div>
        )}

        {/* ==================== TAB 2: THE IMAGE ==================== */}
        {activeTab === 'the-image' && (
          <div className="space-y-8">

            {/* Card 1: The Vision */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Sun className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Vision: What Faustina Saw</h2>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <p className="text-blue-800 italic mb-2">
                  &ldquo;I saw the Lord Jesus clothed in a white garment. One hand raised in the gesture
                  of blessing, the other touching the garment at the breast. From beneath the garment,
                  slightly drawn aside at the breast, there were emanating two large rays, one red,
                  the other pale.&rdquo;
                </p>
                <p className="text-blue-700 text-sm">&mdash; <em>Diary</em> &sect;47</p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The image that Christ requested is one of the most widely recognized devotional
                images in modern Catholic history. Its essential elements are fixed by the vision
                itself and by Christ&rsquo;s own explanation: a white-robed Christ, one hand raised
                in blessing, two rays &mdash; one red, one pale &mdash; emanating from his heart,
                and the inscription <em>Jezu, ufam Tobie</em> (&ldquo;Jesus, I trust in You&rdquo;).
              </p>

              <p className="text-gray-700 leading-relaxed">
                The inscription is not optional. Christ specified it in the original vision
                (<em>Diary</em> &sect;47). The image is not complete &mdash; and the associated
                promise does not apply &mdash; without the words of trust. This is theologically
                significant: the image is not a talisman or a lucky charm; it is an icon of a
                relationship. The promise is tied to trust (<em>ufam Tobie</em>), not to possession
                of a picture.
              </p>
            </div>

            {/* Card 2: The Meaning of the Rays */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-red-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Meaning of the Two Rays</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Faustina asked Christ directly what the two rays meant. His answer, recorded in
                the <em>Diary</em>, is one of the most theologically dense passages in the
                entire text:
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <p className="text-blue-800 italic mb-2">
                  &ldquo;The two rays denote Blood and Water. The pale ray stands for the Water which
                  makes souls righteous. The red ray stands for the Blood which is the life of
                  souls... These two rays issued forth from the very depths of My tender mercy
                  when My agonizing Heart was opened by a lance on the Cross.&rdquo;
                </p>
                <p className="text-blue-700 text-sm">&mdash; <em>Diary</em> &sect;299</p>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">
                  Blood and Water: Sacramental Theology
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-amber-800">The Red Ray &mdash; Blood</p>
                    <p className="text-amber-700 text-sm">
                      The Blood of Christ is the life of souls: it is the Eucharist. The red ray
                      points to the Most Holy Eucharist and to the Redemption accomplished on the
                      Cross. John 19:34 records that blood and water flowed from Christ&rsquo;s pierced
                      side. The Fathers (especially Augustine) read this as the birth of the Church
                      and the sacraments from Christ&rsquo;s side, as Eve was formed from Adam&rsquo;s side.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-amber-800">The Pale Ray &mdash; Water</p>
                    <p className="text-amber-700 text-sm">
                      The Water that makes souls righteous is Baptism &mdash; and by extension,
                      Confession, through which baptismal grace is restored. The pale ray signifies
                      the cleansing, sanctifying action of grace in the soul. Together, Blood and
                      Water encapsulate the entire sacramental economy of salvation.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">
                This identification connects the Divine Mercy image directly to John 19:34 and
                to the ancient patristic tradition of reading the pierced side of Christ as the
                source of Baptism (water) and Eucharist (blood) &mdash; the two foundational
                sacraments of Christian life. The image is thus not a novelty but a visual
                summary of the Church&rsquo;s oldest sacramental theology.
              </p>
            </div>

            {/* Card 3: Approved Images */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <ScrollText className="w-6 h-6 text-green-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Official Images and Their Differences</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Two paintings have the most widespread devotional use, each with distinct
                characteristics:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-amber-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-amber-900 mb-2">The Vilnius Painting (1934)</h3>
                  <p className="text-amber-700 text-sm mb-2">
                    Painted by Eugeniusz Kazimirowski under Faustina&rsquo;s direct guidance and with
                    her corrections. Considered the closest to Faustina&rsquo;s actual vision; the face
                    of Christ is more sorrowful and contemplative. Now venerated in the Church of
                    the Holy Trinity, Vilnius, Lithuania.
                  </p>
                  <p className="text-amber-600 text-xs">Generally regarded as the most historically authentic rendition.</p>
                </div>
                <div className="bg-blue-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-2">The Ł&oacute;d&oacute; Image (Adolf Hy&#322;a, 1943)</h3>
                  <p className="text-blue-700 text-sm mb-2">
                    The most widely distributed version worldwide. Painted by Adolf Hy&#322;a, it
                    depicts Christ with a slightly different posture and a more serene expression.
                    This is the version most commonly seen in Catholic homes, churches, and
                    devotional materials globally.
                  </p>
                  <p className="text-blue-600 text-xs">The de facto &ldquo;standard&rdquo; image in popular Catholic devotion.</p>
                </div>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-purple-900 mb-3">
                  What Is and Is Not Essential
                </h3>
                <p className="text-purple-800 mb-3">
                  Variations in artistic style are acceptable. What is essential is: (1) Christ
                  in a white garment; (2) the two rays emanating from the region of his heart
                  &mdash; one red, one pale; (3) the inscription &ldquo;Jesus, I trust in You&rdquo; in any
                  language. Christ himself said of the image (<em>Diary</em> &sect;570):
                </p>
                <p className="text-purple-800 italic mb-2">
                  &ldquo;I am offering people a vessel with which they are to keep coming for graces
                  to the fountain of mercy. That vessel is this image with the signature:
                  &lsquo;Jesus, I trust in You.&rsquo;&rdquo;
                </p>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">
                  A Word of Caution
                </h3>
                <p className="text-amber-800">
                  This image is not magic. Christ&rsquo;s promise is tied to trust (<em>ufam Tobie</em>).
                  The devotion is an invitation to deeper sacramental participation &mdash; especially
                  Confession and the Eucharist &mdash; not a talisman to be acquired for passive
                  protection. As with all Marian and saintly images, the image points beyond itself
                  to the living Person of Christ and to the Church&rsquo;s sacramental life.
                </p>
              </div>
            </div>

          </div>
        )}

        {/* ==================== TAB 3: THE CHAPLET ==================== */}
        {activeTab === 'the-chaplet' && (
          <div className="space-y-8">

            {/* Card 1: Origin */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Cross className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Origin of the Chaplet</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The Chaplet of Divine Mercy was given to Faustina in a vision recorded in her
                <em> Diary</em> entries 474&ndash;476, in September 1935. She was praying for a
                soul in agony, and then had a vision of an angel about to execute divine punishment
                upon the earth. She began praying interiorly and found that the chaplet&rsquo;s words
                arose in her, and the angel was unable to carry out the punishment. Christ later
                confirmed the chaplet to her, instructing her in its recitation and its purpose:
                to placate divine justice and draw souls into the ocean of His mercy.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <p className="text-blue-800 italic mb-2">
                  &ldquo;Encourage souls to say the chaplet which I have given you. Whoever will recite
                  it will receive great mercy at the hour of death. Priests will recommend it to
                  sinners as their last hope of salvation. Even if there were a sinner most
                  hardened, if he were to recite this chaplet only once, he would receive grace
                  from My infinite mercy.&rdquo;
                </p>
                <p className="text-blue-700 text-sm">&mdash; <em>Diary</em> &sect;687</p>
              </div>

              <p className="text-gray-700 leading-relaxed">
                The chaplet is prayed on ordinary rosary beads and can be completed in approximately
                ten to fifteen minutes. Unlike the Rosary, it does not require meditation on
                mysteries &mdash; it is a single sustained act of offering Christ&rsquo;s suffering to
                the Father, pleading His mercy for the world. Its theology is profoundly
                Christocentric and priestly: the one praying joins in Christ&rsquo;s own self-offering.
              </p>
            </div>

            {/* Card 2: How to Pray */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">How to Pray the Chaplet</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The chaplet is prayed on a standard five-decade rosary. The following is the
                complete form as given in the <em>Diary</em> and approved by the Church:
              </p>

              <div className="space-y-4">

                <div className="bg-amber-50 p-5 rounded-lg">
                  <p className="font-semibold text-amber-900 mb-2">Opening (Optional but Traditional)</p>
                  <p className="text-amber-800 text-sm italic mb-3">
                    Begin with an Our Father, a Hail Mary, and the Apostles&rsquo; Creed. Some also
                    pray the following opening prayer (said three times):
                  </p>
                  <p className="text-amber-800 text-sm italic">
                    &ldquo;You expired, Jesus, but the source of life gushed forth for souls, and the
                    ocean of mercy opened up for the whole world. O Fount of Life, unfathomable
                    Divine Mercy, envelop the whole world and empty Yourself out upon us.&rdquo;
                  </p>
                </div>

                <div className="bg-blue-50 p-5 rounded-lg">
                  <p className="font-semibold text-blue-900 mb-2">On Each Large (Our Father) Bead</p>
                  <p className="text-blue-800 text-sm italic">
                    &ldquo;Eternal Father, I offer You the Body and Blood, Soul and Divinity of Your
                    Dearly Beloved Son, Our Lord, Jesus Christ, in atonement for our sins and
                    those of the whole world.&rdquo;
                  </p>
                </div>

                <div className="bg-purple-50 p-5 rounded-lg">
                  <p className="font-semibold text-purple-900 mb-2">On Each Small (Hail Mary) Bead &mdash; said 10 times per decade</p>
                  <p className="text-purple-800 text-sm italic">
                    &ldquo;For the sake of His sorrowful Passion, have mercy on us and on the whole world.&rdquo;
                  </p>
                </div>

                <div className="bg-green-50 p-5 rounded-lg">
                  <p className="font-semibold text-green-900 mb-2">Concluding Doxology &mdash; said three times</p>
                  <p className="text-green-800 text-sm italic">
                    &ldquo;Holy God, Holy Mighty One, Holy Immortal One, have mercy on us and on the whole world.&rdquo;
                  </p>
                </div>

                <div className="bg-gray-50 p-5 rounded-lg">
                  <p className="font-semibold text-gray-900 mb-2">Optional Closing Prayer</p>
                  <p className="text-gray-700 text-sm italic">
                    &ldquo;Eternal God, in whom mercy is endless and the treasury of compassion
                    inexhaustible, look kindly upon us and increase Your mercy in us, that in
                    difficult moments we might not despair nor become despondent, but with great
                    confidence submit ourselves to Your holy will, which is Love and Mercy itself.&rdquo;
                  </p>
                </div>

              </div>
            </div>

            {/* Card 3: The Hour of Mercy and Promises */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-red-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Hour of Mercy: 3:00 p.m.</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Christ asked Faustina to observe the Hour of Mercy at three o&rsquo;clock each
                afternoon &mdash; the hour of His death on the Cross. The <em>Diary</em> records
                His words:
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <p className="text-blue-800 italic mb-2">
                  &ldquo;At three o&rsquo;clock, implore My mercy, especially for sinners; and, if only
                  for a brief moment, immerse yourself in My Passion, particularly in My
                  abandonment at the moment of agony. This is the hour of great mercy for the
                  whole world. I will allow you to enter into My mortal sorrow. In this hour,
                  I will refuse nothing to the soul that makes a request of Me in virtue of My
                  Passion.&rdquo;
                </p>
                <p className="text-blue-700 text-sm">&mdash; <em>Diary</em> &sect;1320</p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                At this hour, Christ requested that those who are able pray the Chaplet, meditate
                briefly on His Passion, or simply make an act of trust. Even a very brief prayer
                offered at three o&rsquo;clock with awareness of its significance is pleasing to Him.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">
                  Promises Associated with the Chaplet
                </h3>
                <ul className="text-amber-800 text-sm space-y-3">
                  <li>
                    <strong>At the hour of death</strong> (<em>Diary</em> &sect;687): &ldquo;Whoever will
                    recite it will receive great mercy at the hour of death.&rdquo;
                  </li>
                  <li>
                    <strong>Near the dying</strong> (<em>Diary</em> &sect;811): &ldquo;When they say this
                    chaplet in the presence of the dying, I will stand between My Father and the
                    dying person, not as the just Judge but as the merciful Savior.&rdquo;
                  </li>
                  <li>
                    <strong>For hardened sinners</strong> (<em>Diary</em> &sect;687): &ldquo;Even if there
                    were a sinner most hardened, if he were to recite this chaplet only once, he
                    would receive grace from My infinite mercy.&rdquo;
                  </li>
                  <li>
                    <strong>For the world</strong>: The chaplet is intercessory in structure &mdash;
                    prayed not merely for oneself but &ldquo;for us and on the whole world.&rdquo; This
                    universal scope sets it apart from many devotional prayers.
                  </li>
                </ul>
              </div>
            </div>

          </div>
        )}

        {/* ==================== TAB 4: DIVINE MERCY SUNDAY ==================== */}
        {activeTab === 'divine-mercy-sunday' && (
          <div className="space-y-8">

            {/* Card 1: The Request */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Sun className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Request for a Feast</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Among Christ&rsquo;s requests to Faustina, one of the most specific was the
                establishment of a feast of Divine Mercy on the Sunday after Easter. The request
                appears repeatedly in the <em>Diary</em>, with increasing urgency:
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <p className="text-blue-800 italic mb-2">
                  &ldquo;I desire that the Feast of Mercy be a refuge and shelter for all souls,
                  and especially for poor sinners. On that day the very depths of My tender
                  mercy are open. I pour out a whole ocean of graces upon those souls who
                  approach the Fount of My Mercy. The soul that will go to Confession and
                  receive Holy Communion shall obtain complete forgiveness of sins and
                  punishment.&rdquo;
                </p>
                <p className="text-blue-700 text-sm">&mdash; <em>Diary</em> &sect;699</p>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">
                  Conditions for the Grace of the Feast
                </h3>
                <p className="text-amber-800 mb-3">
                  Christ specified three conditions for receiving &ldquo;complete forgiveness of sins
                  and punishment&rdquo; on Divine Mercy Sunday:
                </p>
                <ol className="text-amber-800 text-sm space-y-2 list-decimal list-inside">
                  <li><strong>Sacramental Confession</strong> &mdash; within eight days before or after the feast (not necessarily on the day itself)</li>
                  <li><strong>Holy Communion</strong> &mdash; received on Divine Mercy Sunday with trust and contrition</li>
                  <li><strong>Veneration of the image with trust</strong> &mdash; approaching with a spirit of complete trust in God&rsquo;s mercy, not in one&rsquo;s own merits</li>
                </ol>
                <p className="text-amber-700 text-sm mt-3">
                  Note: The grace promised is not automatic &mdash; it requires genuine trust,
                  contrition, and the sacramental dispositions the Church has always required.
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed">
                Christ compared this grace to the grace of Baptism itself &mdash; a complete
                wiping clean of sin and its temporal punishment. Such a promise, if genuine, is
                of enormous pastoral significance: it makes Divine Mercy Sunday the greatest
                feast for sinners in the entire liturgical year, second in significance only to
                Easter Sunday itself.
              </p>
            </div>

            {/* Card 2: JPII Establishes the Feast */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-purple-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">John Paul II Establishes the Feast</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                On April 30, 2000, at the canonization of St. Faustina in St. Peter&rsquo;s Square,
                Pope John Paul II declared that Divine Mercy Sunday &mdash; the Second Sunday of
                Easter &mdash; was to be observed throughout the universal Latin Church. His words
                were unambiguous:
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <p className="text-blue-800 italic mb-2">
                  &ldquo;From now on throughout the Church this Sunday will be called &lsquo;Divine Mercy
                  Sunday.&rsquo;&rdquo;
                </p>
                <p className="text-blue-700 text-sm mb-3">&mdash; JPII, Homily at the Canonization of St. Faustina (April 30, 2000)</p>
                <p className="text-blue-800 italic mb-2">
                  &ldquo;Divine Mercy! This is the Easter gift that the Church receives from the risen
                  Christ and offers to humanity at the dawn of the third millennium.&rdquo;
                </p>
                <p className="text-blue-700 text-sm">&mdash; JPII, ibid.</p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The choice of the Second Sunday of Easter was not arbitrary. It was the precise
                date Christ had requested through Faustina, and it was already the Sunday on
                which JPII had beatified her in 1993. The timing also carries deep theological
                resonance: Divine Mercy Sunday falls at the close of Easter Week &mdash; the
                greatest week in the Christian calendar. Mercy is the fruit of the Paschal Mystery.
              </p>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-green-900 mb-3">
                  The Feast in the Liturgical Calendar
                </h3>
                <p className="text-green-800 mb-3">
                  Since 2000, the Second Sunday of Easter is officially titled <em>Second Sunday
                  of Easter (or Divine Mercy Sunday)</em> in the Latin Church&rsquo;s liturgical books.
                  Special Masses are celebrated in parishes worldwide. Major observances take place
                  at the National Shrine of Divine Mercy in Stockbridge, Massachusetts (USA), at
                  the Divine Mercy Sanctuary in Krak&oacute;w-&#321;agiewniki (Poland), and in churches
                  throughout the world.
                </p>
                <p className="text-green-700 text-sm">
                  JPII emphasized at the canonization that the feast was not a Polish or Eastern
                  European devotion but a gift for the whole Church in every nation.
                </p>
              </div>
            </div>

            {/* Card 3: The Octave of Easter Connection */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Cross className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Divine Mercy Sunday and the Paschal Mystery</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Divine Mercy Sunday comes at the close of Easter&rsquo;s octave &mdash; the eight
                days in which the Church celebrates Easter as a continuous feast. This liturgical
                placement is theologically deliberate. Mercy is not an alternative to the Paschal
                Mystery but its direct fruit. The Cross is the supreme act of divine mercy; the
                Resurrection is its vindication. To celebrate mercy at the close of Easter Week
                is to proclaim that the same love that drove the Incarnation and the Cross is
                poured out on sinners who come with trust.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                John Paul II explicitly made this connection in his pontificate&rsquo;s central
                theological project. His first encyclical, <em>Redemptor Hominis</em> (1979),
                centered on the redemption as an act of divine mercy. His second, <em>Dives in
                Misericordia</em> (1980), was devoted entirely to the mercy of God. These were
                not coincidental themes: JPII believed that the modern world, scarred by
                totalitarianism, war, and the breakdown of the family, needed above all else to
                hear of God&rsquo;s mercy before it could hear anything else.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">
                  Evangelization and the Feast
                </h3>
                <p className="text-blue-800 mb-3">
                  Divine Mercy Sunday has become one of the most effective occasions in the
                  Catholic calendar for drawing lapsed Catholics back to Confession. The specific
                  promise of &ldquo;complete forgiveness&rdquo; &mdash; comparable to the grace of Baptism
                  &mdash; provides a concrete, datable occasion for those who have been away from
                  the sacraments for years or decades. Many parishes organize special confession
                  schedules in the week before Divine Mercy Sunday precisely for this purpose.
                </p>
              </div>
            </div>

          </div>
        )}

        {/* ==================== TAB 5: DIARY PASSAGES ==================== */}
        {activeTab === 'diary-passages' && (
          <div className="space-y-8">

            {/* Card 1: About the Diary */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <ScrollText className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Diary: <em>Divine Mercy in My Soul</em></h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The <em>Diary of St. Faustina</em>, formally titled <em>Divine Mercy in My Soul</em>,
                consists of six notebooks containing approximately 600 pages of visions, locutions,
                prayers, reflections, and interior struggles. Faustina wrote it at the direction
                of Fr. Sopo&#263;ko and her confessor, and completed her last entries weeks before her
                death in October 1938.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">
                  Publication and Approval
                </h3>
                <p className="text-amber-800 mb-3">
                  The <em>Diary</em> was published in its complete form by Marian Press (Stockbridge,
                  Massachusetts) and carries both a <em>nihil obstat</em> and an <em>imprimatur</em>
                  from the Archdiocese of Krak&oacute;w &mdash; the formal ecclesiastical declaration
                  that the work is free from doctrinal or moral error.
                </p>
                <p className="text-amber-700 text-sm">
                  <strong>How to read it:</strong> The <em>Diary</em> is spiritual reading, not Scripture
                  &mdash; it records the experiences and interior locutions of a mystic, interpreted
                  through her own perception and language. The Church&rsquo;s approval confirms it
                  is free from doctrinal error; it does not mean every detail is a literal transcript
                  of divine speech. Approach it with faith and discernment.
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed">
                The <em>Diary</em> is numbered by paragraph (entries), and these numbers are
                cited universally across editions. The ten key passages below represent the
                theological core of the whole work.
              </p>
            </div>

            {/* Card 2: Key Passages */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Ten Key Passages</h2>
              </div>

              <div className="space-y-6">

                <div className="border-l-4 border-amber-400 pl-5">
                  <p className="font-semibold text-gray-800 mb-1">Entry 47&ndash;48 &mdash; The Founding Vision (Płock, 1931)</p>
                  <p className="text-gray-700 text-sm mb-2">
                    The first vision of the image: Christ appears with two rays of light and commands
                    Faustina to have the image painted with the inscription &ldquo;Jesus, I trust in You.&rdquo;
                    He promises that the soul venerating this image will not perish. <em>This is the
                    foundation of the entire devotion.</em>
                  </p>
                  <p className="text-amber-700 text-xs">Theme: The image and the foundational promise</p>
                </div>

                <div className="border-l-4 border-blue-400 pl-5">
                  <p className="font-semibold text-gray-800 mb-1">Entry 187 &mdash; The Greater the Sinner</p>
                  <p className="text-gray-700 text-sm mb-2 italic">
                    &ldquo;The greater the sinner, the greater the right he has to My mercy.&rdquo;
                  </p>
                  <p className="text-gray-700 text-sm mb-2">
                    One of the most quoted passages in the entire <em>Diary</em>. The logic of
                    divine mercy inverts human calculation: those who are most broken, most guilty,
                    most aware of their sin are closest to the source of mercy, not furthest from it.
                  </p>
                  <p className="text-blue-700 text-xs">Theme: The infinite accessibility of divine mercy</p>
                </div>

                <div className="border-l-4 border-purple-400 pl-5">
                  <p className="font-semibold text-gray-800 mb-1">Entry 299 &mdash; The Meaning of the Rays</p>
                  <p className="text-gray-700 text-sm mb-2">
                    Christ explains that the two rays are Blood and Water: the red ray is the Blood
                    that is the life of souls (Eucharist); the pale ray is the Water that makes souls
                    righteous (Baptism and Confession). He connects the rays to the moment His Heart
                    was pierced by the lance on the Cross (John 19:34). Also contains Christ&rsquo;s
                    request for the feast.
                  </p>
                  <p className="text-purple-700 text-xs">Theme: Sacramental theology; the image and the feast</p>
                </div>

                <div className="border-l-4 border-green-400 pl-5">
                  <p className="font-semibold text-gray-800 mb-1">Entries 474&ndash;476 &mdash; Origin of the Chaplet (September 1935)</p>
                  <p className="text-gray-700 text-sm mb-2">
                    Faustina prays to stop divine punishment from falling upon sinners and receives
                    the words of the chaplet in a vision. The angel who was about to execute
                    punishment is unable to do so when the chaplet prayer arises from Faustina&rsquo;s
                    soul. Christ confirms the chaplet&rsquo;s origin and its intercessory power.
                  </p>
                  <p className="text-green-700 text-xs">Theme: Intercession; the chaplet as shield against punishment</p>
                </div>

                <div className="border-l-4 border-amber-400 pl-5">
                  <p className="font-semibold text-gray-800 mb-1">Entry 570 &mdash; The Image as a Vessel</p>
                  <p className="text-gray-700 text-sm mb-2 italic">
                    &ldquo;I am offering people a vessel with which they are to keep coming for graces
                    to the fountain of mercy. That vessel is this image with the signature:
                    &lsquo;Jesus, I trust in You.&rsquo;&rdquo;
                  </p>
                  <p className="text-gray-700 text-sm mb-2">
                    The image is not the object of the devotion but the <em>means</em> of accessing
                    the fountain of mercy. The metaphor is practical and non-magical: a vessel is
                    a tool for drawing water, not the source itself.
                  </p>
                  <p className="text-amber-700 text-xs">Theme: The instrumentality of the image</p>
                </div>

                <div className="border-l-4 border-red-400 pl-5">
                  <p className="font-semibold text-gray-800 mb-1">Entry 699 &mdash; The Ocean of Grace on the Feast</p>
                  <p className="text-gray-700 text-sm mb-2">
                    The specific promise for Divine Mercy Sunday: complete forgiveness of sins and
                    punishment for those who approach with the proper sacramental dispositions.
                    Christ describes the feast as &ldquo;a refuge and shelter for all souls, and especially
                    for poor sinners.&rdquo;
                  </p>
                  <p className="text-red-700 text-xs">Theme: Divine Mercy Sunday; the specific promise</p>
                </div>

                <div className="border-l-4 border-blue-400 pl-5">
                  <p className="font-semibold text-gray-800 mb-1">Entry 811 &mdash; Standing at the Hour of Death</p>
                  <p className="text-gray-700 text-sm mb-2 italic">
                    &ldquo;When they say this chaplet in the presence of the dying, I will stand between
                    My Father and the dying person, not as the just Judge but as the merciful Savior.&rdquo;
                  </p>
                  <p className="text-blue-700 text-xs">Theme: The chaplet at the hour of death; Christ as advocate</p>
                </div>

                <div className="border-l-4 border-purple-400 pl-5">
                  <p className="font-semibold text-gray-800 mb-1">Entry 1146 &mdash; Unfathomable Ocean of Mercy</p>
                  <p className="text-gray-700 text-sm mb-2">
                    One of Faustina&rsquo;s most lyrical passages on the inexhaustibility of divine mercy.
                    The ocean metaphor runs throughout the <em>Diary</em>: mercy is not a finite
                    reservoir but an infinite source that cannot be emptied no matter how many souls
                    draw from it.
                  </p>
                  <p className="text-purple-700 text-xs">Theme: The inexhaustibility of divine mercy</p>
                </div>

                <div className="border-l-4 border-green-400 pl-5">
                  <p className="font-semibold text-gray-800 mb-1">Entry 1320 &mdash; The Hour of Mercy</p>
                  <p className="text-gray-700 text-sm mb-2">
                    Christ&rsquo;s instruction on the 3 p.m. Hour of Mercy: &ldquo;At three o&rsquo;clock,
                    implore My mercy, especially for sinners; and, if only for a brief moment,
                    immerse yourself in My Passion... This is the hour of great mercy for the
                    whole world.&rdquo;
                  </p>
                  <p className="text-green-700 text-xs">Theme: The daily 3 p.m. observance</p>
                </div>

                <div className="border-l-4 border-amber-400 pl-5">
                  <p className="font-semibold text-gray-800 mb-1">Entry 1732 &mdash; The Final Entries (October 1938)</p>
                  <p className="text-gray-700 text-sm mb-2">
                    Faustina&rsquo;s last diary entries, written weeks before her death from tuberculosis
                    on October 5, 1938. &ldquo;Today I was brought into the presence of God&rdquo; &mdash;
                    her final entries are marked by an extraordinary peace and a complete surrender
                    to God&rsquo;s will. She died at the age of thirty-three.
                  </p>
                  <p className="text-amber-700 text-xs">Theme: Faustina&rsquo;s final surrender; the close of the Diary</p>
                </div>

              </div>
            </div>

          </div>
        )}

        {/* ==================== TAB 6: THEOLOGY OF MERCY ==================== */}
        {activeTab === 'theology-of-mercy' && (
          <div className="space-y-8">

            {/* Card 1: God Is Mercy */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">&ldquo;God Is Mercy&rdquo;</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Catholic theology does not say merely that God <em>shows</em> mercy. It says that
                mercy is God&rsquo;s most fundamental attribute in his relationship with fallen humanity
                &mdash; the lens through which every other divine attribute (justice, holiness,
                power) must be understood in the order of salvation. The Catechism is direct:
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <p className="text-blue-800 italic mb-2">
                  &ldquo;The Gospel is the revelation in Jesus Christ of God&rsquo;s mercy to sinners.&rdquo;
                </p>
                <p className="text-blue-700 text-sm mb-3">&mdash; CCC 1846</p>
                <p className="text-blue-800 italic mb-2">
                  &ldquo;God is the Father Almighty, whose fatherhood and power shed light on one
                  another: He shows his fatherly omnipotence by the way he takes care of our
                  needs; by the filial adoption that he gives us; and lastly by his infinite mercy,
                  for he displays his power at its height by freely forgiving sins.&rdquo;
                </p>
                <p className="text-blue-700 text-sm">&mdash; CCC 270</p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                This is not sentimentality. Catholic theology holds that God&rsquo;s mercy is not
                a softening of His justice but its fulfillment and surpassing. On the Cross, mercy
                and justice meet: the debt that justice demanded was paid, so that mercy could
                flow freely. As Psalm 85:10&ndash;11 puts it: &ldquo;Mercy and truth have met; righteousness
                and peace have kissed.&rdquo; The Cross is the exact point of their meeting.
              </p>

              <p className="text-gray-700 leading-relaxed">
                The biblical Hebrew word <em>hesed</em> (&ldquo;loving-kindness,&rdquo; &ldquo;steadfast love,&rdquo;
                &ldquo;covenant mercy&rdquo;) and the New Testament Greek <em>eleos</em> (&ldquo;mercy&rdquo;) are
                the vocabulary of a relationship: mercy in Scripture is always the mercy of a
                covenant-keeping God toward His people. Divine Mercy, in the tradition of Faustina
                and the Church, is this same <em>hesed</em> &mdash; not a generic benevolence but
                the specific, personal, inexhaustible love of the Father for each individual soul.
              </p>
            </div>

            {/* Card 2: Dives in Misericordia */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <ScrollText className="w-6 h-6 text-purple-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800"><em>Dives in Misericordia</em> &mdash; JPII (1980)</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                <em>Dives in Misericordia</em> (&ldquo;Rich in Mercy,&rdquo; November 30, 1980) was Pope
                John Paul II&rsquo;s second encyclical and the first papal encyclical ever devoted
                entirely to the mercy of God. It established mercy not merely as a devotional
                theme but as the theological center of the Christian understanding of God and
                of the Church&rsquo;s mission in the modern world.
              </p>

              <div className="bg-purple-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-purple-900 mb-3">
                  Three Key Themes of <em>Dives in Misericordia</em>
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-purple-800 mb-1">1. The Prodigal Son (Luke 15:11&ndash;32)</p>
                    <p className="text-purple-700 text-sm">
                      JPII reads the Parable of the Prodigal Son as the supreme expression of
                      mercy in Scripture: the father who runs to meet his son, who restores his
                      dignity before the son has finished his confession, who celebrates his
                      return with total lavishness. This is not the God of minimal obligation but
                      the God of superabundant gift.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-purple-800 mb-1">2. Mercy Is Not Sentimentality</p>
                    <p className="text-purple-700 text-sm">
                      Mercy does not ignore sin or pretend it did not happen. Mercy acknowledges
                      the full weight of injustice and then surpasses it with love. Justice is not
                      abolished by mercy; it is fulfilled at a higher level. JPII explicitly
                      addresses modern objections that mercy is a form of moral laxity.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-purple-800 mb-1">3. The Contemporary World&rsquo;s Need</p>
                    <p className="text-purple-700 text-sm">
                      Written against the backdrop of the Cold War, communist persecution, and the
                      moral disintegration of the West, JPII argued that a world that had experienced
                      the Holocaust, the Gulag, and the threat of nuclear annihilation needed mercy
                      more than anything else. Only mercy could break the cycle of violence and
                      counter-violence.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">
                  The Sacrament of Penance as the &ldquo;Tribunal of Mercy&rdquo;
                </h3>
                <p className="text-blue-800 mb-3">
                  In <em>Reconciliatio et Paenitentia</em> (1984), JPII called the confessional
                  the &ldquo;tribunal of mercy&rdquo; rather than a court of judgment. The CCC amplifies
                  this: &ldquo;The whole power of the sacrament of Penance consists in restoring us to
                  God&rsquo;s grace and joining us with him in an intimate friendship&rdquo; (CCC 1468).
                  The Sacrament of Penance is not a forensic procedure but a personal encounter
                  with the merciful Christ &mdash; the same Christ who said to Faustina:
                  &ldquo;The greater the sinner, the greater the right he has to My mercy.&rdquo;
                </p>
              </div>
            </div>

            {/* Card 3: Misericordiae Vultus and Francis */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-green-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800"><em>Misericordiae Vultus</em> &mdash; Pope Francis (2015)</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                On April 11, 2015, Pope Francis issued <em>Misericordiae Vultus</em> (&ldquo;The Face
                of Mercy&rdquo;), the Bull of Indiction for the Extraordinary Jubilee of Mercy
                (December 8, 2015 &ndash; November 20, 2016). The opening line has become one of
                the defining sentences of Francis&rsquo;s pontificate:
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <p className="text-blue-800 italic mb-2">
                  &ldquo;Jesus Christ is the face of the Father&rsquo;s mercy.&rdquo;
                </p>
                <p className="text-blue-700 text-sm mb-3">&mdash; <em>Misericordiae Vultus</em> &sect;1</p>
                <p className="text-blue-800 italic mb-2">
                  &ldquo;The Church&rsquo;s very credibility is seen in how she shows merciful and
                  compassionate love.&rdquo;
                </p>
                <p className="text-blue-700 text-sm">&mdash; <em>Misericordiae Vultus</em> &sect;10</p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Francis&rsquo;s theology of mercy builds directly on JPII&rsquo;s <em>Dives in
                Misericordia</em>, while adding a characteristic pastoral urgency: the Church
                must be recognizable as an institution of mercy before it can be heard as a
                voice of truth. The Year of Mercy (2015&ndash;2016) opened special &ldquo;Holy Doors&rdquo;
                of mercy in cathedrals and pilgrimage churches worldwide, offered special
                indulgences, and called confessors to extraordinary pastoral gentleness toward
                those returning after long absences.
              </p>

              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-green-900 mb-3">
                  Mercy and the New Evangelization
                </h3>
                <p className="text-green-800 mb-3">
                  Both JPII and Francis identify divine mercy as central to the new evangelization.
                  The diagnosis is that many people have left the Church not because they reject
                  God but because they encountered judgment before mercy, law before love, demand
                  before welcome. The pastoral strategy of leading with mercy is not doctrinal
                  compromise; it is the re-ordering of encounter with the sequence of the Gospel
                  itself, in which Jesus received sinners before he called them to repentance.
                </p>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">
                  Cross-Links: Related Pages
                </h3>
                <ul className="text-amber-800 text-sm space-y-2">
                  <li>
                    <ArrowRight className="inline w-4 h-4 mr-1" />
                    <a href="/prayer/way-of-the-cross" className="underline hover:text-amber-900">Way of the Cross</a>
                    &mdash; The Passion from which the rays of mercy flow (John 19:34)
                  </li>
                  <li>
                    <ArrowRight className="inline w-4 h-4 mr-1" />
                    <a href="/mysteries/public-revelation" className="underline hover:text-amber-900">Public Revelation</a>
                    &mdash; How private revelation (Faustina) relates to public revelation (Scripture and Tradition)
                  </li>
                  <li>
                    <ArrowRight className="inline w-4 h-4 mr-1" />
                    <a href="/prayer/overview" className="underline hover:text-amber-900">What Is Prayer?</a>
                    &mdash; The chaplet and the Hour of Mercy in the context of Christian prayer
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 4: Sources */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Sources &amp; Further Reading</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The following primary sources and scholarly works underlie this page.
                Readers who wish to go deeper will find these indispensable.
              </p>

              <div className="grid md:grid-cols-2 gap-6">

                <div className="bg-amber-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-amber-900 mb-3">Primary Sources &mdash; Faustina</h3>
                  <ul className="text-amber-800 text-sm space-y-2">
                    <li>St. Faustina Kowalska, <em>Divine Mercy in My Soul</em> (Diary; Marian Press, Stockbridge, MA) &mdash; with <em>nihil obstat</em> and <em>imprimatur</em></li>
                    <li>Key entries: &sect;&sect;47&ndash;48, 187, 299, 474&ndash;476, 570, 687, 699, 811, 1146, 1320, 1732</li>
                    <li>Fr. George Kosicki, C.S.B., <em>Trust His Mercy</em> (Marian Press) &mdash; pastoral guide to the Diary</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-3">Magisterial Documents</h3>
                  <ul className="text-blue-800 text-sm space-y-2">
                    <li><em>Catechism of the Catholic Church</em>, &sect;&sect;270, 1422&ndash;1498 (Sacrament of Penance)</li>
                    <li><em>Catechism of the Catholic Church</em>, &sect;&sect;1846&ndash;1848 (Mercy and sin)</li>
                    <li>Second Vatican Council, <em>Lumen Gentium</em> (1964)</li>
                    <li>Congregation for the Doctrine of the Faith, Notification on St. Faustina&rsquo;s writings, reversal (1978)</li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-purple-900 mb-3">Papal Documents</h3>
                  <ul className="text-purple-800 text-sm space-y-2">
                    <li>Pope John Paul II, <em>Dives in Misericordia</em> (November 30, 1980)</li>
                    <li>Pope John Paul II, <em>Reconciliatio et Paenitentia</em> (December 2, 1984)</li>
                    <li>Pope John Paul II, Homily at the Canonization of St. Faustina Kowalska (April 30, 2000)</li>
                    <li>Pope Francis, <em>Misericordiae Vultus</em> (April 11, 2015) &mdash; Bull of Indiction for the Jubilee of Mercy</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-3">Scholarly &amp; Devotional</h3>
                  <ul className="text-green-800 text-sm space-y-2">
                    <li>Fr. Seraphim Michalenko, M.I.C., <em>The Life of Faustina Kowalska</em> (Servant Books) &mdash; standard English-language biography</li>
                    <li>Fr. Ignacy R&oacute;&#380;ycki, theological evaluation of Faustina&rsquo;s writings submitted to the Holy See (1967, published posthumously)</li>
                    <li>Fr. Micha&#322; Sopo&#263;ko, <em>God Is Mercy</em> &mdash; theological work by Faustina&rsquo;s spiritual director</li>
                    <li>Marian Fathers of the Immaculate Conception (Marian Press), multiple study guides to <em>Divine Mercy</em> devotion</li>
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
