let allProjects = []

function project (title) {
    this.title = title;
}

const projectModal = () => {
    let modal = document.querySelector('#projectModal')
    modal.showModal()
}

const submitProject = () => {
    // Grabbing the value of the input
    let projectName = document.getElementById('projectName')
    let storedProjectName = new project(projectName.value)
   
    //Updating my html with the projects from the array
    let projectDivContainer = document.getElementsByClassName('projectDiv')
    let newProject = document.createElement('div')
    projectDivContainer[0].appendChild(newProject)
    newProject.innerText = storedProjectName.title
    newProject.setAttribute('id', 'projects')
    
    //Storing info into object
    let projectInfo = {
            "title": storedProjectName.title,
            "element": newProject,
            "tasks": [
                "task 1",
                "task 2",
                "task 3",
                "task 4"
            ],
        }
    allProjects.push(projectInfo)
    console.log(allProjects)

    //Clearing the input
    projectName.value = ''
}

export { projectModal, submitProject, allProjects}