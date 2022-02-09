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
// Array stockant les bons plans
let topDeals = [];
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        node_cron_1.default.schedule('30 * * * * *', () => __awaiter(void 0, void 0, void 0, function* () {
            // Préparation de puppeteer
            const browser = yield puppeteer_1.default.launch({
                headless: true,
                args: ['--no-sandbox']
            });
            // Lancement de dealabs
            const page = yield browser.newPage();
            const URL = "https://www.dealabs.com";
            yield page.goto(URL, { waitUntil: "networkidle0" });
            // Clique sur le message d'autorisation des cookies
            yield page.click("button.flex--grow-1.flex--fromW3-grow-0.width--fromW3-ctrl-m.space--b-2.space--fromW3-b-0");
            // Récupération de nos données pour notre bot
            setTimeout(() => __awaiter(void 0, void 0, void 0, function* () {
                // Récupère les div en carousel
                const options = yield page.$$("div.flex.flex--grow-1");
                // Le carousel qui nous intéresse
                const deals = options[1];
                // Liste des attributs qui nous intéresse
                const titles = yield deals.$$("a[title]");
                // Lien vers le deals
                const hrefs = yield deals.$$("a[href]");
                for (let index = 0; index < 5; index++) {
                    // Récupération du string des titres des deals
                    const titleDealString = yield page.evaluate((title) => title.getAttribute("title"), titles[index]);
                    // Récupération du sting des liens vers les deals
                    const hrefDealString = yield page.evaluate((href) => href.getAttribute("href"), hrefs[index]);
                    // Image du deal
                    const imgs = yield titles[index].$("img[src]");
                    const imgDealURL = yield page.evaluate((img) => img.getAttribute("src"), imgs);
                    // Valeur de l'upvote
                    const upvoteTag = yield titles[index].$('strong');
                    const upvote = yield page.evaluate(tag => tag.textContent, upvoteTag);
                    // Valeur du prix ou de la réduction
                    const priceTag = yield titles[index].$('span.text--overlay');
                    let price = '';
                    if (priceTag != null) {
                        price = yield page.evaluate(tag => tag.textContent, priceTag);
                    }
                    else {
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
                console.log(new Date().toLocaleString() + ' ----------- EXTRACTION DES DEALS -------');
                console.log(topDeals);
                yield browser.close();
            }), 2000);
        }));
    }
    catch (error) {
        (new Date().toLocaleString() + ' ' + error);
        throw error;
    }
}))();
exports.default = { topDeals };
