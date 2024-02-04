"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.darkModeButtonHandler = void 0;
const htmlElement_1 = require("./htmlElement");
function darkModeButtonHandler() {
    let element;
    for (element in htmlElement_1.htmlElement) {
        console.dir(element);
        element.dataset.darkmode = 'mir';
    }
}
exports.darkModeButtonHandler = darkModeButtonHandler;
