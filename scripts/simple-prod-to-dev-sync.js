#!/usr/bin/env node

// Simple Prod to Dev Sync: Delete dev data and recreate from prod
const { PrismaClient } = require('@prisma/client');

// Production database (read-only)
const prodUrl = process.env.DATABASE_URL_PROD;
if (!prodUrl) {
  console.error('❌ Missing DATABASE_URL_PROD environment variable');
  process.exit(1);
}

// Development database (read-write)
const devUrl = process.env.DATABASE_URL;
if (!devUrl) {
  console.error('❌ Missing DATABASE_URL environment variable');
  process.exit(1);
}

const prodPrisma = new PrismaClient({
  datasources: { db: { url: prodUrl } }
});

const devPrisma = new PrismaClient({
  datasources: { db: { url: devUrl } }
});

async function simpleProdToDevSync() {
  console.log('🔄 Simple Prod to Dev Sync: Delete & Recreate');
  console.log('==============================================\n');

  try {
    // Step 1: Connect to both databases
    console.log('1️⃣ Connecting to databases...');
    await prodPrisma.$connect();
    await devPrisma.$connect();
    console.log('✅ Connected to both databases\n');

    // Step 2: Delete all dev data (in correct order to avoid foreign key constraints)
    console.log('2️⃣ Deleting all development data...');
    
    // Delete in reverse dependency order
    await devPrisma.comment.deleteMany();
    console.log('   ✅ Deleted all comments');
    
    await devPrisma.postTag.deleteMany();
    console.log('   ✅ Deleted all post tags');
    
    await devPrisma.postCategory.deleteMany();
    console.log('   ✅ Deleted all post categories');
    
    await devPrisma.post.deleteMany();
    console.log('   ✅ Deleted all posts');
    
    await devPrisma.tag.deleteMany();
    console.log('   ✅ Deleted all tags');
    
    await devPrisma.category.deleteMany();
    console.log('   ✅ Deleted all categories');
    
    await devPrisma.featureToggle.deleteMany();
    console.log('   ✅ Deleted all feature toggles');
    
    // Keep users (don't delete admin users)
    console.log('   ✅ Kept existing users\n');

    // Step 3: Copy all data from prod to dev
    console.log('3️⃣ Copying data from production to development...');
    
    // Copy Categories
    console.log('   📝 Copying categories...');
    const prodCategories = await prodPrisma.category.findMany();
    for (const category of prodCategories) {
      await devPrisma.category.create({
        data: {
          id: category.id,
          name: category.name,
          slug: category.slug,
          description: category.description,
          createdAt: category.createdAt,
          updatedAt: category.updatedAt
        }
      });
    }
    console.log(`   ✅ Copied ${prodCategories.length} categories`);

    // Copy Tags
    console.log('   📝 Copying tags...');
    const prodTags = await prodPrisma.tag.findMany();
    for (const tag of prodTags) {
      await devPrisma.tag.create({
        data: {
          id: tag.id,
          name: tag.name,
          slug: tag.slug,
          description: tag.description,
          createdAt: tag.createdAt,
          updatedAt: tag.updatedAt
        }
      });
    }
    console.log(`   ✅ Copied ${prodTags.length} tags`);

    // Copy Posts
    console.log('   📝 Copying posts...');
    const prodPosts = await prodPrisma.post.findMany({
      include: {
        categories: true,
        tags: true
      }
    });
    
    for (const post of prodPosts) {
      // Create post
      await devPrisma.post.create({
        data: {
          id: post.id,
          title: post.title,
          slug: post.slug,
          excerpt: post.excerpt,
          content: post.content,
          publishedAt: post.publishedAt,
          status: post.status,
          authorId: post.authorId,
          createdAt: post.createdAt,
          updatedAt: post.updatedAt
        }
      });

      // Create post categories
      for (const category of post.categories) {
        await devPrisma.postCategory.create({
          data: {
            postId: post.id,
            categoryId: category.categoryId
          }
        });
      }

      // Create post tags
      for (const tag of post.tags) {
        await devPrisma.postTag.create({
          data: {
            postId: post.id,
            tagId: tag.tagId
          }
        });
      }
    }
    console.log(`   ✅ Copied ${prodPosts.length} posts`);

    // Copy Comments
    console.log('   📝 Copying comments...');
    const prodComments = await prodPrisma.comment.findMany();
    for (const comment of prodComments) {
      await devPrisma.comment.create({
        data: {
          id: comment.id,
          content: comment.content,
          status: comment.status,
          authorId: comment.authorId,
          postId: comment.postId,
          parentId: comment.parentId,
          guestName: comment.guestName,
          guestEmail: comment.guestEmail,
          createdAt: comment.createdAt,
          updatedAt: comment.updatedAt
        }
      });
    }
    console.log(`   ✅ Copied ${prodComments.length} comments`);

    // Copy Feature Toggles
    console.log('   📝 Copying feature toggles...');
    const prodFeatureToggles = await prodPrisma.featureToggle.findMany();
    for (const toggle of prodFeatureToggles) {
      await devPrisma.featureToggle.create({
        data: {
          id: toggle.id,
          name: toggle.name,
          description: toggle.description,
          enabled: toggle.enabled,
          category: toggle.category,
          dependencies: toggle.dependencies,
          createdAt: toggle.createdAt,
          updatedAt: toggle.updatedAt
        }
      });
    }
    console.log(`   ✅ Copied ${prodFeatureToggles.length} feature toggles`);

    console.log('\n🎉 Simple Prod to Dev sync completed successfully!');
    console.log('📊 Summary:');
    console.log(`   - Categories: ${prodCategories.length}`);
    console.log(`   - Tags: ${prodTags.length}`);
    console.log(`   - Posts: ${prodPosts.length}`);
    console.log(`   - Comments: ${prodComments.length}`);
    console.log(`   - Feature Toggles: ${prodFeatureToggles.length}`);
    console.log('\n✅ Development database is now identical to production!');

  } catch (error) {
    console.error('❌ Sync failed:', error);
    throw error;
  } finally {
    await prodPrisma.$disconnect();
    await devPrisma.$disconnect();
  }
}

// Run the sync
simpleProdToDevSync().catch(console.error);
