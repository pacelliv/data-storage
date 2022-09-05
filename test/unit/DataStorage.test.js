const { ethers, deployments, getNamedAccounts } = require("hardhat")
const { assert } = require("chai")

if (network.config.chainId === 31337) {
    describe("DataStorage", async function () {
        let dataStorage
        let deployer
        beforeEach(async function () {
            deployer = (await getNamedAccounts()).deployer
            await deployments.fixture(["all"])
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

        it("Should fetch the data in the mappings", async function () {
            const idNumber = ""

            const [
                currentIdNumberToName,
                currentIdNumberToEmail,
                currentIdNumberToAmount,
            ] = await dataStorage.getData(idNumber)

            const expectedIdNumberToName = ""
            const expectedIdNumberToEmail = ""
            const expectedIdNumberToAmount = "0"

            assert.equal(expectedIdNumberToName, currentIdNumberToName)
            assert.equal(expectedIdNumberToEmail, currentIdNumberToEmail)
            assert.equal(
                expectedIdNumberToAmount,
                currentIdNumberToAmount.toString()
            )
        })
    })
}
