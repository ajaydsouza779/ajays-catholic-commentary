#!/usr/bin/env node

// Production sync script - run this on your production server
const { PrismaClient } = require('@prisma/client');
const fs = require('fs');

// This script should be run on your production server with the correct DATABASE_URL
const prisma = new PrismaClient();

async function syncToProduction() {
  console.log('🔄 Starting production sync...');
  
  try {
    // Test connection
    console.log('🔌 Testing database connection...');
    await prisma.$connect();
    console.log('✅ Connected to production database');
    
    // Read the SQL export file
    console.log('📖 Reading papal data export...');
    const sqlContent = fs.readFileSync('papal-data-export.sql', 'utf8');
    
    // Split into individual statements
    const statements = sqlContent
      .split(';')
      .map(stmt => stmt.trim())
      .filter(stmt => stmt.length > 0 && !stmt.startsWith('--'));
    
    console.log(`📝 Found ${statements.length} SQL statements to execute`);
    
    // Execute each statement
    let executed = 0;
    for (const statement of statements) {
      try {
        await prisma.$executeRawUnsafe(statement);
        executed++;
        if (executed % 10 === 0) {
          console.log(`✅ Executed ${executed}/${statements.length} statements`);
        }
      } catch (error) {
        console.error(`❌ Error executing statement: ${statement.substring(0, 100)}...`);
        console.error(`   Error: ${error.message}`);
      }
    }
    
    // Verify the sync
    console.log('🔍 Verifying sync...');
    const popeCount = await prisma.pope.count();
    const eventCount = await prisma.papalEvent.count();
    const achievementCount = await prisma.papalAchievement.count();
    
    console.log('🎉 Production sync completed!');
    console.log('📊 Production database now contains:');
    console.log(`   - ${popeCount} popes`);
    console.log(`   - ${eventCount} papal events`);
    console.log(`   - ${achievementCount} papal achievements`);
    console.log(`   - ${executed}/${statements.length} SQL statements executed successfully`);
    
    // Show sample data
    const samplePope = await prisma.pope.findFirst({
      include: {
        events: true,
        achievements: true
      }
    });
    
    if (samplePope) {
      console.log('\n📋 Sample synced pope:');
      console.log(`   - Name: ${samplePope.regnalName}`);
      console.log(`   - Papacy: ${samplePope.papacyNumber}`);
      console.log(`   - Biography length: ${samplePope.biography ? samplePope.biography.length : 0} characters`);
      console.log(`   - Events: ${samplePope.events.length}`);
      console.log(`   - Achievements: ${samplePope.achievements.length}`);
    }
    
  } catch (error) {
    console.error('❌ Error during production sync:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

// Run the sync
syncToProduction()
  .catch((error) => {
    console.error('❌ Production sync failed:', error);
    process.exit(1);
  });
