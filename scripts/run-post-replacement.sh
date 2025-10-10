#!/bin/bash

# Script to replace dummy post with Sunday Gospel reflection
# Make sure you have the correct DATABASE_URL set in your environment

echo "🔄 Starting post replacement process..."

# Check if DATABASE_URL is set
if [ -z "$DATABASE_URL" ]; then
    echo "❌ DATABASE_URL environment variable is not set!"
    echo "Please set it to your Supabase connection string:"
    echo "export DATABASE_URL='postgresql://postgres.nxjtogogonbztiyympvb:[YOUR-PASSWORD]@aws-1-ap-southeast-1.pooler.supabase.com:5432/postgres'"
    exit 1
fi

echo "✅ DATABASE_URL is set"
echo "🚀 Running post replacement script..."

# Run the Node.js script
node scripts/replace-dummy-post.js

echo "✅ Post replacement process completed!"
echo "🌐 Check your production site to see the updated post"
