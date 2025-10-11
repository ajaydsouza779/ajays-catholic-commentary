const { Client } = require('pg');

async function testConnection() {
  // Test with the password from Vercel
  const connectionString1 = `postgresql://postgres.nxjtogogonbztiyympvb:ZsxWeTPQYLV3mglX@aws-1-ap-southeast-1.pooler.supabase.com:5432/postgres`;
  
  // Test with the known working password
  const connectionString2 = `postgresql://postgres.nxjtogogonbztiyympvb:#1Company@123@aws-1-ap-southeast-1.pooler.supabase.com:5432/postgres`;
  
  console.log('🔗 Testing Supabase connections...');
  
  // Test 1: Vercel password
  console.log('\n📡 Testing with Vercel password...');
  const client1 = new Client({
    connectionString: connectionString1
  });

  try {
    await client1.connect();
    console.log('✅ Vercel password connection successful!');
    await client1.end();
  } catch (error) {
    console.error('❌ Vercel password connection failed:', error.message);
    await client1.end();
  }

  // Test 2: Known working password
  console.log('\n📡 Testing with known working password...');
  const client2 = new Client({
    connectionString: connectionString2
  });

  try {
    await client2.connect();
    console.log('✅ Known password connection successful!');
    await client2.end();
  } catch (error) {
    console.error('❌ Known password connection failed:', error.message);
    await client2.end();
  }
}

testConnection();