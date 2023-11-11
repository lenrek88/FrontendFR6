// let list = [
//     {name: "create a new practice task", status: "In Progress", priority: "low"},
//     {name: "make a bed", status: "To Do", priority: "low"},
//     {name: "write a post", status: "To Do", priority: 'high'}
// ];

const STATUS = {
    IN_PROGRESS: 'In progress',
    DONE: 'Done',
}

const PRIORITY = {
    HIGH: 'high',
    LOW: 'low',
}

let taskList = [
    {name: 'test1', status: STATUS.IN_PROGRESS, priority: PRIORITY.HIGH},
    {name: 'test2', status: STATUS.DONE, priority: PRIORITY.LOW},
    {name: 'test3', status: STATUS.IN_PROGRESS, priority: PRIORITY.HIGH},
]



function changeStatus(taskName, status) {

    const index = taskList.findIndex(task => task.name === taskName);
    
    const findItem = taskList.find(element => element.name === taskName);

    findItem.status = status;

    taskList.splice(index, 1, findItem)
}

function addTask(task) {

    taskList.unshift({name: task, status: STATUS.IN_PROGRESS, priority: PRIORITY.HIGH})
}

function deleteTask(task) {
    taskList = taskList.filter(element => element.name !== task);
}

// function showList() {


//     console.log("In Progress:")
//     for (const item of taskList) {
//         if (item.status === "In progress") {
//             console.log(`   "${item.name}"`)
//         }
//     }

//     console.log("Done:")
//     for (const item of taskList) {
//         if (item.status === "Done") {
//             console.log(`   "${item.name}"`)
//         }
//     }
 
// }

function showSortTask(sortName){ 
    if (sortName === 'priority') {
        for (const name in PRIORITY) {
            let counter = 0;
            console.log(`${name}:`);
            taskList.forEach((task) => {
                if (task.priority === PRIORITY[name]) {
                    console.log(task);
                    counter++;
                } 
               
            })
            if (counter === 0) {
                console.log('-')
            }
        }
    } else if (sortName === 'status') {
        for (const name in STATUS) {
            let counter = 0;
            console.log(`${name}:`);
            taskList.forEach((task) => {
                if (task.status === STATUS[name]) {
                    console.log(task);
                    counter++;
                }
            })
            if (counter === 0) {
                console.log('-');
            }
        }
    } else {
        console.log('Неизвестный параметр для сортировки')
    }
    
   
}


addTask("have a walk");
addTask("have a walk 2");
addTask("eat food");
deleteTask("have a walk");
changeStatus("have a walk 2", "Done");
addTask("walk a school");

// showList();
showSortTask('priority');

