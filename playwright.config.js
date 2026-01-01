// playwright.config.js

const { devices } = require('@playwright/test');

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  // Directory for native Playwright tests (API tests, etc.)
  testDir: './tests',

  // Global timeout for each test
  timeout: 60_000,

  // Expect timeout for assertions
  expect: {
    timeout: 10_000,
  },

  // Run tests in parallel
  fullyParallel: true,

  // Retries only in CI (Azure DevOps) to catch flaky tests
  retries: process.env.CI ? 2 : 0,

  // Workers – use fewer in CI to avoid resource limits
  workers: process.env.CI ? 3 : undefined,

  // Reporters
  reporter: [
    ['list'],                                                   // Clean console output
    ['html', { open: 'never', outputFolder: 'playwright-report' }], // HTML report for API tests
    ['junit', { outputFile: 'junit-results.xml' }],             // For Azure DevOps Tests tab
  ],

  // Shared settings for all projects
  use: {
    baseURL: 'https://www.saucedemo.com',

    // Headless mode – true in CI, false locally for debugging
    headless: !!process.env.CI,

    // Viewport
    viewport: { width: 1280, height: 720 },

    // Ignore HTTPS errors (not needed for SauceDemo, but safe)
    ignoreHTTPSErrors: true,

    // Media on failure
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',

    // Traces – very useful for debugging failures in CI
    trace: 'on-first-retry',

    // Action timeout
    actionTimeout: 15_000,
  },

  // Cross-browser projects
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],

  // Optional: Web server command if you ever need to start a local server
  // webServer: {
  //   command: 'npm start',
  //   port: 3000,
  //   reuseExistingServer: !process.env.CI,
  // },
};

module.exports = config;