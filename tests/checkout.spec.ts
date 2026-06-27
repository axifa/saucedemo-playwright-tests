import {test, expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import {ProductsPage} from '../pages/ProductsPage';
import { CheckoutPage } from '../pages/CheckoutPage';

let checkoutPage: CheckoutPage;

test.describe('Checkout tests', ()=>{
    test.beforeEach(async ({page})=> {

        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login('standard_user', 'secret_sauce');

        const productsPage = new ProductsPage(page);
        await productsPage.addFirstItemToCart();

        await page.locator('.shopping_cart_link').click();
        await page.locator('#checkout').click();

        checkoutPage = new CheckoutPage(page);
    });

    test('should show checkout form', async({page}) =>{
        await expect(page.locator('#first-name')).toBeVisible();
    });

     test('should complete order with valid info', async({page}) =>{
        await checkoutPage.fillInfo('John', 'Doe', '90210');
        await checkoutPage.finishOrder();
        await expect(page).toHaveURL(/checkout-complete/);
    });

     test('should show error with missing first name', async({page}) =>{
        await checkoutPage.fillInfo('', 'Doe', '90210');
        await expect(page.locator('[data-test="error"]')).toBeVisible();
    });

     test('should show confirmation message', async({page}) =>{
        await checkoutPage.fillInfo('John', 'Doe', '90210');
        await checkoutPage.finishOrder();
        expect(await checkoutPage.getConfirmationMessage()).toBe('Thank you for your order!');
    });
    

});
