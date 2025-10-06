#!/usr/bin/env node

// Create final production deployment script with all 267 popes
const { PrismaClient } = require('@prisma/client');
const fs = require('fs');

// Use local SQLite database
const prisma = new PrismaClient({
  datasources: {
    db: {
      url: "file:./dev.db"
    }
  }
});

async function createFinalProductionDeployment() {
  console.log('🌙 Creating final production deployment with all 267 popes...');
  
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
    
    // Start building the complete deployment script
    let deploymentScript = `-- Final Production Deployment Script - All 267 Popes
-- This script will:
-- 1. Drop existing tables (if they exist)
-- 2. Create complete schema for papal timeline
-- 3. Import all 267 popes with detailed biographies

-- ============================================
-- STEP 1: DROP EXISTING TABLES (if they exist)
-- ============================================

DROP TABLE IF EXISTS papal_achievements CASCADE;
DROP TABLE IF EXISTS papal_events CASCADE;
DROP TABLE IF EXISTS popes CASCADE;

-- ============================================
-- STEP 2: CREATE POPES TABLE
-- ============================================

CREATE TABLE popes (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    "regnalName" TEXT NOT NULL,
    "birthName" TEXT,
    "birthDate" TIMESTAMP(3),
    "deathDate" TIMESTAMP(3),
    "papacyStart" TIMESTAMP(3) NOT NULL,
    "papacyEnd" TIMESTAMP(3),
    "papacyNumber" INTEGER NOT NULL UNIQUE,
    nationality TEXT,
    "previousOffice" TEXT,
    "notableEvents" TEXT,
    biography TEXT,
    "imageUrl" TEXT,
    "historicalContext" TEXT,
    "references" TEXT,
    "isCurrent" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- ============================================
-- STEP 3: CREATE PAPAL EVENTS TABLE
-- ============================================

CREATE TABLE papal_events (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    "eventDate" TIMESTAMP(3) NOT NULL,
    "eventType" TEXT NOT NULL,
    location TEXT,
    significance TEXT,
    "imageUrl" TEXT,
    "popeId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY ("popeId") REFERENCES popes(id) ON DELETE CASCADE
);

-- ============================================
-- STEP 4: CREATE PAPAL ACHIEVEMENTS TABLE
-- ============================================

CREATE TABLE papal_achievements (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    category TEXT NOT NULL,
    year INTEGER,
    significance TEXT,
    "imageUrl" TEXT,
    "popeId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY ("popeId") REFERENCES popes(id) ON DELETE CASCADE
);

-- ============================================
-- STEP 5: CREATE INDEXES FOR PERFORMANCE
-- ============================================

CREATE INDEX idx_popes_papacy_number ON popes("papacyNumber");
CREATE INDEX idx_popes_is_current ON popes("isCurrent");
CREATE INDEX idx_papal_events_pope_id ON papal_events("popeId");
CREATE INDEX idx_papal_events_event_date ON papal_events("eventDate");
CREATE INDEX idx_papal_achievements_pope_id ON papal_achievements("popeId");
CREATE INDEX idx_papal_achievements_category ON papal_achievements(category);

SELECT 'Schema created successfully' as status;

-- ============================================
-- STEP 6: IMPORT ALL 267 POPES
-- ============================================

-- Insert all 267 popes
`;
    
    // Add pope insert statements
    for (const pope of popes) {
      const insertPope = `
INSERT INTO popes (
  id, name, "regnalName", "birthName", "birthDate", "deathDate", 
  "papacyStart", "papacyEnd", "papacyNumber", nationality, 
  "previousOffice", "notableEvents", biography, "imageUrl", 
  "historicalContext", "references", "isCurrent", "createdAt", "updatedAt"
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
      deploymentScript += insertPope;
    }
    
    deploymentScript += '\n\n-- Insert papal events\n';
    
    // Add event insert statements
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
        deploymentScript += insertEvent;
      }
    }
    
    deploymentScript += '\n\n-- Insert papal achievements\n';
    
    // Add achievement insert statements
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
        deploymentScript += insertAchievement;
      }
    }
    
    deploymentScript += `

-- ============================================
-- STEP 7: VERIFICATION
-- ============================================

-- Verify the deployment
SELECT 
    (SELECT COUNT(*) FROM popes) as popes,
    (SELECT COUNT(*) FROM papal_events) as events,
    (SELECT COUNT(*) FROM papal_achievements) as achievements;

-- Show sample data
SELECT 
    name, 
    "regnalName", 
    "papacyNumber", 
    CASE 
        WHEN LENGTH(biography) > 100 THEN 'Detailed biography'
        ELSE 'Basic info'
    END as biography_status
FROM popes 
ORDER BY "papacyNumber" 
LIMIT 10;

-- Check key popes
SELECT 
    "regnalName", 
    "papacyNumber", 
    "papacyStart", 
    "papacyEnd"
FROM popes 
WHERE "papacyNumber" IN (1, 50, 100, 150, 200, 250, 266, 267)
ORDER BY "papacyNumber";

SELECT 'Complete deployment with all 267 popes finished successfully!' as status;
`;
    
    // Write the complete deployment script
    fs.writeFileSync('final-production-deployment-267-popes.sql', deploymentScript);
    
    console.log('🎉 Final production deployment script created!');
    console.log('📊 Summary:');
    console.log(`   - ${popes.length} popes with detailed biographies`);
    console.log(`   - ${popes.reduce((sum, pope) => sum + pope.events.length, 0)} events`);
    console.log(`   - ${popes.reduce((sum, pope) => sum + pope.achievements.length, 0)} achievements`);
    console.log('   - Complete deployment file: final-production-deployment-267-popes.sql');
    console.log('');
    console.log('📋 This file includes:');
    console.log('   1. Schema creation (CREATE TABLE statements)');
    console.log('   2. Indexes for performance');
    console.log('   3. All 267 popes with detailed biographical data');
    console.log('   4. Verification queries');
    console.log('');
    console.log('🚀 Ready for production deployment with complete 267-pope dataset!');
    
  } catch (error) {
    console.error('❌ Error creating deployment script:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

// Run the script
createFinalProductionDeployment()
  .catch((error) => {
    console.error('❌ Deployment script creation failed:', error);
    process.exit(1);
  });
