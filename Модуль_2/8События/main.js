const stopWatch = document.getElementById('stopwatch');

let j = 0;
let i = 0;
let intervalId;

function stopWatchButtonHandler(event) {
        
    if (j === 0) {
        intervalId = setInterval(function() {
            i++;
            console.log('Прошло секунд: ', i)
        }, 1000);
        j++;
    } else if (j === 1) {
        clearInterval(intervalId);
        j--;
    }


}

stopWatch.addEventListener('click', stopWatchButtonHandler);