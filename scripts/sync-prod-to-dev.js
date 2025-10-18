const { PrismaClient } = require('@prisma/client');

// Production database connection
const prodUrl = process.env.DATABASE_URL_PROD
if (!prodUrl) {
  console.error('Missing env: DATABASE_URL_PROD')
  process.exit(1)
}
const prodPrisma = new PrismaClient({ datasources: { db: { url: prodUrl } } })

// Development database connection
const devUrl = process.env.DATABASE_URL
if (!devUrl) {
  console.error('Missing env: DATABASE_URL')
  process.exit(1)
}
const devPrisma = new PrismaClient({ datasources: { db: { url: devUrl } } })

async function syncProductionToDevelopment() {
  try {
    console.log('🔄 Starting production to development database sync...');
    
    // Test connections
    console.log('📡 Testing production database connection...');
    await prodPrisma.$connect();
    console.log('✅ Production database connected');
    
    console.log('📡 Testing development database connection...');
    await devPrisma.$connect();
    console.log('✅ Development database connected');
    
    // 1. Sync Users
    console.log('👥 Syncing users...');
    const prodUsers = await prodPrisma.user.findMany();
    console.log(`Found ${prodUsers.length} users in production`);
    
    for (const user of prodUsers) {
      await devPrisma.user.upsert({
        where: { email: user.email },
        update: {
          name: user.name,
          role: user.role,
          image: user.image,
          emailVerified: user.emailVerified
        },
        create: {
          id: user.id,
          email: user.email,
          name: user.name,
          passwordHash: user.passwordHash,
          role: user.role,
          image: user.image,
          emailVerified: user.emailVerified,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt
        }
      });
    }
    console.log('✅ Users synced');
    
    // 2. Sync Categories
    console.log('📂 Syncing categories...');
    const prodCategories = await prodPrisma.category.findMany();
    console.log(`Found ${prodCategories.length} categories in production`);
    
    for (const category of prodCategories) {
      await devPrisma.category.upsert({
        where: { slug: category.slug },
        update: {
          name: category.name,
          description: category.description
        },
        create: {
          id: category.id,
          name: category.name,
          slug: category.slug,
          description: category.description,
          createdAt: category.createdAt,
          updatedAt: category.updatedAt
        }
      });
    }
    console.log('✅ Categories synced');
    
    // 3. Sync Tags
    console.log('🏷️ Syncing tags...');
    const prodTags = await prodPrisma.tag.findMany();
    console.log(`Found ${prodTags.length} tags in production`);
    
    for (const tag of prodTags) {
      await devPrisma.tag.upsert({
        where: { slug: tag.slug },
        update: {
          name: tag.name
        },
        create: {
          id: tag.id,
          name: tag.name,
          slug: tag.slug,
          createdAt: tag.createdAt,
          updatedAt: tag.updatedAt
        }
      });
    }
    console.log('✅ Tags synced');
    
    // 4. Sync Posts
    console.log('📝 Syncing posts...');
    const prodPosts = await prodPrisma.post.findMany({
      include: {
        categories: { include: { category: true } },
        tags: { include: { tag: true } },
        author: true
      }
    });
    console.log(`Found ${prodPosts.length} posts in production`);
    
    for (const post of prodPosts) {
      // Create/update post
      await devPrisma.post.upsert({
        where: { slug: post.slug },
        update: {
          title: post.title,
          content: post.content,
          excerpt: post.excerpt,
          featuredImage: post.featuredImage,
          status: post.status,
          publishedAt: post.publishedAt,
          authorId: post.authorId
        },
        create: {
          id: post.id,
          title: post.title,
          slug: post.slug,
          content: post.content,
          excerpt: post.excerpt,
          featuredImage: post.featuredImage,
          status: post.status,
          publishedAt: post.publishedAt,
          authorId: post.authorId,
          createdAt: post.createdAt,
          updatedAt: post.updatedAt
        }
      });
      
      // Sync post categories
      await devPrisma.postCategory.deleteMany({
        where: { postId: post.id }
      });
      
      for (const pc of post.categories) {
        await devPrisma.postCategory.create({
          data: {
            postId: post.id,
            categoryId: pc.categoryId
          }
        });
      }
      
      // Sync post tags
      await devPrisma.postTag.deleteMany({
        where: { postId: post.id }
      });
      
      for (const pt of post.tags) {
        await devPrisma.postTag.create({
          data: {
            postId: post.id,
            tagId: pt.tagId
          }
        });
      }
    }
    console.log('✅ Posts synced');
    
    // 5. Sync Comments
    console.log('💬 Syncing comments...');
    const prodComments = await prodPrisma.comment.findMany();
    console.log(`Found ${prodComments.length} comments in production`);
    
    for (const comment of prodComments) {
      await devPrisma.comment.upsert({
        where: { id: comment.id },
        update: {
          content: comment.content,
          status: comment.status,
          authorId: comment.authorId,
          guestName: comment.guestName,
          guestEmail: comment.guestEmail,
          parentId: comment.parentId
        },
        create: {
          id: comment.id,
          content: comment.content,
          status: comment.status,
          postId: comment.postId,
          authorId: comment.authorId,
          guestName: comment.guestName,
          guestEmail: comment.guestEmail,
          parentId: comment.parentId,
          createdAt: comment.createdAt,
          updatedAt: comment.updatedAt
        }
      });
    }
    console.log('✅ Comments synced');
    
    // 6. Sync Site Settings
    console.log('⚙️ Syncing site settings...');
    const prodSettings = await prodPrisma.siteSettings.findMany();
    console.log(`Found ${prodSettings.length} site settings in production`);
    
    for (const setting of prodSettings) {
      await devPrisma.siteSettings.upsert({
        where: { key: setting.key },
        update: {
          value: setting.value,
          description: setting.description
        },
        create: {
          id: setting.id,
          key: setting.key,
          value: setting.value,
          description: setting.description,
          createdAt: setting.createdAt,
          updatedAt: setting.updatedAt
        }
      });
    }
    console.log('✅ Site settings synced');
    
    console.log('🎉 Production to development database sync completed successfully!');
    
    // Summary
    const devUserCount = await devPrisma.user.count();
    const devPostCount = await devPrisma.post.count();
    const devCategoryCount = await devPrisma.category.count();
    const devTagCount = await devPrisma.tag.count();
    const devCommentCount = await devPrisma.comment.count();
    
    console.log('\n📊 Development database summary:');
    console.log(`   - Users: ${devUserCount}`);
    console.log(`   - Posts: ${devPostCount}`);
    console.log(`   - Categories: ${devCategoryCount}`);
    console.log(`   - Tags: ${devTagCount}`);
    console.log(`   - Comments: ${devCommentCount}`);
    
  } catch (error) {
    console.error('❌ Error syncing production to development:', error);
  } finally {
    await prodPrisma.$disconnect();
    await devPrisma.$disconnect();
  }
}

syncProductionToDevelopment();
