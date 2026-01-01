// pages/InventoryPage.js

class InventoryPage {
  constructor(page) {
    this.page = page;
    this.cartLink = page.locator('[data-test="shopping-cart-link"]');
    this.cartBadge = page.locator('[data-test="shopping-cart-badge"]');
  }

  async addProductToCart(productName) {
    // Find the exact product card that contains the product name
    const productCard = this.page.locator('.inventory_item').filter({
      has: this.page.locator('.inventory_item_name', { hasText: productName })
    });

    // Wait for the product to be visible
    await productCard.waitFor({ state: 'visible', timeout: 15000 });

    // Find the "Add to cart" button inside that specific product
    const addToCartButton = productCard.locator('button').filter({
      hasText: 'Add to cart'
    });

    // Click it
    await addToCartButton.click();

    // Optional: wait for cart badge to appear/update (confirms success)
    await this.cartBadge.waitFor({ state: 'visible', timeout: 10000 }).catch(() => {});
  }

  async goToCart() {
    await this.cartLink.click();
  }
}

module.exports = { InventoryPage };