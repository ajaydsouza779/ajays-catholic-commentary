const { Client } = require('pg');
const fs = require('fs');
require('dotenv').config();

async function setupDevDatabase() {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });

  try {
    await client.connect();
    console.log('✅ Connected to development database');

    // Read the SQL file
    const sqlContent = fs.readFileSync('sql/dev_database_setup.sql', 'utf8');
    
    // Add the guest comment fields to the comments table creation
    const updatedSql = sqlContent.replace(
      /CREATE TABLE comments \(/,
      `CREATE TABLE comments (
  id TEXT PRIMARY KEY DEFAULT gen_random_uuid(),
  content TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'PENDING',
  "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  "updatedAt" TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  "postId" TEXT NOT NULL,
  "authorId" TEXT,
  "parentId" TEXT,
  "guestName" TEXT,
  "guestEmail" TEXT,`
    );

    // Execute the SQL
    console.log('📝 Creating database schema...');
    await client.query(updatedSql);
    console.log('✅ Database schema created successfully!');

    // Verify the comments table has the guest fields
    const result = await client.query(`
      SELECT column_name, data_type, is_nullable 
      FROM information_schema.columns 
      WHERE table_name = 'comments' 
      AND column_name IN ('guestName', 'guestEmail', 'authorId')
      ORDER BY column_name;
    `);

    console.log('📋 Comments table structure:');
    console.table(result.rows);

    console.log('🎉 Development database setup complete with guest comment support!');

  } catch (error) {
    console.error('❌ Error setting up development database:', error);
    throw error;
  } finally {
    await client.end();
  }
}

setupDevDatabase()
  .then(() => {
    console.log('✅ Development database setup completed successfully');
    process.exit(0);
  })
  .catch((error) => {
    console.error('❌ Development database setup failed:', error);
    process.exit(1);
  });
