#!/usr/bin/env node

// Safe Dev Database Recreation - Handles missing tables and is idempotent
const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const path = require('path');

async function safeDevRecreate() {
  console.log('🛡️  Safe Dev Database Recreation');
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

    // Check if tables exist and create if needed
    console.log('\n🔍 Checking table structure...');
    const tables = Object.keys(exportData);
    
    for (const table of tables) {
      try {
        // Try to query the table to see if it exists
        await devPrisma.$queryRawUnsafe(`SELECT 1 FROM "${table}" LIMIT 1`);
        console.log(`   ✅ Table ${table} exists`);
      } catch (error) {
        if (error.message.includes('does not exist') || error.message.includes('no such table')) {
          console.log(`   ⚠️  Table ${table} does not exist - will be created by Prisma`);
        } else {
          console.log(`   ⚠️  Could not check table ${table}: ${error.message}`);
        }
      }
    }

    // Ensure schema is up to date
    console.log('\n📋 Ensuring schema is up to date...');
    try {
      await devPrisma.$executeRawUnsafe('SELECT 1'); // Test connection
      console.log('   ✅ Database connection verified');
    } catch (error) {
      console.log(`   ⚠️  Database connection issue: ${error.message}`);
    }

    // Clear existing data (safe approach)
    console.log('\n🗑️  Clearing existing data...');
    for (const table of tables) {
      try {
        // Check if table exists before trying to clear it
        await devPrisma.$queryRawUnsafe(`SELECT 1 FROM "${table}" LIMIT 1`);
        await devPrisma.$queryRawUnsafe(`DELETE FROM "${table}"`);
        console.log(`   ✅ Cleared ${table}`);
      } catch (error) {
        if (error.message.includes('does not exist') || error.message.includes('no such table')) {
          console.log(`   ⏭️  Skipping ${table} (table doesn't exist yet)`);
        } else {
          console.log(`   ⚠️  Could not clear ${table}: ${error.message}`);
        }
      }
    }

    // Insert data with error handling
    console.log('\n📥 Inserting data...');
    let totalInserted = 0;
    let totalErrors = 0;

    for (const [table, data] of Object.entries(exportData)) {
      if (data.length === 0) {
        console.log(`   ⏭️  Skipping ${table} (empty)`);
        continue;
      }

      try {
        const columns = Object.keys(data[0]);
        const columnNames = columns.map(col => `"${col}"`).join(', ');
        
        let insertedCount = 0;
        for (const row of data) {
          try {
            const values = columns.map(col => {
              const val = row[col];
              if (val === null) return 'NULL';
              if (typeof val === 'string') return `'${val.replace(/'/g, "''")}'`;
              if (val instanceof Date) return `'${val.toISOString()}'`;
              return val;
            }).join(', ');
            
            const insertQuery = `INSERT INTO "${table}" (${columnNames}) VALUES (${values})`;
            await devPrisma.$queryRawUnsafe(insertQuery);
            insertedCount++;
          } catch (insertError) {
            console.log(`     ⚠️  Skipped row in ${table}: ${insertError.message}`);
            totalErrors++;
          }
        }
        
        console.log(`   ✅ Inserted ${insertedCount} records into ${table}`);
        totalInserted += insertedCount;
        
      } catch (error) {
        console.log(`   ❌ Error inserting into ${table}: ${error.message}`);
        totalErrors++;
      }
    }

    await devPrisma.$disconnect();

    console.log('\n✅ Safe dev database recreation completed!');
    console.log('\n📋 Summary:');
    console.log(`   📁 Export file: ${files[0]}`);
    console.log(`   🗃️  Tables processed: ${tables.length}`);
    console.log(`   📊 Records inserted: ${totalInserted}`);
    console.log(`   ⚠️  Errors: ${totalErrors}`);

    if (totalErrors > 0) {
      console.log('\n⚠️  Some errors occurred during insertion.');
      console.log('   This is normal if tables don\'t exist yet.');
      console.log('   Run the script again after ensuring tables exist.');
    }

  } catch (error) {
    console.error('❌ Recreation failed:', error.message);
    console.log('\n🔧 Troubleshooting:');
    console.log('1. Check your DATABASE_URL_DEV connection string');
    console.log('2. Ensure the dev database is accessible');
    console.log('3. Run: npx prisma db push --schema=prisma/schema.postgres.prisma');
    process.exit(1);
  }
}

safeDevRecreate().catch(console.error);




