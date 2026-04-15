#!/usr/bin/env node

// Export Local Database to SQL
const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const path = require('path');

async function exportLocalDatabase() {
  console.log('📤 Exporting Local Database');
  console.log('============================\n');

  try {
    const prisma = new PrismaClient();
    await prisma.$connect();

    console.log('✅ Connected to local database');

    // Create export directory
    const exportDir = path.join(__dirname, '..', 'database-exports');
    if (!fs.existsSync(exportDir)) {
      fs.mkdirSync(exportDir, { recursive: true });
    }

    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const exportFile = path.join(exportDir, `local-database-export-${timestamp}.sql`);

    let sqlContent = '-- Local Database Export\n';
    sqlContent += `-- Generated: ${new Date().toISOString()}\n`;
    sqlContent += '-- Database: SQLite (Local Development)\n\n';

    // Get all tables
    const tables = [
      'users', 'accounts', 'sessions', 'verification_tokens',
      'categories', 'tags', 'posts', 'comments',
      'post_categories', 'post_tags', 'popes', 'papal_events',
      'papal_achievements', 'church_divisions', 'bible_manuscripts',
      'bible_translations', 'SiteSettings', 'FeatureToggle',
      '_PopeDivisions'
    ];

    for (const table of tables) {
      try {
        console.log(`📥 Exporting ${table}...`);
        
        // Get table structure
        const tableInfo = await prisma.$queryRawUnsafe(`PRAGMA table_info("${table}")`);
        
        // Get table data
        const data = await prisma.$queryRawUnsafe(`SELECT * FROM "${table}"`);
        
        if (data.length > 0) {
          sqlContent += `\n-- Table: ${table}\n`;
          sqlContent += `-- Records: ${data.length}\n`;
          
          // Create INSERT statements
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
            
            sqlContent += `INSERT INTO "${table}" (${columnNames}) VALUES (${values});\n`;
          }
        } else {
          sqlContent += `\n-- Table: ${table} (empty)\n`;
        }
        
        console.log(`   ✅ ${data.length} records exported`);
        
      } catch (error) {
        console.log(`   ⚠️  Error exporting ${table}: ${error.message}`);
        sqlContent += `\n-- Table: ${table} (error: ${error.message})\n`;
      }
    }

    // Save to file
    fs.writeFileSync(exportFile, sqlContent);
    console.log(`\n💾 Export saved to: ${exportFile}`);

    // Also create a JSON export for easier import
    const jsonExportFile = path.join(exportDir, `local-database-export-${timestamp}.json`);
    const jsonData = {};

    for (const table of tables) {
      try {
        const data = await prisma.$queryRawUnsafe(`SELECT * FROM "${table}"`);
        jsonData[table] = data;
      } catch (error) {
        jsonData[table] = [];
      }
    }

    fs.writeFileSync(jsonExportFile, JSON.stringify(jsonData, null, 2));
    console.log(`💾 JSON export saved to: ${jsonExportFile}`);

    await prisma.$disconnect();
    console.log('\n✅ Database export completed successfully!');

  } catch (error) {
    console.error('❌ Export failed:', error.message);
    process.exit(1);
  }
}

exportLocalDatabase().catch(console.error);




