// function Task(title) {
//     this.title = title;
//     this.status = 'в плане';

// }

// const task = new Task('Новая задача');

// console.log(task.title);

const sum = new Function('a', 'b', 'return a + b');
console.log(sum(2, 6)); // 8