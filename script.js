document.addEventListener("DOMContentLoaded", () => {
  loadTasksFromLocalStorage();
  const tasksContainer = document.querySelector(".tasks");
  // add task
  const inputTask = document.querySelector("#taskInput");
  const addBtn = document.querySelector("#addBtn");
  const tasksList = document.querySelector("#tasksList");

  // function to add task to local storage

  addBtn.addEventListener("click", () => {
    const userInput = inputTask.value.trim();
    if (userInput) {
      console.log(userInput);

      addTaskToLocalStorage(userInput);
      loadTasksFromLocalStorage();
      inputTask.value = "";
    }
  });

  //task
  tasksContainer.addEventListener("click", function (event) {
    // Check if a .task was clicked (or something inside it)
    const deleteIcon = event.target.closest(".task .svg");
    if (deleteIcon) {
      // Find the parent '.task' element of the clicked icon
      const taskToRemove = deleteIcon.closest(".task");

      // Remove the entire task element from the page
      if (taskToRemove) {
        const taskText = taskToRemove.querySelector("p")?.innerText.trim();
        removeTaskFromLocalStorage(taskText);
        taskToRemove.remove();
      }
    }
    const taskElement = event.target.closest(".task");
    if (!taskElement || !tasksContainer.contains(taskElement)) return;

    if (event.target.closest(".svg")) return;

    const checkbox = taskElement.querySelector('input[type="checkbox"]');

    checkbox.checked = !checkbox.checked;

    if (checkbox.checked) {
      taskElement.classList.add("completed");
    } else {
      taskElement.classList.remove("completed");
    }
  });
});

const addTaskToLocalStorage = (newTask) => {
  const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
  tasks.unshift(newTask);
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

// create task element
const createTaskElement = (taskText) => {
  //create li
  const li = document.createElement("li");
  li.classList.add("task");

  //create p tag
  const p = document.createElement("p");
  p.textContent = taskText;

  // create img tag
  const img = document.createElement("img");
  img.src = "/xicon.svg";
  img.classList.add("svg");
  img.alt = "X";

  // create check box
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("checkbox");
  checkbox.name = "complete";

  // appending to li
  li.appendChild(p);
  li.appendChild(img);
  li.appendChild(checkbox);

  tasksList.appendChild(li);
};
// load tasks from local storage
const loadTasksFromLocalStorage = () => {
  const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
  tasksList.innerHTML = "";
  tasks.forEach((task) => {
    createTaskElement(task);
  });
};

// remove task from local storage
const removeTaskFromLocalStorage = (taskText) => {
  let tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
  tasks = tasks.filter((task) => task !== taskText);
  localStorage.setItem("tasks", JSON.stringify(tasks));
};
