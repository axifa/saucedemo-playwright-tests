import { test , expect } from '@playwright/test';
import {LoginPage} from '../pages/LoginPage';

let loginPage: LoginPage;

test.describe('Login Page Tests', () => {

    test.beforeEach(async ({page}) => {
        loginPage = new LoginPage(page);
        await loginPage.goto();
    });

    test('should show login page', async ({page}) => {
        await expect(page).toHaveTitle('Swag Labs');
    });

    test('should login with valid credentials', async ({page}) =>{
        await loginPage.login('standard_user', 'secret_sauce');
        await expect(page).toHaveURL(/inventory/);

    });

    test('should show error with invalid credentials', async ({page}) => {
         await loginPage.login('wrong_user', 'wrong_pass');
         await expect(page.locator('[data-test="error"]')).toBeVisible();
    });


});