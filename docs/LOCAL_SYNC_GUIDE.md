# Local to Dev Sync Guide

## Why Local Sync Can't Run in GitHub Actions

You're absolutely correct! The local sync **cannot run in GitHub Actions** because:

- Your local SQLite file (`file:./dev.db`) only exists on your local machine
- GitHub Actions runs on remote servers that don't have access to your local files
- The local database is not accessible from the cloud

## How to Sync Local → Dev

### Option 1: Run Locally (Recommended)

```bash
# Set your dev database URL
export DATABASE_URL="postgresql://postgres.kdmmosvpfvtfewkndlcu:%2312Company@aws-1-us-east-1.pooler.supabase.com:5432/postgres?pgbouncer=true&sslmode=require"

# Run the local sync script
node scripts/sync-local-to-dev-local.js
```

### Option 2: Manual Database Export/Import

If you prefer to use GitHub Actions, you can:

1. **Export your local data** to a file:
   ```bash
   # Export local SQLite to SQL file
   sqlite3 dev.db .dump > local-data.sql
   ```

2. **Upload the SQL file** to your repository (temporarily)

3. **Use GitHub Actions** to import the SQL file to dev database

4. **Delete the SQL file** from repository (for security)

## Updated GitHub Actions Workflow

The GitHub Actions workflow now only supports:
- **prod-to-dev**: Production → Development
- **dev-to-prod**: Development → Production ⚠️

The **local-to-dev** option has been removed from GitHub Actions because it's not technically feasible.

## Recommended Workflow

1. **Develop locally** with SQLite
2. **Test your changes** locally
3. **Sync to dev** using the local script: `node scripts/sync-local-to-dev-local.js`
4. **Test in dev environment** (Vercel preview)
5. **Sync to prod** using GitHub Actions: **dev-to-prod**

This gives you the best of both worlds:
- Fast local development with SQLite
- Cloud-based sync for dev/prod environments
- Manual control over when to sync
