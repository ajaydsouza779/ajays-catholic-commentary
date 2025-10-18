#!/usr/bin/env node

// Production Backup Script
const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const path = require('path');

async function backupProduction() {
  console.log('💾 Creating Production Backup');
  console.log('==============================\n');

  const prodUrl = process.env.DATABASE_URL;

  if (!prodUrl) {
    console.error('❌ Missing production database URL');
    process.exit(1);
  }

  try {
    const prisma = new PrismaClient({ datasources: { db: { url: prodUrl } } });
    await prisma.$connect();

    console.log('✅ Connected to production database');

    // Create backup directory
    const backupDir = path.join(__dirname, '..', 'backups');
    if (!fs.existsSync(backupDir)) {
      fs.mkdirSync(backupDir, { recursive: true });
    }

    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const backupFile = path.join(backupDir, `prod-backup-${timestamp}.json`);

    // Get all table data
    const tables = ['posts', 'comments', 'categories', 'tags', 'users', 'accounts', 'sessions'];
    const backup = {};

    for (const table of tables) {
      try {
        console.log(`📥 Backing up ${table}...`);
        const data = await prisma.$queryRawUnsafe(`SELECT * FROM "${table}"`);
        backup[table] = data;
        console.log(`   ✅ ${data.length} records backed up`);
      } catch (error) {
        console.log(`   ⚠️  Error backing up ${table}: ${error.message}`);
        backup[table] = [];
      }
    }

    // Save backup
    fs.writeFileSync(backupFile, JSON.stringify(backup, null, 2));
    console.log(`\n💾 Backup saved to: ${backupFile}`);

    await prisma.$disconnect();
    console.log('✅ Backup completed successfully!');

  } catch (error) {
    console.error('❌ Backup failed:', error.message);
    process.exit(1);
  }
}

backupProduction().catch(console.error);
