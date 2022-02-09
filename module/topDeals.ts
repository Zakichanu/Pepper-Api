import puppeteer from 'puppeteer';
import cron from 'node-cron';

// Array stockant les bons plans
let topDeals: { titre: string; url: string; img: string; note: string; prix: string; }[] = [];

(async () => {
  try {

    cron.schedule('30 * * * * *', async () => {

      // Préparation de puppeteer
      const browser = await puppeteer.launch({ 
        headless: true,
        args: ['--no-sandbox']
      });

      // Lancement de dealabs
      const page = await browser.newPage();
      const URL = "https://www.dealabs.com";
      await page.goto(URL, { waitUntil: "networkidle0" });

      // Clique sur le message d'autorisation des cookies
      await page.click(
        "button.flex--grow-1.flex--fromW3-grow-0.width--fromW3-ctrl-m.space--b-2.space--fromW3-b-0"
      );

      // Récupération de nos données pour notre bot
      setTimeout(async () => {

        // Récupère les div en carousel
        const options = await page.$$("div.flex.flex--grow-1");

        // Le carousel qui nous intéresse
        const deals = options[1];

        // Liste des attributs qui nous intéresse
        const titles = await deals.$$("a[title]");

        // Lien vers le deals
        const hrefs = await deals.$$("a[href]");


        for (let index = 0; index < 5; index++) {
          // Récupération du string des titres des deals
          const titleDealString = await page.evaluate(
            (title) => title.getAttribute("title"),
            titles[index]
          );

          // Récupération du sting des liens vers les deals
          const hrefDealString = await page.evaluate(
            (href) => href.getAttribute("href"),
            hrefs[index]
          );

          // Image du deal
          const imgs = await titles[index].$("img[src]");
          const imgDealURL = await page.evaluate(
            (img) => img.getAttribute("src"),
            imgs
          );

          // Valeur de l'upvote
          const upvoteTag = await titles[index].$('strong');
          const upvote = await page.evaluate(tag => tag.textContent, upvoteTag);

          // Valeur du prix ou de la réduction
          const priceTag = await titles[index].$('span.text--overlay');
          let price = '';
          if (priceTag != null) {
            price = await page.evaluate(tag => tag.textContent, priceTag);
          } else {
            price = '';
          }

          topDeals.push({
            titre: titleDealString,
            url: URL + hrefDealString,
            img: imgDealURL,
            note: upvote,
            prix: price
          });
          
        }
        console.log(new Date().toLocaleString() + ' ----------- EXTRACTION DES DEALS -------')
        console.log(topDeals)
        await browser.close();
      }, 2000);
    });



  } catch (error) {
    (new Date().toLocaleString() + ' ' + error);
    throw error;
  }
})();

export default { topDeals };