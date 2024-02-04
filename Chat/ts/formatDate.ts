export function formatDate(date : string) {
    
    const dateHours = new Date(date).getHours();
    const dateMinutes = new Date(date).getMinutes();
    const dateMinutesFormate = (dateMinutes < 10) ? `0` + dateMinutes : dateMinutes;
    const time = `${dateHours}:${dateMinutesFormate}`;

    return time;
}