import { allProjects } from "./project";

const test = () => {
    let editProjects = document.querySelectorAll('projectDiv')
    let projectTitleContainer = document.getElementsByTagName('rightside-header')
    let projectTitle = projectTitleContainer[0]
    // console.log(editProjects)

    // Working
    // for (let project of allProjects) {
    //     project.addEventListener('click', function(event) {
    //         console.log(event.target.innerText)
    //         projectTitle.innerText = ''
    //         projectTitle.innerText = event.target.innerText
    //     })
    // }

    for ( project of editProjects){
        project.addEventListener('click', function (){
            console.log(project)
        })
    }
}

export { test }