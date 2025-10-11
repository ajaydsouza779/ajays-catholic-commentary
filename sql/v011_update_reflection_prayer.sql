-- Ajay's Catholic Commentary - Update Reflection and Prayer
-- Generated: 2025-10-10
-- Description: Updates the reflection and prayer sections for the Sunday Gospel post

BEGIN;

-- ==============================================
-- UPDATE REFLECTION AND PRAYER SECTIONS
-- ==============================================

-- Update the reflection and prayer content for the Sunday Gospel post
UPDATE posts 
SET 
  content = REPLACE(
    content,
    'I feel we have more to thank Jesus than the leaper who was healed by Jesus. Jesus did have pity on us, and gave us himself - by becoming human (to see and imitate him), by sacrificing himself willing on the Cross (for our sins for making justice happen) and in Holy Mass by becoming Eucharist (bread of life) for us.

We as well as all the humanity should be grateful to Jesus, as he did to each and everyone what no-one, even the most loved one, can do - to be God and die as a friend. But not everyone knows what he did. And we who know may not remember that much has well. 

So may every Sunday, the Eucharist (which itself means thanksgiving too) be a reminder for us to do this. To thank Jesus for what he has done for us!

May the faith in Jesus, save us.',
    'I feel we have more to thank Jesus than the leaper who was healed by Jesus. Jesus did have pity on us, and gave us himself - by becoming human (to see and imitate him), by sacrificing himself willing on the Cross (for our sins for making justice happen) and in Holy Mass by becoming Eucharist (bread of life) for us.

We as well as all the humanity should be grateful to Jesus, as he did to each and everyone what no-one, even the most loved one, can do - to be God and die as a friend. But not everyone knows what he did. And we who know may not remember that much has well. 

So may every Sunday, the Eucharist (which itself means thanksgiving too) be a reminder for us to do this. To thank Jesus for what he has done for us!

May the faith in Jesus, save us.'
  ),
  reflection = '
<div class="max-w-4xl mx-auto mt-8 p-8 bg-amber-50 border-l-4 border-amber-500 rounded-r-lg shadow-md">
  <h3 class="text-2xl font-serif text-amber-900 mb-4">🙏 My Personal Reflection</h3>
  <p class="text-gray-800 leading-relaxed mb-4">
    I feel we have more to thank Jesus than the leaper who was healed by Jesus. Jesus did have pity on us, and gave us himself - by becoming human (to see and imitate him), by sacrificing himself willing on the Cross (for our sins for making justice happen) and in Holy Mass by becoming Eucharist (bread of life) for us.

    We as well as all the humanity should be grateful to Jesus, as he did to each and everyone what no-one, even the most loved one, can do - to be God and die as a friend. But not everyone knows what he did. And we who know may not remember that much has well. 

    So may every Sunday, the Eucharist (which itself means thanksgiving too) be a reminder for us to do this. To thank Jesus for what he has done for us!

    May the faith in Jesus, save us.
  </p>
</div>
  ',
  prayer = '
<div class="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg">
  <p class="text-amber-900 leading-relaxed italic">
    Heavenly Father, I thank You for the gift of Your Son, Jesus in our lives. Thank you Jesus for what you have done for us.
    Open my heart to recognize Your blessings in my life. Help me be like the Samaritan leper to acknowledge what you have done and to love and serve you. Amen.
  </p>
</div>
  '
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
  LENGTH(reflection) as reflection_length,
  LENGTH(prayer) as prayer_length,
  SUBSTRING(reflection, 1, 100) as reflection_preview,
  SUBSTRING(prayer, 1, 100) as prayer_preview
FROM posts 
WHERE slug = 'sunday-gospel-reflection-grateful-samaritan-october-12-2025';

COMMIT;
