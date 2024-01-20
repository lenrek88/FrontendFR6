import {deleteCookie, getCookie, setCookie} from "./cookie";
let myName = '';
let myEmail = '';
myEmail = getCookie('myEmail');
const code = getCookie('code');

const socket = new WebSocket(`wss://edu.strada.one/websockets?${code}`);

socket.onopen = function(e) {
    // socket.send(JSON.stringify({ text: `qq` }));
    if (!code) {
        const modalAuth = document.querySelector('.modalAuth');
        modalAuth.classList.add('active');
    } else {
        fetch('https://edu.strada.one/api/messages/', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${code}`
            }
        }).then(response => response.json())
            .then(obj => {
                obj.messages.reverse();
                for (let value of obj.messages) {
                    renderChat(value.user.email, value.user.name, value.text);
                }
            })
            .catch(error => {
                    console.log(error);
                    deleteCookie('code');
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
                myName = obj.name;
            })
            .catch(error => alert(error));


    }
}


socket.onmessage = function(event) {
    const thisMessage = JSON.parse(event.data);

    renderChat(thisMessage.user.email, thisMessage.user.name, thisMessage.text);
};
socket.onclose = function(event) {
    if (event.wasClean) {
        alert(`[close] Соединение закрыто чисто, код=${event.code} причина=${event.reason}`);
    } else {
        // например, сервер убил процесс или сеть недоступна
        // обычно в этом случае event.code 1006
        console.log('[close] Соединение прервано');

    }
};
socket.onerror = function(error) {
    alert(`[error]`);

};


document.addEventListener('DOMContentLoaded', function (){

    // const code = getCookie('code');
    //
    // const socket = new WebSocket(`wss://edu.strada.one/websockets?${code}`);





    const modalButtons = document.querySelector('.setting');
    const closeButtons = document.querySelectorAll('.modalCross');
    const inp = document.querySelector('.code');
    
    inp.addEventListener('click', function (e){
        e.preventDefault();
        myEmail = document.querySelector('.codeInp').value;
        setCookie('myEmail', myEmail);
        const email = { 'email': document.querySelector('.codeInp').value }
        const strBody = JSON.stringify(email)

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
                const modalSettingActive = document.querySelector('.modalSetting');
                modalSettingActive.classList.remove('active');
                modalAuth.classList.remove('active');
                modalEnter.classList.remove('active');
            })
            .catch(error => alert(error));
        EntCode(e);

    })

    // ОТКРЫТИЕ НАСТРОЕК ИМЕНИ

    modalButtons.addEventListener('click', function (event){
        event.preventDefault();
        const modalId = this.getAttribute('data-modal')
        const modalElem = document.querySelector('.modalSetting[data-modal="' + modalId + '"]');
        const inpName = document.querySelector('.inpName')
        inpName.value = myName;
        modalElem.classList.add('active');
    })

        for (let element of closeButtons) {
            element.addEventListener('click', function (e){
                e.preventDefault();
                const modalSettingActive = document.querySelector('.modalSetting');
                modalSettingActive.classList.remove('active');
                modalAuth.classList.remove('active');
                modalEnter.classList.remove('active');

            });
        }

});

// ИЗМНЕНИЕ ИМЕНИ

const butName = document.querySelector('.butName');

butName.addEventListener('click', entName);

function entName(e) {
    e.preventDefault();
    const userName = { name : butName.previousSibling.previousSibling.value }
    const useNameJson = JSON.stringify(userName)
    const code = getCookie('code');

    fetch('https://edu.strada.one/api/user', {
        method: 'PATCH',
        headers: {
            'Authorization': `Bearer ${code}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: useNameJson
    }).then(response => response.json())
        .then(obj => {
            myName = butName.previousSibling.previousSibling.value;
            const modalSettingActive = document.querySelector('.modalSetting');
            modalSettingActive.classList.remove('active');
            console.log(obj.name)
        })
        .catch(error => console.log(error));

}

function EntCode(e) {
    e.preventDefault();
    const modalEnter = document.querySelector('.modalEnter');
    const modalAuth = document.querySelector('.modalAuth');
    modalAuth.classList.remove('active');
    modalEnter.classList.add('active');
    const enter = document.querySelector('.enter');
    enter.addEventListener('click', codeEnt);
}

function codeEnt (event){
    event.preventDefault();
    const codeEnter = document.querySelector('.codeEnter').value
    setCookie('code', codeEnter)
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

function renderChat(email, name, message) {

    const window = document.querySelector('.window');
    const temp = document.querySelector('.temp')
    const elem = document.createElement('div');
    if (email === myEmail) {
        elem.classList.add('me');
    } else {
        elem.classList.add('to');
    }
    elem.append(temp.content.cloneNode(true));
    elem.querySelector('.text').innerHTML = `${name}: ${message}`;
    window.append(elem);

}