'use client'

import { useState } from 'react'
import {
  Search,
  Clock,
  Microscope,
  Scale,
  Landmark,
  FileText,
  Shield,
  ScrollText,
  BookOpen,
  CheckCircle,
  HelpCircle,
  MapPin,
  Users,
  Church,
  Layers,
  Calendar,
  Home,
  Waves,
  Droplets,
} from 'lucide-react'

type TabId =
  | 'what-is-archaeology'
  | 'old-testament-finds'
  | 'new-testament-finds'
  | 'exodus-question'
  | 'dead-sea-scrolls'
  | 'shroud-of-turin'

const tabs: { id: TabId; label: string }[] = [
  { id: 'what-is-archaeology', label: 'What Is Biblical Archaeology?' },
  { id: 'old-testament-finds', label: 'Old Testament Discoveries' },
  { id: 'new-testament-finds', label: 'New Testament Discoveries' },
  { id: 'exodus-question', label: 'The Exodus Question' },
  { id: 'dead-sea-scrolls', label: 'The Dead Sea Scrolls' },
  { id: 'shroud-of-turin', label: 'The Shroud of Turin' },
]

export default function ArchaeologyPage() {
  const [activeTab, setActiveTab] = useState<TabId>('what-is-archaeology')

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Archaeology &amp; the Bible
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From the Dead Sea Scrolls to the ossuary of Caiaphas, archaeology has repeatedly
            illuminated and confirmed the world of the Bible. This page surveys the major
            discoveries, the contested questions, and the Church&rsquo;s approach to reading
            archaeological evidence.
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

        {/* ==================== TAB 1: WHAT IS BIBLICAL ARCHAEOLOGY ==================== */}
        {activeTab === 'what-is-archaeology' && (
          <div className="space-y-8">

            {/* Defining the Field */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Search className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Defining the Field</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Biblical archaeology is the systematic excavation and study of sites, artifacts,
                texts, and material culture related to the lands and peoples of the Bible. It is
                a discipline that sits at the intersection of history, anthropology, linguistics,
                and &mdash; for believers &mdash; theology.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">
                  What Biblical Archaeology Is &mdash; and Is Not
                </h3>
                <ul className="space-y-3 text-amber-800">
                  <li className="flex items-start gap-2">
                    <span className="font-bold mt-0.5">&#8227;</span>
                    <span>It is <em>not</em> the same as &ldquo;trying to prove the Bible is true.&rdquo;
                    Genuine archaeology follows evidence wherever it leads &mdash; including to results
                    that complicate or challenge a simplistic reading of the biblical text.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold mt-0.5">&#8227;</span>
                    <span>It is <em>not</em> the same as dismissing the Bible as legend. The goal is
                    contextual illumination: understanding the historical and cultural world in which
                    the biblical texts were written and read.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold mt-0.5">&#8227;</span>
                    <span>The term &ldquo;biblical archaeology&rdquo; is sometimes contested by secular
                    archaeologists who prefer &ldquo;Syro-Palestinian archaeology&rdquo; or &ldquo;Levantine
                    archaeology&rdquo; as more neutral designations &mdash; but the former remains widely used
                    in both academic and popular contexts.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">
                  The Pontifical Biblical Commission (1993)
                </h3>
                <p className="text-blue-800 italic mb-3">
                  &ldquo;Archaeology can contribute very much to a better knowledge of the living
                  conditions in which the events of the Bible unfolded and of the literary production
                  of the biblical period.&rdquo;
                </p>
                <p className="text-blue-700 text-sm">
                  &mdash; Pontifical Biblical Commission, <em>The Interpretation of the Bible in the
                  Church</em>, 1993, Section A.3
                </p>
              </div>
            </div>

            {/* A Brief History */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">A Brief History of the Field</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Biblical archaeology as a scientific discipline is roughly two centuries old, but
                it has passed through dramatically different phases &mdash; from pious confirmation
                to rigorous skepticism and, finally, to a more nuanced engagement with the evidence.
              </p>

              <div className="space-y-4">
                <div className="border-l-4 border-amber-400 pl-5 py-2">
                  <h3 className="font-bold text-gray-800 mb-1">Edward Robinson (1838)</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    The first scientific exploration of Palestine. Robinson identified dozens of biblical
                    sites by recognizing that Arabic place-names often preserved ancient Hebrew names in
                    corrupted form &mdash; a breakthrough method that confirmed the geographical reality
                    of many biblical locations.
                  </p>
                </div>

                <div className="border-l-4 border-blue-400 pl-5 py-2">
                  <h3 className="font-bold text-gray-800 mb-1">Charles Warren (1867&ndash;70)</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    First systematic excavation of Jerusalem. Warren discovered the shaft that bears his
                    name (Warren&rsquo;s Shaft) and established the foundations of Jerusalem archaeology,
                    mapping the massive Herodian Temple Mount retaining walls still visible today.
                  </p>
                </div>

                <div className="border-l-4 border-purple-400 pl-5 py-2">
                  <h3 className="font-bold text-gray-800 mb-1">William Flinders Petrie (1890)</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Established the two foundational methods of modern archaeology: stratigraphy (reading
                    layers of occupation) and pottery chronology. Petrie demonstrated that pottery styles
                    changed predictably over time, making broken sherds reliable dating tools &mdash; a
                    discovery that transformed the entire discipline.
                  </p>
                </div>

                <div className="border-l-4 border-green-400 pl-5 py-2">
                  <h3 className="font-bold text-gray-800 mb-1">William F. Albright (1891&ndash;1971)</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Often called &ldquo;the father of biblical archaeology.&rdquo; Albright excavated Tell
                    Beit Mirsim, developed pottery chronology for the region, and used archaeology to affirm
                    the historical reliability of the Bible. His maximalist approach dominated the field for
                    decades and shaped a generation of American biblical scholars.
                  </p>
                </div>

                <div className="border-l-4 border-red-400 pl-5 py-2">
                  <h3 className="font-bold text-gray-800 mb-1">Kathleen Kenyon (1952&ndash;58)</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Excavated Jericho using more rigorous stratigraphic methods and challenged Albright&rsquo;s
                    conclusions. Kenyon found no evidence of walled Jericho at the time traditionally associated
                    with Joshua &mdash; raising important questions about the historical interpretation of the
                    conquest narrative that scholars continue to debate.
                  </p>
                </div>

                <div className="border-l-4 border-gray-400 pl-5 py-2">
                  <h3 className="font-bold text-gray-800 mb-1">Israel Finkelstein (Tel Aviv University, from 1990s)</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Representative of the &ldquo;minimalist&rdquo; school &mdash; more skeptical about early
                    biblical history, particularly the United Monarchy of David and Solomon. Archaeologically
                    important and methodologically rigorous, Finkelstein&rsquo;s work is taken seriously even
                    by scholars who dispute his more sweeping historical conclusions.
                  </p>
                </div>
              </div>

              <div className="bg-amber-50 p-5 rounded-lg mt-6">
                <p className="text-amber-800 text-sm">
                  <strong>The post-1970s shift:</strong> Biblical archaeology became more systematic,
                  less apologetic, and more open to complex and ambiguous conclusions. Modern practitioners
                  apply increasingly sophisticated scientific tools &mdash; DNA analysis, isotopic studies,
                  LiDAR surveys &mdash; to questions that previous generations could only address with a
                  trowel and a pottery sherd.
                </p>
              </div>
            </div>

            {/* Methods */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Microscope className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Methods Used in Biblical Archaeology</h2>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h3 className="font-bold text-gray-800 mb-2">Stratigraphy</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Reading layers (strata) of occupation. Each occupational layer represents a historical
                    period; disruptions (fires, destructions, rebuilding) mark transitions between periods.
                    Objects found within a layer help date the layer with increasing precision.
                  </p>
                </div>

                <div className="bg-gray-50 p-5 rounded-lg">
                  <h3 className="font-bold text-gray-800 mb-2">Pottery Typology</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Pottery styles changed predictably over time. A broken pot sherd can date an
                    archaeological layer within 50&ndash;100 years. It is the most common and reliable
                    dating tool in Levantine archaeology.
                  </p>
                </div>

                <div className="bg-gray-50 p-5 rounded-lg">
                  <h3 className="font-bold text-gray-800 mb-2">Epigraphy</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    The study of inscriptions and ancient writing. Inscriptions confirm names, events,
                    languages, and administrative structures &mdash; and sometimes directly corroborate
                    biblical persons or places mentioned in the text.
                  </p>
                </div>

                <div className="bg-gray-50 p-5 rounded-lg">
                  <h3 className="font-bold text-gray-800 mb-2">Radiocarbon Dating (C-14)</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Measures the decay of carbon-14 in organic material (wood, bone, textile, seeds).
                    Reliable within &plusmn;50&ndash;100 years; invaluable for scrolls, wooden objects, and
                    human remains where pottery typology cannot be applied.
                  </p>
                </div>

                <div className="bg-gray-50 p-5 rounded-lg">
                  <h3 className="font-bold text-gray-800 mb-2">Luminescence Dating</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Dates the last time sediment or fired ceramics were exposed to light or heat.
                    Particularly useful for dating architectural layers and fired mudbrick without
                    relying on organic material.
                  </p>
                </div>

                <div className="bg-gray-50 p-5 rounded-lg">
                  <h3 className="font-bold text-gray-800 mb-2">LiDAR &amp; Ground-Penetrating Radar</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Non-invasive survey technologies that reveal buried structures, road systems, and
                    ancient water channels without excavation. Increasingly transforming our understanding
                    of ancient settlement patterns across the Levant.
                  </p>
                </div>
              </div>
            </div>

            {/* Faith and Archaeology */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Scale className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Proper Relationship: Faith and Archaeology</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                For Catholic believers, the relationship between archaeology and faith is not
                adversarial &mdash; it is complementary. The Church has consistently welcomed
                honest historical inquiry as a friend, not a threat, to faith.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">
                  Key Principles for Reading Archaeological Evidence
                </h3>
                <ul className="space-y-3 text-amber-800">
                  <li className="flex items-start gap-2">
                    <span className="font-bold mt-0.5">1.</span>
                    <span><strong>Absence of evidence is not evidence of absence.</strong> Most ancient
                    events left no physical trace. The silence of the Egyptian record about the Exodus
                    does not prove the Exodus did not happen &mdash; it reflects the nature of ancient
                    record-keeping, which systematically omitted defeats and humiliations.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold mt-0.5">2.</span>
                    <span><strong>Genuine evidence must be taken seriously.</strong> When archaeology
                    complicates a simplistic or literalist reading of the biblical text, this is an
                    invitation to deepen one&rsquo;s exegetical understanding, not to panic. The Bible
                    contains history, theology, poetry, liturgy, and law &mdash; genres that do not all
                    function identically.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold mt-0.5">3.</span>
                    <span><strong>Archaeology illuminates context; it does not adjudicate faith claims.</strong>
                    No archaeological discovery can &ldquo;prove&rdquo; the Resurrection or &ldquo;disprove&rdquo;
                    the existence of God. These are metaphysical questions that lie outside the competence
                    of any empirical science.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">
                  <em>Dei Verbum</em> 12 (Vatican II)
                </h3>
                <p className="text-blue-800 italic mb-3">
                  &ldquo;Since God speaks in Sacred Scripture through men in human fashion, the
                  interpreter of Sacred Scripture, in order to see clearly what God wanted to communicate
                  to us, should carefully investigate what meaning the sacred writers really intended&hellip;
                  To search out the intention of the sacred writers, attention should be given, among other
                  things, to <em>literary forms</em>. For truth is set forth and expressed differently in
                  texts which are variously historical, prophetic, poetic, or of other forms of discourse.&rdquo;
                </p>
                <p className="text-blue-700 text-sm">
                  &mdash; Vatican II, <em>Dei Verbum</em>, 12 (1965)
                </p>
              </div>
            </div>

          </div>
        )}

        {/* ==================== TAB 2: OLD TESTAMENT DISCOVERIES ==================== */}
        {activeTab === 'old-testament-finds' && (
          <div className="space-y-8">

            {/* Merneptah Stele */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Landmark className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Merneptah Stele (1208 BC)</h2>
              </div>

              <div className="bg-amber-50 p-5 rounded-lg mb-6">
                <p className="text-amber-800 text-sm">
                  <strong>Discovered:</strong> 1896, Luxor, Egypt &mdash; now in the Cairo Museum.
                  A black granite victory stele of Pharaoh Merneptah, son of Ramesses II.
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-5">
                The Merneptah Stele contains the earliest known extrabiblical reference to
                &ldquo;Israel&rdquo; in any ancient document &mdash; predating any other non-biblical
                mention by centuries. Among Merneptah&rsquo;s boasts of military victories in Canaan
                appears the line:
              </p>

              <div className="bg-purple-50 p-6 rounded-lg mb-6">
                <p className="text-purple-800 italic text-lg mb-3">
                  &ldquo;Israel is laid waste; his seed is not.&rdquo;
                </p>
                <p className="text-purple-700 text-sm">
                  &mdash; Merneptah Stele, c. 1208 BC (translation: Miriam Lichtheim)
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                The significance of this inscription can scarcely be overstated. The hieroglyphic
                determinative used for &ldquo;Israel&rdquo; indicates a <em>people</em>, not a
                city-state or kingdom &mdash; consistent with the tribal confederation period described
                in the book of Judges. This means that a people called &ldquo;Israel&rdquo; was
                sufficiently established in Canaan by 1208 BC to attract the attention of the greatest
                empire in the ancient Near East.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Regardless of where one stands on the precise dating of the Exodus and the
                Settlement, the Merneptah Stele establishes an archaeological anchor for Israel&rsquo;s
                presence in Canaan in the late Bronze Age.
              </p>
            </div>

            {/* Tel Dan Inscription */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <FileText className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Tel Dan Inscription (&sim;9th century BC)</h2>
              </div>

              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <p className="text-blue-800 text-sm">
                  <strong>Discovered:</strong> 1993&ndash;94, Tel Dan (northern Israel). A fragmentary
                  basalt stele in Aramaic, likely erected by the Aramean king Hazael of Damascus.
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-5">
                Among the fragments of this victory inscription appears the phrase &ldquo;House of
                David&rdquo; (<em>bytdwd</em> in Aramaic) &mdash; the first and only extrabiblical
                mention of the Davidic dynasty ever found. Before this discovery, critics of biblical
                historicity frequently argued that David was a legendary or mythological figure, since
                no non-biblical source had confirmed his existence.
              </p>

              <div className="bg-green-50 p-6 rounded-lg mb-5">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle className="w-5 h-5 text-green-700" />
                  <h3 className="font-semibold text-green-900">What the Inscription Confirms</h3>
                </div>
                <ul className="text-green-800 text-sm space-y-2">
                  <li>The Davidic dynasty was a known historical entity &mdash; not a later theological invention</li>
                  <li>Israel&rsquo;s neighbors (in this case, Aram-Damascus) identified the Judean state by the name of its founding king within approximately 150 years of David&rsquo;s reign</li>
                  <li>The stele describes a military victory over the &ldquo;king of Israel&rdquo; and the &ldquo;king of the House of David&rdquo; &mdash; consistent with 2 Kings 8&ndash;9 and Hazael&rsquo;s campaigns against both kingdoms</li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed">
                The Tel Dan inscription fundamentally altered the terms of the scholarly debate about
                the United Monarchy. Even skeptical archaeologists now acknowledge that the Davidic
                dynasty was real and historically remembered. The question has shifted from whether
                David existed to what the precise nature and scale of his kingdom was.
              </p>
            </div>

            {/* Hezekiah Bulla */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-green-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Hezekiah&rsquo;s Seal Bulla &amp; the Siloam Tunnel (c. 700 BC)</h2>
              </div>

              <div className="bg-green-50 p-5 rounded-lg mb-6">
                <p className="text-green-800 text-sm">
                  <strong>Discovered:</strong> 2015, Ophel excavations in Jerusalem (Eilat Mazar&rsquo;s
                  team). A clay seal impression (<em>bulla</em>) bearing the king&rsquo;s personal seal.
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-5">
                The bulla is inscribed: &ldquo;Belonging to Hezekiah [son of] Ahaz, king of Judah.&rdquo;
                Hezekiah is one of the most extensively documented figures in the entire Hebrew Bible
                (2 Kings 18&ndash;20; Isaiah 36&ndash;39; 2 Chronicles 29&ndash;32) and is also mentioned
                in Assyrian annals. This bulla is the first seal impression of an Israelite or Judean
                king ever recovered in a scientific, controlled excavation &mdash; as opposed to the
                antiquities market, where provenance cannot be guaranteed.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg mb-5">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">The Siloam Tunnel Inscription</h3>
                <p className="text-amber-800 mb-3">
                  The famous tunnel carved through 533 metres of bedrock beneath the City of David
                  &mdash; bringing water from the Gihon Spring to the Pool of Siloam inside the city
                  walls before the Assyrian siege under Sennacherib &mdash; contains an inscription
                  celebrating the moment the two teams of workmen met in the middle:
                </p>
                <p className="text-amber-800 italic mb-3">
                  &ldquo;And this is the account of the breach: while the excavators were swinging
                  their axes, each toward his fellow, and while there were yet three cubits to be
                  broken through, there was heard the voice of a man calling to his fellow&hellip;&rdquo;
                </p>
                <p className="text-amber-700 text-sm">
                  &mdash; Siloam Tunnel Inscription, c. 701 BC; cf. 2 Kings 20:20; 2 Chronicles 32:30.
                  Now in the Istanbul Archaeological Museum.
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed">
                Together, the bulla and the tunnel inscription provide two independent physical
                confirmations of the biblical account of Hezekiah&rsquo;s reign and his preparation
                of Jerusalem for the Assyrian siege &mdash; one of the best-documented events in all
                of biblical history from both biblical and extrabiblical sources.
              </p>
            </div>

            {/* Black Obelisk */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Landmark className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Black Obelisk of Shalmaneser III (c. 841 BC)</h2>
              </div>

              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <p className="text-blue-800 text-sm">
                  <strong>Discovered:</strong> 1846, Nimrud (ancient Kalhu, Assyria). Now in the
                  British Museum, London. A black basalt obelisk 2 metres tall, carved on all four
                  sides with scenes of tribute-bearing delegations from five conquered regions.
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-5">
                One of the five tribute panels depicts a figure kneeling prostrate before the
                Assyrian king, with an Akkadian inscription identifying him as: &ldquo;Iaua son of
                Omri.&rdquo; This is almost certainly Jehu, king of Israel (r. 842&ndash;815 BC),
                who appears in 2 Kings 9&ndash;10 as the general who overthrew the house of Omri,
                assassinated King Joram, and established his own dynasty.
              </p>

              <p className="text-gray-700 leading-relaxed mb-5">
                The Assyrians referred to Israel as &ldquo;the House of Omri&rdquo; long after
                Omri&rsquo;s dynasty had ended &mdash; just as the Tel Dan inscription did. Jehu,
                despite having destroyed the Omride dynasty, was apparently still identified by the
                Assyrians under that geographical/political label.
              </p>

              <p className="text-gray-700 leading-relaxed">
                The obelisk provides one of the earliest visual representations of a biblical figure
                and confirms the tributary relationship between northern Israel and Assyria documented
                in 2 Kings 17.
              </p>
            </div>

            {/* Mesha Stele */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <ScrollText className="w-6 h-6 text-purple-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Mesha Stele / Moabite Stone (c. 840 BC)</h2>
              </div>

              <div className="bg-purple-50 p-5 rounded-lg mb-6">
                <p className="text-purple-800 text-sm">
                  <strong>Discovered:</strong> 1868, Dhiban (ancient Dibon, Jordan). Now in the
                  Louvre, Paris. A black basalt stele of Mesha, king of Moab, celebrating his
                  deliverance from Israelite domination.
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-5">
                The Mesha Stele is remarkable for multiple reasons. It mentions &ldquo;Omri, king
                of Israel&rdquo; and &ldquo;the house of Omri&rdquo; explicitly, confirming the
                Israelite kingdom&rsquo;s dominance over Moab during the Omride period (cf. 2 Kings 3).
                It references specific Israelite towns and the tribe of Gad &mdash; details consistent
                with the biblical geography of the Transjordan.
              </p>

              <p className="text-gray-700 leading-relaxed mb-5">
                Most intriguingly, line 31 of the stele has been read by some epigraphers (including
                Andr&eacute; Lemaire of the Sorbonne) as containing the phrase &ldquo;House of
                David&rdquo; &mdash; which would make the Mesha Stele a second extrabiblical
                attestation of the Davidic dynasty, independent of the Tel Dan inscription. This
                reading is disputed, but it remains a live scholarly question.
              </p>

              <p className="text-gray-700 leading-relaxed">
                The stele also illustrates an important methodological principle: biblical events
                are sometimes confirmed not by Israelite records but by the records of Israel&rsquo;s
                enemies, who had no motive to embellish the Israelite narrative.
              </p>
            </div>

            {/* Dead Sea Scrolls OT preview */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Dead Sea Scrolls (1947&ndash;1956)</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-5">
                The single most important manuscript discovery in the history of biblical scholarship.
                Approximately 900 manuscripts &mdash; including fragments of every book of the Hebrew
                Bible except Esther &mdash; were found in eleven caves near Khirbet Qumran between
                1947 and 1956. Dates range from approximately 250 BC to 68 AD.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-5">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">
                  The Great Isaiah Scroll (1QIsa<sup>a</sup>)
                </h3>
                <p className="text-blue-800 mb-3">
                  The complete 66-chapter Book of Isaiah, copied c. 125 BC &mdash; one thousand years
                  older than any previously known Hebrew manuscript of the same text. When compared with
                  the Masoretic Text used by modern Bibles, scholars found word-for-word agreement in the
                  vast majority of passages, with differences limited to minor spelling variations and
                  occasional word choices. No doctrinal content was altered.
                </p>
                <p className="text-blue-800">
                  This remains the most powerful single demonstration of the fidelity with which Jewish
                  scribes transmitted the sacred text across a millennium.
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed">
                The Dead Sea Scrolls are treated in full detail in the dedicated &ldquo;Dead Sea Scrolls&rdquo;
                tab. Their significance for both Old and New Testament studies is sufficiently large to merit
                extended treatment.
              </p>
            </div>

          </div>
        )}

        {/* ==================== TAB 3: NEW TESTAMENT DISCOVERIES ==================== */}
        {activeTab === 'new-testament-finds' && (
          <div className="space-y-8">

            {/* Pontius Pilate Inscription */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Landmark className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Pontius Pilate Inscription (Caesarea Maritima, 1961)</h2>
              </div>

              <div className="bg-amber-50 p-5 rounded-lg mb-6">
                <p className="text-amber-800 text-sm">
                  <strong>Discovered:</strong> 1961, during excavations of the Roman theater at
                  Caesarea Maritima by an Italian team led by Antonio Frova. Now in the Israel Museum,
                  Jerusalem; a cast is displayed at the site.
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-5">
                A limestone building block, originally part of a dedication inscription for a
                public building (the <em>Tiberieum</em>, apparently dedicated to the Emperor Tiberius),
                bears a Latin text that includes the unmistakable words:
              </p>

              <div className="bg-purple-50 p-6 rounded-lg mb-6">
                <p className="text-purple-800 italic font-mono text-sm mb-3">
                  [DIS AUGUSTI]S TIBERIEUM<br />
                  [PONTI]VS PILATVS<br />
                  [PRAEF]ECTVS IVDAEA[E]<br />
                  [FECIT D]E[DICAVIT]
                </p>
                <p className="text-purple-700 text-sm">
                  &ldquo;Pontius Pilate, Prefect of Judaea&rdquo; &mdash; Caesarea Maritima
                  Inscription, c. 26&ndash;36 AD
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                Before this discovery, a minority of scholars had questioned whether Pontius Pilate
                was a historical figure or a later legendary addition to the Passion narrative. The
                inscription settled that question permanently.
              </p>

              <div className="bg-green-50 p-5 rounded-lg">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle className="w-5 h-5 text-green-700" />
                  <h3 className="font-semibold text-green-900">What the Inscription Confirms</h3>
                </div>
                <ul className="text-green-800 text-sm space-y-2">
                  <li>Pilate&rsquo;s existence as a historical figure (no longer in serious doubt)</li>
                  <li>His title: <em>Praefectus</em> (&ldquo;Prefect&rdquo;) of Judaea &mdash; not
                  &ldquo;Procurator&rdquo; as some later sources wrote; consistent with Josephus&rsquo;
                  and Tacitus&rsquo; accounts</li>
                  <li>His tenure under Emperor Tiberius &mdash; consistent with Luke 3:1 (&ldquo;in the
                  fifteenth year of the reign of Tiberius Caesar&hellip;&rdquo;)</li>
                  <li>His administrative headquarters at Caesarea Maritima, not Jerusalem &mdash;
                  consistent with why Pilate came to Jerusalem for Passover (John 18:28&ndash;29)</li>
                </ul>
              </div>
            </div>

            {/* Caiaphas Ossuary */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <FileText className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Caiaphas Ossuary (Jerusalem, 1990)</h2>
              </div>

              <div className="bg-blue-50 p-5 rounded-lg mb-6">
                <p className="text-blue-800 text-sm">
                  <strong>Discovered:</strong> November 1990, the Peace Forest south of Jerusalem
                  &mdash; unearthed during construction work. Now in the Israel Museum, Jerusalem.
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-5">
                Construction workers accidentally broke through the ceiling of a rock-cut tomb
                and found twelve limestone ossuaries (bone boxes). The most ornately decorated of
                them bears two inscriptions: &ldquo;Yehosef bar Qayafa&rdquo; and &ldquo;Yehosef
                bar Qafa&rdquo; &mdash; that is, &ldquo;Joseph son of Caiaphas&rdquo; in Aramaic.
              </p>

              <p className="text-gray-700 leading-relaxed mb-5">
                This is the full name of the High Priest who, according to all four Gospels, presided
                at the trial of Christ (Matthew 26:57; John 11:49&ndash;51; 18:13&ndash;14). The
                historian Josephus confirms that the High Priest&rsquo;s full name was &ldquo;Joseph
                called Caiaphas&rdquo; and that he held office approximately 18&ndash;36 AD
                (<em>Antiquities</em> 18.2.2; 18.4.3).
              </p>

              <p className="text-gray-700 leading-relaxed mb-5">
                The ossuary contained the bones of six individuals, including a 60-year-old male.
                It is possible &mdash; though not certain &mdash; that this is the ossuary of the
                High Priest himself. Whether or not that identification is correct, the ossuary
                provides the first physical connection to a named figure in the Passion narrative.
              </p>

              <div className="bg-amber-50 p-5 rounded-lg">
                <p className="text-amber-800 text-sm">
                  <strong>Note on the James Ossuary:</strong> A separate ossuary bearing the inscription
                  &ldquo;James son of Joseph, brother of Jesus&rdquo; surfaced in 2002, but its
                  provenance is unverified (it emerged from the antiquities market, not a controlled
                  excavation) and part of the inscription has been disputed as a modern addition.
                  The scholarly consensus remains cautious about this piece.
                </p>
              </div>
            </div>

            {/* Pool of Bethesda */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Droplets className="w-6 h-6 text-green-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Pool of Bethesda (excavated 1956&ndash;64)</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-5">
                John 5:2 describes &ldquo;a pool, called in Hebrew Bethesda, which has five
                porticoes&rdquo; &mdash; an unusual architectural detail. For generations, critics
                argued that this &ldquo;five-porticoed&rdquo; pool was theologically symbolic (a
                reference to the five books of Moses) rather than a real place, since no such pool
                was known from ancient sources.
              </p>

              <p className="text-gray-700 leading-relaxed mb-5">
                Excavations near St. Anne&rsquo;s Church in Jerusalem (1956&ndash;64) confirmed that
                the pool of Bethesda was real, precisely as John described it. The site consists of
                <em> two</em> adjacent basins separated by a central dividing wall &mdash; creating
                four exterior colonnades (one on each side) plus one colonnade running along the
                central partition, for a total of five. John&rsquo;s &ldquo;five porticoes&rdquo;
                is straightforward architectural description, not allegory.
              </p>

              <div className="bg-green-50 p-5 rounded-lg">
                <p className="text-green-800 text-sm">
                  <strong>Significance for Johannine studies:</strong> This is one of several
                  confirmations that the Fourth Gospel&rsquo;s author possessed detailed, accurate
                  knowledge of pre-70 AD Jerusalem &mdash; consistent with the tradition of apostolic
                  or eyewitness composition. John&rsquo;s local topographical knowledge (Bethesda,
                  Siloam, the Praetorium, the &ldquo;Pavement&rdquo; of John 19:13) has been confirmed
                  repeatedly by archaeology.
                </p>
              </div>
            </div>

            {/* Pool of Siloam */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Waves className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Pool of Siloam (Rediscovered 2004)</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-5">
                John 9:7 describes the Lord sending the man born blind to wash in &ldquo;the pool
                of Siloam.&rdquo; A Byzantine-era pool had long been known and venerated at the site,
                but in June 2004, city workers repairing a broken sewer pipe in the City of David
                uncovered a large stepped structure &mdash; identified immediately as the actual
                first-century Pool of Siloam.
              </p>

              <p className="text-gray-700 leading-relaxed mb-5">
                The newly found pool is significantly larger than the Byzantine structure: broad
                stone steps lead down to the water on three sides, a design consistent with its
                use as a <em>miqveh</em> (ritual immersion pool) for pilgrims ascending to the
                Temple. Coins found in the plaster date its construction to the late Hasmonean period
                and its use through the first century AD.
              </p>

              <div className="bg-blue-50 p-5 rounded-lg">
                <p className="text-blue-800 text-sm">
                  <strong>Connection to Hezekiah&rsquo;s Tunnel:</strong> The Pool of Siloam is fed
                  by Hezekiah&rsquo;s Tunnel (see the Old Testament Discoveries tab). The same tunnel
                  that Hezekiah built in 701 BC to protect Jerusalem&rsquo;s water supply was still in
                  use in the first century AD. The pool where the blind man washed is directly connected
                  to one of the Old Testament&rsquo;s most dramatically confirmed engineering works.
                </p>
              </div>
            </div>

            {/* House of Peter */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Home className="w-6 h-6 text-green-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The House of Peter, Capernaum</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-5">
                Mark 1:29&ndash;31 describes the Lord entering &ldquo;the house of Simon and Andrew&rdquo;
                in Capernaum and healing Peter&rsquo;s mother-in-law. Franciscan archaeologists
                excavating beneath the 5th-century octagonal church at Capernaum (1968&ndash;2003)
                made a remarkable find.
              </p>

              <p className="text-gray-700 leading-relaxed mb-5">
                Beneath the octagonal church lay an earlier 4th-century house-church, and beneath
                that lay a 1st-century fishing house with plastered walls &mdash; unusual for
                Capernaum, where houses were typically built of rough basalt without plaster. The
                plastered walls were covered with inscriptions in multiple languages (Aramaic, Greek,
                Syriac, Latin), including fish symbols, crosses, and multiple instances of the names
                &ldquo;Peter&rdquo; and &ldquo;Lord Jesus Christ.&rdquo;
              </p>

              <div className="bg-green-50 p-5 rounded-lg mb-5">
                <p className="text-green-800 text-sm">
                  <strong>The archaeological logic:</strong> A 4th-century church was deliberately
                  built over a specific 1st-century house. That house attracted veneration (graffiti)
                  at least from the 2nd century onward. The church was built precisely over that
                  specific structure, not over nearby structures. This pattern of building &mdash;
                  a <em>loca sancta</em> tradition &mdash; is well-attested across early Christianity
                  as a way of preserving the memory of sacred sites.
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed">
                Pope Francis celebrated Mass at the site during his 2014 pilgrimage to the Holy
                Land. The Franciscan Custody of the Holy Land continues to maintain the site, which
                remains open to pilgrims.
              </p>
            </div>

            {/* Nazareth Inscription */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <ScrollText className="w-6 h-6 text-purple-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Nazareth Inscription (&sim;1st century AD)</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-5">
                A marble slab bearing a Greek imperial decree was acquired in Nazareth around 1878
                and eventually deposited in the Biblioth&egrave;que nationale, Paris. The inscription
                is dated to approximately the reign of Tiberius or Claudius (14&ndash;54 AD) based on
                letter forms and style.
              </p>

              <p className="text-gray-700 leading-relaxed mb-5">
                The decree forbids the removal of bodies from tombs and imposes an unusually severe
                penalty &mdash; death &mdash; for violators. This is remarkable because Roman law
                typically treated tomb violation as a civil rather than capital matter.
              </p>

              <div className="bg-purple-50 p-5 rounded-lg mb-5">
                <p className="text-purple-800 text-sm italic mb-2">
                  &ldquo;&hellip;It is my decision [concerning] graves and tombs &mdash; whoever
                  has made them for the religious observances of parents, or children, or household
                  members &mdash; that these remain undisturbed forever&hellip; Let it be absolutely
                  forbidden for anyone to disturb them. In the case of contravention I desire that
                  the offender be sentenced to capital punishment on charge of violation of
                  sepulture.&rdquo;
                </p>
                <p className="text-purple-700 text-sm">
                  &mdash; The Nazareth Inscription, c. 1st century AD
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed">
                Some scholars connect this decree to a Roman administrative response to the
                Christian proclamation of the empty tomb and Resurrection &mdash; consistent
                with Matthew 28:13, where the chief priests spread the report that the disciples
                had stolen the body. Others regard the connection as coincidental. The inscription
                does not &ldquo;prove&rdquo; the Resurrection; but it demonstrates that in the
                1st-century Roman world, the question of bodies being removed from tombs was
                sufficiently explosive to merit an imperial decree in the very region where
                Christianity was born.
              </p>
            </div>

          </div>
        )}

        {/* ==================== TAB 4: THE EXODUS QUESTION ==================== */}
        {activeTab === 'exodus-question' && (
          <div className="space-y-8">

            {/* The Challenge */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <HelpCircle className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Archaeological Challenge</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The Exodus from Egypt is the defining event of the Old Testament &mdash; the
                foundational act of divine rescue on which Israel&rsquo;s entire covenant identity
                rests. It is presupposed in every major prophetic book, in the Psalms, in the
                prophetic proclamations of Amos and Hosea, and ultimately in the Last Supper as
                the Passover meal that our Lord reinterprets in his own body and blood.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                The archaeological challenge is this: there is no Egyptian document that explicitly
                records the Exodus as described in the Bible. No mention of Moses appears in
                Egyptian records. No account of ten plagues survives. No record exists of an
                Egyptian army being drowned in the sea. The silence of the Egyptian record on
                these events has led some archaeologists &mdash; most prominently Israel Finkelstein
                and Neil Asher Silberman in <em>The Bible Unearthed</em> (2001) &mdash; to argue
                that the Exodus as described in the Bible did not occur, or occurred in a form so
                radically different from the biblical account as to be unrecognizable.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">
                  The Catholic Response: Absence of Evidence
                </h3>
                <p className="text-amber-800 mb-3">
                  Absence of archaeological or documentary evidence is not evidence of absence,
                  especially in the case of ancient Egypt. Egyptian royal records were not neutral
                  chronicles: they were instruments of ideological self-presentation, systematically
                  omitting defeats, disasters, and humiliations. Pharaoh Ramesses II, for instance,
                  portrayed the Battle of Kadesh (1274 BC) &mdash; which by all other evidence was
                  at best a costly draw &mdash; as a triumphant personal victory in multiple temples.
                </p>
                <p className="text-amber-700 text-sm">
                  The silence of Egyptian records about the Exodus is therefore exactly what one
                  would expect from ancient Egyptian royal historiography, regardless of whether
                  the Exodus happened or not.
                </p>
              </div>
            </div>

            {/* Evidence for Historical Basis */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Search className="w-6 h-6 text-green-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Evidence Supporting a Historical Basis</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                While direct Egyptian confirmation of the Exodus is absent, a substantial body of
                indirect archaeological and textual evidence supports the plausibility of a genuine
                historical event behind the biblical narrative.
              </p>

              <div className="space-y-5">
                <div className="bg-green-50 p-5 rounded-lg">
                  <h3 className="font-bold text-green-900 mb-2">Semites in Egypt: Tell el-Dab&rsquo;a (Avaris)</h3>
                  <p className="text-green-800 text-sm leading-relaxed">
                    Manfred Bietak&rsquo;s multi-decade excavations at Tell el-Dab&rsquo;a in the
                    Nile Delta (ancient Avaris) have revealed a large Semitic population settled in
                    the eastern Delta during the 12th&ndash;18th Dynasty periods. Mud-brick architecture
                    of the type common in Canaan, Canaanite pottery, goat and sheep bones (rather
                    than Egyptian cattle), and multi-roomed courtyard houses all indicate a substantial
                    Semitic community living in a distinctly non-Egyptian style. This is consistent
                    with the biblical tradition of Joseph settling his family in the region of Goshen
                    (Genesis 47:6), which was located precisely in the eastern Nile Delta.
                  </p>
                </div>

                <div className="bg-green-50 p-5 rounded-lg">
                  <h3 className="font-bold text-green-900 mb-2">The Ipuwer Papyrus (&sim;1800&ndash;1600 BC)</h3>
                  <p className="text-green-800 text-sm leading-relaxed">
                    An Egyptian literary text that describes a series of calamities overtaking
                    Egypt &mdash; including rivers turning to blood, crop failures, darkness, and
                    widespread death. The parallels with the Ten Plagues are suggestive: &ldquo;Lo,
                    the river is blood. Does a man drink from it? He rejects it as human and thirsts
                    for water.&rdquo; Whether the Ipuwer Papyrus reflects a folk memory of events
                    connected to the Exodus or is merely coincidental is debated, but the document
                    demonstrates that calamitous events of the type described in Exodus were
                    imaginable and expressible within Egyptian literary culture.
                  </p>
                </div>

                <div className="bg-green-50 p-5 rounded-lg">
                  <h3 className="font-bold text-green-900 mb-2">The Shasu of Yahweh</h3>
                  <p className="text-green-800 text-sm leading-relaxed">
                    Egyptian texts from the 13th century BC refer to nomadic groups from the
                    Sinai/Negev region as &ldquo;Shasu-Yahweh&rdquo; &mdash; an astonishing reference
                    to the divine name &ldquo;Yahweh&rdquo; in an Egyptian administrative document.
                    These nomadic Shasu groups may represent an early component of what would
                    become the Israelite confederation, suggesting that the worship of Yahweh has
                    roots in the Sinai/Negev region consistent with the Exodus narrative.
                  </p>
                </div>

                <div className="bg-green-50 p-5 rounded-lg">
                  <h3 className="font-bold text-green-900 mb-2">James K. Hoffmeier&rsquo;s Analysis</h3>
                  <p className="text-green-800 text-sm leading-relaxed">
                    In <em>Israel in Egypt</em> (1997) and <em>Ancient Israel in Sinai</em> (2005),
                    Egyptologist James Hoffmeier demonstrates that the Exodus narrative is saturated
                    with authentic Egyptian detail &mdash; personal names (Moses, Phinehas, Hophni),
                    administrative titles, geographical terminology, military organization, and
                    cultural practices &mdash; that a fictional writer of the 6th century BC could
                    not have invented. The narrative &ldquo;rings true&rdquo; as a document with
                    genuine Egyptian background.
                  </p>
                </div>
              </div>
            </div>

            {/* Chronology Debate */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Chronology Debate</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Among scholars who accept a genuine historical basis for the Exodus, a major debate
                concerns its date. Two main positions dominate:
              </p>

              <div className="grid sm:grid-cols-2 gap-5 mb-6">
                <div className="bg-blue-50 p-5 rounded-lg">
                  <h3 className="font-bold text-blue-900 mb-3">The Early Date (&sim;1446 BC)</h3>
                  <p className="text-blue-800 text-sm leading-relaxed mb-3">
                    Based on 1 Kings 6:1, which places the Exodus 480 years before the founding of
                    Solomon&rsquo;s Temple (&sim;966 BC), yielding an Exodus date around 1446 BC.
                    This places the Exodus in the reign of Amenhotep II (18th Dynasty). Proponents
                    include archaeologist Bryant Wood and historian Eugene Merrill.
                  </p>
                  <p className="text-blue-700 text-xs">
                    <strong>Problem:</strong> The city of Ramesses (Exodus 1:11) is difficult to
                    explain under an 18th Dynasty date, since the city bearing that name was built
                    under Ramesses II (&sim;1279&ndash;1213 BC).
                  </p>
                </div>

                <div className="bg-blue-50 p-5 rounded-lg">
                  <h3 className="font-bold text-blue-900 mb-3">The Late Date (&sim;1280 BC)</h3>
                  <p className="text-blue-800 text-sm leading-relaxed mb-3">
                    Based on Exodus 1:11 and the association of the city of Ramesses with Ramesses II
                    (r. 1279&ndash;1213 BC), the most favored Pharaoh of the Exodus in popular
                    treatments. Proponents include Egyptologist Kenneth Kitchen, who in <em>On the
                    Reliability of the Old Testament</em> (2003) marshals extensive evidence for the
                    authenticity of the Exodus narrative under a late date.
                  </p>
                  <p className="text-blue-700 text-xs">
                    <strong>Problem:</strong> The Merneptah Stele (1208 BC) already places Israel
                    as an established people group in Canaan, leaving a very compressed time for the
                    conquest and early settlement period.
                  </p>
                </div>
              </div>

              <div className="bg-amber-50 p-5 rounded-lg">
                <p className="text-amber-800 text-sm">
                  <strong>The Church&rsquo;s position:</strong> The Catholic Church has not defined
                  a specific date for the Exodus. The theological truth of the event &mdash; God&rsquo;s
                  saving intervention on behalf of his people, establishing the covenant that
                  prefigures the New Covenant in Christ &mdash; does not depend on the resolution
                  of the chronological debate.
                </p>
              </div>
            </div>

            {/* The Scale Question */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Scale className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Scale Question: 600,000 Men?</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-5">
                Exodus 12:37 states that &ldquo;about six hundred thousand men on foot, besides
                women and children&rdquo; departed Egypt &mdash; implying a total population of
                over two million. Archaeological surveys of the Sinai peninsula have found no
                trace of such a large movement of people or any extended settlement of that
                magnitude. This has led many scholars to question the literal reading of the
                numbers.
              </p>

              <div className="space-y-4">
                <div className="border-l-4 border-amber-400 pl-4 py-2">
                  <h3 className="font-semibold text-gray-800 mb-1">The &ldquo;Eleph&rdquo; Solution</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    The Hebrew word <em>&lsquo;eleph</em>, translated &ldquo;thousand,&rdquo; also
                    means a clan unit or military contingent of variable size (cf. Numbers 31:5;
                    Judges 6:15). If &ldquo;600 &lsquo;eleph&rdquo; means &ldquo;600 military
                    units,&rdquo; the actual number of men might be in the range of 5,000&ndash;6,000
                    &mdash; a figure entirely consistent with Sinai archaeology. This reading was
                    proposed by George Mendenhall and has been developed by Colin Humphreys in
                    <em> The Miracles of Exodus</em> (2003).
                  </p>
                </div>

                <div className="border-l-4 border-blue-400 pl-4 py-2">
                  <h3 className="font-semibold text-gray-800 mb-1">Rhetorical / Liturgical Numbers</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Ancient Near Eastern texts routinely used large numbers rhetorically to convey
                    significance rather than to report census data. The Assyrian Annals and Egyptian
                    victory inscriptions regularly inflated casualty and tribute figures for
                    propagandistic effect. The Exodus numbers may function as a liturgical celebration
                    of the greatness of God&rsquo;s deliverance, not as a demographic census.
                  </p>
                </div>

                <div className="border-l-4 border-purple-400 pl-4 py-2">
                  <h3 className="font-semibold text-gray-800 mb-1">A Smaller but Representative Group</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Some scholars propose that the Exodus involved a much smaller group &mdash;
                    perhaps a single extended tribal confederation &mdash; whose experience of divine
                    deliverance became the foundational narrative for a larger coalition of peoples
                    who came to identify as &ldquo;Israel.&rdquo; The memory was preserved and
                    universalized as the defining story of the entire nation.
                  </p>
                </div>
              </div>
            </div>

            {/* What Faith Requires */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">What Faith Requires &mdash; and What Archaeology Can Provide</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The Catholic faith teaches that the Exodus is a real historical event &mdash; the
                foundational act of God&rsquo;s covenant with Israel, prefiguring and pointing toward
                the definitive Exodus accomplished by Christ through his death and Resurrection. This
                teaching is non-negotiable.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                What the Church does <em>not</em> require is: a specific date, a specific route
                through the Sinai, a specific number of participants, Egyptian documentary confirmation,
                or a literal reading of the population figures. These are questions that belong to the
                domain of historical-critical and archaeological research, not to the deposit of faith.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">
                  Pope Benedict XVI on Historical Method
                </h3>
                <p className="text-amber-800 italic mb-3">
                  &ldquo;The historical-critical method is an indispensable dimension of exegetical
                  work&hellip; [but] it cannot be the last word on the matter. Where the historical
                  method is made into the exclusive criterion&hellip; the Bible becomes a book
                  only about the past and loses the living presence of the Word of God.&rdquo;
                </p>
                <p className="text-amber-700 text-sm">
                  &mdash; Benedict XVI, <em>Jesus of Nazareth</em>, vol. 1, Prologue (2007)
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed">
                Archaeology provides context, plausibility, and sometimes confirmation of
                specific details in the Exodus narrative. It cannot confirm or disconfirm the
                theological heart of the event: that the God of Abraham, Isaac, and Jacob
                intervened in history to redeem his people and bind them to himself in covenant.
                That claim is addressed to faith, not to a trowel.
              </p>
            </div>

          </div>
        )}

        {/* ==================== TAB 5: DEAD SEA SCROLLS ==================== */}
        {activeTab === 'dead-sea-scrolls' && (
          <div className="space-y-8">

            {/* The Discovery */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Discovery (1947)</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                In February or March of 1947, a Bedouin shepherd named Muhammad edh-Dhib
                (&ldquo;Muhammad the Wolf&rdquo;) was searching for a lost goat in the arid cliffs
                above the northwestern shore of the Dead Sea, near the ruins of Khirbet Qumran. He
                threw a rock into a dark cave opening and heard, unexpectedly, the sound of pottery
                breaking. Inside, he found tall clay jars, several of them containing ancient scrolls
                wrapped in linen.
              </p>

              <p className="text-gray-700 leading-relaxed mb-5">
                This accidental discovery has been called &ldquo;the greatest manuscript find of the
                20th century&rdquo; &mdash; and arguably of all time. Over the following decade
                (1947&ndash;1956), archaeologists, Bedouin, and scholars searched the cliffs
                intensively, discovering eleven caves that collectively contained approximately
                900 manuscripts.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">The Site of Qumran</h3>
                <p className="text-amber-800 mb-3">
                  The ruins of Khirbet Qumran were excavated between 1951 and 1956 by Roland de Vaux,
                  a Dominican priest and archaeologist. He revealed a community complex of considerable
                  sophistication: a scriptorium (with inkwells and long plastered benches), an extensive
                  network of <em>miqva&rsquo;ot</em> (ritual immersion baths &mdash; at least ten), a
                  large communal dining hall/refectory, cisterns, kilns, and storage rooms. The community
                  that used this complex lived there from approximately 130 BC until 68 AD, when the Romans
                  destroyed the site during the First Jewish&ndash;Roman War.
                </p>
              </div>
            </div>

            {/* The Contents */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Contents of the Scrolls</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The approximately 900 manuscripts are divided into three broad categories, each
                profoundly significant in its own right.
              </p>

              <div className="space-y-5">
                <div className="bg-blue-50 p-5 rounded-lg">
                  <h3 className="font-bold text-blue-900 mb-3">Biblical Texts</h3>
                  <p className="text-blue-800 text-sm leading-relaxed mb-3">
                    Fragments of every book of the Hebrew Bible except Esther. Some books are
                    represented by dozens of copies. The most spectacular is the Great Isaiah Scroll
                    (1QIsa<sup>a</sup>) from Cave 1 &mdash; a complete, intact 66-chapter scroll
                    7.34 metres (24 feet) long, dated to approximately 125 BC.
                  </p>
                  <p className="text-blue-800 text-sm leading-relaxed">
                    Particularly well-represented books include Deuteronomy (&sim;30 copies),
                    Isaiah (&sim;21 copies), and the Psalms (&sim;36 copies). The Psalms Scroll
                    from Cave 11 contains 41 canonical psalms plus 7 additional compositions
                    not found in the canonical psalter.
                  </p>
                </div>

                <div className="bg-blue-50 p-5 rounded-lg">
                  <h3 className="font-bold text-blue-900 mb-3">Sectarian Documents</h3>
                  <p className="text-blue-800 text-sm leading-relaxed">
                    The constitutional and disciplinary documents of the Qumran community itself:
                    the <em>Community Rule</em> (Serek haYahad &mdash; the community&rsquo;s
                    governing constitution); the <em>Damascus Document</em> (rules for affiliated
                    communities living in towns outside Qumran); the <em>War Scroll</em> (an
                    elaborate apocalyptic battle plan for the final war between the Sons of Light
                    and Sons of Darkness); the <em>Temple Scroll</em> (the longest scroll found,
                    8.15 metres, presenting an idealized version of the Torah from a divine first-person
                    perspective); and the <em>Hodayot</em> (Thanksgiving Psalms, probably composed
                    by the community&rsquo;s founding Teacher of Righteousness).
                  </p>
                </div>

                <div className="bg-blue-50 p-5 rounded-lg">
                  <h3 className="font-bold text-blue-900 mb-3">Pesharim (Biblical Commentaries)</h3>
                  <p className="text-blue-800 text-sm leading-relaxed">
                    Running verse-by-verse commentaries on the prophets (Habakkuk, Isaiah, Nahum,
                    Micah, Psalms). The community read the prophets as encrypted prophecies about
                    its own present situation: the &ldquo;Teacher of Righteousness&rdquo; (their
                    founding leader), the &ldquo;Wicked Priest&rdquo; (a Hasmonean high priest who
                    had persecuted them), and the imminent eschatological events they expected.
                    This exegetical method &mdash; <em>pesher</em> interpretation &mdash; has close
                    parallels in the New Testament&rsquo;s use of the Old Testament.
                  </p>
                </div>

                <div className="bg-purple-50 p-5 rounded-lg">
                  <h3 className="font-bold text-purple-900 mb-2">The Copper Scroll (3Q15)</h3>
                  <p className="text-purple-800 text-sm leading-relaxed">
                    Unlike any other scroll found at Qumran, the Copper Scroll is engraved on thin
                    copper sheets and lists 64 locations where large quantities of gold and silver
                    are supposedly buried. Whether this represents a real hidden treasure or a
                    symbolic/apocalyptic text remains debated. No treasure has ever been found at
                    the indicated locations.
                  </p>
                </div>
              </div>
            </div>

            {/* Significance for Transmission */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-green-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Significance for Biblical Transmission</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Before 1947, the oldest known Hebrew manuscripts of the Old Testament were the great
                Masoretic codices: the Aleppo Codex (c. 920 AD) and the Leningrad Codex (c. 1008 AD).
                These were the authoritative basis for virtually all modern Bible translations. The Dead
                Sea Scrolls pushed the manuscript tradition back by approximately one thousand years.
              </p>

              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-green-900 mb-3">
                  The Result: Extraordinary Fidelity
                </h3>
                <p className="text-green-800 mb-3">
                  When scholars compared the Great Isaiah Scroll (1QIsa<sup>a</sup>, c. 125 BC) with
                  the Isaiah text in the Aleppo and Leningrad Codices (c. 920&ndash;1008 AD), the
                  agreement was overwhelming. Approximately 95% of the text is word-for-word identical.
                  The remaining 5% consists of minor spelling variants, occasional slips of the pen,
                  and a handful of word-order differences &mdash; none of them affecting doctrine or
                  meaning in any significant way.
                </p>
                <p className="text-green-800">
                  This means that Jewish scribes copied the Book of Isaiah with extraordinary care and
                  fidelity across a period of more than 1,100 years &mdash; and that the Isaiah we read
                  today is substantially the same text that the Jews of Qumran read and copied in
                  125 BC.
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed">
                The Dead Sea Scrolls also revealed that in the Second Temple period, multiple text
                types of the Hebrew scriptures were in circulation &mdash; some closer to the
                Masoretic Text, some closer to the Septuagint (the Greek translation used by early
                Christians), and some representing independent traditions. This diversity was greater
                than previously realized, though the final Masoretic Text became dominant after 70 AD.
              </p>
            </div>

            {/* Who Were They? */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-purple-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Qumran Community: Who Were They?</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-5">
                The scholarly consensus identifies the Qumran community as Essenes &mdash; a Jewish
                sect known from three ancient sources: the historian Josephus (<em>Jewish War</em>
                II.8.2&ndash;13; <em>Antiquities</em> XVIII.1.5), the philosopher Philo of Alexandria
                (<em>Every Good Person is Free</em>; <em>Hypothetica</em>), and the Roman writer
                Pliny the Elder (<em>Natural History</em> V.73, who specifically locates the Essenes
                on the western shore of the Dead Sea, above En Gedi &mdash; precisely where Qumran is).
              </p>

              <div className="bg-purple-50 p-6 rounded-lg mb-5">
                <h3 className="text-lg font-semibold text-purple-900 mb-3">
                  Essene Characteristics Matching the Scrolls
                </h3>
                <ul className="text-purple-800 text-sm space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5">&#8227;</span>
                    <span>Communal ownership of property (cf. Community Rule, cols. V&ndash;VI)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5">&#8227;</span>
                    <span>Ritual immersion baths (<em>miqva&rsquo;ot</em>) &mdash; at least ten at Qumran</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5">&#8227;</span>
                    <span>Strict Sabbath observance and purity regulations stricter than Pharisaic law</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5">&#8227;</span>
                    <span>Apocalyptic expectation: imminent divine intervention and final battle</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5">&#8227;</span>
                    <span>Two messianic figures: a priestly Messiah (Aaron) and a royal Messiah (Israel)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5">&#8227;</span>
                    <span>Rejection of the Jerusalem Temple establishment as corrupt and illegitimate</span>
                  </li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed">
                The community&rsquo;s founding crisis was likely the Hasmonean takeover of the high
                priesthood (c. 152 BC), when Jonathan Maccabaeus assumed the role without being of
                the Zadokite lineage traditionally required. Their &ldquo;Teacher of Righteousness&rdquo;
                &mdash; likely a displaced Zadokite priest &mdash; led a remnant into the desert to
                live as the true Israel, awaiting God&rsquo;s intervention. They hid their scrolls
                in the caves in 68 AD as the Roman army advanced; Qumran was destroyed shortly after.
              </p>
            </div>

            {/* Scrolls and Christian Origins */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Church className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Dead Sea Scrolls and Christian Origins</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-5">
                The Qumran scrolls have transformed our understanding of the Jewish matrix from which
                Christianity emerged. A number of themes and practices found in the New Testament have
                striking parallels in the Qumran literature &mdash; though this should be understood
                carefully.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg mb-5">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">Parallels Between Qumran and Early Christianity</h3>
                <ul className="text-amber-800 text-sm space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5">&#8227;</span>
                    <span><strong>Baptism by immersion:</strong> Central to both communities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5">&#8227;</span>
                    <span><strong>Sacred communal meals:</strong> A central ritual act at Qumran (cf. the Last Supper, Eucharist)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5">&#8227;</span>
                    <span><strong>Messianic expectation:</strong> Both communities expected an imminent messianic figure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5">&#8227;</span>
                    <span><strong>Dualism of light and darkness:</strong> Prominent in John&rsquo;s Gospel and the Qumran War Scroll</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5">&#8227;</span>
                    <span><strong>&ldquo;New Covenant&rdquo;:</strong> The Qumran community understood itself as the community of the New Covenant (Jeremiah 31:31); so did early Christianity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5">&#8227;</span>
                    <span><strong>Community as &ldquo;Temple of God&rdquo;:</strong> Both Qumran and Paul describe the community itself as a spiritual temple (1 Corinthians 3:16; 1QS VIII)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 p-5 rounded-lg">
                <p className="text-blue-800 text-sm">
                  <strong>The crucial distinction:</strong> These parallels demonstrate that the
                  language of the New Testament was deeply embedded in the Jewish religious world of
                  the Second Temple period &mdash; they are not imports from Greek or Persian religion.
                  They do <em>not</em> prove that our Lord was influenced by Qumran (there is no
                  evidence of any personal connection), that John the Baptist was an Essene (speculative,
                  though his desert location and baptismal practice have led to comparison), or that
                  Christianity is merely a development of Essenism. The differences are profound:
                  Christianity is centered on a specific historical person who rose from the dead, not
                  on a community&rsquo;s self-isolation from the world.
                </p>
              </div>
            </div>

          </div>
        )}

        {/* ==================== TAB 6: SHROUD OF TURIN ==================== */}
        {activeTab === 'shroud-of-turin' && (
          <div className="space-y-8">

            {/* What Is the Shroud? */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Layers className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">What Is the Shroud of Turin?</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-5">
                The Shroud of Turin is a length of linen cloth, approximately 4.4 metres by 1.1
                metres (14 feet by 3.6 feet), that bears the faint double image &mdash; front and
                back &mdash; of a man who shows every sign of having been crucified by Roman methods.
                It is currently kept in the Cathedral of Saint John the Baptist, Turin, Italy, and
                is exhibited publicly at rare intervals called &ldquo;ostensions.&rdquo; The most
                recent was in 2015, drawing over two million visitors.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg mb-5">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">The Physical Evidence on the Cloth</h3>
                <ul className="text-amber-800 text-sm space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5">&#8227;</span>
                    <span>More than 120 flagellation marks consistent with the Roman <em>flagrum</em>
                    (a whip with metal or bone tips attached to leather thongs)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5">&#8227;</span>
                    <span>Wounds on the wrists (not palms) and feet consistent with crucifixion nails</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5">&#8227;</span>
                    <span>A large elliptical wound on the right side consistent with a lance thrust (cf. John 19:34)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5">&#8227;</span>
                    <span>Marks around the scalp consistent with a cap of thorns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5">&#8227;</span>
                    <span>Abrasions on the shoulder consistent with carrying a heavy crossbeam</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5">&#8227;</span>
                    <span>The face bearing what appears to be swelling from blows, consistent with
                    the Gospel accounts of the mockery and beating (Matthew 26:67)</span>
                  </li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed">
                Perhaps the most striking feature was revealed only in 1898, when Secondo Pia
                became the first person to photograph the Shroud. When he examined his glass-plate
                negatives, he realized that the negative of the photograph showed a positive,
                recognizable face &mdash; meaning that the image on the cloth itself is a
                &ldquo;negative,&rdquo; like the negative of a photograph, centuries before
                photography was invented. This immediately raised the question that has never been
                satisfactorily answered: how did a medieval forger anticipate photographic negativity?
              </p>
            </div>

            {/* 1988 Carbon Dating */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The 1988 Carbon Dating Controversy</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-5">
                In 1988, three independent laboratories &mdash; the University of Oxford, the
                University of Arizona, and the Swiss Federal Institute of Technology in Zurich
                &mdash; each performed radiocarbon (C-14) dating on samples taken from a corner
                of the Shroud. Their results were remarkably consistent: the linen dated to between
                1260 and 1390 AD. The announcement was widely reported as having &ldquo;proved&rdquo;
                that the Shroud was a medieval forgery.
              </p>

              <p className="text-gray-700 leading-relaxed mb-5">
                However, the 1988 result has been significantly challenged on scientific grounds in
                subsequent peer-reviewed research &mdash; not by religious apologists, but by chemists.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-5">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">
                  Raymond Rogers&rsquo; Challenge (<em>Thermochimica Acta</em>, 2005)
                </h3>
                <p className="text-blue-800 mb-3">
                  Raymond N. Rogers, a retired chemist from Los Alamos National Laboratory and a
                  member of the original STURP team, published peer-reviewed research in the
                  journal <em>Thermochimica Acta</em> (January 2005) demonstrating that the sample
                  taken for the 1988 dating was not representative of the main body of the Shroud.
                </p>
                <p className="text-blue-800 mb-3">
                  His analysis showed that the sampled corner had a different chemical composition
                  from threads taken from other parts of the Shroud: the sample contained
                  vanillin (a degradation product of lignin in linen), while the main body of the
                  Shroud contained no detectable vanillin &mdash; suggesting a much older origin.
                  The sample also contained cotton fibers not present elsewhere and showed evidence
                  of reweaving consistent with the &ldquo;invisible reweave&rdquo; repair technique
                  documented from the medieval period.
                </p>
                <p className="text-blue-700 text-sm">
                  Rogers&rsquo; conclusion: the 1988 sample was a medieval repair patch, not
                  original linen; the rest of the Shroud, by his analysis, is consistent with an
                  age of approximately 1,300&ndash;3,000 years. The paper was accepted by a
                  peer-reviewed chemistry journal and has not been satisfactorily refuted.
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed">
                The Rogers paper does not &ldquo;prove&rdquo; the Shroud is 2,000 years old.
                But it does demonstrate that the 1988 radiocarbon result cannot be treated as
                the final scientific word on the subject. The matter remains scientifically open.
              </p>
            </div>

            {/* STURP */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Microscope className="w-6 h-6 text-green-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The STURP Investigation (1978)</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-5">
                The Shroud of Turin Research Project (STURP) was a team of approximately 40
                American scientists &mdash; including physicists, chemists, biologists,
                radiologists, and forensic experts from institutions including NASA, Los Alamos
                National Laboratory, Brooks Air Force Base, and several universities. In October
                1978, they were given unprecedented access to the Shroud for 120 continuous hours
                of intensive examination.
              </p>

              <div className="bg-green-50 p-6 rounded-lg mb-5">
                <h3 className="text-lg font-semibold text-green-900 mb-3">Key STURP Findings</h3>
                <ul className="text-green-800 text-sm space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-700 mt-0.5 flex-shrink-0" />
                    <span><strong>The image is not a painting.</strong> Extensive chemical and
                    spectroscopic analysis found no pigment, paint, dye, or stain in the image
                    areas. The image is not made of any applied substance.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-700 mt-0.5 flex-shrink-0" />
                    <span><strong>The bloodstains are real blood</strong> (later confirmed as type AB
                    through serology and immunology tests). Critically, the blood was deposited on
                    the cloth <em>before</em> the body image formed &mdash; the image is absent
                    beneath the blood, meaning the blood protected the underlying fibers from
                    whatever process created the image.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-700 mt-0.5 flex-shrink-0" />
                    <span><strong>The image is a surface phenomenon.</strong> The image exists only
                    on the topmost fibrils of the linen (the outermost 200 nanometres of the thread) &mdash;
                    it does not penetrate into the interior of the threads. No known artistic technique
                    produces such a superficial image.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-700 mt-0.5 flex-shrink-0" />
                    <span><strong>3D information encoded.</strong> The VP-8 Image Analyzer (developed
                    by NASA for converting satellite image data) produces perfect three-dimensional
                    relief from the Shroud image. Normal photographs and paintings produce distorted
                    or meaningless 3D relief; the Shroud is unique in encoding 3D spatial information
                    in its image intensity.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-amber-50 p-5 rounded-lg">
                <p className="text-amber-800 text-sm italic">
                  &ldquo;The Shroud image is that of a real human form of a scourged, crucified man.
                  It is not the product of an artist. The bloodstains are composed of hemoglobin
                  and also give a positive test for serum albumin. The image is an ongoing mystery
                  and until further chemical studies are made, perhaps by this group of scientists,
                  or perhaps by some scientists in the future, the problem remains unsolved.&rdquo;
                </p>
                <p className="text-amber-700 text-sm mt-2">
                  &mdash; STURP Summary Statement, 1981
                </p>
              </div>
            </div>

            {/* Open Questions */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <HelpCircle className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Open Scientific Questions</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-5">
                Forty years after STURP, the image formation mechanism remains unresolved. This is
                not for lack of scientific attention: dozens of peer-reviewed papers have proposed
                and tested hypotheses, none of which has been broadly accepted as sufficient.
              </p>

              <div className="space-y-4">
                <div className="bg-blue-50 p-5 rounded-lg">
                  <h3 className="font-bold text-blue-900 mb-2">How Was the Image Formed?</h3>
                  <p className="text-blue-800 text-sm leading-relaxed">
                    The current leading hypothesis in the scientific literature is a brief,
                    high-intensity emission of ultraviolet radiation from the body, which scorched
                    the topmost fibrils of the linen in a pattern corresponding to the body&rsquo;s
                    surface. A 2011 paper by a team from ENEA (the Italian National Agency for New
                    Technologies) demonstrated that to produce an image matching the Shroud&rsquo;s
                    characteristics, one would need an ultraviolet laser of extraordinary intensity
                    for a pulse lasting fractions of a nanosecond &mdash; far beyond any current or
                    medieval technology. No mechanism is known to natural science that could produce
                    such an emission from a human body.
                  </p>
                </div>

                <div className="bg-blue-50 p-5 rounded-lg">
                  <h3 className="font-bold text-blue-900 mb-2">The 2002 Restoration</h3>
                  <p className="text-blue-800 text-sm leading-relaxed">
                    In 2002, the Shroud underwent conservation work: backing cloths added after the
                    1532 fire were removed, and the reverse side was photographed and examined for
                    the first time since the cloth was sewn onto its backing. The examination revealed
                    a faint mirror image of the face on the <em>reverse</em> side of the cloth &mdash;
                    but only of the face, not the body. This indicates that the image formation process
                    was not uniform and that the face received a different, more intense exposure. The
                    mechanism remains unexplained.
                  </p>
                </div>

                <div className="bg-blue-50 p-5 rounded-lg">
                  <h3 className="font-bold text-blue-900 mb-2">Pollen Analysis</h3>
                  <p className="text-blue-800 text-sm leading-relaxed">
                    Swiss criminologist Max Frei (1973) identified pollen grains on the Shroud from
                    plants native to Palestine, Anatolia (Turkey), and Constantinople &mdash; consistent
                    with a cloth that originated in the Near East and traveled through Byzantine
                    territory to Europe. The identification has been partly confirmed by subsequent
                    botanists (Avinoam Danin of the Hebrew University identified plant images on the
                    cloth consistent with flowers native to the Jerusalem area in spring). This evidence
                    is suggestive but contested.
                  </p>
                </div>
              </div>
            </div>

            {/* Church Position */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Church className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">The Church&rsquo;s Official Position</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-5">
                The Catholic Church has never officially declared the Shroud to be the authentic
                burial cloth of Christ &mdash; nor has it declared it a forgery. This
                deliberate agnosticism is theologically principled: the Church does not base
                its faith claims on the outcome of scientific controversies, and it does not
                require Catholics to believe in any particular relic&rsquo;s authenticity.
              </p>

              <div className="space-y-4">
                <div className="bg-amber-50 p-5 rounded-lg">
                  <h3 className="font-bold text-amber-900 mb-2">
                    Pope John Paul II &mdash; Ostension of 1998
                  </h3>
                  <p className="text-amber-800 text-sm italic mb-2">
                    &ldquo;The Shroud is an image of God&rsquo;s love as well as of human sin&hellip;
                    The imprint left by the tortured body of the Crucified One&hellip; speaks to our
                    heart and moves us to climb the hill of Calvary, to contemplate the weight of our
                    guilt and to say with trust: <em>Miserere mei, Deus</em> &mdash; have mercy on me,
                    O Lord.&rdquo;
                  </p>
                  <p className="text-amber-700 text-xs">
                    &mdash; Pope John Paul II, Homily at the Ostension of the Holy Shroud, May 24, 1998
                  </p>
                </div>

                <div className="bg-amber-50 p-5 rounded-lg">
                  <h3 className="font-bold text-amber-900 mb-2">
                    Pope Benedict XVI &mdash; Ostension of 2010
                  </h3>
                  <p className="text-amber-800 text-sm italic mb-2">
                    &ldquo;This is a burial cloth that wrapped the remains of a crucified man in full
                    conformity with what the Gospels tell us of Jesus&hellip; The Shroud is an icon
                    written in blood; the blood of a man who was flogged, crowned with thorns, crucified
                    and whose right side was pierced.&rdquo;
                  </p>
                  <p className="text-amber-700 text-xs">
                    &mdash; Pope Benedict XVI, Address at the Ostension, May 2, 2010
                  </p>
                </div>

                <div className="bg-amber-50 p-5 rounded-lg">
                  <h3 className="font-bold text-amber-900 mb-2">
                    Pope Francis &mdash; Video Message, 2013
                  </h3>
                  <p className="text-amber-800 text-sm italic mb-2">
                    &ldquo;This Man of the Shroud invites us to contemplate Jesus of Nazareth. This
                    image, impressed upon the cloth, speaks to our heart and moves us to climb up
                    Calvary, to look upon the wood of the Cross, and to immerse ourselves in the
                    eloquent silence of love.&rdquo;
                  </p>
                  <p className="text-amber-700 text-xs">
                    &mdash; Pope Francis, Video message for the Ostension, March 30, 2013
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mt-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">
                  The Practical Catholic Approach
                </h3>
                <ul className="text-blue-800 text-sm space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5">&#8227;</span>
                    <span>Venerate the Shroud as an <em>icon</em> of the Passion &mdash; whatever its ultimate origin, the image invites contemplation of Christ&rsquo;s suffering and death</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5">&#8227;</span>
                    <span>Do not make belief in the Shroud&rsquo;s authenticity a condition of faith &mdash; the Church does not require it</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5">&#8227;</span>
                    <span>Remain open to ongoing scientific investigation &mdash; the Church welcomes honest inquiry</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5">&#8227;</span>
                    <span>Recognize that the 1988 radiocarbon result is not the final word &mdash; it has been legitimately challenged in peer-reviewed science</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5">&#8227;</span>
                    <span>Approach the Shroud as one of the most scientifically inexplicable objects in human history &mdash; an invitation to wonder, not to credulity</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  )
}
