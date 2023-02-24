import { allProjects } from "./project";

export const checkingTasks = (projects) => {
    let project = projects.find(object => object.element.className == 'active')
    // console.log(project.tasks)

    let taskDetails = document.getElementsByClassName('taskDetails')
    let checkbox = document.getElementsByClassName('checkbox')
    
    for (let i = 0; i < project.tasks.length; i++) {
        // console.log(i)
         if (checkbox[i].checked == true) {
            alert(`Checkbox index:${i} checked!`)
            project.tasks[i] = 'Empty'
            taskDetails[i].innerHTML = ''
        }
    }
    console.log(allProjects)
}