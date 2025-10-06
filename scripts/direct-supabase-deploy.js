#!/usr/bin/env node

// Direct Supabase deployment - recreate the working approach from earlier
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

// Use the pooler connection string
const prisma = new PrismaClient({
  datasources: {
    db: {
      url: "postgresql://postgres.nxjtogogonbztiyympvb:%231Company%40123@aws-1-ap-southeast-1.pooler.supabase.com:5432/postgres"
    }
  }
});

async function directSupabaseDeploy() {
  console.log('🚀 Direct Supabase deployment - recreating working approach...');
  
  try {
    console.log('🔌 Connecting to Supabase...');
    await prisma.$connect();
    console.log('✅ Connected successfully!');
    
    // Test connection
    console.log('🧪 Testing connection...');
    const result = await prisma.$queryRaw`SELECT 1 as test`;
    console.log('✅ Connection test passed');
    
    // Check if tables exist
    console.log('🔍 Checking existing tables...');
    const tables = await prisma.$queryRaw`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public' 
      AND table_name IN ('popes', 'papal_events', 'papal_achievements')
    `;
    console.log('📋 Existing tables:', tables);
    
    // If tables don't exist, create them
    if (tables.length === 0) {
      console.log('🏗️  Creating tables...');
      
      // Create popes table
      await prisma.$executeRaw`
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
        )
      `;
      
      // Create papal_events table
      await prisma.$executeRaw`
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
        )
      `;
      
      // Create papal_achievements table
      await prisma.$executeRaw`
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
        )
      `;
      
      console.log('✅ Tables created successfully');
    } else {
      console.log('✅ Tables already exist');
    }
    
    // Check if admin user exists
    console.log('👤 Checking admin user...');
    const existingAdmin = await prisma.user.findUnique({
      where: { email: 'ajay@example.com' }
    });
    
    if (!existingAdmin) {
      console.log('👤 Creating admin user...');
      const hashedPassword = await bcrypt.hash('admin123', 12);
      
      const adminUser = await prisma.user.create({
        data: {
          name: 'Ajay Dsouza',
          email: 'ajay@example.com',
          passwordHash: hashedPassword,
          role: 'ADMIN'
        }
      });
      console.log('✅ Admin user created');
    } else {
      console.log('✅ Admin user already exists');
    }
    
    // Clear existing papal data
    console.log('🗑️  Clearing existing papal data...');
    await prisma.papalAchievement.deleteMany();
    await prisma.papalEvent.deleteMany();
    await prisma.pope.deleteMany();
    console.log('✅ Cleared existing data');
    
    // Read and execute the SQL file
    console.log('📖 Reading papal data export...');
    const fs = require('fs');
    const sqlContent = fs.readFileSync('papal-data-export.sql', 'utf8');
    
    // Split into statements and execute
    const statements = sqlContent
      .split(';')
      .map(stmt => stmt.trim())
      .filter(stmt => stmt.length > 0 && !stmt.startsWith('--'));
    
    console.log(`📝 Executing ${statements.length} SQL statements...`);
    
    let successCount = 0;
    let errorCount = 0;
    
    for (let i = 0; i < statements.length; i++) {
      const statement = statements[i];
      try {
        await prisma.$executeRawUnsafe(statement);
        successCount++;
        
        if (successCount % 20 === 0) {
          console.log(`✅ Progress: ${successCount}/${statements.length} statements executed`);
        }
      } catch (error) {
        errorCount++;
        console.error(`❌ Error in statement ${i + 1}: ${error.message}`);
        if (errorCount > 5) {
          console.error('❌ Too many errors, stopping sync');
          break;
        }
      }
    }
    
    // Final verification
    console.log('🔍 Final verification...');
    const finalPopeCount = await prisma.pope.count();
    const finalEventCount = await prisma.papalEvent.count();
    const finalAchievementCount = await prisma.papalAchievement.count();
    
    console.log('🎉 Supabase deployment completed!');
    console.log('📊 Production database now contains:');
    console.log(`   - ${finalPopeCount} popes with detailed biographies`);
    console.log(`   - ${finalEventCount} papal events`);
    console.log(`   - ${finalAchievementCount} papal achievements`);
    console.log(`   - ${successCount}/${statements.length} SQL statements executed successfully`);
    
    // Show sample data
    if (finalPopeCount > 0) {
      const samplePope = await prisma.pope.findFirst({
        include: {
          events: true,
          achievements: true
        }
      });
      
      console.log('\n📋 Sample deployed pope:');
      console.log(`   - Name: ${samplePope.regnalName}`);
      console.log(`   - Papacy: ${samplePope.papacyNumber}`);
      console.log(`   - Biography: ${samplePope.biography ? 'Present' : 'Missing'}`);
      console.log(`   - Events: ${samplePope.events.length}`);
      console.log(`   - Achievements: ${samplePope.achievements.length}`);
    }
    
  } catch (error) {
    console.error('❌ Deployment failed:', error.message);
    if (error.message.includes('Can\'t reach database server')) {
      console.error('💡 Connection issue - please check your Supabase credentials and network');
    }
  } finally {
    await prisma.$disconnect();
  }
}

// Run the deployment
directSupabaseDeploy();
