import Project from './project.js'
import storage from './storage.js'

const domElements = (function() {
    const project = document.querySelector('.add-project');
    const addForm = document.querySelector('.add-form');
    const cancel = document.querySelector('.cancel');
    const add = document.querySelector('.add');
    let projectValue = document.querySelector('#project')
    
    function addEvent() {
        project.addEventListener('click', displayAddProject)
        cancel.addEventListener('click', hideProjectBox)
        add.addEventListener('click', addProjectToDom)
        add.addEventListener('click', hideAddForm)
        add.addEventListener('click', AddEventsToProjects)         
    }

    function displayAddProject() {
        addForm.classList.remove('hide')
        project.style.display = 'none';
    }
        
    function hideProjectBox() {
        addForm.classList.add('hide');
        project.style.display = 'block'
    }

    function hideAddForm() {  
        const addForm = document.querySelector('.add-form');
        addForm.classList.add('hide');
        project.style.display = 'block';
        projectValue.value = ''
        }    
         
    function createProjectIcon() {
        let projectInput = new Project(projectValue.value);
        let projectName = document.createElement('h4');  
        let projectNameIcon = document.createElement('img');
        let span = document.createElement('span'); 
        
        projectName.classList.add('attached');
        projectNameIcon.src = projectInput.icon;
        projectNameIcon.classList.add('icons')            
        span.textContent = projectInput.name;  
        
        projectName.appendChild(projectNameIcon);
        projectName.appendChild(span);
        storage.addProjectToStore(projectInput)         
         
        return projectName;
    
    }
    
    function addProjectToDom() { 
        if(projectValue.value == '') return  
        let projectList = document.querySelector('#project-list')       
        projectList.appendChild(createProjectIcon());
        return projectList;         
    }

    function AddEventsToProjects() {
        const attached = document.querySelectorAll('.attached');
        console.log(attached)
        for(const attach of attached) {
            attach.addEventListener('click', function(e) {
                const mainHeader = document.querySelector('#main-header');
                const addTask = document.querySelector('.add-task')
                mainHeader.textContent = e.target.textContent;
                addTask.classList.remove('hide');
            })

        }
    }

    AddEventsToProjects()

        
            //   localStorage.clear()
    return{addEvent}

})()

export default domElements