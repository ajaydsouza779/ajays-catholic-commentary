# Database Connection Details

## 🗄️ **Production Database (Supabase)**

### Connection Strings

#### Direct Connection
```
postgresql://postgres:[YOUR-PASSWORD]@db.nxjtogogonbztiyympvb.supabase.co:5432/postgres
```

#### Session Pooler (Recommended for Production)
```
postgresql://postgres.nxjtogogonbztiyympvb:[YOUR-PASSWORD]@aws-1-ap-southeast-1.pooler.supabase.com:5432/postgres
```

### Database Details
- **Host**: `db.nxjtogogonbztiyympvb.supabase.co`
- **Port**: `5432`
- **Database**: `postgres`
- **Username**: `postgres`
- **Region**: `ap-southeast-1` (AWS)
- **Provider**: Supabase (PostgreSQL)

### Environment Variables
```bash
# For production deployment
DATABASE_URL="postgresql://postgres.nxjtogogonbztiyympvb:[YOUR-PASSWORD]@aws-1-ap-southeast-1.pooler.supabase.com:5432/postgres"
```

### Connection Notes
- **Direct Connection**: Use for one-time operations, migrations, or scripts
- **Session Pooler**: Use for production applications (better performance, connection pooling)
- **Password**: Use the password shared previously
- **SSL**: Automatically handled by Supabase

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

- **Password**: Store securely, never commit to version control
- **Connection Strings**: Use environment variables in production
- **Access Control**: Supabase handles authentication and authorization
- **SSL**: All connections are encrypted by default

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
**Last Updated**: October 10, 2025  
**Status**: Production database active and configured  
**Next**: Monitor performance and plan scaling if needed
