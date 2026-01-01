// step-definitions/ui/checkout.steps.js

const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const path = require('path');

// Correct paths — pages folder is one level up from step-definitions/ui
const { LoginPage } = require(path.resolve(__dirname, '../../pages/LoginPage'));
const { InventoryPage } = require(path.resolve(__dirname, '../../pages/InventoryPage'));
const { CartPage } = require(path.resolve(__dirname, '../../pages/CartPage'));
const { CheckoutStepOnePage } = require(path.resolve(__dirname, '../../pages/CheckoutStepOnePage'));
const { CheckoutStepTwoPage } = require(path.resolve(__dirname, '../../pages/CheckoutStepTwoPage'));
const { CheckoutCompletePage } = require(path.resolve(__dirname, '../../pages/CheckoutCompletePage'));

let loginPage, inventoryPage, cartPage, checkoutOne, checkoutTwo, checkoutComplete;

Given('I am on the SauceDemo login page', async function () {
  loginPage = new LoginPage(this.page);
  await loginPage.goto();
});

When('I login with username {string} and password {string}', async function (username, password) {
  await loginPage.login(username, password);
  inventoryPage = new InventoryPage(this.page);
});

Then('I should be on the inventory page', async function () {
  await expect(this.page).toHaveURL(/inventory.html/);
});

When('I add {string} to cart', async function (productName) {
  await inventoryPage.addProductToCart(productName);
});

When('I go to the cart', async function () {
  await inventoryPage.goToCart();
  cartPage = new CartPage(this.page);
});

Then('the cart should contain {string}', async function (productName) {
  const itemName = await cartPage.getItemName();
  expect(itemName.trim()).toContain(productName);
});

When('I click checkout', async function () {
  await cartPage.clickCheckout();
  checkoutOne = new CheckoutStepOnePage(this.page);
});

When('I fill checkout information with first name {string}, last name {string}, and postal code {string}', async function (first, last, code) {
  await checkoutOne.firstName.fill(first);
  await checkoutOne.lastName.fill(last);
  await checkoutOne.postalCode.fill(code);
});

When('I click continue', async function () {
  await checkoutOne.continueButton.click();
  checkoutTwo = new CheckoutStepTwoPage(this.page);
});

Then('I should be on the checkout overview page', async function () {
  await expect(this.page).toHaveURL(/checkout-step-two.html/);
});

When('I click finish', async function () {
  await checkoutTwo.clickFinish();
  checkoutComplete = new CheckoutCompletePage(this.page);
});

Then('I should see the checkout complete message {string}', async function (expectedMessage) {
  const titleText = await checkoutComplete.getTitleText();
  expect(titleText.trim()).toBe(expectedMessage);
});