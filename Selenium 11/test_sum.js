const { Builder, By } = require('selenium-webdriver');

(async function test() {
  let driver = await new Builder().forBrowser('chrome').build();
  await driver.get('file:///C:/Users/VIVEK/OneDrive/Desktop/Selenium 11/index.html');  // change path
  await driver.findElement(By.id('num1')).sendKeys('5');
  await driver.findElement(By.id('num2')).sendKeys('7');
  await driver.findElement(By.id('submit')).click();
  let result = await driver.findElement(By.id('result')).getText();
  console.log('Result:', result);
  await driver.quit();
})();
