const { Client } = require('pg');

async function updateMainReflection() {
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
    
    // Update the main "🤔 Reflection" section
    console.log('\n✏️ Updating main Reflection section...');
    
    const newReflectionText = `Dear brothers and sisters in Christ,

Today's Gospel presents us with a powerful lesson about gratitude and faith. Ten lepers were healed, but only one—a foreigner, a Samaritan—returned to give thanks. This story challenges us to examine our own hearts.

I feel we have more to thank Jesus than the leper who was healed by Jesus. Jesus did have pity on us, and gave us himself - by becoming human (to see and imitate him), by sacrificing himself willingly on the Cross (for our sins for making justice happen) and in Holy Mass by becoming Eucharist (bread of life) for us.

We as well as all the humanity should be grateful to Jesus, as he did to each and everyone what no-one, even the most loved one, can do - to be God and die as a friend. But not everyone knows what he did. And we who know may not remember that much as well. 

So may every Sunday, the Eucharist (which itself means thanksgiving too) be a reminder for us to do this. To thank Jesus for what he has done for us!

May the faith in Jesus, save us.

How often do we receive God's blessings and fail to acknowledge them? Like the nine lepers who went on their way, we might be so focused on our own concerns that we forget to return to the source of our healing and joy.

The Samaritan's gratitude was not just a polite "thank you"—it was a recognition of Jesus as Lord and Savior. His faith was complete: he believed in Jesus' power to heal, and he believed in Jesus' authority to save. This is why Jesus said, "Your faith has saved you."

In our own lives, we are constantly receiving God's grace: the gift of life, family, friends, daily bread, and most importantly, the gift of salvation through Jesus Christ. Do we take these gifts for granted, or do we return to give thanks?`;

    // Find and replace the main reflection section
    const reflectionRegex = /<div class="bg-white border border-gray-200 rounded-lg p-8">\s*<h2 class="text-2xl font-bold text-gray-900 mb-6">🤔 Reflection<\/h2>[\s\S]*?<div class="space-y-4 text-gray-700 leading-relaxed">[\s\S]*?<\/div>[\s\S]*?<\/div>/;
    
    const newReflectionHTML = `<div class="bg-white border border-gray-200 rounded-lg p-8">
      <h2 class="text-2xl font-bold text-gray-900 mb-6">🤔 Reflection</h2>
      <div class="space-y-4 text-gray-700 leading-relaxed">
        <p>${newReflectionText}</p>
      </div>
    </div>`;

    content = content.replace(reflectionRegex, newReflectionHTML);
    console.log('✅ Main Reflection section updated');
    
    // Update the prayer section
    console.log('\n✏️ Updating prayer section...');
    const newPrayer = `Heavenly Father, I thank You for the gift of Your Son, Jesus in our lives. Thank you Jesus for what you have done for us.
Open my heart to recognize Your blessings in my life. Help me be like the Samaritan leper to acknowledge what you have done and to love and serve you. Amen.`;

    const prayerRegex = /<div class="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg">[\s\S]*?<p class="text-amber-900 leading-relaxed italic">[\s\S]*?<\/p>[\s\S]*?<\/div>/;
    
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
    
    console.log('\n🎉 Main Reflection section updated successfully!');
    
  } catch (error) {
    console.error('❌ Error updating content:', error);
  } finally {
    await client.end();
    console.log('🔚 Connection closed');
  }
}

updateMainReflection();
