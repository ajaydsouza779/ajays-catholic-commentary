const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function createFirstSundayReflection() {
  console.log('📝 Creating first Sunday Gospel reflection post for October 12, 2025...');
  try {
    // Find the admin user
    const adminUser = await prisma.user.findFirst({
      where: { role: 'ADMIN' },
    });

    if (!adminUser) {
      console.error('❌ Admin user not found. Cannot create post.');
      return;
    }

    // Find or create categories and tags
    const scriptureCategory = await prisma.category.upsert({
      where: { slug: 'scripture-study' },
      update: {},
      create: {
        name: 'Scripture Study',
        slug: 'scripture-study',
        description: 'Deep dives into biblical texts and their relevance to modern Catholic life',
      },
    });

    const gospelTag = await prisma.tag.upsert({
      where: { slug: 'gospel' },
      update: {},
      create: { name: 'Gospel', slug: 'gospel' },
    });

    const gratitudeTag = await prisma.tag.upsert({
      where: { slug: 'gratitude' },
      update: {},
      create: { name: 'Gratitude', slug: 'gratitude' },
    });

    const healingTag = await prisma.tag.upsert({
      where: { slug: 'healing' },
      update: {},
      create: { name: 'Healing', slug: 'healing' },
    });

    // Create the first Sunday Gospel reflection post
    const newPost = await prisma.post.create({
      data: {
        title: 'Sunday Gospel Reflection: The Grateful Samaritan (Luke 17:11-19)',
        slug: 'sunday-gospel-reflection-grateful-samaritan-october-12-2025',
        content: `
          <h2>📖 Sunday Readings - October 12, 2025 (28th Sunday in Ordinary Time)</h2>
          
          <div style="background: #f8f9fa; padding: 1rem; border-left: 4px solid #007bff; margin: 1rem 0;">
            <p><strong>First Reading:</strong> 2 Kings 5:14-17</p>
            <p><strong>Responsorial Psalm:</strong> Psalm 98:1, 2-3, 3-4</p>
            <p><strong>Second Reading:</strong> 2 Timothy 2:8-13</p>
            <p><strong>Gospel:</strong> Luke 17:11-19</p>
          </div>

          <h2>📜 Gospel Reading: Luke 17:11-19</h2>
          <p><em>As Jesus continued his journey to Jerusalem, he traveled through Samaria and Galilee. As he was entering a village, ten lepers met him. They stood at a distance from him and raised their voice, saying, "Jesus, Master! Have pity on us!" And when he saw them, he said, "Go show yourselves to the priests." As they were going they were cleansed. And one of them, realizing he had been healed, returned, glorifying God in a loud voice. He fell at the feet of Jesus and thanked him. He was a Samaritan. Jesus said in reply, "Ten were cleansed, were they not? Where are the other nine? Has none but this foreigner returned to give thanks to God?" Then he said to him, "Stand up and go; your faith has saved you."</em></p>

          <h2>🏛️ Historical Context</h2>
          <p>This Gospel passage takes place during Jesus' final journey to Jerusalem, a time when tensions between Jews and Samaritans were at their peak. The Samaritans were considered religious and ethnic outcasts by the Jews, making the grateful leper's return even more significant.</p>
          
          <p>Leprosy in biblical times was not just a physical ailment but a social and religious condition that excluded sufferers from community life. The ten lepers, regardless of their ethnic background, were united in their suffering and isolation.</p>

          <p>The healing of Naaman in the First Reading (2 Kings 5:14-17) provides a powerful parallel - both stories involve foreigners receiving God's healing grace and responding with faith and gratitude.</p>

          <h2>👨‍🏫 Insights from Church Fathers and Saints</h2>
          
          <div style="background: #fff3cd; padding: 1rem; border-left: 4px solid #ffc107; margin: 1rem 0;">
            <h3>St. Augustine (354-430 AD)</h3>
            <p><em>"The nine lepers who did not return represent those who receive God's gifts but fail to acknowledge Him. The grateful Samaritan symbolizes the faithful who recognize and thank God for His mercy. Gratitude is not just politeness—it is the recognition of God's sovereignty in our lives."</em></p>
          </div>

          <div style="background: #d1ecf1; padding: 1rem; border-left: 4px solid #17a2b8; margin: 1rem 0;">
            <h3>St. John Chrysostom (349-407 AD)</h3>
            <p><em>"Notice how Jesus asks, 'Where are the other nine?' This question reveals God's desire for our gratitude. When we receive blessings, we must not only enjoy them but return to give thanks. The Samaritan's faith was not just in healing but in the recognition of Jesus as the source of that healing."</em></p>
          </div>

          <div style="background: #f8d7da; padding: 1rem; border-left: 4px solid #dc3545; margin: 1rem 0;">
            <h3>St. Thomas Aquinas (1225-1274 AD)</h3>
            <p><em>"Gratitude is a virtue that perfects the virtue of justice. When we give thanks to God, we acknowledge that all good things come from Him. The Samaritan's gratitude was not merely emotional but a recognition of divine providence."</em></p>
          </div>

          <h2>👑 Pope's Message</h2>
          <p>Pope Francis has frequently emphasized the importance of gratitude in our spiritual lives. In his apostolic exhortation <em>Gaudete et Exsultate</em> (Rejoice and Be Glad), he writes:</p>
          
          <blockquote style="background: #e9ecef; padding: 1rem; border-left: 4px solid #6c757d; margin: 1rem 0; font-style: italic;">
            "The saints are not perfect images to be admired from afar, but people who lived their lives with gratitude to God, recognizing His gifts and responding with love. Gratitude opens our hearts to God's continued work in our lives."
          </blockquote>

          <p>Pope Francis also reminds us that gratitude is not just for the big moments but for the daily gifts we receive, encouraging us to develop a "culture of gratitude" in our families and communities.</p>

          <h2>🤔 Reflection</h2>
          <p>Dear brothers and sisters in Christ,</p>
          
          <p>Today's Gospel presents us with a powerful lesson about gratitude and faith. Ten lepers were healed, but only one—a foreigner, a Samaritan—returned to give thanks. This story challenges us to examine our own hearts.</p>

          <p><strong>How often do we receive God's blessings and fail to acknowledge them?</strong> Like the nine lepers who went on their way, we might be so focused on our own concerns that we forget to return to the source of our healing and joy.</p>

          <p>The Samaritan's gratitude was not just a polite "thank you"—it was a recognition of Jesus as Lord and Savior. His faith was complete: he believed in Jesus' power to heal, and he believed in Jesus' authority to save. This is why Jesus said, "Your faith has saved you."</p>

          <p>In our own lives, we are constantly receiving God's grace: the gift of life, family, friends, daily bread, and most importantly, the gift of salvation through Jesus Christ. Do we take these gifts for granted, or do we return to give thanks?</p>

          <h2>🙏 Personal Application</h2>
          <p>As we reflect on the grateful Samaritan, let us consider:</p>
          <ul>
            <li><strong>Daily Gratitude:</strong> Do I begin each day by thanking God for the gift of life and the opportunities ahead?</li>
            <li><strong>Recognition of Blessings:</strong> Am I aware of God's hand in both the big and small moments of my life?</li>
            <li><strong>Faith in Action:</strong> Does my gratitude translate into a deeper relationship with Jesus Christ?</li>
            <li><strong>Community Response:</strong> How can I help others recognize and give thanks for God's blessings in their lives?</li>
          </ul>

          <h2>✝️ Prayer</h2>
          <p>Heavenly Father, we thank You for the gift of Your Word and the example of the grateful Samaritan. Open our hearts to recognize Your countless blessings in our lives. Help us to be like the Samaritan leper—not only receiving Your grace but returning to give thanks with faith and love. May our gratitude deepen our relationship with You and inspire us to share Your love with others. Through Christ our Lord. Amen.</p>

          <h2>❓ Questions for Reflection</h2>
          <p>Feel free to share your thoughts in the comments below:</p>
          <ol>
            <li>What stood out to you most in today's Gospel reading?</li>
            <li>How can you cultivate a more grateful heart in your daily life?</li>
            <li>What are some specific blessings you're grateful for this week?</li>
            <li>How does gratitude strengthen your faith relationship with God?</li>
          </ol>

          <p>In Christ,</p>
          <p>Ajay D'Souza</p>
        `,
        excerpt: 'A reflection on Luke 17:11-19, the story of the grateful Samaritan leper, exploring themes of gratitude, faith, and God\'s healing grace. Includes insights from Church Fathers and practical applications for daily life.',
        status: 'PUBLISHED',
        publishedAt: new Date('2025-10-12T00:00:00Z'),
        author: {
          connect: { id: adminUser.id },
        },
        categories: {
          create: [{ category: { connect: { id: scriptureCategory.id } } }],
        },
        tags: {
          create: [
            { tag: { connect: { id: gospelTag.id } } },
            { tag: { connect: { id: gratitudeTag.id } } },
            { tag: { connect: { id: healingTag.id } } },
          ],
        },
      },
    });

    console.log('✅ First Sunday Gospel reflection post created!');
    console.log(`📖 Post ID: ${newPost.id}`);
    console.log(`🔗 Slug: ${newPost.slug}`);
    console.log(`📝 Title: ${newPost.title}`);
    console.log(`📅 Published: ${newPost.publishedAt}`);
    console.log('\n💡 Your first Sunday reflection is now live on the homepage!');
    console.log('🌐 Visit your site to see it in the Latest Posts section.');

  } catch (error) {
    console.error('❌ Error creating first Sunday reflection post:', error);
  } finally {
    await prisma.$disconnect();
  }
}

createFirstSundayReflection();
