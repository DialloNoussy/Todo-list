const form = document.querySelector('form');
const taskInput = document.querySelector('.task__input');
const display = document.querySelector('.display');
const error = document.querySelector('.error');
let tasks = [];

// Fonction pour afficher les tâches
function showTasks() {
  display.innerHTML = '';
  tasks.forEach((task, index) => {
    const taskElement = document.createElement('div');
    taskElement.classList.add('task');
    taskElement.innerHTML = `
      <span>${task}</span>
      <button class="btn__main btn__delete" data-index="${index}">❌</button>
    `;
    display.appendChild(taskElement);
  });
}

// Fonction pour ajouter une tâche
function addTask(e) {
  e.preventDefault();
  if (taskInput.value === '') {
    error.style.display = 'block';
    return;
  }
  tasks.push(taskInput.value);
  taskInput.value = '';
  error.style.display = 'none';
  showTasks();
}

// Fonction pour supprimer une tâche
function deleteTask(e) {
  if (e.target.classList.contains('btn__delete')) {
    const index = e.target.dataset.index;
    tasks.splice(index, 1);
    showTasks();
  }
}

// Fonction pour effacer toutes les tâches
function clearTasks(e) {
  e.preventDefault();
  tasks = [];
  showTasks();
}

form.addEventListener('submit', addTask);
display.addEventListener('click', deleteTask);
document.querySelector('.btn__clear').addEventListener('click', clearTasks);
