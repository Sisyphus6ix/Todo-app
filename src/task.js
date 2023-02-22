import { allProjects } from "./project";

// constructor for new tasks
function task(title, description, status) {
    this.title = title,
    this.description = description
    this.status = status
}

export const taskModal = () => {
    let modal = document.querySelector('#taskModal')
    modal.showModal()
}

export const submitTask = () => {
    // Grabs the value of these inputs and creates task with my constructor
    let taskName = document.getElementById('taskName')
    let taskDescription = document.getElementById('taskDescription')
    let taskInfo = new task(taskName.value, taskDescription.value, 'incomplete')
    console.log(taskInfo)

    let currentProject = undefined
    // Finds my active project and appends only into that object
    for (let i = 0; i < allProjects.length; i++){
        currentProject = allProjects.find(object => object.element.className == 'active')
    }
    currentProject.tasks.push(taskInfo)

    // Clears input values
    taskName.value = ""
    taskDescription.value = ""
}