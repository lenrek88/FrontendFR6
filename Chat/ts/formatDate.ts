export function formatDate(date : string, format) {
    
    if (format === 'h:m') {
        const dateHours = new Date(date).getHours();
        const dateMinutes = new Date(date).getMinutes();
        const dateMinutesFormate = (dateMinutes < 10) ? `0` + dateMinutes : dateMinutes;
        const time = `${dateHours}:${dateMinutesFormate}`;

        return time;

    } else if (format === 'y-m-d') {
        const dateDay = `0${+new Date(date).getDate()}`;
        const dateMounth = `0${+new Date(date).getMonth()+1}` ;
        const dateFullYear = new Date(date).getFullYear();
        const time = `${dateFullYear}-${dateMounth}-${dateDay}`;
        console.log(time)
        return time;
    }


}