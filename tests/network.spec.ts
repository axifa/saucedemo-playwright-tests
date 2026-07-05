// Set up a trap — if anyone sends a request to this URL, intercept it before it reaches the server
// Define the fake reply — when intercepted, send back status 500 and "Server error"
// Now make the actual request — send a request to that URL, it walks into the trap
// Check what came back — did we get 500? Yes? Test passes ✅

import {test, expect} from '@playwright/test';

test.describe('Network mocking', ()=>{

    test('Handles failed API response', async ({page}) =>{
        await page.route('https://jsonplaceholder.typicode.com/users/1', route =>{
            route.fulfill({ status: 500, body: 'Server Error'});
        });

        const response = await page.goto('https://jsonplaceholder.typicode.com/users/1');
        expect(response?.status()).toBe(500);
    });
});