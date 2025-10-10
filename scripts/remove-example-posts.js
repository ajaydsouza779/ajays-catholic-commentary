const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function removeExamplePosts() {
  try {
    console.log('🗑️  Removing example posts...')
    
    // Delete all existing posts
    const deletedPosts = await prisma.post.deleteMany({})
    console.log(`✅ Deleted ${deletedPosts.count} posts`)
    
    // Delete all comments
    const deletedComments = await prisma.comment.deleteMany({})
    console.log(`✅ Deleted ${deletedComments.count} comments`)
    
    // Delete post-category and post-tag relationships
    await prisma.postCategory.deleteMany({})
    await prisma.postTag.deleteMany({})
    console.log('✅ Cleared post relationships')
    
    console.log('🎉 Database cleaned and ready for your first post!')
    console.log('💡 You can now create your first Sunday Gospel reflection post.')
    
  } catch (error) {
    console.error('❌ Error cleaning database:', error)
  } finally {
    await prisma.$disconnect()
  }
}

removeExamplePosts()
