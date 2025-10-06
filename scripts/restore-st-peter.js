#!/usr/bin/env node

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  try {
    const existing = await prisma.pope.findFirst({ where: { papacyNumber: 1 } })
    if (!existing) {
      await prisma.pope.create({
        data: {
          papacyNumber: 1,
          name: 'Peter',
          regnalName: 'Saint Peter',
          birthName: 'Simon Peter',
          birthDate: null,
          deathDate: new Date('0064-01-01T00:00:00.000Z'),
          papacyStart: new Date('0030-01-01T00:00:00.000Z'),
          papacyEnd: new Date('0064-01-01T00:00:00.000Z'),
          nationality: 'Bethsaida, Galilee',
          previousOffice: 'Apostle of Jesus Christ',
          notableEvents:
            'Foundation of the papacy; leadership of early Church; martyrdom in Rome',
          biography:
            'Saint Peter, originally Simon, was called by Jesus to be an apostle and became the first Bishop of Rome. Jesus named him “Peter” (Rock) and entrusted him with the keys of the Kingdom. Peter led the early Church and was martyred in Rome under Nero. His tomb is venerated beneath St. Peter’s Basilica.',
          historicalContext:
            'Apostolic foundation of the Roman See; establishment of episcopal succession; early Christian mission in Rome under persecution.',
          references: JSON.stringify([
            {
              type: 'Scripture',
              title: 'Matthew 16:18–19',
              url: 'https://www.biblegateway.com/passage/?search=Matthew+16%3A18-19',
            },
            {
              type: 'Scripture',
              title: 'John 21:15–17',
              url: 'https://www.biblegateway.com/passage/?search=John+21%3A15-17',
            },
            {
              type: 'Historical',
              title: 'Acts of the Apostles (leadership episodes)',
              url: 'https://www.biblegateway.com/passage/?search=Acts+1-12',
            },
            {
              type: 'Official',
              title: 'Vatican – Holy Father (List of Popes)',
              url: 'https://www.vatican.va/content/vatican/en/holy-father.html',
            },
            {
              type: 'Historical',
              title: 'Catholic Encyclopedia – Saint Peter',
              url: 'https://www.newadvent.org/cathen/11744a.htm',
            },
          ]),
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Peter_%28Apostle%29_-_St_Peter%27s_Basilica_%28Vatican%29.jpg/200px-Peter_%28Apostle%29_-_St_Peter%27s_Basilica_%28Vatican%29.jpg",
          isCurrent: false,
        },
      })
      console.log('✅ Restored Saint Peter (papacyNumber=1)')
    } else {
      console.log('ℹ️ Saint Peter already present')
    }
    const count = await prisma.pope.count()
    console.log('Local pope count:', count)
  } finally {
    await prisma.$disconnect()
  }
}

main().catch((e) => {
  console.error('❌ Restore failed:', e)
  process.exit(1)
})


