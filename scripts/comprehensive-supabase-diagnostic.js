#!/usr/bin/env node

// Comprehensive Supabase diagnostic
const { PrismaClient } = require('@prisma/client');

async function comprehensiveDiagnostic() {
  console.log('🔍 Comprehensive Supabase Diagnostic');
  console.log('===================================\n');

  const password = '9PLlyZczsGPK5amm';
  
  console.log('📋 Testing Different Connection Approaches:');
  console.log('==========================================\n');

  // Test 1: Different URL encoding approaches
  const testCases = [
    {
      name: 'URL Encoded Password',
      password: encodeURIComponent(password)
    },
    {
      name: 'Raw Password',
      password: password
    },
    {
      name: 'Double URL Encoded',
      password: encodeURIComponent(encodeURIComponent(password))
    }
  ];

  for (const testCase of testCases) {
    console.log(`\n🔍 Testing ${testCase.name}...`);
    
    const sessionUrl = `postgresql://postgres.kdmmosvpfvtfewkndlcu:${testCase.password}@aws-1-us-east-1.pooler.supabase.com:5432/postgres?pgbouncer=true&sslmode=require`;
    
    try {
      const prisma = new PrismaClient({
        datasources: { db: { url: sessionUrl } }
      });
      
      await prisma.$connect();
      console.log(`   ✅ ${testCase.name} - Connection successful!`);
      
      const result = await prisma.$queryRaw`SELECT current_database(), current_user, version()`;
      console.log(`   📊 Database: ${result[0].current_database}`);
      console.log(`   👤 User: ${result[0].current_user}`);
      console.log(`   🐘 Version: ${result[0].version.split(' ')[0]}`);
      
      await prisma.$disconnect();
      return; // Exit on first success
      
    } catch (error) {
      console.log(`   ❌ ${testCase.name} - Failed: ${error.message.split('\n')[0]}`);
    }
  }

  console.log('\n🚨 All connection attempts failed!');
  console.log('\n📋 Possible Issues:');
  console.log('==================');
  console.log('1. Database is paused or inactive');
  console.log('2. IP restrictions are blocking connections');
  console.log('3. Project has been deleted or moved');
  console.log('4. Billing issues (account suspended)');
  console.log('5. Wrong project reference or region');
  console.log('6. Database credentials are still incorrect');

  console.log('\n🔧 Troubleshooting Steps:');
  console.log('=========================');
  console.log('1. Go to https://supabase.com/dashboard');
  console.log('2. Check if your project is visible and active');
  console.log('3. Go to Settings → Database');
  console.log('4. Verify the connection strings are correct');
  console.log('5. Check if database is paused');
  console.log('6. Check IP restrictions in Settings → Database');
  console.log('7. Try connecting from Supabase SQL editor');
  console.log('8. Check billing status');

  console.log('\n📋 Correct Connection Strings for GitHub Secrets:');
  console.log('==================================================');
  console.log('DEV_DATABASE_URL:');
  console.log(`postgresql://postgres.kdmmosvpfvtfewkndlcu:${encodeURIComponent(password)}@aws-1-us-east-1.pooler.supabase.com:5432/postgres?pgbouncer=true&sslmode=require`);
  console.log('\nDEV_DATABASE_URL_TX:');
  console.log(`postgresql://postgres.kdmmosvpfvtfewkndlcu:${encodeURIComponent(password)}@aws-1-us-east-1.pooler.supabase.com:6543/postgres?pgbouncer=true&sslmode=require`);
}

comprehensiveDiagnostic().catch(console.error);
