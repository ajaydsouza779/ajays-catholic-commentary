#!/usr/bin/env node

// Export Corrected PostgreSQL Schema - Based on actual data structure
const fs = require('fs');
const path = require('path');

async function exportCorrectedPostgresSchema() {
  console.log('🐘 Exporting Corrected PostgreSQL Schema');
  console.log('========================================\n');

  // PostgreSQL-compatible schema based on actual data structure
  const schemaSQL = `-- PostgreSQL-Compatible Database Schema (Corrected)
-- Generated: ${new Date().toISOString()}
-- Source: Local SQLite Database (converted to PostgreSQL)
-- Based on actual data structure from export

-- Users table
CREATE TABLE IF NOT EXISTS "users" (
  "id" TEXT PRIMARY KEY,
  "email" TEXT UNIQUE NOT NULL,
  "name" TEXT,
  "passwordHash" TEXT,
  "role" TEXT NOT NULL DEFAULT 'USER',
  "image" TEXT,
  "emailVerified" TIMESTAMP,
  "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Posts table
CREATE TABLE IF NOT EXISTS "posts" (
  "id" TEXT PRIMARY KEY,
  "title" TEXT NOT NULL,
  "slug" TEXT UNIQUE NOT NULL,
  "content" TEXT NOT NULL,
  "excerpt" TEXT,
  "featuredImage" TEXT,
  "status" TEXT NOT NULL DEFAULT 'DRAFT',
  "publishedAt" TIMESTAMP,
  "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "authorId" TEXT NOT NULL REFERENCES "users"("id") ON DELETE CASCADE
);

-- Categories table
CREATE TABLE IF NOT EXISTS "categories" (
  "id" TEXT PRIMARY KEY,
  "name" TEXT NOT NULL,
  "slug" TEXT UNIQUE NOT NULL,
  "description" TEXT,
  "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Tags table
CREATE TABLE IF NOT EXISTS "tags" (
  "id" TEXT PRIMARY KEY,
  "name" TEXT NOT NULL,
  "slug" TEXT UNIQUE NOT NULL,
  "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Comments table
CREATE TABLE IF NOT EXISTS "comments" (
  "id" TEXT PRIMARY KEY,
  "content" TEXT NOT NULL,
  "status" TEXT NOT NULL DEFAULT 'PENDING',
  "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "authorId" TEXT REFERENCES "users"("id") ON DELETE CASCADE,
  "guestName" TEXT,
  "guestEmail" TEXT,
  "parentId" TEXT REFERENCES "comments"("id") ON DELETE CASCADE,
  "postId" TEXT NOT NULL REFERENCES "posts"("id") ON DELETE CASCADE
);

-- Post-Category junction table
CREATE TABLE IF NOT EXISTS "post_categories" (
  "postId" TEXT NOT NULL REFERENCES "posts"("id") ON DELETE CASCADE,
  "categoryId" TEXT NOT NULL REFERENCES "categories"("id") ON DELETE CASCADE,
  PRIMARY KEY ("postId", "categoryId")
);

-- Post-Tag junction table
CREATE TABLE IF NOT EXISTS "post_tags" (
  "postId" TEXT NOT NULL REFERENCES "posts"("id") ON DELETE CASCADE,
  "tagId" TEXT NOT NULL REFERENCES "tags"("id") ON DELETE CASCADE,
  PRIMARY KEY ("postId", "tagId")
);

-- NextAuth tables
CREATE TABLE IF NOT EXISTS "accounts" (
  "id" TEXT PRIMARY KEY,
  "userId" TEXT NOT NULL REFERENCES "users"("id") ON DELETE CASCADE,
  "type" TEXT NOT NULL,
  "provider" TEXT NOT NULL,
  "providerAccountId" TEXT NOT NULL,
  "refresh_token" TEXT,
  "access_token" TEXT,
  "expires_at" INTEGER,
  "token_type" TEXT,
  "scope" TEXT,
  "id_token" TEXT,
  "session_state" TEXT,
  "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  UNIQUE("provider", "providerAccountId")
);

CREATE TABLE IF NOT EXISTS "sessions" (
  "id" TEXT PRIMARY KEY,
  "sessionToken" TEXT UNIQUE NOT NULL,
  "userId" TEXT NOT NULL REFERENCES "users"("id") ON DELETE CASCADE,
  "expires" TIMESTAMP NOT NULL,
  "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS "verification_tokens" (
  "identifier" TEXT NOT NULL,
  "token" TEXT NOT NULL,
  "expires" TIMESTAMP NOT NULL,
  PRIMARY KEY ("identifier", "token")
);

-- Feature toggles table
CREATE TABLE IF NOT EXISTS "feature_toggles" (
  "id" TEXT PRIMARY KEY,
  "name" TEXT NOT NULL,
  "description" TEXT,
  "enabled" BOOLEAN NOT NULL DEFAULT false,
  "category" TEXT NOT NULL,
  "dependencies" TEXT,
  "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Popes table (corrected structure based on actual data)
CREATE TABLE IF NOT EXISTS "popes" (
  "id" TEXT PRIMARY KEY,
  "name" TEXT NOT NULL,
  "regnalName" TEXT,
  "birthName" TEXT,
  "birthDate" TIMESTAMP,
  "deathDate" TIMESTAMP,
  "papacyStart" TIMESTAMP,
  "papacyEnd" TIMESTAMP,
  "papacyNumber" INTEGER,
  "nationality" TEXT,
  "previousOffice" TEXT,
  "notableEvents" TEXT,
  "biography" TEXT,
  "imageUrl" TEXT,
  "isCurrent" BOOLEAN NOT NULL DEFAULT false,
  "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "historicalContext" TEXT,
  "references" TEXT
);

-- Performance indexes
CREATE INDEX IF NOT EXISTS idx_posts_status_published_at ON posts(status, "publishedAt" DESC);
CREATE INDEX IF NOT EXISTS idx_posts_author_id ON posts("authorId");
CREATE INDEX IF NOT EXISTS idx_posts_slug ON posts(slug);
CREATE INDEX IF NOT EXISTS idx_posts_created_at ON posts("createdAt" DESC);

CREATE INDEX IF NOT EXISTS idx_comments_post_id_status ON comments("postId", status);
CREATE INDEX IF NOT EXISTS idx_comments_author_id ON comments("authorId");
CREATE INDEX IF NOT EXISTS idx_comments_created_at ON comments("createdAt" DESC);
CREATE INDEX IF NOT EXISTS idx_comments_parent_id ON comments("parentId");

CREATE INDEX IF NOT EXISTS idx_post_categories_post_id ON post_categories("postId");
CREATE INDEX IF NOT EXISTS idx_post_categories_category_id ON post_categories("categoryId");
CREATE INDEX IF NOT EXISTS idx_post_tags_post_id ON post_tags("postId");
CREATE INDEX IF NOT EXISTS idx_post_tags_tag_id ON post_tags("tagId");

CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_users_role ON users(role);
CREATE INDEX IF NOT EXISTS idx_sessions_user_id ON sessions("userId");
CREATE INDEX IF NOT EXISTS idx_sessions_expires ON sessions(expires);
CREATE INDEX IF NOT EXISTS idx_accounts_user_id ON accounts("userId");
CREATE INDEX IF NOT EXISTS idx_accounts_provider ON accounts(provider, "providerAccountId");

CREATE INDEX IF NOT EXISTS idx_popes_papacy_number ON popes("papacyNumber");
CREATE INDEX IF NOT EXISTS idx_popes_name ON popes(name);
CREATE INDEX IF NOT EXISTS idx_popes_is_current ON popes("isCurrent");

-- Enable Row Level Security (optional)
-- ALTER TABLE posts ENABLE ROW LEVEL SECURITY;
-- ALTER TABLE comments ENABLE ROW LEVEL SECURITY;

`;

  // Save schema file
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const schemaFile = path.join(__dirname, '..', 'database-exports', `corrected-postgres-schema-${timestamp}.sql`);
  
  fs.writeFileSync(schemaFile, schemaSQL);
  
  console.log(`✅ Corrected PostgreSQL schema exported to: ${schemaFile}`);
  console.log(`📁 File size: ${(fs.statSync(schemaFile).size / 1024).toFixed(2)} KB`);

  console.log('\n🐘 Corrected Schema includes:');
  console.log('   🗃️  All table definitions (PostgreSQL syntax)');
  console.log('   🔗 Foreign key constraints');
  console.log('   📊 Performance indexes');
  console.log('   👑 Complete Popes table with all columns');
  console.log('   ✅ Safe to run in Supabase');
}

exportCorrectedPostgresSchema().catch(console.error);




