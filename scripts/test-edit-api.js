// Using built-in fetch (Node.js 18+)

async function testEditAPI() {
  console.log('🔧 Testing edit API endpoint...');
  
  try {
    // Test the GET endpoint first
    console.log('\n📖 Testing GET /api/posts/[id]...');
    const getResponse = await fetch('https://ajays-catholic-commentary.vercel.app/api/posts/cmgjt6n1c00048zvn13156ums');
    
    if (getResponse.ok) {
      const post = await getResponse.json();
      console.log('✅ GET endpoint working');
      console.log('📄 Post title:', post.title);
      console.log('📄 Post status:', post.status);
    } else {
      console.log('❌ GET endpoint failed:', getResponse.status, await getResponse.text());
    }
    
    // Test the PUT endpoint (this will fail without proper auth, but we can see the error)
    console.log('\n✏️ Testing PUT /api/posts/[id]...');
    const putResponse = await fetch('https://ajays-catholic-commentary.vercel.app/api/posts/cmgjt6n1c00048zvn13156ums', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: 'Test Update',
        slug: 'test-update',
        content: 'Test content',
        excerpt: 'Test excerpt',
        status: 'DRAFT',
        categoryIds: [],
        tagIds: []
      })
    });
    
    if (putResponse.ok) {
      console.log('✅ PUT endpoint working');
    } else {
      const error = await putResponse.text();
      console.log('⚠️ PUT endpoint response (expected to fail without auth):', putResponse.status, error);
    }
    
  } catch (error) {
    console.error('❌ API test failed:', error.message);
  }
}

testEditAPI();
