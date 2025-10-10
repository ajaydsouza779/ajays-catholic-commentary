/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');

function read(file) {
  const p = path.join(process.cwd(), 'sql', file);
  if (!fs.existsSync(p)) throw new Error(`Missing required SQL: ${file}`);
  return fs.readFileSync(p, 'utf-8');
}

function main() {
  try {
    console.log('🧩 Building v003_combined_deployment.sql ...');

    const header = `-- v003_combined_deployment.sql\n-- Generated: ${new Date().toISOString()}\n-- Contains: schema (v001) + popes (v003) + church history (v002)\n\n`;

    const schema = read('v001_recreate_production_schema.sql');
    const popes = read('v003_popes_complete_export.sql');
    const history = read('v002_history_data_export.sql');

    const combined = [
      header,
      '-- =============================',
      '-- 1) SCHEMA (CREATE IF MISSING)',
      '-- =============================',
      schema.trim(),
      '\n\n-- =============================',
      '-- 2) POPES (ALL 267 + RELATIONS)',
      '-- =============================',
      popes.trim(),
      '\n\n-- =============================',
      '-- 3) CHURCH HISTORY (DIVISIONS, MANUSCRIPTS, TRANSLATIONS)',
      '-- =============================',
      history.trim(),
      '\n',
    ].join('\n');

    const outFile = path.join(process.cwd(), 'sql', 'v003_combined_deployment.sql');
    fs.writeFileSync(outFile, combined, 'utf-8');

    console.log('✅ Created:', outFile);
  } catch (err) {
    console.error('❌ Failed to build combined SQL:', err.message);
    process.exitCode = 1;
  }
}

main();
