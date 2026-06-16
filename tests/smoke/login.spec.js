import {test, expect } from '@playwright/test';
import LoginPage from '../../pages/LoginPage';
import credentials from '../../test-data/credentials.json' assert { type: 'json' };
 
test.describe('Login functionality', () => {
    test('valid login redirects to dashboard @smoke', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const user = credentials.valid[0];
        await loginPage.goto();
        await loginPage.login(user.username, user.password);
        await expect(page).toHaveURL('/secure');
    });

    for (const user of credentials.invalid) {
        test(`invalid login - ${user.description} @regression @smoke `, async ({ page }) => {
            const loginPage = new LoginPage(page);
            await loginPage.goto();
            await loginPage.login(user.username, user.password);
            await expect(page.getByText(user.expectedError)).toBeVisible();
        });
    }
});