import Project from './project.js'

const domElements = (function() {
    const project = document.querySelector('.add-project');
    const addForm = document.querySelector('.add-form');
    const cancel = document.querySelector('.cancel');
    const add = document.querySelector('.add');
    let projectList = document.querySelector('#project-list')
    let projectValue = document.querySelector('#project')
    let projectArray = []
  
    function addEvent() {
        project.addEventListener('click', displayAddProject)
        cancel.addEventListener('click', hideProjectBox)
        add.addEventListener('click', appendProjectName)
    }

    function displayAddProject() {
        addForm.classList.remove('hide');
        project.style.display = 'none';

    }
        
    function appendProjectName() {
        const addForm = document.querySelector('.add-form');
        let projectInput = new Project(projectValue.value);
        const projectName = document.createElement('h4');
        projectName.textContent = projectInput.name;
        projectArray.push(projectInput.name)
        console.log(projectArray)
        projectList.appendChild(projectName)
        addForm.classList.add('hide');
        project.style.display = 'block';
    } 
    
    function hideProjectBox() {
        addForm.classList.add('hide');
        project.style.display = 'block'
    }    
return{addEvent}
})()
export default domElements
