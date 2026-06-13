import { test, expect } from '@playwright/test';

test('practice locators', async ({ page }) => {
  
  // Open Playwright website
  await page.goto('https://playwright.dev');

  // getByRole — find a link by its name
  await page.getByRole('link', { name: 'Get started' }).click();

  // getByText — verify a heading is visible
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();

  // locator — find by HTML tag
  await expect(page.locator('h1')).toBeVisible();

});