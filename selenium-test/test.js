const { Builder } = require('selenium-webdriver');
require('chromedriver');

async function runTest() {
  let driver = await new Builder().forBrowser('chrome').build();
    await driver.get('https://www.flipkart.com');
    await driver.sleep(5000);
    
    await driver.quit();
}

runTest();