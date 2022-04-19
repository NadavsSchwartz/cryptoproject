[![Netlify Status](https://api.netlify.com/api/v1/badges/5639531f-4e8a-4661-abd0-4b3e40736ffd/deploy-status)](https://app.netlify.com/sites/react-app-crypto-currency/deploys)
![Heroku](https://pyheroku-badge.herokuapp.com/?app=crypto-currency-backend&style=flat)

# CryptoApp
> One stop app for anything Cryptocurrency.

https://cryptoapp.win

### Table of Contents

- [Description](#description)
- [Key Features](#key-features)
- [Stack](#Stack)
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

## Stack:

- React (UI library)
- Redux Toolkit (State management)
- Antd (CSS styling solution library)
- React Charts (Chart library) 
- Rails (Web app framework)

### Back End REPO
[CryptoApp Back end](https://github.com/NadavsSchwartz/-crypto_backend)

## Setup
To use CryptoApp locally, You need to have [Node.js](https://nodejs.org/) installed along with all the dependencies.

1. Clone this and [CryptoApp Back end](https://github.com/NadavsSchwartz/-crypto_backend) repository
2. Create an `.env` file in the back-end folder and fill it properly ([see below](#configuration)).
3. Install dependencies: `npm install` or `yarn` if you're using yarn.
4. Run for development: `npm run dev` or `yarn dev` if you're using yarn.

### Configuration

For the configuration, the following settings have to be added in your `.env`-file:

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

Pull requests are welcome. You'll probably find lots of improvements to be made.

Open issues for feedback, requesting features, reporting bugs, or discuss ideas.

## License

The app is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).


