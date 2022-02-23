import puppeteer from 'puppeteer';
import cron from 'node-cron';


let brokenDeals: {
    title: string; url: string; img: string; upvote: string; price: string; username: string;
    insertedTime: string;
}[] = [];

(async () => {
    try {
        cron.schedule('8 * * * * *', async () => {
            // Preparing puppeteer
            const browser = await puppeteer.launch({
                headless: true,
                args: ['--no-sandbox']
            });

            // Opening dealabs hot tab
            const page = await browser.newPage();
            const URL = "https://www.hotukdeals.com/tag/price-glitch";
            await page.goto(URL, { waitUntil: "networkidle0" });


            // Allow cookies
            await page.click(
                "button.flex--grow-1.flex--fromW3-grow-0.width--fromW3-ctrl-m.space--b-2.space--fromW3-b-0"
            );

            setTimeout(async () => {
                try {
                    // Listing new hot deals
                    const listDeals = await page.$$("div.threadGrid");

                    // initiating index for looping list of deals
                    var limit = 5;

                    brokenDeals.length = 0;

                    for (let index = 0; index < limit; index++) {
                        // Initializing variables
                        var upvote = "";
                        var imgDeal = "";
                        var insertedTime = "";
                        var url = "";
                        var title = "";
                        var price = "";
                        var username = "";
                        let element = listDeals[index];

                        // Check if it is an ad
                        const pub = await element.$("button.cept-newsletter-widget-close")

                        if (pub) {
                            limit++;
                            index++;
                            element = listDeals[index]
                        }

                        // Variable if deal is expired
                        const expiredSpan = await element.$('span.size--all-s.text--color-grey.space--l-1.space--r-2.cept-show-expired-threads.hide--toW3');

                        if (!expiredSpan) {
                            // Retrieving upvote
                            const upvoteTag = await element.$(
                                "span.cept-vote-temp.vote-temp"
                            );

                            // Retrieving image URL
                            const imgTag = await element.$("img.thread-image");
                            imgDeal = await page.evaluate(
                                (img) => img.getAttribute("src"),
                                imgTag
                            );

                            // Retrieving inserted time
                            const insertedTimeTag = await element.$("span.metaRibbon.cept-meta-ribbon")

                            if (insertedTimeTag) {
                                insertedTime = await page.evaluate(
                                    (tag) => tag.outerText,
                                    insertedTimeTag
                                );
                            } else {
                                insertedTime = ''
                            }

                            // Retrieving URL and Title
                            const titleTag = await listDeals[index].$(
                                "a.cept-tt.thread-link.linkPlain.thread-title--list"
                            );
                            title = await page.evaluate((tag) => tag.outerText, titleTag);
                            url = await page.evaluate(
                                (url) => url.getAttribute("href"),
                                titleTag
                            );

                            // Retrieving price
                            const priceTag = await listDeals[index].$(
                                "span.thread-price.text--b.cept-tp.size--all-l.size--fromW3-xl"
                            );

                            if (priceTag) {
                                price = await page.evaluate((tag) => tag.textContent, priceTag);
                            } else {
                                price = 'FREE'
                            }

                            // Retrieving author username
                            const userTag = await listDeals[index].$('span.thread-username');
                            username = await page.evaluate((tag) => tag.textContent, userTag);
                            username = username.replace(/\s/g, "");

                            //Inserting to array of deals
                            brokenDeals.push({
                                title: title,
                                url: url,
                                img: imgDeal,
                                upvote: upvote,
                                price: price,
                                username: username,
                                insertedTime: insertedTime
                            })
                        }
                    }

                    //log
                    console.log(
                        new Date().toLocaleString() +
                        " ----------- HOTUK : EXTRACTION DES ERREURS DE PRIX -------"
                    );
                    console.log(brokenDeals.length)
                    console.log(new Date().toLocaleString() +
                        "------------------------------------------------------------------------------------------------"
                    );
                    await browser.close();
                } catch (error) {
                    console.log("ICIIIII")
                    throw error;
                }
            }, 2000);
        });

    } catch (error) {
        console.log(error);
        throw error;
    }
})();

export default { brokenDeals };