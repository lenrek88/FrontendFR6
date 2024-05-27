"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderMessage = exports.renderChat = void 0;
var htmlElement_1 = require("./htmlElement");
var cookie_1 = require("../cookie");
var formatDate_1 = require("./formatDate");
var n = 0;
var shouldLoad = true;
function renderChat() {
    if (!shouldLoad)
        return;
    var objMessage = (JSON.parse(localStorage.getItem('message'))).messages;
    console.log((0, cookie_1.getCookie)('thisDate'));
    if ((0, cookie_1.getCookie)('thisDate') !== undefined) {
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
        for (var _b = 0, objMessage_1 = objMessage; _b < objMessage_1.length; _b++) {
            var value = objMessage_1[_b];
            if ((0, formatDate_1.formatDate)(value.createdAt, 'y-m-d') === (0, cookie_1.getCookie)('thisDate')) {
                renderMessage(value.user.email, value.user.name, value.text, value.createdAt, false);
            }
            // console.log(formatDate(value.createdAt, 'y-m-d'));
        }
    }
    else {
        var j = 0;
        var slicedArray = objMessage.slice(0 + n, 20 + n);
        console.log(slicedArray);
        for (var _c = 0, slicedArray_1 = slicedArray; _c < slicedArray_1.length; _c++) {
            var value = slicedArray_1[_c];
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
exports.renderChat = renderChat;
function renderMessage(email, name, message, date, oneMessage) {
    var window = document.querySelector('.window');
    var temp = htmlElement_1.htmlElement.temp;
    var boolean = false;
    var elem = document.createElement('div');
    if (email === (0, cookie_1.getCookie)('myEmail')) {
        elem.classList.add('me');
        boolean = true;
        if ((0, cookie_1.getCookie)('darkThemeBoolean') == 'true') {
            elem.dataset.darkmode = 'night';
        }
    }
    else {
        elem.classList.add('to');
        if ((0, cookie_1.getCookie)('darkThemeBoolean') == 'true') {
            elem.dataset.darkmode = 'night';
        }
    }
    if (temp instanceof HTMLTemplateElement) {
        elem.append(temp.content.cloneNode(true));
    }
    elem.querySelector('.text').innerHTML = "".concat(name, ": ").concat(message);
    elem.querySelector('.time').textContent = "".concat((0, formatDate_1.formatDate)(date, 'h:m'));
    if (oneMessage) {
        window.prepend(elem);
    }
    else {
        window.append(elem);
    }
}
exports.renderMessage = renderMessage;
