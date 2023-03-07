import { allProjects } from "./project";

// constructor for new tasks
function task(title, description) {
  (this.title = title),
    (this.description = description),
    (this.checked = false);
}

export const taskModal = () => {
  let modal = document.querySelector("#taskModal");
  modal.showModal();
};

export const submitTask = (project) => {
  // Grabs the value of these inputs and creates task with my constructor
  let taskName = document.getElementById("taskName");
  let taskDescription = document.getElementById("taskDescription");
  let taskInfo = new task(taskName.value, taskDescription.value);
  console.log(taskInfo);

  project.tasks.push(taskInfo);

  // Clears input values
  taskName.value = "";
  taskDescription.value = "";
};

export const closeTaskModal = () => {
  let modal = document.querySelector("#taskModal");
  modal.hide()
}
