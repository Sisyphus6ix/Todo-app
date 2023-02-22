import { allProjects } from "./project";

let taskDivContainer = document.getElementsByClassName('taskDiv')[0]
let projectDivContainer = document.getElementsByClassName("projectDiv")[0];
let rightsideTitle = document.getElementsByClassName("rightside-header-title")[0];
let activeProject = false

const clearProjectDivContainer = () => {
  projectDivContainer.innerText = "";
};

const clearTaskDiv = () => {
  taskDivContainer.innerText = ''
}

export const renderProjects = (projects) => {
  // Clears my project div
  clearProjectDivContainer();

  // Loop for adding projects to HTML page
  for (let i = 0; i < projects.length; i++) {
    const project = projects[i];
    const newProject = document.createElement("div");

    newProject.setAttribute("id", i);
    newProject.innerText = project.title;
    project.element = newProject

    projectDivContainer.appendChild(newProject);

    newProject.addEventListener("click", (event) => {
      // Removes the previously active project
       if (activeProject == true){
        document.getElementsByClassName('active')[0].removeAttribute('class')
      }
      projectClickHandler(project, event);
    });
  }
};

const projectClickHandler = (project, event) => {
  // console.log(event.target);
  event.target.setAttribute('class', 'active')
  rightsideTitle.innerText = project.title;
  activeProject = true
  renderTasks(allProjects)
};

export const renderTasks = (projects) => {
  // Clears my task div
  clearTaskDiv()

  let project = undefined

  // For loop for searching all of my projects and finding the active one
  // Updates the project variable to be my active project
  for (let i = 0; i < projects.length; i++) {
     project = projects.find(object => object.element.className == 'active')
  }
  // console.log(project)

  // For loop for searching the active projects tasks and then adding them to page
  for (let task of project.tasks){
  
    let newTask = document.createElement('div')
    let taskTitle = document.createElement('h5')
    let taskDescription = document.createElement('p')
    let checkbox = document.createElement('input')

    taskDescription.innerText = task.description
    taskTitle.innerText = task.title

    taskDivContainer.appendChild(newTask)
    newTask.appendChild(taskTitle)
    newTask.appendChild(taskDescription)
    newTask.appendChild(checkbox)
    newTask.setAttribute('class', 'taskDetails')
    taskTitle.setAttribute('class', 'taskTitle')
    taskDescription.setAttribute('class', 'taskDescription')
    checkbox.setAttribute('type', 'checkbox')
    checkbox.setAttribute('class', 'checkbox')
  }
  locateTaskInfo()
}

const locateTaskInfo = () => {
  let taskDetails = document.getElementsByClassName('taskDetails')
  let checkbox = document.getElementsByClassName('checkbox')

  // Giving my tasks and remove buttons the same indexes
  for (let i = 0; i < taskDetails.length; i++) {
    taskDetails[i].setAttribute('id', i)
    checkbox[i].setAttribute('id', i)
  }
}