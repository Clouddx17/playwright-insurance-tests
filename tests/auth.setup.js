// tests/auth.setup.js
import { test as setup } from '@playwright/test';
import LoginPage from '../pages/LoginPage.js';

const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ page }) => {
  
  // Login once
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('tomsmith', 'SuperSecretPassword!');
  
  // Wait until logged in
  await page.waitForURL('**/secure');
  
  // Save session to file
  await page.context().storageState({ path: authFile });
  
});