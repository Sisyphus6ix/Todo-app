import { allProjects } from "./project";

export const taskModal = () => {
    let modal = document.querySelector('#taskModal')
    modal.showModal()
}

export const submitTask = () => {
    let taskName = document.getElementById('taskName')
    let storedTaskName = taskName.value
    console.log(storedTaskName)
}