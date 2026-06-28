import {test, expect} from '@playwright/test';

test.describe('API tests', () => {
    test('GET user returns 200', async({request}) =>{
        const response = await request.get('https://jsonplaceholder.typicode.com/users/1');
        expect (response.status()).toBe(200);

        const body = await response.json();
        expect (body.name).toBe('Leanne Graham');

    });

    test('POST creates a new user', async({request})=>{
        const response = await request.post('https://jsonplaceholder.typicode.com/users',
            {data: {
                name: 'John Doe',
                email: 'john@test.com', }});

        expect(response.status()).toBe(201);

        const body = await response.json();
        expect(body.name).toBe('John Doe');
    });

    test('PUT updates a user', async({request})=>{
        const response = await request.put('https://jsonplaceholder.typicode.com/users/1',
            {data: {
                name: 'Updated name', }});
        expect(response.status()).toBe(200);

        const body = await response.json();
        expect(body.name).toBe('Updated name');
    });

    test('DELETE removes an user', async({request})=>{
        const response = await request.delete('https://jsonplaceholder.typicode.com/users/1');
        expect(response.status()).toBe(200);
    });
});