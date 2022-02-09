import puppeteer from 'puppeteer';
import cron from 'node-cron';

(async () => {
    try {
        cron.schedule('30 * * * * *', async () => {
            // Preparing puppeteer
            const browser = await puppeteer.launch({
                headless: true,
                args: ['--no-sandbox']
            });


            // Opening dealabs hot tab
            const page = await browser.newPage();
            const URL = "https://www.dealabs.com/hot";
            await page.goto(URL, { waitUntil: "networkidle0" });

            // Allow cookies
            await page.click(
                "button.flex--grow-1.flex--fromW3-grow-0.width--fromW3-ctrl-m.space--b-2.space--fromW3-b-0"
            );

            // Retrieving data
            setTimeout(async () => {
                const listDeals = await page.$$('div.threadGrid');
                console.log(new Date().toLocaleString() + ' ----------- EXTRACTION DES DEALS HOT -------')


                for (let index = 0; index < 5; index++) {

                    // Retrieving image of the deal
                    const imgTag = await listDeals[index].$('img.thread-image');
                    const imgDeal = await page.evaluate(
                        (img) => img.getAttribute("src"),
                        imgTag
                    );

                    console.log(imgDeal)

                }

                await browser.close();
            }, 2000);
        })
    } catch (error) {
        console.log(new Date().toLocaleString() + ' ' + error);
        throw error;
    }

})