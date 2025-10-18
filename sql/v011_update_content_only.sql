-- Ajay's Catholic Commentary - Update Reflection and Prayer Content
-- Generated: 2025-10-10
-- Description: Updates the reflection and prayer sections in the main content field

BEGIN;

-- ==============================================
-- UPDATE CONTENT WITH NEW REFLECTION AND PRAYER
-- ==============================================

-- Update the content field to replace the reflection and prayer sections
UPDATE posts 
SET content = REPLACE(
  content,
  '<div class="max-w-4xl mx-auto mt-8 p-8 bg-amber-50 border-l-4 border-amber-500 rounded-r-lg shadow-md">
  <h3 class="text-2xl font-serif text-amber-900 mb-4">🙏 My Personal Reflection</h3>
  <p class="text-gray-800 leading-relaxed mb-4">
    The story of the ten lepers always strikes me with its profound simplicity and challenging message. It''s easy to identify with the nine who, once healed, went on their way. We often do the same, don''t we? We pray fervently in times of need, promising devotion, but once the crisis passes, our gratitude can wane. The Samaritan, however, reminds us that true healing isn''t just physical; it''s spiritual. His return to Jesus, his act of worship, signifies a deeper understanding of the gift he received and the Giver. It''s a call to constant remembrance and thanksgiving, not just for what God does, but for who He is. This week, I''m challenged to pause more often and genuinely thank God, not just for answered prayers, but for His constant presence and unwavering love, even in the mundane.
  </p>
</div>',
  '<div class="max-w-4xl mx-auto mt-8 p-8 bg-amber-50 border-l-4 border-amber-500 rounded-r-lg shadow-md">
  <h3 class="text-2xl font-serif text-amber-900 mb-4">🙏 My Personal Reflection</h3>
  <p class="text-gray-800 leading-relaxed mb-4">
    I feel we have more to thank Jesus than the leaper who was healed by Jesus. Jesus did have pity on us, and gave us himself - by becoming human (to see and imitate him), by sacrificing himself willing on the Cross (for our sins for making justice happen) and in Holy Mass by becoming Eucharist (bread of life) for us.

    We as well as all the humanity should be grateful to Jesus, as he did to each and everyone what no-one, even the most loved one, can do - to be God and die as a friend. But not everyone knows what he did. And we who know may not remember that much has well. 

    So may every Sunday, the Eucharist (which itself means thanksgiving too) be a reminder for us to do this. To thank Jesus for what he has done for us!

    May the faith in Jesus, save us.
  </p>
</div>'
)
WHERE slug = 'sunday-gospel-reflection-grateful-samaritan-october-12-2025';

-- Update the prayer section
UPDATE posts 
SET content = REPLACE(
  content,
  '<div class="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg">
    <p class="text-amber-900 leading-relaxed italic">Heavenly Father, we thank You for the gift of Your Word and the example of the grateful Samaritan. Open our hearts to recognize Your countless blessings in our lives. Help us to be like the Samaritan leper—not only receiving Your grace but returning to give thanks with faith and love. May our gratitude deepen our relationship with You and inspire us to share Your love with others. Through Christ our Lord. Amen.</p>
  </div>',
  '<div class="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg">
    <p class="text-amber-900 leading-relaxed italic">Heavenly Father, I thank You for the gift of Your Son, Jesus in our lives. Thank you Jesus for what you have done for us.
    Open my heart to recognize Your blessings in my life. Help me be like the Samaritan leper to acknowledge what you have done and to love and serve you. Amen.</p>
  </div>'
)
WHERE slug = 'sunday-gospel-reflection-grateful-samaritan-october-12-2025';

-- ==============================================
-- VERIFICATION
-- ==============================================

-- Verify the update
SELECT 
  id, 
  title, 
  slug, 
  LENGTH(content) as content_length,
  SUBSTRING(content, 1, 200) as content_preview
FROM posts 
WHERE slug = 'sunday-gospel-reflection-grateful-samaritan-october-12-2025';

COMMIT;
