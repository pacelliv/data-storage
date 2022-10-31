const { getNamedAccounts, ethers } = require("hardhat")

const peopleData = [
    {
        name: "Serena",
        idNumber: "3-333-3333",
        email: "serena@dev",
        number: 5,
    },
    { name: "Anna", idNumber: "4-444-4444", email: "anna@dev", number: 10 },
    {
        name: "Pierre",
        idNumber: "5-555-5555",
        email: "pierre@dev",
        number: 15,
    },
    { name: "Paolo", idNumber: "6-666-6666", email: "paolo@dev", number: 20 },
]

async function main() {
    const { deployer } = await getNamedAccounts()
    const dataStorage = await ethers.getContract("DataStorage", deployer)

    console.log(`Got Data Storage Contract at ${dataStorage.address}`)
    console.log("Adding data...")

    for (const person of peopleData) {
        console.log("Adding person data, please wait...")
        const txResponse = await dataStorage.addPerson(
            person.name,
            person.idNumber,
            person.email,
            person.number
        )
        await txResponse.wait(1)
    }
    console.log("Data added")
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.log(error)
        process.exit(1)
    })
