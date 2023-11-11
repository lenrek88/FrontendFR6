// function checkAge(age) {
//     if (age < 18) {
//         console.log('you are not allowed');
//     } else if (age >= 18) {
//         console.log('you are welcome!')
//     }
// }

// checkAge(14);


function calc(operation, a, b) {
    if (operation === 'add') {
        return a+b;
    } else if (operation === 'multi') {
        return a*b;
    } else if (operation === 'subtract') {
        return a-b;
    }
}

console.log(calc('add', 1, 2));
console.log(calc('multi', 1, 2));
console.log(calc('subtract', 3, 2));

