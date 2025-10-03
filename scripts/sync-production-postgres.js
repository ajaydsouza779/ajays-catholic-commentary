#!/usr/bin/env node

// Production sync script using PostgreSQL schema
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

// Create Prisma client with PostgreSQL schema
const prisma = new PrismaClient({
  datasources: {
    db: {
      url: "postgresql://postgres:%231Company%40123@db.nxjtogogonbztiyympvb.supabase.co:5432/postgres"
    }
  }
});

async function syncProductionPostgres() {
  console.log('🔄 Syncing to production PostgreSQL database...');
  
  try {
    // Test connection
    console.log('🔌 Testing database connection...');
    await prisma.$connect();
    console.log('✅ Connected to production database');
    
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
    
    // Check existing papal data
    console.log('👑 Checking papal data...');
    const existingPopes = await prisma.pope.findMany();
    
    if (existingPopes.length === 0) {
      console.log('📝 Creating sample papal data...');
      
      // Create Saint Peter
      const saintPeter = await prisma.pope.create({
        data: {
          name: "Peter",
          regnalName: "Saint Peter",
          birthName: "Simon Peter",
          papacyStart: new Date(Date.UTC(30, 0, 1)),
          papacyEnd: new Date(Date.UTC(67, 0, 1)),
          papacyNumber: 1,
          nationality: "Bethsaida of Galilee",
          biography: "Saint Peter, originally named Simon, was one of the twelve apostles of Jesus Christ. He was a fisherman from Bethsaida and became the first Pope and Bishop of Rome. Jesus gave him the name 'Peter' (meaning 'rock') and said 'Upon this rock I will build my church.' Peter was crucified upside down in Rome during the persecution under Emperor Nero.",
          historicalContext: "Peter's papacy is foundational to the Catholic Church. He was personally chosen by Jesus Christ and is considered the first Pope. His martyrdom in Rome established the tradition of papal succession. Historical evidence comes from the New Testament, early Church fathers, and archaeological evidence of his burial site under St. Peter's Basilica.",
          references: JSON.stringify([
            {
              title: "Matthew 16:18-19 - Jesus' Promise to Peter",
              url: "https://www.biblegateway.com/passage/?search=Matthew+16%3A18-19&version=NIV",
              type: "Scripture"
            },
            {
              title: "Vatican Official Biography of St. Peter",
              url: "https://www.vatican.va/content/vatican/en/holy-father/pietro.html",
              type: "Official"
            }
          ]),
          isCurrent: false
        }
      });
      
      // Create Pope Francis
      const popeFrancis = await prisma.pope.create({
        data: {
          name: "Francis",
          regnalName: "Pope Francis",
          birthName: "Jorge Mario Bergoglio",
          papacyStart: new Date(Date.UTC(2013, 2, 13)),
          papacyEnd: new Date(Date.UTC(2025, 3, 21)),
          papacyNumber: 266,
          nationality: "Argentine (Buenos Aires)",
          previousOffice: "Archbishop of Buenos Aires",
          biography: "Pope Francis, born Jorge Mario Bergoglio in Buenos Aires, Argentina, is the first pope from the Americas and the first Jesuit pope. He was Archbishop of Buenos Aires before his election in 2013. Known for his humility, concern for the poor, and environmental advocacy, he has emphasized mercy, dialogue, and Church reform throughout his papacy.",
          historicalContext: "Pope Francis represents a significant shift in papal direction, emphasizing humility, social justice, and environmental stewardship. His election as the first pope from the Americas marked a historic moment for the global Church. He has been particularly vocal about climate change, economic inequality, and the need for Church reform and transparency.",
          references: JSON.stringify([
            {
              title: "Vatican Official Biography",
              url: "https://www.vatican.va/content/francesco/en/biography/documents/papa-francesco-biografia-bergoglio.html",
              type: "Official"
            },
            {
              title: "Encyclical Laudato Si'",
              url: "https://www.vatican.va/content/francesco/en/encyclicals/documents/papa-francesco_20150524_enciclica-laudato-si.html",
              type: "Document"
            }
          ]),
          isCurrent: false
        }
      });
      
      // Create Pope Leo XIV (Current)
      const popeLeoXIV = await prisma.pope.create({
        data: {
          name: "Leo XIV",
          regnalName: "Pope Leo XIV",
          birthName: "Robert Francis Prevost",
          papacyStart: new Date(Date.UTC(2025, 4, 8)),
          papacyEnd: null,
          papacyNumber: 267,
          nationality: "American (Chicago)",
          previousOffice: "Prefect of the Dicastery for Bishops",
          biography: "Pope Leo XIV, born Robert Francis Prevost in Chicago, is the first American pope in the history of the Catholic Church. Formerly the Prefect of the Dicastery for Bishops, he was elected in 2025 following the death of Pope Francis. Known for his pastoral approach and commitment to Church renewal, he represents a new chapter in papal history.",
          historicalContext: "Pope Leo XIV's election as the first American pope marks a historic milestone for the Catholic Church. His background as a missionary in Peru and his role in the Vatican's bishop selection process prepared him for the papacy. His election reflects the Church's continued globalization and the growing influence of the American Catholic community.",
          references: JSON.stringify([
            {
              title: "Vatican Official Biography",
              url: "https://www.vatican.va/content/vatican/en/holy-father/leone-xiv.html",
              type: "Official"
            }
          ]),
          isCurrent: true
        }
      });
      
      console.log('✅ Sample papal data created in production');
      console.log(`   - Saint Peter (1st Pope)`);
      console.log(`   - Pope Francis (266th Pope)`);
      console.log(`   - Pope Leo XIV (267th Pope - Current)`);
      
    } else {
      console.log(`✅ Production already has ${existingPopes.length} popes`);
    }
    
    // Final summary
    const popes = await prisma.pope.findMany();
    const users = await prisma.user.findMany();
    
    console.log('🎉 Production sync completed successfully!');
    console.log('📊 Production database now contains:');
    console.log(`   - ${popes.length} popes with detailed biographies`);
    console.log(`   - ${users.length} users`);
    console.log('   - All papal data synced to production server');
    
  } catch (error) {
    console.error('❌ Error syncing to production:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

// Run the sync
syncProductionPostgres()
  .catch((error) => {
    console.error('❌ Sync failed:', error);
    process.exit(1);
  });
