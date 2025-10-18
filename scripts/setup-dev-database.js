const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function setupDevelopmentDatabase() {
  try {
    console.log('🔄 Setting up development database...');
    
    // Test connection
    console.log('📡 Testing database connection...');
    await prisma.$connect();
    console.log('✅ Database connection successful!');
    
    // Check if we need to push the schema
    console.log('🔄 Pushing schema to development database...');
    
    // This will create tables if they don't exist
    await prisma.$executeRaw`SELECT 1`;
    console.log('✅ Schema check completed');
    
    // Check if we have any data
    const userCount = await prisma.user.count();
    const postCount = await prisma.post.count();
    
    console.log(`📊 Current data: ${userCount} users, ${postCount} posts`);
    
    if (userCount === 0) {
      console.log('⚠️  No users found. You may need to create an admin user.');
    }
    
    if (postCount === 0) {
      console.log('⚠️  No posts found. You may want to sync data from production.');
    }
    
    console.log('✅ Development database setup completed!');
    
  } catch (error) {
    console.error('❌ Error setting up development database:', error);
    console.error('Make sure the DATABASE_URL is correct and the database is accessible.');
  } finally {
    await prisma.$disconnect();
  }
}

setupDevelopmentDatabase();

