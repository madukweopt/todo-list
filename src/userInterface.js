import Project from './project.js'
import storage from './storage.js'

const domElements = (function() {
    const project = document.querySelector('.add-project');
    const addForm = document.querySelector('.add-form');
    const cancel = document.querySelector('.cancel');
    const add = document.querySelector('.add');
    
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
        const project = document.querySelector('.add-project');
        const addForm = document.querySelector('.add-form');
    
        if(projectValue.value == '') return  
        let projectInput = new Project(projectValue.value);
        console.log(projectInput) 
        addForm.classList.remove('hide');
        projectName.textContent = projectInput.name;
        
        projectList.appendChild(projectName);
        storage.addProjectToStorage(projectInput.name)
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
