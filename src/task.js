import { allProjects } from "./project";

const test = () => {
    let editProjects = document.getElementsByClassName('projectDiv')
    let projectTitleContainer = document.getElementsByClassName('rightside-header')
    let projectTitle = document.createElement('div')
    
    for (let project of editProjects){
        project.addEventListener('click', (event) => {
            console.log(event.target.innerText)
            // console.log(projectTitleContainer[0])
            projectTitleContainer[0].appendChild(projectTitle)
            projectTitle.innerText = event.target.innerText
        })
    }
}

export { test }