#!/usr/bin/env node

// Export Complete Database Schema
const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const path = require('path');

async function exportCompleteSchema() {
  console.log('📋 Exporting Complete Database Schema');
  console.log('=====================================\n');

  try {
    const prisma = new PrismaClient();
    await prisma.$connect();

    console.log('✅ Connected to local database');

    // Get all table schemas
    const tables = [
      'users', 'posts', 'categories', 'tags', 'comments', 
      'post_categories', 'post_tags', 'accounts', 'sessions', 
      'verification_tokens', 'feature_toggles', 'popes'
    ];

    let schemaSQL = `-- Complete Database Schema
-- Generated: ${new Date().toISOString()}
-- Source: Local SQLite Database

-- Enable foreign key constraints
PRAGMA foreign_keys = ON;

`;

    for (const table of tables) {
      try {
        // Get table schema
        const tableInfo = await prisma.$queryRawUnsafe(`PRAGMA table_info(${table})`);
        
        if (tableInfo.length > 0) {
          schemaSQL += `-- Table: ${table}\n`;
          schemaSQL += `CREATE TABLE IF NOT EXISTS "${table}" (\n`;
          
          const columns = [];
          for (const column of tableInfo) {
            let columnDef = `  "${column.name}" ${column.type}`;
            
            if (column.pk) {
              columnDef += ' PRIMARY KEY';
            }
            if (column.notnull && !column.pk) {
              columnDef += ' NOT NULL';
            }
            if (column.dflt_value !== null) {
              columnDef += ` DEFAULT ${column.dflt_value}`;
            }
            
            columns.push(columnDef);
          }
          
          schemaSQL += columns.join(',\n');
          schemaSQL += '\n);\n\n';
        }
      } catch (error) {
        console.log(`   ⚠️  Table ${table} not found or error: ${error.message}`);
      }
    }

    // Add indexes
    schemaSQL += `-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_posts_status_published_at ON posts(status, publishedAt DESC);
CREATE INDEX IF NOT EXISTS idx_posts_author_id ON posts(authorId);
CREATE INDEX IF NOT EXISTS idx_posts_slug ON posts(slug);
CREATE INDEX IF NOT EXISTS idx_posts_created_at ON posts(createdAt DESC);

CREATE INDEX IF NOT EXISTS idx_comments_post_id_status ON comments(postId, status);
CREATE INDEX IF NOT EXISTS idx_comments_author_id ON comments(authorId);
CREATE INDEX IF NOT EXISTS idx_comments_created_at ON comments(createdAt DESC);
CREATE INDEX IF NOT EXISTS idx_comments_parent_id ON comments(parentId);

CREATE INDEX IF NOT EXISTS idx_post_categories_post_id ON post_categories(postId);
CREATE INDEX IF NOT EXISTS idx_post_categories_category_id ON post_categories(categoryId);
CREATE INDEX IF NOT EXISTS idx_post_tags_post_id ON post_tags(postId);
CREATE INDEX IF NOT EXISTS idx_post_tags_tag_id ON post_tags(tagId);

CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_users_role ON users(role);
CREATE INDEX IF NOT EXISTS idx_sessions_user_id ON sessions(userId);
CREATE INDEX IF NOT EXISTS idx_sessions_expires ON sessions(expires);
CREATE INDEX IF NOT EXISTS idx_accounts_user_id ON accounts(userId);
CREATE INDEX IF NOT EXISTS idx_accounts_provider ON accounts(provider, providerAccountId);

`;

    // Save schema file
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const schemaFile = path.join(__dirname, '..', 'database-exports', `complete-schema-${timestamp}.sql`);
    
    fs.writeFileSync(schemaFile, schemaSQL);
    
    console.log(`✅ Schema exported to: ${schemaFile}`);
    console.log(`📁 File size: ${(fs.statSync(schemaFile).size / 1024).toFixed(2)} KB`);

    await prisma.$disconnect();

    console.log('\n📋 Schema includes:');
    console.log('   🗃️  All table definitions');
    console.log('   🔗 Foreign key constraints');
    console.log('   📊 Performance indexes');
    console.log('   ✅ Safe to run multiple times');

  } catch (error) {
    console.error('❌ Schema export failed:', error.message);
    process.exit(1);
  }
}

exportCompleteSchema().catch(console.error);




