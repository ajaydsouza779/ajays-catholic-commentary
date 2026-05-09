'use client'

import { useState } from 'react'
import {
  BookOpen,
  Clock,
  Scale,
  Lightbulb,
  Eye,
  Calendar,
  AlertTriangle,
  Hash,
  CheckCircle,
  XCircle,
  ScrollText,
  Quote,
  Newspaper,
} from 'lucide-react'

type TabId =
  | 'what-is-apocalyptic'
  | 'daniel'
  | 'synoptic-apocalypse'
  | 'reading-symbols'
  | 'mistakes-to-avoid'
  | 'catholic-hermeneutics'

const tabs: { id: TabId; label: string }[] = [
  { id: 'what-is-apocalyptic', label: 'What Is Apocalyptic?' },
  { id: 'daniel', label: 'Daniel: The Prototype' },
  { id: 'synoptic-apocalypse', label: 'The Synoptic Apocalypse' },
  { id: 'reading-symbols', label: 'Reading the Symbols' },
  { id: 'mistakes-to-avoid', label: 'Mistakes to Avoid' },
  { id: 'catholic-hermeneutics', label: 'Catholic Hermeneutics' },
]

export default function ApocalypticLiteraturePage() {
  const [activeTab, setActiveTab] = useState<TabId>('what-is-apocalyptic')

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Apocalyptic Literature in the Bible
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Apocalyptic literature is among the most misread genre in Scripture. Understanding how
            ancient apocalyptic texts work &mdash; their symbols, their purpose, their historical
            context &mdash; is essential to reading the Bible responsibly.
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

        {/* ==================== TAB 1: WHAT IS APOCALYPTIC? ==================== */}
        {activeTab === 'what-is-apocalyptic' && (
          <div className="space-y-8">
            {/* Defining Apocalyptic */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Defining Apocalyptic Literature</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The word &ldquo;Apocalypse&rdquo; comes from the Greek <em>apokalypsis</em>, meaning
                unveiling or revelation &mdash; the pulling back of a curtain to reveal what is
                ordinarily hidden. As a literary genre, apocalyptic flourished in Judaism roughly from
                200 BC to 200 AD and was taken up and transformed in early Christianity.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">
                  Defining Characteristics of Apocalyptic Literature
                </h3>
                <ul className="text-amber-800 space-y-2 text-sm">
                  <li><strong>1. Heavenly visions</strong> received by a human seer, often through an angelic intermediary</li>
                  <li><strong>2. Symbolic imagery:</strong> beasts, numbers, cosmic events, strange creatures</li>
                  <li><strong>3. Dualistic worldview:</strong> the present evil age contrasted with the coming age of God</li>
                  <li><strong>4. Pseudonymity</strong> &mdash; often written in the name of an ancient worthy (Enoch, Abraham, Moses, Daniel)</li>
                  <li><strong>5. Cosmic scope:</strong> angels, demons, the heavenly realm, the fate of all nations</li>
                  <li><strong>6. Imminent crisis context:</strong> addressed to communities under severe persecution or oppression</li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                Key examples of apocalyptic literature include: the Book of Daniel (Old Testament),
                1 Enoch, 4 Ezra, 2 Baruch, and &mdash; in the New Testament &mdash; the Book of
                Revelation (the Apocalypse of St. John). Portions of the Synoptic Gospels (Mark 13,
                Matthew 24, Luke 21) also employ apocalyptic idiom, as do passages of Paul&rsquo;s
                letters (1 Thess 4:13&ndash;18; 2 Thess 2).
              </p>
            </div>

            {/* Historical Context */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Historical Context of Apocalyptic</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Apocalyptic literature does not emerge in comfortable times. It is the literature of
                communities that are suffering under foreign oppression with no political solution in
                sight. The genre arises precisely when normal prophetic exhortation &mdash;
                &ldquo;repent and God will restore you&rdquo; &mdash; seems inadequate to the
                magnitude of the crisis.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">The Crises Behind the Texts</h3>
                <ul className="text-blue-800 space-y-2 text-sm">
                  <li>
                    <strong>Jewish apocalyptic:</strong> Emerged under Greek persecution (Antiochus IV Epiphanes, 167 BC &mdash;
                    the direct context for Daniel); continued under Roman occupation
                  </li>
                  <li>
                    <strong>Christian apocalyptic (Revelation):</strong> Emerged under Roman imperial persecution,
                    probably under Domitian (~95 AD) or possibly Nero (~65 AD)
                  </li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                The message of apocalyptic literature is always essentially the same: God is in
                control of history even when it does not appear so; the present oppressive powers will
                fall; the suffering community will be vindicated; hold on. This is fundamentally a
                message of <strong>encouragement</strong>, not a prophecy timetable for distant
                future readers.
              </p>
            </div>

            {/* Apocalyptic vs. Prophecy */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Scale className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Apocalyptic vs. Prophecy</h2>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 p-5 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-900 mb-3">Old Testament Prophecy</h3>
                  <ul className="text-blue-800 text-sm space-y-2">
                    <li>Primarily <em>forth-telling</em> &mdash; speaking God&rsquo;s word to a present situation</li>
                    <li>Secondarily <em>fore-telling</em> &mdash; announcing consequences of covenant faithfulness or unfaithfulness</li>
                    <li>Usually specific historical referents: kings, nations, coming events</li>
                    <li>Language is often direct and historical</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-5 rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">Apocalyptic Literature</h3>
                  <ul className="text-purple-800 text-sm space-y-2">
                    <li>Focused on cosmic divine intervention; present order assumed unredeemable</li>
                    <li>Uses visionary, heavily symbolic language throughout</li>
                    <li>Usually delivered through angelic mediators</li>
                    <li>Expects God to break in from outside history</li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">
                The two genres overlap in several important texts: Isaiah 24&ndash;27 (often called
                the &ldquo;Isaiah Apocalypse&rdquo;), Ezekiel 38&ndash;39 (the Gog and Magog vision),
                and Zechariah 9&ndash;14 all employ apocalyptic idiom within the prophetic books.
                Understanding which genre a given passage belongs to &mdash; or how it blends genres
                &mdash; is essential for correct interpretation.
              </p>
            </div>

            {/* Purpose of Imagery */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-green-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Purpose of Apocalyptic Imagery</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The bizarre imagery of apocalyptic texts &mdash; ten-horned beasts, whores riding
                scarlet beasts, dragons, numbered seals &mdash; was not meant to be a literal
                prediction map for distant future readers. It was symbolic code that the <em>original
                readers understood</em>. It had to be encoded to protect readers if the text fell into
                hostile hands; it was, in essence, wartime resistance literature.
              </p>

              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-green-900 mb-3">
                  Decoding the Symbols for First-Century Readers
                </h3>
                <ul className="text-green-800 space-y-2 text-sm">
                  <li><strong>&ldquo;Babylon&rdquo;</strong> = Rome (the great oppressor of God&rsquo;s people in the current age)</li>
                  <li><strong>&ldquo;The Beast&rdquo;</strong> = Nero or Domitian, depending on the date of composition</li>
                  <li><strong>&ldquo;666&rdquo;</strong> = the numerical value (<em>gematria</em>) of &ldquo;Nero Caesar&rdquo; in Hebrew/Aramaic letters: NRWN QSR = 50+200+6+50+100+60+200 = 666</li>
                  <li><strong>&ldquo;144,000&rdquo;</strong> = 12 &times; 12 &times; 1,000 = symbolic completeness: the fullness of God&rsquo;s people (12 tribes &times; 12 apostles &times; a great multitude)</li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed">
                Far from being obscure puzzles for future generations to decode, these images were
                immediately legible to their intended audience. The task of the modern interpreter
                is to recover that original legibility through historical study &mdash; not to
                project the images onto contemporary political figures.
              </p>
            </div>
          </div>
        )}

        {/* ==================== TAB 2: DANIEL: THE PROTOTYPE ==================== */}
        {activeTab === 'daniel' && (
          <div className="space-y-8">
            {/* Daniel: Structure */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Daniel: Structure and Purpose</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The Book of Daniel is the foundational apocalyptic text of the Old Testament and the
                direct precursor to the New Testament Apocalypse. It stands in the Hebrew canon among
                the Writings (<em>Ketuvim</em>), not the Prophets &mdash; a canonical location that
                reflects its genre and composition history.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">Structure of Daniel</h3>
                <ul className="text-amber-800 space-y-2 text-sm">
                  <li>
                    <strong>Chapters 1&ndash;6:</strong> Court narratives &mdash; Daniel and his companions
                    (Hananiah, Mishael, Azariah) in the Babylonian and Persian royal court; the fiery
                    furnace; Daniel in the lion&rsquo;s den
                  </li>
                  <li>
                    <strong>Chapters 7&ndash;12:</strong> Visionary/apocalyptic section &mdash; the four beasts,
                    the Ancient of Days, the Son of Man, the &ldquo;abomination of desolation,&rdquo;
                    the seventy weeks, the general resurrection
                  </li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                The historical setting claimed by the book is the Babylonian exile (6th century BC).
                However, the scholarly consensus &mdash; including among Catholic biblical scholars
                in line with the Pontifical Biblical Commission&rsquo;s 1993 document on Scripture
                interpretation &mdash; is that the book reached its present form in the Maccabean
                period, around 165 BC, during the crisis of Antiochus IV Epiphanes&rsquo;s
                persecution. The Catholic approach accepts this historical-critical context while
                maintaining the text&rsquo;s divinely inspired and genuinely prophetic character.
              </p>
            </div>

            {/* Four Beasts and Son of Man */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Eye className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Four Beasts and the Son of Man (Daniel 7)</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Daniel 7 is one of the most important chapters in the entire Bible for understanding
                both Jewish eschatological hope and the New Testament&rsquo;s presentation of Jesus.
                Four great beasts rise from the sea: a lion with eagle&rsquo;s wings (Babylon), a
                bear with ribs in its mouth (Media), a four-headed leopard (Persia), and a terrifying
                beast with iron teeth and ten horns (the Greek/Seleucid Empire under Antiochus).
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">
                  The Ancient of Days and the Son of Man
                </h3>
                <p className="text-blue-800 italic mb-3">
                  &ldquo;I saw in the night visions, and behold, with the clouds of heaven there came
                  one like a son of man, and he came to the Ancient of Days and was presented before
                  him. And to him was given dominion and glory and a kingdom, that all peoples, nations,
                  and languages should serve him; his dominion is an everlasting dominion, which shall
                  not pass away.&rdquo;
                </p>
                <p className="text-blue-700 text-sm">&mdash; Daniel 7:13&ndash;14</p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                Jesus applies &ldquo;Son of Man&rdquo; from Daniel 7:13 to himself throughout the
                Gospels &mdash; it is the most common title Jesus uses for himself. At his trial
                before the Sanhedrin he quotes it directly: &ldquo;you will see the Son of Man seated
                at the right hand of Power and coming on the clouds of heaven&rdquo; (Matt 26:64).
                The key theological point: the four kingdoms of the world are temporary; the kingdom
                given to the &ldquo;one like a son of man&rdquo; is eternal.
              </p>
            </div>

            {/* The Seventy Weeks */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-purple-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Seventy Weeks (Daniel 9)</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Daniel 9:24&ndash;27, the &ldquo;Seventy Weeks&rdquo; prophecy, is perhaps the most
                calculated-over passage in all of biblical prophecy. Every major end-times system has
                used it to construct prophetic timelines; it has generated centuries of interpretive
                conflict. Understanding what the text says &mdash; and what Catholic tradition requires
                us to believe about it &mdash; is important for responsible reading.
              </p>

              <div className="bg-purple-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-purple-900 mb-3">
                  The Key Passage
                </h3>
                <p className="text-purple-800 italic mb-3">
                  &ldquo;Seventy weeks are decreed for your people and your holy city, to finish
                  the transgression, to put an end to sin, and to atone for iniquity, to bring in
                  everlasting righteousness, to seal both vision and prophet, and to anoint a most
                  holy place.&rdquo;
                </p>
                <p className="text-purple-700 text-sm">&mdash; Daniel 9:24</p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                The Catholic interpretation, following the Fathers and mainstream Catholic
                scholarship, reads this passage as fulfilled in the first coming of Christ and the
                events of 70 AD: the &ldquo;cutting off of the anointed one&rdquo; refers to the
                death of Christ; the &ldquo;abomination of desolation&rdquo; refers both to
                Antiochus IV&rsquo;s desecration of the Temple (167 BC, the original historical
                referent) and to the Roman destruction of Jerusalem (70 AD), with a possible
                further eschatological fulfillment. The Church does not require any specific
                literalistic fulfillment chart; the text is prophetic, not a timetable.
              </p>
            </div>

            {/* Abomination of Desolation */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-red-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Abomination of Desolation</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The phrase &ldquo;the abomination that causes desolation&rdquo; (Dan 9:27, 11:31,
                12:11) is one of the most-discussed phrases in all of biblical prophecy. It has been
                read as referring to: (1) the altar of Zeus installed in the Jerusalem Temple by
                Antiochus IV Epiphanes in 167 BC, including his sacrifice of a pig; (2) the Roman
                destruction of Jerusalem in 70 AD (Jesus&rsquo;s explicit usage in Matt 24:15); and
                (3) a still-future eschatological figure or event at the end of the age.
              </p>

              <div className="bg-red-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-red-900 mb-3">Catholic Position (CCC 675&ndash;677)</h3>
                <p className="text-red-800 mb-3">
                  The Catechism acknowledges a &ldquo;final trial&rdquo; before the end of the age,
                  associated with the figure of &ldquo;the Antichrist&rdquo; &mdash; &ldquo;a
                  religious deception offering men an apparent solution to their problems at the price
                  of apostasy from the truth.&rdquo; However, the Church resists precise prophetic
                  mapping. The text has already been fulfilled historically; further fulfillment is
                  acknowledged as possible but cannot be precisely charted.
                </p>
                <p className="text-red-700 text-sm">&mdash; CCC 675&ndash;677</p>
              </div>
            </div>
          </div>
        )}

        {/* ==================== TAB 3: THE SYNOPTIC APOCALYPSE ==================== */}
        {activeTab === 'synoptic-apocalypse' && (
          <div className="space-y-8">
            {/* The Little Apocalypse */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Mark 13 / Matthew 24 / Luke 21: The &ldquo;Little Apocalypse&rdquo;</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                All three Synoptic Gospels record Jesus&rsquo;s extended discourse about future
                events, delivered on the Mount of Olives shortly before his Passion. This discourse
                has been called the &ldquo;Synoptic Apocalypse&rdquo; or the &ldquo;Little
                Apocalypse&rdquo; because it employs the language and imagery of the apocalyptic
                genre.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">The Context and the Double Horizon</h3>
                <p className="text-amber-800 mb-3">
                  The disciples admire the Temple stones; Jesus predicts the Temple&rsquo;s
                  destruction (&ldquo;not one stone will be left upon another&rdquo;, fulfilled in
                  70 AD). They ask two questions: <em>when</em> will this happen? And <em>what</em>{' '}
                  will be the sign of the end of the age? Jesus&rsquo;s answer interweaves two
                  distinct horizons: (1) the imminent fall of Jerusalem (fulfilled 70 AD) and (2)
                  the final end of the age (future). This <strong>&ldquo;double horizon&rdquo;</strong>{' '}
                  is the key to understanding the entire discourse &mdash; and the primary reason
                  it is so frequently misread.
                </p>
              </div>
            </div>

            {/* Fulfilled in 70 AD */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-green-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">What Was Fulfilled in 70 AD</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                A careful reading of the discourse shows that many of its elements were fulfilled
                within the lifetime of Jesus&rsquo;s original hearers, in the catastrophe of the
                First Jewish-Roman War (66&ndash;73 AD) and the Roman destruction of Jerusalem and
                its Temple.
              </p>

              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-green-900 mb-3">
                  Historically Fulfilled Predictions
                </h3>
                <ul className="text-green-800 space-y-2 text-sm">
                  <li><strong>&ldquo;Not one stone upon another&rdquo;:</strong> The Romans dismantled the Temple in 70 AD; confirmed by archaeology</li>
                  <li><strong>False messiahs and prophets:</strong> The Jewish historian Josephus documents multiple false messiahs active during the Jewish War</li>
                  <li><strong>&ldquo;Nation against nation&rdquo;:</strong> The Jewish-Roman War was precisely this</li>
                  <li><strong>&ldquo;The abomination of desolation&rdquo;:</strong> Luke 21:20 makes the referent explicit &mdash; &ldquo;When you see Jerusalem surrounded by armies, know that its desolation is at hand&rdquo;</li>
                  <li><strong>&ldquo;Flee to the mountains&rdquo;:</strong> Historically, Christians fled to Pella before the Roman siege</li>
                  <li><strong>&ldquo;This generation will not pass away&rdquo; (Matt 24:34):</strong> Jesus speaking of the 70 AD events; fulfilled within the lifetimes of his hearers</li>
                </ul>
              </div>
            </div>

            {/* What Remains Future */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">What Remains Future</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                While many verses of the discourse describe the 70 AD crisis, others clearly look
                beyond it to the end of the age. The Catholic reading (CCC 673&ndash;677) holds both
                horizons together, refusing to collapse all of the discourse into either the past
                or a purely future event.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">
                  The Second Horizon: The Parousia
                </h3>
                <ul className="text-blue-800 space-y-2 text-sm">
                  <li><strong>Cosmic signs (Matt 24:29):</strong> &ldquo;After the tribulation of those days the sun will be darkened&rdquo; &mdash; language of the Parousia, not 70 AD</li>
                  <li><strong>The sign of the Son of Man (Matt 24:30):</strong> &ldquo;Then will appear in heaven the sign of the Son of Man&hellip; they will see the Son of Man coming on the clouds of heaven&rdquo; &mdash; the Second Coming</li>
                  <li><strong>No one knows the hour (Matt 24:36):</strong> &ldquo;Of that day or hour no one knows, not even the angels of heaven, nor the Son, but only the Father&rdquo; &mdash; we cannot calculate the date of the Parousia</li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed">
                The Catholic approach (CCC 673&ndash;677) holds a &ldquo;double horizon&rdquo;
                reading: some verses were fulfilled in 70 AD; the final fulfillment at the Parousia
                remains future. No detailed chronological timetable is prescribed. The emphatic
                point of &ldquo;no one knows the hour&rdquo; stands against all end-times
                date-setting.
              </p>
            </div>

            {/* The Fig Tree Parable */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Fig Tree Parable</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Matt 24:32&ndash;35: &ldquo;From the fig tree learn its lesson: as soon as its branch
                becomes tender and puts out its leaves, you know that summer is near. So also, when
                you see all these things, you know that he is near, at the very gates. Truly, I say
                to you, this generation will not pass away until all these things take place.&rdquo;
              </p>

              <div className="bg-red-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-red-900 mb-3">
                  A Frequently Misread Passage
                </h3>
                <p className="text-red-800 mb-3">
                  Many end-times teachers read the &ldquo;fig tree&rdquo; as a symbol for Israel,
                  interpret &ldquo;putting out its leaves&rdquo; as the establishment of the modern
                  Israeli state (1948), and then calculate &ldquo;this generation&rdquo; as 40&ndash;80
                  years &mdash; yielding predictions of the end by 1988 or 2028. This reading has
                  no support in Catholic tradition and repeatedly fails.
                </p>
                <ul className="text-red-700 text-sm space-y-1">
                  <li><strong>Problem 1:</strong> In context, &ldquo;fig tree&rdquo; is a seasonal parable, not a national symbol</li>
                  <li><strong>Problem 2:</strong> &ldquo;This generation&rdquo; in context refers to Jesus&rsquo;s own hearers (the 70 AD events)</li>
                  <li><strong>Problem 3:</strong> Jesus explicitly states no one knows the hour &mdash; making all calculations invalid</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* ==================== TAB 4: READING THE SYMBOLS ==================== */}
        {activeTab === 'reading-symbols' && (
          <div className="space-y-8">
            {/* Numbers */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Hash className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Numbers in Apocalyptic Literature</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Numbers in apocalyptic literature are symbolic, not literal. This is one of the most
                important interpretive keys for reading Daniel and Revelation responsibly. Ancient
                readers understood this instinctively; modern Western readers, trained in literal
                numerical thinking, often do not.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">Key Symbolic Numbers</h3>
                <ul className="text-amber-800 space-y-2 text-sm">
                  <li><strong>7:</strong> Perfection, completeness (7 churches, 7 seals, 7 trumpets, 7 bowls in Revelation)</li>
                  <li><strong>12:</strong> God&rsquo;s people (12 tribes + 12 apostles; 144,000 = 12&times;12&times;1,000 = symbolic fullness of the saved)</li>
                  <li><strong>3.5 (half of 7):</strong> A time of testing and incompleteness; &ldquo;42 months,&rdquo; &ldquo;1,260 days,&rdquo; and &ldquo;time, times, and half a time&rdquo; all denote the same period (Dan 7:25, Rev 12:6, 12:14)</li>
                  <li><strong>1,000 (<em>chilias</em>):</strong> A very large indefinite number; completeness; divine time. &ldquo;1,000 years&rdquo; (the Millennium in Rev 20) is almost certainly symbolic of the Church age, not a literal thousand-year period</li>
                  <li><strong>40:</strong> Testing (40 years in the desert; 40 days of Jesus&rsquo;s temptation)</li>
                </ul>
              </div>
            </div>

            {/* Beasts and Animals */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Eye className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Beasts, Animals, and Imagery</h2>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 p-5 rounded-lg">
                  <h3 className="text-base font-semibold text-blue-900 mb-3">Revelation&rsquo;s Symbolic World</h3>
                  <ul className="text-blue-800 text-sm space-y-2">
                    <li><strong>The Beast from the sea (Rev 13):</strong> Rome / the Roman Empire; the seven heads = seven hills of Rome (17:9) and/or seven emperors</li>
                    <li><strong>666:</strong> Gematria of &ldquo;Nero Caesar&rdquo; in Hebrew (NRWN QSR = 666); a mockery of imperial claims to divinity</li>
                    <li><strong>The Whore of Babylon (Rev 17&ndash;18):</strong> Rome, the city of seven hills (17:9), &ldquo;drunk with the blood of the saints&rdquo;</li>
                    <li><strong>The dragon:</strong> Satan, explicitly identified in Rev 12:9</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-5 rounded-lg">
                  <h3 className="text-base font-semibold text-blue-900 mb-3">More Symbolic Figures</h3>
                  <ul className="text-blue-800 text-sm space-y-2">
                    <li><strong>The woman clothed with the sun (Rev 12):</strong> Israel / the Church / Mary &mdash; multiple levels of meaning</li>
                    <li><strong>White, red, black horses (Rev 6):</strong> Conquest, war, famine, death &mdash; classic biblical imagery for divine judgment</li>
                    <li><strong>The Lamb (Rev 5):</strong> The risen Christ who was &ldquo;slain&rdquo; &mdash; the paradox of weakness that is ultimate power</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* The Millennium */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-purple-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Millennium (Rev 20:1&ndash;6)</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Revelation 20:1&ndash;6 describes Satan being bound for a thousand years while
                those who had been beheaded for their testimony &ldquo;came to life and reigned
                with Christ for a thousand years.&rdquo; This is the most contested passage in all
                of Revelation. Three main interpretive traditions have developed around it.
              </p>

              <div className="grid sm:grid-cols-3 gap-4 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2 text-sm">Premillennialism</h4>
                  <p className="text-blue-800 text-sm">Christ returns <em>before</em> the millennium and literally reigns 1,000 years on earth from Jerusalem. Popular in Protestant evangelical circles, especially Dispensationalism.</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2 text-sm">Amillennialism (Catholic Mainstream)</h4>
                  <p className="text-green-800 text-sm">The &ldquo;1,000 years&rdquo; symbolizes the <em>current</em> Church age; Christ already reigns through the Church; Satan is &ldquo;bound&rdquo; in the sense that the Gospel can spread to all nations.</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2 text-sm">Postmillennialism</h4>
                  <p className="text-purple-800 text-sm">The Gospel gradually Christianizes the world; a golden age precedes Christ&rsquo;s return. Less common in contemporary Catholic thought.</p>
                </div>
              </div>

              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-red-900 mb-3">
                  The Catholic Magisterium: CCC 676
                </h3>
                <p className="text-red-800 italic mb-3">
                  &ldquo;The Antichrist&rsquo;s deception already begins to take shape in the world
                  every time the claim is made to realize within history that messianic hope which
                  can only be realized beyond history through the eschatological judgement. The Church
                  has rejected even modified forms of this falsification of the kingdom to come under
                  the name of millenarianism.&rdquo;
                </p>
                <p className="text-red-700 text-sm">&mdash; CCC 676</p>
              </div>
            </div>
          </div>
        )}

        {/* ==================== TAB 5: MISTAKES TO AVOID ==================== */}
        {activeTab === 'mistakes-to-avoid' && (
          <div className="space-y-8">
            {/* Fundamentalism */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-red-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Fundamentalism / Hyper-Literalism</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The most common interpretive error in popular culture is reading apocalyptic
                literature as if it were a newspaper &mdash; treating symbolic numbers as literal,
                symbolic beasts as identifiable political entities, and the visionary sequences as
                a chronological timeline of future events. This approach ignores the historical and
                literary context in which God chose to communicate.
              </p>

              <div className="bg-red-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-red-900 mb-3">
                  The PBC&rsquo;s Judgment (1993)
                </h3>
                <p className="text-red-800 italic mb-3">
                  &ldquo;The fundamentalist approach is dangerous, for it is attractive to people
                  who look to the Bible for ready answers to the problems of life. It can deceive
                  these people, offering them interpretations that are pious but illusory, instead
                  of telling them that the Bible does not necessarily contain an immediate answer
                  to each and every problem. Without saying as much in so many words, fundamentalism
                  actually invites people to a kind of intellectual suicide.&rdquo;
                </p>
                <p className="text-red-700 text-sm">
                  &mdash; Pontifical Biblical Commission, <em>The Interpretation of the Bible in the Church</em> (1993), I.F
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                The practical consequences of hyper-literalism in prophecy interpretation have been
                severe: repeated prediction failures, sensationalism, and people making costly life
                decisions based on false timelines. Examples of failed predictions: William Miller
                (Baptist, 1844), Charles Russell (Jehovah&rsquo;s Witnesses, 1914), Harold Camping
                (1994, 2011). Every failed prediction further damages the credibility of
                Christian witness.
              </p>
            </div>

            {/* Newspaper Exegesis */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <Newspaper className="w-6 h-6 text-red-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Newspaper Exegesis Fallacy</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Closely related to fundamentalism is the practice of reading Revelation (or Daniel,
                or Matthew 24) as a coded map of current events &mdash; finding the
                &ldquo;Antichrist&rdquo; in each successive political figure and the &ldquo;Mark
                of the Beast&rdquo; in each new technology. This approach treats the Bible as an
                oracle aimed at our own historical moment rather than a book addressed first to
                its original audience.
              </p>

              <div className="bg-red-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-red-900 mb-3">
                  A Recurring Pattern of Failure
                </h3>
                <p className="text-red-800 mb-3">
                  Historical figures identified by various interpreters as &ldquo;the
                  Antichrist&rdquo; or &ldquo;the Beast&rdquo;: Napoleon, Kaiser Wilhelm, Hitler,
                  Stalin, Mussolini, Henry Kissinger, Pope John Paul II, Ronald Reagan, various
                  US Presidents, the European Union, the United Nations, barcodes, RFID chips,
                  and COVID-19 vaccines &mdash; all identified and all wrong. The identification
                  is always contemporary; it always fails when the figure passes.
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed">
                The Catholic principle: Revelation was written for its original first-century
                audience; its primary referent was the Roman Empire. Its universal message &mdash;
                God wins; the powers of oppression fall; bear up under persecution &mdash; applies
                to every age without requiring a specific decoded political map.
              </p>
            </div>

            {/* Rapture */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <XCircle className="w-6 h-6 text-red-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Separating &ldquo;Rapture&rdquo; from Biblical Text</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The &ldquo;Rapture&rdquo; &mdash; the pre-Tribulation secret disappearance of
                Christians before the end &mdash; is not found in Catholic tradition, in Eastern
                Orthodox tradition, or in any Protestant theology before the 1830s. It originates
                with John Nelson Darby (Plymouth Brethren, c. 1830&ndash;1835), based on a
                particular reading of 1 Thess 4:17 (&ldquo;caught up together in the clouds to meet
                the Lord in the air&rdquo;).
              </p>

              <div className="bg-red-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-red-900 mb-3">
                  The Catholic Reading of 1 Thess 4:17
                </h3>
                <p className="text-red-800 mb-3">
                  The phrase &ldquo;meeting in the air&rdquo; (<em>apant&#275;sis</em>) refers to a
                  Roman civic custom: when a dignitary or emperor was arriving at a city, the
                  citizens went out <em>to meet</em> him and then escort him back into the city.
                  Paul&rsquo;s image is a royal reception of the returning Christ, not a secret
                  escape from tribulation. No Church Father, no medieval theologian, no
                  Reformer taught a pre-Tribulation Rapture.
                </p>
              </div>
            </div>

            {/* Over-spiritualizing */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Over-Spiritualizing / De-Historicizing</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The opposite error is treating all eschatological language as purely spiritual or
                metaphorical, with no real future reference. Some liberal Protestant and progressive
                Catholic thinkers have reduced the Second Coming to a metaphor for moral progress,
                or the resurrection to a symbol for spiritual renewal rather than a bodily event.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">
                  Catholic Teaching: Real Future Events
                </h3>
                <p className="text-blue-800 mb-3">
                  Catholic teaching firmly maintains: the Second Coming (Parousia) is a real future
                  event in history&rsquo;s culmination; the bodily resurrection of the dead is real;
                  the Last Judgment is real; the New Creation is real. These are not metaphors
                  for progress &mdash; they are the content of Christian hope.
                </p>
                <p className="text-blue-700 text-sm">&mdash; CCC 647, 988&ndash;991, 1038&ndash;1041</p>
              </div>
            </div>
          </div>
        )}

        {/* ==================== TAB 6: CATHOLIC HERMENEUTICS ==================== */}
        {activeTab === 'catholic-hermeneutics' && (
          <div className="space-y-8">
            {/* Catholic Approach */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Scale className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Catholic Approach to Apocalyptic Texts</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The Catholic Church&rsquo;s approach to apocalyptic literature is neither hyper-literal
                nor purely allegorical. It reads these texts within the whole of Scripture and
                Tradition, attends to their historical context, and applies the Church&rsquo;s
                interpretive principles consistently. Five key principles govern the approach.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">Five Catholic Interpretive Principles</h3>
                <ol className="text-amber-800 space-y-2 text-sm list-decimal list-inside">
                  <li>Read within the whole of Scripture and Tradition &mdash; no isolated proof-texts</li>
                  <li>Identify the literary genre (CCC 116; <em>Dei Verbum</em> 12): apocalyptic is not history or prediction-chart</li>
                  <li>Attend to the historical context: who wrote it, to whom, and in what crisis situation</li>
                  <li>Apply the four senses: literal (original audience), allegorical (christological meaning), moral (ethical application), anagogical (final destination of history)</li>
                  <li>Trust the Church&rsquo;s interpretive tradition, particularly the Fathers and the Councils</li>
                </ol>
              </div>
            </div>

            {/* Key Magisterial Guidance */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <ScrollText className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Key Magisterial Guidance</h2>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">
                  <em>Dei Verbum</em> 12 (Vatican II, 1965)
                </h3>
                <p className="text-blue-800 italic mb-3">
                  &ldquo;The interpreter of sacred Scripture, in order to see clearly what God wanted
                  to communicate to us, should carefully investigate what meaning the sacred writers
                  really intended, and what God wanted to manifest by means of their words. In
                  determining the intention of the sacred writers, attention must be paid, among other
                  things, to literary genres.&rdquo;
                </p>
                <p className="text-blue-700 text-sm">&mdash; <em>Dei Verbum</em> 12</p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">
                  Pontifical Biblical Commission (1993)
                </h3>
                <p className="text-blue-800 mb-3">
                  The PBC&rsquo;s landmark document <em>The Interpretation of the Bible in the
                  Church</em> warns explicitly against &ldquo;fundamentalist interpretation&rdquo;
                  which &ldquo;does not take into account the historical character of biblical
                  revelation&rdquo; and &ldquo;makes itself look deceptively attractive to people
                  who look to the Bible for ready answers to the problems of life.&rdquo;
                </p>
              </div>

              <div className="bg-red-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-red-900 mb-3">CCC 676: Against Millenarianism</h3>
                <p className="text-red-800 italic mb-3">
                  &ldquo;The Church has rejected even modified forms of this falsification of the
                  kingdom to come under the name of millenarianism, especially the &lsquo;intrinsically
                  perverse&rsquo; political form of a secular messianism.&rdquo;
                </p>
                <p className="text-red-700 text-sm">&mdash; CCC 676</p>
              </div>
            </div>

            {/* Church Fathers on Revelation */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Quote className="w-6 h-6 text-purple-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Church Fathers on Revelation</h2>
              </div>

              <div className="space-y-4">
                <div className="bg-purple-50 p-5 rounded-lg">
                  <h3 className="text-base font-semibold text-purple-900 mb-2">Justin Martyr (d. ~165 AD)</h3>
                  <p className="text-purple-800 text-sm">
                    One of the earliest commentators on Revelation; anticipated a literal millennium.
                    This early premillennialism was widespread in the 2nd century but declined as the
                    Church developed a more sophisticated scriptural hermeneutic.
                  </p>
                </div>

                <div className="bg-purple-50 p-5 rounded-lg">
                  <h3 className="text-base font-semibold text-purple-900 mb-2">Origen (~184&ndash;253 AD)</h3>
                  <p className="text-purple-800 text-sm">
                    Championed allegorical interpretation throughout Scripture; warned consistently
                    against hyper-literalism in prophetic texts. His approach to Revelation was
                    primarily symbolic and spiritual.
                  </p>
                </div>

                <div className="bg-purple-50 p-5 rounded-lg">
                  <h3 className="text-base font-semibold text-purple-900 mb-2">St. Augustine, <em>City of God</em> Book XX (~420 AD)</h3>
                  <p className="text-purple-800 text-sm">
                    The most influential reading of Revelation in Catholic history. Augustine
                    established the amillennialist interpretation that has been dominant in Catholicism
                    ever since: the &ldquo;1,000 years&rdquo; symbolizes the Church age from the
                    Incarnation to the Parousia; the &ldquo;first resurrection&rdquo; is spiritual
                    regeneration (baptism and conversion), not a literal bodily event.
                  </p>
                </div>

                <div className="bg-purple-50 p-5 rounded-lg">
                  <h3 className="text-base font-semibold text-purple-900 mb-2">St. Jerome (d. 420 AD)</h3>
                  <p className="text-purple-800 text-sm">
                    Warned against the Millenarians (premillennialists) of his day. His objections,
                    combined with Augustine&rsquo;s positive alternative, effectively ended mainstream
                    premillennialism in Catholic theology for over a millennium.
                  </p>
                </div>
              </div>
            </div>

            {/* Approved Reading Resources */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Approved Reading Resources</h2>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-amber-50 p-5 rounded-lg">
                  <h3 className="text-base font-semibold text-amber-900 mb-3">Magisterial Documents</h3>
                  <ul className="text-amber-800 text-sm space-y-2">
                    <li><em>Catechism of the Catholic Church</em>, 668&ndash;682, 1020&ndash;1060</li>
                    <li><em>Dei Verbum</em> (Vatican II, 1965)</li>
                    <li>Pontifical Biblical Commission, <em>The Interpretation of the Bible in the Church</em> (1993)</li>
                    <li>Augustine, <em>City of God</em>, Book XX</li>
                  </ul>
                </div>
                <div className="bg-amber-50 p-5 rounded-lg">
                  <h3 className="text-base font-semibold text-amber-900 mb-3">Scholarly Works</h3>
                  <ul className="text-amber-800 text-sm space-y-2">
                    <li>Joseph Ratzinger / Benedict XVI, <em>Eschatology: Death and Eternal Life</em> (CUA Press, 1988)</li>
                    <li>N.T. Wright, <em>Surprised by Hope</em> (HarperOne, 2008)</li>
                    <li>G.K. Beale, <em>The Book of Revelation</em> (NIGTC, 1999)</li>
                    <li>Raymond Brown, <em>An Introduction to the New Testament</em> (Doubleday, 1997)</li>
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
