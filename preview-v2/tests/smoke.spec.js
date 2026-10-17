import {test,expect} from '@playwright/test';
test('published React preview candidate: navigation, evidence review, contrast, responsive layout',async({page},testInfo)=>{
 const errors=[],failures=[];
 page.on('pageerror',e=>errors.push(e.message));
 page.on('console',m=>{if(m.type()==='error')errors.push(m.text())});
 page.on('requestfailed',r=>{if(!r.failure()?.errorText?.includes('ERR_ABORTED'))failures.push(r.url())});
 const response=await page.goto('./',{waitUntil:'networkidle',timeout:45000});
 expect(response?.status()).toBe(200);
 await expect(page.locator('#root h1')).toContainText('Find the discrepancy.');
 await expect(page.getByRole('heading',{name:/One issue/})).toBeVisible();
 const width=await page.evaluate(()=>({viewport:innerWidth,document:document.documentElement.scrollWidth}));
 expect(width.document,'No horizontal document overflow').toBeLessThanOrEqual(width.viewport+2);
 const missing=await page.locator('a[href^="#"]').evaluateAll(elements=>elements.filter(a=>a.getAttribute('href')!=='#'&&!document.getElementById(a.hash.slice(1))).map(a=>a.hash));
 expect(missing).toEqual([]);
 if(testInfo.project.name!=='desktop' && testInfo.project.name!=='tablet'){
  const menu=page.getByRole('button',{name:'Toggle navigation'});
  await expect(menu).toBeVisible();await menu.click();await expect(menu).toHaveAttribute('aria-expanded','true');
  await page.getByRole('link',{name:'Product experience'}).click();await expect(menu).toHaveAttribute('aria-expanded','false');
 }else{
  await page.getByRole('link',{name:'Product experience'}).click();
 }
 await expect(page).toHaveURL(/#review$/);
 await page.getByRole('button',{name:'Review partition alignment issue'}).click();
 await expect(page.getByRole('tab',{name:/Issue/})).toHaveAttribute('aria-selected','true');
 // Mobile-first acceptance: the selected outcome must be visible directly below the stage controls,
 // without scrolling past a large drawing after each action.
 if(testInfo.project.name!=='desktop'){
  await expect(page.locator('#referenceDrawing')).toBeHidden();
  const title=page.locator('.reviewPanel h3');
  await expect(title).toContainText('Understand the discrepancy.');
  await expect(title).toBeInViewport({ratio:0.85});
  const tabs=await page.locator('.appSteps').boundingBox(), result=await title.boundingBox();
  expect(result.y-(tabs.y+tabs.height),'Result must immediately follow stage selector').toBeLessThan(125);
 }

 await page.getByRole('tab',{name:/Source/}).click();
 await expect(page.getByRole('tabpanel')).toContainText('First, find what changed.');
 await page.getByRole('button',{name:'Open the issue'}).click();
 await expect(page.getByRole('tabpanel')).toContainText('Understand the discrepancy.');
 await page.getByRole('button',{name:'Review the options'}).click();
 await expect(page.getByRole('tabpanel')).toContainText('Consider the next action.');
 await page.getByRole('button',{name:'Make a decision'}).click();
 await expect(page.getByRole('tabpanel')).toContainText('Keep the architect in control.');
 await page.getByRole('button',{name:'Request clarification'}).click();
 await expect(page.getByRole('status')).toContainText('Clarification requested');
 await page.getByRole('button',{name:'Restart review'}).click();
 await expect(page.getByRole('tabpanel')).toContainText('First, find what changed.');
 expect(await page.getByRole('status').count()).toBe(0);
 if(testInfo.project.name!=='desktop'){
  await expect(page.locator('#referenceDrawing')).toBeHidden();
  const reveal=page.getByRole('button',{name:'View referenced drawing'});
  await expect(reveal).toHaveAttribute('aria-expanded','false');
  await reveal.click();
  await expect(page.locator('#referenceDrawing')).toBeVisible();
  await expect(page.getByRole('button',{name:'Hide referenced drawing'})).toHaveAttribute('aria-expanded','true');
 }else{
  await expect(page.locator('#referenceDrawing')).toBeVisible();
 }
 const contrast=await page.evaluate(()=>{
  function color(str){const match=str.match(/rgba?\(([^)]+)\)/);if(!match)return null;return match[1].split(',').slice(0,3).map(Number)}
  function linear(x){x/=255;return x<=.04045?x/12.92:((x+.055)/1.055)**2.4}
  function luminance(c){return .2126*linear(c[0])+.7152*linear(c[1])+.0722*linear(c[2])}
  const targets=['.heroGrid p','.contextContent>p','.reviewLead','.reviewPanel h3','.truthLabel','.stageLegend','.appSteps button.current'];
  return targets.map(selector=>{const node=document.querySelector(selector);const fg=color(getComputedStyle(node).color);let cur=node,bg=null;while(cur){const value=color(getComputedStyle(cur).backgroundColor);if(value&&getComputedStyle(cur).backgroundColor!=='rgba(0, 0, 0, 0)'){bg=value;break}cur=cur.parentElement}bg=bg||[255,255,255];let a=luminance(fg),b=luminance(bg);return {selector,ratio:(Math.max(a,b)+.05)/(Math.min(a,b)+.05)}});
 });
 expect(contrast.filter(c=>c.ratio<4.5),'Core text must meet WCAG AA 4.5:1 contrast').toEqual([]);
 expect(errors,'No JavaScript errors').toEqual([]);expect(failures,'No network failures').toEqual([]);
 await page.screenshot({path:testInfo.outputPath('planriva-v47.png'),fullPage:true});
});
