let userName = prompt('Введите логин', '');
if (userName === 'Админ') {
    const password = prompt('Введите пароль');
    if (password === 'Я главный') {
        alert('Здравствуйте!')
    } else if (password === null || password === '') {
        alert('Отменено')
    } else {
        alert('Неверный пароль')
    }
} else if (userName === null || userName === '') {
    alert('Отменено');
} else {
    alert('Я вас не знаю');
}