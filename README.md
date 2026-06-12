# SauceDemo Playwright Test Automation

## About
End-to-end test automation framework for SauceDemo e-commerce app built with Playwright and TypeScript.

## Tools Used
- Playwright
- TypeScript
- Node.js
- GitHub Actions (CI/CD)

## What is Tested
- Login Page: valid login, invalid login, page title
- Products Page: page loads, products visible, add to cart

## How To Run Tests

Install dependencies:
npm install

Run all tests:
npx playwright test

Run specific file:
npx playwright test login.spec.ts

## Project Structure
- tests/ - all test files
- pages/ - Page Object Model files