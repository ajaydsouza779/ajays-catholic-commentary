'use client'

import { useState } from 'react'
import {
  BookOpen,
  AlertTriangle,
  Scale,
  Globe,
  Star,
  Heart,
  Users,
  Flame,
  Wind,
  Search,
  ArrowRight,
  Compass,
  Sunrise,
  Cross,
} from 'lucide-react'

type TabId =
  | 'four-last-things'
  | 'after-death'
  | 'second-coming'
  | 'heaven-hell'
  | 'final-judgment'
  | 'new-creation'

const tabs: { id: TabId; label: string }[] = [
  { id: 'four-last-things', label: 'The Four Last Things' },
  { id: 'after-death', label: 'After Death' },
  { id: 'second-coming', label: 'The Second Coming' },
  { id: 'heaven-hell', label: 'Heaven & Hell' },
  { id: 'final-judgment', label: 'The Final Judgment' },
  { id: 'new-creation', label: 'The New Creation' },
]

export default function EschatologyOverviewPage() {
  const [activeTab, setActiveTab] = useState<TabId>('four-last-things')

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Catholic Teaching on End Times
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Eschatology &mdash; the theology of &ldquo;last things&rdquo; &mdash; is not a peripheral Catholic
            obsession but the horizon that gives Christian life its ultimate meaning. Death, Judgment,
            Heaven, Hell, the Second Coming, and the New Creation are not speculation: they are
            revealed truths that the Church has taught, defended, and refined across two thousand
            years. This page presents the Catholic understanding of End Times &mdash; grounded in
            Scripture, the Catechism, the Church Fathers, and modern papal teaching.
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

        {/* ==================== TAB 1: THE FOUR LAST THINGS ==================== */}
        {activeTab === 'four-last-things' && (
          <div className="space-y-8">

            {/* Card 1: The Church's Eschatological Framework */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Compass className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Church&rsquo;s Eschatological Framework</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Eschatology is the branch of theology concerned with &ldquo;last things&rdquo; &mdash; from the
                Greek <em>eschaton</em>, meaning &ldquo;last&rdquo; or &ldquo;final.&rdquo; It encompasses
                everything that Catholic theology teaches about death, judgment, and ultimate destiny.
                Rather than a morbid fixation on endings, eschatology is the lens through which the
                whole of Christian life finds its orientation: every human story has a final chapter,
                and that chapter is not nothing.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                The traditional Catholic summary of eschatology is the <strong>Four Last Things</strong>:
                Death, Judgment, Heaven, and Hell. To these classical four, Catholic tradition commonly
                adds Purgatory as the state of those who die in God&rsquo;s grace but still require
                purification before entering the fullness of heaven. Medieval spiritual directors
                popularized the maxim drawn from Sirach 7:36: <em>&ldquo;In all your works remember your
                last end, and you will never sin.&rdquo;</em> The <em>Ars Moriendi</em> tradition
                &mdash; the &ldquo;Art of Dying Well&rdquo; literature of the 14th and 15th centuries
                &mdash; turned this into an entire pastoral program for preparing Catholics for a holy
                death.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">
                  The Four Last Things
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold text-amber-800 mb-1">1. Death</p>
                    <p className="text-amber-700 text-sm">The separation of soul from body; the sealing of one&rsquo;s fundamental choice.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-amber-800 mb-1">2. Judgment</p>
                    <p className="text-amber-700 text-sm">Both the particular judgment (at death) and the general judgment (at the Last Day).</p>
                  </div>
                  <div>
                    <p className="font-semibold text-amber-800 mb-1">3. Heaven</p>
                    <p className="text-amber-700 text-sm">The direct vision of God and perfect communion with the Trinity and all the blessed.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-amber-800 mb-1">4. Hell</p>
                    <p className="text-amber-700 text-sm">The eternal consequence of a definitive, unrevoked rejection of God&rsquo;s love.</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">
                  Catechism of the Catholic Church
                </h3>
                <p className="text-blue-800 italic mb-2">
                  &ldquo;Each man receives his eternal retribution in his immortal soul at the very moment
                  of his death, in a particular judgment that refers his life to Christ: either entrance
                  into the blessedness of heaven &mdash; through a purification or immediately &mdash;
                  or immediate and everlasting damnation.&rdquo;
                </p>
                <p className="text-blue-700 text-sm">&mdash; CCC 1022</p>
              </div>

              <p className="text-gray-700 leading-relaxed">
                The Four Last Things are not meant to terrify but to <em>orient</em>. They remind us
                that every human life has an eternal destination, that history is not cyclical but
                linear and purposeful, and that the choices we make in this life carry ultimate weight.
                Far from producing scrupulosity or fear, a healthy Catholic eschatology produces
                freedom: when we know where we are going, we know how to live.
              </p>
            </div>

            {/* Card 2: Death */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Cross className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Death: The Gateway, Not the End</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                For the Christian, death is not annihilation. It is a transformation &mdash; the
                separation of body and soul that opens into eternity. The Catechism teaches: &ldquo;Because
                of Christ, Christian death has a positive meaning&rdquo; (CCC 1010). Death entered
                human history through sin (Genesis 3; Romans 5:12), but Christ transformed it by
                passing through it and rising from the dead. For the baptized, death has become the
                final conformity to Christ in His Paschal Mystery.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                At death, the soul is separated from the body. The soul retains its individual
                identity and faces the <strong>Particular Judgment</strong> immediately &mdash; not
                after a period of &ldquo;soul sleep&rdquo; (a Protestant notion rejected by Catholic
                teaching), not after some intermediate unconscious state, but at the very moment of
                death. The body, meanwhile, returns to the earth and awaits the bodily resurrection
                at the Last Day.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">
                  Why Death Is the Critical Moment
                </h3>
                <p className="text-amber-800 mb-3">
                  Death &ldquo;seals&rdquo; the fundamental option a person has made for or against God. This is
                  why the Church has always taken preparation for death seriously. The traditional
                  practice of receiving the Last Rites &mdash; Confession, Anointing of the Sick, and
                  Viaticum (final Eucharist) &mdash; exists precisely to prepare the soul for this
                  decisive passage.
                </p>
                <p className="text-amber-700 text-sm">
                  &mdash; Cf. CCC 1021: &ldquo;Death puts an end to human life as the time open to either
                  accepting or rejecting the divine grace manifested in Christ.&rdquo;
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                CCC 1016 reminds us: &ldquo;The Church encourages us to prepare ourselves for the hour of
                our death&hellip; so that now we may decide and then may act in a way that will give
                glory to God, and thus obtain the crown of life.&rdquo; The Catholic tradition does not
                treat death as unmentionable; it treats death as the most important appointment every
                human being will keep.
              </p>

              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-purple-900 mb-3">
                  The <em>Ars Moriendi</em> Tradition
                </h3>
                <p className="text-purple-800 mb-3">
                  The <em>Ars Moriendi</em> (&ldquo;Art of Dying Well&rdquo;) literature of the late medieval
                  period &mdash; widely circulated after the Black Death of the 14th century &mdash;
                  provided ordinary Catholics with spiritual preparation for death. These texts
                  addressed the five temptations of the dying (against faith, hope, patience,
                  pride, and avarice) and the corresponding graces. They remain astonishingly
                  relevant today, recovered by modern spiritual directors as a resource for
                  contemporary pastoral care of the dying.
                </p>
                <p className="text-purple-700 text-sm">
                  &mdash; Cf. Thomas &agrave; Kempis, <em>The Imitation of Christ</em>, Book I, ch. 23:
                  &ldquo;Very soon your life here will end; consider, then, what may be in store for
                  you elsewhere.&rdquo;
                </p>
              </div>
            </div>

            {/* Card 3: Judgment */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Scale className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Judgment: Particular and General</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Catholic theology distinguishes two judgments, both real, both important: the
                <strong> Particular Judgment</strong> and the <strong>General (Last) Judgment</strong>.
                These are not redundant but complementary, addressing different dimensions of the
                moral truth of a human life.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-900 mb-3">The Particular Judgment</h3>
                  <p className="text-blue-800 text-sm mb-3">
                    Occurs at the moment of death for each individual soul. The soul faces Christ
                    immediately and receives its definitive sentence: heaven (directly or through
                    Purgatory) or hell. No further opportunity to change one&rsquo;s fundamental
                    orientation exists after this point.
                  </p>
                  <p className="text-blue-700 text-sm italic">
                    &ldquo;Each man receives his eternal retribution in his immortal soul at the very
                    moment of his death.&rdquo; &mdash; CCC 1022
                  </p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-900 mb-3">The General (Last) Judgment</h3>
                  <p className="text-blue-800 text-sm mb-3">
                    Occurs at the end of history, at the Parousia (Second Coming). The body is
                    resurrected and reunited with the soul. The full moral truth of every life &mdash;
                    and of all human history &mdash; is revealed publicly before all creation.
                  </p>
                  <p className="text-blue-700 text-sm italic">
                    &ldquo;The resurrection of all the dead will precede the Last Judgment.&rdquo;
                    &mdash; CCC 1038
                  </p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Why does the Church teach both? The particular judgment is <em>personal and private</em>:
                it is the moment each soul stands before God. The general judgment is
                <em> cosmic and public</em>: it is the moment when the complete picture of history is
                made manifest before all creation, when God&rsquo;s justice and mercy are fully vindicated,
                and when the hidden good and hidden evil of every life is revealed. The general
                judgment does not change the verdict of the particular judgment &mdash; it reveals and
                confirms it before all.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">
                  The Criterion: Matthew 25
                </h3>
                <p className="text-amber-800 mb-3">
                  Matthew 25:31&ndash;46 &mdash; the parable of the sheep and the goats &mdash; is the
                  New Testament&rsquo;s most explicit description of the Last Judgment. Its criterion is
                  striking: concrete love for &ldquo;the least of these&rdquo; (the hungry, thirsty, stranger,
                  naked, sick, imprisoned) is identified with service to Christ Himself. The judgment
                  is not primarily about religious observance but about whether one&rsquo;s inner life
                  of charity expressed itself outward in acts of mercy.
                </p>
                <p className="text-amber-700 text-sm">
                  &mdash; Cf. CCC 1039: &ldquo;In the presence of Christ, who is Truth itself, the truth
                  of each man&rsquo;s relationship with God will be laid bare.&rdquo;
                </p>
              </div>
            </div>

            {/* Card 4: Heaven */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Heaven: The Beatific Vision</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Heaven is not a vague spiritual state of contentment or a metaphor for psychological
                peace. The Catholic Church teaches that heaven is the direct, unmediated vision of
                God&rsquo;s very essence &mdash; the <strong>Beatific Vision</strong> (from Latin
                <em> visio beatifica</em>: &ldquo;the blessed seeing&rdquo;). It is not a vision of a
                representation of God but of God as He is in Himself, which the intellect of the soul
                is supernaturally elevated to receive.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">
                  CCC on Heaven
                </h3>
                <p className="text-amber-800 italic mb-2">
                  &ldquo;Those who die in God&rsquo;s grace and friendship and are perfectly purified live
                  forever with Christ. They see God face-to-face.&rdquo;
                </p>
                <p className="text-amber-700 text-sm mb-3">&mdash; CCC 1023</p>
                <p className="text-amber-800 italic mb-2">
                  &ldquo;This perfect life with the Most Holy Trinity &mdash; this communion of life and
                  love with the Trinity, with the Virgin Mary, the angels and all the blessed &mdash;
                  is called &lsquo;heaven.&rsquo;&rdquo;
                </p>
                <p className="text-amber-700 text-sm">&mdash; CCC 1024</p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Heaven includes the Beatific Vision; full communion with the Trinity; the joyful
                reunion with all those who have died in Christ; the company of the angels and saints;
                and perfect joy without the possibility of loss. But critically, heaven is also
                ultimately <em>embodied</em>: after the resurrection of the body at the Last Day, the
                glorified body is reunited with the soul, and heaven becomes the eternal existence of
                whole persons &mdash; body and soul &mdash; in God.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Thomas Aquinas, in the <em>Summa Theologiae</em> Supplement (QQ. 69&ndash;72), described
                the properties of the glorified body: <strong>impassibility</strong> (freedom from
                suffering, hunger, illness), <strong>subtlety</strong> (the body is fully subject to
                the soul&rsquo;s direction), <strong>agility</strong> (movement is effortless),
                and <strong>clarity</strong> (the body radiates the soul&rsquo;s interior glory). These
                properties are modeled on the appearances of the risen Christ, who could pass through
                locked doors (John 20:19) yet was genuinely physical (Luke 24:39&ndash;43).
              </p>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">
                  Benedict XVI on Christian Hope
                </h3>
                <p className="text-blue-800 italic mb-2">
                  &ldquo;The present moment is not the totality; the future belongs to God; and therefore
                  we can bear to live in the present as it is.&rdquo;
                </p>
                <p className="text-blue-700 text-sm">
                  &mdash; Pope Benedict XVI, <em>Spe Salvi</em> (2007)
                </p>
              </div>
            </div>

            {/* Card 5: Hell */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-red-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Hell: The Reality of Damnation</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Hell is one of the most uncomfortable doctrines in Catholic teaching &mdash; and one
                of the most consistently attested, both in the New Testament and in the unbroken
                Tradition of the Church. No speaker in the NT warns of hell more frequently or more
                vividly than Jesus Himself: Matthew 5:22, 29&ndash;30; 10:28; 13:41&ndash;42; 23:33;
                25:41, 46; Mark 9:43&ndash;48. To soften or spiritualize these warnings into
                irrelevance is not to follow Jesus but to edit Him.
              </p>

              <div className="bg-red-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-red-900 mb-3">
                  What the Church Teaches About Hell
                </h3>
                <ul className="text-red-800 space-y-2 text-sm">
                  <li><strong>Hell is real</strong> &mdash; CCC 1035: &ldquo;The teaching of the Church affirms the existence of hell and its eternity.&rdquo;</li>
                  <li><strong>Hell is eternal</strong> &mdash; Matthew 25:46 speaks of &ldquo;eternal punishment&rdquo; in explicit parallel with &ldquo;eternal life.&rdquo;</li>
                  <li><strong>Hell is freely chosen</strong> &mdash; God predestines no one to hell; damnation requires a willful, unrevoked rejection of God (CCC 1037).</li>
                  <li><strong>Hell is separation from God</strong> &mdash; &ldquo;The chief punishment of hell is eternal separation from God.&rdquo; (CCC 1035)</li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                C.S. Lewis&rsquo;s image from <em>The Great Divorce</em> captures the Catholic
                understanding well: &ldquo;The door of hell is locked on the inside.&rdquo; Hell is
                not God&rsquo;s revenge or a sadistic torture chamber; it is the logical consequence of a
                definitive, final choice to reject the One who is Love itself. The damned do not want
                heaven &mdash; they have permanently turned away from what heaven IS.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                What hell is <em>not</em>: it is not annihilation (the Catholic teaching firmly
                rejects <em>annihilationism</em> &mdash; the idea that the soul simply ceases to exist
                at death or at the Last Judgment). The soul is immortal; the separation is real and
                permanent. Nor has the Church ever officially declared any specific person to be in
                hell. The possibility of damnation is real; the actuality for any particular person
                remains hidden with God.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">
                  Hell and Human Freedom
                </h3>
                <p className="text-amber-800 mb-3">
                  CCC 1033: &ldquo;We cannot be united with God unless we freely choose to love him. But
                  we cannot love God if we sin gravely against him, against our neighbor or against
                  ourselves.&rdquo; Hell is the serious Catholic answer to the question: Can a
                  creature really say &ldquo;No&rdquo; to God forever? The Church&rsquo;s answer is yes &mdash;
                  because genuine love requires genuine freedom, and genuine freedom implies the
                  terrifying possibility of a final refusal.
                </p>
                <p className="text-amber-700 text-sm">
                  &mdash; Cf. CCC 1037: &ldquo;God predestines no one to go to hell; for this, a willful
                  turning away from God (a mortal sin) is necessary, and persistence in it until the
                  end.&rdquo;
                </p>
              </div>
            </div>

          </div>
        )}

        {/* ==================== TAB 2: AFTER DEATH ==================== */}
        {activeTab === 'after-death' && (
          <div className="space-y-8">

            {/* Card 1: Purgatory */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Flame className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Purgatory: The Church&rsquo;s Teaching</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Purgatory is one of the doctrines most misunderstood by non-Catholics &mdash; and
                sometimes by Catholics themselves. It is neither a &ldquo;second chance&rdquo; for those who
                definitively rejected God, nor a kind of prolonged hell with an exit. Purgatory is
                for those who are already saved &mdash; who died in God&rsquo;s grace and friendship &mdash;
                but who are not yet fully purified to stand in the direct presence of God.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">
                  Catechism Definition
                </h3>
                <p className="text-blue-800 italic mb-2">
                  &ldquo;All who die in God&rsquo;s grace and friendship, but still imperfectly purified,
                  are indeed assured of their eternal salvation; but after death they undergo
                  purification, so as to achieve the holiness necessary to enter the joy of heaven.&rdquo;
                </p>
                <p className="text-blue-700 text-sm">&mdash; CCC 1030</p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Three things are essential to understand: First, those in purgatory are
                <em> certain</em> of salvation &mdash; they are not in danger of hell. Second, purgatory
                is not a place of meriting or &ldquo;earning&rdquo; salvation but of completing the
                transformation that grace has already begun. Third, the living can assist the souls
                in purgatory through prayer, Mass offerings, and indulgences &mdash; because we are
                all members of one Body of Christ.
              </p>

              <div className="bg-purple-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-purple-900 mb-3">
                  Scriptural Foundations
                </h3>
                <ul className="text-purple-800 space-y-3 text-sm">
                  <li>
                    <strong>2 Maccabees 12:44&ndash;46</strong>: Judas Maccabeus orders prayers and
                    sacrifices for fallen soldiers, &ldquo;for if he were not expecting that those who
                    had fallen would rise again, it would have been superfluous and foolish to pray
                    for the dead.&rdquo; (Note: Protestants exclude 2 Maccabees from their canon, which
                    is partly why they reject purgatory.)
                  </li>
                  <li>
                    <strong>1 Corinthians 3:15</strong>: Paul describes someone whose work is
                    &ldquo;burned up&rdquo; yet &ldquo;he himself will be saved, but only as through fire.&rdquo;
                    The Fathers consistently read this as a purgatorial purification.
                  </li>
                  <li>
                    <strong>Matthew 12:32</strong>: Jesus says a certain sin &ldquo;will not be forgiven
                    either in this age or in the age to come&rdquo; &mdash; implying some sins
                    <em> can</em> be forgiven in the age to come.
                  </li>
                </ul>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">
                  Conciliar Definition
                </h3>
                <p className="text-amber-800 mb-3">
                  The Council of Florence (1439) and the Council of Trent (1563) formally defined
                  purgatory as a doctrine of the Church. Trent added that prayers, Masses, and
                  indulgences for the dead are &ldquo;in accord with Apostolic tradition&rdquo; and
                  are genuinely beneficial to the souls of the departed. The continuous practice of
                  praying for the dead, attested in Christian inscriptions from the catacombs onward,
                  undergirds the theological teaching.
                </p>
                <p className="text-amber-700 text-sm">
                  &mdash; Council of Trent, Session XXV; CCC 1031&ndash;1032
                </p>
              </div>
            </div>

            {/* Card 2: The Soul After Death */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Wind className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Soul After Death</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                At death, the soul is separated from the body but continues to exist as the same
                individual person. This is not, however, the soul&rsquo;s completed or ideal state:
                the soul without the body is incomplete, which is why the resurrection of the body
                is not a peripheral doctrine but absolutely central to Christian hope.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">
                  What the Catechism Teaches About the Soul
                </h3>
                <ul className="text-amber-800 space-y-2 text-sm">
                  <li>The soul is naturally immortal &mdash; not by its own power but by God&rsquo;s design and gift (CCC 366).</li>
                  <li>The soul retains the identity, memories, and moral character developed in earthly life.</li>
                  <li>The soul does NOT &ldquo;sleep&rdquo; &mdash; soul sleep (<em>psychopannychism</em>) is a Protestant idea rejected by Catholic teaching.</li>
                  <li>The soul without the body is genuinely incomplete: &ldquo;the soul is not the whole human being&rdquo; (CCC 997, cf. Aquinas).</li>
                  <li>The soul awaits the resurrection of the body, when person is fully restored.</li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                A common pastoral question: do the souls in heaven or purgatory know what is
                happening on earth? The Church does not define this precisely. However, the
                tradition (and CCC 956 on the intercession of the saints) implies that the saints
                in heaven are aware of and genuinely engaged in the lives of the faithful on earth,
                as members of the same Body of Christ.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">
                  Benedict XVI: On the Transformed Self
                </h3>
                <p className="text-blue-800 italic mb-2">
                  &ldquo;There is no self-encounter without an encounter with God&hellip; We need to let
                  ourselves be touched by God. In death, this encounter with the truth of our
                  own life cleanses and transforms us.&rdquo;
                </p>
                <p className="text-blue-700 text-sm">
                  &mdash; Pope Benedict XVI, <em>Spe Salvi</em>, &sect;47 (2007)
                </p>
              </div>
            </div>

            {/* Card 3: Communion of Saints */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-green-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Communion of Saints</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The Apostles&rsquo; Creed includes belief in &ldquo;the communion of saints&rdquo; &mdash;
                one of the most beautiful and consoling doctrines of Catholic Christianity. It teaches
                that the Church is not merely the living community gathered in parishes on Sunday
                morning; the Church includes all who belong to Christ, whether they are still living,
                in purgatory, or fully alive in heaven.
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-green-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-2">The Church Militant</h3>
                  <p className="text-green-800 text-sm">
                    Christians still living on earth, engaged in the spiritual battle of discipleship.
                    We pray for the dead and ask the saints&rsquo; intercession.
                  </p>
                </div>
                <div className="bg-blue-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-2">The Church Suffering</h3>
                  <p className="text-blue-800 text-sm">
                    Souls in purgatory, undergoing purification. They can receive the benefit of
                    our prayers but cannot pray for themselves.
                  </p>
                </div>
                <div className="bg-amber-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-amber-900 mb-2">The Church Triumphant</h3>
                  <p className="text-amber-800 text-sm">
                    The blessed in heaven, who intercede for us before God and share in Christ&rsquo;s
                    eternal priestly intercession.
                  </p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                This is why Catholic prayer for the dead is not &ldquo;praying to the dead&rdquo; in some
                occult sense; it is asking God to help our fellow members of the Body of Christ who
                are in purgatory. Masses, rosaries, and indulgences for the dead are acts of charity
                within the Body &mdash; consistent with the deepest logic of Christian community.
              </p>

              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-purple-900 mb-3">
                  November: Month of the Holy Souls
                </h3>
                <p className="text-purple-800 mb-3">
                  The Church&rsquo;s liturgical calendar reflects this theology concretely. November 1
                  (All Saints Day) celebrates the Church Triumphant; November 2 (All Souls Day)
                  commemorates the Church Suffering. The entire month of November is traditionally
                  devoted to prayer for the dead. Catholic cemeteries, eternal rest prayers, and
                  Mass intentions for the deceased are not morbid customs but acts of love
                  animated by the doctrine of the communion of saints.
                </p>
                <p className="text-purple-700 text-sm">
                  &mdash; Cf. CCC 954&ndash;959: &ldquo;The union of the wayfarers with the brethren
                  who sleep in the peace of Christ is not in the least weakened or interrupted.&rdquo;
                </p>
              </div>
            </div>

          </div>
        )}

        {/* ==================== TAB 3: THE SECOND COMING ==================== */}
        {activeTab === 'second-coming' && (
          <div className="space-y-8">

            {/* Card 1: The Parousia */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Globe className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Parousia: What the Church Teaches</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The Greek word <em>parousia</em> (meaning &ldquo;presence,&rdquo; &ldquo;arrival,&rdquo; or
                &ldquo;coming&rdquo;) became the technical New Testament term for the glorious Second Coming
                of Christ (1 Thess 4:15&ndash;17; 2 Thess 2:1&ndash;8; 1 Cor 15:23; Matt 24:3, 27, 37, 39).
                The Parousia is not a metaphor for spiritual experience or social progress; it is the
                personal, visible, glorious return of Jesus Christ to judge the living and the dead
                and to bring all things to their final completion.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                The Nicene Creed confesses: <em>&ldquo;He will come again in glory to judge the living and
                the dead, and his kingdom will have no end.&rdquo;</em> This article of faith is not
                optional or metaphorical; it is among the most central affirmations of the Christian
                confession, repeated at every Mass.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">
                  The Three Characteristics of the Parousia
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-amber-800">1. Personal</p>
                    <p className="text-amber-700 text-sm">
                      Jesus Himself returns &mdash; not a spiritual force, not a symbolic event, not
                      a social movement. &ldquo;This same Jesus, who has been taken from you into heaven,
                      will come back in the same way you have seen him go.&rdquo; (Acts 1:11)
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-amber-800">2. Visible</p>
                    <p className="text-amber-700 text-sm">
                      The return will be unmistakable and universal: &ldquo;Every eye will see him,
                      even those who pierced him.&rdquo; (Rev 1:7); &ldquo;as lightning comes from the
                      east and flashes to the west, so will be the coming of the Son of Man.&rdquo;
                      (Matt 24:27)
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-amber-800">3. Glorious</p>
                    <p className="text-amber-700 text-sm">
                      The First Coming was hidden, humble, and scandalous in its lowliness. The Second
                      Coming will be &ldquo;in glory&rdquo; (Matt 25:31), with &ldquo;power and great glory&rdquo;
                      (Matt 24:30) &mdash; a total contrast.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">
                  The Church&rsquo;s Marana tha!
                </h3>
                <p className="text-blue-800 mb-3">
                  CCC 671: &ldquo;Though already present in his Church, Christ&rsquo;s reign is nevertheless
                  yet to be fully established with power and great glory by the King&rsquo;s return to earth.
                  This reign is still under attack by the evil powers.&rdquo; The Church&rsquo;s prayer
                  &ldquo;Marana tha!&rdquo; (&ldquo;Come, Lord Jesus!&rdquo; &mdash; 1 Cor 16:22; Rev 22:20;
                  Aramaic) is the oldest Christian prayer, expressing longing for the Parousia.
                  Far from apocalyptic anxiety, it is an act of love &mdash; the Bride longing for
                  the Bridegroom.
                </p>
              </div>
            </div>

            {/* Card 2: The Church's Caution About Dates */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-red-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">When? The Church&rsquo;s Caution About Dates</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Perhaps the most important thing to say about the timing of the Parousia is this:
                no one knows. Mark 13:32 (repeated in Matthew 24:36) is among the clearest statements
                in the Gospels: <em>&ldquo;But about that day or hour no one knows, not even the angels
                in heaven, nor the Son, but only the Father.&rdquo;</em> The Church takes this with complete
                seriousness. It is not a problem to be solved but a mystery to be accepted.
              </p>

              <div className="bg-red-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-red-900 mb-3">
                  A History of Failed Predictions
                </h3>
                <p className="text-red-800 text-sm mb-3">
                  Every generation has produced end-times date-setters. Every prediction has failed:
                </p>
                <ul className="text-red-800 text-sm space-y-2">
                  <li><strong>Montanus</strong> (c. 150s AD): Predicted the New Jerusalem would descend in Phrygia (modern Turkey). It did not.</li>
                  <li><strong>Joachim of Fiore</strong> (c. 1200): Predicted a new &ldquo;Age of the Spirit&rdquo; beginning around 1260. It did not begin.</li>
                  <li><strong>William Miller</strong> (1844): Predicted Christ&rsquo;s return on October 22, 1844 &mdash; the &ldquo;Great Disappointment&rdquo; that gave rise to Adventism.</li>
                  <li><strong>Harold Camping</strong> (1994, then 2011): Predicted the rapture twice. Neither occurred.</li>
                </ul>
                <p className="text-red-700 text-sm mt-3">
                  Every failed prediction has damaged faith, discredited Christianity, and caused
                  real pastoral harm to real people. The Church&rsquo;s consistent reserve on dates is
                  not timidity but wisdom.
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                CCC 673: &ldquo;The glorious Messiah&rsquo;s coming is suspended at every moment of history until
                his recognition by &lsquo;all Israel.&rsquo;&rdquo; This suggests that the timing is not calculable;
                it involves the mysterious unfolding of the history of salvation in ways that exceed
                our reckoning.
              </p>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-green-900 mb-3">
                  The Christian Response: Readiness, Not Calculation
                </h3>
                <p className="text-green-800 mb-3">
                  Matthew 24:44: &ldquo;So you also must be ready, because the Son of Man will come at
                  an hour when you do not expect him.&rdquo; The parable of the ten virgins (Matt 25:1&ndash;13)
                  makes the same point: readiness is the only appropriate response. The Church calls
                  Christians to live every day as if it could be the last &mdash; not in paralytic
                  anxiety but in the alert, loving, active watchfulness that is the posture of
                  faith.
                </p>
              </div>
            </div>

            {/* Card 3: Signs Preceding the Return */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Search className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Signs Preceding the Return</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The New Testament describes certain conditions that will precede or accompany the
                Parousia. The Church acknowledges these as genuine revelations, without pretending
                to know their precise timing or application to any specific historical moment.
                Identifying &ldquo;the signs of the times&rdquo; requires discernment, not calculation.
              </p>

              <div className="space-y-4 mb-6">
                <div className="bg-blue-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-2">1. Evangelization of All Nations</h3>
                  <p className="text-blue-800 text-sm">
                    Matthew 24:14: &ldquo;This gospel of the kingdom will be proclaimed throughout the
                    whole world as a testimony to all nations, and then the end will come.&rdquo;
                    The missionary mandate is eschatologically charged: the Church&rsquo;s global mission
                    is, in some sense, part of the preparation for the Parousia.
                  </p>
                </div>
                <div className="bg-blue-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-2">2. The Conversion of Israel</h3>
                  <p className="text-blue-800 text-sm">
                    Romans 11:25&ndash;26 speaks of &ldquo;the full number of the Gentiles&rdquo; coming in,
                    after which &ldquo;all Israel will be saved.&rdquo; CCC 674 speaks of &ldquo;a full
                    inclusion of the Jews in the Messiah&rsquo;s salvation, in the wake of the full number
                    of the Gentiles.&rdquo; This does not mean forced conversion; it is a mysterious
                    eschatological event in God&rsquo;s sovereign purpose.
                  </p>
                </div>
                <div className="bg-blue-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-2">3. The Final Trial and the Antichrist</h3>
                  <p className="text-blue-800 text-sm">
                    CCC 675&ndash;677: Before the Second Coming, the Church will pass through a final
                    testing that &ldquo;will shake the faith of many believers.&rdquo; This will involve
                    a deception centered on an &ldquo;Antichrist&rdquo; figure &mdash; a supreme religious
                    deception offering an apparent solution to human problems at the cost of apostasy.
                    CCC 676 explicitly warns that this will NOT be the Church&rsquo;s earthly triumph;
                    it rejects the millennialist idea that the Church will establish a golden age of
                    political power before the Parousia.
                  </p>
                </div>
              </div>

              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-red-900 mb-3">
                  What CCC 676 Explicitly Rejects
                </h3>
                <p className="text-red-800 mb-3">
                  CCC 676 warns: &ldquo;The Church has rejected even modified forms of this falsification
                  of the kingdom to come under the name of millenarianism, especially the
                  &lsquo;intrinsically perverse&rsquo; political form of a secular messianism.&rdquo; This
                  is a direct rejection of &ldquo;dominionist&rdquo; or &ldquo;Christian nationalist&rdquo;
                  theologies that expect the Church to seize political control and establish a golden
                  age before Christ&rsquo;s return. The Church&rsquo;s path to the Parousia passes through
                  the Cross, not through political triumph.
                </p>
              </div>
            </div>

          </div>
        )}

        {/* ==================== TAB 4: HEAVEN & HELL ==================== */}
        {activeTab === 'heaven-hell' && (
          <div className="space-y-8">

            {/* Card 1: Heaven More Than We Can Imagine */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Heaven: More Than We Can Imagine</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Every human attempt to describe heaven falls short &mdash; not because heaven is
                boring or empty but because it surpasses every category of human experience. Paul&rsquo;s
                word stands: &ldquo;No eye has seen, nor ear heard, nor the heart of man imagined, what
                God has prepared for those who love him&rdquo; (1 Cor 2:9).
              </p>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">
                  What Heaven Contains
                </h3>
                <ul className="text-amber-800 space-y-2 text-sm">
                  <li><strong>The Beatific Vision</strong>: The direct, unmediated knowledge of God as He knows Himself &mdash; not through a mirror, not through an intermediary, but face to face (1 Cor 13:12).</li>
                  <li><strong>Theosis (Divinization)</strong>: The soul is transformed, made capable of containing the vision of God by being made to share in the divine nature (2 Pet 1:4). &ldquo;God became man so that man might become God&rdquo; (Athanasius).</li>
                  <li><strong>Communion with the Trinity</strong>: Full participation in the trinitarian life of love between Father, Son, and Holy Spirit.</li>
                  <li><strong>Reunion with the blessed</strong>: The joy of reunion with all who have died in Christ &mdash; family, friends, all the saints.</li>
                  <li><strong>The Glorified Body</strong>: After the resurrection, eternal life is not disembodied &mdash; it is the full, transformed life of body and soul together.</li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                CCC 1026: &ldquo;By his death and Resurrection, Jesus Christ has &lsquo;opened&rsquo; heaven to us.
                The life of the blessed consists in the full and perfect possession of the fruits of
                the redemption accomplished by Christ.&rdquo;
              </p>

              <div className="bg-purple-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-purple-900 mb-3">
                  Aquinas on the Glorified Body
                </h3>
                <p className="text-purple-800 mb-3">
                  Thomas Aquinas (<em>Summa Theologiae</em>, Supplement, QQ. 69&ndash;72) identified
                  four gifts (or &ldquo;endowments&rdquo;) of the glorified body, modeled on the
                  appearances of the risen Christ: <strong>Impassibility</strong> (freedom from
                  suffering, fatigue, and death); <strong>Subtlety</strong> (the body fully obeys
                  the soul&rsquo;s direction); <strong>Agility</strong> (movement is effortless, as when
                  Christ appeared in the upper room through locked doors); and
                  <strong> Clarity</strong> (the body radiates the soul&rsquo;s interior glory, as at
                  the Transfiguration).
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">
                  Degrees of Beatitude
                </h3>
                <p className="text-blue-800 mb-3">
                  The Church teaches that while all in heaven possess the Beatific Vision, there
                  are degrees of its intensity corresponding to the degree of love and holiness
                  achieved in earthly life. This is not inequality in happiness but the
                  fulfillment of each person&rsquo;s unique capacity &mdash; like different sized vessels
                  all filled to the brim. CCC 1024 notes that each person&rsquo;s &ldquo;measure&rdquo; of
                  heaven is their own.
                </p>
              </div>
            </div>

            {/* Card 2: Is Heaven Certain for Specific People? */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-green-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Who Is in Heaven? Canonization and Salvation</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The Catholic Church&rsquo;s unique practice of <strong>canonization</strong> &mdash;
                formally declaring specific individuals to be in heaven &mdash; is a remarkable
                exercise of ecclesial authority rooted in the belief that God confirms His saints
                through miracles. With over 10,000 canonized saints, the Church&rsquo;s declaration is
                not that only these are in heaven but that these specifically have been recognized.
                The actual number of the blessed (Rev 7:9: &ldquo;a great multitude that no one could
                count&rdquo;) is beyond our knowing.
              </p>

              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-green-900 mb-3">
                  Paths to Salvation
                </h3>
                <ul className="text-green-800 space-y-2 text-sm">
                  <li><strong>Dying in God&rsquo;s grace</strong>: Those who have received baptism and lived in charity with God and neighbor.</li>
                  <li><strong>Perfect contrition</strong>: Those who, at death, repent with perfect sorrow motivated by love of God rather than fear of punishment.</li>
                  <li><strong>Baptism of blood</strong>: Martyrs who die for Christ before being able to receive water baptism.</li>
                  <li><strong>Baptism of desire</strong>: Those who sincerely seek God and intend to do whatever He wills, even without explicit knowledge of Christ.</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">
                  Salvation Outside the Church?
                </h3>
                <p className="text-blue-800 mb-3">
                  CCC 847&ndash;848 address the question of those who have never heard the Gospel:
                  &ldquo;Those who, through no fault of their own, do not know the Gospel of Christ or
                  his Church, but who nevertheless seek God with a sincere heart, and, moved by grace,
                  try in their actions to do his will as they know it through the dictates of their
                  conscience &mdash; those too may achieve eternal salvation.&rdquo;
                </p>
                <p className="text-blue-700 text-sm">
                  This is not universalism (all are automatically saved regardless of their choices);
                  it is the Church&rsquo;s affirmation that God&rsquo;s grace is not limited to those who
                  have visibly received the sacraments, while the Church remains the ordinary and
                  privileged channel of that grace.
                </p>
              </div>
            </div>

            {/* Card 3: Hell - The Logic of Eternal Loss */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-red-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Hell: The Logic of Eternal Loss</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Why is hell eternal? The philosophical question is not arbitrary. If God is love and
                desires all to be saved (1 Tim 2:4), why would damnation be permanent? The Catholic
                answer is: because a fundamental, unrevoked choice for evil becomes permanent at
                death. The soul has &ldquo;set&rdquo; in its direction. It is not that God refuses to
                let the damned in; it is that the damned have definitively rejected what heaven IS
                &mdash; union with the God they have permanently turned away from.
              </p>

              <div className="bg-red-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-red-900 mb-3">
                  Key Distinctions
                </h3>
                <ul className="text-red-800 space-y-2 text-sm">
                  <li><strong>Hell is not annihilation</strong>: The soul does not cease to exist. <em>Annihilationism</em> is not Catholic teaching.</li>
                  <li><strong>Hell is not purgatory</strong>: Those in purgatory are certain of salvation; those in hell are not.</li>
                  <li><strong>Hell is primarily separation</strong>: &ldquo;The chief punishment of hell is eternal separation from God.&rdquo; (CCC 1035) Physical imagery (&ldquo;fire&rdquo;) may be metaphorical; the separation is real.</li>
                  <li><strong>Hell requires free choice</strong>: CCC 1037 is explicit that God predestines no one to hell. Damnation requires a mortal sin and &ldquo;persistence in it until the end.&rdquo;</li>
                  <li><strong>No one confirmed in hell</strong>: The Church has never declared any specific person to be in hell. The possibility is real; the actuality for any individual remains with God&rsquo;s judgment.</li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Hans Urs von Balthasar&rsquo;s essay &ldquo;<em>Dare We Hope &lsquo;That All Men Be Saved&rsquo;?</em>&rdquo;
                (Ignatius Press, 1988) argues that while the Church teaches the real possibility of
                hell, it has never taught that we know any person is actually there. Balthasar
                distinguishes between believing hell is possible and empty. This is a theologically
                permissible hope in Catholic teaching &mdash; though not a certainty &mdash; and has
                been echoed (cautiously) by Pope Francis.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">
                  CCC 1033 &mdash; The Full Text
                </h3>
                <p className="text-amber-800 italic mb-2">
                  &ldquo;We cannot be united with God unless we freely choose to love him. But we cannot
                  love God if we sin gravely against him, against our neighbor or against ourselves:
                  &lsquo;He who does not love remains in death. Anyone who hates his brother is a murderer,
                  and you know that no murderer has eternal life abiding in him.&rsquo; Our Lord warns us
                  that we shall be separated from him if we fail to meet the serious needs of the
                  poor and the little ones who are his brethren. To die in mortal sin without
                  repenting and accepting God&rsquo;s merciful love means remaining separated from him
                  for ever by our own free choice. This state of definitive self-exclusion from
                  communion with God and the blessed is called &lsquo;hell.&rsquo;&rdquo;
                </p>
                <p className="text-amber-700 text-sm">&mdash; CCC 1033</p>
              </div>
            </div>

          </div>
        )}

        {/* ==================== TAB 5: THE FINAL JUDGMENT ==================== */}
        {activeTab === 'final-judgment' && (
          <div className="space-y-8">

            {/* Card 1: General Resurrection */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Sunrise className="w-6 h-6 text-green-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The General Resurrection</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                At the Parousia, all the dead &mdash; both the blessed and the damned &mdash; will be
                bodily resurrected. This is not metaphor. It is one of the central, non-negotiable
                affirmations of the Christian Creed: &ldquo;I look for the resurrection of the dead,
                and the life of the world to come.&rdquo; Christian hope is not the immortality of a
                disembodied soul; it is the resurrection of the body &mdash; the reunification of
                the whole person &mdash; body and soul together &mdash; in eternal life.
              </p>

              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-green-900 mb-3">
                  The Resurrection in Paul
                </h3>
                <p className="text-green-800 italic mb-2">
                  &ldquo;But in fact Christ has been raised from the dead, the firstfruits of those who
                  have fallen asleep. For as by a man came death, by a man has come also the
                  resurrection of the dead. For as in Adam all die, so also in Christ shall all be
                  made alive.&rdquo;
                </p>
                <p className="text-green-700 text-sm">&mdash; 1 Corinthians 15:20&ndash;22</p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Paul&rsquo;s extraordinary 15th chapter of First Corinthians is the most extended New
                Testament treatment of the resurrection and its meaning. Against those in Corinth
                who doubted the bodily resurrection (&ldquo;How are the dead raised? With what kind of
                body?&rdquo; &mdash; 1 Cor 15:35), Paul insists that the resurrection of the body is
                constitutive of Christian hope: &ldquo;If the dead are not raised, then Christ has not
                been raised. If Christ has not been raised, your faith is futile.&rdquo; (1 Cor 15:16&ndash;17)
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">
                  What Kind of Body?
                </h3>
                <p className="text-blue-800 mb-3">
                  Paul uses the image of a seed: the body that is sown is not the same as the body
                  that rises (1 Cor 15:36&ndash;44). There is continuity (the same seed; the same
                  person) and radical transformation (a different kind of existence). The resurrected
                  body is a &ldquo;spiritual body&rdquo; (<em>soma pneumatikon</em>) &mdash; not immaterial but
                  fully animated and transformed by the Holy Spirit, incorruptible and glorious.
                  Christ&rsquo;s own resurrected body &mdash; which ate fish, bore the wounds of the
                  Cross, yet could appear through locked doors and was often not immediately
                  recognized &mdash; is the model and first instance.
                </p>
                <p className="text-blue-700 text-sm">
                  &mdash; Cf. CCC 999: &ldquo;How? Christ is raised with his own body: &lsquo;See my hands
                  and my feet, that it is I myself.&rsquo;&rdquo;
                </p>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">
                  The Same Body, Transformed
                </h3>
                <p className="text-amber-800 mb-3">
                  CCC 999: &ldquo;In death, the separation of the soul from the body, the human body
                  decays and the soul goes to meet God, while awaiting its reunion with its glorified
                  body. God, in his almighty power, will definitively grant incorruptible life to
                  our bodies by reuniting them with our souls, through the power of Jesus&rsquo;
                  Resurrection.&rdquo; The Church has consistently taught (against Gnostic tendencies)
                  that the body is not a prison from which the soul escapes; the body is part of the
                  full person that is being saved.
                </p>
              </div>
            </div>

            {/* Card 2: The Final Judgment Itself */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Scale className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Final Judgment: The Revelation of History</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The Last Judgment is not primarily about sentencing &mdash; the particular judgment
                has already sealed each person&rsquo;s destiny. It is primarily about <em>revelation</em>:
                the full, public, cosmic disclosure of the moral truth of every human life and of
                all of history. Every hidden act of love is revealed; every concealed injustice is
                brought to light; the complete tapestry of God&rsquo;s providential working through
                human history &mdash; including its apparent evils and apparent absurdities &mdash;
                is made intelligible for the first time.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">
                  CCC on the Last Judgment
                </h3>
                <p className="text-blue-800 italic mb-2">
                  &ldquo;The Last Judgment will reveal even to its furthest consequences the good each
                  person has done or failed to do during his earthly life.&rdquo;
                </p>
                <p className="text-blue-700 text-sm mb-3">&mdash; CCC 1040</p>
                <p className="text-blue-800 italic mb-2">
                  &ldquo;At the end of time, the Kingdom of God will come in its fullness. After the
                  universal judgment, the righteous will reign for ever with Christ, glorified in
                  body and soul.&rdquo;
                </p>
                <p className="text-blue-700 text-sm">&mdash; CCC 1042</p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The criterion of the Last Judgment (Matt 25:31&ndash;46) is not abstract theological
                correctness but concrete acts of mercy: feeding the hungry, giving drink to the
                thirsty, welcoming the stranger, clothing the naked, visiting the sick and imprisoned.
                These acts are identified with service to Christ Himself &mdash; &ldquo;whatever you
                did for one of the least of these brothers and sisters of mine, you did for me.&rdquo;
                (Matt 25:40)
              </p>

              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-purple-900 mb-3">
                  The Vindication of the Just
                </h3>
                <p className="text-purple-800 mb-3">
                  The Last Judgment is not only a terrifying prospect but a consoling hope for the
                  victims of history. Every martyr whose death seemed pointless, every act of
                  hidden charity that went unnoticed, every injustice that was never addressed in
                  this life &mdash; all will be fully disclosed and vindicated. The &ldquo;problem of
                  evil&rdquo; &mdash; why God permits suffering &mdash; will find its full answer not
                  in philosophical argument but in the eschatological revelation of how God drew
                  good from every evil in the vast tapestry of human history.
                </p>
                <p className="text-purple-700 text-sm">
                  &mdash; Cf. CCC 1041: &ldquo;The message of the Last Judgment calls men to conversion
                  while God is still giving them &lsquo;the acceptable time, the day of salvation.&rsquo;&rdquo;
                </p>
              </div>
            </div>

            {/* Card 3: The New Heaven and New Earth */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Globe className="w-6 h-6 text-green-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The New Heaven and New Earth</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Revelation 21:1&ndash;5 describes the final state of all things: &ldquo;Then I saw a new
                heaven and a new earth, for the first heaven and the first earth had passed away&hellip;
                And I heard a loud voice from the throne saying, &lsquo;Behold, the dwelling place of God
                is with man. He will dwell with them, and they will be his people, and God himself
                will be with them as their God. He will wipe away every tear from their eyes, and
                death shall be no more, neither shall there be mourning, nor crying, nor pain
                anymore, for the former things have passed away.&rsquo;&rdquo;
              </p>

              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-green-900 mb-3">
                  Renewal, Not Destruction
                </h3>
                <p className="text-green-800 mb-3">
                  The Catholic tradition understands the &ldquo;passing away&rdquo; of the first heaven
                  and earth (Rev 21:1; 2 Pet 3:10&ndash;13) as a radical transformation and renewal,
                  not a simple annihilation. Creation is not discarded; it is elevated and brought
                  to its final purpose. Romans 8:19&ndash;21 speaks of creation &ldquo;groaning as in
                  the pains of childbirth&rdquo; waiting for &ldquo;liberation from its bondage to decay.&rdquo;
                  The universe itself is caught up in the redemption.
                </p>
                <p className="text-green-700 text-sm">
                  &mdash; Cf. CCC 1046&ndash;1047: &ldquo;Creation itself will be liberated from its
                  bondage to decay and brought into the glorious freedom of the children of God.&rdquo;
                  (Rom 8:21)
                </p>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">
                  The New Jerusalem: Eden Restored and Surpassed
                </h3>
                <p className="text-amber-800 mb-3">
                  Revelation 21&ndash;22 describes the New Jerusalem in images dense with meaning:
                  God dwelling directly with His people (no temple, because God IS the temple &mdash;
                  Rev 21:22); no sun or moon (God IS the light &mdash; Rev 21:23); the river of the
                  water of life flowing from God&rsquo;s throne; the tree of life &mdash; the very tree
                  lost in Eden &mdash; now freely accessible to all (Rev 22:1&ndash;2). Eden is not
                  merely restored; the New Creation surpasses the original Garden as the Redeemer
                  surpasses the first Adam.
                </p>
              </div>
            </div>

          </div>
        )}

        {/* ==================== TAB 6: THE NEW CREATION ==================== */}
        {activeTab === 'new-creation' && (
          <div className="space-y-8">

            {/* Card 1: Cosmic Eschatology */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Globe className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Cosmic Eschatology: The Redemption of All Things</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                One of the most important correctives in modern Catholic eschatology is the recovery
                of its <em>cosmic</em> dimension. Popular imagination often reduces the &ldquo;end times&rdquo;
                to a drama about individual souls escaping from a doomed material world. But this is
                more Platonic than Catholic. The salvation Christ brings is not the rescue of
                disembodied souls from a discarded universe; it is the redemption of <em>all things</em>.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">
                  &ldquo;To Reconcile All Things&rdquo;
                </h3>
                <p className="text-amber-800 italic mb-2">
                  &ldquo;Through him to reconcile to himself all things, whether on earth or in heaven,
                  making peace by the blood of his cross.&rdquo;
                </p>
                <p className="text-amber-700 text-sm mb-3">&mdash; Colossians 1:20</p>
                <p className="text-amber-800 italic mb-2">
                  &ldquo;Creation itself will be liberated from its bondage to decay and brought into
                  the glorious freedom of the children of God.&rdquo;
                </p>
                <p className="text-amber-700 text-sm">&mdash; Romans 8:21</p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                CCC 1046&ndash;1047: &ldquo;For the universe too, the Apostle&rsquo;s vision is a hopeful one.
                He believes that the universe, which was created and is sustained by God, is indeed
                being directed by God towards a future destiny which he alone fully knows, but which
                faith assures us will be one of supreme and unimaginable glory.&rdquo;
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                The resurrection of the body means that material reality has eternal significance.
                We are not waiting to escape the body and the earth; we are waiting for their
                renewal. This has profound practical implications: care for the poor, care for the
                environment, human artistic and intellectual work, and all genuine human culture
                have eschatological weight. &ldquo;Nothing that is truly human fails to find an echo
                in [the disciples&rsquo;] hearts&rdquo; (Gaudium et Spes, 1). And nothing done &ldquo;in the
                Lord&rdquo; is wasted: &ldquo;your labor is not in vain in the Lord&rdquo; (1 Cor 15:58).
              </p>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">
                  Implications for Human Work
                </h3>
                <p className="text-blue-800 mb-3">
                  Pope John Paul II, drawing on Vatican II&rsquo;s <em>Gaudium et Spes</em>, argued
                  that human work participates in God&rsquo;s creative and redemptive activity. In
                  <em> Laborem Exercens</em> (1981), he wrote that the products of human labor
                  &mdash; art, science, culture, social institutions built in justice &mdash; contribute
                  to the &ldquo;civilization of love&rdquo; that anticipates the Kingdom of God.
                  They may not be carried over into the New Creation in their present form,
                  but the love and fidelity with which they are made is eternal.
                </p>
              </div>
            </div>

            {/* Card 2: Scripture's Great Arc */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <ArrowRight className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Scripture&rsquo;s Great Arc: Creation &rarr; Fall &rarr; Redemption &rarr; New Creation</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The entire Bible can be read as a single narrative arc moving from creation to new
                creation. Catholic eschatology is not appended to Christian theology as a frightening
                postscript; it is the culmination of the whole story that Scripture tells.
              </p>

              <div className="space-y-4 mb-6">
                <div className="bg-blue-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-2">Creation (Genesis 1&ndash;2)</h3>
                  <p className="text-blue-800 text-sm">
                    God creates the heavens and the earth and declares it &ldquo;very good.&rdquo; Humanity is
                    placed in the Garden, in direct relationship with God. The material world is
                    inherently good &mdash; this is the starting point from which Catholic theology
                    of creation, body, and resurrection flows.
                  </p>
                </div>
                <div className="bg-blue-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-2">The Fall (Genesis 3)</h3>
                  <p className="text-blue-800 text-sm">
                    Humanity&rsquo;s rejection of God&rsquo;s order brings death, suffering, alienation from God,
                    from each other, and from the natural world. The cherubim bar the return to the
                    Garden and the Tree of Life. History becomes the story of exile and longing for
                    return.
                  </p>
                </div>
                <div className="bg-blue-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-2">Redemption (The Whole OT and NT)</h3>
                  <p className="text-blue-800 text-sm">
                    God enters His own creation in the Incarnation. The Cross is the supreme act
                    of redemptive love. The Resurrection is the first instance of the New Creation
                    &mdash; the &ldquo;firstfruits&rdquo; (1 Cor 15:20). The Church is the community of those
                    already living in the &ldquo;already but not yet&rdquo; of the Kingdom.
                  </p>
                </div>
                <div className="bg-green-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-2">New Creation (Revelation 21&ndash;22)</h3>
                  <p className="text-green-800 text-sm">
                    The River of Life, the Tree of Life (once barred in Genesis), God dwelling
                    with humanity face-to-face &mdash; no temple, no sun, no night. Eden is not
                    merely restored but surpassed. The whole story ends not in destruction but
                    in consummation: &ldquo;Behold, I am making all things new.&rdquo; (Rev 21:5)
                  </p>
                </div>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-purple-900 mb-3">
                  The &ldquo;Already but Not Yet&rdquo;
                </h3>
                <p className="text-purple-800 mb-3">
                  Catholic theology uses the phrase &ldquo;already but not yet&rdquo; to describe the Church&rsquo;s
                  present situation in salvation history. The Kingdom of God has already arrived
                  in Christ; it is already present in the Church, the sacraments, and the lives
                  of the saints. Yet it is not yet fully revealed; the Parousia and the New Creation
                  are still awaited. The Holy Spirit is the &ldquo;down payment&rdquo;
                  (<em>arrabon</em> &mdash; 2 Cor 1:22; 5:5; Eph 1:14): a real foretaste and pledge
                  of the fullness still to come.
                </p>
              </div>
            </div>

            {/* Card 3: Hope */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-green-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Hope: The Distinctively Eschatological Virtue</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                If eschatology is rightly understood, its primary emotional register is not fear
                but <em>hope</em>. The theological virtue of hope is, in fact, the distinctively
                eschatological virtue: it orients the Christian toward the future God has promised
                and sustains faithful action in the present. Hope is not optimism (a natural
                temperament), not wishful thinking (self-deception), and not certainty (which would
                eliminate faith). It is a supernatural virtue &mdash; a God-given capacity to trust
                in what God has revealed about the end of the story.
              </p>

              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-green-900 mb-3">
                  CCC on Christian Hope
                </h3>
                <p className="text-green-800 italic mb-2">
                  &ldquo;Hope is the theological virtue by which we desire the kingdom of heaven and
                  eternal life as our happiness, placing our trust in Christ&rsquo;s promises and relying
                  not on our own strength, but on the help of the grace of the Holy Spirit.&rdquo;
                </p>
                <p className="text-green-700 text-sm">&mdash; CCC 1817</p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Pope Benedict XVI devoted his second encyclical &mdash; <em>Spe Salvi</em> (&ldquo;Saved
                by Hope&rdquo;) &mdash; entirely to this theme. Writing in 2007, he diagnosed the crisis
                of modern Western culture as fundamentally a crisis of hope: secular utopianism
                (the belief that human progress can build paradise on earth) has repeatedly failed
                and left people in despair; scientific materialism offers only an indifferent
                universe with no ultimate meaning; individualism atomizes community. Against all
                these, Benedict offers Christian hope &mdash; not as sentimental comfort but as a
                rationally grounded confidence in the God who raised Christ from the dead.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">
                  Benedict XVI: <em>Spe Salvi</em> (2007)
                </h3>
                <p className="text-blue-800 italic mb-2">
                  &ldquo;The one who has hope lives differently; the one who hopes has been granted the
                  gift of a new life.&rdquo;
                </p>
                <p className="text-blue-700 text-sm mb-3">&mdash; <em>Spe Salvi</em>, &sect;2</p>
                <p className="text-blue-800 italic mb-2">
                  &ldquo;It is not science that redeems man: man is redeemed by love&hellip; the one who
                  loves wants to exist forever, for the person he loves; and, on the other hand,
                  there must be someone who loves him for him to be able to exist forever.&rdquo;
                </p>
                <p className="text-blue-700 text-sm">&mdash; <em>Spe Salvi</em>, &sect;26</p>
              </div>

              <p className="text-gray-700 leading-relaxed">
                &ldquo;We have been saved by hope&rdquo; (Rom 8:24 &mdash; the Greek <em>t&emacr; elpidi</em>
                literally: &ldquo;by hope&rdquo;). The proper Christian response to eschatology is not
                paralytic fear, not obsessive calculation of end-times signs, not passive waiting
                for an escape from a burning world &mdash; but active, hopeful engagement in the
                present, working for justice, peace, and love, confident that &ldquo;your labor is not
                in vain in the Lord&rdquo; (1 Cor 15:58), because history is headed somewhere real,
                somewhere good, somewhere that God Himself has promised.
              </p>
            </div>

            {/* Card 4: Sources & Further Reading */}
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
                    <li><em>Catechism of the Catholic Church</em>, &sect;&sect;988&ndash;1060 (Eschatology overview)</li>
                    <li><em>Catechism of the Catholic Church</em>, &sect;&sect;668&ndash;682 (Parousia and Kingdom)</li>
                    <li><em>Catechism of the Catholic Church</em>, &sect;&sect;1020&ndash;1041 (Particular and Last Judgment)</li>
                    <li>Council of Florence (1439): Decree for the Greeks &mdash; on purgatory</li>
                    <li>Council of Trent, Session XXV (1563): Decree on Purgatory</li>
                    <li>Vatican II, <em>Lumen Gentium</em>, ch. VII: &ldquo;The Eschatological Character of the Pilgrim Church&rdquo;</li>
                    <li>Vatican II, <em>Gaudium et Spes</em>, &sect;&sect;38&ndash;39 (earthly progress and the Kingdom)</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-3">Papal Documents</h3>
                  <ul className="text-blue-800 text-sm space-y-2">
                    <li>Pope Benedict XVI, <em>Spe Salvi</em> (2007) &mdash; on Christian hope</li>
                    <li>Pope John Paul II, <em>Laborem Exercens</em> (1981) &mdash; human work and the Kingdom</li>
                    <li>Pope John Paul II, <em>Tertio Millennio Adveniente</em> (1994) &mdash; eschatological dimensions of the Jubilee</li>
                    <li>Pope Francis, <em>Laudato Si&rsquo;</em> (2015), &sect;&sect;243&ndash;246 &mdash; cosmic eschatology</li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-purple-900 mb-3">Scholarly Works</h3>
                  <ul className="text-purple-800 text-sm space-y-2">
                    <li>Joseph Ratzinger (Benedict XVI), <em>Eschatology: Death and Eternal Life</em> (Catholic University of America Press, 1988) &mdash; the definitive modern Catholic eschatology text</li>
                    <li>Hans Urs von Balthasar, <em>Dare We Hope &ldquo;That All Men Be Saved&rdquo;?</em> (Ignatius Press, 1988)</li>
                    <li>Frank J. Sheed, <em>Theology and Sanity</em>, chs. on Heaven, Hell, and Purgatory</li>
                    <li>Thomas Aquinas, <em>Summa Theologiae</em>, Supplement, QQ. 69&ndash;99 (resurrection and Last Things)</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-3">Additional Reading</h3>
                  <ul className="text-green-800 text-sm space-y-2">
                    <li>N.T. Wright, <em>Surprised by Hope</em> (HarperOne, 2008) &mdash; Protestant but widely used by Catholic theologians; excellent on bodily resurrection</li>
                    <li>Jerry L. Walls, <em>Heaven, Hell, and Purgatory</em> (Brazos, 2015) &mdash; ecumenical philosophical treatment</li>
                    <li>Peter Kreeft, <em>Everything You Always Wanted to Know About Heaven</em> (Ignatius, 1990) &mdash; accessible popular Catholic treatment</li>
                    <li>Augustine of Hippo, <em>City of God</em>, Books XIX&ndash;XXII &mdash; the first systematic Christian eschatology</li>
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
