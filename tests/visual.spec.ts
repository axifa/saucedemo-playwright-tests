import { test, expect } from '../fixtures';

test.describe('Visual Tests', () => {

    test.beforeEach(async ({ page, loggedInPage }) => {
        await page.goto('https://www.saucedemo.com/inventory.html');
    });

    test('products page matches snapshot', async ({ page }) => {
        await expect(page).toHaveScreenshot({ maxDiffPixelRatio: 0.1 });
    });

});