const { Client } = require('pg');

async function testConnection() {
  const password = "#1Company@123";
  const connectionString = `postgresql://postgres.nxjtogogonbztiyympvb:${password}@aws-1-ap-southeast-1.pooler.supabase.com:5432/postgres`;
  
  console.log('🔗 Testing Supabase connection...');
  console.log(`📡 Connection string: postgresql://postgres.nxjtogogonbztiyympvb:***@aws-1-ap-southeast-1.pooler.supabase.com:5432/postgres`);
  
  const client = new Client({
    connectionString: connectionString
  });

  try {
    await client.connect();
    console.log('✅ Successfully connected to Supabase database!');
    
    // Test query to check if we can read from posts table
    const result = await client.query('SELECT id, title, slug, status FROM posts LIMIT 5');
    console.log('📋 Current posts in database:');
    result.rows.forEach(post => {
      console.log(`  - ${post.title} (${post.slug}) - ${post.status}`);
    });
    
    // Check if reflection column exists
    const reflectionCheck = await client.query(`
      SELECT column_name 
      FROM information_schema.columns 
      WHERE table_name = 'posts' AND column_name = 'reflection'
    `);
    
    if (reflectionCheck.rows.length > 0) {
      console.log('✅ Reflection column exists in posts table');
    } else {
      console.log('❌ Reflection column does not exist in posts table');
    }
    
    // Check guest comment fields
    const guestFieldsCheck = await client.query(`
      SELECT column_name 
      FROM information_schema.columns 
      WHERE table_name = 'comments' AND column_name IN ('guestName', 'guestEmail')
    `);
    
    console.log('📝 Guest comment fields:');
    guestFieldsCheck.rows.forEach(field => {
      console.log(`  - ${field.column_name}`);
    });
    
    console.log('🎉 Database connection test successful!');
    
  } catch (error) {
    console.error('❌ Connection failed:', error.message);
    if (error.message.includes('password authentication failed')) {
      console.log('🔐 The password "#1Company@123" is incorrect');
    } else if (error.message.includes('ENOTFOUND')) {
      console.log('🌐 Network connection issue - check your internet connection');
    } else {
      console.log('🔧 Other error:', error.message);
    }
  } finally {
    await client.end();
  }
}

testConnection();
