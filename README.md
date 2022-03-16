<img src="logo.png" align="right" />

# Pepper Api
Unofficial API for the website [Pepper](https://www.pepper.com/) made with ExpressJS & TypeScript.

Find full endpoints in my [Postman page](https://documenter.getpostman.com/view/15051784/UVsHUnki) 👩🏽‍🚀

## Table of contents

- [Pepper Api](#pepper-api)
  - [Table of contents](#table-of-contents)
  - [Features](#features)
    - [Dealabs 🇫🇷](#dealabs-)
    - [MyDealz 🇩🇪](#mydealz-)
    - [Hotuk 🇬🇧](#hotuk-)
    - [Chollometro 🇪🇸](#chollometro-)
  - [Examples](#examples)
    - [NodeJs - Requests](#nodejs---requests)
    - [Java - Unirest](#java---unirest)
    - [C# - RestSharp](#c---restsharp)
    - [Dart - http](#dart---http)
    - [Python - requests](#python---requests)
  - [Installation](#installation)
  - [Projects](#projects)
    - [Haku Discord bot](#haku-discord-bot)
  - [Limit](#limit)


## Features

### [Dealabs 🇫🇷](https://www.dealabs.com/)

- Get the 5 top deals of the day (updated every hour) : ```https://pepper.api.zakichanu.com/dealabs/topDeals``` **OR** ```https://api.dealabs.zakichanu.com/topDeals```
- Get 5 newest hot deals **100+ Upvotes** (updated every minute) : ```https://pepper.api.zakichanu.com/dealabs/newHots``` **OR**```https://api.dealabs.zakichanu.com/newHots```
- Get 5 newest deals (updated every minute) : ```https://pepper.api.zakichanu.com/dealabs/newDeals``` **OR** ```https://api.dealabs.zakichanu.com/newDeals```
- Get ALL [broken deals](https://www.dealabs.com/groupe/erreur-de-prix) (updated every minute) : ```https://pepper.api.zakichanu.com/dealabs/brokenDeals``` **OR**```https://api.dealabs.zakichanu.com/brokenDeals```

### [MyDealz 🇩🇪](https://www.mydealz.de/)

- Get the 5 top deals of the day (updated every hour) : ```https://pepper.api.zakichanu.com/mydealz/topDeals``` 
- Get 5 newest hot deals **100+ Upvotes** (updated every minute) : ```https://pepper.api.zakichanu.com/mydealz/newHots```
- Get 5 newest deals (updated every minute) : ```https://pepper.api.zakichanu.com/mydealz/newDeals```
- Get ALL [broken deals](https://www.mydealz.de/gruppe/preisfehler) (updated every minute) : ```https://pepper.api.zakichanu.com/mydealz/brokenDeals```

### [Hotuk 🇬🇧](https://www.hotukdeals.com/)

- Get the 5 top deals of the day (updated every hour) : ```https://pepper.api.zakichanu.com/hotuk/topDeals``` 
- Get 5 newest hot deals **100+ Upvotes** (updated every minute) : ```https://pepper.api.zakichanu.com/hotuk/newHots```
- Get 5 newest deals (updated every minute) : ```https://pepper.api.zakichanu.com/hotuk/newDeals```
- Get ALL [broken deals](https://www.hotukdeals.com/tag/price-glitch) (updated every minute) : ```https://pepper.api.zakichanu.com/hotuk/brokenDeals```

### [Chollometro 🇪🇸](https://www.chollometro.com/)

- Get the 5 top deals of the day (updated every hour) : ```https://pepper.api.zakichanu.com/chollometro/topDeals``` 
- Get 5 newest hot deals **100+ Upvotes** (updated every minute) : ```https://pepper.api.zakichanu.com/chollometro/newHots```
- Get 5 newest deals (updated every minute) : ```https://pepper.api.zakichanu.com/chollometro/newDeals```

## Examples

Here some examples of how you can call the API with different languanges
### NodeJs - Requests

```js
var request = require('request');
var options = {
  'method': 'GET',
  'url': 'https://pepper.api.zakichanu.com/dealabs/topDeals',
  'headers': {
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
```

### Java - Unirest
```java
Unirest.setTimeouts(0, 0);
HttpResponse<String> response = Unirest.get("https://pepper.api.zakichanu.com/dealabs/topDeals")
  .asString();
```

### C# - RestSharp
```cs
var client = new RestClient("https://pepper.api.zakichanu.com/dealabs/topDeals");
client.Timeout = -1;
var request = new RestRequest(Method.GET);
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);
```

### Dart - http
```dart
var request = http.Request('GET', Uri.parse('https://pepper.api.zakichanu.com/dealabs/topDeals'));


http.StreamedResponse response = await request.send();

if (response.statusCode == 200) {
  print(await response.stream.bytesToString());
}
else {
  print(response.reasonPhrase);
}
```

### Python - requests
```py
import requests

url = "https://pepper.api.zakichanu.com/dealabs/topDeals"

payload={}
headers = {}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)
```

And many other languanges, if you want a more detailed documentation, you can jump right into my [Postman page](https://documenter.getpostman.com/view/15051784/UVsHUnki)
## Installation

- Fork the project
- Then you need to setup a typescript environment : 
  * ```npm install -g typescript```
  * ```npm install -g ts-node```
- Generate node_modules package : ```npm install```
- Test your project by running the script : ```npm run dev```
- And your app might run in this link : ```http://localhost:3000/```
- Test it out with existant endpoints

## Projects

### Haku Discord bot
[Haku](https://github.com/Zakichanu/HakuDiscordBot) does it to alert people from the server with top deals and broken deals of [Dealabs](https://www.dealabs.com/) website.
## Limit

You can call 10 requests per minute, wich means you can run 1 request each 6 seconds, I've done this on purpose just to make sure nobody make my server crash 🤣

> Made by Zakichanu
