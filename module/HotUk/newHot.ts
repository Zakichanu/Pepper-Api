import puppeteer from 'puppeteer';
import cron from 'node-cron';

let hots: {
    title: string; url: string; img: string; upvote: string; price: string; username: string;
    insertedTime: string, expiredTime: string;
}[] = [];

(async () => {
    try {
        cron.schedule('12 * * * * *', async () => {
            // Preparing puppeteer
            const browser = await puppeteer.launch({
                headless: true,
                args: ['--no-sandbox']
            });


            // Opening dealabs hot tab
            const page = await browser.newPage();
            const URL = "https://www.hotukdeals.com/hot";
            await page.goto(URL, { waitUntil: "networkidle0" });

            // Allow cookies
            await page.click(
                "button.flex--grow-1.flex--fromW3-grow-0.width--fromW3-ctrl-m.space--b-2.space--fromW3-b-0"
            );

            // Retrieving data
            setTimeout(async () => {
                try {
                    // Listing new hot deals
                    const listDeals = await page.$$("div.threadGrid");
                    console.log(
                        new Date().toLocaleString() +
                        " ----------- HOTUK : EXTRACTION DES DEALS HOT -------"
                    );

                    // initiating index for looping list of deals
                    var limit = 5;

                    hots.length = 0;

                    // Looping in deals
                    for (let index = 0; index < limit; index++) {
                        // Initializing variables
                        var upvote = "";
                        var imgDeal = "";
                        var insertedTime = "";
                        var expiredTime = "";
                        var url = "";
                        var title = "";
                        var price = "";
                        var username = "";

                        // Check if it is an ad
                        const pub = await listDeals[index].$("button.cept-newsletter-widget-close")

                        if(pub){
                            limit++;
                            index++;
                        }


                        // Creating boolean for expired or not
                        var isExpired = false;

                        // Retrieving upvote
                        const upvoteTag = await listDeals[index].$(
                            "span.cept-vote-temp.vote-temp.vote-temp--hot"
                        );

                        // That's the only tag where we know the deal is expired
                        if (upvoteTag !== null) {
                            upvote = await page.evaluate((tag) => tag.textContent, upvoteTag);
                            upvote = upvote.replace(/\s/g, "");
                        } else {
                            limit++;
                            isExpired = true;
                        }

                        //Condition if isExpired
                        if (!isExpired) {
                            // Retrieving image URL
                            const imgTag = await listDeals[index].$("img.thread-image");
                            imgDeal = await page.evaluate(
                                (img) => img.getAttribute("src"),
                                imgTag
                            );

                            // Retrieving inserted time
                            const flameIconTagParent = await listDeals[index].$(
                                "span.metaRibbon.cept-meta-ribbon.cept-meta-ribbon-hot"
                            );

                            if(flameIconTagParent){
                                const insertedTimeTag = await flameIconTagParent.$('span')

                                if(insertedTimeTag){
                                    insertedTime = await page.evaluate(
                                        (tag) => tag.textContent,
                                        insertedTimeTag
                                    );
                                }
                            }
                            

                            // Retrieving expired time
                            const expiresIconTag = await listDeals[index].$("span.metaRibbon.cept-meta-ribbon.cept-meta-ribbon-expires")
                            if(expiresIconTag){
                                const expriesSpanTag = await expiresIconTag.$("span");

                                if(expriesSpanTag){
                                    expiredTime = await page.evaluate(
                                        (tag) => tag.textContent,
                                        expriesSpanTag
                                    );
                                }
                            }
                            
                            // Retrieving URL and Title
                            const titleTag = await listDeals[index].$(
                                "a.cept-tt.thread-link.linkPlain.thread-title--list"
                            );
                            title = await page.evaluate((tag) => tag.textContent, titleTag);
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
                            hots.push({
                                title: title,
                                url: url,
                                img: imgDeal,
                                upvote: upvote,
                                price: price,
                                username: username,
                                insertedTime: insertedTime,
                                expiredTime: expiredTime
                            })
                        }
                        
                    }

                    //log
                    console.log(hots.length)

                
                } catch (error) {
                    console.log(error);
                    throw error;
                }finally{
                    await browser.close();
                }
            }, 2000);
        })
    } catch (error) {
        console.log(new Date().toLocaleString() + ' ' + error);
        throw error;
    }

})();

export default { hots };