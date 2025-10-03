const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const divisionsData = [
  {
    name: "Great Schism (1054)",
    description: "The permanent split between the Eastern Orthodox Church and the Roman Catholic Church, marking the end of the united Christian Church.",
    year: 1054,
    cause: "Disputes over papal authority, the Filioque clause, and cultural differences between East and West.",
    outcome: "Formal separation between Eastern Orthodoxy and Roman Catholicism that continues to this day.",
    children: [
      {
        name: "Eastern Orthodox Church",
        description: "The communion of autocephalous Christian churches that follow the Byzantine Rite and recognize the Patriarch of Constantinople as their spiritual leader.",
        year: 1054,
        cause: "Rejection of papal supremacy and Western theological developments.",
        outcome: "Maintained traditional Byzantine theology and practices."
      },
      {
        name: "Roman Catholic Church",
        description: "The largest Christian denomination, led by the Pope in Rome, maintaining the Western theological tradition.",
        year: 1054,
        cause: "Insistence on papal supremacy and Western theological formulations.",
        outcome: "Continued development of Western theology and papal authority."
      }
    ]
  },
  {
    name: "Protestant Reformation (1517)",
    description: "The 16th-century religious movement that led to the creation of Protestant churches, challenging the authority of the Roman Catholic Church.",
    year: 1517,
    cause: "Corruption in the Church, sale of indulgences, and theological disputes over salvation and authority.",
    outcome: "Creation of multiple Protestant denominations and the Counter-Reformation in the Catholic Church.",
    children: [
      {
        name: "Lutheranism",
        description: "Founded by Martin Luther, emphasizing justification by faith alone and the authority of Scripture.",
        year: 1517,
        cause: "Luther's 95 Theses and rejection of papal authority.",
        outcome: "Established as a separate Christian tradition in Germany and Scandinavia."
      },
      {
        name: "Calvinism",
        description: "Founded by John Calvin, emphasizing predestination and the sovereignty of God.",
        year: 1536,
        cause: "Reformation in Geneva and theological development of Reformed theology.",
        outcome: "Spread throughout Europe and influenced Presbyterian and Reformed churches."
      },
      {
        name: "Anglicanism",
        description: "The Church of England, established by Henry VIII, combining Catholic liturgy with Protestant theology.",
        year: 1534,
        cause: "Henry VIII's break with Rome over his divorce from Catherine of Aragon.",
        outcome: "Created a unique Anglican tradition that spread throughout the British Empire."
      },
      {
        name: "Anabaptism",
        description: "Radical Reformation movement emphasizing adult baptism and separation of church and state.",
        year: 1525,
        cause: "Rejection of infant baptism and state-church connections.",
        outcome: "Influenced modern Baptist, Mennonite, and Amish traditions."
      }
    ]
  },
  {
    name: "English Civil War and Puritanism (1640s)",
    description: "Religious and political conflicts in England that led to the temporary overthrow of the monarchy and the rise of Puritan influence.",
    year: 1642,
    cause: "Conflicts between Anglicans and Puritans over church governance and theology.",
    outcome: "Temporary establishment of a Puritan Commonwealth and lasting influence on English Protestantism.",
    children: [
      {
        name: "Puritan Movement",
        description: "English Protestants who sought to purify the Church of England from Catholic practices.",
        year: 1560,
        cause: "Desire for further reformation of the Anglican Church.",
        outcome: "Influenced the development of Congregationalist and Presbyterian churches."
      },
      {
        name: "Quakerism",
        description: "Founded by George Fox, emphasizing direct experience of God and pacifism.",
        year: 1652,
        cause: "Rejection of formal church structures and emphasis on inner light.",
        outcome: "Established the Religious Society of Friends (Quakers)."
      }
    ]
  },
  {
    name: "Methodist Movement (1730s)",
    description: "A revival movement within Anglicanism that eventually became a separate denomination, emphasizing personal holiness and social justice.",
    year: 1738,
    cause: "John Wesley's conversion experience and desire for spiritual renewal within the Church of England.",
    outcome: "Formation of the Methodist Church and influence on evangelical Christianity.",
    children: [
      {
        name: "Wesleyan Methodism",
        description: "The main branch of Methodism following John Wesley's teachings on sanctification and social holiness.",
        year: 1784,
        cause: "Formal separation from Anglicanism in America.",
        outcome: "Became one of the largest Protestant denominations in America."
      },
      {
        name: "Primitive Methodism",
        description: "A more radical branch of Methodism emphasizing lay preaching and social reform.",
        year: 1811,
        cause: "Desire for more democratic church governance and social activism.",
        outcome: "Influenced the development of the Salvation Army and other social reform movements."
      }
    ]
  },
  {
    name: "Great Awakening (1730s-1740s)",
    description: "A series of religious revivals in the American colonies that emphasized personal conversion and emotional religious experience.",
    year: 1734,
    cause: "Concern over declining religious fervor and the influence of Enlightenment rationalism.",
    outcome: "Revitalized American Protestantism and influenced the development of evangelical Christianity.",
    children: [
      {
        name: "Evangelical Movement",
        description: "A broad movement emphasizing personal conversion, biblical authority, and evangelism.",
        year: 1734,
        cause: "Revival preaching and emphasis on personal religious experience.",
        outcome: "Shaped modern evangelical Christianity and influenced multiple denominations."
      },
      {
        name: "Baptist Expansion",
        description: "Rapid growth of Baptist churches during the Great Awakening, emphasizing believer's baptism and congregational autonomy.",
        year: 1740,
        cause: "Revival preaching and emphasis on personal conversion.",
        outcome: "Baptists became one of the largest Protestant groups in America."
      }
    ]
  }
]

async function seedChurchDivisions() {
  try {
    console.log('🌱 Starting church divisions data seeding...')

    // Clear existing data
    await prisma.churchDivision.deleteMany()

    console.log('🗑️ Cleared existing church divisions data')

    // Seed divisions with their children
    for (const divisionData of divisionsData) {
      const { children, ...parentData } = divisionData

      // Create parent division
      const parent = await prisma.churchDivision.create({
        data: parentData
      })

      console.log(`✅ Created division: ${parent.name}`)

      // Create child divisions
      if (children && children.length > 0) {
        for (const childData of children) {
          await prisma.churchDivision.create({
            data: {
              ...childData,
              parentId: parent.id
            }
          })
        }
        console.log(`📅 Added ${children.length} sub-divisions for ${parent.name}`)
      }
    }

    console.log('🎉 Church divisions data seeding completed successfully!')
    console.log(`📊 Created ${divisionsData.length} main divisions with their sub-divisions`)

  } catch (error) {
    console.error('❌ Error seeding church divisions data:', error)
    throw error
  } finally {
    await prisma.$disconnect()
  }
}

// Run the seeding
seedChurchDivisions()
  .catch((error) => {
    console.error('Seeding failed:', error)
    process.exit(1)
  })
