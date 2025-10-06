import { NextResponse } from 'next/server'

// Comprehensive Church Timeline data
const churchTimelineData = [
  {
    id: 'jesus-era',
    title: 'The Time of Jesus',
    description: 'The life, ministry, death, and resurrection of Jesus Christ, the foundation of Christianity.',
    year: 30,
    type: 'era',
    parentId: null,
    children: [
      {
        id: 'jesus-birth',
        title: 'Birth of Jesus',
        description: 'The Incarnation - God becomes man in Jesus Christ.',
        year: 0,
        type: 'event',
        parentId: 'jesus-era',
        children: [],
        relatedPopes: [],
        significance: 'The central event of human history, marking the beginning of the Christian era.'
      },
      {
        id: 'jesus-ministry',
        title: 'Public Ministry of Jesus',
        description: 'Three years of teaching, healing, and establishing the foundations of the Church.',
        year: 30,
        type: 'event',
        parentId: 'jesus-era',
        children: [],
        relatedPopes: [],
        significance: 'Jesus established the Church and gave authority to the Apostles.'
      },
      {
        id: 'jesus-crucifixion',
        title: 'Crucifixion and Resurrection',
        description: 'The Paschal Mystery - the death and resurrection of Jesus Christ.',
        year: 33,
        type: 'event',
        parentId: 'jesus-era',
        children: [],
        relatedPopes: [],
        significance: 'The central mystery of Christian faith, bringing salvation to all humanity.'
      }
    ],
    relatedPopes: [],
    significance: 'The foundational period of Christianity, establishing the Church and its mission.'
  },
  {
    id: 'apostolic-era',
    title: 'Apostolic Era',
    description: 'The early Church led by the Apostles, spreading Christianity throughout the Roman Empire.',
    year: 33,
    type: 'era',
    parentId: null,
    children: [
      {
        id: 'pentecost',
        title: 'Pentecost',
        description: 'The descent of the Holy Spirit upon the Apostles, marking the birth of the Church.',
        year: 33,
        type: 'event',
        parentId: 'apostolic-era',
        children: [],
        relatedPopes: [],
        significance: 'The Church is born and begins its mission to spread the Gospel to all nations.'
      },
      {
        id: 'peter-rome',
        title: 'Saint Peter in Rome',
        description: 'Saint Peter establishes the Church in Rome and becomes the first Bishop of Rome.',
        year: 42,
        type: 'event',
        parentId: 'apostolic-era',
        children: [],
        relatedPopes: [{ id: '1', regnalName: 'Saint Peter', papacyStart: '30 AD', papacyEnd: '64 AD', papacyNumber: 1 }],
        significance: 'Establishes Rome as the center of the Church and the papacy.'
      },
      {
        id: 'paul-missions',
        title: 'Paul\'s Missionary Journeys',
        description: 'Saint Paul spreads Christianity throughout the Mediterranean world.',
        year: 45,
        type: 'event',
        parentId: 'apostolic-era',
        children: [],
        relatedPopes: [],
        significance: 'Christianity spreads beyond Jerusalem to become a universal religion.'
      }
    ],
    relatedPopes: [{ id: '1', regnalName: 'Saint Peter', papacyStart: '30 AD', papacyEnd: '64 AD', papacyNumber: 1 }],
    significance: 'The foundation of the Church and the beginning of its worldwide mission.'
  },
  {
    id: 'early-church',
    title: 'Early Church Period',
    description: 'The Church during the first three centuries, facing persecution and establishing doctrine.',
    year: 100,
    type: 'era',
    parentId: null,
    children: [
      {
        id: 'persecutions',
        title: 'Roman Persecutions',
        description: 'Periodic persecutions of Christians by Roman emperors.',
        year: 64,
        type: 'event',
        parentId: 'early-church',
        children: [],
        relatedPopes: [],
        significance: 'Strengthened the faith of Christians and led to the development of martyrdom theology.'
      },
      {
        id: 'apostolic-fathers',
        title: 'Apostolic Fathers',
        description: 'Early Christian writers who knew the Apostles personally.',
        year: 100,
        type: 'movement',
        parentId: 'early-church',
        children: [],
        relatedPopes: [],
        significance: 'Preserved apostolic teaching and established early Christian theology.'
      },
      {
        id: 'gnosticism',
        title: 'Gnosticism',
        description: 'Early heresy that claimed secret knowledge was necessary for salvation.',
        year: 120,
        type: 'heresy',
        parentId: 'early-church',
        children: [],
        relatedPopes: [],
        significance: 'Led to the development of the New Testament canon and orthodox doctrine.'
      }
    ],
    relatedPopes: [
      { id: '2', regnalName: 'Pope Linus', papacyStart: '67 AD', papacyEnd: '76 AD', papacyNumber: 2 },
      { id: '3', regnalName: 'Pope Anacletus', papacyStart: '76 AD', papacyEnd: '88 AD', papacyNumber: 3 },
      { id: '4', regnalName: 'Pope Clement I', papacyStart: '88 AD', papacyEnd: '99 AD', papacyNumber: 4 }
    ],
    significance: 'Established the foundations of Christian doctrine and Church structure.'
  },
  {
    id: 'constantinian-era',
    title: 'Constantinian Era',
    description: 'The Church under Constantine and the establishment of Christianity as the state religion.',
    year: 313,
    type: 'era',
    parentId: null,
    children: [
      {
        id: 'edict-milan',
        title: 'Edict of Milan',
        description: 'Constantine legalizes Christianity throughout the Roman Empire.',
        year: 313,
        type: 'event',
        parentId: 'constantinian-era',
        children: [],
        relatedPopes: [],
        significance: 'Ends persecution and allows Christianity to flourish openly.'
      },
      {
        id: 'council-nicaea',
        title: 'First Council of Nicaea',
        description: 'First ecumenical council, addressing Arianism and establishing the Nicene Creed.',
        year: 325,
        type: 'council',
        parentId: 'constantinian-era',
        children: [],
        relatedPopes: [{ id: '32', regnalName: 'Pope Sylvester I', papacyStart: '314 AD', papacyEnd: '335 AD', papacyNumber: 32 }],
        significance: 'Establishes orthodox Christology and the structure of ecumenical councils.'
      },
      {
        id: 'arianism',
        title: 'Arianism',
        description: 'Heresy that denied the divinity of Christ.',
        year: 320,
        type: 'heresy',
        parentId: 'constantinian-era',
        children: [],
        relatedPopes: [],
        significance: 'Led to the development of Trinitarian theology and the Nicene Creed.'
      }
    ],
    relatedPopes: [
      { id: '32', regnalName: 'Pope Sylvester I', papacyStart: '314 AD', papacyEnd: '335 AD', papacyNumber: 32 }
    ],
    significance: 'Transforms Christianity from a persecuted sect to the dominant religion of the Empire.'
  },
  {
    id: 'patristic-era',
    title: 'Patristic Era',
    description: 'The age of the Church Fathers, developing theology and defending orthodoxy.',
    year: 400,
    type: 'era',
    parentId: null,
    children: [
      {
        id: 'augustine',
        title: 'Saint Augustine of Hippo',
        description: 'Greatest of the Latin Fathers, author of Confessions and City of God.',
        year: 354,
        type: 'saint',
        parentId: 'patristic-era',
        children: [],
        relatedPopes: [],
        significance: 'Developed key theological concepts including original sin and grace.'
      },
      {
        id: 'jerome',
        title: 'Saint Jerome',
        description: 'Translator of the Vulgate Bible and defender of orthodoxy.',
        year: 347,
        type: 'saint',
        parentId: 'patristic-era',
        children: [],
        relatedPopes: [],
        significance: 'Created the standard Latin Bible used by the Church for over 1000 years.'
      },
      {
        id: 'council-chalcedon',
        title: 'Council of Chalcedon',
        description: 'Fourth ecumenical council, defining the two natures of Christ.',
        year: 451,
        type: 'council',
        parentId: 'patristic-era',
        children: [],
        relatedPopes: [{ id: '45', regnalName: 'Pope Leo I', papacyStart: '440 AD', papacyEnd: '461 AD', papacyNumber: 45 }],
        significance: 'Establishes orthodox Christology and the relationship between divine and human natures.'
      }
    ],
    relatedPopes: [
      { id: '45', regnalName: 'Pope Leo I', papacyStart: '440 AD', papacyEnd: '461 AD', papacyNumber: 45 }
    ],
    significance: 'Develops the theological foundations of Christianity and establishes key doctrines.'
  },
  {
    id: 'medieval-era',
    title: 'Medieval Period',
    description: 'The Church in the Middle Ages, from the fall of Rome to the Renaissance.',
    year: 500,
    type: 'era',
    parentId: null,
    children: [
      {
        id: 'benedict',
        title: 'Saint Benedict',
        description: 'Founder of Western monasticism and the Benedictine Order.',
        year: 480,
        type: 'saint',
        parentId: 'medieval-era',
        children: [],
        relatedPopes: [],
        significance: 'Establishes the foundation of Western monastic life and learning.'
      },
      {
        id: 'gregory-great',
        title: 'Pope Gregory I (the Great)',
        description: 'One of the greatest popes, reformer and missionary.',
        year: 590,
        type: 'saint',
        parentId: 'medieval-era',
        children: [],
        relatedPopes: [{ id: '64', regnalName: 'Pope Gregory I', papacyStart: '590 AD', papacyEnd: '604 AD', papacyNumber: 64 }],
        significance: 'Strengthens papal authority and sends missionaries to convert England.'
      },
      {
        id: 'great-schism',
        title: 'Great Schism',
        description: 'The split between Eastern and Western Christianity.',
        year: 1054,
        type: 'event',
        parentId: 'medieval-era',
        children: [],
        relatedPopes: [],
        significance: 'Divides Christianity into Eastern Orthodox and Roman Catholic traditions.'
      }
    ],
    relatedPopes: [
      { id: '64', regnalName: 'Pope Gregory I', papacyStart: '590 AD', papacyEnd: '604 AD', papacyNumber: 64 }
    ],
    significance: 'Shapes the Church\'s role in medieval society and establishes key institutions.'
  },
  {
    id: 'reformation-era',
    title: 'Reformation Period',
    description: 'The Protestant Reformation and Catholic Counter-Reformation.',
    year: 1500,
    type: 'era',
    parentId: null,
    children: [
      {
        id: 'luther',
        title: 'Martin Luther',
        description: 'German monk who initiated the Protestant Reformation.',
        year: 1517,
        type: 'event',
        parentId: 'reformation-era',
        children: [],
        relatedPopes: [],
        significance: 'Begins the Protestant Reformation, challenging Catholic doctrine and practice.'
      },
      {
        id: 'council-trent',
        title: 'Council of Trent',
        description: 'Catholic response to the Reformation, defining doctrine and implementing reforms.',
        year: 1545,
        type: 'council',
        parentId: 'reformation-era',
        children: [],
        relatedPopes: [],
        significance: 'Establishes Catholic doctrine in response to Protestant challenges.'
      },
      {
        id: 'jesuits',
        title: 'Society of Jesus (Jesuits)',
        description: 'Religious order founded by Saint Ignatius of Loyola.',
        year: 1540,
        type: 'movement',
        parentId: 'reformation-era',
        children: [],
        relatedPopes: [],
        significance: 'Becomes a major force in education and missionary work.'
      }
    ],
    relatedPopes: [],
    significance: 'Transforms the religious landscape of Europe and shapes modern Christianity.'
  },
  {
    id: 'modern-era',
    title: 'Modern Period',
    description: 'The Church in the modern world, facing new challenges and opportunities.',
    year: 1800,
    type: 'era',
    parentId: null,
    children: [
      {
        id: 'vatican-i',
        title: 'First Vatican Council',
        description: 'Defines papal infallibility and addresses modern challenges.',
        year: 1869,
        type: 'council',
        parentId: 'modern-era',
        children: [],
        relatedPopes: [{ id: '255', regnalName: 'Pope Pius IX', papacyStart: '1846 AD', papacyEnd: '1878 AD', papacyNumber: 255 }],
        significance: 'Establishes papal infallibility and addresses the relationship between faith and reason.'
      },
      {
        id: 'vatican-ii',
        title: 'Second Vatican Council',
        description: 'Modernizes the Church and promotes ecumenism.',
        year: 1962,
        type: 'council',
        parentId: 'modern-era',
        children: [],
        relatedPopes: [
          { id: '260', regnalName: 'Pope John XXIII', papacyStart: '1958 AD', papacyEnd: '1963 AD', papacyNumber: 260 },
          { id: '261', regnalName: 'Pope Paul VI', papacyStart: '1963 AD', papacyEnd: '1978 AD', papacyNumber: 261 }
        ],
        significance: 'Modernizes the Church, promotes ecumenism, and updates liturgy and doctrine.'
      },
      {
        id: 'john-paul-ii',
        title: 'Pope John Paul II',
        description: 'First non-Italian pope in 455 years, global evangelist.',
        year: 1978,
        type: 'saint',
        parentId: 'modern-era',
        children: [],
        relatedPopes: [{ id: '264', regnalName: 'Pope John Paul II', papacyStart: '1978 AD', papacyEnd: '2005 AD', papacyNumber: 264 }],
        significance: 'Becomes the most traveled pope in history and plays a key role in ending communism.'
      }
    ],
    relatedPopes: [
      { id: '255', regnalName: 'Pope Pius IX', papacyStart: '1846 AD', papacyEnd: '1878 AD', papacyNumber: 255 },
      { id: '260', regnalName: 'Pope John XXIII', papacyStart: '1958 AD', papacyEnd: '1963 AD', papacyNumber: 260 },
      { id: '261', regnalName: 'Pope Paul VI', papacyStart: '1963 AD', papacyEnd: '1978 AD', papacyNumber: 261 },
      { id: '264', regnalName: 'Pope John Paul II', papacyStart: '1978 AD', papacyEnd: '2005 AD', papacyNumber: 264 }
    ],
    significance: 'The Church adapts to the modern world while maintaining its core mission and teachings.'
  }
]

export async function GET() {
  try {
    return NextResponse.json(churchTimelineData)
  } catch (error) {
    console.error('Error fetching church timeline:', error)
    return NextResponse.json(
      { error: 'Failed to fetch church timeline data' },
      { status: 500 }
    )
  }
}
