'use client'

import { useState } from 'react'
import {
  Heart,
  BookOpen,
  Microscope,
  Shield,
  CheckCircle,
  Church,
  Star,
  Flame,
  Globe,
  Scroll,
  Eye,
  Users,
  ArrowRight,
  Award,
} from 'lucide-react'

type TabId = 'theology' | 'lourdes' | 'canonization' | 'documented' | 'discernment' | 'sources'

const tabs: { id: TabId; label: string }[] = [
  { id: 'theology', label: 'Theology of Healing' },
  { id: 'lourdes', label: 'Lourdes Medical Bureau' },
  { id: 'canonization', label: 'Canonization Miracles' },
  { id: 'documented', label: 'Documented Cases' },
  { id: 'discernment', label: "The Church's Discernment" },
  { id: 'sources', label: 'Sources' },
]

export default function HealingMiraclesPage() {
  const [activeTab, setActiveTab] = useState<TabId>('theology')

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">

        {/* Hero */}
        <div className="text-center mb-10">
          <span
            className="inline-block text-sm font-semibold px-4 py-1.5 rounded-full mb-4"
            style={{ backgroundColor: '#ECFDF5', color: '#065F46' }}
          >
            Mysteries of the Faith
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Healing Miracles
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Christ the Healer stands at the heart of the Gospel — one-third of all Gospel narratives
            record his healing ministry. The Church has preserved, examined, and formally recognized
            miraculous healings for two thousand years, from the Apostolic Age to Lourdes and the
            canonization process today.
          </p>
        </div>

        {/* Doctrinal Anchor Box */}
        <div
          className="rounded-xl border p-6 mb-8 max-w-3xl mx-auto"
          style={{ backgroundColor: '#ECFDF5', borderColor: '#A7F3D0' }}
        >
          <div className="flex items-start gap-4">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: '#D1FAE5' }}
            >
              <BookOpen className="w-5 h-5" style={{ color: '#065F46' }} />
            </div>
            <div>
              <p className="font-semibold mb-1" style={{ color: '#065F46' }}>
                CCC 1503 &mdash; Christ&rsquo;s Compassion for the Sick
              </p>
              <p className="text-gray-700 leading-relaxed italic">
                &ldquo;Christ&rsquo;s compassion toward the sick and his many healings of every kind of
                infirmity are a resplendent sign that &lsquo;God has visited his people&rsquo; (Lk 7:16)
                and that the Kingdom of God is close at hand. Jesus has the power not only to heal, but
                also to forgive sins; he has come to heal the whole man, soul and body.&rdquo;
              </p>
              <p className="text-sm mt-3" style={{ color: '#059669' }}>
                See also: CCC 1499&ndash;1532 &mdash; The Sacrament of Anointing of the Sick
              </p>
            </div>
          </div>
        </div>

        {/* Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-6 text-center border-t-4" style={{ borderColor: '#10B981' }}>
            <div className="text-4xl font-bold mb-2" style={{ color: '#065F46' }}>
              70
            </div>
            <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
              Lourdes Miracles Formally Recognized
            </div>
            <div className="text-xs text-gray-500 mt-1">by the Catholic Church (since 1858)</div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 text-center border-t-4" style={{ borderColor: '#10B981' }}>
            <div className="text-4xl font-bold mb-2" style={{ color: '#065F46' }}>
              2,500+
            </div>
            <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
              Cases Medically Examined at Lourdes
            </div>
            <div className="text-xs text-gray-500 mt-1">out of ~7,000 claimed cures</div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 text-center border-t-4" style={{ borderColor: '#10B981' }}>
            <div className="text-4xl font-bold mb-2" style={{ color: '#065F46' }}>
              37
            </div>
            <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
              Gospel Healing Miracles Recorded
            </div>
            <div className="text-xs text-gray-500 mt-1">plus multiple collective healings</div>
          </div>
        </div>

        {/* Tab Bar */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-xl shadow-lg p-1.5 overflow-x-auto max-w-full">
            <div className="flex flex-nowrap gap-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className="px-4 py-2.5 rounded-lg text-sm font-medium transition-colors whitespace-nowrap"
                  style={
                    activeTab === tab.id
                      ? { backgroundColor: '#065F46', color: 'white' }
                      : { color: '#374151' }
                  }
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ==================== TAB 1: THEOLOGY ==================== */}
        {activeTab === 'theology' && (
          <div className="space-y-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#D1FAE5' }}>
                  <Heart className="w-6 h-6" style={{ color: '#065F46' }} />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">
                  Christ the Healer &mdash; Biblical and Doctrinal Foundation
                </h2>
              </div>

              {/* Jesus as Healer */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <Star className="w-5 h-5" style={{ color: '#10B981' }} />
                  Jesus as Healer in the Gospels
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The Gospels record 37 distinct individual healing miracles performed by Christ, along
                  with multiple accounts of collective healings &mdash; crowds pressing in from all
                  directions. Taken together, the healing narratives constitute roughly one-third of all
                  Gospel content. This is not incidental: the healing ministry is integral to Christ&rsquo;s
                  proclamation of the Kingdom.
                </p>
                <div className="rounded-lg p-5" style={{ backgroundColor: '#ECFDF5' }}>
                  <p className="font-semibold mb-3" style={{ color: '#065F46' }}>Key Scriptural Passages</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#10B981' }} />
                      <span>
                        <strong>Matthew 4:23&ndash;24</strong> &mdash; Jesus went about healing every disease
                        and every infirmity among the people; his fame spread throughout all Syria.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#10B981' }} />
                      <span>
                        <strong>Luke 7:22</strong> &mdash; Jesus&rsquo;s answer to John the Baptist&rsquo;s
                        question: &ldquo;the blind receive their sight, the lame walk, lepers are cleansed,
                        the deaf hear, the dead are raised.&rdquo;
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#10B981' }} />
                      <span>
                        <strong>John 9</strong> &mdash; The healing of the man born blind, presented by John
                        as the supreme sign of Christ as Light of the World.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#10B981' }} />
                      <span>
                        <strong>Mark 1:40&ndash;45</strong> &mdash; The cleansing of the leper: &ldquo;Moved
                        with compassion, he stretched out his hand, touched him, and said&hellip;
                        &lsquo;Be clean.&rsquo;&rdquo;
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Healing and the Kingdom */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <Church className="w-5 h-5" style={{ color: '#10B981' }} />
                  The Healing Ministry and the Kingdom of God
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The Catechism anchors the healing miracles within salvation history rather than
                  treating them as isolated wonder-works. CCC 1503 states that Christ&rsquo;s healings are
                  a &ldquo;resplendent sign&rdquo; that God has visited his people and that the Kingdom of
                  God is near. CCC 1504&ndash;1505 further explain that Jesus &ldquo;healed the sick not
                  only to restore health but as a sign of the Kingdom of God.&rdquo; Physical healing points
                  beyond itself to the deeper healing of sin and death &mdash; the Paschal Mystery.
                </p>
              </div>

              {/* Continuation in the Church */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <Flame className="w-5 h-5" style={{ color: '#10B981' }} />
                  The Continuation of Healing in the Church
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The apostolic commission extended the healing ministry: the Apostles healed in
                  Christ&rsquo;s name (Acts 3:1&ndash;10; Acts 9:32&ndash;35). The Letter of James
                  formalizes this within the sacramental life of the Church: &ldquo;Is anyone among you
                  sick? He should call for the elders of the church, and they should pray over him and
                  anoint him with oil in the name of the Lord. The prayer of faith will save the sick
                  person&rdquo; (James 5:14&ndash;15). The Sacrament of Anointing of the Sick
                  (CCC 1499&ndash;1532) is the Church&rsquo;s primary sacramental response to sickness
                  &mdash; offering spiritual strengthening, forgiveness of sins, and, when God wills it,
                  physical healing.
                </p>
              </div>

              {/* Signs not proofs */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <Shield className="w-5 h-5" style={{ color: '#10B981' }} />
                  Miracles as Signs, Not Proofs
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  CCC 156 and 548 both treat miracles carefully: they confirm faith but do not compel
                  it. Faith is not the product of miracle &mdash; miracle is a sign addressed to those
                  already open to receive it. Physical healing is not the primary purpose of the miracle;
                  faith, conversion, and the proclamation of the Kingdom are. This is why Christ
                  sometimes instructed healed persons to tell no one (the &ldquo;Messianic secret&rdquo;
                  in Mark) and why he refused to perform signs on demand (Matthew 12:38&ndash;39).
                </p>
              </div>

              {/* Intercession of the saints */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <Award className="w-5 h-5" style={{ color: '#10B981' }} />
                  Intercession of the Saints and the Canonization Process
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  The Church formally recognizes healing miracles in the canonization process &mdash;
                  requiring one verified miracle for beatification and one additional miracle for
                  canonization. These healings are attributed to the intercession of the candidate,
                  not to direct divine intervention bypassing the saints. The saints intercede; God heals.
                  This practice reflects the Catholic doctrine of the Communion of Saints
                  (CCC 946&ndash;962) and gives the Church its most rigorous formal procedure for
                  recognizing miraculous healing.
                </p>
              </div>

              {/* Theological Caution */}
              <div className="rounded-xl border p-6" style={{ backgroundColor: '#F0FDF4', borderColor: '#BBF7D0' }}>
                <h3 className="text-lg font-bold mb-3" style={{ color: '#065F46' }}>
                  Theological Caution
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Genuine healing miracles are rare; the Church takes years &mdash; often decades &mdash;
                  to investigate any claim. Most reported cures are not formally recognized. The Catechism
                  also holds before us the witness of St. Paul, who was not healed of his &ldquo;thorn
                  in the flesh&rdquo; despite praying three times (2 Corinthians 12:7&ndash;9), and the
                  case of Lazarus (John 11:4), whose sickness was permitted for the glory of God. The
                  spiritual healing Christ always offers is certain; physical healing is contingent on
                  God&rsquo;s providential will.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ==================== TAB 2: LOURDES ==================== */}
        {activeTab === 'lourdes' && (
          <div className="space-y-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#D1FAE5' }}>
                  <Microscope className="w-6 h-6" style={{ color: '#065F46' }} />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-800">
                    The Lourdes Medical Bureau
                  </h2>
                  <p className="text-gray-500 italic mt-1">
                    The World&rsquo;s Most Rigorous Investigation of Miraculous Healing
                  </p>
                </div>
              </div>

              {/* History and Mission */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-3">History and Mission</h3>
                <p className="text-gray-700 leading-relaxed">
                  The Medical Bureau of Lourdes (Bureau des Constatations M&eacute;dicales) was
                  established in 1884, originally by authorization under Pope Leo XIII. It is the only
                  place in the world where physicians of any faith &mdash; or no faith &mdash; are
                  formally invited to examine and challenge claimed miracle cures. Skeptics are welcome.
                  The Bureau&rsquo;s files are available to any qualified physician who wishes to review
                  them.
                </p>
              </div>

              {/* Six-stage process */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">The Six-Stage Investigative Process</h3>
                <div className="space-y-4">
                  {[
                    {
                      stage: 1,
                      title: 'Initial Examination at Lourdes',
                      desc: 'The Medical Bureau examines the patient immediately after the cure is claimed, documenting the claimed healing and the patient\'s current physical state.',
                    },
                    {
                      stage: 2,
                      title: 'Complete Medical Dossier',
                      desc: 'All pre-Lourdes records are assembled — original diagnosis, prognosis, and the records of every treating physician. The disease must have been organically verified before the pilgrimage.',
                    },
                    {
                      stage: 3,
                      title: 'Long-term Follow-up',
                      desc: 'The patient is re-examined over 1–5 years to confirm the healing is permanent, complete, and without relapse or recurrence.',
                    },
                    {
                      stage: 4,
                      title: 'International Medical Committee (CMIL)',
                      desc: 'An independent international panel of physicians reviews the full dossier. Their required finding: "The healing is certain, complete, lasting, and medically inexplicable."',
                    },
                    {
                      stage: 5,
                      title: 'Episcopal Investigation',
                      desc: 'The local bishop investigates the spiritual circumstances: was the person of good faith? Were the proper conditions present? Was the cure sought through legitimate means?',
                    },
                    {
                      stage: 6,
                      title: 'Episcopal Declaration',
                      desc: 'The bishop formally declares the healing miraculous — or declines to do so. Only after this declaration does the Church officially recognize the miracle.',
                    },
                  ].map((item) => (
                    <div key={item.stage} className="flex gap-4">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm"
                        style={{ backgroundColor: '#065F46' }}
                      >
                        {item.stage}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">{item.title}</p>
                        <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Statistics */}
              <div className="rounded-xl p-6 mb-8" style={{ backgroundColor: '#ECFDF5' }}>
                <h3 className="text-lg font-bold mb-4" style={{ color: '#065F46' }}>Statistics (as of 2023)</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { num: '~7,000', label: 'Cures claimed since 1858' },
                    { num: '~2,500', label: 'Medically examined' },
                    { num: '~1,000', label: 'CMIL: remarkable, unexplained' },
                    { num: '70', label: 'Formally declared miraculous' },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-2xl font-bold" style={{ color: '#065F46' }}>{stat.num}</div>
                      <div className="text-xs text-gray-600 mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-600 mt-4 italic">
                  This conservative approach &mdash; 70 formally recognized out of ~7,000 claimed &mdash;
                  is intentional. The Church prefers to recognize too few miracles rather than too many.
                </p>
              </div>

              {/* What the CMIL requires */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">What the CMIL Requires</h3>
                <ul className="space-y-2">
                  {[
                    'The disease was organically verified (not psychosomatic or uncertain)',
                    'The disease was considered incurable by current medicine',
                    'Healing was instantaneous or very rapid — not a normal recovery trajectory',
                    'Healing occurred without medical treatment (or despite medical opinion against recovery)',
                    'The healing is permanent — no relapse over the full monitoring period',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700">
                      <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#10B981' }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Six Notable Miracles */}
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-6">Six Notable Recognized Miracles</h3>
                <div className="space-y-6">

                  <div className="border-l-4 pl-5 py-2" style={{ borderColor: '#10B981' }}>
                    <p className="font-bold text-gray-800 mb-1">Vittorio Micheli (1963, recognized 1976)</p>
                    <p className="text-gray-700 leading-relaxed text-sm">
                      An Italian soldier with sarcoma (bone cancer) of the left hip so advanced that the
                      hip joint had been entirely destroyed by the tumor. After bathing at Lourdes, the
                      tumor disappeared within one month and &mdash; remarkably &mdash; the bone
                      reconstructed itself. Bone regeneration of this kind is unknown to medicine. Bishop
                      Manziana of Cremona formally recognized the miracle in 1976. The CMIL certificate
                      reads: &ldquo;instantaneous healing of a sarcoma with reconstitution of the left
                      iliac bone.&rdquo;
                    </p>
                  </div>

                  <div className="border-l-4 pl-5 py-2" style={{ borderColor: '#10B981' }}>
                    <p className="font-bold text-gray-800 mb-1">Serge Fran&ccedil;ois (1938, recognized 1954)</p>
                    <p className="text-gray-700 leading-relaxed text-sm">
                      Peritoneal tuberculosis in an advanced state; last rites had been administered.
                      Healed instantly after bathing. The medical dossier was assembled from multiple
                      independent physicians and examined by the Bureau for sixteen years before the
                      bishop&rsquo;s formal declaration &mdash; a model case for the stringency of the
                      process.
                    </p>
                  </div>

                  <div className="border-l-4 pl-5 py-2" style={{ borderColor: '#10B981' }}>
                    <p className="font-bold text-gray-800 mb-1">Gabrielle Clauzel (1943, recognized 1965)</p>
                    <p className="text-gray-700 leading-relaxed text-sm">
                      Addison&rsquo;s disease &mdash; adrenal insufficiency &mdash; at a time when it was
                      universally fatal without modern hormone therapy, which had not yet been developed.
                      Healed at Lourdes. Recognized twenty-two years later, after sustained medical
                      follow-up confirmed the healing was complete and permanent.
                    </p>
                  </div>

                  <div className="border-l-4 pl-5 py-2" style={{ borderColor: '#10B981' }}>
                    <p className="font-bold text-gray-800 mb-1">Jean-Pierre B&eacute;ly (1987, recognized 1999)</p>
                    <p className="text-gray-700 leading-relaxed text-sm">
                      Multiple sclerosis with twelve years of progressive deterioration &mdash; confined to
                      bed and requiring full nursing care. During the Anointing of the Sick administered
                      at Lourdes, he was suddenly healed. The CMIL examined the case for twelve years
                      before certifying it. He is the most recently formally recognized miracle at Lourdes
                      (the 70th, in 1999). B&eacute;ly himself later recounted: &ldquo;I heard a voice
                      which told me to rise and walk.&rdquo;
                    </p>
                  </div>

                  <div className="border-l-4 pl-5 py-2" style={{ borderColor: '#10B981' }}>
                    <p className="font-bold text-gray-800 mb-1">Delizia Cirolli (1976, recognized 1989)</p>
                    <p className="text-gray-700 leading-relaxed text-sm">
                      Ewing&rsquo;s sarcoma (bone cancer) declared terminal. Delizia was a child when she
                      came to Lourdes. Healed completely. She later became a volunteer Lourdes helper,
                      serving the sick for decades. Formally recognized thirteen years after the healing,
                      following exhaustive medical review.
                    </p>
                  </div>

                  <div className="border-l-4 pl-5 py-2" style={{ borderColor: '#10B981' }}>
                    <p className="font-bold text-gray-800 mb-1">Elisa Aloi (1958, recognized 1965)</p>
                    <p className="text-gray-700 leading-relaxed text-sm">
                      Multiple fistulas of bone tuberculosis &mdash; an extensively documented and verified
                      organic disease. Healed at Lourdes in 1958. The CMIL voted unanimously to certify
                      the healing as medically inexplicable seven years later, after thorough follow-up
                      confirmed no recurrence.
                    </p>
                  </div>

                </div>
              </div>

              <div className="mt-6 rounded-lg p-4 text-sm text-gray-600" style={{ backgroundColor: '#F0FDF4' }}>
                <strong style={{ color: '#065F46' }}>Current status:</strong> The 70th recognized miracle
                (B&eacute;ly, 1999) remains the most recently formally declared. The CMIL continues its
                work. Updated Vatican norms issued in 2024 have refined the criteria and added a new
                intermediate classification for healings judged &ldquo;remarkable and not medically
                explainable&rdquo; without requiring full episcopal declaration.
              </div>
            </div>
          </div>
        )}

        {/* ==================== TAB 3: CANONIZATION ==================== */}
        {activeTab === 'canonization' && (
          <div className="space-y-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#D1FAE5' }}>
                  <Award className="w-6 h-6" style={{ color: '#065F46' }} />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">
                  Miracles in the Canonization Process
                </h2>
              </div>

              {/* The formal requirement */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">The Formal Requirement</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Since Pope Benedict XIV&rsquo;s monumental treatise{' '}
                  <em>De Servorum Dei Beatificatione et de Beatorum Canonizatione</em> (1734) &mdash;
                  still foundational to canonization law &mdash; the process has required verified miracles
                  as confirmation of a candidate&rsquo;s intercession with God. Modern norms, codified in
                  the 1983 apostolic constitution <em>Divinus Perfectionis Magister</em>, maintain
                  this structure:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="rounded-lg p-5" style={{ backgroundColor: '#ECFDF5' }}>
                    <p className="font-bold mb-2" style={{ color: '#065F46' }}>For Beatification</p>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      One verified miracle, obtained after the declaration of heroic virtue. Martyrs are
                      exempt from the miracle requirement for beatification &mdash; their death is itself
                      the supreme sign.
                    </p>
                  </div>
                  <div className="rounded-lg p-5" style={{ backgroundColor: '#ECFDF5' }}>
                    <p className="font-bold mb-2" style={{ color: '#065F46' }}>For Canonization</p>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      One additional verified miracle, obtained after beatification. Even martyrs require
                      a miracle at this stage (unless waived by papal prerogative in exceptional cases).
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  What counts as a canonization miracle is almost exclusively a physical healing. It must
                  be instantaneous or rapid, complete, permanent, without medical explanation, and
                  demonstrably sought through the intercession of the beatified candidate.
                </p>
              </div>

              {/* The Dicastery */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  The Dicastery for the Causes of Saints
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  A panel of medical experts &mdash; who need not be Catholic &mdash; reviews the medical
                  dossier and must certify the healing as scientifically inexplicable. A separate
                  theological panel then certifies that the healing was plausibly obtained through the
                  candidate&rsquo;s intercession and not through other means. The certification process
                  can take 10&ndash;40 years. The Church&rsquo;s conservatism is designed to make error
                  extremely unlikely.
                </p>
              </div>

              {/* Four documented examples */}
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-6">Documented Canonization Miracles</h3>
                <div className="space-y-7">

                  <div className="rounded-xl border p-6" style={{ borderColor: '#A7F3D0', backgroundColor: '#F0FDF4' }}>
                    <div className="flex items-start gap-3 mb-3">
                      <Star className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#065F46' }} />
                      <p className="font-bold text-gray-800">
                        St. John Paul II&rsquo;s Canonization Miracle &mdash; Floribeth Mora (2011)
                      </p>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-sm">
                      Floribeth Mora, a Costa Rican woman, was diagnosed in April 2011 with an
                      inoperable cerebral aneurysm and given days to live. On May 1, 2011 &mdash; the
                      day of John Paul II&rsquo;s beatification &mdash; she was watching the ceremony on
                      television when she heard his voice saying: &ldquo;Rise, do not be afraid.&rdquo; She
                      immediately felt healed. Subsequent neurological examination found the aneurysm
                      had vanished without treatment. The Vatican&rsquo;s medical panel certified the
                      healing as medically inexplicable, leading to his canonization in 2014.
                    </p>
                  </div>

                  <div className="rounded-xl border p-6" style={{ borderColor: '#A7F3D0', backgroundColor: '#F0FDF4' }}>
                    <div className="flex items-start gap-3 mb-3">
                      <Star className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#065F46' }} />
                      <p className="font-bold text-gray-800">
                        St. Teresa of Calcutta&rsquo;s Canonization Miracle &mdash; Marcilio Haddad Andrino (2008)
                      </p>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-sm">
                      Marcilio Haddad Andrino, a Brazilian man, had been in a coma for a month following
                      a viral brain infection, with no neurological response and no medical hope of recovery.
                      His wife Monica prayed a novena to Mother Teresa and placed a medallion of her on
                      his forehead. Marcilio suddenly and fully regained consciousness with no neurological
                      damage &mdash; a result his physicians could not explain. The Vatican medical panel
                      certified this healing, leading to Mother Teresa&rsquo;s canonization in 2016.
                    </p>
                  </div>

                  <div className="rounded-xl border p-6" style={{ borderColor: '#A7F3D0', backgroundColor: '#F0FDF4' }}>
                    <div className="flex items-start gap-3 mb-3">
                      <Star className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#065F46' }} />
                      <p className="font-bold text-gray-800">
                        St. Faustina Kowalska&rsquo;s Canonization Miracle &mdash; Maureen Digan (1981)
                      </p>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-sm">
                      Maureen Digan, an American woman, suffered from lymphedema of the legs with
                      recurrent infections so severe that amputation had been recommended. She traveled
                      to the shrine of Divine Mercy in Krak&oacute;w and was completely healed. The
                      medical panel certified the healing as inexplicable by any known mechanism. This
                      miracle was accepted for St. Faustina&rsquo;s canonization in 2000 &mdash; the same
                      year John Paul II declared the feast of Divine Mercy for the universal Church.
                    </p>
                  </div>

                  <div className="rounded-xl border p-6" style={{ borderColor: '#A7F3D0', backgroundColor: '#F0FDF4' }}>
                    <div className="flex items-start gap-3 mb-3">
                      <Star className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#065F46' }} />
                      <p className="font-bold text-gray-800">
                        St. John Henry Newman&rsquo;s Canonization Miracle &mdash; Deacon Jack Sullivan (2001)
                      </p>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-sm">
                      Jack Sullivan, an American deacon studying for permanent diaconate ordination, was
                      diagnosed with severe spinal stenosis and was unable to walk due to spinal cord
                      compression. After praying to Cardinal Newman in 2001, he experienced an
                      immediate and complete restoration of mobility. Multiple physicians certified the
                      healing, and the Vatican&rsquo;s medical panel agreed it was medically inexplicable.
                      John Henry Newman was canonized in 2019.
                    </p>
                  </div>

                </div>
              </div>

              <div className="mt-6 rounded-lg p-4 text-sm text-gray-600" style={{ backgroundColor: '#F0FDF4' }}>
                <strong style={{ color: '#065F46' }}>Process timeline:</strong> Certification of a
                canonization miracle can take anywhere from 10 to 40 years. The Church&rsquo;s
                conservatism is deliberate &mdash; designed to prevent premature declarations and to
                ensure that what is called a miracle truly has no natural explanation.
              </div>
            </div>
          </div>
        )}

        {/* ==================== TAB 4: DOCUMENTED CASES ==================== */}
        {activeTab === 'documented' && (
          <div className="space-y-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#D1FAE5' }}>
                  <Scroll className="w-6 h-6" style={{ color: '#065F46' }} />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">
                  Other Documented Miraculous Healings
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-8">
                Beyond Lourdes and the formal canonization process, healings attributed to relics,
                shrines, prayer, and the intercession of holy men and women are documented throughout
                the Church&rsquo;s two-thousand-year history. The following six cases are among the
                best-documented.
              </p>

              <div className="space-y-8">

                {/* Case 1 */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                      style={{ backgroundColor: '#065F46' }}
                    >
                      1
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">
                      Blessed Imelda Lambertini (1322&ndash;1333)
                    </h3>
                  </div>
                  <div className="ml-11">
                    <p className="text-gray-700 leading-relaxed">
                      Imelda was a young Dominican novice who died at age eleven in a state of mystical
                      ecstasy following her first Communion &mdash; the Host was reported to have
                      miraculously levitated above her when the priest initially refused to give Communion
                      to one so young. While her case is primarily one of mystical phenomena, subsequent
                      healings were reported through her intercession and contributed to her beatification
                      in 1826. She is invoked as the patron of first communicants.
                    </p>
                  </div>
                </div>

                {/* Case 2 */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                      style={{ backgroundColor: '#065F46' }}
                    >
                      2
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">
                      Healings at the Tomb of St. Thomas Becket, Canterbury (12th&ndash;13th century)
                    </h3>
                  </div>
                  <div className="ml-11">
                    <p className="text-gray-700 leading-relaxed">
                      After Becket&rsquo;s martyrdom on December 29, 1170, miracles began almost
                      immediately. Two of his contemporaries &mdash; Benedict of Peterborough and William
                      of Canterbury &mdash; compiled a major collection documenting 703 miracles reported
                      at the tomb between 1171 and 1179. The cases include healings of blindness,
                      paralysis, epilepsy, and leprosy. This collection was examined during Becket&rsquo;s
                      canonization in 1173 &mdash; remarkably fast at just three years after his death
                      &mdash; and represents one of the best-documented medieval miracle collections in
                      existence.
                    </p>
                  </div>
                </div>

                {/* Case 3 */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                      style={{ backgroundColor: '#065F46' }}
                    >
                      3
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">
                      The Healings of Blessed Margaret of Castello&rsquo;s Petitioners (1320)
                    </h3>
                  </div>
                  <div className="ml-11">
                    <p className="text-gray-700 leading-relaxed">
                      Margaret of Castello &mdash; born with severe physical disabilities and abandoned by
                      her family &mdash; lived a life of extraordinary holiness among the poor of Citt&agrave;
                      di Castello. During her funeral in 1320, three miraculous healings were reported in
                      the same hour, witnessed by the assembled congregation. This triggered immediate
                      canonization proceedings; the cases are detailed in the <em>Acta Sanctorum</em>.
                      Margaret was beatified in 1609 and finally canonized in 2021.
                    </p>
                  </div>
                </div>

                {/* Case 4 */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                      style={{ backgroundColor: '#065F46' }}
                    >
                      4
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">
                      Padre Pio&rsquo;s Healings
                    </h3>
                  </div>
                  <div className="ml-11">
                    <p className="text-gray-700 leading-relaxed mb-3">
                      Over fifty years of stigmata and spiritual direction, Padre Pio was credited with
                      thousands of healings by his petitioners. Two cases are particularly notable for their
                      medical documentation:
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2 text-gray-700">
                        <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#10B981' }} />
                        <span>
                          <strong>Gemma Di Giorgio</strong> was born without pupils in her eyes &mdash;
                          verified by physicians including Dr. Valdoni of Rome. After Padre Pio blessed her,
                          she reported seeing for the first time. Subsequent examination confirmed vision
                          without any normal anatomical structure to produce it.
                        </span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#10B981' }} />
                        <span>
                          <strong>Giovanni Savino</strong>, blinded by an explosion in 1949, reported
                          restoration of sight after Padre Pio&rsquo;s prayer. Both cases are documented
                          in the beatification and canonization dossier for St. Padre Pio (canonized 2002).
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Case 5 */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                      style={{ backgroundColor: '#065F46' }}
                    >
                      5
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">
                      Venerable Solanus Casey&rsquo;s Petitioners (Detroit, USA)
                    </h3>
                  </div>
                  <div className="ml-11">
                    <p className="text-gray-700 leading-relaxed">
                      Solanus Casey (1870&ndash;1957), a Capuchin Franciscan lay brother judged
                      academically insufficient to be ordained a fully functioning priest, nonetheless served
                      as doorkeeper and counselor at St. Bonaventure Monastery in Detroit for decades.
                      He kept a careful journal of thousands of healing favors attributed to prayer and the
                      blessing of the sick through the Seraphic Mass Association. His cause for
                      beatification is actively under study by the Dicastery for the Causes of Saints.
                      The volume and documentation of attributed healings &mdash; in a modern, verifiable
                      American context &mdash; is remarkable.
                    </p>
                  </div>
                </div>

                {/* Case 6 */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                      style={{ backgroundColor: '#065F46' }}
                    >
                      6
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">
                      Blessed Chiara Luce Badano&rsquo;s Intercession
                    </h3>
                  </div>
                  <div className="ml-11">
                    <p className="text-gray-700 leading-relaxed">
                      Chiara Luce Badano (1971&ndash;1990), an Italian Focolare teenager who died of
                      bone cancer at nineteen with extraordinary faith and joy &mdash; offering each wave
                      of pain for her spiritual director and for the Pope &mdash; was beatified in 2010.
                      A case of healing through her intercession has been submitted to the Vatican for
                      examination in connection with her potential canonization: a young man reported
                      recovery from a serious illness following prayer to Chiara. The investigation is
                      ongoing.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* ==================== TAB 5: DISCERNMENT ==================== */}
        {activeTab === 'discernment' && (
          <div className="space-y-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#D1FAE5' }}>
                  <Shield className="w-6 h-6" style={{ color: '#065F46' }} />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">
                  How the Church Evaluates Healing Miracles
                </h2>
              </div>

              {/* Guiding Principles */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Guiding Principles</h3>
                <p className="text-gray-700 leading-relaxed">
                  The Church does not claim to manufacture miracles or to control divine action. The
                  investigative process is designed to rule out known natural causes &mdash; not to
                  &ldquo;prove&rdquo; the supernatural. What the Church certifies when it formally recognizes
                  a miracle is a negative judgment: no natural explanation has been found by qualified
                  investigators. The positive affirmation of divine intervention is a theological judgment
                  that follows, not precedes, the medical finding.
                </p>
              </div>

              {/* Four criteria */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  The Four Criteria (CMIL and Dicastery for the Causes of Saints)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      num: '1',
                      title: 'Certain Diagnosis',
                      desc: 'The disease was organically verified — not psychosomatic, not uncertain, not misdiagnosed. Standard modern diagnostic criteria must be met.',
                    },
                    {
                      num: '2',
                      title: 'Medically Incurable',
                      desc: 'The disease was considered incurable by current medicine at the time of the healing. Diseases with known effective treatments do not qualify.',
                    },
                    {
                      num: '3',
                      title: 'Rapid or Instantaneous Healing',
                      desc: 'The healing was not a normal recovery trajectory. Either instantaneous or achieved within a timeframe that medical science cannot account for.',
                    },
                    {
                      num: '4',
                      title: 'Permanent Recovery',
                      desc: 'The healing has not relapsed. The patient is monitored over a period of years; no recurrence of the disease is found.',
                    },
                  ].map((item) => (
                    <div key={item.num} className="rounded-xl p-5" style={{ backgroundColor: '#ECFDF5' }}>
                      <div className="flex items-center gap-3 mb-2">
                        <div
                          className="w-7 h-7 rounded-full flex items-center justify-center text-white font-bold text-sm"
                          style={{ backgroundColor: '#065F46' }}
                        >
                          {item.num}
                        </div>
                        <p className="font-bold" style={{ color: '#065F46' }}>{item.title}</p>
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why so few */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Why So Few Are Approved</h3>
                <ul className="space-y-2">
                  {[
                    'Most claimed cures are never formally submitted — the process requires cooperation from the claimant and their physicians.',
                    'Many submitted cases lack complete pre-cure medical documentation, making the before/after comparison impossible.',
                    'Many examined cases do not meet all four criteria — the disease may not have been organically verified, or the recovery may have been gradual.',
                    'The Church deliberately prefers false negatives to false positives. An unrecognized miracle does not harm the faith; a falsely recognized one would.',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700">
                      <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#10B981' }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Role of Faith */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">The Role of Faith &mdash; or Its Absence</h3>
                <p className="text-gray-700 leading-relaxed">
                  The Church does not claim faith is the mechanism of healing. Some of those healed at
                  Lourdes were not practicing believers. Jean-Pierre B&eacute;ly received the Anointing of
                  the Sick &mdash; a sacramental context &mdash; while Vittorio Micheli was a soldier
                  without notable religious devotion. The grace is given freely, as Christ gave it freely
                  in the Gospels, not always to those who asked and not always withheld from those outside
                  the covenant community. What faith provides is the context of reception and
                  interpretation &mdash; not a natural mechanism of cure.
                </p>
              </div>

              {/* 2024 Vatican norms */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">The 2024 Vatican Norms</h3>
                <p className="text-gray-700 leading-relaxed">
                  The new Dicastery for the Doctrine of the Faith document on supernatural phenomena
                  (2024) updated criteria and processes for evaluating all claimed supernatural events,
                  including healings. It adds a new intermediate classification for &ldquo;healings judged
                  remarkable and possibly inexplicable&rdquo; without requiring a full episcopal declaration
                  of miracle. It also modernizes the language around what constitutes &ldquo;medically
                  inexplicable&rdquo; in light of advances in our understanding of spontaneous remission
                  and psychosomatic phenomena.
                </p>
              </div>

              {/* Healing prayer today */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Healing Prayer in the Church Today</h3>
                <p className="text-gray-700 leading-relaxed">
                  The Catholic Charismatic Renewal (CCR) exercises the charism of healing prayer within
                  the sacramental life of the Church. CHARIS &mdash; the Vatican body coordinating the
                  CCR &mdash; provides guidelines for healing services, ensuring they remain within
                  Catholic doctrine and avoid sensationalism. Healing retreats centered on the Anointing
                  of the Sick and Eucharistic adoration represent the mainstream Catholic context for
                  healing prayer.
                </p>
              </div>

              {/* Natural vs. miraculous */}
              <div className="rounded-xl border p-6" style={{ backgroundColor: '#F0FDF4', borderColor: '#A7F3D0' }}>
                <h3 className="text-lg font-bold mb-3" style={{ color: '#065F46' }}>
                  Natural vs. Miraculous &mdash; A Key Distinction
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Spontaneous remission does occur in medicine &mdash; rarely, and almost always
                  gradually. The CMIL is specifically aware of this and applies strict criteria to rule it out.
                  They require more than mere &ldquo;spontaneous remission&rdquo;: they require
                  instantaneous or very rapid healing in conditions where spontaneous remission is not
                  recorded in the medical literature, and where the healing involves tissue regeneration or
                  structural restoration (such as the bone reconstruction of Vittorio Micheli) that has no
                  known medical mechanism at all. The bar is deliberately set above anything that current
                  or foreseeable medicine could explain.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ==================== TAB 6: SOURCES ==================== */}
        {activeTab === 'sources' && (
          <div className="space-y-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#D1FAE5' }}>
                  <Globe className="w-6 h-6" style={{ color: '#065F46' }} />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">
                  Sources and Further Reading
                </h2>
              </div>

              {/* Scripture and Catechism */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <BookOpen className="w-5 h-5" style={{ color: '#10B981' }} />
                  Scripture and Catechism
                </h3>
                <ul className="space-y-3">
                  {[
                    'James 5:14–15 — the apostolic foundation for the Sacrament of Anointing of the Sick and healing prayer.',
                    'Matthew 4:23–24; Luke 7:22; John 9; Mark 1:40–45 — key Gospel healing texts.',
                    'Catechism of the Catholic Church, §§ 156, 548 — miracles as signs of faith.',
                    'Catechism of the Catholic Church, §§ 1499–1532 — the Sacrament of Anointing of the Sick.',
                    'Catechism of the Catholic Church, §§ 1503–1510 — healing; Christ as physician of souls and bodies.',
                    'Catechism of the Catholic Church, §§ 946–962 — the Communion of Saints and intercession.',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700">
                      <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#10B981' }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Church Documents */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <Scroll className="w-5 h-5" style={{ color: '#10B981' }} />
                  Church Documents and Magisterial Sources
                </h3>
                <ul className="space-y-3">
                  {[
                    'Benedict XIV. De Servorum Dei Beatificatione et de Beatorum Canonizatione. 1734. Still the foundational legal treatise on the miracle requirement in canonization.',
                    'John Paul II. Divinus Perfectionis Magister (Apostolic Constitution). 1983. Updated norms for the causes of saints.',
                    'Dicastery for the Doctrine of the Faith. Norms for Proceeding in Cases of Claimed Supernatural Phenomena. 2024. Updated criteria and new classifications.',
                    'International Medical Committee of Lourdes (CMIL). Annual reports and dossiers. Lourdes, France.',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700">
                      <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#10B981' }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Historical and Scholarly */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <Eye className="w-5 h-5" style={{ color: '#10B981' }} />
                  Historical and Scholarly Works
                </h3>
                <ul className="space-y-3">
                  {[
                    'Cranston, Ruth. The Miracle of Lourdes. New York: Image Books, 1988. Sympathetic but carefully documented account of the Lourdes miracle tradition.',
                    'Theillier, Patrick, and Fournier-Favre, Olivia. I Was There: Miraculous Healings. Paris: Artège, 2012. Written by a former head of the Lourdes Medical Bureau — firsthand medical perspective.',
                    'West, D.J. Eleven Lourdes Miracles. London: Duckworth, 1957. A skeptical review of eleven recognized Lourdes miracles — valuable precisely for its rigorous critical examination.',
                    'Stefanidis, Demetrios. "The Lourdes Medical Bureau: A Critical Review." Journal of Religion and Health 46:4 (2007). Peer-reviewed academic assessment.',
                    'Keener, Craig S. Miracles: The Credibility of the New Testament Accounts. 2 vols. Grand Rapids: Baker Academic, 2011. Exhaustive scholarly documentation of healing claims across cultures and centuries.',
                    'Benedict of Peterborough and William of Canterbury. Miracula Sancti Thomae Cantuariensis. 12th century. Primary source collection of 703 miracles at Becket\'s tomb.',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700">
                      <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#10B981' }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Canonization Decrees */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5" style={{ color: '#10B981' }} />
                  Individual Canonization Decrees
                </h3>
                <ul className="space-y-3">
                  {[
                    'Acta Apostolicae Sedis — Canonization Decree for John Paul II (2014). Vatican City.',
                    'Acta Apostolicae Sedis — Canonization Decree for Teresa of Calcutta (2016). Vatican City.',
                    'Acta Apostolicae Sedis — Canonization Decree for Faustina Kowalska (2000). Vatican City.',
                    'Acta Apostolicae Sedis — Canonization Decree for John Henry Newman (2019). Vatican City.',
                    'Acta Apostolicae Sedis — Canonization Decree for Padre Pio of Pietrelcina (2002). Vatican City.',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700">
                      <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#10B981' }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Note on primary sources */}
              <div className="rounded-xl border p-5" style={{ backgroundColor: '#ECFDF5', borderColor: '#A7F3D0' }}>
                <p className="text-sm text-gray-700 leading-relaxed">
                  <strong style={{ color: '#065F46' }}>A Note on Primary Sources:</strong> The most
                  authoritative sources for individual Lourdes miracles are the original CMIL dossiers and
                  the episcopal declarations, available through the Lourdes Medical Bureau directly. The
                  Bureau maintains a public archive and welcomes scholarly inquiry. For canonization
                  miracles, the <em>Acta Apostolicae Sedis</em> and the official positiones of the
                  Dicastery for the Causes of Saints are the primary sources.
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}
