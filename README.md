[![Netlify Status](https://api.netlify.com/api/v1/badges/5639531f-4e8a-4661-abd0-4b3e40736ffd/deploy-status)](https://app.netlify.com/sites/react-app-crypto-currency/deploys)
![Heroku](https://pyheroku-badge.herokuapp.com/?app=crypto-currency-backend&style=flat)

# CryptoApp
> One stop app for anything Cryptocurrency.

### Table of Contents

- [Description](#description)
- [Key Features](#key-features)
- [Dependencies](#dependencies)
- [Setup](#Setup)
- [Resources](#Resources)
    - [Home Page Component](#HomePage)
    - [Coind Details Component](#CoindDetails)
    - [AllCoins Component](#AllCoins)
    - [News Component](#News)
- [Contributing](#Contributing)
- [License](#license)

---

## Description
CrypoApp was created to help people conveniently check crypto-related news, coin historical data, Exchange Data, etc.

## Key Features

- Free forever.
- Integration of three API's (Coinranking, Coincap, Microsoft Bing news).
- In depth graph details of price history for any coin, along with important data.
- Dedicated news section with coin subject filters.
- Dedicated exchanges table for quick stats on dozens of coins.
- Query caching with Rails cache

## Dependencies
The following requirements are necessary to run this application:

## Stack:

- React (UI library)
- Redux Toolkit (State management)
- Antd (CSS styling solution library)
- React Charts (Chart library) 
- Rails  (Web app framework)

### Back End REPO
[CryptoApp Back end](https://github.com/NadavsSchwartz/-crypto_backend)

## Setup
To use CryptoApp locally, You need to have [Node.js](https://nodejs.org/) installed along with all the dependencies,
and an .env file in the root of the BACK END project, to fill it, you'll need to get the following api keys:

- [Microsoft news as (NEWS_API_KEY)](https://rapidapi.com/microsoft-azure-org-microsoft-cognitive-services/api/bing-news-search1)
- [Coinranking as (COINRANKING_API_KEY)](https://developers.coinranking.com/account/)
- [Coincap as (COINCAP_API_KEY)](https://coincap.io/api-key)

Please have ruby and rails installed prior to running the back end, as well as the [other dependencies from the Back End repo](https://github.com/NadavsSchwartz/-crypto_backend#dependencies).

## Resources

### HomePage
| route | method | description | Docs |
|---|---|---|---|
|  '/' | GET | App's homepage. renders simplified version of each components |  [code](./src/components/Homepage.js) |
---

### CoinDetails
| route | methods | description | Docs |
|---|---|---|---|
|  '/crypto/:coinId' | GET | renders show page for particular coin | [code](./src/components/CrpytoDetails.js) |

---
### AllCoins
| route | methods | description | Docs |
|---|---|---|---|
|  '/cryptocurrencies' | GET | shows all crypto currencies |  [code](./src/components/Cryptocurrencies.js) |

---
### News
|  route | Methods | description  |  Docs |
|---|---|---|---|
|  '/news' | GET | renders crypto currency related news | [code](./src/components/News.js) |

---
### Exchanges
|  route | Methods | description  |  Docs |
|---|---|---|---|
|  '/exchanges' | GET | renders crypto currency exchanges table | [code](./src/components/Exchanges.js) |

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/NadavsSchwartz/cryptoApp.


## License

The app is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).


