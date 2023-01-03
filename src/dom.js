let projectDivContainer = document.getElementsByClassName("projectDiv")[0];
let rightsideTitle = document.getElementsByClassName(
  "rightside-header-title"
)[0];

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

    projectDivContainer.appendChild(newProject);

    newProject.addEventListener("click", () => {
      projectClickHandler(project);
    });
  }
};

const projectClickHandler = (project) => {
  console.log("click event called");
  rightsideTitle.innerText = project.title;
};
