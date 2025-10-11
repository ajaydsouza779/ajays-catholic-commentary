-- Development Database Setup
-- This script creates the complete schema for the development database
-- Run this directly in Supabase SQL editor

-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

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

-- Create Account table
CREATE TABLE IF NOT EXISTS "Account" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
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
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- Create Session table
CREATE TABLE IF NOT EXISTS "Session" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "sessionToken" TEXT NOT NULL UNIQUE,
    "userId" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- Create VerificationToken table
CREATE TABLE IF NOT EXISTS "VerificationToken" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,
    PRIMARY KEY ("identifier", "token")
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

-- Create Pope table
CREATE TABLE IF NOT EXISTS "Pope" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "papalName" TEXT,
    "startYear" INTEGER,
    "endYear" INTEGER,
    "biography" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS "Account_userId_idx" ON "Account"("userId");
CREATE INDEX IF NOT EXISTS "Session_userId_idx" ON "Session"("userId");
CREATE INDEX IF NOT EXISTS "Post_authorId_idx" ON "Post"("authorId");
CREATE INDEX IF NOT EXISTS "Post_status_idx" ON "Post"("status");
CREATE INDEX IF NOT EXISTS "Post_publishedAt_idx" ON "Post"("publishedAt");
CREATE INDEX IF NOT EXISTS "Comment_postId_idx" ON "Comment"("postId");
CREATE INDEX IF NOT EXISTS "Comment_authorId_idx" ON "Comment"("authorId");
CREATE INDEX IF NOT EXISTS "Comment_parentId_idx" ON "Comment"("parentId");

-- Insert default categories
INSERT INTO "Category" ("id", "name", "slug", "description", "createdAt", "updatedAt") VALUES
('cmgakgnsx00008zaoeclh6yje', 'Scripture Study', 'scripture-study', 'Deep dives into biblical texts and their relevance to modern Catholic life', NOW(), NOW()),
('cmgakgnsx00018zaoeclh6yje', 'Catholic Tradition', 'catholic-tradition', 'Exploring Catholic heritage, teachings, and traditions', NOW(), NOW()),
('cmgakgnsx00028zaoeclh6yje', 'Spiritual Life', 'spiritual-life', 'Personal spiritual growth, prayer, and reflection', NOW(), NOW()),
('cmgakgnsx00038zaoeclh6yje', 'History', 'history', 'Church history and historical context', NOW(), NOW())
ON CONFLICT ("id") DO NOTHING;

-- Insert default tags
INSERT INTO "Tag" ("id", "name", "slug", "createdAt", "updatedAt") VALUES
('cmgakgntk00058zao9ge2u7uk', 'Gospel', 'gospel', NOW(), NOW()),
('cmgjt6myp00028zvnvc6s8kyt', 'Gratitude', 'gratitude', NOW(), NOW()),
('cmgjt6mzo00038zvn1e65lbv4', 'Healing', 'healing', NOW(), NOW()),
('cmgjt6mzo00048zvn1e65lbv4', 'Reflection', 'reflection', NOW(), NOW()),
('cmgjt6mzo00058zvn1e65lbv4', 'Prayer', 'prayer', NOW(), NOW())
ON CONFLICT ("id") DO NOTHING;

-- Insert admin user
INSERT INTO "User" ("id", "email", "name", "role", "createdAt", "updatedAt") VALUES
('cmgakgnsx00008zaoeclh6yje', 'ajay@example.com', 'Ajay D''Souza', 'ADMIN', NOW(), NOW())
ON CONFLICT ("id") DO NOTHING;

-- Insert sample post
INSERT INTO "Post" ("id", "title", "slug", "content", "excerpt", "status", "publishedAt", "createdAt", "updatedAt", "authorId") VALUES
('cmgjt6n1c00048zvn13156ums', 'Welcome to Development Environment', 'welcome-to-development-environment', '<p>This is a sample post in the development environment. You can safely test changes here without affecting production.</p>', 'A sample post for development testing', 'PUBLISHED', NOW(), NOW(), NOW(), 'cmgakgnsx00008zaoeclh6yje')
ON CONFLICT ("id") DO NOTHING;

-- Link post to categories
INSERT INTO "PostCategory" ("postId", "categoryId", "createdAt") VALUES
('cmgjt6n1c00048zvn13156ums', 'cmgakgnsx00008zaoeclh6yje', NOW())
ON CONFLICT ("postId", "categoryId") DO NOTHING;

-- Link post to tags
INSERT INTO "PostTag" ("postId", "tagId", "createdAt") VALUES
('cmgjt6n1c00048zvn13156ums', 'cmgakgntk00058zao9ge2u7uk', NOW()),
('cmgjt6n1c00048zvn13156ums', 'cmgjt6myp00028zvnvc6s8kyt', NOW())
ON CONFLICT ("postId", "tagId") DO NOTHING;

-- Create a function to generate CUID-like IDs
CREATE OR REPLACE FUNCTION generate_cuid() RETURNS TEXT AS $$
BEGIN
    RETURN 'c' || substr(md5(random()::text), 1, 25);
END;
$$ LANGUAGE plpgsql;

-- Set up Row Level Security (RLS) policies
ALTER TABLE "User" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "Post" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "Comment" ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Public posts are viewable by everyone" ON "Post" FOR SELECT USING (status = 'PUBLISHED');
CREATE POLICY "Public comments are viewable by everyone" ON "Comment" FOR SELECT USING (status = 'APPROVED');

-- Create policies for authenticated users
CREATE POLICY "Users can view their own posts" ON "Post" FOR SELECT USING (auth.uid()::text = "authorId");
CREATE POLICY "Users can view their own comments" ON "Comment" FOR SELECT USING (auth.uid()::text = "authorId");

-- Create policies for admin users
CREATE POLICY "Admins can manage all posts" ON "Post" FOR ALL USING (
    EXISTS (
        SELECT 1 FROM "User" 
        WHERE "User"."id" = auth.uid()::text 
        AND "User"."role" = 'ADMIN'
    )
);

CREATE POLICY "Admins can manage all comments" ON "Comment" FOR ALL USING (
    EXISTS (
        SELECT 1 FROM "User" 
        WHERE "User"."id" = auth.uid()::text 
        AND "User"."role" = 'ADMIN'
    )
);

-- Grant necessary permissions
GRANT USAGE ON SCHEMA public TO postgres, anon, authenticated, service_role;
GRANT ALL ON ALL TABLES IN SCHEMA public TO postgres, anon, authenticated, service_role;
GRANT ALL ON ALL SEQUENCES IN SCHEMA public TO postgres, anon, authenticated, service_role;

-- Success message
SELECT 'Development database setup completed successfully!' as message;
