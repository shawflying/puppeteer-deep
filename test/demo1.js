const puppeteer = require('puppeteer');
// C:/Users/Administrator/AppData/Local/Google/Chrome/Application
(async () => {
    //谷歌浏览器本身的
    const browser = await puppeteer.launch({executablePath: 'C:/Users/Administrator/AppData/Local/Google/Chrome/Application/chrome.exe', headless: false });
    //下载的模块
    // const browser = await puppeteer.launch({executablePath: 'D:/Program Files/chrome-win/chrome.exe', headless: false });
    const page = await browser.newPage();
    await page.goto('https://y.qq.com');
    await page.screenshot({ path: './yqq.png' });
    browser.close();
})();

