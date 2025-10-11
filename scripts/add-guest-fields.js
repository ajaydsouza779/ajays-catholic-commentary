const { Client } = require('pg');
require('dotenv').config();

async function addGuestFields() {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });

  try {
    await client.connect();
    console.log('✅ Connected to database');

    // Add guestName column
    await client.query('ALTER TABLE comments ADD COLUMN IF NOT EXISTS "guestName" TEXT;');
    console.log('✅ Added guestName column');

    // Add guestEmail column
    await client.query('ALTER TABLE comments ADD COLUMN IF NOT EXISTS "guestEmail" TEXT;');
    console.log('✅ Added guestEmail column');

    // Verify the changes
    const result = await client.query(`
      SELECT column_name, data_type, is_nullable 
      FROM information_schema.columns 
      WHERE table_name = 'comments' 
      AND column_name IN ('guestName', 'guestEmail', 'authorId')
      ORDER BY column_name;
    `);

    console.log('📋 Current comments table structure:');
    console.table(result.rows);

    console.log('🎉 Guest comment fields added successfully!');

  } catch (error) {
    console.error('❌ Error adding guest fields:', error);
    throw error;
  } finally {
    await client.end();
  }
}

addGuestFields()
  .then(() => {
    console.log('✅ Script completed successfully');
    process.exit(0);
  })
  .catch((error) => {
    console.error('❌ Script failed:', error);
    process.exit(1);
  });
