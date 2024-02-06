import { htmlElement } from "./htmlElement";
import {getCookie} from "../cookie";
import { formatDate } from "./formatDate";

let n = 0;
let shouldLoad = true;


export function renderChat() {
    
    if (!shouldLoad) return;

    let objMessage = (JSON.parse(localStorage.getItem('message'))).messages;

    console.log(getCookie('thisDate'))
   

    if (getCookie('thisDate') !== undefined){
        
        const messageAllTo = document.querySelectorAll('.to');
        const messageAllMe = document.querySelectorAll('.me');

        for (let value of messageAllMe){
            value.remove();
        }
        for (let value of messageAllTo){
            value.remove();
        }


        for (let value of objMessage) {
            if (formatDate(value.createdAt, 'y-m-d') === getCookie('thisDate')) {
                renderMessage(value.user.email, value.user.name, value.text, value.createdAt, false);
            }
            // console.log(formatDate(value.createdAt, 'y-m-d'));
        }
    } else {
        let j = 0;
    
        const slicedArray = objMessage.slice(0 + n, 20 + n);
        console.log(slicedArray)
        for (let value of slicedArray) {
            j++;
            renderMessage(value.user.email, value.user.name, value.text, value.createdAt, false);
            if (j == 20) {
                n = n + 20;
            }
            if (n == 280) {
                alert('Вся история загружена');
                shouldLoad = false;
            }
        }
    }


}

export function renderMessage(email: string, name: string, message: string, date: string, oneMessage: boolean) {
    const window = document.querySelector('.window');
    let temp = htmlElement.temp;
    let boolean = false;
    const elem = document.createElement('div');
    if (email === getCookie('myEmail')) {
        elem.classList.add('me');
        boolean = true;
        if (getCookie('darkThemeBoolean') == 'true') {
            elem.dataset.darkmode = 'night';
        }
    } else {
        elem.classList.add('to');
        if (getCookie('darkThemeBoolean') == 'true') {
            elem.dataset.darkmode = 'night';
        }
    }
    if (temp instanceof HTMLTemplateElement) {
        elem.append(temp.content.cloneNode(true));
    }


    elem.querySelector('.text').innerHTML = `${name}: ${message}`;
    elem.querySelector('.time').textContent = `${formatDate(date, 'h:m')}`
    if (oneMessage) {
        window.prepend(elem);
    } else {
        window.append(elem);
    }
   
}