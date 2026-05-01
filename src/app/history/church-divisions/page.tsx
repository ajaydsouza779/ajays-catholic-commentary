'use client'

import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import {
  ChevronRight,
  ChevronDown,
  Calendar,
  Users,
  AlertTriangle,
  BookOpen,
  Search,
  MapPin,
  User,
  List,
  Network,
  ExternalLink,
} from 'lucide-react'

// ============================================================================
// OLD VIEW TYPES (existing DB-backed shape)
// ============================================================================

interface ChurchDivision {
  id: string
  name: string
  description: string
  year: number
  cause?: string
  outcome?: string
  parentId?: string
  imageUrl?: string
  children: ChurchDivision[]
  relatedPopes: any[]
}

// ============================================================================
// NEW VIEW TYPES
// ============================================================================

type Category =
  | 'early-heresy'
  | 'christological'
  | 'great-schism'
  | 'medieval'
  | 'reformation'
  | 'post-reformation'
  | 'modern'
  | 'restorationist'
  | 'eastern-catholic'
  | 'traditionalist'

type Status = 'active' | 'extinct' | 'reconciled' | 'partial-communion'

interface Division {
  id: string
  name: string
  alternateNames?: string[]
  category: Category
  era: string
  yearStart: number
  yearEnd?: number
  founder?: string
  region: string
  status: Status
  estimatedFollowers?: string
  parentId?: string
  shortDescription: string
  causes: {
    theological?: string[]
    political?: string[]
    cultural?: string[]
  }
  keyFigures: string[]
  keyEvents: { year: string; event: string }[]
  resolution?: string
  fullDescription: string
  catholicResponse?: string
  currentRelations?: string
  sources: string[]
}

const CATEGORY_META: Record<Category, { label: string; description: string; color: string; order: number }> = {
  'early-heresy': {
    label: 'Early Heresies (pre-Nicaea)',
    description: '1st-4th century movements that broke from apostolic teaching before the first ecumenical council.',
    color: 'bg-red-100 text-red-800 border-red-200',
    order: 1,
  },
  'christological': {
    label: 'Christological & Trinitarian Controversies',
    description: 'Disputes over the nature of Christ and the Trinity, addressed by the early ecumenical councils.',
    color: 'bg-orange-100 text-orange-800 border-orange-200',
    order: 2,
  },
  'great-schism': {
    label: 'The Great Schism (East-West)',
    description: 'The 1054 break between Rome and Constantinople, and the Eastern Orthodox communion that followed.',
    color: 'bg-purple-100 text-purple-800 border-purple-200',
    order: 3,
  },
  'medieval': {
    label: 'Medieval Movements',
    description: 'High and late medieval reform movements, dissenters, and dualist sects.',
    color: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    order: 4,
  },
  'reformation': {
    label: 'Protestant Reformation',
    description: '16th-century breaks from Rome: Lutheran, Reformed, Anglican, and Anabaptist traditions.',
    color: 'bg-blue-100 text-blue-800 border-blue-200',
    order: 5,
  },
  'post-reformation': {
    label: 'Post-Reformation (17th-19th c.)',
    description: 'Later Protestant offshoots including Baptists, Methodists, Quakers, and Old Catholics.',
    color: 'bg-cyan-100 text-cyan-800 border-cyan-200',
    order: 6,
  },
  'modern': {
    label: 'Modern Movements (19th-20th c.)',
    description: 'Pentecostal, Adventist, and other modern revival movements.',
    color: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    order: 7,
  },
  'restorationist': {
    label: 'Restorationist (outside historic Christianity)',
    description: 'New religious movements that claim to restore primitive Christianity but depart from historic orthodoxy.',
    color: 'bg-pink-100 text-pink-800 border-pink-200',
    order: 8,
  },
  'eastern-catholic': {
    label: 'Eastern Catholic Churches',
    description: 'Eastern churches in full communion with Rome while preserving their own liturgy and tradition.',
    color: 'bg-amber-100 text-amber-800 border-amber-200',
    order: 9,
  },
  'traditionalist': {
    label: 'Traditionalist Catholic',
    description: 'Post-Vatican II groups that reject or partially reject the council\'s reforms.',
    color: 'bg-stone-100 text-stone-800 border-stone-200',
    order: 10,
  },
}

// ============================================================================
// DIVISIONS DATASET
// Add new divisions here. Each entry follows the Division interface.
// ============================================================================

const DIVISIONS: Division[] = [
  // -------------------- Early Heresies --------------------
  {
    id: 'marcionism',
    name: 'Marcionism',
    alternateNames: ['Marcionite Church'],
    category: 'early-heresy',
    era: 'Early Church (33-313)',
    yearStart: 144,
    yearEnd: 500,
    founder: 'Marcion of Sinope',
    region: 'Roman Empire (originated Asia Minor, spread to Rome)',
    status: 'extinct',
    estimatedFollowers: 'Extinct (significant 2nd-4th c.)',
    shortDescription:
      'A 2nd-century movement that rejected the Old Testament and most of the New Testament, teaching that the God of Israel was a different, lesser deity than the Father of Jesus Christ.',
    causes: {
      theological: [
        'Radical dualism between the wrathful "Demiurge" of the Old Testament and the merciful Father revealed by Jesus',
        'Rejection of the Hebrew Scriptures and Jewish heritage of Christianity',
        'Docetic tendencies regarding the humanity of Christ',
      ],
      cultural: [
        'Anti-Jewish sentiment in parts of the Greco-Roman world',
        'Influence of philosophical dualism',
      ],
    },
    keyFigures: ['Marcion of Sinope', 'Apelles (disciple)', 'Tertullian (opponent)', 'Irenaeus of Lyons (opponent)'],
    keyEvents: [
      { year: 'c. 144', event: 'Marcion expelled from the Roman Christian community; founds his own church' },
      { year: 'c. 144', event: 'Marcion publishes his "canon": an edited Luke and ten Pauline epistles' },
      { year: 'c. 207', event: 'Tertullian writes Adversus Marcionem in five books' },
      { year: '4th-5th c.', event: 'Marcionite communities gradually absorbed by Manichaeism or mainstream Church' },
    ],
    resolution:
      'Suppressed by sustained refutation from Church Fathers and the formation of the orthodox New Testament canon as a direct response to Marcion\'s truncated scriptures.',
    fullDescription:
      'Marcion of Sinope, a wealthy shipowner and son of a bishop, arrived in Rome around 140 AD and proposed a radical reinterpretation of the Christian message. He argued that the God revealed in Jesus Christ was utterly distinct from the Creator God of the Hebrew Bible, whom he characterized as harsh, ignorant, and vengeful. To support this, Marcion produced what is often called the first attempted Christian canon: a heavily edited version of Luke\'s Gospel and ten Pauline letters, with all positive references to the Old Testament removed. The Roman church returned his substantial donation and excommunicated him around 144 AD. Marcionism spread rapidly throughout the empire and was, for a time, one of the most serious rivals to apostolic Christianity. The orthodox response was decisive: figures like Justin Martyr, Irenaeus, and Tertullian wrote extensively against him, and the Church\'s growing consensus on a fourfold Gospel canon and the unity of the Old and New Testaments was accelerated by the need to refute Marcionism. The movement persisted until the fifth century before being absorbed into Manichaeism or returning to mainstream Christianity.',
    catholicResponse:
      'The Church Fathers, especially Irenaeus (Against Heresies) and Tertullian (Against Marcion), defended the unity of the two Testaments and the goodness of creation. The development of the New Testament canon and the rule of faith were sharpened in direct opposition to Marcion.',
    currentRelations: 'Extinct; no modern adherents.',
    sources: [
      'Tertullian, Adversus Marcionem',
      'Irenaeus, Adversus Haereses',
      'Eusebius, Ecclesiastical History',
      'Catholic Encyclopedia, "Marcionites"',
    ],
  },
  {
    id: 'montanism',
    name: 'Montanism',
    alternateNames: ['New Prophecy', 'Cataphrygian heresy'],
    category: 'early-heresy',
    era: 'Early Church (33-313)',
    yearStart: 156,
    yearEnd: 800,
    founder: 'Montanus',
    region: 'Phrygia (Asia Minor), spreading to North Africa and Rome',
    status: 'extinct',
    estimatedFollowers: 'Extinct (notable 2nd-6th c.)',
    shortDescription:
      'An ecstatic prophetic movement claiming a "New Prophecy" superseding the apostolic age. Tertullian famously joined the movement in his later years.',
    causes: {
      theological: [
        'Claim of new, ongoing revelation through ecstatic prophecy',
        'Imminent expectation of the New Jerusalem descending in Pepuza, Phrygia',
        'Rigorist morality: forbidding remarriage, encouraging martyrdom, strict fasting',
      ],
      cultural: [
        'Reaction against perceived laxity in the developing institutional Church',
        'Charismatic religious traditions of Phrygia',
      ],
    },
    keyFigures: ['Montanus', 'Prisca (Priscilla)', 'Maximilla', 'Tertullian (later joined)', 'Pope Zephyrinus'],
    keyEvents: [
      { year: 'c. 156-172', event: 'Montanus begins prophesying in Phrygia; joined by Prisca and Maximilla' },
      { year: 'c. 177', event: 'Bishops of Asia Minor begin condemning the movement' },
      { year: 'c. 207', event: 'Tertullian of Carthage embraces Montanism' },
      { year: '6th c.', event: 'Justinian I orders suppression; remnants survive into the 8th century' },
    ],
    resolution:
      'Condemned by local synods in Asia Minor and rejected by the Roman bishops; gradually suppressed by imperial action under Justinian.',
    fullDescription:
      'Around the middle of the second century, Montanus, a recent convert in Phrygia, began to prophesy in ecstatic states, soon joined by two women, Prisca and Maximilla. They proclaimed a "New Prophecy" announcing the imminent descent of the heavenly Jerusalem at Pepuza and Tymion in Phrygia. The movement combined apocalyptic urgency with rigorous asceticism: it forbade second marriages, demanded strict fasts, and exalted martyrdom. While Montanists held orthodox views on the Trinity and Christ, their claim that the Paraclete spoke through their prophets in a way that supplemented apostolic teaching was decisively rejected by the wider Church. The movement gained a remarkable convert in the great Latin theologian Tertullian, whose later writings reflect Montanist sympathies. Bishops of Asia Minor convened synods to condemn the movement, and Rome eventually followed. Montanism persisted in pockets, particularly in Phrygia, until Justinian I ordered the destruction of their shrines in the sixth century; the last remnants disappeared by the eighth century.',
    catholicResponse:
      'Local synods in Asia Minor condemned the movement; Rome (under disputed circumstances) eventually agreed. The episode helped clarify the Church\'s position that public revelation closed with the apostles.',
    currentRelations: 'Extinct; influenced later charismatic and prophetic movements indirectly.',
    sources: [
      'Eusebius, Ecclesiastical History V.16-19',
      'Epiphanius, Panarion 48',
      'Tertullian, De Pudicitia',
      'Catholic Encyclopedia, "Montanists"',
    ],
  },
  {
    id: 'gnosticism',
    name: 'Gnosticism',
    alternateNames: ['Valentinianism', 'Sethian Gnosticism', 'Basilideans'],
    category: 'early-heresy',
    era: 'Early Church (33-313)',
    yearStart: 100,
    yearEnd: 500,
    founder: 'Diverse (Valentinus, Basilides, others)',
    region: 'Egypt, Syria, Rome, Asia Minor',
    status: 'extinct',
    estimatedFollowers: 'Extinct (peaked 2nd c.)',
    shortDescription:
      'A diverse 2nd-century movement teaching salvation through secret knowledge (gnosis), often involving elaborate cosmic mythologies and a sharp dualism between spirit and matter.',
    causes: {
      theological: [
        'Belief that matter is evil and the material world was created by a lesser deity (Demiurge)',
        'Salvation through esoteric knowledge available only to initiates',
        'Docetism: denial that Christ truly took human flesh',
      ],
      cultural: [
        'Syncretism with Platonic philosophy, Jewish apocalyptic, and Eastern religious ideas',
        'Appeal of esoteric, initiatory religion in the Hellenistic world',
      ],
    },
    keyFigures: ['Valentinus', 'Basilides', 'Marcion (related)', 'Irenaeus of Lyons (opponent)', 'Hippolytus (opponent)', 'Clement of Alexandria (opponent)'],
    keyEvents: [
      { year: 'c. 130-160', event: 'Valentinus teaches in Rome; Basilides in Alexandria' },
      { year: 'c. 180', event: 'Irenaeus writes Adversus Haereses, the major refutation of Gnosticism' },
      { year: '4th c.', event: 'Decline as the Church gains imperial support' },
      { year: '1945', event: 'Discovery of the Nag Hammadi library in Egypt revolutionizes scholarly understanding' },
    ],
    resolution:
      'Refuted by Church Fathers, marginalized by the establishment of the apostolic canon and creeds, and finally suppressed under Christian Roman emperors.',
    fullDescription:
      'Gnosticism is not a single church but a diverse family of religious movements that flourished in the second century, all sharing a conviction that salvation comes through possessing a secret, saving knowledge (gnosis) about the true nature of God, the cosmos, and the self. Most Gnostic systems included a sharp dualism between an unknown true God and a lesser, often hostile, creator (the Demiurge), frequently identified with the God of the Hebrew Bible. The material world was viewed as a prison from which the divine spark within the elect must be liberated. Christ was understood not as a true incarnation but as a heavenly emissary appearing to bring saving knowledge. Major teachers included Valentinus, who attracted a sophisticated following in Rome, and Basilides in Alexandria. The orthodox response was led by Irenaeus of Lyons, whose five-book Adversus Haereses (c. 180) systematically catalogued and refuted Gnostic teachings while articulating the apostolic rule of faith, the unity of Scripture, the goodness of creation, and the reality of the Incarnation. The 1945 discovery of the Nag Hammadi codices in Egypt provided modern scholars with primary Gnostic texts, including the Gospel of Thomas, transforming our understanding of this movement.',
    catholicResponse:
      'Irenaeus, Tertullian, Hippolytus, Clement of Alexandria, and Origen wrote major refutations. The Church\'s emphasis on the apostolic succession of bishops, the public rule of faith, and the four-Gospel canon all crystallized partly in response to Gnostic claims of secret tradition.',
    currentRelations: 'Extinct as an organized religion; some new religious movements claim Gnostic inspiration but have no historical continuity.',
    sources: [
      'Irenaeus, Adversus Haereses',
      'The Nag Hammadi Library (1945 discovery)',
      'Hippolytus, Refutation of All Heresies',
      'Catholic Encyclopedia, "Gnosticism"',
    ],
  },
  {
    id: 'manichaeism',
    name: 'Manichaeism',
    alternateNames: ['Manichaean religion'],
    category: 'early-heresy',
    era: 'Early Church (33-313)',
    yearStart: 240,
    yearEnd: 1400,
    founder: 'Mani (216-274 AD)',
    region: 'Persia, Roman Empire, Central Asia, China',
    status: 'extinct',
    estimatedFollowers: 'Extinct (major 3rd-7th c. in West; survived in China to 14th c.)',
    shortDescription:
      'A dualistic religion founded by the Persian prophet Mani, blending Christian, Zoroastrian, and Buddhist elements. St. Augustine spent nine years as a Manichaean before his conversion.',
    causes: {
      theological: [
        'Cosmic dualism: eternal opposition between Light (good, spiritual) and Darkness (evil, material)',
        'View of Mani as the final prophet completing Jesus, Buddha, and Zoroaster',
        'Strict asceticism for the "Elect"; lesser obligations for the "Hearers"',
      ],
      political: [
        'Initially favored, then persecuted by the Sassanid Persian dynasty',
        'Outlawed by Diocletian (302) and later Christian emperors',
      ],
    },
    keyFigures: ['Mani', 'Augustine of Hippo (former Manichaean)', 'Faustus of Mileve', 'Diocletian (persecutor)'],
    keyEvents: [
      { year: '240', event: 'Mani begins preaching in the Sassanid Persian Empire' },
      { year: '274', event: 'Mani executed by Sassanid authorities' },
      { year: '302', event: 'Diocletian issues an edict against Manichaeans in the Roman Empire' },
      { year: '373-382', event: 'Augustine of Hippo is a Manichaean Hearer' },
      { year: '1370s', event: 'Last Manichaean communities suppressed in China under the Ming dynasty' },
    ],
    resolution:
      'Suppressed by Christian, Zoroastrian, and later Islamic and Confucian authorities. Augustine\'s anti-Manichaean writings shaped Western theology of evil, free will, and grace.',
    fullDescription:
      'Manichaeism was founded in the third century by the Persian prophet Mani, who claimed to be the final Paraclete completing the partial revelations of Jesus, Buddha, and Zoroaster. At its core was an absolute cosmic dualism: two eternal principles, Light and Darkness, locked in a primordial conflict, with the material world as the battlefield in which particles of Light are imprisoned in matter. Salvation consisted in the liberation of these Light particles through ascetic practice. The faithful were divided into the "Elect," who lived in extreme asceticism and celibacy, and the "Hearers," who supported the Elect and lived under lighter rules. Manichaeism spread astonishingly quickly, reaching from North Africa to China. Its impact on Christianity is most famously seen in Augustine of Hippo, who spent nine years (373-382) as a Manichaean Hearer before his conversion to Catholicism. Augustine\'s subsequent writings against the Manichaeans, defending the goodness of creation, free will, and the unity of God, shaped the entire trajectory of Western theology. In Europe, Manichaean ideas may have influenced later dualist movements such as the Bogomils and Cathars, though direct historical continuity is debated.',
    catholicResponse:
      'Augustine\'s anti-Manichaean works (Contra Faustum, De Genesi contra Manichaeos, etc.) established the Catholic doctrine of evil as privation of good, the goodness of creation, and the responsibility of free will.',
    currentRelations: 'Extinct.',
    sources: [
      'Augustine, Confessions; Contra Faustum Manichaeum',
      'The Cologne Mani Codex',
      'S.N.C. Lieu, Manichaeism in the Later Roman Empire and Medieval China',
      'Catholic Encyclopedia, "Manichaeism"',
    ],
  },
  {
    id: 'donatism',
    name: 'Donatism',
    alternateNames: ['Donatist Church'],
    category: 'early-heresy',
    era: 'Early Church (33-313)',
    yearStart: 311,
    yearEnd: 700,
    founder: 'Donatus Magnus',
    region: 'Roman North Africa (modern Algeria, Tunisia)',
    status: 'extinct',
    estimatedFollowers: 'Extinct (major 4th-5th c. in North Africa)',
    shortDescription:
      'A North African schism over whether bishops who had handed over scriptures during the Diocletian persecution could validly ordain or administer sacraments. Augustine\'s major pastoral and theological opponent.',
    causes: {
      theological: [
        'Claim that sacraments administered by "traditores" (those who had handed over scriptures) were invalid',
        'Belief that the Church must consist of the morally pure',
        'Demand for rebaptism of those baptized by lapsed clergy',
      ],
      political: [
        'Resentment of Roman imperial authority in North Africa',
        'Appeal to indigenous Berber religious sentiment',
      ],
      cultural: [
        'North African tradition of rigorous discipline (Tertullian, Cyprian)',
        'Memory of recent persecution and the cult of martyrs',
      ],
    },
    keyFigures: ['Donatus Magnus', 'Caecilian of Carthage (opponent)', 'Augustine of Hippo (opponent)', 'Optatus of Milevis (opponent)'],
    keyEvents: [
      { year: '311', event: 'Disputed election of Caecilian of Carthage triggers the schism' },
      { year: '313-316', event: 'Council of Rome and Council of Arles rule against the Donatists' },
      { year: '411', event: 'Conference of Carthage; imperial decision against the Donatists' },
      { year: '430', event: 'Death of Augustine; Vandal invasion soon after disrupts both communities' },
      { year: '7th c.', event: 'Islamic conquest ends Christianity in North Africa, including Donatism' },
    ],
    resolution:
      'Suppressed by imperial coercion after 411 and finally extinguished by the Islamic conquest of North Africa in the seventh century. Augustine\'s theology of the sacraments (validity ex opere operato) became foundational Catholic doctrine.',
    fullDescription:
      'The Donatist controversy arose from the question of how the Church should treat clergy who, during the Great Persecution under Diocletian (303-311), had handed over sacred books to Roman authorities. When Caecilian was elected bishop of Carthage in 311, his consecrator was alleged to have been a traditor, and a rival group elected Majorinus, soon succeeded by Donatus, whose name the schism bears. The Donatists held that the holiness of the Church depended on the personal holiness of its ministers, and that sacraments performed by lapsed clergy were void. They rebaptized those who came to them from the catholic communion. Their movement appealed to North African religious rigor and Berber identity, drawing on the legacy of Tertullian and Cyprian. The dispute went to Constantine, who referred it to councils at Rome (313) and Arles (314), both of which ruled against the Donatists. Despite imperial measures, the schism flourished for over a century and at times rivaled the catholic Church in North Africa. Augustine of Hippo became its most formidable opponent, developing the doctrine that sacraments derive their efficacy from Christ rather than the minister, and articulating the visible Church as a "mixed body" of saints and sinners until the final judgment. The Conference of Carthage in 411 produced a decisive imperial ruling against the Donatists, and they declined steadily until the Vandal invasions and finally the Islamic conquest extinguished organized Christianity in the region.',
    catholicResponse:
      'Augustine\'s anti-Donatist writings established the principles ex opere operato (sacraments are valid by virtue of Christ\'s action, not the minister\'s holiness) and the Church as corpus permixtum. These remain foundational to Catholic sacramental theology.',
    currentRelations: 'Extinct.',
    sources: [
      'Augustine, Contra Litteras Petiliani; De Baptismo',
      'Optatus of Milevis, Against the Donatists',
      'W.H.C. Frend, The Donatist Church',
      'Catholic Encyclopedia, "Donatists"',
    ],
  },
  // -------------------- Christological / Trinitarian --------------------
  {
    id: 'arianism',
    name: 'Arianism',
    alternateNames: ['Arian heresy', 'Homoian Arianism'],
    category: 'christological',
    era: 'Imperial Church (313-787)',
    yearStart: 318,
    yearEnd: 700,
    founder: 'Arius of Alexandria',
    region: 'Roman Empire, Germanic kingdoms (Goths, Vandals, Lombards)',
    status: 'extinct',
    estimatedFollowers: 'Extinct (dominant in Germanic kingdoms 4th-7th c.)',
    shortDescription:
      'The teaching that the Son of God was created by the Father and is therefore not co-eternal or fully divine. Condemned at Nicaea (325) but persisted for centuries among the Germanic peoples.',
    causes: {
      theological: [
        'Strict subordinationism: only the Father is truly God; the Son is the highest creature',
        'The famous Arian slogan: "There was a time when the Son was not"',
        'Concern to safeguard divine monarchy and unity',
      ],
      political: [
        'Imperial vacillation: emperors Constantius II and Valens favored Arian or semi-Arian formulas',
        'Conversion of Germanic peoples by Arian missionaries (Ulfilas)',
      ],
    },
    keyFigures: ['Arius', 'Athanasius of Alexandria', 'Eusebius of Nicomedia', 'Ulfilas (Gothic apostle)', 'Constantine the Great', 'Constantius II'],
    keyEvents: [
      { year: '318', event: 'Arius begins teaching his doctrine in Alexandria' },
      { year: '325', event: 'First Council of Nicaea condemns Arius; Nicene Creed proclaims the Son is "homoousios" (consubstantial) with the Father' },
      { year: '341-360', event: 'Period of Arian and semi-Arian dominance under Constantius II' },
      { year: '381', event: 'First Council of Constantinople reaffirms Nicaea and expands the Creed' },
      { year: '589', event: 'Visigoths in Spain abandon Arianism at the Third Council of Toledo' },
      { year: '7th c.', event: 'Last Arian Lombard kingdoms convert to Catholicism' },
    ],
    resolution:
      'Defeated theologically at Nicaea (325) and Constantinople (381); finally extinguished as Arian Germanic kingdoms converted to Catholicism between the 6th and 7th centuries.',
    fullDescription:
      'Arianism arose in Alexandria around 318 when the priest Arius began teaching that the Son of God, though the firstborn and most exalted of creatures, was nevertheless created and not co-eternal with the Father. His position was crystallized in the famous slogan "there was a time when the Son was not." This struck at the heart of Christian worship of Christ and threatened to reduce the Incarnation to the appearance of a creature. The bishop of Alexandria, Alexander, and his deacon (later bishop) Athanasius opposed Arius vigorously. Emperor Constantine, newly committed to Christianity, summoned the First Council of Nicaea (325), the first ecumenical council, which condemned Arius and confessed the Son as homoousios (of the same substance) with the Father. Yet Arianism persisted for over a century within the empire, often supported by emperors. Athanasius spent much of his life in exile, sustaining the Nicene cause. The Cappadocian Fathers (Basil the Great, Gregory of Nazianzus, Gregory of Nyssa) refined the trinitarian vocabulary, distinguishing one ousia (essence) and three hypostases (persons). The First Council of Constantinople (381) decisively reaffirmed Nicaea. Meanwhile, the Gothic missionary Ulfilas (a moderate Arian) had converted the Goths, who in turn evangelized other Germanic peoples in their own form of the faith. As a result, when the Western Roman Empire collapsed, most of the new Germanic kingdoms (Visigoths, Ostrogoths, Vandals, Lombards, Burgundians) were Arian, in religious tension with their Catholic Roman subjects. The conversion of Clovis of the Franks to Catholicism (496), the Visigoths at the Third Council of Toledo (589), and finally the last Lombards in the seventh century, ended Arianism as an organized force.',
    catholicResponse:
      'The Nicene Creed (325) and the Niceno-Constantinopolitan Creed (381) remain the central confession of Catholic, Orthodox, and most Protestant Christians. Athanasius and the Cappadocians shaped Trinitarian orthodoxy.',
    currentRelations: 'Extinct as an organized church. Modern groups holding Arian-like views (e.g., Jehovah\'s Witnesses) are treated as separate movements.',
    sources: [
      'Athanasius, Orationes contra Arianos',
      'R.P.C. Hanson, The Search for the Christian Doctrine of God',
      'Council of Nicaea (325) acts and creed',
      'Catholic Encyclopedia, "Arianism"',
    ],
  },
  {
    id: 'nestorianism',
    name: 'Nestorianism',
    alternateNames: ['Church of the East', 'Assyrian Church of the East', 'East Syriac Church'],
    category: 'christological',
    era: 'Imperial Church (313-787)',
    yearStart: 431,
    founder: 'Nestorius (Patriarch of Constantinople)',
    region: 'Originally Syria, Mesopotamia; today Iraq, Syria, India, diaspora',
    status: 'active',
    estimatedFollowers: '~400,000 (Assyrian Church of the East and Ancient Church of the East combined)',
    shortDescription:
      'A Christological position emphasizing the distinction between Christ\'s divine and human natures so sharply that opponents charged it with teaching two persons. The Assyrian Church of the East descends from this tradition and continues today.',
    causes: {
      theological: [
        'Emphasis on the full reality of both natures, especially the integrity of Christ\'s humanity',
        'Reluctance to call Mary "Theotokos" (God-bearer); Nestorius preferred "Christotokos" (Christ-bearer)',
        'Antiochene exegetical tradition vs. Alexandrian',
      ],
      political: [
        'Rivalry between sees of Alexandria and Constantinople',
        'Sasanian Persian patronage of an East Syriac church distinct from the Roman imperial church',
      ],
      cultural: [
        'Linguistic and theological divide between Syriac East and Greek West',
      ],
    },
    keyFigures: ['Nestorius', 'Cyril of Alexandria (opponent)', 'Theodore of Mopsuestia', 'Pope Celestine I', 'Babai the Great'],
    keyEvents: [
      { year: '428', event: 'Nestorius becomes Patriarch of Constantinople and preaches against the title "Theotokos"' },
      { year: '431', event: 'Council of Ephesus condemns Nestorius and affirms Mary as Theotokos' },
      { year: '451', event: 'Council of Chalcedon\'s definition of two natures in one person rejected by both Nestorians and Miaphysites' },
      { year: '486', event: 'Synod of Beth Lapat: Persian church formally adopts a dyophysite Christology' },
      { year: '7th-13th c.', event: 'Church of the East flourishes from Mesopotamia to China' },
      { year: '14th c.', event: 'Devastation under Timur reduces the Church of the East to small communities in modern Iraq and Iran' },
    ],
    resolution:
      'The historic break has not been formally healed, but recent Christological dialogues (Common Christological Declaration, 1994) acknowledge that the two churches confess the same faith in Christ in different formulations.',
    fullDescription:
      'The Nestorian controversy began when Nestorius, newly appointed Patriarch of Constantinople in 428, criticized the popular Marian title Theotokos ("God-bearer") and preferred Christotokos ("Christ-bearer"), fearing that Theotokos confused the divine and human in Christ. His opponent, Cyril of Alexandria, saw this as a denial of the unity of Christ\'s person. The Council of Ephesus (431) condemned Nestorius and affirmed Theotokos. Nestorius was deposed and eventually exiled. While the imperial Church moved through further refinement at Chalcedon (451), East Syriac Christians, mostly outside the Roman empire under Sasanian Persian rule, increasingly identified with the Antiochene Christological tradition associated with Theodore of Mopsuestia and, to a lesser degree, Nestorius. The Church of the East developed into a distinct communion centered in Mesopotamia, with its own catholicos at Seleucia-Ctesiphon. From the seventh through thirteenth centuries it was one of the largest Christian bodies in the world by geography, sending missions to Central Asia, India (joining the existing Saint Thomas Christians), and as far as Tang-dynasty China (Xi\'an stele, 781). Mongol patronage briefly elevated it, but the conquests of Timur in the late fourteenth century devastated its communities. Modern descendants include the Assyrian Church of the East and the smaller Ancient Church of the East, primarily in Iraq, Syria, and the diaspora; many Saint Thomas Christians of India trace lineage to this tradition, although most are now Catholic (Syro-Malabar) or Oriental Orthodox.',
    catholicResponse:
      'The 1994 Common Christological Declaration between Pope John Paul II and Catholicos-Patriarch Mar Dinkha IV affirmed a common faith in Christ. The 2001 admission of Eucharistic sharing in pastoral need was an unprecedented ecumenical step.',
    currentRelations: 'In active ecumenical dialogue with Rome; agreement on Christology achieved (1994). Many Assyrian Christians of India have entered full communion with Rome as the Chaldean Syrian Church.',
    sources: [
      'Acts of the Council of Ephesus (431)',
      'Common Christological Declaration (1994)',
      'Sebastian Brock, "The Nestorian Church: A Lamentable Misnomer"',
      'Wilhelm Baum and Dietmar Winkler, The Church of the East: A Concise History',
    ],
  },
  {
    id: 'oriental-orthodoxy',
    name: 'Miaphysitism / Oriental Orthodoxy',
    alternateNames: ['Non-Chalcedonian Churches', 'Pre-Chalcedonian Churches', 'Monophysitism (older, contested label)'],
    category: 'christological',
    era: 'Imperial Church (313-787)',
    yearStart: 451,
    founder: 'Various; key theologians include Cyril of Alexandria, Severus of Antioch',
    region: 'Egypt, Ethiopia, Eritrea, Syria, Armenia, India',
    status: 'partial-communion',
    estimatedFollowers: '~60 million across six churches',
    shortDescription:
      'Six ancient churches that rejected the Council of Chalcedon (451). Modern dialogue distinguishes their "Miaphysitism" (one united nature, fully divine and fully human) from condemned "Monophysitism" and has produced shared Christological agreements with Rome.',
    causes: {
      theological: [
        'Rejection of Chalcedon\'s formula "in two natures" as compromising the unity of Christ',
        'Fidelity to Cyril of Alexandria\'s formula "one incarnate nature of God the Word"',
        'Concern that Chalcedon was a concession to Nestorianism',
      ],
      political: [
        'Resistance to Byzantine imperial coercion',
        'Regional and ethnic identity (Coptic, Syriac, Armenian) distinct from Greek imperial church',
      ],
      cultural: [
        'Linguistic differences (Coptic, Syriac, Armenian, Ge\'ez vs. Greek)',
      ],
    },
    keyFigures: ['Dioscorus of Alexandria', 'Severus of Antioch', 'Timothy Aelurus', 'Jacob Baradaeus (Syriac)', 'Pope Shenouda III (modern Coptic)'],
    keyEvents: [
      { year: '451', event: 'Council of Chalcedon: rejected by the Coptic, Syriac, Armenian, and Ethiopian churches' },
      { year: '482', event: 'Emperor Zeno\'s Henotikon attempts compromise; ultimately fails' },
      { year: '6th c.', event: 'Jacob Baradaeus organizes a parallel Syriac hierarchy' },
      { year: '1442', event: 'Council of Florence: brief reunion of some Coptic and Ethiopian delegates with Rome' },
      { year: '1973', event: 'Common declaration of Pope Paul VI and Coptic Pope Shenouda III on Christology' },
      { year: '1990', event: 'Pro Oriente Christological agreements between Catholic and Oriental Orthodox theologians' },
    ],
    resolution:
      'Christological dialogues since 1973 have largely resolved the doctrinal misunderstanding. Full communion has not yet been restored, but the historic charge of heresy has been mutually retracted in joint declarations.',
    fullDescription:
      'The Council of Chalcedon (451) defined that Christ is one person "in two natures," divine and human, "without confusion, change, division, or separation." This formula was opposed by a substantial portion of the Eastern Church, particularly in Egypt, Syria, Armenia, and Ethiopia, who saw it as a concession to Nestorianism and a betrayal of Cyril of Alexandria\'s "one incarnate nature of God the Word." Under imperial pressure these churches developed their own hierarchies and have remained distinct ever since. Modern theological scholarship recognizes that most of these "non-Chalcedonian" churches were never strictly Monophysite (the heresy of Eutyches, who held that the human nature was absorbed into the divine), but rather Miaphysite, confessing one united nature of Christ that is fully divine and fully human. The Oriental Orthodox communion today consists of six autocephalous churches: the Coptic Orthodox Church of Alexandria (~10 million, Egypt), the Syriac Orthodox Church (~5 million, originally Antioch), the Armenian Apostolic Church (~9 million, with two catholicosates), the Ethiopian Orthodox Tewahedo Church (~36 million, the largest), the Eritrean Orthodox Tewahedo Church, and the Malankara Orthodox Syrian Church of India (~2.5 million). Each preserves ancient liturgical traditions in its own language. Beginning with the historic Common Declaration of Pope Paul VI and Coptic Pope Shenouda III (1973), the Catholic Church and the Oriental Orthodox have signed a series of agreements affirming the same faith in Christ in different formulas. Ecumenical dialogue continues, and in many regions Catholic and Oriental Orthodox faithful share pastoral cooperation.',
    catholicResponse:
      'Catholic teaching upholds Chalcedon\'s definition while acknowledging that the Oriental Orthodox confess the same Christological faith in their own terminology. Joint declarations (1973, 1984, 1990, 1994, 1996) have removed the historic charge of heresy.',
    currentRelations: 'Partial communion in Christology achieved through a series of joint declarations. The Joint International Commission for Theological Dialogue continues. Eastern Catholic counterparts exist for most Oriental Orthodox churches.',
    sources: [
      'Common Declaration of Paul VI and Shenouda III (1973)',
      'Pro Oriente Vienna Christological Consultations',
      'Aristeides Papadakis, The Christian East and the Rise of the Papacy',
      'Catholic Encyclopedia, "Monophysites and Monophysitism"',
    ],
  },
  {
    id: 'pelagianism',
    name: 'Pelagianism',
    alternateNames: ['Semi-Pelagianism (related)', 'Caelestianism'],
    category: 'christological',
    era: 'Imperial Church (313-787)',
    yearStart: 410,
    yearEnd: 600,
    founder: 'Pelagius (a British monk in Rome)',
    region: 'Rome, North Africa, Palestine, Britain, Gaul',
    status: 'extinct',
    estimatedFollowers: 'Extinct',
    shortDescription:
      'A teaching that human beings, by free will, can take the initial steps toward salvation without the necessity of divine grace; that Adam\'s sin affected only Adam, not his descendants. Augustine\'s lifelong opponent.',
    causes: {
      theological: [
        'Denial of original sin as a transmitted condition',
        'Affirmation that grace consists primarily in the law and the example of Christ',
        'Belief that infants are born in the same state as Adam before the Fall',
      ],
      cultural: [
        'Reaction against perceived moral laxity in late Roman Christianity',
        'Stoic and ascetic ideals of moral self-mastery',
      ],
    },
    keyFigures: ['Pelagius', 'Caelestius (disciple)', 'Julian of Eclanum', 'Augustine of Hippo (opponent)', 'Pope Innocent I', 'Pope Zosimus'],
    keyEvents: [
      { year: 'c. 405', event: 'Pelagius reacts against Augustine\'s prayer "Give what you command, and command what you will"' },
      { year: '411', event: 'Council of Carthage condemns Caelestius' },
      { year: '418', event: 'Council of Carthage and Pope Zosimus\'s Tractoria condemn Pelagianism' },
      { year: '431', event: 'Council of Ephesus reaffirms condemnation' },
      { year: '529', event: 'Second Council of Orange condemns Semi-Pelagianism and affirms Augustine\'s doctrine of grace' },
    ],
    resolution:
      'Definitively condemned at Carthage (418), Ephesus (431), and Orange (529). Augustine\'s doctrine of original sin and prevenient grace became normative for the Latin West.',
    fullDescription:
      'Pelagius was a British or Irish ascetic teacher who came to Rome around 380 and gained a reputation for moral seriousness. He was scandalized by Augustine\'s phrase in the Confessions, "Give what you command, and command what you will," which seemed to him to undermine human responsibility. Pelagius taught that God would not command what humans cannot do, and therefore that human beings retain the natural capacity to choose the good and live without sin if they will it. Adam\'s sin was a bad example, not a transmitted condition; infants are born in the same state Adam was before the Fall; grace consists in the gift of free will, the moral law, and the example of Christ, all of which assist but do not enable a fundamentally healthy human nature. His disciple Caelestius pushed these implications further. Augustine of Hippo became the chief opponent, developing the doctrine of original sin, the necessity of prevenient grace, and the absolute gratuity of salvation. After complex political and theological maneuvering between Rome, Carthage, and Palestine, Pelagianism was condemned at the Council of Carthage (418), endorsed by Pope Zosimus, and again at Ephesus (431). A milder form, Semi-Pelagianism, taught that the initial movement of faith comes from human free will and grace then assists; this was condemned at the Second Council of Orange (529), which became the definitive statement of Augustinian grace for the medieval Latin Church.',
    catholicResponse:
      'Augustine\'s anti-Pelagian writings (De Natura et Gratia, De Gratia Christi, De Peccato Originali, etc.) and the canons of Orange II became the foundation of Catholic teaching on grace, original sin, and free will, reaffirmed at the Council of Trent.',
    currentRelations: 'Extinct as an organized movement. "Pelagian" remains a theological label for over-emphasis on human capacity for self-salvation.',
    sources: [
      'Augustine, Anti-Pelagian writings',
      'Canons of the Second Council of Orange (529)',
      'Catechism of the Catholic Church 405-406',
      'Catholic Encyclopedia, "Pelagius and Pelagianism"',
    ],
  },
  {
    id: 'iconoclasm',
    name: 'Iconoclasm',
    alternateNames: ['Byzantine Iconoclasm', 'Image-breakers'],
    category: 'christological',
    era: 'Imperial Church (313-787)',
    yearStart: 726,
    yearEnd: 843,
    founder: 'Emperor Leo III (initiator)',
    region: 'Byzantine Empire',
    status: 'extinct',
    estimatedFollowers: 'Extinct as a movement',
    shortDescription:
      'A Byzantine imperial movement (726-843) that condemned the veneration of icons as idolatry. Defeated by the Second Council of Nicaea (787) and definitively reversed in the "Triumph of Orthodoxy" (843).',
    causes: {
      theological: [
        'Concern that veneration of icons amounted to idolatry',
        'Christological argument: only Christ\'s humanity can be depicted, but his humanity cannot be separated from his divinity',
        'Influence of Old Testament prohibitions on images',
      ],
      political: [
        'Imperial desire to centralize authority and limit monastic influence',
        'Possible influence from Islamic and Jewish iconoclastic critique of Christian images',
      ],
    },
    keyFigures: ['Emperor Leo III', 'Constantine V', 'John of Damascus (defender)', 'Theodore the Studite (defender)', 'Empress Irene', 'Empress Theodora'],
    keyEvents: [
      { year: '726', event: 'Leo III orders the removal of the icon of Christ from the Chalke Gate of the Imperial Palace' },
      { year: '754', event: 'Iconoclast Council of Hieria condemns icon veneration' },
      { year: '787', event: 'Second Council of Nicaea (Seventh Ecumenical Council) restores icon veneration' },
      { year: '815-843', event: 'Second wave of iconoclasm under emperors Leo V, Michael II, and Theophilus' },
      { year: '843', event: 'Empress Theodora restores icons; the "Triumph of Orthodoxy" celebrated annually on the first Sunday of Lent' },
    ],
    resolution:
      'Definitively rejected at Nicaea II (787) and again in 843. The veneration of icons remains central to Eastern Orthodox and Catholic spirituality.',
    fullDescription:
      'In 726 the Byzantine emperor Leo III, possibly motivated by a combination of theological concern, political calculation, and a desire to harden the empire after Arab military pressure, ordered the removal of the prominent icon of Christ over the Chalke Gate of the imperial palace in Constantinople. This inaugurated a century-long crisis. Iconoclasts ("image-breakers") argued that veneration of images of Christ and the saints amounted to idolatry forbidden by the Decalogue, and that Christ\'s divinity could not be circumscribed in matter. Their opponents, the iconodules, argued that the Incarnation made the depiction of Christ legitimate: God himself had taken on visible flesh, and to deny the icon was implicitly to deny the reality of the Incarnation. The two greatest defenders were John of Damascus, writing safely under Muslim rule outside imperial reach, and Theodore the Studite, an abbot in Constantinople who endured exile and torture. The iconoclast Council of Hieria (754) was answered by the Second Council of Nicaea (787), the Seventh Ecumenical Council, which carefully distinguished veneration (proskynesis) due to icons from the worship (latreia) due to God alone. A second wave of iconoclasm followed, finally ended by Empress Theodora\'s restoration of icons in 843, commemorated ever since in the Eastern churches as the Feast of Orthodoxy on the first Sunday of Lent. The Latin West also affirmed icon veneration, though with some confusion in the early reception of Nicaea II in Carolingian theology.',
    catholicResponse:
      'The Catholic Church accepts the Second Council of Nicaea (787) as the seventh ecumenical council and affirms the legitimate veneration of icons and sacred images, while reserving worship to God alone (Catechism 2129-2132).',
    currentRelations: 'Iconoclasm is extinct as a Christian movement. The shared affirmation of Nicaea II is a point of unity between Catholic and Orthodox Christians.',
    sources: [
      'Acts of the Second Council of Nicaea (787)',
      'John of Damascus, On the Divine Images (three treatises)',
      'Theodore the Studite, On the Holy Icons',
      'Catechism of the Catholic Church 2129-2132',
    ],
  },
  // -------------------- Great Schism --------------------
  {
    id: 'photian-schism',
    name: 'Photian Schism',
    alternateNames: ['First Photian Schism'],
    category: 'great-schism',
    era: 'Imperial Church (313-787)',
    yearStart: 863,
    yearEnd: 879,
    founder: 'Patriarch Photius of Constantinople',
    region: 'Constantinople and Rome',
    status: 'reconciled',
    estimatedFollowers: 'Reconciled (precursor to 1054)',
    shortDescription:
      'A 9th-century rupture between Constantinople and Rome over the deposition of Patriarch Ignatius and the elevation of Photius. A precursor to the Great Schism, eventually healed.',
    causes: {
      theological: [
        'Dispute over the filioque clause in the Western Creed',
        'Different views on papal jurisdiction',
      ],
      political: [
        'Imperial Byzantine politics over the Patriarchate',
        'Competing missionary jurisdictions in newly Christian Bulgaria',
      ],
    },
    keyFigures: ['Photius', 'Patriarch Ignatius', 'Pope Nicholas I', 'Pope John VIII', 'Emperor Michael III', 'Emperor Basil I'],
    keyEvents: [
      { year: '858', event: 'Photius elevated to the Patriarchate after the deposition of Ignatius' },
      { year: '863', event: 'Pope Nicholas I declares Photius\'s elevation invalid' },
      { year: '867', event: 'Photius excommunicates Pope Nicholas I; condemns the filioque' },
      { year: '869-870', event: 'Council of Constantinople (counted as ecumenical in the West) deposes Photius' },
      { year: '879-880', event: 'Council of Constantinople under Pope John VIII rehabilitates Photius and restores communion' },
    ],
    resolution:
      'Reconciled by the council of 879-880, which restored Photius and communion with Rome. Considered by many Orthodox as a model of legitimate reunion.',
    fullDescription:
      'The Photian Schism arose from a contested patriarchal succession in Constantinople. Patriarch Ignatius was deposed for political reasons in 858, and the brilliant lay scholar Photius was rapidly ordained through the canonical orders to take his place. Pope Nicholas I, when consulted, declared the deposition uncanonical. The dispute escalated when Bulgarian missionary jurisdiction came into conflict between Rome and Constantinople, and Photius issued an encyclical (867) attacking the Latin filioque addition to the Creed. After Emperor Michael III\'s assassination, Photius was deposed and Ignatius restored; a council in Constantinople in 869-870 (counted as ecumenical in the West, not in the East) confirmed this. After Ignatius\'s death, however, Photius returned to the patriarchate, and a fresh council in 879-880 under Pope John VIII\'s legates restored full communion, with Rome accepting Photius and Photius accepting communion with Rome. The episode foreshadowed many of the issues that would resurface decisively in 1054: papal jurisdiction, the filioque, and competing ecclesial cultures.',
    catholicResponse:
      'Pope John VIII accepted the reconciliation. The Catholic Church recognizes the council of 869-870 as ecumenical (Constantinople IV), while Orthodox count the 879-880 council as ecumenical in its place.',
    currentRelations: 'Resolved historically. Photius is venerated as a saint in the Eastern Orthodox Church.',
    sources: [
      'Francis Dvornik, The Photian Schism: History and Legend',
      'Acts of the Councils of Constantinople (869-870 and 879-880)',
      'Catholic Encyclopedia, "Photius of Constantinople"',
    ],
  },
  {
    id: 'east-west-schism',
    name: 'East-West Schism (1054)',
    alternateNames: ['Great Schism', 'Schism of 1054'],
    category: 'great-schism',
    era: 'High Middle Ages (1054-1300)',
    yearStart: 1054,
    region: 'Christian East and West',
    status: 'partial-communion',
    estimatedFollowers: '~220 million Eastern Orthodox today',
    shortDescription:
      'The mutual excommunications of 1054 between Cardinal Humbert and Patriarch Cerularius, traditionally marking the formal break between the Catholic Church of Rome and the Eastern Orthodox Churches. The break was the culmination of centuries of estrangement.',
    causes: {
      theological: [
        'The filioque clause: Western addition of "and the Son" to the Creed regarding the procession of the Holy Spirit',
        'Papal primacy: Roman claim to universal jurisdiction vs. Eastern conciliar/pentarchic ecclesiology',
        'Use of unleavened bread (azymes) in the Latin Eucharist',
        'Clerical celibacy in the West vs. married priesthood in the East',
        'Practices of fasting, the Saturday observance, and minor liturgical differences',
      ],
      political: [
        'Coronation of Charlemagne (800) and the Carolingian Empire as a Western rival to Byzantine imperial claims',
        'Competing Norman, Byzantine, and Roman jurisdictions in southern Italy',
        'Sack of Constantinople by the Fourth Crusade (1204) sealed the popular break',
      ],
      cultural: [
        'Linguistic divide: Greek East vs. Latin West',
        'Different liturgical and spiritual traditions',
        'Centuries of growing mutual ignorance after the loss of bilingualism',
      ],
    },
    keyFigures: ['Cardinal Humbert of Silva Candida', 'Patriarch Michael Cerularius', 'Pope Leo IX', 'Emperor Constantine IX Monomachos'],
    keyEvents: [
      { year: '800', event: 'Coronation of Charlemagne; political division of Christendom deepens' },
      { year: '1054', event: 'Cardinal Humbert and Patriarch Cerularius issue mutual excommunications' },
      { year: '1204', event: 'Fourth Crusade sacks Constantinople, sealing the popular break' },
      { year: '1274', event: 'Council of Lyon II: short-lived reunion' },
      { year: '1438-1445', event: 'Council of Florence: another short-lived reunion, repudiated in the East' },
      { year: '1965', event: 'Pope Paul VI and Patriarch Athenagoras I lift the mutual excommunications of 1054' },
    ],
    resolution:
      'Not yet fully resolved. The 1965 mutual lifting of the excommunications removed a symbol of separation but did not restore full communion. Theological dialogue continues.',
    fullDescription:
      'The East-West Schism is conventionally dated to 1054, when the papal legate Cardinal Humbert laid a bull of excommunication on the altar of Hagia Sophia against Patriarch Michael Cerularius, who responded in kind. The bull itself was procedurally questionable (Pope Leo IX had died before it was delivered) and the personal excommunications of two officials did not by themselves separate two churches. In reality the break was a long process of estrangement spanning centuries. Theological issues included the filioque, the Latin addition of "and the Son" to the article of the Creed concerning the procession of the Holy Spirit, made initially in Spain in the 6th century and gradually spreading through the West; the growing claims of the Roman see to universal immediate jurisdiction; the Western use of unleavened bread (azymes) in the Eucharist; clerical celibacy; and various liturgical, fasting, and disciplinary differences. Political and cultural factors aggravated all of these: the rise of the Carolingian and later Holy Roman Empire as a Latin Christian rival to Byzantium; the Norman conquest of Byzantine southern Italy; the loss of bilingualism in both halves of Christendom; and decisively the Fourth Crusade (1204), which captured and brutally sacked Constantinople, leaving a lasting Greek bitterness against the Latins. Attempts at reunion at the councils of Lyon II (1274) and Florence (1438-1445) were imposed by emperors under political pressure and rejected by the Eastern faithful. In 1965, Pope Paul VI and Ecumenical Patriarch Athenagoras I jointly lifted the 1054 excommunications, an important symbolic act, and the Joint International Commission for Theological Dialogue began work in 1980 and continues today.',
    catholicResponse:
      'Vatican II affirmed that "particular Churches" of the East are "true Churches" possessing valid sacraments and apostolic succession (Unitatis Redintegratio 13-18). Pope Paul VI called the East and West "sister churches." Recent popes have repeatedly described unity with Orthodoxy as a priority.',
    currentRelations: 'Sacraments mutually recognized as valid. Joint dialogues continue (notably the Ravenna Document 2007 on conciliarity and primacy). No restoration of full communion yet, especially because of the papal primacy and the post-1054 dogmatic developments in the Catholic Church.',
    sources: [
      'Steven Runciman, The Eastern Schism',
      'Aristeides Papadakis, The Christian East and the Rise of the Papacy',
      'Joint Catholic-Orthodox Declaration of Paul VI and Athenagoras I (1965)',
      'Unitatis Redintegratio, Vatican II',
    ],
  },
  {
    id: 'eastern-orthodoxy',
    name: 'Eastern Orthodox Communion',
    alternateNames: ['Orthodox Church', 'Greek Orthodox', 'Russian Orthodox', 'The Orthodox Catholic Church'],
    category: 'great-schism',
    era: 'Modern',
    yearStart: 1054,
    region: 'Greece, Russia, Eastern Europe, Middle East, global diaspora',
    status: 'partial-communion',
    estimatedFollowers: '~220 million across 14-16 autocephalous churches',
    parentId: 'east-west-schism',
    shortDescription:
      'The communion of autocephalous churches descending from the Christian East after 1054, including Constantinople, Russia, Greece, Romania, Serbia, and others. Sacraments mutually recognized with Rome; full communion not yet restored.',
    causes: {
      theological: [
        'Continuation of the East-West Schism issues',
        'Rejection of post-1054 Latin dogmatic developments (papal infallibility, Immaculate Conception as defined dogma)',
      ],
      cultural: [
        'National and ethnic churches deeply tied to Byzantine, Slavic, and Middle Eastern identities',
      ],
    },
    keyFigures: ['Photius', 'Cerularius', 'Mark of Ephesus', 'Patriarch Tikhon of Russia', 'Ecumenical Patriarch Bartholomew I'],
    keyEvents: [
      { year: '1054', event: 'Conventional date of the schism' },
      { year: '988', event: 'Baptism of Rus\' under Vladimir of Kiev' },
      { year: '1448-1589', event: 'Russian Orthodox Church becomes autocephalous and then a patriarchate' },
      { year: '1872', event: 'Synod of Constantinople condemns "phyletism" (ethnic nationalism in the Church)' },
      { year: '1965', event: 'Mutual lifting of the 1054 excommunications' },
      { year: '2018-19', event: 'Granting of autocephaly to the Orthodox Church of Ukraine; rupture between Constantinople and Moscow' },
    ],
    resolution:
      'Not in full communion with Rome. Internal tensions (especially between Constantinople and Moscow) have grown since 2018.',
    fullDescription:
      'Today the Eastern Orthodox Communion comprises 14 to 16 autocephalous (self-governing) churches, depending on how disputed jurisdictions are counted. The historic apostolic patriarchates are Constantinople (~3.5 million in the patriarchate proper, with much wider influence), Alexandria, Antioch, and Jerusalem. The largest by far is the Russian Orthodox Church (~100 million claimed), followed by the Romanian Orthodox Church, the Church of Greece, the Serbian Orthodox Church, the Bulgarian Orthodox Church, and the Georgian Orthodox Church. Smaller autocephalous churches include those of Cyprus, Albania, Poland, the Czech Lands and Slovakia, and the Orthodox Church in America (whose status is disputed). The newly autocephalous Orthodox Church of Ukraine (granted by Constantinople in 2019) has become the focal point of a serious rupture within the communion: the Moscow Patriarchate has broken communion with Constantinople and the churches recognizing Ukrainian autocephaly. Orthodox ecclesiology emphasizes the conciliar equality of bishops, the primacy of honor (rather than universal jurisdiction) of the Ecumenical Patriarch of Constantinople, and the importance of national/local churches. The Orthodox have their own monastic, liturgical, and theological traditions, including the central practice of icon veneration, the Divine Liturgy of St. John Chrysostom, the Jesus Prayer and hesychasm, and a strong patristic theological orientation.',
    catholicResponse:
      'The Catholic Church regards the Eastern Orthodox as true particular Churches with valid sacraments, apostolic succession, and the Eucharist. Catholic-Orthodox dialogue is central to the ecumenical movement.',
    currentRelations: 'Sacraments mutually recognized in principle. Pastoral arrangements vary. Pope Francis has met repeatedly with Patriarch Bartholomew and other Orthodox leaders. The Joint International Commission continues to work on primacy and conciliarity.',
    sources: [
      'Timothy (Kallistos) Ware, The Orthodox Church',
      'Code of Canons of the Eastern Churches (Catholic counterpart)',
      'Unitatis Redintegratio 13-18',
      'Joint International Commission documents (Ravenna 2007, Chieti 2016)',
    ],
  },
  // -------------------- Medieval Movements --------------------
  {
    id: 'cathars',
    name: 'Cathars / Albigensians',
    alternateNames: ['Albigenses', 'Pure Ones'],
    category: 'medieval',
    era: 'High Middle Ages (1054-1300)',
    yearStart: 1140,
    yearEnd: 1325,
    founder: 'Diverse; influenced by Bogomils',
    region: 'Languedoc (southern France), northern Italy',
    status: 'extinct',
    estimatedFollowers: 'Extinct',
    shortDescription:
      'A 12th-13th century dualist movement in southern France teaching two gods (good spirit, evil matter) and rejecting most sacraments. Suppressed by the Albigensian Crusade and the medieval inquisition.',
    causes: {
      theological: [
        'Cosmic dualism: a good God of spirit and an evil God of matter',
        'Rejection of the Incarnation, the Eucharist, and most sacraments',
        'Belief in reincarnation; only the consolamentum (a single spiritual baptism) saves',
      ],
      cultural: [
        'Discontent with the wealth and corruption of clergy in 12th-c. France',
        'Influence of Bogomil missionaries from the Balkans',
      ],
    },
    keyFigures: ['Dominic de Guzman (founder of Dominicans, sent to preach against Cathars)', 'Innocent III', 'Simon de Montfort'],
    keyEvents: [
      { year: 'c. 1140', event: 'Cathar communities documented in the Rhineland and Languedoc' },
      { year: '1208', event: 'Murder of papal legate Pierre de Castelnau triggers the Albigensian Crusade' },
      { year: '1209-1229', event: 'Albigensian Crusade devastates Languedoc' },
      { year: '1233', event: 'Pope Gregory IX establishes papal inquisitors (often Dominicans) to investigate Cathar communities' },
      { year: '1244', event: 'Fall of Montsegur; mass execution of Cathar Perfecti' },
      { year: 'c. 1325', event: 'Last known Cathar Perfectus, Guillaume Belibaste, burned' },
    ],
    resolution:
      'Suppressed by crusade and inquisition over the 13th-14th centuries. The Dominican order was founded in part for preaching against the Cathars.',
    fullDescription:
      'Catharism arose in the twelfth century in southern France and northern Italy as a strict dualist movement, probably influenced by Bogomil missionaries from the Balkans. Cathars taught that the visible material world had been created by an evil principle (often identified with the God of the Old Testament), while a good God presided over an invisible spiritual realm. Human souls were fallen spirits trapped in matter; salvation came through extreme asceticism and the consolamentum, a once-in-a-lifetime spiritual baptism normally received on the deathbed. The Cathar elite were called Perfecti and lived in strict celibacy, vegetarianism, and pacifism; ordinary believers, the Credentes, lived ordinary lives and aspired to receive the consolamentum at death. The movement spread rapidly in Languedoc, where local nobles tolerated and sometimes embraced it. After the murder of papal legate Pierre de Castelnau in 1208, Pope Innocent III called the Albigensian Crusade (1209-1229), which combined religious motivation with the political ambition of northern French barons. The crusade was extraordinarily violent, including the notorious sack of Beziers (1209). After the Treaty of Paris (1229) brought Languedoc under royal control, the inquisition (formalized in 1233) systematically investigated and punished surviving Cathars. The fall of the mountain stronghold Montsegur in 1244 ended organized resistance; the last known Perfectus was burned in 1321. The Dominicans, founded by St. Dominic precisely to preach against the Cathars, became the principal order of inquisitors and theologians in the centuries following.',
    catholicResponse:
      'Doctrinal refutation, preaching missions (especially by St. Dominic), the Fourth Lateran Council (1215) clarifying Eucharistic and Christological doctrine, and the inquisition. The crusade itself remains a controversial chapter, criticized in modern Catholic reflection.',
    currentRelations: 'Extinct. Modern romantic and esoteric "Neo-Cathar" movements have no historical continuity.',
    sources: [
      'Malcolm Lambert, The Cathars',
      'Acts of the Fourth Lateran Council (1215)',
      'Emmanuel Le Roy Ladurie, Montaillou',
      'Catholic Encyclopedia, "Albigenses"',
    ],
  },
  {
    id: 'waldensians',
    name: 'Waldensians',
    alternateNames: ['Vaudois', 'Poor of Lyon'],
    category: 'medieval',
    era: 'High Middle Ages (1054-1300)',
    yearStart: 1173,
    region: 'Originally Lyon; survived in Alpine valleys of Italy and France; today Italy and global mission',
    status: 'active',
    estimatedFollowers: '~30,000 (Italy); ~3 million counting affiliated South American and missionary churches',
    founder: 'Peter Waldo (Pierre Vaudes) of Lyon',
    shortDescription:
      'A 12th-century lay preaching movement begun by Peter Waldo of Lyon. Persecuted as heretics, the Waldensians survived in Alpine valleys and merged partly with the Reformed tradition in the 16th century. They are arguably the oldest continuously existing dissenting movement in Western Christianity.',
    causes: {
      theological: [
        'Lay preaching without ecclesiastical authorization',
        'Vernacular translation and circulation of Scripture',
        'Rejection of purgatory, indulgences, oaths, and capital punishment',
        'Apostolic poverty as the central Christian virtue',
      ],
      cultural: [
        'Reaction against perceived clerical wealth and corruption',
        'Rise of urban lay piety in the 12th c.',
      ],
    },
    keyFigures: ['Peter Waldo', 'Pope Alexander III', 'William Farel', 'Olivetan (Bible translator)'],
    keyEvents: [
      { year: 'c. 1173', event: 'Peter Waldo gives away his wealth to follow Christ in apostolic poverty' },
      { year: '1179', event: 'Waldo presents his vernacular Bible at the Third Lateran Council; partial approval, then revoked' },
      { year: '1184', event: 'Council of Verona condemns the Waldensians as heretics' },
      { year: '15th-16th c.', event: 'Persecutions in Piedmont; survival in Alpine valleys' },
      { year: '1532', event: 'Synod of Chanforan: Waldensians align with the Reformed (Calvinist) tradition' },
      { year: '1655', event: 'The "Piedmont Easter" massacre, immortalized in Milton\'s sonnet' },
      { year: '1848', event: 'Edict of Emancipation grants Waldensians civil rights in the Kingdom of Sardinia' },
      { year: '2015', event: 'Pope Francis visits the Waldensian temple in Turin and asks forgiveness for past Catholic persecution' },
    ],
    resolution:
      'Not in full communion with Rome, but reconciled in tone. Pope Francis\'s 2015 request for forgiveness was a major moment of healing.',
    fullDescription:
      'In the 1170s, Peter Waldo, a wealthy merchant of Lyon, was so moved by the gospel that he renounced his property and began to preach in the streets. He gathered companions, the "Poor of Lyon," who lived by begging and itinerant preaching, and commissioned the first known vernacular translation of large parts of the Bible into Old French. When Waldo and his followers presented themselves at the Third Lateran Council (1179), Pope Alexander III approved their poverty but, distrustful of unauthorized lay preaching, restricted them to preaching only at the invitation of clergy. Waldo refused, citing "We must obey God rather than men." The movement was condemned at the Council of Verona (1184). Despite persecution, Waldensian communities persisted in southern France, northern Italy, and central Europe. By the late Middle Ages they were concentrated in Alpine valleys of Piedmont and Provence. In 1532, at the Synod of Chanforan, they aligned with the Swiss Reformation, becoming in effect the oldest "Protestant" church. They suffered terrible persecutions, including the 1655 massacres in Piedmont that prompted Cromwell\'s diplomacy and Milton\'s famous sonnet "Avenge, O Lord, thy slaughtered saints." Granted civil rights in 1848, they expanded with missions to South America (especially Uruguay and Argentina). In 2015, Pope Francis became the first pope to visit a Waldensian temple, asking forgiveness for the historic persecution.',
    catholicResponse:
      'Historic condemnation followed by significant reconciliation in modern times. Pope Francis\'s 2015 visit and request for forgiveness was a watershed.',
    currentRelations: 'In dialogue with the Catholic Church and other Reformation churches. The Waldensian Church of Italy is in communion with the Methodist Church of Italy.',
    sources: [
      'Gabriel Audisio, The Waldensian Dissent',
      'Euan Cameron, Waldenses: Rejections of Holy Church in Medieval Europe',
      'Catholic Encyclopedia, "Waldenses"',
      'Pope Francis\'s addresses, June 2015',
    ],
  },
  {
    id: 'hussites',
    name: 'Hussites / Bohemian Brethren',
    alternateNames: ['Utraquists', 'Moravian Brethren', 'Unitas Fratrum'],
    category: 'medieval',
    era: 'Late Middle Ages (1300-1500)',
    yearStart: 1415,
    region: 'Bohemia, Moravia; modern Czech Republic and global Moravian missions',
    status: 'active',
    estimatedFollowers: 'Moravian Church ~1 million worldwide',
    founder: 'Jan Hus (martyred 1415)',
    shortDescription:
      'A reform movement begun by the Czech priest Jan Hus, condemned and burned at the Council of Constance in 1415. The Hussite movement gave rise to the Bohemian/Moravian Brethren, a precursor of the Reformation, still active today as the Moravian Church.',
    causes: {
      theological: [
        'Influence of Wycliffe: Scripture as supreme authority; criticism of indulgences and papal authority',
        'Demand for the chalice for the laity (Utraquism)',
        'Critique of clerical wealth and immorality',
      ],
      political: [
        'Czech national identity vs. German imperial power and Roman authority',
        'University of Prague as a center of reform',
      ],
    },
    keyFigures: ['Jan Hus', 'Jerome of Prague', 'Jan Žižka', 'Petr Chelčický', 'Count Zinzendorf (later Moravian leader)'],
    keyEvents: [
      { year: '1402', event: 'Hus begins preaching in the Bethlehem Chapel, Prague' },
      { year: '1415', event: 'Council of Constance condemns Hus; he is burned at the stake' },
      { year: '1419-1434', event: 'Hussite Wars; the Czech kingdom becomes effectively independent in religion' },
      { year: '1457', event: 'Founding of the Unitas Fratrum (Bohemian Brethren)' },
      { year: '1620', event: 'Battle of White Mountain ends Czech Protestant independence; Brethren go into hiding or exile' },
      { year: '1722', event: 'Brethren refugees settle on Count Zinzendorf\'s estate; Moravian Church renewed' },
      { year: '1999', event: 'Joint Catholic-Lutheran-Moravian dialogues; Hus rehabilitated in modern Catholic discourse' },
    ],
    resolution:
      'Czech Hussite tradition fragmented into the Catholic-Hussite Utraquists (eventually re-Catholicized after 1620), the Bohemian/Moravian Brethren (surviving in exile), and modern Czechoslovak Hussite Church.',
    fullDescription:
      'Jan Hus was a Czech priest, theologian, and rector of the University of Prague who, influenced by the writings of John Wycliffe, criticized clerical immorality, the sale of indulgences, and the abuse of papal authority. He demanded that the laity receive the chalice as well as the host at communion, and preached in Czech rather than Latin. Summoned under safe-conduct to the Council of Constance (1414-1418), he was nevertheless arrested, condemned, and burned at the stake on 6 July 1415. His martyrdom, and that of Jerome of Prague the next year, ignited the Hussite Wars (1419-1434), in which Czech armies under brilliant commanders such as Jan Žižka repeatedly defeated Catholic crusader forces. The Council of Basel (1436) granted the Czechs the Compactata, allowing communion in both kinds, in effect creating a self-governing national church (the Utraquists). A more radical strand under Petr Chelčický led to the founding in 1457 of the Unitas Fratrum, the Bohemian Brethren, who emphasized pacifism, simplicity, and lay biblical piety, and produced the Kralice Bible, a milestone of Czech literature. The defeat of the Czech Protestants at the Battle of White Mountain (1620) led to the suppression of the Brethren; survivors went into hiding or exile, including the famous Comenius. In 1722, refugees settled on the estate of Count Zinzendorf in Saxony, where they refounded the Moravian Church, which became one of the great Protestant missionary movements of the 18th century. In modern times Pope John Paul II expressed regret for Hus\'s death, and ecumenical study commissions have rehabilitated his memory.',
    catholicResponse:
      'Modern popes (especially John Paul II in 1999) have expressed regret for Hus\'s execution. Ecumenical dialogue with the Czech Hussite Church and the Moravian Church continues.',
    currentRelations: 'The Moravian Church is in dialogue with Catholic, Lutheran, and Anglican bodies. The Czechoslovak Hussite Church is a separate, more recent body.',
    sources: [
      'Thomas A. Fudge, Jan Hus: Religious Reform and Social Revolution in Bohemia',
      'Acts of the Council of Constance (1415)',
      'Joint Commission documents on Hus (1990s)',
      'Catholic Encyclopedia, "Hus, John"',
    ],
  },

  // -------------------- Protestant Reformation --------------------
  {
    id: 'lutheranism',
    name: 'Lutheranism',
    alternateNames: ['Evangelical Lutheran Church', 'Lutheran World Federation'],
    category: 'reformation',
    era: 'Reformation (1500-1700)',
    yearStart: 1517,
    founder: 'Martin Luther (1483-1546)',
    region: 'Originating Saxony; today global with strongholds in Germany, Scandinavia, USA, Africa',
    status: 'active',
    estimatedFollowers: '~80 million worldwide',
    shortDescription:
      'The first and most influential Protestant tradition, founded when Martin Luther posted his 95 Theses in 1517 protesting indulgences. Sola fide, sola scriptura, sola gratia.',
    causes: {
      theological: [
        'Justification by faith alone (sola fide) vs. faith working through love',
        'Scripture alone (sola scriptura) as the supreme rule of faith',
        'Rejection of indulgences, purgatory as treasury of merits, papal authority',
        'Two sacraments (baptism, Eucharist) instead of seven; rejection of transubstantiation in favor of "consubstantiation" or sacramental union',
      ],
      political: [
        'German princes\' resistance to Imperial and papal taxation',
        'Frederick the Wise of Saxony\'s protection of Luther',
      ],
      cultural: [
        'Renaissance humanism\'s return to original sources',
        'The printing press: Luther\'s 95 Theses spread across Germany within weeks',
      ],
    },
    keyFigures: ['Martin Luther', 'Philip Melanchthon', 'Johann Bugenhagen', 'Frederick the Wise'],
    keyEvents: [
      { year: '1517', event: '95 Theses posted at Wittenberg' },
      { year: '1521', event: 'Diet of Worms — "Here I stand"' },
      { year: '1530', event: 'Augsburg Confession — definitive Lutheran statement of faith' },
      { year: '1546', event: 'Death of Luther' },
      { year: '1577', event: 'Formula of Concord unifies Lutheran churches' },
      { year: '1999', event: 'Joint Declaration on the Doctrine of Justification with the Catholic Church' },
    ],
    resolution:
      'Permanent denominational separation, but the 1999 Joint Declaration on Justification represents one of the great ecumenical convergences of modern times. Many historic Lutheran objections have been substantially addressed.',
    fullDescription:
      'Martin Luther, an Augustinian friar and professor at Wittenberg, posted ninety-five theses against the abuse of indulgences on the eve of All Saints\' Day, 1517. What began as an academic protest rapidly became a continental movement, fueled by the new printing press and by genuine theological insight: Luther\'s "discovery" that the righteousness of God in Romans 1:17 is not God\'s wrath but the gift by which he justifies sinners. Excommunicated by Pope Leo X in 1521 and outlawed by the Emperor at Worms, Luther was sheltered by Frederick the Wise and translated the New Testament into German in less than three months. Lutheranism became the established religion of much of northern Germany and all of Scandinavia. The Augsburg Confession (1530), drafted by Philip Melanchthon, remains the foundational doctrinal text. Modern Lutheranism includes the Lutheran World Federation (representing most Lutherans worldwide), the more conservative Lutheran Church-Missouri Synod, and the Wisconsin Evangelical Lutheran Synod. The 1999 Joint Declaration on the Doctrine of Justification, signed by the Lutheran World Federation and the Vatican, declared that the historic mutual condemnations on justification do not apply to the teaching of either body today.',
    catholicResponse:
      'Council of Trent (1545-63) clarified Catholic teaching on justification, sacraments, scripture, and tradition. Modern dialogue (especially the 1999 Joint Declaration) has substantially closed the historic gap on the central Reformation issue.',
    currentRelations:
      'Lutheran-Catholic dialogue is among the most fruitful ecumenical engagements. Joint commemoration of the Reformation\'s 500th anniversary (2017) at Lund Cathedral by Pope Francis and the LWF.',
    sources: [
      'The Augsburg Confession (1530)',
      'Luther\'s 95 Theses; Bondage of the Will',
      'Joint Declaration on the Doctrine of Justification (1999)',
      'Diarmaid MacCulloch, The Reformation: A History',
    ],
  },
  {
    id: 'reformed',
    name: 'Reformed / Calvinist Tradition',
    alternateNames: ['Presbyterian', 'Reformed Church', 'Continental Reformed', 'Dutch Reformed'],
    category: 'reformation',
    era: 'Reformation (1500-1700)',
    yearStart: 1519,
    founder: 'Huldrych Zwingli (1484-1531) and John Calvin (1509-1564)',
    region: 'Originating Switzerland; today strong in Netherlands, Scotland, USA, South Korea, sub-Saharan Africa',
    status: 'active',
    estimatedFollowers: '~75 million worldwide',
    shortDescription:
      'The second major Protestant tradition, originating with Zwingli in Zurich (1519) and systematized by John Calvin in Geneva. Emphasizes God\'s sovereignty, predestination, and the regulative principle of worship.',
    causes: {
      theological: [
        'Even more radical break with medieval sacramental theology than Lutheranism',
        'Predestination and election as central doctrines',
        'Symbolic or "spiritual presence" view of the Eucharist (vs. Luther\'s real presence)',
        'Regulative principle: worship is permitted only what is commanded in Scripture',
        'Strict iconoclasm — removal of statues, images, organs',
      ],
      political: [
        'Calvin\'s Geneva as a model "godly city"',
        'Influence on Dutch revolt against Spain, Scottish Reformation, English Puritanism',
      ],
    },
    keyFigures: ['Huldrych Zwingli', 'John Calvin', 'Theodore Beza', 'John Knox', 'Heinrich Bullinger'],
    keyEvents: [
      { year: '1519', event: 'Zwingli begins reform in Zurich' },
      { year: '1536', event: 'Calvin publishes Institutes of the Christian Religion (first edition)' },
      { year: '1541', event: 'Calvin returns to Geneva; reformed church order established' },
      { year: '1560', event: 'Scottish Reformation under John Knox; Scottish Confession' },
      { year: '1618-19', event: 'Synod of Dort: defines Five Points of Calvinism (TULIP)' },
      { year: '1646-47', event: 'Westminster Confession of Faith' },
    ],
    resolution: 'Permanent denominational separation; the Reformed family remains diverse and globally significant.',
    fullDescription:
      'The Reformed tradition emerged in Zurich under Huldrych Zwingli almost simultaneously with Luther\'s movement, but pushed further: rejecting any physical presence of Christ in the Eucharist, removing all images from churches, and insisting on the regulative principle of worship. Zwingli died in battle in 1531; the tradition\'s great systematizer was the French exile John Calvin, whose Institutes of the Christian Religion (final edition 1559) became the most influential Protestant theological work after Luther\'s catechisms. Calvin\'s Geneva was an experiment in confessional governance that influenced the Dutch Republic, Scotland (under John Knox), Hungary, and the English Puritans who would shape American Protestantism. The Reformed family today includes Presbyterian, Reformed, Congregational, and Dutch Reformed bodies. The doctrinal distinctives of unconditional election, limited atonement, and irresistible grace ("TULIP") were sharpened at the Synod of Dort (1618-19) against Arminian theology.',
    catholicResponse:
      'Catholic-Reformed dialogue has been less fruitful than Catholic-Lutheran, partly because of greater theological distance on sacraments and ecclesiology. Recent dialogues continue under the Pontifical Council for Promoting Christian Unity.',
    currentRelations:
      'World Communion of Reformed Churches has dialogues with Catholics; signed an "Association" with the Joint Declaration on Justification in 2017.',
    sources: [
      'John Calvin, Institutes of the Christian Religion',
      'Westminster Confession of Faith (1647)',
      'Synod of Dort, Canons (1619)',
      'Bruce Gordon, Calvin (Yale, 2009)',
    ],
  },
  {
    id: 'anglicanism',
    name: 'Anglicanism',
    alternateNames: ['Church of England', 'Episcopal Church', 'Anglican Communion'],
    category: 'reformation',
    era: 'Reformation (1500-1700)',
    yearStart: 1534,
    founder: 'King Henry VIII (formal break); Thomas Cranmer (theology and liturgy)',
    region: 'Originating England; today global Anglican Communion with 39 provinces',
    status: 'active',
    estimatedFollowers: '~85 million worldwide',
    shortDescription:
      'The Church of England formally separated from Rome in 1534 over Henry VIII\'s desired annulment of his marriage to Catherine of Aragon — a split rooted in royal politics rather than primarily in doctrine, leading to a unique "via media" between Catholic and Protestant.',
    causes: {
      theological: [
        'Initially minimal — Henry VIII rejected Lutheran teaching ("Defender of the Faith")',
        'Under Edward VI: clearly Reformed direction (1549, 1552 Books of Common Prayer)',
        'Under Elizabeth I: the "Elizabethan Settlement" — Catholic structure with Reformed theology',
      ],
      political: [
        'Henry VIII\'s desire for an annulment denied by Pope Clement VII',
        'Royal supremacy over the Church (Act of Supremacy, 1534)',
        'Confiscation of monastic lands enriched the crown and gentry',
      ],
      cultural: [
        'English national identity and resistance to foreign jurisdiction',
        'Cranmer\'s liturgical genius shaped English religious sensibility for centuries',
      ],
    },
    keyFigures: ['Henry VIII', 'Thomas Cranmer', 'Elizabeth I', 'Richard Hooker', 'John Henry Newman (later Catholic)'],
    keyEvents: [
      { year: '1534', event: 'Act of Supremacy: Henry VIII Supreme Head of the Church of England' },
      { year: '1549', event: 'First Book of Common Prayer (Cranmer)' },
      { year: '1559', event: 'Elizabethan Settlement; 39 Articles of Religion' },
      { year: '1662', event: 'Definitive Book of Common Prayer' },
      { year: '1833', event: 'Oxford Movement begins; recovery of Catholic identity' },
      { year: '1992', event: 'Church of England ordains women priests' },
      { year: '2009', event: 'Pope Benedict XVI establishes Anglican Ordinariates' },
    ],
    resolution:
      'Permanent denominational separation, with significant ongoing dialogue (ARCIC). Pope Benedict XVI created Personal Ordinariates (2009) for groups of Anglicans entering Catholic communion while preserving liturgical patrimony.',
    fullDescription:
      'The English Reformation was driven by King Henry VIII\'s desire to annul his marriage to Catherine of Aragon, refused by Pope Clement VII. Through Acts of Parliament (1532-34), Henry severed legal ties with Rome and made himself Supreme Head of the Church of England. Doctrinally, however, Henry remained largely Catholic — he had previously written against Luther and earned the title "Defender of the Faith." It was under his son Edward VI, with Archbishop Thomas Cranmer, that English worship became decidedly Reformed (1552 Book of Common Prayer). After Mary I\'s brief Catholic restoration, Elizabeth I established the "Elizabethan Settlement": Catholic structure (bishops, cathedrals, ancient liturgical year) with Reformed theology (39 Articles). Anglicans regard their tradition as a "via media" between Rome and Geneva. The 19th-century Oxford Movement, led by John Henry Newman (who himself later became Catholic and was canonized in 2019), recovered Catholic identity within the Church of England. The Anglican Communion today is the third-largest Christian body after the Catholic and Orthodox communions. Catholic-Anglican relations have been particularly close: ARCIC (Anglican-Roman Catholic International Commission) has produced major agreed statements on the Eucharist, ministry, and authority. The ordination of women (Church of England, 1992) and same-sex blessings have created tensions both internally and ecumenically.',
    catholicResponse:
      'Pope Leo XIII\'s Apostolicae Curae (1896) declared Anglican orders "absolutely null and utterly void." ARCIC dialogues since 1970 have substantially closed many gaps. Pope Benedict XVI\'s Anglicanorum Coetibus (2009) created the Personal Ordinariates as a structure for Anglican groups entering full Catholic communion.',
    currentRelations:
      'ARCIC remains active. The Anglican Ordinariates — Our Lady of Walsingham (UK), the Chair of Saint Peter (USA), Our Lady of the Southern Cross (Australia) — preserve Anglican liturgical patrimony in full Catholic communion.',
    sources: [
      'Eamon Duffy, The Stripping of the Altars',
      'Diarmaid MacCulloch, Thomas Cranmer: A Life',
      'ARCIC Agreed Statements',
      'Apostolicae Curae (1896); Anglicanorum Coetibus (2009)',
    ],
  },
  {
    id: 'anabaptists',
    name: 'Anabaptists',
    alternateNames: ['Mennonites', 'Amish', 'Hutterites', 'Schwarzenau Brethren'],
    category: 'reformation',
    era: 'Reformation (1500-1700)',
    yearStart: 1525,
    founder: 'Conrad Grebel, Felix Manz, George Blaurock (Swiss Brethren)',
    region: 'Originating Switzerland; today strong in Netherlands, Germany, USA (Pennsylvania), Paraguay',
    status: 'active',
    estimatedFollowers: '~2.1 million worldwide',
    shortDescription:
      'The "radical Reformation" — those who rejected infant baptism, insisted on a believers\' church, and pursued strict separation from civil authority. Persecuted by Catholics, Lutherans, and Reformed alike.',
    causes: {
      theological: [
        'Believers\' baptism: only adult professing believers should be baptized',
        'Pacifism and refusal to swear oaths',
        'Strict separation of church and state',
        'Pure church discipline (the "ban") to maintain holiness',
      ],
      cultural: ['Distrust of magisterial Reformation\'s alliance with civil power'],
    },
    keyFigures: ['Conrad Grebel', 'Felix Manz', 'Menno Simons', 'Jakob Hutter', 'Michael Sattler'],
    keyEvents: [
      { year: '1525', event: 'First adult baptisms in Zurich; movement begins' },
      { year: '1527', event: 'Schleitheim Confession — defining Anabaptist articles' },
      { year: '1535', event: 'Münster Rebellion discredits Anabaptism in mainstream Reformation' },
      { year: '1540s', event: 'Menno Simons consolidates peaceful Dutch Anabaptism (Mennonites)' },
      { year: '1693', event: 'Amish split from Mennonites (Jakob Ammann)' },
    ],
    resolution: 'Permanent separation, but historically harshly persecuted. Modern Mennonite-Catholic dialogue began in 1998.',
    fullDescription:
      'The Anabaptists emerged in 1525 when a group of Zwingli\'s disciples, frustrated with what they saw as the slow pace of reform, baptized one another as adults — a capital offense under Imperial law. Persecuted by Catholics, Lutherans, and Reformed alike, they spread underground across Europe. The disastrous Münster Rebellion (1534-35), where radicals briefly established a violent theocratic kingdom, gave Anabaptism a reputation for fanaticism that took centuries to overcome. Menno Simons, a Dutch former priest, consolidated peaceful Anabaptism into what became Mennonite tradition. The Amish split off in 1693 over the strict application of the ban. Today Anabaptists include Mennonites, Amish, Hutterites, and Schwarzenau Brethren. They have produced an outsized contribution to peace theology, voluntary service, and disaster relief.',
    catholicResponse:
      'Heavy persecution in the 16th century. Modern Catholic-Mennonite dialogue began in 1998; the report "Called Together to Be Peacemakers" (2003) marked a major reconciliation, with mutual healing of historical memories.',
    currentRelations:
      'Mennonite World Conference engages in ongoing dialogue with Catholics and Lutherans. 2010 Lutheran World Federation apology to Mennonites for Reformation-era persecutions.',
    sources: [
      'Schleitheim Confession (1527)',
      '"Called Together to Be Peacemakers" — Catholic-Mennonite Report (2003)',
      'C. Arnold Snyder, Anabaptist History and Theology',
    ],
  },

  // -------------------- Post-Reformation --------------------
  {
    id: 'baptists',
    name: 'Baptists',
    alternateNames: ['Particular Baptists', 'General Baptists', 'Southern Baptist Convention', 'American Baptist Churches'],
    category: 'post-reformation',
    era: 'Early Modern (1600-1800)',
    yearStart: 1609,
    founder: 'John Smyth and Thomas Helwys (English separatists)',
    region: 'Originating England/Holland; today globally strong with USA as largest concentration',
    status: 'active',
    estimatedFollowers: '~100 million worldwide; the largest non-Catholic Christian tradition in the United States',
    shortDescription:
      'A 17th-century English Separatist movement that adopted believer\'s baptism by full immersion. Emphasizes congregational autonomy, soul liberty, and the priesthood of all believers.',
    causes: {
      theological: [
        'Believers\' baptism by full immersion (later distinctive)',
        'Congregational church government — each local congregation autonomous',
        'Soul liberty: every person\'s right and duty to interpret Scripture',
        'Separation of church and state (early advocates)',
      ],
      cultural: ['English Separatist movement and persecuted dissent'],
    },
    keyFigures: ['John Smyth', 'Thomas Helwys', 'Roger Williams', 'Charles Spurgeon', 'Billy Graham', 'Martin Luther King Jr.'],
    keyEvents: [
      { year: '1609', event: 'John Smyth in Amsterdam baptizes himself and his congregation; first Baptists' },
      { year: '1638', event: 'Roger Williams founds the first Baptist church in America (Providence)' },
      { year: '1814', event: 'Triennial Convention — first major Baptist body in USA' },
      { year: '1845', event: 'Southern Baptist Convention founded (split over slavery)' },
      { year: '1905', event: 'Baptist World Alliance' },
    ],
    resolution: 'Permanent denominational separation; Baptists remain extraordinarily diverse, from Reformed Particular Baptists to charismatic-leaning megachurches.',
    fullDescription:
      'Baptists emerged from English Separatism in 1609 when John Smyth, exiled in Amsterdam, repudiated his infant baptism and baptized himself and his small congregation. The movement spread rapidly in 17th-century England and was carried to America by Roger Williams (founder of Providence, Rhode Island, 1636) and others. Baptists\' insistence on religious liberty and church-state separation profoundly shaped the American constitutional tradition. The 19th and 20th centuries saw extraordinary missionary expansion, particularly through the Southern Baptist Convention (founded 1845) and African American Baptist traditions, which produced figures like Martin Luther King Jr. and provided the spiritual backbone of the civil rights movement. Modern Baptists range from theologically conservative inerrantists to progressive social-gospel traditions, united more by polity (congregational autonomy) and ordinance (believers\' baptism) than by doctrinal uniformity.',
    catholicResponse:
      'Catholic-Baptist dialogue began in 1984. The convergence document "The Word of God in the Life of the Church" (2010-2015) addressed Scripture, Tradition, and authority.',
    currentRelations: 'Baptist World Alliance engages in ongoing dialogue with Catholics. Significant theological distance remains, especially on baptism and ecclesiology.',
    sources: [
      'Bill J. Leonard, Baptists in America (Columbia, 2005)',
      'Baptist Faith and Message (Southern Baptist Convention)',
      'Catholic-Baptist International Conversations Reports',
    ],
  },
  {
    id: 'methodism',
    name: 'Methodism',
    alternateNames: ['United Methodist Church', 'African Methodist Episcopal Church', 'Wesleyan Church'],
    category: 'post-reformation',
    era: 'Early Modern (1600-1800)',
    yearStart: 1738,
    founder: 'John Wesley (1703-1791) and Charles Wesley (1707-1788)',
    region: 'Originating England; today globally significant in USA, Africa (especially Nigeria, Zimbabwe), Korea',
    status: 'active',
    estimatedFollowers: '~80 million worldwide',
    shortDescription:
      'A revival movement begun within the Church of England by John Wesley after his 1738 "heart strangely warmed" conversion experience. Emphasizes personal holiness, evangelistic preaching, and social engagement. Formally separated from the Anglican Church in 1784.',
    causes: {
      theological: [
        'Arminian (vs. Calvinist) view of free grace',
        '"Christian perfection" — sanctification as growth toward perfect love',
        'Strong emphasis on personal experience of God ("assurance")',
        'Open-air preaching and small-group accountability',
      ],
      cultural: ['Industrial Revolution\'s spiritual vacuum; Methodism reached working classes'],
    },
    keyFigures: ['John Wesley', 'Charles Wesley (great hymnodist)', 'George Whitefield (Calvinist Methodist)', 'Francis Asbury'],
    keyEvents: [
      { year: '1738', event: 'Wesley\'s Aldersgate experience: "I felt my heart strangely warmed"' },
      { year: '1784', event: 'Methodist Episcopal Church organized in America (formal separation from Anglicans)' },
      { year: '1816', event: 'African Methodist Episcopal Church founded (Richard Allen)' },
      { year: '1968', event: 'Formation of the United Methodist Church (USA)' },
      { year: '2024', event: 'Major split as Global Methodist Church separates from UMC over LGBTQ issues' },
    ],
    resolution: 'Originally a movement within Anglicanism that separated; today a major global Protestant family with multiple bodies.',
    fullDescription:
      'John Wesley, an Anglican priest, experienced a profound conversion at a Moravian gathering on Aldersgate Street, London, in 1738. He and his brother Charles, along with George Whitefield, began open-air preaching to coal miners, factory workers, and the rural poor. "Methodist" was originally a derisive nickname for the methodical spiritual practices of the Wesleys\' Oxford "Holy Club." Wesley insisted on remaining within the Church of England throughout his life, but the practical realities of the American mission (with no Anglican bishops to ordain) led him to ordain ministers himself in 1784, marking effective separation. Methodism emphasized free grace (vs. Calvinist predestination), Christian perfection, and concrete social action — early Methodists campaigned against slavery, drunkenness, and poverty. Methodism\'s American expansion was extraordinarily rapid through the circuit-rider system. Today Methodism includes the United Methodist Church, the AME and AME Zion churches (African American), Free Methodists, Wesleyans, and many others, plus the Pentecostal and Holiness movements that emerged from Methodist roots.',
    catholicResponse: 'Methodist-Catholic dialogue began in 1967 after Vatican II. Convergence reports on Eucharist, ministry, and authority.',
    currentRelations: 'World Methodist Council in active dialogue with Vatican. Methodists associated with the Joint Declaration on Justification in 2006.',
    sources: [
      'John Wesley, Sermons and Journal',
      'Charles Wesley, Hymns',
      'World Methodist Council, Catholic-Methodist Dialogue Reports',
    ],
  },
  {
    id: 'old-catholic',
    name: 'Old Catholic Church',
    alternateNames: ['Union of Utrecht', 'Old Catholic Churches of the Union of Utrecht'],
    category: 'post-reformation',
    era: 'Modern (1800-Present)',
    yearStart: 1870,
    founder: 'Bishops who rejected Vatican I; centered on the See of Utrecht',
    region: 'Netherlands, Germany, Switzerland, Austria, Czech Republic, USA (Polish National Catholic Church)',
    status: 'active',
    estimatedFollowers: '~1 million worldwide (declining)',
    shortDescription:
      'A communion of national Catholic churches that rejected the dogma of papal infallibility defined at Vatican I (1870), centered on the historic See of Utrecht in the Netherlands.',
    causes: {
      theological: [
        'Rejection of papal infallibility as defined by Vatican I (Pastor Aeternus, 1870)',
        'Rejection of the Immaculate Conception (defined 1854) as binding dogma',
        'Eventually adopted modernist positions: women\'s ordination, contraception, same-sex blessings',
      ],
      political: [
        'Earlier Dutch Jansenist controversy provided the See of Utrecht with bishops independent of Rome',
      ],
    },
    keyFigures: ['Ignaz von Döllinger (theologian who rejected infallibility)', 'Eduard Herzog (first Old Catholic bishop in Switzerland)'],
    keyEvents: [
      { year: '1723', event: 'Utrecht schism: Dutch See independent of Rome over Jansenist disputes' },
      { year: '1870', event: 'Vatican I defines papal infallibility' },
      { year: '1871', event: 'Munich Congress: Old Catholic movement begins' },
      { year: '1889', event: 'Union of Utrecht: federation of Old Catholic churches' },
      { year: '1931', event: 'Bonn Agreement: full communion with Anglicans' },
      { year: '1996+', event: 'Old Catholic churches ordain women; movement away from broader Catholic ecumenism' },
    ],
    resolution: 'Permanent separation; partial communion with Anglicans since 1931.',
    fullDescription:
      'When Vatican I defined papal infallibility on 18 July 1870, a small group of European Catholic intellectuals and clergy refused to accept the dogma. The most prominent was Ignaz von Döllinger, the great church historian at Munich, who was excommunicated. The new Old Catholic Church drew its episcopal succession from the See of Utrecht, which had been independent of Rome since 1723 over Jansenist controversies. National Old Catholic churches were established in Germany, Switzerland, Austria, and elsewhere, joining in the Union of Utrecht (1889). They preserve a Catholic liturgy and structure but reject papal infallibility, the Immaculate Conception, and the bodily Assumption as binding dogmas. Since 1996 several Old Catholic provinces have ordained women, which has strained their position with Rome but strengthened their Anglican alliance.',
    catholicResponse: 'No formal communion. Some local pastoral arrangements exist.',
    currentRelations: 'Full communion with Anglicans (Bonn Agreement, 1931). Limited dialogue with Rome.',
    sources: [
      'Bonn Agreement (1931)',
      'Union of Utrecht Statement of Principles',
      'Catholic Encyclopedia, "Old Catholics"',
    ],
  },

  // -------------------- Modern Movements --------------------
  {
    id: 'pentecostalism',
    name: 'Pentecostalism (Protestant)',
    alternateNames: ['Classical Pentecostalism', 'Assemblies of God', 'Church of God in Christ', 'Neo-Pentecostalism', 'Independent Charismatic'],
    category: 'modern',
    era: 'Modern (1800-Present)',
    yearStart: 1906,
    founder: 'Charles Parham (theological precursor); William J. Seymour (Azusa Street Revival)',
    region: 'Originating Los Angeles; today the fastest-growing Protestant tradition, especially in sub-Saharan Africa, Latin America (Brazil), and East Asia',
    status: 'active',
    estimatedFollowers: '~280 million classical Pentecostals across thousands of independent denominations and networks',
    shortDescription:
      'A Protestant tradition emerging from the Azusa Street Revival (1906) that emphasizes direct experience of the Holy Spirit — especially baptism in the Spirit evidenced by speaking in tongues, divine healing, and prophecy. Pentecostal churches are typically congregational or denominational Protestant bodies, distinct from the Catholic Charismatic Renewal (which is a movement within the Catholic Church, not a denomination).',
    causes: {
      theological: [
        'Baptism in the Holy Spirit as a distinct "second blessing" after conversion, normally evidenced by speaking in tongues',
        'Continuation of the supernatural gifts of 1 Corinthians 12 (vs. cessationism)',
        'Emphasis on direct experience and the testimony of the Spirit',
        'Generally Protestant theology: sola scriptura, believer\'s baptism (in most bodies), two ordinances rather than seven sacraments',
      ],
      cultural: [
        '19th-century Holiness movement origins; democratization of religious authority',
        'Multiracial origins at Azusa Street were striking in segregated America',
        'Strong fit with oral cultures and the Global South',
      ],
    },
    keyFigures: ['Charles Parham', 'William J. Seymour', 'Aimee Semple McPherson', 'David du Plessis (ecumenist)', 'Oral Roberts'],
    keyEvents: [
      { year: '1901', event: 'Topeka revival: Agnes Ozman speaks in tongues at Charles Parham\'s Bible school' },
      { year: '1906', event: 'Azusa Street Revival begins in Los Angeles under William J. Seymour; birth of modern Pentecostalism' },
      { year: '1914', event: 'Assemblies of God founded — became the largest classical Pentecostal denomination' },
      { year: '1960', event: 'Dennis Bennett (Episcopal priest) goes public with his Pentecostal experience — beginning of the broader "Charismatic Movement" reaching mainline Protestants' },
      { year: '1972', event: 'Catholic-Pentecostal International Dialogue begins (continuing) — Catholic Church and Pentecostal leaders enter formal ecumenical conversation' },
    ],
    resolution: 'A distinct Protestant tradition with massive global presence. Classical Pentecostal churches remain organizationally and theologically separate from the Catholic Church.',
    fullDescription:
      'Pentecostalism is a Protestant Christian tradition that emerged in the early 20th century and is now one of the largest and fastest-growing Christian movements in the world. It traces its theological precursors to the 19th-century Holiness movement and finds its formal birth at the Azusa Street Revival (Los Angeles, 1906), led by the African American preacher William J. Seymour. Pentecostal theology centers on a distinct experience called "baptism in the Holy Spirit," typically evidenced by speaking in tongues, alongside emphases on divine healing, prophecy, and the contemporary operation of the spiritual gifts described in 1 Corinthians 12. Organizationally, Pentecostalism is overwhelmingly Protestant: congregations are typically independent or grouped in denominational bodies (Assemblies of God, Church of God in Christ, Foursquare, the Pentecostal Holiness Church, and thousands of others worldwide). Classical Pentecostalism is doctrinally Protestant — affirming sola scriptura, believer\'s baptism in most bodies, and two ordinances (baptism and the Lord\'s Supper) rather than the seven Catholic sacraments. It does not recognize papal authority, Marian doctrine and devotion, the intercession of saints, or apostolic succession in the Catholic-Orthodox sense. Pentecostalism has had enormous global impact, especially in sub-Saharan Africa, Latin America (above all Brazil), and parts of East Asia.\n\nIMPORTANT DISTINCTION: The Catholic Charismatic Renewal (CCR), which began at Duquesne University in 1967, is sometimes confused with Pentecostalism but is theologically and ecclesiologically distinct. The CCR is not a denomination — it is a movement WITHIN the Catholic Church. Catholic Charismatics retain full Catholic communion: they receive the seven sacraments, recognize papal authority, profess Marian dogmas, honor the saints, and live within their local Catholic parish under their bishop. They have integrated certain Pentecostal-style spiritual experiences (charismatic prayer, healing prayer, prophetic gifts) into a fully Catholic sacramental and ecclesial life. Every pope from Paul VI through Francis has formally embraced and addressed the CCR. A dedicated history of the Catholic Charismatic Renewal will be added to this site as a separate article — it does not belong in a list of "divisions in the Church" because it is not one.',
    catholicResponse:
      'Pope Paul VI met with Pentecostal leaders in 1971; the Catholic-Pentecostal International Dialogue began in 1972 and continues. The dialogue has produced reports on baptism, faith, koinonia, and the role of Mary. Catholic teaching distinguishes carefully between (a) classical Protestant Pentecostalism as a separate Christian tradition, and (b) the Catholic Charismatic Renewal as a legitimate movement within Catholic communion that draws on similar spiritual experience while remaining fully Catholic in doctrine and discipline.',
    currentRelations: 'Active formal dialogue with the Pentecostal World Fellowship. Friendly relations with many independent charismatic networks. Pope Francis has cultivated personal friendships with prominent Pentecostal pastors and has been open about being inspired by certain Pentecostal expressions of evangelism while always re-affirming Catholic ecclesiology.',
    sources: [
      'Walter J. Hollenweger, Pentecostalism: Origins and Developments Worldwide (Hendrickson, 1997)',
      'Allan Anderson, An Introduction to Pentecostalism (Cambridge, 2nd ed. 2014)',
      'Catholic-Pentecostal International Dialogue, official reports (1972-present)',
      'Vinson Synan, The Century of the Holy Spirit (Thomas Nelson, 2001)',
    ],
  },

  // -------------------- Restorationist (outside historic Christianity) --------------------
  {
    id: 'mormonism',
    name: 'The Church of Jesus Christ of Latter-day Saints',
    alternateNames: ['Mormons', 'LDS Church'],
    category: 'restorationist',
    era: 'Modern (1800-Present)',
    yearStart: 1830,
    founder: 'Joseph Smith (1805-1844)',
    region: 'Originating New York / Utah; global presence',
    status: 'active',
    estimatedFollowers: '~17 million worldwide',
    shortDescription:
      'A 19th-century American restorationist movement claiming a complete restoration of the original Church through Joseph Smith\'s reception of the Book of Mormon (1830). Mainstream Christian bodies (Catholic, Orthodox, Protestant) do not regard it as Christian due to fundamental doctrinal differences.',
    causes: {
      theological: [
        'Claim of new prophetic revelation (Book of Mormon, Doctrine and Covenants, Pearl of Great Price)',
        'Materialist God: God the Father has a glorified physical body',
        'Plurality of gods; humans can become gods (theosis radically reinterpreted)',
        'Polygamy (officially abandoned 1890 by mainstream LDS)',
      ],
      cultural: ['Second Great Awakening on the American frontier; "burned-over district" of New York'],
    },
    keyFigures: ['Joseph Smith', 'Brigham Young', 'Modern LDS Presidents'],
    keyEvents: [
      { year: '1820', event: 'Joseph Smith\'s "First Vision" claim' },
      { year: '1830', event: 'Book of Mormon published; Church organized in Fayette, NY' },
      { year: '1844', event: 'Joseph Smith killed by mob in Carthage, Illinois' },
      { year: '1847', event: 'Brigham Young leads pioneers to Salt Lake Valley' },
      { year: '1890', event: 'LDS Church officially renounces polygamy (Manifesto)' },
      { year: '2001', event: 'Catholic Congregation for the Doctrine of the Faith declares LDS baptism invalid for reception into Catholic Church' },
    ],
    resolution: 'A distinct world religion that uses Christian vocabulary but is doctrinally distinct from historic Christianity.',
    fullDescription:
      'Joseph Smith, a young man in upstate New York during the Second Great Awakening, claimed in 1820 that God the Father and Jesus Christ appeared to him and told him no existing church was true. He further claimed that an angel named Moroni led him to golden plates, which he translated as the Book of Mormon (1830). The early LDS Church faced violent persecution, fled west, and was led by Brigham Young to Utah after Smith\'s assassination in 1844. The Catholic Church, in the year 2001, declared that LDS baptism is invalid for reception into the Catholic Church because LDS theology holds a fundamentally different doctrine of God (materialist, plural, eternally progressing) than historic Christianity. Mainstream Protestant and Orthodox bodies similarly do not consider the LDS Church Christian in the historic sense, though many LDS members consider themselves Christian.',
    catholicResponse:
      'CDF Response (2001): Mormon baptism is not valid Christian baptism. Pastoral approach: LDS members entering the Catholic Church must be baptized.',
    currentRelations: 'No formal ecumenical dialogue (LDS is not part of the World Council of Churches\' historic Christian dialogue). Cordial cooperation on charitable and humanitarian work.',
    sources: [
      'CDF Response on the Validity of Baptism Conferred by the Church of Jesus Christ of Latter-day Saints (2001)',
      'Richard Bushman, Joseph Smith: Rough Stone Rolling',
      'Catholic Encyclopedia and Catholic Answers materials on LDS',
    ],
  },
  {
    id: 'jehovahs-witnesses',
    name: 'Jehovah\'s Witnesses',
    alternateNames: ['Watch Tower Society', 'Bible Students'],
    category: 'restorationist',
    era: 'Modern (1800-Present)',
    yearStart: 1879,
    founder: 'Charles Taze Russell (1852-1916)',
    region: 'Originating Pennsylvania, USA; global presence (~240 countries)',
    status: 'active',
    estimatedFollowers: '~8.7 million active publishers',
    shortDescription:
      'A 19th-century American adventist-restorationist movement that rejects the Trinity, the deity of Christ, and the immortality of the soul. Distinguished by intense door-to-door evangelism and refusal of military service and blood transfusions.',
    causes: {
      theological: [
        'Rejection of the Trinity (Jesus is the created Son, Michael the Archangel)',
        'Soul mortality; "the dead are conscious of nothing"',
        'No hellfire; only annihilation for the wicked',
        'Apocalyptic expectation; revised end-time predictions (1914, 1925, 1975)',
        'Use of their own translation, the New World Translation',
      ],
    },
    keyFigures: ['Charles Taze Russell', 'Joseph Franklin Rutherford', 'Modern Governing Body'],
    keyEvents: [
      { year: '1879', event: 'Russell publishes Zion\'s Watch Tower' },
      { year: '1914', event: 'Predicted second coming; reinterpreted as Christ\'s "invisible presence"' },
      { year: '1931', event: 'Adopt name "Jehovah\'s Witnesses" under Rutherford' },
      { year: '1945', event: 'Begin refusing blood transfusions' },
    ],
    resolution: 'A distinct world religion using Christian vocabulary but doctrinally distinct from historic Christianity.',
    fullDescription:
      'Charles Taze Russell founded what became Jehovah\'s Witnesses in 1879, expecting Christ\'s return in 1914. When the visible return did not occur, the movement reinterpreted 1914 as the date of Christ\'s "invisible" enthronement in heaven. Under Joseph Rutherford the movement adopted its current name and reorganized as a centrally directed body. JW theology rejects the Trinity, the bodily resurrection of Christ, the immortality of the soul, and hellfire; it teaches that 144,000 chosen will reign with Christ in heaven while a "great crowd" will live forever on a renewed earth. Catholic and mainstream Protestant theology rejects JW doctrine as fundamentally non-Christian on the central matters of the Trinity and the deity of Christ.',
    catholicResponse: 'JW baptism is not regarded as valid Christian baptism. Catholic catechetical materials address common JW objections.',
    currentRelations: 'No ecumenical dialogue.',
    sources: ['Catholic Encyclopedia entries', 'Catholic Answers materials', 'Watch Tower Society publications'],
  },

  // -------------------- Traditionalist Catholic --------------------
  {
    id: 'sspx',
    name: 'Society of St. Pius X',
    alternateNames: ['SSPX', 'Fraternité Sacerdotale Saint-Pie-X'],
    category: 'traditionalist',
    era: 'Modern (1800-Present)',
    yearStart: 1970,
    founder: 'Archbishop Marcel Lefebvre (1905-1991)',
    region: 'Originating Switzerland; chapels worldwide',
    status: 'partial-communion',
    estimatedFollowers: '~700,000 attendees, ~700 priests, ~6 bishops',
    shortDescription:
      'A traditionalist Catholic society of priests founded by Archbishop Marcel Lefebvre in 1970, opposing many of the liturgical and doctrinal developments of Vatican II. In an irregular canonical situation but seeking regularization with Rome.',
    causes: {
      theological: [
        'Rejection of the Novus Ordo Mass as a rupture with the Tridentine tradition',
        'Concerns about Vatican II teaching on religious liberty (Dignitatis Humanae)',
        'Concerns about Vatican II teaching on ecumenism (Unitatis Redintegratio) and other religions (Nostra Aetate)',
        'Rejection of the post-conciliar "spirit of Vatican II"',
      ],
      cultural: ['Post-1965 collapse of vocations and traditional Catholic culture in many Western countries'],
    },
    keyFigures: ['Marcel Lefebvre', 'Bernard Fellay', 'Davide Pagliarani'],
    keyEvents: [
      { year: '1970', event: 'Foundation of the SSPX in Écône, Switzerland' },
      { year: '1976', event: 'Lefebvre suspended a divinis after illicit ordinations' },
      { year: '1988', event: 'Lefebvre consecrates four bishops without papal mandate; automatic excommunications incurred' },
      { year: '2009', event: 'Pope Benedict XVI lifts excommunications of the four bishops' },
      { year: '2015', event: 'Pope Francis grants SSPX priests faculty to hear confessions validly during the Year of Mercy (made permanent 2016)' },
      { year: '2017', event: 'Pope Francis grants validity to SSPX marriages with local ordinary cooperation' },
    ],
    resolution: 'In partial, irregular communion. Active negotiations toward a Personal Prelature solution; ongoing pastoral provisions.',
    fullDescription:
      'Archbishop Marcel Lefebvre founded the Society of St. Pius X in 1970 with the approval of the bishop of Lausanne, Geneva and Fribourg. By 1975, however, the canonical erection had been withdrawn, and Lefebvre continued to ordain priests without permission. His decision in 1988 to consecrate four bishops without papal mandate triggered automatic excommunication for himself and the four bishops under canon law, although the SSPX argued that the perceived state of necessity in the Church justified the act. Pope Benedict XVI, in a major gesture of reconciliation in 2009, lifted the excommunications of the four still-living bishops (Lefebvre had died in 1991). Doctrinal discussions followed; while these have not produced full agreement, Pope Francis has steadily extended pastoral recognition: faculties for confessions (2015, made permanent 2016) and provisions for the validity of SSPX marriages (2017). The SSPX maintains the 1962 Roman Missal, Catholic moral teaching, and Catholic devotional practice but operates outside the regular jurisdiction of diocesan bishops. The Vatican\'s position is that SSPX Masses are valid but illicit; its sacraments other than baptism and matrimony are valid but generally illicit.',
    catholicResponse:
      'A pastoral and patient approach under recent popes — particularly Benedict XVI and Francis — seeking eventual full regularization. The Vatican\'s position is that the SSPX is "not in full communion" but that its members are not formally schismatic.',
    currentRelations: 'Active doctrinal and canonical negotiations; ongoing pastoral provisions for SSPX faithful. Many traditionalist Catholics attend SSPX chapels for the traditional Mass.',
    sources: [
      'Pope Benedict XVI, Letter to Bishops on the Lifting of the Excommunication (2009)',
      'Pope Francis, Misericordia et Misera (2016) — confessional faculties',
      'Marcel Lefebvre, Open Letter to Confused Catholics',
    ],
  },

  // -------------------- Eastern Catholic Churches --------------------
  {
    id: 'maronite',
    name: 'Maronite Catholic Church',
    alternateNames: ['Antiochene Syriac Maronite Church'],
    category: 'eastern-catholic',
    era: 'Early Christianity through Modern',
    yearStart: 410,
    founder: 'St. Maron (4th-5th c. hermit); St. John Maron (first patriarch)',
    region: 'Lebanon (heartland), Syria, global Maronite diaspora',
    status: 'active',
    estimatedFollowers: '~3.5 million worldwide',
    shortDescription:
      'An ancient Eastern Catholic Church with roots in 4th-century Syria. Centered in Lebanon, the Maronites maintain that they have always been in communion with Rome — never formally schismatic. Distinctive Antiochene liturgy in Syriac and Arabic.',
    causes: {
      theological: ['Maintained Chalcedonian Christology amid surrounding Monophysite controversies'],
      political: [
        'Geographic isolation in Mt. Lebanon preserved their identity',
        'Crusader-era contact (12th century) strengthened ties with Rome',
      ],
    },
    keyFigures: ['St. Maron', 'St. John Maron', 'Patriarch Youssef Estephan', 'Cardinal Béchara Boutros al-Rahi'],
    keyEvents: [
      { year: 'c. 410', event: 'Death of St. Maron, Syrian hermit; communities form around his memory' },
      { year: 'c. 685', event: 'Tradition: St. John Maron, first patriarch' },
      { year: '1182', event: 'Formal communion with Rome reaffirmed during the Crusader era' },
      { year: '1736', event: 'Synod of Mt. Lebanon — major reform' },
      { year: '1944', event: 'Lebanon\'s confessional political system gives Maronites the presidency' },
    ],
    resolution: 'Always in communion with Rome (per Maronite tradition). Fully Catholic, sui iuris (self-governing) under their own patriarch.',
    fullDescription:
      'The Maronite Catholic Church traces its origin to disciples of St. Maron, a 5th-century Syrian hermit. The community fled Arab persecution in the 7th century to the mountains of Lebanon, where they preserved their faith and Antiochene Syriac liturgy in relative isolation. When Crusaders reached the Levant in the 12th century, the Maronites came back into regular contact with Latin Christianity; from the Maronite perspective, this was a renewal of an unbroken communion with Rome rather than a reunion. The Maronite Patriarch of Antioch and All the East, headquartered at Bkerke, Lebanon, leads the Church. The Maronite liturgy includes ancient prayers in Syriac (the language of Jesus, in its later Western Aramaic form), particularly the words of consecration in the Anaphora of St. Peter the Apostle (the Sharar). Lebanese politics has long been intertwined with Maronite identity; under the unwritten 1943 National Pact, the President of Lebanon must be a Maronite Catholic. Maronites have suffered greatly through Lebanon\'s civil war (1975-1990) and ongoing regional crises, with significant emigration to North and South America and Australia.',
    catholicResponse: 'Full communion. The Maronite Church is one of the 23 sui iuris churches in the Catholic Church.',
    currentRelations: 'Maronite Patriarch participates in Roman synods of bishops; Maronite cardinals serve in the College of Cardinals.',
    sources: [
      'Pierre Dib, History of the Maronite Church',
      'Code of Canons of the Eastern Churches (1990)',
      'Maronite Patriarchal Synod documents',
    ],
  },
  {
    id: 'ukrainian-greek-catholic',
    name: 'Ukrainian Greek Catholic Church',
    alternateNames: ['UGCC', 'Ruthenian Uniate Church (historical)'],
    category: 'eastern-catholic',
    era: 'Early Modern (1600-1800)',
    yearStart: 1596,
    founder: 'Kievan metropolitans at the Union of Brest (1596)',
    region: 'Ukraine, especially the western regions; significant diaspora in USA, Canada, Brazil, Australia',
    status: 'active',
    estimatedFollowers: '~5.5 million worldwide',
    shortDescription:
      'The largest Eastern Catholic Church, formed in 1596 at the Union of Brest when several Orthodox eparchies of the Kievan metropolitanate entered communion with Rome while retaining the Byzantine liturgy and Slavonic language. Suppressed under Soviet rule (1946-1989); now flourishing.',
    causes: {
      theological: ['Acceptance of papal primacy and the filioque clause'],
      political: [
        'Polish-Lithuanian Commonwealth\'s pressure for ecclesial unity',
        'Resistance to Russian Orthodox absorption',
      ],
      cultural: ['Preserved a distinct Ukrainian/Ruthenian Christian identity'],
    },
    keyFigures: ['Metropolitan Mykhailo Rohoza', 'St. Josaphat Kuntsevych (martyr)', 'Major Archbishop Sviatoslav Shevchuk (current)'],
    keyEvents: [
      { year: '1596', event: 'Union of Brest: Kievan metropolitans enter Catholic communion' },
      { year: '1623', event: 'St. Josaphat martyred by anti-Union mob' },
      { year: '1946', event: 'Stalin orchestrates "Lviv Pseudo-Synod" forcibly suppressing the UGCC and absorbing it into the Russian Orthodox Church' },
      { year: '1946-1989', event: 'UGCC continues underground as "the largest forbidden Church in the world"' },
      { year: '1989', event: 'Legal restoration of UGCC under Gorbachev' },
      { year: '2005', event: 'Patriarchal see relocated from Lviv to Kyiv' },
      { year: '2022', event: 'During Russia\'s full-scale invasion, the UGCC is at the heart of Ukrainian spiritual identity' },
    ],
    resolution: 'In full communion with Rome since 1596; restored 1989 after Soviet suppression.',
    fullDescription:
      'The Union of Brest (1595-96) brought most of the Kievan metropolitan see into communion with Rome while preserving Byzantine liturgy, married parish clergy, and Slavonic ecclesiastical language. The new Uniate Church faced fierce resistance, especially from Cossack populations whose religious-national identity was Orthodox; the martyrdom of St. Josaphat Kuntsevych (1623) by an angry mob at Vitebsk became emblematic of the church\'s suffering. The Russian Empire systematically dismantled the UGCC after partitioning Poland (late 18th century), and Stalin\'s 1946 "Lviv Pseudo-Synod" formally liquidated the UGCC, transferring all properties to the Russian Orthodox Church. The UGCC survived underground for forty-three years — celebrating Mass in forests and basements — and re-emerged after 1989 as one of the most vibrant churches in the world. Today the UGCC is a major Christian voice in Ukraine, particularly during the Russian invasion that began in 2022. The UGCC has long sought elevation from Major Archbishopric to a full Patriarchate; this remains a pending question in Rome.',
    catholicResponse: 'Full communion. Major Archbishop participates in the College of Cardinals.',
    currentRelations: 'Tense with Russian Orthodox Church due to Ukraine war and historical Soviet suppression; close cooperation with Latin Catholics in Ukraine.',
    sources: [
      'Borys Gudziak, Crisis and Reform: The Kyivan Metropolitanate, the Patriarchate of Constantinople, and the Genesis of the Union of Brest',
      'UGCC Catechism (Christ Our Pascha, 2011)',
    ],
  },
  {
    id: 'syro-malabar',
    name: 'Syro-Malabar Catholic Church',
    alternateNames: ['Saint Thomas Christians (in communion with Rome)', 'Malabar Catholic Church'],
    category: 'eastern-catholic',
    era: 'Early Modern (1600-1800)',
    yearStart: 1599,
    region: 'Kerala, India; diaspora worldwide',
    status: 'active',
    estimatedFollowers: '~4.6 million worldwide',
    shortDescription:
      'An ancient Saint Thomas Christian community in Kerala that traces its origin to the Apostle Thomas (AD 52). Brought into Latin-style communion with Rome at the Synod of Diamper (1599); restored to its Eastern (East Syrian) liturgical heritage in the 20th century.',
    causes: {
      theological: ['Acceptance of full Catholic communion while preserving East Syrian liturgical tradition'],
      cultural: ['Portuguese Padroado missionary intervention reshaped — sometimes harshly — local traditions'],
    },
    keyFigures: ['Archbishop Aleixo de Menezes (Synod of Diamper)', 'Major Archbishop Cardinal George Alencherry', 'Major Archbishop Raphael Thattil (current)'],
    keyEvents: [
      { year: 'AD 52 (tradition)', event: 'St. Thomas the Apostle arrives at Muziris, Kerala' },
      { year: 'Pre-1599', event: 'Saint Thomas Christians in communion with the Church of the East (Persia)' },
      { year: '1599', event: 'Synod of Diamper (under Portuguese pressure) Latinizes and brings the community under Padroado' },
      { year: '1653', event: 'Coonan Cross Oath: many Saint Thomas Christians break from Padroado control' },
      { year: '1923', event: 'Restoration of Syro-Malabar hierarchy by Pope Pius XI' },
      { year: '1992', event: 'Major Archiepiscopal sui iuris status granted by John Paul II' },
      { year: '2017+', event: 'Tensions over uniform liturgy ("ad orientem" issue) divide the church' },
    ],
    resolution: 'In full communion with Rome as a sui iuris church.',
    fullDescription:
      'The Saint Thomas Christians of Kerala trace their origins to the Apostle Thomas, who according to ancient and continuous tradition arrived at Muziris (modern Kodungallur) in AD 52 and was martyred at Mylapore in AD 72. The community was historically in communion with the Church of the East (often called the "Nestorian" Church), receiving bishops from Mesopotamia. Portuguese arrival in 1498 brought Latin Catholic missionaries who, often heavy-handedly, brought the community under Roman jurisdiction at the Synod of Diamper (1599) and substantially Latinized its liturgy. Resistance erupted in 1653 with the Coonan Cross Oath at Mattancherry, after which a portion of the community broke away and is today represented by the Malankara Orthodox Syrian Church and several other bodies. Those who remained in Catholic communion form the Syro-Malabar Catholic Church. In the 20th century the church recovered its Eastern Christian heritage, restoring the East Syrian Liturgy of Addai and Mari (with Catholic adaptations). Today the Syro-Malabar Church is one of the largest Eastern Catholic Churches and has spread globally with the Indian diaspora.',
    catholicResponse: 'Full communion. The Major Archbishop of Ernakulam-Angamaly leads the church.',
    currentRelations: 'Close ties with Rome. Significant ongoing internal tensions about liturgical practice (ad orientem celebration).',
    sources: [
      'A. Mathias Mundadan, History of Christianity in India, Vol. 1',
      'Stephen Neill, A History of Christianity in India',
      'Code of Canons of the Eastern Churches',
    ],
  },
  {
    id: 'eastern-catholic-other',
    name: 'Other Eastern Catholic Churches',
    alternateNames: ['Sui iuris Eastern Catholic Churches'],
    category: 'eastern-catholic',
    era: 'Various (1500s-Present)',
    yearStart: 1551,
    region: 'Middle East, Eastern Europe, Africa, India',
    status: 'active',
    estimatedFollowers: '~10 million combined (in addition to Maronite, UGCC, Syro-Malabar)',
    shortDescription:
      'In addition to the Maronite, Ukrainian Greek Catholic, and Syro-Malabar churches, the Catholic Communion includes 19 other sui iuris Eastern Catholic Churches preserving Alexandrian, Antiochene, Armenian, Byzantine, and East Syrian liturgical traditions.',
    causes: {
      theological: ['Each church entered communion with Rome in different historical circumstances while preserving its liturgical heritage'],
    },
    keyFigures: ['Various patriarchs and major archbishops'],
    keyEvents: [
      { year: '1551', event: 'Chaldean Catholic Church (East Syrian, Iraq)' },
      { year: '1646', event: 'Romanian Greek Catholic Church (Byzantine)' },
      { year: '1724', event: 'Melkite Greek Catholic Church (Byzantine, Antiochene)' },
      { year: '1741', event: 'Coptic Catholic Church (Alexandrian)' },
      { year: '1781', event: 'Armenian Catholic Church' },
      { year: '1846', event: 'Ethiopian Catholic Church (Alexandrian)' },
      { year: '1930', event: 'Syro-Malankara Catholic Church (Antiochene, India)' },
    ],
    resolution: 'All in full communion with Rome as sui iuris (self-governing) churches.',
    fullDescription:
      'The Catholic Church is far more than the Latin (Roman) Rite. Twenty-three sui iuris churches preserve a remarkable diversity of liturgical, theological, canonical, and spiritual traditions. The major groups are: Alexandrian tradition (Coptic Catholic, Ethiopian Catholic, Eritrean Catholic); Antiochene/West Syrian tradition (Maronite, Syriac Catholic, Syro-Malankara); Armenian tradition (Armenian Catholic); Byzantine tradition (Albanian, Belarusian, Bulgarian, Croatian/Serbian, Greek, Hungarian, Italo-Albanian, Macedonian, Melkite, Romanian, Russian, Ruthenian, Slovak, Ukrainian Greek Catholic); East Syrian / Chaldean tradition (Chaldean Catholic, Syro-Malabar). Each is led by its own hierarchy — patriarchs, major archbishops, or metropolitans — in full communion with the Bishop of Rome. The Melkite Patriarch of Antioch and All the East has historically been a particularly important voice in Catholic-Orthodox dialogue. The Eastern Catholic churches challenge the Western misconception that "Catholic" means "Latin Rite": the Catholic Church is, by Vatican II teaching, a communion of churches.',
    catholicResponse: 'Full communion. Vatican II\'s decree Orientalium Ecclesiarum (1964) reaffirmed equal dignity.',
    currentRelations: 'Each Eastern Catholic Church relates ecumenically with its Orthodox counterpart.',
    sources: [
      'Vatican II, Orientalium Ecclesiarum (1964)',
      'Code of Canons of the Eastern Churches (1990)',
      'Ronald Roberson, The Eastern Christian Churches: A Brief Survey (Oriental Institute, Rome)',
    ],
  },
]

// ============================================================================
// COMPONENTS
// ============================================================================

function StatusBadge({ status }: { status: Status }) {
  const config: Record<Status, { label: string; cls: string }> = {
    'active': { label: 'Active', cls: 'bg-green-100 text-green-800 border-green-200' },
    'extinct': { label: 'Extinct', cls: 'bg-gray-100 text-gray-700 border-gray-200' },
    'reconciled': { label: 'Reconciled', cls: 'bg-blue-100 text-blue-800 border-blue-200' },
    'partial-communion': { label: 'Partial Communion', cls: 'bg-amber-100 text-amber-800 border-amber-200' },
  }
  const c = config[status]
  return (
    <span className={`inline-flex items-center text-xs px-2 py-0.5 rounded-full font-medium border ${c.cls}`}>
      {c.label}
    </span>
  )
}

function ToggleSwitch({ value, onChange }: { value: 'new' | 'old'; onChange: (v: 'new' | 'old') => void }) {
  return (
    <div className="inline-flex items-center bg-gray-100 rounded-lg p-1 border border-gray-200">
      <button
        onClick={() => onChange('new')}
        className={`px-4 py-1.5 text-sm font-medium rounded-md transition-colors ${
          value === 'new' ? 'bg-amber-500 text-white shadow-sm' : 'text-gray-600 hover:text-gray-900'
        }`}
      >
        New View
      </button>
      <button
        onClick={() => onChange('old')}
        className={`px-4 py-1.5 text-sm font-medium rounded-md transition-colors ${
          value === 'old' ? 'bg-amber-500 text-white shadow-sm' : 'text-gray-600 hover:text-gray-900'
        }`}
      >
        Old View (Backup)
      </button>
    </div>
  )
}

// ============================================================================
// NEW VIEW
// ============================================================================

function NewView() {
  const [search, setSearch] = useState('')
  const [activeCategories, setActiveCategories] = useState<Set<Category>>(new Set())
  const [selectedId, setSelectedId] = useState<string>(DIVISIONS[0]?.id || '')
  const [expandedCategories, setExpandedCategories] = useState<Set<Category>>(
    new Set(Object.keys(CATEGORY_META) as Category[])
  )

  // Filter logic
  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase()
    return DIVISIONS.filter((d) => {
      if (activeCategories.size > 0 && !activeCategories.has(d.category)) return false
      if (!q) return true
      const haystack = [
        d.name,
        ...(d.alternateNames || []),
        d.founder || '',
        d.region,
        d.shortDescription,
      ].join(' ').toLowerCase()
      return haystack.includes(q)
    })
  }, [search, activeCategories])

  // Group by category
  const grouped = useMemo(() => {
    const map = new Map<Category, Division[]>()
    for (const d of filtered) {
      if (!map.has(d.category)) map.set(d.category, [])
      map.get(d.category)!.push(d)
    }
    return Array.from(map.entries()).sort((a, b) => CATEGORY_META[a[0]].order - CATEGORY_META[b[0]].order)
  }, [filtered])

  const selected = useMemo(
    () => DIVISIONS.find((d) => d.id === selectedId) || filtered[0] || null,
    [selectedId, filtered]
  )

  const toggleCategory = (c: Category) => {
    setActiveCategories((prev) => {
      const next = new Set(prev)
      if (next.has(c)) next.delete(c)
      else next.add(c)
      return next
    })
  }

  const toggleCategoryExpansion = (c: Category) => {
    setExpandedCategories((prev) => {
      const next = new Set(prev)
      if (next.has(c)) next.delete(c)
      else next.add(c)
      return next
    })
  }

  // Counts per category
  const categoryCounts = useMemo(() => {
    const counts = new Map<Category, number>()
    for (const d of DIVISIONS) {
      counts.set(d.category, (counts.get(d.category) || 0) + 1)
    }
    return counts
  }, [])

  return (
    <div className="space-y-6">
      {/* Search */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by name, founder, region…"
          className="block w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500"
        />
      </div>

      {/* Category filter chips */}
      <div className="flex flex-wrap gap-2">
        {(Object.keys(CATEGORY_META) as Category[])
          .sort((a, b) => CATEGORY_META[a].order - CATEGORY_META[b].order)
          .map((c) => {
            const isActive = activeCategories.has(c)
            const count = categoryCounts.get(c) || 0
            return (
              <button
                key={c}
                onClick={() => toggleCategory(c)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full border transition-colors ${
                  isActive
                    ? 'bg-amber-500 text-white border-amber-500 shadow-sm'
                    : `${CATEGORY_META[c].color} hover:shadow-sm`
                }`}
              >
                {CATEGORY_META[c].label}
                <span className={`text-xs ${isActive ? 'text-amber-100' : 'opacity-60'}`}>({count})</span>
              </button>
            )
          })}
        {activeCategories.size > 0 && (
          <button
            onClick={() => setActiveCategories(new Set())}
            className="inline-flex items-center text-xs px-3 py-1.5 rounded-full text-gray-500 hover:text-gray-700 underline"
          >
            Clear filters
          </button>
        )}
      </div>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Tree / List */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sticky top-4">
            <h3 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
              <Network className="w-4 h-4" />
              Tree View
              <span className="text-xs font-normal text-gray-500 ml-auto">
                {filtered.length} of {DIVISIONS.length}
              </span>
            </h3>
            <div className="space-y-3 max-h-[70vh] overflow-y-auto pr-1">
              {grouped.length === 0 && (
                <p className="text-sm text-gray-500 italic">No matches found.</p>
              )}
              {grouped.map(([category, items]) => {
                const isExpanded = expandedCategories.has(category)
                const meta = CATEGORY_META[category]
                return (
                  <div key={category}>
                    <button
                      onClick={() => toggleCategoryExpansion(category)}
                      className="w-full flex items-center gap-2 text-left"
                    >
                      {isExpanded ? (
                        <ChevronDown className="w-4 h-4 text-gray-400 shrink-0" />
                      ) : (
                        <ChevronRight className="w-4 h-4 text-gray-400 shrink-0" />
                      )}
                      <span className={`text-xs font-medium px-2 py-0.5 rounded ${meta.color}`}>
                        {meta.label}
                      </span>
                      <span className="text-xs text-gray-400 ml-auto">{items.length}</span>
                    </button>
                    {isExpanded && (
                      <div className="ml-6 mt-1 space-y-1 border-l border-gray-200 pl-3">
                        {items.map((d) => {
                          const isSelected = selectedId === d.id
                          return (
                            <button
                              key={d.id}
                              onClick={() => setSelectedId(d.id)}
                              className={`w-full text-left text-sm py-1 px-2 rounded transition-colors ${
                                isSelected
                                  ? 'bg-amber-100 text-amber-900 font-medium'
                                  : 'text-gray-700 hover:bg-gray-50'
                              }`}
                            >
                              <span className="block truncate">{d.name}</span>
                              <span className="text-xs text-gray-400">
                                {d.yearStart}{d.yearEnd ? `–${d.yearEnd}` : ''}
                              </span>
                            </button>
                          )
                        })}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Detail panel */}
        <div className="lg:col-span-2">
          {selected ? <DetailPanel division={selected} /> : (
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
              <p className="text-gray-500">Select a division to view its details.</p>
            </div>
          )}
        </div>
      </div>

      {/* Cross-links */}
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
        <h3 className="font-serif font-semibold text-gray-900 mb-3">Related Pages</h3>
        <div className="flex flex-wrap gap-3 text-sm">
          <Link href="/history/church" className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-300 rounded-lg hover:bg-amber-50 hover:border-amber-300 transition-colors">
            <BookOpen className="w-4 h-4 text-amber-600" />
            The Church in History
          </Link>
          <Link href="/history/church-tree" className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-300 rounded-lg hover:bg-amber-50 hover:border-amber-300 transition-colors">
            <Network className="w-4 h-4 text-amber-600" />
            Visual Church History Tree
          </Link>
          <Link href="/mysteries/public-revelation" className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-300 rounded-lg hover:bg-amber-50 hover:border-amber-300 transition-colors">
            <BookOpen className="w-4 h-4 text-amber-600" />
            Public Revelation
          </Link>
        </div>
      </div>

      {/* Note about extending data */}
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-900 space-y-2">
        <p>
          <strong>Note:</strong> This dataset currently covers {DIVISIONS.length} divisions —
          comprehensive on Early Heresies through Reformation, with key Modern, Restorationist,
          Traditionalist, and Eastern Catholic entries. The data structure is designed to grow:
          ask to add specific denominations or movements as you encounter gaps.
        </p>
        <p>
          <strong>What is NOT a division:</strong> Movements within the Catholic Church &mdash; such
          as the <em>Catholic Charismatic Renewal</em> (1967&ndash;), Focolare, Communion and
          Liberation, the Neocatechumenal Way, Opus Dei, and many religious orders &mdash; are not
          divisions; they are ecclesial movements in full communion with Rome. A dedicated page on
          the <em>History of the Catholic Charismatic Renewal</em> is planned and will be added as
          a separate article.
        </p>
      </div>
    </div>
  )
}

function DetailPanel({ division: d }: { division: Division }) {
  const meta = CATEGORY_META[d.category]
  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-start justify-between gap-4 mb-3">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className={`text-xs px-2 py-0.5 rounded font-medium ${meta.color}`}>{meta.label}</span>
              <StatusBadge status={d.status} />
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900">{d.name}</h2>
            {d.alternateNames && d.alternateNames.length > 0 && (
              <p className="text-sm text-gray-500 mt-1">
                Also known as: {d.alternateNames.join(' · ')}
              </p>
            )}
          </div>
        </div>

        <p className="text-gray-700 leading-relaxed">{d.shortDescription}</p>
      </div>

      {/* Quick stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="bg-white rounded-lg border border-gray-200 p-3">
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Year</p>
          <p className="text-sm font-semibold text-gray-900">
            {d.yearStart}{d.yearEnd ? `–${d.yearEnd}` : '–present'}
          </p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-3">
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Era</p>
          <p className="text-sm font-medium text-gray-700">{d.era}</p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-3">
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Region</p>
          <p className="text-sm text-gray-700">{d.region}</p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-3">
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Followers</p>
          <p className="text-sm text-gray-700">{d.estimatedFollowers || '—'}</p>
        </div>
      </div>

      {/* Founder */}
      {d.founder && (
        <div className="bg-white rounded-lg border border-gray-200 p-4 flex items-center gap-3">
          <User className="w-5 h-5 text-gray-400 shrink-0" />
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wide">Founder / Origin</p>
            <p className="text-sm text-gray-800">{d.founder}</p>
          </div>
        </div>
      )}

      {/* Full Description */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="font-serif font-semibold text-gray-900 mb-3 flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-gray-500" />
          Overview
        </h3>
        <p className="text-gray-700 leading-relaxed whitespace-pre-line">{d.fullDescription}</p>
      </div>

      {/* Causes */}
      {(d.causes.theological?.length || d.causes.political?.length || d.causes.cultural?.length) && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="font-serif font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-red-500" />
            Causes
          </h3>
          <div className="space-y-4">
            {d.causes.theological && d.causes.theological.length > 0 && (
              <div className="bg-red-50 rounded-lg p-4">
                <p className="text-sm font-semibold text-red-900 mb-2">Theological</p>
                <ul className="space-y-1.5 text-sm text-red-800">
                  {d.causes.theological.map((c, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-0.5 text-red-500">•</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {d.causes.political && d.causes.political.length > 0 && (
              <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-sm font-semibold text-blue-900 mb-2">Political</p>
                <ul className="space-y-1.5 text-sm text-blue-800">
                  {d.causes.political.map((c, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-0.5 text-blue-500">•</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {d.causes.cultural && d.causes.cultural.length > 0 && (
              <div className="bg-amber-50 rounded-lg p-4">
                <p className="text-sm font-semibold text-amber-900 mb-2">Cultural</p>
                <ul className="space-y-1.5 text-sm text-amber-800">
                  {d.causes.cultural.map((c, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-0.5 text-amber-500">•</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Key Figures */}
      {d.keyFigures && d.keyFigures.length > 0 && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="font-serif font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <Users className="w-4 h-4 text-blue-500" />
            Key Figures
          </h3>
          <div className="flex flex-wrap gap-2">
            {d.keyFigures.map((f) => (
              <span key={f} className="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-800 text-sm rounded-full border border-blue-100">
                <User className="w-3 h-3" />
                {f}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Key Events Timeline */}
      {d.keyEvents && d.keyEvents.length > 0 && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="font-serif font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Calendar className="w-4 h-4 text-amber-600" />
            Key Events
          </h3>
          <div className="space-y-3">
            {d.keyEvents.map((e, i) => (
              <div key={i} className="flex gap-4 items-start">
                <span className="bg-gray-100 text-gray-700 text-xs px-2 py-0.5 rounded-full whitespace-nowrap shrink-0 mt-1 font-medium font-mono">
                  {e.year}
                </span>
                <p className="text-gray-700 text-sm leading-relaxed">{e.event}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Resolution */}
      {d.resolution && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="font-serif font-semibold text-gray-900 mb-2">Resolution &amp; Current Status</h3>
          <p className="text-gray-700 leading-relaxed">{d.resolution}</p>
        </div>
      )}

      {/* Catholic Response */}
      {d.catholicResponse && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="font-serif font-semibold text-gray-900 mb-2 text-amber-800">Catholic Church&rsquo;s Response</h3>
          <p className="text-gray-700 leading-relaxed">{d.catholicResponse}</p>
        </div>
      )}

      {/* Current Relations */}
      {d.currentRelations && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
          <h3 className="font-serif font-semibold text-blue-900 mb-2 flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            Current Ecumenical Relations
          </h3>
          <p className="text-blue-900 text-sm leading-relaxed">{d.currentRelations}</p>
        </div>
      )}

      {/* Sources */}
      {d.sources && d.sources.length > 0 && (
        <div className="bg-gray-50 rounded-lg p-5">
          <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide flex items-center gap-2">
            <ExternalLink className="w-3.5 h-3.5" />
            Sources &amp; Further Reading
          </h4>
          <ol className="text-sm text-gray-600 space-y-1.5 list-decimal list-inside">
            {d.sources.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ol>
        </div>
      )}
    </div>
  )
}

// ============================================================================
// OLD VIEW (preserved as backup — original DB-fetching implementation)
// ============================================================================

function OldView() {
  const [divisions, setDivisions] = useState<ChurchDivision[]>([])
  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(new Set())
  const [selectedDivision, setSelectedDivision] = useState<ChurchDivision | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchDivisions = async () => {
      try {
        const response = await fetch('/api/history/church-divisions')
        if (!response.ok) {
          throw new Error('Failed to fetch church divisions data')
        }
        const data = await response.json()
        setDivisions(data)
        if (data.length > 0) {
          setSelectedDivision(data[0])
          data.forEach((division: ChurchDivision) => {
            if (!division.parentId) {
              setExpandedNodes((prev) => new Set([...prev, division.id]))
            }
          })
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }
    fetchDivisions()
  }, [])

  const toggleNode = (nodeId: string) => {
    setExpandedNodes((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(nodeId)) {
        newSet.delete(nodeId)
      } else {
        newSet.add(nodeId)
      }
      return newSet
    })
  }

  const renderDivisionNode = (division: ChurchDivision, level: number = 0): React.ReactNode => {
    const isExpanded = expandedNodes.has(division.id)
    const hasChildren = division.children && division.children.length > 0
    const isSelected = selectedDivision?.id === division.id

    return (
      <div key={division.id} className="mb-2">
        <div
          className={`flex items-center p-3 rounded-lg cursor-pointer transition-colors ${
            isSelected
              ? 'bg-amber-100 border-2 border-amber-300'
              : 'bg-white hover:bg-gray-50 border-2 border-transparent'
          }`}
          style={{ marginLeft: `${level * 20}px` }}
          onClick={() => setSelectedDivision(division)}
        >
          <button
            onClick={(e) => {
              e.stopPropagation()
              if (hasChildren) toggleNode(division.id)
            }}
            className="mr-2 p-1 hover:bg-gray-200 rounded"
            disabled={!hasChildren}
          >
            {hasChildren ? (
              isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />
            ) : (
              <div className="w-4 h-4" />
            )}
          </button>
          <div className="flex-1">
            <div className="flex items-center space-x-2">
              <h3 className="font-semibold text-gray-800">{division.name}</h3>
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                {division.year}
              </span>
            </div>
            <p className="text-sm text-gray-600 mt-1 line-clamp-2">{division.description}</p>
          </div>
        </div>
        {isExpanded && hasChildren && (
          <div className="mt-2">
            {division.children.map((child) => renderDivisionNode(child, level + 1))}
          </div>
        )}
      </div>
    )
  }

  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600 mx-auto"></div>
        <p className="mt-4 text-gray-600">Loading church divisions…</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
        <p className="font-bold">Error loading church divisions</p>
        <p>{error}</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-1">
        <div className="bg-white rounded-lg shadow-lg p-6 sticky top-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Church Divisions (DB-backed)</h2>
          <div className="space-y-2">
            {divisions.map((division) => renderDivisionNode(division))}
          </div>
        </div>
      </div>
      <div className="lg:col-span-2">
        {selectedDivision ? (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                  <AlertTriangle className="w-8 h-8 text-red-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">{selectedDivision.name}</h2>
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{selectedDivision.year}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Description</h3>
                <p className="text-gray-600 leading-relaxed">{selectedDivision.description}</p>
              </div>
              {selectedDivision.cause && (
                <div className="mt-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Causes</h3>
                  <p className="text-gray-600 leading-relaxed">{selectedDivision.cause}</p>
                </div>
              )}
              {selectedDivision.outcome && (
                <div className="mt-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Outcome</h3>
                  <p className="text-gray-600 leading-relaxed">{selectedDivision.outcome}</p>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <p className="text-gray-600">Select a division to view its details</p>
          </div>
        )}
      </div>
    </div>
  )
}

// ============================================================================
// TOP-LEVEL PAGE
// ============================================================================

export default function ChurchDivisionsPage() {
  const [view, setView] = useState<'new' | 'old'>('new')

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header with toggle */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900">
            Divisions in the Church
          </h1>
          <p className="text-gray-600 mt-2 max-w-3xl">
            How, when, and why divisions occurred in Christianity — from early heresies through the
            Great Schism to the Reformation and modern denominations.
          </p>
        </div>
        <ToggleSwitch value={view} onChange={setView} />
      </div>

      {view === 'new' ? <NewView /> : <OldView />}
    </div>
  )
}
