import { addProject } from "./project/state";

function project(title) {
  this.title = title;
}

export const projectModal = () => {
  let modal = document.querySelector("#projectModal");
  modal.showModal();
};

export const submitProject = () => {
  // Grabbing the value of the input
  let projectName = document.getElementById("projectName");
  let storedProjectName = new project(projectName.value);

  //Storing info into object
  let projectInfo = {
    title: storedProjectName.title,
    element: "",
    tasks: [],
  };
  addProject(projectInfo);

  //Clearing the input
  projectName.value = "";
};

export const closeProjectModal = () => {
  let modal = document.querySelector("#projectModal")
  modal.hide()
}