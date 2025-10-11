const { Client } = require('pg');

async function testDirectConnection() {
  console.log('🔗 Testing Supabase DIRECT connection...');
  
  // Use the exact connection string from Supabase dashboard
  const connectionString = `postgresql://postgres:ZsxWeTPQYLV3mglX@db.nxjtogogonbztiyympvb.supabase.co:5432/postgres`;
  
  console.log('📡 Testing connection to:', 'db.nxjtogogonbztiyympvb.supabase.co:5432');
  
  const client = new Client({
    connectionString: connectionString,
    ssl: { rejectUnauthorized: false } // Supabase requires SSL
  });

  try {
    console.log('⏳ Attempting connection...');
    await client.connect();
    console.log('✅ Direct connection successful!');
    
    // Test a simple query
    const result = await client.query('SELECT NOW() as current_time, version() as pg_version');
    console.log('📊 Database info:', result.rows[0]);
    
    // Test if our tables exist
    const tablesResult = await client.query(`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public' 
      AND table_name IN ('posts', 'users', 'comments')
      ORDER BY table_name
    `);
    console.log('📋 Available tables:', tablesResult.rows.map(row => row.table_name));
    
    await client.end();
    console.log('🔚 Connection closed successfully');
    
  } catch (error) {
    console.error('❌ Direct connection failed:');
    console.error('Error code:', error.code);
    console.error('Error message:', error.message);
    
    if (error.code === 'ENOTFOUND') {
      console.log('\n🌐 DNS Resolution Failed');
      console.log('This means the hostname "db.nxjtogogonbztiyympvb.supabase.co" cannot be found.');
      console.log('Possible causes:');
      console.log('1. Supabase project is paused or deleted');
      console.log('2. Incorrect project reference');
      console.log('3. Network connectivity issues');
    } else if (error.code === 'ECONNREFUSED') {
      console.log('\n🚫 Connection Refused');
      console.log('The host is reachable but refusing connections.');
      console.log('Possible causes:');
      console.log('1. Supabase project is paused');
      console.log('2. Database service is down');
      console.log('3. Firewall blocking connections');
    } else if (error.message.includes('password authentication failed')) {
      console.log('\n🔐 Authentication Failed');
      console.log('The password is incorrect or the user does not exist.');
    }
    
    await client.end();
  }
}

testDirectConnection();
