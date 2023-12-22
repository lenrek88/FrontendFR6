function pow(x, n) {
    let result = 1;

    for (let i = 0; i < n; i++) {
        result *= x;
    }

    return result;

}

function powRecursion(x, n) {
    return (n == 1) ? x : (x * powRecursion(x, n - 1))
}

console.log(pow(10,10));
console.log(powRecursion(10,10));


///
// async function processData(data, index = 0) {
//     if (index === data.length) {
//       return;
//     }
//     const result = await data[index];
//     console.log(result);
//     await processData(data, index + 1);
//   }
//   processData([Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)]);