#!/usr/bin/env node

// Script to create a complete deployment file with schema updates + data
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

async function createCompleteDeployment() {
  console.log('🚀 Creating complete production deployment script...');
  
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
    let deploymentScript = `-- Complete Production Deployment Script
-- This script will:
-- 1. Add new columns to the production schema
-- 2. Clear existing papal data
-- 3. Import all papal data with detailed biographies

-- ============================================
-- STEP 1: ALTER SCHEMA (Add new columns)
-- ============================================

-- Add historicalContext column to popes table
ALTER TABLE popes 
ADD COLUMN IF NOT EXISTS "historicalContext" TEXT;

-- Add references column to popes table (quoted because it's a reserved keyword)
ALTER TABLE popes 
ADD COLUMN IF NOT EXISTS "references" TEXT;

-- Verify the columns were added
SELECT 'Schema updated successfully' as status;

-- ============================================
-- STEP 2: CLEAR EXISTING DATA
-- ============================================

-- Clear existing papal data
DELETE FROM papal_achievements;
DELETE FROM papal_events;
DELETE FROM popes;

SELECT 'Existing data cleared' as status;

-- ============================================
-- STEP 3: IMPORT PAPAL DATA
-- ============================================

-- Insert popes
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
-- STEP 4: VERIFICATION
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
LIMIT 5;

SELECT 'Deployment completed successfully!' as status;
`;
    
    // Write the complete deployment script
    fs.writeFileSync('complete-production-deployment.sql', deploymentScript);
    
    console.log('🎉 Complete deployment script created!');
    console.log('📊 Summary:');
    console.log(`   - ${popes.length} popes with detailed biographies`);
    console.log(`   - ${popes.reduce((sum, pope) => sum + pope.events.length, 0)} events`);
    console.log(`   - ${popes.reduce((sum, pope) => sum + pope.achievements.length, 0)} achievements`);
    console.log('   - Complete deployment file: complete-production-deployment.sql');
    console.log('');
    console.log('📋 This file includes:');
    console.log('   1. Schema updates (ALTER TABLE statements)');
    console.log('   2. Data clearing (DELETE statements)');
    console.log('   3. Complete data import (INSERT statements)');
    console.log('   4. Verification queries');
    console.log('');
    console.log('🚀 Ready for production deployment!');
    
  } catch (error) {
    console.error('❌ Error creating deployment script:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

// Run the script
createCompleteDeployment()
  .catch((error) => {
    console.error('❌ Deployment script creation failed:', error);
    process.exit(1);
  });
