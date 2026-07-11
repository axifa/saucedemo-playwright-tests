![Playwright Tests](https://github.com/axifa/saucedemo-playwright-tests/actions/workflows/playwright.yml/badge.svg)

# SauceDemo Playwright Test Automation Framework

## About
A professional end-to-end test automation framework for the SauceDemo e-commerce application, built with Playwright and TypeScript. Covers UI testing, API testing, visual regression, accessibility, and network mocking with a clean Page Object Model architecture and CI/CD via GitHub Actions.

## Tech Stack
- Playwright
- TypeScript
- Node.js
- GitHub Actions (CI/CD)
- axe-core (Accessibility Testing)

## Test Coverage
- Login Page: valid login, invalid credentials, data-driven negative tests, page title
- Products Page: page loads, products visible, add to cart, cart count
- Checkout Flow: complete purchase, missing fields error, confirmation message, URL validation
- API Tests: full CRUD coverage (GET, POST, PUT, DELETE)
- Visual Regression: products page screenshot comparison
- Accessibility: automated accessibility scan with axe-core
- Network Mocking: simulated server error handling
- AI-Assisted: Codegen generated and reviewed test

## Total Tests
22 tests across 8 test files, all passing on Chromium, Firefox and WebKit

## Project Structure
- tests/ - all test files
- pages/ - Page Object Model files (LoginPage, ProductsPage, CheckoutPage)
- fixtures.ts - custom auto-login fixture

## How To Run

Install dependencies:
npm install

Run all tests:
npx playwright test

Run on one browser:
npx playwright test --project=chromium

Run specific file:
npx playwright test login.spec.ts

View test report:
npx playwright show-report