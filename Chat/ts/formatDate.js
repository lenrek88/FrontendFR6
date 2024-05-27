"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDate = void 0;
function formatDate(date, format) {
    if (format === 'h:m') {
        var dateHours = new Date(date).getHours();
        var dateMinutes = new Date(date).getMinutes();
        var dateMinutesFormate = (dateMinutes < 10) ? "0" + dateMinutes : dateMinutes;
        var time = "".concat(dateHours, ":").concat(dateMinutesFormate);
        return time;
    }
    else if (format === 'y-m-d') {
        var dateDay = new Date(date).getDate() < 10 ? "0".concat(+new Date(date).getDate()) : new Date(date).getDate();
        var dateMounth = new Date(date).getDate() < 10 ? "0".concat(+new Date(date).getMonth() + 1) : new Date(date).getDate();
        var dateFullYear = new Date(date).getFullYear();
        var time = "".concat(dateFullYear, "-").concat(dateMounth, "-").concat(dateDay);
        console.log(time);
        return time;
    }
}
exports.formatDate = formatDate;
