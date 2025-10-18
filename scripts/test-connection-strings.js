#!/usr/bin/env node

// Test script to validate database connection strings
const { PrismaClient } = require('@prisma/client');

async function testConnectionString(url, name) {
  console.log(`\n🔍 Testing ${name}...`);
  console.log(`URL: ${url.replace(/:[^:]*@/, ':***@')}`);
  
  try {
    const prisma = new PrismaClient({
      datasources: {
        db: { url }
      }
    });
    
    await prisma.$connect();
    console.log(`✅ ${name} connection successful`);
    await prisma.$disconnect();
    return true;
  } catch (error) {
    console.error(`❌ ${name} connection failed:`, error.message);
    return false;
  }
}

async function main() {
  console.log('🔍 Testing Database Connection Strings...\n');
  
  // Test the connection strings you provided earlier
  const devUrl = "postgresql://postgres.kdmmosvpfvtfewkndlcu:%2312Company@aws-1-us-east-1.pooler.supabase.com:5432/postgres?pgbouncer=true&sslmode=require";
  const devTxUrl = "postgresql://postgres.kdmmosvpfvtfewkndlcu:%2312Company@aws-1-us-east-1.pooler.supabase.com:6543/postgres?pgbouncer=true&sslmode=require";
  
  const devSuccess = await testConnectionString(devUrl, "Dev Database (Session Pooler)");
  const devTxSuccess = await testConnectionString(devTxUrl, "Dev Database (Transactional Pooler)");
  
  if (devSuccess && devTxSuccess) {
    console.log('\n🎉 All connection strings are valid!');
    console.log('\n📋 Make sure your GitHub secrets are set to:');
    console.log('DEV_DATABASE_URL:', devUrl);
    console.log('DEV_DATABASE_URL_TX:', devTxUrl);
  } else {
    console.log('\n❌ Some connection strings failed. Please check:');
    console.log('1. Database credentials are correct');
    console.log('2. Database is accessible from GitHub Actions');
    console.log('3. Connection strings are properly URL-encoded');
  }
}

main().catch(console.error);
