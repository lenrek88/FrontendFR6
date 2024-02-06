import { htmlElement } from "./htmlElement";
import { getCookie, setCookie } from "../cookie";
import { mouseVisor } from "./main";

export function openModalChangeName(){
    htmlElement.modalSettingActive.classList.add('active');
    if (htmlElement.inpName instanceof HTMLInputElement) {
        htmlElement.inpName.value = getCookie('myName') || ''
    }
}

export function submitUserName(e) {
    e.preventDefault();
    let userName;
    if (htmlElement.inpName instanceof HTMLInputElement) {
        userName = { name : htmlElement.inpName.value }
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
            if (htmlElement.butName.previousSibling.previousSibling instanceof HTMLInputElement)
            setCookie('myName', htmlElement.butName.previousSibling.previousSibling.value);
            htmlElement.modalSettingActive.classList.remove('active');
            mouseVisor();
                   })
    .catch(error => alert(error));

}