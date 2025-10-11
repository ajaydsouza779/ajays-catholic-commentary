# Complete Development Workflow Guide

## 🎯 **Overview**
This guide walks you through setting up a complete development/production workflow with separate databases and safe testing.

## 📋 **Step-by-Step Setup**

### **Step 1: Create Development Supabase Project**

1. **Go to Supabase Dashboard**: https://supabase.com/dashboard
2. **Click**: "New Project"
3. **Project Name**: `ajay-catholic-commentary-dev`
4. **Database Password**: Create a strong password (save it!)
5. **Region**: `ap-southeast-1` (same as production)
6. **Click**: "Create new project"

### **Step 2: Get Development Connection String**

1. **Go to**: Settings → Database
2. **Click**: "Connection string" tab
3. **Select**: "Transaction Pooler"
4. **Copy**: The connection string
5. **Format**: `postgresql://postgres.[PROJECT-REF]:[PASSWORD]@aws-1-ap-southeast-1.pooler.supabase.com:6543/postgres`

### **Step 3: Update Development Environment**

1. **Edit**: `env.development`
2. **Replace**: `DATABASE_URL` with your dev connection string
3. **Save**: The file

### **Step 4: Set Up Development Database**

```bash
# Set up database schema
npx prisma db push

# Seed with essential data
node scripts/seed-dev-database.js

# Verify setup
node scripts/setup-dev-database.js
```

### **Step 5: Test Development Workflow**

```bash
# Start development server
npm run dev

# Make a test change
# Deploy to Vercel preview (automatic)
# Test with dev database
```

## 🚀 **Daily Development Workflow**

### **Working on Features:**
1. **Stay on `develop` branch**
2. **Make changes safely**
3. **Test with dev database**
4. **Deploy to Vercel preview**
5. **When satisfied**: Merge to `main`

### **Deploying to Production:**
1. **Merge**: `develop` → `main`
2. **Production deploys**: Automatically to `ajaycatholic.com`
3. **Uses**: Production database
4. **Monitor**: For any issues

## 🔄 **Database Sync Strategy**

### **Development → Production:**
1. **Schema changes**: Apply to both databases
2. **Data migration**: Use SQL scripts
3. **Content updates**: Manual or scripted
4. **Testing**: Always test in dev first

### **Production → Development:**
1. **Backup production data**
2. **Restore to dev database**
3. **Test changes safely**
4. **Deploy to production**

## 📊 **Environment Summary**

| Environment | Branch | Database | URL | Purpose |
|-------------|--------|----------|-----|---------|
| **Development** | `develop` | Dev Supabase | Vercel Preview | Safe testing |
| **Production** | `main` | Prod Supabase | ajaycatholic.com | Live site |

## 🔐 **Safety Benefits**

- ✅ **Separate databases** (no production data risk)
- ✅ **Preview deployments** (no production downtime)
- ✅ **Feature branches** (isolated changes)
- ✅ **Safe testing** (experiment freely)

## 🛠️ **Troubleshooting**

### **Database Connection Issues:**
- Check connection string format
- Verify Supabase project is active
- Use Transaction Pooler (port 6543)

### **Environment Issues:**
- Ensure correct `.env` file is loaded
- Check Vercel environment variables
- Verify branch-specific deployments

### **Deployment Issues:**
- Check Vercel logs
- Verify environment variables
- Test locally first

## 📝 **Next Steps After Setup**

1. **Test the workflow** with a small change
2. **Document any issues** you encounter
3. **Create feature branches** for major changes
4. **Set up monitoring** for production
5. **Plan content migration** strategy

---

**Last Updated**: October 10, 2025  
**Status**: Ready for implementation  
**Next**: Create dev Supabase project
