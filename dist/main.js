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
            _storage_js__WEBPACK_IMPORTED_MODULE_1__["default"].deleteTodo()
                    
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
        _storage_js__WEBPACK_IMPORTED_MODULE_1__["default"].deleteTodo()  
        titleInput.value = ''
        descriptionInput.value = ''
        dateInput.value = ''  
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7O0FDNUJvQjtBQUNVOztBQUU3QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE9BQU87QUFDUDs7QUFFQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRCxDQUFDLGlFQUFlOzs7Ozs7Ozs7Ozs7OztBQ3hJaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUVBQWUsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QmU7QUFDQTtBQUNOOztBQUU1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsaUVBQXFCO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixtREFBTztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHFFQUF5QjtBQUNqQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDhEQUFrQjtBQUM5QjtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixnREFBSTtBQUMzQjtBQUNBLFFBQVEsb0VBQXdCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDhEQUFrQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7O0FBRUEsQ0FBQzs7QUFFRCxpRUFBZSxXQUFXOzs7Ozs7OztVQ3hPMUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTm1DO0FBQ1U7QUFDWDs7O0FBR2xDLENBQUMsa0VBQW9CO0FBQ3JCLENBQUMsaUVBQXFCO0FBQ3RCLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdXNlckludGVyZmFjZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgUHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmljb24gPSAnaWNvbnMvZGFzaGJvYXJkLnBuZydcbiAgICAgICAgdGhpcy50b2RvcyA9IFtdO1xuICAgIH1cblxuICAgIHNldE5hbWUobmFtZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lXG4gICAgfVxuXG4gICAgZ2V0TmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZVxuICAgIH1cblxuICAgIGdldFRvZG9zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50b2RvcztcbiAgICB9XG4gICAgXG4gICAgYWRkVG9kbyh0b2RvKSB7XG4gICAgICAgIHRoaXMudG9kb3MucHVzaCh0b2RvKTtcbiAgICB9XG5cbiAgICBkZWxldGVUb2RvKHRvZG9UaXRsZSkge1xuICAgICAgICB0aGlzLnRvZG9zLmZpbHRlcigodG9kbykgPT4gdG9kby50aXRsZSAhPT0gdG9kb1RpdGxlIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3QiLCJpbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0LmpzXCI7XG5pbXBvcnQgZG9tRWxlbWVudHMgZnJvbSBcIi4vdXNlckludGVyZmFjZS5qc1wiO1xuXG5jb25zdCBzdG9yYWdlID0gKGZ1bmN0aW9uKCkge1xuICBcbiAgIGZ1bmN0aW9uIHN0b3JlSXRlbXMoaXRlbVRvU3RvcmUpIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0QXJyYXknLCBKU09OLnN0cmluZ2lmeShpdGVtVG9TdG9yZSkpXG4gICB9XG5cbiAgIGZ1bmN0aW9uIGdldFN0b3JlZEl0ZW1zKCkge1xuICAgICAgXG4gICAgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdEFycmF5JykpICAgXG4gICB9XG5cbiAgIGZ1bmN0aW9uIGFkZFByb2plY3RUb1N0b3JlKGl0ZW1zVG9BZGQpIHtcbiAgICAgIGxldCBzdG9yZUtleSA9ICdwcm9qZWN0QXJyYXknXG4gICAgICBsZXQgc3RvcmUgPSBbXVxuICAgXG4gICAgICBjb25zdCBwcm9qZWN0QXJyYXkgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShzdG9yZUtleSk7XG4gICAgICBpZihwcm9qZWN0QXJyYXkgPT0gJycpIHtcbiAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHN0b3JlS2V5LCBKU09OLnN0cmluZ2lmeShbaXRlbXNUb0FkZF0pKVxuXG4gICAgICB9ZWxzZSBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbShzdG9yZUtleSkgPT0gbnVsbCl7XG4gICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShzdG9yZUtleSwgSlNPTi5zdHJpbmdpZnkoW2l0ZW1zVG9BZGRdKSlcblxuICAgICAgfWVsc2V7XG4gICAgICAgICBzdG9yZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oc3RvcmVLZXkpKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhzdG9yZSlcbiAgICAgICAgICBzdG9yZS5wdXNoKGl0ZW1zVG9BZGQpXG4gICAgICAgICBzdG9yZUl0ZW1zKHN0b3JlKTtcbiAgICAgIH1cbiAgIH1cblxuICBcbiAgIGZ1bmN0aW9uIHJlbmRlclN0b3JlZEl0ZW1zKCkgeyAgIFxuICAgICAgXG4gICAgICBsZXQgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1saXN0JylcbiAgICAgICBsZXQgc3RvcmUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0QXJyYXknKSkgXG4gICAgICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RBcnJheScpID09IG51bGwgfHwgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RBcnJheScpID09ICcnIHx8IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0QXJyYXknKSA9PSB1bmRlZmluZWQpIHJldHVyblxuICAgICAgICAgc3RvcmUuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICAgICAgIGNvbnN0IHByb2plY3ROYW1lSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgICAgICAgY29uc3QgZGVsZXRlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXG4gICAgICAgICBwcm9qZWN0TmFtZS5jbGFzc0xpc3QuYWRkKCdhdHRhY2hlZCcpO1xuICAgICAgICAgcHJvamVjdE5hbWVJY29uLmNsYXNzTGlzdC5hZGQoJ2ljb25zJyk7XG4gICAgICAgICBwcm9qZWN0TmFtZUljb24uc3JjID0gaXRlbS5pY29uO1xuICAgICAgICAgc3Bhbi50ZXh0Q29udGVudCA9IGl0ZW0ubmFtZTtcbiAgICAgICAgIGRlbGV0ZUljb24uc3JjID0gJ2ljb25zL2Jpbi5wbmcnIFxuICAgICAgICAgZGVsZXRlSWNvbi5jbGFzc0xpc3QuYWRkKCdkZWxldGUtaWNvbicpO1xuXG4gICAgICAgICBcbiAgICAgICAgIHByb2plY3ROYW1lLmFwcGVuZENoaWxkKHByb2plY3ROYW1lSWNvbik7XG4gICAgICAgICBwcm9qZWN0TmFtZS5hcHBlbmRDaGlsZChzcGFuKTsgXG4gICAgICAgICBwcm9qZWN0TmFtZS5hcHBlbmRDaGlsZChkZWxldGVJY29uKTtcbiAgICAgICAgIHByb2plY3RMaXN0LmFwcGVuZENoaWxkKHByb2plY3ROYW1lKSBcbiAgICAgICAgICAgXG4gICAgICAgICBcbiAgICAgIH0pO1xuICAgfVxuXG5yZW5kZXJTdG9yZWRJdGVtcygpXG5cbiAgIGZ1bmN0aW9uIGRlbGV0ZVByb2plY3QoKSB7XG4gICAgICBjb25zdCBtYWluSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4taGVhZGVyJyk7XG4gICAgICBsZXQgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1saXN0JylcbiAgICAgIGNvbnN0IGRlbGV0ZUljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVsZXRlLWljb24nKTtcbiAgICAgIGNvbnN0IGFkZFRvZG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRvZG8nKVxuICAgICAgY29uc29sZS5sb2coYWRkVG9kbylcbiAgICAgIGRlbGV0ZUljb24uZm9yRWFjaChpY29uID0+IHtcbiAgICAgICAgXG4gICAgICAgICBpY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgbGV0IHN0b3JlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdEFycmF5JykpO1xuICAgICAgICAgY29uc29sZS5sb2coc3RvcmUpXG4gICAgICAgICBtYWluSGVhZGVyLnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpXG4gICAgICAgICBhZGRUb2RvLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICBzdG9yZSA9IHN0b3JlLmZpbHRlcigocCkgPT4gcC5uYW1lICE9PSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnRleHRDb250ZW50KSAgXG4gICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdEFycmF5JywgSlNPTi5zdHJpbmdpZnkoc3RvcmUpKTtcbiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICB9KVxuICAgICAgICAgIFxuICAgICAgfSk7XG4gIH1cbiAgZGVsZXRlUHJvamVjdCgpXG5cbiAgIFxuICAgZnVuY3Rpb24gZGVsZXRlVG9kbygpIHtcbiAgICAgIGNvbnN0IG1haW5IZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbi1oZWFkZXInKTtcbiAgICAgIGNvbnN0IGRlbGV0ZVRvZG9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNsb3NlJyk7XG4gICAgICBkZWxldGVUb2Rvcy5mb3JFYWNoKChkZWxldGVUb2RvKSA9PiB7XG4gICAgICAgICBkZWxldGVUb2RvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5yZW1vdmUoKVxuXG4gICAgICAgICAgICBsZXQgc3RvcmFnZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RBcnJheScpKTtcbiAgICAgICAgICAgIGxldCB0YXJnZXRQcm9qZWN0ID0gc3RvcmFnZS5maW5kKChwKSA9PiBwLm5hbWUgPT0gbWFpbkhlYWRlci50ZXh0Q29udGVudCk7XG4gICAgICAgICAgICBsZXQgZmlsdGVyZWRUb2RvID0gdGFyZ2V0UHJvamVjdC50b2Rvcy5maWx0ZXIoKHRvZG8pID0+IHRvZG8udGl0bGUgIT09IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2hpbGRyZW5bMV0udGV4dENvbnRlbnQpO1xuXG4gICAgICAgICAgICBkZWxldGUgdGFyZ2V0UHJvamVjdC50b2RvcztcblxuICAgICAgICAgICAgdGFyZ2V0UHJvamVjdC50b2RvcyA9IGZpbHRlcmVkVG9kbztcbiAgICAgICAgICAgIGxldCBzdG9yZWQgPSBzdG9yYWdlLmZpbHRlcigocCkgPT4gcC5uYW1lICE9PSBtYWluSGVhZGVyLnRleHRDb250ZW50KTtcblxuICAgICAgICAgICAgc3RvcmVkLnB1c2godGFyZ2V0UHJvamVjdCk7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdEFycmF5JywgSlNPTi5zdHJpbmdpZnkoc3RvcmVkKSk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgIH0pXG4gICAgICB9KVxuICB9XG4gIGRlbGV0ZVRvZG8oKVxuICAgXG4gIGZ1bmN0aW9uIGFkZFRvRG9Ub1N0b3JhZ2UoaXRlbVRvQWRkKSB7XG4gICBjb25zdCBtYWluSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4taGVhZGVyJyk7XG4gICBsZXQgYXJyYXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0QXJyYXknKSlcbiAgIGxldCBmaW5kT2JqID0gYXJyYXkuZmluZCgoaXRlbSkgPT4gaXRlbS5uYW1lID09IG1haW5IZWFkZXIudGV4dENvbnRlbnQpO1xuICAgbGV0IHByb2plY3RBcnJheSA9IGFycmF5LmZpbHRlcigocHJvcHMpID0+IHByb3BzLm5hbWUgIT09IG1haW5IZWFkZXIudGV4dENvbnRlbnQpXG5cbiAgIGZpbmRPYmoudG9kb3MucHVzaChpdGVtVG9BZGQpXG4gICBwcm9qZWN0QXJyYXkucHVzaChmaW5kT2JqKVxuICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RBcnJheScsIEpTT04uc3RyaW5naWZ5KHByb2plY3RBcnJheSkpXG5cbiAgfVxuICAgXG4gICByZXR1cm4ge1xuICAgICAgc3RvcmVJdGVtcyxcbiAgICAgIGFkZFByb2plY3RUb1N0b3JlLFxuICAgICAgZ2V0U3RvcmVkSXRlbXMsXG4gICAgICBkZWxldGVQcm9qZWN0LFxuICAgICAgcmVuZGVyU3RvcmVkSXRlbXMsXG4gICAgICBhZGRUb0RvVG9TdG9yYWdlLFxuICAgICAgZGVsZXRlVG9kbyxcblxuICAgfVxufSkoKVxuXG4gZXhwb3J0IGRlZmF1bHQgc3RvcmFnZSIsImNsYXNzIFRvZG8ge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGRhdGUpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgdGhpcy5kYXRlID0gZGF0ZTtcbiAgICB9XG5cbiAgICBnZXRUaXRsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGl0bGU7XG4gICAgfSBcblxuICAgIGdldERlc2NyaXB0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kZXNjcmlwdGlvbjtcbiAgICB9XG5cbiAgICBnZXRQcmlvcml0eSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJpb3JpdHk7XG4gICAgfVxuXG4gICAgZ2V0RGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0ZTtcbiAgICB9XG5cbn1cbmV4cG9ydCBkZWZhdWx0IFRvZG87IiwiaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0LmpzJ1xuaW1wb3J0IHN0b3JhZ2UgZnJvbSAnLi9zdG9yYWdlLmpzJ1xuaW1wb3J0IFRvZG8gZnJvbSAnLi90b2RvLmpzJ1xuXG5jb25zdCBkb21FbGVtZW50cyA9IChmdW5jdGlvbigpIHtcbiAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1wcm9qZWN0Jyk7XG4gICAgY29uc3QgYWRkRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtZm9ybScpO1xuICAgIGNvbnN0IGNhbmNlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYW5jZWwnKTtcbiAgICBjb25zdCBhZGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkJyk7XG4gICAgY29uc3QgZGVsZXRlSWNvbiA9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlbGV0ZS1pY29uJyk7XG4gICAgbGV0IHByb2plY3RWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0JylcblxuICAgICBjb25zdCBhZGRUb2RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10b2RvJyk7XG4gICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XG4gICAgIGNvbnN0IGNhbmNlbEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FuY2VsLWZvcm0nKTtcbiAgICAgbGV0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGUnKTtcbiAgICAgbGV0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVzY3JpcHRpb24nKTtcbiAgICAgbGV0IHByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW1wb3J0YW5jZScpO1xuICAgICBsZXQgZGF0ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RhdGUnKTsgXG4gICAgIGNvbnN0IGFkZElucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtZm9ybUJ0bicpO1xuICAgIFxuICAgIGZ1bmN0aW9uIGFkZEV2ZW50KCkge1xuICAgICAgICBwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheUFkZFByb2plY3QpO1xuICAgICAgICBjYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoaWRlUHJvamVjdEJveCk7XG4gICAgICAgIGFkZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZFByb2plY3RUb0RvbSk7XG4gICAgICAgIGFkZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhpZGVBZGRGb3JtKTtcbiAgICAgICAgYWRkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgQWRkRXZlbnRzVG9Qcm9qZWN0cyk7IFxuICAgICAgICBhZGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdG9yYWdlLmRlbGV0ZVByb2plY3QpO1xuICAgICAgICBcbiAgICAgICAgYWRkVG9kby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc3BsYXlBZGRUb0RvRm9ybSk7XG4gICAgICAgIGFkZElucHV0cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZEZvcm1JbnB1dHNUb1Byb2plY3QpO1xuICAgICAgICBhZGRJbnB1dHMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhcHBlbmRUb2RvTGlzdFRpdHRsZXNUb0RvbSk7XG4gICAgICAgIGNhbmNlbEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjYW5jZWxBZGRUb0RvRm9ybSk7ICAgIFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpc3BsYXlBZGRQcm9qZWN0KCkge1xuICAgICAgICBhZGRGb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKVxuICAgICAgICBwcm9qZWN0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfVxuICAgICAgICBcbiAgICBmdW5jdGlvbiBoaWRlUHJvamVjdEJveCgpIHtcbiAgICAgICAgYWRkRm9ybS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgIHByb2plY3Quc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoaWRlQWRkRm9ybSgpIHsgIFxuICAgICAgICBjb25zdCBhZGRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1mb3JtJyk7XG4gICAgICAgIGFkZEZvcm0uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICBwcm9qZWN0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICBwcm9qZWN0VmFsdWUudmFsdWUgPSAnJ1xuICAgICAgICB9ICAgIFxuICAgICAgICAgXG4gICAgZnVuY3Rpb24gY3JlYXRlUHJvamVjdEVsZW1lbnRzKCkge1xuICAgICAgICBsZXQgcHJvamVjdElucHV0ID0gbmV3IFByb2plY3QocHJvamVjdFZhbHVlLnZhbHVlKTtcbiAgICAgICAgbGV0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTsgIFxuICAgICAgICBsZXQgcHJvamVjdE5hbWVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpOyBcbiAgICAgICAgY29uc3QgZGVsZXRlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpO1xuXG4gICAgICAgLyogXG4gICAgICAgIGxldCBwcm9qZWN0QXJyYXkgPVtdXG4gICAgICAgIGxldCBwcm9qZWN0TmFtZXMgPSBbXVxuICAgICAgICBwcm9qZWN0QXJyYXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0QXJyYXknKSk7XG4gICAgICAgIFxuICAgICAgICBwcm9qZWN0QXJyYXkuZm9yRWFjaChvYmogPT4ge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAgIHByb2plY3ROYW1lcy5wdXNoKG9iai5uYW1lKSBcbiAgICAgICAgfSlcbiAgICAgICAgaWYocHJvamVjdE5hbWVzLmluY2x1ZGVzKHByb2plY3RWYWx1ZS52YWx1ZSkpIHtcbiAgICAgICAgICAgIGFsZXJ0KCdUaGlzIHByb2plY3QgYWxyZWFkeSBleGlzdHMnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAgICAgXG4qL1xuICAgICAgICBwcm9qZWN0TmFtZS5jbGFzc0xpc3QuYWRkKCdhdHRhY2hlZCcpO1xuICAgICAgICBwcm9qZWN0TmFtZUljb24uc3JjID0gcHJvamVjdElucHV0Lmljb247XG4gICAgICAgIHByb2plY3ROYW1lSWNvbi5jbGFzc0xpc3QuYWRkKCdpY29ucycpXG4gICAgICAgIGRlbGV0ZUljb24uc3JjID0gJ2ljb25zL2Jpbi5wbmcnIFxuICAgICAgICBkZWxldGVJY29uLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS1pY29uJyk7ICAgICAgICAgICBcbiAgICAgICAgc3Bhbi50ZXh0Q29udGVudCA9IHByb2plY3RJbnB1dC5uYW1lOyAgXG4gICAgICAgIFxuICAgICAgICBwcm9qZWN0TmFtZS5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZUljb24pO1xuICAgICAgICBwcm9qZWN0TmFtZS5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICAgICAgcHJvamVjdE5hbWUuYXBwZW5kQ2hpbGQoZGVsZXRlSWNvbik7XG4gICAgICAgIHN0b3JhZ2UuYWRkUHJvamVjdFRvU3RvcmUocHJvamVjdElucHV0KVxuICAgICAgICAgICBcbiAgICAgICAgcmV0dXJuIHByb2plY3ROYW1lO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZFByb2plY3RUb0RvbSgpIHsgXG4gICAgICAgIGlmKHByb2plY3RWYWx1ZS52YWx1ZSA9PSAnJykgcmV0dXJuXG4gICAgICAgICAgICBcbiAgICAgICAgbGV0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtbGlzdCcpICAgICAgIFxuICAgICAgICBwcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChjcmVhdGVQcm9qZWN0RWxlbWVudHMoKSk7ICAgICAgICBcbiAgICBcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gQWRkRXZlbnRzVG9Qcm9qZWN0cygpIHtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGF0dGFjaGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmF0dGFjaGVkJyk7XG4gICAgICAgIGZvcihjb25zdCBhdHRhY2ggb2YgYXR0YWNoZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IG1haW5IZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbi1oZWFkZXInKTtcbiAgICAgICAgICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzZWN0aW9uJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhtYWluSGVhZGVyKVxuICAgICAgICAgICAgYXR0YWNoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgICAgIHNlY3Rpb24uaW5uZXJIVE1MID0gJydcbiAgICAgICAgICAgICAgICBjb25zdCBhZGRUb2RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10b2RvJylcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhZGRUb2RvKVxuICAgICAgICAgICAgICAgIG1haW5IZWFkZXIudGV4dENvbnRlbnQgPSBlLnRhcmdldC50ZXh0Q29udGVudDtcbiAgICAgICAgICAgICAgICBhZGRUb2RvLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snICAgICAgICAgICAgXG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICByZW5kZXJTdG9yZWRUb2RvKGUpXG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW5kZXJTdG9yZWRUb2RvKGUpIHtcbiAgICAgICAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlY3Rpb24nKTtcbiAgICAgICAgY29uc3QgdG9kb3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0QXJyYXknKSlcbiAgICAgICAgY29uc29sZS5sb2codG9kb3MpXG4gICAgICAgIGxldCBzZWxlY3RlZFRvZG8gPSB0b2Rvcy5maW5kKCh0b2RvKSA9PiB0b2RvLm5hbWUgPT0gZS50YXJnZXQudGV4dENvbnRlbnQpO1xuICAgICAgICBsZXQgc2VsZWN0ZWRUb2RvcyA9IHNlbGVjdGVkVG9kby50b2RvcztcbiAgICAgICAgY29uc29sZS5sb2coc2VsZWN0ZWRUb2RvcylcbiAgICBcbiAgICAgICAgc2VsZWN0ZWRUb2Rvcy5mb3JFYWNoKHRvZG8gPT4ge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICBjb25zdCBjbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgY2xvc2Uuc3JjID0gJ2ljb25zL2Nsb3NlLnBuZyc7XG4gICAgICAgICAgICBjbG9zZS5jbGFzc0xpc3QuYWRkKCdpY29uJyk7XG4gICAgICAgICAgICBjbG9zZS5jbGFzc0xpc3QuYWRkKCdjbG9zZScpXG4gICAgICAgICAgICBjb25zdCBlZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICBlZGl0LnNyYyA9ICdpY29ucy9lZGl0LnBuZyc7XG4gICAgICAgICAgICBlZGl0LmNsYXNzTGlzdC5hZGQoJ2ljb24nKTtcbiAgICAgICAgICAgIGNoZWNrYm94LnR5cGUgPSAnY2hlY2tib3gnXG4gICAgICAgICAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NoZWNrYm94Jyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlQW5kRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIHRpdGxlQW5kRGF0ZS5jbGFzc0xpc3QuYWRkKCd0aXRsZS1hbmQtZGF0ZScpXG4gICAgICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblxuICAgICAgICAgICAgdGl0bGVBbmREYXRlLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcbiAgICAgICAgICAgIHRpdGxlQW5kRGF0ZS5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgICAgICB0aXRsZUFuZERhdGUuYXBwZW5kQ2hpbGQoZGF0ZSk7IFxuICAgICAgICAgICAgdGl0bGVBbmREYXRlLmFwcGVuZENoaWxkKGVkaXQpXG4gICAgICAgICAgICB0aXRsZUFuZERhdGUuYXBwZW5kQ2hpbGQoY2xvc2UpOyAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gdG9kby50aXRsZTtcbiAgICAgICAgICAgIGRhdGUudGV4dENvbnRlbnQgPSB0b2RvLmRhdGU7XG4gICAgICAgICAgICBzZWN0aW9uLmFwcGVuZENoaWxkKHRpdGxlQW5kRGF0ZSk7IFxuICAgICAgICAgICAgc3RvcmFnZS5kZWxldGVUb2RvKClcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIEFkZEV2ZW50c1RvUHJvamVjdHMoKVxuICBcbiAgICBmdW5jdGlvbiBkaXNwbGF5QWRkVG9Eb0Zvcm0oKSB7XG4gICAgICAgIGFkZFRvZG8uc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgICBmb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYW5jZWxBZGRUb0RvRm9ybSgpIHtcbiAgICAgICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgIGFkZFRvZG8uc3R5bGUuZGlzcGxheSA9ICdibG9jaycgICBcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRGb3JtSW5wdXRzVG9Qcm9qZWN0KCkgeyAgICAgIFxuICAgICAgICBsZXQgdGl0bGUgPSB0aXRsZUlucHV0LnZhbHVlXG4gICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uSW5wdXQudmFsdWU7XG4gICAgICAgIGxldCBwcmlvcml0eSA9IHByaW9yaXR5SW5wdXQudmFsdWU7XG4gICAgICAgIGxldCBkYXRlID0gZGF0ZUlucHV0LnZhbHVlO1xuICAgICAgICBsZXQgdG9kbyA9IG5ldyBUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGRhdGUpO1xuICAgICAgICBjb25zb2xlLmxvZyh0b2RvKVxuICAgICAgICBzdG9yYWdlLmFkZFRvRG9Ub1N0b3JhZ2UodG9kbyk7XG4gICAgICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgnaGlkZScpXG4gICAgICAgIGFkZFRvZG8uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVRvZG9MaXN0VGl0bGVzKCkge1xuICAgICAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGNvbnN0IGNsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGNsb3NlLnNyYyA9ICdpY29ucy9jbG9zZS5wbmcnO1xuICAgICAgICBjbG9zZS5jbGFzc0xpc3QuYWRkKCdpY29uJyk7XG4gICAgICAgIGNsb3NlLmNsYXNzTGlzdC5hZGQoJ2Nsb3NlJylcbiAgICAgICAgY29uc3QgZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBlZGl0LnNyYyA9ICdpY29ucy9lZGl0LnBuZyc7XG4gICAgICAgIGVkaXQuY2xhc3NMaXN0LmFkZCgnaWNvbicpO1xuICAgICAgICBjaGVja2JveC50eXBlID0gJ2NoZWNrYm94J1xuICAgICAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NoZWNrYm94Jyk7XG4gICAgICAgIFxuXG4gICAgICAgIGNvbnN0IHRpdGxlQW5kRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICBjb25zdCB0b2RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgdG9kb0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIFxuICAgICAgICB0aXRsZUFuZERhdGUuY2xhc3NMaXN0LmFkZCgndGl0bGUtYW5kLWRhdGUnKTtcbiAgICAgICAgdG9kb1RpdGxlLnRleHRDb250ZW50ID0gdGl0bGVJbnB1dC52YWx1ZTtcbiAgICAgICAgdG9kb0RhdGUudGV4dENvbnRlbnQgPSBkYXRlSW5wdXQudmFsdWU7XG4gICAgICAgIHRpdGxlQW5kRGF0ZS5hcHBlbmRDaGlsZChjaGVja2JveClcbiAgICAgICAgdGl0bGVBbmREYXRlLmFwcGVuZENoaWxkKHRvZG9UaXRsZSk7XG4gICAgICAgIHRpdGxlQW5kRGF0ZS5hcHBlbmRDaGlsZCh0b2RvRGF0ZSk7XG4gICAgICAgIHRpdGxlQW5kRGF0ZS5hcHBlbmRDaGlsZChlZGl0KTtcbiAgICAgICAgdGl0bGVBbmREYXRlLmFwcGVuZENoaWxkKGNsb3NlKTtcbiAgICAgICAgcmV0dXJuIHRpdGxlQW5kRGF0ZTsgICAgICAgIFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFwcGVuZFRvZG9MaXN0VGl0dGxlc1RvRG9tKCkge1xuICAgICAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2VjdGlvbicpOyAgICBcbiAgICAgICAgc2VjdGlvbi5hcHBlbmRDaGlsZChjcmVhdGVUb2RvTGlzdFRpdGxlcygpKVxuICAgICAgICBhZGRUb2RvLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKSBcbiAgICAgICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdoaWRlJykgXG4gICAgICAgIHN0b3JhZ2UuZGVsZXRlVG9kbygpICBcbiAgICAgICAgdGl0bGVJbnB1dC52YWx1ZSA9ICcnXG4gICAgICAgIGRlc2NyaXB0aW9uSW5wdXQudmFsdWUgPSAnJ1xuICAgICAgICBkYXRlSW5wdXQudmFsdWUgPSAnJyAgXG4gICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyAgbG9jYWxTdG9yYWdlLmNsZWFyKClcbiAgICByZXR1cm57YWRkRXZlbnQsXG4gICAgICAgICBjcmVhdGVQcm9qZWN0RWxlbWVudHMsXG4gICAgICAgfVxuXG59KSgpXG5cbmV4cG9ydCBkZWZhdWx0IGRvbUVsZW1lbnRzXG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vcHJvamVjdC5qc1wiO1xuaW1wb3J0IGRvbUVsZW1lbnRzIGZyb20gXCIuL3VzZXJJbnRlcmZhY2UuanNcIjtcbmltcG9ydCBzdG9yYWdlIGZyb20gXCIuL3N0b3JhZ2UuanNcIlxuXG5cbiBkb21FbGVtZW50cy5hZGRFdmVudCgpXG4gc3RvcmFnZS5kZWxldGVQcm9qZWN0KClcbiAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=