const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function syncDevelopmentDatabase() {
  try {
    console.log('🔄 Syncing development database with production data...');
    
    // Test connection
    await prisma.$connect();
    console.log('✅ Connected to development database');
    
    // Check current data
    const userCount = await prisma.user.count();
    const postCount = await prisma.post.count();
    const categoryCount = await prisma.category.count();
    const tagCount = await prisma.tag.count();
    
    console.log(`📊 Current development data:`);
    console.log(`   - Users: ${userCount}`);
    console.log(`   - Posts: ${postCount}`);
    console.log(`   - Categories: ${categoryCount}`);
    console.log(`   - Tags: ${tagCount}`);
    
    if (postCount === 0) {
      console.log('⚠️  No posts found in development database.');
      console.log('💡 You may want to:');
      console.log('   1. Copy the production post from the production database');
      console.log('   2. Or create a test post locally');
      console.log('   3. Or run the post creation script');
    }
    
    // Check if we have the Sunday Gospel post
    const sundayPost = await prisma.post.findFirst({
      where: {
        slug: 'sunday-gospel-reflection-grateful-samaritan-october-12-2025'
      }
    });
    
    if (sundayPost) {
      console.log('✅ Sunday Gospel post found in development database');
    } else {
      console.log('⚠️  Sunday Gospel post not found in development database');
      console.log('💡 You may want to copy it from production or recreate it');
    }
    
    console.log('✅ Development database sync check completed!');
    
  } catch (error) {
    console.error('❌ Error syncing development database:', error);
  } finally {
    await prisma.$disconnect();
  }
}

syncDevelopmentDatabase();

