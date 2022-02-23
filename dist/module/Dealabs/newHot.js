"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const puppeteer_1 = __importDefault(require("puppeteer"));
const node_cron_1 = __importDefault(require("node-cron"));
let hots = [];
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        node_cron_1.default.schedule('4 * * * * *', () => __awaiter(void 0, void 0, void 0, function* () {
            // Preparing puppeteer
            const browser = yield puppeteer_1.default.launch({
                headless: true,
                args: ['--no-sandbox']
            });
            // Opening dealabs hot tab
            const page = yield browser.newPage();
            const URL = "https://www.dealabs.com/hot";
            yield page.goto(URL, { waitUntil: "networkidle0" });
            // Allow cookies
            yield page.click("button.flex--grow-1.flex--fromW3-grow-0.width--fromW3-ctrl-m.space--b-2.space--fromW3-b-0");
            // Retrieving data
            setTimeout(() => __awaiter(void 0, void 0, void 0, function* () {
                try {
                    // Listing new hot deals
                    const listDeals = yield page.$$("div.threadGrid");
                    console.log(new Date().toLocaleString() +
                        " ----------- DEALABS : EXTRACTION DES DEALS HOT -------");
                    // initiating index for looping list of deals
                    var limit = 5;
                    hots.length = 0;
                    // Looping in deals
                    for (let index = 0; index < limit; index++) {
                        // Initializing variables
                        var upvote = "";
                        var imgDeal = "";
                        var insertedTime = "";
                        var url = "";
                        var title = "";
                        var price = "";
                        var username = "";
                        // Check if it is an ad
                        const pub = yield listDeals[index].$("button.cept-newsletter-widget-close");
                        if (pub) {
                            limit++;
                            index++;
                        }
                        // Creating boolean for expired or not
                        var isExpired = false;
                        // Retrieving upvote
                        const upvoteTag = yield listDeals[index].$("span.cept-vote-temp.vote-temp.vote-temp--hot");
                        // That's the only tag where we know the deal is expired
                        if (upvoteTag !== null) {
                            upvote = yield page.evaluate((tag) => tag.textContent, upvoteTag);
                            upvote = upvote.replace(/\s/g, "");
                        }
                        else {
                            limit++;
                            isExpired = true;
                        }
                        //Condition if isExpired
                        if (!isExpired) {
                            // Retrieving image URL
                            const imgTag = yield listDeals[index].$("img.thread-image");
                            imgDeal = yield page.evaluate((img) => img.getAttribute("src"), imgTag);
                            // Retrieving inserted time
                            const flameIconTag = yield listDeals[index].$("svg.icon.icon--flame.text--color-greyShade.space--mr-1");
                            insertedTime = yield page.evaluate((tag) => tag.outerText, flameIconTag);
                            // Retrieving URL and Title
                            const titleTag = yield listDeals[index].$("a.cept-tt.thread-link.linkPlain.thread-title--list");
                            title = yield page.evaluate((tag) => tag.textContent, titleTag);
                            url = yield page.evaluate((url) => url.getAttribute("href"), titleTag);
                            // Retrieving price
                            const priceTag = yield listDeals[index].$("span.thread-price.text--b.cept-tp.size--all-l.size--fromW3-xl");
                            if (priceTag) {
                                price = yield page.evaluate((tag) => tag.textContent, priceTag);
                            }
                            else {
                                price = 'FREE';
                            }
                            // Retrieving author username
                            const userTag = yield listDeals[index].$('span.thread-username');
                            username = yield page.evaluate((tag) => tag.textContent, userTag);
                            username = username.replace(/\s/g, "");
                            //Inserting to array of deals
                            hots.push({
                                title: title,
                                url: url,
                                img: imgDeal,
                                upvote: upvote,
                                price: price,
                                username: username,
                                insertedTime: insertedTime
                            });
                        }
                    }
                    //log
                    console.log(hots.length);
                    console.log(new Date().toLocaleString() +
                        "------------------------------------------------------------------------------------------------");
                    yield browser.close();
                }
                catch (error) {
                    console.log(error);
                    throw error;
                }
            }), 2000);
        }));
    }
    catch (error) {
        console.log(new Date().toLocaleString() + ' ' + error);
        throw error;
    }
}))();
exports.default = { hots };
