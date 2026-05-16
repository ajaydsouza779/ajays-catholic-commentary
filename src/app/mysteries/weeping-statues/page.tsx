'use client'

import { useState } from 'react'
import {
  Shield,
  CheckCircle,
  Search,
  Scroll,
  BookOpen,
  Flame,
  X,
  Heart,
  Eye,
  MapPin,
  Calendar,
  Star,
  AlertTriangle,
  Info,
  Church,
  Microscope,
  Droplets,
} from 'lucide-react'

type FilterType = 'all' | 'approved' | 'blood' | 'tears' | 'oil' | 'modern'
type WeepingStatus = 'approved' | 'diocesan-recognized' | 'under-investigation' | 'no-finding'
type WeepingSubstance = 'blood' | 'tears' | 'oil' | 'myrrh' | 'mixed'

interface WeepingCase {
  id: string
  name: string
  location: string
  country: string
  year: string
  era: 'medieval' | 'modern'
  substance: WeepingSubstance[]
  status: WeepingStatus
  scientificallyTested: boolean
  approvedBy?: string
  summary: string
  description: string[]
  scientificNote?: string
  churchNote: string
  significance: string
}

const cases: WeepingCase[] = [
  {
    id: 'akita',
    name: 'Our Lady of Akita',
    location: 'Yuzawadai, Akita City',
    country: 'Japan',
    year: '1973–1981',
    era: 'modern',
    substance: ['blood', 'tears'],
    status: 'approved',
    scientificallyTested: true,
    approvedBy: 'Bishop John Shojiro Ito (Diocese of Niigata, 1984); confirmed by Cardinal Ratzinger / CDF (1988)',
    summary:
      'A carved wooden statue of Our Lady wept 101 times, exuded blood from a palm wound, and delivered messages calling for prayer and repentance. The most rigorously approved case of a weeping statue in Church history.',
    description: [
      'In the convent of the Institute of the Handmaids of the Eucharist in Akita, Japan, a wooden statue of Our Lady of Fátima — carved from a single block of Japanese linden wood — began manifesting extraordinary phenomena on June 12, 1973. A wound appeared on the palm of the statue\'s right hand, from which blood flowed. The statue subsequently wept 101 times over the following eight years, with the final weeping on September 15, 1981 (the Feast of Our Lady of Sorrows).',
      'The principal witness was Sister Agnes Katsuko Sasagawa, who herself was deaf when the phenomena began. She was simultaneously cured of her deafness on one occasion, only to lose it again before a final miraculous cure. The messages delivered to Sister Agnes were solemn: a warning of grave punishment "such as the world has never seen," including "fire falling from the sky" that would wipe out a great part of humanity — unless mankind repented and prayed the Rosary.',
      'Scientific analysis established that the blood from the palm wound is human, type B; the tears are fully human in composition (lacrimal secretions). Independent testing confirmed that the wooden statue has no internal mechanism that could produce the fluids. Bishop John Shojiro Ito of the Diocese of Niigata issued a formal pastoral letter approving the events as supernatural in 1984. In 1988, Cardinal Joseph Ratzinger — then Prefect of the Congregation for the Doctrine of the Faith — communicated to Bishop Ito that the events of Akita could be accepted as reliable and worthy of belief.',
    ],
    scientificNote:
      'Blood from the statue\'s palm wound analyzed as human, type B. Tears analyzed as human lacrimal secretions. No internal mechanism found in the wooden statue. Testing conducted by independent laboratories at the request of the diocesan commission.',
    churchNote:
      'Bishop Ito\'s formal pastoral letter of approval (Diocese of Niigata, 1984) is the most thorough episcopal approval of any weeping statue case. Cardinal Ratzinger\'s 1988 communication to Bishop Ito — confirming the events as acceptable to the faith — gives this case a level of Vatican-level recognition unmatched by other weeping statue reports.',
    significance:
      'Akita stands apart from all other weeping statue cases for two reasons: the depth of the scientific testing and the clarity of the episcopal and Vatican-level approval. The convergence of a witnessed bodily healing (Sister Agnes\'s deafness), human-composition fluids in a wooden statue, and a message of Fátima-like urgency places Akita in continuity with the great Marian apparition tradition of the 20th century.',
  },
  {
    id: 'syracuse',
    name: 'Our Lady of Syracuse',
    location: 'Syracuse, Sicily',
    country: 'Italy',
    year: '1953',
    era: 'modern',
    substance: ['tears'],
    status: 'diocesan-recognized',
    scientificallyTested: true,
    approvedBy: 'Bishops\' Conference of Sicily (September 6, 1953); referenced by Pope Pius XII',
    summary:
      'A small plaster bas-relief of the Immaculate Heart of Mary wept for four days in a worker\'s home in Sicily. Thousands witnessed the event; lab analysis confirmed human lacrimal secretions. Pope Pius XII referenced it publicly within weeks.',
    description: [
      'On August 29, 1953 — the Feast of the Beheading of St. John the Baptist — a small, inexpensive plaster bas-relief of the Immaculate Heart of Mary in the home of Angelo Iannuso and his young wife Antonina Lucia began to weep. Antonina had been suffering from a sudden illness and was nearly blind. As witnesses gathered, the statue wept visibly for four consecutive days, ending on September 1, 1953. Tens of thousands of people came to witness the event.',
      'The liquid was immediately collected by the local police and submitted to the Provincial Health Laboratory in Catania. The laboratory analysis was unambiguous: the fluid was human lacrimal secretion (tears) — indistinguishable from normal human tears in composition. There was no mechanism in the hollow plaster figure that could have produced the fluid.',
      'The Bishops\' Conference of Sicily convened an emergency session and issued a formal recognition of the miracle on September 6, 1953 — just eight days after the weeping began. On September 17, 1953, Pope Pius XII addressed the event publicly in a radio address, saying: "We are deeply moved by the report... of the tears of Mary." A basilica — the Santuario della Madonna delle Lacrime — was subsequently built at the site; Pope John Paul II visited and prayed there in 1994.',
    ],
    scientificNote:
      'The Provincial Health Laboratory in Catania analyzed the collected fluid and confirmed it to be human lacrimal secretion (tears) — physiologically normal human tears — with no explanation for how they were produced by a hollow plaster statue.',
    churchNote:
      'The Bishops\' Conference of Sicily issued formal recognition within eight days of the event beginning — an unusually swift approval reflecting the weight of public witness and scientific evidence. Pope Pius XII\'s public reference to "the tears of Mary" on September 17, 1953, and Pope John Paul II\'s 1994 pilgrimage to the site constitute the strongest levels of papal acknowledgment for this case.',
    significance:
      'Syracuse is the foundational modern weeping statue case. Its swift episcopal recognition, papal acknowledgment, and confirmed scientific analysis of a hollow plaster figure set the template against which all subsequent reports are measured. The 1953 event also triggered a wave of weeping Madonna reports across Italy — illustrating how a single, well-witnessed and approved event shapes popular devotion for a generation.',
  },
  {
    id: 'soufanieh',
    name: 'The Icon of Soufanieh',
    location: 'Damascus',
    country: 'Syria',
    year: '1982–present',
    era: 'modern',
    substance: ['oil', 'mixed'],
    status: 'under-investigation',
    scientificallyTested: true,
    summary:
      'A small icon in the Damascus home of Myrna Nazzour began exuding olive oil, and Myrna herself received stigmata. The case carries a distinctive ecumenical dimension, with messages calling for Christian unity.',
    description: [
      'In November 1982, in the Soufanieh district of Damascus, Syria, a young Melkite Catholic woman named Myrna Nazzour found that a small icon in her home was exuding olive oil. The phenomena spread to include Myrna herself: oil appeared on her hands, and she subsequently received the stigmata — wounds corresponding to those of the Passion of Christ — on multiple occasions through the 1980s and 1990s.',
      'The olive oil exuded from the icon has been scientifically tested and confirmed to be pure olive oil of uncertain biological origin — that is, it cannot be explained as a natural seepage from the surrounding material. Healings have been attributed to the oil, and the case has attracted investigators from both Roman Catholic and Eastern Orthodox communities.',
      'The messages associated with the apparitions to Myrna emphasize Christian unity — calling on Catholics and Orthodox Christians to recognize their common faith and move toward reconciliation. This ecumenical dimension is theologically notable and unusual among Marian phenomena. The case is under ongoing investigation by the Melkite Catholic Church and has been reviewed by Vatican officials, but no formal approval or denial has been issued.',
    ],
    scientificNote:
      'The oil has been analyzed and confirmed as pure olive oil. No natural source for the oil within the icon material has been identified. Testing has been conducted by independent laboratories; findings are inconclusive as to mechanism but confirm the oil is genuine and externally sourced.',
    churchNote:
      'The Melkite Catholic Church has maintained an ongoing investigation without issuing formal approval or disapproval. The case remains open. The Vatican has been informed and observers have visited, but the Holy See has issued no ruling. Catholics are free to be interested in the case but should note it has not received the level of approval granted to Akita or Syracuse.',
    significance:
      'The Soufanieh case is theologically notable for its ecumenical framing — the messages speak directly to the Catholic-Orthodox divide, addressing Syria\'s Melkite Catholic community, which bridges the Eastern and Western Churches. If the case is eventually approved, it would be the only Marian phenomenon in modern times with an explicitly ecumenical mandate at its theological center.',
  },
  {
    id: 'civitavecchia',
    name: 'Our Lady of Civitavecchia',
    location: 'Civitavecchia, near Rome',
    country: 'Italy',
    year: '1995',
    era: 'modern',
    substance: ['blood'],
    status: 'under-investigation',
    scientificallyTested: true,
    summary:
      'A small statue of Our Lady of Fátima wept blood — confirmed as male-DNA, type AB by the Gemelli Polyclinic in Rome. The local bishop personally witnessed the weeping. The Vatican conducted a formal investigation; no final ruling has been issued.',
    description: [
      'On February 2, 1995 — the Feast of the Presentation of the Lord — a small statue of Our Lady of Fátima (33 cm tall), brought back from Medjugorje, began to weep blood in Civitavecchia, a coastal city near Rome. The statue belonged to a local family. Multiple witnesses gathered to observe the phenomenon over the following weeks.',
      'Most remarkably, Bishop Girolamo Grillo of the Diocese of Civitavecchia personally witnessed the statue weeping blood on March 15, 1995 — an unusual distinction in the history of such reports, as the ordinary of the diocese directly observed the phenomenon he was investigating. The bishop submitted the statue and the collected blood to forensic and medical analysis.',
      'The blood was analyzed at the Gemelli Polyclinic in Rome — one of Italy\'s premier Catholic medical institutions — and by forensic experts. The findings were striking: the blood is confirmed human, with male DNA (XY chromosomes), and is blood type AB. The Vatican was informed; a formal investigation was conducted under Vatican auspices. As of the present date, no final ruling has been issued by the Holy See. The case remains in a state of formal investigation.',
    ],
    scientificNote:
      'Forensic analysis by the Gemelli Polyclinic in Rome: the blood is human, male DNA (XY chromosomes), blood type AB. No mechanism was found in the 33 cm plaster statue that could have produced or stored the blood. The male DNA finding has attracted particular theological attention, as the statue depicts a woman.',
    churchNote:
      'The Vatican conducted a formal investigation following submission by Bishop Grillo. No final ruling — positive or negative — has been issued by the Holy See. The case is categorized here as "under investigation." Catholics should note that even with a bishop as a personal witness and striking scientific findings, the Church has not yet issued a definitive judgment.',
    significance:
      'Civitavecchia is unusual in two respects: the bishop of the diocese personally witnessed the weeping, and the blood carried male DNA from a statue of a woman — a detail that has attracted both scientific curiosity and theological reflection. The AB blood type matches the Lanciano Eucharistic miracle and the Shroud of Turin. The case illustrates that even very striking forensic findings do not automatically produce Church approval; the full investigation process runs its course.',
  },
  {
    id: 'lipa',
    name: 'Our Lady of Lipa',
    location: 'Lipa City, Batangas',
    country: 'Philippines',
    year: '1948',
    era: 'modern',
    substance: ['tears'],
    status: 'diocesan-recognized',
    scientificallyTested: false,
    approvedBy: 'Bishop Ramon Arguelles (Diocese of Lipa, 2015) — reversed earlier 1951 suppression',
    summary:
      'A Carmelite novice reported apparitions of Our Lady of Mediatrix of All Grace; a statue wept and rose petals with images appeared. Suppressed in 1951, the events were declared "worthy of belief" by the Bishop of Lipa in 2015.',
    description: [
      'In 1948, at the Carmelite convent in Lipa City, Batangas, a novice named Sister Teresita Castillo reported apparitions of Our Lady under the title Mediatrix of All Grace. Associated phenomena included a statue said to weep, and the appearance of thousands of rose petals bearing images — including images of the Christ child and other religious figures. Crowds of pilgrims gathered.',
      'In 1951, under pressure from Rome, the local bishop suppressed the devotion, declaring the apparitions not supernatural. The devotion went underground but persisted among Filipino Catholics for decades. The case became one of the most contested in 20th-century Marian history, involving questions of ecclesiastical politics and national devotion in the post-independence Philippines.',
      'In 2015, Bishop Ramon Arguelles of the Diocese of Lipa issued a formal declaration that the apparitions and associated phenomena were "worthy of belief" — reversing the 1951 suppression and lifting the prohibition on public devotion. This declaration restores the case to a positive standing but represents diocesan-level recognition rather than full Vatican approval. The Vatican has not issued a final ruling.',
    ],
    churchNote:
      'The 2015 declaration by Bishop Arguelles reversed 64 years of suppression. This is an unusual case of a formally suppressed apparition being rehabilitated at the diocesan level. The Vatican has not issued a final ruling. Catholics in the Philippines and elsewhere are permitted to engage in the devotion following the 2015 declaration, but should understand that full Vatican approval has not been given.',
    significance:
      'Lipa illustrates the complexity of the Church\'s discernment process across time: a report suppressed in 1951 under Vatican pressure was rehabilitated 64 years later by the local ordinary. The case also demonstrates how popular Catholic devotion — especially in a national context — can persist through official suppression and eventually re-emerge through proper channels. The devotion to Our Lady, Mediatrix of All Grace, is itself a matter of ongoing theological discussion in the Church.',
  },
  {
    id: 'italy-1950s',
    name: 'The Wave of Weeping Madonnas — Italy',
    location: 'Various locations, Italy',
    country: 'Italy',
    year: '1953–1958',
    era: 'modern',
    substance: ['tears'],
    status: 'no-finding',
    scientificallyTested: false,
    summary:
      'Following the approved Syracuse event of 1953, hundreds of reports of weeping Madonnas erupted across Italy. The Vatican issued a formal caution in 1956 reminding bishops not to grant premature recognition. Most cases received no formal investigation.',
    description: [
      'The authenticated weeping at Syracuse in August 1953 triggered a phenomenon without parallel in modern Catholic history: within months, hundreds of reports of weeping Madonnas emerged from towns and villages across Italy. The reports came from every region — Lombardy, Campania, Puglia, Calabria — and typically involved small, mass-produced plaster or painted statues of the Madonna in private homes or small chapels.',
      'The Vatican\'s response was measured and cautious. In 1956, the Holy Office (now the Dicastery for the Doctrine of the Faith) issued a formal instruction reminding bishops of their obligation to investigate such reports carefully before granting any recognition — and warning against both hasty approval and contemptuous dismissal. The instruction noted that the faithful\'s hunger for supernatural consolation was itself a pastoral reality to be attended to, even when a particular report did not withstand scrutiny.',
      'The vast majority of the 1953–1958 reports were never formally investigated by diocesan commissions. Some were quietly set aside after natural explanations emerged; some involved condensation, porous plaster, or — in a small number of cases — deliberate fraud. A handful received initial local attention but no subsequent episcopal engagement. This wave of reports is studied today by both sociologists of religion and Catholic theologians as an example of how a single authenticated event shapes popular devotion at scale.',
    ],
    churchNote:
      'No formal approval was granted to any of the Italian wave cases by the Holy See or by diocesan commissions. The Holy Office\'s 1956 instruction serves as the official Church response to this period. The cases represent the large background noise of popular supernatural expectation against which the authenticated cases of Syracuse and Akita stand out all the more sharply.',
    significance:
      'The 1953–1958 Italian wave is historically significant not for any individual case but as a sociological and ecclesiological phenomenon: it demonstrates the limits of popular discernment, the necessity of the Church\'s investigative apparatus, and the pastoral challenge of responding to widespread supernatural expectation without either credulity or contempt. The Holy Office\'s 1956 instruction is a model of calibrated ecclesiastical caution.',
  },
  {
    id: 'mirebeau',
    name: 'The Weeping Christ of Mirebeau-en-Poitou',
    location: 'Mirebeau-en-Poitou, Vienne',
    country: 'France',
    year: '1911',
    era: 'modern',
    substance: ['blood'],
    status: 'no-finding',
    scientificallyTested: false,
    summary:
      'A crucifix in a family home bled from the wounds of Christ. Examined by the local priest, bishop, and a diocesan commission; the blood was identified as human by contemporary analysis. The case was reported to Rome but never formally approved.',
    description: [
      'In 1911, in the town of Mirebeau-en-Poitou in the Vienne department of western France, a crucifix in a private family home began to bleed from the wounds corresponding to the Five Wounds of Christ — the hands, the feet, and the side. The bleeding was witnessed by members of the household and quickly drew the attention of the local parish priest.',
      'The local bishop was notified and a diocesan commission was convened to examine the crucifix and the fluid. The commission\'s contemporary analysis identified the substance as human blood — a finding consistent with later methodology but limited by the analytical tools available in 1911. The bishop submitted a formal report to Rome.',
      'The Holy See did not issue a formal judgment on the case, and it has never been formally approved. It is noted in Catholic historical records of unusual phenomena from the early 20th century, and it attracted interest at the time as an unusual case of a bleeding crucifix (rather than a statue of Mary) in a domestic setting. The case illustrates that prompt episcopal investigation and referral to Rome does not guarantee a formal ruling.',
    ],
    churchNote:
      'No formal approval was issued by the Holy See despite the case being reported to Rome. The diocesan commission\'s examination produced a contemporary finding of human blood, but the case was not taken further in Rome\'s investigative process. It remains noted in historical records without formal ecclesiastical status.',
    significance:
      'Mirebeau is of historical interest as an example of a bleeding crucifix — rather than a weeping Madonna — and as a case where prompt diocesan response and referral to Rome did not produce a formal Vatican ruling. It illustrates that the Church\'s investigative resources are limited and that many credibly reported events never receive a formal judgment one way or the other.',
  },
  {
    id: 'naju',
    name: 'Our Lady of Naju',
    location: 'Naju, South Jeolla Province',
    country: 'South Korea',
    year: '1985–2002',
    era: 'modern',
    substance: ['blood', 'tears'],
    status: 'no-finding',
    scientificallyTested: true,
    summary:
      'Julia Kim claimed a statue of Our Lady wept and bled for years and that she received stigmata. The Archdiocese of Gwangju issued negative findings in 1998 and 2009. The local bishop explicitly warned the faithful against participation. THIS CASE WAS NOT APPROVED.',
    description: [
      'Beginning in 1985, Julia Kim of Naju, South Korea, reported that a statue of Our Lady in her home wept tears and blood on numerous occasions over a period of years, and that she herself received the stigmata — wounds corresponding to those of Christ\'s Passion. The phenomena attracted significant attention in South Korea and internationally, and a following developed among Catholics who believed the events were supernatural.',
      'The Archdiocese of Gwangju (the competent authority for Naju) conducted an investigation and issued a negative finding in 1998, stating that the events could not be confirmed as supernatural. A second investigation was conducted, and the Archdiocese issued a further negative statement in 2009, reiterating that the phenomena did not merit supernatural attribution. The local archbishop explicitly warned Catholic faithful against participating in the Naju devotions.',
      'This case is presented here specifically to show how the Church\'s discernment process works when a claim does not meet the evidentiary standard. The Naju case received sustained episcopal investigation — not dismissal — and the result was a clear negative finding. Catholics who participated in or promoted the Naju devotions after the 1998 and 2009 warnings did so against the explicit guidance of the competent ecclesiastical authority. The contrast with Akita — which received a positive finding after rigorous investigation — illustrates the value of the Church\'s discernment process.',
    ],
    scientificNote:
      'Testing of the fluids associated with the Naju case was conducted as part of the diocesan investigation. The Archdiocese of Gwangju\'s negative findings incorporated the results of this testing along with theological and pastoral assessment. The specific laboratory findings were not made public in the same detail as the Akita or Syracuse analyses.',
    churchNote:
      'The Archdiocese of Gwangju issued formal negative findings in 1998 and 2009. The local bishop warned the faithful explicitly against participation in the Naju devotions. This case has the clearest episcopal disapproval of any case on this page. It is included here not because it merits devotional interest but because it illustrates what a negative finding looks like — and why the Church\'s investigative process is essential.',
    significance:
      'The Naju case serves as the necessary counterweight to Akita on this page. The Church does not simply approve every reported weeping statue; it investigates, and when the evidence does not support a supernatural interpretation, it says so clearly. The contrast between Naju (negative, 1998/2009) and Akita (positive, 1984/1988) demonstrates that the approval process is real and rigorous — not a rubber stamp for popular expectation.',
  },
  {
    id: 'legnica-cross-reference',
    name: 'The Bleeding Host of Legnica — A Cross-Reference',
    location: 'Legnica, Lower Silesia',
    country: 'Poland',
    year: '2013',
    era: 'modern',
    substance: ['blood'],
    status: 'approved',
    scientificallyTested: true,
    approvedBy: 'Bishop Zbigniew Kiernikowski (Diocese of Legnica, 2016)',
    summary:
      'When a Host fell during Christmas Mass and a red substance appeared, forensic examination identified human cardiac tissue — matching findings from Lanciano (c. 700 AD) and Buenos Aires (1996). Fully approved. See the Eucharistic Miracles page for full details.',
    description: [
      'On December 25, 2013, during Christmas Mass at the Church of St. Hyacinth in Legnica, Poland, a consecrated Host fell to the floor. Following standard liturgical procedure, it was placed in water to dissolve. After two weeks, a red substance appeared. Forensic analysis by the Medical University of Wroclaw identified the substance as human cardiac muscle tissue — myocardium — showing signs of acute distress, with blood type AB.',
      'Bishop Zbigniew Kiernikowski issued a formal recognition of the extraordinary character of the event in 2016. The Legnica miracle is one of five modern Eucharistic miracles in which forensic examination has yielded the same finding: human myocardium, blood type AB, from a consecrated Host.',
      'This case is cross-referenced here because it represents the related but distinct phenomenon of a bleeding or transformed Host — an extension of the broader category of miraculous flows of substance from sacred objects. Full details, including the science and the comparison with Lanciano, Buenos Aires, Sokolka, and Tixtla, are presented on the Eucharistic Miracles page of this site.',
    ],
    scientificNote:
      'Forensic analysis by Prof. Barbara Blaszczyk and the Department of Forensic Medicine, Medical University of Wroclaw (2014): human cardiac muscle tissue — myocardium — with characteristics consistent with acute myocardial distress. Blood type AB. Findings match Lanciano (c. 700 AD), Buenos Aires (1996), Sokolka (2008), and Tixtla (2006).',
    churchNote:
      'Bishop Zbigniew Kiernikowski of Legnica issued a formal statement in 2016 recognizing the extraordinary character of the event. This is a fully approved Eucharistic miracle with Vatican-level awareness. It is referenced here because of the overlap between the weeping/bleeding phenomenon and Eucharistic miracles — but the Legnica case belongs fully to the Eucharistic miracles tradition.',
    significance:
      'The Legnica cross-reference invites reflection on a broader pattern: across Eucharistic miracles (bleeding Hosts) and weeping statue cases (blood-weeping statues), there is a recurring convergence of human blood — sometimes cardiac tissue, sometimes type AB — that has been independently identified by forensic scientists across many decades. Whether these convergences are theologically significant is for the Church and the faithful to discern.',
  },
  {
    id: 'laus',
    name: 'Our Lady of Laus',
    location: 'Laus, Gap',
    country: 'France',
    year: '1664–1718',
    era: 'medieval',
    substance: ['oil', 'tears'],
    status: 'approved',
    scientificallyTested: false,
    approvedBy: 'Archbishop Jean-Louis Pacouat (Archdiocese of Gap, 2008)',
    summary:
      'Over 54 years of apparitions to Benoîte Rencurel, phenomena including fragrant oil, reported weeping, and thousands of conversions were associated with this Alpine shrine. The apparitions were formally approved in 2008 — the first new Marian apparition approval in France in 50 years.',
    description: [
      'Beginning in 1664, Benoîte Rencurel, a young shepherdess in the French Alps near the town of Saint-Étienne-le-Laus (now simply Laus), received apparitions of Our Lady over a period of 54 years — until her death in 1718. The apparitions at Laus are among the longest recorded in Marian history. During these decades, phenomena associated with the shrine included a mysteriously fragrant oil and, in some accounts, weeping associated with sacred images at the site. Thousands of pilgrims, healings, and conversions were reported.',
      'The shrine at Laus became a well-established pilgrimage site across the French Alps and beyond, although formal Church approval remained pending for centuries. The apparitions were positively examined in the 17th and 18th centuries by local bishops, but the political disruptions of the French Revolution and its aftermath interrupted the formal process.',
      'In 2008, Archbishop Jean-Louis Pacouat of the Archdiocese of Gap issued a formal declaration approving the apparitions of Our Lady of Laus as worthy of belief — the first new Marian apparition approved in France in more than 50 years. The Church\'s approval focuses on the apparitions and messages of Benoîte Rencurel, and on the pattern of holiness and conversion associated with the shrine over 54 years, rather than specifically on any single weeping phenomenon.',
    ],
    churchNote:
      'The 2008 approval by the Archdiocese of Gap is the definitive ecclesiastical recognition for Laus. The approval covers the apparitions and associated phenomena as a whole. The shrine remains an active pilgrimage site. Catholics may visit and venerate the site in confidence, given the formal diocesan approval with Vatican awareness.',
    significance:
      'Laus illustrates the long arc of the Church\'s discernment process: apparitions that began in 1664 received formal approval in 2008 — 344 years later. This is not bureaucratic delay but the Church\'s characteristic caution in matters of private revelation: the test of time, the test of holiness in the witness and the faithful who follow, and the test of doctrinal soundness all require extended observation. The Laus approval also confirms that the Church remains open to approving new private revelations in the modern era when the evidence warrants it.',
  },
]

const filterOptions: { id: FilterType; label: string }[] = [
  { id: 'all', label: 'All Cases' },
  { id: 'approved', label: 'Church Approved' },
  { id: 'blood', label: 'Blood Weeping' },
  { id: 'tears', label: 'Tears' },
  { id: 'oil', label: 'Oil / Myrrh' },
  { id: 'modern', label: 'Modern Era' },
]

const statusConfig: Record<WeepingStatus, { label: string; color: string; icon: typeof CheckCircle }> = {
  approved: { label: 'Church Approved', color: 'bg-green-100 text-green-800', icon: CheckCircle },
  'diocesan-recognized': { label: 'Diocese Recognized', color: 'bg-blue-100 text-blue-800', icon: Shield },
  'under-investigation': { label: 'Under Investigation', color: 'bg-yellow-100 text-yellow-800', icon: Search },
  'no-finding': { label: 'No Formal Approval', color: 'bg-gray-100 text-gray-600', icon: Scroll },
}

const substanceConfig: Record<WeepingSubstance, { label: string; color: string }> = {
  blood: { label: 'Blood', color: 'bg-red-100 text-red-800' },
  tears: { label: 'Tears', color: 'bg-blue-100 text-blue-800' },
  oil: { label: 'Oil', color: 'bg-amber-100 text-amber-800' },
  myrrh: { label: 'Myrrh', color: 'bg-purple-100 text-purple-800' },
  mixed: { label: 'Mixed', color: 'bg-gray-100 text-gray-700' },
}

export default function WeepingStatuesPage() {
  const [filter, setFilter] = useState<FilterType>('all')
  const [selectedId, setSelectedId] = useState<string | null>(null)

  const filteredCases = cases.filter((c) => {
    if (filter === 'approved') return c.status === 'approved' || c.status === 'diocesan-recognized'
    if (filter === 'blood') return c.substance.includes('blood')
    if (filter === 'tears') return c.substance.includes('tears')
    if (filter === 'oil') return c.substance.includes('oil') || c.substance.includes('myrrh')
    if (filter === 'modern') return c.era === 'modern'
    return true
  })

  const selectedCase = cases.find((c) => c.id === selectedId) ?? null

  const handleCardClick = (id: string) => {
    setSelectedId(selectedId === id ? null : id)
  }

  return (
    <div className="py-8">
      <div className="container mx-auto px-4 max-w-6xl">

        {/* Hero */}
        <div className="text-center mb-10">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium mb-4"
            style={{ backgroundColor: '#EEF2FF', color: '#4338CA' }}
          >
            <Flame className="w-4 h-4" />
            Mysteries of the Faith
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-gray-900 mb-4">
            Weeping Statues &amp; Icons
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Throughout Catholic history, statues and icons of Our Lady and of Christ have been reported to weep
            tears, blood, or oil. The Church receives these reports with neither immediate credulity nor
            contempt — but with a rigorous investigative process that has, in rare cases, confirmed them
            as genuinely supernatural.
          </p>
        </div>

        {/* Prominent Doctrinal Caution Box */}
        <div
          className="rounded-xl p-6 mb-8 border-2"
          style={{ backgroundColor: '#FFFBEB', borderColor: '#FCD34D' }}
        >
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 flex-shrink-0 mt-0.5 text-amber-600" />
            <div>
              <h2 className="font-bold text-gray-900 text-lg mb-2">The Church&apos;s Caution — What You Must Know First</h2>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                The <strong>vast majority</strong> of reported weeping statues and icons receive no formal Church approval.
                The Dicastery for the Doctrine of the Faith (formerly the Holy Office and the Congregation for the Doctrine
                of the Faith) issued updated <em>Norms for Proceeding in the Discernment of Alleged Supernatural Phenomena</em>
                in 2024, clarifying that the Church&apos;s default posture toward reported supernatural phenomena is careful,
                skeptical scrutiny — not acceptance.
              </p>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                The 2024 norms establish a graduated response: from initial examination by the local bishop, through possible
                referral to the Dicastery, to a range of possible outcomes that include formal approval (rare), permission for
                limited devotion without supernatural attribution, and explicit disapproval. The criteria include: doctrinal
                soundness of any messages; holiness of life in the principal witness; absence of financial irregularity;
                psychological soundness of the witness; and the ability to rule out natural causes and fraud.
              </p>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                The 2024 norms also note that a bishop may permit devotion to develop even when a supernatural character
                cannot be definitively established — a significant pastoral development. But this permissive stance
                is not the same as supernatural approval.
              </p>
              <div
                className="rounded-lg p-4 border mt-3"
                style={{ backgroundColor: '#FEF3C7', borderColor: '#FCD34D' }}
              >
                <p className="text-gray-800 text-sm leading-relaxed font-medium">
                  Catholics are free to be interested in weeping statue reports and to visit approved shrines.
                  They are <em>not</em> required to accept any particular private miracle as true — even one approved
                  by the Church. Faith does not depend on these events. The cases on this page range from fully approved
                  (Akita, Laus) to explicitly disapproved (Naju) — that range is itself the Church&apos;s witness
                  to honest discernment.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Does Mary Weep — Theological Reflection */}
        <div className="mb-10">
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-5">
            Why Does Mary Weep? — Theological Reflection
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Left: What approved cases say */}
            <div
              className="rounded-xl border p-6"
              style={{ backgroundColor: '#EEF2FF', borderColor: '#C7D2FE' }}
            >
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <Heart className="w-4 h-4" style={{ color: '#4338CA' }} />
                What Approved Cases Say: Tears as Intercession
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                In the approved cases of Akita and Syracuse, the theological content is consistent with the
                broader tradition of Marian apparitions: the Mother of God weeps over humanity&apos;s sinfulness and
                calls the faithful to repentance, prayer, and conversion. At Akita, the message was explicit:
                unless humanity repents, "fire will fall from the sky and will wipe out a great part of humanity"
                — and the remedy given was the daily Rosary, penance, and prayer.
              </p>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                This weeping is understood theologically as an extension of Mary&apos;s maternal intercession.
                Simeon prophesied at the Presentation that "a sword shall pierce your own soul" (Luke 2:35) —
                the tradition sees this as pointing not only to Calvary but to the enduring Marian compassion
                (Latin: <em>com-passio</em>, suffering-with) for humanity. Mary&apos;s weeping, in this reading,
                is her Calvary continuing through history.
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Isaiah 53:3 describes the Suffering Servant as "a man of sorrows, acquainted with grief"
                — the tradition of Christian devotion has long connected the grieving Mother at the foot
                of the cross (John 19:25) to this figure, and has seen in reports of weeping icons a
                continuation of the Passion&apos;s redemptive sorrow reaching into the present moment.
                The Catechism (CCC 2683–2684) affirms Mary&apos;s ongoing intercessory role as entirely
                subordinate to and inseparable from the mediation of Christ.
              </p>
            </div>

            {/* Right: What the Church requires */}
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <Shield className="w-4 h-4 text-blue-600" />
                What the Church Requires: Rigorous Investigation
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                The Church does not simply accept reports of weeping statues because they are emotionally
                compelling. The DDF&apos;s 2024 norms codify a process that has been operative in practice
                for centuries:
              </p>
              <ul className="text-sm text-gray-700 space-y-2 mb-3">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-0.5 flex-shrink-0">1.</span>
                  <span><strong>Medical and scientific analysis</strong> of the substance — is it truly tears, blood, or oil? What does laboratory testing reveal about its composition and origin?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-0.5 flex-shrink-0">2.</span>
                  <span><strong>Ruling out natural causes</strong> — condensation, porous materials, deliberate application, and structural mechanisms in the object must all be excluded.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-0.5 flex-shrink-0">3.</span>
                  <span><strong>Doctrinal soundness of any messages</strong> — does any accompanying message contradict Scripture, Tradition, or the Magisterium? If so, the phenomenon is suspect regardless of physical evidence.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-0.5 flex-shrink-0">4.</span>
                  <span><strong>Pattern of holiness in the principal witness</strong> — in cases like Akita, the life and character of the seer (Sister Agnes) forms part of the evidentiary record.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-0.5 flex-shrink-0">5.</span>
                  <span><strong>Fruits of the devotion</strong> — do conversions, healings, and renewed sacramental life follow? Or exploitation, sensationalism, and division?</span>
                </li>
              </ul>
              <p className="text-gray-700 text-sm leading-relaxed">
                Only when all these criteria are met — and the bishop (or the Dicastery) is satisfied —
                does formal approval follow. The process typically takes years or decades. Akita: 11 years
                (1973–1984). Laus: 344 years (1664–2008).
              </p>
            </div>
          </div>
        </div>

        {/* Substance Analysis Comparison */}
        <div className="mb-10">
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-5">
            What Science Has Found — Substance Analysis
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <div
              className="rounded-xl border p-5"
              style={{ backgroundColor: '#FFF1F2', borderColor: '#FECDD3' }}
            >
              <div className="flex items-center gap-2 mb-3">
                <Droplets className="w-5 h-5 text-red-600" />
                <h3 className="font-semibold text-gray-900">Blood</h3>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed mb-2">
                In approved or formally investigated cases, blood from weeping statues has been analyzed
                as <strong>human blood</strong> — with identifiable blood type and, in at least one case
                (Civitavecchia, 1995), male DNA (XY chromosomes) from a statue of a woman.
              </p>
              <p className="text-xs text-gray-500 leading-relaxed">
                Cases: Akita (type B), Civitavecchia (type AB, male DNA)
              </p>
            </div>
            <div
              className="rounded-xl border p-5"
              style={{ backgroundColor: '#EFF6FF', borderColor: '#BFDBFE' }}
            >
              <div className="flex items-center gap-2 mb-3">
                <Eye className="w-5 h-5 text-blue-600" />
                <h3 className="font-semibold text-gray-900">Tears</h3>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed mb-2">
                Analyzed tears from approved cases (Akita, Syracuse) have been identified as <strong>human
                lacrimal secretions</strong> — physiologically normal human tears — with no known mechanism
                for production in a solid wooden or plaster statue.
              </p>
              <p className="text-xs text-gray-500 leading-relaxed">
                Cases: Akita (human lacrimal secretions), Syracuse (confirmed human tears by lab analysis)
              </p>
            </div>
            <div
              className="rounded-xl border p-5"
              style={{ backgroundColor: '#FFFBEB', borderColor: '#FDE68A' }}
            >
              <div className="flex items-center gap-2 mb-3">
                <Star className="w-5 h-5 text-amber-600" />
                <h3 className="font-semibold text-gray-900">Oil / Myrrh</h3>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed mb-2">
                In the Soufanieh (Syria) case, the oil exuded from an icon has been confirmed as <strong>pure
                olive oil</strong> with no identifiable source within the icon. The origin of the oil
                remains scientifically unexplained; the case is under investigation.
              </p>
              <p className="text-xs text-gray-500 leading-relaxed">
                Case: Soufanieh, Damascus (pure olive oil, no internal source found)
              </p>
            </div>
          </div>
        </div>

        {/* Cases Catalog */}
        <div className="mb-14">
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-5">Documented Cases</h2>

          {/* Filter bar */}
          <div className="flex flex-wrap gap-2 mb-6">
            {filterOptions.map((opt) => {
              const count =
                opt.id === 'all' ? cases.length
                : opt.id === 'approved' ? cases.filter((c) => c.status === 'approved' || c.status === 'diocesan-recognized').length
                : opt.id === 'blood' ? cases.filter((c) => c.substance.includes('blood')).length
                : opt.id === 'tears' ? cases.filter((c) => c.substance.includes('tears')).length
                : opt.id === 'oil' ? cases.filter((c) => c.substance.includes('oil') || c.substance.includes('myrrh')).length
                : cases.filter((c) => c.era === 'modern').length
              return (
                <button
                  key={opt.id}
                  onClick={() => {
                    setFilter(opt.id)
                    setSelectedId(null)
                  }}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors border ${
                    filter === opt.id
                      ? 'text-white'
                      : 'bg-white text-gray-600 border-gray-200 hover:border-indigo-300 hover:text-indigo-800'
                  }`}
                  style={
                    filter === opt.id
                      ? { backgroundColor: '#4338CA', borderColor: '#4338CA' }
                      : {}
                  }
                >
                  {opt.label}
                  <span
                    className={`ml-1.5 text-xs px-1.5 py-0.5 rounded-full ${
                      filter === opt.id ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Card grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {filteredCases.map((wcase) => {
              const StatusIcon = statusConfig[wcase.status].icon
              const isSelected = selectedId === wcase.id
              return (
                <button
                  key={wcase.id}
                  onClick={() => handleCardClick(wcase.id)}
                  className={`text-left rounded-xl border p-5 transition-all hover:shadow-md ${
                    isSelected ? 'shadow-md' : 'border-gray-200 bg-white hover:border-indigo-200'
                  }`}
                  style={
                    isSelected
                      ? { borderColor: '#6366F1', backgroundColor: '#EEF2FF' }
                      : {}
                  }
                >
                  {/* Card header */}
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-serif text-base font-semibold text-gray-900 leading-tight">
                        {wcase.name}
                      </h3>
                      <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                        <MapPin className="w-3 h-3" />
                        <span>{wcase.country}</span>
                        <span className="mx-1">·</span>
                        <Calendar className="w-3 h-3" />
                        <span>{wcase.year}</span>
                      </div>
                    </div>
                    {wcase.scientificallyTested && (
                      <div className="flex-shrink-0 p-1.5 rounded-lg bg-emerald-50">
                        <Microscope className="w-4 h-4 text-emerald-700" />
                      </div>
                    )}
                  </div>

                  <p className="text-sm text-gray-600 leading-relaxed mb-3 line-clamp-3">
                    {wcase.summary}
                  </p>

                  {/* Status + substance badges */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    <span
                      className={`inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full font-medium ${statusConfig[wcase.status].color}`}
                    >
                      <StatusIcon className="w-3 h-3" />
                      {statusConfig[wcase.status].label}
                    </span>
                    {wcase.substance.slice(0, 2).map((s) => (
                      <span
                        key={s}
                        className={`inline-flex items-center text-xs px-2 py-0.5 rounded-full font-medium ${substanceConfig[s].color}`}
                      >
                        {substanceConfig[s].label}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-1 text-xs font-medium" style={{ color: '#4338CA' }}>
                    <Eye className="w-3 h-3" />
                    View details
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        {/* Church's approach */}
        <div className="mb-12">
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">
            The Church&apos;s Three-Level Response
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <div className="flex items-center gap-2 mb-3">
                <Church className="w-4 h-4 text-indigo-600" />
                <h3 className="font-semibold text-gray-900 text-sm">Level 1: Diocesan Investigation</h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Every reported case first comes to the attention of the local bishop, who opens a diocesan
                commission. Witnesses are interviewed under oath, physical evidence is preserved, and
                scientific analysis is commissioned. The bishop issues an initial assessment:
                the event is either clearly natural, clearly extraordinary, or indeterminate.
                Most cases never advance beyond this level.
              </p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <div className="flex items-center gap-2 mb-3">
                <Shield className="w-4 h-4 text-blue-600" />
                <h3 className="font-semibold text-gray-900 text-sm">Level 2: DDF Review</h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Cases that pass diocesan investigation may be referred to the Dicastery for the Doctrine
                of the Faith in Rome. The DDF reviews the full documentation, may commission further
                investigation, and issues its own assessment. The 2024 norms established a clearer
                graduated scale of possible DDF responses — from full approval to permissive silence
                to explicit disapproval — replacing the older binary system.
              </p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <div className="flex items-center gap-2 mb-3">
                <Info className="w-4 h-4 text-amber-600" />
                <h3 className="font-semibold text-gray-900 text-sm">Level 3: Papal Acknowledgment</h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                In very rare cases — Akita (Cardinal Ratzinger / CDF, 1988), Syracuse (Pope Pius XII,
                public address, 1953) — the Vatican or a future pope acknowledges the event explicitly.
                This represents the highest level of recognition, though even then Catholics are not
                required to believe in the specific event as a matter of faith. The Church&apos;s doctrine
                does not rest on any private revelation or miracle, however well-attested.
              </p>
            </div>
          </div>
        </div>

        {/* Sources */}
        <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
          <h2 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-gray-600" />
            Sources &amp; Further Reading
          </h2>
          <ul className="text-sm text-gray-600 space-y-2 leading-relaxed">
            <li>
              Dicastery for the Doctrine of the Faith.{' '}
              <em>Norms for Proceeding in the Discernment of Alleged Supernatural Phenomena</em>. 2024.
              Vatican Publishing House.
            </li>
            <li>
              Diocese of Niigata, Japan. Pastoral Letter of Bishop John Shojiro Ito approving the events
              of Akita (April 22, 1984).
            </li>
            <li>
              Congregation for the Doctrine of the Faith. Communication of Cardinal Joseph Ratzinger to
              Bishop Ito (June 20, 1988), confirming the events of Akita as acceptable to the faith.
            </li>
            <li>
              Catechism of the Catholic Church, §§2683–2684 (Mary&apos;s intercession and heavenly mediation);
              §156 (miracles as signs confirming faith)
            </li>
            <li>
              Luke 2:35 (Simeon&apos;s prophecy — the sword piercing Mary&apos;s soul); Isaiah 53:3
              (the Man of Sorrows); John 19:25 (Mary at the foot of the cross)
            </li>
            <li>
              Archdiocese of Gwangju, South Korea. Negative findings on the Naju case (1998; reaffirmed 2009).
            </li>
            <li>
              Archdiocese of Gap, France. Declaration of Bishop Jean-Louis Pacouat approving the apparitions
              of Our Lady of Laus (May 4, 2008).
            </li>
            <li>
              Bishops&apos; Conference of Sicily. Formal recognition of the miracle of Syracuse
              (September 6, 1953).
            </li>
            <li>
              Provincial Health Laboratory, Catania, Italy. Analysis of the lachrymatory fluid from
              the Syracuse statue (September 1953).
            </li>
            <li>
              Gemelli Polyclinic, Rome. Forensic analysis of blood from the Civitavecchia statue (1995):
              human blood, male DNA, type AB.
            </li>
            <li>
              Schiavone, Maurizio.{' '}
              <em>
                Lacrime e Sangue nelle Statue: Analisi scientifica dei casi più celebri
              </em>{' '}
              [Tears and Blood in Statues: Scientific Analysis of the Most Famous Cases].
              San Paolo Edizioni, 2002.
            </li>
            <li>
              Ashton, Joan.{' '}
              <em>Mother of All Nations: The Visitations of the Blessed Virgin Mary and Her Message for Today</em>.
              Harper Collins, 1989. (Includes documentation of Akita and Syracuse)
            </li>
          </ul>
        </div>

      </div>

      {/* Modal overlay */}
      {selectedCase && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedId(null)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60" />

          {/* Modal panel */}
          <div
            className="relative z-10 w-full max-w-3xl max-h-[88vh] overflow-y-auto rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Sticky header */}
            <div
              className="sticky top-0 p-5 sm:p-6 border-b z-10"
              style={{ backgroundColor: '#EEF2FF', borderColor: '#C7D2FE' }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-1.5">
                    <span
                      className={`inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full font-medium ${statusConfig[selectedCase.status].color}`}
                    >
                      {statusConfig[selectedCase.status].label}
                    </span>
                    {selectedCase.substance.map((s) => (
                      <span
                        key={s}
                        className={`inline-flex items-center text-xs px-2 py-0.5 rounded-full font-medium ${substanceConfig[s].color}`}
                      >
                        {substanceConfig[s].label}
                      </span>
                    ))}
                    {selectedCase.scientificallyTested && (
                      <span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full font-medium bg-emerald-100 text-emerald-800">
                        <Microscope className="w-3 h-3" />
                        Scientifically Tested
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-gray-900 mb-1">
                    {selectedCase.name}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {selectedCase.location}, {selectedCase.country}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {selectedCase.year}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedId(null)}
                  className="p-2 rounded-xl hover:bg-indigo-100 text-gray-500 hover:text-gray-800 transition-colors flex-shrink-0"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal body */}
            <div className="p-5 sm:p-6 bg-white grid md:grid-cols-2 gap-8">
              {/* Left: What was reported */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Scroll className="w-4 h-4" style={{ color: '#4338CA' }} />
                  What Was Reported
                </h4>
                {selectedCase.description.map((para, i) => (
                  <p key={i} className="text-gray-700 text-sm leading-relaxed mb-3">
                    {para}
                  </p>
                ))}

                {selectedCase.approvedBy && (
                  <div
                    className="rounded-lg border p-3 mt-2"
                    style={{ backgroundColor: '#F0FDF4', borderColor: '#BBF7D0' }}
                  >
                    <p className="text-xs text-gray-600 leading-relaxed">
                      <strong className="text-gray-900">Approved by:</strong> {selectedCase.approvedBy}
                    </p>
                  </div>
                )}
              </div>

              {/* Right: Science + Church + Significance */}
              <div>
                {selectedCase.scientificNote && (
                  <div className="mb-5">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <Microscope className="w-4 h-4 text-emerald-600" />
                      Scientific Testing
                    </h4>
                    <div
                      className="rounded-lg border p-4"
                      style={{ backgroundColor: '#F0FDF4', borderColor: '#BBF7D0' }}
                    >
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {selectedCase.scientificNote}
                      </p>
                    </div>
                  </div>
                )}

                <div className="mb-5">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Church className="w-4 h-4" style={{ color: '#4338CA' }} />
                    Church Response
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {selectedCase.churchNote}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Star className="w-4 h-4 text-amber-500" />
                    Significance
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {selectedCase.significance}
                  </p>
                </div>
              </div>
            </div>

            {/* Modal footer */}
            <div className="px-5 sm:px-6 pb-5 sm:pb-6 bg-white border-t border-gray-100 pt-4">
              <button
                onClick={() => setSelectedId(null)}
                className="text-sm font-medium text-gray-500 hover:text-gray-800 transition-colors flex items-center gap-1"
              >
                <X className="w-3.5 h-3.5" />
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
