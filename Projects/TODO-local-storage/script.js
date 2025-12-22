// grab input field box
const todoInput = document.getElementById("todo-input");

// grab the add task button
const addTaskButton = document.getElementById('add-task-btn')

// grab the actual list where the elements will be stored
const todoList = document.getElementById('todo-list')

let tasks = [] // array where the task will be stored

// add button logic
addTaskButton.addEventListener('click', function(){
   const taskText = todoInput.value.trim()
   if (taskText === "") return; // exit program if user clicks add without any task (text)

   const newTask = { 
      id: Date.now(), 
      text: taskText, 
      completed: false 
   }

   tasks.push(newTask)

   todoInput.value = ""; //clear input

   console.log(tasks)
})
