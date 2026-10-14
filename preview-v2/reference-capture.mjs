import { chromium } from 'playwright';
import { mkdir, writeFile } from 'node:fs/promises';

const targets = [
  ['reference', 'https://heronaiapp.com/'],
  ['production', 'https://dokarpov.github.io/planriva-site/'],
  ['staging', 'https://planriva-v44-staging.up.railway.app/']
];
const sizes = [
  ['desktop', 1440, 900],
  ['tablet', 1024, 768],
  ['mobile', 390, 844],
  ['small-mobile', 320, 700]
];
await mkdir('reference-captures', { recursive: true });
const browser = await chromium.launch({ headless: true });
const findings = [];
for (const [name, url] of targets) {
  for (const [size, width, height] of sizes) {
    const context = await browser.newContext({ viewport: { width, height }, deviceScaleFactor: 1, reducedMotion: 'reduce' });
    const page = await context.newPage();
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    page.on('console', message => { if (message.type() === 'error') errors.push(message.text()); });
    let status = null;
    try {
      const response = await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 45000 });
      status = response?.status() ?? null;
      await page.waitForTimeout(4500);
      await page.screenshot({ path: `reference-captures/${name}-${size}-hero.png`, animations: 'disabled' });
      const pageHeight = await page.evaluate(() => document.documentElement.scrollHeight);
      for (const pct of [0.25, 0.5, 0.75, 1]) {
        await page.evaluate(p => window.scrollTo(0, (document.documentElement.scrollHeight - innerHeight) * p), pct);
        await page.waitForTimeout(600);
        await page.screenshot({ path: `reference-captures/${name}-${size}-${Math.round(pct * 100)}.png`, animations: 'disabled' });
      }
      const metrics = await page.evaluate(() => ({
        title: document.title,
        heading: document.querySelector('h1')?.textContent?.trim(),
        documentWidth: document.documentElement.scrollWidth,
        viewportWidth: innerWidth,
        overflow: document.documentElement.scrollWidth > innerWidth + 1,
        sections: document.querySelectorAll('main section').length,
        buttons: document.querySelectorAll('button').length,
        linksWithoutHref: document.querySelectorAll('a:not([href])').length
      }));
      findings.push({ name, size, status, pageHeight, ...metrics, errors });
    } catch (error) {
      findings.push({ name, size, status, failure: error.message, errors });
    }
    await context.close();
  }
}
await browser.close();
await writeFile('reference-captures/report.json', JSON.stringify(findings, null, 2));
console.log(JSON.stringify(findings, null, 2));
if (findings.some(f => f.name !== 'reference' && (f.failure || f.status >= 400 || f.overflow || f.errors.length))) process.exitCode = 1;
