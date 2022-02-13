import puppeteer from 'puppeteer';
import cron from 'node-cron';


let brokenDeals: {
    title: string; url: string; img: string; upvote: string; price: string; username: string;
    insertedTime: string;
}[] = [];

(async () => {
    try {
        cron.schedule('50 * * * * *', async () => {
            // Preparing puppeteer
            const browser = await puppeteer.launch({
                headless: true,
                args: ['--no-sandbox']
            });

            // Opening dealabs hot tab
            const page = await browser.newPage();
            const URL = "https://www.dealabs.com/groupe/erreur-de-prix";
            await page.goto(URL, { waitUntil: "networkidle0" });


            // Allow cookies
            await page.click(
                "button.flex--grow-1.flex--fromW3-grow-0.width--fromW3-ctrl-m.space--b-2.space--fromW3-b-0"
            );

        });

    } catch (error) {
        throw error;
    }
})();