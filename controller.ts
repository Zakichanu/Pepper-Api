import express from 'express';
import dealabsTopDeal from "./module/Dealabs/topDeals";
import dealabsNewHot from "./module/Dealabs/newHot";
import dealabsNewDeal from "./module/Dealabs/newDeals";
import delabsBrokenDeals from "./module/Dealabs/brokenDeal";
import hotukBrokenDeals from "./module/HotUk/brokenDeal"
import hotukNewDeals from "./module/HotUk/newDeals"
import hotukNewHot from "./module/HotUk/newHot"
import hotukTopDeal from "./module/HotUk/topDeals"
import mydealzTopDeal from "./module/MyDealz/topDeals"
import mydealzBrokenDeals from "./module/MyDealz/brokenDeal";
import mydealzNewDeals from "./module/MyDealz/newDeals"
import mydealzNewHot  from "./module/MyDealz/newHot"
import chollometroTopDeal from "./module/Chollometro/topDeals"
import chollometroNewDeals from "./module/Chollometro/newDeals"
import chollometroNewHot  from "./module/Chollometro/newHot"

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

myApp.get('/mydealz/topDeals', (req, res) => {
    if (mydealzTopDeal.topDeals.length > 0) {
        res.json({
            information: 'DEALS FOUND',
            data: mydealzTopDeal.topDeals
        })
    } else {
        res.json({ 
            information: 'NO DEAL FOUND',
            data: mydealzTopDeal.topDeals
        })
    }
})

myApp.get('/chollometro/topDeals', (req, res) => {
    if (chollometroTopDeal.topDeals.length > 0) {
        res.json({
            information: 'DEALS FOUND',
            data: chollometroTopDeal.topDeals
        })
    } else {
        res.json({ 
            information: 'NO DEAL FOUND',
            data: chollometroTopDeal.topDeals
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

myApp.get('/mydealz/newHots', (req, res) => {
    if (mydealzNewHot.hots.length > 0) {
        res.json({
            information: 'DEALS FOUND',
            data: mydealzNewHot.hots
        })
    } else {
        res.json({ 
            information: 'NO DEAL FOUND',
            data: mydealzNewHot.hots
        })
    }
})

myApp.get('/chollometro/newHots', (req, res) => {
    if (chollometroNewHot.hots.length > 0) {
        res.json({
            information: 'DEALS FOUND',
            data: chollometroNewHot.hots
        })
    } else {
        res.json({ 
            information: 'NO DEAL FOUND',
            data: chollometroNewHot.hots
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

myApp.get('/mydealz/newDeals', (req, res) => {
    if (mydealzNewDeals.newDeals.length > 0) {
        res.json({
            information: 'DEALS FOUND',
            data: mydealzNewDeals.newDeals
        })
    } else {
        res.json({ 
            information: 'NO DEAL FOUND',
            data: mydealzNewDeals.newDeals
        })
    }
})

myApp.get('/chollometro/newDeals', (req, res) => {
    if (chollometroNewDeals.newDeals.length > 0) {
        res.json({
            information: 'DEALS FOUND',
            data: chollometroNewDeals.newDeals
        })
    } else {
        res.json({ 
            information: 'NO DEAL FOUND',
            data: chollometroNewDeals.newDeals
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

myApp.get('/mydealz/brokenDeals', (req, res) => {
    if (mydealzBrokenDeals.brokenDeals.length > 0) {
        res.json({
            information: 'DEALS FOUND',
            data: mydealzBrokenDeals.brokenDeals
        })
    } else {
        res.json({ 
            information: 'NO DEAL FOUND',
            data: mydealzBrokenDeals.brokenDeals
        })
    }

})

const port = process.env.PORT || 3000;

myApp.listen(port, () => console.log("App listening on port " + port));