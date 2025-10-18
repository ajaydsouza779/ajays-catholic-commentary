#!/usr/bin/env node

// Simple local script to sync prod to dev
// Usage: node scripts/sync-prod-to-dev-local.js

const { execSync } = require('child_process');

console.log('🔄 Simple Prod to Dev Sync (Local)');
console.log('==================================\n');

console.log('📋 This script will:');
console.log('1. Delete all development data');
console.log('2. Copy all production data to development');
console.log('3. Keep existing users (admin accounts)\n');

console.log('⚠️  WARNING: This will delete ALL development data!');
console.log('Make sure you have backups if needed.\n');

// Check if environment variables are set
const devUrl = process.env.DATABASE_URL;
const prodUrl = process.env.DATABASE_URL_PROD;

if (!devUrl) {
  console.error('❌ Missing DATABASE_URL environment variable');
  console.error('Set it to your development database URL');
  process.exit(1);
}

if (!prodUrl) {
  console.error('❌ Missing DATABASE_URL_PROD environment variable');
  console.error('Set it to your production database URL');
  process.exit(1);
}

console.log('✅ Environment variables found');
console.log(`   Dev DB: ${devUrl.replace(/:[^:]*@/, ':***@')}`);
console.log(`   Prod DB: ${prodUrl.replace(/:[^:]*@/, ':***@')}\n`);

console.log('🚀 Starting sync...');
console.log('===================\n');

try {
  // Run the sync script
  execSync('node scripts/simple-prod-to-dev-sync.js', {
    stdio: 'inherit',
    env: {
      ...process.env,
      DATABASE_URL: devUrl,
      DATABASE_URL_PROD: prodUrl
    }
  });
  
  console.log('\n🎉 Sync completed successfully!');
  console.log('Your development database now matches production.');
  
} catch (error) {
  console.error('\n❌ Sync failed:', error.message);
  process.exit(1);
}
