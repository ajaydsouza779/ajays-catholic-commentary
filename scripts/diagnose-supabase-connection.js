#!/usr/bin/env node

// Comprehensive Supabase connection diagnostic
const { PrismaClient } = require('@prisma/client');

async function diagnoseConnection() {
  console.log('🔍 Supabase Connection Diagnostic');
  console.log('==================================\n');

  // Test different password formats
  const passwordVariants = [
    '#12Company',           // Original
    '%2312Company',        // URL encoded
    '%252312Company',      // Double encoded
    '\\#12Company',        // Escaped
    '12Company',           // Without #
  ];

  const baseUrl = 'postgresql://postgres.kdmmosvpfvtfewkndlcu:{PASSWORD}@aws-1-us-east-1.pooler.supabase.com:5432/postgres?pgbouncer=true&sslmode=require';

  for (const password of passwordVariants) {
    const url = baseUrl.replace('{PASSWORD}', password);
    console.log(`\n🔍 Testing password: ${password}`);
    console.log(`URL: ${url.replace(/:[^:]*@/, ':***@')}`);
    
    try {
      const prisma = new PrismaClient({
        datasources: { db: { url } }
      });
      
      await prisma.$connect();
      console.log(`✅ SUCCESS with password: ${password}`);
      await prisma.$disconnect();
      return;
    } catch (error) {
      console.log(`❌ Failed: ${error.message.split('\n')[0]}`);
    }
  }

  console.log('\n🚨 All password variants failed!');
  console.log('\n📋 Possible Issues:');
  console.log('==================');
  console.log('1. Database password has changed in Supabase');
  console.log('2. Database is paused or inaccessible');
  console.log('3. IP restrictions are blocking connections');
  console.log('4. Database credentials are incorrect');
  console.log('5. Supabase project has been deleted or moved');

  console.log('\n🔧 Troubleshooting Steps:');
  console.log('=========================');
  console.log('1. Go to https://supabase.com/dashboard');
  console.log('2. Check if your project is active');
  console.log('3. Go to Settings → Database');
  console.log('4. Verify the connection string and password');
  console.log('5. Try regenerating the database password');
  console.log('6. Check if there are any IP restrictions');
  console.log('7. Verify the project is not paused');

  console.log('\n📋 Alternative Solutions:');
  console.log('==========================');
  console.log('1. Create a new Supabase project');
  console.log('2. Use a different database password (without #)');
  console.log('3. Check Supabase status page for outages');
  console.log('4. Contact Supabase support if project is inaccessible');
}

diagnoseConnection().catch(console.error);
