const { Client } = require('pg');

async function testConnection() {
  console.log('🔗 Testing with different hostname formats...');
  
  // Test 1: Original format (with dots)
  console.log('\n📡 Test 1: db.nxjtogogonbztiyympvb.supabase.co');
  const connectionString1 = `postgresql://postgres:ZsxWeTPQYLV3mglX@db.nxjtogogonbztiyympvb.supabase.co:5432/postgres`;
  
  const client1 = new Client({
    connectionString: connectionString1,
    ssl: { rejectUnauthorized: false }
  });

  try {
    await client1.connect();
    console.log('✅ Format 1 works!');
    await client1.end();
    return;
  } catch (error) {
    console.log('❌ Format 1 failed:', error.code);
    await client1.end();
  }

  // Test 2: Direct hostname (from logs)
  console.log('\n📡 Test 2: db-nxjtogogonbztiyympvb');
  const connectionString2 = `postgresql://postgres:ZsxWeTPQYLV3mglX@db-nxjtogogonbztiyympvb:5432/postgres`;
  
  const client2 = new Client({
    connectionString: connectionString2,
    ssl: { rejectUnauthorized: false }
  });

  try {
    await client2.connect();
    console.log('✅ Format 2 works!');
    await client2.end();
    return;
  } catch (error) {
    console.log('❌ Format 2 failed:', error.code);
    await client2.end();
  }

  // Test 3: Try with .supabase.co suffix
  console.log('\n📡 Test 3: db-nxjtogogonbztiyympvb.supabase.co');
  const connectionString3 = `postgresql://postgres:ZsxWeTPQYLV3mglX@db-nxjtogogonbztiyympvb.supabase.co:5432/postgres`;
  
  const client3 = new Client({
    connectionString: connectionString3,
    ssl: { rejectUnauthorized: false }
  });

  try {
    await client3.connect();
    console.log('✅ Format 3 works!');
    await client3.end();
    return;
  } catch (error) {
    console.log('❌ Format 3 failed:', error.code);
    await client3.end();
  }

  console.log('\n❌ All hostname formats failed');
}

testConnection();
