#!/usr/bin/env node

// Test Supabase connection strings with proper IPv4 pooler URLs
const { PrismaClient } = require('@prisma/client');

async function testSupabaseConnections() {
  console.log('🔍 Testing Supabase Connection Strings');
  console.log('=====================================\n');

  // Test the exact connection strings from your Supabase dashboard
  const connections = [
    {
      name: 'Session Pooler (Port 5432) - IPv4 Compatible',
      url: 'postgresql://postgres.kdmmosvpfvtfewkndlcu:%2312Company@aws-1-us-east-1.pooler.supabase.com:5432/postgres?pgbouncer=true&sslmode=require'
    },
    {
      name: 'Transactional Pooler (Port 6543) - IPv4 Compatible',
      url: 'postgresql://postgres.kdmmosvpfvtfewkndlcu:%2312Company@aws-1-us-east-1.pooler.supabase.com:6543/postgres?pgbouncer=true&sslmode=require'
    },
    {
      name: 'Direct Connection (Port 5432) - IPv6 Only',
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
        const result = await prisma.$queryRaw`SELECT 1 as test, current_database() as db_name, current_user as user_name`;
        console.log(`   ✅ Query test passed`);
        console.log(`   📊 Database: ${result[0].db_name}`);
        console.log(`   👤 User: ${result[0].user_name}`);
      } catch (queryError) {
        console.log(`   ❌ Query test failed: ${queryError.message}`);
      }
      
      await prisma.$disconnect();
      
    } catch (error) {
      console.log(`❌ ${conn.name} - Failed: ${error.message}`);
      
      // Provide specific error analysis
      if (error.message.includes('Can\'t reach database server')) {
        console.log('   🔧 Issue: Network connectivity or IPv4/IPv6 mismatch');
      } else if (error.message.includes('Authentication failed')) {
        console.log('   🔧 Issue: Password or credentials');
        console.log('   💡 Try: Check if password is correct in Supabase dashboard');
        console.log('   💡 Try: Regenerate database password');
      } else if (error.message.includes('SSL')) {
        console.log('   🔧 Issue: SSL configuration');
      }
    }
  }

  console.log('\n📋 Troubleshooting Steps:');
  console.log('==========================');
  console.log('1. Verify password in Supabase dashboard');
  console.log('2. Check if database is paused');
  console.log('3. Try regenerating database password');
  console.log('4. Check IP restrictions in Supabase');
  console.log('5. Verify project is active');
  
  console.log('\n🎯 Recommended Connection Strings for GitHub Actions:');
  console.log('==================================================');
  console.log('DEV_DATABASE_URL (Session Pooler):');
  console.log('postgresql://postgres.kdmmosvpfvtfewkndlcu:%2312Company@aws-1-us-east-1.pooler.supabase.com:5432/postgres?pgbouncer=true&sslmode=require');
  console.log('\nDEV_DATABASE_URL_TX (Transactional Pooler):');
  console.log('postgresql://postgres.kdmmosvpfvtfewkndlcu:%2312Company@aws-1-us-east-1.pooler.supabase.com:6543/postgres?pgbouncer=true&sslmode=require');
}

testSupabaseConnections().catch(console.error);
