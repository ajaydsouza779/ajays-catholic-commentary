'use client'

import { useState } from 'react'
import {
  Crown,
  Star,
  Shield,
  Heart,
  BookOpen,
  Church,
  CheckCircle,
  X,
  Search,
  Scroll,
  Flame,
  Cross,
  Users,
  MapPin,
  Calendar,
  Eye,
  Microscope,
} from 'lucide-react'

type FilterType = 'all' | 'canonized' | 'medieval' | 'modern' | 'visible'
type StigmataType = 'visible' | 'invisible' | 'both'
type CanonicalStatus = 'saint' | 'blessed' | 'venerable' | 'servant-of-god'

interface Stigmatist {
  id: string
  name: string
  dates: string
  died: number
  location: string
  country: string
  religiousOrder: string
  gender: 'male' | 'female'
  era: 'medieval' | 'early-modern' | 'modern'
  canonicalStatus: CanonicalStatus
  stigmataType: StigmataType
  wounds: string[]
  summary: string
  description: string[]
  medicalNote?: string
  churchRecognition: string
  significance: string
}

const stigmatists: Stigmatist[] = [
  {
    id: 'francis-of-assisi',
    name: 'St. Francis of Assisi',
    dates: '1182–1226',
    died: 1226,
    location: 'La Verna, Tuscany, Italy',
    country: 'Italy',
    religiousOrder: 'Franciscan (OFM, founder)',
    gender: 'male',
    era: 'medieval',
    canonicalStatus: 'saint',
    stigmataType: 'visible',
    wounds: ['Both hands', 'Both feet', 'Right side (lance wound)'],
    summary:
      'The first fully documented stigmatist in Church history. On September 17, 1224, on Mount La Verna during a 40-day fast, Francis received the full five wounds during a vision of a seraphic crucifix — wounds that bled visibly until his death two years later.',
    description: [
      'Around September 17, 1224, Francis of Assisi had ascended Mount La Verna in Tuscany for a 40-day fast in preparation for the feast of St. Michael the Archangel. While deep in contemplative prayer, he had a vision of a seraph — an angel of the highest order — bearing the image of the Crucified Christ. As the vision faded, Francis found that the wounds of Christ had been impressed upon his own body: in both hands and feet, the wounds appeared as nails of flesh, dark and protruding, and the wound in his right side bled freely.',
      'The wounds were witnessed by Brother Leo, his closest companion, and by other friars of the La Verna hermitage. Thomas of Celano, Francis’s first biographer (writing under papal commission within four years of Francis’s death), describes the stigmata in meticulous detail: the nails in the hands and feet appeared to be fashioned of hardened flesh, the heads on the palm side, the points emerging through the back of the hands and feet, and bent over as if struck by a hammer. The wound in the side bled regularly, staining his tunic.',
      'Francis bore the wounds for two years until his death on October 3, 1226. Pope Gregory IX canonized him in 1228 — the shortest canonization process in Church history up to that point — and acknowledged the stigmata in the papal bull Mira circa nos (1237). St. Bonaventure’s later biography, the Legenda Major (1263), became the definitive hagiographical account and provided the most systematic theological reflection on the stigmata. Francis is venerated on October 4 as the patron of Italy and of ecology.',
    ],
    medicalNote:
      'No modern medical examination was possible given the 13th-century date. Multiple contemporaneous witnesses — including secular clergy and civic leaders who viewed the body after death — confirmed the visible wounds. The distinctively nail-like quality of the flesh formations (described by Brother Leo and Thomas of Celano independently) has attracted scholarly attention as inconsistent with any known form of self-infliction.',
    churchRecognition:
      'Canonized by Pope Gregory IX in 1228. The stigmata are formally acknowledged in the papal bull Mira circa nos (Gregory IX, 1237). The feast of the Stigmata of St. Francis (September 17) is observed throughout the Franciscan family. The sanctuary of La Verna in Tuscany remains one of the most visited Franciscan pilgrimage sites in the world.',
    significance:
      'Francis of Assisi is the foundational case against which all subsequent stigmata are measured. He is the first stigmatist in Church history for whom we have multiple contemporaneous witnesses, a commissioned biography within living memory, and formal papal recognition. His experience set the theological framework — participation in the Passion through mystical union — that has guided the Church’s understanding of stigmata for eight centuries.',
  },
  {
    id: 'catherine-of-siena',
    name: 'St. Catherine of Siena',
    dates: '1347–1380',
    died: 1380,
    location: 'Siena, Tuscany, Italy',
    country: 'Italy',
    religiousOrder: 'Dominican (OP, Third Order)',
    gender: 'female',
    era: 'medieval',
    canonicalStatus: 'saint',
    stigmataType: 'invisible',
    wounds: ['All five wounds (invisible by her request)'],
    summary:
      'Doctor of the Church and papal advisor. In 1375, Catherine received the stigmata in Pisa while praying before a crucifix — but asked Christ that the wounds remain invisible so as not to attract attention. They became visible only at her death.',
    description: [
      'In the spring of 1375, Catherine of Siena was staying in Pisa when, while in prayer before a crucifix in the church of Santa Cristina, she had a mystical experience of intense suffering. She felt the five wounds of Christ pierce her own body simultaneously. Her companions saw her fall prostrate as if dying, her face radiant. Catherine described the experience in her letters: rays of blood-colored light emanating from the wounds of the crucified image pierced her hands, feet, and side.',
      'Catherine’s own account, preserved in her famous letters to her spiritual director Bl. Raymond of Capua OP, is among the most articulate first-person testimonies of stigmatization in the tradition. She explicitly prayed that the wounds remain invisible to human eyes during her lifetime — both out of humility and to avoid the public spectacle that had begun to gather around Francis of Assisi’s stigmata. Christ, she wrote, granted her request: she bore the full pain of the wounds but not their external marks.',
      'At her death in Rome on April 29, 1380 — she died at age 33, having worn herself out in service to the Church during the Great Schism — the stigmata reportedly appeared visibly on her body. A Doctor of the Church (declared by Paul VI in 1970, one of only four women to hold this title), she is also the patron of Italy (together with Francis) and of Europe. Her mystical masterwork, the Dialogue, dictated in ecstasy, remains a theological classic. Her body is incorrupt, preserved at Santa Maria sopra Minerva in Rome.',
    ],
    churchRecognition:
      'Canonized by Pope Pius II in 1461. Declared Doctor of the Church by Pope Paul VI in 1970. Named co-patroness of Europe by Pope John Paul II in 1999. The stigmata are recognized as part of her approved cause. Her feast is celebrated on April 29 in the universal Roman Calendar.',
    significance:
      'Catherine of Siena’s invisible stigmata established a theological precedent of profound importance: the mystical participation in Christ’s suffering does not require outward visibility to be real. Her case, authenticated by Raymond of Capua (her confessor and later Master General of the Dominicans), anchors the Church’s recognition that invisible stigmata — more common than visible — are spiritually and theologically primary.',
  },
  {
    id: 'rita-of-cascia',
    name: 'St. Rita of Cascia',
    dates: '1381–1457',
    died: 1457,
    location: 'Cascia, Umbria, Italy',
    country: 'Italy',
    religiousOrder: 'Augustinian (OSA)',
    gender: 'female',
    era: 'medieval',
    canonicalStatus: 'saint',
    stigmataType: 'visible',
    wounds: ['Forehead (thorn from the Crown of Thorns)'],
    summary:
      'Rita prayed that a thorn from a crucifix pierce her forehead as she meditated on the Crown of Thorns. It did, and the wound remained open and fragrant for fifteen years — one of the most distinctive partial stigmata in the tradition.',
    description: [
      'Rita of Cascia had lived a life of remarkable suffering before entering the Augustinian monastery: widowed by the murder of her husband, having prayed that her two sons die rather than seek violent revenge (they died peacefully within the year), she sought admission to the Augustinian nuns of Cascia three times before being supernaturally transported inside the cloister walls. Within the convent she lived a life of severe asceticism and deep prayer.',
      'Meditating one day on a sermon by St. James of the Marches about the Crown of Thorns, Rita prayed before a crucifix and asked that Christ allow her to share in his suffering by piercing her forehead with one of his thorns. According to her hagiographers, a thorn detached from the crucifix and pierced her forehead, leaving a wound that remained open, suppurating, and yet — by accounts of those who attended her — unusually fragrant, not foul, throughout the fifteen years she bore it.',
      'When she wished to make a pilgrimage to Rome for the canonization of Nicholas of Tolentino, her superiors required that the wound close so as not to cause scandal. The wound healed for the journey and reopened immediately upon her return to Cascia. At her death in 1457, her body was found incorrupt. The wound in her forehead, her characteristic stigma, is depicted in virtually every artistic representation of her. She is known as the patroness of impossible causes. Feast: May 22.',
    ],
    churchRecognition:
      'Canonized by Pope Leo XIII in 1900. Her incorrupt body is venerated in the Basilica of Santa Rita da Cascia in Cascia, Umbria. The basilica is a major pilgrimage destination, particularly for women who have suffered in marriage or family life. Feast: May 22.',
    significance:
      'Rita’s partial stigmata — a single wound of the Crown of Thorns rather than the five wounds — demonstrates that mystical participation in the Passion takes forms as varied as the spiritual paths of the individuals who bear it. Her case also raises the remarkable detail of the wound’s fragrance, noted independently by multiple witnesses, which sits in the tradition of the “odor of sanctity” attested in many canonized saints.',
  },
  {
    id: 'osanna-of-mantua',
    name: 'Bl. Osanna of Mantua',
    dates: '1449–1505',
    died: 1505,
    location: 'Mantua, Lombardy, Italy',
    country: 'Italy',
    religiousOrder: 'Dominican Tertiary (OP)',
    gender: 'female',
    era: 'early-modern',
    canonicalStatus: 'blessed',
    stigmataType: 'visible',
    wounds: ['Hands', 'Feet', 'Side (partial)'],
    summary:
      'Mantuan mystic and spiritual counselor to the ruling Gonzaga court. Osanna bore the stigmata alongside gifts of prophecy and ecstasy, becoming the principal reforming spiritual influence in Mantua in the late 15th century. Beatified 1694.',
    description: [
      'Osanna Andreasi was born into the noble Andreasi family of Mantua and from childhood exhibited extraordinary mystical gifts — she reported receiving her first mystical experience at age five and spent her life as a Dominican Tertiary rather than a professed nun, living in the world while maintaining a life of prayer, fasting, and apostolic service. She became the most prominent spiritual figure in Mantua during the reign of the Gonzaga lords.',
      'She bore the stigmata from the time of her first major mystical experience and experienced frequent ecstasies during which witnesses observed the wounds bleeding. Isabella d’Este, the celebrated Renaissance patron and Marchioness of Mantua, was among her devoted spiritual directees and sought her counsel on matters of government and family. The court of Mantua’s deference to a Dominican laywoman is a remarkable feature of her life and testimony to the credibility her mystical gifts commanded.',
      'She was known throughout northern Italy as a prophet and reformer whose influence extended beyond the convent to the political and social life of the city. She counseled religious and civic reform and is credited with multiple miraculous cures. Her mystical writings, though less systematic than Catherine of Siena’s, reflect deep Trinitarian theology. She died in 1505, her body reportedly incorrupt. Beatified by Pope Alexander VIII in 1694. Feast: June 18.',
    ],
    churchRecognition:
      'Beatified by Pope Alexander VIII in 1694. Her relics are venerated in Mantua. The cause for her full canonization has not been advanced to completion. Feast: June 18.',
    significance:
      'Osanna of Mantua represents the intersection of mysticism, political life, and the Renaissance world of 15th-century Italy. Her influence on the ruling Gonzaga court — one of the most sophisticated Renaissance courts in Europe — illustrates that the stigmata were not merely phenomena of cloistered life but were recognized and venerated at the highest levels of secular society.',
  },
  {
    id: 'catherine-de-ricci',
    name: 'St. Catherine de’ Ricci',
    dates: '1522–1590',
    died: 1590,
    location: 'Prato, Tuscany, Italy',
    country: 'Italy',
    religiousOrder: 'Dominican (OP)',
    gender: 'female',
    era: 'early-modern',
    canonicalStatus: 'saint',
    stigmataType: 'visible',
    wounds: ['Both hands', 'Both feet', 'Right side', 'Crown of Thorns (brow)'],
    summary:
      'For twelve consecutive years, Catherine re-enacted the full Passion every week from Thursday noon to Friday afternoon, bearing the visible wounds. Three future popes visited to witness the phenomenon firsthand.',
    description: [
      'Catherine de’ Ricci entered the Dominican convent of San Vincenzo in Prato at age thirteen. From 1542 to 1554 — a period of twelve years — she experienced the Passion of Christ weekly, falling into ecstasy every Thursday at noon and remaining in this state until Friday at 4pm, the traditional hour of Christ’s death. During these ecstasies she re-enacted every stage of the Passion: carrying the Cross, being nailed, hanging in agony. The wounds of the stigmata appeared on her body and bled during these episodes.',
      'The phenomenon attracted intense attention from ecclesiastical and secular visitors. Three men who later became popes — Alessandro Farnese (Paul III), Marcello Cervini (Marcellus II), and Giovanni Angelo de’ Medici (Pius IV) — visited the convent personally to witness the ecstasies. The Grand Duke of Tuscany, Cosimo I de’ Medici, also visited. The visitors came not merely out of piety but out of a desire to investigate the authenticity of the phenomenon; the unanimous verdict of those who observed it was that it could not be explained by natural causes.',
      'After 1554 the weekly ecstasies ceased, though the stigmata remained. Catherine continued as prioress of the convent for many years, combining mystical life with practical administration, extensive correspondence, and theological reflection. She is also reported to have appeared bilocationally to St. Philip Neri in Rome on multiple occasions — a detail Philip himself testified to, though the two never physically met. Canonized by Pope Benedict XIV in 1746. Feast: February 13.',
    ],
    medicalNote:
      'The weekly regularity of the Passion ecstasies — precisely from Thursday noon to Friday 4pm — and the appearance and disappearance of the wounds on the same schedule, were examined by physicians of the period who could offer no natural explanation for the cyclical pattern. The testimony of multiple ecclesiastical dignitaries and the future popes who witnessed the ecstasies in person constitutes an unusually high-quality historical record.',
    churchRecognition:
      'Canonized by Pope Benedict XIV in 1746. Her relics are preserved in the convent of San Vincenzo in Prato, which remains an active Dominican community. Feast: February 13 in the Roman Calendar.',
    significance:
      'No other stigmatist in Catholic history bears witness of quite the quality that Catherine de’ Ricci commands: the direct personal testimony of individuals who subsequently became popes, combined with twelve years of weekly cyclical phenomena observed by hundreds of witnesses, places her case at the apex of historical documentation for visionary and stigmatic experience in the early modern period.',
  },
  {
    id: 'john-of-god',
    name: 'St. John of God',
    dates: '1495–1550',
    died: 1550,
    location: 'Granada, Andalusia, Spain',
    country: 'Spain',
    religiousOrder: 'Brothers Hospitallers (OH, founder)',
    gender: 'male',
    era: 'early-modern',
    canonicalStatus: 'saint',
    stigmataType: 'invisible',
    wounds: ['Interior wounds of the Passion (mystical suffering)'],
    summary:
      'Founder of the Brothers Hospitallers and patron of hospitals and the sick. John bore a mystical participation in the Passion — interior suffering in union with Christ — that his hagiographers describe as invisible stigmata accompanying his extraordinary charity toward the poor.',
    description: [
      'John of God led one of the most dramatic conversion stories of the 16th century. A Portuguese-born adventurer and soldier, he underwent a shattering conversion at age forty after hearing a sermon by Bl. John of Avila in Granada. His initially frenzied behavior led to his confinement in a mental hospital — where he personally experienced the degrading treatment of the mentally ill and resolved to devote his life to the care of the sick and poor.',
      'He founded the first hospital in Granada operated on the principle that the poor and sick deserved genuine medical care and human dignity — a revolutionary concept in the 16th century. His physical labors on behalf of the sick were accompanied, his biographers record, by an intense mystical union with the sufferings of Christ. Francis of Borja and Bl. John of Avila served as his spiritual directors and both testified to the authenticity of his mystical life.',
      'The physical stigmata in John’s case are not prominent in the historical record and their nature is debated among hagiographers — some treat them as interior mystical conformity to Christ’s Passion rather than external wounds. He is included here as a representative of the many saints — particularly among those who served the sick — in whom mystical union with Christ’s suffering took the form of interior rather than visible stigmata. Canonized by Pope Alexander VIII in 1690. Patron of hospitals, nurses, the sick, and the dying. Feast: March 8.',
    ],
    churchRecognition:
      'Canonized by Pope Alexander VIII in 1690. Declared patron of hospitals and the sick by Pope Leo XIII in 1886. The Brothers Hospitallers of St. John of God (OH) operate over 400 health care facilities in 54 countries worldwide. Feast: March 8.',
    significance:
      'John of God illustrates the theological principle that mystical participation in Christ’s Passion expresses itself most fully not in physical marks but in compassionate service to the suffering members of Christ’s body. His case challenges any reduction of the stigmata to a merely physical phenomenon and situates it within the broader tradition of conformity to the Cross through charity.',
  },
  {
    id: 'anne-catherine-emmerich',
    name: 'Bl. Anne Catherine Emmerich',
    dates: '1774–1824',
    died: 1824,
    location: 'Dülmen, Westphalia, Germany',
    country: 'Germany',
    religiousOrder: 'Augustinian (OSA)',
    gender: 'female',
    era: 'modern',
    canonicalStatus: 'blessed',
    stigmataType: 'visible',
    wounds: ['Both hands', 'Both feet', 'Right side', 'Crown of Thorns (full circle, brow)'],
    summary:
      'One of the most extensively documented stigmatists in Church history. From 1812 until her death, Anne Catherine bore the full five wounds plus the Crown of Thorns. Medical examinations under civil authority found no natural explanation. Her visions of the Passion influenced Mel Gibson’s film.',
    description: [
      'Anne Catherine Emmerich entered the Augustinian convent of Agnetenberg at Dülmen after overcoming significant obstacles (the community initially refused her for lack of a dowry). From 1812 — when she was confined to bed with illnesses that would keep her bedridden for the rest of her life — the wounds of the stigmata appeared on her body. She bore the full five wounds of hands, feet, and side, as well as a complete circle of wounds on her brow from the Crown of Thorns, and a cross-shaped wound on her chest.',
      'Because her case attracted public attention, civil authorities in Westphalia — not the Church — ordered a medical examination. Dr. Franz Wilhelm von Drüffel conducted a supervised examination over several days in 1813 under conditions designed to rule out self-infliction or fraud. His report, submitted to the regional government, stated that the wounds could not be accounted for by any natural means he could identify. A second civil investigation in 1819, under more stringent conditions, reached the same conclusion.',
      'The poet Clemens Brentano spent years at her bedside transcribing her visions, which he published as The Dolorous Passion of Our Lord Jesus Christ. This work, along with The Life of the Virgin Mary drawn from her visions, became enormously influential in Catholic piety. Director Mel Gibson acknowledged these visions as a primary source for the imagery of his 2004 film The Passion of the Christ. Beatified by Pope John Paul II on October 3, 2004. Feast: February 9.',
    ],
    medicalNote:
      'Dr. Franz Wilhelm von Drüffel (civil physician, 1813) conducted a multi-day examination under conditions specified by the regional government, designed to exclude self-infliction. His official report documented wounds that bled on schedule and could not be attributed to any mechanical or chemical cause known to him. A second civil commission in 1819, convened under the authority of the Prussian government, likewise found no natural explanation. These are among the earliest medically documented stigmatic cases with civil (non-ecclesiastical) oversight.',
    churchRecognition:
      'Beatified by Pope John Paul II on October 3, 2004. Her cause for canonization is open. The former Augustinian convent site in Dülmen is maintained as a pilgrimage site. Feast: February 9.',
    significance:
      'Anne Catherine Emmerich is significant both for the quality of the medical documentation — civil authorities, not the Church, commissioned the examinations — and for the extraordinary cultural impact of her visions, which shaped modern Catholic devotion to the Passion and contributed to the most widely seen film depiction of the crucifixion in cinema history.',
  },
  {
    id: 'gemma-galgani',
    name: 'St. Gemma Galgani',
    dates: '1878–1903',
    died: 1903,
    location: 'Lucca, Tuscany, Italy',
    country: 'Italy',
    religiousOrder: 'Lay (Passionist associate)',
    gender: 'female',
    era: 'modern',
    canonicalStatus: 'saint',
    stigmataType: 'visible',
    wounds: ['Both hands', 'Both feet', 'Right side', 'Crown of Thorns (brow)', 'Shoulder (cross-bearing wound)'],
    summary:
      'From 1899, Gemma bore the full five wounds every Thursday night through Friday, weeping blood from the Crown of Thorns wound. Her spiritual director documented everything in detail, and photographs were taken. Canonized 1940.',
    description: [
      'Gemma Galgani was a lay woman of Lucca who had sought unsuccessfully to enter the Passionist sisters. On June 8, 1899 — the feast of the Sacred Heart — the stigmata appeared on her body for the first time. Thereafter, every Thursday night the wounds opened and bled through Good Friday, then closed and healed by Saturday morning, leaving no scarring. The cycle continued regularly for several years.',
      'Her spiritual director, Fr. Germano Ruoppolo CP, a Passionist priest of considerable theological learning, documented the stigmata with exceptional care. He observed the wounds opening and closing on schedule, noted that they showed no signs of infection despite remaining open and bleeding for hours, and arranged for photographs to be taken — some of the earliest photographic documentation of stigmata in the Church’s history. He also recorded her ecstasies, her extensive correspondence with him written in a state of mystical elevation, and the testimony of the Giannini family with whom she lived.',
      'Medical physicians were brought to examine her at various points and found no natural explanation for wounds that appeared and healed on a weekly schedule. She also bore a wound in her shoulder, associated with Christ’s carrying of the Cross — a detail not universally present in other stigmatists. She died of tuberculosis on Holy Saturday, April 11, 1903, at age 25. Her cause moved rapidly: beatified 1933, canonized by Pope Pius XII on May 2, 1940. Feast: April 11. Her letters to Fr. Germano are regarded as among the finest examples of mystical correspondence in the modern period.',
    ],
    medicalNote:
      'Multiple physicians examined Gemma at her spiritual director’s request and at the request of her guardians, the Giannini family. The consistent finding was that the wounds appeared and healed on a precise weekly cycle that could not be explained by any dermatological or medical condition. Photographs taken by Fr. Germano’s associates constitute some of the earliest visual documentation of active stigmatic wounds.',
    churchRecognition:
      'Beatified by Pope Pius XI in 1933. Canonized by Pope Pius XII on May 2, 1940. Her relics are venerated at the Passionist shrine in Lucca. She is a patron of students and of those suffering from back pain. Feast: April 11.',
    significance:
      'Gemma Galgani represents the threshold between pre-modern hagiography and modern documentation: her case combines the traditional elements of mystical experience with early photographic evidence, a rigorous spiritual director’s written record, and medical examination — making her one of the best-documented stigmatists of the 19th century and an important transitional figure toward the full medical scrutiny applied to 20th-century cases.',
  },
  {
    id: 'padre-pio',
    name: 'St. Pio of Pietrelcina (Padre Pio)',
    dates: '1887–1968',
    died: 1968,
    location: 'San Giovanni Rotondo, Foggia, Italy',
    country: 'Italy',
    religiousOrder: 'Capuchin Franciscan (OFMCap)',
    gender: 'male',
    era: 'modern',
    canonicalStatus: 'saint',
    stigmataType: 'visible',
    wounds: ['Both hands', 'Both feet', 'Right side'],
    summary:
      'The most famous and most medically examined stigmatist of the 20th century. Padre Pio bore the visible wounds for 50 years — the longest duration on record. The wounds healed completely and without scarring at his death in 1968. Canonized 2002.',
    description: [
      'On September 20, 1918, while making a thanksgiving after Mass in the choir of the Capuchin friary of San Giovanni Rotondo, Padre Pio received the visible stigmata. He was 31 years old. The wounds in both hands, both feet, and right side remained open, bleeding, and visible for the next fifty years — the longest continuous duration of documented visible stigmata in the Church’s history.',
      'The Vatican, responding to both public veneration and to skeptical concerns, ordered medical examinations. In 1919, Dr. Luigi Romanelli, chief physician of the hospital of Barletta, conducted a detailed clinical examination at the order of the Archbishop of Manfredonia and submitted a formal report stating the wounds were not superficial, showed no sign of inflammation or suppuration consistent with self-infliction, and could not be accounted for by any dermatological condition he knew. In 1920, Prof. Amico Bignami of the University of Rome — an agnostic and a skeptic who approached the case determined to find a natural explanation — examined Padre Pio and reported that the wounds were consistent with neither self-infliction nor any known pathological process, and that he had no explanation for them.',
      'The Vatican imposed extensive restrictions on Padre Pio during the 1920s and 1930s, limiting his public ministry while investigations continued — a reminder that the Church does not rush to authenticate extraordinary phenomena. These restrictions were later lifted. He founded the Casa Sollievo della Sofferenza (Home for the Relief of Suffering) hospital in San Giovanni Rotondo in 1956, one of the largest hospitals in southern Italy. On September 23, 1968, he died after celebrating Mass. Those who prepared his body for burial reported that the wounds of the stigmata had completely healed — leaving smooth, unscarred skin. No medically trained observer could account for the disappearance of wounds that had bled daily for fifty years without leaving any trace of scarring. Canonized by Pope John Paul II on June 16, 2002. Feast: September 23.',
    ],
    medicalNote:
      'Dr. Luigi Romanelli (1919): formal clinical report to the Archbishop of Manfredonia — wounds not superficial, no inflammation consistent with self-infliction, no known dermatological explanation. Prof. Amico Bignami (University of Rome, 1920): agnostic skeptic, found no natural explanation. Contemporary accounts suggested approximately 500cc daily blood loss from the side wound alone during peak periods. At death (September 23, 1968): the wounds closed completely, leaving no scarring — observed and reported by those who prepared the body. This final detail has attracted particular medical attention as wound healing of that speed and completeness is itself without precedent.',
    churchRecognition:
      'Beatified by Pope John Paul II on May 2, 1999. Canonized by Pope John Paul II on June 16, 2002. His body rests in the crypt of the new church at San Giovanni Rotondo, which has become one of the most-visited pilgrimage sites in the world, receiving over 7 million pilgrims annually. Feast: September 23.',
    significance:
      'Padre Pio is the defining stigmatic case of the modern era: 50 years duration, multiple independent medical examinations including by a declared skeptic, detailed photographic and testimony record, Vatican investigation, and the extraordinary disappearance of the wounds without scarring at death. No other case in the history of documented stigmata combines all of these features simultaneously, which is why his case continues to attract serious attention from scientists and theologians alike.',
  },
  {
    id: 'therese-neumann',
    name: 'Ven. Therese Neumann',
    dates: '1898–1962',
    died: 1962,
    location: 'Konnersreuth, Bavaria, Germany',
    country: 'Germany',
    religiousOrder: 'Lay (Third Order Carmelite)',
    gender: 'female',
    era: 'modern',
    canonicalStatus: 'venerable',
    stigmataType: 'visible',
    wounds: ['Both hands', 'Both feet', 'Right side', 'Crown of Thorns (brow)', 'Shoulder'],
    summary:
      'From 1926, Therese bore the visible stigmata and reportedly lived for over 35 years consuming nothing but the Eucharist. A 14-day medically supervised observation in 1927 confirmed she neither ate nor drank during that period. Her cause for beatification is open.',
    description: [
      'Therese Neumann of Konnersreuth began bearing the stigmata in 1926, during the season of Lent. The wounds appeared on her hands, feet, side, brow (from the Crown of Thorns), and shoulder (associated with carrying the Cross), and bled during her weekly Passion ecstasies — states in which she experienced and re-enacted the suffering of Christ from the Garden of Gethsemane through the Crucifixion, typically on Fridays.',
      'The phenomenon that attracted the most intense medical attention, however, was her reported inedia — the claim that from 1922 onward she consumed nothing but the daily Eucharist. In 1927, the Bishop of Regensburg, Michael Buchberger, authorized a formal medical observation: Therese was placed under continuous 24-hour nursing supervision for fourteen days. At the conclusion of the observation period, the supervising physicians reported that she had consumed nothing but the consecrated Host and that her weight had remained stable throughout. They could offer no medical explanation.',
      'Over her lifetime, thousands of visitors — including many physicians, theologians, and ecclesiastical dignitaries — came to witness her Friday Passion ecstasies. The consistency of testimony across decades of visitors strengthens the historical record considerably. Therese died in 1962. Pope John Paul II advanced her cause, and she was declared Venerable — confirming that she lived a life of heroic virtue — though she has not been beatified. The cause remains open.',
    ],
    medicalNote:
      'Bishop Buchberger’s supervised medical observation (1927): 14 days of continuous nursing supervision; confirmed no food or water consumption beyond the daily Eucharistic Host; weight stable throughout. The physicians’ report explicitly stated they had no medical explanation for the findings. Multiple subsequent physicians who examined Therese found her physical condition inconsistent with prolonged fasting.',
    churchRecognition:
      'Declared Venerable by Pope John Paul II, confirming heroic virtue. The cause for beatification is open and under study by the Congregation for the Causes of Saints. Her grave in the parish church of Konnersreuth is a pilgrimage site visited by tens of thousands annually.',
    significance:
      'Therese Neumann’s case is distinguished by the combination of visible stigmata and medically supervised inedia — two extraordinary phenomena documented independently. The 1927 medical observation remains the most formally structured scientific test applied to a stigmatist in the Church’s history prior to Padre Pio’s examinations, and its results have never been successfully explained or refuted.',
  },
  {
    id: 'mariam-thresia',
    name: 'St. Mariam Thresia Chiramel',
    dates: '1876–1926',
    died: 1926,
    location: 'Thrissur, Kerala, India',
    country: 'India',
    religiousOrder: 'Congregation of the Holy Family (CHF, founder)',
    gender: 'female',
    era: 'modern',
    canonicalStatus: 'saint',
    stigmataType: 'both',
    wounds: ['Hands', 'Feet', 'Side (appeared periodically during mystical states)'],
    summary:
      'The first Indian woman stigmatist and founder of the Congregation of the Holy Family. Mariam Thresia bore the wounds of Christ periodically during her mystical states, alongside gifts of healing. Canonized by Pope Francis in 2019.',
    description: [
      'Mariam Thresia Chiramel was born into a Syro-Malankara Catholic family in Thrissur, Kerala. From childhood she showed extraordinary devotion and mystical gifts. She lived as a lay woman dedicated to prayer and apostolic service among the poor of Kerala before founding the Congregation of the Holy Family in 1914 — a religious community dedicated to education and social service.',
      'The wounds of the stigmata appeared on her body periodically, particularly during her states of mystical prayer and contemplation. She bore them not as permanent open wounds — as in Francis of Assisi or Padre Pio — but as recurrent manifestations accompanying her mystical ecstasies. She also possessed gifts of healing: numerous miraculous cures were attributed to her intercession both during her lifetime and after her death, and these formed part of the evidence examined during her beatification and canonization process.',
      'She also suffered severe demonic attacks — periods of intense spiritual combat that her spiritual directors regarded as characteristic of souls advancing rapidly in holiness. She persevered in both active service and deep contemplation throughout her life. She died on June 8, 1926. Beatified by Pope John Paul II in Rome on April 9, 2000. Canonized by Pope Francis on October 13, 2019, in the company of four other new saints. Feast: June 8. She is the first Indian woman canonized in the modern period of Church history.',
    ],
    churchRecognition:
      'Beatified by Pope John Paul II on April 9, 2000. Canonized by Pope Francis on October 13, 2019. Feast: June 8. The Congregation of the Holy Family continues her apostolate across India and internationally. Her canonization is the most recent of the 12 stigmatists catalogued here.',
    significance:
      'Mariam Thresia Chiramel’s canonization is historically significant as the first Indian woman stigmatist to be raised to the altar of the universal Church. Her case demonstrates that the charism of mystical participation in the Passion — historically concentrated in medieval and early modern Europe — belongs to the universal Church across all cultures and continents, a point Pope Francis emphasized at her canonization.',
  },
  {
    id: 'natalia-tulasiewicz',
    name: 'Bl. Natalia Tułasiewicz',
    dates: '1906–1945',
    died: 1945,
    location: 'Poznań, Greater Poland, Poland',
    country: 'Poland',
    religiousOrder: 'Lay (Polish schoolteacher)',
    gender: 'female',
    era: 'modern',
    canonicalStatus: 'blessed',
    stigmataType: 'invisible',
    wounds: ['Interior mystical suffering in union with the Passion'],
    summary:
      'A Polish schoolteacher who entered Nazi Germany voluntarily as a clandestine apostle to Polish forced laborers, offering her mystical suffering in union with Christ’s Passion. Arrested by the Gestapo and martyred at Ravensbrück, April 1, 1945. Beatified 1999.',
    description: [
      'Natalia Tułasiewicz was a secondary school teacher of Polish language and literature in Poznań who, after the German occupation of Poland in 1939, dedicated herself to underground cultural and religious work to preserve Polish identity under Nazi persecution. In 1943, motivated explicitly by her identification with Christ carrying the Cross, she entered Germany voluntarily — not as a prisoner but as a clandestine apostle — to provide spiritual and cultural ministry to the hundreds of thousands of Polish civilians forcibly taken to Germany as slave laborers.',
      'Working under an assumed identity in Hanover and Munich, she organized clandestine prayer meetings, heard spiritual accounts, organized access to the sacraments, and sustained the faith and cultural identity of the Polish laborers she served. Her personal spiritual diary, preserved from before her arrest, reveals a woman of deep prayer life in which she explicitly offered her sufferings in mystical union with Christ’s Passion — what she described as carrying the Cross with Christ on behalf of her people.',
      'She was arrested by the Gestapo in March 1945 and transported to the Ravensbrück concentration camp. She was murdered in the gas chamber on April 1, 1945 — Easter Monday. She was beatified by Pope John Paul II on June 13, 1999, as one of the 108 Polish Martyrs of World War II. Her form of stigmata was entirely interior — the mystical bearing of suffering in union with Christ without any external physical mark — and she is included here as a witness to the full breadth of what the tradition of the stigmata encompasses: not merely physical wounds but total self-offering in union with the Passion.',
    ],
    churchRecognition:
      'Beatified by Pope John Paul II on June 13, 1999, as one of the 108 Polish Martyrs of World War II. Feast: June 12 (group feast of the Polish Martyrs of WWII). Venerated in the diocese of Poznań and throughout Poland.',
    significance:
      'Natalia Tułasiewicz expands the theology of stigmata to its fullest possible meaning: sharing in the death of Christ not through physical wounds but through total self-gift unto actual martyrdom. Placed alongside Francis of Assisi’s visible wounds, she defines the full range of mystical participation in the Passion — from flesh pierced on a mountaintop to life poured out in a concentration camp — both recognized by the Church as authentic conformity to the crucified Christ.',
  },
]

const filterOptions: { id: FilterType; label: string; count: (list: Stigmatist[]) => number }[] = [
  { id: 'all', label: 'All Stigmatists', count: (l) => l.length },
  { id: 'canonized', label: 'Canonized Saints', count: (l) => l.filter((s) => s.canonicalStatus === 'saint').length },
  { id: 'medieval', label: 'Medieval Era', count: (l) => l.filter((s) => s.era === 'medieval').length },
  {
    id: 'modern',
    label: 'Modern Era',
    count: (l) => l.filter((s) => s.era === 'early-modern' || s.era === 'modern').length,
  },
  {
    id: 'visible',
    label: 'Visible Wounds',
    count: (l) => l.filter((s) => s.stigmataType === 'visible' || s.stigmataType === 'both').length,
  },
]

const statusConfig: Record<CanonicalStatus, { label: string; color: string; icon: typeof Crown }> = {
  saint: { label: 'Canonized Saint', color: 'bg-amber-100 text-amber-800', icon: Crown },
  blessed: { label: 'Blessed', color: 'bg-blue-100 text-blue-800', icon: Star },
  venerable: { label: 'Venerable', color: 'bg-violet-100 text-violet-800', icon: Shield },
  'servant-of-god': { label: 'Servant of God', color: 'bg-gray-100 text-gray-700', icon: Heart },
}

const stigmataTypeConfig: Record<StigmataType, { label: string; color: string }> = {
  visible: { label: 'Visible Wounds', color: 'bg-red-100 text-red-800' },
  invisible: { label: 'Invisible / Mystical', color: 'bg-rose-50 text-rose-600' },
  both: { label: 'Visible Wounds', color: 'bg-red-100 text-red-800' },
}

export default function StigmataPage() {
  const [filter, setFilter] = useState<FilterType>('all')
  const [selectedId, setSelectedId] = useState<string | null>(null)

  const filteredStigmatists = stigmatists.filter((s) => {
    if (filter === 'canonized') return s.canonicalStatus === 'saint'
    if (filter === 'medieval') return s.era === 'medieval'
    if (filter === 'modern') return s.era === 'early-modern' || s.era === 'modern'
    if (filter === 'visible') return s.stigmataType === 'visible' || s.stigmataType === 'both'
    return true
  })

  const selectedStigmatist = stigmatists.find((s) => s.id === selectedId) ?? null

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
            style={{ backgroundColor: '#FFF1F2', color: '#BE123C' }}
          >
            <Flame className="w-4 h-4" />
            Mysteries of the Faith
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-gray-900 mb-4">
            Stigmata
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Throughout Christian history, certain souls have borne on their bodies the wounds
            of the crucified Christ — sharing in his Passion through a mystical union so
            profound that it left physical marks. The Apostle Paul declared, &ldquo;I bear on my
            body the marks of Jesus&rdquo; (Galatians 6:17). The Church recognizes this charism
            while subjecting every reported case to rigorous investigation.
          </p>
        </div>

        {/* Doctrinal anchor */}
        <div
          className="rounded-xl p-6 mb-6 border"
          style={{ backgroundColor: '#FFF1F2', borderColor: '#FECDD3' }}
        >
          <div className="flex items-start gap-3">
            <BookOpen className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#BE123C' }} />
            <div>
              <h2 className="font-semibold text-gray-900 mb-2">The Theological Meaning of Stigmata</h2>
              <p className="text-gray-700 text-sm leading-relaxed mb-2">
                Stigmata are not required for canonization, and the Church does not oblige Catholics to
                believe in any specific case. Many canonized saints bore no stigmata; many stigmatists have
                not been canonized. Invisible stigmata — mystical suffering without external wounds — are
                far more commonly attested than visible ones. The Church requires strict investigation before
                recognizing any stigmata as supernatural, and medical examinations form part of the modern
                beatification process.
              </p>
              <p className="text-gray-700 text-sm leading-relaxed mb-2">
                The scriptural foundation is St. Paul: &ldquo;I bear on my body the <em>stigmata</em> of Jesus&rdquo;
                (Galatians 6:17) and &ldquo;I rejoice in my sufferings for your sake, and in my flesh I am filling
                up what is lacking in the afflictions of Christ on behalf of his body, which is the Church&rdquo;
                (Colossians 1:24). St. Paul does not refer to physical wounds in the Galatians passage —
                he refers to the marks of persecution — but the Church has read both texts as pointing toward
                the theological possibility of mystical conformity to the crucified Christ.
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                The Catechism teaches that Christ &ldquo;heals the whole man&rdquo; and that his compassion
                &ldquo;shares in every infirmity&rdquo; (CCC 1505). The stigmata, in Catholic theology, are understood
                as a charism of conformity to Christ crucified — a participation in the Paschal Mystery so
                complete that the body itself becomes a sign of the Passion. They are not punishments or
                pathologies but, when authentic, expressions of the highest union with Christ in his self-offering.
              </p>
            </div>
          </div>
        </div>

        {/* Stat strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          <div className="bg-white rounded-xl border border-gray-200 p-5 text-center">
            <div
              className="inline-flex items-center justify-center w-10 h-10 rounded-full mb-3"
              style={{ backgroundColor: '#FFF1F2' }}
            >
              <Users className="w-5 h-5" style={{ color: '#BE123C' }} />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">350+</div>
            <div className="text-sm text-gray-600">Documented cases in Church history</div>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-5 text-center">
            <div
              className="inline-flex items-center justify-center w-10 h-10 rounded-full mb-3"
              style={{ backgroundColor: '#FFF1F2' }}
            >
              <Cross className="w-5 h-5" style={{ color: '#BE123C' }} />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">1224</div>
            <div className="text-sm text-gray-600">First documented case — St. Francis, La Verna</div>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-5 text-center">
            <div
              className="inline-flex items-center justify-center w-10 h-10 rounded-full mb-3"
              style={{ backgroundColor: '#FFF1F2' }}
            >
              <Calendar className="w-5 h-5" style={{ color: '#BE123C' }} />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">50 years</div>
            <div className="text-sm text-gray-600">Longest duration — Padre Pio (1918–1968)</div>
          </div>
        </div>

        {/* Stigmatists catalog */}
        <div className="mb-14">
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-5">Documented Stigmatists</h2>

          {/* Filter bar */}
          <div className="flex flex-wrap gap-2 mb-6">
            {filterOptions.map((opt) => (
              <button
                key={opt.id}
                onClick={() => {
                  setFilter(opt.id)
                  setSelectedId(null)
                }}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors border ${
                  filter === opt.id
                    ? 'text-white border-rose-700'
                    : 'bg-white text-gray-600 border-gray-200 hover:border-rose-300 hover:text-rose-800'
                }`}
                style={filter === opt.id ? { backgroundColor: '#BE123C', borderColor: '#BE123C' } : {}}
              >
                {opt.label}
                <span
                  className={`ml-1.5 text-xs px-1.5 py-0.5 rounded-full ${
                    filter === opt.id ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'
                  }`}
                >
                  {opt.count(stigmatists)}
                </span>
              </button>
            ))}
          </div>

          {/* Cards grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {filteredStigmatists.map((stigmatist) => {
              const StatusIcon = statusConfig[stigmatist.canonicalStatus].icon
              const isSelected = selectedId === stigmatist.id
              return (
                <button
                  key={stigmatist.id}
                  onClick={() => handleCardClick(stigmatist.id)}
                  className={`text-left rounded-xl border p-5 transition-all hover:shadow-md ${
                    isSelected
                      ? 'shadow-md'
                      : 'border-gray-200 bg-white hover:border-rose-200'
                  }`}
                  style={
                    isSelected
                      ? { borderColor: '#E11D48', backgroundColor: '#FFF1F2' }
                      : {}
                  }
                >
                  {/* Card header */}
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-serif text-lg font-semibold text-gray-900 leading-tight">
                        {stigmatist.name}
                      </h3>
                      <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                        <MapPin className="w-3 h-3" />
                        <span>{stigmatist.country}</span>
                        <span className="mx-1">&middot;</span>
                        <Calendar className="w-3 h-3" />
                        <span>{stigmatist.dates}</span>
                      </div>
                    </div>
                    {(stigmatist.stigmataType === 'visible' || stigmatist.stigmataType === 'both') && (
                      <div
                        className="flex-shrink-0 p-1.5 rounded-lg"
                        style={{ backgroundColor: '#FFF1F2' }}
                      >
                        <Eye className="w-4 h-4" style={{ color: '#BE123C' }} />
                      </div>
                    )}
                  </div>

                  <p className="text-sm text-gray-600 leading-relaxed mb-3 line-clamp-3">
                    {stigmatist.summary}
                  </p>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    <span
                      className={`inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full font-medium ${statusConfig[stigmatist.canonicalStatus].color}`}
                    >
                      <StatusIcon className="w-3 h-3" />
                      {statusConfig[stigmatist.canonicalStatus].label}
                    </span>
                    <span
                      className={`inline-flex items-center text-xs px-2 py-0.5 rounded-full font-medium ${stigmataTypeConfig[stigmatist.stigmataType].color}`}
                    >
                      {stigmataTypeConfig[stigmatist.stigmataType].label}
                    </span>
                  </div>

                  <div
                    className="flex items-center gap-1 text-xs font-medium mt-1"
                    style={{ color: '#BE123C' }}
                  >
                    <Search className="w-3 h-3" />
                    View details
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        {/* Scientific study section */}
        <div className="mb-14">
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-2">
            Scientific Study of Stigmata
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Modern medicine has examined several stigmatic cases under controlled conditions.
            The findings resist easy categorization — neither vindicating every claimed case
            nor successfully explaining away the most thoroughly documented ones.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Left: what examiners found */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <Microscope className="w-4 h-4 text-rose-600" />
                What Medical Examiners Have Found
              </h3>
              <ul className="text-sm text-gray-600 leading-relaxed space-y-2">
                <li className="flex gap-2">
                  <CheckCircle className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" />
                  <span>
                    Wounds located on palms (the iconographic tradition) rather than wrists
                    (the anatomically correct crucifixion site) — suggesting a mental image
                    of the crucifixion, not a biological mechanism, drives the placement.
                  </span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" />
                  <span>
                    Wounds appear and heal on precise schedules — weekly cycles in Gemma Galgani
                    and Catherine de’ Ricci — without the progressive scarring or infection
                    associated with repeated wounds of natural origin.
                  </span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" />
                  <span>
                    In the case of Padre Pio, estimated daily blood loss from the side wound alone
                    was clinically significant; no anemia or progressive physical deterioration
                    consistent with such blood loss was observed over 50 years.
                  </span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" />
                  <span>
                    At Padre Pio’s death, the wounds healed completely, leaving skin with
                    no scarring — a rate and completeness of healing described by attending
                    physicians as without medical precedent.
                  </span>
                </li>
              </ul>
            </div>

            {/* Right: the controversy */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <Shield className="w-4 h-4 text-gray-500" />
                The Controversy and Skeptical Explanations
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                Skeptical explanations include psychosomatic hypothesis (extreme religious focus
                producing physical symptoms via unconscious autosuggestion), deliberate self-infliction,
                and dermatographic urticaria (a condition in which skin reacts to pressure with raised
                marks). Each explanation applies plausibly to some reported cases and fails to account
                for others.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                The psychosomatic hypothesis is the most taken seriously by mainstream medicine and
                is not incompatible with Catholic theology in principle — the Church does not require
                that stigmata be non-psychosomatic to be spiritually authentic. However, purely
                psychosomatic processes do not explain wounds that heal without scarring on a precise
                schedule, nor wounds that persist unchanged for 50 years.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Padre Pio’s case is the hardest to explain within any existing framework:
                50 years duration, documentation by an agnostic physician (Bignami) who sought
                disconfirmation, estimated 500cc daily blood loss without medical consequence,
                and complete scarless healing at death — each feature alone is unusual; all four
                in combination have no natural parallel in the medical literature.
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
              Catechism of the Catholic Church, §§618 (conformity to Christ crucified),
              1505 (compassion for suffering), 1521 (participation in the Passion)
            </li>
            <li>
              Galatians 6:17 (Paul on the marks/stigmata of Jesus); Colossians 1:24
              (filling up what is lacking in Christ’s sufferings)
            </li>
            <li>
              Thurston, Herbert, SJ. <em>The Physical Phenomena of Mysticism</em>. Burns Oates, 1952.
              (Standard Jesuit scholarly study; rigorous and often skeptical, the authoritative
              Catholic reference on the physical phenomena including stigmata)
            </li>
            <li>
              Cruz, Joan Carroll.{' '}
              <em>Mysteries, Marvels, Miracles in the Lives of the Saints</em>.
              TAN Books, 1997. (Popular Catholic survey with extensive documentation)
            </li>
            <li>
              Thomas of Celano. <em>Vita Prima Sancti Francisci</em> (1228) and{' '}
              <em>Vita Secunda</em> (1247). Primary source on Francis of Assisi’s stigmata.
            </li>
            <li>
              Bonaventure, St. <em>Legenda Major Sancti Francisci</em> (1263). Definitive
              theological treatment of Francis’s stigmata.
            </li>
            <li>
              Romanelli, Luigi. Medical Report on Padre Pio’s Stigmata (1919), submitted
              to the Archbishop of Manfredonia. Published in Padre Pio da Pietrelcina’s
              cause documentation, Congregation for the Causes of Saints.
            </li>
            <li>
              Bignami, Amico (Prof., University of Rome). Medical Report on Padre Pio (1920).
              Submitted to the Vatican; a skeptical agnostic examiner’s findings.
            </li>
            <li>
              Von Drüffel, Franz Wilhelm. Medical Report on Anne Catherine Emmerich (1813),
              commissioned by the regional civil authorities of Westphalia. Prussian government
              follow-up commission (1819).
            </li>
            <li>
              Bishop Michael Buchberger (Diocese of Regensburg). Report on the 14-day supervised
              medical observation of Therese Neumann, 1927.
            </li>
            <li>
              Raymond of Capua, Bl. <em>Legenda Maior</em> (Life of Catherine of Siena), c. 1395.
              Primary source on Catherine’s stigmata and its invisible character.
            </li>
            <li>
              Individual canonization decrees and postulators’ reports, Congregation for the
              Causes of Saints, Vatican City.
            </li>
          </ul>
        </div>

      </div>

      {/* Modal overlay */}
      {selectedStigmatist && (
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
              style={{ backgroundColor: '#FFF1F2', borderColor: '#FECDD3' }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-1.5">
                    <span
                      className={`inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full font-medium ${statusConfig[selectedStigmatist.canonicalStatus].color}`}
                    >
                      {(() => {
                        const Icon = statusConfig[selectedStigmatist.canonicalStatus].icon
                        return <Icon className="w-3 h-3" />
                      })()}
                      {statusConfig[selectedStigmatist.canonicalStatus].label}
                    </span>
                    <span
                      className={`inline-flex items-center text-xs px-2 py-0.5 rounded-full font-medium ${stigmataTypeConfig[selectedStigmatist.stigmataType].color}`}
                    >
                      {stigmataTypeConfig[selectedStigmatist.stigmataType].label}
                    </span>
                    <span className="inline-flex items-center text-xs px-2 py-0.5 rounded-full font-medium bg-gray-100 text-gray-600">
                      {selectedStigmatist.era === 'medieval'
                        ? 'Medieval'
                        : selectedStigmatist.era === 'early-modern'
                        ? 'Early Modern'
                        : 'Modern'}
                    </span>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-gray-900 mb-1">
                    {selectedStigmatist.name}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {selectedStigmatist.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {selectedStigmatist.dates}
                    </span>
                    <span className="flex items-center gap-1">
                      <Church className="w-3.5 h-3.5" />
                      {selectedStigmatist.religiousOrder}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedId(null)}
                  className="p-2 rounded-xl hover:bg-rose-100 text-gray-500 hover:text-gray-800 transition-colors flex-shrink-0"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal body */}
            <div className="p-5 sm:p-6 bg-white grid md:grid-cols-2 gap-8">
              {/* Left: life and wounds */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Scroll className="w-4 h-4 text-rose-600" />
                  Life &amp; Mystical Gifts
                </h4>
                {selectedStigmatist.description.map((para, i) => (
                  <p key={i} className="text-gray-700 text-sm leading-relaxed mb-3">
                    {para}
                  </p>
                ))}

                <h4 className="font-semibold text-gray-900 mb-3 mt-5 flex items-center gap-2">
                  <Cross className="w-4 h-4 text-rose-600" />
                  The Nature of the Wounds
                </h4>
                <ul className="text-sm text-gray-700 space-y-1 mb-3">
                  {selectedStigmatist.wounds.map((wound, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-0.5"
                        style={{ backgroundColor: '#BE123C' }}
                      />
                      {wound}
                    </li>
                  ))}
                </ul>

                {selectedStigmatist.medicalNote && (
                  <div
                    className="rounded-lg border p-4 mt-4"
                    style={{ backgroundColor: '#FFF1F2', borderColor: '#FECDD3' }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Microscope className="w-4 h-4" style={{ color: '#BE123C' }} />
                      <span className="font-medium text-sm text-gray-900">Medical Observations</span>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {selectedStigmatist.medicalNote}
                    </p>
                  </div>
                )}
              </div>

              {/* Right: recognition and significance */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Church className="w-4 h-4 text-rose-600" />
                  Church Recognition
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed mb-6">
                  {selectedStigmatist.churchRecognition}
                </p>

                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Star className="w-4 h-4 text-rose-600" />
                  Theological Significance
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {selectedStigmatist.significance}
                </p>
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
