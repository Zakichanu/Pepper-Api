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
let brokenDeals = [];
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        node_cron_1.default.schedule('8 * * * * *', () => __awaiter(void 0, void 0, void 0, function* () {
            // Preparing puppeteer
            const browser = yield puppeteer_1.default.launch({
                headless: true,
                args: ['--no-sandbox']
            });
            // Opening dealabs hot tab
            const page = yield browser.newPage();
            const URL = "https://www.hotukdeals.com/tag/price-glitch";
            yield page.goto(URL, { waitUntil: "networkidle0" });
            // Allow cookies
            yield page.click("button.flex--grow-1.flex--fromW3-grow-0.width--fromW3-ctrl-m.space--b-2.space--fromW3-b-0");
            setTimeout(() => __awaiter(void 0, void 0, void 0, function* () {
                try {
                    // Listing new hot deals
                    const listDeals = yield page.$$("div.threadGrid");
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
                        const pub = yield element.$("button.cept-newsletter-widget-close");
                        if (pub) {
                            limit++;
                            index++;
                            element = listDeals[index];
                        }
                        // Variable if deal is expired
                        const expiredSpan = yield element.$('span.size--all-s.text--color-grey.space--l-1.space--r-2.cept-show-expired-threads.hide--toW3');
                        if (!expiredSpan) {
                            // Retrieving upvote
                            const upvoteTag = yield element.$("span.cept-vote-temp.vote-temp");
                            // Retrieving image URL
                            const imgTag = yield element.$("img.thread-image");
                            imgDeal = yield page.evaluate((img) => img.getAttribute("src"), imgTag);
                            // Retrieving inserted time
                            const insertedTimeTag = yield element.$("span.metaRibbon.cept-meta-ribbon");
                            if (insertedTimeTag) {
                                insertedTime = yield page.evaluate((tag) => tag.outerText, insertedTimeTag);
                            }
                            else {
                                insertedTime = '';
                            }
                            // Retrieving URL and Title
                            const titleTag = yield listDeals[index].$("a.cept-tt.thread-link.linkPlain.thread-title--list");
                            title = yield page.evaluate((tag) => tag.outerText, titleTag);
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
                            brokenDeals.push({
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
                    console.log(new Date().toLocaleString() +
                        " ----------- HOTUK : EXTRACTION DES ERREURS DE PRIX -------");
                    console.log(brokenDeals.length);
                    console.log(new Date().toLocaleString() +
                        "------------------------------------------------------------------------------------------------");
                    yield browser.close();
                }
                catch (error) {
                    console.log("ICIIIII");
                    throw error;
                }
            }), 2000);
        }));
    }
    catch (error) {
        console.log(error);
        throw error;
    }
}))();
exports.default = { brokenDeals };
