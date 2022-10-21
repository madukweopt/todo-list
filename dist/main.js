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
     console.log(title)
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
            attach.addEventListener('click', function(e) {
                
                e.stopPropagation()
                const mainHeader = document.querySelector('#main-header');
                const addTodo = document.querySelector('.add-todo')
                console.log(addTodo)
                mainHeader.textContent = e.target.textContent;
                addTodo.style.display = 'block'
            
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
        form.style.display = 'none';
        addTodo.style.display = 'block';

    }
    
      
            //    localStorage.clear()
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4Qm9CO0FBQ1U7O0FBRTdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsT0FBTztBQUNQOztBQUVBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVELENBQUMsaUVBQWU7Ozs7Ozs7Ozs7Ozs7O0FDaEhoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpRUFBZSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCZTtBQUNBO0FBQ047O0FBRTVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLGlFQUFxQjtBQUMzRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixtREFBTztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHFFQUF5Qjs7QUFFakM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsZ0RBQUk7QUFDM0I7QUFDQSxRQUFRLG9FQUF3QjtBQUNoQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7O0FBRUEsQ0FBQzs7QUFFRCxpRUFBZTs7Ozs7O1VDckpmO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05tQztBQUNVO0FBQ1g7OztBQUdsQyxDQUFDLGtFQUFvQjtBQUNyQixDQUFDLGlFQUFxQjtBQUN0QixDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3VzZXJJbnRlcmZhY2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFByb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5pY29uID0gJ2ljb25zL2Rhc2hib2FyZC5wbmcnXG4gICAgICAgIHRoaXMudG9kb3MgPSBbXTtcbiAgICB9XG5cbiAgICBzZXROYW1lKG5hbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZVxuICAgIH1cblxuICAgIGdldE5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWVcbiAgICB9XG5cbiAgICBnZXRUb2RvcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9kb3M7XG4gICAgfVxuICAgIFxuICAgIGFkZFRvZG8odG9kbykge1xuICAgICAgICB0aGlzLnRvZG9zLnB1c2godG9kbyk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0IiwiaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vcHJvamVjdC5qc1wiO1xuaW1wb3J0IGRvbUVsZW1lbnRzIGZyb20gXCIuL3VzZXJJbnRlcmZhY2UuanNcIjtcblxuY29uc3Qgc3RvcmFnZSA9IChmdW5jdGlvbigpIHtcbiAgXG4gICBmdW5jdGlvbiBzdG9yZUl0ZW1zKGl0ZW1Ub1N0b3JlKSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdEFycmF5JywgSlNPTi5zdHJpbmdpZnkoaXRlbVRvU3RvcmUpKVxuICAgfVxuXG4gICBmdW5jdGlvbiBnZXRTdG9yZWRJdGVtcygpIHtcbiAgICAgIFxuICAgIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RBcnJheScpKSAgIFxuICAgfVxuXG4gICBmdW5jdGlvbiBhZGRQcm9qZWN0VG9TdG9yZShpdGVtc1RvQWRkKSB7XG4gICAgICBsZXQgc3RvcmVLZXkgPSAncHJvamVjdEFycmF5J1xuICAgICAgbGV0IHN0b3JlID0gW11cbiAgIFxuICAgICAgY29uc3QgcHJvamVjdEFycmF5ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oc3RvcmVLZXkpO1xuICAgICAgaWYocHJvamVjdEFycmF5ID09ICcnKSB7XG4gICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShzdG9yZUtleSwgSlNPTi5zdHJpbmdpZnkoW2l0ZW1zVG9BZGRdKSlcblxuICAgICAgfWVsc2UgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oc3RvcmVLZXkpID09IG51bGwpe1xuICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oc3RvcmVLZXksIEpTT04uc3RyaW5naWZ5KFtpdGVtc1RvQWRkXSkpXG5cbiAgICAgIH1lbHNle1xuICAgICAgICAgc3RvcmUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHN0b3JlS2V5KSk7XG4gICAgICAgICAgY29uc29sZS5sb2coc3RvcmUpXG4gICAgICAgICAgc3RvcmUucHVzaChpdGVtc1RvQWRkKVxuICAgICAgICAgc3RvcmVJdGVtcyhzdG9yZSk7XG4gICAgICB9XG4gICB9XG5cbiAgIFxuICAgZnVuY3Rpb24gcmVuZGVyU3RvcmVkSXRlbXMoKSB7ICAgXG4gICAgICBcbiAgICAgIGxldCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWxpc3QnKVxuICAgICAgIGxldCBzdG9yZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RBcnJheScpKSBcbiAgICAgICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdEFycmF5JykgPT0gbnVsbCB8fCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdEFycmF5JykgPT0gJycgfHwgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RBcnJheScpID09IHVuZGVmaW5lZCkgcmV0dXJuXG4gICAgICAgICBzdG9yZS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgICAgICAgY29uc3QgcHJvamVjdE5hbWVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgICAgICBjb25zdCBkZWxldGVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cbiAgICAgICAgIHByb2plY3ROYW1lLmNsYXNzTGlzdC5hZGQoJ2F0dGFjaGVkJyk7XG4gICAgICAgICBwcm9qZWN0TmFtZUljb24uY2xhc3NMaXN0LmFkZCgnaWNvbnMnKTtcbiAgICAgICAgIHByb2plY3ROYW1lSWNvbi5zcmMgPSBpdGVtLmljb247XG4gICAgICAgICBzcGFuLnRleHRDb250ZW50ID0gaXRlbS5uYW1lO1xuICAgICAgICAgZGVsZXRlSWNvbi5zcmMgPSAnaWNvbnMvYmluLnBuZycgXG4gICAgICAgICBkZWxldGVJY29uLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS1pY29uJyk7XG5cbiAgICAgICAgIFxuICAgICAgICAgcHJvamVjdE5hbWUuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWVJY29uKTtcbiAgICAgICAgIHByb2plY3ROYW1lLmFwcGVuZENoaWxkKHNwYW4pOyBcbiAgICAgICAgIHByb2plY3ROYW1lLmFwcGVuZENoaWxkKGRlbGV0ZUljb24pO1xuICAgICAgICAgcHJvamVjdExpc3QuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUpIFxuICAgICAgICAgICBcbiAgICAgICAgIFxuICAgICAgfSk7XG4gICB9XG5cbnJlbmRlclN0b3JlZEl0ZW1zKClcblxuICAgZnVuY3Rpb24gZGVsZXRlUHJvamVjdCgpIHtcbiAgICAgIGNvbnN0IG1haW5IZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbi1oZWFkZXInKTtcbiAgICAgIGxldCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWxpc3QnKVxuICAgICAgY29uc3QgZGVsZXRlSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZWxldGUtaWNvbicpO1xuICAgICAgY29uc3QgYWRkVG9kbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdG9kbycpXG4gICAgICBjb25zb2xlLmxvZyhhZGRUb2RvKVxuICAgICAgZGVsZXRlSWNvbi5mb3JFYWNoKGljb24gPT4ge1xuICAgICAgICBcbiAgICAgICAgIGljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgIGxldCBzdG9yZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RBcnJheScpKTtcbiAgICAgICAgIGNvbnNvbGUubG9nKHN0b3JlKVxuICAgICAgICAgbWFpbkhlYWRlci50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5yZW1vdmUoKVxuICAgICAgICAgYWRkVG9kby5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgc3RvcmUgPSBzdG9yZS5maWx0ZXIoKHApID0+IHAubmFtZSAhPT0gZS50YXJnZXQucGFyZW50RWxlbWVudC50ZXh0Q29udGVudCkgIFxuICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RBcnJheScsIEpTT04uc3RyaW5naWZ5KHN0b3JlKSk7XG4gICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgfSlcbiAgICAgICAgICBcbiAgICAgIH0pO1xuICB9XG4gIGRlbGV0ZVByb2plY3QoKVxuXG4gIGZ1bmN0aW9uIGFkZFRvRG9Ub1N0b3JhZ2UoaXRlbVRvQWRkKSB7XG4gICBjb25zdCBtYWluSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4taGVhZGVyJyk7XG4gICBsZXQgYXJyYXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0QXJyYXknKSlcbiAgIGxldCBmaW5kT2JqID0gYXJyYXkuZmluZCgoaXRlbSkgPT4gaXRlbS5uYW1lID09IG1haW5IZWFkZXIudGV4dENvbnRlbnQpO1xuICAgbGV0IHByb2plY3RBcnJheSA9IGFycmF5LmZpbHRlcigocHJvcHMpID0+IHByb3BzLm5hbWUgIT09IG1haW5IZWFkZXIudGV4dENvbnRlbnQpXG5cbiAgIGZpbmRPYmoudG9kb3MucHVzaChpdGVtVG9BZGQpXG4gICBwcm9qZWN0QXJyYXkucHVzaChmaW5kT2JqKVxuICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RBcnJheScsIEpTT04uc3RyaW5naWZ5KHByb2plY3RBcnJheSkpXG5cbiAgfVxuICBcbiAgIFxuICAgcmV0dXJuIHtcbiAgICAgIHN0b3JlSXRlbXMsXG4gICAgICBhZGRQcm9qZWN0VG9TdG9yZSxcbiAgICAgIGdldFN0b3JlZEl0ZW1zLFxuICAgICAgZGVsZXRlUHJvamVjdCxcbiAgICAgIHJlbmRlclN0b3JlZEl0ZW1zLFxuICAgICAgYWRkVG9Eb1RvU3RvcmFnZSxcblxuICAgfVxufSkoKVxuXG4gZXhwb3J0IGRlZmF1bHQgc3RvcmFnZSIsImNsYXNzIFRvZG8ge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGRhdGUpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgdGhpcy5kYXRlID0gZGF0ZTtcbiAgICB9XG5cbiAgICBnZXRUaXRsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGl0bGU7XG4gICAgfSBcblxuICAgIGdldERlc2NyaXB0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kZXNjcmlwdGlvbjtcbiAgICB9XG5cbiAgICBnZXRQcmlvcml0eSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJpb3JpdHk7XG4gICAgfVxuXG4gICAgZ2V0RGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0ZTtcbiAgICB9XG5cbn1cbmV4cG9ydCBkZWZhdWx0IFRvZG87IiwiaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0LmpzJ1xuaW1wb3J0IHN0b3JhZ2UgZnJvbSAnLi9zdG9yYWdlLmpzJ1xuaW1wb3J0IFRvZG8gZnJvbSAnLi90b2RvLmpzJ1xuXG5jb25zdCBkb21FbGVtZW50cyA9IChmdW5jdGlvbigpIHtcbiAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1wcm9qZWN0Jyk7XG4gICAgY29uc3QgYWRkRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtZm9ybScpO1xuICAgIGNvbnN0IGNhbmNlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYW5jZWwnKTtcbiAgICBjb25zdCBhZGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkJyk7XG4gICAgY29uc3QgZGVsZXRlSWNvbiA9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlbGV0ZS1pY29uJyk7XG4gICAgbGV0IHByb2plY3RWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0JylcblxuICAgICBjb25zdCBhZGRUb2RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10b2RvJyk7XG4gICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XG4gICAgIGNvbnN0IGNhbmNlbEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FuY2VsLWZvcm0nKTtcbiAgICAgbGV0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGUnKTtcbiAgICAgY29uc29sZS5sb2codGl0bGUpXG4gICAgIGxldCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJyk7XG4gICAgIGxldCBwcmlvcml0eUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ltcG9ydGFuY2UnKTtcbiAgICAgbGV0IGRhdGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkYXRlJyk7IFxuICAgICBjb25zdCBhZGRJbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLWZvcm1CdG4nKTtcbiAgICBcbiAgICBmdW5jdGlvbiBhZGRFdmVudCgpIHtcbiAgICAgICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc3BsYXlBZGRQcm9qZWN0KTtcbiAgICAgICAgY2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGlkZVByb2plY3RCb3gpO1xuICAgICAgICBhZGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRQcm9qZWN0VG9Eb20pO1xuICAgICAgICBhZGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoaWRlQWRkRm9ybSk7XG4gICAgICAgIGFkZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIEFkZEV2ZW50c1RvUHJvamVjdHMpOyBcbiAgICAgICAgYWRkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3RvcmFnZS5kZWxldGVQcm9qZWN0KTtcbiAgICAgICAgYWRkVG9kby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc3BsYXlBZGRUb0RvRm9ybSk7XG4gICAgICAgIGFkZElucHV0cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZEZvcm1JbnB1dHNUb1Byb2plY3QpO1xuICAgICAgICBjYW5jZWxGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FuY2VsQWRkVG9Eb0Zvcm0pOyAgICBcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkaXNwbGF5QWRkUHJvamVjdCgpIHtcbiAgICAgICAgYWRkRm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJylcbiAgICAgICAgcHJvamVjdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cbiAgICAgICAgXG4gICAgZnVuY3Rpb24gaGlkZVByb2plY3RCb3goKSB7XG4gICAgICAgIGFkZEZvcm0uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICBwcm9qZWN0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGlkZUFkZEZvcm0oKSB7ICBcbiAgICAgICAgY29uc3QgYWRkRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtZm9ybScpO1xuICAgICAgICBhZGRGb3JtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgcHJvamVjdC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgcHJvamVjdFZhbHVlLnZhbHVlID0gJydcbiAgICAgICAgfSAgICBcbiAgICAgICAgIFxuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb2plY3RFbGVtZW50cygpIHtcbiAgICAgICAgbGV0IHByb2plY3RJbnB1dCA9IG5ldyBQcm9qZWN0KHByb2plY3RWYWx1ZS52YWx1ZSk7XG4gICAgICAgIGxldCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7ICBcbiAgICAgICAgbGV0IHByb2plY3ROYW1lSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTsgXG4gICAgICAgIGNvbnN0IGRlbGV0ZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcblxuICAgICAgIC8qIFxuICAgICAgICBsZXQgcHJvamVjdEFycmF5ID1bXVxuICAgICAgICBsZXQgcHJvamVjdE5hbWVzID0gW11cbiAgICAgICAgcHJvamVjdEFycmF5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdEFycmF5JykpO1xuICAgICAgICBcbiAgICAgICAgcHJvamVjdEFycmF5LmZvckVhY2gob2JqID0+IHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICBwcm9qZWN0TmFtZXMucHVzaChvYmoubmFtZSkgXG4gICAgICAgIH0pXG4gICAgICAgIGlmKHByb2plY3ROYW1lcy5pbmNsdWRlcyhwcm9qZWN0VmFsdWUudmFsdWUpKSB7XG4gICAgICAgICAgICBhbGVydCgnVGhpcyBwcm9qZWN0IGFscmVhZHkgZXhpc3RzJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgICAgIFxuKi9cbiAgICAgICAgcHJvamVjdE5hbWUuY2xhc3NMaXN0LmFkZCgnYXR0YWNoZWQnKTtcbiAgICAgICAgcHJvamVjdE5hbWVJY29uLnNyYyA9IHByb2plY3RJbnB1dC5pY29uO1xuICAgICAgICBwcm9qZWN0TmFtZUljb24uY2xhc3NMaXN0LmFkZCgnaWNvbnMnKVxuICAgICAgICBkZWxldGVJY29uLnNyYyA9ICdpY29ucy9iaW4ucG5nJyBcbiAgICAgICAgZGVsZXRlSWNvbi5jbGFzc0xpc3QuYWRkKCdkZWxldGUtaWNvbicpOyAgICAgICAgICAgXG4gICAgICAgIHNwYW4udGV4dENvbnRlbnQgPSBwcm9qZWN0SW5wdXQubmFtZTsgIFxuICAgICAgICBcbiAgICAgICAgcHJvamVjdE5hbWUuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWVJY29uKTtcbiAgICAgICAgcHJvamVjdE5hbWUuYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgICAgIHByb2plY3ROYW1lLmFwcGVuZENoaWxkKGRlbGV0ZUljb24pO1xuICAgICAgICBzdG9yYWdlLmFkZFByb2plY3RUb1N0b3JlKHByb2plY3RJbnB1dClcblxuICAgICAgICAgICBcbiAgICAgICAgcmV0dXJuIHByb2plY3ROYW1lO1xuICAgIFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZFByb2plY3RUb0RvbSgpIHsgXG4gICAgICAgIGlmKHByb2plY3RWYWx1ZS52YWx1ZSA9PSAnJykgcmV0dXJuXG4gICAgICAgICAgICBcbiAgICAgICAgbGV0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtbGlzdCcpICAgICAgIFxuICAgICAgICBwcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChjcmVhdGVQcm9qZWN0RWxlbWVudHMoKSk7ICAgICAgICBcbiAgICBcbiAgICB9XG4gXG4gICAgZnVuY3Rpb24gQWRkRXZlbnRzVG9Qcm9qZWN0cygpIHtcbiAgICAgICAgY29uc3QgYXR0YWNoZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYXR0YWNoZWQnKTtcbiAgICAgICAgZm9yKGNvbnN0IGF0dGFjaCBvZiBhdHRhY2hlZCkge1xuICAgICAgICAgICAgYXR0YWNoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgICAgICBjb25zdCBtYWluSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4taGVhZGVyJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgYWRkVG9kbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdG9kbycpXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYWRkVG9kbylcbiAgICAgICAgICAgICAgICBtYWluSGVhZGVyLnRleHRDb250ZW50ID0gZS50YXJnZXQudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICAgICAgYWRkVG9kby5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuICAgXG4gICAgQWRkRXZlbnRzVG9Qcm9qZWN0cygpXG5cbiAgICBmdW5jdGlvbiBkaXNwbGF5QWRkVG9Eb0Zvcm0oKSB7XG4gICAgICAgIGFkZFRvZG8uc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgICBmb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYW5jZWxBZGRUb0RvRm9ybSgpIHtcbiAgICAgICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgIGFkZFRvZG8uc3R5bGUuZGlzcGxheSA9ICdibG9jaycgICBcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRGb3JtSW5wdXRzVG9Qcm9qZWN0KCkge1xuICAgICAgICBcbiAgICAgICAgbGV0IHRpdGxlID0gdGl0bGVJbnB1dC52YWx1ZVxuICAgICAgICBsZXQgZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbklucHV0LnZhbHVlO1xuICAgICAgICBsZXQgcHJpb3JpdHkgPSBwcmlvcml0eUlucHV0LnZhbHVlO1xuICAgICAgICBsZXQgZGF0ZSA9IGRhdGVJbnB1dC52YWx1ZTtcbiAgICAgICAgbGV0IHRvZG8gPSBuZXcgVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBkYXRlKTtcbiAgICAgICAgY29uc29sZS5sb2codG9kbylcbiAgICAgICAgc3RvcmFnZS5hZGRUb0RvVG9TdG9yYWdlKHRvZG8pO1xuICAgICAgICBmb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIGFkZFRvZG8uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cbiAgICB9XG4gICAgXG4gICAgICBcbiAgICAgICAgICAgIC8vICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpXG4gICAgcmV0dXJue2FkZEV2ZW50LFxuICAgICAgICAgY3JlYXRlUHJvamVjdEVsZW1lbnRzLFxuICAgICAgIH1cblxufSkoKVxuXG5leHBvcnQgZGVmYXVsdCBkb21FbGVtZW50cyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vcHJvamVjdC5qc1wiO1xuaW1wb3J0IGRvbUVsZW1lbnRzIGZyb20gXCIuL3VzZXJJbnRlcmZhY2UuanNcIjtcbmltcG9ydCBzdG9yYWdlIGZyb20gXCIuL3N0b3JhZ2UuanNcIlxuXG5cbiBkb21FbGVtZW50cy5hZGRFdmVudCgpXG4gc3RvcmFnZS5kZWxldGVQcm9qZWN0KClcbiAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=