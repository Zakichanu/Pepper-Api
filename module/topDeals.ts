import puppeteer from 'puppeteer';
import cron from 'node-cron';

// Array that stocks hottest deals
let topDeals: { title: string; url: string; img: string; upvote: string; price: string; }[] = [];

(async () => {
  try {

    cron.schedule('30 24 * * * *', async () => {

      // Preparing puppeteer
      const browser = await puppeteer.launch({ 
        headless: true,
        args: ['--no-sandbox']
      });

      // Launching dealabs home page
      const page = await browser.newPage();
      const URL = "https://www.dealabs.com";
      await page.goto(URL, { waitUntil: "networkidle0" });

      // Allow cookies
      await page.click(
        "button.flex--grow-1.flex--fromW3-grow-0.width--fromW3-ctrl-m.space--b-2.space--fromW3-b-0"
      );

      // Retrieving data
      setTimeout(async () => {

        // Get carousel div
        const options = await page.$$("div.flex.flex--grow-1");

        // Retrieve the one which interest us
        const deals = options[1];

        // Title of deals
        const titles = await deals.$$("a[title]");

        // Link of deals
        const hrefs = await deals.$$("a[href]");


        for (let index = 0; index < 5; index++) {
          // Title to string
          const titleDealString = await page.evaluate(
            (title) => title.getAttribute("title"),
            titles[index]
          );

          // Link into string
          const hrefDealString = await page.evaluate(
            (href) => href.getAttribute("href"),
            hrefs[index]
          );

          // Image of deal
          const imgs = await titles[index].$("img[src]");
          const imgDealURL = await page.evaluate(
            (img) => img.getAttribute("src"),
            imgs
          );

          // Value
          const upvoteTag = await titles[index].$('strong');
          const upvote = await page.evaluate(tag => tag.textContent, upvoteTag);

          // Price or reduction
          const priceTag = await titles[index].$('span.text--overlay');
          let price = '';
          if (priceTag != null) {
            price = await page.evaluate(tag => tag.textContent, priceTag);
          } else {
            price = '';
          }

          topDeals.push({
            title: titleDealString,
            url: URL + hrefDealString,
            img: imgDealURL,
            upvote: upvote,
            price: price
          });
          
        }
        console.log(new Date().toLocaleString() + ' ----------- EXTRACTION DES DEALS -------')
        console.log(topDeals)
        await browser.close();
      }, 2000);
    });



  } catch (error) {
    console.log(new Date().toLocaleString() + ' ' + error);
    throw error;
  }
})();

export default { topDeals };