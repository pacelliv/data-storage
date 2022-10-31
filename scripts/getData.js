const { getNamedAccounts, ethers } = require("hardhat")
const idNumberArr = ["3-333-3333", "4-444-4444", "5-555-5555", "6-666-6666"]

async function main() {
    const { deployer } = await getNamedAccounts()
    const dataStorage = await ethers.getContract("DataStorage", deployer)

    console.log(`Got Data Storage Contract at ${dataStorage.address}`)
    console.log(`Fetching the data, please wait... `)
    const person = await dataStorage.getData(idNumberArr[2])
    console.log(`For Id number ${idNumberArr[2]} the data is:`)
    console.log(`   a) Name: ${person[0]}`)
    console.log(`   b) Email: ${person[1]}`)
    console.log(`   c) Number: ${person[2].toString()}`)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.log(error)
        process.exit(1)
    })
