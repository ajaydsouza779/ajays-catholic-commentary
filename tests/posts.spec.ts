import { test, expect } from '@playwright/test';

test.describe('Posts', () => {
  test('should display posts page', async ({ page }) => {
    await page.goto('/posts');
    
    // Check page title and content
    await expect(page.getByText(/All Posts/i)).toBeVisible();
    
    // Check if posts are displayed
    const posts = page.locator('[data-testid="post-card"], .post-card, article');
    const postCount = await posts.count();
    expect(postCount).toBeGreaterThan(0);
  });

  test('should display individual post page', async ({ page }) => {
    // First go to posts page to get a post link
    await page.goto('/posts');
    
    // Find first post link
    const firstPostLink = page.locator('a[href*="/posts/"]').first();
    if (await firstPostLink.isVisible()) {
      const postUrl = await firstPostLink.getAttribute('href');
      await firstPostLink.click();
      
      // Should be on individual post page
      await expect(page).toHaveURL(/.*\/posts\/.*/);
      
      // Check post content elements
      await expect(page.getByRole('heading', { level: 1 })).toBeVisible(); // Post title
      await expect(page.getByText(/Published|Created/i)).toBeVisible(); // Date
      await expect(page.getByText(/By/i)).toBeVisible(); // Author
    }
  });

  test('should display post categories and tags', async ({ page }) => {
    await page.goto('/posts');
    
    // Find first post link
    const firstPostLink = page.locator('a[href*="/posts/"]').first();
    if (await firstPostLink.isVisible()) {
      await firstPostLink.click();
      
      // Check for categories and tags
      const categories = page.getByText(/Category|Categories/i);
      const tags = page.getByText(/Tag|Tags/i);
      
      // At least one should be visible
      const hasCategories = await categories.count() > 0;
      const hasTags = await tags.count() > 0;
      
      expect(hasCategories || hasTags).toBeTruthy();
    }
  });

  test('should navigate back to posts from individual post', async ({ page }) => {
    // Go to posts page
    await page.goto('/posts');
    
    // Find first post link
    const firstPostLink = page.locator('a[href*="/posts/"]').first();
    if (await firstPostLink.isVisible()) {
      await firstPostLink.click();
      
      // Look for back to posts link
      const backLink = page.getByRole('link', { name: /Back to Posts|All Posts/i });
      if (await backLink.isVisible()) {
        await backLink.click();
        await expect(page).toHaveURL(/.*\/posts/);
      }
    }
  });

  test('should display post content with proper formatting', async ({ page }) => {
    await page.goto('/posts');
    
    // Find first post link
    const firstPostLink = page.locator('a[href*="/posts/"]').first();
    if (await firstPostLink.isVisible()) {
      await firstPostLink.click();
      
      // Check for formatted content
      const content = page.locator('.post-content, .content, [data-testid="post-content"]');
      await expect(content).toBeVisible();
      
      // Check for headings, paragraphs, or other formatted content
      const headings = page.locator('h1, h2, h3, h4, h5, h6');
      const paragraphs = page.locator('p');
      
      const hasHeadings = await headings.count() > 0;
      const hasParagraphs = await paragraphs.count() > 0;
      
      expect(hasHeadings || hasParagraphs).toBeTruthy();
    }
  });

  test('should handle non-existent post gracefully', async ({ page }) => {
    // Try to access a non-existent post
    await page.goto('/posts/non-existent-post');
    
    // Should show 404 or error message
    const errorMessage = page.getByText(/404|Not Found|Error/i);
    await expect(errorMessage).toBeVisible();
  });
});
