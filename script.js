let taskInput = document.querySelector(".task__input");
let btnAdd = document.querySelector(".btn__add");
let btnClear = document.querySelector(".btn__clear");
let display = document.querySelector(".display");
let showError = document.querySelector(".error");

// storage tasks
let arrayTasks = [];

// call getData from localStorage
getData();

// check if there are any tasks in localStorage
if (localStorage.getItem("tasks")) {
  arrayTasks = JSON.parse(localStorage.getItem("tasks"));
}

// Add task
btnAdd.addEventListener("click", function (e) {
  let valInput = taskInput.value.trim();
  // remove reload from window
  e.preventDefault();
  // check if th input not empty and length is letter than or equal 50
  if (valInput !== "" && valInput.length <= 50) {
    // add task to localStorage
    addTask(taskInput.value);
    // clear the input
    taskInput.value = "";
  }
});

let nameTask = document.querySelector(".nametask");
let checkTask = document.querySelector(".checkTask");
let allButtons = document.querySelectorAll(".row .buttons button");
let allChecks = document.querySelectorAll(".checkTask");

// loop through the buttons and add event listener
allButtons.forEach((btn) => {
  btn.addEventListener("click", function () {
    let id = btn.parentElement.parentElement.dataset.mId;
    // check if there is a button with class btn__delete
    if (btn.classList.contains("btn__delete")) {
      let ok = confirm("Are you sure you want to delete this task?");
      if (ok) {
        // check if there class thro in task and it checked
        if (nameTask.classList.contains("thro") && checkTask.checked) {
          // remove task from localStorage
          removeTask(id);
          // remove task from page
          btn.parentElement.parentElement.remove();
        }
      }
    }
    // check if there is a button with class btn__done
    if (btn.classList.contains("btn__done")) {
      btn.classList.toggle("undo");
      // get the id of the task
      let mid = btn.dataset.mId;
      // get the task
      let idM = document.getElementById(mid);
      //change the status of the task
      idM.classList.toggle("thro");
      btn.textContent == "Done"
        ? (btn.textContent = "Undo")
        : (btn.textContent = "Done");
    }
  });
});

// add tasks to array of tasks
function addTask(task) {
  // create object to save the data
  let allData = {
    id: Math.floor(Math.random() * 100),
    taskTitle: task,
  };

  // add the data to the array
  arrayTasks.push(allData);
  // create elements
  createElements(arrayTasks);
  // call function to save the data in localStorage
  saveData(arrayTasks);
  // reload for the page
  location.reload();
}

function createElements(allTasks) {
  // empty display content to void the repeated tasks
  display.innerHTML = "";
  // create the row
  allTasks.forEach((task) => {
    // declare the div
    let row = document.createElement("div");
    row.classList.add("row");
    row.setAttribute("data-m-id", task.id);
    // create the column
    row.innerHTML = `
        <div class="textTask">
            <input type="checkbox" name="Male" class="checkTask" data-ch-id="${task.id}" />
            <h2 class="nametask" id=${task.id}>${task.taskTitle}</h2>
        </div>
        <div class="buttons">
            <button class="btn btn__done" data-m-id=${task.id}>Done</button>
            <button class="btn btn__delete" data-m-id=${task.id}>Delete</button>
        </div>`;
    // display error message
    showError.style.display = "none";
    // append the row to the display
    display.appendChild(row);
    // save the data in localStorage
    saveData(allTasks);
  });
}

function saveData(allTasks) {
  localStorage.setItem("tasks", JSON.stringify(allTasks));
}

function getData() {
  let data = localStorage.getItem("tasks");
  if (data) {
    let tasks = JSON.parse(data);
    createElements(tasks);
  }
}

function removeTask(id) {
  arrayTasks = arrayTasks.filter((task) => task.id != id);
  saveData(arrayTasks);
}

// clear all the tasks
btnClear.addEventListener("click", function (e) {
  console.log(checkTask.checked);
  e.preventDefault();
  if (arrayTasks.length > 0) {
    if (checkTask.checked) {
      // remove all tasks from localStorage
      localStorage.removeItem("tasks");
      // remove all tasks from page
      display.innerHTML = "";
      // reload for the page
      location.reload();
    }
  }
});
