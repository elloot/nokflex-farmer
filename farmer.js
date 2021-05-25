const { chromium } = require('playwright');
require('dotenv').config();

(async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 100 });
  const page = await browser.newPage();
  await page.goto('https://nokflex.nok.se');
  await page.fill('#login-input', process.env.EMAIL);
  await page.click('#next-button');
  // await page.keyboard.press('Enter');
  await page.fill('#password-input', process.env.PASS);
  // await page.keyboard.press('Enter');
  // await page.keyboard.press('Enter');
  await page.click('#next-button');
  await page.click('.user-button-container :nth-child(2)');
  await page.click('button.v-btn.theme--light.primary');
  await page.click('a:not([Logo])');
  await page.goto('https://nokflex.nok.se');

  for (let i = 0; i < 5; i++) {
    await page.fill('#login-input', process.env.EMAIL);
    await page.click('#next-button');
    await page.fill('#password-input', process.env.PASS);
    await page.click('#next-button');
    // await page.click('button.Button.Button--full');
    await page.click('.user-button-container :nth-child(2)');
    await page.click('button.v-btn.theme--light.primary');
    await page.click('a:not([Logo])');
    await page.waitForTimeout(1000);
    await page.goto('https://nokflex.nok.se');
    await page.waitForTimeout(1000);
  }
  await browser.close();
})();
