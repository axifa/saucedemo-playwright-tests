import {Page} from '@playwright/test';

export class ProductsPage {
    private page: Page;

    constructor(page: Page){
        this.page = page;
    }

    async goto(){
        await this.page.goto('https://www.saucedemo.com/inventory.html');
    };

    async addFirstItemToCart(){
        await this.page.locator('.btn_inventory').first().click();
    }; 

    async getCartCount(){
        return await this.page.locator('.shopping_cart_badge').textContent();
    };
}