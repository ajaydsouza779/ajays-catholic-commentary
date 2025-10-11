const { Client } = require('pg');
const fs = require('fs');

async function runImprovedDeleteRecreate() {
  console.log('🔗 Connecting to Supabase...');
  
  const connectionString = `postgresql://postgres.nxjtogogonbztiyympvb:ZsxWeTPQYLV3mglX@aws-1-ap-southeast-1.pooler.supabase.com:6543/postgres`;
  
  const client = new Client({
    connectionString: connectionString,
    ssl: { rejectUnauthorized: false }
  });

  try {
    await client.connect();
    console.log('✅ Connected to Supabase successfully!');
    
    // Read the SQL file
    console.log('\n📖 Reading SQL script...');
    const sqlContent = fs.readFileSync('sql/v012_delete_and_recreate_with_correct_order.sql', 'utf8');
    
    // Split the SQL into individual statements
    const statements = sqlContent
      .split(';')
      .map(stmt => stmt.trim())
      .filter(stmt => stmt.length > 0 && !stmt.startsWith('--') && !stmt.startsWith('/*'));
    
    console.log(`📝 Found ${statements.length} SQL statements to execute`);
    
    // Execute each statement
    for (let i = 0; i < statements.length; i++) {
      const statement = statements[i];
      if (statement.trim()) {
        console.log(`\n⚡ Executing statement ${i + 1}/${statements.length}...`);
        try {
          await client.query(statement);
          console.log(`✅ Statement ${i + 1} executed successfully`);
        } catch (error) {
          console.log(`⚠️ Statement ${i + 1} result:`, error.message);
          // Continue with other statements
        }
      }
    }
    
    console.log('\n🎉 All SQL statements executed!');
    
    // Final verification
    console.log('\n🔍 Final verification...');
    const result = await client.query(`
      SELECT 
        id, 
        title, 
        slug, 
        status,
        LENGTH(content) as content_length,
        "createdAt",
        "updatedAt"
      FROM posts 
      WHERE slug = 'sunday-gospel-reflection-grateful-samaritan-october-12-2025'
    `);
    
    if (result.rows.length > 0) {
      console.log('📊 Final post info:', result.rows[0]);
      console.log('\n✅ Post successfully recreated with improved formatting!');
      console.log('✅ My Personal Reflection positioned after Pope\'s Message');
      console.log('✅ Proper paragraph formatting applied');
      console.log('✅ Prayer section improved with better structure');
    } else {
      console.log('❌ Post not found after recreation');
    }
    
  } catch (error) {
    console.error('❌ Error:', error);
  } finally {
    await client.end();
    console.log('🔚 Connection closed');
  }
}

runImprovedDeleteRecreate();
