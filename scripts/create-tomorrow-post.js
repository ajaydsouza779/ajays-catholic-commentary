#!/usr/bin/env node

// Create Tomorrow's Sunday Gospel Reflection Post
const { PrismaClient } = require('@prisma/client');
const { v4: uuidv4 } = require('crypto');

async function createTomorrowPost() {
  console.log('📖 Creating Tomorrow\'s Sunday Gospel Reflection');
  console.log('===============================================\n');

  try {
    const prisma = new PrismaClient();
    await prisma.$connect();

    console.log('✅ Connected to local database');

    // Generate new IDs
    const postId = `cm${Math.random().toString(36).substr(2, 15)}`;
    const categoryId = 'cmgo3e05b00028zpb711xx5gm'; // Gospel Reflection category
    const tagIds = [
      'cmgakgntk00058zao9ge2u7uk', // Gospel tag
      'cmgakgnth00048zaorf9wt2ii', // Prayer tag
      'cmgjt6myp00028zvnvc6s8kyt'  // Gratitude tag
    ];
    const authorId = 'cmgakgoim00078zao1zx13drd'; // Your author ID

    // Tomorrow's date
    const tomorrow = new Date('2025-10-19');
    const tomorrowFormatted = tomorrow.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });

    // Create the new post
    const newPost = {
      id: postId,
      title: 'Sunday Gospel Reflection: The Greatest Commandment (Mark 12:28-34)',
      slug: 'sunday-gospel-reflection-greatest-commandment-october-19-2025',
      content: `
<div class="max-w-4xl mx-auto">
  <h2 class="text-3xl font-bold text-gray-900 mb-6">📖 Sunday Readings - ${tomorrowFormatted}</h2>
  <p class="text-lg text-gray-600 mb-8">29th Sunday in Ordinary Time</p>
  
  <div class="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
    <h3 class="text-xl font-semibold text-blue-900 mb-4">Liturgical Readings</h3>
    <div class="space-y-2">
      <p><strong class="text-blue-800">First Reading:</strong> <span class="text-gray-700">Exodus 22:20-26</span></p>
      <p><strong class="text-blue-800">Responsorial Psalm:</strong> <span class="text-gray-700">Psalm 18:2-3, 3-4, 47, 51</span></p>
      <p><strong class="text-blue-800">Second Reading:</strong> <span class="text-gray-700">1 Thessalonians 1:5c-10</span></p>
      <p><strong class="text-blue-800">Gospel:</strong> <span class="text-gray-700">Mark 12:28-34</span></p>
    </div>
  </div>

  <div class="bg-white border border-gray-200 rounded-lg p-8 mb-8">
    <h2 class="text-2xl font-bold text-gray-900 mb-4">📜 Gospel Reading: Mark 12:28-34</h2>
    <div class="bg-gray-50 p-6 rounded-lg italic text-gray-700 leading-relaxed">
      <p class="mb-4">One of the scribes came to Jesus and asked him, "Which is the first of all the commandments?"</p>
      <p class="mb-4">Jesus replied, "The first is this: Hear, O Israel! The Lord our God is Lord alone! You shall love the Lord your God with all your heart, with all your soul, with all your mind, and with all your strength."</p>
      <p class="mb-4">"The second is this: You shall love your neighbor as yourself. There is no other commandment greater than these."</p>
      <p class="mb-4">The scribe said to him, "Well said, teacher. You are right in saying, 'He is One and there is no other than he.' And 'to love him with all your heart, with all your understanding, with all your strength, and to love your neighbor as yourself' is worth more than all burnt offerings and sacrifices."</p>
      <p>And when Jesus saw that he answered with understanding, he said to him, "You are not far from the kingdom of God."</p>
    </div>
  </div>

  <div class="space-y-8">
    <div class="bg-white border border-gray-200 rounded-lg p-8">
      <h2 class="text-2xl font-bold text-gray-900 mb-6">🏛️ Historical Context</h2>
      <div class="space-y-4 text-gray-700 leading-relaxed">
        <p>This Gospel passage occurs during Jesus' final week in Jerusalem, when religious leaders were testing him with difficult questions. The scribe's question about the greatest commandment was a common rabbinic debate topic, but Jesus' answer would revolutionize how we understand the relationship between love of God and love of neighbor.</p>
        
        <p>The Shema (Deuteronomy 6:4-5) that Jesus quotes was the central prayer of Judaism, recited twice daily by devout Jews. By combining it with Leviticus 19:18's command to love one's neighbor, Jesus creates a unified vision of love that encompasses both divine and human relationships.</p>

        <p>This teaching comes at a crucial moment - just before Jesus' passion, it establishes the foundation of Christian ethics that would guide the early Church and all subsequent Christian life.</p> 
      </div>
    </div>

    <div class="bg-white border border-gray-200 rounded-lg p-8">
      <h2 class="text-2xl font-bold text-gray-900 mb-6">👨‍🏫 Insights from Church Fathers and Saints</h2>
      
      <div class="space-y-6">
        <div class="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
          <h3 class="text-lg font-semibold text-yellow-900 mb-3">St. Augustine (354-430 AD)</h3>
          <p class="text-yellow-800 italic leading-relaxed">"Love of God and love of neighbor are not two separate commandments but one unified law of love. We cannot truly love God without loving what God loves - our neighbors. And we cannot authentically love our neighbors without the love of God that transforms our hearts."</p>
        </div>

        <div class="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
          <h3 class="text-lg font-semibold text-blue-900 mb-3">St. Thomas Aquinas (1225-1274)</h3>
          <p class="text-blue-800 italic leading-relaxed">"The love of God is the foundation and source of all other loves. When we love God with our whole being, that love naturally overflows to our neighbors. The two commandments form a single, integrated moral vision."</p>
        </div>

        <div class="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg">
          <h3 class="text-lg font-semibold text-green-900 mb-3">St. Teresa of Avila (1515-1582)</h3>
          <p class="text-green-800 italic leading-relaxed">"The love of God and love of neighbor are like two wings of the same bird. We cannot fly with only one wing. True Christian love is always both vertical (toward God) and horizontal (toward others)."</p>
        </div>
      </div>
    </div>

    <div class="bg-white border border-gray-200 rounded-lg p-8">
      <h2 class="text-2xl font-bold text-gray-900 mb-6">💭 Personal Reflection</h2>
      <div class="space-y-4 text-gray-700 leading-relaxed">
        <p>As we reflect on the greatest commandment, we're invited to examine the integration of our love for God and our love for others. This isn't about balancing two competing demands, but about recognizing that authentic love is always relational and interconnected.</p>
        
        <p>In our daily lives, this means that our prayer and worship should lead us to greater compassion and service. Conversely, our acts of charity and justice should be rooted in our relationship with God. The scribe's recognition that this love "is worth more than all burnt offerings and sacrifices" reminds us that love is the heart of authentic religion.</p>

        <p>Jesus' response to the scribe - "You are not far from the kingdom of God" - suggests that understanding and living this unified love is the key to entering God's kingdom. It's not about perfect knowledge, but about the willingness to love with our whole being.</p>
      </div>
    </div>

    <div class="bg-white border border-gray-200 rounded-lg p-8">
      <h2 class="text-2xl font-bold text-gray-900 mb-6">🙏 Prayer</h2>
      <div class="bg-purple-50 border border-purple-200 rounded-lg p-6">
        <p class="text-purple-800 italic leading-relaxed mb-4">"Lord Jesus, help us to love you with all our heart, soul, mind, and strength. May this love overflow into our relationships with others, so that in loving our neighbors, we may love you more perfectly. Grant us the grace to see your face in every person we encounter, and to serve you by serving them. Amen."</p>
      </div>
    </div>

    <div class="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-8">
      <h2 class="text-2xl font-bold text-gray-900 mb-4">🌟 Key Takeaways</h2>
      <ul class="space-y-2 text-gray-700">
        <li class="flex items-start">
          <span class="text-blue-500 mr-2">•</span>
          <span>Love of God and love of neighbor are inseparable - one unified commandment</span>
        </li>
        <li class="flex items-start">
          <span class="text-blue-500 mr-2">•</span>
          <span>Authentic love requires our whole being - heart, soul, mind, and strength</span>
        </li>
        <li class="flex items-start">
          <span class="text-blue-500 mr-2">•</span>
          <span>Love is more valuable than all religious observances and sacrifices</span>
        </li>
        <li class="flex items-start">
          <span class="text-blue-500 mr-2">•</span>
          <span>Understanding and living this love brings us close to God's kingdom</span>
        </li>
      </ul>
    </div>
  </div>
</div>`,
      excerpt: 'Reflecting on the greatest commandment: loving God with all our heart, soul, mind, and strength, and loving our neighbor as ourselves. A unified vision of love that transforms our relationships and draws us closer to God\'s kingdom.',
      featuredImage: null,
      status: 'PUBLISHED',
      publishedAt: tomorrow,
      createdAt: new Date(),
      updatedAt: new Date(),
      authorId: authorId
    };

    // Insert the post
    const createdPost = await prisma.post.create({
      data: newPost
    });

    console.log('✅ Post created successfully!');
    console.log(`📝 Title: ${createdPost.title}`);
    console.log(`🔗 Slug: ${createdPost.slug}`);
    console.log(`📅 Published: ${createdPost.publishedAt}`);

    // Add categories
    await prisma.postCategory.create({
      data: {
        postId: postId,
        categoryId: categoryId
      }
    });

    // Add tags
    for (const tagId of tagIds) {
      await prisma.postTag.create({
        data: {
          postId: postId,
          tagId: tagId
        }
      });
    }

    console.log('✅ Categories and tags added');

    await prisma.$disconnect();

    console.log('\n🎉 Tomorrow\'s post is ready!');
    console.log(`🌐 View at: http://localhost:3001/posts/${createdPost.slug}`);

    // Generate SQL insert statement for production
    const sqlInsert = `INSERT INTO "posts" ("id", "title", "slug", "content", "excerpt", "featuredImage", "status", "publishedAt", "createdAt", "updatedAt", "authorId") VALUES ('${postId}', '${newPost.title.replace(/'/g, "''")}', '${newPost.slug}', '${newPost.content.replace(/'/g, "''")}', '${newPost.excerpt.replace(/'/g, "''")}', ${newPost.featuredImage ? `'${newPost.featuredImage}'` : 'NULL'}, '${newPost.status}', '${newPost.publishedAt.toISOString()}', '${newPost.createdAt.toISOString()}', '${newPost.updatedAt.toISOString()}', '${authorId}');`;

    console.log('\n📋 SQL Insert Statement for Production:');
    console.log('=====================================');
    console.log(sqlInsert);

    console.log('\n📋 Category and Tag Relationships:');
    console.log('==================================');
    console.log(`INSERT INTO "post_categories" ("postId", "categoryId") VALUES ('${postId}', '${categoryId}');`);
    for (const tagId of tagIds) {
      console.log(`INSERT INTO "post_tags" ("postId", "tagId") VALUES ('${postId}', '${tagId}');`);
    }

  } catch (error) {
    console.error('❌ Error creating post:', error.message);
    process.exit(1);
  }
}

createTomorrowPost().catch(console.error);




