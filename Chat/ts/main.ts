import { deleteCookie, getCookie, setCookie } from "../cookie";
import { htmlElement } from "./htmlElement";
import { renderChat } from "./render";
import { renderMessage } from "./render";
import { openModalChangeName } from "./changeName";
import { submitUserName } from "./changeName";
import { darkModeButtonHandler } from "./darkMode"

let tempCode = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImxlbnJlazg4QHlhbmRleC5ydSIsImlhdCI6MTcwNjYyMzEzNiwiZXhwIjoxNzEwMjE5NTM2fQ.Q61M4ini8HXAft_x4w3SKjZCmCMrMfMbP0cLCnjVbBY'
const code = tempCode || getCookie('code');
let socket = new WebSocket(`wss://edu.strada.one/websockets?${code}`);

socket.onopen = function() {
        if (!code) {
            htmlElement.modalAuth.classList.add('active');
            clearCookie();
        } else {
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

type itemMessageObject = {
    email: string;
    name: string;
}

type MessageObject = {
    user: itemMessageObject;
    text: string;
    createdAt: string;
}

socket.onmessage = function(event) {
    const thisMessage: MessageObject = JSON.parse(event.data);
    renderMessage(thisMessage.user.email, thisMessage.user.name, thisMessage.text, thisMessage.createdAt, true);
};

socket.onclose = function(event) {
    if (event.wasClean) {
        alert(`[close] Соединение закрыто чисто, код=${event.code} причина=${event.reason}`);
    } else {
        alert('[close] Соединение прервано');
    }
};

socket.onerror = function(error) {
    alert(error);
};

htmlElement.exit.addEventListener('click', function(){
    clearCookie();
    location.reload();
})

function openModalAndAddListener() {
    htmlElement.modalEnter.classList.add('active');
    htmlElement.enter.addEventListener('click', saveCodeCookie);
}

function saveCodeCookie (e){
    e.preventDefault();
    let codeEnter;
    if (htmlElement.codeEnter instanceof HTMLInputElement) {
        codeEnter = htmlElement.codeEnter.value;
    }
    setCookie('code', codeEnter)
    htmlElement.modalEnter.classList.remove('active');
    openModalChangeName();
}

function sendConfirmationCodeEmail() {
    if (htmlElement.email instanceof HTMLInputElement) {
        setCookie('myEmail', htmlElement.email.value);
    }
    if (htmlElement.getCodeButton instanceof HTMLButtonElement ) {
       htmlElement.getCodeButton.disabled = true;
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
            htmlElement.modalSettingActive.classList.remove('active');
            htmlElement.modalAuth.classList.remove('active');
            htmlElement.modalEnter.classList.remove('active');
            openModalAndAddListener();
        })
    .catch(error => alert(error));
}


function inpSendChatHandler (e) {
    e.preventDefault();

    const message = htmlElement.postInp.value;
    if (message === '') {
        alert('Сообщение не может быть пустым!')
        return;
    }
    socket.send(JSON.stringify({ text: message }));
    htmlElement.postInp.value = '';
}


function mouseVisor() {
    if (htmlElement.window.scrollHeight - (-htmlElement.window.scrollTop) - htmlElement.window.clientHeight <= 0 ) {
        renderChat()
    }
}

function clearCookie() {
    deleteCookie('myName');
    deleteCookie('myEmail');
    deleteCookie('code');
}

htmlElement.window.addEventListener('scroll', mouseVisor)
htmlElement.postBut.addEventListener('click', inpSendChatHandler);
htmlElement.getCodeButton.addEventListener('click', sendConfirmationCodeEmail);
htmlElement.modalButtons.addEventListener('click', openModalChangeName); 
htmlElement.butName.addEventListener('click', submitUserName);
htmlElement.darkModeButton.addEventListener('click', darkModeButtonHandler)

for (let element of htmlElement.closeButtons) {
        element.addEventListener('click', function (e){
            e.preventDefault();
            htmlElement.modalSettingActive.classList.remove('active');
            htmlElement.modalAuth.classList.remove('active');
            htmlElement.modalEnter.classList.remove('active');
            location.reload();

        });
}