# Domain Setup Documentation

## 🌐 **Custom Domain Configuration**

### **Domain Details**
- **Domain Name**: `ajaycatholic.com`
- **Provider**: Namecheap
- **Registration Date**: October 10, 2025
- **SSL Certificate**: Vercel Auto-SSL
- **Status**: Active and configured

### **DNS Configuration**

#### **A Record (Root Domain)**
- **Type**: A
- **Host**: `@` (root domain)
- **Value**: `76.76.19.61` (Vercel IP)
- **TTL**: Automatic
- **Status**: ✅ Active

#### **CNAME Record (WWW Subdomain)**
- **Type**: CNAME
- **Host**: `www`
- **Value**: `ajaycatholic.com`
- **TTL**: Automatic
- **Status**: ✅ Active

### **Vercel Configuration**

#### **Domain Settings**
- **Primary Domain**: `ajaycatholic.com`
- **Redirects**: `www.ajaycatholic.com` → `ajaycatholic.com`
- **SSL**: Auto-managed by Vercel
- **Status**: ✅ Active

#### **Environment Variables**
- **NEXTAUTH_URL**: `https://ajaycatholic.com`
- **Production URL**: `https://ajaycatholic.com`
- **Preview URL**: `https://ajays-catholic-commentary.vercel.app`

### **SSL Certificate**
- **Provider**: Vercel Auto-SSL
- **Type**: Let's Encrypt
- **Status**: ✅ Active
- **Auto-renewal**: ✅ Enabled
- **Coverage**: Both `ajaycatholic.com` and `www.ajaycatholic.com`

## 🔧 **Setup Process**

### **Step 1: Domain Registration**
1. **Provider**: Namecheap
2. **Domain**: `ajaycatholic.com`
3. **Registration**: October 10, 2025
4. **Duration**: 1 year (renewable)

### **Step 2: DNS Configuration**
1. **Login to Namecheap**: Domain management
2. **Select Domain**: `ajaycatholic.com`
3. **DNS Management**: Advanced DNS settings
4. **Add A Record**: `@` → `76.76.19.61`
5. **Add CNAME Record**: `www` → `ajaycatholic.com`

### **Step 3: Vercel Configuration**
1. **Vercel Dashboard**: Project settings
2. **Domains**: Add custom domain
3. **Domain**: `ajaycatholic.com`
4. **SSL**: Auto-configured
5. **Deployment**: Automatic

### **Step 4: SSL Certificate**
1. **Automatic**: Vercel handles SSL
2. **Certificate**: Let's Encrypt
3. **Status**: Active and valid
4. **Auto-renewal**: Enabled

## 📊 **Domain Status**

### **Current Configuration**
- ✅ **Root Domain**: `ajaycatholic.com` → Vercel
- ✅ **WWW Subdomain**: `www.ajaycatholic.com` → `ajaycatholic.com`
- ✅ **SSL Certificate**: Active and valid
- ✅ **DNS Propagation**: Complete
- ✅ **Vercel Deployment**: Active

### **Testing Results**
- ✅ **HTTPS**: Working correctly
- ✅ **WWW Redirect**: Working correctly
- ✅ **SSL Certificate**: Valid and trusted
- ✅ **Performance**: Optimized

## 🔐 **Security Configuration**

### **SSL/TLS**
- **Protocol**: TLS 1.2+
- **Certificate**: Let's Encrypt
- **Auto-renewal**: ✅ Enabled
- **HSTS**: Enabled by Vercel
- **Security Headers**: Configured by Vercel

### **DNS Security**
- **DNSSEC**: Not configured (optional)
- **DNS Filtering**: Standard Namecheap
- **TTL**: Automatic optimization

## 🚀 **Deployment Workflow**

### **Production Deployment**
1. **Branch**: `main`
2. **Domain**: `ajaycatholic.com`
3. **Database**: Production Supabase
4. **SSL**: Auto-managed by Vercel
5. **Status**: ✅ Active

### **Development Deployment**
1. **Branch**: `develop`
2. **Domain**: Vercel preview URL
3. **Database**: Development Supabase
4. **SSL**: Auto-managed by Vercel
5. **Status**: ✅ Active

## 📝 **Maintenance Notes**

### **Domain Renewal**
- **Next Renewal**: October 10, 2026
- **Auto-renewal**: Configured in Namecheap
- **Reminder**: Set calendar reminder

### **SSL Certificate**
- **Auto-renewal**: Handled by Vercel
- **Monitoring**: Vercel dashboard
- **Expiry**: Automatic renewal

### **DNS Management**
- **Provider**: Namecheap
- **Access**: Namecheap account
- **Backup**: Document current settings

## 🔧 **Troubleshooting**

### **Common Issues**
1. **DNS Propagation**: Wait 24-48 hours
2. **SSL Certificate**: Check Vercel dashboard
3. **WWW Redirect**: Verify CNAME record
4. **Performance**: Check Vercel analytics

### **Support Contacts**
- **Domain**: Namecheap support
- **Hosting**: Vercel support
- **SSL**: Vercel support

## 📋 **Future Considerations**

### **Domain Management**
- **Renewal**: Set up auto-renewal
- **Backup**: Document all settings
- **Monitoring**: Set up uptime monitoring

### **Performance Optimization**
- **CDN**: Vercel Edge Network
- **Caching**: Vercel automatic
- **Compression**: Vercel automatic

---

**Last Updated**: October 10, 2025  
**Status**: ✅ Active and configured  
**Next Review**: October 10, 2026 (domain renewal)
