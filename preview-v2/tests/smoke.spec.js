import {test,expect} from '@playwright/test';
test('Planriva renders without runtime failures or horizontal overflow',async({page})=>{
 const errors=[];page.on('pageerror',e=>errors.push(e.message));
 const response=await page.goto('./',{waitUntil:'networkidle'});
 expect(response?.status()).toBe(200);
 await expect(page.locator('#root')).not.toBeEmpty();
 await expect(page.locator('body')).toContainText(/Planriva|architect/i);
 const m=await page.evaluate(()=>({viewport:innerWidth,width:document.documentElement.scrollWidth}));
 expect(m.width).toBeLessThanOrEqual(m.viewport+2);
 expect(errors).toEqual([]);
});
