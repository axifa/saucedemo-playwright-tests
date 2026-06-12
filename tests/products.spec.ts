import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';

let loginPage: LoginPage;
let productsPage: ProductsPage;

test.describe('Products Page tests', () => {
    test.beforeEach(async({page}) => {
        loginPage = new LoginPage(page);
        productsPage = new ProductsPage(page);

        await loginPage.goto();
        await loginPage.login('standard_user', 'secret_sauce');
    });

    test('should show products page', async({page}) =>{
        await productsPage.goto();
        await expect(page).toHaveURL(/inventory/);
    });

    test('should show products' , async({page}) => {
        await expect(page.locator('.inventory_item').first()).toBeVisible();
    });

    test('should add item to cart', async({page}) =>{
        await productsPage.addFirstItemToCart();
        const count = await productsPage.getCartCount();
        expect(count).toBe('1');
    });
}); 