import puppeteer from 'puppeteer';

export default async function login(page) {
  // USERNAME_SELECTOR
  // PASSWORD_SELECTOR
  // BUTTON_SELECTOR

  await page.click(USERNAME_SELECTOR);
  await page.waitFor(0 * 1000);
  await page.keyboard.type(CREDS.username, { delay: 0 });

  await page.click(PASSWORD_SELECTOR);
  await page.waitFor(0 * 1000);
  await page.keyboard.type(CREDS.password, { delay: 0 });

  await page.click(BUTTON_SELECTOR);
}
