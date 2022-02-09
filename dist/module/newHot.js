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
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        node_cron_1.default.schedule('30 * * * * *', () => __awaiter(void 0, void 0, void 0, function* () {
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
                const listDeals = yield page.$$('div.threadGrid');
                console.log(new Date().toLocaleString() + ' ----------- EXTRACTION DES DEALS HOT -------');
                for (let index = 0; index < 5; index++) {
                    // Retrieving image of the deal
                    const imgTag = yield listDeals[index].$('img.thread-image');
                    const imgDeal = yield page.evaluate((img) => img.getAttribute("src"), imgTag);
                    console.log(imgDeal);
                }
                yield browser.close();
            }), 2000);
        }));
    }
    catch (error) {
        console.log(new Date().toLocaleString() + ' ' + error);
        throw error;
    }
}));
