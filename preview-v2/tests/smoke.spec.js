import {test,expect} from '@playwright/test';
test('desktop and mobile: render and interact',async({page},testInfo)=>{
 const errors=[];const failed=[];
 page.on('pageerror',e=>errors.push(e.message));
 page.on('console',m=>{if(m.type()==='error')errors.push(m.text())});
 page.on('requestfailed',r=>{if(!r.failure()?.errorText?.includes('ERR_ABORTED'))failed.push(r.url())});
 try{
  const response=await page.goto('./',{waitUntil:'networkidle',timeout:45000});
  expect(response?.status()).toBe(200);
  await expect(page.locator('#root h1')).toBeVisible({timeout:12000});
  if(testInfo.project.name==='mobile'){
   await page.getByRole('button',{name:'Toggle navigation'}).click();
  }
  await page.getByRole('link',{name:'Workflow'}).click();
  await expect(page).toHaveURL(/#workflow$/);
  await page.locator('.sceneHotspot').first().click();
  await expect(page.locator('.tabBar button').nth(1)).toHaveClass(/active/);
  await page.locator('.tabBar button').last().click();
  await expect(page.locator('.tabBar button').last()).toHaveClass(/active/);
  const width=await page.evaluate(()=>({viewport:innerWidth,document:document.documentElement.scrollWidth}));
  expect(width.document).toBeLessThanOrEqual(width.viewport+2);
  expect(errors).toEqual([]);
  expect(failed).toEqual([]);
 }finally{
  await page.screenshot({path:testInfo.outputPath('planriva-full-page.png'),fullPage:true}).catch(()=>{});
  if(errors.length)console.log('BROWSER ERRORS',errors);
  if(failed.length)console.log('FAILED REQUESTS',failed);
 }
});
