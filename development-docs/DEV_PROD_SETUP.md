# Development and Production Environment Setup

## 🎯 **Environment Strategy**

### **Git Workflow:**
- **`main`** → Production (ajaycatholic.com)
- **`develop`** → Development (Vercel preview)
- **`feature/*`** → Feature branches

### **Database Strategy:**
- **Production**: Current Supabase database (ajaycatholic.com)
- **Development**: New Supabase project for dev testing

## 🗄️ **Database Setup**

### **Production Database (Current):**
- **Connection**: `postgresql://postgres.nxjtogogonbztiyympvb:ZsxWeTPQYLV3mglX@aws-1-ap-southeast-1.pooler.supabase.com:6543/postgres`
- **Used by**: `main` branch → `ajaycatholic.com`
- **Purpose**: Live production data

### **Development Database (New):**
- **Create new Supabase project**: `ajay-catholic-commentary-dev`
- **Connection**: Will be different (new project)
- **Used by**: `develop` branch → Vercel preview
- **Purpose**: Safe testing and development

## 🔧 **Environment Variables**

### **Production (.env.production):**
```bash
DATABASE_URL="postgresql://postgres.nxjtogogonbztiyympvb:ZsxWeTPQYLV3mglX@aws-1-ap-southeast-1.pooler.supabase.com:6543/postgres"
NEXTAUTH_URL="https://ajaycatholic.com"
NEXTAUTH_SECRET="your-production-secret"
```

### **Development (.env.development):**
```bash
DATABASE_URL="postgresql://postgres.[NEW-DEV-PROJECT]:[PASSWORD]@aws-1-ap-southeast-1.pooler.supabase.com:6543/postgres"
NEXTAUTH_URL="https://ajays-catholic-commentary-dev.vercel.app"
NEXTAUTH_SECRET="your-dev-secret"
```

## 🚀 **Deployment Workflow**

### **Development Workflow:**
1. **Work on `develop` branch**
2. **Use dev database** (safe testing)
3. **Deploy to Vercel preview** (automatic)
4. **Test thoroughly**
5. **When ready**: Merge to `main`

### **Production Workflow:**
1. **Merge `develop` → `main`**
2. **Deploy to production** (ajaycatholic.com)
3. **Use production database**
4. **Monitor for issues**

## 📊 **Database Sync Strategy**

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

## 🔐 **Security & Safety**

### **Development Safety:**
- ✅ **Separate database** (no production data risk)
- ✅ **Preview deployments** (no production downtime)
- ✅ **Feature branches** (isolated changes)
- ✅ **Testing environment** (safe experimentation)

### **Production Safety:**
- ✅ **Stable main branch** (tested changes only)
- ✅ **Production database** (live data)
- ✅ **Custom domain** (ajaycatholic.com)
- ✅ **SSL certificates** (secure)

## 📋 **Next Steps**

1. **Create new Supabase project** for development
2. **Set up environment variables** for both environments
3. **Configure Vercel** for preview deployments
4. **Test the workflow** with a small change
5. **Document the process** for future use

---

**Last Updated**: October 10, 2025  
**Status**: Ready for implementation  
**Next**: Create dev Supabase project
