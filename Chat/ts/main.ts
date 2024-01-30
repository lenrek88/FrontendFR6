import {deleteCookie, getCookie, setCookie} from "../cookie";
import {htmlElement} from "./htmlElement";

let tempCode = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImxlbnJlazg4QHlhbmRleC5ydSIsImlhdCI6MTcwNjYyMzEzNiwiZXhwIjoxNzEwMjE5NTM2fQ.Q61M4ini8HXAft_x4w3SKjZCmCMrMfMbP0cLCnjVbBY'
const code = tempCode || getCookie('code');
let socket = new WebSocket(`wss://edu.strada.one/websockets?${code}`);


function openSocket() {
    socket.onopen = function(e) {
        if (!code) {
            htmlElement.modalAuth.classList.add('active');
            deleteCookie('myName');
            deleteCookie('myEmail');
        } else {
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
                        deleteCookie('code');
                        deleteCookie('myName');
                        deleteCookie('myEmail');
                    }
                )
    
            fetch('https://edu.strada.one/api/user/me ', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${code}`,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json;charset=utf-8'
                }
            }).then(response => response.json())
                .then(obj => {
                    setCookie('myName', obj.name);
                })
                .catch(error => alert(error));
    
    
        }
    }
}




socket.onmessage = function(event) {
    const thisMessage = JSON.parse(event.data);

    renderMessage(thisMessage.user.email, thisMessage.user.name, thisMessage.text);
};


socket.onclose = function(event) {
    if (event.wasClean) {
        alert(`[close] Соединение закрыто чисто, код=${event.code} причина=${event.reason}`);
    } else {
        console.log('[close] Соединение прервано');
    }
};
socket.onerror = function(error) {
    alert(`[error]`);

};


document.addEventListener('DOMContentLoaded', function (){

    openSocket();

    htmlElement.exit.addEventListener('click', function(){
        deleteCookie('code');
        deleteCookie('myName');
        deleteCookie('myEmail');
        location.reload();
    })

    htmlElement.inp.addEventListener('click', function (e){
        e.preventDefault();
        if (htmlElement.email instanceof HTMLInputElement) {
            setCookie('myEmail', htmlElement.email.value);
        }
        if (htmlElement.inp instanceof HTMLButtonElement ) {
            console.log('disabled!')
            htmlElement.inp.disabled = true;
        }
        
        
        const email = { 'email': getCookie('myEmail') };
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
                console.log(obj)
                htmlElement.modalSettingActive.classList.remove('active');
                htmlElement.modalAuth.classList.remove('active');
                htmlElement.modalEnter.classList.remove('active');
                EntCode(e);
                console.log(`Куки емейл сейчас: ${getCookie('myEmail')}`)
            })
            .catch(error => alert(error));

    })

   

    htmlElement.modalButtons.addEventListener('click', modalChangeName); 
    

        for (let element of htmlElement.closeButtons) {
            element.addEventListener('click', function (e){
                e.preventDefault();
                htmlElement.modalSettingActive.classList.remove('active');
                htmlElement.modalAuth.classList.remove('active');
                htmlElement.modalEnter.classList.remove('active');
            });
        }

});



 function modalChangeName(){
    htmlElement.modalSettingActive.classList.add('active');
    const inpName = document.querySelector('.inpName') as HTMLInputElement
    inpName.value = getCookie('myName') || getCookie('myEmail') || 'Ванька';

}


const butName = htmlElement.butName ;

htmlElement.butName.addEventListener('click', entName);

function entName(e) {
    e.preventDefault();
    let userName;
    if (butName.previousSibling.previousSibling instanceof HTMLInputElement) {
        userName = { name : butName?.previousSibling?.previousSibling?.value }
    }
    const useNameJson = JSON.stringify(userName)

    fetch('https://edu.strada.one/api/user', {
        method: 'PATCH',
        headers: {
            'Authorization': `Bearer ${getCookie('code')}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: useNameJson
    }).then(response => response.json())
        .then(obj => {
            if (butName.previousSibling.previousSibling instanceof HTMLInputElement)
            setCookie('myName', butName.previousSibling.previousSibling.value);
            const modalSettingActive = document.querySelector('.modalSetting');
            modalSettingActive.classList.remove('active');
            console.log(obj.name)
            location.reload();
                   })
        .catch(error => console.log(error));

}

function EntCode(e) {
    e.preventDefault();
    console.log('Выполнилась функция EntCode')
    htmlElement.modalEnter.classList.add('active');
    const enter = document.querySelector('.enter');
    enter.addEventListener('click', codeEnt);
    openSocket();
}

function codeEnt (event){
    event.preventDefault();
    let codeEnter;
    if (htmlElement.codeEnter instanceof HTMLInputElement) {
        codeEnter = htmlElement.codeEnter.value;
    }
    setCookie('code', codeEnter)
    htmlElement.modalEnter.classList.remove('active');
    modalChangeName();

}

const post = document.querySelector('.post');
const inp = post.querySelector('button');

inp.addEventListener('click', inpSendChatHandler);

function inpSendChatHandler (e) {
    e.preventDefault();

    const message = document.querySelector('.post').querySelector('input').value;

    if (message === '') {
        alert('Сообщение не может быть пустым!')
        return;
    }

    socket.send(JSON.stringify({ text: message }));

    document.querySelector('.post').querySelector('input').value = '';
}

function renderChat() {


    let objMessage = (JSON.parse(localStorage.getItem('message'))).messages.reverse();
    let j, n = 0;
    console.log(objMessage)
    const slicedArray = objMessage.slice(280 - n, 300 - n);
    console.log(slicedArray)
    for (let value of slicedArray) {
        j++;
        renderMessage(value.user.email, value.user.name, value.text);
        // if (j > 20) break;
    }
}

function renderMessage(email, name, message) {
    const window = document.querySelector('.window');
    let temp = htmlElement.temp;
    const elem = document.createElement('div');
    if (email === getCookie('myEmail')) {
        elem.classList.add('me');
    } else {
        elem.classList.add('to');
    }
    if (temp instanceof HTMLTemplateElement) {
        elem.append(temp.content.cloneNode(true));
    }
    elem.querySelector('.text').innerHTML = `${name}: ${message}`;
    window.append(elem);
}