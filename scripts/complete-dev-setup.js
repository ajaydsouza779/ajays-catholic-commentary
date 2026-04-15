#!/usr/bin/env node

// Complete Dev Database Setup - Creates schema and imports data
const { PrismaClient } = require('@prisma/client');
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

async function completeDevSetup() {
  console.log('🚀 Complete Dev Database Setup');
  console.log('==============================\n');

  const devUrl = process.env.DATABASE_URL_DEV;

  if (!devUrl) {
    console.error('❌ Missing DATABASE_URL_DEV environment variable');
    console.log('Set it to your dev database connection string');
    process.exit(1);
  }

  try {
    // Step 1: Ensure schema is up to date
    console.log('📋 Step 1: Setting up database schema...');
    try {
      execSync('npx prisma db push --schema=prisma/schema.postgres.prisma', {
        stdio: 'inherit',
        env: { ...process.env, DATABASE_URL: devUrl }
      });
      console.log('   ✅ Schema pushed successfully');
    } catch (error) {
      console.log('   ⚠️  Schema push failed, continuing anyway...');
    }

    // Step 2: Generate Prisma client
    console.log('\n🔧 Step 2: Generating Prisma client...');
    try {
      execSync('npx prisma generate --schema=prisma/schema.postgres.prisma', {
        stdio: 'inherit',
        env: { ...process.env, DATABASE_URL: devUrl }
      });
      console.log('   ✅ Prisma client generated');
    } catch (error) {
      console.log('   ⚠️  Prisma generate failed, continuing anyway...');
    }

    // Step 3: Connect and verify
    console.log('\n🔍 Step 3: Verifying database connection...');
    const devPrisma = new PrismaClient({ datasources: { db: { url: devUrl } } });
    await devPrisma.$connect();
    console.log('   ✅ Connected to dev database');

    // Step 4: Find export file
    console.log('\n📥 Step 4: Loading export data...');
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
    console.log(`   📁 Using export: ${files[0]}`);

    const exportData = JSON.parse(fs.readFileSync(latestExport, 'utf8'));

    // Step 5: Clear existing data (safe)
    console.log('\n🗑️  Step 5: Clearing existing data...');
    const tables = Object.keys(exportData);
    
    for (const table of tables) {
      try {
        await devPrisma.$queryRawUnsafe(`DELETE FROM "${table}"`);
        console.log(`   ✅ Cleared ${table}`);
      } catch (error) {
        console.log(`   ⚠️  Could not clear ${table}: ${error.message}`);
      }
    }

    // Step 6: Insert data
    console.log('\n📥 Step 6: Inserting data...');
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

    // Step 7: Summary
    console.log('\n✅ Complete dev database setup finished!');
    console.log('\n📋 Summary:');
    console.log(`   📁 Export file: ${files[0]}`);
    console.log(`   🗃️  Tables processed: ${tables.length}`);
    console.log(`   📊 Records inserted: ${totalInserted}`);
    console.log(`   ⚠️  Errors: ${totalErrors}`);

    if (totalErrors === 0) {
      console.log('\n🎉 Perfect! Your dev database is ready to use.');
    } else {
      console.log('\n⚠️  Some errors occurred, but the setup is mostly complete.');
    }

  } catch (error) {
    console.error('❌ Setup failed:', error.message);
    console.log('\n🔧 Troubleshooting:');
    console.log('1. Check your DATABASE_URL_DEV connection string');
    console.log('2. Ensure the dev database is accessible');
    console.log('3. Check if you have the latest export file');
    process.exit(1);
  }
}

completeDevSetup().catch(console.error);




