import {test,expect} from '@playwright/test';

test('React preview renders, navigates and remains stable',async({page},testInfo)=>{
 const errors=[];const failed=[];
 page.on('pageerror',error=>errors.push(error.message));
 page.on('requestfailed',request=>{if(!request.failure()?.errorText?.includes('ERR_ABORTED'))failed.push(request.url())});
 const response=await page.goto('./',{waitUntil:'networkidle',timeout:45000});
 expect(response?.status()).toBe(200);
 await expect(page.locator('#root')).not.toBeEmpty();
 await expect(page.getByRole('heading',{level:1})).toBeVisible();
 await expect(page.locator('#product')).toBeAttached();
 await expect(page.locator('.bimModel')).toBeAttached();
 if(testInfo.project.name==='mobile'){
   await page.getByRole('button',{name:'Toggle navigation'}).click();
   await expect(page.getByRole('link',{name:'Workflow'})).toBeVisible();
   await page.getByRole('link',{name:'Workflow'}).click();
 }else{
   await page.getByRole('link',{name:'Workflow'}).click();
 }
 await expect(page).toHaveURL(/#workflow$/);
 await page.locator('.sceneHotspot').first().click();
 await expect(page).toHaveURL(/#workflow$|#product$/);
 await page.locator('.tabBar button').last().click();
 await expect(page.locator('.tabBar button').last()).toHaveClass(/active/);
 const dimensions=await page.evaluate(()=>({viewport:innerWidth,width:document.documentElement.scrollWidth}));
 expect(dimensions.width).toBeLessThanOrEqual(dimensions.viewport+2);
 expect(errors).toEqual([]);
 expect(failed).toEqual([]);
 await page.screenshot({path:testInfo.outputPath('planriva-full-page.png'),fullPage:true});
});
