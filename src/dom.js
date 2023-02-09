import { allProjects } from "./project"

let projectDivContainer = document.getElementsByClassName('projectDiv')
let rightsideTitle = document.getElementsByClassName('rightside-header-title')[0]


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

    // console.log(allProjects)
}

const projectClickHandler = (project) => {
    alert('its working!')
    rightsideTitle.innerText = project.innerText
}


const projectEvents = () => {
    for (const projectIndex in projectDivContainer){
        console.log(projectIndex)
        // const project = projectDivContainer[projectIndex]
        // console.log(project)
        // const newTitle = document.createElement('h3')
        // newTitle.innerText = project.innerText
        // console.log(newTitle)
        // newTitle.addEventListener('click', () => projectClickHandler(project))
        // rightsideTitle.append(newTitle)
    }
}


export { addedProjectLogic, projectEvents }