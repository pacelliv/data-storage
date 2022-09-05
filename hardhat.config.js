require("@nomicfoundation/hardhat-toolbox")
require("dotenv").config()
require("@nomiclabs/hardhat-etherscan")
require("hardhat-gas-reporter")
require("solidity-coverage")
require("hardhat-deploy")

/** @type import('hardhat/config').HardhatUserConfig */

const RPC_URL_GOERLI = process.env.RPC_URL_GOERLI || "https://goerli.net/"
const RPC_URL_POLYGON =
    process.env.RPC_URL_POLYGON || "https://polygonscan.com/"
const PRIVATE_KEY = process.env.PRIVATE_KEY || "0xKey"
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || ""
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY || ""

module.exports = {
    solidity: "0.8.9",
    defaultNetwork: "hardhat",
    networks: {
        goerli: {
            url: RPC_URL_GOERLI || "https://goerli.net/",
            accounts: [PRIVATE_KEY],
            chainId: 5,
            blockConfirmations: 6,
        },
        polygon: {
            url: RPC_URL_POLYGON || "https://polygonscan.com/",
            chainId: 137,
            accounts: [],
        },
    },
    gasReporter: {
        enabled: true,
        currency: "USD",
        outputFile: "gasReport.txt",
        noColors: true,
        coinmarketcap: COINMARKETCAP_API_KEY,
        //token: "MATIC",
    },
    etherscan: {
        apiKey: ETHERSCAN_API_KEY,
    },
    namedAccounts: {
        deployer: {
            default: 0,
        },
    },
}
