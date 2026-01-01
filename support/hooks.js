// support/hooks.js

const { Before, After, BeforeAll, AfterAll, Status } = require('@cucumber/cucumber');
const { chromium, request } = require('@playwright/test');

let browser;
let context;
let page;
let apiRequestContext;

BeforeAll(async function () {
  // Launch browser once for all scenarios
  browser = await chromium.launch({
    headless: true,      // Change to false to see browser during local runs
    // slowMo: 800,      // Uncomment to slow down actions for debugging
  });
});

Before(async function () {
  // Create a new browser context and page for each scenario (UI isolation)
  context = await browser.newContext({
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
  });
  page = await context.newPage();

  // Create a new API request context for each scenario (API isolation)
  apiRequestContext = await request.newContext({
    baseURL: 'https://www.saucedemo.com',
    ignoreHTTPSErrors: true,
  });

  // Attach to World so steps can use this.page and this.request
  this.page = page;
  this.request = apiRequestContext;
});

After(async function (scenario) {
  // If scenario failed, take a full-page screenshot and attach to report
  if (scenario.result?.status === Status.FAILED) {
    if (this.page) {
      const screenshot = await this.page.screenshot({ fullPage: true });
      this.attach(screenshot, 'image/png');
    }
  }

  // Clean up page context
  if (context) {
    await context.close();
  }

  // Clean up API request context
  if (apiRequestContext) {
    await apiRequestContext.dispose();
  }
});

AfterAll(async function () {
  // Close browser after all scenarios
  if (browser) {
    await browser.close();
  }
});