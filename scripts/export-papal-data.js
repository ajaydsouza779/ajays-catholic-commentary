#!/usr/bin/env node

// Script to export all papal data as SQL insert statements for production sync
const { PrismaClient } = require('@prisma/client');

// Use local SQLite database
const prisma = new PrismaClient({
  datasources: {
    db: {
      url: "file:./dev.db"
    }
  }
});

async function exportPapalData() {
  console.log('📤 Exporting papal data for production sync...');
  
  try {
    // Fetch all papal data from local database
    const popes = await prisma.pope.findMany({
      include: {
        events: true,
        achievements: true
      },
      orderBy: {
        papacyNumber: 'asc'
      }
    });
    
    console.log(`✅ Found ${popes.length} popes in local database`);
    
    // Generate SQL insert statements
    let sqlStatements = [];
    
    // Clear existing data
    sqlStatements.push('-- Clear existing papal data');
    sqlStatements.push('DELETE FROM papal_achievements;');
    sqlStatements.push('DELETE FROM papal_events;');
    sqlStatements.push('DELETE FROM popes;');
    sqlStatements.push('');
    
    // Insert popes
    sqlStatements.push('-- Insert popes');
    for (const pope of popes) {
      const insertPope = `
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", references, "isCurrent", "createdAt", "updatedAt"
) VALUES (
  '${pope.id}',
  '${pope.name.replace(/'/g, "''")}',
  '${pope.regnalName.replace(/'/g, "''")}',
  ${pope.birthName ? `'${pope.birthName.replace(/'/g, "''")}'` : 'NULL'},
  ${pope.birthDate ? `'${pope.birthDate.toISOString()}'` : 'NULL'},
  ${pope.deathDate ? `'${pope.deathDate.toISOString()}'` : 'NULL'},
  '${pope.papacyStart.toISOString()}',
  ${pope.papacyEnd ? `'${pope.papacyEnd.toISOString()}'` : 'NULL'},
  ${pope.papacyNumber},
  ${pope.nationality ? `'${pope.nationality.replace(/'/g, "''")}'` : 'NULL'},
  ${pope.previousOffice ? `'${pope.previousOffice.replace(/'/g, "''")}'` : 'NULL'},
  ${pope.notableEvents ? `'${pope.notableEvents.replace(/'/g, "''")}'` : 'NULL'},
  ${pope.biography ? `'${pope.biography.replace(/'/g, "''")}'` : 'NULL'},
  ${pope.imageUrl ? `'${pope.imageUrl.replace(/'/g, "''")}'` : 'NULL'},
  ${pope.historicalContext ? `'${pope.historicalContext.replace(/'/g, "''")}'` : 'NULL'},
  ${pope.references ? `'${pope.references.replace(/'/g, "''")}'` : 'NULL'},
  ${pope.isCurrent},
  '${pope.createdAt.toISOString()}',
  '${pope.updatedAt.toISOString()}'
);`;
      sqlStatements.push(insertPope);
    }
    
    sqlStatements.push('');
    
    // Insert events
    sqlStatements.push('-- Insert papal events');
    for (const pope of popes) {
      for (const event of pope.events) {
        const insertEvent = `
INSERT INTO papal_events (
  id, title, description, "eventDate", "eventType", location, 
  significance, "imageUrl", "popeId", "createdAt", "updatedAt"
) VALUES (
  '${event.id}',
  '${event.title.replace(/'/g, "''")}',
  '${event.description.replace(/'/g, "''")}',
  '${event.eventDate.toISOString()}',
  '${event.eventType}',
  ${event.location ? `'${event.location.replace(/'/g, "''")}'` : 'NULL'},
  ${event.significance ? `'${event.significance.replace(/'/g, "''")}'` : 'NULL'},
  ${event.imageUrl ? `'${event.imageUrl.replace(/'/g, "''")}'` : 'NULL'},
  '${pope.id}',
  '${event.createdAt.toISOString()}',
  '${event.updatedAt.toISOString()}'
);`;
        sqlStatements.push(insertEvent);
      }
    }
    
    sqlStatements.push('');
    
    // Insert achievements
    sqlStatements.push('-- Insert papal achievements');
    for (const pope of popes) {
      for (const achievement of pope.achievements) {
        const insertAchievement = `
INSERT INTO papal_achievements (
  id, title, description, category, year, significance, 
  "imageUrl", "popeId", "createdAt", "updatedAt"
) VALUES (
  '${achievement.id}',
  '${achievement.title.replace(/'/g, "''")}',
  '${achievement.description.replace(/'/g, "''")}',
  '${achievement.category}',
  ${achievement.year || 'NULL'},
  ${achievement.significance ? `'${achievement.significance.replace(/'/g, "''")}'` : 'NULL'},
  ${achievement.imageUrl ? `'${achievement.imageUrl.replace(/'/g, "''")}'` : 'NULL'},
  '${pope.id}',
  '${achievement.createdAt.toISOString()}',
  '${achievement.updatedAt.toISOString()}'
);`;
        sqlStatements.push(insertAchievement);
      }
    }
    
    // Write to file
    const fs = require('fs');
    const sqlContent = sqlStatements.join('\n');
    fs.writeFileSync('papal-data-export.sql', sqlContent);
    
    console.log('🎉 Papal data export completed!');
    console.log('📊 Summary:');
    console.log(`   - ${popes.length} popes exported`);
    console.log(`   - ${popes.reduce((sum, pope) => sum + pope.events.length, 0)} events exported`);
    console.log(`   - ${popes.reduce((sum, pope) => sum + pope.achievements.length, 0)} achievements exported`);
    console.log('   - SQL file created: papal-data-export.sql');
    console.log('');
    console.log('📋 Next steps:');
    console.log('   1. Copy papal-data-export.sql to your production server');
    console.log('   2. Run the SQL file against your production database');
    console.log('   3. Or use the SQL content in your database management tool');
    
  } catch (error) {
    console.error('❌ Error exporting papal data:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

// Run the export
exportPapalData()
  .catch((error) => {
    console.error('❌ Export failed:', error);
    process.exit(1);
  });
