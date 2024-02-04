"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderMessage = exports.renderChat = void 0;
const htmlElement_1 = require("./htmlElement");
const cookie_1 = require("../cookie");
const formatDate_1 = require("./formatDate");
let n = 0;
let shouldLoad = true;
function renderChat() {
    if (!shouldLoad)
        return;
    let objMessage = (JSON.parse(localStorage.getItem('message'))).messages;
    let j = 0;
    const slicedArray = objMessage.slice(0 + n, 20 + n);
    console.log(objMessage);
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
exports.renderChat = renderChat;
function renderMessage(email, name, message, date, oneMessage) {
    const window = document.querySelector('.window');
    let temp = htmlElement_1.htmlElement.temp;
    let boolean = false;
    const elem = document.createElement('div');
    elem.dataset.darkmode = 'night';
    if (email === (0, cookie_1.getCookie)('myEmail')) {
        elem.classList.add('me');
        boolean = true;
    }
    else {
        elem.classList.add('to');
    }
    if (temp instanceof HTMLTemplateElement) {
        elem.append(temp.content.cloneNode(true));
    }
    elem.querySelector('.text').innerHTML = `${name}: ${message}`;
    elem.querySelector('.time').textContent = `${(0, formatDate_1.formatDate)(date)}`;
    if (oneMessage) {
        window.prepend(elem);
    }
    else {
        window.append(elem);
    }
}
exports.renderMessage = renderMessage;
