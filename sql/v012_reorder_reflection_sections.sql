-- Ajay's Catholic Commentary - Reorder Reflection Sections
-- Generated: 2025-10-10
-- Description: Removes main "🤔 Reflection" section and moves "My Personal Reflection" 
--              to appear right after "Pope's Message" section

BEGIN;

-- ==============================================
-- UPDATE CONTENT TO REORDER SECTIONS
-- ==============================================

-- Update the content to remove the main reflection section and reorder
UPDATE posts 
SET content = REPLACE(
  content,
  -- Remove the main "🤔 Reflection" section completely
  '<div class="bg-white border border-gray-200 rounded-lg p-8">
      <h2 class="text-2xl font-bold text-gray-900 mb-6">🤔 Reflection</h2>
      <div class="space-y-4 text-gray-700 leading-relaxed">
        <p>Dear brothers and sisters in Christ,

Today''s Gospel presents us with a powerful lesson about gratitude and faith. Ten lepers were healed, but only one—a foreigner, a Samaritan—returned to give thanks. This story challenges us to examine our own hearts.

I feel we have more to thank Jesus than the leper who was healed by Jesus. Jesus did have pity on us, and gave us himself - by becoming human (to see and imitate him), by sacrificing himself willingly on the Cross (for our sins for making justice happen) and in Holy Mass by becoming Eucharist (bread of life) for us.

We as well as all the humanity should be grateful to Jesus, as he did to each and everyone what no-one, even the most loved one, can do - to be God and die as a friend. But not everyone knows what he did. And we who know may not remember that much as well. 

So may every Sunday, the Eucharist (which itself means thanksgiving too) be a reminder for us to do this. To thank Jesus for what he has done for us!

May the faith in Jesus, save us.

How often do we receive God''s blessings and fail to acknowledge them? Like the nine lepers who went on their way, we might be so focused on our own concerns that we forget to return to the source of our healing and joy.

The Samaritan''s gratitude was not just a polite "thank you"—it was a recognition of Jesus as Lord and Savior. His faith was complete: he believed in Jesus'' power to heal, and he believed in Jesus'' authority to save. This is why Jesus said, "Your faith has saved you."

In our own lives, we are constantly receiving God''s grace: the gift of life, family, friends, daily bread, and most importantly, the gift of salvation through Jesus Christ. Do we take these gifts for granted, or do we return to give thanks?</p>
      </div>
    </div>',
  ''
)
WHERE slug = 'sunday-gospel-reflection-grateful-samaritan-october-12-2025';

-- Now insert "My Personal Reflection" right after "Pope's Message" section
UPDATE posts 
SET content = REPLACE(
  content,
  '</div>

    <div class="bg-white border border-gray-200 rounded-lg p-8">',
  '</div>

    <!-- My Personal Reflection moved here -->
    <div class="max-w-4xl mx-auto mt-8 p-8 bg-amber-50 border-l-4 border-amber-500 rounded-r-lg shadow-md">
      <h3 class="text-2xl font-serif text-amber-900 mb-4">🙏 My Personal Reflection</h3>
      <p class="text-gray-800 leading-relaxed mb-4">
        I feel we have more to thank Jesus than the leaper who was healed by Jesus. Jesus did have pity on us, and gave us himself - by becoming human (to see and imitate him), by sacrificing himself willing on the Cross (for our sins for making justice happen) and in Holy Mass by becoming Eucharist (bread of life) for us.

        We as well as all the humanity should be grateful to Jesus, as he did to each and everyone what no-one, even the most loved one, can do - to be God and die as a friend. But not everyone knows what he did. And we who know may not remember that much has well. 

        So may every Sunday, the Eucharist (which itself means thanksgiving too) be a reminder for us to do this. To thank Jesus for what he has done for us!

        May the faith in Jesus, save us.
      </p>
    </div>

    <div class="bg-white border border-gray-200 rounded-lg p-8">'
)
WHERE slug = 'sunday-gospel-reflection-grateful-samaritan-october-12-2025';

-- Remove the duplicate "My Personal Reflection" section from its original location
UPDATE posts 
SET content = REPLACE(
  content,
  '<div class="max-w-4xl mx-auto mt-8 p-8 bg-amber-50 border-l-4 border-amber-500 rounded-r-lg shadow-md">
      <h3 class="text-2xl font-serif text-amber-900 mb-4">🙏 My Personal Reflection</h3>
      <p class="text-gray-800 leading-relaxed mb-4">
        I feel we have more to thank Jesus than the leaper who was healed by Jesus. Jesus did have pity on us, and gave us himself - by becoming human (to see and imitate him), by sacrificing himself willing on the Cross (for our sins for making justice happen) and in Holy Mass by becoming Eucharist (bread of life) for us.

        We as well as all the humanity should be grateful to Jesus, as he did to each and everyone what no-one, even the most loved one, can do - to be God and die as a friend. But not everyone knows what he did. And we who know may not remember that much has well. 

        So may every Sunday, the Eucharist (which itself means thanksgiving too) be a reminder for us to do this. To thank Jesus for what he has done for us!

        May the faith in Jesus, save us.
      </p>
    </div>',
  ''
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
