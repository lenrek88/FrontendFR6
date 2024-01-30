import { htmlElement } from "./htmlElement";
import {getCookie} from "../cookie";

let n = 0;
let shouldLoad = true;

export function renderChat() {
    
    if (!shouldLoad) return;

    let objMessage = (JSON.parse(localStorage.getItem('message'))).messages;

    let j = 0;

    const slicedArray = objMessage.slice(0 + n, 20 + n);

    for (let value of slicedArray) {
        j++;
        renderMessage(value.user.email, value.user.name, value.text, false);
        if (j == 20) {
            n = n + 20;
        }
        if (n == 280) {
            alert('Вся история загружена');
            shouldLoad = false;
        }
    }
}

export function renderMessage(email, name, message, oneMessage) {
    const window = document.querySelector('.window');
    let temp = htmlElement.temp;
    let boolean = false;
    const elem = document.createElement('div');
    if (email === getCookie('myEmail')) {
        elem.classList.add('me');
        boolean = true;
    } else {
        elem.classList.add('to');
    }
    if (temp instanceof HTMLTemplateElement) {
        elem.append(temp.content.cloneNode(true));
    }
    elem.querySelector('.text').innerHTML = `${name}: ${message}`;
    
    if (oneMessage) {
        window.prepend(elem);
    } else {
        window.append(elem);
    }
   
}