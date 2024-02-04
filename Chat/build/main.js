"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cookie_1 = require("../cookie");
const htmlElement_1 = require("./htmlElement");
const render_1 = require("./render");
const render_2 = require("./render");
const changeName_1 = require("./changeName");
const changeName_2 = require("./changeName");
const darkMode_1 = require("./darkMode");
let tempCode = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImxlbnJlazg4QHlhbmRleC5ydSIsImlhdCI6MTcwNjYyMzEzNiwiZXhwIjoxNzEwMjE5NTM2fQ.Q61M4ini8HXAft_x4w3SKjZCmCMrMfMbP0cLCnjVbBY';
const code = tempCode || (0, cookie_1.getCookie)('code');
let socket = new WebSocket(`wss://edu.strada.one/websockets?${code}`);
socket.onopen = function () {
    if (!code) {
        htmlElement_1.htmlElement.modalAuth.classList.add('active');
        clearCookie();
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
            mouseVisor();
        })
            .catch(error => {
            console.log(error);
            alert(error);
            clearCookie();
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
socket.onmessage = function (event) {
    const thisMessage = JSON.parse(event.data);
    (0, render_2.renderMessage)(thisMessage.user.email, thisMessage.user.name, thisMessage.text, thisMessage.createdAt, true);
};
socket.onclose = function (event) {
    if (event.wasClean) {
        alert(`[close] Соединение закрыто чисто, код=${event.code} причина=${event.reason}`);
    }
    else {
        alert('[close] Соединение прервано');
    }
};
socket.onerror = function (error) {
    alert(error);
};
htmlElement_1.htmlElement.exit.addEventListener('click', function () {
    clearCookie();
    location.reload();
});
function openModalAndAddListener() {
    htmlElement_1.htmlElement.modalEnter.classList.add('active');
    htmlElement_1.htmlElement.enter.addEventListener('click', saveCodeCookie);
}
function saveCodeCookie(e) {
    e.preventDefault();
    let codeEnter;
    if (htmlElement_1.htmlElement.codeEnter instanceof HTMLInputElement) {
        codeEnter = htmlElement_1.htmlElement.codeEnter.value;
    }
    (0, cookie_1.setCookie)('code', codeEnter);
    htmlElement_1.htmlElement.modalEnter.classList.remove('active');
    (0, changeName_1.openModalChangeName)();
}
function sendConfirmationCodeEmail() {
    if (htmlElement_1.htmlElement.email instanceof HTMLInputElement) {
        (0, cookie_1.setCookie)('myEmail', htmlElement_1.htmlElement.email.value);
    }
    if (htmlElement_1.htmlElement.getCodeButton instanceof HTMLButtonElement) {
        htmlElement_1.htmlElement.getCodeButton.disabled = true;
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
        htmlElement_1.htmlElement.modalSettingActive.classList.remove('active');
        htmlElement_1.htmlElement.modalAuth.classList.remove('active');
        htmlElement_1.htmlElement.modalEnter.classList.remove('active');
        openModalAndAddListener();
    })
        .catch(error => alert(error));
}
function inpSendChatHandler(e) {
    e.preventDefault();
    const message = htmlElement_1.htmlElement.postInp.value;
    if (message === '') {
        alert('Сообщение не может быть пустым!');
        return;
    }
    socket.send(JSON.stringify({ text: message }));
    htmlElement_1.htmlElement.postInp.value = '';
}
function mouseVisor() {
    if (htmlElement_1.htmlElement.window.scrollHeight - (-htmlElement_1.htmlElement.window.scrollTop) - htmlElement_1.htmlElement.window.clientHeight <= 0) {
        (0, render_1.renderChat)();
    }
}
function clearCookie() {
    (0, cookie_1.deleteCookie)('myName');
    (0, cookie_1.deleteCookie)('myEmail');
    (0, cookie_1.deleteCookie)('code');
}
htmlElement_1.htmlElement.window.addEventListener('scroll', mouseVisor);
htmlElement_1.htmlElement.postBut.addEventListener('click', inpSendChatHandler);
htmlElement_1.htmlElement.getCodeButton.addEventListener('click', sendConfirmationCodeEmail);
htmlElement_1.htmlElement.modalButtons.addEventListener('click', changeName_1.openModalChangeName);
htmlElement_1.htmlElement.butName.addEventListener('click', changeName_2.submitUserName);
htmlElement_1.htmlElement.darkModeButton.addEventListener('click', darkMode_1.darkModeButtonHandler);
for (let element of htmlElement_1.htmlElement.closeButtons) {
    element.addEventListener('click', function (e) {
        e.preventDefault();
        htmlElement_1.htmlElement.modalSettingActive.classList.remove('active');
        htmlElement_1.htmlElement.modalAuth.classList.remove('active');
        htmlElement_1.htmlElement.modalEnter.classList.remove('active');
        location.reload();
    });
}
