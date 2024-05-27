"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mouseVisor = exports.loadSocket = void 0;
var cookie_1 = require("../cookie");
var htmlElement_1 = require("./htmlElement");
var render_1 = require("./render");
var render_2 = require("./render");
var changeName_1 = require("./changeName");
var changeName_2 = require("./changeName");
var darkMode_1 = require("./darkMode");
var socket;
var code;
function loadSocket() {
    code = (0, cookie_1.getCookie)('code');
    socket = new WebSocket("wss://edu.strada.one/websockets?".concat(code));
}
exports.loadSocket = loadSocket;
loadSocket();
socket.onopen = function () {
    if (!code) {
        htmlElement_1.htmlElement.modalAuth.classList.add('active');
        clearCookie();
    }
    else {
        fetch('https://edu.strada.one/api/messages/', {
            method: 'GET',
            headers: {
                'Authorization': "Bearer ".concat(code)
            }
        }).then(function (response) { return response.json(); })
            .then(function (obj) {
            localStorage.setItem('message', JSON.stringify(obj));
            mouseVisor();
            (0, darkMode_1.darkModeLogic)();
        })
            .catch(function (error) {
            console.log(error);
            alert(error);
            clearCookie();
        });
        fetch('https://edu.strada.one/api/user/me ', {
            method: 'GET',
            headers: {
                'Authorization': "Bearer ".concat(code),
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=utf-8'
            }
        }).then(function (response) { return response.json(); })
            .then(function (obj) {
            (0, cookie_1.setCookie)('myName', obj.name);
        })
            .catch(function (error) { return alert(error); });
    }
};
socket.onmessage = function (event) {
    var thisMessage = JSON.parse(event.data);
    (0, render_2.renderMessage)(thisMessage.user.email, thisMessage.user.name, thisMessage.text, thisMessage.createdAt, true);
};
socket.onclose = function (event) {
    if (event.wasClean) {
        alert("[close] \u0421\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u0435 \u0437\u0430\u043A\u0440\u044B\u0442\u043E \u0447\u0438\u0441\u0442\u043E, \u043A\u043E\u0434=".concat(event.code, " \u043F\u0440\u0438\u0447\u0438\u043D\u0430=").concat(event.reason));
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
    var codeEnter;
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
    var email = { 'email': (0, cookie_1.getCookie)('myEmail') };
    var strBody = JSON.stringify(email);
    fetch('https://edu.strada.one/api/user', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: strBody
    }).then(function (response) { return response.json(); })
        .then(function (obj) {
        htmlElement_1.htmlElement.modalSettingActive.classList.remove('active');
        htmlElement_1.htmlElement.modalAuth.classList.remove('active');
        htmlElement_1.htmlElement.modalEnter.classList.remove('active');
        openModalAndAddListener();
    })
        .catch(function (error) { return alert(error); });
}
function inpSendChatHandler(e) {
    e.preventDefault();
    var message = htmlElement_1.htmlElement.postInp.value;
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
exports.mouseVisor = mouseVisor;
function clearCookie() {
    (0, cookie_1.deleteCookie)('myName');
    (0, cookie_1.deleteCookie)('myEmail');
    (0, cookie_1.deleteCookie)('code');
}
function dateSettingHandler(event) {
    event.preventDefault();
    var date = event.target[0].value;
    var messageAllTo = document.querySelectorAll('.to');
    var messageAllMe = document.querySelectorAll('.me');
    for (var _i = 0, messageAllMe_1 = messageAllMe; _i < messageAllMe_1.length; _i++) {
        var value = messageAllMe_1[_i];
        value.remove();
    }
    for (var _a = 0, messageAllTo_1 = messageAllTo; _a < messageAllTo_1.length; _a++) {
        var value = messageAllTo_1[_a];
        value.remove();
    }
    (0, cookie_1.setCookie)('thisDate', date);
    mouseVisor();
    console.log('dateSettingHandler FINISH');
}
htmlElement_1.htmlElement.window.addEventListener('scroll', mouseVisor);
htmlElement_1.htmlElement.postBut.addEventListener('click', inpSendChatHandler);
htmlElement_1.htmlElement.getCodeButton.addEventListener('click', sendConfirmationCodeEmail);
htmlElement_1.htmlElement.modalButtons.addEventListener('click', changeName_1.openModalChangeName);
htmlElement_1.htmlElement.butName.addEventListener('click', changeName_2.submitUserName);
htmlElement_1.htmlElement.darkModeButton.addEventListener('click', darkMode_1.darkModeButtonHandler);
htmlElement_1.htmlElement.dateSettingForm.addEventListener('submit', dateSettingHandler);
for (var _i = 0, _a = htmlElement_1.htmlElement.closeButtons; _i < _a.length; _i++) {
    var element = _a[_i];
    element.addEventListener('click', function (e) {
        e.preventDefault();
        htmlElement_1.htmlElement.modalSettingActive.classList.remove('active');
        htmlElement_1.htmlElement.modalAuth.classList.remove('active');
        htmlElement_1.htmlElement.modalEnter.classList.remove('active');
        loadSocket();
    });
}
