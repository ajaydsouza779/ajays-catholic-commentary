const { PrismaClient } = require('@prisma/client');
const fs = require('fs');

// Quick development database setup
// This will create the schema and seed with basic data

async function setupDevDbQuick() {
  console.log('🚀 Setting up Development Database');
  console.log('================================');

  const prisma = new PrismaClient();

  try {
    console.log('⏳ Connecting to development database...');
    await prisma.$connect();
    console.log('✅ Connected successfully!');

    console.log('\n📊 Checking if database is empty...');
    const userCount = await prisma.user.count();
    
    if (userCount > 0) {
      console.log('✅ Database already has data!');
      console.log(`👥 Users: ${userCount}`);
      return;
    }

    console.log('\n🌱 Database is empty - setting up...');
    
    // Create admin user
    const adminUser = await prisma.user.create({
      data: {
        email: 'ajay@example.com',
        name: 'Ajay D\'Souza',
        role: 'ADMIN',
      },
    });
    console.log('✅ Admin user created');

    // Create categories
    const categories = [
      { name: 'Scripture Study', slug: 'scripture-study', description: 'Deep dives into biblical texts' },
      { name: 'Catholic Tradition', slug: 'catholic-tradition', description: 'Exploring Catholic heritage' },
      { name: 'Spiritual Life', slug: 'spiritual-life', description: 'Personal spiritual growth' },
      { name: 'History', slug: 'history', description: 'Church history and context' },
    ];

    for (const category of categories) {
      await prisma.category.create({ data: category });
    }
    console.log('✅ Categories created');

    // Create tags
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
    console.log('✅ Tags created');

    // Create sample post
    const samplePost = await prisma.post.create({
      data: {
        title: 'Welcome to Development Environment',
        slug: 'welcome-to-development-environment',
        content: '<p>This is a sample post in the development environment. You can safely test changes here without affecting production.</p><p>Features to test:</p><ul><li>SEO optimization</li><li>Mobile responsiveness</li><li>Guest comments</li><li>Page titles</li></ul>',
        excerpt: 'A sample post for development testing',
        status: 'PUBLISHED',
        publishedAt: new Date(),
        authorId: adminUser.id,
      },
    });
    console.log('✅ Sample post created');

    // Link post to categories and tags
    const scriptureCategory = await prisma.category.findUnique({ where: { name: 'Scripture Study' } });
    const gospelTag = await prisma.tag.findUnique({ where: { name: 'Gospel' } });
    
    if (scriptureCategory) {
      await prisma.postCategory.create({
        data: { postId: samplePost.id, categoryId: scriptureCategory.id },
      });
    }
    
    if (gospelTag) {
      await prisma.postTag.create({
        data: { postId: samplePost.id, tagId: gospelTag.id },
      });
    }

    console.log('\n🎉 Development database setup complete!');
    console.log('📊 Summary:');
    console.log(`  - 1 admin user (${adminUser.email})`);
    console.log(`  - ${categories.length} categories`);
    console.log(`  - ${tags.length} tags`);
    console.log('  - 1 sample post');

    console.log('\n🚀 Ready for development!');
    console.log('📝 You can now:');
    console.log('  - Test the features locally');
    console.log('  - Deploy to Vercel preview');
    console.log('  - Test guest comments');
    console.log('  - Check mobile responsiveness');

  } catch (error) {
    console.error('❌ Error setting up development database:', error.message);
    console.log('\n🔧 Troubleshooting:');
    console.log('1. Check your DATABASE_URL in .env');
    console.log('2. Ensure Supabase project is active');
    console.log('3. Try running the SQL script directly in Supabase');
  } finally {
    await prisma.$disconnect();
  }
}

setupDevDbQuick();
