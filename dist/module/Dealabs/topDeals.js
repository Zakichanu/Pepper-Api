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
// Array that stocks hottest deals
let topDeals = [];
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        node_cron_1.default.schedule('0 * * * *', () => __awaiter(void 0, void 0, void 0, function* () {
            // Preparing puppeteer
            const browser = yield puppeteer_1.default.launch({
                headless: true,
                args: ['--no-sandbox']
            });
            // Launching dealabs home page
            const page = yield browser.newPage();
            const URL = "https://www.dealabs.com";
            yield page.goto(URL, { waitUntil: "networkidle0" });
            // Allow cookies
            yield page.click("button.flex--grow-1.flex--fromW3-grow-0.width--fromW3-ctrl-m.space--b-2.space--fromW3-b-0");
            // Retrieving data
            setTimeout(() => __awaiter(void 0, void 0, void 0, function* () {
                // Get carousel div
                const options = yield page.$$("div.flex.flex--grow-1");
                // Retrieve the one which interest us
                const deals = options[1];
                // Title of deals
                const titles = yield deals.$$("a[title]");
                // Link of deals
                const hrefs = yield deals.$$("a[href]");
                topDeals.length = 0;
                for (let index = 0; index < 5; index++) {
                    // Title to string
                    const titleDealString = yield page.evaluate((title) => title.getAttribute("title"), titles[index]);
                    // Link into string
                    const hrefDealString = yield page.evaluate((href) => href.getAttribute("href"), hrefs[index]);
                    // Image of deal
                    const imgs = yield titles[index].$("img[src]");
                    const imgDealURL = yield page.evaluate((img) => img.getAttribute("src"), imgs);
                    // Value
                    const upvoteTag = yield titles[index].$('strong');
                    const upvote = yield page.evaluate(tag => tag.textContent, upvoteTag);
                    // Price or reduction
                    const priceTag = yield titles[index].$('span.text--overlay');
                    let price = '';
                    if (priceTag != null) {
                        price = yield page.evaluate(tag => tag.textContent, priceTag);
                    }
                    else {
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
                console.log(new Date().toLocaleString() + ' ----------- EXTRACTION DES DEALS -------');
                console.log(topDeals);
                yield browser.close();
            }), 2000);
        }));
    }
    catch (error) {
        console.log(new Date().toLocaleString() + ' ' + error);
        throw error;
    }
}))();
exports.default = { topDeals };
