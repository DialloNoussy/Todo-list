let taskInput = document.querySelector(".task__input");
let btnAdd = document.querySelector(".btn__add");
let btnClear = document.querySelector(".btn__clear");
let display = document.querySelector(".display");
let showError = document.querySelector(".error");

let arrayTasks = [];

getData();

if (localStorage.getItem("tasks")) {
  arrayTasks = JSON.parse(localStorage.getItem("tasks"));
}

btnAdd.addEventListener("click", function (e) {
  let valInput = taskInput.value.trim();
  e.preventDefault();
  if (valInput !== "" && valInput.length <= 50) {
    addTask(taskInput.value);
    taskInput.value = "";
  }
});

let nameTask = document.querySelector(".nametask");
let checkTask = document.querySelector(".checkTask");
let allButtons = document.querySelectorAll(".row .buttons button");
let allChecks = document.querySelectorAll(".checkTask");

allButtons.forEach((btn) => {
  btn.addEventListener("click", function () {
    let id = btn.parentElement.parentElement.dataset.mId;
    if (btn.classList.contains("btn__delete")) {
      let ok = confirm("Are you sure you want to delete this task?");
      if (ok) {
        if (nameTask.classList.contains("thro") && checkTask.checked) {
          removeTask(id);
          btn.parentElement.parentElement.remove();
        }
      }
    }
    if (btn.classList.contains("btn__done")) {
      btn.classList.toggle("undo");
      let mid = btn.dataset.mId;
      let idM = document.getElementById(mid);
      idM.classList.toggle("thro");
      btn.textContent == "Done"
        ? (btn.textContent = "Undo")
        : (btn.textContent = "Done");
    }
  });
});

function addTask(task) {
  let allData = {
    id: Math.floor(Math.random() * 100),
    taskTitle: task,
  };

  arrayTasks.push(allData);
  createElements(arrayTasks);
  saveData(arrayTasks);
  location.reload();
}

function createElements(allTasks) {
  display.innerHTML = "";
  allTasks.forEach((task) => {
    let row = document.createElement("div");
    row.classList.add("row");
    row.setAttribute("data-m-id", task.id);
    row.innerHTML = `
        <div class="textTask">
            <input type="checkbox" name="Male" class="checkTask" data-ch-id="${task.id}" />
            <h2 class="nametask" id=${task.id}>${task.taskTitle}</h2>
        </div>
        <div class="buttons">
            <button class="btn btn__done" data-m-id=${task.id}>Done</button>
            <button class="btn btn__delete" data-m-id=${task.id}>Delete</button>
        </div>`;
    showError.style.display = "none";
    display.appendChild(row);
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

btnClear.addEventListener("click", function (e) {
  console.log(checkTask.checked);
  e.preventDefault();
  if (arrayTasks.length > 0) {
    if (checkTask.checked) {
      localStorage.removeItem("tasks");
      display.innerHTML = "";
      location.reload();
    }
  }
});
