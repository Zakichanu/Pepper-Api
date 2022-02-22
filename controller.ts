import express from 'express';
import dealabsTopDeal from "./module/Dealabs/topDeals";
import dealabsNewHot from "./module/Dealabs/newHot";
import dealabsNewDeal from "./module/Dealabs/newDeals";
import delabsBrokenDeals from "./module/Dealabs/brokenDeal";
import hotukBrokenDeals from "./module/HotUk/brokenDeal"
import hotukNewDeals from "./module/HotUk/newDeals"
import hotukNewHot from "./module/HotUk/newHot"
import hotukTopDeal from "./module/HotUk/topDeals"

const myApp = express();

myApp.get('/dealabs/topDeals', (req, res) => {
    res.json(dealabsTopDeal.topDeals);
})

myApp.get('/hotuk/topDeals', (req, res) => {
    res.json(hotukTopDeal.topDeals);
})


myApp.get('/dealabs/newHots', (req, res) => {
    res.json(dealabsNewHot.hots)
})

myApp.get('/hotuk/newHots', (req, res) => {
    res.json(hotukNewHot.hots)
})

myApp.get('/dealabs/newDeals', (req, res) => {
    res.json(dealabsNewDeal.newDeals)
})

myApp.get('/hotuk/newDeals', (req, res) => {
    res.json(hotukNewDeals.newDeals)
})

myApp.get('/dealabs/brokenDeals', (req, res) => {
    if(delabsBrokenDeals.brokenDeals.length > 0) {
        res.json(delabsBrokenDeals.brokenDeals)
    }else{
        res.json({ information: "ALL EXPIRED" })
    }
    
})

myApp.get('/hotuk/brokenDeals', (req, res) => {
    if(hotukBrokenDeals.brokenDeals.length > 0) {
        res.json(hotukBrokenDeals.brokenDeals)
    }else{
        res.json({ information: "ALL EXPIRED" })
    }
    
})

const port = process.env.PORT || 3000;

myApp.listen(port, () => console.log("App listening on port " + port));