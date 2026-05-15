'use client'

import { useState } from 'react'
import {
  Star,
  Shield,
  Heart,
  BookOpen,
  Church,
  CheckCircle,
  X,
  Search,
  Scroll,
  Users,
  Flame,
  Crown,
  Eye,
  MapPin,
  Calendar,
} from 'lucide-react'

type FilterType = 'all' | 'medieval' | 'modern' | 'female' | 'religious'
type CorruptionStatus = 'fully-incorrupt' | 'partially-preserved' | 'mummified-naturally'

interface IncorruptibleSaint {
  id: string
  name: string
  dates: string
  died: number
  location: string
  country: string
  religiousOrder: string
  gender: 'male' | 'female'
  era: 'ancient' | 'medieval' | 'early-modern' | 'modern'
  status: CorruptionStatus
  statusLabel: string
  canonicalStatus: string
  summary: string
  description: string[]
  condition: string
  churchNote: string
  significance: string
}

const saints: IncorruptibleSaint[] = [
  {
    id: 'francis-xavier',
    name: 'St. Francis Xavier',
    dates: '1506–1552',
    died: 1552,
    location: 'Basilica of Bom Jesus, Goa, India',
    country: 'India (died)',
    religiousOrder: 'Jesuit',
    gender: 'male',
    era: 'early-modern',
    status: 'fully-incorrupt',
    statusLabel: 'Fully Incorrupt',
    canonicalStatus: 'Saint, Doctor of the Church (Eastern missions)',
    summary:
      'After dying on the island of Shangchuan off the Chinese coast in 1552, his body — buried in lime — was exhumed months later perfectly intact. Transported to Goa in 1553, physicians confirmed no preservatives. Over 470 years of public veneration. Feast: December 3.',
    description: [
      'Francis Xavier, co-founder of the Society of Jesus with St. Ignatius of Loyola, was the greatest missionary of the post-Reformation era — baptizing an estimated 30,000 people across India, Malacca, Japan, and the islands of Southeast Asia. He died on the island of Shangchuan, off the southern coast of China, on December 3, 1552, waiting for passage to the mainland.',
      'His body was packed in lime to hasten decomposition so the bones could be transported. When exhumed several months later — first in Malacca, February 1553 — the body was found completely intact, the lime having had no effect. Physicians who examined the body in Goa in 1554 formally attested that no embalming or preservatives had been used and that the state of preservation was inexplicable. The body\'s condition was described as fresh and lifelike.',
      'By the request of St. Ignatius of Loyola himself, the right forearm was severed and sent to Rome, where it is venerated in the Church of the Gesù to this day. The body has remained in Goa\'s Basilica of Bom Jesus — the most visited pilgrimage church in Asia — since 1554, displayed in a silver reliquary casket elevated above the main altar. It is exposed for public veneration at the Feast of St. Francis Xavier and on special occasions.',
    ],
    condition:
      'The body has darkened with time and some desiccation is apparent after four and a half centuries, but its extraordinary preservation — given the tropical climate of Goa and the lack of any treatment — remains medically remarkable. The right forearm is absent (in Rome). The body remains elevated in a jeweled reliquary in the Basilica of Bom Jesus.',
    churchNote:
      'The incorruption of St. Francis Xavier was formally noted in his beatification proceedings (1619) and canonization (1622, by Pope Gregory XV). It is among the most historically documented cases, attested by physician testimony from multiple points across the 16th century.',
    significance:
      'Francis Xavier is the patron of the Missions, of Goa, of India, of Japan, and of Navarre. His body in Goa has drawn pilgrims from across Asia for nearly five centuries. The juxtaposition of lime burial — intended for rapid decomposition — and the resulting perfect preservation gives this case unusual evidentiary weight among early-modern incorruptions.',
  },
  {
    id: 'bernadette-soubirous',
    name: 'St. Bernadette Soubirous',
    dates: '1844–1879',
    died: 1879,
    location: 'Chapel of Saint-Gildard, Nevers, France',
    country: 'France',
    religiousOrder: 'Sisters of Charity of Nevers',
    gender: 'female',
    era: 'modern',
    status: 'fully-incorrupt',
    statusLabel: 'Fully Incorrupt',
    canonicalStatus: 'Saint',
    summary:
      'The visionary of Lourdes underwent three official exhumations (1909, 1919, 1925), each documenting extraordinary preservation. Her body lies in a glass reliquary in Nevers, the most visited incorruptible in the world. Feast: April 16.',
    description: [
      'Bernadette Soubirous received 18 apparitions of the Blessed Virgin Mary at Massabielle, Lourdes, between February 11 and July 16, 1858. She entered the Sisters of Charity of Nevers in 1866 and spent the rest of her life at the mother house in Nevers, France, where she died of tuberculosis and bone disease on April 16, 1879, aged 35. She had suffered greatly throughout her religious life and was largely unknown to the wider public, deliberately kept from the pilgrimage trade at Lourdes.',
      'The first canonical exhumation took place on September 22, 1909 — thirty years after death. The commission found the body perfectly incorrupt: face recognizable, limbs flexible, religious habit largely intact. A second exhumation on April 3, 1919 found the body still remarkably preserved; the attending physician and surgeon formally documented their observations. A third exhumation on April 18, 1925 was conducted in preparation for beatification: the same findings were recorded.',
      'In 1925 the Church noted that the face and hands had darkened slightly from the previous examinations (exposure to air) and a light wax covering was applied to the face and hands by the Sisters of Charity — standard preservation practice. The body itself beneath the wax is described in medical records as intact. Bernadette was beatified in 1925 and canonized by Pope Pius XI in 1933. Her body now lies in a crystal reliquary in the gilded chapel of Saint-Gildard convent in Nevers.',
    ],
    condition:
      'The body lies in a glass-sided reliquary in the Chapel of Saint-Gildard in Nevers. The face and hands carry the light wax covering applied in 1925. Medical documentation from all three exhumations (1909, 1919, 1925) attests to the extraordinary condition of the body throughout. The reliquary is open to visitors and pilgrims year-round.',
    churchNote:
      'Bernadette\'s incorruption was noted in all three canonical exhumations and formed part of the beatification dossier. The Church formally presented it as one of the signs examined during the cause for her beatification and canonization. It is the most thoroughly documented modern case, with multiple physician reports across three separate examinations.',
    significance:
      'Bernadette is the most famous incorruptible in the Catholic world. The combination of her role as seer of the approved Marian apparitions of Lourdes, her long hidden suffering in Nevers, and the triple-witnessed incorruption makes her body one of the most visited Catholic relics in the world — second only perhaps to St. Francis Xavier\'s in Goa. She herself said: "I am afraid of anyone who looks at me."',
  },
  {
    id: 'catherine-of-siena',
    name: 'St. Catherine of Siena',
    dates: '1347–1380',
    died: 1380,
    location: 'Church of Santa Maria sopra Minerva, Rome (body); Cathedral of Siena (head)',
    country: 'Italy',
    religiousOrder: 'Dominican',
    gender: 'female',
    era: 'medieval',
    status: 'partially-preserved',
    statusLabel: 'Partially Preserved',
    canonicalStatus: 'Saint, Doctor of the Church, Co-Patroness of Europe',
    summary:
      'Dominican tertiary, mystic, and Doctor of the Church whose body was examined as incorrupt at multiple points after her death. Her head was translated to Siena — a common medieval relic practice. She bore the invisible stigmata and persuaded Pope Gregory XI to return to Rome. Feast: April 29.',
    description: [
      'Catherine Benincasa of Siena entered the Dominican Third Order (Mantellate) as a young woman and spent years in intense contemplative life before emerging into remarkable public activity. She received the stigmata invisibly (the wounds were invisible during her life but appeared after death, according to hagiographic accounts). She dictated the Dialogue of Divine Providence, one of the great mystical classics of the 14th century, and her letters to popes and rulers are still studied as models of spiritual directness and courage.',
      'Catherine persuaded Pope Gregory XI to end the Avignon papacy and return to Rome in 1377 — a geopolitical and ecclesiastical achievement of the first order. She died in Rome on April 29, 1380, exhausted by her fasting and mystical sufferings, aged 33. Her body was retained in Rome and venerated at the Church of Santa Maria sopra Minerva, the Dominican church beside the Pantheon.',
      'In the medieval practice of distributing major relics, her head was translated to Siena in 1384 — a procession that the citizens of Siena received with great veneration. It remains in a reliquary in the Basilica of San Domenico. St. Agnes of Montepulciano, herself later incorrupt, reportedly touched Catherine\'s foot and experienced a mystical vision. The body has been examined at various points and noted as remarkably preserved, though some deterioration has occurred over six and a half centuries.',
    ],
    condition:
      'The body lies in a reliquary beneath the main altar of the Church of Santa Maria sopra Minerva in Rome. The head is separately enshrined in a gilded reliquary in the Basilica of San Domenico in Siena, where it has been venerated for over 640 years. The thumb is at the Castello dell\'Anguillara in Venice. Her right foot is also in Siena.',
    churchNote:
      'Catherine was canonized by Pope Pius II in 1461, declared a Doctor of the Church by Pope Paul VI in 1970 (one of the first two women so named, along with St. Teresa of Avila), and declared Co-Patroness of Europe by Pope John Paul II in 1999. Her incorruption is noted in the traditional hagiographic record but is secondary to her doctrinal and ecclesial significance.',
    significance:
      'Catherine of Siena stands among the most consequential women in Church history — not only a mystic and ascetic but a political theologian whose letters shaped papal policy. Her incorruption is the least striking of the signs associated with her; the more remarkable claim is the invisible stigmata. That her body was venerated in Rome while her head was honored in Siena reflects the medieval theology of relics: the saint is multiply present, her physical remains distributed as gifts to the Church.',
  },
  {
    id: 'john-vianney',
    name: 'St. John Vianney',
    dates: '1786–1859',
    died: 1859,
    location: 'Basilica of Ars-sur-Formans, France',
    country: 'France',
    religiousOrder: 'Diocesan priest',
    gender: 'male',
    era: 'modern',
    status: 'fully-incorrupt',
    statusLabel: 'Fully Incorrupt',
    canonicalStatus: 'Saint, Patron of Parish Priests',
    summary:
      'The Curé of Ars, who heard confessions up to 18 hours a day and drew 80,000 pilgrims annually to a village of 230 souls, was found perfectly incorrupt upon exhumation in 1904. He lies in a glass reliquary at the Basilica of Ars. Feast: August 4.',
    description: [
      'Jean-Marie Vianney was appointed parish priest of the tiny village of Ars-sur-Formans in 1818 — a posting considered so obscure and unimportant it was given to a priest who had struggled to pass his theology examinations. Within a decade, his reputation for holiness, his gift of reading hearts in the confessional, and his preaching had drawn thousands to Ars. By the late 1820s, 80,000 pilgrims a year were coming to Ars — a village of 230 people — to make their confession to John Vianney.',
      'He slept as little as two hours a night, ate almost nothing, and spent up to 18 hours a day in the confessional. He reportedly suffered nightly physical attacks by what he called "le Grappin" — the devil. He tried to flee Ars three times, believing himself unworthy; each time, the people of Ars brought him back. He died on August 4, 1859, after 41 years of unbroken priestly service in the same village.',
      'His body was exhumed on January 26, 1904 for the beatification process — 45 years after death. The examining commission found the body in a remarkable state of preservation. He was beatified by Pope Pius X in 1905 and canonized in 1925. In 1929, Pope Pius XI declared him patron of all parish priests worldwide. His body now lies in a glass-sided reliquary elevated above the side altar of the Basilica of Ars, which draws hundreds of thousands of pilgrims annually.',
    ],
    condition:
      'The body lies in a golden reliquary within a larger glass-sided shrine in the Basilica of Ars-sur-Formans. It has darkened with age but retains its form. The face is covered with a wax mask. The basilica was built to accommodate the flood of pilgrims that has continued since the Curé\'s lifetime. The heart of St. John Vianney is separately enshrined at the Shrine of Ars.',
    churchNote:
      'John Vianney\'s incorruption was examined during his beatification process (1904) and formally noted in the cause. He is the universal patron of parish priests, a title given by Pope Pius XI. The 2009 Year for Priests declared by Pope Benedict XVI placed John Vianney at its center, with his incorrupt body exposed for the special veneration of priests worldwide.',
    significance:
      'No other saint so vividly demonstrates the Catholic theology of the priesthood as an instrument of mercy. The Curé of Ars was, by every external measure, an ordinary and even limited man. Yet his confessional became a fountain of grace for tens of thousands. His incorruption, discovered after 45 years of interment, stands alongside his life\'s witness as a sign that God\'s power is perfected in weakness — as St. Paul writes in 2 Corinthians 12:9.',
  },
  {
    id: 'rita-of-cascia',
    name: 'St. Rita of Cascia',
    dates: '1381–1457',
    died: 1457,
    location: 'Basilica of St. Rita, Cascia, Italy',
    country: 'Italy',
    religiousOrder: 'Augustinian',
    gender: 'female',
    era: 'medieval',
    status: 'fully-incorrupt',
    statusLabel: 'Fully Incorrupt',
    canonicalStatus: 'Saint, Patroness of Impossible Causes',
    summary:
      'Widow, mystic, and Augustinian nun who bore the stigmata of the Crown of Thorns in her forehead. Her body has remained intact since 1457 — nearly 570 years — elevated in a glass reliquary in her basilica in Cascia. Feast: May 22.',
    description: [
      'Rita Lotti was born to elderly parents who considered her birth a miracle. After the deaths of her husband and two sons (she had prayed that her sons would die rather than commit vengeance murders), she sought entry to the Augustinian monastery at Cascia. Refused three times because she was not a virgin, she was reportedly transported miraculously inside the walls of the monastery one night — accepted thereafter by the community as a sign of divine will.',
      'She lived the remaining 40 years of her life in Cascia as an Augustinian nun of exceptional ascetical rigor. In 1432, meditating on the Crown of Thorns, she asked to share in Christ\'s suffering. A wound appeared in her forehead as if from a thorn and remained open, bleeding, and malodorous — except when Rita requested it to close for a journey to Rome for the canonization of St. Nicholas of Tolentino, at which point it closed and did not reopen until her return.',
      'She died on May 22, 1457. Almost immediately the wound in her forehead disappeared and was replaced by a scar. Her body was laid out for public veneration and was found to fill the convent and surrounding area with a sweet fragrance — the odor of sanctity reported by witnesses. The body was never treated or embalmed. Nearly 570 years later, it remains intact and is elevated in a glass reliquary in the basilica dedicated to her in Cascia. She was canonized by Pope Leo XIII in 1900.',
    ],
    condition:
      'Rita\'s body lies in a glass-sided golden casket elevated above the main altar of the Basilica of St. Rita in Cascia, Umbria. It has darkened considerably over the centuries but retains its form. The scar in the forehead from the thorn-wound is said to be visible. The basilica was built in the 20th century; prior to that she had been venerated in the original Augustinian church.',
    churchNote:
      'Rita\'s cause for canonization was introduced in the 17th century. She was beatified in 1628 and canonized on May 24, 1900 by Pope Leo XIII. The incorruption of her body, maintained for over five centuries without any treatment in the damp climate of Umbria, was noted in the canonization dossier. She is the patroness of impossible and desperate causes.',
    significance:
      'Rita of Cascia represents the "hidden" holiness of Catholic tradition — a widow, a lay woman forced by grief into the cloister, bearing the stigmata invisibly for decades. Her nearly 570-year incorruption is among the longest-maintained documented cases in Catholic history, and it continues unbroken. The faithful of Cascia have never left her body unvenerated.',
  },
  {
    id: 'clare-of-assisi',
    name: 'St. Clare of Assisi',
    dates: '1194–1253',
    died: 1253,
    location: 'Basilica of Santa Chiara, Assisi, Italy',
    country: 'Italy',
    religiousOrder: 'Franciscan (Poor Clares)',
    gender: 'female',
    era: 'medieval',
    status: 'partially-preserved',
    statusLabel: 'Partially Preserved',
    canonicalStatus: 'Saint',
    summary:
      'Co-founder of the Order of Poor Ladies with St. Francis of Assisi. Her body was found intact when exhumed for canonization proceedings. Now venerated in the crypt of her basilica in Assisi. Canonized 1255 by Pope Alexander IV — just two years after death. Feast: August 11.',
    description: [
      'Clare of Assisi was born to noble parents and fled her home at 18 to join Francis of Assisi, who received her vows personally at the Portiuncula in 1212. She founded the Order of Poor Ladies — later called the Poor Clares — at San Damiano in Assisi, where she served as abbess for 40 years without ever leaving the monastery. She lived a life of absolute poverty, insisted on the right of her community to possess nothing in common — the "privilege of poverty" — and received papal approval for this unique rule.',
      'She twice reportedly repelled attacks on the monastery by prostrating herself before the Blessed Sacrament and praying. She bore illness for the last 28 years of her life. She died on August 11, 1253. Two days before her death, Pope Innocent IV came personally to San Damiano to give her his papal blessing — a remarkable gesture toward a dying woman.',
      'She was canonized by Pope Alexander IV just two years later, in 1255 — one of the fastest canonizations in history. Her body, found intact at exhumation, was transferred to the Basilica of Santa Chiara built in her honor in Assisi. She now lies in the crypt beneath the church. Some deterioration has occurred over eight centuries, but significant preservation has been noted across the centuries of veneration.',
    ],
    condition:
      'Clare\'s body lies in a glass-sided casket in the crypt of the Basilica of Santa Chiara in Assisi. The remains have experienced some natural change over eight centuries but retain visible form. The basilica is a major Franciscan pilgrimage site, drawing hundreds of thousands of visitors annually.',
    churchNote:
      'Clare was canonized in 1255, just two years after death — an exceptionally rapid process even by medieval standards. Her incorruption was noted in the early hagiographic record. She was declared the patron of television by Pope Pius XII in 1958 — because she reportedly witnessed the Christmas Midnight Mass at the Basilica of St. Francis in a vision while she was too ill to attend, an event understood as a forerunner of visual transmission.',
    significance:
      'Clare represents the feminine dimension of the Franciscan charism. Her 40-year insistence on absolute poverty — against papal resistance — established one of the most radical poverty rules in the history of religious life. Her incorruption is one of the earliest medieval cases with continuous documented veneration, maintained in Assisi from 1253 to the present day.',
  },
  {
    id: 'margaret-of-castello',
    name: 'Bl. Margaret of Castello',
    dates: '1287–1320',
    died: 1320,
    location: 'Church of St. Dominic, Città di Castello, Italy',
    country: 'Italy',
    religiousOrder: 'Dominican Tertiary',
    gender: 'female',
    era: 'medieval',
    status: 'fully-incorrupt',
    statusLabel: 'Fully Incorrupt',
    canonicalStatus: 'Blessed',
    summary:
      'Born blind, lame, hunchbacked, and dwarfed — and abandoned by her noble parents — Margaret lived among the poor of Città di Castello. Three miracles were reported at her funeral. Her body was found incorrupt and has been venerated since 1320. Beatification confirmed by Pope John Paul II in 1988. Feast: April 13.',
    description: [
      'Margaret was born in 1287 to the noble Metola family of Mercatello, Italy, severely disabled: blind, lame, hunchbacked, and of stunted growth. Her parents, ashamed of her deformity, imprisoned her in a cell attached to a chapel near Città di Castello for several years. When she was not miraculously cured at a local shrine, they abandoned her in the streets of Città di Castello — a town where she was a stranger.',
      'The poor of Città di Castello took her in, passing her from family to family. She became a Dominican tertiary (Mantellate) and spent her short life in prayer, caring for prisoners and the sick, and instructing children. She was known for remarkable mystical experiences including ecstasies during which she levitated. She died on April 13, 1320, aged 33.',
      'Three miracles were reported at her funeral on the day of her death. The people of Città di Castello — recognizing her holiness — demanded that she be buried in the Church of St. Dominic, where she has been venerated ever since. Her body was found incorrupt upon exhumation. She was beatified in 1609; her beatification was formally confirmed and renewed by Pope John Paul II on October 19, 1988, in connection with his apostolic letter on the dignity of disabled persons.',
    ],
    condition:
      'Margaret\'s incorrupt body is enshrined in the Church of St. Dominic (now the Shrine of Blessed Margaret) in Città di Castello, Umbria. It has been venerated continuously since 1320 — over 700 years. The physical disabilities noted at birth are reportedly visible on the preserved body. A series of miracles continues to be reported at the shrine.',
    churchNote:
      'Margaret\'s cause was introduced shortly after her death. She was beatified in 1609. Pope John Paul II\'s 1988 confirmation of her beatification was accompanied by his reflection on the dignity of disabled persons — Margaret having been abandoned precisely because of her disabilities. She is invoked by those with disabilities and by those seeking physical healing.',
    significance:
      'Margaret of Castello is one of the most spiritually striking incorruptibles precisely because she was abandoned by those who should have cherished her most. Her life is a testimony to the reversal at the heart of the Gospel: "the stone the builders rejected has become the cornerstone" (Psalm 118:22). Her body — disabled in life and perfect in preservation — has been more persistently sought by pilgrims than that of any of her noble contemporaries.',
  },
  {
    id: 'agnes-of-montepulciano',
    name: 'St. Agnes of Montepulciano',
    dates: '1268–1317',
    died: 1317,
    location: 'Church of St. Agnes, Montepulciano, Italy',
    country: 'Italy',
    religiousOrder: 'Dominican',
    gender: 'female',
    era: 'medieval',
    status: 'partially-preserved',
    statusLabel: 'Partially Preserved',
    canonicalStatus: 'Saint',
    summary:
      'Dominican mystic and prioress who levitated during prayer and received mystical gifts. Her body was examined by St. Catherine of Siena, who reportedly experienced a vision upon touching her foot. Canonized by Pope Benedict XIII in 1726. Feast: April 20.',
    description: [
      'Agnes of Montepulciano entered religious life at the age of nine, already remarkable for fasting and prayer. She became the youngest woman ever to receive a papal rescript to govern a monastery, founding a new Dominican community in Montepulciano at the age of twenty. She was known throughout central Tuscany for mystical gifts: levitation during prayer, bilocation, and the ability to read hearts.',
      'She was also associated with a remarkable physical phenomenon during her life: manna — a sweet, white substance — reportedly fell from the air upon her and her community during prayer. She received the Eucharist as her primary and at times sole nourishment during extended periods of illness. She bore stigmata-like sufferings and died on April 20, 1317, after years of illness and mystical suffering.',
      'Her body was enshrined in Montepulciano and venerated for decades. In 1374 — fifty-four years after Agnes\'s death — St. Catherine of Siena made a pilgrimage to Montepulciano to venerate the body. Contemporary accounts record that when Catherine bent to kiss the foot of Agnes, the foot moved upward to meet her lips, and Catherine entered an ecstasy in which she received a spiritual vision. This encounter between two Dominican mystics, separated by death but joined in mystical experience, is one of the most remarkable episodes in medieval hagiography.',
    ],
    condition:
      'Agnes\'s body has been venerated in Montepulciano for over 700 years. The remains are partially preserved — significant deterioration over seven centuries is documented, but the body has been maintained with exceptional devotion. The Church of St. Agnes in Montepulciano preserves the shrine where she has been venerated since 1317.',
    churchNote:
      'Agnes was beatified by Pope Urban VIII in 1726 — he is sometimes given as 1724 — and formally canonized by Pope Benedict XIII in 1726. Her cause was advanced in part because of the testimony to her holiness provided by St. Catherine of Siena\'s own account of the visit to her shrine. The two Dominican mystics are liturgically linked: their feast days fall one week apart in April.',
    significance:
      'Agnes of Montepulciano demonstrates the layered holiness of the medieval Dominican tradition — mysticism, leadership, asceticism, and prophetic vision combined in a woman who entered religious life at nine and led a community at twenty. Her connection to Catherine of Siena through the episode of the moving foot creates a remarkable bridge between two of the greatest female mystics of the 14th century.',
  },
  {
    id: 'andrew-bobola',
    name: 'St. Andrew Bobola',
    dates: '1591–1657',
    died: 1657,
    location: "Church of the Gesù, Rome (relics); formerly Pinsk, Belarus",
    country: 'Poland (martyred in Janów Poleski)',
    religiousOrder: 'Jesuit',
    gender: 'male',
    era: 'early-modern',
    status: 'fully-incorrupt',
    statusLabel: 'Fully Incorrupt',
    canonicalStatus: 'Saint, Martyr',
    summary:
      'Jesuit martyr brutally tortured and killed by Cossacks in 1657 — burned, flayed, and mutilated. His body was found in a pit 40 years later remarkably preserved despite the manner of death. No natural explanation for the preservation was offered. Canonized 1938. Feast: May 16.',
    description: [
      'Andrew Bobola was a Polish Jesuit who spent his priestly life in the eastern borderlands of Poland-Lithuania, preaching among Orthodox and Catholic populations during years of devastating warfare. He was known as an effective missionary and re-converter, earning the title "soul-hunter" (duszochvat) in both the admiration of Catholics and the hostility of those who opposed him.',
      'On May 16, 1657, he was captured near Janów Poleski (in present-day Belarus) by Cossack forces during the wars following the 1648 Khmelnytsky Uprising. What followed was among the most barbaric martyrdoms documented in the 17th century: he was subjected to prolonged torture — portions of his skin were flayed from his body while he was alive, he was beaten with branches, burned, mutilated, and finally partially decapitated. He died, still conscious, offering his sufferings to God.',
      'His body was thrown into a pit and largely forgotten in the subsequent turmoil of war. In 1702 — forty-five years later — his body was found during repairs to the Jesuit church in Pinsk. Despite the extreme conditions of his death and four and a half decades of burial, the body was found remarkably preserved, with even the wounds of the martyrdom still visible. Physicians who examined it offered no natural explanation for its state. The body was enshrined and venerated in Pinsk, later moved for its protection during the Russian partition and the Soviet period, and ultimately translated to Rome.',
    ],
    condition:
      'The body of Andrew Bobola is now enshrined in the Church of the Gesù in Rome, in the Chapel of St. Andrew Bobola. The wounds of his martyrdom — extensive burns, flaying, and mutilations — are documented in the historical record and reportedly still visible on the preserved body. The body was moved multiple times across Poland, Russia, and ultimately Rome, as political circumstances required.',
    churchNote:
      'Andrew Bobola was beatified by Pope Pius IX in 1853 and canonized by Pope Pius XI on April 17, 1938. His canonization took place in the year of his native Poland\'s 20th anniversary of independence — a gesture of deep significance to the Polish Church and nation. He is a patron saint of Poland. His feast (May 16) falls on the anniversary of his martyrdom.',
    significance:
      'Andrew Bobola presents the most extreme challenge to naturalistic explanations of incorruption: his body was not quietly interred but was violently mutilated, burned, and discarded. That a body subjected to this level of destruction should be found remarkably preserved 45 years later is without parallel in the documented record. It is precisely the violence of his death that makes his incorruption so striking to theologians and historians alike.',
  },
  {
    id: 'catherine-laboure',
    name: 'St. Catherine Labouré',
    dates: '1806–1876',
    died: 1876,
    location: 'Chapel of Our Lady of the Miraculous Medal, Paris, France',
    country: 'France',
    religiousOrder: 'Daughters of Charity',
    gender: 'female',
    era: 'modern',
    status: 'fully-incorrupt',
    statusLabel: 'Fully Incorrupt',
    canonicalStatus: 'Saint',
    summary:
      'The seer of the Miraculous Medal who kept her visions completely secret for 46 years, known only to her confessor. Exhumed in 1933 — body perfectly preserved after 57 years. Canonized 1947. Feast: November 28.',
    description: [
      'Zoé Labouré entered the Daughters of Charity in Paris in 1830 and received, over the summer of 1830, a series of visions of the Blessed Virgin Mary in the chapel of the motherhouse on the Rue du Bac. In these visions, she was shown the design of a medal — later known as the Miraculous Medal — and was told to have it struck and distributed. Catherine revealed these visions only to her confessor, Fr. Jean-Marie Aladel, who after years of resistance had the medal struck in 1832. Within a decade, 30 million had been distributed.',
      'Catherine herself was posted to a home for elderly men in the Enghien-Reuilly district of Paris, where she served for the next 46 years in complete obscurity. No one in her religious community knew she was the seer. She was known as a competent but unremarkable sister, keeper of the poultry yard. She revealed her identity only months before her death, to her local superior. She died on December 31, 1876.',
      'Her body was exhumed on March 21, 1933 — 57 years after death — for the formal examination required by the beatification process. The body was found perfectly preserved, the eyes still blue and lifelike. She was beatified by Pope Pius XI in 1933 and canonized by Pope Pius XII on July 27, 1947. Her body was translated to the Chapel of Our Lady of the Miraculous Medal on the Rue du Bac, where it lies in a glass-sided reliquary beneath the side altar.',
    ],
    condition:
      'Catherine Labouré\'s body lies in the Chapel of Our Lady of the Miraculous Medal, 140 Rue du Bac, Paris — the same chapel where she received her visions in 1830. The body was found with eyes intact at the 1933 exhumation; a light wax covering has been applied to the face and hands per standard preservation practice. The chapel receives approximately two million visitors per year, making it one of the most visited Catholic sites in France.',
    churchNote:
      'The incorruption was formally examined in 1933 and included in the beatification dossier. Catherine\'s cause was notable for the unusual challenge of authenticating visions that had been kept entirely secret during the seer\'s lifetime. The Miraculous Medal, distributed worldwide since 1832, is one of the most widely used sacramentals in the Catholic Church.',
    significance:
      'Catherine Labouré embodies a paradox central to Catholic spirituality: the person through whom one of the most widely distributed objects of Marian devotion in history was given to the Church was simultaneously the most hidden and humble of women, peeling potatoes and tending chickens in an obscure Parisian home for the elderly. Her 57-year incorruption, preserved across two world wars and multiple political upheavals, is matched by the quiet fidelity of her hidden life.',
  },
  {
    id: 'padre-pio',
    name: 'St. Padre Pio',
    dates: '1887–1968',
    died: 1968,
    location: 'Sanctuary of St. Pio, San Giovanni Rotondo, Italy',
    country: 'Italy',
    religiousOrder: 'Capuchin Franciscan',
    gender: 'male',
    era: 'modern',
    status: 'partially-preserved',
    statusLabel: 'Partially Preserved',
    canonicalStatus: 'Saint',
    summary:
      'The most famous stigmatist of the 20th century, bearing the five wounds of Christ continuously for 50 years. Exhumed in 2008 for beatification, the body was largely intact. Beatified 1999, canonized 2002 by Pope John Paul II. Feast: September 23.',
    description: [
      'Francesco Forgione entered the Capuchin Franciscan order and was ordained in 1910, taking the name Pio. On September 20, 1918, while kneeling before a large crucifix in the choir of the friary in San Giovanni Rotondo, he received the stigmata — the five wounds of Christ in hands, feet, and side — in a visible and permanent form. The wounds bled regularly and were examined by numerous physicians over the following decades, none of whom could offer a natural explanation for their persistence or their origin.',
      'Padre Pio spent the next 50 years in San Giovanni Rotondo hearing confessions, celebrating Mass (reportedly lasting up to five hours), and directing a massive charitable hospital — the Casa Sollievo della Sofferenza (Home for the Relief of Suffering) — which he founded in 1956. He was also reputed to have the gifts of bilocation, reading of hearts, and the odor of sanctity. He died on September 23, 1968. On the day of his death, the stigmata wounds reportedly disappeared without trace or scar.',
      'His body was exhumed on March 3, 2008 — forty years after death — for the formal examination required by the beatification process, which had already been completed (he was beatified in 1999 and canonized in 2002). The body was found largely intact, though showing some signs of change after four decades. It was placed in a glass-sided reliquary and exhibited publicly in the new Sanctuary of St. Pio, drawing enormous crowds.',
    ],
    condition:
      'Padre Pio\'s body is enshrined in the lower church of the Sanctuary of St. Pio of Pietrelcina in San Giovanni Rotondo, Puglia. The face carries a wax mask applied for public exhibition. The body showed some signs of deterioration from the 40-year interment but was substantially preserved at the 2008 exhumation. The sanctuary receives approximately seven million pilgrims annually, making it one of the most visited Catholic shrines in Europe.',
    churchNote:
      'Padre Pio was beatified by Pope John Paul II on May 2, 1999, and canonized by the same pope on June 16, 2002. The canonization required two verified miracles attributed to his intercession after beatification. His stigmata were examined by multiple physicians during his lifetime; the files were sealed by the Vatican for decades and have been partially released. The body\'s condition at exhumation was formally documented.',
    significance:
      'Padre Pio is the most widely known Catholic mystic of the 20th century and one of only two priests in history to bear the full, visible stigmata for a sustained period (the other being St. Francis of Assisi). His combination of mystical phenomena, pastoral ministry, and the founding of a major hospital makes him one of the most complex and debated figures in 20th-century Catholicism. His shrine in San Giovanni Rotondo draws more pilgrims annually than any other destination in Italy except Rome.',
  },
  {
    id: 'francis-de-sales',
    name: 'St. Francis de Sales',
    dates: '1567–1622',
    died: 1622,
    location: 'Basilica of the Visitation, Annecy, France (body); Paris (heart)',
    country: 'France',
    religiousOrder: 'Diocesan Bishop',
    gender: 'male',
    era: 'early-modern',
    status: 'partially-preserved',
    statusLabel: 'Partially Preserved',
    canonicalStatus: 'Saint, Doctor of the Church',
    summary:
      'Bishop of Geneva, co-founder of the Order of the Visitation, author of the Introduction to the Devout Life. Most of the body preserved; heart separately enshrined in Paris. Doctor of the Church, patron of writers and journalists. Feast: January 24.',
    description: [
      'Francis de Sales was born to a noble Savoyard family and trained as a lawyer before pursuing the priesthood over his father\'s strong objections. Ordained in 1593, he volunteered for the mission to the Chablais region — a predominantly Calvinist territory of Savoy. Over four years of solitary missionary work, often in physical danger, he distributed hand-written pamphlets under the doors of Calvinist households — pamphlets that are considered the first use of printed religious tracts in Catholic missionary strategy. The mission eventually converted an estimated 70,000 people.',
      'He became Bishop of Geneva in 1602 — the see of Calvin, though exercising his office from Annecy since Geneva itself was Protestant. He co-founded the Order of the Visitation of Holy Mary with St. Jane Frances de Chantal in 1610 — a contemplative order designed specifically for women who could not endure the physical rigors of existing active orders. His Introduction to the Devout Life (1609) and Treatise on the Love of God (1616) are among the most widely read works of Catholic spirituality.',
      'He died on December 28, 1622, at Lyon, where he had gone to honor the visit of Louis XIII of France. His body was returned to Annecy. It was found substantially preserved and enshrined in the Basilica of the Visitation in Annecy, which the Visitation nuns built to house his remains. His heart was removed at death and separately enshrined — it was gifted to St. Jane Frances de Chantal, who kept it close for the remainder of her life. It is now in the Monastery of the Visitation in Treviso, Italy, and a copy is venerated in Paris.',
    ],
    condition:
      'Francis de Sales\'s body is enshrined in a reliquary in the Basilica of the Visitation in Annecy, France. His heart is separately preserved. Most of the body remained substantially intact for centuries after death; some deterioration has occurred over four centuries. The Annecy basilica, built by the Visitation nuns, remains a major pilgrimage site and the center of Salesian spirituality.',
    churchNote:
      'Francis de Sales was beatified by Pope Alexander VII in 1661 and canonized by the same pope in 1665. He was declared a Doctor of the Church by Pope Pius IX in 1877. He is the patron of writers, journalists, Catholic press, and the deaf. The Salesians of Don Bosco (founded by St. John Bosco in 1859) take their name from him as their spiritual model.',
    significance:
      'Francis de Sales represents the great integration of mystical depth and pastoral accessibility. His genius was the conviction that holiness is possible for everyone — not just monks and nuns — and his Introduction to the Devout Life addressed itself explicitly to people living in the world: merchants, soldiers, married couples. His gentleness — "a spoonful of honey catches more flies than a barrel of vinegar" — became the defining spirit of what is called the Salesian school of spirituality.',
  },
  {
    id: 'zita-of-lucca',
    name: 'St. Zita of Lucca',
    dates: '1218–1272',
    died: 1272,
    location: 'Basilica of San Frediano, Lucca, Italy',
    country: 'Italy',
    religiousOrder: 'Lay (servant)',
    gender: 'female',
    era: 'medieval',
    status: 'fully-incorrupt',
    statusLabel: 'Fully Incorrupt',
    canonicalStatus: 'Saint',
    summary:
      'A humble household servant who worked for the Fatinelli family of Lucca for 48 years. Known for mystical gifts and tireless charity to the poor. Her body has been venerated in Lucca for over 750 years in a glass-sided reliquary. Patron of servants and domestic workers. Feast: April 27.',
    description: [
      'Zita was born in the village of Monsagrati near Lucca to a devout Christian family. At the age of twelve she entered service in the household of the Fatinelli family of Lucca, where she would remain for the remaining 48 years of her life. The Fatinellis were a wealthy merchant family, and Zita served initially in a subordinate position — dealing with the resentment of other servants and at times the impatience of the family herself.',
      'She was known for giving food and clothing to the poor from the family\'s stores — with and sometimes without explicit permission — and for the mystical gifts that accompanied her humble service: bilocation, the miraculous multiplication of food, and angelic assistance in her household duties. The most famous legend holds that angels completed her baking duties while she was prolonged in prayer, returning to find the work done. She rose before dawn for Mass and spent her nights in prayer.',
      'She died on April 27, 1272, after 48 years of faithful service to the same household. Her body was immediately recognized as holy by the people of Lucca and was placed in the Church of San Frediano — one of the great Romanesque churches of Lucca — where it has been venerated for over 750 years. She was formally canonized by Pope Innocent XII in 1696. Her body remains in a glass-sided reliquary in the Basilica of San Frediano.',
    ],
    condition:
      'Zita\'s mummified body — darkened and desiccated with age but intact — lies in a glass-sided casket in the Basilica of San Frediano, Lucca. It has been venerated continuously since 1272, making her one of the longest-continuously-venerated incorruptibles in Catholic history — over 750 years without interruption. The basilica is one of the finest Romanesque churches in Tuscany and attracts both pilgrims and art historians.',
    churchNote:
      'Zita was venerated locally from her death in 1272. Her cause was formally introduced and she was canonized by Pope Innocent XII in 1696. She is the patron saint of domestic workers, servants, and maids — making her one of the few saints whose patronage is explicitly directed toward working-class lay people in domestic service. She is also invoked for lost keys (a reference to a legend in which keys she gave to the poor miraculously returned).',
    significance:
      'Zita of Lucca is the counterpoint to every aristocratic or clerical incorruptible: a working-class girl who spent her entire adult life cleaning, baking, and serving others — and whose body was recognized as holy the moment she died. Her 750-year continuous veneration in Lucca, without interruption through wars, plagues, and political upheavals, testifies to the depth of devotion she inspires. She is the saint of ordinary work made holy.',
  },
  {
    id: 'alexandrina-da-costa',
    name: 'Bl. Alexandrina da Costa',
    dates: '1904–1955',
    died: 1955,
    location: 'Shrine of Balasar, Balasar, Portugal',
    country: 'Portugal',
    religiousOrder: 'Lay',
    gender: 'female',
    era: 'modern',
    status: 'fully-incorrupt',
    statusLabel: 'Fully Incorrupt',
    canonicalStatus: 'Blessed',
    summary:
      'A lay mystic who from 1942 to 1955 — 13 years — lived without food or water except the Eucharist, medically certified by physicians including from the University of Porto. She also participated mystically in the Passion each Friday. Beatified 2004. Feast: October 13.',
    description: [
      'Alexandrina Maria da Costa was born in Balasar, northern Portugal, in 1904. In 1918, at the age of 14, she leapt from a window to escape men who were attempting to assault her, suffering spinal injuries that left her paralyzed and bedridden for the remainder of her life. She spent the next 37 years in her bed — first her family home, then in various states of care — developing a profound mystical life centered on union with the suffering Christ.',
      'Beginning on March 27, 1942, and continuing without interruption until her death on October 13, 1955 — a period of approximately 13 years and 7 months — Alexandrina received no food or water except the Eucharist. This was medically certified: she was placed under continuous clinical observation at the University Hospital of Porto in 1943. Physicians monitored her intake and output under strict clinical conditions for 40 days and certified that she was receiving no nourishment except Holy Communion, which she received daily. Her weight remained stable throughout the hospital observation and for the remainder of her life, which is physiologically inexplicable.',
      'Each Friday, from 1938 onward, she participated in a three-hour mystical re-living of the Passion — exhibiting the physical signs of the stages of Christ\'s suffering, which were observed and documented by witnesses and medical observers. She received none of the visible wounds of the stigmata. She died on October 13, 1955 — the anniversary of the final apparition of Fátima in 1917. Her body was found incorrupt when examined. She was beatified by Pope John Paul II on April 25, 2004.',
    ],
    condition:
      'Alexandrina da Costa\'s body is enshrined at the Shrine of Balasar in the town of Balasar, Portugal, which has become a significant pilgrimage site. Her body was found incorrupt at the formal examination conducted as part of her beatification cause. The medical records from her 1943 hospital observation are among the most extensive clinical documents associated with any cause for beatification in the 20th century.',
    churchNote:
      'Alexandrina was beatified by Pope John Paul II on April 25, 2004. Her cause was notable for the extraordinary volume of medical documentation surrounding her inedia (living without food) — the hospital observation of 1943 remains one of the most rigorous clinical examinations of a mystic in Church history. The date of her death, the anniversary of the final Fátima apparition, was noted as significant in Portugal, which had a strong Fátima devotion.',
    significance:
      'Alexandrina da Costa is one of the most medically documented mystics in Church history. The 40-day clinical observation under university hospital conditions, certifying that a human being received no nourishment other than the Eucharist for 40 days with stable weight, is a challenge that no physiological explanation has been offered for. Combined with the 13-year total duration and the mystical Passion participation each Friday, her case is among the most remarkable in 20th-century Catholicism. Her feast day coincides with the anniversary of the Miracle of the Sun at Fátima (October 13, 1917).',
  },
]

const filterOptions: { id: FilterType; label: string; count: (list: IncorruptibleSaint[]) => number }[] = [
  { id: 'all', label: 'All Saints', count: (l) => l.length },
  {
    id: 'medieval',
    label: 'Medieval Era',
    count: (l) => l.filter((s) => s.era === 'ancient' || s.era === 'medieval').length,
  },
  {
    id: 'modern',
    label: 'Modern Era',
    count: (l) => l.filter((s) => s.era === 'early-modern' || s.era === 'modern').length,
  },
  { id: 'female', label: 'Female Saints', count: (l) => l.filter((s) => s.gender === 'female').length },
  {
    id: 'religious',
    label: 'Religious Orders',
    count: (l) => l.filter((s) => s.religiousOrder !== 'Lay' && s.religiousOrder !== 'Secular' && s.religiousOrder !== 'Diocesan priest' && s.religiousOrder !== 'Diocesan Bishop').length,
  },
]

const statusConfig: Record<CorruptionStatus, { label: string; color: string; icon: typeof Star }> = {
  'fully-incorrupt': { label: 'Fully Incorrupt', color: 'bg-violet-100 text-violet-800', icon: Star },
  'partially-preserved': { label: 'Partially Preserved', color: 'bg-blue-100 text-blue-800', icon: Shield },
  'mummified-naturally': { label: 'Naturally Mummified', color: 'bg-gray-100 text-gray-700', icon: Scroll },
}

export default function IncorruptibleSaintsPage() {
  const [filter, setFilter] = useState<FilterType>('all')
  const [selectedId, setSelectedId] = useState<string | null>(null)

  const filteredSaints = saints.filter((s) => {
    if (filter === 'medieval') return s.era === 'ancient' || s.era === 'medieval'
    if (filter === 'modern') return s.era === 'early-modern' || s.era === 'modern'
    if (filter === 'female') return s.gender === 'female'
    if (filter === 'religious')
      return (
        s.religiousOrder !== 'Lay' &&
        s.religiousOrder !== 'Secular' &&
        s.religiousOrder !== 'Diocesan priest' &&
        s.religiousOrder !== 'Diocesan Bishop'
      )
    return true
  })

  const selectedSaint = saints.find((s) => s.id === selectedId) ?? null

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
            style={{ backgroundColor: '#F5F3FF', color: '#6D28D9' }}
          >
            <Flame className="w-4 h-4" />
            Mysteries of the Faith
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-gray-900 mb-4">
            Incorruptible Saints
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Among the most remarkable phenomena in Catholic history is the incorruption of the bodies of certain saints
            — preserved from natural decay long after death, without embalming or artificial means, and often venerated
            for centuries in glass reliquaries before which the faithful continue to pray today.
          </p>
        </div>

        {/* Doctrinal anchor */}
        <div className="rounded-xl p-6 mb-10 border" style={{ backgroundColor: '#F5F3FF', borderColor: '#DDD6FE' }}>
          <div className="flex items-start gap-3">
            <BookOpen className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#6D28D9' }} />
            <div>
              <h2 className="font-semibold text-gray-900 mb-2">The Church & Incorruption — What the Church Actually Teaches</h2>
              <p className="text-gray-700 text-sm leading-relaxed mb-2">
                Bodily incorruption is <strong>not</strong> a requirement for beatification or canonization and is not
                among the miracles the Church formally requires. The two miracles required for canonization (post-beatification)
                must be verified physical healings — not incorruption. The Church approaches claims of incorruption with
                careful caution, acknowledging that natural mummification is possible under certain conditions of temperature,
                soil chemistry, and burial circumstance.
              </p>
              <p className="text-gray-700 text-sm leading-relaxed mb-2">
                The norms governing beatification — <em>Divinus Perfectionis Magister</em> (Pope John Paul II, 1983)
                and its implementing norms — require thorough investigation of all reported phenomena associated with a
                candidate's cause, including physical phenomena such as incorruption. When incorruption is present, it
                is documented and examined but is classified as a sign of possible holiness (<em>signum possibile</em>),
                not as proof. The faithful are not required to believe in any specific incorruption, even of a canonized saint.
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                "The Church proposes [the saints] as models and intercessors." — <em>CCC 828</em>. It is their heroic
                virtue, not physical phenomena, that is the basis of canonization. Incorruption, when genuinely present
                and inexplicable by natural causes, is received by the faithful as a further sign of God's care for the
                bodies of those who belonged to him — a foretaste of the resurrection of the body confessed in the Creed.
              </p>
            </div>
          </div>
        </div>

        {/* Saints Catalog */}
        <div className="mb-14">
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-5">Documented Incorruptibles</h2>

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
                    ? 'text-white'
                    : 'bg-white text-gray-600 border-gray-200 hover:border-violet-300 hover:text-violet-800'
                }`}
                style={
                  filter === opt.id
                    ? { backgroundColor: '#6D28D9', borderColor: '#6D28D9' }
                    : {}
                }
              >
                {opt.label}
                <span
                  className={`ml-1.5 text-xs px-1.5 py-0.5 rounded-full ${
                    filter === opt.id ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'
                  }`}
                >
                  {opt.count(saints)}
                </span>
              </button>
            ))}
          </div>

          {/* Cards grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {filteredSaints.map((saint) => {
              const StatusIcon = statusConfig[saint.status].icon
              const isSelected = selectedId === saint.id
              return (
                <button
                  key={saint.id}
                  onClick={() => handleCardClick(saint.id)}
                  className={`text-left rounded-xl border p-5 transition-all hover:shadow-md ${
                    isSelected ? 'shadow-md' : 'border-gray-200 bg-white hover:border-violet-200'
                  }`}
                  style={
                    isSelected
                      ? { borderColor: '#7C3AED', backgroundColor: '#F5F3FF' }
                      : {}
                  }
                >
                  {/* Card header */}
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-serif text-lg font-semibold text-gray-900 leading-tight">
                        {saint.name}
                      </h3>
                      <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                        <MapPin className="w-3 h-3" />
                        <span>{saint.country}</span>
                        <span className="mx-1">·</span>
                        <Calendar className="w-3 h-3" />
                        <span>{saint.dates}</span>
                      </div>
                    </div>
                    <div
                      className="flex-shrink-0 p-1.5 rounded-lg"
                      style={{ backgroundColor: '#EDE9FE' }}
                    >
                      <Crown className="w-4 h-4" style={{ color: '#6D28D9' }} />
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 leading-relaxed mb-3 line-clamp-3">
                    {saint.summary}
                  </p>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    <span
                      className={`inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full font-medium ${statusConfig[saint.status].color}`}
                    >
                      <StatusIcon className="w-3 h-3" />
                      {statusConfig[saint.status].label}
                    </span>
                    <span className="inline-flex items-center text-xs px-2 py-0.5 rounded-full font-medium bg-gray-100 text-gray-600">
                      {saint.religiousOrder}
                    </span>
                  </div>

                  <div className="flex items-center gap-1 text-xs font-medium mt-1" style={{ color: '#7C3AED' }}>
                    <Eye className="w-3 h-3" />
                    View details
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        {/* Natural vs Miraculous section */}
        <div className="mb-14">
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-2">
            A Note on Natural vs. Miraculous Preservation
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            The Church does not claim that all incorruption is miraculous, nor does it dismiss natural explanations.
            The investigative process involves medical and scientific examination alongside theological evaluation.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <Shield className="w-4 h-4 text-blue-600" />
                How the Church Examines These Cases
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                When a candidate for beatification is associated with a report of incorruption, the cause
                introduces a formal medical examination. Physicians — who need not be Catholic — examine the
                body and produce a written report on its condition, noting: the state of preservation, the
                presence or absence of embalming or preservatives, the environmental conditions of burial,
                and whether the preservation is consistent with known natural mummification processes.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                The theological evaluators then consider whether the preservation exceeds what natural
                causes can explain. In cases where the burial environment, soil chemistry, temperature,
                and moisture would normally accelerate decomposition — as in the damp Italian hill towns
                where many medieval saints were buried, or the tropical climate of Goa — an intact body
                after decades or centuries is harder to attribute to natural causes.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Joan Carroll Cruz's foundational study <em>The Incorruptibles</em> (Tan Books, 1977)
                remains the most comprehensive English-language catalog of documented cases, examining
                over 100 saints and beati across 17 centuries. Cruz carefully distinguishes cases with
                strong documentation from those based on legend alone, and acknowledges natural mummification
                as a real phenomenon that must be excluded before a miraculous claim can be considered.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <Users className="w-4 h-4 text-violet-600" />
                Natural Causes vs. Inexplicable Cases
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-2">
                Natural mummification can occur under specific conditions:
              </p>
              <ul className="text-sm text-gray-600 leading-relaxed space-y-1.5 mb-4 ml-4">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-gray-400 mt-0.5 flex-shrink-0" />
                  Extremely dry environments (desert, high-altitude, well-ventilated tombs)
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-gray-400 mt-0.5 flex-shrink-0" />
                  Specific soil chemistry (high mineral content, acidity, or alkalinity)
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-gray-400 mt-0.5 flex-shrink-0" />
                  Airtight sealed stone sarcophagi in cold crypts
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-gray-400 mt-0.5 flex-shrink-0" />
                  Very low body fat or severe pre-death illness (cachexia)
                </li>
              </ul>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                The cases that most resist natural explanation share certain features: burial in conditions
                actively hostile to preservation (damp Mediterranean crypts, tropical Goa, battlefields);
                preservation of soft tissues over centuries rather than mere desiccation; and examinations
                conducted decades or centuries after death that find the body in conditions inconsistent
                with any known natural process.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                The Church's approach is essentially the same negative methodology used in scientific inquiry:
                it asks whether all natural explanations have been exhausted before attributing the phenomenon
                to a supernatural cause. Where natural explanations suffice, the Church does not invoke the miraculous.
                Where they do not — as in St. Francis Xavier's body preserved in tropical Goa after lime burial,
                or St. Andrew Bobola's body preserved despite brutal martyrdom and 45-year pit burial — the Church
                notes the inexplicable and leaves the theological interpretation to the faithful.
              </p>
            </div>
          </div>
        </div>

        {/* Sources */}
        <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
          <h2 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-gray-600" />
            Sources & Further Reading
          </h2>
          <ul className="text-sm text-gray-600 space-y-2 leading-relaxed">
            <li>
              Cruz, Joan Carroll. <em>The Incorruptibles: A Study of the Incorruption of the Bodies of Various Catholic Saints and Beati</em>.
              Tan Books and Publishers, 1977. The foundational English-language catalog — over 100 documented cases examined with hagiographic and medical rigor.
            </li>
            <li>
              Pope John Paul II. <em>Divinus Perfectionis Magister</em> (January 25, 1983) — the apostolic constitution
              reforming the norms for causes of canonization; establishes the current investigative process for reported phenomena
              including incorruption.
            </li>
            <li>
              Catechism of the Catholic Church, §828 — on the saints as models and intercessors; §997 — on the resurrection
              of the body; §1681 — on Christian death and the hope of resurrection.
            </li>
            <li>
              Individual canonization decrees and beatification documents for each saint, as cited in the respective causes.
              Primary documentation available through the Dicastery for the Causes of Saints, Vatican City.
            </li>
            <li>
              Ruffin, C. Bernard. <em>Padre Pio: The True Story</em>. Our Sunday Visitor, 1991 (revised ed. 2018) —
              comprehensive biography including medical documentation of the stigmata.
            </li>
            <li>
              Trochu, Francis. <em>The Curé of Ars: St. Jean-Marie-Baptiste Vianney</em>. Tan Books, 1977 —
              the standard biography; includes the 1904 exhumation account.
            </li>
            <li>
              Laurentin, René, and Roos, Henri. <em>Catherine Labouré et la Médaille Miraculeuse</em>.
              Desclée de Brouwer, 1976 — the scholarly study of Catherine's cause and the 1933 exhumation.
            </li>
            <li>
              Allegri, Renzo. <em>Alexandrina da Costa: The Mystic of Balasar</em>. — includes the medical
              records from the 1943 hospital observation conducted by the University Hospital of Porto.
            </li>
            <li>
              Martyrologium Romanum (Editio Altera, 2004) — feast day entries and canonical status for all
              saints and blessed persons listed on this page.
            </li>
          </ul>
        </div>

      </div>

      {/* Modal overlay */}
      {selectedSaint && (
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
              style={{ backgroundColor: '#F5F3FF', borderColor: '#DDD6FE' }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-1.5">
                    <span
                      className={`inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full font-medium ${statusConfig[selectedSaint.status].color}`}
                    >
                      {selectedSaint.statusLabel}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full font-medium bg-gray-100 text-gray-700">
                      {selectedSaint.canonicalStatus}
                    </span>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-gray-900 mb-1">
                    {selectedSaint.name}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {selectedSaint.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {selectedSaint.dates}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedId(null)}
                  className="p-2 rounded-xl text-gray-500 hover:text-gray-800 transition-colors flex-shrink-0"
                  style={{ backgroundColor: '#EDE9FE' }}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal body */}
            <div className="p-5 sm:p-6 bg-white grid md:grid-cols-2 gap-8">
              {/* Left: Life & Holiness */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Heart className="w-4 h-4" style={{ color: '#7C3AED' }} />
                  Life & Holiness
                </h4>
                {selectedSaint.description.map((para, i) => (
                  <p key={i} className="text-gray-700 text-sm leading-relaxed mb-3">
                    {para}
                  </p>
                ))}
              </div>

              {/* Right: Condition + Church Recognition + Significance */}
              <div>
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Eye className="w-4 h-4 text-blue-600" />
                    Condition of the Body
                  </h4>
                  <div
                    className="rounded-lg border p-4"
                    style={{ backgroundColor: '#F5F3FF', borderColor: '#DDD6FE' }}
                  >
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {selectedSaint.condition}
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Church className="w-4 h-4" style={{ color: '#7C3AED' }} />
                    Church Recognition
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {selectedSaint.churchNote}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Star className="w-4 h-4" style={{ color: '#7C3AED' }} />
                    Significance
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {selectedSaint.significance}
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
