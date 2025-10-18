#!/usr/bin/env node

// Safe Dev to Prod Sync Script
const { PrismaClient } = require('@prisma/client');

async function safeDevToProdSync() {
  console.log('🔄 Safe Dev to Prod Sync');
  console.log('========================\n');

  const prodUrl = process.env.DATABASE_URL;
  const devUrl = process.env.DATABASE_URL_DEV;
  const syncTables = (process.env.SYNC_TABLES || 'posts,comments,categories,tags').split(',');

  if (!prodUrl || !devUrl) {
    console.error('❌ Missing database URLs');
    process.exit(1);
  }

  console.log('📋 Tables to sync:', syncTables.join(', '));
  console.log('');

  try {
    // Connect to both databases
    const prodPrisma = new PrismaClient({ datasources: { db: { url: prodUrl } } });
    const devPrisma = new PrismaClient({ datasources: { db: { url: devUrl } } });

    await prodPrisma.$connect();
    await devPrisma.$connect();

    console.log('✅ Connected to both databases');

    // Get counts before sync
    console.log('\n📊 Pre-sync counts:');
    for (const table of syncTables) {
      try {
        const prodCount = await prodPrisma.$queryRawUnsafe(`SELECT COUNT(*) as count FROM "${table}"`);
        const devCount = await devPrisma.$queryRawUnsafe(`SELECT COUNT(*) as count FROM "${table}"`);
        console.log(`   ${table}: Prod=${prodCount[0].count}, Dev=${devCount[0].count}`);
      } catch (error) {
        console.log(`   ${table}: Error getting count - ${error.message}`);
      }
    }

    // Sync each table
    for (const table of syncTables) {
      console.log(`\n🔄 Syncing ${table}...`);
      
      try {
        // Get data from dev
        const devData = await devPrisma.$queryRawUnsafe(`SELECT * FROM "${table}"`);
        console.log(`   📥 Fetched ${devData.length} records from dev`);

        if (devData.length === 0) {
          console.log(`   ⚠️  No data in dev ${table}, skipping`);
          continue;
        }

        // Clear prod table (CAREFUL!)
        console.log(`   🗑️  Clearing prod ${table}...`);
        await prodPrisma.$queryRawUnsafe(`DELETE FROM "${table}"`);

        // Insert dev data into prod
        if (devData.length > 0) {
          const columns = Object.keys(devData[0]);
          const values = devData.map(row => 
            `(${columns.map(col => {
              const val = row[col];
              if (val === null) return 'NULL';
              if (typeof val === 'string') return `'${val.replace(/'/g, "''")}'`;
              if (val instanceof Date) return `'${val.toISOString()}'`;
              return val;
            }).join(', ')})`
          ).join(', ');

          const insertQuery = `INSERT INTO "${table}" (${columns.map(c => `"${c}"`).join(', ')}) VALUES ${values}`;
          await prodPrisma.$queryRawUnsafe(insertQuery);
          console.log(`   ✅ Inserted ${devData.length} records into prod`);
        }

      } catch (error) {
        console.error(`   ❌ Error syncing ${table}: ${error.message}`);
        // Continue with other tables
      }
    }

    // Get counts after sync
    console.log('\n📊 Post-sync counts:');
    for (const table of syncTables) {
      try {
        const prodCount = await prodPrisma.$queryRawUnsafe(`SELECT COUNT(*) as count FROM "${table}"`);
        const devCount = await devPrisma.$queryRawUnsafe(`SELECT COUNT(*) as count FROM "${table}"`);
        console.log(`   ${table}: Prod=${prodCount[0].count}, Dev=${devCount[0].count}`);
      } catch (error) {
        console.log(`   ${table}: Error getting count - ${error.message}`);
      }
    }

    await prodPrisma.$disconnect();
    await devPrisma.$disconnect();

    console.log('\n✅ Sync completed successfully!');

  } catch (error) {
    console.error('❌ Sync failed:', error.message);
    process.exit(1);
  }
}

safeDevToProdSync().catch(console.error);
