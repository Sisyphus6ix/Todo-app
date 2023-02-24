import { renderProjects, renderTasks } from "./dom";
import { projectModal, submitProject, allProjects } from "./project";
import { submitTask, taskModal } from "./task";
import { checkingTasks } from "./clear";

let projectBtn = document.getElementById("projectBtn");
let projectSubmitBtn = document.getElementById("projectSubmitBtn");
let taskBtn = document.getElementById("taskBtn");
let taskSubmitBtn = document.getElementById('taskSubmitBtn')
let clearBtn = document.getElementById('clearBtn')

// Makes project modal appear
projectBtn.addEventListener("click", () => {
  projectModal();
});

// Submit button for project modal
projectSubmitBtn.addEventListener("click", () => {
  submitProject();
  renderProjects(allProjects);
});

// Makes task modal appear
taskBtn.addEventListener("click", () => {
  taskModal()
});

// Submit button in task modal
taskSubmitBtn.addEventListener('click', () => {
  submitTask()
  renderTasks(allProjects)
})

clearBtn.addEventListener('click', () => {
  // alert('This works')
  checkingTasks(allProjects)
  renderTasks(allProjects)
})
