# Automation Exercise E2E Testing Suite

This repository contains end-to-end (E2E) tests for the Automation Exercise website using Playwright, a modern end-to-end testing framework.

## Output Video 
### Video 1 - Running Test in Command Line
https://github.com/user-attachments/assets/4ad28ca2-4c14-46fd-936d-8e70a637e321
### Video 2 - Showing Report
https://github.com/user-attachments/assets/434dd9f2-8d19-4119-b8cd-0c4e98507b42
### Video 3 - Browser View 
https://github.com/user-attachments/assets/2fcbeeb8-a4d4-4674-ad68-f77f0487a20d

## 🚀 Features

- Cross-browser testing (Chromium, Firefox, and WebKit)
- Page Object Model (POM) implementation
- Parallel test execution
- Multiple test reports (HTML and Allure)
- Screenshot capture on test failures
- Video recording for failed tests
- Trace viewer support for debugging
- Global setup for test initialization

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Git

## 🛠️ Installation

1. Clone the repository:

```bash
git clone [repository-url]
cd [project-directory]
```

2. Install dependencies:

```bash
npm install
```

3. Install Playwright browsers:

```bash
npx playwright install
```

4. Install Allure reporter:

```bash
npm install -D allure-playwright
```

## 🔧 Configuration

The project uses the following key configurations:

- `playwright.config.js`: Main configuration file
- `global-setup.js`: Handles test initialization
- `storage-state.json`: Stores browser state

### Key Settings

- Test timeout: 10 seconds
- Retry failed tests: 1 time
- Parallel test execution: Enabled
- Reporters: HTML and Allure
- Screenshots: Captured on test failures
- Video recording: Enabled for failed tests
- Trace viewer: Enabled for failed tests
- SlowMo: 1000ms for better visibility

## 🏃‍♂️ Running Tests

### Run all tests

```bash
npx playwright test
```

### Run tests in specific browser

```bash
npx playwright test --project=chromium    # Run in Chromium
npx playwright test --project=firefox     # Run in Firefox
npx playwright test --project=webkit      # Run in WebKit
```

### Run tests in UI mode

```bash
npx playwright test --ui
```

### Run tests in debug mode

```bash
npx playwright test --debug
```

### Clear test state

```bash
npx playwright clear-storage-state
```

Or manually remove the storage state file:

```bash
rm storage-state.json
```

## 📊 Viewing Reports

### HTML Report

After test execution, view the HTML report:

```bash
npx playwright show-report
```

### Allure Report

Generate and view Allure report:

```bash
# Generate report
npx allure generate ./allure-results --clean

# Open report
npx allure open ./allure-report
```

Or use npm scripts:

```bash
# Run tests and generate report
npm run test:report

# Generate report only
npm run report:generate

# Open report only
npm run report:open
```

## 🔍 Debugging Tests

1. Using Trace Viewer:

```bash
npx playwright show-trace [trace-file]
```

2. Using Playwright Inspector:

```bash
PWDEBUG=1 npx playwright test
```

3. Using Debug Mode:

```bash
npx playwright test --debug
```

## 📁 Project Structure

```
Project/
├── tests/               # Test files
│   └── assessmentTest.spec.js
├── pages/              # Page Object Model files
│   ├── testCase1.js
│   └── testCase2.js
├── global-setup.js     # Test initialization
├── playwright.config.js # Playwright configuration
├── storage-state.json  # Browser state
├── test-results/      # Test execution results
├── playwright-report/  # Playwright HTML reports
├── allure-results/    # Allure test results
├── allure-report/     # Generated Allure reports
└── package.json       # Project dependencies
```

## 📑 Page Object Model

The project follows the Page Object Model (POM) design pattern:

### Benefits of POM

- Reusable page components
- Better maintainability
- Cleaner test code
- Easier updates when UI changes
- Separation of test logic from page interactions

### Implementation

- `testCase1.js`: Handles product search functionality
- `testCase2.js`: Handles cart operations and quantity verification

## 📝 Test Cases

### Test Case 1: Product Search

- Verifies product search functionality
- Validates search results
- Ensures all products contain search term

### Test Case 2: Cart Operations

- Verifies product details
- Tests quantity modification
- Validates cart contents
- Ensures correct quantity display

## 🔄 CI/CD Integration

The project is configured for CI/CD environments:

- Fails on CI if test.only is left in code
- Uses 1 worker on CI
- Retries failed tests on CI
- Supports multiple report formats (HTML and Allure)

## 🔐 Environment Variables

The following environment variables can be configured:

```bash
# Browser configuration
BROWSER=chromium    # Set default browser (chromium, firefox, webkit)
HEADLESS=true      # Run tests in headless mode
SLOWMO=1000        # Slow down operations by specified milliseconds

# Test configuration
TEST_TIMEOUT=30000 # Set test timeout in milliseconds
RETRIES=1          # Number of retries for failed tests
WORKERS=1          # Number of parallel workers
```

## 🛠️ Troubleshooting

### Common Issues and Solutions

1. **Browser Installation Issues**

   ```bash
   # Force reinstall browsers
   npx playwright install --force
   ```

2. **Test Timeout Issues**

   - Increase timeout in playwright.config.js
   - Check for slow network conditions
   - Verify element selectors

3. **Report Generation Issues**
   - Clear previous report directories
   - Ensure sufficient disk space
   - Check file permissions

## 📊 Test Data Management

### Test Data Structure

```
Project/
├── test-data/           # Test data directory
│   ├── users.json      # User credentials
│   ├── products.json   # Product information
│   └── config.json     # Test configuration
```

### Data Handling Best Practices

- Use separate test data for different environments
- Implement data cleanup after tests
- Avoid hardcoding test data in test files
- Use data factories for dynamic test data

## 🤝 Contributing

1. Create a feature branch
2. Write your tests
3. Ensure all tests pass
4. Submit a pull request

## 📫 Support

For any issues or questions, please contact the QA team.
