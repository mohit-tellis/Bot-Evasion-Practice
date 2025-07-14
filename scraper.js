const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
const UserAgent = require('user-agents');
const path = require('path');

// Add stealth plugin
puppeteer.use(StealthPlugin());

(async () => {
  const userAgent = new UserAgent();

  const browser = await puppeteer.launch({
    headless: false, // set true when done testing
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    defaultViewport: {
      width: 1280,
      height: 800
    }
  });

  const page = await browser.newPage();
  await page.setUserAgent(userAgent.toString());

  await page.setExtraHTTPHeaders({
    'accept-language': 'en-US,en;q=0.9'
  });

  console.log('🧠 User-Agent Used:', userAgent.toString());

  const url = 'https://bot.sannysoft.com/';
  console.log('🌐 Navigating to:', url);

  await page.goto(url, { waitUntil: 'networkidle2', timeout: 0 });

  // FIXED: Replace waitForTimeout
  await new Promise(resolve => setTimeout(resolve, 5000));

  // Save screenshot
  const filePath = path.join(__dirname, 'proof.png');
  await page.screenshot({ path: filePath });

  console.log(`✅ Screenshot saved as ${filePath}`);

  await browser.close();
})();
