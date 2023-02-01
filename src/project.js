let allProjects = []

function project (title) {
    this.title = title;
}

const projectModal = () => {
    let modal = document.querySelector('#projectModal')
    modal.showModal()
}

const submitProject = () => {
    // Storing the inputs value into array
    let projectName = document.getElementById('projectName')
    let storedProjectName = new project(projectName.value)
    allProjects.push(storedProjectName.title)

    //Updating my html with the projects from the array
    let projectDivContainer = document.getElementsByClassName('projectDiv')
    let projectDiv = projectDivContainer[0].appendChild(document.createElement('div'))
    projectDiv.innerText = storedProjectName.title
    projectDiv.setAttribute('class', 'projects')

    //Clearing the input
    projectName.value = ''
}

export { projectModal, submitProject }