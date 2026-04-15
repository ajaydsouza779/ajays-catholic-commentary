#!/usr/bin/env node

// Recreate Dev Database from Local Export
const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const path = require('path');

async function recreateDevDatabase() {
  console.log('🔄 Recreating Dev Database from Local Export');
  console.log('==============================================\n');

  const prodUrl = process.env.DATABASE_URL;
  const devUrl = process.env.DATABASE_URL_DEV;

  if (!prodUrl || !devUrl) {
    console.error('❌ Missing database URLs');
    console.log('Required environment variables:');
    console.log('- DATABASE_URL (production)');
    console.log('- DATABASE_URL_DEV (development)');
    process.exit(1);
  }

  try {
    // Connect to both databases
    const prodPrisma = new PrismaClient({ datasources: { db: { url: prodUrl } } });
    const devPrisma = new PrismaClient({ datasources: { db: { url: devUrl } } });

    await prodPrisma.$connect();
    await devPrisma.$connect();

    console.log('✅ Connected to both databases');

    // Find the latest export file
    const exportDir = path.join(__dirname, '..', 'database-exports');
    const files = fs.readdirSync(exportDir)
      .filter(file => file.endsWith('.json'))
      .sort()
      .reverse();

    if (files.length === 0) {
      console.error('❌ No export files found in database-exports/');
      process.exit(1);
    }

    const latestExport = path.join(exportDir, files[0]);
    console.log(`📥 Loading export: ${files[0]}`);

    const exportData = JSON.parse(fs.readFileSync(latestExport, 'utf8'));

    // Clear dev database (CAREFUL!)
    console.log('\n🗑️  Clearing dev database...');
    const tables = Object.keys(exportData);
    
    // Delete in reverse order to handle foreign keys
    const deleteOrder = tables.reverse();
    for (const table of deleteOrder) {
      try {
        await devPrisma.$queryRawUnsafe(`DELETE FROM "${table}"`);
        console.log(`   ✅ Cleared ${table}`);
      } catch (error) {
        console.log(`   ⚠️  Could not clear ${table}: ${error.message}`);
      }
    }

    // Insert data
    console.log('\n📥 Inserting data into dev database...');
    for (const [table, data] of Object.entries(exportData)) {
      if (data.length === 0) {
        console.log(`   ⏭️  Skipping ${table} (empty)`);
        continue;
      }

      try {
        const columns = Object.keys(data[0]);
        const columnNames = columns.map(col => `"${col}"`).join(', ');
        
        for (const row of data) {
          const values = columns.map(col => {
            const val = row[col];
            if (val === null) return 'NULL';
            if (typeof val === 'string') return `'${val.replace(/'/g, "''")}'`;
            if (val instanceof Date) return `'${val.toISOString()}'`;
            return val;
          }).join(', ');
          
          const insertQuery = `INSERT INTO "${table}" (${columnNames}) VALUES (${values})`;
          await devPrisma.$queryRawUnsafe(insertQuery);
        }
        
        console.log(`   ✅ Inserted ${data.length} records into ${table}`);
        
      } catch (error) {
        console.log(`   ❌ Error inserting into ${table}: ${error.message}`);
      }
    }

    // Verify the sync
    console.log('\n🔍 Verifying sync...');
    for (const table of tables) {
      try {
        const prodCount = await prodPrisma.$queryRawUnsafe(`SELECT COUNT(*) as count FROM "${table}"`);
        const devCount = await devPrisma.$queryRawUnsafe(`SELECT COUNT(*) as count FROM "${table}"`);
        
        const prodCountNum = parseInt(prodCount[0].count);
        const devCountNum = parseInt(devCount[0].count);
        
        const match = prodCountNum === devCountNum;
        console.log(`   ${table}: ${match ? '✅' : '❌'} Prod=${prodCountNum}, Dev=${devCountNum}`);
        
      } catch (error) {
        console.log(`   ${table}: ❌ Error - ${error.message}`);
      }
    }

    await prodPrisma.$disconnect();
    await devPrisma.$disconnect();

    console.log('\n✅ Dev database recreation completed successfully!');

  } catch (error) {
    console.error('❌ Recreation failed:', error.message);
    process.exit(1);
  }
}

recreateDevDatabase().catch(console.error);




