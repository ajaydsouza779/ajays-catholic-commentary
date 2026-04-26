'use client'

import { useState } from 'react'
import { BookOpen, Calendar, ChevronDown, ChevronUp } from 'lucide-react'

interface GospelEntry {
  id: string
  date: string
  sundayName: string
  liturgicalYear: string
  gospelRef: string
  gospelText: string
  firstReading: string
  psalm: string
  secondReading: string
  context: string
  themes: string[]
  commentary: string
  application: string
  sources: string[]
}

const gospelEntries: GospelEntry[] = [
  {
    id: '2026-04-26',
    date: 'April 26, 2026',
    sundayName: '4th Sunday of Easter — Good Shepherd Sunday',
    liturgicalYear: 'Year A',
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

export default function CommentaryPage() {
  const [expandedId, setExpandedId] = useState<string | null>(gospelEntries[0]?.id || null)

  const toggleEntry = (id: string) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-3">
          Sunday Gospel Commentary
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
          Weekly reflections on the Sunday Gospel reading, following the Catholic Lectionary&apos;s
          three-year cycle (Year A: Matthew, Year B: Mark, Year C: Luke, with John woven throughout).
          Each entry provides the Gospel text, historical context, theological commentary, and
          practical application for daily life.
        </p>
      </div>

      {/* Liturgical Year Info */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 rounded-lg bg-amber-50">
            <Calendar className="w-5 h-5 text-amber-700" />
          </div>
          <h2 className="text-lg font-serif font-semibold text-gray-900">Liturgical Year 2025-2026: Year A (Cycle II weekdays)</h2>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed">
          The current liturgical year features the Gospel of Matthew as the primary Sunday Gospel.
          The three-year cycle ensures that Catholics hear the vast majority of the four Gospels
          over the course of three years. Year A focuses on Matthew, Year B on Mark, and Year C on Luke,
          with the Gospel of John appearing during special seasons (Lent, Easter) in all three years.
        </p>
      </div>

      {/* Gospel Entries */}
      <div className="space-y-6">
        {gospelEntries.map((entry) => {
          const isExpanded = expandedId === entry.id
          return (
            <article key={entry.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              {/* Entry Header — always visible */}
              <button
                onClick={() => toggleEntry(entry.id)}
                className="w-full text-left p-6 flex items-start justify-between gap-4 hover:bg-gray-50 transition-colors"
              >
                <div>
                  <div className="flex items-center gap-2 text-sm text-amber-600 font-medium mb-1">
                    <Calendar className="w-4 h-4" />
                    {entry.date} — {entry.liturgicalYear}
                  </div>
                  <h3 className="text-xl font-serif font-bold text-gray-900 mb-1">
                    {entry.sundayName}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Gospel: <span className="font-medium">{entry.gospelRef}</span>
                  </p>
                </div>
                {isExpanded ? (
                  <ChevronUp className="w-5 h-5 text-gray-400 shrink-0 mt-1" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 shrink-0 mt-1" />
                )}
              </button>

              {/* Expanded Content */}
              {isExpanded && (
                <div className="px-6 pb-8 border-t border-gray-100">
                  {/* Readings Overview */}
                  <div className="bg-blue-50 rounded-lg p-5 mt-6 mb-6">
                    <h4 className="font-semibold text-blue-900 mb-3">Today&apos;s Readings</h4>
                    <ul className="space-y-2 text-sm text-blue-800">
                      <li><span className="font-medium">First Reading:</span> {entry.firstReading}</li>
                      <li><span className="font-medium">Responsorial Psalm:</span> {entry.psalm}</li>
                      <li><span className="font-medium">Second Reading:</span> {entry.secondReading}</li>
                      <li><span className="font-medium">Gospel:</span> {entry.gospelRef}</li>
                    </ul>
                  </div>

                  {/* Gospel Text */}
                  <div className="bg-amber-50 rounded-lg p-6 mb-6 border-l-4 border-amber-400">
                    <div className="flex items-center gap-2 mb-3">
                      <BookOpen className="w-5 h-5 text-amber-700" />
                      <h4 className="font-serif font-bold text-gray-900">Gospel — {entry.gospelRef}</h4>
                    </div>
                    <div className="text-gray-800 leading-relaxed whitespace-pre-line text-[15px]">
                      {entry.gospelText}
                    </div>
                  </div>

                  {/* Historical & Literary Context */}
                  <div className="mb-6">
                    <h4 className="text-lg font-serif font-bold text-gray-900 mb-3">Historical & Literary Context</h4>
                    <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                      {entry.context}
                    </div>
                  </div>

                  {/* Key Themes */}
                  <div className="bg-green-50 rounded-lg p-5 mb-6">
                    <h4 className="font-semibold text-green-900 mb-3">Key Themes</h4>
                    <ul className="space-y-2">
                      {entry.themes.map((theme, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-green-800">
                          <span className="text-green-600 mt-0.5">&#x2022;</span>
                          {theme}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Commentary */}
                  <div className="mb-6">
                    <h4 className="text-lg font-serif font-bold text-gray-900 mb-3">Commentary</h4>
                    <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed">
                      {entry.commentary.split('\n\n').map((para, i) => {
                        if (para.startsWith('**') && para.includes('**\n')) {
                          const [heading, ...rest] = para.split('\n')
                          return (
                            <div key={i} className="mb-4">
                              <h5 className="font-semibold text-gray-900 mb-2">{heading.replace(/\*\*/g, '')}</h5>
                              <p>{rest.join('\n')}</p>
                            </div>
                          )
                        }
                        if (para.startsWith('**')) {
                          const cleaned = para.replace(/\*\*/g, '')
                          const firstNewline = cleaned.indexOf('\n')
                          if (firstNewline > -1) {
                            return (
                              <div key={i} className="mb-4">
                                <h5 className="font-semibold text-gray-900 mb-2">{cleaned.substring(0, firstNewline)}</h5>
                                <p>{cleaned.substring(firstNewline + 1)}</p>
                              </div>
                            )
                          }
                          return <h5 key={i} className="font-semibold text-gray-900 mb-2 mt-4">{cleaned}</h5>
                        }
                        return <p key={i} className="mb-3">{para}</p>
                      })}
                    </div>
                  </div>

                  {/* Practical Application */}
                  <div className="bg-purple-50 rounded-lg p-6 mb-6">
                    <h4 className="font-semibold text-purple-900 mb-3">Living the Gospel This Week</h4>
                    <div className="text-sm text-purple-800 leading-relaxed whitespace-pre-line">
                      {entry.application}
                    </div>
                  </div>

                  {/* Sources */}
                  <div className="bg-gray-50 rounded-lg p-5">
                    <h4 className="font-semibold text-gray-800 mb-3">Sources & Further Reading</h4>
                    <ol className="text-sm text-gray-600 space-y-1.5 list-decimal list-inside">
                      {entry.sources.map((source, i) => (
                        <li key={i}>{source}</li>
                      ))}
                    </ol>
                  </div>
                </div>
              )}
            </article>
          )
        })}
      </div>

      {/* Info about schedule */}
      <div className="mt-10 text-center text-gray-500 text-sm">
        <p>New Gospel commentaries are added weekly, following the Sunday Lectionary cycle.</p>
      </div>
    </div>
  )
}
