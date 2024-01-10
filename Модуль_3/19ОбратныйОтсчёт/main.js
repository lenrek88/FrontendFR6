import dateFns from "date-fns";


const mainForm = document.querySelector('.dateForm');


mainForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const time = event.target.firstElementChild.value;
    
    let x = new Date();
    let y = event.target.firstElementChild.value;

    let temp = dateFns.differenceInYears(y, x);
    let result = temp + " лет ";
    x = dateFns.addYears(x, temp);
    temp = dateFns.differenceInDays(y, x);
    result = result + temp + " дней ";
    x = dateFns.addDays(x, temp);
    temp = dateFns.differenceInHours(y, x);
    result = result + temp + " часов ";

    const text = document.querySelector('.text');

    text.textContent = result;
});