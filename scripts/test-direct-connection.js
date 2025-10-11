const { Client } = require('pg');

async function testDirectConnection() {
  console.log('🔗 Testing Supabase DIRECT connection (not pooler)...');
  
  // Use direct connection instead of session pooler
  const connectionString = `postgresql://postgres.nxjtogogonbztiyympvb:ZsxWeTPQYLV3mglX@db.nxjtogogonbztiyympvb.supabase.co:5432/postgres`;
  
  console.log('📡 Connection string:', connectionString.replace(/:[^@]+@/, ':***@'));
  
  const client = new Client({
    connectionString: connectionString
  });

  try {
    console.log('⏳ Attempting direct connection...');
    await client.connect();
    console.log('✅ Direct connection successful!');
    
    // Test a simple query
    const result = await client.query('SELECT NOW() as current_time');
    console.log('📊 Query result:', result.rows[0]);
    
    await client.end();
    console.log('🔚 Connection closed successfully');
    
  } catch (error) {
    console.error('❌ Direct connection failed:');
    console.error('Error code:', error.code);
    console.error('Error message:', error.message);
    
    await client.end();
  }
}

testDirectConnection();
