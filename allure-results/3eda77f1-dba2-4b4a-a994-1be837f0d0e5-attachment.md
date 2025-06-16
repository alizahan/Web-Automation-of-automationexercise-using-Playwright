# Test info

- Name: Assessment Test_Kinetik >> Test Case 2 : verify that products is displayed in cart page with exact quantity
- Location: /Users/alizahanpranto/Documents/Playwright/Assessment Test_Kinetik/tests/assessmentTest.spec.js:22:8

# Error details

```
Error: expect(locator).toBeVisible()

Locator: getByRole('cell', { name: 'Quantity' })
Expected: visible
Received: undefined
Call log:
  - expect.toBeVisible with timeout 10000ms
  - waiting for getByRole('cell', { name: 'Quantity' })

    at TestCase2Page.verifyCartQuantity (/Users/alizahanpranto/Documents/Playwright/Assessment Test_Kinetik/pages/testCase2.js:64:7)
    at /Users/alizahanpranto/Documents/Playwright/Assessment Test_Kinetik/tests/assessmentTest.spec.js:36:23
```

# Page snapshot

```yaml
- banner:
  - link "Website for automation practice":
    - /url: /
    - img "Website for automation practice"
  - list:
    - listitem:
      - link " Home":
        - /url: /
    - listitem:
      - link " Products":
        - /url: /products
    - listitem:
      - link " Cart":
        - /url: /view_cart
    - listitem:
      - link " Signup / Login":
        - /url: /login
    - listitem:
      - link " Test Cases":
        - /url: /test_cases
    - listitem:
      - link " API Testing":
        - /url: /api_list
    - listitem:
      - link " Video Tutorials":
        - /url: https://www.youtube.com/c/AutomationExercise
    - listitem:
      - link " Contact us":
        - /url: /contact_us
- list:
  - listitem:
    - link "Home":
      - /url: /
  - listitem: Shopping Cart
- text: Proceed To Checkout
- table:
  - rowgroup:
    - row "Item Description Price Quantity Total":
      - cell "Item"
      - cell "Description"
      - cell "Price"
      - cell "Quantity"
      - cell "Total"
      - cell
  - rowgroup:
    - row "Product Image Blue Top Women > Tops Rs. 500 4 Rs. 2000 ":
      - cell "Product Image":
        - link "Product Image":
          - /url: ""
          - img "Product Image"
      - cell "Blue Top Women > Tops":
        - heading "Blue Top" [level=4]:
          - link "Blue Top":
            - /url: /product_details/1
        - paragraph: Women > Tops
      - cell "Rs. 500":
        - paragraph: Rs. 500
      - cell "4":
        - button "4"
      - cell "Rs. 2000":
        - paragraph: Rs. 2000
      - cell ""
- contentinfo:
  - heading "Subscription" [level=2]
  - textbox "Your email address"
  - button ""
  - paragraph: Get the most recent updates from our site and be updated your self...
  - insertion:
    - iframe
  - paragraph: Copyright © 2021 All rights reserved
  - insertion:
    - iframe
- insertion:
  - iframe
```

# Test source

```ts
   1 | const { expect } = require("@playwright/test");
   2 |
   3 | class TestCase2Page {
   4 |   constructor(page) {
   5 |     this.page = page;
   6 |     this.homeLink = page.getByRole("link", { name: " Home" });
   7 |     this.viewProductButton = page
   8 |       .locator(".nav.nav-pills.nav-justified > li > a")
   9 |       .first();
  10 |     this.quantityInput = page.locator("#quantity");
  11 |     this.addToCartButton = page.getByRole("button", { name: " Add to cart" });
  12 |     this.viewCartLink = page.getByRole("link", { name: "View Cart" });
  13 |   }
  14 |
  15 |   async navigateToHomePage() {
  16 |     await this.page.goto("https://automationexercise.com", {
  17 |       waitUntil: "domcontentloaded",
  18 |     });
  19 |   }
  20 |
  21 |   async verifyHomePage() {
  22 |     await expect(this.page).toHaveTitle("Automation Exercise");
  23 |     await expect(this.page).toHaveURL(/automationexercise\.com/);
  24 |   }
  25 |
  26 |   async verifyHomeLink() {
  27 |     await expect(this.homeLink).toBeVisible();
  28 |   }
  29 |
  30 |   async viewProduct() {
  31 |     await this.viewProductButton.click();
  32 |     await expect(this.page).toHaveURL(/\/product_details/);
  33 |   }
  34 |
  35 |   async verifyProductDetails() {
  36 |     await expect(this.page.getByText(/Availability:/i)).toBeVisible();
  37 |     await expect(this.page.getByText(/Condition:/i)).toBeVisible();
  38 |     await expect(this.page.getByText(/Brand:/i)).toBeVisible();
  39 |   }
  40 |
  41 |   async setQuantity(quantity) {
  42 |     await this.quantityInput.fill(quantity.toString());
  43 |     await expect(this.quantityInput).toHaveValue(quantity.toString());
  44 |   }
  45 |
  46 |   async addToCart() {
  47 |     await this.addToCartButton.click();
  48 |     await expect(
  49 |       this.page.getByRole("heading", { name: "Added!" })
  50 |     ).toBeVisible();
  51 |     await expect(
  52 |       this.page.getByText("Your product has been added")
  53 |     ).toBeVisible();
  54 |   }
  55 |
  56 |   async viewCart() {
  57 |     await this.viewCartLink.click();
  58 |     await expect(this.page).toHaveURL(/\/view_cart/);
  59 |   }
  60 |
  61 |   async verifyCartQuantity(expectedQuantity) {
  62 |     await expect(
  63 |       this.page.getByRole("cell", { name: "Quantity" })
> 64 |     ).toBeVisible();
     |       ^ Error: expect(locator).toBeVisible()
  65 |     await expect(
  66 |       this.page.getByRole("cell", { name: expectedQuantity.toString() })
  67 |     ).toBeVisible();
  68 |   }
  69 | }
  70 |
  71 | module.exports = TestCase2Page;
  72 |
```