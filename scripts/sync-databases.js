#!/usr/bin/env node

const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const path = require('path');

// Database connections
const prodUrl = process.env.DATABASE_URL_PROD
if (!prodUrl) {
  console.error('Missing env: DATABASE_URL_PROD')
  process.exit(1)
}
const prodPrisma = new PrismaClient({ datasources: { db: { url: prodUrl } } })

const devUrl = process.env.DATABASE_URL
if (!devUrl) {
  console.error('Missing env: DATABASE_URL')
  process.exit(1)
}
const devPrisma = new PrismaClient({ datasources: { db: { url: devUrl } } })

async function syncDatabases() {
  try {
    console.log('🚀 Starting comprehensive database sync...');
    console.log('📊 Production → Development → Local updates');
    
    // Step 1: Test connections
    console.log('\n📡 Testing database connections...');
    
    await prodPrisma.$connect();
    console.log('✅ Production database connected');
    
    await devPrisma.$connect();
    console.log('✅ Development database connected');
    
    // Step 2: Sync production to development
    console.log('\n🔄 Syncing production to development...');
    
    // Users
    console.log('👥 Syncing users...');
    const prodUsers = await prodPrisma.user.findMany();
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
    console.log(`✅ Synced ${prodUsers.length} users`);
    
    // Categories
    console.log('📂 Syncing categories...');
    const prodCategories = await prodPrisma.category.findMany();
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
    console.log(`✅ Synced ${prodCategories.length} categories`);
    
    // Tags
    console.log('🏷️ Syncing tags...');
    const prodTags = await prodPrisma.tag.findMany();
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
    console.log(`✅ Synced ${prodTags.length} tags`);
    
    // Posts
    console.log('📝 Syncing posts...');
    const prodPosts = await prodPrisma.post.findMany({
      include: {
        categories: { include: { category: true } },
        tags: { include: { tag: true } },
        author: true
      }
    });
    
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
    console.log(`✅ Synced ${prodPosts.length} posts`);
    
    // Comments
    console.log('💬 Syncing comments...');
    const prodComments = await prodPrisma.comment.findMany();
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
    console.log(`✅ Synced ${prodComments.length} comments`);
    
    // Site Settings
    console.log('⚙️ Syncing site settings...');
    const prodSettings = await prodPrisma.siteSettings.findMany();
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
    console.log(`✅ Synced ${prodSettings.length} site settings`);
    
    // Step 3: Add new features to development
    console.log('\n🆕 Adding new features to development database...');
    
    // Initialize feature toggles
    const { initializeFeatureToggles } = require('../src/lib/feature-toggles');
    await initializeFeatureToggles();
    console.log('✅ Feature toggles initialized');
    
    // Step 4: Apply performance optimizations
    console.log('\n⚡ Applying performance optimizations...');
    
    const optimizationSQL = fs.readFileSync(
      path.join(__dirname, '../sql/performance-optimization.sql'), 
      'utf8'
    );
    
    // Split SQL into individual statements
    const statements = optimizationSQL
      .split(';')
      .map(s => s.trim())
      .filter(s => s.length > 0);
    
    for (const statement of statements) {
      try {
        await devPrisma.$executeRawUnsafe(statement);
      } catch (error) {
        // Some statements might fail if indexes already exist
        if (!error.message.includes('already exists')) {
          console.warn(`Warning: ${error.message}`);
        }
      }
    }
    console.log('✅ Performance optimizations applied');
    
    // Step 5: Summary
    console.log('\n📊 Development database summary:');
    const devUserCount = await devPrisma.user.count();
    const devPostCount = await devPrisma.post.count();
    const devCategoryCount = await devPrisma.category.count();
    const devTagCount = await devPrisma.tag.count();
    const devCommentCount = await devPrisma.comment.count();
    const devFeatureCount = await devPrisma.featureToggle.count();
    
    console.log(`   - Users: ${devUserCount}`);
    console.log(`   - Posts: ${devPostCount}`);
    console.log(`   - Categories: ${devCategoryCount}`);
    console.log(`   - Tags: ${devTagCount}`);
    console.log(`   - Comments: ${devCommentCount}`);
    console.log(`   - Feature Toggles: ${devFeatureCount}`);
    
    console.log('\n🎉 Database sync completed successfully!');
    console.log('\n📋 Next steps:');
    console.log('1. Commit and push changes to develop branch');
    console.log('2. Deploy to Vercel preview environment');
    console.log('3. Test feature toggles in admin panel');
    console.log('4. Monitor performance improvements');
    
  } catch (error) {
    console.error('❌ Error during database sync:', error);
  } finally {
    await prodPrisma.$disconnect();
    await devPrisma.$disconnect();
  }
}

syncDatabases();
