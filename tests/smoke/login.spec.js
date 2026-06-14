import {test, expect } from '@playwright/test';
import LoginPage from '../../pages/LoginPage';
 
test.describe('Login functionality', () => {
    test('valid login redirects to dashboard @smoke', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login('tomsmith', 'SuperSecretPassword!');
        await expect(page).toHaveURL('/secure');
    });

    test('invalid login shows error message @smoke', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login('invaliduser', 'wrongpassword');
        await expect(loginPage.errorMessage).toBeVisible();
    });
});