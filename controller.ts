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
    if (dealabsTopDeal.topDeals.length > 0) {
        res.json({
            information: 'DEALS FOUND',
            data: dealabsTopDeal.topDeals
        })
    } else {
        res.json({ 
            information: 'NO DEAL FOUND',
            data: dealabsTopDeal.topDeals
        })
    }
})

myApp.get('/hotuk/topDeals', (req, res) => {
    if (hotukTopDeal.topDeals.length > 0) {
        res.json({
            information: 'DEALS FOUND',
            data: hotukTopDeal.topDeals
        })
    } else {
        res.json({ 
            information: 'NO DEAL FOUND',
            data: hotukTopDeal.topDeals
        })
    }
})


myApp.get('/dealabs/newHots', (req, res) => {
    if (dealabsNewHot.hots.length > 0) {
        res.json({
            information: 'DEALS FOUND',
            data: dealabsNewHot.hots
        })
    } else {
        res.json({ 
            information: 'NO DEAL FOUND',
            data: dealabsNewHot.hots
        })
    }
})

myApp.get('/hotuk/newHots', (req, res) => {
    if (hotukNewHot.hots.length > 0) {
        res.json({
            information: 'DEALS FOUND',
            data: hotukNewHot.hots
        })
    } else {
        res.json({ 
            information: 'NO DEAL FOUND',
            data: hotukNewHot.hots
        })
    }
})

myApp.get('/dealabs/newDeals', (req, res) => {
    if (dealabsNewDeal.newDeals.length > 0) {
        res.json({
            information: 'DEALS FOUND',
            data: dealabsNewDeal.newDeals
        })
    } else {
        res.json({ 
            information: 'NO DEAL FOUND',
            data: dealabsNewDeal.newDeals
        })
    }
})

myApp.get('/hotuk/newDeals', (req, res) => {
    if (hotukNewDeals.newDeals.length > 0) {
        res.json({
            information: 'DEALS FOUND',
            data: hotukNewDeals.newDeals
        })
    } else {
        res.json({ 
            information: 'NO DEAL FOUND',
            data: hotukNewDeals.newDeals
        })
    }
})

myApp.get('/dealabs/brokenDeals', (req, res) => {
    if (delabsBrokenDeals.brokenDeals.length > 0) {
        res.json({
            information: 'DEALS FOUND',
            data: delabsBrokenDeals.brokenDeals
        })
    } else {
        res.json({ 
            information: 'NO DEAL FOUND',
            data: delabsBrokenDeals.brokenDeals
        })
    }

})

myApp.get('/hotuk/brokenDeals', (req, res) => {
    if (hotukBrokenDeals.brokenDeals.length > 0) {
        res.json({
            information: 'DEALS FOUND',
            data: hotukBrokenDeals.brokenDeals
        })
    } else {
        res.json({ 
            information: 'NO DEAL FOUND',
            data: hotukBrokenDeals.brokenDeals
        })
    }

})

const port = process.env.PORT || 3000;

myApp.listen(port, () => console.log("App listening on port " + port));