"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const topDeals_1 = __importDefault(require("./module/topDeals"));
const newHot_1 = __importDefault(require("./module/newHot"));
const newDeals_1 = __importDefault(require("./module/newDeals"));
const myApp = (0, express_1.default)();
myApp.get('/topDeals', (req, res) => {
    res.send(topDeals_1.default.topDeals);
});
myApp.get('/newHots', (req, res) => {
    res.send(newHot_1.default.hots);
});
myApp.get('/newDeals', (req, res) => {
    res.send(newDeals_1.default.newDeals);
});
const port = process.env.PORT || 3000;
myApp.listen(port, () => console.log("App listening on port " + port));
