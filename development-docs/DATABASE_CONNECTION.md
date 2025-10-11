# Database Connection Details

## 🗄️ **Production Database (Supabase)**

### Connection Strings

#### Direct Connection
```
postgresql://postgres:[YOUR-PASSWORD]@db.nxjtogogonbztiyympvb.supabase.co:5432/postgres
```

#### Transaction Pooler (Recommended for Production)
```
postgresql://postgres.nxjtogogonbztiyympvb:[YOUR-PASSWORD]@aws-1-ap-southeast-1.pooler.supabase.com:6543/postgres
```

#### Session Pooler (Alternative - Limited Connections)
```
postgresql://postgres.nxjtogogonbztiyympvb:[YOUR-PASSWORD]@aws-1-ap-southeast-1.pooler.supabase.com:5432/postgres
```

### Database Details
- **Direct Host**: `db.nxjtogogonbztiyympvb.supabase.co` (port 5432)
- **Pooler Host**: `aws-1-ap-southeast-1.pooler.supabase.com`
- **Transaction Pooler Port**: `6543` (Recommended)
- **Session Pooler Port**: `5432` (Limited connections)
- **Database**: `postgres`
- **Username**: `postgres.nxjtogogonbztiyympvb` (pooler) / `postgres` (direct)
- **Region**: `ap-southeast-1` (AWS)
- **Provider**: Supabase (PostgreSQL)

### Environment Variables
```bash
# For production deployment (RECOMMENDED - Transaction Pooler)
DATABASE_URL="postgresql://postgres.nxjtogogonbztiyympvb:[YOUR-PASSWORD]@aws-1-ap-southeast-1.pooler.supabase.com:6543/postgres"

# Alternative - Session Pooler (Limited connections)
# DATABASE_URL="postgresql://postgres.nxjtogogonbztiyympvb:[YOUR-PASSWORD]@aws-1-ap-southeast-1.pooler.supabase.com:5432/postgres"

# Direct connection (for scripts/migrations)
# DATABASE_URL="postgresql://postgres:[YOUR-PASSWORD]@db.nxjtogogonbztiyympvb.supabase.co:5432/postgres"
```

### Connection Notes
- **Transaction Pooler (Port 6543)**: ✅ **RECOMMENDED** for production web applications
- **Session Pooler (Port 5432)**: ⚠️ Limited connections, can hit `MaxClientsInSessionMode` error
- **Direct Connection**: Use for one-time operations, migrations, or scripts
- **Password**: `ZsxWeTPQYLV3mglX` (updated October 10, 2025)
- **SSL**: Automatically handled by Supabase

### 🚨 Critical Troubleshooting Notes
- **Port 5432 (Session Pooler)**: Can fail with `MaxClientsInSessionMode: max clients reached`
- **Port 6543 (Transaction Pooler)**: ✅ **SOLUTION** - Use this for production
- **Direct Connection**: May have DNS resolution issues (`ENOTFOUND`)
- **Always test locally first**: Use the test scripts in `/scripts/` directory

## 🔧 **Development Database (SQLite)**

### Local Development
```bash
# SQLite file location
./dev.db

# Connection string for development
DATABASE_URL="file:./dev.db"
```

## 📋 **Database Schema Status**

### Applied SQL Files
- ✅ `v005_production_update.sql` - Homepage redesign and first post
- ✅ `v006_production_fix.sql` - Fixed PostgreSQL case sensitivity issues  
- ✅ `v007_production_update.sql` - Added reflection field (partially applied)
- ✅ `v008_production_update.sql` - Added guest comment fields safely

### Current Schema Features
- ✅ **Posts Table**: Includes `reflection` field for admin-editable content
- ✅ **Comments Table**: Includes `guestName` and `guestEmail` fields
- ✅ **Users Table**: Authentication and role management
- ✅ **Categories & Tags**: Post categorization system

## 🚀 **Usage Instructions**

### For Scripts (Direct Connection)
```javascript
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: "postgresql://postgres:[YOUR-PASSWORD]@db.nxjtogogonbztiyympvb.supabase.co:5432/postgres"
    }
  }
});
```

### For Production App (Session Pooler)
```bash
# Set in Vercel environment variables
DATABASE_URL="postgresql://postgres.nxjtogogonbztiyympvb:[YOUR-PASSWORD]@aws-1-ap-southeast-1.pooler.supabase.com:5432/postgres"
```

## 🔐 **Security Notes**

- **Password**: `ZsxWeTPQYLV3mglX` (updated October 10, 2025)
- **Connection Strings**: Use environment variables in production
- **Access Control**: Supabase handles authentication and authorization
- **SSL**: All connections are encrypted by default

## ⚠️ **Connection Testing Status**

- **Password**: `ZsxWeTPQYLV3mglX` - ✅ Updated October 10, 2025
- **Transaction Pooler (Port 6543)**: ✅ **WORKING** - Production ready
- **Session Pooler (Port 5432)**: ❌ **FAILED** - Max clients reached error
- **Direct Connection**: ❌ **FAILED** - DNS resolution issues
- **Solution**: Use Transaction Pooler (port 6543) for all production deployments

## 📊 **Database Management**

### Useful Queries
```sql
-- Check table structure
SELECT column_name, data_type, is_nullable 
FROM information_schema.columns 
WHERE table_name = 'posts';

-- Check guest comment fields
SELECT column_name, data_type, is_nullable 
FROM information_schema.columns 
WHERE table_name = 'comments' 
AND column_name IN ('guestName', 'guestEmail', 'authorId');

-- Check reflection field
SELECT column_name, data_type, is_nullable 
FROM information_schema.columns 
WHERE table_name = 'posts' 
AND column_name = 'reflection';
```

### Backup & Restore
- **Supabase Dashboard**: Use the Supabase dashboard for backups
- **pg_dump**: Use PostgreSQL tools for manual backups
- **Prisma Migrate**: Use for schema changes and migrations

---
## 🤖 **For Future AI Agents**

### Critical Database Connection Information
- **PRODUCTION CONNECTION**: `postgresql://postgres.nxjtogogonbztiyympvb:ZsxWeTPQYLV3mglX@aws-1-ap-southeast-1.pooler.supabase.com:6543/postgres`
- **Connection Type**: Transaction Pooler (Port 6543)
- **Why Port 6543**: Session Pooler (5432) hits `MaxClientsInSessionMode` error
- **Direct Connection**: Fails with `ENOTFOUND` DNS resolution issues
- **Test Scripts**: Available in `/scripts/` directory for connection testing

### Common Issues & Solutions
1. **"Can't reach database server"** → Use Transaction Pooler (port 6543)
2. **"MaxClientsInSessionMode"** → Switch from Session Pooler (5432) to Transaction Pooler (6543)
3. **"ENOTFOUND" errors** → Use pooler connection, not direct connection
4. **Connection testing**: Always test locally with scripts before deploying

### Vercel Environment Variables
```bash
# Set in Vercel dashboard or CLI
vercel env add DATABASE_URL
# Value: postgresql://postgres.nxjtogogonbztiyympvb:ZsxWeTPQYLV3mglX@aws-1-ap-southeast-1.pooler.supabase.com:6543/postgres
```

---

**Last Updated**: October 10, 2025  
**Status**: ✅ Production database active and configured with Transaction Pooler  
**Next**: Monitor performance and plan scaling if needed
