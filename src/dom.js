import { allProjects } from "./project"

let projectDivContainer = document.getElementsByClassName('projectDiv')
let rightsideTitle = document.getElementsByClassName('rightside-header-title')

const clearProjectDivContainer = () => {
    projectDivContainer[0].innerText = ''
}

const addedProjectLogic = () => {
    // Clears my project div
    clearProjectDivContainer()

    // Loop for adding projects to HTML page and updating my array with there location on my HTML page
    for (let i = 0; i < allProjects.length; i++){
        let newProject = document.createElement('div')
        newProject.setAttribute('id', 'projects')
        projectDivContainer[0].appendChild(newProject)
        newProject.innerText = allProjects[i].title
        allProjects[i].element = newProject
    }

    console.log(allProjects)
}

export { addedProjectLogic, projectEvent }