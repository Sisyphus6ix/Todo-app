import { renderTasks } from "../task/render";

let projectDivContainer = document.getElementsByClassName("projectDiv")[0];
let rightsideTitle = document.getElementsByClassName(
  "rightside-header-title"
)[0];

const clearProjects = () => {
  projectDivContainer.innerText = "";
};

export const renderProjects = (projects, onProjectClick) => {
  // Clears my project div
  clearProjects();

  // Loop for adding projects to HTML page
  for (let i = 0; i < projects.length; i++) {
    const project = projects[i];
    const projectElement = document.createElement("div");

    projectElement.setAttribute("data-id", i);
    projectElement.innerText = project.title;

    projectDivContainer.appendChild(projectElement);

    projectElement.addEventListener("click", () => {
      onProjectClick(project);
    });
  }
};

export const renderSelectedProject = (index, project) => {
  const selectedProject = document.querySelector(".active");

  if (selectedProject) {
    selectedProject.classList.remove("active");
  }

  const projectElement = document.querySelector(`[data-id='${index}']`);

  if (projectElement) {
    projectElement.classList.add("active");
  }

  rightsideTitle.innerText = project.title;
};
