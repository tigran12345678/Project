


const addButton = document.getElementById("button");
const taskInput = document.getElementById("input");
const tasklist = document.getElementById("tasklist");

function addTask(){

    let task = taskInput.value.trim();

    if(task){
      
        createTaskElement(task);
        taskInput.value = '';
    
    } else{
        alert('Please insert a task');  
    }

}

addButton.addEventListener('click', addTask);

function createTaskElement(task){
    const listItem = document.createElement('li');
    
    listItem.textContent = task;
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'X'
    deleteButton.id = 'DeleteButton';

    listItem.appendChild(deleteButton); 
    tasklist.appendChild(listItem);

    listItem.addEventListener("click", function () {
        listItem.classList.toggle("completed");
      });

    deleteButton.addEventListener('click', function(){
        tasklist.removeChild(listItem);
    });
    
}