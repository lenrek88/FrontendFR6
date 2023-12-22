const person = {
    name: "John",
    age: 30,
    city: "New York"
};

const keys = Object.keys(person);

const values = Object.values(person);

const entries = Object.entries(person);
console.log(entries);

console.log(values);


console.log(keys);
  
  for (const [key, value] of Object.entries(person)) {
    console.log(`${key}: ${value}`);
  }
  

  const ages = {
    john: 30,
    jane: 25,
    bob: 40
  };
  
  const ageArray = Object.values(ages);
  
  const averageAge = ageArray.reduce((total, age) => total + age) / ageArray.length;
  
  console.log(averageAge); 