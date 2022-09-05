const { network } = require("hardhat")
const { verify } = require("../utils/verify")

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()

    const dataStorage = await deploy("DataStorage", {
        from: deployer,
        args: [],
        log: true,
        waitConfirmations: network.config.blockConfirmations || 1,
    })

    if (network.config.chainId === 5 && process.env.ETHERSCAN_API_KEY) {
        console.log("Waiting for block confirmations...")
        await verify(dataStorage.address, [])
    }

    log(`Contract deployed at: ${dataStorage.address}`)
    log("---------------------------------------------------------------------")
    console.log(network.config)
}

module.exports.tags = ["all", "dataStorage"]
