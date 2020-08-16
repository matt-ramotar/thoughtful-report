import puppeteer from 'puppeteer';
import { Open as env } from '../../env/index.js';

const creds = env.credentials;
const selectors = env.selectors;

/*
TODO: refactor

LATER: Material
- get lecture materials
- save lecture materials
- get homework
- save homework

LATER: get pictures and videos and save to db
*/

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  const url = 'https://open.appacademy.io/login';
  await page.goto(url);

  // login()
  page.waitForSelector(selectors.USERNAME);
  await page.click(selectors.USERNAME);
  await page.keyboard.type(creds.USERNAME);
  await page.click(selectors.PASSWORD);
  await page.keyboard.type(creds.PASSWORD);
  await page.click(selectors.BUTTON);

  // NOW: get learning objectives

  page.waitForSelector(selectors.TASK_NAV_SCROLL_UL);

  // TODO: save learning objectives

  // TODO: get dayId

  // if friday and learning objectives for Monday,
})();
