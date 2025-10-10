import { chromium } from '@playwright/test'
import path from 'path'
import fs from 'fs'

async function main() {
  const url = process.env.APP_URL || 'http://localhost:3001'
  const outDir = path.resolve(process.cwd(), 'screenshots')
  const outPath = path.join(outDir, 'homepage.png')

  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true })
  }

  const browser = await chromium.launch()
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } })
  const page = await context.newPage()
  await page.goto(url, { waitUntil: 'networkidle' })
  await page.screenshot({ path: outPath, fullPage: true })
  await browser.close()

  console.log(`Saved homepage screenshot → ${outPath}`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})


