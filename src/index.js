import { allProjects } from "./project"
import { project } from "./project"

let projectBtn = document.getElementById('projectBtn')
let modal = document.querySelector('#projectModal')
let projectSubmitBtn = document.getElementById('submitBtn')

const test = () => {
    alert('This button works')
}

projectBtn.addEventListener('click', () => {
    modal.showModal()
})

projectSubmitBtn.addEventListener('click', () => {
    let projectName = document.getElementById('projectName')
    console.log(projectName.value)

    // projectName.innerText = ""
})