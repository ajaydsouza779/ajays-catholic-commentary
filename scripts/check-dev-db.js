const { Client } = require('pg');
require('dotenv').config();

async function checkDevDatabase() {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });

  try {
    await client.connect();
    console.log('✅ Connected to development database');

    // List all tables
    const tables = await client.query(`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public'
      ORDER BY table_name;
    `);

    console.log('📋 Tables in development database:');
    console.table(tables.rows);

    if (tables.rows.length === 0) {
      console.log('❌ No tables found. Database is empty.');
    } else {
      console.log(`✅ Found ${tables.rows.length} tables`);
    }

  } catch (error) {
    console.error('❌ Error checking database:', error);
    throw error;
  } finally {
    await client.end();
  }
}

checkDevDatabase()
  .then(() => {
    console.log('✅ Database check completed');
    process.exit(0);
  })
  .catch((error) => {
    console.error('❌ Database check failed:', error);
    process.exit(1);
  });
