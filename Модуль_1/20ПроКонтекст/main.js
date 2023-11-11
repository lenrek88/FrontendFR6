const list = {
    "create a new practice task": "In Progress",
    "make a bed": "To Do",
    "write a post": "To Do",
}


const changeStatus = (taskName, status) => list[taskName] = status;

const addTask = (task) => list[task] = "To Do";

const deleteTask = (task) => delete list[task];


function showList() {

    console.log("To do:")
    for (const name in list) {
        if (list[name] === "To Do") {
            console.log(`   "${name}"`)
        }
    }

    console.log("In Progress:")
    for (const name in list) {
        if (list[name] === "In Progress") {
            console.log(`   "${name}"`)
        }
    }

    console.log("Done:")
    for (const name in list) {
        if (list[name] === "Done") {
            console.log(`   "${name}"`)
        }
    }

}


changeStatus("write a post", "Done");
addTask("have a walk");
addTask("have a walk 2");
deleteTask("have a walk");
showList();


