'use client'

import { useState } from 'react'
import {
  MapPin,
  Calendar,
  Microscope,
  Shield,
  X,
  BookOpen,
  Church,
  Flame,
  Search,
  CheckCircle,
  Scroll,
  Heart,
  Star,
  Globe,
  FlaskConical,
} from 'lucide-react'

type FilterType = 'all' | 'medieval' | 'modern' | 'scientific'
type MiracleStatus = 'approved' | 'historically-documented' | 'under-investigation'

interface Miracle {
  id: string
  name: string
  location: string
  country: string
  year: string
  era: 'ancient' | 'medieval' | 'modern'
  eraLabel: string
  scientificallyStudied: boolean
  status: MiracleStatus
  summary: string
  description: string[]
  scientificFindings?: string
  churchRecognition: string
  significance: string
}

const miracles: Miracle[] = [
  {
    id: 'lanciano',
    name: 'Lanciano',
    location: 'Lanciano, Abruzzo, Italy',
    country: 'Italy',
    year: 'c. 700–750 AD',
    era: 'ancient',
    eraLabel: 'Early Medieval',
    scientificallyStudied: true,
    status: 'approved',
    summary:
      'A doubting Basilian priest saw the bread transform into visible flesh and the wine into blood during Mass. The oldest and most scientifically documented Eucharistic miracle.',
    description: [
      'Around AD 700–750, a Basilian monk-priest celebrating Mass in the Church of St. Legontian in Lanciano was troubled by doubt about the Real Presence. As he pronounced the words of consecration, the bread visibly changed into flesh, and the wine transformed into blood that coagulated into five small pellets of unequal size but equal weight.',
      'The relics were preserved in the church now known as San Francesco. For twelve centuries they were venerated, and in 1970–71 the first modern scientific examination was conducted by Prof. Eduardo Linoli of the University of Siena. The findings were subsequently reviewed by a High Commission appointed by the World Health Organization in 1973.',
    ],
    scientificFindings:
      'Prof. Eduardo Linoli (University of Siena, 1970–71): The flesh is real human heart muscle tissue — specifically striated muscular tissue of the myocardium, left ventricular wall. The blood is human, type AB. No preservatives are present. The five blood pellets each weigh the same individually as all five together — a documented physical anomaly. A WHO/UN commission of 500 scientists (Geneva, 1973) reviewed the findings, confirmed them, and stated that science offered no explanation for the preservation of organic tissue over 1,300 years without any treatment.',
    churchRecognition:
      'Formally recognized by the Church since the 8th century. Investigated and approved by Church authorities in 1631, 1637, 1770, and 1850. The relics are permanently enshrined in the Church of San Francesco in Lanciano, Diocese of Lanciano-Ortona. The relic is available for public veneration.',
    significance:
      'Lanciano is the oldest and most thoroughly documented Eucharistic miracle. The combination of preserved cardiac tissue, type AB blood, and 1,300 years of natural preservation without treatment makes it the scientific benchmark against which all other Eucharistic miracles are measured.',
  },
  {
    id: 'alatri',
    name: 'Alatri',
    location: 'Alatri, Lazio, Italy',
    country: 'Italy',
    year: '1228',
    era: 'medieval',
    eraLabel: 'Medieval',
    scientificallyStudied: false,
    status: 'approved',
    summary:
      'A Host obtained for a sorcery spell transformed into flesh; the Bishop of Alatri verified the miracle and reported it to Pope Gregory IX — one of the few medieval cases with direct papal acknowledgment.',
    description: [
      'In 1228, a young woman of Alatri wanted to win back her unfaithful lover. A sorceress instructed her to obtain a consecrated Host and bring it to her for use in a spell. After Mass, the woman concealed the Host and delivered it. When the sorceress placed it in a pot, it transformed into visible flesh.',
      'Terrified, the woman eventually confessed to the Bishop of Alatri, Giacinto Pontoni. The bishop verified the miracle personally and submitted a formal report to Pope Gregory IX. The papal acknowledgment of this miracle is one of the earliest on record. The relic was preserved and is still venerated in the Cathedral of Alatri today.',
    ],
    churchRecognition:
      'Formally acknowledged by Pope Gregory IX (r. 1227–1241) following the bishop\'s personal report — one of the few medieval Eucharistic miracles with direct papal recognition. The relic is preserved in the Cathedral of San Paolo in Alatri, Lazio.',
    significance:
      'Alatri sits at the intersection of sorcery, conversion, and mercy. Like Santarém and Offida, the miracle arose from an attempt to misuse the Eucharist — and became instead a sign of God\'s sovereignty even in the midst of sacrilege. Its direct papal acknowledgment gives it unusual historical weight for the 13th century.',
  },
  {
    id: 'santarem',
    name: 'Santarém',
    location: 'Santarém, Ribatejo, Portugal',
    country: 'Portugal',
    year: 'c. 1247',
    era: 'medieval',
    eraLabel: 'Medieval',
    scientificallyStudied: false,
    status: 'approved',
    summary:
      'A woman who concealed a Host to bring to a sorcerer found it bleeding through her veil. The clotted blood preserved in a crystal ampoule has been venerated for nearly 800 years; Pope John Paul II visited in 1992.',
    description: [
      'Around 1247, a woman in Santarém sought to win back her husband through sorcery. A sorcerer told her to bring a consecrated Host. After Mass at the Church of St. Stephen, she held the Host in her veil without consuming it. Walking home, the Host began to bleed and soaked through the cloth.',
      'Terrified, the woman hid it in her home. That night, rays of light emanated from the veil. She and her husband summoned the local priest, who carried it in solemn procession back to the church. The Host was placed in a beeswax container, then in a locked tabernacle — from which it later miraculously emerged. The relic, clotted blood preserved in a crystal ampoule, has been venerated ever since in the Church of the Holy Miracle.',
    ],
    churchRecognition:
      'Formally approved and preserved for nearly 800 years in the Church of the Holy Miracle (Igreja do Santíssimo Milagre) in Santarém. Pope John Paul II visited on 13 May 1992 — the anniversary of the Fátima apparitions — and venerated the relic. The church remains an active pilgrimage site.',
    significance:
      'Santarém is one of the most enduring Eucharistic relics in Christendom. The relic\'s 800-year preservation and veneration by John Paul II on the Fátima anniversary links two of Portugal\'s most important supernatural events. Like Alatri and Offida, it arose from attempted sacrilege and became a sign of divine mercy.',
  },
  {
    id: 'bolsena-orvieto',
    name: 'Bolsena / Orvieto',
    location: 'Bolsena and Orvieto, Umbria, Italy',
    country: 'Italy',
    year: '1263',
    era: 'medieval',
    eraLabel: 'Medieval',
    scientificallyStudied: false,
    status: 'approved',
    summary:
      'Blood flowing from a consecrated Host during Mass moved Pope Urban IV to institute the Feast of Corpus Christi — and commission Thomas Aquinas to compose its liturgy.',
    description: [
      'In 1263, a German priest named Peter of Prague was traveling to Rome on pilgrimage, troubled by doubts about transubstantiation. While celebrating Mass in the Church of St. Christina in Bolsena, blood began to flow from the consecrated Host and soaked through the linen corporal beneath it.',
      'Pope Urban IV, residing in nearby Orvieto, was informed of the miracle and the bloodstained corporal was brought to him in solemn procession. Moved by the sign, the Pope issued the bull Transiturus de hoc mundo (1264), instituting the Feast of Corpus Christi for the universal Church. He commissioned St. Thomas Aquinas to compose the proper liturgy — giving the Church the Pange Lingua and the Tantum Ergo.',
    ],
    churchRecognition:
      "The Corporal of Bolsena has been preserved in the Cathedral of Orvieto for over 750 years and remains a major pilgrimage object. Pope Urban IV's institution of Corpus Christi in 1264 is the direct papal response to the miracle. Successive popes have continued to venerate the Corporal at Orvieto, including Benedict XVI during his 2012 visit.",
    significance:
      'No Eucharistic miracle has had a greater impact on Catholic liturgy. The Feast of Corpus Christi — celebrated across the universal Church — and the Pange Lingua / Tantum Ergo, among the most profound liturgical hymns in Christendom, both trace directly to this miracle in 1263.',
  },
  {
    id: 'offida',
    name: 'Offida',
    location: 'Offida, Marche, Italy',
    country: 'Italy',
    year: '1280',
    era: 'medieval',
    eraLabel: 'Medieval',
    scientificallyStudied: false,
    status: 'approved',
    summary:
      'A Host placed in boiling wax during a sorcery ritual transformed into flesh. Preserved for over 700 years in the Collegiate Church of Offida — still venerated today.',
    description: [
      'In 1280, a woman named Richiarella, at the urging of her husband, removed a consecrated Host from her mouth after Communion and brought it to a sorcerer for use in a spell. The sorcerer placed the Host in a cauldron of boiling wax. The Host transformed into flesh. Richiarella, terrified, wrapped it in a cloth and hid it in a cattle stall.',
      'When she returned the next morning, the cloth had become stiff with coagulated blood. Overwhelmed by guilt, she eventually confessed to the bishop. The relic — flesh surrounded by wax — was preserved and has been venerated in Offida for over 700 years.',
    ],
    churchRecognition:
      'Formally approved and preserved in the Collegiate Church of SS. Maria and Marco in Offida, in the Marche region of central Italy. The relic remains available for public veneration. Offida is a recognized pilgrimage destination.',
    significance:
      'Offida, Santarém, and Alatri form a remarkable 13th-century triad: three independent miracles each arising from an attempt to use the consecrated Host for sorcery, each ending in conversion and preservation of a relic. The pattern — desecration met by transformation — is theologically striking.',
  },
  {
    id: 'cebreiro',
    name: 'O Cebreiro',
    location: 'O Cebreiro, Galicia, Spain',
    country: 'Spain',
    year: 'c. 1300',
    era: 'medieval',
    eraLabel: 'Medieval',
    scientificallyStudied: false,
    status: 'approved',
    summary:
      'A doubting monk celebrating Mass on the Camino de Santiago saw the Host and wine visibly transform as he privately dismissed the faith of a peasant who had walked through a blizzard to attend. Confirmed by Pope Innocent VIII in 1487.',
    description: [
      'Around 1300, a monk named Juan Santín was celebrating Mass in the mountaintop chapel of O Cebreiro on the Camino de Santiago de Compostela. A humble peasant had walked through a violent snowstorm to attend. The monk, inwardly dismissive, thought it unreasonable to risk death for "mere bread and wine."',
      'As he spoke the words of consecration, the bread visibly transformed into flesh and the wine into blood. The monk was overcome. The relics — a chalice containing the blood, and the flesh — have been preserved in the Royal Church of Santa María la Real de O Cebreiro ever since. The chalice is one of the oldest surviving liturgical vessels in Spain.',
    ],
    churchRecognition:
      'Pope Innocent VIII formally confirmed the miracle in his bull Subnixi praesidio (1487). Queen Isabel I of Castile donated an elaborate reliquary. The shrine at O Cebreiro on the Camino de Santiago has been a pilgrimage destination for seven centuries.',
    significance:
      'O Cebreiro is unique among Eucharistic miracles in that it was triggered by the faith of a layman — not a priest. The monk\'s private contempt for the peasant\'s devotion became the occasion of his own conversion. The chalice preserved here has been proposed by scholars as a possible historical basis for the Holy Grail legends of medieval Iberia.',
  },
  {
    id: 'amsterdam',
    name: 'Amsterdam',
    location: 'Amsterdam, Netherlands',
    country: 'Netherlands',
    year: '1345',
    era: 'medieval',
    eraLabel: 'Medieval',
    scientificallyStudied: false,
    status: 'historically-documented',
    summary:
      "A Host thrown into flames by a sick man's caretaker was found unburned and glowing the next morning, becoming the foundation of Amsterdam's identity as a pilgrimage city.",
    description: [
      'On the night of 12–13 March 1345, a dying man named Jan Craen received Viaticum in Amsterdam. Shortly after, he vomited, and his caretaker threw the contents into the fireplace. The next morning, when tending the fire, she found the Host in the flames, completely unharmed and glowing.',
      'Word spread rapidly. The miracle was recognized by Bishop Jan van Arkel of Utrecht in 1346. King William V of Holland instituted an annual pilgrimage to the site. The Chapel of the Miracle (Heilige Stede, "Holy Place") was built at the location and became one of the most visited shrines in northern Europe before the Reformation.',
    ],
    churchRecognition:
      'Recognized by the Diocese of Utrecht in 1346. The annual silent procession (Stille Omgang) through Amsterdam on the Sunday nearest 15 March continues to this day, drawing thousands of pilgrims in nocturnal silence — one of the few pre-Reformation Catholic traditions that survived in Amsterdam. The Dutch royal connection and the city\'s historical identity are intertwined with this miracle.',
    significance:
      "The Miracle of Amsterdam shaped the city's religious and civic identity for two centuries. The Stille Omgang — a uniquely silent, nocturnal procession — persists into the 21st century as a living testimony to the event.",
  },
  {
    id: 'waldurn',
    name: 'Walldürn',
    location: 'Walldürn, Baden-Württemberg, Germany',
    country: 'Germany',
    year: '1330',
    era: 'medieval',
    eraLabel: 'Medieval',
    scientificallyStudied: false,
    status: 'historically-documented',
    summary:
      'When a priest accidentally spilled the chalice, the Precious Blood on the corporal formed a precise image of Christ crucified surrounded by eleven apostolic heads.',
    description: [
      'In 1330, a priest named Heinrich Otto accidentally knocked over the chalice during Mass in Walldürn. The Precious Blood flowed over the corporal. When the priest removed the wet linen, the blood had formed a precise image: Christ crucified at the center, surrounded by eleven heads representing the apostles who fled at Gethsemane — Judas absent, Christ present.',
      'The priest, fearing punishment for his carelessness, concealed the corporal behind the altar for 47 years. On his deathbed in 1377, he confessed what had happened. The corporal was retrieved and found perfectly preserved. The miraculous image was officially recognized, and Walldürn became a major Eucharistic pilgrimage site.',
    ],
    churchRecognition:
      'Pope Martin V authorized the Walldürn pilgrimage in 1445. The Corporal is preserved in the Collegiate Church of St. George in Walldürn. The annual Corpus Christi pilgrimage to Walldürn draws tens of thousands of pilgrims from across Germany and neighboring countries.',
    significance:
      "Walldürn is one of Germany's most important Eucharistic shrines. The image formed in spilled Precious Blood — showing the crucified Christ with the fleeing apostles — serves as an enduring meditation on the cost of discipleship and the mercy of God's Eucharistic presence.",
  },
  {
    id: 'seefeld',
    name: 'Seefeld',
    location: 'Seefeld in Tirol, Tyrol, Austria',
    country: 'Austria',
    year: '1384',
    era: 'medieval',
    eraLabel: 'Medieval',
    scientificallyStudied: false,
    status: 'historically-documented',
    summary:
      'A powerful knight demanded the large Host reserved for the priest; as he seized it, the stone floor began to swallow him. He grabbed the altar in terror. The Host and the handprint in the altar stone are preserved to this day.',
    description: [
      'On Holy Thursday 1384, the powerful knight Oswald Milser attended Mass at the parish church in Seefeld, Tyrol. Asserting his noble rank, he demanded that the priest give him the large Host intended for the celebrant rather than the small Host given to the laity. When the priest hesitated, the knight insisted and took it.',
      'As Milser began to receive the Host, the stone floor beneath him began to give way and he started to sink into the earth. Crying out in terror, he grabbed the altar cloth. The priest quickly withdrew the Host. The earth stopped moving. The knight survived, shaken and converted. The Host, showing traces of blood, and the imprint of the knight\'s hands in the altar stone are still visible in the church today.',
    ],
    churchRecognition:
      'The Parish Church of St. Oswald in Seefeld preserves the Host relic and the altar stone with the handprint. Emperor Maximilian I established a devotional chapel there in the 15th century. Seefeld is one of the principal Eucharistic pilgrimage sites of the Alps and one of four designated holy sites in Tyrol.',
    significance:
      "Seefeld illustrates the Eucharistic theology of equality before the Lord: the knight's demand for a privilege of rank at the altar — born of pride — triggered the miracle. The physical impression in the stone, preserved for 640 years, is a tangible invitation to humility for every pilgrim who visits.",
  },
  {
    id: 'faverney',
    name: 'Faverney',
    location: 'Faverney, Haute-Saône, France',
    country: 'France',
    year: '1608',
    era: 'medieval',
    eraLabel: 'Early Modern',
    scientificallyStudied: false,
    status: 'approved',
    summary:
      'During a fire that destroyed a chapel on the Pentecost vigil, a monstrance with a consecrated Host levitated for 33 hours untouched by the flames — witnessed by civil magistrates and hundreds of townspeople.',
    description: [
      'During the night of 25–26 May 1608 (the vigil of Pentecost), a fire broke out in the chapel of the Abbey of Faverney near Vesoul, Burgundy, where the Forty Hours devotion was being held. A monstrance containing two consecrated Hosts stood on the altar. When worshippers rushed to rescue it, they found the monstrance suspended in mid-air, approximately three feet above the burned altar cloth, without any physical support whatsoever.',
      'The monstrance remained levitated from 9am Saturday to 6pm Sunday — a period of 33 hours — while civil magistrates, ecclesiastical authorities, and crowds of townspeople watched. It then gently descended to rest on a new corporal placed below it. The flames had destroyed everything around it. The event was formally documented in both civil and Church records, with dozens of named witnesses.',
    ],
    churchRecognition:
      'Bishop Ferdinand de Rye of Besançon formally approved the miracle in 1608 following a thorough canonical investigation. The Host and monstrance are preserved in the Church of Our Lady of the Monstrance in Faverney, which became a major pilgrimage site. An annual pilgrimage continues.',
    significance:
      'Faverney is one of the most extensively witnessed Eucharistic miracles in history, with named civil magistrates among the official witnesses. The 33-hour levitation recalls Exodus 3 — the burning bush consumed by fire yet unconsumed — a traditional Eucharistic symbol. The 33-hour duration is often noted in connection with the traditional number of years of Christ\'s earthly life.',
  },
  {
    id: 'siena',
    name: 'Siena',
    location: 'Siena, Tuscany, Italy',
    country: 'Italy',
    year: '1730 — ongoing',
    era: 'medieval',
    eraLabel: 'Early Modern',
    scientificallyStudied: true,
    status: 'approved',
    summary:
      'Stolen consecrated Hosts found three days later have remained intact for nearly 300 years — the longest continuous Eucharistic miracle on record.',
    description: [
      'On the night of 14 August 1730, the vigil of the Assumption, thieves broke into the Basilica of San Francesco in Siena and stole a ciborium containing 351 consecrated Hosts as well as some unconsecrated ones. Three days later, on 17 August, all Hosts were found in the offering box of the nearby Basilica of Santa Maria in Provenzano.',
      'The unconsecrated hosts had already begun to decompose. The 351 consecrated Hosts were perfectly intact. They have remained so ever since — approaching 300 years of natural preservation. Archbishop Zondadari recognized the miracle in 1730, and every subsequent examination has found the Hosts in a state impossible to explain by natural means.',
    ],
    scientificFindings:
      'Scientific examinations in 1914 and 2014 confirmed the extraordinary preservation of the consecrated Hosts. Standard unleavened bread (wheat and water) normally decomposes within weeks under any conditions. The preserved Hosts show no signs of fermentation, decomposition, mold, insect damage, or any natural process of decay after nearly three centuries. No preservatives have ever been applied. The 2014 examination, the most recent, confirmed continued perfect preservation. The contrast with the immediately decayed unconsecrated hosts is documented.',
    churchRecognition:
      'Recognized by Archbishop Zondadari of Siena in 1730. Confirmed by multiple subsequent archbishops. The Hosts are enshrined in the Basilica of San Francesco and brought out for public veneration on specific feast days. The Diocese of Siena maintains the official record of all scientific examinations.',
    significance:
      'Siena is unique in that the miracle is not a one-time historical event but a continuous, ongoing sign — verifiable in the present day. The contrast between the instantly decayed unconsecrated hosts and the centuries-preserved consecrated ones provides an unusually clean controlled comparison.',
  },
  {
    id: 'betania',
    name: 'Betania, Venezuela',
    location: 'Caracas, Venezuela',
    country: 'Venezuela',
    year: '1991',
    era: 'modern',
    eraLabel: 'Modern',
    scientificallyStudied: false,
    status: 'approved',
    summary:
      'A consecrated Host visibly began to bleed during Mass at a site already recognized for approved Marian apparitions.',
    description: [
      "On 8 December 1991, the Feast of the Immaculate Conception, during Mass celebrated by Fr. Otty Ossa Aristizábal at the Betania shrine near Caracas, a consecrated Host began to visibly exude a red substance. The priest and congregation witnessed the bleeding Host.",
      "The event was documented, physical samples were collected, and the case was reported to Bishop Pio Bello Ricardo of Los Teques — the same bishop who had approved the Betania Marian apparitions in 1984. The Betania site, already recognized for extraordinary phenomena, now became associated with both approved apparitions and a Eucharistic miracle.",
    ],
    churchRecognition:
      'Bishop Pio Bello Ricardo of Los Teques approved the miracle in 1991, making it one of the most promptly recognized modern Eucharistic miracles. The Betania shrine had already been an approved Marian apparition site since 1984, the first approved apparition in Venezuela.',
    significance:
      'Betania demonstrates the frequent connection in Catholic experience between Marian devotion and Eucharistic adoration — the Mother directing attention to her Son present in the Blessed Sacrament. Its timing on the Feast of the Immaculate Conception deepens this theological resonance.',
  },
  {
    id: 'buenos-aires',
    name: 'Buenos Aires',
    location: 'Buenos Aires, Argentina',
    country: 'Argentina',
    year: '1992–1996',
    era: 'modern',
    eraLabel: 'Modern',
    scientificallyStudied: true,
    status: 'approved',
    summary:
      'Three incidents in Buenos Aires, overseen by Archbishop Bergoglio (later Pope Francis), produced cardiac tissue that a New York forensic pathologist identified without knowing the sample\'s origin.',
    description: [
      'Between 1992 and 1996, three separate incidents occurred in Buenos Aires parishes in which consecrated Hosts were found on the floor or in unusual circumstances, placed in water per standard liturgical procedure, and subsequently transformed into a reddish substance. The most significant occurred on 18 August 1996 at the Church of Santa María.',
      'Archbishop Jorge Mario Bergoglio — the future Pope Francis — was informed and ordered the substance preserved and scientifically investigated. In 1999, samples were sent to Dr. Frederick Zugibe, a forensic pathologist and cardiologist at Columbia University, New York. Dr. Zugibe was given no information about the nature or origin of the sample.',
    ],
    scientificFindings:
      'Dr. Frederick Zugibe (Columbia University, 1999): The sample was identified as inflamed human myocardium — specifically the left ventricular heart muscle — with white blood cells still present and active, indicating the tissue was alive at the time of examination. Blood type AB. Dr. Zugibe stated the tissue showed signs consistent with "a person who had been severely beaten." When subsequently informed that the sample came from a consecrated Host submerged in water for several days, Dr. Zugibe — himself a practicing Catholic — stated: "How and why a consecrated Host would change its physical character to that of a muscle tissue... is beyond all scientific knowledge."',
    churchRecognition:
      'Archbishop Bergoglio initiated and maintained the scientific investigation process. The findings have been presented at international Eucharistic congresses. The Buenos Aires miracle is regarded as among the most rigorously documented modern cases, partly because the future Pope personally oversaw its investigation.',
    significance:
      "Three convergences make Buenos Aires extraordinary: (1) the scientist had zero knowledge of the sample's origin; (2) he identified living cardiac tissue — the same tissue type and blood type as Lanciano, 1,300 years and two continents apart; (3) the archbishop who commissioned the investigation became Pope Francis, giving it unique historical and spiritual weight.",
  },
  {
    id: 'sokolka',
    name: 'Sokolka, Poland',
    location: 'Sokolka, Podlaskie, Poland',
    country: 'Poland',
    year: '2008',
    era: 'modern',
    eraLabel: 'Modern',
    scientificallyStudied: true,
    status: 'approved',
    summary:
      "A fallen Host transformed into cardiac tissue physically interwoven with bread — a detail unique among all Eucharistic miracles, examined by university pathologists.",
    description: [
      'On 12 October 2008, during Mass at the Church of St. Anthony in Sokolka, a consecrated Host fell to the floor. Following standard procedure, the sacristan placed it in a vessel of water to dissolve. After a week, she noticed a reddish-brown substance forming on the Host and reported it to the pastor, who informed Archbishop Edward Ozorowski.',
      'The substance was preserved and submitted to the Medical University of Bialystok for analysis. Two pathologists — working independently — examined the samples without being told what they were examining.',
    ],
    scientificFindings:
      'Prof. Maria Sobaniec-Lotowska (pathomorphology) and Prof. Stanislaw Sulkowski (Medical University of Bialystok, 2009): Human myocardium — heart muscle tissue — identical in structure to the tissue examined at Lanciano. Critically, the muscle fibers were found physically interwoven with the wheat fibers of the bread, as if the two substances had merged at the molecular level. Blood type AB. The tissue showed characteristics consistent with myocardial agony. Both pathologists stated that no known biological or chemical process could account for how cardiac tissue became structurally interwoven with baked wheat bread.',
    churchRecognition:
      'Archbishop Edward Ozorowski of Bialystok-Lomza approved the miracle in December 2009, after receiving the full scientific report and conducting the diocesan investigation. The findings were subsequently confirmed by the Vatican\'s Congregation for Divine Worship. The relic is venerated publicly at the Church of the Divine Mercy in Sokolka.',
    significance:
      "Sokolka's detail of interwoven tissue and bread — not seen in other miracles — carries deep theological resonance: it images the mystery of Christ's body becoming truly, structurally present within the bread. The AB blood type and myocardium match Lanciano exactly across 1,300 years.",
  },
  {
    id: 'legnica',
    name: 'Legnica, Poland',
    location: 'Legnica, Lower Silesia, Poland',
    country: 'Poland',
    year: '2013',
    era: 'modern',
    eraLabel: 'Modern',
    scientificallyStudied: true,
    status: 'approved',
    summary:
      'A Host that fell during Christmas Mass and turned bright red was examined by forensic pathologists who identified distressed cardiac tissue — matching findings from Lanciano and Buenos Aires.',
    description: [
      'On 25 December 2013, during Christmas Mass at the Church of St. Hyacinth in Legnica, a consecrated Host fell to the floor. The sacristan placed it in water in a small vessel. After two weeks, a red substance appeared on the Host. The parish priest reported this to Bishop Zbigniew Kiernikowski.',
      'The red substance was removed from the water, placed on a corporal, and sent to the Department of Forensic Medicine at the Medical University of Wroclaw for analysis.',
    ],
    scientificFindings:
      'Prof. Barbara Blaszczyk and the Department of Forensic Medicine, Medical University of Wroclaw (2014): Human cardiac muscle tissue — myocardium — with changes consistent with acute myocardial distress, as in a person dying under severe stress. Blood type AB. No explanation was offered for how heart tissue appeared on a Host that had been placed in water for two weeks. The findings match those of Lanciano, Buenos Aires, Sokolka, and Tixtla.',
    churchRecognition:
      'Bishop Zbigniew Kiernikowski of Legnica issued a formal statement in 2016 recognizing the extraordinary character of the event and presenting the findings publicly after the diocesan investigation was complete.',
    significance:
      'Legnica adds to a now five-fold convergence — across four countries (Italy, Argentina, Poland, Mexico) and thirteen centuries — of scientifically examined miracles all producing the same result: human cardiac tissue, type AB blood, with signs of severe suffering.',
  },
  {
    id: 'tixtla',
    name: 'Tixtla, Mexico',
    location: 'Tixtla, Guerrero, Mexico',
    country: 'Mexico',
    year: '2006',
    era: 'modern',
    eraLabel: 'Modern',
    scientificallyStudied: true,
    status: 'approved',
    summary:
      'A Host began exuding a reddish substance from its center during a retreat. The same scientist who examined Buenos Aires found identical cardiac tissue with blood type AB.',
    description: [
      'On 21 October 2006, during a spiritual retreat in Tixtla, Guerrero, a consecrated Host distributed by a Carmelite sister began to exude a reddish substance from its center. The phenomenon was witnessed by those present and was documented. The Host was preserved and submitted to Dr. Ricardo Castaon Gomez for investigation.',
      'Dr. Castaon organized a team of international scientists, including Dr. Frederick Zugibe of Columbia University — the same forensic pathologist who had examined the Buenos Aires samples seven years earlier. The scientists were given no information identifying the origin of the sample.',
    ],
    scientificFindings:
      'Dr. Frederick Zugibe and team (2009): Human blood of type AB, originating from the interior of the Host — not an external source. Myocardial tissue. Dr. Zugibe confirmed the characteristics were identical to the Buenos Aires sample he had examined in 1999, which he had already compared to Lanciano. The substance had emerged from within the Host in a manner that had no physical explanation. This was the third time Dr. Zugibe examined samples from independent Eucharistic miracles and reached the same conclusion.',
    churchRecognition:
      'The Diocese of Chilpancingo-Chilapa officially approved the miracle in 2013 under Bishop Alejo Zavala Castro, following a seven-year investigation. This is one of the most formally and thoroughly approved modern Eucharistic miracles in the Americas.',
    significance:
      'Tixtla closes a remarkable evidential circle: the same scientist examined both Buenos Aires (1996) and Tixtla (2006) blind, on samples from different countries, and reached identical conclusions. Together with Lanciano, Sokolka, and Legnica, five miracles now share the same biological signature across four continents and thirteen centuries.',
  },
]

const filterOptions: { id: FilterType; label: string; count: (list: Miracle[]) => number }[] = [
  { id: 'all', label: 'All Miracles', count: (l) => l.length },
  { id: 'medieval', label: 'Medieval', count: (l) => l.filter((m) => m.era === 'ancient' || m.era === 'medieval').length },
  { id: 'modern', label: 'Modern', count: (l) => l.filter((m) => m.era === 'modern').length },
  { id: 'scientific', label: 'Scientifically Studied', count: (l) => l.filter((m) => m.scientificallyStudied).length },
]

const statusConfig: Record<MiracleStatus, { label: string; color: string; icon: typeof CheckCircle }> = {
  approved: { label: 'Church Approved', color: 'bg-green-100 text-green-800', icon: CheckCircle },
  'historically-documented': { label: 'Historically Documented', color: 'bg-blue-100 text-blue-800', icon: Scroll },
  'under-investigation': { label: 'Under Investigation', color: 'bg-yellow-100 text-yellow-800', icon: Search },
}

export default function EucharisticMiraclesPage() {
  const [filter, setFilter] = useState<FilterType>('all')
  const [selectedId, setSelectedId] = useState<string | null>(null)

  const filteredMiracles = miracles.filter((m) => {
    if (filter === 'medieval') return m.era === 'ancient' || m.era === 'medieval'
    if (filter === 'modern') return m.era === 'modern'
    if (filter === 'scientific') return m.scientificallyStudied
    return true
  })

  const selectedMiracle = miracles.find((m) => m.id === selectedId) ?? null

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
            style={{ backgroundColor: '#FEF3C7', color: '#92400E' }}
          >
            <Flame className="w-4 h-4" />
            Mysteries of the Faith
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-gray-900 mb-4">
            Eucharistic Miracles
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            The Catholic Church teaches that in every Mass, bread and wine truly become the Body, Blood, Soul,
            and Divinity of Christ — hidden from the senses, real in substance. On rare occasions throughout
            history, God has allowed this hidden reality to become visible.
          </p>
        </div>

        {/* Doctrinal anchor */}
        <div className="rounded-xl p-6 mb-6 border" style={{ backgroundColor: '#EFF6FF', borderColor: '#BFDBFE' }}>
          <div className="flex items-start gap-3">
            <BookOpen className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#1E40AF' }} />
            <div>
              <h2 className="font-semibold text-gray-900 mb-2">The Real Presence — Catholic Teaching</h2>
              <p className="text-gray-700 text-sm leading-relaxed mb-2">
                "In the most blessed sacrament of the Eucharist the body and blood, together with the soul
                and divinity, of our Lord Jesus Christ and, therefore, the whole Christ is truly, really, and
                substantially contained." — <em>CCC 1374</em>, quoting the Council of Trent (1551)
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Eucharistic miracles are not the ground of this faith — they confirm it. The Church teaches
                (CCC 156) that miraculous signs "strengthen and support" reason but do not replace the faith
                grounded in Christ's own words at the Last Supper. Each approved miracle has undergone formal
                ecclesiastical investigation; in modern cases, independent scientific analysis has been added.
              </p>
            </div>
          </div>
        </div>

        {/* Carlo Acutis note */}
        <div className="rounded-xl p-5 mb-10 border border-amber-200 flex items-start gap-3" style={{ backgroundColor: '#FFFBEB' }}>
          <Star className="w-5 h-5 mt-0.5 flex-shrink-0 text-amber-600" />
          <div>
            <span className="font-semibold text-gray-900">St. Carlo Acutis (1991–2006)</span>
            <span className="text-gray-700 text-sm leading-relaxed ml-2">
              This young Italian programmer spent his short life cataloguing every documented Eucharistic miracle worldwide,
              compiling <strong>136 miracles across 5 continents</strong> from the 5th century to the present.
              His traveling exhibition — <em>The Eucharistic Miracles of the World</em> — has been displayed in hundreds
              of churches and cathedrals globally. Beatified by Pope Francis in 2020, canonized April 2025, he is the
              patron of the internet and of World Youth Day. The miracles shown below are selected highlights from
              that larger catalog; many more await discovery through his exhibition.
            </span>
          </div>
        </div>

        {/* Miracles Catalog */}
        <div className="mb-14">
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-5">Documented Miracles</h2>

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
                    ? 'text-white border-amber-700'
                    : 'bg-white text-gray-600 border-gray-200 hover:border-amber-300 hover:text-amber-800'
                }`}
                style={filter === opt.id ? { backgroundColor: '#92400E', borderColor: '#92400E' } : {}}
              >
                {opt.label}
                <span
                  className={`ml-1.5 text-xs px-1.5 py-0.5 rounded-full ${
                    filter === opt.id ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'
                  }`}
                >
                  {opt.count(miracles)}
                </span>
              </button>
            ))}
          </div>

          {/* Cards grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {filteredMiracles.map((miracle) => {
              const StatusIcon = statusConfig[miracle.status].icon
              const isSelected = selectedId === miracle.id
              return (
                <button
                  key={miracle.id}
                  onClick={() => handleCardClick(miracle.id)}
                  className={`text-left rounded-xl border p-5 transition-all hover:shadow-md ${
                    isSelected
                      ? 'shadow-md'
                      : 'border-gray-200 bg-white hover:border-amber-200'
                  }`}
                  style={
                    isSelected
                      ? { borderColor: '#D97706', backgroundColor: '#FFFBEB' }
                      : {}
                  }
                >
                  {/* Card header */}
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-serif text-lg font-semibold text-gray-900 leading-tight">
                        {miracle.name}
                      </h3>
                      <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                        <MapPin className="w-3 h-3" />
                        <span>{miracle.country}</span>
                        <span className="mx-1">·</span>
                        <Calendar className="w-3 h-3" />
                        <span>{miracle.year}</span>
                      </div>
                    </div>
                    {miracle.scientificallyStudied && (
                      <div className="flex-shrink-0 p-1.5 rounded-lg bg-emerald-50">
                        <Microscope className="w-4 h-4 text-emerald-700" />
                      </div>
                    )}
                  </div>

                  <p className="text-sm text-gray-600 leading-relaxed mb-3 line-clamp-3">
                    {miracle.summary}
                  </p>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    <span
                      className={`inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full font-medium ${statusConfig[miracle.status].color}`}
                    >
                      <StatusIcon className="w-3 h-3" />
                      {statusConfig[miracle.status].label}
                    </span>
                    <span className="inline-flex items-center text-xs px-2 py-0.5 rounded-full font-medium bg-gray-100 text-gray-600">
                      {miracle.eraLabel}
                    </span>
                  </div>

                  <div className="flex items-center gap-1 text-xs font-medium text-amber-700 mt-1">
                    <Search className="w-3 h-3" />
                    View details
                  </div>
                </button>
              )
            })}
          </div>

        </div>

        {/* Science & Faith section */}
        <div className="mb-14">
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-2">
            Science & the Eucharist
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Five Eucharistic miracles from different countries and centuries have undergone independent
            forensic and pathological analysis. The convergence of findings across thirteen centuries is
            remarkable and has drawn serious attention from scientists who had no prior knowledge of the
            samples' origin.
          </p>

          {/* Comparison table */}
          <div className="overflow-x-auto rounded-xl border border-gray-200 mb-8">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200" style={{ backgroundColor: '#FFFBEB' }}>
                  <th className="text-left px-4 py-3 font-semibold text-gray-900">Miracle</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-900">Year</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-900">Tissue Identified</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-900">Blood Type</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-900">Lead Examiner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  {
                    name: 'Lanciano, Italy',
                    year: 'c. 700 AD',
                    tissue: 'Cardiac myocardium (LV wall)',
                    blood: 'AB',
                    examiner: 'Prof. Linoli, Univ. of Siena (1970–71)',
                  },
                  {
                    name: 'Buenos Aires, Argentina',
                    year: '1996',
                    tissue: 'Cardiac myocardium (LV wall), inflamed',
                    blood: 'AB',
                    examiner: 'Dr. Zugibe, Columbia Univ. (1999)',
                  },
                  {
                    name: 'Tixtla, Mexico',
                    year: '2006',
                    tissue: 'Cardiac myocardium',
                    blood: 'AB',
                    examiner: 'Dr. Zugibe / Dr. Castaon (2009)',
                  },
                  {
                    name: 'Sokolka, Poland',
                    year: '2008',
                    tissue: 'Cardiac myocardium, interwoven with bread',
                    blood: 'AB',
                    examiner: 'Prof. Sobaniec-Lotowska, Bialystok (2009)',
                  },
                  {
                    name: 'Legnica, Poland',
                    year: '2013',
                    tissue: 'Cardiac myocardium, acute distress',
                    blood: 'AB',
                    examiner: 'Prof. Blaszczyk, Wroclaw (2014)',
                  },
                  {
                    name: 'Siena, Italy',
                    year: '1730 — present',
                    tissue: 'Wheat bread, no decomposition',
                    blood: 'N/A',
                    examiner: 'Multiple; most recent 2014',
                  },
                ].map((row) => (
                  <tr key={row.name} className="bg-white hover:bg-amber-50 transition-colors">
                    <td className="px-4 py-3 font-medium text-gray-900">{row.name}</td>
                    <td className="px-4 py-3 text-gray-600 whitespace-nowrap">{row.year}</td>
                    <td className="px-4 py-3 text-gray-700">{row.tissue}</td>
                    <td className="px-4 py-3">
                      {row.blood === 'AB' ? (
                        <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded font-semibold text-xs">
                          AB
                        </span>
                      ) : (
                        <span className="text-gray-500 text-xs">{row.blood}</span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-gray-600 text-xs">{row.examiner}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Key findings cards */}
          <div className="grid sm:grid-cols-3 gap-4">
            <div
              className="rounded-xl border p-5"
              style={{ backgroundColor: '#F0FDF4', borderColor: '#BBF7D0' }}
            >
              <div className="flex items-center gap-2 mb-2">
                <Microscope className="w-5 h-5 text-emerald-600" />
                <h3 className="font-semibold text-gray-900">Consistent Tissue Type</h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                All five tissue-producing miracles yielded human cardiac muscle — specifically the left
                ventricular myocardium, the hardest-working part of the heart. No other tissue type has
                appeared in any scientifically examined Eucharistic miracle.
              </p>
            </div>
            <div
              className="rounded-xl border p-5"
              style={{ backgroundColor: '#FFF1F2', borderColor: '#FECDD3' }}
            >
              <div className="flex items-center gap-2 mb-2">
                <Heart className="w-5 h-5 text-red-600" />
                <h3 className="font-semibold text-gray-900">Blood Type AB</h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Every examined miracle produced type AB blood — relatively rare (3–4% of the population).
                Type AB is also found on the Shroud of Turin and the Sudarium of Oviedo. The coincidence
                across independent samples from multiple countries is statistically striking.
              </p>
            </div>
            <div
              className="rounded-xl border p-5"
              style={{ backgroundColor: '#FFFBEB', borderColor: '#FDE68A' }}
            >
              <div className="flex items-center gap-2 mb-2">
                <FlaskConical className="w-5 h-5 text-amber-600" />
                <h3 className="font-semibold text-gray-900">Blind Examinations</h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                In the Buenos Aires and Tixtla cases, Dr. Zugibe examined samples without knowing their
                origin. He identified living, distressed heart tissue on both occasions. His reaction on
                being told the source — "beyond all scientific knowledge" — was that of a scientist, not
                an apologist.
              </p>
            </div>
          </div>
        </div>

        {/* Church's approach section */}
        <div className="mb-12">
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">
            The Church's Approach to Eucharistic Miracles
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <Shield className="w-4 h-4 text-blue-600" />
                Miracles Confirm, Not Create, Faith
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                Catholic faith in the Real Presence rests on Christ's own words at the Last Supper
                — "This is my Body" (Matthew 26:26) — and on the unbroken teaching of the Church from
                the Apostles forward. Eucharistic miracles are not required for belief; the Church
                does not oblige Catholics to accept any specific private miracle, even approved ones.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                St. Thomas Aquinas taught that miracles are given for those whose faith needs
                strengthening — not as proofs for unbelievers, but as merciful gifts for the weak.
                The Catechism (CCC 548) describes miracles as confirming "the messenger and his
                message" rather than serving as the message itself.
              </p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <Globe className="w-4 h-4 text-amber-600" />
                The Investigative Process
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                When a Eucharistic miracle is reported, the local bishop opens a formal canonical
                investigation. Witness testimony is taken, physical evidence is preserved under chain
                of custody, and in modern cases, scientific analysis is commissioned from independent
                laboratories that need not be told the sample's origin.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                The bishop then issues one of three findings: <em>constat de supernaturalitate</em>
                (the supernatural character is established), <em>constat de non supernaturalitate</em>
                (natural causes suffice), or <em>non constat</em> (the matter remains undetermined).
                Most reported events receive no formal approval. The cases on this page represent
                the rare subset where the Church has found the evidence compelling.
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
              Catechism of the Catholic Church, §§1374–1381 (Real Presence; Eucharistic worship);
              §§156, 547–548 (Miracles and Faith)
            </li>
            <li>
              Linoli, Eduardo. "Ricerche Istologiche, Immunologiche e Biochimiche sulla Carne del
              Miracolo Eucaristico di Lanciano."
              <em> Quaderni Sclavo di Diagnostica</em> 7:3 (1971)
            </li>
            <li>
              WHO/UN High Commission Review of Lanciano Findings, Geneva (1973) — reviewed by a
              commission of 500 scientists; findings published in the <em>UN Science Report</em> (1976)
            </li>
            <li>
              Zugibe, Frederick T. Testimony and findings, International Eucharistic Congress, Quebec
              City (2008); documented in Castaon Gomez, Ricardo, <em>Science Studying the Miracles of the Eucharist</em>
            </li>
            <li>
              Sobaniec-Lotowska, Maria, and Sulkowski, Stanislaw. Pathological Report on the Sokolka
              Relic (2009), Medical University of Bialystok — submitted to Archbishop Ozorowski
            </li>
            <li>
              Blaszczyk, Barbara, et al. Forensic Report on the Legnica Relic (2014), Department of
              Forensic Medicine, Medical University of Wroclaw
            </li>
            <li>
              Diocese of Chilpancingo-Chilapa, Mexico. Official Approval Statement by Bishop Alejo
              Zavala Castro (2013)
            </li>
            <li>
              Acutis, Carlo (Bl.). <em>The Eucharistic Miracles of the World</em> — traveling exhibition
              now in hundreds of churches globally; comprehensive international catalog. Carlo canonized
              April 27, 2025 by Pope Francis (patron of youth and internet users).
            </li>
            <li>
              Jordi Rivero, <em>Eucharistic Miracles</em> — comprehensive international catalog with
              primary sources
            </li>
            <li>
              Council of Trent, Session XIII (1551): <em>Decree on the Most Holy Eucharist</em> —
              definitive dogmatic statement on transubstantiation and the Real Presence
            </li>
          </ul>
        </div>

      </div>

      {/* Modal overlay */}
      {selectedMiracle && (
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
              style={{ backgroundColor: '#FFFBEB', borderColor: '#FDE68A' }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-1.5">
                    <span
                      className={`inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full font-medium ${statusConfig[selectedMiracle.status].color}`}
                    >
                      {selectedMiracle.eraLabel}
                    </span>
                    {selectedMiracle.scientificallyStudied && (
                      <span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full font-medium bg-emerald-100 text-emerald-800">
                        <Microscope className="w-3 h-3" />
                        Scientifically Studied
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-gray-900 mb-1">
                    {selectedMiracle.name}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {selectedMiracle.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {selectedMiracle.year}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedId(null)}
                  className="p-2 rounded-xl hover:bg-amber-100 text-gray-500 hover:text-gray-800 transition-colors flex-shrink-0"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal body */}
            <div className="p-5 sm:p-6 bg-white grid md:grid-cols-2 gap-8">
              {/* Left: narrative */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Scroll className="w-4 h-4 text-amber-600" />
                  What Happened
                </h4>
                {selectedMiracle.description.map((para, i) => (
                  <p key={i} className="text-gray-700 text-sm leading-relaxed mb-3">
                    {para}
                  </p>
                ))}

                <h4 className="font-semibold text-gray-900 mb-3 mt-5 flex items-center gap-2">
                  <Church className="w-4 h-4 text-amber-600" />
                  Church Recognition
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {selectedMiracle.churchRecognition}
                </p>
              </div>

              {/* Right: science + significance */}
              <div>
                {selectedMiracle.scientificFindings && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <Microscope className="w-4 h-4 text-emerald-600" />
                      Scientific Findings
                    </h4>
                    <div
                      className="rounded-lg border p-4"
                      style={{ backgroundColor: '#F0FDF4', borderColor: '#BBF7D0' }}
                    >
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {selectedMiracle.scientificFindings}
                      </p>
                    </div>
                  </div>
                )}

                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Star className="w-4 h-4 text-amber-600" />
                  Significance
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {selectedMiracle.significance}
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
