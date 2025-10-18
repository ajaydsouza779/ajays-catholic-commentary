#!/usr/bin/env node

// Verify Sync Success Script
const { PrismaClient } = require('@prisma/client');

async function verifySyncSuccess() {
  console.log('🔍 Verifying Sync Success');
  console.log('==========================\n');

  const prodUrl = process.env.DATABASE_URL;
  const devUrl = process.env.DATABASE_URL_DEV;

  if (!prodUrl || !devUrl) {
    console.error('❌ Missing database URLs');
    process.exit(1);
  }

  try {
    const prodPrisma = new PrismaClient({ datasources: { db: { url: prodUrl } } });
    const devPrisma = new PrismaClient({ datasources: { db: { url: devUrl } } });

    await prodPrisma.$connect();
    await devPrisma.$connect();

    console.log('✅ Connected to both databases');

    const tables = ['posts', 'comments', 'categories', 'tags'];
    let allMatch = true;

    console.log('\n📊 Verification Results:');
    console.log('========================');

    for (const table of tables) {
      try {
        const prodCount = await prodPrisma.$queryRawUnsafe(`SELECT COUNT(*) as count FROM "${table}"`);
        const devCount = await devPrisma.$queryRawUnsafe(`SELECT COUNT(*) as count FROM "${table}"`);
        
        const prodCountNum = parseInt(prodCount[0].count);
        const devCountNum = parseInt(devCount[0].count);
        
        const match = prodCountNum === devCountNum;
        allMatch = allMatch && match;
        
        console.log(`   ${table}: ${match ? '✅' : '❌'} Prod=${prodCountNum}, Dev=${devCountNum}`);
        
        if (!match) {
          console.log(`      ⚠️  Count mismatch detected!`);
        }
        
      } catch (error) {
        console.log(`   ${table}: ❌ Error - ${error.message}`);
        allMatch = false;
      }
    }

    await prodPrisma.$disconnect();
    await devPrisma.$disconnect();

    if (allMatch) {
      console.log('\n✅ All tables synced successfully!');
    } else {
      console.log('\n❌ Sync verification failed - some tables have mismatches');
      process.exit(1);
    }

  } catch (error) {
    console.error('❌ Verification failed:', error.message);
    process.exit(1);
  }
}

verifySyncSuccess().catch(console.error);
