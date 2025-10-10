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

async function exportChurchDivisions() {
  const divisions = await prisma.churchDivision.findMany({
    orderBy: [{ year: 'asc' }, { name: 'asc' }],
  });

  const lines = [];
  lines.push('-- Church Divisions');
  lines.push('DELETE FROM church_divisions;');

  for (const d of divisions) {
    lines.push(`INSERT INTO church_divisions (
  id, name, description, year, cause, outcome, "parentId", "imageUrl", "createdAt", "updatedAt"
) VALUES (
  ${sqlString(d.id)},
  ${sqlString(d.name)},
  ${sqlString(d.description)},
  ${d.year ?? 'NULL'},
  ${sqlString(d.cause)},
  ${sqlString(d.outcome)},
  ${sqlString(d.parentId)},
  ${sqlString(d.imageUrl)},
  ${sqlString(d.createdAt)},
  ${sqlString(d.updatedAt)}
);`);
  }
  lines.push('');
  return lines.join('\n');
}

async function exportBibleManuscripts() {
  const manuscripts = await prisma.bibleManuscript.findMany({
    orderBy: [{ date: 'asc' }, { name: 'asc' }],
  });

  const lines = [];
  lines.push('-- Bible Manuscripts');
  lines.push('DELETE FROM bible_manuscripts;');

  for (const m of manuscripts) {
    lines.push(`INSERT INTO bible_manuscripts (
  id, name, description, date, language, location, significance, "imageUrl", "createdAt", "updatedAt"
) VALUES (
  ${sqlString(m.id)},
  ${sqlString(m.name)},
  ${sqlString(m.description)},
  ${sqlString(m.date)},
  ${sqlString(m.language)},
  ${sqlString(m.location)},
  ${sqlString(m.significance)},
  ${sqlString(m.imageUrl)},
  ${sqlString(m.createdAt)},
  ${sqlString(m.updatedAt)}
);`);
  }
  lines.push('');
  return lines.join('\n');
}

async function exportBibleTranslations() {
  const translations = await prisma.bibleTranslation.findMany({
    orderBy: [{ year: 'asc' }, { name: 'asc' }],
  });

  const lines = [];
  lines.push('-- Bible Translations');
  lines.push('DELETE FROM bible_translations;');

  for (const t of translations) {
    lines.push(`INSERT INTO bible_translations (
  id, name, language, year, translator, description, significance, "imageUrl", "createdAt", "updatedAt"
) VALUES (
  ${sqlString(t.id)},
  ${sqlString(t.name)},
  ${sqlString(t.language)},
  ${t.year ?? 'NULL'},
  ${sqlString(t.translator)},
  ${sqlString(t.description)},
  ${sqlString(t.significance)},
  ${sqlString(t.imageUrl)},
  ${sqlString(t.createdAt)},
  ${sqlString(t.updatedAt)}
);`);
  }
  lines.push('');
  return lines.join('\n');
}

async function main() {
  try {
    console.log('📤 Exporting Church History datasets (v002)...');

    const [divisionsSql, manuscriptsSql, translationsSql] = await Promise.all([
      exportChurchDivisions(),
      exportBibleManuscripts(),
      exportBibleTranslations(),
    ]);

    const header = `-- v002_history_data_export.sql\n-- Generated: ${new Date().toISOString()}\n-- Includes: church_divisions, bible_manuscripts, bible_translations\n\nBEGIN;\n`;
    const footer = 'COMMIT;\n';

    const sql = [header, divisionsSql, manuscriptsSql, translationsSql, footer].join('\n');

    const outDir = path.join(process.cwd(), 'sql');
    if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
    const outFile = path.join(outDir, 'v002_history_data_export.sql');
    fs.writeFileSync(outFile, sql, 'utf-8');

    console.log('🎉 Export complete!');
    console.log('📄 File:', outFile);
    console.log('🧩 Tables: church_divisions, bible_manuscripts, bible_translations');
  } catch (err) {
    console.error('❌ Export failed:', err);
    process.exitCode = 1;
  } finally {
    await prisma.$disconnect();
  }
}

main();
