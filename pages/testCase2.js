const { expect } = require("@playwright/test");

class TestCase2Page {
  constructor(page) {
    this.page = page;
    this.homeLink = page.getByRole("link", { name: " Home" });
    this.viewProductButton = page
      .locator(".nav.nav-pills.nav-justified > li > a")
      .first();
    this.quantityInput = page.locator("#quantity");
    this.addToCartButton = page.getByRole("button", { name: " Add to cart" });
    this.viewCartLink = page.getByRole("link", { name: "View Cart" });
  }
  //navigate to home page from where global setup file is executed
  async navigateToHomePage() {
    await this.page.goto("https://automationexercise.com", {
      waitUntil: "domcontentloaded",
    });
  }
  //verify home page
  async verifyHomePage() {
    await expect(this.page).toHaveTitle("Automation Exercise");
    await expect(this.page).toHaveURL(/automationexercise\.com/);
  }
  //verify home link
  async verifyHomeLink() {
    await expect(this.homeLink).toBeVisible();
  }
  //view product
  async viewProduct() {
    await this.viewProductButton.click();
    await expect(this.page).toHaveURL(/\/product_details/);
  }
  //verify product details
  async verifyProductDetails() {
    await expect(this.page.getByText(/Availability:/i)).toBeVisible();
    await expect(this.page.getByText(/Condition:/i)).toBeVisible();
    await expect(this.page.getByText(/Brand:/i)).toBeVisible();
  }
  //set quantity
  async setQuantity(quantity) {
    await this.quantityInput.fill(quantity.toString());
    await expect(this.quantityInput).toHaveValue(quantity.toString());
  }
  //add to cart
  async addToCart() {
    await this.addToCartButton.click();
    await expect(
      this.page.getByRole("heading", { name: "Added!" })
    ).toBeVisible();
    await expect(
      this.page.getByText("Your product has been added")
    ).toBeVisible();
  }
  //view cart
  async viewCart() {
    await this.viewCartLink.click();
    await expect(this.page).toHaveURL(/\/view_cart/);
  }
  //verify cart quantity
  async verifyCartQuantity(expectedQuantity) {
    await expect(
      this.page.getByRole("cell", { name: "Quantity" })
    ).toBeVisible();
    await expect(
      this.page.getByRole("cell", { name: expectedQuantity.toString() })
    ).toBeVisible();
  }
}

module.exports = TestCase2Page;
