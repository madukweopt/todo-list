import Project from './project.js'
import storage from './storage.js'

const domElements = (function() {
    const project = document.querySelector('.add-project');
    const addForm = document.querySelector('.add-form');
    const cancel = document.querySelector('.cancel');
    const add = document.querySelector('.add');
    let objectsToBeStored = [];
    
    function addEvent() {
        project.addEventListener('click', displayAddProject)
        cancel.addEventListener('click', hideProjectBox)
        add.addEventListener('click', addProjectToDom)
        add.addEventListener('click', storage.getStoredProjects)
        
        
    }

    function displayAddProject() {
        addForm.classList.remove('hide')
        project.style.display = 'none';

    }
        
    function hideProjectBox() {
        addForm.classList.add('hide');
        project.style.display = 'block'
    } 
   
   function addProjectToDom() {
    
        let projectList = document.querySelector('#project-list')
        let projectValue = document.querySelector('#project')
        const projectName = document.createElement('h4');
        const span = document.createElement('span');
        const projectNameIcon = document.createElement('img');
        console.log(projectNameIcon)
        
        const project = document.querySelector('.add-project');
        const addForm = document.querySelector('.add-form');
    
        if(projectValue.value == '') return  
        let projectInput = new Project(projectValue.value);
        console.log(projectInput) 
        addForm.classList.remove('hide');
        projectNameIcon.src = projectInput.icon;
        projectNameIcon.classList.add('icons')
        console.log(projectNameIcon)
        span.textContent = projectInput.name;

        projectName.appendChild(projectNameIcon);
        projectName.appendChild(span);
        
        projectList.appendChild(projectName);
        storage.addProjectToStore(projectInput)
        addForm.classList.add('hide');
        project.style.display = 'block';
        projectValue.value = ''
        return projectList;
        } 
   
        //   localStorage.clear()
return{addEvent,
    
}
})()
export default domElements