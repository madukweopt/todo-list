import Project from './project.js'
import storage from './storage.js'

const domElements = (function() {
    const project = document.querySelector('.add-project');
    const addForm = document.querySelector('.add-form');
    const cancel = document.querySelector('.cancel');
    const add = document.querySelector('.add');
    let projectValue = document.querySelector('#project')
    let objectsToBeStored = [];
    
    function addEvent() {
        project.addEventListener('click', displayAddProject)
        cancel.addEventListener('click', hideProjectBox)
        add.addEventListener('click', createProjectElements)
        add.addEventListener('click', hideAddForm)
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

    function hideAddForm() {
         
        const addForm = document.querySelector('.add-form');
        addForm.classList.add('hide');
        project.style.display = 'block';
        projectValue.value = ''
        }

    const createProjectElements = () => {  
        let projectInput = new Project(projectValue.value);
        let projectNameIcon = document.createElement('img');
        let projectList = document.querySelector('#project-list')
        let projectName = document.createElement('h4');
        let span = document.createElement('span');
          
        function createProjectIcon() {     
            projectNameIcon.src = projectInput.icon;
            projectNameIcon.classList.add('icons')            
            return projectNameIcon;
        } 

        function createProjectName() { 
            span.textContent = projectInput.name;   
            return span;
        }

        function nameAndIcon() {       
            projectName.appendChild(createProjectIcon());
            projectName.appendChild(createProjectName());
            storage.addProjectToStore(projectInput)
            return projectName;          
        }
        
        function addProjectToDom() { 
            if(projectValue.value == '') return         
            projectList.appendChild(nameAndIcon());
            return projectList;         
        }
        addProjectToDom()

        function renderStorageToDom() {
                 
            let localItems = JSON.parse(localStorage.getItem(['projectArray']))
            if(localItems == null) return
           
            localItems.forEach(item => {
                console.log(item)          
                console.log(item.name)
                projectNameIcon.src = item.icon;
                span.textContent = item.name
                console.log(span)
                console.log(projectNameIcon)
                projectName.appendChild(projectNameIcon)
                projectName.appendChild(span)
                projectList.appendChild(projectName);       

            });
        }
        renderStorageToDom()

        
    }
        
   
            //  localStorage.clear()
return{addEvent,
    createProjectElements
    
}
})()
export default domElements