const { Client } = require('pg');

async function testConnection(connectionString, description) {
  console.log(`\n📡 Testing: ${description}`);
  console.log(`Connection: ${connectionString.replace(/:[^@]+@/, ':***@')}`);
  
  const client = new Client({
    connectionString: connectionString,
    ssl: { rejectUnauthorized: false }
  });

  try {
    await client.connect();
    console.log('✅ Connection successful!');
    
    // Test a simple query
    const result = await client.query('SELECT NOW() as current_time');
    console.log('📊 Database time:', result.rows[0].current_time);
    
    await client.end();
    return true;
  } catch (error) {
    console.log(`❌ Failed: ${error.code} - ${error.message}`);
    await client.end();
    return false;
  }
}

async function testAllConnections() {
  console.log('🔗 Testing all Supabase connection strings...');
  
  const connections = [
    {
      string: `postgresql://postgres:ZsxWeTPQYLV3mglX@db.nxjtogogonbztiyympvb.supabase.co:5432/postgres`,
      description: 'Direct connection (port 5432)'
    },
    {
      string: `postgresql://postgres.nxjtogogonbztiyympvb:ZsxWeTPQYLV3mglX@aws-1-ap-southeast-1.pooler.supabase.com:6543/postgres`,
      description: 'Session pooler (port 6543)'
    },
    {
      string: `postgresql://postgres.nxjtogogonbztiyympvb:ZsxWeTPQYLV3mglX@aws-1-ap-southeast-1.pooler.supabase.com:5432/postgres`,
      description: 'Session pooler (port 5432)'
    }
  ];

  for (const conn of connections) {
    const success = await testConnection(conn.string, conn.description);
    if (success) {
      console.log(`\n🎉 WORKING CONNECTION FOUND: ${conn.description}`);
      console.log(`Use this in Vercel: ${conn.string}`);
      return conn.string;
    }
  }

  console.log('\n❌ All connection strings failed');
  return null;
}

testAllConnections();
