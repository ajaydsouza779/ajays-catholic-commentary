-- Ajay's Catholic Commentary - Production Update SQL
-- Generated: 2025-10-10
-- Description: Additional updates for guest comment fields and reflection field

-- ==============================================
-- ADD GUEST COMMENT FIELDS TO COMMENTS TABLE
-- ==============================================

-- Add guest comment fields to support non-registered users
ALTER TABLE comments ADD COLUMN "guestName" TEXT;
ALTER TABLE comments ADD COLUMN "guestEmail" TEXT;

-- Make authorId optional for guest comments
ALTER TABLE comments ALTER COLUMN "authorId" DROP NOT NULL;

-- Add comments to document the purpose of the guest comment fields
COMMENT ON COLUMN comments."guestName" IS 'Name for guest comments when user is not registered';
COMMENT ON COLUMN comments."guestEmail" IS 'Optional email for guest comments';
COMMENT ON COLUMN comments."authorId" IS 'Optional author ID - null for guest comments';

-- ==============================================
-- ADD REFLECTION FIELD TO POSTS TABLE
-- ==============================================

-- Add the reflection column to the posts table
-- This allows admins to edit reflection sections separately from main content
ALTER TABLE posts ADD COLUMN reflection TEXT;

-- Add comment to document the purpose of the reflection field
COMMENT ON COLUMN posts.reflection IS 'Admin-editable reflection section for personal commentary';

-- ==============================================
-- UPDATE EXISTING SUNDAY GOSPEL POST
-- ==============================================

-- Extract the reflection section from the current content and move it to the reflection field
-- This separates the auto-generated content from the personal reflection

UPDATE posts 
SET reflection = '
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
content = '
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
    <h3 class="text-2xl font-bold text-gray-900 mb-6">📚 Reading Reference</h3>
    <div class="bg-gray-50 p-6 rounded-lg">
      <h4 class="text-lg font-semibold text-gray-800 mb-4">Gospel: Luke 17:11-19</h4>
      <div class="space-y-4 text-gray-700">
        <p><strong>11</strong> On the way to Jerusalem he was going through the region between Samaria and Galilee.</p>
        <p><strong>12</strong> As he entered a village, ten lepers approached him. Keeping their distance,</p>
        <p><strong>13</strong> they called out, saying, "Jesus, Master, have mercy on us!"</p>
        <p><strong>14</strong> When he saw them, he said to them, "Go and show yourselves to the priests." And as they went, they were made clean.</p>
        <p><strong>15</strong> Then one of them, when he saw that he was healed, turned back, praising God with a loud voice.</p>
        <p><strong>16</strong> He prostrated himself at Jesus'' feet and thanked him. And he was a Samaritan.</p>
        <p><strong>17</strong> Then Jesus asked, "Were not ten made clean? But the other nine, where are they?</p>
        <p><strong>18</strong> Was none of them found to return and give praise to God except this foreigner?"</p>
        <p><strong>19</strong> Then he said to him, "Get up and go on your way; your faith has made you well."</p>
      </div>
    </div>
  </div>

  <div class="bg-white border border-gray-200 rounded-lg p-8 mb-8">
    <h3 class="text-2xl font-bold text-gray-900 mb-6">🏛️ Historical Context</h3>
    <div class="prose prose-gray max-w-none">
      <p class="text-gray-700 leading-relaxed mb-4">
        This passage occurs during Jesus'' journey to Jerusalem, a significant period in His ministry. The story takes place in the border region between Samaria and Galilee, highlighting the cultural and religious tensions of the time.
      </p>
      
      <p class="text-gray-700 leading-relaxed mb-4">
        <strong>Leprosy in Ancient Times:</strong> Leprosy was not just a physical condition but carried deep social and religious implications. Those with leprosy were considered unclean and were required to live apart from society, calling out "Unclean!" when others approached.
      </p>
      
      <p class="text-gray-700 leading-relaxed mb-4">
        <strong>Samaritan-Jewish Relations:</strong> The presence of a Samaritan among the lepers is significant. Samaritans and Jews had a long history of mutual hostility, making the Samaritan''s return to thank Jesus even more remarkable.
      </p>
      
      <p class="text-gray-700 leading-relaxed">
        <strong>Priestly Verification:</strong> The instruction to "show yourselves to the priests" follows the Mosaic law (Leviticus 14), which required priestly verification of healing before reintegration into society.
      </p>
    </div>
  </div>

  <div class="bg-white border border-gray-200 rounded-lg p-8 mb-8">
    <h3 class="text-2xl font-bold text-gray-900 mb-6">👥 Church Fathers & Saints</h3>
    <div class="space-y-6">
      <div class="bg-blue-50 p-6 rounded-lg">
        <h4 class="text-lg font-semibold text-blue-900 mb-3">St. Augustine (354-430)</h4>
        <p class="text-blue-800 italic">
          "The ten lepers represent all of humanity, afflicted by the leprosy of sin. The one who returned represents those who, having received God''s mercy, respond with gratitude and faith."
        </p>
      </div>
      
      <div class="bg-green-50 p-6 rounded-lg">
        <h4 class="text-lg font-semibold text-green-900 mb-3">St. John Chrysostom (349-407)</h4>
        <p class="text-green-800 italic">
          "The Samaritan''s gratitude teaches us that true healing comes not just from physical cure, but from the recognition of God''s mercy and the response of faith."
        </p>
      </div>
      
      <div class="bg-purple-50 p-6 rounded-lg">
        <h4 class="text-lg font-semibold text-purple-900 mb-3">St. Thomas Aquinas (1225-1274)</h4>
        <p class="text-purple-800 italic">
          "Gratitude is the memory of the heart. The Samaritan''s return demonstrates that true healing includes the healing of the soul through thanksgiving."
        </p>
      </div>
    </div>
  </div>

  <div class="bg-white border border-gray-200 rounded-lg p-8 mb-8">
    <h3 class="text-2xl font-bold text-gray-900 mb-6">👑 Pope''s Message</h3>
    <div class="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
      <h4 class="text-lg font-semibold text-yellow-900 mb-4">Pope Francis on Gratitude</h4>
      <p class="text-yellow-800 leading-relaxed mb-4">
        "Gratitude is not just a feeling; it is a way of life. When we recognize God''s gifts in our lives, we become more aware of His presence and more generous in sharing His love with others."
      </p>
      <p class="text-yellow-800 leading-relaxed">
        "The grateful heart is a heart that sees beyond itself, recognizing the interconnectedness of all God''s creation and responding with love and service."
      </p>
    </div>
  </div>

  <div class="bg-white border border-gray-200 rounded-lg p-8 mb-8">
    <h3 class="text-2xl font-bold text-gray-900 mb-6">💡 Practical Takeaway</h3>
    <div class="bg-green-50 p-6 rounded-lg">
      <h4 class="text-lg font-semibold text-green-900 mb-4">This Week''s Challenge</h4>
      <ul class="space-y-3 text-green-800">
        <li class="flex items-start">
          <span class="text-green-600 mr-2">•</span>
          <span>Keep a gratitude journal, noting three things each day for which you''re thankful</span>
        </li>
        <li class="flex items-start">
          <span class="text-green-600 mr-2">•</span>
          <span>Write a thank-you note to someone who has blessed your life</span>
        </li>
        <li class="flex items-start">
          <span class="text-green-600 mr-2">•</span>
          <span>Begin each prayer with thanksgiving before making requests</span>
        </li>
        <li class="flex items-start">
          <span class="text-green-600 mr-2">•</span>
          <span>Participate in the Sacrament of Reconciliation to "return" to Jesus with gratitude</span>
        </li>
      </ul>
    </div>
  </div>
</div>'
WHERE slug = 'sunday-gospel-reflection-grateful-samaritan-october-12-2025';

-- ==============================================
-- VERIFICATION
-- ==============================================

-- Verify the guest comment fields were added
SELECT column_name, data_type, is_nullable 
FROM information_schema.columns 
WHERE table_name = 'comments' 
AND column_name IN ('guestName', 'guestEmail', 'authorId')
ORDER BY column_name;

-- Verify the reflection field was added
SELECT column_name, data_type, is_nullable 
FROM information_schema.columns 
WHERE table_name = 'posts' 
AND column_name = 'reflection';

-- Verify the content separation worked
SELECT id, title, slug, status, "publishedAt", 
       LENGTH(content) as content_length,
       LENGTH(reflection) as reflection_length,
       SUBSTRING(content, 1, 100) as content_preview,
       SUBSTRING(reflection, 1, 100) as reflection_preview
FROM posts 
WHERE slug = 'sunday-gospel-reflection-grateful-samaritan-october-12-2025';

-- ==============================================
-- COMMIT CHANGES
-- ==============================================

COMMIT;
