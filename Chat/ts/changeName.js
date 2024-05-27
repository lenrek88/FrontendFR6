"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.submitUserName = exports.openModalChangeName = void 0;
var htmlElement_1 = require("./htmlElement");
var cookie_1 = require("../cookie");
var main_1 = require("./main");
function openModalChangeName() {
    htmlElement_1.htmlElement.modalSettingActive.classList.add('active');
    if (htmlElement_1.htmlElement.inpName instanceof HTMLInputElement) {
        htmlElement_1.htmlElement.inpName.value = (0, cookie_1.getCookie)('myName') || '';
    }
}
exports.openModalChangeName = openModalChangeName;
function submitUserName(e) {
    e.preventDefault();
    var userName;
    if (htmlElement_1.htmlElement.inpName instanceof HTMLInputElement) {
        userName = { name: htmlElement_1.htmlElement.inpName.value };
    }
    var useNameJson = JSON.stringify(userName);
    fetch('https://edu.strada.one/api/user', {
        method: 'PATCH',
        headers: {
            'Authorization': "Bearer ".concat((0, cookie_1.getCookie)('code')),
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: useNameJson
    }).then(function (response) { return response.json(); })
        .then(function (obj) {
        if (htmlElement_1.htmlElement.butName.previousSibling.previousSibling instanceof HTMLInputElement)
            (0, cookie_1.setCookie)('myName', htmlElement_1.htmlElement.butName.previousSibling.previousSibling.value);
        htmlElement_1.htmlElement.modalSettingActive.classList.remove('active');
        (0, main_1.mouseVisor)();
    })
        .catch(function (error) { return alert(error); });
}
exports.submitUserName = submitUserName;
