class CartPage {
  constructor(page) {
    this.page = page;
    this.checkoutButton = page.locator('[data-test="checkout"]');
    this.itemName = page.locator('[data-test="inventory-item-name"]');
  }

  async clickCheckout() {
    await this.checkoutButton.click();
  }

  async getItemName() {
    return await this.itemName.textContent();
  }
}

module.exports = { CartPage };