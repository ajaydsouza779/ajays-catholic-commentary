const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const path = require('path');

// Script to set up development database
// Run this after creating the dev Supabase project and updating env.development

async function setupDevDatabase() {
  console.log('🗄️ Setting up Development Database');
  console.log('==================================');

  // Check if env.development exists
  const envPath = path.join(process.cwd(), 'env.development');
  if (!fs.existsSync(envPath)) {
    console.error('❌ env.development file not found!');
    console.log('📝 Please create env.development with your dev DATABASE_URL first');
    return;
  }

  // Load environment variables
  require('dotenv').config({ path: envPath });

  if (!process.env.DATABASE_URL) {
    console.error('❌ DATABASE_URL not found in env.development!');
    console.log('📝 Please update env.development with your dev Supabase connection string');
    return;
  }

  console.log('🔗 Using development database:', process.env.DATABASE_URL.replace(/:([^@]+)@/, ':***@'));

  const prisma = new PrismaClient({
    datasources: {
      db: {
        url: process.env.DATABASE_URL,
      },
    },
  });

  try {
    console.log('\n⏳ Connecting to development database...');
    await prisma.$connect();
    console.log('✅ Connected successfully!');

    console.log('\n📊 Checking database status...');
    const userCount = await prisma.user.count();
    const postCount = await prisma.post.count();
    const categoryCount = await prisma.category.count();
    const tagCount = await prisma.tag.count();

    console.log(`👥 Users: ${userCount}`);
    console.log(`📄 Posts: ${postCount}`);
    console.log(`📂 Categories: ${categoryCount}`);
    console.log(`🏷️ Tags: ${tagCount}`);

    if (userCount === 0) {
      console.log('\n🌱 Database is empty - ready for seeding');
      console.log('📝 Run: node scripts/seed-dev-database.js');
    } else {
      console.log('\n✅ Database already has data');
    }

    console.log('\n🎯 Development database setup complete!');
    console.log('📖 You can now:');
    console.log('  - Run: npm run dev (to start development server)');
    console.log('  - Make changes safely on develop branch');
    console.log('  - Deploy to Vercel preview for testing');

  } catch (error) {
    console.error('❌ Error setting up development database:', error.message);
    console.log('\n🔧 Troubleshooting:');
    console.log('1. Check your DATABASE_URL in env.development');
    console.log('2. Ensure Supabase project is active');
    console.log('3. Verify connection string format');
  } finally {
    await prisma.$disconnect();
  }
}

setupDevDatabase();
