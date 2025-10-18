#!/usr/bin/env node

// Test script to diagnose GitHub Actions sync issues
const { PrismaClient } = require('@prisma/client');

async function testDatabaseConnections() {
  console.log('🔍 Testing GitHub Actions Database Sync...\n');

  // Test 1: Check if secrets are available
  console.log('1️⃣ Checking environment variables...');
  const devUrl = process.env.DATABASE_URL;
  const devTxUrl = process.env.DATABASE_URL_TX;
  const prodUrl = process.env.DATABASE_URL_PROD;

  console.log(`DATABASE_URL: ${devUrl ? '✅ Set' : '❌ Missing'}`);
  console.log(`DATABASE_URL_TX: ${devTxUrl ? '✅ Set' : '❌ Missing'}`);
  console.log(`DATABASE_URL_PROD: ${prodUrl ? '✅ Set' : '❌ Missing'}\n`);

  if (!devUrl || !devTxUrl || !prodUrl) {
    console.error('❌ Missing required environment variables!');
    process.exit(1);
  }

  // Test 2: Test Dev Database Connection (Session Pooler)
  console.log('2️⃣ Testing Dev Database Connection (Session Pooler)...');
  try {
    const devPrisma = new PrismaClient({
      datasources: {
        db: { url: devUrl }
      }
    });
    
    await devPrisma.$connect();
    console.log('✅ Dev database connection successful');
    await devPrisma.$disconnect();
  } catch (error) {
    console.error('❌ Dev database connection failed:', error.message);
    return;
  }

  // Test 3: Test Dev Database Connection (Transactional Pooler)
  console.log('\n3️⃣ Testing Dev Database Connection (Transactional Pooler)...');
  try {
    const devTxPrisma = new PrismaClient({
      datasources: {
        db: { url: devTxUrl }
      }
    });
    
    await devTxPrisma.$connect();
    console.log('✅ Dev TX database connection successful');
    await devTxPrisma.$disconnect();
  } catch (error) {
    console.error('❌ Dev TX database connection failed:', error.message);
    return;
  }

  // Test 4: Test Prod Database Connection (Read-Only)
  console.log('\n4️⃣ Testing Prod Database Connection (Read-Only)...');
  try {
    const prodPrisma = new PrismaClient({
      datasources: {
        db: { url: prodUrl }
      }
    });
    
    await prodPrisma.$connect();
    console.log('✅ Prod database connection successful');
    await prodPrisma.$disconnect();
  } catch (error) {
    console.error('❌ Prod database connection failed:', error.message);
    return;
  }

  // Test 5: Test Prisma Schema Push
  console.log('\n5️⃣ Testing Prisma Schema Push...');
  try {
    const { execSync } = require('child_process');
    const result = execSync('npx prisma db push --skip-generate', {
      env: { ...process.env, DATABASE_URL: devTxUrl },
      stdio: 'pipe'
    });
    console.log('✅ Schema push successful');
  } catch (error) {
    console.error('❌ Schema push failed:', error.message);
    return;
  }

  console.log('\n🎉 All tests passed! GitHub Actions sync should work.');
}

testDatabaseConnections().catch(console.error);
