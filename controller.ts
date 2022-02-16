import express from 'express';
import topDeal from "./module/Dealabs/topDeals";
import newHot from "./module/Dealabs/newHot";
import newDeal from "./module/Dealabs/newDeals";
import brokenDeals from "./module/Dealabs/brokenDeal";

const myApp = express();

myApp.get('/dealabs/topDeals', (req, res) => {
    res.json(topDeal.topDeals);
})

myApp.get('/dealabs/newHots', (req, res) => {
    res.json(newHot.hots)
})

myApp.get('/dealabs/newDeals', (req, res) => {
    res.json(newDeal.newDeals)
})

myApp.get('/dealabs/brokenDeals', (req, res) => {
    if(brokenDeals.brokenDeals.length > 0) {
        res.json(brokenDeals.brokenDeals)
    }else{
        res.json({ information: "ALL EXPIRED" })
    }
    
})

const port = process.env.PORT || 3000;

myApp.listen(port, () => console.log("App listening on port " + port));