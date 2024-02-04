import { getCookie, deleteCookie, setCookie } from "../cookie";

export function darkModeButtonHandler() {


    let thisDark = getCookie('darkThemeBoolean') ? getCookie('darkThemeBoolean') : false;

    const htmlElementDarkMode = {
        modalSettingActive : document.querySelector('.modalSetting'),
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
        modalSettingActiveInpElement : document.querySelector('.modalSetting').querySelector('input'),
        modalEnterButElement: document.querySelector('.modalEnter').querySelector('button'),
        modalAuthButElement: document.querySelector('.modalAuth').querySelector('button'),
        modalSettingActiveButElement : document.querySelector('.modalSetting').querySelector('button'),
        buttonAll: document.querySelectorAll('button'),
        inputAll: document.querySelectorAll('input'),

    }

    let element : any;
    let color : string;

    console.log(thisDark)

    if (thisDark == "true") {
        setCookie('darkThemeBoolean', false);
        color = 'white';
        console.log('Я В ТРУ')

    } else {
        setCookie('darkThemeBoolean', true);
        color = 'night';
        console.log('Я В FALSE')

    }

    for (element in htmlElementDarkMode) {
        if (NodeList.prototype.isPrototypeOf(htmlElementDarkMode[element])){
            for (let value of htmlElementDarkMode[element]) {
                value.dataset.darkmode = color;
            }
        } else {
            htmlElementDarkMode[element].dataset.darkmode = color;
        }
    }
}