const { Client } = require('pg');
require('dotenv').config();

async function checkCommentTable() {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });

  try {
    await client.connect();
    console.log('✅ Connected to development database');

    // Check Comment table structure
    const columns = await client.query(`
      SELECT column_name, data_type, is_nullable 
      FROM information_schema.columns 
      WHERE table_name = 'Comment'
      ORDER BY column_name;
    `);

    console.log('📋 Comment table structure:');
    console.table(columns.rows);

    // Check if guest fields exist
    const guestFields = columns.rows.filter(row => 
      row.column_name === 'guestName' || row.column_name === 'guestEmail'
    );

    if (guestFields.length === 0) {
      console.log('❌ Guest comment fields (guestName, guestEmail) are missing');
    } else {
      console.log('✅ Guest comment fields found:', guestFields.map(f => f.column_name));
    }

  } catch (error) {
    console.error('❌ Error checking Comment table:', error);
    throw error;
  } finally {
    await client.end();
  }
}

checkCommentTable()
  .then(() => {
    console.log('✅ Comment table check completed');
    process.exit(0);
  })
  .catch((error) => {
    console.error('❌ Comment table check failed:', error);
    process.exit(1);
  });
