const { ethers, getNamedAccounts, network } = require("hardhat")
const { assert } = require("chai")

if (network.config.chainId === 5) {
    describe("DataStorage", () => {
        let dataStorage, deployer
        beforeEach(async () => {
            deployer = (await getNamedAccounts()).deployer
            dataStorage = await ethers.getContract("DataStorage", deployer)
        })
        it("stores and fetch the data", async () => {
            console.log("storing the data")
            const txResponse = await dataStorage.addPerson(
                "Mark",
                "3-777-3333",
                "mark@dev",
                5
            )
            await txResponse.wait(1)
            console.log("fetching the data")
            const data = await dataStorage.getData("3-777-3333")
            assert.equal(data[0], "Mark")
            assert.equal(data[1], "mark@dev")
            assert.equal(data[2].toString(), "5")
        })
    })
}
