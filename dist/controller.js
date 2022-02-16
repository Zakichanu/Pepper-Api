"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const topDeals_1 = __importDefault(require("./module/Dealabs/topDeals"));
const newHot_1 = __importDefault(require("./module/Dealabs/newHot"));
const newDeals_1 = __importDefault(require("./module/Dealabs/newDeals"));
const brokenDeal_1 = __importDefault(require("./module/Dealabs/brokenDeal"));
const myApp = (0, express_1.default)();
myApp.get('/dealabs/topDeals', (req, res) => {
    res.json(topDeals_1.default.topDeals);
});
myApp.get('/dealabs/newHots', (req, res) => {
    res.json(newHot_1.default.hots);
});
myApp.get('/dealabs/newDeals', (req, res) => {
    res.json(newDeals_1.default.newDeals);
});
myApp.get('/dealabs/brokenDeals', (req, res) => {
    if (brokenDeal_1.default.brokenDeals.length > 0) {
        res.json(brokenDeal_1.default.brokenDeals);
    }
    else {
        res.json({ information: "ALL EXPIRED" });
    }
});
const port = process.env.PORT || 3000;
myApp.listen(port, () => console.log("App listening on port " + port));
