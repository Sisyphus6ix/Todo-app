let projectBtn = document.getElementById('projectBtn')
let modal = document.querySelector('#projectModal')

const test = () => {
    alert('This button works')
}

projectBtn.addEventListener('click', () => {
    modal.showModal()
})