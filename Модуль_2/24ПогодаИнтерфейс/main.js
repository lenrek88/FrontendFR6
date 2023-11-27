const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f'; // этот ключ имеет ограничение в кол-ве запросов, если будут ошибки - придется сгенерировать новый или спросить в чате


let likeArray = [];

let getCityName = document.querySelector('.text');
let thisTempElement = document.querySelector('.thisTemp');
let thisCityElement = document.querySelector('.thisCity');
let likeElement = document.querySelector('.like');

function formHandler(e) {
    e.preventDefault();

    const cityName = e.target.textContent.trim() ? e.target.textContent.trim() : getCityName[0].value;    

    const url = `${serverUrl}?q=${cityName}&appid=${apiKey}`;

    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        let thisTemp = (data.main.temp - 273.15).toFixed(0);
        thisTempElement.textContent = thisTemp;
        thisCityElement.textContent = data.name;
    })

}

function likeElementHandler(event) {

    const cityName = event.target.previousSibling.textContent;

    if (!likeArray.includes(cityName)) {
        likeArray.unshift(cityName);
    }

    renderUiLike();

}

function likreRemoveHandler(event) {
    let thisCityName = event.target.previousSibling.textContent;
    likeArray = likeArray.filter((element) => element !== thisCityName);
    renderUiLike();

}

function renderUiLike() {
    let locationsElement = document.querySelector('.locations');
    locationsElement.textContent = '';

    likeArray.forEach((item) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('cityLike');

        let newH2 = document.createElement('h2');
        newH2.textContent = item;
        newH2.addEventListener('click', formHandler);

        let newButton = document.createElement('button');
        newButton.classList.add('delete');
        newButton.addEventListener('click', likreRemoveHandler);

        newDiv.appendChild(newH2);
        newDiv.appendChild(newButton);

        locationsElement.appendChild(newDiv);

    })
    

}




likeElement.addEventListener('click', likeElementHandler);
getCityName.addEventListener('submit', formHandler);
