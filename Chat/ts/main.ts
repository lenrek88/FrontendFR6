import {deleteCookie, getCookie, setCookie} from "../cookie";
import {htmlElement} from "./htmlElement";
import { renderChat } from "./render";
import { renderMessage } from "./render";

// let tempCode = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImxlbnJlazg4QHlhbmRleC5ydSIsImlhdCI6MTcwNjYyMzEzNiwiZXhwIjoxNzEwMjE5NTM2fQ.Q61M4ini8HXAft_x4w3SKjZCmCMrMfMbP0cLCnjVbBY'
const code =   getCookie('code');
let socket = new WebSocket(`wss://edu.strada.one/websockets?${code}`);


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
                        mouseVisor();
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





socket.onmessage = function(event) {
    const thisMessage = JSON.parse(event.data);

    renderMessage(thisMessage.user.email, thisMessage.user.name, thisMessage.text, true);
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
        })
        .catch(error => alert(error));
    })


// РАЗОБРАТЬСЯ С ФУНКЦИЯМИ!


htmlElement.modalButtons.addEventListener('click', modalChangeName); 
    

for (let element of htmlElement.closeButtons) {
        element.addEventListener('click', function (e){
            e.preventDefault();
            htmlElement.modalSettingActive.classList.remove('active');
            htmlElement.modalAuth.classList.remove('active');
            htmlElement.modalEnter.classList.remove('active');
        });
}





 function modalChangeName(){
    htmlElement.modalSettingActive.classList.add('active');
    const inpName = document.querySelector('.inpName') as HTMLInputElement
    inpName.value = getCookie('myName') || ''

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



htmlElement.postBut.addEventListener('click', inpSendChatHandler);

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

    htmlElement.window.addEventListener('scroll', mouseVisor)


function mouseVisor() {
    if (htmlElement.window.scrollHeight - (-htmlElement.window.scrollTop) - htmlElement.window.clientHeight <= 0 ) {
        renderChat()
    }
}
