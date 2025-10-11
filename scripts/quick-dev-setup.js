const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const path = require('path');

// Quick development database setup
// This script sets up the development database quickly

async function quickDevSetup() {
  console.log('🚀 Quick Development Database Setup');
  console.log('==================================');

  // Load development environment
  require('dotenv').config({ path: path.join(process.cwd(), 'env.development') });

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
    console.log('\n⏳ Testing connection...');
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
      console.log('📝 Next steps:');
      console.log('1. Go to Supabase SQL Editor');
      console.log('2. Run the SQL script: sql/dev_database_setup.sql');
      console.log('3. Or run: node scripts/seed-dev-database.js');
    } else {
      console.log('\n✅ Database already has data');
      console.log('🎯 Development database is ready!');
    }

    console.log('\n🚀 Development Setup Complete!');
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
    console.log('4. Try running the SQL script directly in Supabase');
  } finally {
    await prisma.$disconnect();
  }
}

quickDevSetup();
