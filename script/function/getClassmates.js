import puppeteer from 'puppeteer';

async function run() {
  const browser = await puppeteer.launch({ headless: false });
}
