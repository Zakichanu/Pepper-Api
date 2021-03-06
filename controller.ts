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
import nlPepperTopDeal from "./module/NLPepper/topDeals"
import nlPepperNewDeals from "./module/NLPepper/newDeals"
import nlPepperNewHot  from "./module/NLPepper/newHot"

const myApp = express();
process.setMaxListeners(100);

myApp.get('/dealabs/topDeals', (req, res) => {
    if (dealabsTopDeal.topDeals.length > 0) {
        res.json({
            information: 'DEALS FOUND',
            insertionDate:  dealabsTopDeal.getreqDate(),
            data: dealabsTopDeal.topDeals
        })
    } else {
        res.json({ 
            information: 'NO DEAL FOUND',
            insertionDate:  dealabsTopDeal.getreqDate(),
            data: dealabsTopDeal.topDeals
        })
    }
})

myApp.get('/hotuk/topDeals', (req, res) => {
    if (hotukTopDeal.topDeals.length > 0) {
        res.json({
            information: 'DEALS FOUND',
            insertionDate:  hotukTopDeal.getreqDate(),
            data: hotukTopDeal.topDeals
        })
    } else {
        res.json({ 
            information: 'NO DEAL FOUND',
            insertionDate:  hotukTopDeal.getreqDate(),
            data: hotukTopDeal.topDeals
        })
    }
})

myApp.get('/mydealz/topDeals', (req, res) => {
    if (mydealzTopDeal.topDeals.length > 0) {
        res.json({
            information: 'DEALS FOUND',
            insertionDate:  mydealzTopDeal.getreqDate(),
            data: mydealzTopDeal.topDeals
        })
    } else {
        res.json({ 
            information: 'NO DEAL FOUND',
            insertionDate:  mydealzTopDeal.getreqDate(),
            data: mydealzTopDeal.topDeals
        })
    }
})

myApp.get('/chollometro/topDeals', (req, res) => {
    if (chollometroTopDeal.topDeals.length > 0) {
        res.json({
            information: 'DEALS FOUND',
            insertionDate:  chollometroTopDeal.getreqDate(),
            data: chollometroTopDeal.topDeals
        })
    } else {
        res.json({ 
            information: 'NO DEAL FOUND',
            insertionDate:  chollometroTopDeal.getreqDate(),
            data: chollometroTopDeal.topDeals
        })
    }
})

myApp.get('/nl-pepper/topDeals', (req, res) => {
    if (nlPepperTopDeal.topDeals.length > 0) {
        res.json({
            information: 'DEALS FOUND',
            insertionDate:  nlPepperTopDeal.getreqDate(),
            data: nlPepperTopDeal.topDeals
        })
    } else {
        res.json({ 
            information: 'NO DEAL FOUND',
            insertionDate:  nlPepperTopDeal.getreqDate(),
            data: nlPepperTopDeal.topDeals
        })
    }
})



myApp.get('/dealabs/newHots', (req, res) => {
    if (dealabsNewHot.hots.length > 0) {
        res.json({
            information: 'DEALS FOUND',
            insertionDate:  dealabsNewHot.getreqDate(),
            data: dealabsNewHot.hots
        })
    } else {
        res.json({ 
            information: 'NO DEAL FOUND',
            insertionDate:  dealabsNewHot.getreqDate(),
            data: dealabsNewHot.hots
        })
    }
})

myApp.get('/hotuk/newHots', (req, res) => {
    if (hotukNewHot.hots.length > 0) {
        res.json({
            information: 'DEALS FOUND',
            insertionDate:  hotukNewHot.getreqDate(),
            data: hotukNewHot.hots
        })
    } else {
        res.json({ 
            information: 'NO DEAL FOUND',
            insertionDate:  hotukNewHot.getreqDate(),
            data: hotukNewHot.hots
        })
    }
})

myApp.get('/mydealz/newHots', (req, res) => {
    if (mydealzNewHot.hots.length > 0) {
        res.json({
            information: 'DEALS FOUND',
            insertionDate:  mydealzNewHot.getreqDate(),
            data: mydealzNewHot.hots
        })
    } else {
        res.json({ 
            information: 'NO DEAL FOUND',
            insertionDate:  mydealzNewHot.getreqDate(),
            data: mydealzNewHot.hots
        })
    }
})

myApp.get('/chollometro/newHots', (req, res) => {
    if (chollometroNewHot.hots.length > 0) {
        res.json({
            information: 'DEALS FOUND',
            insertionDate:  chollometroNewHot.getreqDate(),
            data: chollometroNewHot.hots
        })
    } else {
        res.json({ 
            information: 'NO DEAL FOUND',
            insertionDate:  chollometroNewHot.getreqDate(),
            data: chollometroNewHot.hots
        })
    }
})

myApp.get('/nl-pepper/newHots', (req, res) => {
    if (nlPepperNewHot.hots.length > 0) {
        res.json({
            information: 'DEALS FOUND',
            insertionDate:  nlPepperNewHot.getreqDate(),
            data: nlPepperNewHot.hots
        })
    } else {
        res.json({ 
            information: 'NO DEAL FOUND',
            insertionDate:  nlPepperNewHot.getreqDate(),
            data: nlPepperNewHot.hots
        })
    }
})

myApp.get('/dealabs/newDeals', (req, res) => {
    if (dealabsNewDeal.newDeals.length > 0) {
        res.json({
            information: 'DEALS FOUND',
            insertionDate:  dealabsNewDeal.getreqDate(),
            data: dealabsNewDeal.newDeals
        })
    } else {
        res.json({ 
            information: 'NO DEAL FOUND',
            insertionDate:  dealabsNewDeal.getreqDate(),
            data: dealabsNewDeal.newDeals
        })
    }
})

myApp.get('/hotuk/newDeals', (req, res) => {
    if (hotukNewDeals.newDeals.length > 0) {
        res.json({
            information: 'DEALS FOUND',
            insertionDate:  hotukNewDeals.getreqDate(),
            data: hotukNewDeals.newDeals
        })
    } else {
        res.json({ 
            information: 'NO DEAL FOUND',
            insertionDate:  hotukNewDeals.getreqDate(),
            data: hotukNewDeals.newDeals
        })
    }
})

myApp.get('/mydealz/newDeals', (req, res) => {
    if (mydealzNewDeals.newDeals.length > 0) {
        res.json({
            information: 'DEALS FOUND',
            insertionDate:  mydealzNewDeals.getreqDate(),
            data: mydealzNewDeals.newDeals
        })
    } else {
        res.json({ 
            information: 'NO DEAL FOUND',
            insertionDate:  mydealzNewDeals.getreqDate(),
            data: mydealzNewDeals.newDeals
        })
    }
})

myApp.get('/chollometro/newDeals', (req, res) => {
    if (chollometroNewDeals.newDeals.length > 0) {
        res.json({
            information: 'DEALS FOUND',
            insertionDate:  chollometroNewDeals.getreqDate(),
            data: chollometroNewDeals.newDeals
        })
    } else {
        res.json({ 
            information: 'NO DEAL FOUND',
            insertionDate:  chollometroNewDeals.getreqDate(),
            data: chollometroNewDeals.newDeals
        })
    }
})

myApp.get('/nl-pepper/newDeals', (req, res) => {
    if (nlPepperNewDeals.newDeals.length > 0) {
        res.json({
            information: 'DEALS FOUND',
            insertionDate:  nlPepperNewDeals.getreqDate(),
            data: nlPepperNewDeals.newDeals
        })
    } else {
        res.json({ 
            information: 'NO DEAL FOUND',
            insertionDate:  nlPepperNewDeals.getreqDate(),
            data: nlPepperNewDeals.newDeals
        })
    }
})

myApp.get('/dealabs/brokenDeals', (req, res) => {
    if (delabsBrokenDeals.brokenDeals.length > 0) {
        res.json({
            information: 'DEALS FOUND',
            insertionDate:  delabsBrokenDeals.getreqDate(),
            data: delabsBrokenDeals.brokenDeals
        })
    } else {
        res.json({ 
            information: 'NO DEAL FOUND',
            insertionDate:  delabsBrokenDeals.getreqDate(),
            data: delabsBrokenDeals.brokenDeals
        })
    }

})

myApp.get('/hotuk/brokenDeals', (req, res) => {
    if (hotukBrokenDeals.brokenDeals.length > 0) {
        res.json({
            information: 'DEALS FOUND',
            insertionDate:  hotukBrokenDeals.getreqDate(),
            data: hotukBrokenDeals.brokenDeals
        })
    } else {
        res.json({ 
            information: 'NO DEAL FOUND',
            insertionDate:  hotukBrokenDeals.getreqDate(),
            data: hotukBrokenDeals.brokenDeals
        })
    }

})

myApp.get('/mydealz/brokenDeals', (req, res) => {
    if (mydealzBrokenDeals.brokenDeals.length > 0) {
        res.json({
            information: 'DEALS FOUND',
            insertionDate:  mydealzBrokenDeals.getreqDate(),
            data: mydealzBrokenDeals.brokenDeals
        })
    } else {
        res.json({ 
            information: 'NO DEAL FOUND',
            insertionDate:  mydealzBrokenDeals.getreqDate(),
            data: mydealzBrokenDeals.brokenDeals
        })
    }

})

const port = process.env.PORT || 3000;

myApp.listen(port, () => console.log(new Date().toLocaleString() + " App listening on port " + port));