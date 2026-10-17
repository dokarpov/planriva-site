import {defineConfig} from '@playwright/test';
export default defineConfig({
 testDir:'./tests',
 webServer:{command:'npm run preview -- --host 127.0.0.1 --port 4173 --base=/planriva-site/preview/',url:'http://127.0.0.1:4173/planriva-site/preview/',reuseExistingServer:false,timeout:30000},
 use:{baseURL:'http://127.0.0.1:4173/planriva-site/preview/',browserName:'chromium',trace:'retain-on-failure'},
 projects:[
  {name:'desktop',use:{viewport:{width:1440,height:900}}},
  {name:'tablet',use:{viewport:{width:768,height:1024},isMobile:true,hasTouch:true}},
  {name:'mobile',use:{viewport:{width:390,height:844},isMobile:true,hasTouch:true}},
  {name:'small-mobile',use:{viewport:{width:320,height:700},isMobile:true,hasTouch:true}}
 ],reporter:'list',retries:0
});
