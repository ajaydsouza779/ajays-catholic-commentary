import type { SundayCommentary } from './types'

/**
 * Authoritative commentary entries. Each entry belongs to a specific liturgical cycle
 * and calendar date. The cycle is authoritative — do not override with getCycleForDate.
 */
const sundayCommentaries: SundayCommentary[] = [
  {
    id: '2026-05-03',
    date: '2026-05-03',
    cycle: 'A',
    sundaySlug: '5th-sunday-easter',
    sundayName: '5th Sunday of Easter — I Am the Way, the Truth, and the Life',
    gospelRef: 'John 14:1-12',
    gospelText: `Jesus said to his disciples: "Do not let your hearts be troubled. You have faith in God; have faith also in me. In my Father's house there are many dwelling places. If there were not, would I have told you that I am going to prepare a place for you? And if I go and prepare a place for you, I will come back again and take you to myself, so that where I am you also may be. Where I am going you know the way."

Thomas said to him, "Master, we do not know where you are going; how can we know the way?" Jesus said to him, "I am the way and the truth and the life. No one comes to the Father except through me. If you know me, then you will also know my Father. From now on you do know him and have seen him."

Philip said to him, "Master, show us the Father, and that will be enough for us." Jesus said to him, "Have I been with you for so long a time and you still do not know me, Philip? Whoever has seen me has seen the Father. How can you say, 'Show us the Father'? Do you not believe that I am in the Father and the Father is in me? The words that I speak to you I do not speak on my own. The Father who dwells in me is doing his works. Believe me that I am in the Father and the Father is in me, or else, believe because of the works themselves. Amen, amen, I say to you, whoever believes in me will do the works that I do, and will do greater ones than these, because I am going to the Father."`,
    firstReading: `Acts 6:1-7 — The Twelve appoint seven men "filled with the Spirit and wisdom" — including Stephen and Philip — to serve at table so the apostles can devote themselves to "prayer and the ministry of the word." The number of disciples grows greatly, and "a large group of priests" become obedient to the faith.`,
    psalm: `Psalm 33 — "Lord, let your mercy be on us, as we place our trust in you."`,
    secondReading: `1 Peter 2:4-9 — Christ is the "living stone" rejected by men but chosen and precious in God's sight. The faithful are themselves "living stones" being built into a spiritual house, "a chosen race, a royal priesthood, a holy nation, a people of God's own."`,
    context: `Like last Sunday and the next, the Fifth Sunday of Easter draws its Gospel not from a Resurrection appearance but from the Last Supper Farewell Discourse (John 13–17), Jesus's long, intimate teaching to the Twelve on the eve of his Passion. The Church reads these chapters during Eastertide because the Risen Christ's living presence in the Church is precisely what Jesus had promised at the Supper — the indwelling of the Father and the Son in the disciple, the coming of the Spirit, and the way prepared for us in the Father's house.

The passage opens with Jesus addressing hearts that are, in fact, deeply troubled. He has just predicted Judas's betrayal (John 13:21-30) and Peter's denial (John 13:36-38). The disciples are confused, alarmed, and frightened. Into that fear Jesus speaks the line that has consoled Christians for two thousand years: "Do not let your hearts be troubled. You have faith in God; have faith also in me." Then comes the great revelation: he is going to prepare a place; he will come back; the way is known to them — even when they think it is not. Thomas voices the disciples' uncertainty: "We do not know where you are going; how can we know the way?" Jesus's answer is one of the most concentrated revelations in the New Testament — "I am the way and the truth and the life." It is an utterance of divine identity (the absolute ego eimi, "I AM," echoing Exodus 3:14), and an utterance of divine accessibility: through me you reach the Father. Then Philip makes his bold request — "Show us the Father" — and Jesus's reply unfolds the doctrine of the Trinity in seed form: "Whoever has seen me has seen the Father… I am in the Father and the Father is in me."

Scholars place the final form of John's Gospel around AD 90–100. Raymond E. Brown's monumental commentary (Anchor Bible) and Richard Bauckham's work on the eyewitness origins of the Fourth Gospel both argue that beneath John's mature theological reflection lies authentic memory traced through "the disciple whom Jesus loved." The Farewell Discourse, while shaped by the Johannine community's prayer and meditation, preserves the substance of Jesus's last instruction. Early Christian writers from Ignatius of Antioch (c. AD 110) onward already cite or echo John 14, evidence that the discourse was treasured from the Church's first generation.

A practical note for preaching: 1st-century rabbis often spoke of "the way" (Hebrew derek, Greek hodos) as a complete pattern of life — not just the means but the manner. When Jesus says "I am the way," he is not offering a method or a doctrine; he is offering himself, his person, his way of being. This will matter for how the homily lands.`,
    themes: [
      '"Do not let your hearts be troubled" — Jesus speaks to fear with the gift of faith',
      'The Father\'s house with many dwelling places — Christ goes ahead to prepare for us',
      '"I am the way and the truth and the life" — the third great "I AM" saying of John',
      'Christ as the unique mediator: "No one comes to the Father except through me"',
      'Trinitarian intimacy: "Whoever has seen me has seen the Father"',
      '"Greater works than these" — the promise to the Church beyond the Ascension',
    ],
    commentary: `**"Do Not Let Your Hearts Be Troubled" — A Word Spoken into Real Fear**

The first line of today's Gospel is one of the most quoted in pastoral ministry, and for good reason. Jesus does not say, "Stop being afraid; nothing is wrong." He says, "Do not let your hearts be troubled — have faith in God; have faith also in me." He acknowledges that the disciples have every reason to be troubled. Judas has just gone out into the night. Peter is about to deny him. The cross is hours away. Jesus's response to legitimate fear is not denial but redirection: place your trust in God and in me. Christian peace is not the absence of trouble but the presence of faith inside trouble. Pope Benedict XVI made this point repeatedly in his catecheses on John: the Christian is not promised a life without storms but the One who stands with him in the storm.

**"In My Father's House Are Many Dwelling Places" — The Geography of Hope**

The Greek word *monai* (dwelling places) appears only twice in the New Testament — both in John 14 (verses 2 and 23). It is the noun form of the verb *menein*, "to remain" or "to abide" — a key Johannine word. Jesus is saying something more than "heaven has lots of rooms." He is saying that in the Father's house there are many "abidings," many places of permanent communion with God, prepared for those who belong to him. Heaven is not a generic afterlife but a person-shaped, prepared, and individual reception. The Father has been thinking of you specifically. Pope Francis has often returned to this image in his Easter homilies, framing heaven not as a vague reward but as a homecoming to a place already made ready.

**"I Am the Way and the Truth and the Life" — A Single Reality, Not Three**

This is the sixth of the seven great "I AM" sayings of John (the others: bread of life, light of the world, gate of the sheep, good shepherd, resurrection and the life, true vine). Notice the grammar: there is one definite article in the Greek (*hē hodos kai hē alētheia kai hē zōē*) governing all three nouns. Jesus does not give us three things; he gives us one reality with three faces. He is the way *because* he is the truth and the life. He is the path because he is the destination. Augustine captured this in a famous formulation in his *Tractates on John* (Tractate 69): "He says not, 'I show the way,' but 'I am the way.' Through the man Christ you go; to the God Christ you go." The way is not separable from the One walking with us.

**"No One Comes to the Father Except Through Me" — The Hard Saying That Is Also Good News**

This verse has been a stumbling block for some, especially in a pluralistic age. The Catholic Church reads it carefully and clearly. The Second Vatican Council's *Lumen Gentium* (§16) and the Declaration *Nostra Aetate* affirm that God's saving grace is universal in scope, even where Christ is not yet known by name; but the Council also confirms what Scripture teaches: whatever salvation reaches anyone reaches them through Christ, the unique Mediator (cf. 1 Tim 2:5). The 2000 Declaration *Dominus Iesus*, issued under Pope John Paul II, restated this with precision — Christ is the unique and universal Savior, even as the Spirit works "in ways known to God" outside the visible Church (cf. CCC 846-848). The verse is not a threat; it is a revelation of how mercy actually reaches the world.

**Pope John Paul II on Christ the Way — *Veritatis Splendor* and *Redemptor Hominis***

John Paul II opened his pontificate (1978) with the cry: "Open wide the doors to Christ!" His first encyclical, *Redemptor Hominis*, framed every human longing as ultimately a longing for Christ — because Christ alone reveals man to himself (RH 10). His later moral encyclical *Veritatis Splendor* (1993) took up John 14:6 directly, insisting that the Christian moral life is not the application of abstract rules but the personal following of Christ who *is* the way. To follow him is not to imitate a code; it is to walk with a person.

**"Show Us the Father" — Philip's Request and the Trinity Glimpsed**

Philip's question — "Show us the Father, and that will be enough for us" — sounds almost desperate. Jesus's reply is one of the most theologically dense lines in Scripture: "Whoever has seen me has seen the Father." This is not Jesus identifying himself simplistically with the Father; the very next sentence distinguishes them: "I am in the Father and the Father is in me." This mutual indwelling, *perichoresis* in later Greek theology, is the seed of the doctrine of the Trinity. The Catechism unfolds it in §§ 253-256: three Persons, one God, distinguished by their relations of origin but utterly one in being. The Easter season's reading of this discourse is providential — the Resurrection is precisely the revelation that this Jesus, crucified and risen, is in the Father and the Father in him.

**"Greater Works Than These" — The Astonishing Promise to the Church**

The closing verse is breathtaking and easily missed: "Whoever believes in me will do the works that I do, and will do greater ones than these, because I am going to the Father." How can the disciple do greater works than the incarnate Son of God? Augustine and Aquinas both answer: not greater in nature but greater in extent. Through the Spirit the Risen Christ pours out, his Body — the Church — extends his saving works to every nation, every century, every soul. The Acts of the Apostles, our first reading today, shows it beginning: thousands baptized, the gospel reaching Gentiles, even priests of the Temple becoming obedient to the faith. The first reading and Gospel interpret each other; the Church's mission is the Risen Christ's "greater works" already in motion.

**Reading the First and Second Readings Together**

The first reading (Acts 6:1-7) records the appointment of the Seven — including Stephen, the first martyr, and Philip the deacon — as the apostles delegate the ministry of service so they may devote themselves to prayer and the word. This is the moment the Church begins to organize her common life around prayer, word, and charity. The second reading (1 Peter 2:4-9) names what the baptized have become: living stones built on Christ the cornerstone, "a royal priesthood, a holy nation." The Father's house of many dwelling places is being constructed *now*, in real history, out of the very people Jesus is addressing — and us. Together with the Gospel, the readings form a single picture: Christ is the way; the Church is the people who walk that way; her structure (deacons, presbyters, apostles) and her dignity (royal priesthood) flow from him.

**A Note for the Homilist**

This Gospel is among the most frequently chosen for funerals — for good reason. But on a Sunday in Eastertide, the homilist can resist treating it only as a consolation for grief. It is also a manifesto: Christ is the truth that orients every other truth, the life that exposes every counterfeit life, the way that is not a method but a Person. In a culture that prizes "your truth" and "my truth," John 14:6 stands like a granite pillar. To preach this Gospel without timidity, but with the warmth of one who knows Christ has prepared a place for *this congregation specifically*, is to give the people what the Easter season exists to give: the assurance that the Risen One has gone ahead of us, knows the way, and is the way.`,
    application: `**For reflection and preaching this week:**

- **Read John 14:1-12 in full, slowly, three times.** First time, listen to the troubled disciples. Second time, listen to Thomas's bewilderment — "we do not know the way." Third time, listen to Philip's longing — "show us the Father." Each disciple speaks for a different soul in the pew on Sunday.

- **Preach Christ as the way *of* truth and life, not as one signpost among many.** Resist the temptation to soften John 14:6 into a vague universalism. Hold the Council's clear teaching: salvation is universal in scope precisely *because* it flows through Christ, even where his name is not yet known. The verse is good news, not a threat.

- **Connect the Gospel to the first reading.** The "greater works" Jesus promises are visible in Acts 6 — the Church organizing herself for word, prayer, and service. A homily that links the two readings shows the congregation that the promise is already being kept, in the Church they are part of.

- **For the parish — invite a concrete trust this week.** Ask the congregation to name one place where their hearts are troubled — health, family, work, the world's news. Then ask them to take that very thing into their daily prayer with the words "I have faith in you, Lord; help my unbelief" (Mark 9:24). Faith is not the absence of trouble; it is the willingness to bring trouble to the One who has prepared a place.

- **For priests preparing the homily — pray Psalm 33 with the congregation in mind.** "Lord, let your mercy be on us, as we place our trust in you." The psalm is the hinge of today's liturgy; it asks for the very faith Jesus calls forth. Let it shape the prayer behind the sermon.

- **Receive the Eucharist as a foretaste of the dwelling place.** Every Mass is a preview of the Father's house. The same Christ who is preparing a place is given to us under the species of bread and wine. Let Sunday's Communion be received in that light — not as a private devotion but as the Risen One coming to take us to himself.`,
    sources: [
      'New American Bible Revised Edition (NABRE) — Lectionary for Mass',
      'Catechism of the Catholic Church §§ 151-152 (faith in Christ); §§ 253-256 (Trinity, perichoresis); §§ 846-848 (universality of salvation through Christ); §§ 2466 (Christ as Truth)',
      'Second Vatican Council, *Lumen Gentium* §§ 14-16 (the Church and salvation); *Dei Verbum* on Christ as the fullness of revelation',
      'Pope John Paul II, *Redemptor Hominis* (1979), § 10; *Veritatis Splendor* (1993), §§ 6-21 (Christ as the way of moral life)',
      'Congregation for the Doctrine of the Faith, *Dominus Iesus* (2000), on the unicity and universality of Christ\'s salvific mediation',
      'Pope Benedict XVI, *Jesus of Nazareth, Vol. 2: Holy Week — From the Entrance into Jerusalem to the Resurrection* (2011), ch. on the Farewell Discourses',
      'St. Augustine, *Tractates on the Gospel of John*, Tractates 67-70 (on John 14:1-12)',
      'St. Thomas Aquinas, *Commentary on the Gospel of John*, Lectures on chapter 14',
      'Raymond E. Brown, *The Gospel According to John XIII-XXI* (Anchor Bible Commentary, 1970), pp. 618-633',
      'Francis J. Moloney, *The Gospel of John* (Sacra Pagina Series), commentary on John 14',
      'Richard Bauckham, *Jesus and the Eyewitnesses* (2006), on the Johannine tradition',
    ],
  },
  {
    id: '2026-04-26',
    date: '2026-04-26',
    cycle: 'A',
    sundaySlug: '4th-sunday-easter',
    sundayName: '4th Sunday of Easter — Good Shepherd Sunday',
    gospelRef: 'John 10:1-10',
    gospelText: `Jesus said: "Amen, amen, I say to you, whoever does not enter a sheepfold through the gate but climbs over elsewhere is a thief and a robber. But whoever enters through the gate is the shepherd of the sheep. The gatekeeper opens it for him, and the sheep hear his voice, as the shepherd calls his own sheep by name and leads them out. When he has driven out all his own, he walks ahead of them, and the sheep follow him, because they recognize his voice. But they will not follow a stranger; they will run away from him, because they do not recognize the voice of strangers."

Although Jesus used this figure of speech, the Pharisees did not realize what he was trying to tell them.

So Jesus said again, "Amen, amen, I say to you, I am the gate for the sheep. All who came before me are thieves and robbers, but the sheep did not listen to them. I am the gate. Whoever enters through me will be saved, and will come in and go out and find pasture. A thief comes only to steal and slaughter and destroy; I came so that they might have life and have it more abundantly."`,
    firstReading: 'Acts 2:14a, 36-41 — Peter\'s Pentecost sermon: "Repent and be baptized." About 3,000 were added that day.',
    psalm: 'Psalm 23 — "The Lord is my shepherd; there is nothing I shall want."',
    secondReading: '1 Peter 2:20b-25 — "You had gone astray like sheep, but you have now returned to the shepherd and guardian of your souls."',
    context: `The Fourth Sunday of Easter is traditionally known as "Good Shepherd Sunday." Each year, the Gospel is taken from John chapter 10, where Jesus presents himself as the Good Shepherd and the Gate of the sheepfold. In Year A, we read John 10:1-10, which focuses on the image of Jesus as the gate.

This discourse takes place after Jesus healed a man born blind (John 9). The Pharisees, who should have been the shepherds of Israel, cast the healed man out of the synagogue. Jesus contrasts their failed leadership with his own role as the true shepherd who knows his sheep by name.

In first-century Palestine, shepherds were familiar figures. Sheep were kept in communal enclosures (sheepfolds) at night, guarded by a gatekeeper. In the morning, each shepherd would call his own sheep by name, and they would recognize his voice and follow him out to pasture. The intimacy of this relationship — a shepherd who knows each sheep individually — is the image Jesus uses for his relationship with each of us.

The "thieves and robbers" likely refer to false messianic figures and corrupt religious leaders who exploited the people rather than serving them. Jesus contrasts their destructive approach with his own mission: "I came so that they might have life and have it more abundantly."`,
    themes: [
      'Jesus as the Gate — the only authentic way to salvation and life',
      'The voice of the Shepherd — recognizing Christ\'s voice amid competing voices in our lives',
      'Life in abundance — not mere survival, but the fullness of life that comes from following Christ',
      'True vs. false shepherds — discerning authentic spiritual leadership',
      'The personal love of Christ — he calls each sheep "by name"',
    ],
    commentary: `There are two striking images in today's Gospel: Jesus as the shepherd and Jesus as the gate. Both reveal something essential about who Christ is and how he relates to us.

**The Shepherd Who Calls by Name**

In the ancient Near East, a shepherd's relationship with his flock was deeply personal. Unlike modern ranching, ancient shepherds walked ahead of their sheep (not behind them, driving them). The sheep followed because they knew and trusted the shepherd's voice. Jesus says the shepherd "calls his own sheep by name." This is not mass management — it is intimate, individual love.

This image challenges us: Do we recognize the voice of Christ? In a world filled with competing voices — social media, cultural pressures, political ideologies, our own anxieties — can we distinguish the voice of the Good Shepherd? The sheep in Jesus' parable can tell the difference between the shepherd and a stranger. The spiritual life is, in part, the ongoing cultivation of this capacity to hear and recognize the Lord's voice in Scripture, in prayer, in the sacraments, and in the community of the Church.

**The Gate — Not a Gatekeeper**

Jesus then shifts the metaphor: "I am the gate." This is a bold claim. He is not merely a teacher who points to the gate, or a gatekeeper who controls access. He himself is the gate — the way, the means, the access point to salvation and abundant life.

The gate serves two purposes: it lets the sheep out to find pasture (freedom, nourishment, life), and it protects them from thieves and predators. Christ is both our freedom and our protection. Through him we "come in and go out and find pasture" — the Christian life is not imprisonment but a journey of freedom within the security of God's love.

**Life More Abundantly**

The Gospel's climax is Jesus' declaration: "I came so that they might have life and have it more abundantly." The Greek word here is *perisson* — life overflowing, beyond measure. This is not a promise of material prosperity, but of spiritual fullness. It is the life of grace, the indwelling of the Holy Spirit, participation in the very life of God.

The thief comes to steal, slaughter, and destroy. Every voice that leads us away from Christ — whether it promises pleasure, power, or autonomy — ultimately diminishes life rather than enhancing it. The abundant life Christ offers is found, paradoxically, in self-giving love, in the surrender of our will to the Good Shepherd who laid down his life for the sheep (John 10:11, which we will hear in Year B).

**Good Shepherd Sunday and Vocations**

The Church traditionally dedicates Good Shepherd Sunday to prayer for vocations to the priesthood and religious life. Priests are called to be shepherds after the heart of Christ — not hirelings who flee when the wolf comes, but pastors who know their people by name and are willing to lay down their lives for them. Today we pray for more such shepherds, and for the grace to recognize and follow the voice of Christ wherever he leads.`,
    application: `**For reflection this week:**

- **Listen for the Shepherd's voice.** Set aside 10 minutes of silence each day this week. Read a short passage of the Gospels slowly. Ask: "Lord, what are you saying to me today?" The sheep learn to recognize the shepherd's voice through repeated, attentive listening.

- **Name the competing voices.** What "strangers' voices" are loudest in your life right now? Anxiety? Ambition? Social media? A particular ideology? Name them honestly, and ask whether they lead to abundant life or to diminishment.

- **Pray for shepherds.** This is World Day of Prayer for Vocations. Pray specifically for your parish priest, your bishop, and for young people discerning a vocation. A Church without good shepherds is a flock without protection.

- **Be a gate, not a wall.** Christ is a gate — open, inviting, protective but not imprisoning. How can you be a channel of Christ's abundant life to someone this week? A word of encouragement, an act of service, a moment of genuine presence?`,
    sources: [
      'New American Bible Revised Edition (NABRE) — Gospel text from the Lectionary for Mass',
      'Pope Benedict XVI, Jesus of Nazareth, Vol. 1, Chapter 8: "The Principal Images of John\'s Gospel" (on the Good Shepherd discourse)',
      'Pope Francis, World Day of Prayer for Vocations messages (2013-2025)',
      'Raymond E. Brown, The Gospel According to John I-XII (Anchor Bible Commentary), pp. 384-400',
      'Francis J. Moloney, The Gospel of John (Sacra Pagina), commentary on John 10',
    ],
  },
]

export default sundayCommentaries
