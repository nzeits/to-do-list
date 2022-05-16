const name = "Nicole's To Do List"
let toDos = [
    {task: 'Food shopping'},
    {task: 'Wash the sheets'}
];

function setNameInTitle(){
    const title = document.getElementById('page-title');
    title.innerText = name;
}

// function createTaskList(){
//     const ul = document.getElementById('list-tasks');
//     toDos.forEach(item => {
//         const check = document.createElement('INPUT');
//         check.setAttribute("type", "checkbox");
//         check.setAttribute("id", "checkbox")
//         const li = document.createElement('li');
//         li.innerText = item.task
//         li.appendChild(check);
//         ul.appendChild(li);
//     })
// }

function createTaskList(task){
    const ul = document.getElementById('list-tasks');
    const check = document.createElement('INPUT');
    check.setAttribute("type", "checkbox");
    check.setAttribute("id", "checkbox")
    const li = document.createElement('li');
    li.innerText = task.task
    li.appendChild(check);
    ul.appendChild(li);
}

function displayTaskList(){
    toDos.forEach(task => {
        createTaskList(task);
    })
}

function addToDoTask(){
    const task = document.getElementById('newTask');
    if(task.value == ''){
        return null;
    }
    const newTask = {
        task: task.value
    };
    toDos.push(newTask);
    createTaskList(newTask);
}

function resetToDo(){
    const input = document.querySelector('input');
    input.value = '';
}

document.addEventListener('DOMContentLoaded', () => {
    setNameInTitle();
    displayTaskList();

    const btnAddTask = document.getElementById('btnAddTask');
    btnAddTask.addEventListener('click', (event) => {
        event.preventDefault();
        addToDoTask();
        resetToDo();
    })
})