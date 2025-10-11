#!/bin/bash

# Ajay's Catholic Commentary - Reorder Reflection Sections
# Generated: 2025-10-10
# Description: Removes main "🤔 Reflection" section and moves "My Personal Reflection" 
#              to appear right after "Pope's Message" section

echo "🔗 Connecting to Supabase..."

# Connection details
DB_HOST="aws-1-ap-southeast-1.pooler.supabase.com"
DB_PORT="6543"
DB_NAME="postgres"
DB_USER="postgres.nxjtogogonbztiyympvb"
DB_PASSWORD="ZsxWeTPQYLV3mglX"

# Create connection string
CONNECTION_STRING="postgresql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}"

echo "📖 Fetching current post..."

# Get current content
CURRENT_CONTENT=$(psql "${CONNECTION_STRING}" -t -c "
SELECT content 
FROM posts 
WHERE slug = 'sunday-gospel-reflection-grateful-samaritan-october-12-2025';
")

echo "📝 Current content length: $(echo "$CURRENT_CONTENT" | wc -c)"

echo "🗑️ Removing main Reflection section..."

# Remove the main "🤔 Reflection" section
UPDATED_CONTENT=$(echo "$CURRENT_CONTENT" | sed 's/<div class="bg-white border border-gray-200 rounded-lg p-8">[[:space:]]*<h2 class="text-2xl font-bold text-gray-900 mb-6">🤔 Reflection<\/h2>.*<\/div>//g')

echo "✅ Main Reflection section removed"

echo "📍 Inserting My Personal Reflection after Pope's Message..."

# Insert "My Personal Reflection" after Pope's Message section
FINAL_CONTENT=$(echo "$UPDATED_CONTENT" | sed 's|</div>\([[:space:]]*\)<div class="bg-white border border-gray-200 rounded-lg p-8">|</div>\1<!-- My Personal Reflection moved here -->\1<div class="max-w-4xl mx-auto mt-8 p-8 bg-amber-50 border-l-4 border-amber-500 rounded-r-lg shadow-md">\1  <h3 class="text-2xl font-serif text-amber-900 mb-4">🙏 My Personal Reflection</h3>\1  <p class="text-gray-800 leading-relaxed mb-4">\1    I feel we have more to thank Jesus than the leaper who was healed by Jesus. Jesus did have pity on us, and gave us himself - by becoming human (to see and imitate him), by sacrificing himself willing on the Cross (for our sins for making justice happen) and in Holy Mass by becoming Eucharist (bread of life) for us.\1\1    We as well as all the humanity should be grateful to Jesus, as he did to each and everyone what no-one, even the most loved one, can do - to be God and die as a friend. But not everyone knows what he did. And we who know may not remember that much has well. \1\1    So may every Sunday, the Eucharist (which itself means thanksgiving too) be a reminder for us to do this. To thank Jesus for what he has done for us!\1\1    May the faith in Jesus, save us.\1  </p>\1</div>\1\1<div class="bg-white border border-gray-200 rounded-lg p-8">|g')

echo "✅ My Personal Reflection section inserted"

echo "🗑️ Removing duplicate My Personal Reflection section..."

# Remove the duplicate "My Personal Reflection" section from its original location
FINAL_CONTENT=$(echo "$FINAL_CONTENT" | sed 's|<div class="max-w-4xl mx-auto mt-8 p-8 bg-amber-50 border-l-4 border-amber-500 rounded-r-lg shadow-md">.*</div>||g')

echo "✅ Duplicate section removed"

echo "💾 Updating database..."

# Update the database
psql "${CONNECTION_STRING}" -c "
UPDATE posts 
SET content = \$1, \"updatedAt\" = NOW()
WHERE slug = 'sunday-gospel-reflection-grateful-samaritan-october-12-2025';
" --set content="$FINAL_CONTENT"

echo "✅ Database updated successfully!"

echo "🔍 Verifying update..."

# Verify the update
psql "${CONNECTION_STRING}" -c "
SELECT 
  id, 
  title, 
  LENGTH(content) as content_length,
  \"updatedAt\"
FROM posts 
WHERE slug = 'sunday-gospel-reflection-grateful-samaritan-october-12-2025';
"

echo "🎉 Reflection sections reordered successfully!"
echo "✅ Main '🤔 Reflection' section removed"
echo "✅ 'My Personal Reflection' moved to appear after Pope's Message"
