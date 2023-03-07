import { projectModal, submitProject, closeProjectModal } from "./project";
import { submitTask, taskModal, closeTaskModal } from "./task";
import { getSelectedProject, selectProject, state } from "./project/state";
import { renderProjects, renderSelectedProject } from "./project/render";
import { renderTasks } from "./task/render";
import { clearTasks } from "./task/state";

let projectBtn = document.getElementById("projectBtn");
let projectSubmitBtn = document.getElementById("projectSubmitBtn");
let projectCloseBtn = document.getElementById('projectCloseBtn')
let taskBtn = document.getElementById("taskBtn");
let taskSubmitBtn = document.getElementById("taskSubmitBtn");
let taskCloseBtn = document.getElementById('taskCloseBtn')
let clearBtn = document.getElementById("clearBtn");
let navBtn = document.getElementById('hamburger')

// Makes project modal appear
projectBtn.addEventListener("click", () => {
  projectModal();
});

projectCloseBtn.addEventListener('click', () => {
  closeProjectModal()
})

const renderTaskWithHandler = (project) => {
  // This can be confusing. When you check a task, you render the tasks once again
  const checkTaskHandler = (task, isChecked) => {
    task.checked = isChecked;
    renderTasks(project, checkTaskHandler);
  };
  renderTasks(project, checkTaskHandler);
};

// Submit button for project modal
projectSubmitBtn.addEventListener("click", () => {
  submitProject();
  renderProjects(state.projects, (project) => {
    selectProject(project);
    renderSelectedProject(state.selectedProjectId, project);
    renderTaskWithHandler(project);
  });
});

// Makes task modal appear
taskBtn.addEventListener("click", () => {
  taskModal();
});

// Submit button in task modal
taskSubmitBtn.addEventListener("click", () => {
  const project = getSelectedProject();

  submitTask(project);
  renderTaskWithHandler(project);
});

taskCloseBtn.addEventListener('click', () => {
  closeTaskModal()
})

clearBtn.addEventListener("click", () => {
  const project = getSelectedProject();
  clearTasks(project);
  renderTaskWithHandler(project);
});

navBtn.addEventListener('click', () => {
  let onOff = false
  const mobileProjectRender = document.getElementsByClassName('left-side')[0]
  if (mobileProjectRender.id == 'nav'){
    mobileProjectRender.setAttribute('id', 'nav-active')
    onOff = true
  } else {
    mobileProjectRender.setAttribute('id', 'nav')
    onOff = false
  }
})