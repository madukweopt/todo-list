import Project from './project.js'
import storage from './storage.js'
import Todo from './todo.js'

const domElements = (function() {
    const project = document.querySelector('.add-project');
    const addForm = document.querySelector('.add-form');
    const cancel = document.querySelector('.cancel');
    const add = document.querySelector('.add');
    const deleteIcon =document.querySelector('.delete-icon');
    let projectValue = document.querySelector('#project')

     const addTodo = document.querySelector('.add-todo');
     const form = document.querySelector('form');
     const cancelForm = document.querySelector('.cancel-form');
     let titleInput = document.querySelector('#title');
     let descriptionInput = document.querySelector('#description');
     let priorityInput = document.querySelector('#importance');
     let dateInput = document.querySelector('#date'); 
     const addInputs = document.querySelector('.add-formBtn');
    
    function addEvent() {
        project.addEventListener('click', displayAddProject);
        cancel.addEventListener('click', hideProjectBox);
        add.addEventListener('click', addProjectToDom);
        add.addEventListener('click', hideAddForm);
        add.addEventListener('click', AddEventsToProjects); 
        add.addEventListener('click', storage.deleteProject);
        
        addTodo.addEventListener('click', displayAddToDoForm);
        addInputs.addEventListener('click', addFormInputsToProject);
        addInputs.addEventListener('click', appendTodoListTittlesToDom);
        cancelForm.addEventListener('click', cancelAddToDoForm);    
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

       /* 
        let projectArray =[]
        let projectNames = []
        projectArray = JSON.parse(localStorage.getItem('projectArray'));
        
        projectArray.forEach(obj => {
            
              projectNames.push(obj.name) 
        })
        if(projectNames.includes(projectValue.value)) {
            alert('This project already exists');
            return;
        }
            
*/
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
            const mainHeader = document.querySelector('#main-header');
            const section = document.querySelector('section');
            console.log(mainHeader)
            attach.addEventListener('click', function(e) {
            
                e.stopPropagation()
                section.innerHTML = ''
                const addTodo = document.querySelector('.add-todo')
                console.log(addTodo)
                mainHeader.textContent = e.target.textContent;
                addTodo.style.display = 'block'            
               
                renderStoredTodo(e)
               
               
                
            })
           
        }
    }

    function renderStoredTodo(e) {
        const section = document.querySelector('section');
        const todos = JSON.parse(localStorage.getItem('projectArray'))
        console.log(todos)
        let selectedTodo = todos.find((todo) => todo.name == e.target.textContent);
        let selectedTodos = selectedTodo.todos;
        console.log(selectedTodos)
    
        selectedTodos.forEach(todo => {
            
            const checkbox = document.createElement('input');
            const close = document.createElement('img');
            close.src = 'icons/close.png';
            close.classList.add('icon');
            close.classList.add('close')
            const edit = document.createElement('img');
            edit.src = 'icons/edit.png';
            edit.classList.add('icon');
            checkbox.type = 'checkbox'
            checkbox.setAttribute('id', 'checkbox');
            
            const titleAndDate = document.createElement('p');
            titleAndDate.classList.add('title-and-date')
            const title = document.createElement('div');
            const date = document.createElement('span');

            titleAndDate.appendChild(checkbox);
            titleAndDate.appendChild(title);
            titleAndDate.appendChild(date); 
            titleAndDate.appendChild(edit)
            titleAndDate.appendChild(close);                
            title.textContent = todo.title;
            date.textContent = todo.date;
            section.appendChild(titleAndDate); 
            storage.deleteTodo()
                    
        });
    }

    AddEventsToProjects()
  
    function displayAddToDoForm() {
        addTodo.style.display = 'none'
        form.classList.remove('hide');
    }

    function cancelAddToDoForm() {
        form.classList.add('hide');
        addTodo.style.display = 'block'   
    }

    function addFormInputsToProject() {      
        let title = titleInput.value
        let description = descriptionInput.value;
        let priority = priorityInput.value;
        let date = dateInput.value;
        let todo = new Todo(title, description, priority, date);
        console.log(todo)
        storage.addToDoToStorage(todo);
        form.classList.add('hide')
        addTodo.style.display = 'block';
        
    }

    function createTodoListTitles() {
        const checkbox = document.createElement('input');
        const close = document.createElement('img');
        close.src = 'icons/close.png';
        close.classList.add('icon');
        close.classList.add('close')
        const edit = document.createElement('img');
        edit.src = 'icons/edit.png';
        edit.classList.add('icon');
        checkbox.type = 'checkbox'
        checkbox.setAttribute('id', 'checkbox');
        

        const titleAndDate = document.createElement('p')
        const todoTitle = document.createElement('div');
        const todoDate = document.createElement('span');
        
        titleAndDate.classList.add('title-and-date');
        todoTitle.textContent = titleInput.value;
        todoDate.textContent = dateInput.value;
        titleAndDate.appendChild(checkbox)
        titleAndDate.appendChild(todoTitle);
        titleAndDate.appendChild(todoDate);
        titleAndDate.appendChild(edit);
        titleAndDate.appendChild(close);
        return titleAndDate;        
    }

    function appendTodoListTittlesToDom() {
        const section = document.querySelector('section');    
        section.appendChild(createTodoListTitles())
        addTodo.classList.remove('hide') 
        form.classList.add('hide') 
        storage.deleteTodo()  
        titleInput.value = ''
        descriptionInput.value = ''
        dateInput.value = ''  
    }
                    //  localStorage.clear()
    return{addEvent,
         createProjectElements,
       }

})()

export default domElements

