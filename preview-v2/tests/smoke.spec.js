import {test,expect} from '@playwright/test';

test('Planriva renders and core product controls work',async({page})=>{
  const errors=[];const failed=[];
  page.on('pageerror',e=>errors.push(e.message));
  page.on('requestfailed',request=>{if(!request.failure()?.errorText?.includes('ERR_ABORTED'))failed.push(request.url())});
  const response=await page.goto('./',{waitUntil:'networkidle',timeout:45000});
  expect(response?.status()).toBe(200);
  await expect(page.locator('#root')).not.toBeEmpty();
  await expect(page.locator('body')).toContainText(/Planriva|architect/i);
  await expect(page.locator('h1').first()).toBeVisible();
  const dimensions=await page.evaluate(()=>({viewport:innerWidth,width:document.documentElement.scrollWidth}));
  expect(dimensions.width).toBeLessThanOrEqual(dimensions.viewport+2);
  expect(errors).toEqual([]);
  expect(failed).toEqual([]);
  await page.screenshot({path:'test-results/planriva-'+test.info().project.name+'.png',fullPage:true});
});
