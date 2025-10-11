#!/bin/bash

# Ajay's Catholic Commentary - Development Workflow Setup
# This script helps set up the dev/prod workflow

echo "🚀 Setting up Development Workflow for Ajay's Catholic Commentary"
echo "================================================================"

# Check current branch
CURRENT_BRANCH=$(git branch --show-current)
echo "📍 Current branch: $CURRENT_BRANCH"

if [ "$CURRENT_BRANCH" != "develop" ]; then
    echo "⚠️  You should be on the 'develop' branch for development work"
    echo "🔄 Switching to develop branch..."
    git checkout develop
fi

echo ""
echo "📋 Development Workflow Setup:"
echo "=============================="
echo ""
echo "1. 🗄️  DATABASE SETUP:"
echo "   - Create new Supabase project: 'ajay-catholic-commentary-dev'"
echo "   - Get connection string from new project"
echo "   - Update env.development with new DATABASE_URL"
echo ""
echo "2. 🔧 VERCEL SETUP:"
echo "   - Preview deployments will use develop branch"
echo "   - Production deployments will use main branch"
echo "   - Set environment variables in Vercel dashboard"
echo ""
echo "3. 🚀 WORKFLOW:"
echo "   - Work on 'develop' branch (safe testing)"
echo "   - Deploy to Vercel preview (automatic)"
echo "   - Test thoroughly with dev database"
echo "   - When ready: merge develop → main"
echo "   - Production deploys to ajaycatholic.com"
echo ""
echo "4. 📊 DATABASE SYNC:"
echo "   - Dev database: Safe testing environment"
echo "   - Prod database: Live production data"
echo "   - Use SQL scripts to sync schema changes"
echo "   - Test all changes in dev first"
echo ""

echo "🎯 Next Steps:"
echo "=============="
echo "1. Create new Supabase project for development"
echo "2. Update env.development with new database URL"
echo "3. Test the workflow with a small change"
echo "4. Document any issues or improvements"
echo ""

echo "✅ Development workflow setup complete!"
echo "📖 See development-docs/DEV_PROD_SETUP.md for detailed instructions"
