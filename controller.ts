import express from 'express';
import topDeal from "./module/topDeals";
import newHot from "./module/newHot";
import newDeal from "./module/newDeals";

const myApp = express();

myApp.get('/topDeals', (req, res) => {
    res.send(topDeal.topDeals);
})

myApp.get('/newHots', (req, res) => {
    res.send(newHot.hots)
})

myApp.get('/newDeals', (req, res) => {
    res.send(newDeal.newDeals)
})

const port = process.env.PORT || 3000;

myApp.listen(port, () => console.log("App listening on port " + port));