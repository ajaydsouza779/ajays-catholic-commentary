'use client'

import { useMemo, useState } from 'react'
import { ShieldCheck, AlertTriangle, GitBranch, Landmark, Cross, Sparkles, BookOpen, ChevronRight } from 'lucide-react'
import Link from 'next/link'

type NodeType = 'church' | 'council' | 'heresy' | 'division' | 'event' | 'saint' | 'movement'

interface TreeNode {
  id: string
  label: string
  summary?: string
  detail?: string
  year?: string
  type?: NodeType
  divisionLink?: boolean
  children?: TreeNode[]
}

const TYPE_BADGE: Record<NodeType, { text: string; cls: string; icon?: React.ComponentType<{className?: string}>; borderCls: string }> = {
  church:   { text: 'Church',    cls: 'bg-green-100 text-green-800',   icon: Landmark,      borderCls: 'border-green-300' },
  council:  { text: 'Council',   cls: 'bg-amber-100 text-amber-800',   icon: ShieldCheck,   borderCls: 'border-amber-300' },
  heresy:   { text: 'Heresy',    cls: 'bg-red-100 text-red-800',       icon: AlertTriangle, borderCls: 'border-red-300' },
  division: { text: 'Division',  cls: 'bg-gray-200 text-gray-700',     icon: GitBranch,     borderCls: 'border-gray-300' },
  event:    { text: 'Event',     cls: 'bg-blue-100 text-blue-800',     icon: Sparkles,      borderCls: 'border-blue-200' },
  saint:    { text: 'Saint',     cls: 'bg-emerald-100 text-emerald-800', icon: Cross,       borderCls: 'border-emerald-200' },
  movement: { text: 'Movement',  cls: 'bg-indigo-100 text-indigo-800', icon: BookOpen,      borderCls: 'border-indigo-200' },
}

const TREE: TreeNode[] = [
  {
    id: 'trunk',
    label: 'Catholic Church — One, Holy, Catholic, Apostolic',
    type: 'church',
    summary: 'Founded by Jesus Christ; continuous from Pentecost to today through apostolic succession.',
    detail: 'The Catholic Church traces its origin to Jesus Christ and the Apostles. Through an unbroken chain of apostolic succession — bishops ordained by bishops going back to the Apostles — the Church has maintained unity of faith, sacraments, and governance. She is one (united in faith and communion), holy (set apart for God), catholic (universal in mission and scope), and apostolic (founded on the Apostles).',
    children: [
      {
        id: 'apostolic',
        label: 'Apostolic Era (33–100)',
        summary: 'Birth of the Church; missionary expansion; foundational writings.',
        detail: 'The Apostolic Era spans from Pentecost (~33 AD) to the death of the last Apostle (~100 AD). During this period the Church was founded, spread through the Roman Empire, weathered early persecution, and produced the foundational New Testament writings. The canon was not yet formally defined, but the essential deposit of faith — Scripture and Tradition — was being laid down.',
        children: [
          {
            id: 'pentecost', label: 'Pentecost (33)', year: '33', type: 'event',
            summary: 'Descent of the Holy Spirit; birth of the Church; 3,000 baptized.',
            detail: 'On the Jewish feast of Pentecost (~33 AD), the Holy Spirit descended upon the Apostles and disciples gathered in Jerusalem. St. Peter preached the first homily; about 3,000 were baptized. The Church was publicly born. This event fulfils Joel 2:28-32 and Jesus\'s promise in John 14-16. The Church immediately began communal life: prayer, breaking of bread (Eucharist), teaching, and fellowship (Acts 2:42).',
          },
          {
            id: 'jerusalem-council', label: 'Council of Jerusalem (c. 49)', year: 'c. 49', type: 'council',
            summary: 'First council; resolved Gentile admission without full Mosaic observance.',
            detail: 'The Council of Jerusalem (Acts 15) was the first authoritative gathering of Church leadership to resolve a doctrinal dispute: whether Gentile converts must be circumcised and observe the Mosaic law. The council, led by Peter and James, decided that Gentiles are saved through grace without full Mosaic observance. This established the precedent of conciliar authority for settling doctrine — a pattern continued through all subsequent ecumenical councils.',
          },
          {
            id: 'peter-rome', label: 'Peter in Rome (~42–64)', year: '~42–64', type: 'event',
            summary: 'Peter establishes the Roman See; martyred under Nero (~64–68).',
            detail: 'Peter arrived in Rome approximately around 42 AD and eventually founded the Roman Church with Paul. Both were martyred under Emperor Nero around 64–68 AD: Peter crucified upside down on Vatican Hill, Paul beheaded on the Ostian Way. The tombs of both became the centres of Roman pilgrimage. Peter\'s presence in Rome and his martyrdom there established the unique authority of the Roman See over all other churches.',
          },
          {
            id: 'pauline-missions', label: 'Pauline Missions (48–67)', year: '48–67', type: 'event',
            summary: 'Three missionary journeys; churches planted across the Mediterranean.',
            detail: 'St. Paul undertook three major missionary journeys (~48–57 AD) across Asia Minor, Greece, and the Aegean. He founded churches in Galatia, Corinth, Philippi, Thessalonica, Ephesus, and Rome, among others. His letters (the earliest NT writings) defined core doctrine: justification, the Body of Christ, the Eucharist (1 Cor 11), the resurrection (1 Cor 15). Paul was martyred in Rome under Nero (~67 AD).',
          },
          {
            id: 'destruction-temple', label: 'Destruction of Jerusalem Temple (70)', year: '70', type: 'event',
            summary: 'Romans destroy the Temple; decisive separation of Christianity from Judaism.',
            detail: 'In 70 AD, the Roman general Titus sacked Jerusalem and destroyed the Second Temple, fulfilling Jesus\'s prophecy (Matt 24:2). Jewish Christians had already fled to Pella (following Jesus\'s instruction in Matt 24:16). The destruction ended the Temple sacrificial system, vindicating the Christian understanding of the Eucharist as the new and final sacrifice. It also accelerated the definitive separation of the Church from synagogue Judaism.',
          },
          {
            id: 'johannine', label: 'Johannine Writings (c. 85–100)', year: 'c. 85–100', type: 'event',
            summary: 'Gospel of John, Letters, Revelation written; deep theological reflection.',
            detail: 'The Johannine writings — the Gospel of John, three Letters, and Revelation — were composed in Ephesus around 85–100 AD, completing the New Testament. The Gospel of John provides the deepest theological reflection on the Incarnation (John 1:1-14) and the Last Supper discourses (John 13-17). The Book of Revelation addresses persecuted Christians under Domitian (~95 AD) with a vision of God\'s ultimate victory.',
          },
        ],
      },
      {
        id: 'patristic',
        label: 'Patristic Era (100–500)',
        summary: 'Church Fathers define doctrine; ecumenical councils refute heresies.',
        detail: 'The Patristic Era produced the great theologians (Fathers of the Church) who defended and developed Christian doctrine against numerous heresies. Seven ecumenical councils were held between 325 and 787 AD, defining the Trinity, the Person of Christ, and the role of images. This period also saw the Christianization of the Roman Empire under Constantine and the production of authoritative biblical canon lists.',
        children: [
          {
            id: 'gnosticism', label: 'Gnosticism (2nd c.)', type: 'heresy',
            summary: 'Claimed secret knowledge; denied the Incarnation and goodness of creation.',
            detail: 'Gnosticism (Greek: gnosis = knowledge) was a complex of 2nd-century movements claiming that salvation comes through secret spiritual knowledge rather than faith, sacraments, or moral life. Gnostics typically taught that the material world was evil (created by an inferior "demiurge"), that Christ only appeared to be human (Docetism), and that salvation was for an elite spiritual class. St. Irenaeus of Lyon (Against Heresies, ~180 AD) wrote the definitive refutation.',
          },
          {
            id: 'montanism', label: 'Montanism (c. 156)', type: 'heresy', year: 'c. 156',
            summary: 'Claimed new prophecies superseding the Apostles; excessive rigourism.',
            detail: 'Montanus (c. 156 AD, Phrygia) claimed the Holy Spirit spoke directly through him and two prophetesses, announcing a new age of the Spirit that superseded apostolic teaching. Montanists were rigorist (no second repentance for serious sins, mandatory fasting), and announced the imminent end of the world at Pepuza. Tertullian (~200 AD) eventually joined the movement. The Church rejected Montanism because it undermined the sufficiency of the Apostolic deposit.',
          },
          {
            id: 'arianism', label: 'Arianism (c. 318)', type: 'heresy', year: 'c. 318',
            summary: 'Taught the Son is a creature, not fully divine — "there was a time when he was not."',
            detail: 'Arius of Alexandria (~318 AD) taught that the Son of God was the greatest of all creatures — created by the Father before time — but not co-eternal or co-equal with the Father. His slogan: "There was a time when he was not." This was the most dangerous heresy of the early Church; at one point most bishops in the East had been won over. The Council of Nicaea (325) condemned Arianism and defined the Son as homoousios (of the same substance) with the Father.',
          },
          {
            id: 'edict-milan', label: 'Edict of Milan (313)', year: '313', type: 'event',
            summary: 'Constantine grants legal tolerance to Christianity; persecution ends.',
            detail: 'In 313 AD, Emperor Constantine I and co-emperor Licinius issued the Edict of Milan, granting legal tolerance and protection to Christianity (and all religions) throughout the Roman Empire. Persecution of Christians ended; confiscated Church property was restored. Constantine later favoured Christianity, convened the Council of Nicaea (325), and built major basilicas in Rome and Jerusalem. The relationship between Church and Empire — later called Christendom — began here.',
          },
          {
            id: 'nicaea', label: 'Council of Nicaea I (325)', year: '325', type: 'council',
            summary: 'Defined the Son as homoousios (same substance) with the Father; rejected Arianism.',
            detail: 'Convened by Emperor Constantine in Nicaea (modern Iznik, Turkey), the First Ecumenical Council gathered ~318 bishops in 325 AD. It defined the full divinity of the Son (homoousios — "of the same substance" as the Father), rejected Arianism, and issued the first version of the Nicene Creed. The Council also settled the date of Easter and addressed clerical discipline. St. Athanasius, then a young deacon, was the crucial defender of Nicene orthodoxy.',
          },
          {
            id: 'athanasius', label: 'St. Athanasius (296–373)', year: '296–373', type: 'saint',
            summary: '"Athanasius contra mundum" — alone against the world in defence of Nicaea.',
            detail: 'Bishop of Alexandria from 328 AD, Athanasius spent most of his episcopate defending the Nicene faith against Arianism — five times exiled by emperors sympathetic to Arian bishops. His phrase "Athanasius contra mundum" (Athanasius against the world) describes his lonely stand. His key works: On the Incarnation (defending Christ\'s full humanity and divinity), the Letters (defining the biblical canon), and Festal Letters. He was vindicated at the Council of Constantinople (381).',
          },
          {
            id: 'donatism', label: 'Donatism (c. 311)', type: 'heresy', year: 'c. 311',
            summary: 'Taught the validity of sacraments depends on the minister\'s holiness.',
            detail: 'Donatism arose in North Africa (~311 AD) when Donatus and his followers refused to accept bishops who had handed over (tradidere) Scripture to Roman authorities during the Diocletianic persecution. They taught that sacraments performed by sinful clergy were invalid — a position St. Augustine refuted brilliantly: sacraments are valid by the power of Christ, not the holiness of the minister (ex opere operato). The Council of Arles (314) condemned Donatism.',
          },
          {
            id: 'constantine-2', label: 'Constantinople I (381)', year: '381', type: 'council',
            summary: 'Defined divinity of the Holy Spirit; completed the Trinitarian definition.',
            detail: 'The Second Ecumenical Council (Constantinople, 381 AD) was convened by Emperor Theodosius I. It definitively condemned Arianism (again), condemned the Pneumatomachi who denied the full divinity of the Holy Spirit, and expanded the Nicene Creed to its familiar form — including the clause on the Holy Spirit: "who proceeds from the Father, who with the Father and the Son together is worshipped and glorified." This completed the Trinitarian definition.',
          },
          {
            id: 'pelagianism', label: 'Pelagianism (c. 410)', type: 'heresy', year: 'c. 410',
            summary: 'Denied original sin; taught humans can achieve salvation by free will alone.',
            detail: 'Pelagius (a British monk, ~410 AD) taught that humans are born without original sin, have full free will to choose good or evil, and can achieve salvation through their own moral effort — grace is helpful but not strictly necessary. St. Augustine wrote extensively against Pelagianism, defending original sin, the necessity of grace, and the priority of God\'s action in salvation. Condemned at the Council of Carthage (418) and confirmed by the Council of Ephesus (431).',
          },
          {
            id: 'nestorianism', label: 'Nestorianism (c. 428)', type: 'heresy', year: 'c. 428',
            summary: 'Divided Christ into two persons; denied Mary the title Theotokos.',
            detail: 'Nestorius of Constantinople (~428 AD) objected to calling Mary Theotokos (God-bearer) on the grounds that she bore the human Christ, not God. His theology effectively divided Christ into two persons — one divine, one human — loosely united. St. Cyril of Alexandria championed the unity of Christ\'s person. The Council of Ephesus (431) condemned Nestorianism, defined Mary as Theotokos, and affirmed that Christ is one divine Person in one nature. A remnant formed the "Church of the East."',
            divisionLink: true,
          },
          {
            id: 'chalcedon', label: 'Council of Chalcedon (451)', year: '451', type: 'council',
            summary: 'Defined Christ as one Person in two natures — divine and human, without confusion or separation.',
            detail: 'The Fourth Ecumenical Council (Chalcedon, 451 AD) was the largest council of antiquity (~600 bishops). It defined the Chalcedonian Definition: Jesus Christ is one Person in two natures — divine and human — "without confusion, without change, without division, without separation." This definitively refuted both Nestorianism (two persons) and Monophysitism (one nature). Those who rejected Chalcedon (Copts, Ethiopians, Armenians, Syrians) are today called Oriental Orthodox.',
            divisionLink: true,
          },
          {
            id: 'augustine', label: 'St. Augustine of Hippo (354–430)', year: '354–430', type: 'saint',
            summary: 'Greatest theologian of the West; shaped Catholic understanding of grace, sin, and history.',
            detail: 'Augustine, Bishop of Hippo (North Africa), is the most influential theologian in Western Christianity. Converted from Manichaeism through the prayers of his mother Monica and the preaching of Ambrose of Milan, he wrote 232 books including: Confessions (spiritual autobiography), City of God (theology of history), and De Trinitate (on the Trinity). He definitively refuted Pelagianism and Donatism and shaped Catholic teaching on original sin, grace, free will, and the just war theory.',
          },
          {
            id: 'jerome', label: 'St. Jerome & the Vulgate (382–405)', year: '382–405', type: 'saint',
            summary: 'Translated the Bible into Latin (the Vulgate); standard Western text for 1,000 years.',
            detail: 'St. Jerome, commissioned by Pope Damasus I, translated the entire Bible from Hebrew and Greek into Latin — the Vulgate (meaning "common" text). Completed around 405 AD, the Vulgate became the standard biblical text of the Western Church for over a millennium and was officially confirmed at the Council of Trent (1546). Jerome also produced important biblical commentaries and correspondence, and lived as a monk in Bethlehem.',
          },
        ],
      },
      {
        id: 'medieval',
        label: 'Medieval Era (500–1500)',
        summary: 'Monasticism, Christianization of Europe, scholasticism, and the Great Schism.',
        detail: 'The Medieval period saw the Christianization of Europe, the flowering of monastic culture, the synthesis of faith and reason in scholastic theology, and the Crusades. It also saw growing tensions between Rome and Constantinople culminating in the Great Schism of 1054, and internal reform movements responding to clerical corruption and doctrinal drift.',
        children: [
          {
            id: 'benedict', label: 'Rule of St. Benedict (~530)', year: '~530', type: 'movement',
            summary: 'Framework for Western monastic life; "pray and work" (ora et labora).',
            detail: 'St. Benedict of Nursia (~480–547 AD) wrote the Rule of Saint Benedict for his monastery at Monte Cassino. This moderate, humane rule structured monastic life around the Divine Office (eight daily prayer times), manual labour, and communal reading. Benedictine monasteries became the great centres of learning, manuscript preservation, agriculture, and hospitality in medieval Europe. The Rule is still followed by tens of thousands of monks and nuns today.',
          },
          {
            id: 'gregory-great', label: 'Gregory the Great (590–604)', year: '590–604', type: 'event',
            summary: 'Greatest early medieval pope; Gregorian chant; missions to England.',
            detail: 'Pope Gregory I ("the Great") was one of the most formative popes in history. He reformed the liturgy (Gregorian chant is associated with his name), sent Augustine of Canterbury to evangelise England (596 AD), wrote extensively on pastoral theology (Pastoral Rule) and biblical commentary (Moralia in Job), and managed the defence of Rome when civil authorities had collapsed. He established the model of the papacy as a servant-leader — "servant of the servants of God."',
          },
          {
            id: 'iconoclasm', label: 'Iconoclasm (726–843)', type: 'heresy', year: '726–843',
            summary: 'Imperial campaign to destroy sacred images; rejected by Nicaea II (787).',
            detail: 'Byzantine Emperor Leo III began destroying sacred images (icons) in 726 AD, claiming they promoted idolatry. Two periods of iconoclasm (726–787 and 815–843) saw the destruction of countless mosaics, paintings, and sculptures. Pope Gregory II and III resisted iconoclasm; the Seventh Ecumenical Council (Nicaea II, 787) definitively affirmed the veneration (not worship) of icons as legitimate. The final restoration of icons (843 AD) is celebrated as the "Triumph of Orthodoxy" in the Eastern Church.',
          },
          {
            id: 'charlemagne', label: 'Charlemagne crowned (800)', year: '800', type: 'event',
            summary: 'Pope Leo III crowns Charlemagne; birth of the Holy Roman Empire.',
            detail: 'On Christmas Day 800 AD, Pope Leo III crowned Charlemagne (Charles the Great) as Emperor of the Romans in St. Peter\'s Basilica. This created the Holy Roman Empire and established a new model of Christian political order in the West. Charlemagne promoted education, scriptoria, and the Carolingian Renaissance. The coronation also deepened the tension between the papacy and Eastern Byzantium, which saw itself as the continuation of the Roman Empire.',
          },
          {
            id: 'east-west-schism', label: 'Great Schism (1054)', year: '1054', type: 'division',
            summary: 'Mutual excommunications between Rome and Constantinople; Eastern Orthodoxy separates.',
            detail: 'The Great Schism of 1054 formalised the break between Rome and Constantinople that had been building for centuries over theological disputes (the Filioque — whether the Holy Spirit proceeds from the Father alone, or from the Father "and the Son"), canonical disputes (jurisdiction over newly Christianised Bulgaria), and cultural-political tensions. Cardinal Humbert placed a bull of excommunication on the altar of Hagia Sophia; Patriarch Michael Cerularius excommunicated the Roman legates. Both excommunications were lifted in 1964 by Pope Paul VI and Patriarch Athenagoras.',
            divisionLink: true,
          },
          {
            id: 'crusades', label: 'The Crusades (1095–1291)', year: '1095–1291', type: 'event',
            summary: 'Military campaigns to defend and recover Christian holy sites; complex legacy.',
            detail: 'Pope Urban II called the First Crusade at the Council of Clermont (1095) in response to Byzantine requests for aid against Seljuk Turks who had conquered Jerusalem. Eight major Crusades followed over two centuries. The Crusades recovered Jerusalem (briefly) and established Crusader states. The Fourth Crusade\'s sack of Constantinople (1204) further damaged Catholic-Orthodox relations. The Crusades have a complex legacy: genuine religious motivation, defence of Christians, but also violence, the sack of Constantinople, and persecution of Jews. Pope John Paul II asked forgiveness for excesses committed in the Church\'s name.',
          },
          {
            id: 'catharism', label: 'Catharism (12th–13th c.)', type: 'heresy',
            summary: 'Neo-Manichaean dualism; rejected the material world, Church, and sacraments.',
            detail: 'The Cathars (also called Albigensians in southern France) were a neo-Manichaean movement that rejected the material world as evil and the Catholic Church as corrupt. They rejected marriage, eating meat, and the Incarnation. Pope Innocent III launched the Albigensian Crusade (1209) against them in southern France, and the Inquisition was established partly to address Catharism. The movement was largely extinguished by the mid-14th century.',
            divisionLink: true,
          },
          {
            id: 'francis', label: 'St. Francis of Assisi (1182–1226)', year: '1182–1226', type: 'saint',
            summary: 'Founded the Franciscans; renewal through radical poverty, joy, and love of creation.',
            detail: 'Francis of Assisi renounced his wealthy family\'s inheritance, embraced radical poverty, and preached the Gospel through joyful witness. He founded the Order of Friars Minor (Franciscans, 1209), which became the largest religious order of the medieval period. The Poor Clares (women\'s branch, founded with Clare of Assisi) followed. Francis\'s Canticle of the Sun expressed his theology of creation as gift; Pope Francis chose his name in honour of Francis\'s witness to poverty and care for creation.',
          },
          {
            id: 'thomas-aquinas', label: 'St. Thomas Aquinas (1225–1274)', year: '1225–1274', type: 'saint',
            summary: '"Doctor Angelicus"; synthesised Aristotle and Christian faith in the Summa Theologiae.',
            detail: 'Thomas Aquinas, Dominican friar, is the greatest theologian of the scholastic period and one of the most influential thinkers in Western history. His Summa Theologiae is the definitive synthesis of Christian philosophy and theology. He demonstrated that faith and reason are not in conflict — that Aristotelian philosophy can serve Christian theology. Named "Doctor of the Church" and "Common Doctor." Pope Leo XIII\'s Aeterni Patris (1879) mandated Thomism as the basis of Catholic philosophical education.',
          },
          {
            id: 'lateran4', label: 'Fourth Lateran Council (1215)', year: '1215', type: 'council',
            summary: 'Defined transubstantiation; annual confession and Communion mandated.',
            detail: 'The Fourth Lateran Council (1215), convened by Pope Innocent III, was the largest and most influential medieval council. It formally defined transubstantiation as the term for the Eucharistic change; required annual confession and Easter Communion; issued decrees on clerical reform; and addressed the Cathar heresy. It also unfortunately included discriminatory measures against Jews (requiring distinctive clothing) — a historical blot later repudiated by the Church.',
          },
          {
            id: 'avignon', label: 'Avignon Papacy (1309–1377)', year: '1309–1377', type: 'event',
            summary: 'Seven popes resided in Avignon, France; perception of French royal control.',
            detail: 'From 1309 to 1377, the papal court resided in Avignon (southern France) rather than Rome — a period sometimes called the "Babylonian Captivity of the Church." Seven successive popes reigned from Avignon, creating the impression of French royal domination. St. Catherine of Siena famously urged Pope Gregory XI to return to Rome, which he did in 1377. The Avignon period was followed by the Western Schism (1378–1417), in which rival claimants to the papacy created further crisis.',
          },
          {
            id: 'great-western-schism', label: 'Western Schism (1378–1417)', year: '1378–1417', type: 'event',
            summary: 'Two (then three) rival claimants to the papacy; resolved at Constance.',
            detail: 'After Gregory XI returned to Rome and died (1378), a disputed conclave elected two rival popes — one in Rome, one in Avignon. For 39 years the Church was divided between two (later three) obediences. The Council of Constance (1414–18) resolved the crisis by accepting the resignation of one pope, deposing the others, and electing Martin V. The crisis severely damaged papal prestige and fuelled the conciliarist movement (claiming council authority supersedes the pope), which the Church later rejected.',
          },
          {
            id: 'hussites', label: 'Hussites (1415–)', year: '1415–', type: 'division',
            summary: 'Jan Hus burned at Constance; Hussite Wars; forerunner of Reformation.',
            detail: 'Jan Hus, a Czech priest and reformer influenced by John Wycliffe, preached against clerical corruption and indulgences. Despite a safe-conduct promise, he was condemned and burned at the Council of Constance (1415). His martyrdom ignited the Hussite Wars in Bohemia (1419–36). The Hussite movement anticipated the Protestant Reformation by a century and left a lasting Czech Protestant tradition. Pope John Paul II expressed regret for Hus\'s execution in 1999.',
            divisionLink: true,
          },
        ],
      },
      {
        id: 'reformation',
        label: 'Reformation & Renewal (1500–1700)',
        summary: 'Protestant separations; Catholic Counter-Reformation; global missions.',
        detail: 'The 16th century saw the Church face her most severe internal crisis since the Arian controversy. The Protestant Reformations of Luther, Calvin, Zwingli, and Henry VIII resulted in permanent separations. The Church\'s response — the Catholic Reformation (Counter-Reformation) — produced genuine renewal through the Council of Trent, new religious orders, and missionary expansion across Asia, Africa, and the Americas.',
        children: [
          {
            id: 'lutheranism', label: 'Lutheran Separation (1517–)', year: '1517–', type: 'division',
            summary: 'Luther\'s 95 Theses; sola scriptura, sola fide; excommunicated 1521.',
            detail: 'Martin Luther\'s posting of the 95 Theses (1517) challenging indulgences led to a break that went far beyond indulgence reform. Luther developed sola scriptura (Scripture alone as authority), sola fide (faith alone for justification), and rejected papal primacy, most sacraments, and the sacrificial nature of the Mass. Excommunicated by Pope Leo X (1521). The Lutheran church spread through Germany and Scandinavia. The Joint Declaration on the Doctrine of Justification (1999) between Lutherans and Catholics was a significant step toward reconciliation.',
            divisionLink: true,
          },
          {
            id: 'reformed', label: 'Reformed/Calvinist Separation (1536–)', year: '1536–', type: 'division',
            summary: 'Calvin\'s Institutes; predestination; Reformed churches in Switzerland, France, Scotland.',
            detail: 'John Calvin\'s Institutes of the Christian Religion (1536) became the systematic foundation of Reformed theology. Calvin\'s distinctive doctrines included double predestination, the spiritual (not bodily) presence of Christ in the Eucharist, and rejection of episcopal governance. Reformed churches spread through Switzerland (Zwingli, Calvin), France (Huguenots), Scotland (Knox/Presbyterians), and the Netherlands. The Heidelberg Catechism (1563) and Westminster Confession (1647) are key confessional standards.',
            divisionLink: true,
          },
          {
            id: 'anglicanism', label: 'Anglican Separation (1534–)', year: '1534–', type: 'division',
            summary: 'Henry VIII declares himself head of the Church of England; driven by dynastic politics.',
            detail: 'King Henry VIII severed the Church of England from Rome in 1534 primarily to obtain a divorce that Pope Clement VII refused to grant, given political pressure from Holy Roman Emperor Charles V (Catherine of Aragon\'s nephew). Henry declared himself "Supreme Head of the Church of England." Unlike Luther or Calvin, Henry maintained most Catholic doctrine and practice; the doctrinal direction of the Church of England varied dramatically between Edward VI (Protestant), Mary I (Catholic), and Elizabeth I (via media). The Anglican Communion today is a worldwide body with ~85 million members.',
            divisionLink: true,
          },
          {
            id: 'trent', label: 'Council of Trent (1545–1563)', year: '1545–63', type: 'council',
            summary: 'Defined Catholic doctrine against Protestantism; reformed clerical discipline.',
            detail: 'The Council of Trent (1545–1563, with interruptions) was the Church\'s comprehensive response to the Reformation. It defined: Scripture and Tradition as co-sources of revelation; justification by faith and works (against sola fide); seven sacraments; transubstantiation; the sacrificial nature of the Mass; the Vulgate as the authoritative biblical text; purgatory and prayers for the dead; and the veneration of saints. It also mandated seminary education for priests and addressed clerical corruption. Trent shaped Catholicism for four centuries.',
          },
          {
            id: 'jesuits', label: 'Society of Jesus Founded (1540)', year: '1540', type: 'movement',
            summary: 'Ignatius of Loyola founds Jesuits; education, missions, and papal service.',
            detail: 'St. Ignatius of Loyola (1491–1556), a Spanish soldier turned mystic, founded the Society of Jesus in 1540 with the approval of Pope Paul III. The Jesuits were characterised by intense spiritual formation (the Spiritual Exercises), high educational standards, and absolute obedience to the Pope ("the fourth vow"). They became the most effective instruments of the Counter-Reformation: founding hundreds of colleges and universities, evangelising Japan (Xavier), India, China (Ricci), and the Americas, and combating Protestantism in Europe.',
          },
          {
            id: 'teresa-avila', label: 'St. Teresa of Ávila (1515–1582)', year: '1515–82', type: 'saint',
            summary: 'Reformer of Carmelites; "Doctor of the Church"; Interior Castle on contemplative prayer.',
            detail: 'Teresa of Ávila, a Spanish Carmelite nun, reformed her order (founding the Discalced Carmelites with St. John of the Cross) and wrote the greatest Spanish mystical literature: The Interior Castle, The Way of Perfection, and her Autobiography. Named a Doctor of the Church in 1970 (one of the first two women so designated). Her mystical theology of prayer as a relationship — not technique — has shaped Catholic contemplative tradition. St. John of the Cross (1542–1591), her collaborator, wrote Dark Night of the Soul.',
          },
          {
            id: 'missions', label: 'Global Catholic Missions (1500–1700)', type: 'movement',
            summary: 'Evangelisation of the Americas, Africa, India, Japan, and China.',
            detail: 'The 16th–17th centuries saw an unprecedented expansion of the Church through missionary activity accompanying European exploration. Francis Xavier evangelised India and Japan (~1542–52). Matteo Ricci developed inculturation in China (~1583–1610). The martyrs of Japan (Paul Miki and companions, 1597) and Vietnam are from this period. The Americas saw mass baptisms but also the tragedy of forced conversions and cultural destruction, which later popes have acknowledged as requiring repentance. The Church today in Latin America, Africa, and Asia is the fruit of this period.',
          },
          {
            id: 'jansenism', label: 'Jansenism (c. 1640–)', year: 'c. 1640–', type: 'heresy',
            summary: 'Rigorist Catholic movement; overstated Augustine on grace; rejected by Unigenitus (1713).',
            detail: 'Cornelius Jansen (Jansenius), a Dutch bishop, published Augustinus (1640) posthumously, arguing that Augustine taught: the irresistibility of grace, the impossibility of obeying all God\'s commands, and a very narrow path to salvation. Jansenism infected French Catholicism (especially Port-Royal monastery) and produced an austere, fearful piety. Pope Clement XI condemned five Jansenist propositions in Cum Occasione (1653) and Unigenitus (1713). Pascal\'s Pensées reflect Jansenist influence.',
          },
        ],
      },
      {
        id: 'modern',
        label: 'Modern Era (1700–Present)',
        summary: 'Enlightenment challenges; social doctrine; two Vatican Councils; global Church.',
        detail: 'The Modern era has seen the Church navigate the Enlightenment, the French Revolution, the loss of the Papal States, two World Wars, the rise and fall of communism, and the Second Vatican Council. The Church has grown from a predominantly European institution to a global communion with its centre of gravity shifting to Africa, Asia, and Latin America.',
        children: [
          {
            id: 'rerum-novarum', label: 'Rerum Novarum (1891)', year: '1891', type: 'event',
            summary: 'Pope Leo XIII\'s encyclical on labour rights; birth of Catholic Social Teaching.',
            detail: 'Pope Leo XIII\'s Rerum Novarum (1891, "On New Things") is the foundational document of Catholic Social Teaching. Written in response to industrialisation and the spread of Marxism, it defended workers\' right to just wages, safe conditions, and association (trade unions), while rejecting both Marxist class warfare and laissez-faire capitalism. The encyclical established the Catholic principle of the common good, solidarity, and subsidiarity. It has been updated at every major anniversary: Quadragesimo Anno (1931), Mater et Magistra (1961), Laborem Exercens (1981), Centesimus Annus (1991).',
          },
          {
            id: 'immaculate-conception', label: 'Marian Dogmas (1854 & 1950)', year: '1854, 1950', type: 'event',
            summary: 'Immaculate Conception (1854) and Assumption (1950) defined as dogmas.',
            detail: 'Pope Pius IX defined the dogma of the Immaculate Conception in 1854 (Ineffabilis Deus): Mary was preserved from original sin from the moment of her conception. This was the first exercise of formal papal infallibility before Vatican I (1870) officially defined it. Pope Pius XII defined the Assumption in 1950 (Munificentissimus Deus): Mary was assumed body and soul into heavenly glory. These definitions drew on centuries of liturgical tradition and theological reflection, not new revelation.',
          },
          {
            id: 'vatican1', label: 'Vatican Council I (1869–1870)', year: '1869–70', type: 'council',
            summary: 'Defined papal primacy and papal infallibility; interrupted by Franco-Prussian War.',
            detail: 'The First Vatican Council (1869–70) was the 20th Ecumenical Council. Its most significant definition: papal infallibility — when the Pope speaks ex cathedra (from the Chair of Peter) on matters of faith and morals, intending to bind the whole Church, he is preserved from error by the Holy Spirit. This is a carefully limited charism: it has been formally invoked only once since Vatican I (in 1950, for the Assumption). The Council was interrupted when Italian troops seized Rome, and it was formally closed only in 1962 (by Vatican II).',
          },
          {
            id: 'lourdes-fatima', label: 'Lourdes & Fátima (1858 & 1917)', year: '1858, 1917', type: 'event',
            summary: 'Marian apparitions approved by the Church; major pilgrimage sites.',
            detail: 'Our Lady of Lourdes (1858): Mary appeared to Bernadette Soubirous 18 times in Lourdes, France. The spring water at the site has been associated with documented miraculous cures investigated by the Lourdes Medical Bureau. Our Lady of Fátima (1917): Mary appeared to three shepherd children in Fátima, Portugal, delivering messages calling for prayer, penance, and consecration of Russia. The Miracle of the Sun (October 13, 1917) was witnessed by ~70,000 people. Both apparitions are formally approved by the Church as worthy of belief (not required by faith).',
          },
          {
            id: 'wwii-pius12', label: 'WWII & Pius XII (1939–1945)', year: '1939–45', type: 'event',
            summary: 'Church under Nazism and Communism; role of Pius XII remains debated.',
            detail: 'World War II and the Holocaust present complex questions about the Church\'s response. Pius XII used diplomatic channels to protect Jews, sheltered tens of thousands in Church institutions (especially in Rome), and helped thousands flee after the war. He was praised by Jewish leaders at the time. The debate over whether he could or should have spoken more boldly continues among historians. The Church officially confronted her historical failures in We Remember: A Reflection on the Shoah (1998), acknowledging that anti-Jewish prejudice in Christian history contributed to an environment in which the Holocaust became possible.',
          },
          {
            id: 'vatican2', label: 'Vatican Council II (1962–1965)', year: '1962–65', type: 'council',
            summary: 'Renewed liturgy, laity, ecumenism, and the Church\'s dialogue with the modern world.',
            detail: 'The Second Vatican Council (1962–65), called by Pope John XXIII and concluded by Paul VI, was the 21st Ecumenical Council and the most recent. Its key documents: Lumen Gentium (the Church as the People of God), Dei Verbum (divine revelation), Sacrosanctum Concilium (liturgical reform leading to the Novus Ordo Mass), Gaudium et Spes (the Church in the modern world), Nostra Aetate (relations with non-Christian religions), Unitatis Redintegratio (ecumenism). Vatican II did not change defined dogma but gave the Church\'s perennial teaching a new pastoral expression.',
          },
          {
            id: 'jpii', label: 'St. John Paul II (1978–2005)', year: '1978–2005', type: 'saint',
            summary: 'Longest modern pontificate; helped end communism; World Youth Day; Theology of the Body.',
            detail: 'Karol Wojtyła (John Paul II) was the first non-Italian pope in 455 years. His pontificate (1978–2005) was one of the most consequential in modern history: his support for Solidarity in Poland was pivotal in the fall of communism; he travelled to 129 countries; he launched World Youth Day; he apologised for historical sins of the Church; he was the most prolific pope in history (14 encyclicals, 15 apostolic exhortations, numerous letters). His Theology of the Body revolutionised Catholic understanding of human sexuality. Canonised in 2014.',
          },
          {
            id: 'ecumenism', label: 'Ecumenical Dialogue (1964–)', year: '1964–', type: 'movement',
            summary: 'Joint Declaration on Justification (1999); Catholic-Orthodox dialogue; healing of 1054.',
            detail: 'Since Vatican II, the Catholic Church has engaged in formal ecumenical dialogue with most major Christian traditions. Key milestones: lifting of the 1054 excommunications by Paul VI and Patriarch Athenagoras (1964); the Joint Declaration on the Doctrine of Justification with Lutherans (1999, also signed by Methodists and Anglicans); ongoing Catholic-Orthodox theological dialogue. Full visible unity has not been achieved, but relations have been transformed from centuries of hostility into respectful engagement.',
          },
          {
            id: 'francis-pope', label: 'Pope Francis (2013–)', year: '2013–', type: 'event',
            summary: 'First Jesuit and first Latin American pope; Laudato Si\' on ecology; synodality.',
            detail: 'Jorge Mario Bergoglio (Francis), elected March 2013, is the first Jesuit, the first pope from the Americas, and the first to take the name Francis (in honour of Francis of Assisi). His pontificate has emphasised mercy (the Jubilee of Mercy, 2015–16), care for creation (Laudato Si\', 2015; Laudate Deum, 2023), accompaniment of the poor, and synodality — a renewed emphasis on listening and consultation within the Church. He has also addressed the clergy sex abuse crisis with structural and disciplinary reforms.',
          },
        ],
      },
    ],
  },
]

function useFlatten(nodes: TreeNode[]) {
  return useMemo(() => {
    const map = new Map<string, TreeNode>()
    const walk = (n: TreeNode) => {
      map.set(n.id, n)
      n.children?.forEach(walk)
    }
    nodes.forEach(walk)
    return map
  }, [nodes])
}

function TypeBadge({ type }: { type?: NodeType }) {
  if (!type) return null
  const meta = TYPE_BADGE[type]
  const Icon = meta.icon
  return (
    <span className={`inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-medium rounded-full ${meta.cls}`}>
      {Icon && <Icon className="w-3 h-3" />} {meta.text}
    </span>
  )
}

function filterTree(nodes: TreeNode[], show: Record<NodeType, boolean>): TreeNode[] {
  const accept = (n: TreeNode): boolean => {
    if (!n.type) return true
    return show[n.type]
  }
  const walk = (n: TreeNode): TreeNode | null => {
    const kids = n.children?.map(c => walk(c)).filter(Boolean) as TreeNode[] | undefined
    const selfOk = accept(n)
    const hasKids = kids && kids.length > 0
    if (selfOk || hasKids) {
      return { ...n, children: kids }
    }
    return null
  }
  return nodes.map(walk).filter(Boolean) as TreeNode[]
}

function Branch({ node, depth = 0, onSelect, selectedId }: { node: TreeNode; depth?: number; onSelect: (n: TreeNode) => void; selectedId: string | null }) {
  const [open, setOpen] = useState(true)
  const hasChildren = node.children && node.children.length > 0
  const type = node.type
  const meta = type ? TYPE_BADGE[type] : undefined
  const borderCls = meta?.borderCls ?? 'border-gray-300'
  const isSelected = node.id === selectedId
  return (
    <div className={`relative pl-6`}>
      {depth > 0 && (
        <span className={`absolute left-0 top-3 h-full border-l ${borderCls}`} />
      )}
      <div className="relative flex items-start gap-2">
        {depth > 0 && (
          <span className={`absolute left-0 top-3 w-4 border-t ${borderCls}`} />
        )}
        <button
          onClick={() => {
            if (hasChildren) setOpen(!open)
            onSelect(node)
          }}
          className={`mt-1 inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded text-sm border transition-colors ${
            isSelected
              ? 'bg-amber-50 border-amber-400 text-amber-900'
              : hasChildren
                ? 'bg-white hover:bg-gray-50 border-gray-200'
                : type === 'division' || type === 'heresy'
                  ? 'bg-red-50 border-red-200 hover:bg-red-100'
                  : type === 'council'
                    ? 'bg-amber-50 border-amber-200 hover:bg-amber-100'
                    : type === 'saint'
                      ? 'bg-emerald-50 border-emerald-200 hover:bg-emerald-100'
                      : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
          }`}
        >
          {hasChildren && (
            <span className="text-gray-400 text-xs">{open ? '▾' : '▸'}</span>
          )}
          <span className="text-gray-800 font-medium">{node.label}</span>
          <TypeBadge type={type} />
        </button>
      </div>
      {hasChildren && open && (
        <div className="mt-2 space-y-2 ml-2">
          {node.children!.map((child) => (
            <Branch key={child.id} node={child} depth={depth + 1} onSelect={onSelect} selectedId={selectedId} />
          ))}
        </div>
      )}
    </div>
  )
}

export default function ChurchHistoryTree() {
  const [selectedId, setSelectedId] = useState<string | null>('trunk')
  const [show, setShow] = useState<Record<NodeType, boolean>>({
    church: true,
    council: true,
    heresy: true,
    division: true,
    event: true,
    saint: true,
    movement: true,
  })
  const flat = useFlatten(TREE)
  const selected = selectedId ? flat.get(selectedId) ?? null : null
  const filteredTree = useMemo(() => filterTree(TREE, show), [show])

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Church History Tree</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The Catholic Church as a living tree: one continuous trunk from Pentecost, strengthened
            by councils, challenged by heresies, enriched by saints, and branching into new missions.
            Click any node for detail; use the filters to focus on what interests you.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">

          {/* Left Sidebar Filters */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg border border-gray-200 p-4 sticky top-4">
              <h3 className="text-sm font-semibold text-gray-800 mb-3 uppercase tracking-wide">Filter by Type</h3>
              <div className="space-y-1.5">
                {(Object.keys(TYPE_BADGE) as Array<NodeType>).map((t) => (
                  <label key={t} className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-1.5 rounded">
                    <input
                      type="checkbox"
                      checked={show[t]}
                      onChange={(e) => setShow({ ...show, [t]: e.target.checked })}
                      className="rounded text-amber-600"
                    />
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium ${TYPE_BADGE[t].cls}`}>
                      {TYPE_BADGE[t].text}
                    </span>
                  </label>
                ))}
              </div>
              <div className="mt-4 pt-3 border-t border-gray-200 flex gap-3">
                <button
                  onClick={() => setShow({ church: true, council: true, heresy: true, division: true, event: true, saint: true, movement: true })}
                  className="text-xs text-amber-700 hover:text-amber-900 font-medium"
                >
                  Show All
                </button>
                <span className="text-gray-300">|</span>
                <button
                  onClick={() => setShow({ church: true, council: true, heresy: false, division: false, event: false, saint: false, movement: false })}
                  className="text-xs text-gray-600 hover:text-gray-800 font-medium"
                >
                  Core Only
                </button>
              </div>

              {/* Cross-links */}
              <div className="mt-5 pt-4 border-t border-gray-200 space-y-2">
                <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-2">Related Pages</p>
                <Link href="/history/church" className="flex items-center gap-1.5 text-xs text-amber-700 hover:text-amber-900">
                  <ChevronRight className="w-3 h-3" /> The Church (Full History)
                </Link>
                <Link href="/history/church-divisions" className="flex items-center gap-1.5 text-xs text-amber-700 hover:text-amber-900">
                  <ChevronRight className="w-3 h-3" /> Church Divisions (Detail)
                </Link>
                <Link href="/history/apostles" className="flex items-center gap-1.5 text-xs text-amber-700 hover:text-amber-900">
                  <ChevronRight className="w-3 h-3" /> The Apostles
                </Link>
              </div>
            </div>
          </div>

          {/* Main Tree */}
          <div className="lg:col-span-2 bg-white rounded-lg border border-gray-200 p-6 overflow-x-auto">
            <div className="space-y-3">
              {filteredTree.map((root) => (
                <Branch key={root.id} node={root} onSelect={(n) => setSelectedId(n.id)} selectedId={selectedId} />
              ))}
            </div>
          </div>

          {/* Right Details Panel */}
          <div className="lg:col-span-1">
            {selected ? (
              <div className="bg-white rounded-lg border border-gray-200 p-6 space-y-4 sticky top-4">
                <div>
                  <h2 className="text-lg font-bold text-gray-900 leading-tight">{selected.label}</h2>
                  {selected.year && (
                    <p className="text-sm text-amber-700 font-medium mt-1">{selected.year}</p>
                  )}
                  {selected.type && (
                    <div className="mt-2">
                      <TypeBadge type={selected.type} />
                    </div>
                  )}
                </div>
                {(selected.detail || selected.summary) && (
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {selected.detail ?? selected.summary}
                  </p>
                )}
                {selected.divisionLink && (
                  <div className="pt-3 border-t border-gray-100">
                    <Link
                      href="/history/church-divisions"
                      className="text-xs text-amber-700 hover:text-amber-900 font-medium flex items-center gap-1"
                    >
                      <ChevronRight className="w-3 h-3" />
                      See Church Divisions for full detail
                    </Link>
                  </div>
                )}
              </div>
            ) : (
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <p className="text-gray-500 text-sm">Click any node to view details here.</p>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  )
}
