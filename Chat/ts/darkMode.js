"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.darkModeButtonHandler = exports.darkModeLogic = void 0;
var cookie_1 = require("../cookie");
function darkModeReRender(booleanDark) {
    var htmlElementDarkMode = {
        modalSettingActive: document.querySelector('.modalSetting'),
        modalEnter: document.querySelector('.modalEnter'),
        modalAuth: document.querySelector('.modalAuth'),
        darkModeButton: document.querySelector('.darkModeButton'),
        bodyElement: document.querySelector('body'),
        chatElement: document.querySelector('.chat'),
        windowElement: document.querySelector('.window'),
        postElement: document.querySelector('.post'),
        meElement: document.querySelectorAll('.me'),
        toElement: document.querySelectorAll('.to'),
        timeElement: document.querySelectorAll('.time'),
        modalEnterInpElement: document.querySelector('.modalEnter').querySelector('input'),
        modalAuthInpElement: document.querySelector('.modalAuth').querySelector('input'),
        modalSettingActiveInpElement: document.querySelector('.modalSetting').querySelector('input'),
        modalEnterButElement: document.querySelector('.modalEnter').querySelector('button'),
        modalAuthButElement: document.querySelector('.modalAuth').querySelector('button'),
        modalSettingActiveButElement: document.querySelector('.modalSetting').querySelector('button'),
        buttonAll: document.querySelectorAll('button'),
        inputAll: document.querySelectorAll('input'),
    };
    var element;
    var color = booleanDark === 'true' ? 'night' : 'white';
    for (element in htmlElementDarkMode) {
        if (NodeList.prototype.isPrototypeOf(htmlElementDarkMode[element])) {
            for (var _i = 0, _a = htmlElementDarkMode[element]; _i < _a.length; _i++) {
                var value = _a[_i];
                value.dataset.darkmode = color;
            }
        }
        else {
            htmlElementDarkMode[element].dataset.darkmode = color;
        }
    }
}
function darkModeLogic() {
    var thisDark = (0, cookie_1.getCookie)('darkThemeBoolean') === 'true' ? 'true' : 'false';
    darkModeReRender(thisDark);
}
exports.darkModeLogic = darkModeLogic;
function darkModeButtonHandler() {
    var thisDark = (0, cookie_1.getCookie)('darkThemeBoolean');
    if (thisDark === 'true') {
        (0, cookie_1.setCookie)('darkThemeBoolean', 'false');
    }
    else {
        (0, cookie_1.setCookie)('darkThemeBoolean', 'true');
    }
    darkModeLogic();
}
exports.darkModeButtonHandler = darkModeButtonHandler;
