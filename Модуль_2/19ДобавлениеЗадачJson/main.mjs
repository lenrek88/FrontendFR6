import data from './data.json' assert {type: "json"};

for (let item of data.users) {
    console.log(`${item.firstName}, born at ${item.dateOfBirth} and ${item.knowsAs}`)
}