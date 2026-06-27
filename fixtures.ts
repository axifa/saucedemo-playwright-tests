import {test as base} from '@playwright/test';
import { LoginPage } from './pages/LoginPage';

type MyFixtures = { loggedInPage : void; };

export const test = base.extend<MyFixtures>({
    loggedInPage: async ({page}, use) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login('standard_user', 'secret_sauce');
        await use(page);
    }

});


export { expect } from '@playwright/test';