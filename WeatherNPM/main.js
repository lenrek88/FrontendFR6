import { storage } from "./coockies.js";

const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f'; // этот ключ имеет ограничение в кол-ве запросов, если будут ошибки - придется сгенерировать новый или спросить в чате


let likeArray = storage.getFavoriteCities('FavoriteCity') ? storage.getFavoriteCities('FavoriteCity') : new Set();
let getCityName = document.querySelector('.text');
let thisTempElement = document.querySelector('.thisTemp');
let thisCityElement = document.querySelector('.thisCity');
let likeElement = document.querySelector('.like');

let currentCity = storage.getCurrentCity() ? storage.getCurrentCity() : 'Aktobe';

function Logger() {

    this.result = 0;

    this.start = function() {
        this.result = Date.now();
    }
    
    this.end = function () {
        this.result = Date.now() - this.result;
    }
    
}


async function formHandler(e) {

    
    e?.preventDefault();

  
    
    const logger = new Logger();

    logger.start();

    const cityName = e?.target.textContent.trim() ? e.target.textContent.trim() : (getCityName[0].value ? getCityName[0].value : currentCity);    
    storage.saveCurrentCity(cityName)
    console.log(cityName)

    const url = `${serverUrl}?q=${cityName}&appid=${apiKey}`;

    try {
    const response = await fetch(url)
    const data = await response.json();
        let thisTemp = (data.main.temp - 273.15).toFixed(0);
        thisTempElement.textContent = thisTemp;
        thisCityElement.textContent = data.name;
        logger.end();
        console.log(logger.result);

        
        const thisCloud = document.createElement('div');
        thisCloud.classList.add('thisCloud2');
        thisCloud.style.backgroundImage = getUrlImage(data.weather[0].id);

        const cloudTemp = document.querySelector('.cloudTemp');
        const thisCloud3 = document.querySelector('.thisCloud2');

        if (thisCloud3) {
            thisCloud3.replaceWith(thisCloud);

        } else {
            cloudTemp.append(thisCloud)
        }
        

        let feels_like = data.main.feels_like-273.15;
        const detailsTemp2 = document.querySelector('.detailsTemp2');
        let sunriseHours = (new Date(data.sys.sunrise*1000)).getHours() < 10 ? "0" + (new Date(data.sys.sunrise*1000)).getHours() : (new Date(data.sys.sunrise*1000)).getHours()
        let sunsetHours = (new Date(data.sys.sunset*1000)).getHours() < 10 ? "0" + (new Date(data.sys.sunset*1000)).getHours() : (new Date(data.sys.sunset*1000)).getHours()
        let sunriseMinutes = (new Date(data.sys.sunrise*1000)).getMinutes() < 10 ? "0" + (new Date(data.sys.sunrise*1000)).getMinutes() : (new Date(data.sys.sunrise*1000)).getMinutes()
        let sunsetMinutes = (new Date(data.sys.sunset*1000)).getMinutes() < 10 ? "0" + (new Date(data.sys.sunset*1000)).getMinutes() : (new Date(data.sys.sunset*1000)).getMinutes()
        detailsTemp2.innerHTML = `                     
             <p class="detailsTemp">
             Feels like: ${Math.floor(feels_like)}<br>
             </p>
             <p class="detailsTemp">
             Sunrise: ${sunriseHours}:${sunriseMinutes}<br>
             </p>
             <p class="detailsTemp">
             Sunset: ${sunsetHours}:${sunsetMinutes}
             </p>`

             forecastF(cityName);

    } catch (error) {     
           console.log(error)
    }
}



function getUrlImage(id) {
    if (id === 800) {
        return 'url(https://openweathermap.org/img/wn/01d@4x.png)';
    } else if (id === 801) {
        return 'url(https://openweathermap.org/img/wn/02d@4x.png)';
    } else if (id === 802) {
        return 'url(https://openweathermap.org/img/wn/03d@4x.png)';
    } else if (id === 803 || id === 804) {
        return 'url(https://openweathermap.org/img/wn/04d@4x.png)';
    } else if (id > 199 && id < 233) {
        return 'url(https://openweathermap.org/img/wn/11d@4x.png)';
    } else if (id > 299 && id < 322) {
        return 'url(https://openweathermap.org/img/wn/09d@4x.png)';
    } else if (id > 499 && id < 505) {
        return 'url(https://openweathermap.org/img/wn/10d@4x.png)';
    } else if (id === 511) {
        return 'url(https://openweathermap.org/img/wn/13d@4x.png)';
    } else if (id > 519 && id < 532) {
        return 'url(https://openweathermap.org/img/wn/09d@4x.png)';
    } else if (id > 599 && id < 623) {
        return 'url(https://openweathermap.org/img/wn/09d@4x.png)';
    } else if (id > 700 && id < 782) {
        return 'url(https://openweathermap.org/img/wn/50d@4x.png)';
    }
}


async function forecastF(cityName) {
    const deleteDiv = document.querySelectorAll('.forecast');
 
    for (let elem of deleteDiv) {
        elem.remove();
    }
    const serverUrl2 = 'https://api.openweathermap.org/data/2.5/forecast';
    const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';

    let content3 = document.querySelector('.tabs')



    const url2 = `${serverUrl2}?q=${cityName}&appid=${apiKey}`;
    let thisCloud = '';
    
    const response = await fetch(url2);
    const inf = await response.json()
    
    inf.list.forEach(function(item,i,arr) {
            if (i < 3) {
                let date = new Date(item.dt*1000);

                const pTime = document.createElement('p');
                pTime.classList.add('Time');
                let hours = date.getHours();
                if (hours < 10) {
                    hours = "0" + hours
                }
                let minutes = date.getMinutes();
                if (minutes < 10) {
                    minutes = "0" + minutes
                }
                pTime.textContent = `${hours}:${minutes}`


                const pTemp = document.createElement('p');
                pTemp.classList.add('temp')
                let temp = item.main.temp-273.15;
                pTemp.textContent = `Temperature: ${Math.floor(temp)}`;

                const pfeelsTemp = document.createElement('p');
                pfeelsTemp.classList.add('feelsTemp');
                let feelsLike = item.main.feels_like-273.15;
                pfeelsTemp.innerHTML = `Feels like: ${Math.floor(feelsLike)}`;
            
                thisCloud = document.createElement('div');
                thisCloud.classList.add('thisCloud');
                thisCloud.style.backgroundImage = getUrlImage(item.weather[0].id);



                const div = document.createElement('div');
                div.classList.add('forecast');
                content3.append(div)
                div.append(pTime);
                div.append(pTemp);
                div.append(pfeelsTemp);
                div.append(thisCloud);
                
                }
        })
}

function likeElementHandler(event) {

    const cityName = event.target.previousSibling.textContent;

    likeArray.add(cityName);
    storage.saveFavoriteCities(likeArray);

    renderUiLike();

}

function likreRemoveHandler(event) {
    let thisCityName = event.target.previousSibling.textContent;
    likeArray.delete(thisCityName);
    storage.saveFavoriteCities(likeArray);

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




document.addEventListener("DOMContentLoaded", function() {
    formHandler();
    renderUiLike();
});
