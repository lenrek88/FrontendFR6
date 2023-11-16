let list = [

];

const formHigh = document.querySelector('.formHigh');
const formLow = document.querySelector('.formLow');



function formHandler(e) {
    e.preventDefault();

    const thisValue = e.target.firstElementChild.value;
    e.target.firstElementChild.value = '';

    const thisPriority = e.target.className === 'formHigh' ? 'high' : 'low';

    addTask(thisValue, thisPriority);
}


formHigh.addEventListener('submit', formHandler);
formLow.addEventListener('submit', formHandler);



function changeStatus(event) {

    const thisTaskName = (event.target.nextElementSibling.textContent);
    
    console.log(event.target.checked);
    
    event.target.checked = !event.target.checked;

    console.log(event.target.checked)

    const index = list.findIndex(task => task.name === thisTaskName);
    
    const findItem = list.find(element => element.name === thisTaskName);

    console.log(index, findItem)

    findItem.status = findItem.status === "To Do" ? "Done" : "To Do";

    list.splice(index, 1, findItem);

    renderUi();

}

function addTask(task, priority) {

    list.unshift({name: task, status: "To Do", priority: priority});

    renderUi();
}

function deleteTask(event) {

    const thisTaskName = event.target.previousSibling.textContent;
    list = list.filter(element => element.name !== thisTaskName);

    renderUi();

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

function renderUi() {

    const highBlock = document.querySelector('.HIGH');
    const lowBlock = document.querySelector('.LOW');

    const mainFormAll = document.querySelectorAll('.mainForm');

    mainFormAll.forEach((i) => {
        i.remove();
    })
    list.forEach((item) => {

       
    
        const newBlock = document.createElement('form');
        const newCheckBox = document.createElement('input');
        const newP = document.createElement('p');
        const newCloseIcon = document.createElement('img');
    
        newBlock.classList.add('mainForm');
        newCheckBox.type='checkbox';
        newCheckBox.checked = item.status === "To Do" ? false : true;

        newCheckBox.addEventListener('click', changeStatus);

        newP.textContent = item.name;
        newCloseIcon.src='close-icon.svg';
        
        newCloseIcon.addEventListener('click', deleteTask);
    
        newBlock.appendChild(newCheckBox);
        newBlock.appendChild(newP);
        newBlock.appendChild(newCloseIcon);

        if (item.priority === 'high') {
            highBlock.appendChild(newBlock);
        } else if(item.priority === 'low') {
            lowBlock.appendChild(newBlock);
        }
    
    })
}



<!--            <form class="mainForm">-->
<!--                <input type="checkbox">-->
<!--                <p>TEXT</p>-->
<!--                <img src="close-icon.svg">-->
<!--            </form>-->