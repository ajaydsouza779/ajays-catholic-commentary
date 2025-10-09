const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function createFirstSundayReflection() {
  try {
    console.log('📝 Creating first Sunday Gospel reflection post...')
    
    // Get the admin user
    const adminUser = await prisma.user.findFirst({
      where: { role: 'ADMIN' }
    })
    
    if (!adminUser) {
      console.error('❌ No admin user found. Please create an admin user first.')
      return
    }
    
    // Get categories and tags
    const scriptureCategory = await prisma.category.findFirst({
      where: { slug: 'scripture-study' }
    })
    
    const gospelTag = await prisma.tag.findFirst({
      where: { slug: 'gospel' }
    })
    
    const prayerTag = await prisma.tag.findFirst({
      where: { slug: 'prayer' }
    })
    
    // Create the first Sunday Gospel reflection post
    const post = await prisma.post.create({
      data: {
        title: "Sunday Gospel Reflection: [Gospel Reading Title]",
        slug: "sunday-gospel-reflection-template",
        content: `
<h2>Gospel Reading</h2>
<p><strong>Gospel:</strong> [Gospel Reference - e.g., Mark 10:17-30]</p>

<h2>Reflection</h2>
<p>Dear brothers and sisters in Christ,</p>

<p>This Sunday's Gospel presents us with [brief description of the Gospel story]. As we reflect on this passage, we are invited to [main theme or lesson].</p>

<h3>Key Themes</h3>
<ul>
  <li><strong>Faith and Trust:</strong> [How does this Gospel call us to deeper faith?]</li>
  <li><strong>Discipleship:</strong> [What does this teach us about following Christ?]</li>
  <li><strong>Love and Service:</strong> [How are we called to love and serve others?]</li>
</ul>

<h3>Personal Application</h3>
<p>In our daily lives, this Gospel challenges us to [practical application]. We are reminded that [key message for daily living].</p>

<h3>Prayer</h3>
<p>Let us pray together:</p>
<p><em>Heavenly Father, help us to [prayer intention based on Gospel]. Grant us the grace to [specific grace needed]. Through Christ our Lord. Amen.</em></p>

<h3>Questions for Reflection</h3>
<ul>
  <li>How does this Gospel speak to my current situation?</li>
  <li>What is God calling me to change or improve in my life?</li>
  <li>How can I better serve others this week?</li>
</ul>

<p>May this Sunday's Gospel reading inspire and guide you throughout the week ahead.</p>

<p>In Christ,<br>
Ajay</p>
        `,
        excerpt: "Join me for a weekly reflection on this Sunday's Gospel reading, exploring its meaning and how it applies to our daily lives as Catholics.",
        status: 'PUBLISHED',
        authorId: adminUser.id,
        publishedAt: new Date()
      }
    })
    
    // Connect to Scripture Study category
    if (scriptureCategory) {
      await prisma.postCategory.create({
        data: {
          postId: post.id,
          categoryId: scriptureCategory.id
        }
      })
    }
    
    // Connect to Gospel and Prayer tags
    if (gospelTag) {
      await prisma.postTag.create({
        data: {
          postId: post.id,
          tagId: gospelTag.id
        }
      })
    }
    
    if (prayerTag) {
      await prisma.postTag.create({
        data: {
          postId: post.id,
          tagId: prayerTag.id
        }
      })
    }
    
    console.log('✅ First Sunday Gospel reflection post created!')
    console.log('📖 Post ID:', post.id)
    console.log('🔗 Slug:', post.slug)
    console.log('📝 Title:', post.title)
    console.log('')
    console.log('💡 Next steps:')
    console.log('1. Go to /admin/posts to edit the post')
    console.log('2. Update the title with this Sunday\'s Gospel reading')
    console.log('3. Fill in the specific Gospel content and reflection')
    console.log('4. Publish your first Sunday reflection!')
    
  } catch (error) {
    console.error('❌ Error creating post:', error)
  } finally {
    await prisma.$disconnect()
  }
}

createFirstSundayReflection()
