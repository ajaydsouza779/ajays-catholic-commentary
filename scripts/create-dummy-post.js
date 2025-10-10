const { PrismaClient } = require('@prisma/client');

async function createDummyPost() {
  const prisma = new PrismaClient();

  try {
    console.log('🔄 Creating dummy post for testing...');
    
    // First, get the admin user
    const adminUser = await prisma.user.findFirst({
      where: { role: 'ADMIN' }
    });

    if (!adminUser) {
      console.log('❌ No admin user found. Please create an admin user first.');
      return;
    }

    console.log(`👤 Found admin user: ${adminUser.name} (${adminUser.email})`);

    // Create a dummy post
    const dummyPost = await prisma.post.create({
      data: {
        title: 'Dummy Post for Testing Delete Functionality',
        slug: 'dummy-post-for-testing-delete',
        content: `
<div class="max-w-4xl mx-auto">
  <h2 class="text-3xl font-bold text-gray-900 mb-6">🧪 Test Post</h2>
  <p class="text-lg text-gray-600 mb-8">This is a dummy post created for testing the admin delete functionality.</p>
  
  <div class="bg-red-50 border-l-4 border-red-500 p-6 mb-8 rounded-r-lg">
    <h3 class="text-xl font-semibold text-red-900 mb-4">⚠️ Test Content</h3>
    <p class="text-red-800">
      This post should be deleted using the admin interface. It contains dummy content and is safe to remove.
    </p>
  </div>

  <div class="bg-white border border-gray-200 rounded-lg p-8 mb-8">
    <h3 class="text-2xl font-semibold text-gray-900 mb-4">📝 Test Instructions</h3>
    <ol class="list-decimal list-inside space-y-2 text-gray-700">
      <li>Go to the admin dashboard</li>
      <li>Find this post in the posts table</li>
      <li>Click the red trash icon (🗑️)</li>
      <li>Confirm the deletion</li>
      <li>Verify the post is removed</li>
    </ol>
  </div>

  <div class="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
    <h3 class="text-lg font-semibold text-yellow-900 mb-3">🎯 Test Goals</h3>
    <ul class="list-disc list-inside text-yellow-800 space-y-1">
      <li>Test admin delete functionality</li>
      <li>Verify confirmation dialog works</li>
      <li>Ensure post is actually deleted</li>
      <li>Check that UI updates after deletion</li>
    </ul>
  </div>
</div>`,
        excerpt: 'A dummy post created for testing the admin delete functionality. Safe to delete.',
        status: 'PUBLISHED',
        publishedAt: new Date(),
        authorId: adminUser.id
      }
    });

    console.log('✅ Dummy post created successfully!');
    console.log(`📝 Title: ${dummyPost.title}`);
    console.log(`🔗 Slug: ${dummyPost.slug}`);
    console.log(`📊 Status: ${dummyPost.status}`);
    console.log(`🆔 ID: ${dummyPost.id}`);
    console.log(`📅 Published: ${dummyPost.publishedAt}`);
    
    console.log('\n🎯 Next Steps:');
    console.log('1. Go to http://localhost:3001/admin');
    console.log('2. Find the "Dummy Post for Testing Delete Functionality" in the posts table');
    console.log('3. Click the red trash icon (🗑️) to delete it');
    console.log('4. Confirm the deletion in the dialog');

  } catch (error) {
    console.error('❌ Error creating dummy post:', error);
  } finally {
    await prisma.$disconnect();
  }
}

createDummyPost();
