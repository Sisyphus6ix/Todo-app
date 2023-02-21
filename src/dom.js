import { allProjects } from "./project";

let taskDivContainer = document.getElementsByClassName('taskDiv')[0]
let projectDivContainer = document.getElementsByClassName("projectDiv")[0];
let rightsideTitle = document.getElementsByClassName("rightside-header-title")[0];
let activeProject = false

const clearProjectDivContainer = () => {
  projectDivContainer.innerText = "";
};

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
};

export const renderTasks = (projects) => {
  let project = undefined
  let newTask = undefined

  for (let i = 0; i < projects.length; i++) {
    project = projects.find(object => object.element.className == 'active')
    console.log(project.tasks[i])
    newTask = document.createElement('div')

    newTask.setAttribute('id', i)
    newTask.innerText = project.tasks
  }
  taskDivContainer.appendChild(newTask)
}
