"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cookie_1 = require("../cookie");
const htmlElement_1 = require("./htmlElement");
const render_1 = require("./render");
const render_2 = require("./render");
// let tempCode = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImxlbnJlazg4QHlhbmRleC5ydSIsImlhdCI6MTcwNjYyMzEzNiwiZXhwIjoxNzEwMjE5NTM2fQ.Q61M4ini8HXAft_x4w3SKjZCmCMrMfMbP0cLCnjVbBY'
const code = (0, cookie_1.getCookie)('code');
let socket = new WebSocket(`wss://edu.strada.one/websockets?${code}`);
function clearCookie() {
    (0, cookie_1.deleteCookie)('myName');
    (0, cookie_1.deleteCookie)('myEmail');
    (0, cookie_1.deleteCookie)('code');
}
socket.onopen = function (e) {
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
    (0, render_2.renderMessage)(thisMessage.user.email, thisMessage.user.name, thisMessage.text, true);
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
htmlElement_1.htmlElement.exit.addEventListener('click', function () {
    clearCookie();
    location.reload();
});
function entCode() {
    htmlElement_1.htmlElement.modalEnter.classList.add('active');
    htmlElement_1.htmlElement.enter.addEventListener('click', codeEnt);
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
        entCode();
        console.log(obj);
    })
        .catch(error => alert(error));
}
htmlElement_1.htmlElement.getCodeButton.addEventListener('click', sendConfirmationCodeEmail);
htmlElement_1.htmlElement.modalButtons.addEventListener('click', modalChangeName);
for (let element of htmlElement_1.htmlElement.closeButtons) {
    element.addEventListener('click', function (e) {
        e.preventDefault();
        htmlElement_1.htmlElement.modalSettingActive.classList.remove('active');
        htmlElement_1.htmlElement.modalAuth.classList.remove('active');
        htmlElement_1.htmlElement.modalEnter.classList.remove('active');
        location.reload();
    });
}
function modalChangeName() {
    htmlElement_1.htmlElement.modalSettingActive.classList.add('active');
    if (htmlElement_1.htmlElement.inpName instanceof HTMLInputElement) {
        htmlElement_1.htmlElement.inpName.value = (0, cookie_1.getCookie)('myName') || '';
    }
}
const butName = htmlElement_1.htmlElement.butName;
htmlElement_1.htmlElement.butName.addEventListener('click', entName);
function entName(e) {
    e.preventDefault();
    let userName;
    if (htmlElement_1.htmlElement.inpName instanceof HTMLInputElement) {
        userName = { name: htmlElement_1.htmlElement.inpName.value };
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
        htmlElement_1.htmlElement.modalSettingActive.classList.remove('active');
        location.reload();
    })
        .catch(error => console.log(error));
}
htmlElement_1.htmlElement.postBut.addEventListener('click', inpSendChatHandler);
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
htmlElement_1.htmlElement.window.addEventListener('scroll', mouseVisor);
function mouseVisor() {
    if (htmlElement_1.htmlElement.window.scrollHeight - (-htmlElement_1.htmlElement.window.scrollTop) - htmlElement_1.htmlElement.window.clientHeight <= 0) {
        (0, render_1.renderChat)();
    }
}
