import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding database...')

  // Create categories
  const scriptureCategory = await prisma.category.upsert({
    where: { slug: 'scripture-study' },
    update: {},
    create: {
      name: 'Scripture Study',
      slug: 'scripture-study',
      description: 'Deep dives into biblical texts and their relevance to modern Catholic life'
    }
  })

  const traditionCategory = await prisma.category.upsert({
    where: { slug: 'catholic-tradition' },
    update: {},
    create: {
      name: 'Catholic Tradition',
      slug: 'catholic-tradition',
      description: 'Exploring the rich history and teachings of the Catholic Church'
    }
  })

  const spiritualityCategory = await prisma.category.upsert({
    where: { slug: 'spiritual-life' },
    update: {},
    create: {
      name: 'Spiritual Life',
      slug: 'spiritual-life',
      description: 'Practical guidance for living a faithful Catholic life'
    }
  })

  // Create tags
  const faithTag = await prisma.tag.upsert({
    where: { slug: 'faith' },
    update: {},
    create: {
      name: 'Faith',
      slug: 'faith'
    }
  })

  const prayerTag = await prisma.tag.upsert({
    where: { slug: 'prayer' },
    update: {},
    create: {
      name: 'Prayer',
      slug: 'prayer'
    }
  })

  const gospelTag = await prisma.tag.upsert({
    where: { slug: 'gospel' },
    update: {},
    create: {
      name: 'Gospel',
      slug: 'gospel'
    }
  })

  const saintsTag = await prisma.tag.upsert({
    where: { slug: 'saints' },
    update: {},
    create: {
      name: 'Saints',
      slug: 'saints'
    }
  })

  // Create admin user
  const hashedPassword = await bcrypt.hash('admin123', 12)
  const adminUser = await prisma.user.upsert({
    where: { email: 'ajay@example.com' },
    update: {},
    create: {
      email: 'ajay@example.com',
      name: 'Ajay',
      passwordHash: hashedPassword,
      role: 'ADMIN'
    }
  })

  // Create sample posts
  const post1 = await prisma.post.upsert({
    where: { slug: 'the-beauty-of-daily-prayer' },
    update: {},
    create: {
      title: 'The Beauty of Daily Prayer: Finding God in the Ordinary',
      slug: 'the-beauty-of-daily-prayer',
      content: `
        <p>In our fast-paced world, it's easy to overlook the profound beauty that lies in the simple act of daily prayer. As Catholics, we are blessed with a rich tradition of prayer that can transform even the most mundane moments into encounters with the divine.</p>
        
        <h2>The Rhythm of Prayer</h2>
        <p>Prayer is not merely a religious obligation, but a lifeline that connects us to our Creator. When we establish a rhythm of daily prayer, we create space for God to speak to our hearts and guide our steps.</p>
        
        <p>The Church offers us various forms of prayer - from the structured beauty of the Liturgy of the Hours to the spontaneous conversations we have with God throughout our day. Each form serves a unique purpose in our spiritual journey.</p>
        
        <h2>Finding God in the Ordinary</h2>
        <p>One of the most beautiful aspects of Catholic spirituality is the recognition that God is present in all things. When we pray with intention, we begin to see His hand in the smallest details of our lives.</p>
        
        <p>Whether it's offering a quick prayer of gratitude before a meal, or taking a moment to reflect on God's goodness during a quiet walk, these simple acts of prayer can become powerful moments of grace.</p>
        
        <h2>Practical Steps</h2>
        <p>If you're looking to deepen your prayer life, consider these simple steps:</p>
        <ul>
          <li>Start your day with a morning offering</li>
          <li>Take time for silent meditation</li>
          <li>End your day with an examination of conscience</li>
          <li>Keep a prayer journal to track your spiritual growth</li>
        </ul>
        
        <p>Remember, prayer is not about perfection, but about presence. God meets us where we are, in our brokenness and our joy, and transforms our hearts through the simple act of turning to Him.</p>
      `,
      excerpt: 'Discover how daily prayer can transform ordinary moments into encounters with the divine, and learn practical steps to deepen your spiritual life.',
      status: 'PUBLISHED',
      publishedAt: new Date('2024-01-15'),
      authorId: adminUser.id
    }
  })

  const post2 = await prisma.post.upsert({
    where: { slug: 'understanding-the-eucharist' },
    update: {},
    create: {
      title: 'Understanding the Eucharist: The Source and Summit of Our Faith',
      slug: 'understanding-the-eucharist',
      content: `
        <p>The Eucharist stands at the very heart of Catholic faith and practice. As the Second Vatican Council teaches, it is "the source and summit of the Christian life." But what does this profound truth mean for us today?</p>
        
        <h2>The Real Presence</h2>
        <p>At the center of our Eucharistic faith is the belief in the Real Presence of Jesus Christ. When the priest speaks the words of consecration, the bread and wine truly become the Body and Blood of Christ. This is not merely a symbol or a reminder, but a reality that transforms our very being.</p>
        
        <p>This mystery, known as transubstantiation, has been a cornerstone of Catholic belief since the earliest days of the Church. It's a truth that requires faith to accept, but once embraced, it opens up infinite possibilities for spiritual growth.</p>
        
        <h2>Communion and Community</h2>
        <p>The word "communion" itself reveals the communal nature of the Eucharist. When we receive the Body of Christ, we are not only united with Christ Himself, but with all the faithful throughout the world and throughout history.</p>
        
        <p>This unity is not just a nice sentiment - it's a call to action. As members of the Body of Christ, we are called to live in harmony with one another, to support each other in our spiritual journeys, and to work together for the building of God's kingdom.</p>
        
        <h2>Living the Eucharist</h2>
        <p>The Eucharist is not meant to be confined to the walls of the church. It's meant to transform how we live our daily lives. When we receive Christ in the Eucharist, we are called to become what we receive - to be Christ's presence in the world.</p>
        
        <p>This means living with compassion, seeking justice, and serving others with love. It means seeing Christ in every person we meet, especially those who are suffering or in need.</p>
        
        <p>As we approach the altar to receive the Eucharist, let us remember that we are not just receiving a sacrament - we are entering into the very life of God, and committing ourselves to share that life with the world.</p>
      `,
      excerpt: 'Explore the profound mystery of the Eucharist and discover how this central sacrament of our faith can transform our daily lives and relationships.',
      status: 'PUBLISHED',
      publishedAt: new Date('2024-01-10'),
      authorId: adminUser.id
    }
  })

  const post3 = await prisma.post.upsert({
    where: { slug: 'saints-as-spiritual-companions' },
    update: {},
    create: {
      title: 'Saints as Spiritual Companions: Learning from the Cloud of Witnesses',
      slug: 'saints-as-spiritual-companions',
      content: `
        <p>The saints are not distant figures from the past, but living companions who walk with us on our spiritual journey. They are proof that holiness is possible, even in the most challenging circumstances.</p>
        
        <h2>The Communion of Saints</h2>
        <p>As Catholics, we believe in the communion of saints - the spiritual bond that unites all believers, both living and dead. This means that the saints are not just historical figures, but active participants in our spiritual lives.</p>
        
        <p>When we pray to the saints, we're not worshiping them - we're asking for their intercession and guidance. They are our older siblings in faith, who have walked the path before us and can help us navigate the challenges of Christian life.</p>
        
        <h2>Learning from Their Examples</h2>
        <p>Each saint offers us a unique example of how to live the Gospel in different circumstances. Saint Francis shows us how to embrace poverty and simplicity. Saint Teresa of Avila teaches us about contemplative prayer. Saint Mother Teresa demonstrates the power of serving the poorest of the poor.</p>
        
        <p>But the saints are not perfect people. They struggled with sin, doubt, and human weakness just like we do. What makes them saints is not their perfection, but their willingness to let God work through their imperfections.</p>
        
        <h2>Finding Your Patron Saints</h2>
        <p>Many Catholics have patron saints - particular saints they feel a special connection with. These relationships often develop naturally as we learn about different saints and their stories.</p>
        
        <p>Consider spending time learning about different saints. Read their biographies, pray with their writings, and ask for their intercession. You might be surprised by the saints who become your spiritual companions.</p>
        
        <p>Remember, the saints are not meant to be distant ideals, but close friends who understand our struggles and can help us grow in holiness. They are cheering us on from heaven, and they want nothing more than to see us become the saints God created us to be.</p>
      `,
      excerpt: 'Discover how the saints can become your spiritual companions and learn from their examples of faith, courage, and love.',
      status: 'PUBLISHED',
      publishedAt: new Date('2024-01-05'),
      authorId: adminUser.id
    }
  })

  // Connect posts to categories and tags
  await prisma.postCategory.createMany({
    data: [
      { postId: post1.id, categoryId: spiritualityCategory.id },
      { postId: post2.id, categoryId: traditionCategory.id },
      { postId: post3.id, categoryId: traditionCategory.id }
    ]
  })

  await prisma.postTag.createMany({
    data: [
      { postId: post1.id, tagId: prayerTag.id },
      { postId: post1.id, tagId: faithTag.id },
      { postId: post2.id, tagId: faithTag.id },
      { postId: post2.id, tagId: gospelTag.id },
      { postId: post3.id, tagId: saintsTag.id },
      { postId: post3.id, tagId: faithTag.id }
    ]
  })

  console.log('✅ Database seeded successfully!')
  console.log('📝 Created 3 sample posts')
  console.log('👤 Created admin user: ajay@example.com (password: admin123)')
  console.log('🏷️ Created categories and tags')
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
