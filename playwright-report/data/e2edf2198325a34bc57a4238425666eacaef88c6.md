# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: portfolio.spec.ts >> Portfolio Site - Complete Verification >> Hero section loads correctly
- Location: tests\portfolio.spec.ts:7:3

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('h1')
Expected substring: "BALAMURUGAN P"
Received string:    "Balamurugan P"
Timeout: 5000ms

Call log:
  - Expect "toContainText" locator('h1') with timeout 5000ms
  - waiting for locator('h1')
    - locator resolved to <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-br from-white via-slate-200 to-electric-cyan/80 bg-clip-text text-transparent uppercase">Balamurugan P</h1>
    - unexpected value "Balamurugan P"

```

```yaml
- heading "Balamurugan P" [level=1]
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | 
  3   | const BASE_URL = 'http://localhost:5173/My-portfolio/';
  4   | 
  5   | test.describe('Portfolio Site - Complete Verification', () => {
  6   |   
  7   |   test('Hero section loads correctly', async ({ page }) => {
  8   |     await page.goto(BASE_URL);
  9   |     await page.waitForLoadState('networkidle');
  10  |     
  11  |     // Check name appears
> 12  |     await expect(page.locator('h1')).toContainText('BALAMURUGAN P');
      |                                      ^ Error: expect(locator).toContainText(expected) failed
  13  |     
  14  |     // Check headline
  15  |     await expect(page.locator('text=Computer Science & Engineering Undergraduate')).toBeVisible();
  16  |     
  17  |     // Check CTA buttons
  18  |     await expect(page.locator('button:has-text("Explore Research")')).toBeVisible();
  19  |     await expect(page.locator('a:has-text("Download Resume")')).toBeVisible();
  20  |     await expect(page.locator('a:has-text("Connect on LinkedIn")')).toBeVisible();
  21  |     
  22  |     // Check profile image
  23  |     await expect(page.locator('img[alt="Balamurugan P"]')).toBeVisible();
  24  |     
  25  |     // Screenshot for visual regression
  26  |     await page.screenshot({ path: 'screenshots/hero-desktop.png', fullPage: false });
  27  |   });
  28  | 
  29  |   test('Navigation and scroll work', async ({ page }) => {
  30  |     await page.goto(BASE_URL);
  31  |     await page.waitForLoadState('networkidle');
  32  |     
  33  |     // Click research button
  34  |     await page.click('button:has-text("Explore Research")');
  35  |     
  36  |     // Wait for scroll animation
  37  |     await page.waitForTimeout(1000);
  38  |     
  39  |     // Verify research section is visible
  40  |     const researchSection = page.locator('#research');
  41  |     await expect(researchSection).toBeInViewport();
  42  |   });
  43  | 
  44  |   test('Responsive on mobile - Portrait', async ({ page }) => {
  45  |     await page.setViewportSize({ width: 375, height: 667 });
  46  |     await page.goto(BASE_URL);
  47  |     await page.waitForLoadState('networkidle');
  48  |     
  49  |     // Check layout doesn't overflow
  50  |     const body = await page.locator('body');
  51  |     const box = await body.boundingBox();
  52  |     expect(box?.width).toBeLessThanOrEqual(375);
  53  |     
  54  |     // Check mobile navigation
  55  |     await expect(page.locator('h1')).toBeVisible();
  56  |     
  57  |     await page.screenshot({ path: 'screenshots/hero-mobile.png', fullPage: false });
  58  |   });
  59  | 
  60  |   test('Responsive on tablet', async ({ page }) => {
  61  |     await page.setViewportSize({ width: 768, height: 1024 });
  62  |     await page.goto(BASE_URL);
  63  |     await page.waitForLoadState('networkidle');
  64  |     
  65  |     await expect(page.locator('h1')).toBeVisible();
  66  |     await page.screenshot({ path: 'screenshots/hero-tablet.png', fullPage: false });
  67  |   });
  68  | 
  69  |   test('No console errors', async ({ page }) => {
  70  |     const errors: string[] = [];
  71  |     const warnings: string[] = [];
  72  |     
  73  |     page.on('console', msg => {
  74  |       if (msg.type() === 'error') {
  75  |         errors.push(msg.text());
  76  |       } else if (msg.type() === 'warning') {
  77  |         warnings.push(msg.text());
  78  |       }
  79  |     });
  80  |     
  81  |     page.on('pageerror', error => {
  82  |       errors.push(error.message);
  83  |     });
  84  |     
  85  |     await page.goto(BASE_URL);
  86  |     await page.waitForLoadState('networkidle');
  87  |     
  88  |     console.log(`Console Errors: ${errors.length}`);
  89  |     console.log(`Console Warnings: ${warnings.length}`);
  90  |     
  91  |     if (errors.length > 0) {
  92  |       console.log('Errors found:', errors);
  93  |     }
  94  |     
  95  |     // Allow warnings but no errors
  96  |     expect(errors.length).toBe(0);
  97  |   });
  98  | 
  99  |   test('All sections are present', async ({ page }) => {
  100 |     await page.goto(BASE_URL);
  101 |     await page.waitForLoadState('networkidle');
  102 |     
  103 |     // Check all major sections exist
  104 |     await expect(page.locator('text=Available for AI/ML Research')).toBeVisible();
  105 |     
  106 |     // Scroll through sections
  107 |     await page.evaluate(() => window.scrollTo(0, 1000));
  108 |     await page.waitForTimeout(500);
  109 |     
  110 |     await page.evaluate(() => window.scrollTo(0, 2000));
  111 |     await page.waitForTimeout(500);
  112 |     
```