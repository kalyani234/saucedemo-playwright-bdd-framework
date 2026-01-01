class CheckoutStepTwoPage {
  constructor(page) {
    this.page = page;
    this.finishButton = page.locator('[data-test="finish"]');
  }

  async clickFinish() {
    await this.finishButton.click();
  }
}

module.exports = { CheckoutStepTwoPage };