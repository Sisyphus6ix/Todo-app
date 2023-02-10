import { renderProjects } from "./dom";
import { showModal, submitProject, allProjects } from "./project";

let projectBtn = document.getElementById("projectBtn");
let projectSubmitBtn = document.getElementById("submitBtn");
let taskBtn = document.getElementById("taskBtn");

// Makes project modal appear
projectBtn.addEventListener("click", () => {
  showModal();
});

//Project modal submit button
projectSubmitBtn.addEventListener("click", () => {
  submitProject();

  renderProjects(allProjects);
});

//Makes task modal appear
taskBtn.addEventListener("click", () => {
  console.log("task button works");
});
