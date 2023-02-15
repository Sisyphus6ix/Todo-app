import { allProjects } from "./project";

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
