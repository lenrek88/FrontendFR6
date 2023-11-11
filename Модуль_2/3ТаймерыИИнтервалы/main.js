// function sayMyName() {
//     console.log('Danil');
// }

// // setTimeout(sayMyName, 5000);
// // sayMyName();

// const timeoutId = setTimeout(sayMyName, 3000);

// console.log(timeoutId);


// setTimeout(function() {
// 	console.log('привет');

//   setTimeout(function() {
//     console.log('привет');
//   }, 2000);

// }, 1000);


// function countdown(count) {
//     function getCount(){
//         if (count === 1) {
//             clearInterval(intervalId);
//              console.log('время вышло');
//              return;
//         }
//         console.log(`осталось секунд: ${--count}`);
//     };
//     const intervalId = setInterval(getCount, 1000);
// }

function countdown(count) {
    setTimeout(function() {
        console.log('осталось секунд: 9');

        setTimeout(function() {
            console.log('осталось секунд: 8')

            setTimeout(function() {
                console.log('осталось секунд: 7')

                setTimeout(function() {
                    console.log('осталось секунд: 6')

                    setTimeout(function() {
                        console.log('осталось секунд: 5')

                        setTimeout(function() {
                            console.log('осталось секунд: 4')

                            setTimeout(function() {
                                console.log('осталось секунд: 3')
                                
                                setTimeout(function() {
                                    console.log('осталось секунд: 2')

                                    setTimeout(function() {
                                        console.log('осталось секунд: 1')

                                        setTimeout(function() {
                                            console.log('время вышло')
                                        }, 1000)
                                    }, 1000)
                                }, 1000)
                            }, 1000)
                        }, 1000)
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)

    }, 1000)
}

countdown(10);

