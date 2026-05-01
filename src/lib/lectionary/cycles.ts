import type { CycleInfo } from './types'

export const cycleInfo: CycleInfo[] = [
  {
    cycle: 'A',
    evangelist: 'Matthew',
    gospelName: 'Gospel of Matthew',
    emphasis: 'Fulfillment, the Church, the Kingdom of Heaven',
    description:
      'Year A centres on the Gospel of Matthew, written primarily for a Jewish-Christian community around AD 80–90. Matthew presents Jesus as the new Moses who fulfils the Law and the Prophets (Matt 5:17). The Sermon on the Mount (chapters 5–7), the five great discourses, and the parables of the Kingdom give Year A its character: Jesus as Teacher and King. The Church as a visible community in the world is a distinctively Matthean theme (Matt 16:18; 18:15-20). Ordinary Time after Pentecost moves chapter by chapter through Matthew\'s narrative, making Year A a sustained read of the first Gospel.',
    adventStartYear: 2025,
    span: 'Advent 2025 – Christ the King 2026',
  },
  {
    cycle: 'B',
    evangelist: 'Mark',
    gospelName: 'Gospel of Mark',
    emphasis: 'Urgency, discipleship, the cost of following Jesus',
    description:
      'Year B is built around the Gospel of Mark — the shortest, most urgent, and most vivid of the four Gospels, composed around AD 65-70. Mark\'s characteristic word is "immediately" (εὐθύς), and the Gospel moves with breathless speed from miracle to controversy to Cross. Because Mark is shorter, a substantial portion of Year B is filled with John\'s Gospel — particularly John 6 (the Bread of Life discourse, five Sundays in summer) and the Farewell Discourse. The discipleship theme is acute: Mark shows the Twelve constantly misunderstanding Jesus, making Year B a sustained meditation on what it costs to follow the Servant-Messiah.',
    adventStartYear: 2026,
    span: 'Advent 2026 – Christ the King 2027',
  },
  {
    cycle: 'C',
    evangelist: 'Luke',
    gospelName: 'Gospel of Luke',
    emphasis: 'Mercy, the poor, joy, prayer, the Holy Spirit',
    description:
      'Year C follows the Gospel of Luke, written around AD 80-85, addressed to a largely Gentile community. Luke is the evangelist of mercy — only Luke gives us the Prodigal Son, the Good Samaritan, the repentant thief, and Zacchaeus. The poor, women, outsiders, and sinners receive special attention. Prayer and the Holy Spirit appear on nearly every page. Year C\'s Ordinary Time moves through Luke\'s "Journey Narrative" (chapters 9–19), Jesus\'s long, deliberate walk toward Jerusalem. For anyone who wishes to understand the Church\'s commitment to the poor and the universality of salvation, Year C is the key year.',
    adventStartYear: 2024,
    span: 'Advent 2024 – Christ the King 2025',
  },
]

export function getCycleInfo(cycle: 'A' | 'B' | 'C'): CycleInfo {
  return cycleInfo.find(c => c.cycle === cycle)!
}
