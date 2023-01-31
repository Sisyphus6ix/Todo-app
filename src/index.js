import { allProjects } from "./project"
import { project } from "./project"

let projectBtn = document.getElementById('projectBtn')
let modal = document.querySelector('#projectModal')
let projectSubmitBtn = document.getElementById('submitBtn')
////
let projectDivContainer = document.getElementsByClassName('projectDiv')
let projectDiv = document.createElement('div')
projectDiv.setAttribute('class', 'projects')


const test = () => {
    alert('This button works')
}

// Makes modal appear
projectBtn.addEventListener('click', () => {
    modal.showModal()
})

//Submit button in modal functionality
projectSubmitBtn.addEventListener('click', () => {
    let projectName = document.getElementById('projectName')
    // console.log(projectName.value)
    let storedProjectName = new project(projectName.value)
    allProjects.push(storedProjectName.title)

    projectDivContainer[0].appendChild(projectDiv)
    projectDiv.innerText = storedProjectName.title

    // Debugging below
    console.log(storedProjectName)
    console.table(allProjects)
    // for (i = 0; i < allProjects.length; i++){
    //     console.log(allProjects[i])
    // }
    
})

