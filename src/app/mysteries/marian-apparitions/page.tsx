'use client'

import { useState } from 'react'
import {
  Star,
  Shield,
  Heart,
  MapPin,
  Calendar,
  Eye,
  BookOpen,
  Church,
  CheckCircle,
  X,
  Search,
  Globe,
  Flame,
  Scroll,
  Users,
  Crown,
} from 'lucide-react'

type FilterType = 'all' | 'approved' | 'americas' | 'europe' | 'africa-asia' | 'modern'
type ApparitionStatus = 'fully-approved' | 'approved-veneration' | 'approved-worthy-belief'

interface Apparition {
  id: string
  name: string
  location: string
  country: string
  year: string
  era: 'medieval' | 'early-modern' | 'modern'
  continent: 'americas' | 'europe' | 'africa' | 'asia'
  seers: string
  status: ApparitionStatus
  statusLabel: string
  messages: string[]
  summary: string
  description: string[]
  churchRecognition: string
  significance: string
  notableSign?: string
}

const apparitions: Apparition[] = [
  {
    id: 'guadalupe',
    name: 'Our Lady of Guadalupe',
    location: 'Tepeyac Hill, Mexico City, Mexico',
    country: 'Mexico',
    year: '1531',
    era: 'early-modern',
    continent: 'americas',
    seers: 'St. Juan Diego Cuauhtlatoatzin',
    status: 'fully-approved',
    statusLabel: 'Fully Approved',
    messages: [
      '"Know for certain that I am the perfect and perpetual Virgin Mary, Mother of the True God" — declaring her identity and purpose to a recently conquered people.',
      'She asked that a church be built at Tepeyac so she could show her love and protection to all who seek her help, especially the poor and afflicted.',
      'Her image on the tilma encodes the Gospel message in Aztec pictographic language — a catechism in cloth, intelligible to the indigenous peoples of Mexico.',
    ],
    summary:
      'Our Lady appeared four times to the indigenous convert Juan Diego in December 1531, leaving a miraculous image on his cloak. The tilma triggered the conversion of nearly 8 million indigenous people within seven years — the largest mass conversion in history.',
    description: [
      'Between December 9 and 12, 1531, the Blessed Virgin Mary appeared four times to Juan Diego, a humble indigenous convert of the Nahuatl people, on Tepeyac Hill north of Mexico City. She asked him to bring her request for a church to Bishop Juan de Zumárraga. Twice rebuffed, Juan Diego returned on December 12 with roses — which bloomed miraculously in winter snow — gathered in his tilma (cloak) as proof.',
      'When Juan Diego opened his tilma before the bishop, the roses fell out — and on the fabric was imprinted a radiant image of the Virgin, clothed as an Aztec princess, standing on the crescent moon, surrounded by rays of the sun, and supported by an angel: a visual synthesis that spoke directly to Aztec cosmology and proclaiming the new faith as fulfilling, not destroying, the religious aspirations of the indigenous people.',
      'The tilma — a rough ayate fabric of cactus fibers — has defied scientific explanation for nearly five centuries. Studies in 1979 by Dr. Philip Callahan (NASA infrared imaging) revealed that the image has no brushstrokes, sizing, or underdrawing; it appears to have been applied — or formed — without human technique. Studies of the Virgin\'s eyes have found in the corneal reflection the images of persons present in the room in 1531, including Juan Diego and Bishop Zumárraga, encoded at a scale impossible for 16th-century art.',
      'Within seven years of the apparition, nearly 8 million indigenous Mexicans received baptism — the largest mass conversion in Church history, accomplished not by the sword but by a cloth. The feast of Our Lady of Guadalupe (December 12) was extended to the universal Church by Pope John Paul II, who also canonized Juan Diego on July 31, 2002. She is the Patroness of the Americas and of the unborn.',
    ],
    churchRecognition:
      'Formally recognized by Bishop Juan de Zumárraga of Mexico City in 1531. A diocesan investigation was conducted in 1666 and 1723. Pope Benedict XIV extended the feast to all of New Spain and composed the Antiphon "Non fecit taliter" in 1754. The feast of December 12 was raised to a Solemnity for the Americas and extended to the universal Church. Juan Diego was canonized by Pope John Paul II in 2002. The Basilica of Our Lady of Guadalupe is the most visited Marian shrine in the world, receiving over 20 million pilgrims annually.',
    significance:
      'Guadalupe stands apart from all other Marian apparitions in its scale, its physical relic (the tilma), its missionary impact, and its cultural depth. The image is a theological document as much as an artistic one — reading simultaneously as a proclamation of the Incarnation, a refutation of Aztec human sacrifice, and a promise of maternal protection to the poor. The scientific inexplicability of the tilma, sustained across four centuries of examination, gives the apparition an evidentiary weight beyond any other approved case.',
    notableSign:
      'The miraculous tilma: 500-year-old cloth bearing an image with no brushstrokes, no underdrawing, no human artistic technique detectable by infrared or ultraviolet imaging; eyes contain reflected images of persons present in 1531.',
  },
  {
    id: 'rue-du-bac',
    name: 'Our Lady of the Miraculous Medal',
    location: 'Rue du Bac, Paris, France',
    country: 'France',
    year: '1830',
    era: 'modern',
    continent: 'europe',
    seers: 'St. Catherine Labouré (canonized 1947)',
    status: 'fully-approved',
    statusLabel: 'Fully Approved',
    messages: [
      '"Have a medal struck after this model. All who wear it will receive great graces; they should wear it around the neck." — the Virgin\'s precise instruction for the Miraculous Medal.',
      'She showed Catherine an oval image of herself standing on a globe, crushing a serpent underfoot, radiating rays of light from her rings — each ray a grace given to those who ask.',
      'On the reverse of the medal: the letter M surmounted by a cross, the twelve stars representing the Apostles, and the Hearts of Jesus and Mary — a compendium of Marian theology in metal.',
    ],
    summary:
      'In two apparitions in 1830, the Virgin appeared to the novice Catherine Labouré, showed her the design of what became the Miraculous Medal, and requested over a billion copies be distributed worldwide. Catherine kept the secret of the apparitions for 46 years, until her deathbed.',
    description: [
      'On the night of July 18–19, 1830, a young novice of the Daughters of Charity, Catherine Labouré, was awakened and led by a child-angel to the convent chapel at Rue du Bac in Paris. There the Virgin appeared, sat in the confessor\'s chair, and spoke with Catherine for two hours — placing her hands in Catherine\'s hands in a gesture of maternal confidence. She warned of coming trials (the July Revolution broke out the next day) and asked Catherine to have a medal struck to her honor.',
      'In November 1830, Catherine received a second apparition in which the precise design of the medal was shown: the Virgin standing on a globe with rays of light streaming from rings on her fingers, and an oval inscription: "O Mary conceived without sin, pray for us who have recourse to thee." The Virgin then rotated the image to show the reverse design.',
      'Catherine\'s confessor, Fr. Jean-Marie Aladel, had the first medals struck in 1832. Almost immediately reports of extraordinary graces and conversions began — the most famous being the conversion of the Jewish atheist Alphonse Ratisbonne in Rome in 1842 after he agreed to wear the medal. By Catherine\'s death in 1876, over a billion medals had been distributed, making it the most widely distributed religious object in history.',
      'Catherine had never revealed her identity as the seer during her entire religious life — she lived as a humble nursing sister and was recognized as the visionary only at her deathbed, when she finally disclosed the secret to her superior after 46 years of silence. The body of St. Catherine Labouré, canonized in 1947 by Pope Pius XII, remains incorrupt and is enshrined at the chapel of Rue du Bac.',
    ],
    churchRecognition:
      'The medal was approved for distribution by Archbishop de Quélen of Paris in 1832. The canonical investigation was conducted in 1836. Catherine Labouré was beatified in 1933 and canonized by Pope Pius XII on July 27, 1947. The Chapel of Our Lady of the Miraculous Medal at 140 Rue du Bac, Paris, remains open for pilgrimage and draws over two million visitors annually. Feast: November 27.',
    significance:
      'The Miraculous Medal apparition is unique in that the visible, tangible fruit of the apparition — the medal itself — has been in continuous global circulation for nearly two centuries, becoming the most distributed sacramental object in Catholic history. The conversion of Ratisbonne and countless others documented in the 19th century provided early and independent confirmation of the medal\'s spiritual power. Catherine\'s 46-year silence, maintained with heroic fidelity, adds a dimension of personal holiness rarely matched among Marian seers.',
    notableSign:
      'The conversion of Alphonse Ratisbonne (January 20, 1842): a confirmed atheist Jewish businessman in Rome experienced a sudden vision of Our Lady and converted on the spot — the event was sworn before a Roman court by eyewitnesses.',
  },
  {
    id: 'la-salette',
    name: 'Our Lady of La Salette',
    location: 'La Salette, Isère, France',
    country: 'France',
    year: '1846',
    era: 'modern',
    continent: 'europe',
    seers: 'Mélanie Calvat and Maximin Giraud (two shepherd children, aged 14 and 11)',
    status: 'fully-approved',
    statusLabel: 'Fully Approved',
    messages: [
      '"If my people will not submit, I shall be forced to let go the arm of my Son. It is so strong, so heavy, that I can no longer withhold it." — the central warning of La Salette, calling for conversion.',
      'She requested that the faithful stop working on Sundays and stop blaspheming the Holy Name — the sins she named most grievously afflicting France in 1846.',
      'She foretold a famine as a consequence of sin — fulfilled within weeks by a devastating potato blight across France and the potato crops of Europe.',
    ],
    summary:
      'On September 19, 1846, a beautiful weeping woman appeared to two young shepherds on a remote Alpine meadow. Her message of maternal sorrow for human sin, confirmed by a miraculous spring and accurate prophecy, was approved by the Bishop of Grenoble in 1851.',
    description: [
      'On September 19, 1846, two shepherd children — Mélanie Calvat (14) and Maximin Giraud (11) — were tending cattle near the hamlet of La Salette in the French Alps when they discovered a brilliant light in a ravine. Within the light was a beautiful woman seated on a stone, weeping. She rose and spoke to them in French and then in their local patois, delivering a long message of maternal grief over the sins of her people.',
      'The woman described the miseries she bore on behalf of humanity: the profanation of Sunday rest, the blasphemy of God\'s name, the indifference of her own priests. She spoke of the famine coming upon France and told Maximin of an incident from his own childhood that only he and his father could have known — evidence, for the children, that she knew each of them personally.',
      'Before departing into the light, the woman gave each child a separate "secret." A spring appeared at the spot of her tears. When the children returned to their village and reported what they had seen, they found themselves unable to retract their story under interrogation, despite being separated and questioned independently. The two children, who barely knew each other before the apparition, gave identical detailed accounts.',
      'Bishop Philibert de Bruillard of Grenoble conducted a rigorous canonical investigation over four years and issued a Pastoral Letter on September 19, 1851, recognizing the apparition as "bearing in itself all the signs of truth." He approved the construction of a basilica on the site. La Salette became one of the great penitential shrines of the 19th century. The Missionaries of Our Lady of La Salette were founded in 1852 to spread her message. Feast: September 19.',
    ],
    churchRecognition:
      'Formally approved by Bishop Philibert de Bruillard of Grenoble on September 19, 1851, following a four-year canonical investigation. The approval was confirmed by his successor, Bishop Ginoulhiac. Pope Pius IX received a copy of the secrets from the children in 1851 and expressed support for the apparition. The Basilica of Our Lady of La Salette was consecrated in 1879. A Sanctuary with basilica, pilgrimage facilities, and the Missionaries of La Salette continues to receive pilgrims. Feast: September 19.',
    significance:
      'La Salette introduced into modern Catholicism the theme of the sorrowful, weeping Mother — Mary interceding between a sinful humanity and a just God, holding back divine justice through her maternal intercession. The theological depth of its message, the precision of its prophecies, and the incorruptible testimony of two untutored shepherd children made it a model for later Marian apparition investigations. Its emphasis on penance and Sunday observance resonates with its era\'s social upheaval and loss of faith following the French Revolution.',
    notableSign:
      'A spring appeared at the site of the apparition and has flowed continuously since 1846, despite the rocky alpine terrain having no natural water source at that elevation.',
  },
  {
    id: 'lourdes',
    name: 'Our Lady of Lourdes',
    location: 'Lourdes, Haute-Pyrénées, France',
    country: 'France',
    year: '1858',
    era: 'modern',
    continent: 'europe',
    seers: 'St. Bernadette Soubirous (canonized 1933)',
    status: 'fully-approved',
    statusLabel: 'Fully Approved',
    messages: [
      '"I am the Immaculate Conception" — the Virgin\'s self-identification on March 25, 1858, using the precise theological term of the dogma defined by Pope Pius IX just four years earlier in 1854, which Bernadette had never heard.',
      '"Penitence, penitence, penitence" — her three-fold call to conversion, accompanied by a request for prayer for sinners.',
      '"Go drink at the spring and wash yourself there" — the command that led Bernadette to dig in the earth, uncovering the miraculous spring whose waters have since been associated with thousands of reported cures.',
    ],
    summary:
      'Between February 11 and July 16, 1858, the Virgin appeared 18 times to 14-year-old Bernadette Soubirous at the Grotto of Massabielle. She identified herself as the Immaculate Conception — confirming the 1854 dogma. The miraculous spring has been associated with 70 officially recognized miraculous healings.',
    description: [
      'On February 11, 1858, Bernadette Soubirous, a 14-year-old asthmatic girl from a desperately poor family in Lourdes, went with her sister and a friend to gather firewood near the Gave River. At the grotto of Massabielle, she experienced a rush of wind and saw a young woman of extraordinary beauty standing in a niche in the rock — dressed in white with a blue sash and golden roses at her feet. Bernadette reached for her rosary, and the lady smiled and drew out her own. They prayed the rosary together.',
      'The apparitions continued 18 times over six months. Crowds grew rapidly — from a handful to twenty thousand at the peak. On February 25, the lady told Bernadette to dig in the muddy ground with her hands and drink from it. The mud became a flowing spring that has never ceased. On March 25, the Feast of the Annunciation, Bernadette pressed the lady for her name. The lady joined her hands over her breast, raised her eyes to heaven, and said: "Que soy era Immaculada Councepciou" — "I am the Immaculate Conception" in the local Pyrenean dialect.',
      'Bernadette had to ask her confessor what the words meant. The theological precision of the self-identification — using the exact dogmatic formula proclaimed by Pope Pius IX on December 8, 1854, which Bernadette had never studied — was one of the most compelling elements of the investigation for Bishop Laurence of Tarbes. The Church, not Bernadette, had defined the dogma; the Virgin had come to confirm it from the other side.',
      'Bishop Bertrand Sévère Mascarou Laurence opened a formal commission of inquiry on November 17, 1858. Four years of rigorous investigation concluded on January 18, 1862, when the bishop formally recognized the apparitions and authorized the veneration of Our Lady of Lourdes. Bernadette entered the Sisters of Charity at Nevers in 1866, where she lived in chronic illness and died in 1879. Her body, examined three times (1909, 1919, 1925), was found incorrupt each time. She was canonized by Pope Pius XI on December 8, 1933. Feast: February 11.',
    ],
    churchRecognition:
      'Formally approved by Bishop Bertrand Laurence of Tarbes on January 18, 1862, following a four-year canonical investigation. Pope Pius IX personally encouraged devotion to Our Lady of Lourdes. Pope Leo XIII elevated the feast to the universal Church in 1907. The International Medical Bureau of Lourdes was established in 1884 to investigate reported cures under rigorous scientific protocols; to date 70 cures have been officially recognized as miraculous by the Church. Over 6 million pilgrims visit annually, making Lourdes the most visited Catholic pilgrimage site in Europe. Feast: February 11.',
    significance:
      'Lourdes is the paradigm case for all modern Marian apparitions — its investigation became the model; its medical bureau the standard for supernatural healing verification; its link to the Immaculate Conception dogma the clearest theological connection between a defined dogma and a Marian visitation. No other apparition site draws more pilgrims or has generated more formal miraculous healing investigations. The Lourdes water itself, while chemically ordinary, has become one of the most powerful sacramental signs of the modern Church.',
    notableSign:
      'The miraculous spring uncovered by Bernadette\'s digging on February 25, 1858, now flows at approximately 32,000 liters per day from a previously dry, muddy rock face — and has been associated with 70 formally recognized miraculous cures, verified by the International Medical Bureau of Lourdes.',
  },
  {
    id: 'pontmain',
    name: 'Our Lady of Pontmain',
    location: 'Pontmain, Mayenne, France',
    country: 'France',
    year: '1871',
    era: 'modern',
    continent: 'europe',
    seers: 'Eugène and Joseph Barbedette (12 and 10), with two other children: Françoise Richer and Jeanne-Marie Lebossé',
    status: 'fully-approved',
    statusLabel: 'Fully Approved',
    messages: [
      '"But pray, my children. God will hear you in time. My Son allows Himself to be moved." — the central message that appeared in golden letters beneath the Virgin\'s image during the apparition.',
      'Her expression shifted from joy to sorrow as the crowd prayed the Rosary and sang the Litany of Loreto — a visible reflection of the grief of France in its hour of military defeat.',
      'A large red cross appeared over her heart as the apparition concluded — a silent proclamation of the Passion as the source of salvation for a nation at war.',
    ],
    summary:
      'On January 17, 1871, during the Franco-Prussian War, four children saw a silent vision of Our Lady surrounded by stars above a rooftop in Pontmain. That same night, the Prussian advance toward the town inexplicably stopped. Bishop Wicart approved the apparition in 1872.',
    description: [
      'On the evening of January 17, 1871, France was in crisis. Prussian forces had been advancing through Maine for weeks, and the village of Pontmain lay directly in their path. While feeding cattle, 12-year-old Eugène Barbedette noticed a beautiful woman standing in the sky above the neighbor\'s house, surrounded by three bright stars. His younger brother Joseph saw her too. Two adults who came to investigate saw nothing. When two other children arrived — Françoise Richer and Jeanne-Marie Lebossé — they also saw the vision clearly.',
      'Over the next two hours, while the adults led the gathered crowd in praying the Rosary and singing hymns, the vision expanded. An oval frame of smaller stars appeared around the lady. A banner unrolled beneath her feet, and golden letters formed slowly: "Mais priez, mes enfants. Dieu vous exaucera en peu de temps. Mon Fils se laisse toucher" — "But pray, my children. God will hear you in time. My Son allows Himself to be moved." Stars then appeared on her shoulders. A large red cross appeared over her heart. Finally the vision was obscured by a white veil that rose from below.',
      'The following morning, news arrived that the Prussian General Schmidt had received orders to halt the advance at Laval — directly in front of Pontmain. Within ten days, the armistice was signed (January 28, 1871). The Prussian forces that had been expected to occupy Pontmain never arrived. The soldiers of Pontmain, all of whom had been away at the front, all returned home alive after the war.',
      'Bishop Wicart of Laval opened an episcopal commission of inquiry and on February 17, 1872 — barely a year after the apparition — formally approved it as "a real apparition of the Blessed Virgin Mary." A basilica was built at Pontmain, and the site was designated by Pope Pius IX as a place of pilgrimage. Feast: January 17.',
    ],
    churchRecognition:
      'Formally approved by Bishop Wicart of Laval on February 17, 1872, following a canonical investigation. Pope Pius IX expressed personal support for the devotion. The Basilica of Our Lady of Pontmain was consecrated in 1900. Pope John Paul II visited Pontmain on September 19, 1996, and entrusted the peace of the world to Our Lady of Hope — her title at Pontmain. Feast: January 17.',
    significance:
      'Pontmain is one of the most politically dramatic of all approved apparitions — its timing during the Franco-Prussian War, its message of maternal intercession, and the near-immediate end of the military threat made its providential character impossible to ignore even for secular observers. The apparition\'s connection to hope in time of war has made Our Lady of Pontmain a patroness of peace, a title confirmed by John Paul II\'s 1996 visit. The silent, visual character of the apparition — letters forming slowly as the crowd prayed — gives it a catechetical simplicity unmatched by other apparitions.',
  },
  {
    id: 'knock',
    name: 'Our Lady of Knock',
    location: 'Knock, County Mayo, Ireland',
    country: 'Ireland',
    year: '1879',
    era: 'modern',
    continent: 'europe',
    seers: '15 witnesses of all ages, including Mary McLoughlin, Mary Beirne, and 13 others — adults and children',
    status: 'fully-approved',
    statusLabel: 'Fully Approved',
    messages: [
      'No words were spoken — the apparition was entirely silent. Its eloquence lay in what was shown: the Lamb of God on an altar, the Book of Revelation fulfilled in a tableau of the heavenly liturgy.',
      'The presence of St. John the Evangelist, the author of the Apocalypse, holding a book and appearing to preach without sound, suggests a connection to the Book of Revelation\'s vision of the heavenly throne.',
      'The silent apparition occurred during Ireland\'s most desperate period — the Land War, mass emigration, and famine — and was understood as Our Lady\'s consoling presence with a suffering people.',
    ],
    summary:
      'On August 21, 1879, fifteen witnesses of all ages saw a luminous tableau — Our Lady, St. Joseph, St. John the Evangelist, and the Lamb of God on an altar — on the gable wall of Knock parish church. The apparition was entirely silent. Pope John Paul II visited in 1979 for the centenary year.',
    description: [
      'On the rainy evening of August 21, 1879, the housekeeper of Knock\'s parish priest, Mary McLoughlin, noticed a strange luminous glow at the south gable of the parish church. She went to the home of Mary Beirne and returned with her. At the gable they saw three figures — a woman of extraordinary radiance, an old man, and a young man — and to their right, an altar bearing a cross and a lamb, around which angels hovered. The two women gathered neighbors and family members. Fifteen people — ranging from a 6-year-old child to a 75-year-old man — all saw the same vision clearly, despite the driving rain. They prayed for two hours while the figures remained.',
      'The central figure — identified as Our Lady — wore a white cloak and a golden crown, her hands raised in an attitude of prayer. To her right stood St. Joseph, bowing in reverence. To her left was a young man in bishop\'s vestments, holding a large book and appearing to preach — identified as St. John the Evangelist. On the altar to the right was a plain cross, and before it stood a lamb, around which bright angels hovered and wings were visible. Not a word was spoken. No witness heard any sound from the apparition.',
      'The parish priest, Archdeacon Cavanagh, was not among the witnesses on the night — he had been told of the apparition but did not go out. The fifteen witnesses were questioned separately and gave consistent, detailed, identical accounts. The apparition lasted approximately two hours and faded slowly.',
      'Archbishop John MacHale of Tuam appointed a commission of inquiry in 1879, which found the witnesses "trustworthy and reliable." A second commission in 1936 re-interviewed the surviving witnesses; their accounts were identical to those of 57 years before. Pope John Paul II visited Knock on September 30, 1979 — the centenary year — and celebrated Mass before 450,000 pilgrims, calling it "the goal of my journey to Ireland." He presented the Golden Rose — a papal honor — to the Knock Shrine. Feast: August 21.',
    ],
    churchRecognition:
      'Preliminary commission approved by Archbishop MacHale of Tuam in 1879; second investigation confirmed in 1936 under Archbishop Gilmartin. Pope John Paul II\'s visit on September 30, 1979, with 450,000 in attendance, served as the highest-level de facto papal endorsement of the apparition. Knock is the national Marian shrine of Ireland. The Knock Shrine receives approximately 1.5 million pilgrims annually. Ireland\'s only international Marian shrine airport (Knock International Airport) was built nearby to facilitate pilgrimage. Feast: August 21.',
    significance:
      'Knock is unique among all Marian apparitions in three ways: it had the largest number of simultaneous adult witnesses (15 people of all ages, tested separately and independently); no words were spoken — the entire communication was visual and liturgical; and the vision mirrored the heavenly liturgy of Revelation 5 — the Lamb on the altar surrounded by angels. Theologians have seen in Knock a vision of the Mass itself in its heavenly dimension, given to a suffering Irish people during the darkest years of the Land War and emigration crisis.',
  },
  {
    id: 'fatima',
    name: 'Our Lady of Fátima',
    location: 'Cova da Iria, Fátima, Portugal',
    country: 'Portugal',
    year: '1917',
    era: 'modern',
    continent: 'europe',
    seers: 'Lúcia dos Santos (survived to 2005), Francisco Marto (canonized 2017), Jacinta Marto (canonized 2017)',
    status: 'fully-approved',
    statusLabel: 'Fully Approved',
    messages: [
      '"Pray the Rosary every day to obtain peace for the world and the end of the war." — her primary and most repeated request across all six apparitions.',
      '"God wishes to establish in the world devotion to my Immaculate Heart... Russia will be consecrated to me, and she will be converted, and a period of peace will be granted to the world." — the prophetic heart of the Fátima message.',
      '"In the end, my Immaculate Heart will triumph." — the promise of ultimate victory, given in the context of warnings about apostasy, war, and persecution of the Church.',
    ],
    summary:
      'From May to October 1917, Our Lady appeared six times to three shepherd children in Fátima. The October 13 apparition was witnessed by a crowd of 70,000 who saw the Miracle of the Sun. The three secrets, the consecration of Russia, and the prophecy of persecution have made Fátima the most theologically significant Marian apparition of the 20th century.',
    description: [
      'Beginning on May 13, 1917 — the very day that would later be marked by the assassination attempt on Pope John Paul II — the Blessed Virgin Mary appeared to three shepherd children in a field near Fátima, Portugal. Lúcia dos Santos (10), Francisco Marto (9), and Jacinta Marto (7) saw a radiant woman above an oak tree, who identified herself as the Lady of the Rosary and requested that they return on the 13th of each month for six months. She gave the children a vision of hell to motivate their prayers of reparation.',
      'The apparitions continued monthly through October, drawing ever-larger crowds. On October 13, 1917, approximately 70,000 people gathered at the Cova da Iria in spite of heavy rain, hoping to see a promised sign. Suddenly the rain stopped, the clouds parted, and the sun — visible as a silver disk — began to spin and emit multicolored rays of light, then appeared to hurtle toward the earth before returning to its place. Witnesses across a twelve-mile radius reported the phenomenon; secular Portuguese newspapers reported it on their front pages. Scientists and atheists were among those who testified under oath.',
      'The three secrets of Fátima were communicated to the children in July 1917. The first was the vision of hell; the second was the prophecy that if humanity did not repent, a worse war than World War I would come (World War II, with an accompanying sign in the sky — widely identified with the extraordinary aurora borealis of January 1938). The third secret — revealed by Pope John Paul II in 2000 — was a vision of a "bishop dressed in white" being shot, widely interpreted as an allusion to the May 13, 1981 assassination attempt on John Paul II himself, who was shot in St. Peter\'s Square on the anniversary of the first apparition and credited his survival to Our Lady\'s intercession.',
      'Francisco and Jacinta died young (1919 and 1920) as predicted; Lúcia became a Carmelite nun and lived until 2005, writing the memoirs that form the primary documentary source of the Fátima message. Francisco and Jacinta were beatified by John Paul II in 2000 and canonized by Pope Francis on May 13, 2017, the centenary of the first apparition. The consecration of Russia to the Immaculate Heart, requested at Fátima, was performed by John Paul II in 1984 and renewed by Pope Francis on March 25, 2022. Feast: May 13.',
    ],
    churchRecognition:
      'Formally approved by Bishop José Alves Correia da Silva of Leiria on October 13, 1930, the thirteenth anniversary of the Miracle of the Sun. Multiple popes have personally visited Fátima: Paul VI (1967), John Paul II (1982, 1991, 2000), Benedict XVI (2010), and Francis (2017). The Fátima Shrine is the second most visited Marian shrine in the world after Guadalupe, receiving approximately 6 million pilgrims annually. The Feast of Our Lady of Fátima was extended to the universal Church. Feast: May 13.',
    significance:
      'Fátima is the most theologically dense and prophetically specific of all approved apparitions. Its three secrets engage the full drama of 20th-century history — two world wars, Soviet communism, and the attempted assassination of a Pope. No other apparition has been endorsed by five sitting popes in person at the shrine itself. The convergence of the May 13 date across the first apparition and the assassination attempt on John Paul II — who called Our Lady the agent of his survival and placed the bullet in her crown at Fátima — gives the apparition a providential character that no subsequent event has diminished. The 2022 Consecration of Russia by Pope Francis represents the most recent chapter of a continuing Fátima story.',
    notableSign:
      'The Miracle of the Sun, October 13, 1917: approximately 70,000 witnesses at the Cova da Iria, plus additional witnesses across a 12-mile radius, reported the sun spinning, changing colors, and appearing to fall toward the earth — reported by secular atheist journalists in Portuguese newspapers.',
  },
  {
    id: 'beauraing',
    name: 'Our Lady of Beauraing',
    location: 'Beauraing, Namur, Belgium',
    country: 'Belgium',
    year: '1932–1933',
    era: 'modern',
    continent: 'europe',
    seers: 'Five children of two families: Fernande, Gilberte, and Albert Voisin; Andrée and Gilberte Degeimbre',
    status: 'fully-approved',
    statusLabel: 'Fully Approved',
    messages: [
      '"I am the Immaculate Virgin." — her self-identification at Beauraing, mirroring Lourdes (1858) and connecting both apparitions to the dogma of the Immaculate Conception.',
      '"Do you love my Son? Do you love me? Then sacrifice yourself for me." — her request to Fernande Voisin on the final apparition, January 3, 1933.',
      '"Convert sinners. Pray, pray very much." — spoken repeatedly across multiple apparitions, the core of the Beauraing message.',
    ],
    summary:
      'In 33 apparitions between November 1932 and January 1933, the Virgin appeared over the garden railway of the Sisters of Notre Dame in Beauraing, Belgium, to five children. She identified herself as the Immaculate Virgin and showed a heart of gold. Over 2 million pilgrims arrived within the first years after approval.',
    description: [
      'On the evening of November 29, 1932, five children who had come to fetch their sister from the school of the Sisters of Notre Dame in Beauraing, Belgium, saw a luminous figure moving above the railway bridge in the garden. They identified her as the Blessed Virgin. The apparitions continued 33 times through January 3, 1933 — the number traditionally associated with the years of Christ\'s earthly life.',
      'The Lady appeared above a hawthorn bush in the garden, radiating a golden light. She wore a white dress and a golden crown. In later apparitions she showed the children her heart — a heart of solid gold, shining with extraordinary brilliance. She asked them repeatedly if they loved her Son and whether they would sacrifice themselves for her. The children were subjected to tests during the ecstasies: pins were pressed into their skin without response; candle flames were held beneath their hands without reaction. Medical and psychological experts observed and recorded.',
      'On the last apparition, January 3, 1933, the Lady gave a private communication to each child. After the apparitions concluded, one of the visionaries — Gilberte Voisin — was cured of a serious illness attributed to Our Lady\'s intercession. The case drew enormous public attention: within the first months after approval, over 2 million pilgrims came to Beauraing.',
      'Bishop Thomas Louis Heylen of Namur began a canonical inquiry shortly after the apparitions ended. Forty-one physicians participated in the medical commission. The formal approval came on July 2, 1949, under Bishop Charue — who stated the apparitions were "worthy of reasonable assent." The Beauraing Shrine continues as one of Belgium\'s major pilgrimage centers. Feast: August 22.',
    ],
    churchRecognition:
      'Formally approved by Bishop André-Marie Charue of Namur on July 2, 1949. A second declaration on August 22, 1949, granted specific authorization for public veneration. Pope John Paul II visited Beauraing on May 18, 1985, during his pastoral visit to Belgium. The Beauraing Shrine receives approximately 500,000 pilgrims annually. Feast: August 22.',
    significance:
      'Beauraing is remarkable for the number and diversity of its witnesses (five children from two unrelated families), the extensive medical testing conducted during ecstasies, and the rapidity and scale of pilgrim response. The golden heart shown to the children has become an emblem of Marian devotion in Belgium and throughout the French-speaking Catholic world. The 33 apparitions — the number of Christ\'s earthly years — are seen by commentators as a hidden theological signature connecting the apparition to the Incarnation.',
  },
  {
    id: 'banneux',
    name: 'Our Lady of Banneux',
    location: 'Banneux, Liège, Belgium',
    country: 'Belgium',
    year: '1933',
    era: 'modern',
    continent: 'europe',
    seers: 'Mariette Beco (12 years old)',
    status: 'fully-approved',
    statusLabel: 'Fully Approved',
    messages: [
      '"I am the Virgin of the Poor." — her self-identification at Banneux, deliberately universal in scope, addressed to all nations and especially the suffering.',
      '"This stream is reserved for me." — pointing to the spring that appeared at Banneux, which she designated as a place of healing for all nations.',
      '"I come to relieve suffering." — spoken on the second apparition, establishing the healing and pastoral character of the Banneux message.',
    ],
    summary:
      'In eight apparitions between January 15 and March 2, 1933, the Virgin appeared to Mariette Beco in the garden of her poor family\'s home near Banneux, Belgium. She identified herself as the Virgin of the Poor and led Mariette to a miraculous spring. Approved in 1949, Banneux is an international shrine drawing pilgrims from 160 countries.',
    description: [
      'On the night of January 15, 1933, Mariette Beco, a 12-year-old girl from a poor family in Banneux, was looking out the window for her brother when she saw a luminous figure in the garden. She pressed her face to the cold glass and saw a beautiful woman in white with a blue sash and a golden rose on her right foot, exactly as described at other Marian apparitions. Her atheist father looked at the same moment and saw only an unclear luminous shape that frightened him. Mariette ran outside, but the apparition had disappeared.',
      'In the second apparition (January 18), the Lady led Mariette through the snow to a small stream near the garden and plunged her hand into the water, saying "This stream is reserved for me." A miraculous spring of healing was associated with the site from that moment. In subsequent apparitions the Lady identified herself: "I am the Virgin of the Poor" and said she had come to relieve suffering — not only of Belgium but of all nations.',
      'Eight apparitions took place in total, the last on March 2, 1933. The simplicity and poverty of the setting — a small house, a rural family, a tiny stream — and the universality of the message ("for all nations") distinguished Banneux from the larger, more dramatic apparition sites of France. The Church recognized in it a complementarity with Beauraing, which had occurred simultaneously in the same country.',
      'Bishop Louis-Joseph Kerkhofs of Liège conducted a thorough canonical investigation over 16 years. On August 22, 1949 — the same day as the Beauraing approval — Bishop Kerkhofs formally approved the Banneux apparitions. Banneux today is recognized as an international pilgrimage shrine, with pilgrims arriving from over 160 countries. Feast: January 15.',
    ],
    churchRecognition:
      'Formally approved by Bishop Louis-Joseph Kerkhofs of Liège on August 22, 1949. The approval was confirmed and expanded in 1952. Pope John Paul II sent a Golden Rose to the Banneux Shrine in 1985. The Banneux Shrine is recognized as an international pilgrimage center with pilgrims from over 160 countries annually. A community of permanent chaplains maintains the shrine. Feast: January 15.',
    significance:
      'Banneux and Beauraing, both approved on August 22, 1949, represent a remarkable pairing — two independent Belgian apparitions in 1932–33, approved simultaneously, each with distinct characters: Beauraing grand and communal, Banneux intimate and universal. The "Virgin of the Poor" title has given Banneux a special resonance in the social teaching of the Church and in Catholic social action movements. Its international character — drawing pilgrims from 160 countries to a tiny Belgian village — testifies to the universality of Mary\'s maternal care.',
  },
  {
    id: 'akita',
    name: 'Our Lady of Akita',
    location: 'Akita, Japan',
    country: 'Japan',
    year: '1973',
    era: 'modern',
    continent: 'asia',
    seers: 'Sr. Agnes Katsuko Sasagawa (Sister of the Handmaids of the Eucharist)',
    status: 'fully-approved',
    statusLabel: 'Fully Approved',
    messages: [
      '"Many men in this world afflict the Lord. I desire souls to console Him to soften the anger of the Heavenly Father. I wish, with my Son, for souls who will repair by their suffering and poverty for the sinners and ingrates." — the central message of reparation given to Sr. Agnes.',
      '"The work of the devil will infiltrate even into the Church in such a way that one will see cardinals opposing cardinals, bishops against bishops." — the warning about internal division in the Church, given in the third message of October 13, 1973.',
      '"As I told you, if men do not repent and better themselves, the Father will inflict a terrible punishment on all humanity." — the gravest warning, followed by the promise that prayer and penance could still avert it.',
    ],
    summary:
      'From 1973, Sr. Agnes Sasagawa received three messages from Our Lady through a wooden statue that wept 101 times, bled from its hand, and exuded a fragrant oil. Sr. Agnes herself was cured of deafness. Approved by Bishop Ito in 1984 and personally reviewed and accepted by Cardinal Ratzinger (later Benedict XVI) for the Congregation for the Doctrine of the Faith.',
    description: [
      'Sr. Agnes Katsuko Sasagawa entered the Sisters of the Handmaids of the Eucharist in Akita, Japan, in the early 1970s, having been completely deaf since 1973 following a medical error. On June 12, 1973, she noticed a cross-shaped wound on her left hand and also began to see a brilliant light emanating from the tabernacle during adoration. She received locutions from her guardian angel and then, beginning June 26, 1973, from the Blessed Virgin Mary, who communicated through a small wooden statue of the Virgin placed in the convent chapel.',
      'The wooden statue of Our Lady in the convent chapel became the focus of a series of phenomena independently witnessed by the entire community. On June 28, 1973, a wound appeared in the right hand of the wooden statue, identical to the wound on Sr. Agnes\'s own hand. Both wounds began to bleed on the same day. The statue\'s wound healed on September 29, 1973. Subsequently, the statue wept — weeping actual human tears — on 101 documented occasions between January 4, 1975 and September 15, 1981 (the feast of Our Lady of Sorrows). The weeping was witnessed by Bishop John Shojiro Ito, visiting priests, journalists, and television crews, and was documented on film.',
      'A second phenomenon — the exudation of a sweet-smelling oil — was also documented on multiple occasions. Analysis of the tears, blood, and oil by Prof. Sagisaka of Akita University identified them as human in origin: the tears as type O blood group, the sweat as type B, the blood from the wound as type AB. Sr. Agnes was cured of her deafness on October 13, 1974 (the anniversary of the Miracle of the Sun at Fátima) — and was again struck deaf in 1982, then cured again on May 30, 1982.',
      'Bishop John Shojiro Ito of Niigata conducted the diocesan investigation over more than a decade. On April 22, 1984, he formally approved the supernatural character of the phenomena. The case was subsequently reviewed by the Congregation for the Doctrine of the Faith under Cardinal Joseph Ratzinger, who personally approved the devotion in 1988. Cardinal Ratzinger later became Pope Benedict XVI. Feast observed locally: October 13.',
    ],
    churchRecognition:
      'Formally approved by Bishop John Shojiro Ito of Niigata on April 22, 1984. The approval was confirmed by the Congregation for the Doctrine of the Faith under Cardinal Joseph Ratzinger in 1988 — the future Pope Benedict XVI personally reviewed and accepted the authenticity of the phenomena. This makes Akita one of only a handful of apparitions approved at the Vatican-dicastery level, not merely the diocesan level. The Akita Shrine is an active pilgrimage site in Japan. Feast observed: October 13.',
    significance:
      'Akita is unique in several respects: it is the only approved Marian apparition in Asia; it is one of the very few approved at the level of the Congregation for the Doctrine of the Faith (not merely the diocese); and it was personally reviewed by the man who would become Pope Benedict XVI, giving it an authority within the hierarchy of approvals that no other modern apparition can claim. The three messages, with their warnings about internal Church division and global catastrophe, have attracted intense theological attention in the post-conciliar era and continue to be debated in terms of their application to present Church conditions.',
    notableSign:
      'A wooden statue of Our Lady wept 101 documented times over six years (1975–1981), witnessed by a bishop, priests, journalists, and television crews; tears, blood, and oil were analyzed by a university professor and identified as human fluids.',
  },
  {
    id: 'kibeho',
    name: 'Our Lady of Kibeho',
    location: 'Kibeho, Gikongoro Province, Rwanda',
    country: 'Rwanda',
    year: '1981–1989',
    era: 'modern',
    continent: 'africa',
    seers: 'Alphonsine Mumureke (21), Nathalie Mukamazimpaka (17), and Marie-Claire Mukangango (21) — three students at a secondary school',
    status: 'fully-approved',
    statusLabel: 'Fully Approved',
    messages: [
      '"Repent, repent, repent." — the insistent call to conversion, repeated across years of apparitions to students, faculty, and the growing crowds who gathered at Kibeho.',
      'Visions of rivers of blood, severed heads, and people killing one another — prophetic images of mass atrocity shown to the seers in 1982, thirteen years before the Rwandan genocide of 1994.',
      '"Pray the Rosary and do penance for the conversion of sinners and the peace of the world." — linking Kibeho to the global stream of Marian apparition messages since Fátima.',
    ],
    summary:
      'From 1981, the Virgin appeared to several students at the Kibeho secondary school in Rwanda, delivering messages of repentance and showing them visions of mass slaughter — fulfilled in the 1994 genocide. Approved by Bishop Misago in 2001, Kibeho is the first and only approved Marian apparition in Africa.',
    description: [
      'On November 28, 1981, Alphonsine Mumureke, a 21-year-old student at the Kibeho secondary school in southern Rwanda, fell into an ecstasy in the school dining hall and reported seeing a beautiful woman who identified herself as "Nyina wa Jambo" — "Mother of the Word." The response of school officials and students was initially skeptical — Alphonsine was thought to be mentally ill or seeking attention. But the apparitions continued, and within months two other students — Nathalie Mukamazimpaka and Marie-Claire Mukangango — reported visions independently.',
      'The three seers were examined by medical commissions, psychologists, and theologians. During ecstasies witnessed by thousands of people, the seers showed the classic signs of genuine visionary experience: complete insensibility to pain, fixed gaze on a point invisible to others, and an expression of transcendent peace or sorrow depending on what they were seeing. On occasion, crowds of thousands gathered on the hillside and witnessed simultaneous ecstasies in all three seers.',
      'The most disturbing element of the Kibeho apparitions was the prophetic visions given to the seers in 1982 — vivid scenes of rivers of blood, a river carrying severed heads, and mass killing among the Rwandan people. The seers wept and cried out in horror at what they were shown. The visions were recorded and documented at the time. In April 1994, the Rwandan genocide began; approximately 800,000 people — most of them Tutsi — were killed in 100 days. The fulfillment of the 1982 visions in the events of 1994 became the most striking prophetic element of the Kibeho apparitions.',
      'Bishop Augustin Misago of Gikongoro, initially skeptical and cautious throughout the apparitions, conducted a formal diocesan investigation over twenty years. On June 29, 2001, he formally approved the apparitions of the three principal seers — Alphonsine, Nathalie, and Marie-Claire — as "worthy of belief," making Kibeho the first officially approved Marian apparition on the African continent. Feast: November 28.',
    ],
    churchRecognition:
      'Formally approved by Bishop Augustin Misago of Gikongoro on June 29, 2001, following a twenty-year canonical investigation. The approval covers the three principal seers: Alphonsine Mumureke, Nathalie Mukamazimpaka, and Marie-Claire Mukangango. The Kibeho Shrine was established as a national and international pilgrimage site. Pope Francis has expressed support for Kibeho devotion. The apparitions are designated as the first approved Marian apparition in Africa. Feast: November 28.',
    significance:
      'Kibeho stands apart from all other Marian apparitions in the starkness of its prophetic content and its subsequent fulfillment. The 1982 visions of mass slaughter, documented before the 1994 genocide, give the apparition a prophetic weight comparable to the Fátima secrets. As the only approved African apparition, Kibeho also represents the globalizing of Marian devotion beyond its European center of gravity — Our Lady appearing to young African students in a language and cultural context entirely different from medieval France or 19th-century Portugal. The site became a place of mourning and healing after the genocide, with the Shrine located at the heart of a region deeply scarred by the 1994 killings.',
    notableSign:
      'The prophetic visions of mass killing given in 1982 — rivers of blood, severed heads, genocide — documented thirteen years before the 1994 Rwandan genocide in which approximately 800,000 people were killed.',
  },
  {
    id: 'betania-venezuela',
    name: 'Our Lady of Betania',
    location: 'Betania, Miranda State, Venezuela',
    country: 'Venezuela',
    year: '1976–1984',
    era: 'modern',
    continent: 'americas',
    seers: 'María Esperanza de Bianchini (Servant of God, cause for canonization opened)',
    status: 'fully-approved',
    statusLabel: 'Fully Approved',
    messages: [
      '"Mary, Reconciler of Peoples and Nations" — her title at Betania, a call to unity amid the political and social divisions of Latin America.',
      'The need for prayer, conversion, and reconciliation in a time of social conflict — messages consistent with the Marian tradition since Fátima but articulated in a specifically Latin American context.',
      'A call to frequent reception of the Eucharist and Marian devotion as the path to personal and social renewal — linking the Betania apparitions to the Eucharistic miracle at the same site in 1991.',
    ],
    summary:
      'From 1976, the Virgin appeared repeatedly to María Esperanza de Bianchini at her farm in Betania, Venezuela. On March 25, 1984, over 100 people witnessed the apparition simultaneously. Approved by Bishop Pio Bello Ricardo in 1987, it is the first approved Marian apparition in South America and the site of the 1991 Eucharistic miracle.',
    description: [
      'María Esperanza de Bianchini was a Venezuelan mystic of extraordinary spiritual gifts — from childhood she had experienced visions, bilocation, the stigmata, and other reported phenomena. In 1976, she and her husband Geo Bianchini purchased a farm in the green hills of Betania in Miranda State, Venezuela, where she had been directed in a vision to establish a place of Marian pilgrimage. At this site, the Virgin Mary began appearing to her under the title "Mary, Reconciler of Peoples and Nations."',
      'The apparitions at Betania were not restricted to a single seer. Over the years, many visitors and pilgrims to the farm reported seeing the Virgin or experiencing locutions. The most dramatic collective apparition occurred on March 25, 1984, the Feast of the Annunciation, when over 100 people — of varying ages, backgrounds, and levels of religious practice — simultaneously reported seeing the Virgin at the Betania site. Each gave a consistent account of the apparition independently. This mass apparition was one of the decisive factors in the canonical investigation.',
      'Bishop Pio Bello Ricardo of Los Teques opened a canonical investigation shortly after the 1984 event. On November 21, 1987 — the Feast of the Presentation of Mary — he formally declared the Betania apparitions to be "authentic, supernatural, and of divine origin," making Betania the first approved Marian apparition in South America. The decree explicitly recognized the apparitions as occurring to multiple witnesses on March 25, 1984.',
      'The Betania site became doubly significant in 1991 when a Eucharistic miracle occurred there on December 8, the Feast of the Immaculate Conception: a consecrated Host began to visibly bleed during Mass celebrated by Fr. Otty Ossa Aristizábal. Bishop Pio Bello Ricardo approved the Eucharistic miracle in the same year, making Betania the only site recognized for both an approved Marian apparition and an approved Eucharistic miracle. María Esperanza died in 2004; her cause for canonization was formally opened by the Diocese of Fairfield, New Jersey (where she had spent time) in 2010. Feast: March 25.',
    ],
    churchRecognition:
      'Formally approved by Bishop Pio Bello Ricardo of Los Teques on November 21, 1987 — the first approved Marian apparition in South America. The apparitions of March 25, 1984, witnessed by over 100 persons simultaneously, were specifically recognized. The Betania Eucharistic miracle (December 8, 1991) was approved by the same bishop in 1991. The cause for canonization of María Esperanza was opened in 2010. The Betania Shrine continues to receive pilgrims. Feast: March 25.',
    significance:
      'Betania holds a unique place in Marian history as the first South American approved apparition and as the only site recognized for both an approved apparition and an approved Eucharistic miracle — giving it a double supernatural seal rarely found in Church history. The connection between the apparitions (1976–1984) and the Eucharistic miracle (1991) at the same location embodies the classic Marian theology: the Mother directing all devotion toward her Son present in the Eucharist. María Esperanza\'s extraordinary spiritual charisms, combined with the mass apparition of 1984 and the subsequent Eucharistic sign, make Betania one of the most richly documented supernatural sites of the 20th century.',
    notableSign:
      'Mass apparition of March 25, 1984 (Feast of the Annunciation): over 100 witnesses of varying backgrounds simultaneously reported the apparition, each giving independent and consistent accounts — one of the largest collective apparition events in Church history.',
  },
]

const filterOptions: { id: FilterType; label: string; count: (list: Apparition[]) => number }[] = [
  { id: 'all', label: 'All Apparitions', count: (l) => l.length },
  { id: 'approved', label: 'Fully Approved', count: (l) => l.filter((a) => a.status === 'fully-approved').length },
  { id: 'americas', label: 'The Americas', count: (l) => l.filter((a) => a.continent === 'americas').length },
  { id: 'europe', label: 'Europe', count: (l) => l.filter((a) => a.continent === 'europe').length },
  { id: 'africa-asia', label: 'Africa & Asia', count: (l) => l.filter((a) => a.continent === 'africa' || a.continent === 'asia').length },
  { id: 'modern', label: 'Modern Era', count: (l) => l.filter((a) => parseInt(a.year) >= 1830).length },
]

const statusConfig: Record<ApparitionStatus, { label: string; color: string; icon: typeof CheckCircle }> = {
  'fully-approved': { label: 'Fully Approved', color: 'bg-blue-100 text-blue-800', icon: CheckCircle },
  'approved-veneration': { label: 'Approved for Veneration', color: 'bg-indigo-100 text-indigo-800', icon: Shield },
  'approved-worthy-belief': { label: 'Worthy of Belief', color: 'bg-violet-100 text-violet-800', icon: Star },
}

export default function MarianApparitionsPage() {
  const [filter, setFilter] = useState<FilterType>('all')
  const [selectedId, setSelectedId] = useState<string | null>(null)

  const filteredApparitions = apparitions.filter((a) => {
    if (filter === 'approved') return a.status === 'fully-approved'
    if (filter === 'americas') return a.continent === 'americas'
    if (filter === 'europe') return a.continent === 'europe'
    if (filter === 'africa-asia') return a.continent === 'africa' || a.continent === 'asia'
    if (filter === 'modern') return parseInt(a.year) >= 1830
    return true
  })

  const selectedApparition = apparitions.find((a) => a.id === selectedId) ?? null

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
            style={{ backgroundColor: '#EFF6FF', color: '#1E40AF' }}
          >
            <Flame className="w-4 h-4" />
            Mysteries of the Faith
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-gray-900 mb-4">
            Marian Apparitions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Throughout history, the Blessed Virgin Mary has appeared to the faithful at critical moments,
            calling the Church to prayer, penance, and conversion. These approved apparitions have shaped
            Catholic devotion, confirmed defined dogmas, and left physical signs that defy natural explanation.
          </p>
        </div>

        {/* Doctrinal anchor */}
        <div className="rounded-xl p-6 mb-6 border" style={{ backgroundColor: '#EFF6FF', borderColor: '#BFDBFE' }}>
          <div className="flex items-start gap-3">
            <BookOpen className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#1E40AF' }} />
            <div>
              <h2 className="font-semibold text-gray-900 mb-2">
                The Church&apos;s Teaching on Private Revelation
              </h2>
              <p className="text-gray-700 text-sm leading-relaxed mb-2">
                "Throughout the ages, there have been so-called &apos;private&apos; revelations, some of which
                have been recognized by the authority of the Church. They do not belong, however, to the
                deposit of faith. It is not their role to improve or complete Christ&apos;s definitive
                Revelation, but to help live more fully by it in a certain period of history."
                — <em>CCC 67</em>
              </p>
              <p className="text-gray-700 text-sm leading-relaxed mb-2">
                The Church also teaches that Mary&apos;s fiat — her &quot;yes&quot; to the Incarnation — makes
                her the model of faith for all believers (CCC 148). Approved Marian apparitions are understood
                as her continued maternal presence in the life of the Church, always pointing toward her Son.
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                In May 2024, the Dicastery for the Doctrine of the Faith issued new{' '}
                <em>Norms for Proceeding in the Discernment of Alleged Supernatural Phenomena</em>,
                replacing the 1978 norms. These establish six possible conclusions ranging from full
                recognition (<em>nihil obstat</em>) to outright condemnation (<em>pro auctore non constat</em>),
                with intermediate levels for cases still under discernment. The apparitions on this page
                represent the highest level of Church recognition under both old and new frameworks.
              </p>
            </div>
          </div>
        </div>

        {/* CCC 148 note */}
        <div className="rounded-xl p-5 mb-10 border border-blue-200 flex items-start gap-3" style={{ backgroundColor: '#EFF6FF' }}>
          <Crown className="w-5 h-5 mt-0.5 flex-shrink-0 text-blue-600" />
          <div>
            <span className="font-semibold text-gray-900">Mary — Model of Faith (CCC 148)</span>
            <span className="text-gray-700 text-sm leading-relaxed ml-2">
              "The Virgin Mary most perfectly embodies the obedience of faith. By faith, Mary welcomed the tidings
              and the promise brought by the angel Gabriel, believing that &apos;with God nothing will be impossible&apos;
              and giving her assent: &apos;Behold I am the handmaid of the Lord; let it be done to me according to
              your word.&apos; Elizabeth greeted her: &apos;Blessed is she who believed.&apos;" In all approved
              Marian apparitions, Mary continues this same mission: calling the Church to a deeper, more
              surrendered faith in her Son.
            </span>
          </div>
        </div>

        {/* Apparitions Catalog */}
        <div className="mb-14">
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-5">
            Approved Apparitions
          </h2>

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
                    ? 'text-white border-blue-800'
                    : 'bg-white text-gray-600 border-gray-200 hover:border-blue-300 hover:text-blue-800'
                }`}
                style={filter === opt.id ? { backgroundColor: '#1E40AF', borderColor: '#1E40AF' } : {}}
              >
                {opt.label}
                <span
                  className={`ml-1.5 text-xs px-1.5 py-0.5 rounded-full ${
                    filter === opt.id ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'
                  }`}
                >
                  {opt.count(apparitions)}
                </span>
              </button>
            ))}
          </div>

          {/* Cards grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {filteredApparitions.map((apparition) => {
              const StatusIcon = statusConfig[apparition.status].icon
              const isSelected = selectedId === apparition.id
              return (
                <button
                  key={apparition.id}
                  onClick={() => handleCardClick(apparition.id)}
                  className={`text-left rounded-xl border p-5 transition-all hover:shadow-md ${
                    isSelected
                      ? 'shadow-md'
                      : 'border-gray-200 bg-white hover:border-blue-200'
                  }`}
                  style={
                    isSelected
                      ? { borderColor: '#1E40AF', backgroundColor: '#EFF6FF' }
                      : {}
                  }
                >
                  {/* Card header */}
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-serif text-lg font-semibold text-gray-900 leading-tight">
                        {apparition.name}
                      </h3>
                      <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                        <MapPin className="w-3 h-3" />
                        <span>{apparition.country}</span>
                        <span className="mx-1">·</span>
                        <Calendar className="w-3 h-3" />
                        <span>{apparition.year}</span>
                      </div>
                    </div>
                    <div className="flex-shrink-0 p-1.5 rounded-lg" style={{ backgroundColor: '#BFDBFE' }}>
                      <Heart className="w-4 h-4" style={{ color: '#1E40AF' }} />
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-xs text-gray-500 mb-2">
                    <Users className="w-3 h-3" />
                    <span className="line-clamp-1">{apparition.seers}</span>
                  </div>

                  <p className="text-sm text-gray-600 leading-relaxed mb-3 line-clamp-3">
                    {apparition.summary}
                  </p>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    <span
                      className={`inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full font-medium ${statusConfig[apparition.status].color}`}
                    >
                      <StatusIcon className="w-3 h-3" />
                      {statusConfig[apparition.status].label}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full font-medium bg-gray-100 text-gray-600">
                      <Globe className="w-3 h-3" />
                      {apparition.continent === 'africa' ? 'Africa' :
                       apparition.continent === 'asia' ? 'Asia' :
                       apparition.continent === 'americas' ? 'Americas' : 'Europe'}
                    </span>
                  </div>

                  <div className="flex items-center gap-1 text-xs font-medium text-blue-700 mt-1">
                    <Search className="w-3 h-3" />
                    View details
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        {/* The Church's Discernment Process */}
        <div className="mb-12">
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">
            The Church&apos;s Discernment Process
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <Shield className="w-4 h-4 text-blue-600" />
                Criteria for Evaluation
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                The Church&apos;s traditional discernment process (codified in the 1978 norms and now
                updated by the 2024 Dicastery document) evaluates alleged apparitions by examining
                both negative and positive criteria:
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span><strong>No contradiction of faith or morals</strong> — the content must be consistent with Scripture, Tradition, and the Magisterium.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Psychological integrity of the seer</strong> — no evidence of pathology, deception, or collective suggestion at the origin of the claim.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span><strong>No doctrinal error in the message</strong> — private revelations must not add to or contradict public revelation.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Spiritual fruits</strong> — conversion, prayer, penance, and lasting good effects in the Church and in the lives of those who embrace the devotion.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Physical signs, if present</strong> — miraculous healings, incorruption, or other phenomena are examined but not required for approval.</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <Globe className="w-4 h-4 text-blue-600" />
                Levels of Approval
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                The 2024 Vatican document{' '}
                <em>Norms for Proceeding in the Discernment of Alleged Supernatural Phenomena</em>{' '}
                (Dicastery for the Doctrine of the Faith) replaced the 1978 norms and introduced
                six levels of possible conclusion:
              </p>
              <div className="space-y-3">
                <div className="rounded-lg p-3 border" style={{ backgroundColor: '#EFF6FF', borderColor: '#BFDBFE' }}>
                  <p className="text-xs font-semibold text-blue-800 mb-0.5">Nihil obstat</p>
                  <p className="text-xs text-gray-600">Nothing against it — the highest positive recognition; implicitly authorizes veneration.</p>
                </div>
                <div className="rounded-lg p-3 border border-indigo-100 bg-indigo-50">
                  <p className="text-xs font-semibold text-indigo-800 mb-0.5">Prae oculis habeatur</p>
                  <p className="text-xs text-gray-600">To be kept in view — positive signs present but requiring further study or caution.</p>
                </div>
                <div className="rounded-lg p-3 border border-gray-200 bg-gray-50">
                  <p className="text-xs font-semibold text-gray-700 mb-0.5">Sub iudice</p>
                  <p className="text-xs text-gray-600">Under judgment — the investigation is ongoing; no judgment rendered yet.</p>
                </div>
                <div className="rounded-lg p-3 border border-amber-100 bg-amber-50">
                  <p className="text-xs font-semibold text-amber-800 mb-0.5">Curatur — with restrictions</p>
                  <p className="text-xs text-gray-600">Attention required — possible problems identified; the faithful are cautioned without outright condemnation.</p>
                </div>
                <div className="rounded-lg p-3 border border-red-100 bg-red-50">
                  <p className="text-xs font-semibold text-red-800 mb-0.5">Constat de non supernaturalitate</p>
                  <p className="text-xs text-gray-600">The supernatural character is not established — a natural or human explanation is found sufficient.</p>
                </div>
                <div className="rounded-lg p-3 border border-red-200 bg-red-50">
                  <p className="text-xs font-semibold text-red-900 mb-0.5">Pro auctore non constat</p>
                  <p className="text-xs text-gray-600">Outright condemnation — the phenomenon is determined to be deceptive, doctrinally erroneous, or harmful.</p>
                </div>
              </div>
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
              Catechism of the Catholic Church, §§67 (Private Revelation), 148 (Mary — Model of Faith),
              971 (Veneration of Mary), 2683 (Mary — model of prayer)
            </li>
            <li>
              Dicastery for the Doctrine of the Faith.{' '}
              <em>Norms for Proceeding in the Discernment of Alleged Supernatural Phenomena</em>.
              Vatican City, May 17, 2024. (Replaces the 1978 Congregation for the Doctrine of the Faith norms.)
            </li>
            <li>
              Laurentin, René. <em>Bernadette of Lourdes: A Life Based on Authenticated Documents</em>.
              Minneapolis: Winston Press, 1979. — The standard scholarly biography of St. Bernadette.
            </li>
            <li>
              Laurentin, René. <em>The Apparitions of the Blessed Virgin Mary Today</em>.
              Dublin: Veritas, 1990. — Survey of modern apparitions with canonical status.
            </li>
            <li>
              Zimdars-Swartz, Sandra L. <em>Encountering Mary: From La Salette to Medjugorje</em>.
              Princeton: Princeton University Press, 1991. — Scholarly comparative study of Marian apparitions.
            </li>
            <li>
              Miravalle, Mark. <em>Introduction to Medjugorje</em>. Goleta: Queenship Publishing, 1993.
              — Context for unapproved and disputed apparitions alongside approved cases.
            </li>
            <li>
              Johnston, Francis. <em>Fatima: The Great Sign</em>. Rockford: TAN Books, 1980.
              — Standard devotional-historical account of the Fátima apparitions and Miracle of the Sun.
            </li>
            <li>
              Walsh, William Thomas. <em>Our Lady of Fátima</em>. New York: Macmillan, 1947.
              — Classic historical narrative of the Fátima events.
            </li>
            <li>
              Ito, John Shojiro (Bishop of Niigata). Pastoral Letter approving the Akita apparitions.
              Niigata Diocese, April 22, 1984.
            </li>
            <li>
              Congregation for the Doctrine of the Faith (Card. Ratzinger). Approval of Akita devotion, 1988.
            </li>
            <li>
              Misago, Augustin (Bishop of Gikongoro). Declaration approving the Kibeho apparitions.
              June 29, 2001. — First official approval of an African Marian apparition.
            </li>
            <li>
              Pio Bello Ricardo (Bishop of Los Teques). Decree approving the Betania apparitions.
              November 21, 1987. — First approved apparition in South America.
            </li>
            <li>
              Callahan, Philip Serna. <em>The Tilma Under Infrared Radiation</em>. Washington: CARA, 1981.
              — NASA infrared study of the Guadalupe image documenting the absence of human artistic technique.
            </li>
            <li>
              Smith, Jody Brant. <em>The Image of Guadalupe: Myth or Miracle?</em>
              New York: Doubleday, 1983. — Survey of scientific studies of the tilma.
            </li>
          </ul>
        </div>

      </div>

      {/* Modal overlay */}
      {selectedApparition && (
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
              style={{ backgroundColor: '#EFF6FF', borderColor: '#BFDBFE' }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-1.5">
                    <span
                      className={`inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full font-medium ${statusConfig[selectedApparition.status].color}`}
                    >
                      <CheckCircle className="w-3 h-3" />
                      {statusConfig[selectedApparition.status].label}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full font-medium bg-gray-100 text-gray-600">
                      <Globe className="w-3 h-3" />
                      {selectedApparition.continent === 'africa' ? 'Africa' :
                       selectedApparition.continent === 'asia' ? 'Asia' :
                       selectedApparition.continent === 'americas' ? 'Americas' : 'Europe'}
                    </span>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-gray-900 mb-1">
                    {selectedApparition.name}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {selectedApparition.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {selectedApparition.year}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-500 mt-1.5">
                    <Users className="w-3.5 h-3.5" />
                    <span>{selectedApparition.seers}</span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedId(null)}
                  className="p-2 rounded-xl hover:bg-blue-100 text-gray-500 hover:text-gray-800 transition-colors flex-shrink-0"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal body */}
            <div className="p-5 sm:p-6 bg-white grid md:grid-cols-2 gap-8">
              {/* Left: narrative + church recognition */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Scroll className="w-4 h-4 text-blue-600" />
                  The Apparitions
                </h4>
                {selectedApparition.description.map((para, i) => (
                  <p key={i} className="text-gray-700 text-sm leading-relaxed mb-3">
                    {para}
                  </p>
                ))}

                <h4 className="font-semibold text-gray-900 mb-3 mt-5 flex items-center gap-2">
                  <Eye className="w-4 h-4 text-blue-600" />
                  The Seers
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {selectedApparition.seers}
                </p>
              </div>

              {/* Right: messages + church recognition + significance */}
              <div>
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Heart className="w-4 h-4 text-blue-600" />
                    The Messages
                  </h4>
                  <div
                    className="rounded-lg border p-4"
                    style={{ backgroundColor: '#EFF6FF', borderColor: '#BFDBFE' }}
                  >
                    <ul className="space-y-3">
                      {selectedApparition.messages.map((msg, i) => (
                        <li key={i} className="text-gray-700 text-sm leading-relaxed flex items-start gap-2">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#1E40AF' }} />
                          <span>{msg}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Church className="w-4 h-4 text-blue-600" />
                    Church Recognition
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {selectedApparition.churchRecognition}
                  </p>
                </div>

                {selectedApparition.notableSign && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <Star className="w-4 h-4 text-blue-600" />
                      Notable Sign
                    </h4>
                    <div className="rounded-lg border border-blue-100 p-4 bg-blue-50">
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {selectedApparition.notableSign}
                      </p>
                    </div>
                  </div>
                )}

                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-blue-600" />
                  Significance
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {selectedApparition.significance}
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
