# Pepper Api

Unofficial API for the website [Pepper](https://www.pepper.com/) made with ExpressJS & TypeScript. 

## Table of contents

- [Pepper Api](#pepper-api)
  - [Table of contents](#table-of-contents)
  - [Features](#features)
    - [Dealabs](#dealabs)
    - [Hotuk](#hotuk)
  - [Installation](#installation)
  - [Limit](#limit)


## Features

### [Dealabs](https://www.dealabs.com/)

- Get the 5 top deals of the day (updated every hour) : ```https://pepper.api.zakichanu.com/dealabs/topDeals``` **OR** ```https://api.dealabs.zakichanu.com/topDeals```
- Get 5 newest hot deals **100+ Upvotes** (updated every minute) : ```https://pepper.api.zakichanu.com/dealabs/newHots``` **OR**```https://api.dealabs.zakichanu.com/newHots```
- Get 5 newest deals (updated every minute) : ```https://pepper.api.zakichanu.com/dealabs/newDeals``` **OR** ```https://api.dealabs.zakichanu.com/newDeals```
- Get ALL [broken deals](https://www.dealabs.com/groupe/erreur-de-prix) (updated every minute) : ```https://pepper.api.zakichanu.com/dealabs/brokenDeals``` **OR**```https://api.dealabs.zakichanu.com/brokenDeals```

### [Hotuk](https://www.hotukdeals.com/)

- Get the 5 top deals of the day (updated every hour) : ```https://pepper.api.zakichanu.com/hotuk/topDeals``` 
- Get 5 newest hot deals **100+ Upvotes** (updated every minute) : ```https://pepper.api.zakichanu.com/hotuk/newHots```
- Get 5 newest deals (updated every minute) : ```https://pepper.api.zakichanu.com/hotuk/newDeals```
- Get ALL [broken deals](https://www.hotukdeals.com/tag/price-glitch) (updated every minute) : ```https://pepper.api.zakichanu.com/hotuk/brokenDeals```



## Installation

- Fork the project
- Then you need to setup a typescript environment : 
  * ```npm install -g typescript```
  * ```npm install -g ts-node```
- Generate node_modules package : ```npm install```
- Test your project by running the script : ```npm run dev```
- And your app might run in this link : ```http://localhost:3000/```
- Test it out with existant endpoints


## Limit

You can call 10 requests per minute, wich means you can run 1 request each 6 seconds, I've done this on purpose just to make sure nobody make my server crash 🤣

> Made by Zakichanu
