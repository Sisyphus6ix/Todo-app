import { allProjects } from "./project"

let projectDivContainer = document.getElementsByClassName('projectDiv')
let rightSideHeaderContainer = document.getElementsByClassName('rightside-header')

const clearProjectDivContainer = () => {
    projectDivContainer[0].innerText = ''
}

const pageLogic = () => {
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

const projectEvent = () => {
    let rightSideHeader = document.createElement('h3')
    rightSideHeaderContainer[0].appendChild(rightSideHeader)
    rightSideHeader.innerText = ''
     
    for (let project of projectDivContainer){
        project.addEventListener('click', (event) => {
            console.log(event.target.innerText) 
            rightSideHeader.innerText = event.target.innerText
        })
    }   
}


export { pageLogic, projectEvent }