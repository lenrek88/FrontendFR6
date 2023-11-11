const toDoList = ['Убраться в квартире', 'Помыть машину', 'Сделать домашнее задание'];

toDoList.unshift('Посадить цветы');

toDoList.pop();

toDoList.splice(1,1, 'Убраться во дворе')

for (const task of toDoList) {
    console.log(task);
}

