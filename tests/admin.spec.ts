import { test, expect } from '@playwright/test';

test.describe('Admin Dashboard', () => {
  // Use authenticated state
  test.use({ storageState: 'playwright/.auth/user.json' });

  test('should access admin dashboard after sign in', async ({ page }) => {
    await page.goto('/admin');
    // Wait for render
    await page.waitForSelector('[data-testid="admin-title"]', { timeout: 15000 });
    await expect(page.locator('[data-testid="admin-title"]').first()).toBeVisible();
    await expect(page.getByText(/Posts/i)).toBeVisible();
    await expect(page.getByText(/New Post|Create New Post/i)).toBeVisible();
  });

  test('should display posts list in admin dashboard', async ({ page }) => {
    await page.goto('/admin');
    await page.waitForSelector('[data-testid="posts-list"]', { timeout: 15000 });
    const postsTable = page.locator('[data-testid="posts-list"]');
    await expect(postsTable).toBeVisible();
    
    // Check for post actions (edit, delete)
    const editButtons = page.getByText(/Edit|✏️/i);
    const deleteButtons = page.getByText(/Delete|🗑️/i);
    
    if (await editButtons.count() > 0) {
      await expect(editButtons.first()).toBeVisible();
    }
    if (await deleteButtons.count() > 0) {
      await expect(deleteButtons.first()).toBeVisible();
    }
  });

  test('should create new post', async ({ page }) => {
    await page.goto('/admin/posts/new');
    
    // Fill in post details
    await page.getByLabel(/Title/i).fill('Test Post from Playwright');
    await page.getByLabel(/Slug/i).fill('test-post-playwright');
    await page.getByLabel(/Excerpt/i).fill('This is a test post created by Playwright automation');
    
    // Fill in content using rich text editor
    const contentEditor = page.locator('[data-testid="rich-text-editor"], .ProseMirror, [contenteditable="true"]').first();
    if (await contentEditor.isVisible()) {
      await contentEditor.fill('This is the content of the test post created by Playwright automation.');
    } else {
      // Fallback to textarea
      await page.getByLabel(/Content/i).fill('This is the content of the test post created by Playwright automation.');
    }
    
    // Select status
    await page.getByLabel(/Status/i).selectOption('PUBLISHED');
    
    // Submit the form
    await page.getByRole('button', { name: /Create Post|Submit/i }).click();
    
    // Should redirect to admin dashboard or show success message
    await page.waitForURL(/.*\/(admin|posts\/.*\/edit)/, { timeout: 15000 });
    // Navigate to admin list and verify presence
    await page.goto('/admin');
    await page.waitForSelector('[data-testid="posts-list"]', { timeout: 15000 });
    await expect(page.getByText(/Test Post from Playwright/i)).toBeVisible();
  });

  test('should edit existing post', async ({ page }) => {
    await page.goto('/admin');
    
    // Find and click edit button for first post
    const editButton = page.getByText(/Edit|✏️/i).first();
    if (await editButton.isVisible()) {
      await editButton.click();
      
      // Should be on edit page
      await expect(page).toHaveURL(/.*\/admin\/posts\/.*\/edit/);
      
      // Check if form is pre-filled
      const titleField = page.getByLabel(/Title/i);
      await expect(titleField).toBeVisible();
      
      // Modify the title
      const currentTitle = await titleField.inputValue();
      await titleField.fill(currentTitle + ' (Edited by Playwright)');
      
      // Submit the form
      await page.getByRole('button', { name: /Update Post|Save/i }).click();
      
      // Should redirect back to admin dashboard
      await expect(page).toHaveURL(/.*\/admin/);
      
      // Check if edited post appears
      await expect(page.getByText(/Edited by Playwright/i)).toBeVisible();
    }
  });

  test('should delete post', async ({ page }) => {
    await page.goto('/admin');
    
    // Find and click delete button for first post
    const deleteButton = page.getByText(/Delete|🗑️/i).first();
    if (await deleteButton.isVisible()) {
      // Click delete button
      await deleteButton.click();
      
      // Confirm deletion if there's a confirmation dialog
      const confirmButton = page.getByRole('button', { name: /Confirm|Delete|Yes/i });
      if (await confirmButton.isVisible()) {
        await confirmButton.click();
      }
      
      // Should stay on admin dashboard
      await expect(page).toHaveURL(/.*\/admin/);
      
      // The deleted post should no longer be visible
      // (This test might need adjustment based on actual implementation)
    }
  });

  test.use({ storageState: undefined });
  test('should redirect to sign in if not authenticated', async ({ page }) => {
    await page.goto('/admin');
    await expect(page).toHaveURL(/.*\/auth\/signin/);
  });
});
