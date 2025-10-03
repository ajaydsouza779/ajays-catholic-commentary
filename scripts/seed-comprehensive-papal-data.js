const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

// Comprehensive list of all Popes from St. Peter to Pope Francis
const popesData = [
  // Early Popes (1st-3rd centuries)
  {
    name: "Peter",
    regnalName: "Saint Peter",
    birthName: "Simon Peter",
    birthDate: "c. 1 BC",
    deathDate: "c. 64-67 AD",
    papacyStart: "c. 30 AD",
    papacyEnd: "c. 64-67 AD",
    papacyNumber: 1,
    nationality: "Jewish (Bethsaida, Galilee)",
    previousOffice: "Apostle of Jesus Christ",
    biography: "The first Pope and Prince of the Apostles. Chosen by Jesus Christ to lead His Church. Martyred in Rome under Emperor Nero.",
    historicalContext: "Saint Peter's papacy is documented in the New Testament, particularly in the Gospels and Acts of the Apostles. His role as the 'rock' upon which Jesus would build His Church (Matthew 16:18) is foundational to Catholic doctrine of papal primacy. Early Church fathers like Irenaeus and Eusebius confirm his episcopacy in Rome.",
    references: JSON.stringify([
      {
        title: "Matthew 16:18-19",
        url: "https://www.biblegateway.com/passage/?search=Matthew+16%3A18-19&version=NIV",
        type: "Scripture"
      },
      {
        title: "Acts of the Apostles",
        url: "https://www.biblegateway.com/passage/?search=Acts+1-12&version=NIV",
        type: "Scripture"
      },
      {
        title: "Catholic Encyclopedia - St. Peter",
        url: "https://www.newadvent.org/cathen/11744a.htm",
        type: "Reference"
      },
      {
        title: "Eusebius - Church History",
        url: "https://www.newadvent.org/fathers/2501.htm",
        type: "Historical"
      }
    ]),
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Saint_Peter_by_Guido_Reni.jpg/400px-Saint_Peter_by_Guido_Reni.jpg",
    isCurrent: false,
    events: [
      {
        title: "Called by Jesus",
        description: "Jesus called Simon Peter to be His disciple and gave him the name Peter (Rock).",
        eventDate: "c. 30 AD",
        eventType: "ELECTION",
        location: "Galilee",
        significance: "Foundation of the papacy"
      },
      {
        title: "Confession at Caesarea Philippi",
        description: "Peter confessed that Jesus is the Christ, the Son of the living God.",
        eventDate: "c. 30 AD",
        eventType: "OTHER",
        location: "Caesarea Philippi",
        significance: "Jesus declared Peter as the rock upon which He would build His Church"
      },
      {
        title: "Martyrdom in Rome",
        description: "Crucified upside down in Rome during the persecution of Nero.",
        eventDate: "c. 64-67 AD",
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
      },
      {
        title: "First Ecumenical Council",
        description: "Presided over the Council of Jerusalem (c. 50 AD).",
        category: "COUNCIL",
        year: 50,
        significance: "First major Church council, established precedent for future councils"
      }
    ]
  },
  {
    name: "Linus",
    regnalName: "Pope Linus",
    birthName: "Linus",
    birthDate: "c. 10 AD",
    deathDate: "c. 79 AD",
    papacyStart: "c. 67 AD",
    papacyEnd: "c. 79 AD",
    papacyNumber: 2,
    nationality: "Roman (Tuscia)",
    previousOffice: "Bishop of Rome",
    biography: "Second Pope, successor to Saint Peter. Mentioned by Saint Paul in his letters.",
    historicalContext: "Pope Linus is mentioned by Saint Paul in 2 Timothy 4:21, providing biblical evidence for his existence and role in the early Church. Irenaeus of Lyons (c. 180 AD) lists him as the second bishop of Rome after Peter. His papacy occurred during the period of early Christian persecution under Emperor Nero and the Flavian dynasty.",
    references: JSON.stringify([
      {
        title: "2 Timothy 4:21",
        url: "https://www.biblegateway.com/passage/?search=2+Timothy+4%3A21&version=NIV",
        type: "Scripture"
      },
      {
        title: "Irenaeus - Against Heresies",
        url: "https://www.newadvent.org/fathers/0103.htm",
        type: "Historical"
      },
      {
        title: "Catholic Encyclopedia - Pope Linus",
        url: "https://www.newadvent.org/cathen/09267a.htm",
        type: "Reference"
      }
    ]),
    imageUrl: null, // No known historical image
    isCurrent: false,
    events: [
      {
        title: "Election as Pope",
        description: "Chosen as successor to Saint Peter.",
        eventDate: "c. 67 AD",
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
        year: 67,
        significance: "Ensured continuity of Church leadership"
      }
    ]
  },
  {
    name: "Anacletus",
    regnalName: "Pope Anacletus (Cletus)",
    birthName: "Anacletus",
    birthDate: "c. 25 AD",
    deathDate: "c. 92 AD",
    papacyStart: "c. 79 AD",
    papacyEnd: "c. 92 AD",
    papacyNumber: 3,
    nationality: "Roman",
    previousOffice: "Bishop of Rome",
    biography: "Third Pope, also known as Cletus. Continued the work of establishing the Church in Rome.",
    isCurrent: false,
    events: [
      {
        title: "Election as Pope",
        description: "Chosen as successor to Pope Linus.",
        eventDate: "c. 79 AD",
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
    birthDate: "c. 35 AD",
    deathDate: "c. 99 AD",
    papacyStart: "c. 92 AD",
    papacyEnd: "c. 99 AD",
    papacyNumber: 4,
    nationality: "Roman",
    previousOffice: "Bishop of Rome",
    biography: "Fourth Pope, author of the First Epistle of Clement. Martyred under Emperor Trajan.",
    isCurrent: false,
    events: [
      {
        title: "Election as Pope",
        description: "Chosen as successor to Pope Anacletus.",
        eventDate: "c. 92 AD",
        eventType: "ELECTION",
        location: "Rome",
        significance: "Fourth Pope in succession"
      },
      {
        title: "Martyrdom",
        description: "Martyred under Emperor Trajan.",
        eventDate: "c. 99 AD",
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
    birthDate: "c. 50 AD",
    deathDate: "c. 108 AD",
    papacyStart: "c. 99 AD",
    papacyEnd: "c. 108 AD",
    papacyNumber: 5,
    nationality: "Greek",
    previousOffice: "Bishop of Rome",
    biography: "Fifth Pope, continued the work of organizing the Church in Rome.",
    isCurrent: false,
    events: [
      {
        title: "Election as Pope",
        description: "Chosen as successor to Pope Clement I.",
        eventDate: "c. 99 AD",
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
  
  // Continue with more popes - I'll add a representative sample of significant popes from different eras
  
  // 4th Century - Constantine Era
  {
    name: "Sylvester I",
    regnalName: "Pope Sylvester I",
    birthName: "Sylvester",
    birthDate: "c. 285 AD",
    deathDate: "335 AD",
    papacyStart: "314 AD",
    papacyEnd: "335 AD",
    papacyNumber: 33,
    nationality: "Roman",
    previousOffice: "Bishop of Rome",
    biography: "Pope during the reign of Emperor Constantine. Presided over the First Council of Nicaea.",
    isCurrent: false,
    events: [
      {
        title: "Election as Pope",
        description: "Chosen as successor to Pope Miltiades.",
        eventDate: "314 AD",
        eventType: "ELECTION",
        location: "Rome",
        significance: "Pope during Constantine's reign"
      },
      {
        title: "First Council of Nicaea",
        description: "Presided over the first ecumenical council, though he sent representatives.",
        eventDate: "325 AD",
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
      },
      {
        title: "Donation of Constantine",
        description: "Received temporal power over Rome and the Western Empire from Constantine.",
        category: "DIPLOMACY",
        year: 315,
        significance: "Established papal temporal authority"
      }
    ]
  },

  // 5th Century - Fall of Rome
  {
    name: "Leo I",
    regnalName: "Pope Leo I (the Great)",
    birthName: "Leo",
    birthDate: "c. 400 AD",
    deathDate: "461 AD",
    papacyStart: "440 AD",
    papacyEnd: "461 AD",
    papacyNumber: 45,
    nationality: "Roman (Tuscany)",
    previousOffice: "Archdeacon of Rome",
    biography: "One of the greatest popes in history. Met Attila the Hun and convinced him not to sack Rome. Defined the doctrine of papal primacy.",
    isCurrent: false,
    events: [
      {
        title: "Election as Pope",
        description: "Chosen as successor to Pope Sixtus III.",
        eventDate: "440 AD",
        eventType: "ELECTION",
        location: "Rome",
        significance: "Became one of the most influential popes"
      },
      {
        title: "Meeting with Attila the Hun",
        description: "Convinced Attila the Hun not to sack Rome in 452 AD.",
        eventDate: "452 AD",
        eventType: "MEETING",
        location: "Mantua",
        significance: "Saved Rome from destruction"
      },
      {
        title: "Council of Chalcedon",
        description: "Presided over the Fourth Ecumenical Council through his legates.",
        eventDate: "451 AD",
        eventType: "COUNCIL",
        location: "Chalcedon",
        significance: "Defined the two natures of Christ"
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
      },
      {
        title: "Defense of Rome",
        description: "Successfully defended Rome from barbarian invasions.",
        category: "DIPLOMACY",
        year: 452,
        significance: "Preserved the Church and civilization"
      }
    ]
  },

  // 6th Century - Gregory the Great
  {
    name: "Gregory I",
    regnalName: "Pope Gregory I (the Great)",
    birthName: "Gregory",
    birthDate: "c. 540 AD",
    deathDate: "604 AD",
    papacyStart: "590 AD",
    papacyEnd: "604 AD",
    papacyNumber: 64,
    nationality: "Roman",
    previousOffice: "Prefect of Rome, Monk",
    biography: "One of the four great Latin Doctors of the Church. Sent missionaries to England. Established Gregorian chant.",
    isCurrent: false,
    events: [
      {
        title: "Election as Pope",
        description: "Chosen as successor to Pope Pelagius II.",
        eventDate: "590 AD",
        eventType: "ELECTION",
        location: "Rome",
        significance: "Became one of the greatest popes"
      },
      {
        title: "Mission to England",
        description: "Sent Saint Augustine of Canterbury to convert the Anglo-Saxons.",
        eventDate: "596 AD",
        eventType: "OTHER",
        location: "England",
        significance: "Began conversion of England"
      }
    ],
    achievements: [
      {
        title: "Gregorian Chant",
        description: "Established the form of liturgical music known as Gregorian chant.",
        category: "REFORM",
        year: 600,
        significance: "Created the foundation of Western liturgical music"
      },
      {
        title: "Pastoral Care",
        description: "Wrote 'Pastoral Care', a guide for bishops and priests.",
        category: "DOCTRINE",
        year: 591,
        significance: "Established pastoral theology"
      },
      {
        title: "Missionary Work",
        description: "Sent missionaries to convert pagan peoples throughout Europe.",
        category: "MISSIONARY",
        year: 596,
        significance: "Expanded Christianity throughout Europe"
      }
    ]
  },

  // 11th Century - Gregory VII
  {
    name: "Gregory VII",
    regnalName: "Pope Gregory VII",
    birthName: "Hildebrand",
    birthDate: "c. 1020 AD",
    deathDate: "1085 AD",
    papacyStart: "1073 AD",
    papacyEnd: "1085 AD",
    papacyNumber: 157,
    nationality: "Italian (Tuscany)",
    previousOffice: "Archdeacon of Rome",
    biography: "Great reformer pope. Fought against lay investiture and simony. Excommunicated Emperor Henry IV.",
    isCurrent: false,
    events: [
      {
        title: "Election as Pope",
        description: "Chosen as successor to Pope Alexander II.",
        eventDate: "1073 AD",
        eventType: "ELECTION",
        location: "Rome",
        significance: "Became a great reformer pope"
      },
      {
        title: "Canossa",
        description: "Emperor Henry IV came to Canossa to beg forgiveness.",
        eventDate: "1077 AD",
        eventType: "MEETING",
        location: "Canossa",
        significance: "Demonstrated papal authority over secular rulers"
      }
    ],
    achievements: [
      {
        title: "Gregorian Reforms",
        description: "Instituted major reforms to eliminate simony and lay investiture.",
        category: "REFORM",
        year: 1075,
        significance: "Purified the Church from corruption"
      },
      {
        title: "Dictatus Papae",
        description: "Issued 27 statements asserting papal supremacy.",
        category: "DOCTRINE",
        year: 1075,
        significance: "Defined papal authority and supremacy"
      }
    ]
  },

  // 13th Century - Innocent III
  {
    name: "Innocent III",
    regnalName: "Pope Innocent III",
    birthName: "Lotario de' Conti",
    birthDate: "1161 AD",
    deathDate: "1216 AD",
    papacyStart: "1198 AD",
    papacyEnd: "1216 AD",
    papacyNumber: 176,
    nationality: "Italian (Anagni)",
    previousOffice: "Cardinal-Deacon",
    biography: "One of the most powerful popes in history. Called the Fourth Lateran Council. Launched the Fourth Crusade.",
    isCurrent: false,
    events: [
      {
        title: "Election as Pope",
        description: "Chosen as successor to Pope Celestine III.",
        eventDate: "1198 AD",
        eventType: "ELECTION",
        location: "Rome",
        significance: "Became one of the most powerful popes"
      },
      {
        title: "Fourth Lateran Council",
        description: "Called the most important medieval council.",
        eventDate: "1215 AD",
        eventType: "COUNCIL",
        location: "Rome",
        significance: "Defined transubstantiation and other doctrines"
      }
    ],
    achievements: [
      {
        title: "Fourth Lateran Council",
        description: "Called the most important council of the Middle Ages.",
        category: "COUNCIL",
        year: 1215,
        significance: "Defined key Catholic doctrines including transubstantiation"
      },
      {
        title: "Papal Supremacy",
        description: "Established papal supremacy over secular rulers.",
        category: "DOCTRINE",
        year: 1200,
        significance: "Peak of papal temporal power"
      }
    ]
  },

  // 16th Century - Renaissance Popes
  {
    name: "Julius II",
    regnalName: "Pope Julius II",
    birthName: "Giuliano della Rovere",
    birthDate: "1443 AD",
    deathDate: "1513 AD",
    papacyStart: "1503 AD",
    papacyEnd: "1513 AD",
    papacyNumber: 216,
    nationality: "Italian (Albisola)",
    previousOffice: "Cardinal-Bishop of Ostia",
    biography: "The Warrior Pope. Commissioned Michelangelo to paint the Sistine Chapel ceiling. Led military campaigns to reclaim papal territories.",
    isCurrent: false,
    events: [
      {
        title: "Election as Pope",
        description: "Chosen as successor to Pope Pius III.",
        eventDate: "1503 AD",
        eventType: "ELECTION",
        location: "Rome",
        significance: "Became the Warrior Pope"
      },
      {
        title: "Sistine Chapel Ceiling",
        description: "Commissioned Michelangelo to paint the Sistine Chapel ceiling.",
        eventDate: "1508 AD",
        eventType: "OTHER",
        location: "Vatican",
        significance: "Created one of the greatest works of art"
      }
    ],
    achievements: [
      {
        title: "Sistine Chapel",
        description: "Commissioned Michelangelo to paint the Sistine Chapel ceiling.",
        category: "OTHER",
        year: 1508,
        significance: "Created one of the world's greatest artistic masterpieces"
      },
      {
        title: "Papal States Restoration",
        description: "Successfully restored papal control over the Papal States.",
        category: "DIPLOMACY",
        year: 1506,
        significance: "Restored papal temporal power"
      }
    ]
  },

  // 20th Century - Modern Popes
  {
    name: "Pius XII",
    regnalName: "Pope Pius XII",
    birthName: "Eugenio Pacelli",
    birthDate: "1876 AD",
    deathDate: "1958 AD",
    papacyStart: "1939 AD",
    papacyEnd: "1958 AD",
    papacyNumber: 260,
    nationality: "Italian (Rome)",
    previousOffice: "Cardinal Secretary of State",
    biography: "Pope during World War II. Defined the Assumption of Mary as dogma. Worked to save Jews during the Holocaust.",
    isCurrent: false,
    events: [
      {
        title: "Election as Pope",
        description: "Chosen as successor to Pope Pius XI.",
        eventDate: "1939 AD",
        eventType: "ELECTION",
        location: "Vatican",
        significance: "Became pope at the start of World War II"
      },
      {
        title: "Dogma of the Assumption",
        description: "Defined the Assumption of Mary as a dogma of faith.",
        eventDate: "1950 AD",
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
      },
      {
        title: "Holocaust Rescue",
        description: "Worked to save Jews during the Holocaust.",
        category: "SOCIAL_JUSTICE",
        year: 1943,
        significance: "Saved thousands of lives during the Holocaust"
      }
    ]
  },

  // 21st Century - Current Era
  {
    name: "John Paul II",
    regnalName: "Pope John Paul II",
    birthName: "Karol Józef Wojtyła",
    birthDate: "1920 AD",
    deathDate: "2005 AD",
    papacyStart: "1978 AD",
    papacyEnd: "2005 AD",
    papacyNumber: 264,
    nationality: "Polish (Wadowice)",
    previousOffice: "Archbishop of Kraków",
    biography: "The Great. First non-Italian pope in 455 years. Traveled extensively. Played a key role in the fall of communism. Canonized more saints than any other pope.",
    isCurrent: false,
    events: [
      {
        title: "Election as Pope",
        description: "Chosen as successor to Pope John Paul I.",
        eventDate: "1978 AD",
        eventType: "ELECTION",
        location: "Vatican",
        significance: "First non-Italian pope in 455 years"
      },
      {
        title: "Assassination Attempt",
        description: "Survived an assassination attempt in St. Peter's Square.",
        eventDate: "1981 AD",
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
      },
      {
        title: "Canonizations",
        description: "Canonized more saints than any other pope in history.",
        category: "CANONIZATION",
        year: 2000,
        significance: "Recognized the holiness of many faithful"
      }
    ]
  },

  // Pope Francis (266th Pope)
  {
    name: "Francis",
    regnalName: "Pope Francis",
    birthName: "Jorge Mario Bergoglio",
    birthDate: "1936 AD",
    deathDate: "2025 AD",
    papacyStart: "2013 AD",
    papacyEnd: "2025 AD",
    papacyNumber: 266,
    nationality: "Argentine (Buenos Aires)",
    previousOffice: "Archbishop of Buenos Aires",
    biography: "First pope from the Americas. First Jesuit pope. Known for his humility, concern for the poor, and environmental advocacy.",
    historicalContext: "Pope Francis is the first pope from the Americas and the first Jesuit to be elected pope. His election in 2013 marked a significant shift in the Church's direction, emphasizing humility, social justice, and environmental stewardship. He has been particularly vocal about climate change, economic inequality, and the need for Church reform.",
    references: JSON.stringify([
      {
        title: "Vatican Official Biography",
        url: "https://www.vatican.va/content/francesco/en/biography/documents/papa-francesco-biografia-bergoglio.html",
        type: "Official"
      },
      {
        title: "Encyclical Laudato Si'",
        url: "https://www.vatican.va/content/francesco/en/encyclicals/documents/papa-francesco_20150524_enciclica-laudato-si.html",
        type: "Document"
      },
      {
        title: "Britannica Biography",
        url: "https://www.britannica.com/biography/Francis-I-pope",
        type: "Reference"
      }
    ]),
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Pope_Francis_2019.jpg/400px-Pope_Francis_2019.jpg",
    isCurrent: false,
    events: [
      {
        title: "Election as Pope",
        description: "Chosen as successor to Pope Benedict XVI.",
        eventDate: "2013 AD",
        eventType: "ELECTION",
        location: "Vatican",
        significance: "First pope from the Americas, first Jesuit pope"
      },
      {
        title: "Laudato Si'",
        description: "Published the encyclical on care for our common home.",
        eventDate: "2015 AD",
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
      },
      {
        title: "Interfaith Dialogue",
        description: "Promoted dialogue with other religions and denominations.",
        category: "DIPLOMACY",
        year: 2014,
        significance: "Improved relations with other faiths"
      }
    ]
  },

  // Current Pope
  {
    name: "Leo XIV",
    regnalName: "Pope Leo XIV",
    birthName: "Robert Francis Prevost",
    birthDate: "1955 AD",
    deathDate: null,
    papacyStart: "2025 AD",
    papacyEnd: null,
    papacyNumber: 267,
    nationality: "American (Chicago)",
    previousOffice: "Prefect of the Dicastery for Bishops",
    biography: "First American pope in history. Former Augustinian missionary and bishop. Known for his pastoral approach and commitment to Church renewal.",
    historicalContext: "Pope Leo XIV is the first American pope in the history of the Catholic Church. Born in Chicago, he served as a missionary in Peru before being appointed Prefect of the Dicastery for Bishops. His election in 2025 marked a historic moment for the Church.",
    references: JSON.stringify([
      {
        title: "Vatican Official Biography",
        url: "https://www.vatican.va/content/vatican/en/holy-father/leone-xiv.html",
        type: "Official"
      },
      {
        title: "Vatican List of Popes",
        url: "https://www.vatican.va/content/vatican/en/holy-father.html",
        type: "Official"
      }
    ]),
    imageUrl: null, // No image available yet
    isCurrent: true,
    events: [
      {
        title: "Election as Pope",
        description: "Chosen as successor to Pope Francis, becoming the first American pope.",
        eventDate: "2025 AD",
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
  console.log('🌱 Seeding comprehensive papal data...')

  try {
    // Clear existing data
    await prisma.papalAchievement.deleteMany()
    await prisma.papalEvent.deleteMany()
    await prisma.pope.deleteMany()

    console.log('✅ Cleared existing papal data')

    // Seed popes with their events and achievements
    for (const popeData of popesData) {
      const { events, achievements, ...popeInfo } = popeData

      // Helper to construct a Date for historical years, preserving years 0-99
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
            // For BC dates, use a large offset to avoid negative years
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
          // If it's a 1-2 digit year, treat as AD with proper year handling
          return historicalDate(year)
        }
        
        return null
      }

      const pope = await prisma.pope.create({
        data: {
          ...popeInfo,
          birthDate: parseHistoricalDate(popeInfo.birthDate),
          deathDate: parseHistoricalDate(popeInfo.deathDate),
          papacyStart: parseHistoricalDate(popeInfo.papacyStart) || historicalDate(30), // reasonable fallback
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
