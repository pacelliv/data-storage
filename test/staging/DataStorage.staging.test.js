const { ethers, getNamedAccounts, network } = require("hardhat")
const { assert } = require("chai")

if (network.config.chainId === 5 && process.env.ETHERSCAN_API_KEY) {
    describe("DataStorage", async function () {
        let dataStorage
        let deployer
        beforeEach(async function () {
            deployer = (await getNamedAccounts()).deployer
            dataStorage = await ethers.getContract("DataStorage", deployer)
        })

        it("Checks if the array is empty", async function () {
            const personName = ""
            const personId = ""
            const personEmail = ""
            const personAmount = "0"
            const transactionResponse = await dataStorage.addPerson(
                personName,
                personId,
                personEmail,
                personAmount
            )
            await transactionResponse.wait(1)
            const person = await dataStorage.people(0)
            assert.equal(person.name, personName)
            assert.equal(person.idNumber, personId)
            assert.equal(person.email, personEmail)
            assert.equal(person.amount.toString(), personAmount)
        })
    })
}
