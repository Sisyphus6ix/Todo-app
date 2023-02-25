let taskDivContainer = document.getElementsByClassName("taskDiv")[0];

const clearTaskDiv = () => {
  taskDivContainer.innerText = "";
};

export const renderTasks = (project, onCheck) => {
  // Clears my task div
  clearTaskDiv();

  // For loop for searching the active projects tasks and then adding them to page
  for (let i in project.tasks) {
    let task = project.tasks[i];
    let taskElement = document.createElement("div");
    let taskTitle = document.createElement("h5");
    let taskDescription = document.createElement("p");
    let checkbox = document.createElement("input");

    taskDescription.innerText = task.description;
    taskTitle.innerText = task.title;

    taskElement.appendChild(taskTitle);
    taskElement.appendChild(taskDescription);
    taskElement.appendChild(checkbox);
    taskElement.setAttribute("class", "taskDetails");
    taskElement.setAttribute("data-id", i);

    taskTitle.setAttribute("class", "taskTitle");

    taskDescription.setAttribute("class", "taskDescription");

    if (task.checked) {
      checkbox.setAttribute("checked", task.checked);
    }
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("class", "checkbox");
    checkbox.setAttribute("data-id", i);
    checkbox.addEventListener("change", (event) => {
      onCheck(task, event.target.checked);
    });

    taskDivContainer.appendChild(taskElement);
  }
};
