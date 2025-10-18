#!/usr/bin/env node

const { PrismaClient } = require('@prisma/client');

// This script runs on your local machine to sync local SQLite to dev PostgreSQL

const localUrl = process.env.DATABASE_URL_LOCAL || 'file:./dev.db';
const devUrl = process.env.DATABASE_URL;

if (!devUrl) {
  console.error('❌ Missing DATABASE_URL environment variable');
  console.error('Please set it to your dev database URL:');
  console.error('export DATABASE_URL="postgresql://postgres.kdmmosvpfvtfewkndlcu:%2312Company@aws-1-us-east-1.pooler.supabase.com:5432/postgres?pgbouncer=true&sslmode=require"');
  process.exit(1);
}

const localPrisma = new PrismaClient({
  datasources: {
    db: {
      url: localUrl
    }
  }
});

const devPrisma = new PrismaClient({
  datasources: {
    db: {
      url: devUrl
    }
  }
});

async function syncLocalToDev() {
  console.log('🔄 Starting sync from Local SQLite to Dev PostgreSQL...');
  console.log(`📁 Local DB: ${localUrl}`);
  console.log(`☁️  Dev DB: ${devUrl.replace(/:[^:]*@/, ':***@')}`);
  
  try {
    // Test connections
    console.log('🔍 Testing database connections...');
    await localPrisma.$connect();
    await devPrisma.$connect();
    console.log('✅ Database connections successful');

    // 1. Sync Users
    console.log('📝 Syncing Users...');
    const localUsers = await localPrisma.user.findMany();
    for (const user of localUsers) {
      await devPrisma.user.upsert({
        where: { id: user.id },
        update: {
          name: user.name,
          email: user.email,
          emailVerified: user.emailVerified,
          image: user.image,
          role: user.role,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt
        },
        create: {
          id: user.id,
          name: user.name,
          email: user.email,
          emailVerified: user.emailVerified,
          image: user.image,
          role: user.role,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt
        }
      });
    }
    console.log(`✅ Synced ${localUsers.length} users`);

    // 2. Sync Categories
    console.log('📝 Syncing Categories...');
    const localCategories = await localPrisma.category.findMany();
    for (const category of localCategories) {
      await devPrisma.category.upsert({
        where: { id: category.id },
        update: {
          name: category.name,
          slug: category.slug,
          description: category.description,
          createdAt: category.createdAt,
          updatedAt: category.updatedAt
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
    console.log(`✅ Synced ${localCategories.length} categories`);

    // 3. Sync Tags
    console.log('📝 Syncing Tags...');
    const localTags = await localPrisma.tag.findMany();
    for (const tag of localTags) {
      await devPrisma.tag.upsert({
        where: { id: tag.id },
        update: {
          name: tag.name,
          slug: tag.slug,
          description: tag.description,
          createdAt: tag.createdAt,
          updatedAt: tag.updatedAt
        },
        create: {
          id: tag.id,
          name: tag.name,
          slug: tag.slug,
          description: tag.description,
          createdAt: tag.createdAt,
          updatedAt: tag.updatedAt
        }
      });
    }
    console.log(`✅ Synced ${localTags.length} tags`);

    // 4. Sync Posts
    console.log('📝 Syncing Posts...');
    const localPosts = await localPrisma.post.findMany({
      include: {
        categories: true,
        tags: true
      }
    });
    
    for (const post of localPosts) {
      // Create/update post
      await devPrisma.post.upsert({
        where: { id: post.id },
        update: {
          title: post.title,
          slug: post.slug,
          excerpt: post.excerpt,
          content: post.content,
          publishedAt: post.publishedAt,
          status: post.status,
          authorId: post.authorId,
          createdAt: post.createdAt,
          updatedAt: post.updatedAt
        },
        create: {
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

      // Sync post categories
      if (post.categories && post.categories.length > 0) {
        await devPrisma.postCategory.deleteMany({
          where: { postId: post.id }
        });
        for (const category of post.categories) {
          await devPrisma.postCategory.create({
            data: {
              postId: post.id,
              categoryId: category.categoryId
            }
          });
        }
      }

      // Sync post tags
      if (post.tags && post.tags.length > 0) {
        await devPrisma.postTag.deleteMany({
          where: { postId: post.id }
        });
        for (const tag of post.tags) {
          await devPrisma.postTag.create({
            data: {
              postId: post.id,
              tagId: tag.tagId
            }
          });
        }
      }
    }
    console.log(`✅ Synced ${localPosts.length} posts`);

    // 5. Sync Comments
    console.log('📝 Syncing Comments...');
    const localComments = await localPrisma.comment.findMany();
    for (const comment of localComments) {
      await devPrisma.comment.upsert({
        where: { id: comment.id },
        update: {
          content: comment.content,
          status: comment.status,
          authorId: comment.authorId,
          postId: comment.postId,
          parentId: comment.parentId,
          guestName: comment.guestName,
          guestEmail: comment.guestEmail,
          createdAt: comment.createdAt,
          updatedAt: comment.updatedAt
        },
        create: {
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
    console.log(`✅ Synced ${localComments.length} comments`);

    // 6. Sync Feature Toggles (if they exist locally)
    console.log('📝 Syncing Feature Toggles...');
    try {
      const localFeatureToggles = await localPrisma.featureToggle.findMany();
      for (const toggle of localFeatureToggles) {
        await devPrisma.featureToggle.upsert({
          where: { id: toggle.id },
          update: {
            name: toggle.name,
            description: toggle.description,
            enabled: toggle.enabled,
            category: toggle.category,
            dependencies: toggle.dependencies,
            createdAt: toggle.createdAt,
            updatedAt: toggle.updatedAt
          },
          create: {
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
      console.log(`✅ Synced ${localFeatureToggles.length} feature toggles`);
    } catch (error) {
      console.log('⚠️  Feature toggles not found in local DB (this is normal if not created yet)');
    }

    console.log('🎉 Local to Dev sync completed successfully!');
    
  } catch (error) {
    console.error('❌ Sync failed:', error);
    throw error;
  } finally {
    await localPrisma.$disconnect();
    await devPrisma.$disconnect();
  }
}

// Run the sync
syncLocalToDev().catch(console.error);
