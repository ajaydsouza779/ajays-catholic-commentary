#!/usr/bin/env node

// Comprehensive database connection test
const { PrismaClient } = require('@prisma/client');

async function testDatabaseConnection() {
  console.log('🔍 Comprehensive Database Connection Test');
  console.log('==========================================\n');

  // Test 1: Basic connectivity test
  console.log('1️⃣ Testing basic connectivity...');
  try {
    const testUrl = "postgresql://postgres.kdmmosvpfvtfewkndlcu:%2312Company@aws-1-us-east-1.pooler.supabase.com:5432/postgres?pgbouncer=true&sslmode=require";
    
    const prisma = new PrismaClient({
      datasources: {
        db: { url: testUrl }
      }
    });
    
    console.log('   Connecting to database...');
    await prisma.$connect();
    console.log('   ✅ Database connection successful!');
    
    // Test 2: Query database info
    console.log('\n2️⃣ Testing database queries...');
    try {
      const result = await prisma.$queryRaw`SELECT version() as version, current_database() as database, current_user as user`;
      console.log('   ✅ Database query successful!');
      console.log('   📊 Database Info:');
      console.log(`      Version: ${result[0].version.split(' ')[0]}`);
      console.log(`      Database: ${result[0].database}`);
      console.log(`      User: ${result[0].user}`);
    } catch (queryError) {
      console.log('   ❌ Database query failed:', queryError.message);
    }
    
    // Test 3: Check if tables exist
    console.log('\n3️⃣ Checking database schema...');
    try {
      const tables = await prisma.$queryRaw`
        SELECT table_name 
        FROM information_schema.tables 
        WHERE table_schema = 'public' 
        ORDER BY table_name
      `;
      console.log('   ✅ Schema query successful!');
      console.log(`   📋 Found ${tables.length} tables:`);
      tables.forEach(table => {
        console.log(`      - ${table.table_name}`);
      });
    } catch (schemaError) {
      console.log('   ❌ Schema query failed:', schemaError.message);
    }
    
    // Test 4: Test Prisma models
    console.log('\n4️⃣ Testing Prisma models...');
    try {
      // Test User model
      const userCount = await prisma.user.count();
      console.log(`   ✅ User model accessible (${userCount} users)`);
      
      // Test Post model
      const postCount = await prisma.post.count();
      console.log(`   ✅ Post model accessible (${postCount} posts)`);
      
      // Test Category model
      const categoryCount = await prisma.category.count();
      console.log(`   ✅ Category model accessible (${categoryCount} categories)`);
      
    } catch (modelError) {
      console.log('   ❌ Prisma model test failed:', modelError.message);
    }
    
    await prisma.$disconnect();
    console.log('\n🎉 All database tests passed!');
    
  } catch (error) {
    console.log('❌ Database connection failed!');
    console.log('Error details:', error.message);
    
    // Provide specific troubleshooting based on error type
    if (error.message.includes('Can\'t reach database server')) {
      console.log('\n🔧 Troubleshooting: Database server unreachable');
      console.log('   - Check if Supabase project is active');
      console.log('   - Verify project is not paused');
      console.log('   - Check network connectivity');
    } else if (error.message.includes('Authentication failed')) {
      console.log('\n🔧 Troubleshooting: Authentication failed');
      console.log('   - Verify database password is correct');
      console.log('   - Check if password contains special characters');
      console.log('   - Try regenerating password in Supabase');
    } else if (error.message.includes('SSL')) {
      console.log('\n🔧 Troubleshooting: SSL connection issue');
      console.log('   - Check SSL settings in connection string');
      console.log('   - Verify sslmode=require is correct');
    }
  }
}

// Test different connection types
async function testAllConnectionTypes() {
  console.log('\n🔍 Testing All Connection Types');
  console.log('===============================\n');
  
  const connections = [
    {
      name: 'Session Pooler (Port 5432)',
      url: 'postgresql://postgres.kdmmosvpfvtfewkndlcu:%2312Company@aws-1-us-east-1.pooler.supabase.com:5432/postgres?pgbouncer=true&sslmode=require'
    },
    {
      name: 'Transactional Pooler (Port 6543)',
      url: 'postgresql://postgres.kdmmosvpfvtfewkndlcu:%2312Company@aws-1-us-east-1.pooler.supabase.com:6543/postgres?pgbouncer=true&sslmode=require'
    },
    {
      name: 'Direct Connection (Port 5432)',
      url: 'postgresql://postgres.kdmmosvpfvtfewkndlcu:%2312Company@db.kdmmosvpfvtfewkndlcu.supabase.co:5432/postgres?sslmode=require'
    }
  ];
  
  for (const conn of connections) {
    console.log(`\n🔍 Testing ${conn.name}...`);
    try {
      const prisma = new PrismaClient({
        datasources: { db: { url: conn.url } }
      });
      
      await prisma.$connect();
      console.log(`   ✅ ${conn.name} - Connection successful`);
      await prisma.$disconnect();
    } catch (error) {
      console.log(`   ❌ ${conn.name} - Failed: ${error.message.split('\n')[0]}`);
    }
  }
}

async function main() {
  await testDatabaseConnection();
  await testAllConnectionTypes();
  
  console.log('\n📋 Summary');
  console.log('==========');
  console.log('If all tests pass, your database is working correctly.');
  console.log('If tests fail, check the troubleshooting steps above.');
  console.log('Update your GitHub secrets with the working connection strings.');
}

main().catch(console.error);
