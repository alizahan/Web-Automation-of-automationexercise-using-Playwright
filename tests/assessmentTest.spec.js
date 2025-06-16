import { test, expect } from "@playwright/test";
// import { faker } from "@faker-js/faker";
const TestCase1Page = require("../pages/testCase1");
const TestCase2Page = require("../pages/testCase2");

test.describe("Assessment Test_Kinetik", () => {
  test(
    "Test Case 1 : verify all the products related to search are visible",
    { tag: ["@Test_Case_1", "@assignment", "@Kinetik"] },
    async ({ page }) => {
      const testCase1 = new TestCase1Page(page);

      await testCase1.navigateToHomePage();
      await testCase1.verifyHomePage();
      await testCase1.verifyHomeLink();
      await testCase1.navigateToProducts();
      await testCase1.searchProduct("blue top");
      await testCase1.verifySearchResults("blue top");
    }
  );

  test(
    "Test Case 2 : verify that products is displayed in cart page with exact quantity",
    { tag: ["@Test_Case_2", "@assignment", "@Kinetik"] },
    async ({ page }) => {
      const testCase2 = new TestCase2Page(page);

      await testCase2.navigateToHomePage();
      await testCase2.verifyHomePage();
      await testCase2.verifyHomeLink();
      await testCase2.viewProduct();
      await testCase2.verifyProductDetails();
      await testCase2.setQuantity(4);
      await testCase2.addToCart();
      await testCase2.viewCart();
      await testCase2.verifyCartQuantity(4);
    }
  );
});
