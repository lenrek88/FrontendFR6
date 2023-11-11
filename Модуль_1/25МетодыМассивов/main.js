const numberList = [1,2,3,4,5,6,7,8,9];

numberList.forEach((number) => console.log(`Number is ${number}`));

const stringList = ['cat', 'dog', 'elephant', 'tiger', 'lion'];

const firstStingMoreSevenSymbol = stringList.find(word => word.length > 7);

console.log(firstStingMoreSevenSymbol);

const numberListTwo = [1, 11, -2, 3, -10, 4];

const absoluteNumber = numberListTwo.filter(number => number>0);
console.log(absoluteNumber);

const numberListThree = [1, 11, -2, 3, -10, 4];

console.log(numberListThree.sort((a,b) => b-a));