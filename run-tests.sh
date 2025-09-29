#!/bin/bash

echo "🧪 Starting Ajay's Catholic Commentary Test Suite"
echo "=================================================="

# Check if server is running
echo "🔍 Checking if development server is running..."
if curl -s http://localhost:3001 > /dev/null; then
    echo "✅ Server is running on http://localhost:3001"
else
    echo "❌ Server is not running. Starting development server..."
    npm run dev &
    SERVER_PID=$!
    
    # Wait for server to start
    echo "⏳ Waiting for server to start..."
    for i in {1..30}; do
        if curl -s http://localhost:3001 > /dev/null; then
            echo "✅ Server started successfully!"
            break
        fi
        sleep 2
        echo "⏳ Still waiting... ($i/30)"
    done
    
    if ! curl -s http://localhost:3001 > /dev/null; then
        echo "❌ Failed to start server. Exiting."
        kill $SERVER_PID 2>/dev/null
        exit 1
    fi
fi

# Ensure database is seeded
echo "🌱 Ensuring database is seeded..."
npx tsx scripts/seed-database.ts || echo "⚠️  Database seeding had issues, but continuing..."

# Run tests
echo "🚀 Running Playwright tests..."
echo ""

# Run tests with different options based on arguments
if [ "$1" = "ui" ]; then
    echo "🎨 Opening Playwright UI..."
    npm run test:ui
elif [ "$1" = "headed" ]; then
    echo "👀 Running tests in headed mode..."
    npm run test:headed
elif [ "$1" = "debug" ]; then
    echo "🐛 Running tests in debug mode..."
    npm run test:debug
else
    echo "🤖 Running tests in headless mode..."
    npm run test
fi

TEST_EXIT_CODE=$?

# Cleanup
if [ ! -z "$SERVER_PID" ]; then
    echo "🧹 Cleaning up development server..."
    kill $SERVER_PID 2>/dev/null
fi

echo ""
echo "=================================================="
if [ $TEST_EXIT_CODE -eq 0 ]; then
    echo "✅ All tests passed! 🎉"
else
    echo "❌ Some tests failed. Check the output above."
fi
echo "=================================================="

exit $TEST_EXIT_CODE
