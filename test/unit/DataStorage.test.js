const { ethers, deployments, getNamedAccounts } = require("hardhat")
const { assert } = require("chai")

if (network.config.chainId === 31337) {
    describe("DataStorage", () => {
        let dataStorage, deployer

        beforeEach(async () => {
            deployer = (await getNamedAccounts()).deployer
            await deployments.fixture(["all"])
            dataStorage = await ethers.getContract("DataStorage", deployer)
        })

        describe("addPerson", () => {
            it("stores people in the array", async () => {
                const transactionResponse = await dataStorage.addPerson(
                    "Mark",
                    "3-777-3333",
                    "mark@dev",
                    9
                )
                await transactionResponse.wait(1)
                const person = await dataStorage.getPeopleArr(0)
                // console.log(person)
                assert.equal(person.name, "Mark")
                assert.equal(person.idNumber, "3-777-3333")
                assert.equal(person.email, "mark@dev")
                assert.equal(person.amount.toString(), "9")
            })
        })

        describe("getData", () => {
            beforeEach(async () => {
                await dataStorage.addPerson(
                    "Serena",
                    "4-444-4444",
                    "serena@dev",
                    "10"
                )
            })
            it("fetch the data", async () => {
                const idNumber = "4-444-4444"
                const expectedName = "Serena"
                const expectedEmail = "serena@dev"
                const expectedNumber = "10"
                const [
                    currentIdNumberToName,
                    currentIdNumberToEmail,
                    currentIdNumberToNumber,
                ] = await dataStorage.getData(idNumber)
                assert.equal(expectedName, currentIdNumberToName)
                assert.equal(expectedEmail, currentIdNumberToEmail)
                assert.equal(expectedNumber, currentIdNumberToNumber)
            })
        })
    })
}
