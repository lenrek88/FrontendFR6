const elem = document.getElementById('change-bg');
const colors = ['red', 'blue', 'green', 'orange'];

function buttonHandler() {
    setInterval(function(){
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        document.body.style.backgroundColor = randomColor;
    }, 2000)
}

elem.addEventListener('click', buttonHandler);


