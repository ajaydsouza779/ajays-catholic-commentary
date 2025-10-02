# Ajay's Catholic Commentary

A comprehensive web application for Catholic commentary, learning, and community discussion. Built with Next.js, TypeScript, and modern web technologies.

## 🎯 Project Overview

This application serves as a comprehensive platform for:
- **Rich Catholic Commentary** - Detailed theological discussions and insights
- **Interactive Learning** - Educational content with visual timelines and interactive elements
- **Community Discussion** - Comment system for engaging with content
- **Admin Management** - Full CRUD operations for content management
- **Historical Research** - Papal timeline, church divisions, and Bible history
- **Advanced Search** - Full-text search across all content types
- **Image Management** - Professional image upload and optimization
- **Performance Optimization** - Caching, lazy loading, and monitoring

## ✨ Key Features

### 📝 Content Management
- **Rich Text Editor** - Tiptap integration for professional content creation
- **Image Upload** - Cloudinary integration with optimization and lazy loading
- **Categories & Tags** - Organized content with flexible categorization
- **Draft System** - Save and publish workflow for content creators

### 🏛️ Historical Content
- **Papal Timeline** - Interactive timeline of papal history with detailed profiles
- **Church Divisions** - Hierarchical tree of historical church schisms
- **Bible History** - Comprehensive overview of Bible manuscripts and translations
- **Rich Data** - Detailed historical context and significance

### 🔍 Search & Discovery
- **Full-Text Search** - Search across posts, popes, divisions, and manuscripts
- **Type Filtering** - Filter search results by content type
- **Real-Time Results** - Instant search with debounced input
- **Highlighted Terms** - Search terms highlighted in results

### 👥 User Management
- **Authentication** - Secure email/password authentication with NextAuth.js
- **User Registration** - Complete signup flow with validation
- **Role-Based Access** - Admin and user roles with appropriate permissions
- **Comment System** - Nested comments with moderation capabilities

### ⚡ Performance
- **Lazy Loading** - Images and content loaded on demand
- **Caching** - In-memory caching for improved performance
- **Web Vitals** - Performance monitoring and optimization
- **Responsive Design** - Mobile-first design with optimal loading

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ajaydsouza779/ajays-catholic-commentary.git
   cd ajays-catholic-commentary
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Set up the database (Local: SQLite)**
   ```bash
   npx prisma generate
   npx prisma db push
   npx tsx scripts/seed-database.ts
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3001](http://localhost:3001)

### **Default Admin Account**
- **Email**: `ajay@example.com`
- **Password**: `admin123`
- **Access**: Admin dashboard at `/admin`

## 🧪 Testing

### Automated Testing with Playwright

The project includes comprehensive automated tests covering all major functionality.

#### Test Commands

```bash
# Run all tests
npm run test

# Run tests with visual UI
npm run test:ui

# Run tests in headed mode (see browser)
npm run test:headed

# Debug mode for troubleshooting
npm run test:debug

# Run specific test file
npx playwright test tests/homepage.spec.ts

# Run tests for specific browser
npx playwright test --project=chromium
```

#### Test Coverage

- ✅ **Homepage Tests** - Navigation, content display, feature cards
- ✅ **Authentication Tests** - Sign in/out, error handling, validation
- ✅ **Admin Dashboard Tests** - Post management, CRUD operations
- ✅ **Posts Tests** - Display, navigation, content formatting

#### Running Tests

```bash
# Use the automated test runner
./run-tests.sh

# Or run specific test modes
./run-tests.sh ui      # Open Playwright UI
./run-tests.sh headed  # Run with visible browser
./run-tests.sh debug   # Debug mode
```

## 🏗️ Project Structure

```
ajays-catholic-commentary/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── admin/             # Admin dashboard pages
│   │   ├── api/               # API routes
│   │   ├── auth/              # Authentication pages
│   │   ├── posts/             # Posts pages
│   │   └── globals.css        # Global styles
│   ├── components/            # Reusable components
│   ├── lib/                   # Utility functions
│   └── types/                 # TypeScript type definitions
├── prisma/
│   └── schema.prisma          # Database schema
├── tests/                     # Playwright test files
├── scripts/                   # Database seeding scripts
└── playwright.config.ts       # Playwright configuration
```

## 🛠️ Technology Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Tiptap** - Rich text editor
- **NextAuth.js** - Authentication

### Backend
- **Next.js API Routes** - Server-side API
- **Prisma** - Database ORM
- **SQLite** - Local development database (prisma/schema.prisma)
- **PostgreSQL** - Production database (prisma/schema.postgres.prisma)

### Testing
- **Playwright** - End-to-end testing
- **Multi-browser support** - Chrome, Firefox, Safari

## 📊 Database Schema

### Core Models
- **User** - User accounts and authentication
- **Post** - Blog posts and commentary
- **Comment** - User comments on posts
- **Category** - Post categorization
- **Tag** - Post tagging system

### Relationships
- Users can create multiple posts
- Posts can have multiple categories and tags
- Posts can have multiple comments
- Many-to-many relationships for categories and tags

## 🔐 Authentication

### User Roles
- **ADMIN** - Full access to admin dashboard and content management
- **USER** - Can view content and add comments

### Default Admin Account
- **Email**: `ajay@example.com`
- **Password**: `admin123`

## 🚀 Deployment

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
npm start
```

### Production Database (PostgreSQL)

- Use `prisma/schema.postgres.prisma` in production. On Vercel, set:
  - `DATABASE_URL` to your Postgres URL (URL-encode special chars, add `?sslmode=require` if needed)
  - `PRISMA_SCHEMA_PATH=prisma/schema.postgres.prisma`
  - `NEXTAUTH_SECRET`, `NEXTAUTH_URL`, `AUTH_TRUST_HOST=true`

**Current Production Setup:**
- **Database**: Supabase PostgreSQL
- **Connection**: `postgresql://postgres.nxjtogogonbztiyympvb:[PASSWORD]@aws-1-ap-southeast-1.pooler.supabase.com:5432/postgres?pgbouncer=true&sslmode=require&connection_limit=1`
- **Admin Password Hash**: `$2b$12$tcTC.oOk8VoViF5NmikQgu86Wj4CPzGfxsysfzYukLSMedpXFaECW`

One-time production DB init (run locally with prod `DATABASE_URL` exported):
```bash
npm run db:push:prod
npm run db:generate:prod
DATABASE_URL=... npx tsx scripts/seed-database.ts
```

### Recommended Hosting
- **Vercel** - Optimal for Next.js applications
- **Supabase** - Database and authentication
- **Cloudinary** - Image storage and optimization

## 📋 Development Workflow

### 1. Before Making Changes
```bash
# Run tests to ensure current state
npm run test

# Check for any failing tests
./run-tests.sh
```

### 2. Making Changes
- Make your code changes
- Update tests if needed
- Ensure TypeScript compilation passes

### 3. After Making Changes
```bash
# Run tests to verify changes
npm run test

# Run specific test suites if needed
npx playwright test tests/admin.spec.ts
```

### 4. Before Committing
```bash
# Run full test suite
./run-tests.sh

# Ensure all tests pass
npm run lint
```

## 🐛 Troubleshooting

### Common Issues

1. **Database Connection Issues**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

2. **Authentication Problems**
   - Check `.env.local` configuration
   - Verify `NEXTAUTH_SECRET` is set
   - Clear browser cookies/session

3. **Test Failures**
   ```bash
   # Run tests in debug mode
   npm run test:debug
   
   # Check test results
   npx playwright show-report
   ```

4. **Build Issues**
   ```bash
   # Clear Next.js cache
   rm -rf .next
   npm run build
   ```

## 📈 Future Enhancements

### Phase 2: History of the Chair of St. Peter
- Papal timeline with interactive visualizations
- Historical context and Catholic notes
- Search and filter functionality

### Phase 3: Divisions in the Church
- Interactive church division tree
- Historical heresies and Church responses
- Educational content on unification

### Phase 4: History and Origin of the Bible
- Bible formation timeline
- English translation history
- Comparison of Bible versions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests to ensure everything works
5. Submit a pull request

## 📄 License

This project is private and proprietary.

## 📞 Support

For issues and questions:
- Check the troubleshooting section
- Run tests to identify problems
- Review the test reports for specific failures

---

**Last Updated**: December 2024  
**Version**: 1.0.0  
**Status**: Development/Testing Phase