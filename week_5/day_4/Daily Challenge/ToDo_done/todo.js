const tasks = [];
const form = document.forms[0];
let input = form.new_task_input;
const submit_btn = form.submit_input;
const listTasks = document.querySelector('.listTasks')
const clearButton = document.querySelector('.clear_btn')
let inputValue;
let taskIdCount = 0;
let xmark = '<i class="fa-solid fa-xmark"></i>'



function clearInput(){
    input.value = '';
}

function checkHeightListTasks(){
   if (tasks.length > 3){
    let height = '10px'
    height = height + '10px'
    listTasks.lastElementChild.height = heightAttrListTasks + height
   }
}




function addTask(event) {
    event.preventDefault();
    inputValue = input.value;
    let newTask = document.createElement("div");
    newTask.textContent = inputValue;
    newTask.innerHTML = `<i style="pointer-events: none" class="fa-solid fa-x fa-2xs"></i>
    <input class="me-1"" type="checkbox" name="checlbox" id="checkbox">
    <label name="checkbox">${inputValue}</label>
    `;
    tasks.push(newTask)
    listTasks.append(tasks[taskIdCount])
    taskIdCount++;
    clearInput();
}


function clearAllTasks(){
    for(let task of tasks){
        task.remove();
    }
}



