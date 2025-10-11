const { Client } = require('pg');

async function reorderReflectionSections() {
  console.log('🔗 Connecting to Supabase...');
  
  const connectionString = `postgresql://postgres.nxjtogogonbztiyympvb:ZsxWeTPQYLV3mglX@aws-1-ap-southeast-1.pooler.supabase.com:6543/postgres`;
  
  const client = new Client({
    connectionString: connectionString,
    ssl: { rejectUnauthorized: false }
  });

  try {
    await client.connect();
    console.log('✅ Connected to Supabase successfully!');
    
    // Get current content
    console.log('\n📖 Fetching current post...');
    const currentPost = await client.query(`
      SELECT content 
      FROM posts 
      WHERE slug = 'sunday-gospel-reflection-grateful-samaritan-october-12-2025'
    `);
    
    let content = currentPost.rows[0].content;
    console.log('📝 Current content length:', content.length);
    
    // Step 1: Remove the main "🤔 Reflection" section completely
    console.log('\n🗑️ Removing main Reflection section...');
    const reflectionRegex = /<div class="bg-white border border-gray-200 rounded-lg p-8">\s*<h2 class="text-2xl font-bold text-gray-900 mb-6">🤔 Reflection<\/h2>[\s\S]*?<\/div>/;
    content = content.replace(reflectionRegex, '');
    console.log('✅ Main Reflection section removed');
    
    // Step 2: Remove the "My Personal Reflection" section from its current location
    console.log('\n📦 Extracting My Personal Reflection section...');
    const personalReflectionRegex = /<div class="max-w-4xl mx-auto mt-8 p-8 bg-amber-50 border-l-4 border-amber-500 rounded-r-lg shadow-md">[\s\S]*?<\/div>/;
    const personalReflectionMatch = content.match(personalReflectionRegex);
    
    if (personalReflectionMatch) {
      const personalReflectionHTML = personalReflectionMatch[0];
      content = content.replace(personalReflectionRegex, '');
      console.log('✅ My Personal Reflection section extracted');
      
      // Step 3: Insert the "My Personal Reflection" section in the place where the main reflection was
      console.log('\n📍 Inserting My Personal Reflection in main reflection location...');
      
      // Find the location after "Personal Application" section
      const insertLocation = content.indexOf('<div class="bg-white border border-gray-200 rounded-lg p-8">');
      if (insertLocation !== -1) {
        // Insert before the "Questions for Reflection" section
        const beforeQuestions = content.substring(0, insertLocation);
        const afterQuestions = content.substring(insertLocation);
        
        content = beforeQuestions + personalReflectionHTML + '\n\n' + afterQuestions;
        console.log('✅ My Personal Reflection section moved to main reflection location');
      }
    }
    
    // Step 4: Update the database
    console.log('\n💾 Updating database...');
    await client.query(`
      UPDATE posts 
      SET content = $1, "updatedAt" = NOW()
      WHERE slug = 'sunday-gospel-reflection-grateful-samaritan-october-12-2025'
    `, [content]);
    
    console.log('✅ Database updated successfully!');
    
    // Verify the update
    console.log('\n🔍 Verifying update...');
    const updatedPost = await client.query(`
      SELECT 
        id, 
        title, 
        LENGTH(content) as content_length,
        "updatedAt"
      FROM posts 
      WHERE slug = 'sunday-gospel-reflection-grateful-samaritan-october-12-2025'
    `);
    
    console.log('📊 Updated post info:', {
      id: updatedPost.rows[0].id,
      title: updatedPost.rows[0].title,
      content_length: updatedPost.rows[0].content_length,
      updated_at: updatedPost.rows[0].updatedAt
    });
    
    console.log('\n🎉 Reflection sections reordered successfully!');
    console.log('✅ Main "🤔 Reflection" section removed');
    console.log('✅ "My Personal Reflection" moved to main reflection location');
    
  } catch (error) {
    console.error('❌ Error updating content:', error);
  } finally {
    await client.end();
    console.log('🔚 Connection closed');
  }
}

reorderReflectionSections();
