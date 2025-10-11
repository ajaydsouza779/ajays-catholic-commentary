const { PrismaClient } = require('@prisma/client');

async function testEditFunctionality() {
  console.log('🔧 Testing edit functionality...');
  
  const prisma = new PrismaClient({
    datasources: {
      db: {
        url: process.env.DATABASE_URL + '?pgbouncer=true&connection_limit=1',
      },
    },
  });

  try {
    // Test 1: Check if we can read posts
    console.log('\n📖 Test 1: Reading posts...');
    const posts = await prisma.post.findMany({
      take: 1,
      include: {
        categories: {
          include: {
            category: true
          }
        },
        tags: {
          include: {
            tag: true
          }
        }
      }
    });
    
    if (posts.length > 0) {
      console.log('✅ Posts read successfully');
      console.log('📄 First post:', {
        id: posts[0].id,
        title: posts[0].title,
        slug: posts[0].slug,
        status: posts[0].status
      });
      
      // Test 2: Try to update a post
      console.log('\n✏️ Test 2: Updating post...');
      const updatedPost = await prisma.post.update({
        where: { id: posts[0].id },
        data: {
          updatedAt: new Date()
        }
      });
      
      console.log('✅ Post updated successfully');
      console.log('📅 Updated at:', updatedPost.updatedAt);
      
    } else {
      console.log('❌ No posts found to test with');
    }
    
    // Test 3: Check categories and tags
    console.log('\n🏷️ Test 3: Checking categories and tags...');
    const categories = await prisma.category.findMany();
    const tags = await prisma.tag.findMany();
    
    console.log(`✅ Found ${categories.length} categories and ${tags.length} tags`);
    
  } catch (error) {
    console.error('❌ Edit functionality test failed:', error);
  } finally {
    await prisma.$disconnect();
  }
}

testEditFunctionality();
