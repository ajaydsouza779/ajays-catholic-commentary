#!/usr/bin/env node

// Simple Supabase sync using direct connection
const { PrismaClient } = require('@prisma/client');

// Use direct connection string
const prisma = new PrismaClient({
  datasources: {
    db: {
      url: "postgresql://postgres.nxjtogogonbztiyympvb:%231Company%40123@aws-1-ap-southeast-1.pooler.supabase.com:5432/postgres"
    }
  }
});

async function simpleSync() {
  console.log('🚀 Starting simple Supabase sync...');
  
  try {
    console.log('🔌 Connecting to Supabase...');
    await prisma.$connect();
    console.log('✅ Connected successfully!');
    
    // Test with a simple query
    console.log('🧪 Testing connection with simple query...');
    const result = await prisma.$queryRaw`SELECT 1 as test`;
    console.log('✅ Connection test passed:', result);
    
    // Check current pope count
    console.log('📊 Checking current data...');
    const currentPopes = await prisma.pope.count();
    console.log(`📈 Current popes in production: ${currentPopes}`);
    
    // Read and execute the SQL file
    console.log('📖 Reading papal data export...');
    const fs = require('fs');
    const sqlContent = fs.readFileSync('papal-data-export.sql', 'utf8');
    
    // Split into statements and execute
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
        
        if (successCount % 10 === 0) {
          console.log(`✅ Progress: ${successCount}/${statements.length} statements executed`);
        }
      } catch (error) {
        errorCount++;
        console.error(`❌ Error in statement ${i + 1}: ${error.message}`);
        if (errorCount > 5) {
          console.error('❌ Too many errors, stopping sync');
          break;
        }
      }
    }
    
    // Final verification
    console.log('🔍 Final verification...');
    const finalPopeCount = await prisma.pope.count();
    const finalEventCount = await prisma.papalEvent.count();
    const finalAchievementCount = await prisma.papalAchievement.count();
    
    console.log('🎉 Sync completed!');
    console.log(`📊 Results:`);
    console.log(`   - Popes: ${finalPopeCount} (was ${currentPopes})`);
    console.log(`   - Events: ${finalEventCount}`);
    console.log(`   - Achievements: ${finalAchievementCount}`);
    console.log(`   - Successful statements: ${successCount}`);
    console.log(`   - Failed statements: ${errorCount}`);
    
  } catch (error) {
    console.error('❌ Sync failed:', error.message);
    console.error('Full error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

simpleSync();
