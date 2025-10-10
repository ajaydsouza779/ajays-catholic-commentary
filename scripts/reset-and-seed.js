const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL
    }
  }
})

async function resetAndSeed() {
  try {
    console.log('🔄 Resetting database...')
    
    // Clear all data in the correct order (respecting foreign key constraints)
    await prisma.postTag.deleteMany()
    await prisma.postCategory.deleteMany()
    await prisma.comment.deleteMany()
    await prisma.post.deleteMany()
    await prisma.tag.deleteMany()
    await prisma.category.deleteMany()
    await prisma.session.deleteMany()
    await prisma.account.deleteMany()
    await prisma.verificationToken.deleteMany()
    await prisma.user.deleteMany()
    
    console.log('✅ Database cleared')
    
    // Now run the seed script
    console.log('🌱 Seeding database...')
    
    // Create admin user
    const adminUser = await prisma.user.create({
      data: {
        email: 'ajay@example.com',
        name: 'Ajay D\'Souza',
        passwordHash: '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewdBPj4J/8KzKz2K', // admin123
        role: 'ADMIN',
        emailVerified: new Date()
      }
    })
    
    console.log('✅ Admin user created:', adminUser.email)
    
    // Create categories
    const categories = await Promise.all([
      prisma.category.create({
        data: {
          name: 'Scripture Study',
          slug: 'scripture-study',
          description: 'Deep dives into biblical texts and their meanings'
        }
      }),
      prisma.category.create({
        data: {
          name: 'Church History',
          slug: 'church-history',
          description: 'Exploring the rich history of the Catholic Church'
        }
      }),
      prisma.category.create({
        data: {
          name: 'Catholic Doctrine',
          slug: 'catholic-doctrine',
          description: 'Understanding Catholic teachings and beliefs'
        }
      })
    ])
    
    console.log('✅ Categories created')
    
    // Create tags
    const tags = await Promise.all([
      prisma.tag.create({
        data: {
          name: 'Bible',
          slug: 'bible',
          description: 'Biblical studies and interpretation'
        }
      }),
      prisma.tag.create({
        data: {
          name: 'Tradition',
          slug: 'tradition',
          description: 'Sacred Tradition and Church teachings'
        }
      }),
      prisma.tag.create({
        data: {
          name: 'Prayer',
          slug: 'prayer',
          description: 'Prayer life and spiritual practices'
        }
      })
    ])
    
    console.log('✅ Tags created')
    
    // Create sample post
    const samplePost = await prisma.post.create({
      data: {
        title: 'Welcome to Catholic Commentary',
        slug: 'welcome-to-catholic-commentary',
        content: '<h1>Welcome to Catholic Commentary</h1><p>This is your first post in the Catholic Commentary system. You can edit or delete this post from the admin dashboard.</p><p>Use the rich text editor to create beautiful, formatted content that shares the beauty of Catholic faith and tradition.</p>',
        excerpt: 'Welcome to your new Catholic Commentary blog. This is a sample post to get you started.',
        status: 'PUBLISHED',
        authorId: adminUser.id,
        publishedAt: new Date()
      }
    })
    
    // Connect post to categories and tags
    await prisma.postCategory.createMany({
      data: [
        { postId: samplePost.id, categoryId: categories[0].id },
        { postId: samplePost.id, categoryId: categories[2].id }
      ]
    })
    
    await prisma.postTag.createMany({
      data: [
        { postId: samplePost.id, tagId: tags[0].id },
        { postId: samplePost.id, tagId: tags[1].id }
      ]
    })
    
    console.log('✅ Sample post created')
    console.log('🎉 Database seeded successfully!')
    console.log('📧 Admin login: ajay@example.com')
    console.log('🔑 Admin password: admin123')
    
  } catch (error) {
    console.error('❌ Error:', error)
  } finally {
    await prisma.$disconnect()
  }
}

resetAndSeed()
