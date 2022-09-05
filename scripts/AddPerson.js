const { getNamedAccounts, ethers } = require("hardhat")

async function main() {
    const { deployer } = await getNamedAccounts()
    const dataStorage = await ethers.getContract("DataStorage", deployer)
    const transactionResponse = await dataStorage.addPerson(
        "Solidity",
        "3-333-3333",
        "solidity@gmail.com",
        5
    )
    await transactionResponse.wait(1)
    console.log("Person added")
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.log(error)
        process.exit(1)
    })
