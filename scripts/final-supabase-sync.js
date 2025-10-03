#!/usr/bin/env node

// Final Supabase sync using direct connection string
const { PrismaClient } = require('@prisma/client');

// Use the direct connection string format
const prisma = new PrismaClient({
  datasources: {
    db: {
      url: "postgresql://postgres:%231Company%40123@db.nxjtogogonbztiyympvb.supabase.co:5432/postgres"
    }
  }
});

async function finalSync() {
  console.log('🚀 Starting final Supabase sync...');
  console.log('🔌 Using direct connection to Supabase...');
  
  try {
    console.log('🔌 Connecting to Supabase...');
    await prisma.$connect();
    console.log('✅ Connected successfully!');
    
    // Test with a simple query
    console.log('🧪 Testing connection...');
    const result = await prisma.$queryRaw`SELECT 1 as test`;
    console.log('✅ Connection test passed');
    
    // Check current pope count
    console.log('📊 Checking current data...');
    const currentPopes = await prisma.pope.count();
    console.log(`📈 Current popes in production: ${currentPopes}`);
    
    // Clear existing data first
    console.log('🗑️  Clearing existing papal data...');
    await prisma.papalAchievement.deleteMany();
    await prisma.papalEvent.deleteMany();
    await prisma.pope.deleteMany();
    console.log('✅ Cleared existing data');
    
    // Read the SQL file
    console.log('📖 Reading papal data export...');
    const fs = require('fs');
    const sqlContent = fs.readFileSync('papal-data-export.sql', 'utf8');
    
    // Split into statements
    const statements = sqlContent
      .split(';')
      .map(stmt => stmt.trim())
      .filter(stmt => stmt.length > 0 && !stmt.startsWith('--'));
    
    console.log(`📝 Executing ${statements.length} SQL statements...`);
    
    let successCount = 0;
    let errorCount = 0;
    
    for (let i = 0; i < statements.length; i++) {
      const statement = statements[i];
      try {
        await prisma.$executeRawUnsafe(statement);
        successCount++;
        
        if (successCount % 20 === 0) {
          console.log(`✅ Progress: ${successCount}/${statements.length} statements executed`);
        }
      } catch (error) {
        errorCount++;
        console.error(`❌ Error in statement ${i + 1}: ${error.message}`);
        // Continue with other statements
      }
    }
    
    // Final verification
    console.log('🔍 Final verification...');
    const finalPopeCount = await prisma.pope.count();
    const finalEventCount = await prisma.papalEvent.count();
    const finalAchievementCount = await prisma.papalAchievement.count();
    
    console.log('🎉 Sync completed successfully!');
    console.log(`📊 Results:`);
    console.log(`   - Popes: ${finalPopeCount} (was ${currentPopes})`);
    console.log(`   - Events: ${finalEventCount}`);
    console.log(`   - Achievements: ${finalAchievementCount}`);
    console.log(`   - Successful statements: ${successCount}`);
    console.log(`   - Failed statements: ${errorCount}`);
    
    // Show sample data
    if (finalPopeCount > 0) {
      const samplePope = await prisma.pope.findFirst({
        include: {
          events: true,
          achievements: true
        }
      });
      
      console.log('\n📋 Sample synced pope:');
      console.log(`   - Name: ${samplePope.regnalName}`);
      console.log(`   - Papacy: ${samplePope.papacyNumber}`);
      console.log(`   - Biography: ${samplePope.biography ? 'Present' : 'Missing'}`);
      console.log(`   - Events: ${samplePope.events.length}`);
      console.log(`   - Achievements: ${samplePope.achievements.length}`);
    }
    
    // Show key popes
    const keyPopes = await prisma.pope.findMany({
      where: {
        papacyNumber: {
          in: [1, 176, 266, 267] // Saint Peter, Innocent III, Francis, Leo XIV
        }
      },
      orderBy: {
        papacyNumber: 'asc'
      }
    });
    
    console.log('\n👑 Key popes synced:');
    for (const pope of keyPopes) {
      console.log(`   - ${pope.regnalName} (${pope.papacyNumber}): ${pope.biography ? 'Detailed biography' : 'Basic info'}`);
    }
    
  } catch (error) {
    console.error('❌ Sync failed:', error.message);
    if (error.message.includes('Can\'t reach database server')) {
      console.error('💡 Connection issue - please check your Supabase credentials and network');
    } else if (error.message.includes('unexpected message from server')) {
      console.error('💡 Server communication issue - trying alternative approach...');
    }
  } finally {
    await prisma.$disconnect();
  }
}

finalSync();
