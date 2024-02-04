"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDate = void 0;
function formatDate(date) {
    const dateHours = new Date(date).getHours();
    const dateMinutes = new Date(date).getMinutes();
    const dateMinutesFormate = (dateMinutes < 10) ? `0` + dateMinutes : dateMinutes;
    const time = `${dateHours}:${dateMinutesFormate}`;
    return time;
}
exports.formatDate = formatDate;
