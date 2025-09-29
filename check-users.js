const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function checkUsers() {
  try {
    const users = await prisma.user.findMany()
    console.log('Users in database:')
    users.forEach(user => {
      console.log(`- ID: ${user.id}, Email: ${user.email}, Name: ${user.name}, Role: ${user.role}`)
    })
    
    const posts = await prisma.post.findMany()
    console.log('\nPosts in database:')
    posts.forEach(post => {
      console.log(`- ID: ${post.id}, Title: ${post.title}, Author ID: ${post.authorId}`)
    })
  } catch (error) {
    console.error('Error:', error)
  } finally {
    await prisma.$disconnect()
  }
}

checkUsers()
