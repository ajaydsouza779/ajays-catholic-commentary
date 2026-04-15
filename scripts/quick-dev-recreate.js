#!/usr/bin/env node

// Quick Dev Database Recreation
const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const path = require('path');

async function quickDevRecreate() {
  console.log('🚀 Quick Dev Database Recreation');
  console.log('==================================\n');

  const devUrl = process.env.DATABASE_URL_DEV;

  if (!devUrl) {
    console.error('❌ Missing DATABASE_URL_DEV environment variable');
    console.log('Set it to your dev database connection string');
    process.exit(1);
  }

  try {
    const devPrisma = new PrismaClient({ datasources: { db: { url: devUrl } } });
    await devPrisma.$connect();

    console.log('✅ Connected to dev database');

    // Find the latest export file
    const exportDir = path.join(__dirname, '..', 'database-exports');
    const files = fs.readdirSync(exportDir)
      .filter(file => file.endsWith('.json'))
      .sort()
      .reverse();

    if (files.length === 0) {
      console.error('❌ No export files found in database-exports/');
      console.log('Run: node scripts/export-local-database.js first');
      process.exit(1);
    }

    const latestExport = path.join(exportDir, files[0]);
    console.log(`📥 Loading export: ${files[0]}`);

    const exportData = JSON.parse(fs.readFileSync(latestExport, 'utf8'));

    // Clear dev database
    console.log('\n🗑️  Clearing dev database...');
    const tables = Object.keys(exportData);
    
    for (const table of tables) {
      try {
        await devPrisma.$queryRawUnsafe(`DELETE FROM "${table}"`);
        console.log(`   ✅ Cleared ${table}`);
      } catch (error) {
        console.log(`   ⚠️  Could not clear ${table}: ${error.message}`);
      }
    }

    // Insert data
    console.log('\n📥 Inserting data...');
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

    await devPrisma.$disconnect();

    console.log('\n✅ Dev database recreation completed!');
    console.log('\n📋 Summary:');
    console.log(`   📁 Export file: ${files[0]}`);
    console.log(`   🗃️  Tables processed: ${tables.length}`);
    console.log(`   📊 Total records: ${Object.values(exportData).reduce((sum, data) => sum + data.length, 0)}`);

  } catch (error) {
    console.error('❌ Recreation failed:', error.message);
    process.exit(1);
  }
}

quickDevRecreate().catch(console.error);




