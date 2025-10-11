const { Client } = require('pg');

async function testConnection() {
  console.log('🔗 Testing Supabase connection locally...');
  
  // Test with the current password
  const connectionString = `postgresql://postgres.nxjtogogonbztiyympvb:ZsxWeTPQYLV3mglX@aws-1-ap-southeast-1.pooler.supabase.com:5432/postgres`;
  
  console.log('📡 Connection string:', connectionString.replace(/:[^@]+@/, ':***@'));
  
  const client = new Client({
    connectionString: connectionString
  });

  try {
    console.log('⏳ Attempting connection...');
    await client.connect();
    console.log('✅ Connection successful!');
    
    // Test a simple query
    const result = await client.query('SELECT NOW() as current_time');
    console.log('📊 Query result:', result.rows[0]);
    
    await client.end();
    console.log('🔚 Connection closed successfully');
    
  } catch (error) {
    console.error('❌ Connection failed:');
    console.error('Error code:', error.code);
    console.error('Error message:', error.message);
    console.error('Full error:', error);
    
    // Check if it's a network issue
    if (error.code === 'ENOTFOUND' || error.code === 'ECONNREFUSED') {
      console.log('\n🌐 This appears to be a network connectivity issue.');
      console.log('Possible causes:');
      console.log('1. Supabase project is paused');
      console.log('2. Network firewall blocking connection');
      console.log('3. Supabase service outage');
      console.log('4. Incorrect hostname or port');
    }
    
    await client.end();
  }
}

testConnection();
