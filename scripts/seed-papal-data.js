const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const papalData = [
  {
    name: "Francis",
    regnalName: "Pope Francis",
    birthName: "Jorge Mario Bergoglio",
    birthDate: new Date("1936-12-17"),
    papacyStart: new Date("2013-03-13"),
    papacyNumber: 266,
    nationality: "Argentine",
    previousOffice: "Archbishop of Buenos Aires",
    isCurrent: true,
    biography: "Pope Francis is the first pope from the Americas and the first from the Southern Hemisphere. He is known for his humility, concern for the poor, and commitment to interfaith dialogue.",
    events: [
      {
        title: "Election as Pope",
        description: "Elected as the 266th Pope of the Catholic Church",
        eventDate: new Date("2013-03-13"),
        eventType: "ELECTION",
        location: "Vatican City",
        significance: "First pope from the Americas"
      },
      {
        title: "Inauguration Mass",
        description: "Formal inauguration as Bishop of Rome",
        eventDate: new Date("2013-03-19"),
        eventType: "CORONATION",
        location: "St. Peter's Square, Vatican City",
        significance: "Beginning of his papacy"
      },
      {
        title: "Visit to Brazil",
        description: "First international trip to World Youth Day in Rio de Janeiro",
        eventDate: new Date("2013-07-22"),
        eventType: "TRAVEL",
        location: "Rio de Janeiro, Brazil",
        significance: "First international papal visit"
      }
    ],
    achievements: [
      {
        title: "Laudato Si'",
        description: "Encyclical on care for our common home, addressing environmental issues",
        category: "OTHER",
        year: 2015,
        significance: "First papal encyclical focused on environmental protection"
      },
      {
        title: "Reform of Vatican Curia",
        description: "Major reforms of the Roman Curia and Vatican administration",
        category: "REFORM",
        year: 2013,
        significance: "Modernization of Church governance"
      }
    ]
  },
  {
    name: "Benedict XVI",
    regnalName: "Pope Benedict XVI",
    birthName: "Joseph Aloisius Ratzinger",
    birthDate: new Date("1927-04-16"),
    deathDate: new Date("2022-12-31"),
    papacyStart: new Date("2005-04-19"),
    papacyEnd: new Date("2013-02-28"),
    papacyNumber: 265,
    nationality: "German",
    previousOffice: "Prefect of the Congregation for the Doctrine of the Faith",
    biography: "Pope Benedict XVI was a renowned theologian and served as Pope from 2005 to 2013. He was the first pope to resign since Gregory XII in 1415.",
    events: [
      {
        title: "Election as Pope",
        description: "Elected as the 265th Pope of the Catholic Church",
        eventDate: new Date("2005-04-19"),
        eventType: "ELECTION",
        location: "Vatican City",
        significance: "First German pope in nearly 500 years"
      },
      {
        title: "Resignation",
        description: "Announced resignation from the papacy",
        eventDate: new Date("2013-02-11"),
        eventType: "OTHER",
        location: "Vatican City",
        significance: "First papal resignation since 1415"
      }
    ],
    achievements: [
      {
        title: "Deus Caritas Est",
        description: "First encyclical on Christian love",
        category: "OTHER",
        year: 2005,
        significance: "Theological foundation of his papacy"
      },
      {
        title: "Summorum Pontificum",
        description: "Motu proprio allowing wider use of the Tridentine Mass",
        category: "DOCTRINE",
        year: 2007,
        significance: "Restoration of traditional liturgy"
      }
    ]
  },
  {
    name: "John Paul II",
    regnalName: "Pope John Paul II",
    birthName: "Karol Józef Wojtyła",
    birthDate: new Date("1920-05-18"),
    deathDate: new Date("2005-04-02"),
    papacyStart: new Date("1978-10-16"),
    papacyEnd: new Date("2005-04-02"),
    papacyNumber: 264,
    nationality: "Polish",
    previousOffice: "Archbishop of Kraków",
    biography: "Pope John Paul II was one of the most influential popes in modern history. He was the first non-Italian pope in 455 years and played a crucial role in the fall of communism.",
    events: [
      {
        title: "Election as Pope",
        description: "Elected as the 264th Pope of the Catholic Church",
        eventDate: new Date("1978-10-16"),
        eventType: "ELECTION",
        location: "Vatican City",
        significance: "First non-Italian pope in 455 years"
      },
      {
        title: "Assassination Attempt",
        description: "Survived assassination attempt in St. Peter's Square",
        eventDate: new Date("1981-05-13"),
        eventType: "OTHER",
        location: "St. Peter's Square, Vatican City",
        significance: "Demonstrated his forgiveness and resilience"
      },
      {
        title: "Visit to Poland",
        description: "First papal visit to communist Poland",
        eventDate: new Date("1979-06-02"),
        eventType: "TRAVEL",
        location: "Warsaw, Poland",
        significance: "Catalyst for Solidarity movement"
      }
    ],
    achievements: [
      {
        title: "Canonization of Saints",
        description: "Canonized 482 saints, more than any other pope",
        category: "CANONIZATION",
        year: 1978,
        significance: "Emphasis on holiness and sanctity"
      },
      {
        title: "World Youth Day",
        description: "Established World Youth Day celebrations",
        category: "EDUCATION",
        year: 1985,
        significance: "Engagement with young Catholics worldwide"
      },
      {
        title: "Fall of Communism",
        description: "Played crucial role in the fall of communism in Eastern Europe",
        category: "DIPLOMACY",
        year: 1989,
        significance: "Historical impact on world politics"
      }
    ]
  },
  {
    name: "Paul VI",
    regnalName: "Pope Paul VI",
    birthName: "Giovanni Battista Enrico Antonio Maria Montini",
    birthDate: new Date("1897-09-26"),
    deathDate: new Date("1978-08-06"),
    papacyStart: new Date("1963-06-21"),
    papacyEnd: new Date("1978-08-06"),
    papacyNumber: 263,
    nationality: "Italian",
    previousOffice: "Archbishop of Milan",
    biography: "Pope Paul VI completed the Second Vatican Council and implemented its reforms. He was known for his efforts in ecumenism and social justice.",
    events: [
      {
        title: "Election as Pope",
        description: "Elected as the 263rd Pope of the Catholic Church",
        eventDate: new Date("1963-06-21"),
        eventType: "ELECTION",
        location: "Vatican City",
        significance: "Successor to Pope John XXIII"
      },
      {
        title: "Second Vatican Council",
        description: "Concluded the Second Vatican Council",
        eventDate: new Date("1965-12-08"),
        eventType: "COUNCIL",
        location: "Vatican City",
        significance: "Major reform of the Catholic Church"
      }
    ],
    achievements: [
      {
        title: "Humanae Vitae",
        description: "Encyclical on human life and birth control",
        category: "OTHER",
        year: 1968,
        significance: "Controversial but influential teaching on human sexuality"
      },
      {
        title: "Ecumenical Dialogue",
        description: "Promoted dialogue with other Christian denominations",
        category: "DIPLOMACY",
        year: 1964,
        significance: "Modern approach to Christian unity"
      }
    ]
  }
]

async function seedPapalData() {
  try {
    console.log('🌱 Starting papal data seeding...')

    // Clear existing data
    await prisma.papalAchievement.deleteMany()
    await prisma.papalEvent.deleteMany()
    await prisma.pope.deleteMany()

    console.log('🗑️ Cleared existing papal data')

    // Seed popes with their events and achievements
    for (const popeData of papalData) {
      const { events, achievements, ...popeInfo } = popeData

      const pope = await prisma.pope.create({
        data: popeInfo
      })

      console.log(`✅ Created Pope: ${pope.regnalName}`)

      // Create events
      for (const eventData of events) {
        await prisma.papalEvent.create({
          data: {
            ...eventData,
            popeId: pope.id
          }
        })
      }

      // Create achievements
      for (const achievementData of achievements) {
        await prisma.papalAchievement.create({
          data: {
            ...achievementData,
            popeId: pope.id
          }
        })
      }

      console.log(`📅 Added ${events.length} events and ${achievements.length} achievements for ${pope.regnalName}`)
    }

    console.log('🎉 Papal data seeding completed successfully!')
    console.log(`📊 Created ${papalData.length} popes with their events and achievements`)

  } catch (error) {
    console.error('❌ Error seeding papal data:', error)
    throw error
  } finally {
    await prisma.$disconnect()
  }
}

// Run the seeding
seedPapalData()
  .catch((error) => {
    console.error('Seeding failed:', error)
    process.exit(1)
  })
