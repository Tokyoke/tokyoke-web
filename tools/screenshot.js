import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

const __dirname = path.dirname(new URL(import.meta.url).pathname);

const url = process.argv[2] || 'http://localhost:5173/admin';
const outPath = process.argv[3] || 'screenshots/admin.png';

// ensure output dir
const dir = path.dirname(outPath);
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

const browser = await puppeteer.launch({ args: ['--no-sandbox','--disable-setuid-sandbox'] });
const page = await browser.newPage();
await page.setViewport({ width: 1400, height: 820 });
try {
  await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
  await page.screenshot({ path: outPath, fullPage: true });
  console.log('SCREENSHOT_SAVED:' + outPath);
} catch (err) {
  console.error('ERROR_LOADING_PAGE', err && err.message);
  process.exitCode = 2;
} finally {
  await browser.close();
}

