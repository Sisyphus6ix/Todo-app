import { allProjects } from "./project";

const test = () => {
    let editProjects = document.querySelectorAll('projectDiv')
    console.log(editProjects)

    // Working
    // for (let project of projects) {
    //     project.addEventListener('click', function(event) {
    //         console.log(event.target.innerText)
    //     })
    // }

    // Not Working
    editProjects.addEventListener('click', (event) => {
        if(event.target.classList.contains('project')){
            console.log(e.target.innerText)
        }
    })

}

export { test }