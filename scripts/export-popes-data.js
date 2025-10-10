/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

function sqlString(value) {
  if (value === null || value === undefined) return 'NULL';
  if (value instanceof Date) return `'${value.toISOString()}'`;
  if (typeof value === 'boolean') return value ? 'TRUE' : 'FALSE';
  const str = String(value).replace(/'/g, "''");
  return `'${str}'`;
}

async function exportPopes() {
  const popes = await prisma.pope.findMany({ orderBy: [{ papacyNumber: 'asc' }] });
  const lines = [];
  lines.push('-- Popes');
  lines.push('DELETE FROM popes;');
  for (const p of popes) {
    lines.push(`INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate",
  "papacyStart", "papacyEnd", "papacyNumber", nationality, "previousOffice",
  "notableEvents", biography, "imageUrl", "historicalContext", "references",
  "isCurrent", "createdAt", "updatedAt"
) VALUES (
  ${sqlString(p.id)},
  ${sqlString(p.name)},
  ${sqlString(p.regnalName)},
  ${sqlString(p.birthName)},
  ${sqlString(p.birthDate)},
  ${sqlString(p.deathDate)},
  ${sqlString(p.papacyStart)},
  ${sqlString(p.papacyEnd)},
  ${p.papacyNumber ?? 'NULL'},
  ${sqlString(p.nationality)},
  ${sqlString(p.previousOffice)},
  ${sqlString(p.notableEvents)},
  ${sqlString(p.biography)},
  ${sqlString(p.imageUrl)},
  ${sqlString(p.historicalContext)},
  ${sqlString(p.references)},
  ${sqlString(p.isCurrent)},
  ${sqlString(p.createdAt)},
  ${sqlString(p.updatedAt)}
);`);
  }
  lines.push('');
  return lines.join('\n');
}

async function exportEvents() {
  const events = await prisma.papalEvent.findMany({ orderBy: [{ eventDate: 'asc' }] });
  const lines = [];
  lines.push('-- Papal Events');
  lines.push('DELETE FROM papal_events;');
  for (const e of events) {
    lines.push(`INSERT INTO papal_events (
  id, title, description, "eventDate", "eventType", location, significance, "imageUrl", "createdAt", "updatedAt", "popeId"
) VALUES (
  ${sqlString(e.id)},
  ${sqlString(e.title)},
  ${sqlString(e.description)},
  ${sqlString(e.eventDate)},
  ${sqlString(e.eventType)},
  ${sqlString(e.location)},
  ${sqlString(e.significance)},
  ${sqlString(e.imageUrl)},
  ${sqlString(e.createdAt)},
  ${sqlString(e.updatedAt)},
  ${sqlString(e.popeId)}
);`);
  }
  lines.push('');
  return lines.join('\n');
}

async function exportAchievements() {
  const achievements = await prisma.papalAchievement.findMany({ orderBy: [{ year: 'asc' }] });
  const lines = [];
  lines.push('-- Papal Achievements');
  lines.push('DELETE FROM papal_achievements;');
  for (const a of achievements) {
    lines.push(`INSERT INTO papal_achievements (
  id, title, description, category, year, significance, "imageUrl", "createdAt", "updatedAt", "popeId"
) VALUES (
  ${sqlString(a.id)},
  ${sqlString(a.title)},
  ${sqlString(a.description)},
  ${sqlString(a.category)},
  ${a.year ?? 'NULL'},
  ${sqlString(a.significance)},
  ${sqlString(a.imageUrl)},
  ${sqlString(a.createdAt)},
  ${sqlString(a.updatedAt)},
  ${sqlString(a.popeId)}
);`);
  }
  lines.push('');
  return lines.join('\n');
}

async function main() {
  try {
    console.log('📤 Exporting Popes dataset (v003)...');
    const [popesSql, eventsSql, achievementsSql] = await Promise.all([
      exportPopes(),
      exportEvents(),
      exportAchievements(),
    ]);

    const header = `-- v003_popes_complete_export.sql\n-- Generated: ${new Date().toISOString()}\n-- Includes: popes, papal_events, papal_achievements\n\nBEGIN;\n`;
    const footer = 'COMMIT;\n';

    const sql = [header, popesSql, eventsSql, achievementsSql, footer].join('\n');

    const outDir = path.join(process.cwd(), 'sql');
    if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
    const outFile = path.join(outDir, 'v003_popes_complete_export.sql');
    fs.writeFileSync(outFile, sql, 'utf-8');

    console.log('🎉 Export complete!');
    console.log('📄 File:', outFile);
    console.log('🧩 Tables: popes, papal_events, papal_achievements');
  } catch (err) {
    console.error('❌ Export failed:', err);
    process.exitCode = 1;
  } finally {
    await prisma.$disconnect();
  }
}

main();
