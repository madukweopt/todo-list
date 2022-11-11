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
   let projectArray = array.filter((props) => props.name !== mainHeader.textContent)

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
               
                renderStoredTodo(e)       
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
        let title = titleInput.value
        let description = descriptionInput.value;
        let priority = priorityInput.value;
        let date = dateInput.value;
        let todo = new _todo_js__WEBPACK_IMPORTED_MODULE_2__["default"](title, description, priority, date);
        console.log(todo)
        _storage_js__WEBPACK_IMPORTED_MODULE_1__["default"].addToDoToStorage(todo);
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
                    //  localStorage.clear()
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7O0FDNUJvQjtBQUNVOztBQUU3QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE9BQU87QUFDUDs7QUFFQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRCxDQUFDLGlFQUFlOzs7Ozs7Ozs7Ozs7OztBQ3hJaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUVBQWUsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QmU7QUFDQTtBQUNOOztBQUU1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsaUVBQXFCO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixtREFBTztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHFFQUF5QjtBQUNqQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSw4REFBa0I7QUFDOUI7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGdEQUFJO0FBQzNCO0FBQ0EsUUFBUSxvRUFBd0I7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSw4REFBa0I7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7O0FBRUEsQ0FBQzs7QUFFRCxpRUFBZSxXQUFXOzs7Ozs7OztVQ3BTMUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTm1DO0FBQ1U7QUFDWDs7O0FBR2xDLENBQUMsa0VBQW9CO0FBQ3JCLENBQUMsaUVBQXFCO0FBQ3RCLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdXNlckludGVyZmFjZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgUHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmljb24gPSAnaWNvbnMvZGFzaGJvYXJkLnBuZydcbiAgICAgICAgdGhpcy50b2RvcyA9IFtdO1xuICAgIH1cblxuICAgIHNldE5hbWUobmFtZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lXG4gICAgfVxuXG4gICAgZ2V0TmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZVxuICAgIH1cblxuICAgIGdldFRvZG9zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50b2RvcztcbiAgICB9XG4gICAgXG4gICAgYWRkVG9kbyh0b2RvKSB7XG4gICAgICAgIHRoaXMudG9kb3MucHVzaCh0b2RvKTtcbiAgICB9XG5cbiAgICBkZWxldGVUb2RvKHRvZG9UaXRsZSkge1xuICAgICAgICB0aGlzLnRvZG9zLmZpbHRlcigodG9kbykgPT4gdG9kby50aXRsZSAhPT0gdG9kb1RpdGxlIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3QiLCJpbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0LmpzXCI7XG5pbXBvcnQgZG9tRWxlbWVudHMgZnJvbSBcIi4vdXNlckludGVyZmFjZS5qc1wiO1xuXG5jb25zdCBzdG9yYWdlID0gKGZ1bmN0aW9uKCkge1xuICBcbiAgIGZ1bmN0aW9uIHN0b3JlSXRlbXMoaXRlbVRvU3RvcmUpIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0QXJyYXknLCBKU09OLnN0cmluZ2lmeShpdGVtVG9TdG9yZSkpXG4gICB9XG5cbiAgIGZ1bmN0aW9uIGdldFN0b3JlZEl0ZW1zKCkge1xuICAgICAgXG4gICAgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdEFycmF5JykpICAgXG4gICB9XG5cbiAgIGZ1bmN0aW9uIGFkZFByb2plY3RUb1N0b3JlKGl0ZW1zVG9BZGQpIHtcbiAgICAgIGxldCBzdG9yZUtleSA9ICdwcm9qZWN0QXJyYXknXG4gICAgICBsZXQgc3RvcmUgPSBbXVxuICAgXG4gICAgICBjb25zdCBwcm9qZWN0QXJyYXkgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShzdG9yZUtleSk7XG4gICAgICBpZihwcm9qZWN0QXJyYXkgPT0gJycpIHtcbiAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHN0b3JlS2V5LCBKU09OLnN0cmluZ2lmeShbaXRlbXNUb0FkZF0pKVxuXG4gICAgICB9ZWxzZSBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbShzdG9yZUtleSkgPT0gbnVsbCl7XG4gICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShzdG9yZUtleSwgSlNPTi5zdHJpbmdpZnkoW2l0ZW1zVG9BZGRdKSlcblxuICAgICAgfWVsc2V7XG4gICAgICAgICBzdG9yZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oc3RvcmVLZXkpKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhzdG9yZSlcbiAgICAgICAgICBzdG9yZS5wdXNoKGl0ZW1zVG9BZGQpXG4gICAgICAgICBzdG9yZUl0ZW1zKHN0b3JlKTtcbiAgICAgIH1cbiAgIH1cblxuICBcbiAgIGZ1bmN0aW9uIHJlbmRlclN0b3JlZEl0ZW1zKCkgeyAgIFxuICAgICAgXG4gICAgICBsZXQgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1saXN0JylcbiAgICAgICBsZXQgc3RvcmUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0QXJyYXknKSkgXG4gICAgICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RBcnJheScpID09IG51bGwgfHwgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RBcnJheScpID09ICcnIHx8IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0QXJyYXknKSA9PSB1bmRlZmluZWQpIHJldHVyblxuICAgICAgICAgc3RvcmUuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICAgICAgIGNvbnN0IHByb2plY3ROYW1lSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgICAgICAgY29uc3QgZGVsZXRlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXG4gICAgICAgICBwcm9qZWN0TmFtZS5jbGFzc0xpc3QuYWRkKCdhdHRhY2hlZCcpO1xuICAgICAgICAgcHJvamVjdE5hbWVJY29uLmNsYXNzTGlzdC5hZGQoJ2ljb25zJyk7XG4gICAgICAgICBwcm9qZWN0TmFtZUljb24uc3JjID0gaXRlbS5pY29uO1xuICAgICAgICAgc3Bhbi50ZXh0Q29udGVudCA9IGl0ZW0ubmFtZTtcbiAgICAgICAgIGRlbGV0ZUljb24uc3JjID0gJ2ljb25zL2Jpbi5wbmcnIFxuICAgICAgICAgZGVsZXRlSWNvbi5jbGFzc0xpc3QuYWRkKCdkZWxldGUtaWNvbicpO1xuXG4gICAgICAgICBcbiAgICAgICAgIHByb2plY3ROYW1lLmFwcGVuZENoaWxkKHByb2plY3ROYW1lSWNvbik7XG4gICAgICAgICBwcm9qZWN0TmFtZS5hcHBlbmRDaGlsZChzcGFuKTsgXG4gICAgICAgICBwcm9qZWN0TmFtZS5hcHBlbmRDaGlsZChkZWxldGVJY29uKTtcbiAgICAgICAgIHByb2plY3RMaXN0LmFwcGVuZENoaWxkKHByb2plY3ROYW1lKSBcbiAgICAgICAgICAgXG4gICAgICAgICBcbiAgICAgIH0pO1xuICAgfVxuXG5yZW5kZXJTdG9yZWRJdGVtcygpXG5cbiAgIGZ1bmN0aW9uIGRlbGV0ZVByb2plY3QoKSB7XG4gICAgICBjb25zdCBtYWluSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4taGVhZGVyJyk7XG4gICAgICBsZXQgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1saXN0JylcbiAgICAgIGNvbnN0IGRlbGV0ZUljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVsZXRlLWljb24nKTtcbiAgICAgIGNvbnN0IGFkZFRvZG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRvZG8nKVxuICAgICAgY29uc29sZS5sb2coYWRkVG9kbylcbiAgICAgIGRlbGV0ZUljb24uZm9yRWFjaChpY29uID0+IHtcbiAgICAgICAgXG4gICAgICAgICBpY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgbGV0IHN0b3JlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdEFycmF5JykpO1xuICAgICAgICAgY29uc29sZS5sb2coc3RvcmUpXG4gICAgICAgICBtYWluSGVhZGVyLnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpXG4gICAgICAgICBhZGRUb2RvLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICBzdG9yZSA9IHN0b3JlLmZpbHRlcigocCkgPT4gcC5uYW1lICE9PSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnRleHRDb250ZW50KSAgXG4gICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdEFycmF5JywgSlNPTi5zdHJpbmdpZnkoc3RvcmUpKTtcbiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICB9KVxuICAgICAgICAgIFxuICAgICAgfSk7XG4gIH1cbiAgZGVsZXRlUHJvamVjdCgpXG5cbiAgIFxuICAgZnVuY3Rpb24gZGVsZXRlVG9kbygpIHtcbiAgICAgIGNvbnN0IG1haW5IZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbi1oZWFkZXInKTtcbiAgICAgIGNvbnN0IGRlbGV0ZVRvZG9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNsb3NlJyk7XG4gICAgICBkZWxldGVUb2Rvcy5mb3JFYWNoKChkZWxldGVUb2RvKSA9PiB7XG4gICAgICAgICBkZWxldGVUb2RvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5yZW1vdmUoKVxuXG4gICAgICAgICAgICBsZXQgc3RvcmFnZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RBcnJheScpKTtcbiAgICAgICAgICAgIGxldCB0YXJnZXRQcm9qZWN0ID0gc3RvcmFnZS5maW5kKChwKSA9PiBwLm5hbWUgPT0gbWFpbkhlYWRlci50ZXh0Q29udGVudCk7XG4gICAgICAgICAgICBsZXQgZmlsdGVyZWRUb2RvID0gdGFyZ2V0UHJvamVjdC50b2Rvcy5maWx0ZXIoKHRvZG8pID0+IHRvZG8udGl0bGUgIT09IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2hpbGRyZW5bMV0udGV4dENvbnRlbnQpO1xuXG4gICAgICAgICAgICBkZWxldGUgdGFyZ2V0UHJvamVjdC50b2RvcztcblxuICAgICAgICAgICAgdGFyZ2V0UHJvamVjdC50b2RvcyA9IGZpbHRlcmVkVG9kbztcbiAgICAgICAgICAgIGxldCBzdG9yZWQgPSBzdG9yYWdlLmZpbHRlcigocCkgPT4gcC5uYW1lICE9PSBtYWluSGVhZGVyLnRleHRDb250ZW50KTtcblxuICAgICAgICAgICAgc3RvcmVkLnB1c2godGFyZ2V0UHJvamVjdCk7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdEFycmF5JywgSlNPTi5zdHJpbmdpZnkoc3RvcmVkKSk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgIH0pXG4gICAgICB9KVxuICB9XG4gIGRlbGV0ZVRvZG8oKVxuICAgXG4gIGZ1bmN0aW9uIGFkZFRvRG9Ub1N0b3JhZ2UoaXRlbVRvQWRkKSB7XG4gICBjb25zdCBtYWluSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4taGVhZGVyJyk7XG4gICBsZXQgYXJyYXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0QXJyYXknKSlcbiAgIGxldCBmaW5kT2JqID0gYXJyYXkuZmluZCgoaXRlbSkgPT4gaXRlbS5uYW1lID09IG1haW5IZWFkZXIudGV4dENvbnRlbnQpO1xuICAgbGV0IHByb2plY3RBcnJheSA9IGFycmF5LmZpbHRlcigocHJvcHMpID0+IHByb3BzLm5hbWUgIT09IG1haW5IZWFkZXIudGV4dENvbnRlbnQpXG5cbiAgIGZpbmRPYmoudG9kb3MucHVzaChpdGVtVG9BZGQpXG4gICBwcm9qZWN0QXJyYXkucHVzaChmaW5kT2JqKVxuICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RBcnJheScsIEpTT04uc3RyaW5naWZ5KHByb2plY3RBcnJheSkpXG5cbiAgfVxuICAgXG4gICByZXR1cm4ge1xuICAgICAgc3RvcmVJdGVtcyxcbiAgICAgIGFkZFByb2plY3RUb1N0b3JlLFxuICAgICAgZ2V0U3RvcmVkSXRlbXMsXG4gICAgICBkZWxldGVQcm9qZWN0LFxuICAgICAgcmVuZGVyU3RvcmVkSXRlbXMsXG4gICAgICBhZGRUb0RvVG9TdG9yYWdlLFxuICAgICAgZGVsZXRlVG9kbyxcblxuICAgfVxufSkoKVxuXG4gZXhwb3J0IGRlZmF1bHQgc3RvcmFnZSIsImNsYXNzIFRvZG8ge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGRhdGUpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgdGhpcy5kYXRlID0gZGF0ZTtcbiAgICB9XG5cbiAgICBnZXRUaXRsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGl0bGU7XG4gICAgfSBcblxuICAgIGdldERlc2NyaXB0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kZXNjcmlwdGlvbjtcbiAgICB9XG5cbiAgICBnZXRQcmlvcml0eSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJpb3JpdHk7XG4gICAgfVxuXG4gICAgZ2V0RGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0ZTtcbiAgICB9XG5cbn1cbmV4cG9ydCBkZWZhdWx0IFRvZG87IiwiaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0LmpzJ1xuaW1wb3J0IHN0b3JhZ2UgZnJvbSAnLi9zdG9yYWdlLmpzJ1xuaW1wb3J0IFRvZG8gZnJvbSAnLi90b2RvLmpzJ1xuXG5jb25zdCBkb21FbGVtZW50cyA9IChmdW5jdGlvbigpIHtcbiAgICBjb25zdCBtYWluSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4taGVhZGVyJyk7XG4gICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtcHJvamVjdCcpO1xuICAgIGNvbnN0IGFkZEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLWZvcm0nKTtcbiAgICBjb25zdCBjYW5jZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FuY2VsJyk7XG4gICAgY29uc3QgYWRkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZCcpO1xuICAgIGNvbnN0IGRlbGV0ZUljb24gPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZWxldGUtaWNvbicpO1xuICAgIGxldCBwcm9qZWN0VmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdCcpXG4gICAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlY3Rpb24nKTtcbiAgICAgY29uc3QgYWRkVG9kbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdG9kbycpO1xuICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpO1xuICAgICBjb25zdCBjYW5jZWxGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhbmNlbC1mb3JtJyk7XG4gICAgIGxldCB0aXRsZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlJyk7XG4gICAgIGxldCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJyk7XG4gICAgIGxldCBwcmlvcml0eUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ltcG9ydGFuY2UnKTtcbiAgICAgbGV0IGRhdGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkYXRlJyk7IFxuICAgICBjb25zdCBhZGRJbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLWZvcm1CdG4nKTtcbiAgICBcbiAgICBmdW5jdGlvbiBhZGRFdmVudCgpIHtcbiAgICAgICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc3BsYXlBZGRQcm9qZWN0KTtcbiAgICAgICAgY2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGlkZVByb2plY3RCb3gpO1xuICAgICAgICBhZGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRQcm9qZWN0VG9Eb20pO1xuICAgICAgICBhZGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoaWRlQWRkRm9ybSk7XG4gICAgICAgIGFkZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIEFkZEV2ZW50c1RvUHJvamVjdHMpOyBcbiAgICAgICAgYWRkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3RvcmFnZS5kZWxldGVQcm9qZWN0KTtcbiAgICAgICAgXG4gICAgICAgIGFkZFRvZG8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5QWRkVG9Eb0Zvcm0pO1xuICAgICAgICBhZGRJbnB1dHMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRGb3JtSW5wdXRzVG9Qcm9qZWN0KTtcbiAgICAgICAgYWRkSW5wdXRzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXBwZW5kVG9kb0xpc3RUaXR0bGVzVG9Eb20pO1xuICAgICAgICBjYW5jZWxGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FuY2VsQWRkVG9Eb0Zvcm0pOyAgICBcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkaXNwbGF5QWRkUHJvamVjdCgpIHtcbiAgICAgICAgYWRkRm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJylcbiAgICAgICAgcHJvamVjdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cbiAgICAgICAgXG4gICAgZnVuY3Rpb24gaGlkZVByb2plY3RCb3goKSB7XG4gICAgICAgIGFkZEZvcm0uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICBwcm9qZWN0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGlkZUFkZEZvcm0oKSB7ICBcbiAgICAgICAgY29uc3QgYWRkRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtZm9ybScpO1xuICAgICAgICBhZGRGb3JtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgcHJvamVjdC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgcHJvamVjdFZhbHVlLnZhbHVlID0gJydcbiAgICAgICAgfSBcbiAgICAgICAgXG4gICAgICAgIGZ1bmN0aW9uIGRpc3BsYXlBZGRUb0RvRm9ybSgpIHtcbiAgICAgICAgICAgIGZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnZGV0YWlscycpO1xuICAgICAgICAgICAgZm9ybS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiKDE4MywgMTk5LCAyMTQpJztcbiAgICAgICAgICAgIGFkZFRvZG8uc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgICAgICAgZm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgICAgICBhZGRJbnB1dHMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpXG4gICAgICAgICAgICB0aXRsZUlucHV0LmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbklucHV0LmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICBwcmlvcml0eUlucHV0LmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICBkYXRlSW5wdXQuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRpdGxlSW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uSW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZGF0ZUlucHV0LnZhbHVlID0gJyc7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgIFxuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb2plY3RFbGVtZW50cygpIHtcbiAgICAgICAgbGV0IHByb2plY3RJbnB1dCA9IG5ldyBQcm9qZWN0KHByb2plY3RWYWx1ZS52YWx1ZSk7XG4gICAgICAgIGxldCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7ICBcbiAgICAgICAgbGV0IHByb2plY3ROYW1lSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTsgXG4gICAgICAgIGNvbnN0IGRlbGV0ZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcblxuICAgICAgIC8qIFxuICAgICAgICBsZXQgcHJvamVjdEFycmF5ID1bXVxuICAgICAgICBsZXQgcHJvamVjdE5hbWVzID0gW11cbiAgICAgICAgcHJvamVjdEFycmF5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdEFycmF5JykpO1xuICAgICAgICBcbiAgICAgICAgcHJvamVjdEFycmF5LmZvckVhY2gob2JqID0+IHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICBwcm9qZWN0TmFtZXMucHVzaChvYmoubmFtZSkgXG4gICAgICAgIH0pXG4gICAgICAgIGlmKHByb2plY3ROYW1lcy5pbmNsdWRlcyhwcm9qZWN0VmFsdWUudmFsdWUpKSB7XG4gICAgICAgICAgICBhbGVydCgnVGhpcyBwcm9qZWN0IGFscmVhZHkgZXhpc3RzJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgICAgIFxuKi9cbiAgICAgICAgcHJvamVjdE5hbWUuY2xhc3NMaXN0LmFkZCgnYXR0YWNoZWQnKTtcbiAgICAgICAgcHJvamVjdE5hbWVJY29uLnNyYyA9IHByb2plY3RJbnB1dC5pY29uO1xuICAgICAgICBwcm9qZWN0TmFtZUljb24uY2xhc3NMaXN0LmFkZCgnaWNvbnMnKVxuICAgICAgICBkZWxldGVJY29uLnNyYyA9ICdpY29ucy9iaW4ucG5nJyBcbiAgICAgICAgZGVsZXRlSWNvbi5jbGFzc0xpc3QuYWRkKCdkZWxldGUtaWNvbicpOyAgICAgICAgICAgXG4gICAgICAgIHNwYW4udGV4dENvbnRlbnQgPSBwcm9qZWN0SW5wdXQubmFtZTsgIFxuICAgICAgICBcbiAgICAgICAgcHJvamVjdE5hbWUuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWVJY29uKTtcbiAgICAgICAgcHJvamVjdE5hbWUuYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgICAgIHByb2plY3ROYW1lLmFwcGVuZENoaWxkKGRlbGV0ZUljb24pO1xuICAgICAgICBzdG9yYWdlLmFkZFByb2plY3RUb1N0b3JlKHByb2plY3RJbnB1dClcbiAgICAgICAgICAgXG4gICAgICAgIHJldHVybiBwcm9qZWN0TmFtZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRQcm9qZWN0VG9Eb20oKSB7IFxuICAgICAgICBpZihwcm9qZWN0VmFsdWUudmFsdWUgPT0gJycpIHJldHVyblxuICAgICAgICAgICAgXG4gICAgICAgIGxldCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWxpc3QnKSAgICAgICBcbiAgICAgICAgcHJvamVjdExpc3QuYXBwZW5kQ2hpbGQoY3JlYXRlUHJvamVjdEVsZW1lbnRzKCkpOyAgICAgICAgXG4gICAgXG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIEFkZEV2ZW50c1RvUHJvamVjdHMoKSB7ICAgICBcbiAgICAgICAgY29uc3QgYXR0YWNoZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYXR0YWNoZWQnKTtcbiAgICAgICAgZm9yKGNvbnN0IGF0dGFjaCBvZiBhdHRhY2hlZCkge1xuICAgICAgICAgICAgY29uc3QgbWFpbkhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluLWhlYWRlcicpO1xuICAgICAgICAgICAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlY3Rpb24nKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG1haW5IZWFkZXIpXG4gICAgICAgICAgICBhdHRhY2guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICAgICAgc2VjdGlvbi5pbm5lckhUTUwgPSAnJ1xuICAgICAgICAgICAgICAgIGNvbnN0IGFkZFRvZG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRvZG8nKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGFkZFRvZG8pXG4gICAgICAgICAgICAgICAgbWFpbkhlYWRlci50ZXh0Q29udGVudCA9IGUudGFyZ2V0LnRleHRDb250ZW50O1xuICAgICAgICAgICAgICAgIGFkZFRvZG8uc3R5bGUuZGlzcGxheSA9ICdibG9jaycgICAgICAgICAgICBcbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHJlbmRlclN0b3JlZFRvZG8oZSkgICAgICAgXG4gICAgICAgICAgICAgICAgYWRkRXZlbnRzVG9Ub2RvTGlzdFRpdGxlcygpXG5cbiAgICAgICAgICAgIH0pICAgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRFdmVudHNUb1RvZG9MaXN0VGl0bGVzKCkge1xuICAgICAgICBcbiAgICAgICAgY29uc3QgbGVnZW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbGVnZW5kJyk7XG4gICAgICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJylcbiAgICAgICBcbiAgICAgICAgY29uc3QgdGl0bGVBbmREYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRpdGxlLWFuZC1kYXRlJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRpdGxlQW5kRGF0ZSlcbiAgICAgICAgZm9yKGNvbnN0IHRpdGxlIG9mIHRpdGxlQW5kRGF0ZSkge1xuICAgICAgICAgICAgdGl0bGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IHN0b3JhZ2UgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0QXJyYXknKSlcbiAgICAgICAgICAgICAgICBsZXQgdGFyZ2V0UHJvamVjdCA9IHN0b3JhZ2UuZmluZCgocCkgPT4gcC5uYW1lID09IG1haW5IZWFkZXIudGV4dENvbnRlbnQpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhcmdldFByb2plY3QpXG5cbiAgICAgICAgICAgICAgICBsZXQgdG9kb3MgPSB0YXJnZXRQcm9qZWN0LnRvZG9zO1xuICAgICAgICAgICAgICAgIGxldCB0YXJnZXRUb2RvID0gdG9kb3MuZmluZCgodG9kbykgPT4gdG9kby50aXRsZSA9PSBlLnRhcmdldC5jaGlsZHJlblsxXS50ZXh0Q29udGVudCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGFyZ2V0VG9kbylcblxuICAgICAgICAgICAgICAgIHNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnYmx1cicpO1xuICAgICAgICAgICAgICAgIGFkZFRvZG8uY2xhc3NMaXN0LmFkZCgnYmx1cicpO1xuICAgICAgICAgICAgICAgIG1haW5IZWFkZXIuY2xhc3NMaXN0LmFkZCgnYmx1cicpO1xuICAgICAgICAgICAgICAgIGZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpXG4gICAgICAgICAgICAgICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdkZXRhaWxzJyk7XG4gICAgICAgICAgICAgICAgZm9ybS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiKDE1NSwgMTUzLCAxNTApJ1xuICAgICAgICAgICAgICAgIHNlY3Rpb24uY2xhc3NMaXN0LmFkZCgncGFyZW50LWRldGFpbHMnKVxuICAgICAgICAgICAgICAgIGFkZElucHV0cy5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgICAgICAgICAgdGl0bGVJbnB1dC52YWx1ZSA9IHRhcmdldFRvZG8udGl0bGU7XG4gICAgICAgICAgICAgICAgdGl0bGVJbnB1dC5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb25JbnB1dC52YWx1ZSA9IHRhcmdldFRvZG8uZGVzY3JpcHRpb247XG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb25JbnB1dC5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgcHJpb3JpdHlJbnB1dC52YWx1ZSA9IHRhcmdldFRvZG8ucHJpb3JpdHk7XG4gICAgICAgICAgICAgICAgcHJpb3JpdHlJbnB1dC5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgZGF0ZUlucHV0LnZhbHVlID0gdGFyZ2V0VG9kby5kYXRlO1xuICAgICAgICAgICAgICAgIGRhdGVJbnB1dC5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgbGVnZW5kLnRleHRDb250ZW50ID0gdGFyZ2V0VG9kby50aXRsZSBcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuXG4gICAgZnVuY3Rpb24gcmVuZGVyU3RvcmVkVG9kbyhlKSB7XG4gICAgICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzZWN0aW9uJyk7XG4gICAgICAgIGNvbnN0IHRvZG9zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdEFycmF5JykpXG4gICAgICAgIGNvbnNvbGUubG9nKHRvZG9zKVxuICAgICAgICBsZXQgc2VsZWN0ZWRUb2RvID0gdG9kb3MuZmluZCgodG9kbykgPT4gdG9kby5uYW1lID09IGUudGFyZ2V0LnRleHRDb250ZW50KTtcbiAgICAgICAgbGV0IHNlbGVjdGVkVG9kb3MgPSBzZWxlY3RlZFRvZG8udG9kb3M7XG4gICAgICAgIGNvbnNvbGUubG9nKHNlbGVjdGVkVG9kb3MpXG4gICAgXG4gICAgICAgIHNlbGVjdGVkVG9kb3MuZm9yRWFjaCh0b2RvID0+IHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgY29uc3QgY2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgIGNsb3NlLnNyYyA9ICdpY29ucy9jbG9zZS5wbmcnO1xuICAgICAgICAgICAgY2xvc2UuY2xhc3NMaXN0LmFkZCgnaWNvbicpO1xuICAgICAgICAgICAgY2xvc2UuY2xhc3NMaXN0LmFkZCgnY2xvc2UnKVxuICAgICAgICAgICAgY29uc3QgZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgZWRpdC5zcmMgPSAnaWNvbnMvZWRpdC5wbmcnO1xuICAgICAgICAgICAgZWRpdC5jbGFzc0xpc3QuYWRkKCdpY29uJywgJ2VkaXQnKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY2hlY2tib3gudHlwZSA9ICdjaGVja2JveCdcbiAgICAgICAgICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZSgnaWQnLCAnY2hlY2tib3gnKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgdGl0bGVBbmREYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgdGl0bGVBbmREYXRlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlLWFuZC1kYXRlJylcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXG4gICAgICAgICAgICB0aXRsZUFuZERhdGUuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuICAgICAgICAgICAgdGl0bGVBbmREYXRlLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgICAgICAgIHRpdGxlQW5kRGF0ZS5hcHBlbmRDaGlsZChkYXRlKTsgXG4gICAgICAgICAgICB0aXRsZUFuZERhdGUuYXBwZW5kQ2hpbGQoZWRpdClcbiAgICAgICAgICAgIHRpdGxlQW5kRGF0ZS5hcHBlbmRDaGlsZChjbG9zZSk7ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSB0b2RvLnRpdGxlO1xuICAgICAgICAgICAgZGF0ZS50ZXh0Q29udGVudCA9IHRvZG8uZGF0ZTtcbiAgICAgICAgICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQodGl0bGVBbmREYXRlKTsgXG4gICAgICAgICAgICBzdG9yYWdlLmRlbGV0ZVRvZG8oKVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgQWRkRXZlbnRzVG9Qcm9qZWN0cygpXG4gIFxuICAgIFxuICAgIGZ1bmN0aW9uIGNhbmNlbEFkZFRvRG9Gb3JtKCkge1xuICAgICAgICBzZWN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ2JsdXInKTtcbiAgICAgICAgYWRkVG9kby5jbGFzc0xpc3QucmVtb3ZlKCdibHVyJyk7XG4gICAgICAgIG1haW5IZWFkZXIuY2xhc3NMaXN0LnJlbW92ZSgnYmx1cicpO1xuICAgICAgICBzZWN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ3BhcmVudC1kZXRhaWxzJylcbiAgICAgICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgIGFkZFRvZG8uc3R5bGUuZGlzcGxheSA9ICdibG9jaycgICBcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRGb3JtSW5wdXRzVG9Qcm9qZWN0KCkgeyAgICAgIFxuICAgICAgICBsZXQgdGl0bGUgPSB0aXRsZUlucHV0LnZhbHVlXG4gICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uSW5wdXQudmFsdWU7XG4gICAgICAgIGxldCBwcmlvcml0eSA9IHByaW9yaXR5SW5wdXQudmFsdWU7XG4gICAgICAgIGxldCBkYXRlID0gZGF0ZUlucHV0LnZhbHVlO1xuICAgICAgICBsZXQgdG9kbyA9IG5ldyBUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGRhdGUpO1xuICAgICAgICBjb25zb2xlLmxvZyh0b2RvKVxuICAgICAgICBzdG9yYWdlLmFkZFRvRG9Ub1N0b3JhZ2UodG9kbyk7XG4gICAgICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgnaGlkZScpXG4gICAgICAgIGFkZFRvZG8uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVRvZG9MaXN0VGl0bGVzKCkge1xuICAgICAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGNvbnN0IGNsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGNsb3NlLnNyYyA9ICdpY29ucy9jbG9zZS5wbmcnO1xuICAgICAgICBjbG9zZS5jbGFzc0xpc3QuYWRkKCdpY29uJyk7XG4gICAgICAgIGNsb3NlLmNsYXNzTGlzdC5hZGQoJ2Nsb3NlJylcbiAgICAgICAgY29uc3QgZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBlZGl0LnNyYyA9ICdpY29ucy9lZGl0LnBuZyc7XG4gICAgICAgIGVkaXQuY2xhc3NMaXN0LmFkZCgnaWNvbicsICdlZGl0Jyk7XG4gICAgICAgIFxuICAgICAgICBjaGVja2JveC50eXBlID0gJ2NoZWNrYm94J1xuICAgICAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NoZWNrYm94Jyk7XG4gICAgICAgIFxuXG4gICAgICAgIGNvbnN0IHRpdGxlQW5kRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICBjb25zdCB0b2RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgdG9kb0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIFxuICAgICAgICB0aXRsZUFuZERhdGUuY2xhc3NMaXN0LmFkZCgndGl0bGUtYW5kLWRhdGUnKTtcbiAgICAgICAgdG9kb1RpdGxlLnRleHRDb250ZW50ID0gdGl0bGVJbnB1dC52YWx1ZTtcbiAgICAgICAgdG9kb0RhdGUudGV4dENvbnRlbnQgPSBkYXRlSW5wdXQudmFsdWU7XG4gICAgICAgIHRpdGxlQW5kRGF0ZS5hcHBlbmRDaGlsZChjaGVja2JveClcbiAgICAgICAgdGl0bGVBbmREYXRlLmFwcGVuZENoaWxkKHRvZG9UaXRsZSk7XG4gICAgICAgIHRpdGxlQW5kRGF0ZS5hcHBlbmRDaGlsZCh0b2RvRGF0ZSk7XG4gICAgICAgIHRpdGxlQW5kRGF0ZS5hcHBlbmRDaGlsZChlZGl0KTtcbiAgICAgICAgdGl0bGVBbmREYXRlLmFwcGVuZENoaWxkKGNsb3NlKTtcbiAgICAgICAgcmV0dXJuIHRpdGxlQW5kRGF0ZTsgICAgICAgIFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFwcGVuZFRvZG9MaXN0VGl0dGxlc1RvRG9tKCkge1xuICAgICAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2VjdGlvbicpOyAgICBcbiAgICAgICAgc2VjdGlvbi5hcHBlbmRDaGlsZChjcmVhdGVUb2RvTGlzdFRpdGxlcygpKVxuICAgICAgICBhZGRUb2RvLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKSBcbiAgICAgICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdoaWRlJykgXG4gICAgICAgIHN0b3JhZ2UuZGVsZXRlVG9kbygpICBcbiAgICAgICAgdGl0bGVJbnB1dC52YWx1ZSA9ICcnXG4gICAgICAgIGRlc2NyaXB0aW9uSW5wdXQudmFsdWUgPSAnJ1xuICAgICAgICBkYXRlSW5wdXQudmFsdWUgPSAnJyBcbiAgICAgICAgYWRkRXZlbnRzVG9Ub2RvTGlzdFRpdGxlcygpOyBcbiAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vICBsb2NhbFN0b3JhZ2UuY2xlYXIoKVxuICAgIHJldHVybnthZGRFdmVudCxcbiAgICAgICAgIGNyZWF0ZVByb2plY3RFbGVtZW50cyxcbiAgICAgICB9XG5cbn0pKClcblxuZXhwb3J0IGRlZmF1bHQgZG9tRWxlbWVudHNcblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0LmpzXCI7XG5pbXBvcnQgZG9tRWxlbWVudHMgZnJvbSBcIi4vdXNlckludGVyZmFjZS5qc1wiO1xuaW1wb3J0IHN0b3JhZ2UgZnJvbSBcIi4vc3RvcmFnZS5qc1wiXG5cblxuIGRvbUVsZW1lbnRzLmFkZEV2ZW50KClcbiBzdG9yYWdlLmRlbGV0ZVByb2plY3QoKVxuICJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==