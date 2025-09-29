# Development Workflow Guide

## 🎯 Standard Development Process

### 1. Pre-Development Setup
```bash
# Navigate to project directory
cd /Users/ajaydsouza/Documents/New-Web-001/ajays-catholic-commentary

# Check current status
git status

# Pull latest changes (if working with team)
git pull origin main

# Install dependencies (if needed)
npm install

# Start development server
npm run dev
```

### 2. Pre-Change Testing
```bash
# Run full test suite to establish baseline
./run-tests.sh

# Check for any critical failures
npm run test

# Note current test status
echo "Current test status: $(npm run test 2>&1 | grep -E 'passed|failed')"
```

### 3. Making Changes
- Make your code changes
- Test specific functionality manually
- Update tests if UI/functionality changes
- Ensure TypeScript compilation passes

### 4. Post-Change Verification
```bash
# Run tests to verify changes
npm run test

# Run specific test suites if needed
npx playwright test tests/auth.spec.ts
npx playwright test tests/admin.spec.ts

# Check for regressions
./run-tests.sh
```

### 5. Before Committing
```bash
# Full test suite
./run-tests.sh

# Lint check
npm run lint

# Build verification
npm run build

# If all tests pass, commit changes
git add .
git commit -m "Description of changes"
git push origin main
```

## 🧪 Testing Workflow

### Running Tests
```bash
# Quick test run
npm run test

# Visual test runner (recommended for debugging)
npm run test:ui

# Run with visible browser
npm run test:headed

# Debug specific test
npm run test:debug

# Run specific test file
npx playwright test tests/homepage.spec.ts

# Run specific browser
npx playwright test --project=chromium
```

### Test Debugging
```bash
# Open test report
npx playwright show-report

# Debug specific test
npx playwright test tests/auth.spec.ts --debug

# Run single test
npx playwright test tests/auth.spec.ts -g "should sign in"
```

### Test Maintenance
- Update test selectors when UI changes
- Add new tests for new features
- Remove obsolete tests
- Keep test data up to date

## 🔧 Common Development Tasks

### Adding New Features
1. Create feature branch
2. Implement feature
3. Add/update tests
4. Run test suite
5. Create pull request

### Fixing Bugs
1. Reproduce issue
2. Write failing test (if needed)
3. Fix the bug
4. Verify test passes
5. Run full test suite

### Updating Dependencies
1. Update package.json
2. Run `npm install`
3. Check for breaking changes
4. Update tests if needed
5. Run full test suite

### Database Changes
1. Update Prisma schema
2. Run `npx prisma generate`
3. Run `npx prisma db push`
4. Update seed script if needed
5. Run `npx tsx scripts/seed-database.ts`

## 🚨 Troubleshooting

### Test Failures
```bash
# Check test results
npx playwright show-report

# Debug specific failure
npm run test:debug

# Check server logs
npm run dev
# Look for errors in terminal

# Clear test cache
rm -rf test-results/
rm -rf playwright/.auth/
```

### Authentication Issues
```bash
# Check environment variables
cat .env.local

# Clear browser data
# Or use incognito mode

# Reset database
rm prisma/dev.db
npx prisma db push
npx tsx scripts/seed-database.ts
```

### Build Issues
```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules/
npm install

# Check TypeScript errors
npx tsc --noEmit
```

### Database Issues
```bash
# Reset database
rm prisma/dev.db
npx prisma db push
npx tsx scripts/seed-database.ts

# Check database
npx prisma studio
```

## 📊 Quality Gates

### Before Each Commit
- [ ] All tests pass
- [ ] No TypeScript errors
- [ ] No linting errors
- [ ] Build succeeds
- [ ] Manual testing completed

### Before Each Release
- [ ] Full test suite passes
- [ ] Performance testing
- [ ] Security review
- [ ] Documentation updated
- [ ] Deployment tested

## 🎯 Development Priorities

### Current Priority (Issue Resolution)
1. Fix authentication flow
2. Fix navigation elements
3. Fix posts display
4. Update test selectors
5. Ensure all tests pass

### Next Phase (Feature Development)
1. Image upload functionality
2. Comments system
3. Search functionality
4. Advanced admin features

### Future Phases
1. Papal timeline feature
2. Church divisions tree
3. Bible history section
4. Performance optimization
5. Production deployment

## 📝 Development Notes

### Key Files to Monitor
- `src/app/api/auth/[...nextauth]/route.ts` - Authentication config
- `src/components/Header.tsx` - Navigation component
- `src/app/posts/page.tsx` - Posts display
- `src/app/admin/page.tsx` - Admin dashboard
- `tests/` - All test files

### Common Issues
- Authentication session problems
- CSS class mismatches
- API route errors
- Database connection issues
- Test selector mismatches

### Best Practices
- Always run tests before committing
- Update tests when changing UI
- Use descriptive commit messages
- Keep documentation updated
- Test in multiple browsers

---

**Remember**: The goal is to have a fully functional application with comprehensive test coverage. Always prioritize fixing failing tests before adding new features.
