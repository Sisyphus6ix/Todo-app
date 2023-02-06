import { allProjects, projectModal, submitProject } from "./project"
import { test } from "./task"

let projectBtn = document.getElementById('projectBtn')
let projectSubmitBtn = document.getElementById('submitBtn')

// Makes project modal appear
projectBtn.addEventListener('click', () => {
    projectModal()
})

//Project modal submit button
projectSubmitBtn.addEventListener('click', () => {
   submitProject()
   test()
})
