#!/bin/bash

# Direct psql sync to Supabase
echo "🚀 Syncing papal data to Supabase using psql..."

# Use the pooler connection string
CONNECTION_STRING="postgresql://postgres.nxjtogogonbztiyympvb:%231Company%40123@aws-1-ap-southeast-1.pooler.supabase.com:5432/postgres"

echo "🔌 Testing connection..."
psql "$CONNECTION_STRING" -c "SELECT 1 as test;" || {
    echo "❌ Connection failed. Please check your Supabase credentials and network."
    exit 1
}

echo "✅ Connection successful!"

echo "📊 Checking current data..."
psql "$CONNECTION_STRING" -c "SELECT COUNT(*) as pope_count FROM popes;"

echo "🗑️  Clearing existing papal data..."
psql "$CONNECTION_STRING" -c "
DELETE FROM papal_achievements;
DELETE FROM papal_events;
DELETE FROM popes;
"

echo "📖 Executing papal data export..."
psql "$CONNECTION_STRING" -f papal-data-export.sql

echo "🔍 Verifying sync..."
psql "$CONNECTION_STRING" -c "
SELECT 
    (SELECT COUNT(*) FROM popes) as popes,
    (SELECT COUNT(*) FROM papal_events) as events,
    (SELECT COUNT(*) FROM papal_achievements) as achievements;
"

echo "🎉 Sync completed!"
