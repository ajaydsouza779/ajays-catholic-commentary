#!/usr/bin/env node

// Test script with properly URL-encoded password
const { PrismaClient } = require('@prisma/client');

async function testConnection(url, name) {
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
  console.log('🔍 Testing URL-Encoded Database Connections...\n');
  
  // Test with properly URL-encoded password (# -> %23)
  const devUrl = "postgresql://postgres.kdmmosvpfvtfewkndlcu:%2312Company@aws-1-us-east-1.pooler.supabase.com:5432/postgres?pgbouncer=true&sslmode=require";
  const devTxUrl = "postgresql://postgres.kdmmosvpfvtfewkndlcu:%2312Company@aws-1-us-east-1.pooler.supabase.com:6543/postgres?pgbouncer=true&sslmode=require";
  
  const devSuccess = await testConnection(devUrl, "Dev Database (Session Pooler)");
  const devTxSuccess = await testConnection(devTxUrl, "Dev Database (Transactional Pooler)");
  
  if (devSuccess && devTxSuccess) {
    console.log('\n🎉 URL-encoded connection strings work!');
    console.log('\n📋 Update your GitHub secrets with these URLs:');
    console.log('\nDEV_DATABASE_URL:');
    console.log(devUrl);
    console.log('\nDEV_DATABASE_URL_TX:');
    console.log(devTxUrl);
  } else {
    console.log('\n❌ Still failing. Let me try alternative encoding...');
    
    // Try with different encoding
    const altDevUrl = "postgresql://postgres.kdmmosvpfvtfewkndlcu:%252312Company@aws-1-us-east-1.pooler.supabase.com:5432/postgres?pgbouncer=true&sslmode=require";
    const altDevTxUrl = "postgresql://postgres.kdmmosvpfvtfewkndlcu:%252312Company@aws-1-us-east-1.pooler.supabase.com:6543/postgres?pgbouncer=true&sslmode=require";
    
    console.log('\nTrying double-encoded password...');
    await testConnection(altDevUrl, "Dev Database (Double-encoded)");
  }
}

main().catch(console.error);
