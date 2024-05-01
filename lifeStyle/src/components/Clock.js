import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { ClockBox, DateBox, TimeBox } from './const_UI';

function Clock() {
    const [date, setDate] = useState(new Date());

    function refreshClock() {
        setDate(new Date());
    }

    useEffect(() => {
        const timerId = setInterval(refreshClock, 1000);
        return function cleanUp() {
            clearInterval(timerId);
        };
    }, []);

    return (
        <ClockBox>
            <DateBox>{format(date, 'dd-MM-yyyy EEEE', { locale: ru })}</DateBox>
            <TimeBox>{date.toLocaleTimeString('ru-RU')}</TimeBox>
        </ClockBox>
    );
}

export default Clock;
