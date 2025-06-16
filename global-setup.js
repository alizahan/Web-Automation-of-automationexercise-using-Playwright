import { chromium, firefox, webkit } from "@playwright/test";

async function globalSetup() {
  // Handle Chromium
  const chromiumBrowser = await chromium.launch();
  const chromiumContext = await chromiumBrowser.newContext();
  const chromiumPage = await chromiumContext.newPage();
  await chromiumPage.goto("https://automationexercise.com");
  await chromiumContext.storageState({ path: "./storage-state-chromium.json" });
  await chromiumBrowser.close();

  // Handle Firefox
  const firefoxBrowser = await firefox.launch();
  const firefoxContext = await firefoxBrowser.newContext();
  const firefoxPage = await firefoxContext.newPage();
  await firefoxPage.goto("https://automationexercise.com");
  await firefoxContext.storageState({ path: "./storage-state-firefox.json" });
  await firefoxBrowser.close();

  // Handle WebKit
  const webkitBrowser = await webkit.launch();
  const webkitContext = await webkitBrowser.newContext();
  const webkitPage = await webkitContext.newPage();
  await webkitPage.goto("https://automationexercise.com");
  await webkitContext.storageState({ path: "./storage-state-webkit.json" });
  await webkitBrowser.close();
}

export default globalSetup;
