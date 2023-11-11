

let list = [
    {name: "create a new practice task", status: "In Progress", priority: "low"},
    {name: "make a bed", status: "To Do", priority: "low"},
    {name: "write a post", status: "To Do", priority: 'high'}
];


function changeStatus(taskName, status) {

    const index = list.findIndex(task => task.name === taskName);
    
    const findItem = list.find(element => element.name === taskName);

    findItem.status = status;

    list.splice(index, 1, findItem)
}

function addTask(task) {

    list.unshift({name: task, status: "To Do", priority: "low"})
}

function deleteTask(task) {
   list = list.filter(element => element.name !== task);
}

function showList() {

    console.log("To do:")
    for (const item of list) {
        if (item.status === "To Do") {
            console.log(`   "${item.name}"`)
        }
    }

    console.log("In Progress:")
    for (const item of list) {
        if (item.status === "In Progress") {
            console.log(`   "${item.name}"`)
        }
    }

    console.log("Done:")
    for (const item of list) {
        if (item.status === "Done") {
            console.log(`   "${item.name}"`)
        }
    }

 
}


changeStatus("write a post", "Done");
changeStatus("make a bed", "In Progress");
addTask("have a walk");
addTask("have a walk 2");
deleteTask("have a walk");
changeStatus("have a walk 2", "Done");
addTask("walk a school");

showList();
