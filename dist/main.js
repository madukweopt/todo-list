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

  function addToDoToStorage(itemToAdd) {
   const mainHeader = document.querySelector('#main-header');
   let array = JSON.parse(localStorage.getItem('projectArray'))
   let findObj = array.find((item) => item.name == mainHeader.textContent);
   console.log(findObj)
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
                });
                           
            })
           
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDaEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTs7QUFFQSxDQUFDOztBQUVELGlFQUFlLFdBQVc7Ozs7Ozs7O1VDM04xQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNObUM7QUFDVTtBQUNYOzs7QUFHbEMsQ0FBQyxrRUFBb0I7QUFDckIsQ0FBQyxpRUFBcUI7QUFDdEIsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy91c2VySW50ZXJmYWNlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBQcm9qZWN0IHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuaWNvbiA9ICdpY29ucy9kYXNoYm9hcmQucG5nJ1xuICAgICAgICB0aGlzLnRvZG9zID0gW107XG4gICAgfVxuXG4gICAgc2V0TmFtZShuYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWVcbiAgICB9XG5cbiAgICBnZXROYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lXG4gICAgfVxuXG4gICAgZ2V0VG9kb3MoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRvZG9zO1xuICAgIH1cbiAgICBcbiAgICBhZGRUb2RvKHRvZG8pIHtcbiAgICAgICAgdGhpcy50b2Rvcy5wdXNoKHRvZG8pO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdCIsImltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3QuanNcIjtcbmltcG9ydCBkb21FbGVtZW50cyBmcm9tIFwiLi91c2VySW50ZXJmYWNlLmpzXCI7XG5cbmNvbnN0IHN0b3JhZ2UgPSAoZnVuY3Rpb24oKSB7XG4gIFxuICAgZnVuY3Rpb24gc3RvcmVJdGVtcyhpdGVtVG9TdG9yZSkge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RBcnJheScsIEpTT04uc3RyaW5naWZ5KGl0ZW1Ub1N0b3JlKSlcbiAgIH1cblxuICAgZnVuY3Rpb24gZ2V0U3RvcmVkSXRlbXMoKSB7XG4gICAgICBcbiAgICBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0QXJyYXknKSkgICBcbiAgIH1cblxuICAgZnVuY3Rpb24gYWRkUHJvamVjdFRvU3RvcmUoaXRlbXNUb0FkZCkge1xuICAgICAgbGV0IHN0b3JlS2V5ID0gJ3Byb2plY3RBcnJheSdcbiAgICAgIGxldCBzdG9yZSA9IFtdXG4gICBcbiAgICAgIGNvbnN0IHByb2plY3RBcnJheSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHN0b3JlS2V5KTtcbiAgICAgIGlmKHByb2plY3RBcnJheSA9PSAnJykge1xuICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oc3RvcmVLZXksIEpTT04uc3RyaW5naWZ5KFtpdGVtc1RvQWRkXSkpXG5cbiAgICAgIH1lbHNlIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHN0b3JlS2V5KSA9PSBudWxsKXtcbiAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHN0b3JlS2V5LCBKU09OLnN0cmluZ2lmeShbaXRlbXNUb0FkZF0pKVxuXG4gICAgICB9ZWxzZXtcbiAgICAgICAgIHN0b3JlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShzdG9yZUtleSkpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKHN0b3JlKVxuICAgICAgICAgIHN0b3JlLnB1c2goaXRlbXNUb0FkZClcbiAgICAgICAgIHN0b3JlSXRlbXMoc3RvcmUpO1xuICAgICAgfVxuICAgfVxuXG4gICBcbiAgIGZ1bmN0aW9uIHJlbmRlclN0b3JlZEl0ZW1zKCkgeyAgIFxuICAgICAgXG4gICAgICBsZXQgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1saXN0JylcbiAgICAgICBsZXQgc3RvcmUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0QXJyYXknKSkgXG4gICAgICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RBcnJheScpID09IG51bGwgfHwgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RBcnJheScpID09ICcnIHx8IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0QXJyYXknKSA9PSB1bmRlZmluZWQpIHJldHVyblxuICAgICAgICAgc3RvcmUuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICAgICAgIGNvbnN0IHByb2plY3ROYW1lSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgICAgICAgY29uc3QgZGVsZXRlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXG4gICAgICAgICBwcm9qZWN0TmFtZS5jbGFzc0xpc3QuYWRkKCdhdHRhY2hlZCcpO1xuICAgICAgICAgcHJvamVjdE5hbWVJY29uLmNsYXNzTGlzdC5hZGQoJ2ljb25zJyk7XG4gICAgICAgICBwcm9qZWN0TmFtZUljb24uc3JjID0gaXRlbS5pY29uO1xuICAgICAgICAgc3Bhbi50ZXh0Q29udGVudCA9IGl0ZW0ubmFtZTtcbiAgICAgICAgIGRlbGV0ZUljb24uc3JjID0gJ2ljb25zL2Jpbi5wbmcnIFxuICAgICAgICAgZGVsZXRlSWNvbi5jbGFzc0xpc3QuYWRkKCdkZWxldGUtaWNvbicpO1xuXG4gICAgICAgICBcbiAgICAgICAgIHByb2plY3ROYW1lLmFwcGVuZENoaWxkKHByb2plY3ROYW1lSWNvbik7XG4gICAgICAgICBwcm9qZWN0TmFtZS5hcHBlbmRDaGlsZChzcGFuKTsgXG4gICAgICAgICBwcm9qZWN0TmFtZS5hcHBlbmRDaGlsZChkZWxldGVJY29uKTtcbiAgICAgICAgIHByb2plY3RMaXN0LmFwcGVuZENoaWxkKHByb2plY3ROYW1lKSBcbiAgICAgICAgICAgXG4gICAgICAgICBcbiAgICAgIH0pO1xuICAgfVxuXG5yZW5kZXJTdG9yZWRJdGVtcygpXG5cbiAgIGZ1bmN0aW9uIGRlbGV0ZVByb2plY3QoKSB7XG4gICAgICBjb25zdCBtYWluSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4taGVhZGVyJyk7XG4gICAgICBsZXQgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1saXN0JylcbiAgICAgIGNvbnN0IGRlbGV0ZUljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVsZXRlLWljb24nKTtcbiAgICAgIGNvbnN0IGFkZFRvZG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRvZG8nKVxuICAgICAgY29uc29sZS5sb2coYWRkVG9kbylcbiAgICAgIGRlbGV0ZUljb24uZm9yRWFjaChpY29uID0+IHtcbiAgICAgICAgXG4gICAgICAgICBpY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgbGV0IHN0b3JlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdEFycmF5JykpO1xuICAgICAgICAgY29uc29sZS5sb2coc3RvcmUpXG4gICAgICAgICBtYWluSGVhZGVyLnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpXG4gICAgICAgICBhZGRUb2RvLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICBzdG9yZSA9IHN0b3JlLmZpbHRlcigocCkgPT4gcC5uYW1lICE9PSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnRleHRDb250ZW50KSAgXG4gICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdEFycmF5JywgSlNPTi5zdHJpbmdpZnkoc3RvcmUpKTtcbiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICB9KVxuICAgICAgICAgIFxuICAgICAgfSk7XG4gIH1cbiAgZGVsZXRlUHJvamVjdCgpXG5cbiAgZnVuY3Rpb24gYWRkVG9Eb1RvU3RvcmFnZShpdGVtVG9BZGQpIHtcbiAgIGNvbnN0IG1haW5IZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbi1oZWFkZXInKTtcbiAgIGxldCBhcnJheSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RBcnJheScpKVxuICAgbGV0IGZpbmRPYmogPSBhcnJheS5maW5kKChpdGVtKSA9PiBpdGVtLm5hbWUgPT0gbWFpbkhlYWRlci50ZXh0Q29udGVudCk7XG4gICBjb25zb2xlLmxvZyhmaW5kT2JqKVxuICAgbGV0IHByb2plY3RBcnJheSA9IGFycmF5LmZpbHRlcigocHJvcHMpID0+IHByb3BzLm5hbWUgIT09IG1haW5IZWFkZXIudGV4dENvbnRlbnQpXG5cbiAgIGZpbmRPYmoudG9kb3MucHVzaChpdGVtVG9BZGQpXG4gICBwcm9qZWN0QXJyYXkucHVzaChmaW5kT2JqKVxuICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RBcnJheScsIEpTT04uc3RyaW5naWZ5KHByb2plY3RBcnJheSkpXG5cbiAgfVxuICAgXG4gICByZXR1cm4ge1xuICAgICAgc3RvcmVJdGVtcyxcbiAgICAgIGFkZFByb2plY3RUb1N0b3JlLFxuICAgICAgZ2V0U3RvcmVkSXRlbXMsXG4gICAgICBkZWxldGVQcm9qZWN0LFxuICAgICAgcmVuZGVyU3RvcmVkSXRlbXMsXG4gICAgICBhZGRUb0RvVG9TdG9yYWdlLFxuXG4gICB9XG59KSgpXG5cbiBleHBvcnQgZGVmYXVsdCBzdG9yYWdlIiwiY2xhc3MgVG9kbyB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgZGF0ZSkge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICB0aGlzLmRhdGUgPSBkYXRlO1xuICAgIH1cblxuICAgIGdldFRpdGxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50aXRsZTtcbiAgICB9IFxuXG4gICAgZ2V0RGVzY3JpcHRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uO1xuICAgIH1cblxuICAgIGdldFByaW9yaXR5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcmlvcml0eTtcbiAgICB9XG5cbiAgICBnZXREYXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRlO1xuICAgIH1cblxufVxuZXhwb3J0IGRlZmF1bHQgVG9kbzsiLCJpbXBvcnQgUHJvamVjdCBmcm9tICcuL3Byb2plY3QuanMnXG5pbXBvcnQgc3RvcmFnZSBmcm9tICcuL3N0b3JhZ2UuanMnXG5pbXBvcnQgVG9kbyBmcm9tICcuL3RvZG8uanMnXG5cbmNvbnN0IGRvbUVsZW1lbnRzID0gKGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXByb2plY3QnKTtcbiAgICBjb25zdCBhZGRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1mb3JtJyk7XG4gICAgY29uc3QgY2FuY2VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhbmNlbCcpO1xuICAgIGNvbnN0IGFkZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQnKTtcbiAgICBjb25zdCBkZWxldGVJY29uID1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVsZXRlLWljb24nKTtcbiAgICBsZXQgcHJvamVjdFZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QnKVxuXG4gICAgIGNvbnN0IGFkZFRvZG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRvZG8nKTtcbiAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcbiAgICAgY29uc3QgY2FuY2VsRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYW5jZWwtZm9ybScpO1xuICAgICBsZXQgdGl0bGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZScpO1xuICAgICBsZXQgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjcmlwdGlvbicpO1xuICAgICBsZXQgcHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbXBvcnRhbmNlJyk7XG4gICAgIGxldCBkYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGF0ZScpOyBcbiAgICAgY29uc3QgYWRkSW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1mb3JtQnRuJyk7XG4gICAgXG4gICAgZnVuY3Rpb24gYWRkRXZlbnQoKSB7XG4gICAgICAgIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5QWRkUHJvamVjdCk7XG4gICAgICAgIGNhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhpZGVQcm9qZWN0Qm94KTtcbiAgICAgICAgYWRkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkUHJvamVjdFRvRG9tKTtcbiAgICAgICAgYWRkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGlkZUFkZEZvcm0pO1xuICAgICAgICBhZGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBBZGRFdmVudHNUb1Byb2plY3RzKTsgXG4gICAgICAgIGFkZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN0b3JhZ2UuZGVsZXRlUHJvamVjdCk7XG4gICAgICAgIFxuICAgICAgICBhZGRUb2RvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheUFkZFRvRG9Gb3JtKTtcbiAgICAgICAgYWRkSW5wdXRzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkRm9ybUlucHV0c1RvUHJvamVjdCk7XG4gICAgICAgIGFkZElucHV0cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFwcGVuZFRvZG9MaXN0VGl0dGxlc1RvRG9tKTtcbiAgICAgICAgY2FuY2VsRm9ybS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNhbmNlbEFkZFRvRG9Gb3JtKTsgICAgXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlzcGxheUFkZFByb2plY3QoKSB7XG4gICAgICAgIGFkZEZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpXG4gICAgICAgIHByb2plY3Quc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9XG4gICAgICAgIFxuICAgIGZ1bmN0aW9uIGhpZGVQcm9qZWN0Qm94KCkge1xuICAgICAgICBhZGRGb3JtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgcHJvamVjdC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhpZGVBZGRGb3JtKCkgeyAgXG4gICAgICAgIGNvbnN0IGFkZEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLWZvcm0nKTtcbiAgICAgICAgYWRkRm9ybS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgIHByb2plY3Quc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIHByb2plY3RWYWx1ZS52YWx1ZSA9ICcnXG4gICAgICAgIH0gICAgXG4gICAgICAgICBcbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0RWxlbWVudHMoKSB7XG4gICAgICAgIGxldCBwcm9qZWN0SW5wdXQgPSBuZXcgUHJvamVjdChwcm9qZWN0VmFsdWUudmFsdWUpO1xuICAgICAgICBsZXQgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpOyAgXG4gICAgICAgIGxldCBwcm9qZWN0TmFtZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7IFxuICAgICAgICBjb25zdCBkZWxldGVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XG5cbiAgICAgICAvKiBcbiAgICAgICAgbGV0IHByb2plY3RBcnJheSA9W11cbiAgICAgICAgbGV0IHByb2plY3ROYW1lcyA9IFtdXG4gICAgICAgIHByb2plY3RBcnJheSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RBcnJheScpKTtcbiAgICAgICAgXG4gICAgICAgIHByb2plY3RBcnJheS5mb3JFYWNoKG9iaiA9PiB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgcHJvamVjdE5hbWVzLnB1c2gob2JqLm5hbWUpIFxuICAgICAgICB9KVxuICAgICAgICBpZihwcm9qZWN0TmFtZXMuaW5jbHVkZXMocHJvamVjdFZhbHVlLnZhbHVlKSkge1xuICAgICAgICAgICAgYWxlcnQoJ1RoaXMgcHJvamVjdCBhbHJlYWR5IGV4aXN0cycpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgICAgICBcbiovXG4gICAgICAgIHByb2plY3ROYW1lLmNsYXNzTGlzdC5hZGQoJ2F0dGFjaGVkJyk7XG4gICAgICAgIHByb2plY3ROYW1lSWNvbi5zcmMgPSBwcm9qZWN0SW5wdXQuaWNvbjtcbiAgICAgICAgcHJvamVjdE5hbWVJY29uLmNsYXNzTGlzdC5hZGQoJ2ljb25zJylcbiAgICAgICAgZGVsZXRlSWNvbi5zcmMgPSAnaWNvbnMvYmluLnBuZycgXG4gICAgICAgIGRlbGV0ZUljb24uY2xhc3NMaXN0LmFkZCgnZGVsZXRlLWljb24nKTsgICAgICAgICAgIFxuICAgICAgICBzcGFuLnRleHRDb250ZW50ID0gcHJvamVjdElucHV0Lm5hbWU7ICBcbiAgICAgICAgXG4gICAgICAgIHByb2plY3ROYW1lLmFwcGVuZENoaWxkKHByb2plY3ROYW1lSWNvbik7XG4gICAgICAgIHByb2plY3ROYW1lLmFwcGVuZENoaWxkKHNwYW4pO1xuICAgICAgICBwcm9qZWN0TmFtZS5hcHBlbmRDaGlsZChkZWxldGVJY29uKTtcbiAgICAgICAgc3RvcmFnZS5hZGRQcm9qZWN0VG9TdG9yZShwcm9qZWN0SW5wdXQpXG4gICAgICAgICAgIFxuICAgICAgICByZXR1cm4gcHJvamVjdE5hbWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkUHJvamVjdFRvRG9tKCkgeyBcbiAgICAgICAgaWYocHJvamVjdFZhbHVlLnZhbHVlID09ICcnKSByZXR1cm5cbiAgICAgICAgICAgIFxuICAgICAgICBsZXQgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1saXN0JykgICAgICAgXG4gICAgICAgIHByb2plY3RMaXN0LmFwcGVuZENoaWxkKGNyZWF0ZVByb2plY3RFbGVtZW50cygpKTsgICAgICAgIFxuICAgIFxuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBBZGRFdmVudHNUb1Byb2plY3RzKCkge1xuICAgICAgICBcbiAgICAgICAgY29uc3QgYXR0YWNoZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYXR0YWNoZWQnKTtcbiAgICAgICAgZm9yKGNvbnN0IGF0dGFjaCBvZiBhdHRhY2hlZCkge1xuICAgICAgICAgICAgY29uc3QgbWFpbkhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluLWhlYWRlcicpO1xuICAgICAgICAgICAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlY3Rpb24nKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG1haW5IZWFkZXIpXG4gICAgICAgICAgICBhdHRhY2guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgICAgIHNlY3Rpb24uaW5uZXJIVE1MID0gJydcbiAgICAgICAgICAgICAgICBjb25zdCBhZGRUb2RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10b2RvJylcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhZGRUb2RvKVxuICAgICAgICAgICAgICAgIG1haW5IZWFkZXIudGV4dENvbnRlbnQgPSBlLnRhcmdldC50ZXh0Q29udGVudDtcbiAgICAgICAgICAgICAgICBhZGRUb2RvLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc3QgdG9kb3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0QXJyYXknKSlcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0b2RvcylcbiAgICAgICAgICAgICAgICBsZXQgc2VsZWN0ZWRUb2RvID0gdG9kb3MuZmluZCgodG9kbykgPT4gdG9kby5uYW1lID09IGUudGFyZ2V0LnRleHRDb250ZW50KTtcbiAgICAgICAgICAgICAgICBsZXQgc2VsZWN0ZWRUb2RvcyA9IHNlbGVjdGVkVG9kby50b2RvcztcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzZWxlY3RlZFRvZG9zKVxuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRUb2Rvcy5mb3JFYWNoKHRvZG8gPT4ge1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgICAgICAgICBjbG9zZS5zcmMgPSAnaWNvbnMvY2xvc2UucG5nJztcbiAgICAgICAgICAgICAgICAgICAgY2xvc2UuY2xhc3NMaXN0LmFkZCgnaWNvbicpO1xuICAgICAgICAgICAgICAgICAgICBjbG9zZS5jbGFzc0xpc3QuYWRkKCdjbG9zZScpXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgICAgICAgICAgZWRpdC5zcmMgPSAnaWNvbnMvZWRpdC5wbmcnO1xuICAgICAgICAgICAgICAgICAgICBlZGl0LmNsYXNzTGlzdC5hZGQoJ2ljb24nKTtcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tib3gudHlwZSA9ICdjaGVja2JveCdcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tib3guc2V0QXR0cmlidXRlKCdpZCcsICdjaGVja2JveCcpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGVBbmREYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgICAgICAgICB0aXRsZUFuZERhdGUuY2xhc3NMaXN0LmFkZCgndGl0bGUtYW5kLWRhdGUnKVxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlQW5kRGF0ZS5hcHBlbmRDaGlsZChjaGVja2JveCk7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlQW5kRGF0ZS5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlQW5kRGF0ZS5hcHBlbmRDaGlsZChkYXRlKTsgXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlQW5kRGF0ZS5hcHBlbmRDaGlsZChlZGl0KVxuICAgICAgICAgICAgICAgICAgICB0aXRsZUFuZERhdGUuYXBwZW5kQ2hpbGQoY2xvc2UpOyAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSB0b2RvLnRpdGxlO1xuICAgICAgICAgICAgICAgICAgICBkYXRlLnRleHRDb250ZW50ID0gdG9kby5kYXRlO1xuICAgICAgICAgICAgICAgICAgICBzZWN0aW9uLmFwcGVuZENoaWxkKHRpdGxlQW5kRGF0ZSk7ICAgICAgIFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cbiAgIFxuICAgIEFkZEV2ZW50c1RvUHJvamVjdHMoKVxuXG4gICAgZnVuY3Rpb24gZGlzcGxheUFkZFRvRG9Gb3JtKCkge1xuICAgICAgICBhZGRUb2RvLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgICAgZm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2FuY2VsQWRkVG9Eb0Zvcm0oKSB7XG4gICAgICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICBhZGRUb2RvLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snICAgXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkRm9ybUlucHV0c1RvUHJvamVjdCgpIHsgICAgICBcbiAgICAgICAgbGV0IHRpdGxlID0gdGl0bGVJbnB1dC52YWx1ZVxuICAgICAgICBsZXQgZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbklucHV0LnZhbHVlO1xuICAgICAgICBsZXQgcHJpb3JpdHkgPSBwcmlvcml0eUlucHV0LnZhbHVlO1xuICAgICAgICBsZXQgZGF0ZSA9IGRhdGVJbnB1dC52YWx1ZTtcbiAgICAgICAgbGV0IHRvZG8gPSBuZXcgVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBkYXRlKTtcbiAgICAgICAgY29uc29sZS5sb2codG9kbylcbiAgICAgICAgc3RvcmFnZS5hZGRUb0RvVG9TdG9yYWdlKHRvZG8pO1xuICAgICAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKVxuICAgICAgICBhZGRUb2RvLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICBcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVUb2RvTGlzdFRpdGxlcygpIHtcbiAgICAgICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBjb25zdCBjbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBjbG9zZS5zcmMgPSAnaWNvbnMvY2xvc2UucG5nJztcbiAgICAgICAgY2xvc2UuY2xhc3NMaXN0LmFkZCgnaWNvbicpO1xuICAgICAgICBjbG9zZS5jbGFzc0xpc3QuYWRkKCdjbG9zZScpXG4gICAgICAgIGNvbnN0IGVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgZWRpdC5zcmMgPSAnaWNvbnMvZWRpdC5wbmcnO1xuICAgICAgICBlZGl0LmNsYXNzTGlzdC5hZGQoJ2ljb24nKTtcbiAgICAgICAgY2hlY2tib3gudHlwZSA9ICdjaGVja2JveCdcbiAgICAgICAgY2hlY2tib3guc2V0QXR0cmlidXRlKCdpZCcsICdjaGVja2JveCcpO1xuICAgICAgICBcblxuICAgICAgICBjb25zdCB0aXRsZUFuZERhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgICAgY29uc3QgdG9kb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHRvZG9EYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBcbiAgICAgICAgdGl0bGVBbmREYXRlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlLWFuZC1kYXRlJyk7XG4gICAgICAgIHRvZG9UaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlSW5wdXQudmFsdWU7XG4gICAgICAgIHRvZG9EYXRlLnRleHRDb250ZW50ID0gZGF0ZUlucHV0LnZhbHVlO1xuICAgICAgICB0aXRsZUFuZERhdGUuYXBwZW5kQ2hpbGQoY2hlY2tib3gpXG4gICAgICAgIHRpdGxlQW5kRGF0ZS5hcHBlbmRDaGlsZCh0b2RvVGl0bGUpO1xuICAgICAgICB0aXRsZUFuZERhdGUuYXBwZW5kQ2hpbGQodG9kb0RhdGUpO1xuICAgICAgICB0aXRsZUFuZERhdGUuYXBwZW5kQ2hpbGQoZWRpdCk7XG4gICAgICAgIHRpdGxlQW5kRGF0ZS5hcHBlbmRDaGlsZChjbG9zZSk7XG4gICAgICAgIHJldHVybiB0aXRsZUFuZERhdGU7ICAgICAgICBcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhcHBlbmRUb2RvTGlzdFRpdHRsZXNUb0RvbSgpIHtcbiAgICAgICAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlY3Rpb24nKTsgICAgXG4gICAgICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQoY3JlYXRlVG9kb0xpc3RUaXRsZXMoKSlcbiAgICAgICAgYWRkVG9kby5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJykgXG4gICAgICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgnaGlkZScpICAgICBcbiAgICB9XG4gICAgICAgICAgICAgICAgLy8gIGxvY2FsU3RvcmFnZS5jbGVhcigpXG4gICAgcmV0dXJue2FkZEV2ZW50LFxuICAgICAgICAgY3JlYXRlUHJvamVjdEVsZW1lbnRzLFxuICAgICAgIH1cblxufSkoKVxuXG5leHBvcnQgZGVmYXVsdCBkb21FbGVtZW50c1xuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3QuanNcIjtcbmltcG9ydCBkb21FbGVtZW50cyBmcm9tIFwiLi91c2VySW50ZXJmYWNlLmpzXCI7XG5pbXBvcnQgc3RvcmFnZSBmcm9tIFwiLi9zdG9yYWdlLmpzXCJcblxuXG4gZG9tRWxlbWVudHMuYWRkRXZlbnQoKVxuIHN0b3JhZ2UuZGVsZXRlUHJvamVjdCgpXG4gIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9