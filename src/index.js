import { allProjects } from "./project"
import { project } from "./project"

let projectBtn = document.getElementById('projectBtn')
let modal = document.querySelector('#projectModal')
let projectSubmitBtn = document.getElementById('submitBtn')
let projectDivContainer = document.getElementsByClassName('projectDiv')



const test = () => {
    alert('This button works')
}

// Makes modal appear
projectBtn.addEventListener('click', () => {
    modal.showModal()
})

//Submit button in modal functionality
projectSubmitBtn.addEventListener('click', () => {
    // Storing the value of the input button in my array
    let projectName = document.getElementById('projectName')
    let storedProjectName = new project(projectName.value)
    allProjects.push(storedProjectName.title)

    //Updating my html with the projects from the array
    let projectDiv = projectDivContainer[0].appendChild(document.createElement('div'))
    projectDiv.innerText = storedProjectName.title
    projectDiv.setAttribute('class', 'projects')

    //Clearing the input
    projectName.value = ''
})
