const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const path = require('path');

// Script to seed development database with essential data
// Run this after setting up the dev database schema

async function seedDevDatabase() {
  console.log('🌱 Seeding Development Database');
  console.log('===============================');

  // Load development environment
  require('dotenv').config({ path: path.join(process.cwd(), 'env.development') });

  if (!process.env.DATABASE_URL) {
    console.error('❌ DATABASE_URL not found in env.development!');
    return;
  }

  const prisma = new PrismaClient({
    datasources: {
      db: {
        url: process.env.DATABASE_URL,
      },
    },
  });

  try {
    console.log('🔗 Connecting to development database...');
    await prisma.$connect();
    console.log('✅ Connected successfully!');

    // Check if already seeded
    const userCount = await prisma.user.count();
    if (userCount > 0) {
      console.log('⚠️ Database already has data - skipping seed');
      return;
    }

    console.log('\n👤 Creating admin user...');
    const adminUser = await prisma.user.create({
      data: {
        email: 'ajay@example.com',
        name: 'Ajay D\'Souza',
        role: 'ADMIN',
      },
    });
    console.log('✅ Admin user created:', adminUser.email);

    console.log('\n📂 Creating categories...');
    const categories = [
      { name: 'Scripture Study', slug: 'scripture-study', description: 'Deep dives into biblical texts' },
      { name: 'Catholic Tradition', slug: 'catholic-tradition', description: 'Exploring Catholic heritage and teachings' },
      { name: 'Spiritual Life', slug: 'spiritual-life', description: 'Personal spiritual growth and reflection' },
      { name: 'History', slug: 'history', description: 'Church history and historical context' },
    ];

    for (const category of categories) {
      await prisma.category.create({ data: category });
    }
    console.log('✅ Categories created:', categories.length);

    console.log('\n🏷️ Creating tags...');
    const tags = [
      { name: 'Gospel', slug: 'gospel' },
      { name: 'Reflection', slug: 'reflection' },
      { name: 'Prayer', slug: 'prayer' },
      { name: 'Sunday', slug: 'sunday' },
      { name: 'Catholic', slug: 'catholic' },
    ];

    for (const tag of tags) {
      await prisma.tag.create({ data: tag });
    }
    console.log('✅ Tags created:', tags.length);

    console.log('\n📄 Creating sample post...');
    const samplePost = await prisma.post.create({
      data: {
        title: 'Welcome to Development Environment',
        slug: 'welcome-to-development-environment',
        content: '<p>This is a sample post in the development environment. You can safely test changes here without affecting production.</p>',
        excerpt: 'A sample post for development testing',
        status: 'PUBLISHED',
        publishedAt: new Date(),
        authorId: adminUser.id,
      },
    });
    console.log('✅ Sample post created:', samplePost.title);

    console.log('\n🎉 Development database seeded successfully!');
    console.log('📊 Summary:');
    console.log(`  - 1 admin user (${adminUser.email})`);
    console.log(`  - ${categories.length} categories`);
    console.log(`  - ${tags.length} tags`);
    console.log('  - 1 sample post');

    console.log('\n🚀 Ready for development!');
    console.log('📝 Next steps:');
    console.log('  - Run: npm run dev');
    console.log('  - Make changes on develop branch');
    console.log('  - Test with development database');

  } catch (error) {
    console.error('❌ Error seeding development database:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seedDevDatabase();
