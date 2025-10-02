const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const manuscriptsData = [
  {
    name: "Codex Vaticanus",
    description: "One of the oldest and most important manuscripts of the Greek Bible, containing most of the Old Testament and New Testament.",
    date: "4th century AD",
    language: "Greek",
    location: "Vatican Library, Rome",
    significance: "Considered one of the most reliable witnesses to the original text of the New Testament"
  },
  {
    name: "Codex Sinaiticus",
    description: "A 4th-century manuscript of the Greek Bible, written in uncial letters on parchment. It is one of the four great uncial codices.",
    date: "4th century AD",
    language: "Greek",
    location: "British Library, London",
    significance: "Contains the oldest complete copy of the New Testament"
  },
  {
    name: "Codex Alexandrinus",
    description: "A 5th-century manuscript of the Greek Bible, containing the majority of the Septuagint and the New Testament.",
    date: "5th century AD",
    language: "Greek",
    location: "British Library, London",
    significance: "One of the four great uncial codices, important for textual criticism"
  },
  {
    name: "Dead Sea Scrolls",
    description: "A collection of Jewish texts found in the Qumran caves, including the oldest known copies of the Hebrew Bible.",
    date: "3rd century BC - 1st century AD",
    language: "Hebrew, Aramaic",
    location: "Israel Museum, Jerusalem",
    significance: "Revolutionized our understanding of the Hebrew Bible's transmission"
  },
  {
    name: "Codex Bezae",
    description: "A 5th-century manuscript of the New Testament, notable for its unique readings and Western text-type.",
    date: "5th century AD",
    language: "Greek and Latin",
    location: "Cambridge University Library",
    significance: "Important witness to the Western text tradition"
  }
]

const translationsData = [
  {
    name: "Septuagint (LXX)",
    language: "Greek",
    year: -250,
    translator: "Various Jewish scholars",
    description: "The Greek translation of the Hebrew Bible, made for Greek-speaking Jews in Alexandria.",
    significance: "First major translation of the Hebrew Bible, used by early Christians"
  },
  {
    name: "Vulgate",
    language: "Latin",
    year: 405,
    translator: "St. Jerome",
    description: "The Latin translation of the Bible, became the standard version for the Western Church.",
    significance: "Official Bible of the Catholic Church for over 1000 years"
  },
  {
    name: "Wycliffe Bible",
    language: "English",
    year: 1382,
    translator: "John Wycliffe and associates",
    description: "The first complete translation of the Bible into English.",
    significance: "Pioneered English Bible translation, despite being banned by the Church"
  },
  {
    name: "Gutenberg Bible",
    language: "Latin",
    year: 1455,
    translator: "Johannes Gutenberg",
    description: "The first major book printed using movable type, marking the beginning of the printing revolution.",
    significance: "Revolutionized Bible distribution and literacy"
  },
  {
    name: "King James Version",
    language: "English",
    year: 1611,
    translator: "47 scholars appointed by King James I",
    description: "The most influential English translation of the Bible, commissioned by the Church of England.",
    significance: "Shaped English language and literature for centuries"
  },
  {
    name: "Douay-Rheims Bible",
    language: "English",
    year: 1609,
    translator: "English College at Douai",
    description: "The first complete Catholic English translation of the Bible.",
    significance: "Standard English Catholic Bible for over 300 years"
  },
  {
    name: "Revised Standard Version",
    language: "English",
    year: 1952,
    translator: "National Council of Churches",
    description: "A revision of the American Standard Version, using modern scholarship and language.",
    significance: "First major modern English translation widely accepted by Protestants and Catholics"
  },
  {
    name: "New American Bible",
    language: "English",
    year: 1970,
    translator: "Catholic Biblical Association",
    description: "The official Catholic English translation of the Bible in the United States.",
    significance: "First Catholic Bible translated directly from original languages"
  }
]

async function seedBibleData() {
  try {
    console.log('🌱 Starting Bible history data seeding...')

    // Clear existing data
    await prisma.bibleTranslation.deleteMany()
    await prisma.bibleManuscript.deleteMany()

    console.log('🗑️ Cleared existing Bible history data')

    // Seed manuscripts
    for (const manuscript of manuscriptsData) {
      await prisma.bibleManuscript.create({
        data: manuscript
      })
    }

    console.log(`✅ Created ${manuscriptsData.length} Bible manuscripts`)

    // Seed translations
    for (const translation of translationsData) {
      await prisma.bibleTranslation.create({
        data: translation
      })
    }

    console.log(`✅ Created ${translationsData.length} Bible translations`)

    console.log('🎉 Bible history data seeding completed successfully!')

  } catch (error) {
    console.error('❌ Error seeding Bible history data:', error)
    throw error
  } finally {
    await prisma.$disconnect()
  }
}

// Run the seeding
seedBibleData()
  .catch((error) => {
    console.error('Seeding failed:', error)
    process.exit(1)
  })
