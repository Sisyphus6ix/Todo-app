import { allProjects } from "./project";

// constructor for new tasks
function task(title, description) {
    this.title = title
    this.description = description
}

export const taskModal = () => {
    let modal = document.querySelector('#taskModal')
    modal.showModal()
}

export const submitTask = () => {
    let taskName = document.getElementById('taskName')
    let taskDescription = document.getElementById('taskDescription')
    let taskInfo = new task(taskName.value, taskDescription.value)
    console.log(taskInfo)

    // console.log(document.getElementsByClassName('active'))

    for (let i = 0; i < allProjects.length; i++){
        let project = allProjects.find(object => object.element.className == 'active')
        console.log(project)
        project.tasks.push(taskInfo)
    }

    console.log(allProjects)
}