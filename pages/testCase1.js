const { expect } = require("@playwright/test");

class TestCase1Page {
  constructor(page) {
    this.page = page; //page object
    this.homeLink = page.getByRole("link", { name: " Home" });
    this.productsLink = page.getByRole("link", { name: " Products" });
    this.searchInput = page.getByRole("textbox", { name: "Search Product" });
    this.searchButton = page.getByRole("button", { name: "" });
    this.allProductsHeading = page.getByRole("heading", {
      name: "All Products",
    });
    this.searchedProductsHeading = page.getByRole("heading", {
      name: "Searched Products",
    }); //searched products heading
    this.productCards = page.locator(".features_items .product-image-wrapper"); //product cards
  }
  //navigate to home page from where global setup file is executed
  async navigateToHomePage() {
    await this.page.goto("https://automationexercise.com", {
      waitUntil: "domcontentloaded",
    });
  }
  //verify home page
  async verifyHomePage() {
    await expect(this.page).toHaveTitle("Automation Exercise"); //verify the title of the page
    await expect(this.page).toHaveURL(/automationexercise\.com/); //verify the url of the page
  }
  //verify home link
  async verifyHomeLink() {
    await expect(this.homeLink).toBeVisible(); //verify the home link is visible
    await expect(this.page.getByText("Home")).toBeVisible(); //verify the home text is visible
  }
  //navigate to products page
  async navigateToProducts() {
    await this.productsLink.click(); //click on the products link
    await expect(this.page).toHaveURL(/\/products/); //verify the url of the page
    await expect(this.allProductsHeading).toBeVisible(); //verify the all products heading is visible
  }
  //search product
  async searchProduct(productName) {
    await this.searchInput.fill(productName); //fill the search input with the product name
    await this.page.waitForTimeout(1000); //wait for 1 second
    await this.searchButton.waitFor({ state: "visible" }); //wait for the search button to be visible
    await this.searchButton.click(); //click on the search button
    await expect(this.searchedProductsHeading).toBeVisible(); //verify the searched products heading is visible 
  }
  //verify search results are visible
  async verifySearchResults(searchTerm) {
    const productCards = await this.productCards.all(); //get all the product cards
    expect(productCards.length).toBeGreaterThan(0); //verify there are some products
    //verify all the products related to search are visible
    for (const card of productCards) {
      const productText = await card.textContent(); //get the text content of the product card
      expect(productText.toLowerCase()).toContain(searchTerm.toLowerCase()); //verify the product text contains the search term
    }
  }
}

module.exports = TestCase1Page;
