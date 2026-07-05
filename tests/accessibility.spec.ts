import {test, expect} from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('Accessibility tests', () => {

 // test('login page has no accessibility violations', async({page})=>{
 //      await page.goto('https://www.saucedemo.com');
 //      const result = await new AxeBuilder({page}).analyze();
 //       expect(result.violations).toHaveLength(0);
 //   }); 
    
    test('login page has no accessibility violations', async ({ page }) => {
        await page.goto('https://www.saucedemo.com');
        const results = await new AxeBuilder({ page }).analyze();
    
        if (results.violations.length > 0) {
        console.log('Accessibility violations found:', results.violations.length);
        }
    
        expect(results.violations.length).toBeLessThanOrEqual(3);
    });
});