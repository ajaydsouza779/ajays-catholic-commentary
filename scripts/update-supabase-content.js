const { Client } = require('pg');

async function updateSupabaseContent() {
  console.log('🔗 Connecting to Supabase...');
  
  const connectionString = `postgresql://postgres.nxjtogogonbztiyympvb:ZsxWeTPQYLV3mglX@aws-1-ap-southeast-1.pooler.supabase.com:6543/postgres`;
  
  const client = new Client({
    connectionString: connectionString,
    ssl: { rejectUnauthorized: false }
  });

  try {
    await client.connect();
    console.log('✅ Connected to Supabase successfully!');
    
    // First, let's see the current content
    console.log('\n📖 Fetching current post...');
    const currentPost = await client.query(`
      SELECT id, title, slug, LENGTH(content) as content_length
      FROM posts 
      WHERE slug = 'sunday-gospel-reflection-grateful-samaritan-october-12-2025'
    `);
    
    if (currentPost.rows.length === 0) {
      console.log('❌ Post not found!');
      return;
    }
    
    console.log('📄 Current post:', {
      id: currentPost.rows[0].id,
      title: currentPost.rows[0].title,
      content_length: currentPost.rows[0].content_length
    });
    
    // Get the full content
    const fullPost = await client.query(`
      SELECT content 
      FROM posts 
      WHERE slug = 'sunday-gospel-reflection-grateful-samaritan-october-12-2025'
    `);
    
    let content = fullPost.rows[0].content;
    console.log('📝 Current content length:', content.length);
    
    // Update reflection section
    console.log('\n✏️ Updating reflection section...');
    const newReflection = `I feel we have more to thank Jesus than the leaper who was healed by Jesus. Jesus did have pity on us, and gave us himself - by becoming human (to see and imitate him), by sacrificing himself willing on the Cross (for our sins for making justice happen) and in Holy Mass by becoming Eucharist (bread of life) for us.

We as well as all the humanity should be grateful to Jesus, as he did to each and everyone what no-one, even the most loved one, can do - to be God and die as a friend. But not everyone knows what he did. And we who know may not remember that much has well. 

So may every Sunday, the Eucharist (which itself means thanksgiving too) be a reminder for us to do this. To thank Jesus for what he has done for us!

May the faith in Jesus, save us.`;

    // Find and replace the reflection section
    const reflectionRegex = /<div[^>]*class="max-w-4xl mx-auto mt-8 p-8 bg-amber-50 border-l-4 border-amber-500 rounded-r-lg shadow-md">[\s\S]*?<p class="text-gray-800 leading-relaxed mb-4">[\s\S]*?<\/p>[\s\S]*?<\/div>/;
    
    const newReflectionHTML = `<div class="max-w-4xl mx-auto mt-8 p-8 bg-amber-50 border-l-4 border-amber-500 rounded-r-lg shadow-md">
  <h3 class="text-2xl font-serif text-amber-900 mb-4">🙏 My Personal Reflection</h3>
  <p class="text-gray-800 leading-relaxed mb-4">
    ${newReflection}
  </p>
</div>`;

    content = content.replace(reflectionRegex, newReflectionHTML);
    console.log('✅ Reflection section updated');
    
    // Update prayer section
    console.log('\n✏️ Updating prayer section...');
    const newPrayer = `Heavenly Father, I thank You for the gift of Your Son, Jesus in our lives. Thank you Jesus for what you have done for us.
Open my heart to recognize Your blessings in my life. Help me be like the Samaritan leper to acknowledge what you have done and to love and serve you. Amen.`;

    const prayerRegex = /<div[^>]*class="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg">[\s\S]*?<p class="text-amber-900 leading-relaxed italic">[\s\S]*?<\/p>[\s\S]*?<\/div>/;
    
    const newPrayerHTML = `<div class="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg">
  <p class="text-amber-900 leading-relaxed italic">${newPrayer}</p>
</div>`;

    content = content.replace(prayerRegex, newPrayerHTML);
    console.log('✅ Prayer section updated');
    
    // Update the database
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
      SELECT id, title, LENGTH(content) as content_length, "updatedAt"
      FROM posts 
      WHERE slug = 'sunday-gospel-reflection-grateful-samaritan-october-12-2025'
    `);
    
    console.log('📊 Updated post info:', {
      id: updatedPost.rows[0].id,
      title: updatedPost.rows[0].title,
      content_length: updatedPost.rows[0].content_length,
      updated_at: updatedPost.rows[0].updatedAt
    });
    
    console.log('\n🎉 Update completed successfully!');
    
  } catch (error) {
    console.error('❌ Error updating content:', error);
  } finally {
    await client.end();
    console.log('🔚 Connection closed');
  }
}

updateSupabaseContent();
