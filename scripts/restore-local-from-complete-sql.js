#!/usr/bin/env node

// Restore local SQLite DB from the good SQL export (complete-deployment-with-schema.sql)
// This script clears local data and executes only INSERT statements for popes/events/achievements

const fs = require('fs')
const path = require('path')
const { PrismaClient } = require('@prisma/client')

// Use default local datasource (SQLite dev.db)
const prisma = new PrismaClient()

function extractInsertStatements(sqlContent) {
  // Keep only INSERTs for popes, papal_events, papal_achievements
  // Drop/Creates are ignored; DELETEs we'll do via Prisma
  const lines = sqlContent
    .split(/;\s*\n/g) // split on statement terminators
    .map(s => s.trim())
    .filter(Boolean)

  const insertStmts = lines.filter(stmt => {
    const upper = stmt.toUpperCase()
    return upper.startsWith('INSERT INTO POPES') || upper.startsWith('INSERT INTO PAPAL_EVENTS') || upper.startsWith('INSERT INTO PAPAL_ACHIEVEMENTS')
  })

  return insertStmts.map(s => s + ';')
}

async function main() {
  console.log('🛠️  Restoring local database from complete-deployment-with-schema.sql ...')

  const sqlPath = path.resolve(process.cwd(), 'complete-deployment-with-schema.sql')
  if (!fs.existsSync(sqlPath)) {
    console.error('❌ File not found:', sqlPath)
    process.exit(1)
  }

  const sqlContent = fs.readFileSync(sqlPath, 'utf8')
  const inserts = extractInsertStatements(sqlContent)
  console.log(`📄 Found ${inserts.length} INSERT statements to execute`)

  // Clear existing data in correct order
  console.log('🗑️  Clearing existing local data...')
  await prisma.papalAchievement.deleteMany()
  await prisma.papalEvent.deleteMany()
  await prisma.pope.deleteMany()
  console.log('✅ Local data cleared')

  // Execute inserts in batches to avoid long transactions
  let executed = 0
  for (const stmt of inserts) {
    try {
      await prisma.$executeRawUnsafe(stmt)
      executed++
      if (executed % 50 === 0) {
        console.log(`✅ Executed ${executed}/${inserts.length} inserts`)
      }
    } catch (err) {
      console.error('❌ Error executing:', stmt.slice(0, 120) + '...')
      console.error('   →', err.message)
      process.exit(1)
    }
  }

  // Verify
  const popeCount = await prisma.pope.count()
  const eventCount = await prisma.papalEvent.count()
  const achCount = await prisma.papalAchievement.count()
  console.log('🎉 Restore complete!')
  console.log(`📊 Popes: ${popeCount}, Events: ${eventCount}, Achievements: ${achCount}`)

  await prisma.$disconnect()
}

main().catch(async (e) => {
  console.error('❌ Restore failed:', e)
  try { await prisma.$disconnect() } catch {}
  process.exit(1)
})


