import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test('should load homepage with correct title and content', async ({ page }) => {
    await page.goto('/');
    
    // Check page title
    await expect(page).toHaveTitle(/Ajay's Catholic Commentary/);
    
    // Check main heading
    await expect(page.getByRole('heading', { name: /Welcome to Ajay's Catholic Commentary/i })).toBeVisible();
    
    // Check navigation
    await expect(page.getByRole('link', { name: /Home/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /Posts/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /About/i })).toBeVisible();
    
    // Check sign in button
    await expect(page.getByRole('link', { name: /Sign In/i })).toBeVisible();
  });

  test('should display feature cards', async ({ page }) => {
    await page.goto('/');
    
    // Check feature cards are visible
    await expect(page.getByText(/Rich Commentary/i)).toBeVisible();
    await expect(page.getByText(/Interactive Learning/i)).toBeVisible();
    await expect(page.getByText(/Community Discussion/i)).toBeVisible();
  });

  test('should display recent posts section', async ({ page }) => {
    await page.goto('/');
    
    // Check recent posts section
    await expect(page.getByText(/Recent Posts/i)).toBeVisible();
    
    // Check if there are any posts displayed
    const posts = page.locator('[data-testid="recent-post"]');
    const postCount = await posts.count();
    expect(postCount).toBeGreaterThan(0);
  });

  test('should navigate to posts page', async ({ page }) => {
    await page.goto('/');
    
    // Click on Posts link
    await page.getByRole('link', { name: /Posts/i }).click();
    
    // Should be on posts page
    await expect(page).toHaveURL(/.*\/posts/);
    await expect(page.getByText(/All Posts/i)).toBeVisible();
  });

  test('should navigate to about page', async ({ page }) => {
    await page.goto('/');
    
    // Click on About link
    await page.getByRole('link', { name: /About/i }).click();
    
    // Should be on about page
    await expect(page).toHaveURL(/.*\/about/);
    await expect(page.getByText(/About Ajay's Catholic Commentary/i)).toBeVisible();
  });
});
