#!/usr/bin/env node

// Test with new password (replace NEW_PASSWORD with your actual password)
const { PrismaClient } = require('@prisma/client');

async function testNewPassword() {
  console.log('🔍 Testing with New Database Password');
  console.log('====================================\n');

  // Replace NEW_PASSWORD with your actual new password
  const newPassword = 'bDgNIdhedQBDQgE8'; // Your new password
  
  const connections = [
    {
      name: 'Session Pooler with New Password',
      url: `postgresql://postgres.kdmmosvpfvtfewkndlcu:${encodeURIComponent(newPassword)}@aws-1-us-east-1.pooler.supabase.com:5432/postgres?pgbouncer=true&sslmode=require`
    },
    {
      name: 'Transactional Pooler with New Password',
      url: `postgresql://postgres.kdmmosvpfvtfewkndlcu:${encodeURIComponent(newPassword)}@aws-1-us-east-1.pooler.supabase.com:6543/postgres?pgbouncer=true&sslmode=require`
    }
  ];

  for (const conn of connections) {
    console.log(`\n🔍 Testing ${conn.name}...`);
    console.log(`URL: ${conn.url.replace(/:[^:]*@/, ':***@')}`);
    
    try {
      const prisma = new PrismaClient({
        datasources: { db: { url: conn.url } }
      });
      
      await prisma.$connect();
      console.log(`✅ ${conn.name} - Connection successful!`);
      
      // Test a simple query
      const result = await prisma.$queryRaw`SELECT 1 as test, current_database() as db_name`;
      console.log(`   ✅ Query test passed - Database: ${result[0].db_name}`);
      
      await prisma.$disconnect();
      
    } catch (error) {
      console.log(`❌ ${conn.name} - Failed: ${error.message}`);
    }
  }

  console.log('\n📋 If connections work:');
  console.log('======================');
  console.log('1. Update your GitHub secrets with the new password');
  console.log('2. Test the GitHub Actions workflow');
  console.log('3. The sync should now work!');
  
  console.log('\n📋 If still failing:');
  console.log('====================');
  console.log('1. Check if database is paused in Supabase');
  console.log('2. Check if there are IP restrictions');
  console.log('3. Verify the project is active');
  console.log('4. Try connecting from Supabase SQL editor');
}

testNewPassword().catch(console.error);
