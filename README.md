# CryptoApp
> One stop app for NFTs, Cryptocurrency coins, and Crypto related News.

### Table of Contents

- [Description](#description)
- [Dependencies](#dependencies)
- [Run](#Run)
- [Resources](#Resources)
    - [Home Page Component](#HomePage)
    - [Coind Details Component](#CoindDetails)
    - [AllCoins Component](#AllCoins)
    - [News Component](#News)
- [Contributing](#Contributing)
- [License](#license)

---

## Description
CrypoApp was created to help people conveniently check crypto-related news, coin historical data, NFTs, Exchange Data, etc. CrypoApp allows an AI-Powered button to receive voice commands and responds accordingly. Additionally, you can use manual navigations instead of the voice-powered button.

## Dependencies
The following requirements are necessary to run this application:

### Front End:

- React
- Redux Toolkit

### Back End
- Ruby
- Rails
- Postgresql

### Back End REPO with instructions
[CryptoApp Back end](https://github.com/NadavsSchwartz/-crypto_backend)

## Run
To use CryptoApp, visit the file's repo on Github.

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


## Contributing
Bug reports and pull requests are welcome on GitHub at https://github.com/NadavsSchwartz/cryptoApp.


## License

The app is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
---

