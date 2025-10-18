# GitHub Secrets Setup for Database Sync

## Required Secrets

Add these secrets in your GitHub repository: **Settings → Secrets and variables → Actions → New repository secret**

### 1. DEV_DATABASE_URL
**Name:** `DEV_DATABASE_URL`  
**Value:** 
```
postgresql://postgres.kdmmosvpfvtfewkndlcu:%2312Company@aws-1-us-east-1.pooler.supabase.com:5432/postgres?pgbouncer=true&sslmode=require
```

### 2. DEV_DATABASE_URL_TX
**Name:** `DEV_DATABASE_URL_TX`  
**Value:**
```
postgresql://postgres.kdmmosvpfvtfewkndlcu:%2312Company@aws-1-us-east-1.pooler.supabase.com:6543/postgres?pgbouncer=true&sslmode=require
```

### 3. PROD_DATABASE_URL_RO
**Name:** `PROD_DATABASE_URL_RO`  
**Value:**
```
postgresql://postgres.nxjtogogonbztiyympvb:ZsxWeTPQYLV3mglX@aws-1-ap-southeast-1.pooler.supabase.com:5432/postgres?pgbouncer=true&sslmode=require
```

### 4. PROD_DATABASE_URL (for dev-to-prod sync)
**Name:** `PROD_DATABASE_URL`  
**Value:**
```
postgresql://postgres.nxjtogogonbztiyympvb:ZsxWeTPQYLV3mglX@aws-1-ap-southeast-1.pooler.supabase.com:6543/postgres?pgbouncer=true&sslmode=require
```

### 5. LOCAL_DATABASE_URL (for local-to-dev sync)
**Name:** `LOCAL_DATABASE_URL`  
**Value:**
```
file:./dev.db
```

## How to Use

### Manual Workflow Trigger
1. Go to **Actions** tab in your GitHub repository
2. Select **Database Sync** workflow
3. Click **Run workflow**
4. Choose sync direction:
   - **prod-to-dev**: Sync production data to development
   - **dev-to-prod**: Sync development data to production (⚠️ Use with caution)
   - **local-to-dev**: Sync local SQLite data to development
5. Optionally check **Skip schema push** to only sync data
6. Click **Run workflow**

### Sync Directions

#### prod-to-dev
- Pushes schema to dev (if not skipped)
- Syncs all data from production to development
- Applies performance indexes
- **Safe**: Development database is updated

#### dev-to-prod
- Syncs all data from development to production
- **⚠️ DANGEROUS**: This will overwrite production data
- Only use when you're sure dev data is correct

#### local-to-dev
- Pushes schema to dev (if not skipped)
- Syncs all data from local SQLite to development PostgreSQL
- Applies performance indexes
- **Safe**: Development database is updated

## Notes
- The `%23` in passwords is URL-encoded `#` character
- All connections use SSL mode required (`sslmode=require`)
- Session Pooler (port 5432) for normal operations
- Transaction Pooler (port 6543) for schema migrations
- Local sync uses SQLite file path
