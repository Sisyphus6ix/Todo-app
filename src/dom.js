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
  clearTaskDiv()

  let newTask = undefined
  let project = undefined

  // For loop for searching all of my projects and finding the active one
  for (let i = 1; i < projects.length; i++) {
     project = projects.find(object => object.element.className == 'active')
  }
  console.log(project)

  // For loop for searching the active projects tasks and then adding them to page
  for (let task of project.tasks){
    // console.log(task.title)
    newTask = document.createElement('div')
    newTask.innerText = task.title 
    taskDivContainer.appendChild(newTask)
  }
}
