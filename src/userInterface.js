import Project from './project.js'
import storage from './storage.js'

const domElements = (function() {
    const project = document.querySelector('.add-project');
    const addForm = document.querySelector('.add-form');
    const cancel = document.querySelector('.cancel');
    const add = document.querySelector('.add');
    const deleteIcon =document.querySelector('.delete-icon');
    let projectValue = document.querySelector('#project')
     const addTodo = document.querySelector('.add-todo');
     const form = document.querySelector('form');
    
    function addEvent() {
        project.addEventListener('click', displayAddProject)
        cancel.addEventListener('click', hideProjectBox)
        add.addEventListener('click', addProjectToDom)
        add.addEventListener('click', hideAddForm)
        add.addEventListener('click', AddEventsToProjects) 
        add.addEventListener('click', storage.deleteProject)
        addTodo.addEventListener('click', displayAddToDoForm);    
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
         
    function createProjectElements() {
        let projectInput = new Project(projectValue.value);
        let projectName = document.createElement('h4');  
        let projectNameIcon = document.createElement('img');
        let span = document.createElement('span'); 
        const deleteIcon = document.createElement('img');
        const form = document.querySelector('form');
        
        projectName.classList.add('attached');
        projectNameIcon.src = projectInput.icon;
        projectNameIcon.classList.add('icons')
        deleteIcon.src = 'icons/bin.png' 
        deleteIcon.classList.add('delete-icon');           
        span.textContent = projectInput.name;  
        
        projectName.appendChild(projectNameIcon);
        projectName.appendChild(span);
        projectName.appendChild(deleteIcon);
        storage.addProjectToStore(projectInput)
           
        return projectName;
    
    }

    function addProjectToDom() { 
        if(projectValue.value == '') return  
        let projectList = document.querySelector('#project-list')       
        projectList.appendChild(createProjectElements());        
    
    }
 
    function AddEventsToProjects() {
        const attached = document.querySelectorAll('.attached');
        for(const attach of attached) {
            attach.addEventListener('click', function(e) {
                
                e.stopPropagation()
                const mainHeader = document.querySelector('#main-header');
                const addTodo = document.querySelector('.add-todo')
                console.log(addTodo)
                mainHeader.textContent = e.target.textContent;
                addTodo.classList.remove('hide');
            
            })
        }
    }
   
    AddEventsToProjects()

    function displayAddToDoForm() {
        addTodo.style.display = 'none'
        form.classList.remove('hide');
    }
        
            //   localStorage.clear()
    return{addEvent,
         createProjectElements,
       }

})()

export default domElements