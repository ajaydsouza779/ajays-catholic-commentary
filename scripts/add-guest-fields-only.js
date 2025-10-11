const { Client } = require('pg');
require('dotenv').config();

async function addGuestFieldsOnly() {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });

  try {
    await client.connect();
    console.log('✅ Connected to development database');

    // Check if comments table exists
    const tableCheck = await client.query(`
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_name = 'comments'
      );
    `);

    if (!tableCheck.rows[0].exists) {
      console.log('❌ Comments table does not exist. Please set up the database first.');
      return;
    }

    // Add guestName column if it doesn't exist
    try {
      await client.query('ALTER TABLE comments ADD COLUMN IF NOT EXISTS "guestName" TEXT;');
      console.log('✅ Added guestName column');
    } catch (error) {
      if (error.code === '42701') {
        console.log('ℹ️ guestName column already exists');
      } else {
        throw error;
      }
    }

    // Add guestEmail column if it doesn't exist
    try {
      await client.query('ALTER TABLE comments ADD COLUMN IF NOT EXISTS "guestEmail" TEXT;');
      console.log('✅ Added guestEmail column');
    } catch (error) {
      if (error.code === '42701') {
        console.log('ℹ️ guestEmail column already exists');
      } else {
        throw error;
      }
    }

    // Make authorId nullable if it isn't already
    try {
      await client.query('ALTER TABLE comments ALTER COLUMN "authorId" DROP NOT NULL;');
      console.log('✅ Made authorId nullable');
    } catch (error) {
      if (error.code === '42804') {
        console.log('ℹ️ authorId is already nullable');
      } else {
        console.log('⚠️ Could not make authorId nullable:', error.message);
      }
    }

    // Verify the changes
    const result = await client.query(`
      SELECT column_name, data_type, is_nullable 
      FROM information_schema.columns 
      WHERE table_name = 'comments' 
      AND column_name IN ('guestName', 'guestEmail', 'authorId')
      ORDER BY column_name;
    `);

    console.log('📋 Comments table structure:');
    console.table(result.rows);

    console.log('🎉 Guest comment fields added successfully!');

  } catch (error) {
    console.error('❌ Error adding guest fields:', error);
    throw error;
  } finally {
    await client.end();
  }
}

addGuestFieldsOnly()
  .then(() => {
    console.log('✅ Script completed successfully');
    process.exit(0);
  })
  .catch((error) => {
    console.error('❌ Script failed:', error);
    process.exit(1);
  });
