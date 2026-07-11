import { test, expect } from '../fixtures';

test('products page matches snapshot', async ({ page, loggedInPage }) => {
    await page.goto('https://www.saucedemo.com/inventory.html');
    await expect(page).toHaveScreenshot({ maxDiffPixelRatio: 0.1 });
});