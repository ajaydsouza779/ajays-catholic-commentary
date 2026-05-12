'use client'

import { useState } from 'react'
import {
  BookOpen,
  Star,
  Heart,
  Cross,
  Sun,
  Shield,
  Sparkles,
  Circle,
  ArrowRight,
} from 'lucide-react'

type TabId =
  | 'angelus'
  | 'brown-scapular'
  | 'miraculous-medal'
  | 'fatima-devotions'
  | 'ancient-marian-prayers'
  | 'theology-of-devotion'

const tabs: { id: TabId; label: string }[] = [
  { id: 'angelus', label: 'The Angelus' },
  { id: 'brown-scapular', label: 'The Brown Scapular' },
  { id: 'miraculous-medal', label: 'The Miraculous Medal' },
  { id: 'fatima-devotions', label: 'Fátima Devotions' },
  { id: 'ancient-marian-prayers', label: 'Ancient Marian Prayers' },
  { id: 'theology-of-devotion', label: 'Theology of Marian Devotion' },
]

export default function MarianDevotionsPage() {
  const [activeTab, setActiveTab] = useState<TabId>('angelus')

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Marian Devotions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The Angelus, Brown Scapular, Miraculous Medal, F&aacute;tima devotions, and the theology
            behind authentic Catholic devotion to the Mother of God.
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

        {/* ==================== TAB 1: THE ANGELUS ==================== */}
        {activeTab === 'angelus' && (
          <div className="space-y-8">

            {/* Card 1: Name and Structure */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Sun className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Angelus: Name and Structure</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The Angelus takes its name from the opening words of the prayer in Latin: <em>Angelus
                Domini nuntiavit Mariae</em> &mdash; &ldquo;The Angel of the Lord announced to Mary.&rdquo;
                It is structured as three versicle-and-response pairs (<em>versiculus et responsorium</em>),
                each followed by a Hail Mary, and concludes with a closing prayer called the
                <em> collecta</em>. The entire prayer meditates on the Incarnation &mdash; the moment
                the eternal Son of God became man in Mary&rsquo;s womb.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                The three versicle pairs progress through the narrative of the Annunciation: the
                Angel&rsquo;s announcement, Mary&rsquo;s fiat (her &ldquo;let it be done&rdquo;), and the
                astounding result &mdash; the Word made flesh. Each pair is a theological proposition
                answered in assent, punctuated by the Hail Mary as an act of Marian veneration bound
                to the central mystery. The closing prayer draws out the practical consequence: because
                God became incarnate, we can be brought through His Passion and Cross to the glory of
                His Resurrection.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-4">The Prayers of the Angelus</h3>

                <div className="space-y-4">
                  <div>
                    <p className="text-amber-800 mb-1">
                      <strong>V.</strong> The Angel of the Lord declared unto Mary.
                    </p>
                    <p className="text-amber-800 mb-2">
                      <strong>R.</strong> And she conceived of the Holy Spirit.
                    </p>
                    <p className="text-amber-700 italic text-sm">Hail Mary&hellip;</p>
                  </div>

                  <div>
                    <p className="text-amber-800 mb-1">
                      <strong>V.</strong> Behold the handmaid of the Lord.
                    </p>
                    <p className="text-amber-800 mb-2">
                      <strong>R.</strong> Be it done unto me according to Thy word.
                    </p>
                    <p className="text-amber-700 italic text-sm">Hail Mary&hellip;</p>
                  </div>

                  <div>
                    <p className="text-amber-800 mb-1">
                      <strong>V.</strong> And the Word was made flesh.
                    </p>
                    <p className="text-amber-800 mb-2">
                      <strong>R.</strong> And dwelt among us.
                    </p>
                    <p className="text-amber-700 italic text-sm">Hail Mary&hellip;</p>
                  </div>

                  <div className="border-t border-amber-200 pt-4">
                    <p className="text-amber-800 mb-1">
                      <strong>V.</strong> Pray for us, O Holy Mother of God.
                    </p>
                    <p className="text-amber-800 mb-4">
                      <strong>R.</strong> That we may be made worthy of the promises of Christ.
                    </p>
                    <p className="text-amber-900 font-medium mb-2">Let us pray:</p>
                    <p className="text-amber-800 italic">
                      Pour forth, we beseech Thee, O Lord, Thy grace into our hearts, that we to whom
                      the Incarnation of Christ Thy Son was made known by the message of an angel, may
                      by His Passion and Cross be brought to the glory of His resurrection. Through
                      the same Christ Our Lord. Amen.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">
                  A Daily Memorial of the Incarnation
                </h3>
                <p className="text-blue-800">
                  The Angelus is a daily memorial of the Incarnation &mdash; three times a day, the
                  Church pauses to recall the moment God became man. It is at once a prayer, a theology
                  lesson, and an act of worship.
                </p>
              </div>
            </div>

            {/* Card 2: History */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-purple-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">History of the Angelus Bell</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The custom of ringing church bells to call the faithful to brief Marian prayer dates
                to the 12th and 13th centuries. The bell rings three times daily &mdash; at 6 a.m.,
                noon, and 6 p.m. &mdash; sanctifying the three main parts of the day and weaving the
                mystery of the Incarnation into the fabric of ordinary time. The practice was gradually
                codified in the 14th and 15th centuries into the form we know today.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                The earliest forms were simpler bell-and-prayer customs associated with the Franciscan
                and Dominican movements. The full triple versicle structure developed organically as
                the devotion spread across Europe. Popes from Calixtus III (1456) onward granted
                indulgences to those who prayed the Angelus, confirming its place in the official
                devotional life of the Church.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">
                  Easter Substitution &mdash; Regina Caeli
                </h3>
                <p className="text-amber-800 mb-4">
                  From Holy Saturday through Pentecost, the Angelus is replaced by the <em>Regina
                  Caeli</em> (&ldquo;Queen of Heaven&rdquo;), a joyful antiphon that celebrates Christ&rsquo;s
                  Resurrection: <em>&ldquo;Queen of Heaven, rejoice, alleluia / For He whom you did merit
                  to bear, alleluia / Has risen as He said, alleluia&hellip;&rdquo;</em> The shift reflects
                  the liturgical season: during Easter, the Incarnation mystery is celebrated in its
                  fullest fruit &mdash; the Risen Lord.
                </p>
                <p className="text-amber-800">
                  Pope Francis recites the Regina Caeli (or Angelus during ordinary time) publicly
                  every Sunday at noon from the window of the Apostolic Palace overlooking St. Peter&rsquo;s
                  Square, addressing pilgrims and faithful gathered below.
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-green-900 mb-3">
                  John Paul II and the Sunday Angelus
                </h3>
                <p className="text-green-800">
                  Pope John Paul II transformed the Sunday Angelus/Regina Caeli into a global catechetical
                  moment. From the Vatican window, he delivered brief but substantial reflections on
                  the week&rsquo;s liturgical readings, commenting on world events through a Gospel lens and
                  greeting pilgrims in dozens of languages. These reflections have been collected in
                  multiple volumes, representing one of the most accessible bodies of papal teaching
                  in the modern era.
                </p>
              </div>
            </div>

          </div>
        )}

        {/* ==================== TAB 2: THE BROWN SCAPULAR ==================== */}
        {activeTab === 'brown-scapular' && (
          <div className="space-y-8">

            {/* Card 1: The Vision of St. Simon Stock */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Vision of St. Simon Stock</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                According to Carmelite tradition, on July 16, 1251, at Aylesford, England, Our Lady
                appeared to St. Simon Stock, Prior General of the Carmelite Order. She gave him a
                scapular &mdash; the distinctive garment of the Carmelite habit &mdash; with a promise
                that has made this devotion one of the most beloved in Catholic history: <em>&ldquo;Take,
                beloved son, this scapular of your order as a badge of my confraternity and for you
                and all Carmelites a special sign of grace; whoever dies in this will not suffer
                everlasting fire.&rdquo;</em>
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                This promise is known as the <strong>Privilegium Sabbatinum</strong> (Sabbatine
                Privilege). A further promise, attributed to a papal bull of Pope John XXII in 1322,
                held that Our Lady would intercede for scapular wearers to be freed from Purgatory
                on the Saturday following their death. The historical authenticity of the John XXII
                bull has been questioned by scholars; the Church has treated this particular promise
                as pious tradition rather than defined doctrinal fact, while affirming the devotion
                itself as spiritually beneficial.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">What Is a Scapular?</h3>
                <p className="text-amber-800 mb-3">
                  Originally, the scapular (<em>scapulare</em>, from <em>scapulae</em>, &ldquo;shoulders&rdquo;)
                  was a long panel of cloth worn over the habit by Carmelite and other religious,
                  covering the front and back as a practical work garment and symbol of the yoke of
                  Christ. The devotional scapular worn by laity is a miniaturized version: two small
                  pieces of brown wool cloth connected by strings or cords, worn front and back over
                  the shoulders beneath one&rsquo;s clothing.
                </p>
                <p className="text-amber-800">
                  The wearing of the scapular is an external sign of enrollment in the Confraternity
                  of Our Lady of Mount Carmel &mdash; a lay association united to the Carmelite Order
                  and its spiritual charism of prayer, contemplation, and service.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">Pope Pius XII on the Scapular</h3>
                <p className="text-blue-800 italic mb-2">
                  &ldquo;The Scapular is a habit. Those who wear it become members of the family of Carmel.
                  Let them, therefore, esteem it as a sign of consecration to the Immaculate Heart
                  of Mary.&rdquo;
                </p>
                <p className="text-blue-700 text-sm">&mdash; Pope Pius XII (1950)</p>
              </div>
            </div>

            {/* Card 2: Conditions and Theology */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Cross className="w-6 h-6 text-green-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Conditions, Theology, and Fátima</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The Church has specified four conditions for those who wish to receive the benefits
                of the scapular devotion: (1) enrollment by a priest in the Confraternity of Our
                Lady of Mount Carmel; (2) continuous wearing of the scapular (the Church now permits
                an approved medal as a substitute for those who find the cloth impractical); (3)
                recitation of the Little Office of Our Lady daily, with provision for substitution
                of other approved prayers by one&rsquo;s confessor; and (4) observance of chastity
                according to one&rsquo;s proper state in life.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Critically, the scapular is not a magical charm. The Church classifies it as a
                <strong> sacramental</strong> (CCC 1667&ndash;1679) &mdash; an external sign that
                expresses and deepens an interior commitment. The promise of protection is not
                mechanical; it is conditioned on the sincere living out of the Carmelite spirit:
                poverty, prayer, and service. Wearing the scapular without interior conversion would
                be to misunderstand the devotion entirely.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">
                  The Brown Scapular at F&aacute;tima
                </h3>
                <p className="text-amber-800">
                  Our Lady of F&aacute;tima appeared to the three shepherd children holding a brown
                  scapular. At the climactic apparition of October 13, 1917 &mdash; the day of the
                  &ldquo;Miracle of the Sun&rdquo; witnessed by some 70,000 people &mdash; Our Lady appeared
                  in three forms: Our Lady of the Rosary, Our Lady of Sorrows, and significantly,
                  Our Lady of Mount Carmel, explicitly linking the Carmelite scapular devotion to
                  the F&aacute;tima message.
                </p>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-purple-900 mb-3">
                  Sacramental, Not Superstition
                </h3>
                <p className="text-purple-800">
                  The Catechism&rsquo;s teaching on sacramentals (CCC 1677&ndash;1679) is directly
                  applicable here: sacramentals &ldquo;prepare us to receive grace and dispose us to
                  cooperate with it.&rdquo; They achieve their effect not <em>ex opere operato</em>
                  (by the act performed) as sacraments do, but through the devotion of the Church
                  and of the person using them. The Brown Scapular, understood correctly, is a
                  wearable consecration to Mary and to the values she embodies.
                </p>
              </div>
            </div>

          </div>
        )}

        {/* ==================== TAB 3: THE MIRACULOUS MEDAL ==================== */}
        {activeTab === 'miraculous-medal' && (
          <div className="space-y-8">

            {/* Card 1: Catherine Labouré's Visions */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Visions of Catherine Labouré (1830)</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Catherine Labour&eacute; (1806&ndash;1876) was a novice with the Daughters of Charity of
                St. Vincent de Paul at the convent on the rue du Bac in Paris. In 1830 she received
                three apparitions of Our Lady: on July 18 (the eve of the feast of St. Vincent de
                Paul), on November 27, and in December 1830. These apparitions would change the
                devotional life of the Catholic world.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                The most significant apparition occurred on November 27, 1830. Our Lady appeared
                standing on a globe, crushing a serpent underfoot (an image echoing Genesis 3:15 &mdash;
                the <em>Protoevangelium</em>), with rays of light streaming from rings on her fingers.
                Our Lady told Catherine that the rays represented the graces she obtained for those
                who asked for them, and that the darkened stones on some rings were graces not asked
                for. She then revealed an oval image and said:
              </p>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">Our Lady&rsquo;s Words</h3>
                <p className="text-amber-800 italic mb-4">
                  &ldquo;Have a medal struck after this model. All who wear it will receive great graces;
                  they should wear it around the neck. Graces will abound for persons who wear it
                  with confidence.&rdquo;
                </p>
                <div className="mt-4">
                  <p className="text-amber-900 font-semibold mb-2">The Inscription on the Medal:</p>
                  <p className="text-amber-800 italic text-center text-lg">
                    &ldquo;O Mary, conceived without sin, pray for us who have recourse to thee.&rdquo;
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">
                  Prophecy Before Dogma
                </h3>
                <p className="text-blue-800">
                  The Immaculate Conception was defined as dogma by Pope Pius IX in 1854 &mdash; a full
                  24 years after Our Lady appeared to Catherine Labouré with the inscription &ldquo;O Mary,
                  conceived without sin.&rdquo; The apparition preceded and in some sense anticipated the
                  dogmatic definition. The Church noted this significant sequence when approving the
                  apparitions.
                </p>
              </div>
            </div>

            {/* Card 2: The Medal, Conversions, and Catherine's Hidden Life */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Circle className="w-6 h-6 text-purple-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Medal&rsquo;s Spread and Catherine&rsquo;s Hidden Sanctity</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The reverse of the medal displays a complex Marian iconography: the letter M
                surmounted by a cross and bar, beneath which are 12 stars encircling the image; two
                hearts &mdash; the Sacred Heart of Jesus crowned with thorns, and the Immaculate Heart
                of Mary pierced by a sword (Luke 2:35); and the letter M again. These symbols
                condensed major Christological and Marian doctrines into a wearable catechism.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Pope Gregory XVI permitted the medal to be struck in 1832. Within four years, over
                one million medals had been distributed across France and beyond. Reports of cures,
                conversions, and graces attributed to the medal&rsquo;s intercession began multiplying
                almost immediately &mdash; leading the faithful to call it the &ldquo;Miraculous Medal,&rdquo;
                a name that stuck despite it not being the official Church designation.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">
                  The Conversion of Alphonse Ratisbonne
                </h3>
                <p className="text-amber-800">
                  The most celebrated conversion associated with the medal occurred on January 20,
                  1842, in Rome. Alphonse Ratisbonne, a secular Jewish man of strong anti-Catholic
                  views, had agreed to wear the Miraculous Medal at the persistent insistence of a
                  Catholic acquaintance. While waiting in the church of Sant&rsquo;Andrea delle Fratte,
                  he experienced a sudden, overwhelming vision of Our Lady. He converted on the spot,
                  received baptism shortly after, eventually became a Jesuit priest, and founded the
                  Congregation of Our Lady of Sion. The conversion was investigated by Church authorities
                  and declared miraculous.
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-green-900 mb-3">
                  Catherine&rsquo;s Hidden Identity
                </h3>
                <p className="text-green-800 mb-3">
                  Catherine Labour&eacute; never disclosed that she was the recipient of the visions.
                  She told only her confessor, Father Jean-Marie Aladel, and spent the remaining 46
                  years of her life in complete obscurity as a carer for elderly men in a Paris hospice,
                  revealing her identity only weeks before her death in 1876. Her heroic concealment
                  of the grace she had received is itself considered a mark of the authenticity and
                  depth of her sanctity.
                </p>
                <p className="text-green-800">
                  She was beatified by Pius XI in 1933 and canonized by Pius XII in 1947. The
                  shrine at the rue du Bac in Paris &mdash; where the apparitions occurred &mdash;
                  remains a major Marian pilgrimage site, receiving hundreds of thousands of visitors
                  annually.
                </p>
              </div>
            </div>

          </div>
        )}

        {/* ==================== TAB 4: FÁTIMA DEVOTIONS ==================== */}
        {activeTab === 'fatima-devotions' && (
          <div className="space-y-8">

            {/* Card 1: Specific Devotional Requests */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Specific Devotions Requested at F&aacute;tima</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The F&aacute;tima apparitions of 1917 &mdash; to Lucia Santos, Francisco Marto, and Jacinta
                Marto in the Cova da Iria near F&aacute;tima, Portugal &mdash; were unusual in the specificity
                of their devotional requests. Our Lady did not ask for generic piety but for concrete,
                identifiable practices. These have been carefully preserved in the testimonies of
                Lucia, who lived until 2005 and corresponded extensively with Church authorities.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">
                  The F&aacute;tima Decade Prayer
                </h3>
                <p className="text-amber-800 mb-3">
                  At the July 13, 1917 apparition, Our Lady requested that the following prayer be
                  added to the end of each decade of the Rosary:
                </p>
                <p className="text-amber-800 italic text-center text-base mb-3">
                  &ldquo;O my Jesus, forgive us our sins, save us from the fires of hell, lead all souls
                  to heaven, especially those most in need of your mercy.&rdquo;
                </p>
                <p className="text-amber-700 text-sm">
                  This prayer is now widely used by Catholics worldwide as a standard addition to
                  the Rosary, appearing in approved prayer books and digital rosary guides.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">
                  Private Revelation and the Faith
                </h3>
                <p className="text-blue-800">
                  The apparitions of F&aacute;tima are classified as &ldquo;private revelations&rdquo; (CCC 67).
                  Catholics are not required to believe them as articles of faith; but the Church
                  approves them as worthy of credence and the devotions flowing from them as
                  spiritually beneficial. They do not add to the deposit of faith but can &ldquo;help
                  to live the faith more fully in a certain period of history&rdquo; (CCC 67).
                </p>
              </div>
            </div>

            {/* Card 2: Five First Saturdays and Consecration */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-purple-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Five First Saturdays and Consecration</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                On December 10, 1925, Our Lady appeared to Lucia (then a Dorothean novice) at
                Pontevedra, Spain, with the Child Jesus beside her, requesting the <strong>Five First
                Saturdays devotion</strong> of reparation. On five consecutive first Saturdays of
                the month, the faithful are to: (1) go to Confession; (2) receive Holy Communion;
                (3) recite five decades of the Rosary; (4) keep Our Lady company for 15 minutes
                while meditating on the mysteries of the Rosary, with the intention of making
                reparation to her Immaculate Heart.
              </p>

              <div className="bg-purple-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-purple-900 mb-3">Our Lady&rsquo;s Promise</h3>
                <p className="text-purple-800 italic">
                  &ldquo;I promise to assist at the hour of death with the graces necessary for salvation
                  all those who, on the first Saturday of five consecutive months, shall confess,
                  receive Holy Communion, recite five decades of the Rosary, and keep me company for
                  fifteen minutes while meditating on the fifteen mysteries of the Rosary with the
                  intention of making me reparation.&rdquo;
                </p>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">
                  Consecration to the Immaculate Heart
                </h3>
                <p className="text-amber-800 mb-3">
                  Our Lady requested, at the June and July 1917 apparitions, the consecration of
                  Russia to her Immaculate Heart. Pope Pius XII consecrated the world to the
                  Immaculate Heart of Mary in 1942 (renewed 1952). Following extensive consultation
                  with the world&rsquo;s bishops, Pope John Paul II performed the solemn consecration
                  of Russia and the world on March 25, 1984. Pope Francis renewed this consecration
                  on March 25, 2022, in the context of the war in Ukraine.
                </p>
                <p className="text-amber-800">
                  JPII credited Our Lady of F&aacute;tima with saving his life after the assassination
                  attempt of May 13, 1981 &mdash; which occurred on the 64th anniversary of the first
                  F&aacute;tima apparition. The bullet that struck him is embedded in the crown of the
                  statue of Our Lady at F&aacute;tima, placed there by JPII himself.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  The Third Secret
                </h3>
                <p className="text-gray-800">
                  The Third Secret of F&aacute;tima, entrusted by Our Lady to Lucia at the July 13,
                  1917 apparition, was revealed in full by the Vatican on June 26, 2000, during the
                  pontificate of John Paul II. The text describes a vision of a &ldquo;bishop clothed
                  in white&rdquo; falling under gunfire amid the ruins of a half-destroyed city. The
                  Church&rsquo;s official interpretation, provided by Cardinal Ratzinger in the accompanying
                  theological commentary, identified this vision as referring to the persecution of
                  Christians in the 20th century and, more specifically, to the May 13, 1981
                  assassination attempt on JPII.
                </p>
              </div>
            </div>

          </div>
        )}

        {/* ==================== TAB 5: ANCIENT MARIAN PRAYERS ==================== */}
        {activeTab === 'ancient-marian-prayers' && (
          <div className="space-y-8">

            {/* Card 1: Sub Tuum and the Memorare */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Sub Tuum Praesidium &amp; The Memorare</h2>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">
                  <em>Sub Tuum Praesidium</em> &mdash; c. AD 250
                </h3>
                <p className="text-amber-800 mb-4 italic text-base">
                  &ldquo;Under your protection we seek refuge, Holy Mother of God. Do not despise our
                  supplications in our necessities, but deliver us always from all dangers, O glorious
                  and blessed Virgin.&rdquo;
                </p>
                <p className="text-amber-700 text-sm">
                  This is the oldest known Marian prayer, preserved on Papyrus John Rylands 470, an
                  Egyptian papyrus dating to approximately AD 250 &mdash; before the Council of Nicaea
                  (325) and before any formal Marian councils or dogmatic definitions. It demonstrates
                  that invoking Mary&rsquo;s protection is not a medieval innovation but a practice of
                  the early Church. The prayer is still prayed in the Roman Rite at Compline
                  (Night Prayer) during certain liturgical seasons.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">
                  The <em>Memorare</em> &mdash; attributed to St. Bernard of Clairvaux, 12th century
                </h3>
                <p className="text-blue-800 mb-4 italic">
                  &ldquo;Remember, O most gracious Virgin Mary, that never was it known that anyone who
                  fled to your protection, implored your help, or sought your intercession was left
                  unaided. Inspired with this confidence, I fly to you, O Virgin of virgins, my
                  Mother. To you I come, before you I stand, sinful and sorrowful. O Mother of the
                  Word Incarnate, despise not my petitions, but in your mercy hear and answer me.
                  Amen.&rdquo;
                </p>
                <p className="text-blue-700 text-sm">
                  The Memorare expresses the boldness of Christian petition to Mary: it begins not
                  with a cautious &ldquo;please help if it is God&rsquo;s will&rdquo; but with a confident appeal
                  to the entire history of Mary&rsquo;s intercession. It is a prayer of confident trust.
                  The attribution to St. Bernard is traditional rather than certainly historical;
                  the current form may be a 15th-century compilation drawing on earlier Bernardine
                  texts.
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-green-900 mb-3">
                  The Antiquity of Marian Prayer
                </h3>
                <p className="text-green-800">
                  The sheer antiquity of <em>Sub Tuum Praesidium</em> (AD ~250) shows that Marian
                  prayer is not a medieval invention &mdash; it predates the Council of Nicaea (325).
                  Christians have sought Mary&rsquo;s intercession from nearly the beginning of the Church,
                  long before the great Marian councils and definitions of the 5th century and beyond.
                </p>
              </div>
            </div>

            {/* Card 2: Salve Regina and the Seasonal Antiphons */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-purple-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Salve Regina &amp; the Seasonal Antiphons</h2>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-purple-900 mb-3">
                  <em>Salve Regina</em> (Hail Holy Queen) &mdash; 11th century
                </h3>
                <p className="text-purple-800 mb-4 italic">
                  &ldquo;Hail, Holy Queen, Mother of Mercy, our life, our sweetness and our hope. To you
                  do we cry, poor banished children of Eve. To you do we send up our sighs, mourning
                  and weeping in this valley of tears. Turn, then, most gracious advocate, your eyes
                  of mercy toward us, and after this, our exile, show unto us the blessed fruit of
                  your womb, Jesus. O clement, O loving, O sweet Virgin Mary.&rdquo;
                </p>
                <p className="text-purple-700 text-sm">
                  Attributed variously to Adhémar of Monteil or Herman of Reichenau, the Salve Regina
                  is one of the four Marian antiphons recited at the close of the Liturgy of the
                  Hours; it is sung from Compline after Pentecost until the beginning of Advent. It
                  is also prayed at the close of the Rosary.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-amber-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-amber-900 mb-2">
                    <em>Alma Redemptoris Mater</em>
                  </h3>
                  <p className="text-amber-800 text-sm mb-2">
                    &ldquo;Loving Mother of the Redeemer&rdquo; &mdash; attributed to Herman of Reichenau (d. 1054).
                  </p>
                  <p className="text-amber-700 text-sm">
                    Sung from the First Sunday of Advent through the Feast of the Presentation
                    (February 2). Celebrates Mary as Mother of both God and man and as the gate of
                    heaven.
                  </p>
                </div>
                <div className="bg-blue-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-2">
                    <em>Ave Regina Caelorum</em>
                  </h3>
                  <p className="text-blue-800 text-sm mb-2">
                    &ldquo;Hail, Queen of the Heavens&rdquo; &mdash; one of the four seasonal Marian antiphons.
                  </p>
                  <p className="text-blue-700 text-sm">
                    Sung from the Feast of the Presentation (February 2) through Wednesday of Holy
                    Week. A compact, exalted praise of Mary as Queen and intercessor.
                  </p>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-green-900 mb-3">
                  The Litany of Loreto
                </h3>
                <p className="text-green-800 mb-3">
                  The Litany of Loreto is a series of invocations to Mary with over 50 titles,
                  dating to approximately 1558 at the Loreto shrine in Italy &mdash; the official
                  litany approved by the Holy See for universal public use. Its titles form a rich
                  treasury of Marian theology condensed into short, beautiful phrases:
                </p>
                <div className="grid sm:grid-cols-3 gap-2">
                  {[
                    'Mirror of Justice',
                    'Seat of Wisdom',
                    'Tower of David',
                    'Morning Star',
                    'Refuge of Sinners',
                    'Comforter of the Afflicted',
                    'Health of the Sick',
                    'Queen of Angels',
                    'Gate of Heaven',
                  ].map((title) => (
                    <div key={title} className="bg-white rounded p-2 text-center">
                      <span className="text-green-800 text-sm italic">{title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        )}

        {/* ==================== TAB 6: THEOLOGY OF MARIAN DEVOTION ==================== */}
        {activeTab === 'theology-of-devotion' && (
          <div className="space-y-8">

            {/* Card 1: Lumen Gentium and the Distinctions */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Lumen Gentium, Chapter VIII: The Council&rsquo;s Teaching</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Vatican II&rsquo;s <em>Lumen Gentium</em> (1964), Chapter VIII, is the most authoritative
                magisterial statement on Mary&rsquo;s place in the Church. Significantly, the Council
                chose to treat Mary not in a separate document but within the Constitution on the
                Church itself &mdash; deliberately placing her in ecclesial context, as a member of
                the Church though in a supremely eminent position.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">Key Passages from Lumen Gentium</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-amber-800 italic mb-1">
                      &ldquo;Mary&rsquo;s function as mother of men in no way obscures or diminishes this unique
                      mediation of Christ, but rather shows its power.&rdquo;
                    </p>
                    <p className="text-amber-700 text-sm">&mdash; LG 60</p>
                  </div>
                  <div>
                    <p className="text-amber-800 italic mb-1">
                      &ldquo;This most Holy Synod deliberately teaches this Catholic doctrine and at the
                      same time admonishes all the sons of the Church that the cult&hellip; toward the
                      Blessed Virgin be generously fostered&hellip; But it exhorts theologians and preachers
                      of the divine word to abstain zealously both from all gross exaggerations as
                      well as from petty narrow-mindedness.&rdquo;
                    </p>
                    <p className="text-amber-700 text-sm">&mdash; LG 66&ndash;67</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">
                  Latria, Hyperdulia, Dulia
                </h3>
                <p className="text-blue-800 mb-3">
                  Thomas Aquinas&rsquo;s classical distinction resolves the most common misunderstanding
                  about Catholic Marian devotion:
                </p>
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="bg-white rounded-lg p-4">
                    <p className="font-semibold text-blue-900 mb-1">Latria</p>
                    <p className="text-blue-800 text-sm">
                      The worship due to God alone. Catholics offer <em>latria</em> only to the Trinity.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <p className="font-semibold text-blue-900 mb-1">Dulia</p>
                    <p className="text-blue-800 text-sm">
                      The veneration due to saints, honoring the grace of God at work in them.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <p className="font-semibold text-blue-900 mb-1">Hyperdulia</p>
                    <p className="text-blue-800 text-sm">
                      The special veneration due to Mary alone: greater than any saint, yet infinitely
                      less than the worship due to God.
                    </p>
                  </div>
                </div>
                <p className="text-blue-800 text-sm mt-4">
                  Catholics worship God; they venerate Mary. This distinction, often misunderstood
                  by critics of Catholic devotion, is the precise theological framework within which
                  all Marian prayers and devotions operate.
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-green-900 mb-3">
                  Authentic vs. Excessive Devotion
                </h3>
                <p className="text-green-800 mb-3">
                  CCC 971 affirms: &ldquo;The Church&rsquo;s devotion to the Blessed Virgin is intrinsic to
                  Christian worship.&rdquo; CCC 2678 teaches that &ldquo;we can pray with and to her.&rdquo;
                  Yet <em>Lumen Gentium</em> 67 issues a double warning: against <em>neglecting</em>
                  Mary (a Protestant tendency) and against <em>exaggerating</em> her role beyond what
                  faith and Church teaching warrant. Authentic Marian devotion always leads to Christ;
                  it is Christocentric by definition.
                </p>
              </div>
            </div>

            {/* Card 2: JPII, De Montfort, and Mary as Model of the Church */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-purple-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">JPII, De Montfort, and Mary as Model of the Church</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Pope John Paul II&rsquo;s Marian spirituality is inseparable from his theological identity.
                His episcopal and papal motto &mdash; <em>Totus Tuus</em> (&ldquo;Totally Yours&rdquo;) &mdash; was
                drawn from St. Louis de Montfort&rsquo;s Marian consecration formula and expressed his
                complete self-offering to God through Mary. His 1987 encyclical <em>Redemptoris Mater</em>
                (&ldquo;Mother of the Redeemer&rdquo;) offered a profound theological meditation on Mary as
                &ldquo;Mother of Mercy&rdquo; and model of the Church on pilgrimage toward the fullness of faith.
              </p>

              <div className="bg-purple-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-purple-900 mb-3">
                  St. Louis de Montfort&rsquo;s <em>True Devotion</em>
                </h3>
                <p className="text-purple-800 mb-3">
                  St. Louis-Marie Grignion de Montfort (1673&ndash;1716) wrote his masterwork <em>True
                  Devotion to the Blessed Virgin Mary</em> around 1700. Suppressed during the French
                  Revolution, the manuscript was discovered in 1842 and published in 1843. De Montfort
                  argues that &ldquo;total consecration&rdquo; &mdash; giving all one&rsquo;s prayers, works, and
                  merits to Jesus through Mary &mdash; is the &ldquo;surest and shortest&rdquo; path to
                  holiness and union with Christ.
                </p>
                <p className="text-purple-800">
                  The young Karol Woj&nbsp;ty&l;a read this book as a young man and credited it with
                  transforming his understanding of Marian devotion from sentimental piety to rigorous
                  Christocentric theology. The book&rsquo;s core insight &mdash; that going to Jesus through
                  Mary is the logic of the Incarnation itself &mdash; became the theological foundation
                  of JPII&rsquo;s entire pontificate.
                </p>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">
                  Mary as Type and Model of the Church
                </h3>
                <p className="text-amber-800 mb-3">
                  <em>Lumen Gentium</em> 53 and 63&ndash;65 present Mary as &ldquo;a type of the Church in
                  the order of faith, charity, and perfect union with Christ.&rdquo; What the Church is
                  called to be &mdash; wholly receptive to God, wholly given over to bearing Christ to
                  the world &mdash; Mary already is, perfectly and completely. Her <em>fiat</em> at the
                  Annunciation is the model for every act of faith; her faithful perseverance to the
                  Cross and beyond is the model of the Church&rsquo;s pilgrim journey.
                </p>
                <p className="text-amber-800">
                  This ecclesiological dimension of Marian theology is why devotion to Mary is not
                  optional piety for Catholics: it is a theological grammar for understanding what
                  the Church itself is called to be.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">
                  Further Exploration
                </h3>
                <div className="space-y-2">
                  <a
                    href="/prayer/rosary"
                    className="flex items-center gap-2 text-blue-700 hover:text-blue-900 transition-colors"
                  >
                    <ArrowRight className="w-4 h-4" />
                    <span>The Holy Rosary &rarr;</span>
                  </a>
                  <a
                    href="/mysteries/private-revelations"
                    className="flex items-center gap-2 text-blue-700 hover:text-blue-900 transition-colors"
                  >
                    <ArrowRight className="w-4 h-4" />
                    <span>Private Revelations &rarr;</span>
                  </a>
                  <a
                    href="/mysteries/public-revelation"
                    className="flex items-center gap-2 text-blue-700 hover:text-blue-900 transition-colors"
                  >
                    <ArrowRight className="w-4 h-4" />
                    <span>Public Revelation &rarr;</span>
                  </a>
                </div>
              </div>

              {/* Sources */}
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
                    <h3 className="font-semibold text-amber-900 mb-3">Magisterial &amp; Official</h3>
                    <ul className="text-amber-800 text-sm space-y-2">
                      <li><em>Catechism of the Catholic Church</em>, &sect;&sect;484&ndash;511 (Mary in God&rsquo;s plan)</li>
                      <li><em>Catechism of the Catholic Church</em>, &sect;&sect;963&ndash;975 (Mary, Mother of the Church)</li>
                      <li><em>Catechism of the Catholic Church</em>, &sect;&sect;2676&ndash;2679 (Marian prayer)</li>
                      <li><em>Catechism of the Catholic Church</em>, &sect;&sect;1667&ndash;1679 (sacramentals)</li>
                      <li><em>Catechism of the Catholic Church</em>, &sect;2708 (meditative prayer)</li>
                      <li>Vatican II, <em>Lumen Gentium</em>, ch. VIII, &sect;&sect;53&ndash;69 (Mary &amp; the Church)</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 p-5 rounded-lg">
                    <h3 className="font-semibold text-blue-900 mb-3">Papal Documents</h3>
                    <ul className="text-blue-800 text-sm space-y-2">
                      <li>Pope John Paul II, <em>Redemptoris Mater</em> (1987) &mdash; Mother of the Redeemer</li>
                      <li>Pope Paul VI, <em>Marialis Cultus</em> (1974) &mdash; For the Right Ordering of Marian Devotion</li>
                      <li>Pope Pius IX, <em>Ineffabilis Deus</em> (1854) &mdash; definition of the Immaculate Conception</li>
                      <li>Pope Pius XII, letter on the Brown Scapular (1950)</li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 p-5 rounded-lg">
                    <h3 className="font-semibold text-purple-900 mb-3">Spiritual &amp; Scholarly Works</h3>
                    <ul className="text-purple-800 text-sm space-y-2">
                      <li>St. Louis de Montfort, <em>True Devotion to the Blessed Virgin Mary</em> (c. 1700, publ. 1843)</li>
                      <li>Frederick Jelly OP, <em>Madonna: Mary in the Catholic Tradition</em> (Our Sunday Visitor, 1986)</li>
                      <li>René Laurentin, <em>Bernadette of Lourdes</em> (London, 1979) &mdash; apparition methodology</li>
                      <li>Thomas Aquinas, <em>Summa Theologiae</em>, IIa IIae, q. 84 (on dulia and hyperdulia)</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-5 rounded-lg">
                    <h3 className="font-semibold text-green-900 mb-3">Primary Sources on the Devotions</h3>
                    <ul className="text-green-800 text-sm space-y-2">
                      <li>Papyrus John Rylands 470 (c. AD 250) &mdash; <em>Sub Tuum Praesidium</em></li>
                      <li>Sister Lucia, <em>Fatima in Lucia&rsquo;s Own Words</em> (Postulation Centre, F&aacute;tima, 2004)</li>
                      <li>René Laurentin &amp; Patrick Sbalchiero (eds.), <em>Dictionnaire des &ldquo;apparitions&rdquo; de la Vierge Marie</em> (2007)</li>
                      <li>Carmelite Institute of Britain and Ireland, documentation on the Brown Scapular tradition</li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  )
}
