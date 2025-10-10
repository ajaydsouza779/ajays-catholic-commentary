-- Ajay's Catholic Commentary - Insert Sunday Gospel Post
-- Generated: 2025-10-10
-- Description: INSERT statements for the complete Sunday Gospel reflection post

BEGIN;

-- ==============================================
-- INSERT SUNDAY GOSPEL REFLECTION POST
-- ==============================================

-- First, let's check if the post already exists
SELECT 'Checking for existing post...' as info;
SELECT id, title, slug, status FROM posts WHERE slug = 'sunday-gospel-reflection-grateful-samaritan-october-12-2025';

-- Insert the main post (with conflict handling)
INSERT INTO posts (
  id,
  title,
  slug,
  content,
  reflection,
  excerpt,
  status,
  "publishedAt",
  "createdAt",
  "updatedAt",
  "authorId"
) VALUES (
  'cmgjt6n1c00048zvn13156ums',
  'Sunday Gospel Reflection: The Grateful Samaritan (Luke 17:11-19)',
  'sunday-gospel-reflection-grateful-samaritan-october-12-2025',
  '
<div class="max-w-4xl mx-auto">
  <h2 class="text-3xl font-bold text-gray-900 mb-6">📖 Sunday Readings - October 12, 2025</h2>
  <p class="text-lg text-gray-600 mb-8">28th Sunday in Ordinary Time</p>
  
  <div class="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
    <h3 class="text-xl font-semibold text-blue-900 mb-4">Liturgical Readings</h3>
    <div class="space-y-2">
      <p><strong class="text-blue-800">First Reading:</strong> <span class="text-gray-700">2 Kings 5:14-17</span></p>
      <p><strong class="text-blue-800">Responsorial Psalm:</strong> <span class="text-gray-700">Psalm 98:1, 2-3, 3-4</span></p>
      <p><strong class="text-blue-800">Second Reading:</strong> <span class="text-gray-700">2 Timothy 2:8-13</span></p>
      <p><strong class="text-blue-800">Gospel:</strong> <span class="text-gray-700">Luke 17:11-19</span></p>
    </div>
  </div>

  <div class="bg-white border border-gray-200 rounded-lg p-8 mb-8">
    <h2 class="text-2xl font-bold text-gray-900 mb-4">📜 Gospel Reading: Luke 17:11-19</h2>
    <div class="bg-gray-50 p-6 rounded-lg italic text-gray-700 leading-relaxed">
      <p class="mb-4">As Jesus continued his journey to Jerusalem, he traveled through Samaria and Galilee. As he was entering a village, ten lepers met him. They stood at a distance from him and raised their voice, saying, "Jesus, Master! Have pity on us!"</p>
      <p class="mb-4">And when he saw them, he said, "Go show yourselves to the priests." As they were going they were cleansed.</p>
      <p class="mb-4">And one of them, realizing he had been healed, returned, glorifying God in a loud voice. He fell at the feet of Jesus and thanked him. He was a Samaritan.</p>
      <p class="mb-4">Jesus said in reply, "Ten were cleansed, were they not? Where are the other nine? Has none but this foreigner returned to give thanks to God?"</p>
      <p>Then he said to him, "Stand up and go; your faith has saved you."</p>
    </div>
  </div>

  <div class="space-y-8">
    <div class="bg-white border border-gray-200 rounded-lg p-8">
      <h2 class="text-2xl font-bold text-gray-900 mb-6">🏛️ Historical Context</h2>
      <div class="space-y-4 text-gray-700 leading-relaxed">
        <p>This Gospel passage takes place during Jesus'' final journey to Jerusalem, a time when tensions between Jews and Samaritans were at their peak. The Samaritans were considered religious and ethnic outcasts by the Jews, making the grateful leper''s return even more significant.</p>
        <p>Leprosy in biblical times was not just a physical ailment but a social and religious condition that excluded sufferers from community life. The ten lepers, regardless of their ethnic background, were united in their suffering and isolation.</p>
        <p>The healing of Naaman in the First Reading (2 Kings 5:14-17) provides a powerful parallel - both stories involve foreigners receiving God''s healing grace and responding with faith and gratitude.</p>
      </div>
    </div>

    <div class="bg-white border border-gray-200 rounded-lg p-8">
      <h2 class="text-2xl font-bold text-gray-900 mb-6">👨‍🏫 Insights from Church Fathers and Saints</h2>
      <div class="space-y-6">
        <div class="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
          <h3 class="text-lg font-semibold text-yellow-900 mb-3">St. Augustine (354-430 AD)</h3>
          <p class="text-yellow-800 italic leading-relaxed">"The nine lepers who did not return represent those who receive God''s gifts but fail to acknowledge Him. The grateful Samaritan symbolizes the faithful who recognize and thank God for His mercy. Gratitude is not just politeness—it is the recognition of God''s sovereignty in our lives."</p>
        </div>

        <div class="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
          <h3 class="text-lg font-semibold text-blue-900 mb-3">St. John Chrysostom (349-407 AD)</h3>
          <p class="text-blue-800 italic leading-relaxed">"Notice how Jesus asks, ''Where are the other nine?'' This question reveals God''s desire for our gratitude. When we receive blessings, we must not only enjoy them but return to give thanks. The Samaritan''s faith was not just in healing but in the recognition of Jesus as the source of that healing."</p>
        </div>

        <div class="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-lg">
          <h3 class="text-lg font-semibold text-red-900 mb-3">St. Thomas Aquinas (1225-1274 AD)</h3>
          <p class="text-red-800 italic leading-relaxed">"Gratitude is a virtue that perfects the virtue of justice. When we give thanks to God, we acknowledge that all good things come from Him. The Samaritan''s gratitude was not merely emotional but a recognition of divine providence."</p>
        </div>
      </div>
    </div>

    <div class="bg-white border border-gray-200 rounded-lg p-8">
      <h2 class="text-2xl font-bold text-gray-900 mb-6">👑 Pope''s Message</h2>
      <div class="space-y-4 text-gray-700 leading-relaxed">
        <p>Pope Francis has frequently emphasized the importance of gratitude in our spiritual lives. In his apostolic exhortation <em>Gaudete et Exsultate</em> (Rejoice and Be Glad), he writes:</p>
        <blockquote class="bg-gray-50 border-l-4 border-gray-400 p-6 rounded-r-lg italic text-gray-800">
          "The saints are not perfect images to be admired from afar, but people who lived their lives with gratitude to God, recognizing His gifts and responding with love. Gratitude opens our hearts to God''s continued work in our lives."
        </blockquote>
        <p>Pope Francis also reminds us that gratitude is not just for the big moments but for the daily gifts we receive, encouraging us to develop a "culture of gratitude" in our families and communities.</p>
      </div>
    </div>

    <div class="bg-white border border-gray-200 rounded-lg p-8">
      <h2 class="text-2xl font-bold text-gray-900 mb-6">🤔 Reflection</h2>
      <div class="space-y-4 text-gray-700 leading-relaxed">
        <p>Dear brothers and sisters in Christ,</p>
        <p>Today''s Gospel presents us with a powerful lesson about gratitude and faith. Ten lepers were healed, but only one—a foreigner, a Samaritan—returned to give thanks. This story challenges us to examine our own hearts.</p>
        <p><strong>How often do we receive God''s blessings and fail to acknowledge them?</strong> Like the nine lepers who went on their way, we might be so focused on our own concerns that we forget to return to the source of our healing and joy.</p>
        <p>The Samaritan''s gratitude was not just a polite "thank you"—it was a recognition of Jesus as Lord and Savior. His faith was complete: he believed in Jesus'' power to heal, and he believed in Jesus'' authority to save. This is why Jesus said, "Your faith has saved you."</p>
        <p>In our own lives, we are constantly receiving God''s grace: the gift of life, family, friends, daily bread, and most importantly, the gift of salvation through Jesus Christ. Do we take these gifts for granted, or do we return to give thanks?</p>
      </div>
    </div>

    <div class="bg-white border border-gray-200 rounded-lg p-8">
      <h2 class="text-2xl font-bold text-gray-900 mb-6">🙏 Personal Application</h2>
      <div class="space-y-4">
        <p class="text-gray-700 leading-relaxed">As we reflect on the grateful Samaritan, let us consider:</p>
        <ul class="space-y-3 text-gray-700">
          <li class="flex items-start">
            <span class="bg-amber-100 text-amber-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">1</span>
            <span><strong>Daily Gratitude:</strong> Do I begin each day by thanking God for the gift of life and the opportunities ahead?</span>
          </li>
          <li class="flex items-start">
            <span class="bg-amber-100 text-amber-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">2</span>
            <span><strong>Recognition of Blessings:</strong> Am I aware of God''s hand in both the big and small moments of my life?</span>
          </li>
          <li class="flex items-start">
            <span class="bg-amber-100 text-amber-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">3</span>
            <span><strong>Faith in Action:</strong> Does my gratitude translate into a deeper relationship with Jesus Christ?</span>
          </li>
          <li class="flex items-start">
            <span class="bg-amber-100 text-amber-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">4</span>
            <span><strong>Community Response:</strong> How can I help others recognize and give thanks for God''s blessings in their lives?</span>
          </li>
        </ul>
      </div>
    </div>

    <div class="bg-white border border-gray-200 rounded-lg p-8">
      <h2 class="text-2xl font-bold text-gray-900 mb-6">✝️ Prayer</h2>
      <div class="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg">
        <p class="text-amber-900 leading-relaxed italic">Heavenly Father, we thank You for the gift of Your Word and the example of the grateful Samaritan. Open our hearts to recognize Your countless blessings in our lives. Help us to be like the Samaritan leper—not only receiving Your grace but returning to give thanks with faith and love. May our gratitude deepen our relationship with You and inspire us to share Your love with others. Through Christ our Lord. Amen.</p>
      </div>
    </div>

    <div class="bg-white border border-gray-200 rounded-lg p-8">
      <h2 class="text-2xl font-bold text-gray-900 mb-6">❓ Questions for Reflection</h2>
      <div class="space-y-4">
        <p class="text-gray-700 leading-relaxed">Feel free to share your thoughts in the comments below:</p>
        <ol class="space-y-3 text-gray-700">
          <li class="flex items-start">
            <span class="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">1</span>
            <span>What stood out to you most in today''s Gospel reading?</span>
          </li>
          <li class="flex items-start">
            <span class="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">2</span>
            <span>How can you cultivate a more grateful heart in your daily life?</span>
          </li>
          <li class="flex items-start">
            <span class="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">3</span>
            <span>What are some specific blessings you''re grateful for this week?</span>
          </li>
          <li class="flex items-start">
            <span class="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">4</span>
            <span>How does gratitude strengthen your faith relationship with God?</span>
          </li>
        </ol>
      </div>
    </div>

    <div class="bg-gray-50 border border-gray-200 rounded-lg p-8 mt-8">
      <div class="text-center">
        <p class="text-gray-700 mb-2">In Christ,</p>
        <p class="text-lg font-semibold text-gray-900">Ajay D''Souza</p>
      </div>
    </div>
  </div>
</div>',
  '
<div class="bg-amber-50 border-l-4 border-amber-500 p-6 mb-8 rounded-r-lg">
  <h3 class="text-xl font-semibold text-amber-900 mb-4">💭 Personal Reflection</h3>
  <div class="prose prose-amber max-w-none">
    <p class="text-amber-800 leading-relaxed">
      This Gospel passage invites us to reflect on the profound nature of gratitude and its transformative power in our spiritual journey. The story of the ten lepers, with only one returning to give thanks, speaks volumes about the human condition and our relationship with God.
    </p>
    
    <p class="text-amber-800 leading-relaxed">
      <strong>The Challenge of Gratitude:</strong> In our fast-paced world, it''s easy to take blessings for granted. The nine lepers who didn''t return represent our tendency to receive God''s gifts without proper acknowledgment. This passage calls us to cultivate a heart of gratitude, recognizing that every blessing comes from God.
    </p>
    
    <p class="text-amber-800 leading-relaxed">
      <strong>The Samaritan''s Example:</strong> The fact that it was a Samaritan who returned is significant. As an outsider, he perhaps had a deeper appreciation for Jesus'' healing power. This reminds us that sometimes those on the margins of society have the clearest vision of God''s mercy and love.
    </p>
    
    <p class="text-amber-800 leading-relaxed">
      <strong>Practical Application:</strong> This week, let us make a conscious effort to return to Jesus in thanksgiving. Whether through daily prayer, the Sacrament of Reconciliation, or acts of service, we are called to be like the grateful Samaritan - recognizing God''s hand in our lives and responding with heartfelt gratitude.
    </p>
    
    <p class="text-amber-800 leading-relaxed">
      <strong>Prayer:</strong> Lord Jesus, like the grateful Samaritan, help us to recognize Your healing presence in our lives. Teach us to be people of gratitude, always returning to You with thankful hearts. May our lives be a continuous act of thanksgiving for Your infinite love and mercy. Amen.
    </p>
  </div>
</div>',
  'A reflection on Luke 17:11-19, the story of the grateful Samaritan leper, exploring themes of gratitude, faith, and God''s healing grace. Includes insights from Church Fathers and practical applications for daily life.',
  'PUBLISHED',
  '2025-10-12T00:00:00.000Z',
  '2025-10-09T19:26:43.488Z',
  '2025-10-09T19:51:53.911Z',
  (SELECT id FROM users WHERE email = 'ajay@example.com' LIMIT 1)
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  slug = EXCLUDED.slug,
  content = EXCLUDED.content,
  reflection = EXCLUDED.reflection,
  excerpt = EXCLUDED.excerpt,
  status = EXCLUDED.status,
  "publishedAt" = EXCLUDED."publishedAt",
  "updatedAt" = EXCLUDED."updatedAt";

-- ==============================================
-- INSERT CATEGORIES AND TAGS
-- ==============================================

-- Insert Scripture Study category if it doesn't exist
INSERT INTO categories (id, name, slug, description, "createdAt", "updatedAt")
VALUES (
  'cmgakgnsx00008zaoeclh6yje',
  'Scripture Study',
  'scripture-study',
  'Deep dives into biblical texts and their relevance to modern Catholic life',
  '2025-10-03T08:12:38.913Z',
  '2025-10-03T08:12:38.913Z'
) ON CONFLICT (name) DO NOTHING;

-- Insert tags if they don't exist
INSERT INTO tags (id, name, slug, "createdAt", "updatedAt")
VALUES 
  ('cmgakgntk00058zao9ge2u7uk', 'Gospel', 'gospel', '2025-10-03T08:12:38.937Z', '2025-10-03T08:12:38.937Z'),
  ('cmgjt6myp00028zvnvc6s8kyt', 'Gratitude', 'gratitude', '2025-10-09T19:26:43.394Z', '2025-10-09T19:26:43.428Z'),
  ('cmgjt6mzo00038zvn1e65lbv4', 'Healing', 'healing', '2025-10-09T19:26:43.428Z', '2025-10-09T19:26:43.428Z')
ON CONFLICT (name) DO NOTHING;

-- Link post to category (get the actual category ID)
INSERT INTO post_categories ("postId", "categoryId")
VALUES (
  'cmgjt6n1c00048zvn13156ums',
  (SELECT id FROM categories WHERE name = 'Scripture Study' LIMIT 1)
) ON CONFLICT DO NOTHING;

-- Link post to tags (get the actual tag IDs)
INSERT INTO post_tags ("postId", "tagId")
VALUES 
  ('cmgjt6n1c00048zvn13156ums', (SELECT id FROM tags WHERE name = 'Gospel' LIMIT 1)),
  ('cmgjt6n1c00048zvn13156ums', (SELECT id FROM tags WHERE name = 'Gratitude' LIMIT 1)),
  ('cmgjt6n1c00048zvn13156ums', (SELECT id FROM tags WHERE name = 'Healing' LIMIT 1))
ON CONFLICT DO NOTHING;

-- ==============================================
-- VERIFICATION
-- ==============================================

-- Show the inserted post
SELECT 'Inserted post details:' as info;
SELECT 
  id, 
  title, 
  slug, 
  status, 
  "publishedAt",
  LENGTH(content) as content_length,
  LENGTH(reflection) as reflection_length,
  SUBSTRING(content, 1, 100) as content_preview,
  SUBSTRING(reflection, 1, 100) as reflection_preview
FROM posts 
WHERE slug = 'sunday-gospel-reflection-grateful-samaritan-october-12-2025';

-- Show categories and tags
SELECT 'Post categories and tags:' as info;
SELECT 
  p.title,
  c.name as category,
  t.name as tag
FROM posts p
LEFT JOIN post_categories pc ON p.id = pc."postId"
LEFT JOIN categories c ON pc."categoryId" = c.id
LEFT JOIN post_tags pt ON p.id = pt."postId"
LEFT JOIN tags t ON pt."tagId" = t.id
WHERE p.slug = 'sunday-gospel-reflection-grateful-samaritan-october-12-2025';

COMMIT;
