class CheckoutCompletePage {
  constructor(page) {
    this.page = page;
    this.title = page.locator('[data-test="title"]');
  }

  async getTitleText() {
    return await this.title.textContent();
  }
}

module.exports = { CheckoutCompletePage };