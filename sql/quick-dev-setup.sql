-- Quick Development Database Setup
-- Copy and paste this entire script into Supabase SQL Editor

-- Create User table
CREATE TABLE IF NOT EXISTS "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL UNIQUE,
    "name" TEXT,
    "passwordHash" TEXT,
    "role" TEXT NOT NULL DEFAULT 'USER',
    "image" TEXT,
    "emailVerified" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL
);

-- Create Post table
CREATE TABLE IF NOT EXISTS "Post" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL UNIQUE,
    "content" TEXT NOT NULL,
    "excerpt" TEXT,
    "status" TEXT NOT NULL DEFAULT 'DRAFT',
    "publishedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "authorId" TEXT NOT NULL,
    FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- Create Comment table
CREATE TABLE IF NOT EXISTS "Comment" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "content" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "authorId" TEXT,
    "postId" TEXT NOT NULL,
    "parentId" TEXT,
    "guestName" TEXT,
    "guestEmail" TEXT,
    FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE,
    FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY ("parentId") REFERENCES "Comment"("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- Create Category table
CREATE TABLE IF NOT EXISTS "Category" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL UNIQUE,
    "slug" TEXT NOT NULL UNIQUE,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL
);

-- Create Tag table
CREATE TABLE IF NOT EXISTS "Tag" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL UNIQUE,
    "slug" TEXT NOT NULL UNIQUE,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL
);

-- Create PostCategory table
CREATE TABLE IF NOT EXISTS "PostCategory" (
    "postId" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY ("postId", "categoryId"),
    FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- Create PostTag table
CREATE TABLE IF NOT EXISTS "PostTag" (
    "postId" TEXT NOT NULL,
    "tagId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY ("postId", "tagId"),
    FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY ("tagId") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- Insert admin user
INSERT INTO "User" ("id", "email", "name", "role", "createdAt", "updatedAt") VALUES
('admin-001', 'ajay@example.com', 'Ajay D''Souza', 'ADMIN', NOW(), NOW())
ON CONFLICT ("id") DO NOTHING;

-- Insert categories
INSERT INTO "Category" ("id", "name", "slug", "description", "createdAt", "updatedAt") VALUES
('cat-001', 'Scripture Study', 'scripture-study', 'Deep dives into biblical texts', NOW(), NOW()),
('cat-002', 'Catholic Tradition', 'catholic-tradition', 'Exploring Catholic heritage', NOW(), NOW()),
('cat-003', 'Spiritual Life', 'spiritual-life', 'Personal spiritual growth', NOW(), NOW()),
('cat-004', 'History', 'history', 'Church history and context', NOW(), NOW())
ON CONFLICT ("id") DO NOTHING;

-- Insert tags
INSERT INTO "Tag" ("id", "name", "slug", "createdAt", "updatedAt") VALUES
('tag-001', 'Gospel', 'gospel', NOW(), NOW()),
('tag-002', 'Reflection', 'reflection', NOW(), NOW()),
('tag-003', 'Prayer', 'prayer', NOW(), NOW()),
('tag-004', 'Sunday', 'sunday', NOW(), NOW()),
('tag-005', 'Catholic', 'catholic', NOW(), NOW())
ON CONFLICT ("id") DO NOTHING;

-- Insert sample post
INSERT INTO "Post" ("id", "title", "slug", "content", "excerpt", "status", "publishedAt", "createdAt", "updatedAt", "authorId") VALUES
('post-001', 'Welcome to Development Environment', 'welcome-to-development-environment', '<p>This is a sample post in the development environment. You can safely test changes here without affecting production.</p><p>Features to test:</p><ul><li>SEO optimization</li><li>Mobile responsiveness</li><li>Guest comments</li><li>Page titles</li></ul>', 'A sample post for development testing', 'PUBLISHED', NOW(), NOW(), NOW(), 'admin-001')
ON CONFLICT ("id") DO NOTHING;

-- Link post to categories and tags
INSERT INTO "PostCategory" ("postId", "categoryId", "createdAt") VALUES
('post-001', 'cat-001', NOW())
ON CONFLICT ("postId", "categoryId") DO NOTHING;

INSERT INTO "PostTag" ("postId", "tagId", "createdAt") VALUES
('post-001', 'tag-001', NOW()),
('post-001', 'tag-002', NOW())
ON CONFLICT ("postId", "tagId") DO NOTHING;

-- Success message
SELECT 'Development database setup completed successfully!' as message;
