import { allProjects } from "./project";

const test = () => {
    let editProjects = document.querySelectorAll('projectDiv')
    let projectTitleContainer = document.getElementsByClassName('rightside-header')
    let projectTitle = projectTitleContainer[0]
    console.log(editProjects)

    // Working
    for (let project of projects) {
        project.addEventListener('click', function(event) {
            console.log(event.target.innerText)
            projectTitle.innerText = ''
            projectTitle.innerText = event.target.innerText
        })
    }

    // Not Working
    // editProjects.addEventListener('click', (event) => {
    //     if(event.target.classList.contains('project')){
    //         console.log(e.target.innerText)
    //     }
    // })


}

export { test }