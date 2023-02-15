import { allProjects } from "./project";

export const taskModal = () => {
    let modal = document.querySelector('#taskModal')
    modal.showModal()
}

export const submitTask = () => {
    let taskName = document.getElementById('taskName')
    let storedTaskName = taskName.value
    console.log(storedTaskName)

    // for (let i = 0; i < allProjects.length; i++){
    //     const project = allProjects[i]
    //     console.log(project)
    // }
}