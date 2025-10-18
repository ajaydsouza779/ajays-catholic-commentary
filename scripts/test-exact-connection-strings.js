#!/usr/bin/env node

// Test with the exact connection strings from your Supabase dashboard
const { PrismaClient } = require('@prisma/client');

async function testExactConnections() {
  console.log('🔍 Testing Exact Supabase Connection Strings');
  console.log('============================================\n');

  // These are the connection strings you should copy from your Supabase dashboard
  const connections = [
    {
      name: 'Dev Database (Session Pooler)',
      url: 'postgresql://postgres.kdmmosvpfvtfewkndlcu:%2312Company@aws-1-us-east-1.pooler.supabase.com:5432/postgres?pgbouncer=true&sslmode=require'
    },
    {
      name: 'Dev Database (Transactional Pooler)', 
      url: 'postgresql://postgres.kdmmosvpfvtfewkndlcu:%2312Company@aws-1-us-east-1.pooler.supabase.com:6543/postgres?pgbouncer=true&sslmode=require'
    },
    {
      name: 'Dev Database (Direct Connection)',
      url: 'postgresql://postgres.kdmmosvpfvtfewkndlcu:%2312Company@db.kdmmosvpfvtfewkndlcu.supabase.co:5432/postgres?sslmode=require'
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
      try {
        const result = await prisma.$queryRaw`SELECT 1 as test`;
        console.log(`   ✅ Query test passed`);
      } catch (queryError) {
        console.log(`   ❌ Query test failed: ${queryError.message}`);
      }
      
      await prisma.$disconnect();
      
    } catch (error) {
      console.log(`❌ ${conn.name} - Failed: ${error.message}`);
      
      // Provide specific error analysis
      if (error.message.includes('Can\'t reach database server')) {
        console.log('   🔧 Issue: Network connectivity or DNS resolution');
      } else if (error.message.includes('Authentication failed')) {
        console.log('   🔧 Issue: Password or credentials');
      } else if (error.message.includes('SSL')) {
        console.log('   🔧 Issue: SSL configuration');
      } else if (error.message.includes('timeout')) {
        console.log('   🔧 Issue: Connection timeout');
      }
    }
  }

  console.log('\n📋 If all connections fail:');
  console.log('============================');
  console.log('1. Check your internet connection');
  console.log('2. Try from a different network (mobile hotspot)');
  console.log('3. Check if your firewall is blocking connections');
  console.log('4. Verify the connection strings in your Supabase dashboard');
  console.log('5. Try connecting from Supabase SQL editor');
  
  console.log('\n📋 If some connections work:');
  console.log('=============================');
  console.log('Use the working connection string for GitHub secrets');
}

testExactConnections().catch(console.error);
