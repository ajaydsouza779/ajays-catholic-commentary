#!/usr/bin/env node

// Direct deployment script to Supabase production database
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

// Use the correct Supabase pooler connection string
const prisma = new PrismaClient({
  datasources: {
    db: {
      url: "postgresql://postgres.nxjtogogonbztiyympvb:%231Company%40123@aws-1-ap-southeast-1.pooler.supabase.com:5432/postgres"
    }
  }
});

async function deployToSupabase() {
  console.log('🚀 Deploying papal data to Supabase production...');
  
  try {
    // Test connection
    console.log('🔌 Testing Supabase connection...');
    await prisma.$connect();
    console.log('✅ Connected to Supabase production database');
    
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
    console.log('✅ Cleared existing papal data');
    
    // Read the SQL export file
    console.log('📖 Reading papal data export...');
    const fs = require('fs');
    const sqlContent = fs.readFileSync('papal-data-export.sql', 'utf8');
    
    // Split into individual statements
    const statements = sqlContent
      .split(';')
      .map(stmt => stmt.trim())
      .filter(stmt => stmt.length > 0 && !stmt.startsWith('--'));
    
    console.log(`📝 Found ${statements.length} SQL statements to execute`);
    
    // Execute each statement
    let executed = 0;
    for (const statement of statements) {
      try {
        await prisma.$executeRawUnsafe(statement);
        executed++;
        if (executed % 20 === 0) {
          console.log(`✅ Executed ${executed}/${statements.length} statements`);
        }
      } catch (error) {
        console.error(`❌ Error executing statement: ${statement.substring(0, 100)}...`);
        console.error(`   Error: ${error.message}`);
      }
    }
    
    // Verify the deployment
    console.log('🔍 Verifying deployment...');
    const popeCount = await prisma.pope.count();
    const eventCount = await prisma.papalEvent.count();
    const achievementCount = await prisma.papalAchievement.count();
    
    console.log('🎉 Supabase deployment completed!');
    console.log('📊 Production database now contains:');
    console.log(`   - ${popeCount} popes with detailed biographies`);
    console.log(`   - ${eventCount} papal events`);
    console.log(`   - ${achievementCount} papal achievements`);
    console.log(`   - ${executed}/${statements.length} SQL statements executed successfully`);
    
    // Show sample data
    const samplePope = await prisma.pope.findFirst({
      include: {
        events: true,
        achievements: true
      }
    });
    
    if (samplePope) {
      console.log('\n📋 Sample deployed pope:');
      console.log(`   - Name: ${samplePope.regnalName}`);
      console.log(`   - Papacy: ${samplePope.papacyNumber}`);
      console.log(`   - Biography length: ${samplePope.biography ? samplePope.biography.length : 0} characters`);
      console.log(`   - Events: ${samplePope.events.length}`);
      console.log(`   - Achievements: ${samplePope.achievements.length}`);
    }
    
    // Show some key popes
    const keyPopes = await prisma.pope.findMany({
      where: {
        papacyNumber: {
          in: [1, 176, 266, 267] // Saint Peter, Innocent III, Francis, Leo XIV
        }
      },
      orderBy: {
        papacyNumber: 'asc'
      }
    });
    
    console.log('\n👑 Key popes deployed:');
    for (const pope of keyPopes) {
      console.log(`   - ${pope.regnalName} (${pope.papacyNumber}): ${pope.biography ? 'Detailed biography' : 'Basic info'}`);
    }
    
  } catch (error) {
    console.error('❌ Error during Supabase deployment:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

// Run the deployment
deployToSupabase()
  .catch((error) => {
    console.error('❌ Supabase deployment failed:', error);
    process.exit(1);
  });
