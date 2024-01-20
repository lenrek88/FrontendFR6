document.addEventListener("DOMContentLoaded", function() {
    const overlay = document.querySelector(".overlay");
    const modalAuth = document.querySelector(".modalAuth");
    modalAuth.classList.add("active");
    overlay.classList.add("active");
    const modalButtons = document.querySelector(".setting");
    const closeButtons = document.querySelectorAll(".modalCross");
    const inp = document.querySelector(".code");
    inp.addEventListener("click", function(e) {
        e.preventDefault();
        const email = {
            "email": document.querySelector(".codeInp").value
        };
        console.log(email);
        const strBody = JSON.stringify(email);
        console.log(strBody);
        fetch("https://edu.strada.one/api/user", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json;charset=utf-8"
            },
            body: strBody
        }).then((response)=>response.json()).then((obj)=>{
            console.log(obj);
        }).catch((error)=>console.log(error));
        EntCode(e);
    });
    modalButtons.addEventListener("click", function(event) {
        event.preventDefault();
        const modalId = this.getAttribute("data-modal");
        const modalElem = document.querySelector('.modalSetting[data-modal="' + modalId + '"]');
        modalElem.classList.add("active");
        overlay.classList.add("active");
    });
    for (let element of closeButtons)element.addEventListener("click", function(e) {
        e.preventDefault();
        const overlayActive = document.querySelector(".overlay");
        const modalSettingActive = document.querySelector(".modalSetting");
        overlayActive.classList.remove("active");
        modalSettingActive.classList.remove("active");
        modalAuth.classList.remove("active");
        modalEnter.classList.remove("active");
    });
});
function EntCode(e) {
    e.preventDefault();
    const modalEnter1 = document.querySelector(".modalEnter");
    const modalAuth = document.querySelector(".modalAuth");
    modalAuth.classList.remove("active");
    modalEnter1.classList.add("active");
    const enter = document.querySelector(".enter");
    console.log(enter);
    console.dir(enter);
    enter.addEventListener("click", codeEnt);
}
function codeEnt(event) {
    event.preventDefault();
    const codeEnter = document.querySelector(".codeEnter").value;
    console.log(codeEnter);
}
const post = document.querySelector(".post");
const inp = post.querySelector("button");
inp.addEventListener("click", function(event) {
    event.preventDefault();
    const message = document.querySelector(".post").querySelector("input").value;
    if (message === "") {
        alert("Сообщение не может быть пустым!");
        return;
    }
    const window = document.querySelector(".window");
    const temp = document.querySelector(".temp");
    const elem = document.createElement("div");
    elem.classList.add("me");
    elem.append(temp.content.cloneNode(true));
    elem.querySelector(".text").innerHTML = `Я: ${message}`;
    window.append(elem);
    console.log(message);
    document.querySelector(".post").querySelector("input").value = "";
});

//# sourceMappingURL=index.c36f364e.js.map
