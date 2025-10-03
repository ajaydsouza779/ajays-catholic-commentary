import { test, expect } from '@playwright/test'

test.describe('Page Screenshots for Styling Verification', () => {
  test('Homepage screenshot', async ({ page }) => {
    await page.goto('http://localhost:3001')
    await page.waitForLoadState('networkidle')
    await page.screenshot({ path: 'screenshots/homepage.png', fullPage: true })
  })

  test('Posts page screenshot', async ({ page }) => {
    await page.goto('http://localhost:3001/posts')
    await page.waitForLoadState('networkidle')
    await page.screenshot({ path: 'screenshots/posts.png', fullPage: true })
  })

  test('Papal Timeline page screenshot', async ({ page }) => {
    await page.goto('http://localhost:3001/history/papal-timeline')
    await page.waitForLoadState('networkidle')
    await page.screenshot({ path: 'screenshots/papal-timeline.png', fullPage: true })
  })

  test('Church Divisions page screenshot', async ({ page }) => {
    await page.goto('http://localhost:3001/history/church-divisions')
    await page.waitForLoadState('networkidle')
    await page.screenshot({ path: 'screenshots/church-divisions.png', fullPage: true })
  })

  test('Bible Origin page screenshot', async ({ page }) => {
    await page.goto('http://localhost:3001/history/bible-origin')
    await page.waitForLoadState('networkidle')
    await page.screenshot({ path: 'screenshots/bible-origin.png', fullPage: true })
  })

  test('Search page screenshot', async ({ page }) => {
    await page.goto('http://localhost:3001/search')
    await page.waitForLoadState('networkidle')
    await page.screenshot({ path: 'screenshots/search.png', fullPage: true })
  })
})
