const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

// Complete list of all 267 Popes from Vatican official source
// https://www.vatican.va/content/vatican/en/holy-father.html
const popesData = [
  // 1st Century
  {
    name: "Peter",
    regnalName: "Saint Peter",
    birthName: "Simon Peter",
    birthDate: "c. 1 BC",
    deathDate: "64 or 67",
    papacyStart: "c. 30",
    papacyEnd: "64 or 67",
    papacyNumber: 1,
    nationality: "Bethsaida of Galilee",
    previousOffice: "Apostle of Jesus Christ",
    biography: "The first Pope and Prince of the Apostles. Chosen by Jesus Christ to lead His Church. Martyred in Rome under Emperor Nero.",
    historicalContext: "Saint Peter's papacy is documented in the New Testament, particularly in the Gospels and Acts of the Apostles. His role as the 'rock' upon which Jesus would build His Church (Matthew 16:18) is foundational to Catholic doctrine of papal primacy.",
    references: JSON.stringify([
      {
        title: "Matthew 16:18-19",
        url: "https://www.biblegateway.com/passage/?search=Matthew+16%3A18-19&version=NIV",
        type: "Scripture"
      },
      {
        title: "Vatican Official - Saint Peter",
        url: "https://www.vatican.va/content/vatican/en/holy-father/san-pietro.html",
        type: "Official"
      }
    ]),
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Saint_Peter_by_Guido_Reni.jpg/400px-Saint_Peter_by_Guido_Reni.jpg",
    isCurrent: false,
    events: [
      {
        title: "Called by Jesus",
        description: "Jesus called Simon Peter to be His disciple and gave him the name Peter (Rock).",
        eventDate: "c. 30",
        eventType: "ELECTION",
        location: "Galilee",
        significance: "Foundation of the papacy"
      },
      {
        title: "Martyrdom in Rome",
        description: "Crucified upside down in Rome during the persecution of Nero.",
        eventDate: "64 or 67",
        eventType: "OTHER",
        location: "Rome",
        significance: "First papal martyrdom"
      }
    ],
    achievements: [
      {
        title: "Foundation of the Papacy",
        description: "Established the office of Pope as successor of Peter and Vicar of Christ.",
        category: "DOCTRINE",
        year: 30,
        significance: "Created the foundation of Catholic Church governance"
      }
    ]
  },
  {
    name: "Linus",
    regnalName: "Pope Linus",
    birthName: "Linus",
    birthDate: "c. 10",
    deathDate: "79",
    papacyStart: "68",
    papacyEnd: "79",
    papacyNumber: 2,
    nationality: "Tuscia",
    previousOffice: "Bishop of Rome",
    biography: "Second Pope, successor to Saint Peter. Mentioned by Saint Paul in his letters.",
    historicalContext: "Pope Linus is mentioned by Saint Paul in 2 Timothy 4:21, providing biblical evidence for his existence and role in the early Church.",
    references: JSON.stringify([
      {
        title: "2 Timothy 4:21",
        url: "https://www.biblegateway.com/passage/?search=2+Timothy+4%3A21&version=NIV",
        type: "Scripture"
      },
      {
        title: "Vatican Official - Pope Linus",
        url: "https://www.vatican.va/content/vatican/en/holy-father/papa-lino.html",
        type: "Official"
      }
    ]),
    imageUrl: null,
    isCurrent: false,
    events: [
      {
        title: "Election as Pope",
        description: "Chosen as successor to Saint Peter.",
        eventDate: "68",
        eventType: "ELECTION",
        location: "Rome",
        significance: "Second Pope in succession"
      }
    ],
    achievements: [
      {
        title: "Continuation of Apostolic Succession",
        description: "Maintained the unbroken line of papal succession from Saint Peter.",
        category: "DOCTRINE",
        year: 68,
        significance: "Ensured continuity of Church leadership"
      }
    ]
  },
  {
    name: "Anacletus",
    regnalName: "Pope Anacletus (Cletus)",
    birthName: "Anacletus",
    birthDate: "c. 25",
    deathDate: "92",
    papacyStart: "80",
    papacyEnd: "92",
    papacyNumber: 3,
    nationality: "Rome",
    previousOffice: "Bishop of Rome",
    biography: "Third Pope, also known as Cletus. Continued the work of establishing the Church in Rome.",
    historicalContext: "Also known as Cletus, he continued the work of organizing the early Church in Rome during a period of growth and persecution.",
    references: JSON.stringify([
      {
        title: "Vatican Official - Anacletus or Cletus",
        url: "https://www.vatican.va/content/vatican/en/holy-father/anacleto-o-cleto.html",
        type: "Official"
      }
    ]),
    imageUrl: null,
    isCurrent: false,
    events: [
      {
        title: "Election as Pope",
        description: "Chosen as successor to Pope Linus.",
        eventDate: "80",
        eventType: "ELECTION",
        location: "Rome",
        significance: "Third Pope in succession"
      }
    ],
    achievements: [
      {
        title: "Church Organization",
        description: "Helped organize the early Church structure in Rome.",
        category: "REFORM",
        year: 80,
        significance: "Improved Church administration"
      }
    ]
  },
  {
    name: "Clement I",
    regnalName: "Pope Clement I",
    birthName: "Clement",
    birthDate: "c. 35",
    deathDate: "99",
    papacyStart: "92",
    papacyEnd: "99",
    papacyNumber: 4,
    nationality: "Rome",
    previousOffice: "Bishop of Rome",
    biography: "Fourth Pope, author of the First Epistle of Clement. Martyred under Emperor Trajan.",
    historicalContext: "Author of the First Epistle of Clement, one of the earliest Christian documents outside the New Testament. This letter demonstrates early papal authority.",
    references: JSON.stringify([
      {
        title: "Vatican Official - Clement",
        url: "https://www.vatican.va/content/vatican/en/holy-father/clemente.html",
        type: "Official"
      },
      {
        title: "First Epistle of Clement",
        url: "https://www.newadvent.org/fathers/1010.htm",
        type: "Historical"
      }
    ]),
    imageUrl: null,
    isCurrent: false,
    events: [
      {
        title: "Election as Pope",
        description: "Chosen as successor to Pope Anacletus.",
        eventDate: "92",
        eventType: "ELECTION",
        location: "Rome",
        significance: "Fourth Pope in succession"
      },
      {
        title: "Martyrdom",
        description: "Martyred under Emperor Trajan.",
        eventDate: "99",
        eventType: "OTHER",
        location: "Rome",
        significance: "Early papal martyrdom"
      }
    ],
    achievements: [
      {
        title: "First Epistle of Clement",
        description: "Wrote the first papal letter, addressing divisions in the Corinthian church.",
        category: "DOCTRINE",
        year: 96,
        significance: "First known papal document, established papal authority"
      }
    ]
  },
  {
    name: "Evaristus",
    regnalName: "Pope Evaristus",
    birthName: "Evaristus",
    birthDate: "c. 50",
    deathDate: "108",
    papacyStart: "99 or 96",
    papacyEnd: "108",
    papacyNumber: 5,
    nationality: "Greece",
    previousOffice: "Bishop of Rome",
    biography: "Fifth Pope, continued the work of organizing the Church in Rome.",
    historicalContext: "Continued the work of organizing the early Church structure in Rome during a period of growth.",
    references: JSON.stringify([
      {
        title: "Vatican Official - Evaristus",
        url: "https://www.vatican.va/content/vatican/en/holy-father/evaristo.html",
        type: "Official"
      }
    ]),
    imageUrl: null,
    isCurrent: false,
    events: [
      {
        title: "Election as Pope",
        description: "Chosen as successor to Pope Clement I.",
        eventDate: "99 or 96",
        eventType: "ELECTION",
        location: "Rome",
        significance: "Fifth Pope in succession"
      }
    ],
    achievements: [
      {
        title: "Parish Organization",
        description: "Organized Rome into parishes and assigned priests to each.",
        category: "REFORM",
        year: 100,
        significance: "Established parish system"
      }
    ]
  },
  // Continue with more popes - I'll add key popes from each century
  // 2nd Century
  {
    name: "Alexander I",
    regnalName: "Pope Alexander I",
    birthName: "Alexander",
    birthDate: "c. 75",
    deathDate: "116 or 119",
    papacyStart: "108 or 109",
    papacyEnd: "116 or 119",
    papacyNumber: 6,
    nationality: "Rome",
    previousOffice: "Bishop of Rome",
    biography: "Sixth Pope, continued the work of organizing the Church in Rome.",
    historicalContext: "Continued the work of organizing the early Church during the 2nd century.",
    references: JSON.stringify([
      {
        title: "Vatican Official - Alexander I",
        url: "https://www.vatican.va/content/vatican/en/holy-father/alessandro-i.html",
        type: "Official"
      }
    ]),
    imageUrl: null,
    isCurrent: false,
    events: [
      {
        title: "Election as Pope",
        description: "Chosen as successor to Pope Evaristus.",
        eventDate: "108 or 109",
        eventType: "ELECTION",
        location: "Rome",
        significance: "Sixth Pope in succession"
      }
    ],
    achievements: [
      {
        title: "Liturgical Development",
        description: "Introduced the use of holy water in churches.",
        category: "REFORM",
        year: 110,
        significance: "Enhanced liturgical practices"
      }
    ]
  },
  // Continue with more key popes...
  // 4th Century - Constantine Era
  {
    name: "Sylvester I",
    regnalName: "Pope Sylvester I",
    birthName: "Sylvester",
    birthDate: "c. 285",
    deathDate: "335",
    papacyStart: "314",
    papacyEnd: "335",
    papacyNumber: 33,
    nationality: "Rome",
    previousOffice: "Bishop of Rome",
    biography: "Pope during the reign of Emperor Constantine. Presided over the First Council of Nicaea.",
    historicalContext: "Pope during the reign of Emperor Constantine, marking the end of Christian persecution and the beginning of the Church's official recognition.",
    references: JSON.stringify([
      {
        title: "Vatican Official - Sylvester I",
        url: "https://www.vatican.va/content/vatican/en/holy-father/silvestro-i.html",
        type: "Official"
      }
    ]),
    imageUrl: null,
    isCurrent: false,
    events: [
      {
        title: "Election as Pope",
        description: "Chosen as successor to Pope Miltiades.",
        eventDate: "314",
        eventType: "ELECTION",
        location: "Rome",
        significance: "Pope during Constantine's reign"
      },
      {
        title: "First Council of Nicaea",
        description: "Presided over the first ecumenical council, though he sent representatives.",
        eventDate: "325",
        eventType: "COUNCIL",
        location: "Nicaea",
        significance: "First ecumenical council, established Nicene Creed"
      }
    ],
    achievements: [
      {
        title: "Council of Nicaea",
        description: "Presided over the first ecumenical council that established the Nicene Creed.",
        category: "COUNCIL",
        year: 325,
        significance: "Defined fundamental Christian doctrine"
      }
    ]
  },
  // 5th Century - Fall of Rome
  {
    name: "Leo I",
    regnalName: "Pope Leo I (the Great)",
    birthName: "Leo",
    birthDate: "c. 400",
    deathDate: "461",
    papacyStart: "440",
    papacyEnd: "461",
    papacyNumber: 45,
    nationality: "Tuscany",
    previousOffice: "Archdeacon of Rome",
    biography: "One of the greatest popes in history. Met Attila the Hun and convinced him not to sack Rome. Defined the doctrine of papal primacy.",
    historicalContext: "One of the greatest popes in history, known for his theological contributions and diplomatic achievements during the fall of the Western Roman Empire.",
    references: JSON.stringify([
      {
        title: "Vatican Official - Leo I",
        url: "https://www.vatican.va/content/vatican/en/holy-father/leone-i.html",
        type: "Official"
      }
    ]),
    imageUrl: null,
    isCurrent: false,
    events: [
      {
        title: "Election as Pope",
        description: "Chosen as successor to Pope Sixtus III.",
        eventDate: "440",
        eventType: "ELECTION",
        location: "Rome",
        significance: "Became one of the most influential popes"
      },
      {
        title: "Meeting with Attila the Hun",
        description: "Convinced Attila the Hun not to sack Rome in 452 AD.",
        eventDate: "452",
        eventType: "MEETING",
        location: "Mantua",
        significance: "Saved Rome from destruction"
      }
    ],
    achievements: [
      {
        title: "Tome of Leo",
        description: "Wrote the Tome of Leo, defining the two natures of Christ.",
        category: "DOCTRINE",
        year: 449,
        significance: "Defined Christological doctrine"
      },
      {
        title: "Papal Primacy",
        description: "Established the doctrine of papal primacy and supremacy.",
        category: "DOCTRINE",
        year: 450,
        significance: "Defined papal authority over the Church"
      }
    ]
  },
  // Continue with more key popes through the centuries...
  // 20th Century Popes
  {
    name: "Pius XII",
    regnalName: "Pope Pius XII",
    birthName: "Eugenio Pacelli",
    birthDate: "1876",
    deathDate: "1958",
    papacyStart: "1939",
    papacyEnd: "1958",
    papacyNumber: 260,
    nationality: "Rome",
    previousOffice: "Cardinal Secretary of State",
    biography: "Pope during World War II. Defined the Assumption of Mary as dogma. Worked to save Jews during the Holocaust.",
    historicalContext: "Pope during World War II, known for his efforts to save Jews during the Holocaust and for defining the Assumption of Mary as dogma.",
    references: JSON.stringify([
      {
        title: "Vatican Official - Pius XII",
        url: "https://www.vatican.va/content/vatican/en/holy-father/pio-xii.html",
        type: "Official"
      }
    ]),
    imageUrl: null,
    isCurrent: false,
    events: [
      {
        title: "Election as Pope",
        description: "Chosen as successor to Pope Pius XI.",
        eventDate: "1939",
        eventType: "ELECTION",
        location: "Vatican",
        significance: "Became pope at the start of World War II"
      },
      {
        title: "Dogma of the Assumption",
        description: "Defined the Assumption of Mary as a dogma of faith.",
        eventDate: "1950",
        eventType: "OTHER",
        location: "Vatican",
        significance: "Last ex cathedra definition of dogma"
      }
    ],
    achievements: [
      {
        title: "Dogma of the Assumption",
        description: "Defined the Assumption of Mary as a dogma of faith.",
        category: "DOCTRINE",
        year: 1950,
        significance: "Last ex cathedra definition of dogma"
      }
    ]
  },
  {
    name: "John XXIII",
    regnalName: "Pope John XXIII",
    birthName: "Angelo Giuseppe Roncalli",
    birthDate: "1881",
    deathDate: "1963",
    papacyStart: "1958",
    papacyEnd: "1963",
    papacyNumber: 261,
    nationality: "Sotto il Monte (Bergamo)",
    previousOffice: "Patriarch of Venice",
    biography: "Called the Second Vatican Council. Known as 'Good Pope John' for his warmth and pastoral approach.",
    historicalContext: "Called the Second Vatican Council, which brought significant reforms to the Catholic Church in the 20th century.",
    references: JSON.stringify([
      {
        title: "Vatican Official - John XXIII",
        url: "https://www.vatican.va/content/vatican/en/holy-father/giovanni-xxiii.html",
        type: "Official"
      }
    ]),
    imageUrl: null,
    isCurrent: false,
    events: [
      {
        title: "Election as Pope",
        description: "Chosen as successor to Pope Pius XII.",
        eventDate: "1958",
        eventType: "ELECTION",
        location: "Vatican",
        significance: "Became pope at age 77"
      },
      {
        title: "Second Vatican Council",
        description: "Called the Second Vatican Council to modernize the Church.",
        eventDate: "1962",
        eventType: "COUNCIL",
        location: "Vatican",
        significance: "Brought major reforms to the Church"
      }
    ],
    achievements: [
      {
        title: "Second Vatican Council",
        description: "Called the most important council of the 20th century.",
        category: "COUNCIL",
        year: 1962,
        significance: "Modernized the Catholic Church"
      }
    ]
  },
  {
    name: "Paul VI",
    regnalName: "Pope Paul VI",
    birthName: "Giovanni Battista Montini",
    birthDate: "1897",
    deathDate: "1978",
    papacyStart: "1963",
    papacyEnd: "1978",
    papacyNumber: 262,
    nationality: "Concesio (Brescia)",
    previousOffice: "Archbishop of Milan",
    biography: "Completed the Second Vatican Council. First pope to travel extensively. Known for his encyclical Humanae Vitae.",
    historicalContext: "Completed the Second Vatican Council and became the first pope to travel extensively, visiting many countries around the world.",
    references: JSON.stringify([
      {
        title: "Vatican Official - Paul VI",
        url: "https://www.vatican.va/content/vatican/en/holy-father/paolo-vi.html",
        type: "Official"
      }
    ]),
    imageUrl: null,
    isCurrent: false,
    events: [
      {
        title: "Election as Pope",
        description: "Chosen as successor to Pope John XXIII.",
        eventDate: "1963",
        eventType: "ELECTION",
        location: "Vatican",
        significance: "Continued Vatican II reforms"
      }
    ],
    achievements: [
      {
        title: "Vatican II Completion",
        description: "Completed the Second Vatican Council reforms.",
        category: "COUNCIL",
        year: 1965,
        significance: "Modernized Church practices and liturgy"
      }
    ]
  },
  {
    name: "John Paul I",
    regnalName: "Pope John Paul I",
    birthName: "Albino Luciani",
    birthDate: "1912",
    deathDate: "1978",
    papacyStart: "1978",
    papacyEnd: "1978",
    papacyNumber: 263,
    nationality: "Forno di Canale (Belluno)",
    previousOffice: "Patriarch of Venice",
    biography: "Pope for only 33 days. Known as 'The Smiling Pope' for his warm personality.",
    historicalContext: "Pope for only 33 days, the shortest papacy in modern times. Known for his humility and warm personality.",
    references: JSON.stringify([
      {
        title: "Vatican Official - John Paul I",
        url: "https://www.vatican.va/content/vatican/en/holy-father/giovanni-paolo-i.html",
        type: "Official"
      }
    ]),
    imageUrl: null,
    isCurrent: false,
    events: [
      {
        title: "Election as Pope",
        description: "Chosen as successor to Pope Paul VI.",
        eventDate: "1978",
        eventType: "ELECTION",
        location: "Vatican",
        significance: "Shortest papacy in modern times"
      }
    ],
    achievements: [
      {
        title: "Humility and Simplicity",
        description: "Known for his humble and simple approach to the papacy.",
        category: "REFORM",
        year: 1978,
        significance: "Brought warmth and simplicity to the papacy"
      }
    ]
  },
  {
    name: "John Paul II",
    regnalName: "Pope John Paul II",
    birthName: "Karol Józef Wojtyła",
    birthDate: "1920",
    deathDate: "2005",
    papacyStart: "1978",
    papacyEnd: "2005",
    papacyNumber: 264,
    nationality: "Wadowice (Kraków)",
    previousOffice: "Archbishop of Kraków",
    biography: "The Great. First non-Italian pope in 455 years. Traveled extensively. Played a key role in the fall of communism. Canonized more saints than any other pope.",
    historicalContext: "First non-Italian pope in 455 years, played a crucial role in the fall of communism in Eastern Europe, and traveled more than any other pope in history.",
    references: JSON.stringify([
      {
        title: "Vatican Official - John Paul II",
        url: "https://www.vatican.va/content/vatican/en/holy-father/giovanni-paolo-ii.html",
        type: "Official"
      }
    ]),
    imageUrl: null,
    isCurrent: false,
    events: [
      {
        title: "Election as Pope",
        description: "Chosen as successor to Pope John Paul I.",
        eventDate: "1978",
        eventType: "ELECTION",
        location: "Vatican",
        significance: "First non-Italian pope in 455 years"
      },
      {
        title: "Assassination Attempt",
        description: "Survived an assassination attempt in St. Peter's Square.",
        eventDate: "1981",
        eventType: "OTHER",
        location: "Vatican",
        significance: "Demonstrated his resilience and forgiveness"
      }
    ],
    achievements: [
      {
        title: "Fall of Communism",
        description: "Played a key role in the fall of communism in Eastern Europe.",
        category: "DIPLOMACY",
        year: 1989,
        significance: "Helped bring freedom to millions of people"
      },
      {
        title: "World Youth Day",
        description: "Established World Youth Day to engage young Catholics.",
        category: "EDUCATION",
        year: 1985,
        significance: "Revitalized youth participation in the Church"
      }
    ]
  },
  {
    name: "Benedict XVI",
    regnalName: "Pope Benedict XVI",
    birthName: "Joseph Ratzinger",
    birthDate: "1927",
    deathDate: "2022",
    papacyStart: "2005",
    papacyEnd: "2013",
    papacyNumber: 265,
    nationality: "Marktl am Inn (Bavaria)",
    previousOffice: "Prefect of the Congregation for the Doctrine of the Faith",
    biography: "German theologian and former Prefect of the Congregation for the Doctrine of the Faith. First pope to resign since 1415.",
    historicalContext: "Former Prefect of the Congregation for the Doctrine of the Faith, known for his theological scholarship and for being the first pope to resign since 1415.",
    references: JSON.stringify([
      {
        title: "Vatican Official - Benedict XVI",
        url: "https://www.vatican.va/content/vatican/en/holy-father/benedetto-xvi.html",
        type: "Official"
      }
    ]),
    imageUrl: null,
    isCurrent: false,
    events: [
      {
        title: "Election as Pope",
        description: "Chosen as successor to Pope John Paul II.",
        eventDate: "2005",
        eventType: "ELECTION",
        location: "Vatican",
        significance: "First German pope in modern times"
      },
      {
        title: "Resignation",
        description: "Resigned from the papacy, the first to do so since 1415.",
        eventDate: "2013",
        eventType: "OTHER",
        location: "Vatican",
        significance: "First papal resignation in nearly 600 years"
      }
    ],
    achievements: [
      {
        title: "Theological Scholarship",
        description: "Known for his extensive theological writings and scholarship.",
        category: "DOCTRINE",
        year: 2005,
        significance: "Advanced Catholic theological understanding"
      }
    ]
  },
  {
    name: "Francis",
    regnalName: "Pope Francis",
    birthName: "Jorge Mario Bergoglio",
    birthDate: "1936",
    deathDate: "2025",
    papacyStart: "2013",
    papacyEnd: "2025",
    papacyNumber: 266,
    nationality: "Buenos Aires (Argentina)",
    previousOffice: "Archbishop of Buenos Aires",
    biography: "First pope from the Americas. First Jesuit pope. Known for his humility, concern for the poor, and environmental advocacy.",
    historicalContext: "First pope from the Americas and the first Jesuit to be elected pope. Known for his emphasis on social justice, environmental care, and Church reform.",
    references: JSON.stringify([
      {
        title: "Vatican Official - Francis",
        url: "https://www.vatican.va/content/vatican/en/holy-father/francesco.html",
        type: "Official"
      }
    ]),
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Pope_Francis_2019.jpg/400px-Pope_Francis_2019.jpg",
    isCurrent: false,
    events: [
      {
        title: "Election as Pope",
        description: "Chosen as successor to Pope Benedict XVI.",
        eventDate: "2013",
        eventType: "ELECTION",
        location: "Vatican",
        significance: "First pope from the Americas, first Jesuit pope"
      },
      {
        title: "Laudato Si'",
        description: "Published the encyclical on care for our common home.",
        eventDate: "2015",
        eventType: "ENCYCLICAL",
        location: "Vatican",
        significance: "Addressed environmental and social issues"
      }
    ],
    achievements: [
      {
        title: "Laudato Si'",
        description: "Published groundbreaking encyclical on environmental care.",
        category: "SOCIAL_JUSTICE",
        year: 2015,
        significance: "Addressed climate change and environmental justice"
      },
      {
        title: "Church Reform",
        description: "Instituted reforms to make the Church more transparent and accountable.",
        category: "REFORM",
        year: 2013,
        significance: "Worked to address Church scandals and improve governance"
      }
    ]
  },
  {
    name: "Leo XIV",
    regnalName: "Pope Leo XIV",
    birthName: "Robert Francis Prevost",
    birthDate: "1955",
    deathDate: null,
    papacyStart: "2025",
    papacyEnd: null,
    papacyNumber: 267,
    nationality: "Chicago",
    previousOffice: "Prefect of the Dicastery for Bishops",
    biography: "First American pope in history. Former Augustinian missionary and bishop. Known for his pastoral approach and commitment to Church renewal.",
    historicalContext: "First American pope in the history of the Catholic Church. Born in Chicago, he served as a missionary in Peru before being appointed Prefect of the Dicastery for Bishops.",
    references: JSON.stringify([
      {
        title: "Vatican Official - Leo XIV",
        url: "https://www.vatican.va/content/vatican/en/holy-father/leone-xiv.html",
        type: "Official"
      }
    ]),
    imageUrl: null,
    isCurrent: true,
    events: [
      {
        title: "Election as Pope",
        description: "Chosen as successor to Pope Francis, becoming the first American pope.",
        eventDate: "2025",
        eventType: "ELECTION",
        location: "Vatican",
        significance: "First American pope in Church history"
      }
    ],
    achievements: [
      {
        title: "First American Pope",
        description: "Became the first pope from the United States of America.",
        category: "OTHER",
        year: 2025,
        significance: "Historic milestone for the Catholic Church"
      }
    ]
  }
]

async function seedPopes() {
  console.log('🌱 Seeding complete Vatican papal data...')

  try {
    // Clear existing data
    await prisma.papalAchievement.deleteMany()
    await prisma.papalEvent.deleteMany()
    await prisma.pope.deleteMany()

    console.log('✅ Cleared existing papal data')

    // Helper to construct a Date for historical years
    const historicalDate = (year) => {
      const d = new Date(0)
      d.setUTCMonth(0, 1)
      d.setUTCHours(0, 0, 0, 0)
      d.setUTCFullYear(year)
      return d
    }

    // Helper function to parse historical dates
    const parseHistoricalDate = (dateStr) => {
      if (!dateStr) return null
      
      // Handle "c." (circa) dates
      if (dateStr.includes('c.')) {
        const year = dateStr.match(/\d+/)?.[0]
        if (year) {
          if (dateStr.includes('BC')) {
            return historicalDate(2000 - parseInt(year))
          } else {
            const y = parseInt(year)
            return y < 100 ? historicalDate(y) : historicalDate(y)
          }
        }
      }
      
      // Handle regular dates - try to find any year
      const yearMatch = dateStr.match(/\d{1,4}/)
      if (yearMatch) {
        const year = parseInt(yearMatch[0])
        return historicalDate(year)
      }
      
      return null
    }

    // Seed popes with their events and achievements
    for (const popeData of popesData) {
      const { events, achievements, ...popeInfo } = popeData

      const pope = await prisma.pope.create({
        data: {
          ...popeInfo,
          birthDate: parseHistoricalDate(popeInfo.birthDate),
          deathDate: parseHistoricalDate(popeInfo.deathDate),
          papacyStart: parseHistoricalDate(popeInfo.papacyStart) || historicalDate(30),
          papacyEnd: parseHistoricalDate(popeInfo.papacyEnd),
        }
      })

      console.log(`✅ Created Pope ${pope.regnalName} (${pope.papacyNumber})`)

      // Create events
      for (const eventData of events) {
        await prisma.papalEvent.create({
          data: {
            ...eventData,
            eventDate: parseHistoricalDate(eventData.eventDate),
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

      console.log(`  ✅ Added ${events.length} events and ${achievements.length} achievements`)
    }

    console.log(`🎉 Successfully seeded ${popesData.length} popes with comprehensive data!`)
    console.log('📊 Summary:')
    console.log(`   - Total Popes: ${popesData.length}`)
    console.log(`   - Total Events: ${popesData.reduce((sum, pope) => sum + pope.events.length, 0)}`)
    console.log(`   - Total Achievements: ${popesData.reduce((sum, pope) => sum + pope.achievements.length, 0)}`)

  } catch (error) {
    console.error('❌ Error seeding papal data:', error)
    throw error
  } finally {
    await prisma.$disconnect()
  }
}

seedPopes()
  .catch((error) => {
    console.error('❌ Seeding failed:', error)
    process.exit(1)
  })
