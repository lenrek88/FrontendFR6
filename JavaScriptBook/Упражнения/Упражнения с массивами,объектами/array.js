function reverseArray(array) {
  let newArray = [];
  for (let item of array) {
    newArray.unshift(item);
  }
  return newArray;
}

console.log(reverseArray([1, 2, 3, 4, 5]));

function reverseArrayInPlace(array) {
  let lengthArray = array.length;
  for (let i = 0; i < lengthArray; i++) {
    array.shift(array[i]);
    array.slice(i+1)
  }
}

[1,2,3,4,5]
[1,1,2,3,4,5]
[]