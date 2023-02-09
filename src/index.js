import { addedProjectLogic, projectEvent } from "./dom"
import { allProjects, projectModal, submitProject } from "./project"

let projectBtn = document.getElementById('projectBtn')
let projectSubmitBtn = document.getElementById('submitBtn')
let taskBtn = document.getElementById('taskBtn')

// Makes project modal appear
projectBtn.addEventListener('click', () => {
    projectModal()
})

//Project modal submit button
projectSubmitBtn.addEventListener('click', () => {
    submitProject()
    addedProjectLogic()
    projectEvent()
})

//Makes task modal appear
taskBtn.addEventListener('click', () => {
    console.log('task button works')
})