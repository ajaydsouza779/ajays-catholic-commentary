# 🔍 Supabase Connection String Verification Guide

## 📋 Step-by-Step Instructions

### 1. **Access Your Supabase Dashboard**
- Go to: https://supabase.com/dashboard
- Sign in to your account
- Select your **development project** (not production)

### 2. **Get Development Database Connection Strings**

#### **Option A: Settings → Database**
1. Click **"Settings"** in the left sidebar
2. Click **"Database"**
3. Scroll down to **"Connection string"** section
4. Copy the connection strings for:
   - **Session pooler** (port 5432)
   - **Transaction pooler** (port 6543)
   - **Direct connection** (port 5432)

#### **Option B: SQL Editor**
1. Click **"SQL Editor"** in the left sidebar
2. Click **"New query"**
3. Look for connection details in the interface

### 3. **Verify Connection String Format**

Your connection strings should look like this:
```
postgresql://postgres.[PROJECT_REF]:[PASSWORD]@aws-1-[REGION].pooler.supabase.com:5432/postgres?pgbouncer=true&sslmode=require
```

### 4. **Check These Details**

- **Project Reference**: Should be `kdmmosvpfvtfewkndlcu`
- **Password**: Should be `#12Company` (or whatever you set)
- **Region**: Should be `us-east-1`
- **Ports**: 5432 (session), 6543 (transactional)

### 5. **Test Connection in Supabase**

1. Go to **"SQL Editor"**
2. Try running a simple query:
   ```sql
   SELECT version();
   ```
3. If this works, your database is accessible

### 6. **Update GitHub Secrets**

Once you have the correct connection strings, update these GitHub secrets:

#### **Repository Settings → Secrets and variables → Actions**

- **DEV_DATABASE_URL**: Session pooler URL (port 5432)
- **DEV_DATABASE_URL_TX**: Transactional pooler URL (port 6543)  
- **PROD_DATABASE_URL_RO**: Production read-only URL
- **PROD_DATABASE_URL**: Production write URL

### 7. **Common Issues to Check**

- **Password encoding**: `#` should be `%23` in URLs
- **Project reference**: Make sure it's correct
- **Region**: Should match your Supabase project region
- **Database name**: Should be `postgres`

### 8. **Test the Updated Secrets**

After updating the secrets:
1. Go to **Actions** tab
2. Run **"Database Sync"** workflow
3. Choose **"prod-to-dev"**
4. Check if it succeeds

## 🚨 **If Still Failing**

### **Check These:**
1. **Database password** - is it still `#12Company`?
2. **Project status** - is it active?
3. **IP restrictions** - are there any?
4. **Billing** - is your account in good standing?

### **Alternative:**
If the connection strings are correct but still failing, try:
1. **Regenerate database password** in Supabase
2. **Update GitHub secrets** with new password
3. **Test the workflow** again

## 📞 **Need Help?**

If you're still having issues:
1. **Copy the exact connection strings** from your Supabase dashboard
2. **Share them** (with password masked) so I can verify the format
3. **Check if there are any IP restrictions** in your Supabase project settings
