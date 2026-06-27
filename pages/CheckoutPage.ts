import {Page} from '@playwright/test';

export class CheckoutPage{
    private page: Page;

   constructor(page: Page){
    this.page = page;
   }

    async fillInfo(firstName: string, lastName: string, zip: string) {
        await this.page.locator('#first-name').fill(firstName);
        await this.page.locator('#last-name').fill(lastName);
        await this.page.locator('#postal-code').fill(zip);
        await this.page.locator('#continue').click();
    }

   async finishOrder(){
        await this.page.locator('#finish').click();
   }

   async getConfirmationMessage(){
        return await this.page.locator('.complete-header').textContent();
   }
}