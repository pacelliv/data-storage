# Data Storage

## Overview

This project allows an user to store and retrieve data.

Use the `addPerson` function to store the following data: name, id number, email and number of a person.

Pass an id number to the `getData` function so you can fetch the stored data associated with that id number.

## Getting Started

## Requirements 
To run this repo install::
- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
    - After installing the package run in the terminal the command `git --version` and if the installation was successful the output should look like this: `git version x.xx.x`
- [Node.js](https://nodejs.org/en/)
    - In the terminal run the command `node --version`, if the output looks like `vxx.xx.x` that means the package was installed.
- [Yarn](https://nodejs.org/en/)
    - Run the command `yarn --version`, if the output looks like `x.xx.xx` that means the package was installed.

## Quickstart 
Clone and cd into the repo

```
git clone https://github.com/PacelliV/hardhat-fund-me.git
cd hardhat-fund-me
```
After opening the folder, install all dependencies with the following command:
```
Yarn
```
## Usage
After installing all dependencies the project is ready to be compile and deploy, run the next commands in the following order:

- compile:
```
yarn hardhat compile
```

- Deploy to localhost:
```
yarn hardhat deploy
```

- To test the project:
```
yarn hardhat test
```

- To verify the coverage of the project:
```
yarn hardhat coverage
```

## Deployment to a testnest
1. Set up environment variables:

You'll need to set your `RPC_URL_GOERLI` and `PRIVATE_KEY` as enviroment variables. Yo can add them to an `.env` file. Check the `.env.example` file for reference.

- `PRIVATE_KEY`: The private key of your account (e.g. [Metamask](https://metamask.io/)). NOTE: IT IS RECOMMENDED TO CREATE A NEW ACCOUNT FOR TESTING PURPOSES AND NEVER USE AN ACCOUNT WITH REAL FUNDS.
- You can learn how to export a private key [here](https://metamask.zendesk.com/hc/en-us/articles/360015289632-How-to-Export-an-Account-Private-Key).
    `RPC_URL_GOERLI`: This is the URL of the Goerli node you are working with. You can set up one for free in [Alchemy](https://www.alchemy.com/).

2. Get test ETH

Go to https://goerlifaucet.com/ or faucets.chain.link to get test ETH in your Metamask.

3. Deploy your contract with the command:
```
yarn hardhat deploy --network goerli
```

## Verify the contract in Etherscan
If you deploy to a testnet or mainnet, you can verify it if you get an [API Key](https://etherscan.io/login?cmd=last) from Etherscan and set it as an environemnt variable named `ETHERSCAN_API_KEY`. You can pop it into your `.env` file as seen in the `.env.example`.

However, you can manually verify with:
```
yarn hardhat verify <DEPLOYED_CONTRACT_ADDRESS> --constructor-args
```
In it's current state, if you have your api key set, it will auto verify goerli contracts.

## Test the contract using the scripts

After the contract is deploy in Goerli, you can store data in the contract with the next command:

```
yarn hardhat run scripts/addPerson.js --network goerli
```

To fetch the stored data run:
```
yarn hardhat run scripts/getData.js --network goerli
```

You can also run the scripts in the localhost, to do that create a new terminal and run:
```
yarn hardhat node
```
This will launch hardhat local blockchain, after that, return to the previous terminal, replace `goerli` for `localhost` and run the commands. If the hardhat local blockchain isn't running, the scripts can't be run in the localhost.

## Estimage gas cost in USD

To get a USD estimation of gas cost, you'll need a `COINMARKETCAP_API_KEY` environment variable. You can get one for free from [CoinMarketCap](https://pro.coinmarketcap.com/account).

Then, uncomment the line coinmarketcap: `COINMARKETCAP_API_KEY`, in the `hardhat.config.js` file to get the USD estimation. 

Note: everytime you run your tests it will use an API call, so it might make sense to have using coinmarketcap disabled until you need it. You can disable it by just commenting the line back out.

## Linting
To check linting / code formatting:
```
yarn lint
```
or, to fix:
```
yarn lint:fix
```

## Typescript

There's no typescript version of this repo, but PRs are welcome!

## Thank you 🎉 🎉
I hope you like this project and it ends up being useful to you 👨‍💻.
Do your own modifications!
