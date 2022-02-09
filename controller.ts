import express from 'express';
import topDeal from "./module/topDeals";

const myApp = express();

myApp.get('/TopDeals', (req, res) => {
    res.send(topDeal.topDeals);
})

const port = process.env.PORT || 3000;

myApp.listen(port, () => console.log("App listening on port " + port));