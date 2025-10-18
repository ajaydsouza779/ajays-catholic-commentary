const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function syncPostFromProduction() {
  try {
    console.log('🔄 Starting post sync from production...');
    
    // First, let's get the local post to see what we have
    const localPosts = await prisma.post.findMany({
      where: {
        slug: 'sunday-gospel-reflection-grateful-samaritan-october-12-2025'
      },
      include: {
        categories: { include: { category: true } },
        tags: { include: { tag: true } },
        author: true
      }
    });

    if (localPosts.length > 0) {
      console.log('📝 Found local post:', localPosts[0].title);
      console.log('🗑️  Deleting local post...');
      
      // Delete the local post
      await prisma.post.delete({
        where: { id: localPosts[0].id }
      });
      
      console.log('✅ Local post deleted');
    } else {
      console.log('ℹ️  No local post found with that slug');
    }

    // Now let's create the production post data
    // This is the data from the production post
    const productionPostData = {
      title: "Sunday Gospel Reflection: The Grateful Samaritan (Luke 17:11-19)",
      slug: "sunday-gospel-reflection-grateful-samaritan-october-12-2025",
      content: `<p>In today's Gospel, we encounter a powerful story of gratitude and faith. Ten lepers approach Jesus, calling out for mercy. Jesus tells them to show themselves to the priests, and as they go, they are cleansed. However, only one returns to give thanks - a Samaritan, a foreigner.</p>

<p>This story teaches us several important lessons:</p>

<div class="bg-white border border-gray-200 rounded-lg p-8">
  <h2 class="text-2xl font-bold text-gray-900 mb-6">📖 Pope's Message</h2>
  <div class="space-y-4 text-gray-700 leading-relaxed">
    <p>Pope Francis has often spoken about the importance of gratitude in our spiritual lives. He reminds us that gratitude is not just a feeling, but a way of life that opens our hearts to God's grace.</p>
    <p>In his homilies, the Holy Father emphasizes that when we are grateful, we recognize that everything we have comes from God. This recognition leads us to a deeper relationship with our Creator and a more compassionate heart towards others.</p>
  </div>
</div>

<div class="bg-white border border-gray-200 rounded-lg p-8">
  <h2 class="text-2xl font-bold text-gray-900 mb-6">🤔 My Personal Reflection</h2>
  <div class="space-y-4 text-gray-700 leading-relaxed">
    <p>I feel we have more to thank Jesus than the leper who was healed by Jesus. Jesus did have pity on us, and gave us himself - by becoming human (to see and imitate him), by sacrificing himself willingly on the Cross (for our sins for making justice happen) and in Holy Mass by becoming Eucharist (bread of life) for us.</p>
    <p>We as well as all the humanity should be grateful to Jesus, as he did to each and everyone what no-one, even the most loved one, can do - to be God and die as a friend. But not everyone knows what he did. And we who know may not remember that much as well.</p>
    <p>So may every Sunday, the Eucharist (which itself means thanksgiving too) be a reminder for us to do this. To thank Jesus for what he has done for us! May the faith in Jesus, save us.</p>
  </div>
</div>

<div class="bg-white border border-gray-200 rounded-lg p-8">
  <h2 class="text-2xl font-bold text-gray-900 mb-6">✝️ Prayer</h2>
  <div class="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg">
    <p class="text-amber-900 leading-relaxed italic">
      Heavenly Father, I thank You for the gift of Your Son, Jesus in our lives. Thank you Jesus for what you have done for us. Open my heart to recognize Your blessings in my life. Help me be like the Samaritan leper to acknowledge what you have done and to love and serve you. Amen.
    </p>
  </div>
</div>`,
      excerpt: "A reflection on the Gospel story of the ten lepers, focusing on the importance of gratitude in our spiritual lives and the example of the grateful Samaritan.",
      status: "PUBLISHED",
      publishedAt: new Date("2025-10-12T00:00:00.000Z"),
      authorId: "cmgakgoim00078zao1zx13drd" // This should be your user ID
    };

    console.log('📥 Creating production post data...');
    
    // Create the post
    const newPost = await prisma.post.create({
      data: productionPostData
    });

    console.log('✅ Production post created with ID:', newPost.id);

    // Add categories (assuming you have these categories)
    const categoryNames = ['Gospel Reflection', 'Sunday Mass'];
    for (const categoryName of categoryNames) {
      let category = await prisma.category.findUnique({
        where: { name: categoryName }
      });
      
      if (!category) {
        category = await prisma.category.create({
          data: {
            name: categoryName,
            slug: categoryName.toLowerCase().replace(/\s+/g, '-'),
            description: `Category for ${categoryName}`
          }
        });
      }

      await prisma.postCategory.create({
        data: {
          postId: newPost.id,
          categoryId: category.id
        }
      });
    }

    // Add tags
    const tagNames = ['Gratitude', 'Faith', 'Gospel'];
    for (const tagName of tagNames) {
      let tag = await prisma.tag.findUnique({
        where: { name: tagName }
      });
      
      if (!tag) {
        tag = await prisma.tag.create({
          data: {
            name: tagName,
            slug: tagName.toLowerCase().replace(/\s+/g, '-')
          }
        });
      }

      await prisma.postTag.create({
        data: {
          postId: newPost.id,
          tagId: tag.id
        }
      });
    }

    console.log('✅ Post sync completed successfully!');
    console.log('🔗 Post URL: http://localhost:3001/posts/sunday-gospel-reflection-grateful-samaritan-october-12-2025');

  } catch (error) {
    console.error('❌ Error syncing post:', error);
  } finally {
    await prisma.$disconnect();
  }
}

syncPostFromProduction();

