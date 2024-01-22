type massivObject = {
    name: string;
    status: string;
    priority: string;
}

interface task{
    task: string;
    priority: string;
}

let list: massivObject[] = [

];

const formHigh = document.querySelector('.formHigh');
const formLow = document.querySelector('.formLow');



function formHandler(e) {
    e.preventDefault();


    try {
         const thisValue = e.target.firstElementChild.value;
         if (typeof thisValue !== 'string') {
            throw new Error('Ошибка: значение не является строкой');
        }
        if (thisValue === '') {
            throw new Error('Ошибка: пустая строка');
        }
        if (thisValue.length < 3 || thisValue.length > 30) {
            throw new Error('Ошибка: короткая или длинная строка');
        }
    
    
        e.target.firstElementChild.value = '';
    
        const thisPriority = e.target.className === 'formHigh' ? 'high' : 'low';
    
        addTask(thisValue, thisPriority);
        } catch(e) {
         alert(e);
    }
   
}


formHigh.addEventListener('submit', formHandler);
formLow.addEventListener('submit', formHandler);



function changeStatus(event) {

    const thisTaskName = (event.target.nextElementSibling.textContent);
    
    
    event.target.checked = !event.target.checked;


    const index: any = list.findIndex(task => task.name === thisTaskName);
    
    const findItem: any = list.find(element => element.name === thisTaskName);


    findItem.status = findItem.status === "To Do" ? "Done" : "To Do";

    list.splice(index, 1, findItem);

    renderUi();

}


function Task(name, status, priority) {
    this.name = name;
    this.status = status;
    this.priority = priority;
}

const addTask = (task: string, priority: string) => {
    list.unshift( new Task(task, "To Do", priority) );

    renderUi();
}

const deleteTask = (event) => {

    const thisTaskName = event.target.previousSibling.textContent;
    list = list.filter(element => element.name !== thisTaskName);

    renderUi();

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
    console.log(list)
}
