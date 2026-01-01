// step-definitions/api/api.steps.js

const { When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

When('I send a GET request to {string}', async function (path) {
  const fullUrl = `https://www.saucedemo.com${path}`;
  this.response = await this.request.get(fullUrl, { failOnStatusCode: false });
});

Then('the response status should be {int}', async function (expectedStatus) {
  expect(this.response.status()).toBe(expectedStatus);
});

Then('the response body should contain {string}', async function (expectedText) {
  const body = await this.response.text();
  expect(body).toContain(expectedText);
});