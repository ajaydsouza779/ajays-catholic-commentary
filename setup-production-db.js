#!/usr/bin/env node

// Setup script for production database
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: "postgresql://postgres:%231Company%40123@db.nxjtogogonbztiyympvb.supabase.co:5432/postgres"
    }
  }
});

async function setupProductionDatabase() {
  try {
    console.log('Setting up production database...');
    
    // Check if admin user already exists
    const existingAdmin = await prisma.user.findUnique({
      where: { email: 'ajay@example.com' }
    });
    
    if (existingAdmin) {
      console.log('Admin user already exists');
      return;
    }
    
    // Create admin user
    const hashedPassword = await bcrypt.hash('admin123', 12);
    
    const adminUser = await prisma.user.create({
      data: {
        name: 'Ajay Dsouza',
        email: 'ajay@example.com',
        passwordHash: hashedPassword,
        role: 'ADMIN'
      }
    });
    
    console.log('Admin user created:', adminUser.email);
    
    // Create sample categories
    const categories = await Promise.all([
      prisma.category.create({
        data: {
          name: 'Theology',
          slug: 'theology',
          description: 'Deep theological discussions and teachings'
        }
      }),
      prisma.category.create({
        data: {
          name: 'Scripture',
          slug: 'scripture',
          description: 'Biblical studies and interpretations'
        }
      }),
      prisma.category.create({
        data: {
          name: 'Tradition',
          slug: 'tradition',
          description: 'Catholic traditions and practices'
        }
      })
    ]);
    
    console.log('Categories created:', categories.length);
    
    // Create sample tags
    const tags = await Promise.all([
      prisma.tag.create({
        data: {
          name: 'Faith',
          slug: 'faith',
          description: 'Articles about faith and belief'
        }
      }),
      prisma.tag.create({
        data: {
          name: 'Prayer',
          slug: 'prayer',
          description: 'Prayer and spirituality'
        }
      }),
      prisma.tag.create({
        data: {
          name: 'Catholic Life',
          slug: 'catholic-life',
          description: 'Living as a Catholic'
        }
      })
    ]);
    
    console.log('Tags created:', tags.length);
    
    // Create a sample post
    const samplePost = await prisma.post.create({
      data: {
        title: 'Welcome to Ajay\'s Catholic Commentary',
        slug: 'welcome-to-ajays-catholic-commentary',
        content: '<h1>Welcome!</h1><p>This is your first post on Ajay\'s Catholic Commentary. You can edit or delete this post from the admin dashboard.</p><p>May God bless your journey in sharing the beauty of Catholic faith and tradition.</p>',
        excerpt: 'Welcome to your new Catholic commentary blog. This is your first post.',
        status: 'PUBLISHED',
        authorId: adminUser.id
      }
    });
    
    // Connect categories and tags to the post
    await prisma.postCategory.createMany({
      data: [
        { postId: samplePost.id, categoryId: categories[0].id },
        { postId: samplePost.id, categoryId: categories[1].id }
      ]
    });
    
    await prisma.postTag.createMany({
      data: [
        { postId: samplePost.id, tagId: tags[0].id },
        { postId: samplePost.id, tagId: tags[1].id }
      ]
    });
    
    console.log('Sample post created:', samplePost.title);
    console.log('Production database setup complete!');
    
  } catch (error) {
    console.error('Error setting up production database:', error);
  } finally {
    await prisma.$disconnect();
  }
}

setupProductionDatabase();
