/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Project {
    constructor(name) {
        this.name = name;
        this.icon = 'icons/dashboard.png'
        this.todos = [];
    }

    setName(name) {
        this.name = name
    }

    getName() {
        return this.name
    }

    getTodos() {
        return this.todos;
    }
    
    addTodo(todo) {
        this.todos.push(todo);
    }

    deleteTodo(todoTitle) {
        this.todos.filter((todo) => todo.title !== todoTitle )
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var _userInterface_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userInterface.js */ "./src/userInterface.js");





const storage = (function() {
  
   function storeItems(itemToStore) {
      localStorage.setItem('projectArray', JSON.stringify(itemToStore))
   }

   function getStoredItems() {
      
    JSON.parse(localStorage.getItem('projectArray'))   
   }

   function addProjectToStore(itemsToAdd) {
      let storeKey = 'projectArray'
      let store = []
   
      const projectArray = localStorage.getItem(storeKey);
      if(projectArray == '') {
         localStorage.setItem(storeKey, JSON.stringify([itemsToAdd]))

      }else if(localStorage.getItem(storeKey) == null){
         localStorage.setItem(storeKey, JSON.stringify([itemsToAdd]))

      }else{
         store = JSON.parse(localStorage.getItem(storeKey));
          console.log(store)
          store.push(itemsToAdd)
         storeItems(store);
      }
   }

  
   function renderStoredItems() {   
      
      let projectList = document.querySelector('#project-list')
       let store = JSON.parse(localStorage.getItem('projectArray')) 
       if(localStorage.getItem('projectArray') == null || localStorage.getItem('projectArray') == '' || localStorage.getItem('projectArray') == undefined) return
         store.forEach(item => {
         const projectName = document.createElement('h4');
         const projectNameIcon = document.createElement('img');
         const span = document.createElement('span')
         const deleteIcon = document.createElement('img');

         projectName.classList.add('attached');
         projectNameIcon.classList.add('icons');
         projectNameIcon.src = item.icon;
         span.textContent = item.name;
         deleteIcon.src = 'icons/bin.png' 
         deleteIcon.classList.add('delete-icon');

         
         projectName.appendChild(projectNameIcon);
         projectName.appendChild(span); 
         projectName.appendChild(deleteIcon);
         projectList.appendChild(projectName) 
           
         
      });
   }

renderStoredItems()

   function deleteProject() {
      const mainHeader = document.querySelector('#main-header');
      let projectList = document.querySelector('#project-list')
      const deleteIcon = document.querySelectorAll('.delete-icon');
      const addTodo = document.querySelector('.add-todo')
      console.log(addTodo)
      deleteIcon.forEach(icon => {
        
         icon.addEventListener('click', function(e) {
         e.stopPropagation()
         let store = JSON.parse(localStorage.getItem('projectArray'));
         console.log(store)
         mainHeader.textContent = '';
         e.target.parentElement.remove()
         addTodo.style.display = 'none';
         store = store.filter((p) => p.name !== e.target.parentElement.textContent)  
         localStorage.setItem('projectArray', JSON.stringify(store));
                   
          })
          
      });
  }
  deleteProject()

   
   function deleteTodo() {
      const mainHeader = document.querySelector('#main-header');
      const deleteTodos = document.querySelectorAll('.close');
      deleteTodos.forEach((deleteTodo) => {
         deleteTodo.addEventListener('click', function(e) {
            e.target.parentElement.remove()

            let storage = JSON.parse(localStorage.getItem('projectArray'));
            let targetProject = storage.find((p) => p.name == mainHeader.textContent);
            let filteredTodo = targetProject.todos.filter((todo) => todo.title !== e.target.parentElement.children[1].textContent);

            delete targetProject.todos;

            targetProject.todos = filteredTodo;
            let stored = storage.filter((p) => p.name !== mainHeader.textContent);

            stored.push(targetProject);
            localStorage.setItem('projectArray', JSON.stringify(stored));                             
         })
      })
  }
  deleteTodo()
   
  function addToDoToStorage(itemToAdd) {
   const mainHeader = document.querySelector('#main-header');
   let array = JSON.parse(localStorage.getItem('projectArray'))
   let findObj = array.find((item) => item.name == mainHeader.textContent);
   console.log(findObj.todos)
   let projectArray = array.filter((p) => p.name !== mainHeader.textContent)
   console.log(projectArray)

   findObj.todos = [];
   findObj.todos.push(itemToAdd)
   projectArray.push(findObj)
   localStorage.setItem('projectArray', JSON.stringify(projectArray))

  }
   
   return {
      storeItems,
      addProjectToStore,
      getStoredItems,
      deleteProject,
      renderStoredItems,
      addToDoToStorage,
      deleteTodo,

   }
})()

 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (storage);

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Todo {
    constructor(title, description, priority, date) {
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.date = date;
    }

    getTitle() {
        return this.title;
    } 

    getDescription() {
        return this.description;
    }

    getPriority() {
        return this.priority;
    }

    getDate() {
        return this.date;
    }

}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);

/***/ }),

/***/ "./src/userInterface.js":
/*!******************************!*\
  !*** ./src/userInterface.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.js */ "./src/storage.js");
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo.js */ "./src/todo.js");




const domElements = (function() {
    const mainHeader = document.querySelector('#main-header');
    const project = document.querySelector('.add-project');
    const addForm = document.querySelector('.add-form');
    const cancel = document.querySelector('.cancel');
    const add = document.querySelector('.add');
    const deleteIcon =document.querySelector('.delete-icon');
    let projectValue = document.querySelector('#project')
    const section = document.querySelector('section');
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
        add.addEventListener('click', _storage_js__WEBPACK_IMPORTED_MODULE_1__["default"].deleteProject);
        
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
        
        function displayAddToDoForm() {
            form.classList.remove('details');
            form.style.backgroundColor = 'rgb(183, 199, 214)';
            addTodo.style.display = 'none'
            form.classList.remove('hide');
            addInputs.classList.remove('hide')
            titleInput.disabled = false;
            descriptionInput.disabled = false;
            priorityInput.disabled = false;
            dateInput.disabled = false;
            titleInput.value = '';
            descriptionInput.value = '';
            
            dateInput.value = '';
            
        }
        
         
    function createProjectElements() {
        let projectInput = new _project_js__WEBPACK_IMPORTED_MODULE_0__["default"](projectValue.value);
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
        _storage_js__WEBPACK_IMPORTED_MODULE_1__["default"].addProjectToStore(projectInput)
           
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
               
                renderStoredTodo()       
                addEventsToTodoListTitles()

            })   
        }
    }

    function addEventsToTodoListTitles() {
        
        const legend = document.querySelector('legend');
        const main = document.querySelector('main')
       
        const titleAndDate = document.querySelectorAll('.title-and-date');
        console.log(titleAndDate)
        for(const title of titleAndDate) {
            title.addEventListener('click', function(e) {
        
                const storage = JSON.parse(localStorage.getItem('projectArray'))
                let targetProject = storage.find((p) => p.name == mainHeader.textContent);
                console.log(targetProject)

                let todos = targetProject.todos;
                console.log(todos);

                let targetTodo = todos.find((todo) => todo.title == e.target.children[1].textContent);
                console.log(targetTodo) 


                section.classList.add('blur');
                addTodo.classList.add('blur');
                mainHeader.classList.add('blur');
                form.classList.remove('hide')
                form.classList.add('details');
                form.style.backgroundColor = 'rgb(155, 153, 150)'
                section.classList.add('parent-details')
                addInputs.classList.add('hide');
                titleInput.value = targetTodo.title;
                titleInput.disabled = true;
                descriptionInput.value = targetTodo.description;
                descriptionInput.disabled = true;
                priorityInput.value = targetTodo.priority;
                priorityInput.disabled = true;
                dateInput.value = targetTodo.date;
                dateInput.disabled = true;
                legend.textContent = targetTodo.title 
                return;
            })
        }
    }
    

    function renderStoredTodo() {
        const mainHeader = document.querySelector('#main-header');
        console.log(mainHeader)
        const section = document.querySelector('section');
        const projects = JSON.parse(localStorage.getItem('projectArray'))
        if(projects == null || projects == undefined || projects == '') return;
        console.log(projects)
        projects.forEach(p => {
           let targetTodos = p.todos;
            console.log(targetTodos)
    
        targetTodos.forEach(todo => {
            
            const checkbox = document.createElement('input');
            const close = document.createElement('img');
            close.src = 'icons/close.png';
            close.classList.add('icon');
            close.classList.add('close')
            const edit = document.createElement('img');
            edit.src = 'icons/edit.png';
            edit.classList.add('icon', 'edit');
            
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
            _storage_js__WEBPACK_IMPORTED_MODULE_1__["default"].deleteTodo()
                    
        });
    })
    }

    AddEventsToProjects()
  
    
    function cancelAddToDoForm() {
        section.classList.remove('blur');
        addTodo.classList.remove('blur');
        mainHeader.classList.remove('blur');
        section.classList.remove('parent-details')
        form.classList.add('hide');
        addTodo.style.display = 'block'   
    }

    function addFormInputsToProject() { 
        if (priorityInput.value !== '' && titleInput.value !== '' && dateInput.value !== '') {   
        let title = titleInput.value
        let description = descriptionInput.value;
        let priority = priorityInput.value;
        let date = dateInput.value;
        let todo = new _todo_js__WEBPACK_IMPORTED_MODULE_2__["default"](title, description, priority, date);
        console.log(todo)
        _storage_js__WEBPACK_IMPORTED_MODULE_1__["default"].addToDoToStorage(todo);
        form.classList.add('hide')
        addTodo.style.display = 'block';
        }else{
            alert('You must fill the form')
            return;
        }
    }

    function createTodoListTitles() {
        const checkbox = document.createElement('input');
        const close = document.createElement('img');
        close.src = 'icons/close.png';
        close.classList.add('icon');
        close.classList.add('close')
        const edit = document.createElement('img');
        edit.src = 'icons/edit.png';
        edit.classList.add('icon', 'edit');
        
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
        _storage_js__WEBPACK_IMPORTED_MODULE_1__["default"].deleteTodo()  
        titleInput.value = ''
        descriptionInput.value = ''
        dateInput.value = '' 
        addEventsToTodoListTitles(); 
        
    }
                    //   localStorage.clear()
    return{addEvent,
         createProjectElements,
       }

})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (domElements);



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var _userInterface_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userInterface.js */ "./src/userInterface.js");
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage.js */ "./src/storage.js");





 _userInterface_js__WEBPACK_IMPORTED_MODULE_1__["default"].addEvent()
 _storage_js__WEBPACK_IMPORTED_MODULE_2__["default"].deleteProject()
 
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQm9CO0FBQ1U7O0FBRTdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsT0FBTztBQUNQOztBQUVBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVU7QUFDVixPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVELENBQUMsaUVBQWU7Ozs7Ozs7Ozs7Ozs7O0FDN0loQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpRUFBZSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCZTtBQUNBO0FBQ047O0FBRTVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxpRUFBcUI7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLG1EQUFPO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEscUVBQXlCO0FBQ2pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSw4REFBa0I7QUFDOUI7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGdEQUFJO0FBQzNCO0FBQ0EsUUFBUSxvRUFBd0I7QUFDaEM7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDhEQUFrQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBOztBQUVBLENBQUM7O0FBRUQsaUVBQWUsV0FBVzs7Ozs7Ozs7VUNoVDFCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05tQztBQUNVO0FBQ1g7OztBQUdsQyxDQUFDLGtFQUFvQjtBQUNyQixDQUFDLGlFQUFxQjtBQUN0QixDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3VzZXJJbnRlcmZhY2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFByb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5pY29uID0gJ2ljb25zL2Rhc2hib2FyZC5wbmcnXG4gICAgICAgIHRoaXMudG9kb3MgPSBbXTtcbiAgICB9XG5cbiAgICBzZXROYW1lKG5hbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZVxuICAgIH1cblxuICAgIGdldE5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWVcbiAgICB9XG5cbiAgICBnZXRUb2RvcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9kb3M7XG4gICAgfVxuICAgIFxuICAgIGFkZFRvZG8odG9kbykge1xuICAgICAgICB0aGlzLnRvZG9zLnB1c2godG9kbyk7XG4gICAgfVxuXG4gICAgZGVsZXRlVG9kbyh0b2RvVGl0bGUpIHtcbiAgICAgICAgdGhpcy50b2Rvcy5maWx0ZXIoKHRvZG8pID0+IHRvZG8udGl0bGUgIT09IHRvZG9UaXRsZSApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0IiwiXG5cbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3QuanNcIjtcbmltcG9ydCBkb21FbGVtZW50cyBmcm9tIFwiLi91c2VySW50ZXJmYWNlLmpzXCI7XG5cbmNvbnN0IHN0b3JhZ2UgPSAoZnVuY3Rpb24oKSB7XG4gIFxuICAgZnVuY3Rpb24gc3RvcmVJdGVtcyhpdGVtVG9TdG9yZSkge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RBcnJheScsIEpTT04uc3RyaW5naWZ5KGl0ZW1Ub1N0b3JlKSlcbiAgIH1cblxuICAgZnVuY3Rpb24gZ2V0U3RvcmVkSXRlbXMoKSB7XG4gICAgICBcbiAgICBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0QXJyYXknKSkgICBcbiAgIH1cblxuICAgZnVuY3Rpb24gYWRkUHJvamVjdFRvU3RvcmUoaXRlbXNUb0FkZCkge1xuICAgICAgbGV0IHN0b3JlS2V5ID0gJ3Byb2plY3RBcnJheSdcbiAgICAgIGxldCBzdG9yZSA9IFtdXG4gICBcbiAgICAgIGNvbnN0IHByb2plY3RBcnJheSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHN0b3JlS2V5KTtcbiAgICAgIGlmKHByb2plY3RBcnJheSA9PSAnJykge1xuICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oc3RvcmVLZXksIEpTT04uc3RyaW5naWZ5KFtpdGVtc1RvQWRkXSkpXG5cbiAgICAgIH1lbHNlIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHN0b3JlS2V5KSA9PSBudWxsKXtcbiAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHN0b3JlS2V5LCBKU09OLnN0cmluZ2lmeShbaXRlbXNUb0FkZF0pKVxuXG4gICAgICB9ZWxzZXtcbiAgICAgICAgIHN0b3JlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShzdG9yZUtleSkpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKHN0b3JlKVxuICAgICAgICAgIHN0b3JlLnB1c2goaXRlbXNUb0FkZClcbiAgICAgICAgIHN0b3JlSXRlbXMoc3RvcmUpO1xuICAgICAgfVxuICAgfVxuXG4gIFxuICAgZnVuY3Rpb24gcmVuZGVyU3RvcmVkSXRlbXMoKSB7ICAgXG4gICAgICBcbiAgICAgIGxldCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWxpc3QnKVxuICAgICAgIGxldCBzdG9yZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RBcnJheScpKSBcbiAgICAgICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdEFycmF5JykgPT0gbnVsbCB8fCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdEFycmF5JykgPT0gJycgfHwgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RBcnJheScpID09IHVuZGVmaW5lZCkgcmV0dXJuXG4gICAgICAgICBzdG9yZS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgICAgICAgY29uc3QgcHJvamVjdE5hbWVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgICAgICBjb25zdCBkZWxldGVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cbiAgICAgICAgIHByb2plY3ROYW1lLmNsYXNzTGlzdC5hZGQoJ2F0dGFjaGVkJyk7XG4gICAgICAgICBwcm9qZWN0TmFtZUljb24uY2xhc3NMaXN0LmFkZCgnaWNvbnMnKTtcbiAgICAgICAgIHByb2plY3ROYW1lSWNvbi5zcmMgPSBpdGVtLmljb247XG4gICAgICAgICBzcGFuLnRleHRDb250ZW50ID0gaXRlbS5uYW1lO1xuICAgICAgICAgZGVsZXRlSWNvbi5zcmMgPSAnaWNvbnMvYmluLnBuZycgXG4gICAgICAgICBkZWxldGVJY29uLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS1pY29uJyk7XG5cbiAgICAgICAgIFxuICAgICAgICAgcHJvamVjdE5hbWUuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWVJY29uKTtcbiAgICAgICAgIHByb2plY3ROYW1lLmFwcGVuZENoaWxkKHNwYW4pOyBcbiAgICAgICAgIHByb2plY3ROYW1lLmFwcGVuZENoaWxkKGRlbGV0ZUljb24pO1xuICAgICAgICAgcHJvamVjdExpc3QuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUpIFxuICAgICAgICAgICBcbiAgICAgICAgIFxuICAgICAgfSk7XG4gICB9XG5cbnJlbmRlclN0b3JlZEl0ZW1zKClcblxuICAgZnVuY3Rpb24gZGVsZXRlUHJvamVjdCgpIHtcbiAgICAgIGNvbnN0IG1haW5IZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbi1oZWFkZXInKTtcbiAgICAgIGxldCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWxpc3QnKVxuICAgICAgY29uc3QgZGVsZXRlSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZWxldGUtaWNvbicpO1xuICAgICAgY29uc3QgYWRkVG9kbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdG9kbycpXG4gICAgICBjb25zb2xlLmxvZyhhZGRUb2RvKVxuICAgICAgZGVsZXRlSWNvbi5mb3JFYWNoKGljb24gPT4ge1xuICAgICAgICBcbiAgICAgICAgIGljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICBsZXQgc3RvcmUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0QXJyYXknKSk7XG4gICAgICAgICBjb25zb2xlLmxvZyhzdG9yZSlcbiAgICAgICAgIG1haW5IZWFkZXIudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucmVtb3ZlKClcbiAgICAgICAgIGFkZFRvZG8uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgIHN0b3JlID0gc3RvcmUuZmlsdGVyKChwKSA9PiBwLm5hbWUgIT09IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQudGV4dENvbnRlbnQpICBcbiAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0QXJyYXknLCBKU09OLnN0cmluZ2lmeShzdG9yZSkpO1xuICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgIH0pXG4gICAgICAgICAgXG4gICAgICB9KTtcbiAgfVxuICBkZWxldGVQcm9qZWN0KClcblxuICAgXG4gICBmdW5jdGlvbiBkZWxldGVUb2RvKCkge1xuICAgICAgY29uc3QgbWFpbkhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluLWhlYWRlcicpO1xuICAgICAgY29uc3QgZGVsZXRlVG9kb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2xvc2UnKTtcbiAgICAgIGRlbGV0ZVRvZG9zLmZvckVhY2goKGRlbGV0ZVRvZG8pID0+IHtcbiAgICAgICAgIGRlbGV0ZVRvZG8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpXG5cbiAgICAgICAgICAgIGxldCBzdG9yYWdlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdEFycmF5JykpO1xuICAgICAgICAgICAgbGV0IHRhcmdldFByb2plY3QgPSBzdG9yYWdlLmZpbmQoKHApID0+IHAubmFtZSA9PSBtYWluSGVhZGVyLnRleHRDb250ZW50KTtcbiAgICAgICAgICAgIGxldCBmaWx0ZXJlZFRvZG8gPSB0YXJnZXRQcm9qZWN0LnRvZG9zLmZpbHRlcigodG9kbykgPT4gdG9kby50aXRsZSAhPT0gZS50YXJnZXQucGFyZW50RWxlbWVudC5jaGlsZHJlblsxXS50ZXh0Q29udGVudCk7XG5cbiAgICAgICAgICAgIGRlbGV0ZSB0YXJnZXRQcm9qZWN0LnRvZG9zO1xuXG4gICAgICAgICAgICB0YXJnZXRQcm9qZWN0LnRvZG9zID0gZmlsdGVyZWRUb2RvO1xuICAgICAgICAgICAgbGV0IHN0b3JlZCA9IHN0b3JhZ2UuZmlsdGVyKChwKSA9PiBwLm5hbWUgIT09IG1haW5IZWFkZXIudGV4dENvbnRlbnQpO1xuXG4gICAgICAgICAgICBzdG9yZWQucHVzaCh0YXJnZXRQcm9qZWN0KTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0QXJyYXknLCBKU09OLnN0cmluZ2lmeShzdG9yZWQpKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgfSlcbiAgICAgIH0pXG4gIH1cbiAgZGVsZXRlVG9kbygpXG4gICBcbiAgZnVuY3Rpb24gYWRkVG9Eb1RvU3RvcmFnZShpdGVtVG9BZGQpIHtcbiAgIGNvbnN0IG1haW5IZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbi1oZWFkZXInKTtcbiAgIGxldCBhcnJheSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RBcnJheScpKVxuICAgbGV0IGZpbmRPYmogPSBhcnJheS5maW5kKChpdGVtKSA9PiBpdGVtLm5hbWUgPT0gbWFpbkhlYWRlci50ZXh0Q29udGVudCk7XG4gICBjb25zb2xlLmxvZyhmaW5kT2JqLnRvZG9zKVxuICAgbGV0IHByb2plY3RBcnJheSA9IGFycmF5LmZpbHRlcigocCkgPT4gcC5uYW1lICE9PSBtYWluSGVhZGVyLnRleHRDb250ZW50KVxuICAgY29uc29sZS5sb2cocHJvamVjdEFycmF5KVxuXG4gICBmaW5kT2JqLnRvZG9zID0gW107XG4gICBmaW5kT2JqLnRvZG9zLnB1c2goaXRlbVRvQWRkKVxuICAgcHJvamVjdEFycmF5LnB1c2goZmluZE9iailcbiAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0QXJyYXknLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0QXJyYXkpKVxuXG4gIH1cbiAgIFxuICAgcmV0dXJuIHtcbiAgICAgIHN0b3JlSXRlbXMsXG4gICAgICBhZGRQcm9qZWN0VG9TdG9yZSxcbiAgICAgIGdldFN0b3JlZEl0ZW1zLFxuICAgICAgZGVsZXRlUHJvamVjdCxcbiAgICAgIHJlbmRlclN0b3JlZEl0ZW1zLFxuICAgICAgYWRkVG9Eb1RvU3RvcmFnZSxcbiAgICAgIGRlbGV0ZVRvZG8sXG5cbiAgIH1cbn0pKClcblxuIGV4cG9ydCBkZWZhdWx0IHN0b3JhZ2UiLCJjbGFzcyBUb2RvIHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBkYXRlKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIHRoaXMuZGF0ZSA9IGRhdGU7XG4gICAgfVxuXG4gICAgZ2V0VGl0bGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRpdGxlO1xuICAgIH0gXG5cbiAgICBnZXREZXNjcmlwdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVzY3JpcHRpb247XG4gICAgfVxuXG4gICAgZ2V0UHJpb3JpdHkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByaW9yaXR5O1xuICAgIH1cblxuICAgIGdldERhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGU7XG4gICAgfVxuXG59XG5leHBvcnQgZGVmYXVsdCBUb2RvOyIsImltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdC5qcydcbmltcG9ydCBzdG9yYWdlIGZyb20gJy4vc3RvcmFnZS5qcydcbmltcG9ydCBUb2RvIGZyb20gJy4vdG9kby5qcydcblxuY29uc3QgZG9tRWxlbWVudHMgPSAoZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgbWFpbkhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluLWhlYWRlcicpO1xuICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXByb2plY3QnKTtcbiAgICBjb25zdCBhZGRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1mb3JtJyk7XG4gICAgY29uc3QgY2FuY2VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhbmNlbCcpO1xuICAgIGNvbnN0IGFkZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQnKTtcbiAgICBjb25zdCBkZWxldGVJY29uID1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVsZXRlLWljb24nKTtcbiAgICBsZXQgcHJvamVjdFZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QnKVxuICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzZWN0aW9uJyk7XG4gICAgIGNvbnN0IGFkZFRvZG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRvZG8nKTtcbiAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcbiAgICAgY29uc3QgY2FuY2VsRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYW5jZWwtZm9ybScpO1xuICAgICBsZXQgdGl0bGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZScpO1xuICAgICBsZXQgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjcmlwdGlvbicpO1xuICAgICBsZXQgcHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbXBvcnRhbmNlJyk7XG4gICAgIGxldCBkYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGF0ZScpOyBcbiAgICAgY29uc3QgYWRkSW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1mb3JtQnRuJyk7XG4gICAgXG4gICAgZnVuY3Rpb24gYWRkRXZlbnQoKSB7XG4gICAgICAgIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5QWRkUHJvamVjdCk7XG4gICAgICAgIGNhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhpZGVQcm9qZWN0Qm94KTtcbiAgICAgICAgYWRkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkUHJvamVjdFRvRG9tKTtcbiAgICAgICAgYWRkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGlkZUFkZEZvcm0pO1xuICAgICAgICBhZGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBBZGRFdmVudHNUb1Byb2plY3RzKTsgXG4gICAgICAgIGFkZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN0b3JhZ2UuZGVsZXRlUHJvamVjdCk7XG4gICAgICAgIFxuICAgICAgICBhZGRUb2RvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheUFkZFRvRG9Gb3JtKTtcbiAgICAgICAgYWRkSW5wdXRzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkRm9ybUlucHV0c1RvUHJvamVjdCk7XG4gICAgICAgIGFkZElucHV0cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFwcGVuZFRvZG9MaXN0VGl0dGxlc1RvRG9tKTtcbiAgICAgICAgY2FuY2VsRm9ybS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNhbmNlbEFkZFRvRG9Gb3JtKTsgICAgXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlzcGxheUFkZFByb2plY3QoKSB7XG4gICAgICAgIGFkZEZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpXG4gICAgICAgIHByb2plY3Quc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9XG4gICAgICAgIFxuICAgIGZ1bmN0aW9uIGhpZGVQcm9qZWN0Qm94KCkge1xuICAgICAgICBhZGRGb3JtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgcHJvamVjdC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhpZGVBZGRGb3JtKCkgeyAgXG4gICAgICAgIGNvbnN0IGFkZEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLWZvcm0nKTtcbiAgICAgICAgYWRkRm9ybS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgIHByb2plY3Quc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIHByb2plY3RWYWx1ZS52YWx1ZSA9ICcnXG4gICAgICAgIH0gXG4gICAgICAgIFxuICAgICAgICBmdW5jdGlvbiBkaXNwbGF5QWRkVG9Eb0Zvcm0oKSB7XG4gICAgICAgICAgICBmb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2RldGFpbHMnKTtcbiAgICAgICAgICAgIGZvcm0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JnYigxODMsIDE5OSwgMjE0KSc7XG4gICAgICAgICAgICBhZGRUb2RvLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgICAgICAgIGZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICAgICAgYWRkSW5wdXRzLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKVxuICAgICAgICAgICAgdGl0bGVJbnB1dC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgZGVzY3JpcHRpb25JbnB1dC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgcHJpb3JpdHlJbnB1dC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgZGF0ZUlucHV0LmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICB0aXRsZUlucHV0LnZhbHVlID0gJyc7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbklucHV0LnZhbHVlID0gJyc7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGRhdGVJbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICBcbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0RWxlbWVudHMoKSB7XG4gICAgICAgIGxldCBwcm9qZWN0SW5wdXQgPSBuZXcgUHJvamVjdChwcm9qZWN0VmFsdWUudmFsdWUpO1xuICAgICAgICBsZXQgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpOyAgXG4gICAgICAgIGxldCBwcm9qZWN0TmFtZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7IFxuICAgICAgICBjb25zdCBkZWxldGVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XG5cbiAgICAgICAvKiBcbiAgICAgICAgbGV0IHByb2plY3RBcnJheSA9W11cbiAgICAgICAgbGV0IHByb2plY3ROYW1lcyA9IFtdXG4gICAgICAgIHByb2plY3RBcnJheSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RBcnJheScpKTtcbiAgICAgICAgXG4gICAgICAgIHByb2plY3RBcnJheS5mb3JFYWNoKG9iaiA9PiB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgcHJvamVjdE5hbWVzLnB1c2gob2JqLm5hbWUpIFxuICAgICAgICB9KVxuICAgICAgICBpZihwcm9qZWN0TmFtZXMuaW5jbHVkZXMocHJvamVjdFZhbHVlLnZhbHVlKSkge1xuICAgICAgICAgICAgYWxlcnQoJ1RoaXMgcHJvamVjdCBhbHJlYWR5IGV4aXN0cycpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgICAgICBcbiovXG4gICAgICAgIHByb2plY3ROYW1lLmNsYXNzTGlzdC5hZGQoJ2F0dGFjaGVkJyk7XG4gICAgICAgIHByb2plY3ROYW1lSWNvbi5zcmMgPSBwcm9qZWN0SW5wdXQuaWNvbjtcbiAgICAgICAgcHJvamVjdE5hbWVJY29uLmNsYXNzTGlzdC5hZGQoJ2ljb25zJylcbiAgICAgICAgZGVsZXRlSWNvbi5zcmMgPSAnaWNvbnMvYmluLnBuZycgXG4gICAgICAgIGRlbGV0ZUljb24uY2xhc3NMaXN0LmFkZCgnZGVsZXRlLWljb24nKTsgICAgICAgICAgIFxuICAgICAgICBzcGFuLnRleHRDb250ZW50ID0gcHJvamVjdElucHV0Lm5hbWU7ICBcbiAgICAgICAgXG4gICAgICAgIHByb2plY3ROYW1lLmFwcGVuZENoaWxkKHByb2plY3ROYW1lSWNvbik7XG4gICAgICAgIHByb2plY3ROYW1lLmFwcGVuZENoaWxkKHNwYW4pO1xuICAgICAgICBwcm9qZWN0TmFtZS5hcHBlbmRDaGlsZChkZWxldGVJY29uKTtcbiAgICAgICAgc3RvcmFnZS5hZGRQcm9qZWN0VG9TdG9yZShwcm9qZWN0SW5wdXQpXG4gICAgICAgICAgIFxuICAgICAgICByZXR1cm4gcHJvamVjdE5hbWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkUHJvamVjdFRvRG9tKCkgeyBcbiAgICAgICAgaWYocHJvamVjdFZhbHVlLnZhbHVlID09ICcnKSByZXR1cm5cbiAgICAgICAgICAgIFxuICAgICAgICBsZXQgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1saXN0JykgICAgICAgXG4gICAgICAgIHByb2plY3RMaXN0LmFwcGVuZENoaWxkKGNyZWF0ZVByb2plY3RFbGVtZW50cygpKTsgICAgICAgIFxuICAgIFxuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBBZGRFdmVudHNUb1Byb2plY3RzKCkgeyAgICAgXG4gICAgICAgIGNvbnN0IGF0dGFjaGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmF0dGFjaGVkJyk7XG4gICAgICAgIGZvcihjb25zdCBhdHRhY2ggb2YgYXR0YWNoZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IG1haW5IZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbi1oZWFkZXInKTtcbiAgICAgICAgICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzZWN0aW9uJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhtYWluSGVhZGVyKVxuICAgICAgICAgICAgYXR0YWNoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgICAgIHNlY3Rpb24uaW5uZXJIVE1MID0gJydcbiAgICAgICAgICAgICAgICBjb25zdCBhZGRUb2RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10b2RvJylcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhZGRUb2RvKVxuICAgICAgICAgICAgICAgIG1haW5IZWFkZXIudGV4dENvbnRlbnQgPSBlLnRhcmdldC50ZXh0Q29udGVudDtcbiAgICAgICAgICAgICAgICBhZGRUb2RvLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snICAgICAgICAgICAgXG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICByZW5kZXJTdG9yZWRUb2RvKCkgICAgICAgXG4gICAgICAgICAgICAgICAgYWRkRXZlbnRzVG9Ub2RvTGlzdFRpdGxlcygpXG5cbiAgICAgICAgICAgIH0pICAgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRFdmVudHNUb1RvZG9MaXN0VGl0bGVzKCkge1xuICAgICAgICBcbiAgICAgICAgY29uc3QgbGVnZW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbGVnZW5kJyk7XG4gICAgICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJylcbiAgICAgICBcbiAgICAgICAgY29uc3QgdGl0bGVBbmREYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRpdGxlLWFuZC1kYXRlJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRpdGxlQW5kRGF0ZSlcbiAgICAgICAgZm9yKGNvbnN0IHRpdGxlIG9mIHRpdGxlQW5kRGF0ZSkge1xuICAgICAgICAgICAgdGl0bGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IHN0b3JhZ2UgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0QXJyYXknKSlcbiAgICAgICAgICAgICAgICBsZXQgdGFyZ2V0UHJvamVjdCA9IHN0b3JhZ2UuZmluZCgocCkgPT4gcC5uYW1lID09IG1haW5IZWFkZXIudGV4dENvbnRlbnQpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhcmdldFByb2plY3QpXG5cbiAgICAgICAgICAgICAgICBsZXQgdG9kb3MgPSB0YXJnZXRQcm9qZWN0LnRvZG9zO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRvZG9zKTtcblxuICAgICAgICAgICAgICAgIGxldCB0YXJnZXRUb2RvID0gdG9kb3MuZmluZCgodG9kbykgPT4gdG9kby50aXRsZSA9PSBlLnRhcmdldC5jaGlsZHJlblsxXS50ZXh0Q29udGVudCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGFyZ2V0VG9kbykgXG5cblxuICAgICAgICAgICAgICAgIHNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnYmx1cicpO1xuICAgICAgICAgICAgICAgIGFkZFRvZG8uY2xhc3NMaXN0LmFkZCgnYmx1cicpO1xuICAgICAgICAgICAgICAgIG1haW5IZWFkZXIuY2xhc3NMaXN0LmFkZCgnYmx1cicpO1xuICAgICAgICAgICAgICAgIGZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpXG4gICAgICAgICAgICAgICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdkZXRhaWxzJyk7XG4gICAgICAgICAgICAgICAgZm9ybS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiKDE1NSwgMTUzLCAxNTApJ1xuICAgICAgICAgICAgICAgIHNlY3Rpb24uY2xhc3NMaXN0LmFkZCgncGFyZW50LWRldGFpbHMnKVxuICAgICAgICAgICAgICAgIGFkZElucHV0cy5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgICAgICAgICAgdGl0bGVJbnB1dC52YWx1ZSA9IHRhcmdldFRvZG8udGl0bGU7XG4gICAgICAgICAgICAgICAgdGl0bGVJbnB1dC5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb25JbnB1dC52YWx1ZSA9IHRhcmdldFRvZG8uZGVzY3JpcHRpb247XG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb25JbnB1dC5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgcHJpb3JpdHlJbnB1dC52YWx1ZSA9IHRhcmdldFRvZG8ucHJpb3JpdHk7XG4gICAgICAgICAgICAgICAgcHJpb3JpdHlJbnB1dC5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgZGF0ZUlucHV0LnZhbHVlID0gdGFyZ2V0VG9kby5kYXRlO1xuICAgICAgICAgICAgICAgIGRhdGVJbnB1dC5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgbGVnZW5kLnRleHRDb250ZW50ID0gdGFyZ2V0VG9kby50aXRsZSBcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuXG4gICAgZnVuY3Rpb24gcmVuZGVyU3RvcmVkVG9kbygpIHtcbiAgICAgICAgY29uc3QgbWFpbkhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluLWhlYWRlcicpO1xuICAgICAgICBjb25zb2xlLmxvZyhtYWluSGVhZGVyKVxuICAgICAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2VjdGlvbicpO1xuICAgICAgICBjb25zdCBwcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RBcnJheScpKVxuICAgICAgICBpZihwcm9qZWN0cyA9PSBudWxsIHx8IHByb2plY3RzID09IHVuZGVmaW5lZCB8fCBwcm9qZWN0cyA9PSAnJykgcmV0dXJuO1xuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0cylcbiAgICAgICAgcHJvamVjdHMuZm9yRWFjaChwID0+IHtcbiAgICAgICAgICAgbGV0IHRhcmdldFRvZG9zID0gcC50b2RvcztcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhcmdldFRvZG9zKVxuICAgIFxuICAgICAgICB0YXJnZXRUb2Rvcy5mb3JFYWNoKHRvZG8gPT4ge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICBjb25zdCBjbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgY2xvc2Uuc3JjID0gJ2ljb25zL2Nsb3NlLnBuZyc7XG4gICAgICAgICAgICBjbG9zZS5jbGFzc0xpc3QuYWRkKCdpY29uJyk7XG4gICAgICAgICAgICBjbG9zZS5jbGFzc0xpc3QuYWRkKCdjbG9zZScpXG4gICAgICAgICAgICBjb25zdCBlZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICBlZGl0LnNyYyA9ICdpY29ucy9lZGl0LnBuZyc7XG4gICAgICAgICAgICBlZGl0LmNsYXNzTGlzdC5hZGQoJ2ljb24nLCAnZWRpdCcpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjaGVja2JveC50eXBlID0gJ2NoZWNrYm94J1xuICAgICAgICAgICAgY2hlY2tib3guc2V0QXR0cmlidXRlKCdpZCcsICdjaGVja2JveCcpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCB0aXRsZUFuZERhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICB0aXRsZUFuZERhdGUuY2xhc3NMaXN0LmFkZCgndGl0bGUtYW5kLWRhdGUnKVxuICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cbiAgICAgICAgICAgIHRpdGxlQW5kRGF0ZS5hcHBlbmRDaGlsZChjaGVja2JveCk7XG4gICAgICAgICAgICB0aXRsZUFuZERhdGUuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgICAgICAgdGl0bGVBbmREYXRlLmFwcGVuZENoaWxkKGRhdGUpOyBcbiAgICAgICAgICAgIHRpdGxlQW5kRGF0ZS5hcHBlbmRDaGlsZChlZGl0KVxuICAgICAgICAgICAgdGl0bGVBbmREYXRlLmFwcGVuZENoaWxkKGNsb3NlKTsgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IHRvZG8udGl0bGU7XG4gICAgICAgICAgICBkYXRlLnRleHRDb250ZW50ID0gdG9kby5kYXRlO1xuICAgICAgICAgICAgc2VjdGlvbi5hcHBlbmRDaGlsZCh0aXRsZUFuZERhdGUpOyBcbiAgICAgICAgICAgIHN0b3JhZ2UuZGVsZXRlVG9kbygpXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICB9KTtcbiAgICB9KVxuICAgIH1cblxuICAgIEFkZEV2ZW50c1RvUHJvamVjdHMoKVxuICBcbiAgICBcbiAgICBmdW5jdGlvbiBjYW5jZWxBZGRUb0RvRm9ybSgpIHtcbiAgICAgICAgc2VjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdibHVyJyk7XG4gICAgICAgIGFkZFRvZG8uY2xhc3NMaXN0LnJlbW92ZSgnYmx1cicpO1xuICAgICAgICBtYWluSGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2JsdXInKTtcbiAgICAgICAgc2VjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdwYXJlbnQtZGV0YWlscycpXG4gICAgICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICBhZGRUb2RvLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snICAgXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkRm9ybUlucHV0c1RvUHJvamVjdCgpIHsgXG4gICAgICAgIGlmIChwcmlvcml0eUlucHV0LnZhbHVlICE9PSAnJyAmJiB0aXRsZUlucHV0LnZhbHVlICE9PSAnJyAmJiBkYXRlSW5wdXQudmFsdWUgIT09ICcnKSB7ICAgXG4gICAgICAgIGxldCB0aXRsZSA9IHRpdGxlSW5wdXQudmFsdWVcbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25JbnB1dC52YWx1ZTtcbiAgICAgICAgbGV0IHByaW9yaXR5ID0gcHJpb3JpdHlJbnB1dC52YWx1ZTtcbiAgICAgICAgbGV0IGRhdGUgPSBkYXRlSW5wdXQudmFsdWU7XG4gICAgICAgIGxldCB0b2RvID0gbmV3IFRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgZGF0ZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRvZG8pXG4gICAgICAgIHN0b3JhZ2UuYWRkVG9Eb1RvU3RvcmFnZSh0b2RvKTtcbiAgICAgICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdoaWRlJylcbiAgICAgICAgYWRkVG9kby5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBhbGVydCgnWW91IG11c3QgZmlsbCB0aGUgZm9ybScpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVUb2RvTGlzdFRpdGxlcygpIHtcbiAgICAgICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBjb25zdCBjbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBjbG9zZS5zcmMgPSAnaWNvbnMvY2xvc2UucG5nJztcbiAgICAgICAgY2xvc2UuY2xhc3NMaXN0LmFkZCgnaWNvbicpO1xuICAgICAgICBjbG9zZS5jbGFzc0xpc3QuYWRkKCdjbG9zZScpXG4gICAgICAgIGNvbnN0IGVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgZWRpdC5zcmMgPSAnaWNvbnMvZWRpdC5wbmcnO1xuICAgICAgICBlZGl0LmNsYXNzTGlzdC5hZGQoJ2ljb24nLCAnZWRpdCcpO1xuICAgICAgICBcbiAgICAgICAgY2hlY2tib3gudHlwZSA9ICdjaGVja2JveCdcbiAgICAgICAgY2hlY2tib3guc2V0QXR0cmlidXRlKCdpZCcsICdjaGVja2JveCcpO1xuICAgICAgICBcblxuICAgICAgICBjb25zdCB0aXRsZUFuZERhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgICAgY29uc3QgdG9kb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHRvZG9EYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBcbiAgICAgICAgdGl0bGVBbmREYXRlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlLWFuZC1kYXRlJyk7XG4gICAgICAgIHRvZG9UaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlSW5wdXQudmFsdWU7XG4gICAgICAgIHRvZG9EYXRlLnRleHRDb250ZW50ID0gZGF0ZUlucHV0LnZhbHVlO1xuICAgICAgICB0aXRsZUFuZERhdGUuYXBwZW5kQ2hpbGQoY2hlY2tib3gpXG4gICAgICAgIHRpdGxlQW5kRGF0ZS5hcHBlbmRDaGlsZCh0b2RvVGl0bGUpO1xuICAgICAgICB0aXRsZUFuZERhdGUuYXBwZW5kQ2hpbGQodG9kb0RhdGUpO1xuICAgICAgICB0aXRsZUFuZERhdGUuYXBwZW5kQ2hpbGQoZWRpdCk7XG4gICAgICAgIHRpdGxlQW5kRGF0ZS5hcHBlbmRDaGlsZChjbG9zZSk7XG4gICAgICAgIHJldHVybiB0aXRsZUFuZERhdGU7ICAgICAgICBcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhcHBlbmRUb2RvTGlzdFRpdHRsZXNUb0RvbSgpIHtcbiAgICAgICAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlY3Rpb24nKTsgICAgXG4gICAgICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQoY3JlYXRlVG9kb0xpc3RUaXRsZXMoKSlcbiAgICAgICAgYWRkVG9kby5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJykgXG4gICAgICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgnaGlkZScpIFxuICAgICAgICBzdG9yYWdlLmRlbGV0ZVRvZG8oKSAgXG4gICAgICAgIHRpdGxlSW5wdXQudmFsdWUgPSAnJ1xuICAgICAgICBkZXNjcmlwdGlvbklucHV0LnZhbHVlID0gJydcbiAgICAgICAgZGF0ZUlucHV0LnZhbHVlID0gJycgXG4gICAgICAgIGFkZEV2ZW50c1RvVG9kb0xpc3RUaXRsZXMoKTsgXG4gICAgICAgIFxuICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gICBsb2NhbFN0b3JhZ2UuY2xlYXIoKVxuICAgIHJldHVybnthZGRFdmVudCxcbiAgICAgICAgIGNyZWF0ZVByb2plY3RFbGVtZW50cyxcbiAgICAgICB9XG5cbn0pKClcblxuZXhwb3J0IGRlZmF1bHQgZG9tRWxlbWVudHNcblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0LmpzXCI7XG5pbXBvcnQgZG9tRWxlbWVudHMgZnJvbSBcIi4vdXNlckludGVyZmFjZS5qc1wiO1xuaW1wb3J0IHN0b3JhZ2UgZnJvbSBcIi4vc3RvcmFnZS5qc1wiXG5cblxuIGRvbUVsZW1lbnRzLmFkZEV2ZW50KClcbiBzdG9yYWdlLmRlbGV0ZVByb2plY3QoKVxuICJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==