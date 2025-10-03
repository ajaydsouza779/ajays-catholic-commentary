#!/usr/bin/env node

// Script to sync papal data from local database to production
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

// Local database (SQLite)
const localPrisma = new PrismaClient({
  datasources: {
    db: {
      url: "file:./dev.db"
    }
  }
});

// Production database (Supabase PostgreSQL)
const productionPrisma = new PrismaClient({
  datasources: {
    db: {
      url: "postgresql://postgres:%231Company%40123@db.nxjtogogonbztiyympvb.supabase.co:5432/postgres"
    }
  }
});

async function syncPapalDataToProduction() {
  console.log('🔄 Starting papal data sync to production...');
  
  try {
    // Step 1: Fetch all papal data from local database
    console.log('📥 Fetching papal data from local database...');
    const localPopes = await localPrisma.pope.findMany({
      include: {
        events: true,
        achievements: true
      },
      orderBy: {
        papacyNumber: 'asc'
      }
    });
    
    console.log(`✅ Found ${localPopes.length} popes in local database`);
    
    // Step 2: Clear existing papal data in production
    console.log('🗑️  Clearing existing papal data in production...');
    await productionPrisma.papalAchievement.deleteMany();
    await productionPrisma.papalEvent.deleteMany();
    await productionPrisma.pope.deleteMany();
    console.log('✅ Cleared existing papal data in production');
    
    // Step 3: Sync popes to production
    console.log('📤 Syncing popes to production database...');
    let syncedPopes = 0;
    
    for (const pope of localPopes) {
      try {
        // Create pope in production
        const productionPope = await productionPrisma.pope.create({
          data: {
            name: pope.name,
            regnalName: pope.regnalName,
            birthName: pope.birthName,
            birthDate: pope.birthDate,
            deathDate: pope.deathDate,
            papacyStart: pope.papacyStart,
            papacyEnd: pope.papacyEnd,
            papacyNumber: pope.papacyNumber,
            nationality: pope.nationality,
            previousOffice: pope.previousOffice,
            notableEvents: pope.notableEvents,
            biography: pope.biography,
            imageUrl: pope.imageUrl,
            historicalContext: pope.historicalContext,
            references: pope.references,
            isCurrent: pope.isCurrent,
            createdAt: pope.createdAt,
            updatedAt: pope.updatedAt
          }
        });
        
        // Sync events
        if (pope.events && pope.events.length > 0) {
          await productionPrisma.papalEvent.createMany({
            data: pope.events.map(event => ({
              title: event.title,
              description: event.description,
              eventDate: event.eventDate,
              eventType: event.eventType,
              location: event.location,
              significance: event.significance,
              imageUrl: event.imageUrl,
              popeId: productionPope.id
            }))
          });
        }
        
        // Sync achievements
        if (pope.achievements && pope.achievements.length > 0) {
          await productionPrisma.papalAchievement.createMany({
            data: pope.achievements.map(achievement => ({
              title: achievement.title,
              description: achievement.description,
              category: achievement.category,
              year: achievement.year,
              significance: achievement.significance,
              imageUrl: achievement.imageUrl,
              popeId: productionPope.id
            }))
          });
        }
        
        syncedPopes++;
        console.log(`✅ Synced Pope ${pope.regnalName} (${pope.papacyNumber})`);
        
      } catch (error) {
        console.error(`❌ Error syncing Pope ${pope.regnalName} (${pope.papacyNumber}):`, error.message);
      }
    }
    
    // Step 4: Verify sync
    console.log('🔍 Verifying sync...');
    const productionPopes = await productionPrisma.pope.findMany({
      include: {
        events: true,
        achievements: true
      }
    });
    
    console.log('🎉 Papal data sync completed!');
    console.log('📊 Summary:');
    console.log(`   - Local popes: ${localPopes.length}`);
    console.log(`   - Synced popes: ${syncedPopes}`);
    console.log(`   - Production popes: ${productionPopes.length}`);
    console.log(`   - Total events: ${productionPopes.reduce((sum, pope) => sum + pope.events.length, 0)}`);
    console.log(`   - Total achievements: ${productionPopes.reduce((sum, pope) => sum + pope.achievements.length, 0)}`);
    
    // Step 5: Show sample of synced data
    if (productionPopes.length > 0) {
      const samplePope = productionPopes[0];
      console.log('\n📋 Sample synced pope:');
      console.log(`   - Name: ${samplePope.regnalName}`);
      console.log(`   - Papacy: ${samplePope.papacyNumber}`);
      console.log(`   - Biography length: ${samplePope.biography ? samplePope.biography.length : 0} characters`);
      console.log(`   - Events: ${samplePope.events.length}`);
      console.log(`   - Achievements: ${samplePope.achievements.length}`);
    }
    
  } catch (error) {
    console.error('❌ Error syncing papal data:', error);
    throw error;
  } finally {
    await localPrisma.$disconnect();
    await productionPrisma.$disconnect();
  }
}

// Run the sync
syncPapalDataToProduction()
  .catch((error) => {
    console.error('❌ Sync failed:', error);
    process.exit(1);
  });
