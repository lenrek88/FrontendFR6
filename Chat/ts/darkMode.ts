import { getCookie, setCookie } from "../cookie";

function darkModeReRender(booleanDark) {
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
    let color = booleanDark === 'true' ? 'night' : 'white';

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


export function darkModeLogic() {
    
    let thisDark = getCookie('darkThemeBoolean') === 'true' ? 'true' : 'false';
    darkModeReRender(thisDark);

}

export function darkModeButtonHandler() {
    let thisDark = getCookie('darkThemeBoolean');


    if (thisDark === 'true') {
        setCookie('darkThemeBoolean', 'false')
    } else {
        setCookie('darkThemeBoolean', 'true')
    }

    darkModeLogic();

}