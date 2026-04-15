# 🚀 Catch-Up Guide - Ajay's Catholic Commentary

**Last Updated**: October 18, 2025  
**Current Branch**: `develop`  
**Status**: Ready for local development

---

## 📋 What You Were Doing Last

### 1. **Database Synchronization Setup**
- Set up GitHub Actions workflows for syncing between production and development databases
- Created separate workflows for:
  - **Prod → Dev Sync** (`.github/workflows/dev-sync.yml`) - Safe, one-way sync
  - **Dev → Prod Sync** (`.github/workflows/dev-to-prod-sync.yml`) - Protected with confirmation requirements
- Both workflows are **manual-only** (`workflow_dispatch`) for safety

### 2. **Local Development Environment Configuration**
- Configured local development to use **SQLite** (`dev.db`)
- Updated `prisma/schema.prisma` to use SQLite provider
- Fixed build scripts to use local schema for local builds
- Production uses PostgreSQL via `prisma/schema.postgres.prisma`

### 3. **Next.js 15 Compatibility Fixes**
- Updated `searchParams` type to `Promise<{ category?: string }>` in `src/app/posts/page.tsx`
- Fixed `getServerSession` import paths (changed from `'next-auth'` to `'next-auth/next'`)
- Moved `authOptions` to `src/lib/auth.ts` for better organization
- Removed SQLite-incompatible `mode: 'insensitive'` filters from search API

### 4. **Feature Toggles System** (In Develop Branch)
- Created feature toggle system for admin-controlled feature management
- Added `FeatureToggle` model to database schema
- Created admin UI at `/admin/features` for managing toggles
- **Note**: This requires database schema update - currently only in `develop` branch

### 5. **Database Export & Recreation Scripts**
- Created scripts to export local SQLite database to PostgreSQL-compatible SQL
- Multiple export scripts for different use cases:
  - `scripts/export-local-database.js` - Full database export
  - `scripts/export-complete-postgres-schema.js` - Complete PostgreSQL schema
  - `scripts/complete-dev-setup.js` - Complete dev database setup
  - `scripts/safe-dev-recreate.js` - Safe dev database recreation

### 6. **New Post Creation**
- Created script `scripts/create-tomorrow-post.js` for generating Sunday Gospel Reflection posts
- Generated SQL insert statements for production deployment
- Created "safe" SQL version with conditional inserts to prevent foreign key errors

---

## 🎯 Current Project State

### **Branch Status**
- **Current Branch**: `develop`
- **Status**: Up to date with `origin/develop`
- **Uncommitted Changes**: Multiple modified files (see below)

### **Modified Files** (Not Committed)
```
Modified:
- package.json (build script changes)
- prisma/schema.prisma (SQLite provider)
- Multiple API routes (import path fixes, SQLite compatibility)
- src/app/posts/page.tsx (Next.js 15 compatibility)
- src/app/posts/[slug]/page.tsx (authOptions import fix)

Untracked:
- DEVELOP_CHANGES_SUMMARY.md (summary of develop branch changes)
- database-exports/ (database export files)
- dev.db (local SQLite database)
- Multiple database sync scripts
```

### **Database Configuration**
- **Local Development**: SQLite (`file:./dev.db`)
- **Production**: PostgreSQL (Supabase)
- **Development (Supabase)**: PostgreSQL (separate project)

### **Environment Files**
- `.env.local` - Local development (SQLite)
- `.env` - Should point to local SQLite for local dev
- `env.development` - Development Supabase connection
- `env.example` - Template for environment variables

---

## ⚠️ Pending Tasks

### **High Priority**
1. **Database Sync Issues**
   - Dev database is not ready (needs schema update)
   - Production database is old (needs sync from local)
   - **Action Needed**: Run database sync workflow or manual sync

2. **Feature Toggles Migration**
   - Feature toggle system exists in `develop` branch
   - Cannot move to `main` until dev/prod databases are updated
   - **Action Needed**: Update dev database schema, then sync to prod

3. **Selective Migration from Develop to Main**
   - Some improvements in `develop` can be moved to `main`
   - See `DEVELOP_CHANGES_SUMMARY.md` for details
   - **Action Needed**: Review and selectively cherry-pick commits

### **Medium Priority**
4. **Mobile View Improvements**
   - You mentioned mobile view improvements were made
   - Need to identify and verify these changes
   - **Action Needed**: Review UI components for mobile responsiveness

5. **Build Configuration**
   - Turbopack was removed from dev script (causing issues)
   - Build script uses local schema (SQLite) for local builds
   - **Action Needed**: Verify build process works correctly

### **Low Priority**
6. **Documentation**
   - Multiple documentation files exist in `development-docs/`
   - Some may be outdated
   - **Action Needed**: Review and consolidate documentation

---

## 🚀 How to Start the App Locally

### **Step 1: Check Current State**
```bash
# Check current branch
git branch

# Check for uncommitted changes
git status

# View recent commits
git log --oneline -10
```

### **Step 2: Set Up Environment Variables**
```bash
# Create .env.local if it doesn't exist
cp env.example .env.local

# Edit .env.local with your local configuration
# For local development, ensure:
DATABASE_URL="file:./dev.db"
NEXTAUTH_URL="http://localhost:3001"
NEXTAUTH_SECRET="dev-secret-key-change-this"
```

### **Step 3: Install Dependencies**
```bash
# Install all dependencies
npm install
```

### **Step 4: Set Up Database**
```bash
# Generate Prisma client for local SQLite
npx prisma generate --schema=prisma/schema.prisma

# Push schema to local database (creates dev.db if it doesn't exist)
npx prisma db push --schema=prisma/schema.prisma

# (Optional) Seed database with initial data
npm run db:seed
```

### **Step 5: Start Development Server**
```bash
# Start the development server on port 3001
npm run dev
```

### **Step 6: Access the Application**
- **Local URL**: http://localhost:3001
- **Admin Dashboard**: http://localhost:3001/admin
- **Default Admin Account**:
  - Email: `ajay@example.com`
  - Password: `admin123`

### **Step 7: Verify Everything Works**
```bash
# Check if database is accessible
npx prisma studio

# Run tests (if needed)
npm run test
```

---

## 📁 Important Documentation Locations

### **Main Documentation**
- `README.md` - Main project documentation
- `CATCH_UP_GUIDE.md` - This file (current status and catch-up info)
- `DEVELOP_CHANGES_SUMMARY.md` - Summary of changes in develop branch

### **Database Documentation**
- `development-docs/DATABASE_CONNECTION.md` - Database connection details
- `database-exports/README.md` - Database export/import instructions
- `prisma/schema.prisma` - Local SQLite schema
- `prisma/schema.postgres.prisma` - Production PostgreSQL schema

### **Development Documentation**
- `development-docs/` - Various development guides
- `docs/GITHUB_SECRETS_SETUP.md` - GitHub Actions secrets setup
- `docs/LOCAL_SYNC_GUIDE.md` - Local database sync guide

### **Workflow Documentation**
- `.github/workflows/dev-sync.yml` - Prod to Dev sync workflow
- `.github/workflows/dev-to-prod-sync.yml` - Dev to Prod sync workflow

---

## 🔧 Common Commands Reference

### **Development**
```bash
npm run dev              # Start dev server (port 3001)
npm run build            # Build for production
npm run start            # Start production server
npm run lint             # Run ESLint
```

### **Database**
```bash
npm run db:generate      # Generate Prisma client (local)
npm run db:push          # Push schema to database (local)
npm run db:seed          # Seed database with initial data
npm run db:studio        # Open Prisma Studio
npm run db:reset         # Reset local database

# Production database
npm run db:generate:prod # Generate Prisma client (PostgreSQL)
npm run db:push:prod     # Push schema to production database
```

### **Testing**
```bash
npm run test             # Run all tests
npm run test:ui          # Run tests with UI
npm run test:headed      # Run tests in headed mode
npm run test:debug       # Debug mode
```

### **Git Workflow**
```bash
# Check what's different between branches
git diff main..develop --stat

# View changes in develop not in main
git log main..develop --oneline

# Switch branches
git checkout main
git checkout develop
```

---

## 🗄️ Database Information

### **Local Development (SQLite)**
- **File**: `./dev.db`
- **Schema**: `prisma/schema.prisma`
- **Connection**: `file:./dev.db`
- **Provider**: SQLite

### **Production (PostgreSQL - Supabase)**
- **Provider**: Supabase PostgreSQL
- **Schema**: `prisma/schema.postgres.prisma`
- **Connection Type**: Transaction Pooler (Port 6543) - **RECOMMENDED**
- **Connection String**: See `development-docs/DATABASE_CONNECTION.md`

### **Development (PostgreSQL - Supabase)**
- **Provider**: Supabase PostgreSQL (separate project)
- **Connection**: See `env.development`
- **Status**: ⚠️ Not ready (needs schema update)

---

## 🚨 Important Notes

### **Never Push Directly to Main**
- Always work in `develop` branch
- Create pull requests to merge to `main`
- Production is connected to `main` branch

### **Database Sync Strategy**
- **Prod → Dev**: Safe, one-way sync (delete dev, recreate from prod)
- **Dev → Prod**: Protected with confirmation and backup options
- Both workflows are manual-only for safety

### **Build Configuration**
- Local builds use SQLite schema (`prisma/schema.prisma`)
- Production builds use PostgreSQL schema (`prisma/schema.postgres.prisma`)
- Turbopack is disabled in dev script (was causing issues)

### **Next.js 15 Compatibility**
- `searchParams` is now a Promise
- `getServerSession` import path changed to `'next-auth/next'`
- `authOptions` moved to `src/lib/auth.ts`

---

## 🎯 Next Steps When You Return

1. **Review Current State**
   - Check `git status` to see uncommitted changes
   - Review `DEVELOP_CHANGES_SUMMARY.md` for develop branch changes

2. **Decide on Database Strategy**
   - Do you want to sync dev database from production?
   - Or update dev database schema first?

3. **Selective Migration**
   - Review changes in `develop` branch
   - Decide which features to move to `main`
   - Use cherry-picking for selective migration

4. **Mobile Improvements**
   - Identify mobile view improvements made
   - Test and verify mobile responsiveness
   - Move to `main` if ready

5. **Feature Toggles**
   - Update dev database schema to include FeatureToggle model
   - Test feature toggle system
   - Move to production when ready

---

## 📞 Quick Troubleshooting

### **App Won't Start**
```bash
# Clear Next.js cache
rm -rf .next

# Regenerate Prisma client
npx prisma generate --schema=prisma/schema.prisma

# Restart dev server
npm run dev
```

### **Database Connection Issues**
```bash
# Check if database file exists
ls -la dev.db

# Reset database
npm run db:reset

# Open Prisma Studio to inspect
npx prisma studio
```

### **Build Errors**
```bash
# Check for TypeScript errors
npx tsc --noEmit

# Check for linting errors
npm run lint

# Clear cache and rebuild
rm -rf .next node_modules/.cache
npm run build
```

---

## 📝 File Structure Quick Reference

```
ajays-catholic-commentary/
├── src/
│   ├── app/              # Next.js pages and API routes
│   ├── components/       # React components
│   └── lib/              # Utility functions (auth.ts, prisma.ts, etc.)
├── prisma/
│   ├── schema.prisma     # Local SQLite schema
│   └── schema.postgres.prisma  # Production PostgreSQL schema
├── scripts/              # Database sync and utility scripts
├── database-exports/     # Database export files
├── .github/workflows/    # GitHub Actions workflows
└── development-docs/     # Development documentation
```

---

**Last Session Date**: October 18, 2025  
**Current Status**: Ready for development  
**Next Action**: Review pending tasks and decide on database sync strategy

---

*This document should be updated whenever significant changes are made to the project structure or workflow.*

