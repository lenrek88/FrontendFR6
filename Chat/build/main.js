"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cookie_1 = require("../cookie");
const htmlElement_1 = require("./htmlElement");
let tempCode = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImxlbnJlazg4QHlhbmRleC5ydSIsImlhdCI6MTcwNjYyMzEzNiwiZXhwIjoxNzEwMjE5NTM2fQ.Q61M4ini8HXAft_x4w3SKjZCmCMrMfMbP0cLCnjVbBY';
const code = tempCode || (0, cookie_1.getCookie)('code');
let socket = new WebSocket(`wss://edu.strada.one/websockets?${code}`);
function openSocket() {
    socket.onopen = function (e) {
        if (!code) {
            htmlElement_1.htmlElement.modalAuth.classList.add('active');
            (0, cookie_1.deleteCookie)('myName');
            (0, cookie_1.deleteCookie)('myEmail');
        }
        else {
            fetch('https://edu.strada.one/api/messages/', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${code}`
                }
            }).then(response => response.json())
                .then(obj => {
                localStorage.setItem('message', JSON.stringify(obj));
                renderChat();
            })
                .catch(error => {
                console.log(error);
                (0, cookie_1.deleteCookie)('code');
                (0, cookie_1.deleteCookie)('myName');
                (0, cookie_1.deleteCookie)('myEmail');
            });
            fetch('https://edu.strada.one/api/user/me ', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${code}`,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json;charset=utf-8'
                }
            }).then(response => response.json())
                .then(obj => {
                (0, cookie_1.setCookie)('myName', obj.name);
            })
                .catch(error => alert(error));
        }
    };
}
socket.onmessage = function (event) {
    const thisMessage = JSON.parse(event.data);
    renderMessage(thisMessage.user.email, thisMessage.user.name, thisMessage.text);
};
socket.onclose = function (event) {
    if (event.wasClean) {
        alert(`[close] Соединение закрыто чисто, код=${event.code} причина=${event.reason}`);
    }
    else {
        console.log('[close] Соединение прервано');
    }
};
socket.onerror = function (error) {
    alert(`[error]`);
};
document.addEventListener('DOMContentLoaded', function () {
    openSocket();
    htmlElement_1.htmlElement.exit.addEventListener('click', function () {
        (0, cookie_1.deleteCookie)('code');
        (0, cookie_1.deleteCookie)('myName');
        (0, cookie_1.deleteCookie)('myEmail');
        location.reload();
    });
    htmlElement_1.htmlElement.inp.addEventListener('click', function (e) {
        e.preventDefault();
        if (htmlElement_1.htmlElement.email instanceof HTMLInputElement) {
            (0, cookie_1.setCookie)('myEmail', htmlElement_1.htmlElement.email.value);
        }
        if (htmlElement_1.htmlElement.inp instanceof HTMLButtonElement) {
            console.log('disabled!');
            htmlElement_1.htmlElement.inp.disabled = true;
        }
        const email = { 'email': (0, cookie_1.getCookie)('myEmail') };
        const strBody = JSON.stringify(email);
        fetch('https://edu.strada.one/api/user', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: strBody
        }).then(response => response.json())
            .then(obj => {
            console.log(obj);
            htmlElement_1.htmlElement.modalSettingActive.classList.remove('active');
            htmlElement_1.htmlElement.modalAuth.classList.remove('active');
            htmlElement_1.htmlElement.modalEnter.classList.remove('active');
            EntCode(e);
            console.log(`Куки емейл сейчас: ${(0, cookie_1.getCookie)('myEmail')}`);
        })
            .catch(error => alert(error));
    });
    htmlElement_1.htmlElement.modalButtons.addEventListener('click', modalChangeName);
    for (let element of htmlElement_1.htmlElement.closeButtons) {
        element.addEventListener('click', function (e) {
            e.preventDefault();
            htmlElement_1.htmlElement.modalSettingActive.classList.remove('active');
            htmlElement_1.htmlElement.modalAuth.classList.remove('active');
            htmlElement_1.htmlElement.modalEnter.classList.remove('active');
        });
    }
});
function modalChangeName() {
    htmlElement_1.htmlElement.modalSettingActive.classList.add('active');
    const inpName = document.querySelector('.inpName');
    inpName.value = (0, cookie_1.getCookie)('myName') || (0, cookie_1.getCookie)('myEmail') || 'Ванька';
}
const butName = htmlElement_1.htmlElement.butName;
htmlElement_1.htmlElement.butName.addEventListener('click', entName);
function entName(e) {
    var _a, _b;
    e.preventDefault();
    let userName;
    if (butName.previousSibling.previousSibling instanceof HTMLInputElement) {
        userName = { name: (_b = (_a = butName === null || butName === void 0 ? void 0 : butName.previousSibling) === null || _a === void 0 ? void 0 : _a.previousSibling) === null || _b === void 0 ? void 0 : _b.value };
    }
    const useNameJson = JSON.stringify(userName);
    fetch('https://edu.strada.one/api/user', {
        method: 'PATCH',
        headers: {
            'Authorization': `Bearer ${(0, cookie_1.getCookie)('code')}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: useNameJson
    }).then(response => response.json())
        .then(obj => {
        if (butName.previousSibling.previousSibling instanceof HTMLInputElement)
            (0, cookie_1.setCookie)('myName', butName.previousSibling.previousSibling.value);
        const modalSettingActive = document.querySelector('.modalSetting');
        modalSettingActive.classList.remove('active');
        console.log(obj.name);
        location.reload();
    })
        .catch(error => console.log(error));
}
function EntCode(e) {
    e.preventDefault();
    console.log('Выполнилась функция EntCode');
    htmlElement_1.htmlElement.modalEnter.classList.add('active');
    const enter = document.querySelector('.enter');
    enter.addEventListener('click', codeEnt);
    openSocket();
}
function codeEnt(event) {
    event.preventDefault();
    let codeEnter;
    if (htmlElement_1.htmlElement.codeEnter instanceof HTMLInputElement) {
        codeEnter = htmlElement_1.htmlElement.codeEnter.value;
    }
    (0, cookie_1.setCookie)('code', codeEnter);
    htmlElement_1.htmlElement.modalEnter.classList.remove('active');
    modalChangeName();
}
const post = document.querySelector('.post');
const inp = post.querySelector('button');
inp.addEventListener('click', inpSendChatHandler);
function inpSendChatHandler(e) {
    e.preventDefault();
    const message = document.querySelector('.post').querySelector('input').value;
    if (message === '') {
        alert('Сообщение не может быть пустым!');
        return;
    }
    socket.send(JSON.stringify({ text: message }));
    document.querySelector('.post').querySelector('input').value = '';
}
htmlElement_1.htmlElement.window.addEventListener('scroll', mouseVisor);
let n = 0;
let shouldLoad = true;
function mouseVisor() {
    if (htmlElement_1.htmlElement.window.scrollHeight - (-htmlElement_1.htmlElement.window.scrollTop) - htmlElement_1.htmlElement.window.clientHeight <= 0) {
        renderChat();
    }
}
function renderChat() {
    if (!shouldLoad)
        return;
    let objMessage = (JSON.parse(localStorage.getItem('message'))).messages;
    let j = 0;
    const slicedArray = objMessage.slice(0 + n, 20 + n);
    for (let value of slicedArray) {
        j++;
        renderMessage(value.user.email, value.user.name, value.text);
        if (j == 20) {
            n = n + 20;
        }
        if (n == 280) {
            alert('Вся история загружена');
            shouldLoad = false;
        }
    }
}
function renderMessage(email, name, message) {
    const window = document.querySelector('.window');
    let temp = htmlElement_1.htmlElement.temp;
    const elem = document.createElement('div');
    if (email === (0, cookie_1.getCookie)('myEmail')) {
        elem.classList.add('me');
    }
    else {
        elem.classList.add('to');
    }
    if (temp instanceof HTMLTemplateElement) {
        elem.append(temp.content.cloneNode(true));
    }
    elem.querySelector('.text').innerHTML = `${name}: ${message}`;
    window.append(elem);
}
