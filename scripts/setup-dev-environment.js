#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Setting up development environment for Vercel preview...');

// Step 1: Set environment variables for development
console.log('📝 Setting up environment variables...');

const devEnvContent = `# Development Environment Variables
# Used for develop branch and Vercel preview deployments

# Database (Development Supabase)
DATABASE_URL="postgresql://postgres.kdmmosvpfvtfewkndlcu:koj8WbgGk57ixDJd@aws-1-us-east-1.pooler.supabase.com:6543/postgres"

# NextAuth Configuration
NEXTAUTH_URL="https://ajays-catholic-commentary-dev.vercel.app"
NEXTAUTH_SECRET="dev-secret-key-change-this"

# OAuth Providers (Optional - same as production for now)
GOOGLE_CLIENT_ID=""
GOOGLE_CLIENT_SECRET=""

# Cloudinary (for image uploads - same as production for now)
CLOUDINARY_CLOUD_NAME=""
CLOUDINARY_API_KEY=""
CLOUDINARY_API_SECRET=""

# Email (for notifications - same as production for now)
EMAIL_SERVER_HOST=""
EMAIL_SERVER_PORT=""
EMAIL_SERVER_USER=""
EMAIL_SERVER_PASSWORD=""
EMAIL_FROM=""
`;

fs.writeFileSync('.env.development', devEnvContent);
console.log('✅ Created .env.development file');

// Step 2: Update Prisma schema for PostgreSQL
console.log('🔄 Updating Prisma schema for PostgreSQL...');

const schemaPath = 'prisma/schema.prisma';
let schemaContent = fs.readFileSync(schemaPath, 'utf8');

// Update datasource to use PostgreSQL
schemaContent = schemaContent.replace(
  /datasource db \{\s*provider = "sqlite"\s*url\s*=\s*"file:\.\/dev\.db"\s*\}/,
  `datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}`
);

fs.writeFileSync(schemaPath, schemaContent);
console.log('✅ Updated Prisma schema for PostgreSQL');

// Step 3: Generate Prisma client
console.log('🔄 Generating Prisma client...');
try {
  execSync('npx prisma generate', { stdio: 'inherit' });
  console.log('✅ Prisma client generated');
} catch (error) {
  console.error('❌ Error generating Prisma client:', error.message);
}

// Step 4: Push schema to development database
console.log('🔄 Pushing schema to development database...');
try {
  // Set the development environment
  process.env.DATABASE_URL = "postgresql://postgres.kdmmosvpfvtfewkndlcu:koj8WbgGk57ixDJd@aws-1-us-east-1.pooler.supabase.com:6543/postgres";
  
  execSync('npx prisma db push', { stdio: 'inherit' });
  console.log('✅ Schema pushed to development database');
} catch (error) {
  console.error('❌ Error pushing schema:', error.message);
  console.log('💡 You may need to run this manually: npx prisma db push');
}

// Step 5: Copy production post to development database
console.log('🔄 Copying production post to development database...');
try {
  execSync('node scripts/copy-prod-post-to-dev.js', { stdio: 'inherit' });
  console.log('✅ Production post copied to development database');
} catch (error) {
  console.error('❌ Error copying production post:', error.message);
}

console.log('🎉 Development environment setup completed!');
console.log('');
console.log('📋 Next steps:');
console.log('1. Commit and push your changes to the develop branch');
console.log('2. Set up Vercel environment variables for the preview environment');
console.log('3. Deploy to Vercel preview to test the development database');
console.log('');
console.log('🔧 Vercel Environment Variables to set:');
console.log('DATABASE_URL=postgresql://postgres.kdmmosvpfvtfewkndlcu:koj8WbgGk57ixDJd@aws-1-us-east-1.pooler.supabase.com:6543/postgres');
console.log('NEXTAUTH_URL=https://ajays-catholic-commentary-dev.vercel.app');
console.log('NEXTAUTH_SECRET=dev-secret-key-change-this');



