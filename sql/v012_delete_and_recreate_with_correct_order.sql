-- Ajay's Catholic Commentary - Delete and Recreate Post with Correct Section Order
-- Generated: 2025-10-10
-- Description: Deletes current post and recreates it with "My Personal Reflection" 
--              positioned right after "Pope's Message" section

BEGIN;

-- ==============================================
-- DELETE EXISTING POST AND RELATED DATA
-- ==============================================

-- Delete post categories
DELETE FROM post_categories 
WHERE "postId" = 'cmgjt6n1c00048zvn13156ums';

-- Delete post tags
DELETE FROM post_tags 
WHERE "postId" = 'cmgjt6n1c00048zvn13156ums';

-- Delete comments
DELETE FROM comments 
WHERE "postId" = 'cmgjt6n1c00048zvn13156ums';

-- Delete the post
DELETE FROM posts 
WHERE id = 'cmgjt6n1c00048zvn13156ums';

-- ==============================================
-- RECREATE POST WITH CORRECT SECTION ORDER
-- ==============================================

-- Insert the post with correct section order
INSERT INTO posts (
  id,
  title,
  slug,
  content,
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

    <!-- MY PERSONAL REFLECTION - POSITIONED RIGHT AFTER POPE''S MESSAGE -->
    <div class="max-w-4xl mx-auto mt-8 p-8 bg-amber-50 border-l-4 border-amber-500 rounded-r-lg shadow-md">
      <h3 class="text-2xl font-serif text-amber-900 mb-4">🙏 My Personal Reflection</h3>
      <div class="space-y-4 text-gray-800 leading-relaxed">
        <p>I feel we have more to thank Jesus than the leaper who was healed by Jesus. Jesus did have pity on us, and gave us himself - by becoming human (to see and imitate him), by sacrificing himself willing on the Cross (for our sins for making justice happen) and in Holy Mass by becoming Eucharist (bread of life) for us.</p>
        
        <p>We as well as all the humanity should be grateful to Jesus, as he did to each and everyone what no-one, even the most loved one, can do - to be God and die as a friend. But not everyone knows what he did. And we who know may not remember that much has well.</p>
        
        <p>So may every Sunday, the Eucharist (which itself means thanksgiving too) be a reminder for us to do this. To thank Jesus for what he has done for us!</p>
        
        <p><strong>May the faith in Jesus, save us.</strong></p>
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

    <!-- PRAYER SECTION -->
    <div class="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg">
      <div class="space-y-3 text-amber-900 leading-relaxed italic">
        <p>Heavenly Father, I thank You for the gift of Your Son, Jesus in our lives. Thank you Jesus for what you have done for us.</p>
        
        <p>Open my heart to recognize Your blessings in my life. Help me be like the Samaritan leper to acknowledge what you have done and to love and serve you.</p>
        
        <p><strong>Amen.</strong></p>
      </div>
    </div>

    <div class="bg-gray-50 border border-gray-200 rounded-lg p-8 mt-8">
      <div class="text-center">
        <p class="text-gray-700 mb-2">In Christ,</p>
        <p class="text-lg font-semibold text-gray-900">Ajay D''Souza</p>
      </div>
    </div>
  </div>
</div>
  ',
  'A reflection on Luke 17:11-19, the story of the grateful Samaritan leper, exploring themes of gratitude, faith, and God''s healing grace. Includes insights from Church Fathers and practical applications for daily life.',
  'PUBLISHED',
  '2025-10-12T00:00:00.000Z',
  '2025-10-09T19:26:43.488Z',
  NOW(),
  (SELECT id FROM users WHERE email = ''ajay@example.com'' LIMIT 1)
);

-- ==============================================
-- ADD CATEGORIES AND TAGS
-- ==============================================

-- Link post to Scripture Study category
INSERT INTO post_categories ("postId", "categoryId")
VALUES (
  'cmgjt6n1c00048zvn13156ums',
  (SELECT id FROM categories WHERE name = ''Scripture Study'' LIMIT 1)
);

-- Link post to tags
INSERT INTO post_tags ("postId", "tagId")
VALUES 
  ('cmgjt6n1c00048zvn13156ums', (SELECT id FROM tags WHERE name = ''Gospel'' LIMIT 1)),
  ('cmgjt6n1c00048zvn13156ums', (SELECT id FROM tags WHERE name = ''Gratitude'' LIMIT 1)),
  ('cmgjt6n1c00048zvn13156ums', (SELECT id FROM tags WHERE name = ''Healing'' LIMIT 1));

-- ==============================================
-- VERIFICATION
-- ==============================================

-- Verify the new post
SELECT 
  id, 
  title, 
  slug, 
  status,
  LENGTH(content) as content_length,
  "createdAt",
  "updatedAt"
FROM posts 
WHERE slug = ''sunday-gospel-reflection-grateful-samaritan-october-12-2025'';

-- Show categories and tags
SELECT 
  p.title,
  c.name as category,
  t.name as tag
FROM posts p
LEFT JOIN post_categories pc ON p.id = pc."postId"
LEFT JOIN categories c ON pc."categoryId" = c.id
LEFT JOIN post_tags pt ON p.id = pt."postId"
LEFT JOIN tags t ON pt."tagId" = t.id
WHERE p.slug = ''sunday-gospel-reflection-grateful-samaritan-october-12-2025'';

COMMIT;
