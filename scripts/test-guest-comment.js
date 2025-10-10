const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function testGuestComment() {
  console.log('🧪 Testing guest comment creation...');
  try {
    // First, let's find a post to comment on
    const post = await prisma.post.findFirst({
      where: { status: 'PUBLISHED' }
    });

    if (!post) {
      console.log('❌ No published posts found');
      return;
    }

    console.log(`📝 Found post: ${post.title}`);

    // Test creating a guest comment
    const guestComment = await prisma.comment.create({
      data: {
        postId: post.id,
        content: 'This is a test guest comment!',
        guestName: 'Test Guest',
        status: 'APPROVED'
      },
      include: {
        author: { select: { name: true, email: true } }
      }
    });

    console.log('✅ Guest comment created successfully!');
    console.log('📊 Comment details:', {
      id: guestComment.id,
      content: guestComment.content,
      guestName: guestComment.guestName,
      author: guestComment.author,
      createdAt: guestComment.createdAt
    });

    // Clean up - delete the test comment
    await prisma.comment.delete({
      where: { id: guestComment.id }
    });

    console.log('🧹 Test comment cleaned up');

  } catch (error) {
    console.error('❌ Error testing guest comment:', error);
  } finally {
    await prisma.$disconnect();
  }
}

testGuestComment();
