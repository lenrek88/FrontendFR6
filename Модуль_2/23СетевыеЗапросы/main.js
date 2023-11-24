import { getGenderize } from "./fetchModule.js";

const getName = document.querySelector('.getName');

function showName(e) {
    e.preventDefault();
    const name = e.target.firstElementChild.value;
    getGenderize(name)
        .then(data => 
        alert(`${name} is ${data.gender}`))
        .catch(error => 
            console.error(error));
}



getName.addEventListener('submit', showName)

