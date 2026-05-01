export interface LectionarySource {
  title: string
  description: string
  url?: string
}

export const lectionarySources: LectionarySource[] = [
  {
    title: 'Ordo Lectionum Missae (1969, revised 1981)',
    description:
      'The official Roman Rite Lectionary promulgated by Pope Paul VI following the Second Vatican Council. The 1981 editio typica altera is the current authoritative edition. It introduced the three-year Sunday cycle (A/B/C) and two-year weekday cycle (I/II).',
  },
  {
    title: 'Sacrosanctum Concilium §51 (Vatican II, 1963)',
    description:
      '"The treasures of the Bible are to be opened up more lavishly, so that richer fare may be provided for the faithful at the table of God\'s word." This was the mandate that produced the 3-year lectionary.',
    url: 'https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19631204_sacrosanctum-concilium_en.html',
  },
  {
    title: 'General Introduction to the Lectionary for Mass (GILM)',
    description:
      'The authoritative document explaining the principles behind the lectionary\'s organisation, the selection of readings, and the purpose of each liturgical season.',
  },
  {
    title: 'Catechism of the Catholic Church §§ 1145–1162 (Liturgical Signs)',
    description:
      'CCC on the liturgical year and sacramental signs, explaining how the Church\'s calendar shapes Christian life over time.',
  },
  {
    title: 'United States Conference of Catholic Bishops (USCCB) Lectionary',
    description:
      'The official US edition of the Lectionary for Mass, including the approved calendar of cycles and feast days.',
    url: 'https://www.usccb.org/prayer-and-worship/liturgical-year-and-calendar',
  },
  {
    title: 'Universalis — Catholic Daily Readings',
    description:
      'Daily and Sunday readings calendar used to cross-check cycle assignments and readings.',
    url: 'https://universalis.com',
  },
  {
    title: 'Catholic Resources: Lectionary Overview (Felix Just, SJ)',
    description:
      'Comprehensive scholarly overview of the Roman Lectionary\'s structure, history, and cycle organisation.',
    url: 'https://catholic-resources.org/Lectionary/',
  },
]
