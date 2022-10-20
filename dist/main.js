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
    deleteProject
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
  
   
   return {
      storeItems,
      addProjectToStore,
      getStoredItems,
      deleteProject,

   }
})()

 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (storage);

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
        add.addEventListener('click', _storage_js__WEBPACK_IMPORTED_MODULE_1__["default"].deleteProject)
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
        let projectInput = new _project_js__WEBPACK_IMPORTED_MODULE_0__["default"](projectValue.value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQm9CO0FBQ1U7O0FBRTdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsT0FBTztBQUNQOztBQUVBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVELENBQUMsaUVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwR2tCO0FBQ0E7O0FBRWxDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLGlFQUFxQjtBQUMzRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLG1EQUFPO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxxRUFBeUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7O0FBRUEsQ0FBQzs7QUFFRCxpRUFBZTs7Ozs7O1VDckdmO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05tQztBQUNVO0FBQ1g7OztBQUdsQyxDQUFDLGtFQUFvQjtBQUNyQixDQUFDLGlFQUFxQjtBQUN0QixDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3VzZXJJbnRlcmZhY2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFByb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5pY29uID0gJ2ljb25zL2Rhc2hib2FyZC5wbmcnXG4gICAgICAgIHRoaXMudG9kb3MgPSBbXTtcbiAgICB9XG5cbiAgICBzZXROYW1lKG5hbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZVxuICAgIH1cblxuICAgIGdldE5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWVcbiAgICB9XG5cbiAgICBnZXRUb2RvcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9kb3M7XG4gICAgfVxuICAgIGRlbGV0ZVByb2plY3Rcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdCIsImltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3QuanNcIjtcbmltcG9ydCBkb21FbGVtZW50cyBmcm9tIFwiLi91c2VySW50ZXJmYWNlLmpzXCI7XG5cbmNvbnN0IHN0b3JhZ2UgPSAoZnVuY3Rpb24oKSB7XG4gIFxuICAgZnVuY3Rpb24gc3RvcmVJdGVtcyhpdGVtVG9TdG9yZSkge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RBcnJheScsIEpTT04uc3RyaW5naWZ5KGl0ZW1Ub1N0b3JlKSlcbiAgIH1cblxuICAgZnVuY3Rpb24gZ2V0U3RvcmVkSXRlbXMoKSB7XG4gICAgICBcbiAgICBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0QXJyYXknKSkgICBcbiAgIH1cblxuICAgZnVuY3Rpb24gYWRkUHJvamVjdFRvU3RvcmUoaXRlbXNUb0FkZCkge1xuICAgICAgbGV0IHN0b3JlS2V5ID0gJ3Byb2plY3RBcnJheSdcbiAgICAgIGxldCBzdG9yZSA9IFtdXG4gICBcbiAgICAgIGNvbnN0IHByb2plY3RBcnJheSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHN0b3JlS2V5KTtcbiAgICAgIGlmKHByb2plY3RBcnJheSA9PSAnJykge1xuICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oc3RvcmVLZXksIEpTT04uc3RyaW5naWZ5KFtpdGVtc1RvQWRkXSkpXG5cbiAgICAgIH1lbHNlIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHN0b3JlS2V5KSA9PSBudWxsKXtcbiAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHN0b3JlS2V5LCBKU09OLnN0cmluZ2lmeShbaXRlbXNUb0FkZF0pKVxuXG4gICAgICB9ZWxzZXtcbiAgICAgICAgIHN0b3JlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShzdG9yZUtleSkpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKHN0b3JlKVxuICAgICAgICAgIHN0b3JlLnB1c2goaXRlbXNUb0FkZClcbiAgICAgICAgIHN0b3JlSXRlbXMoc3RvcmUpO1xuICAgICAgfVxuICAgfVxuXG4gICBcbiAgIGZ1bmN0aW9uIHJlbmRlclN0b3JlZEl0ZW1zKCkgeyAgIFxuICAgICAgXG4gICAgICBsZXQgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1saXN0JylcbiAgICAgICBsZXQgc3RvcmUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0QXJyYXknKSkgXG4gICAgICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RBcnJheScpID09IG51bGwgfHwgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RBcnJheScpID09ICcnIHx8IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0QXJyYXknKSA9PSB1bmRlZmluZWQpIHJldHVyblxuICAgICAgICAgc3RvcmUuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICAgICAgIGNvbnN0IHByb2plY3ROYW1lSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgICAgICAgY29uc3QgZGVsZXRlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXG4gICAgICAgICBwcm9qZWN0TmFtZS5jbGFzc0xpc3QuYWRkKCdhdHRhY2hlZCcpO1xuICAgICAgICAgcHJvamVjdE5hbWVJY29uLmNsYXNzTGlzdC5hZGQoJ2ljb25zJyk7XG4gICAgICAgICBwcm9qZWN0TmFtZUljb24uc3JjID0gaXRlbS5pY29uO1xuICAgICAgICAgc3Bhbi50ZXh0Q29udGVudCA9IGl0ZW0ubmFtZTtcbiAgICAgICAgIGRlbGV0ZUljb24uc3JjID0gJ2ljb25zL2Jpbi5wbmcnIFxuICAgICAgICAgZGVsZXRlSWNvbi5jbGFzc0xpc3QuYWRkKCdkZWxldGUtaWNvbicpO1xuXG4gICAgICAgICBcbiAgICAgICAgIHByb2plY3ROYW1lLmFwcGVuZENoaWxkKHByb2plY3ROYW1lSWNvbik7XG4gICAgICAgICBwcm9qZWN0TmFtZS5hcHBlbmRDaGlsZChzcGFuKTsgXG4gICAgICAgICBwcm9qZWN0TmFtZS5hcHBlbmRDaGlsZChkZWxldGVJY29uKTtcbiAgICAgICAgIHByb2plY3RMaXN0LmFwcGVuZENoaWxkKHByb2plY3ROYW1lKSBcbiAgICAgICAgICAgXG4gICAgICAgICBcbiAgICAgIH0pO1xuICAgfVxuXG5yZW5kZXJTdG9yZWRJdGVtcygpXG5cbiAgIGZ1bmN0aW9uIGRlbGV0ZVByb2plY3QoKSB7XG4gICAgICBjb25zdCBtYWluSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4taGVhZGVyJyk7XG4gICAgICBsZXQgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1saXN0JylcbiAgICAgIGNvbnN0IGRlbGV0ZUljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVsZXRlLWljb24nKTtcbiAgICAgIGNvbnN0IGFkZFRvZG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRvZG8nKVxuICAgICAgY29uc29sZS5sb2coYWRkVG9kbylcbiAgICAgIGRlbGV0ZUljb24uZm9yRWFjaChpY29uID0+IHtcbiAgICAgICAgXG4gICAgICAgICBpY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICBsZXQgc3RvcmUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0QXJyYXknKSk7XG4gICAgICAgICBjb25zb2xlLmxvZyhzdG9yZSlcbiAgICAgICAgIG1haW5IZWFkZXIudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucmVtb3ZlKClcbiAgICAgICAgIGFkZFRvZG8uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgIHN0b3JlID0gc3RvcmUuZmlsdGVyKChwKSA9PiBwLm5hbWUgIT09IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQudGV4dENvbnRlbnQpICBcbiAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0QXJyYXknLCBKU09OLnN0cmluZ2lmeShzdG9yZSkpO1xuICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgIH0pXG4gICAgICAgICAgXG4gICAgICB9KTtcbiAgfVxuIFxuICBcbiAgZGVsZXRlUHJvamVjdCgpXG4gIFxuICAgXG4gICByZXR1cm4ge1xuICAgICAgc3RvcmVJdGVtcyxcbiAgICAgIGFkZFByb2plY3RUb1N0b3JlLFxuICAgICAgZ2V0U3RvcmVkSXRlbXMsXG4gICAgICBkZWxldGVQcm9qZWN0LFxuXG4gICB9XG59KSgpXG5cbiBleHBvcnQgZGVmYXVsdCBzdG9yYWdlIiwiaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0LmpzJ1xuaW1wb3J0IHN0b3JhZ2UgZnJvbSAnLi9zdG9yYWdlLmpzJ1xuXG5jb25zdCBkb21FbGVtZW50cyA9IChmdW5jdGlvbigpIHtcbiAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1wcm9qZWN0Jyk7XG4gICAgY29uc3QgYWRkRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtZm9ybScpO1xuICAgIGNvbnN0IGNhbmNlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYW5jZWwnKTtcbiAgICBjb25zdCBhZGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkJyk7XG4gICAgY29uc3QgZGVsZXRlSWNvbiA9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlbGV0ZS1pY29uJyk7XG4gICAgbGV0IHByb2plY3RWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0JylcbiAgICAgY29uc3QgYWRkVG9kbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdG9kbycpO1xuICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpO1xuICAgIFxuICAgIGZ1bmN0aW9uIGFkZEV2ZW50KCkge1xuICAgICAgICBwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheUFkZFByb2plY3QpXG4gICAgICAgIGNhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhpZGVQcm9qZWN0Qm94KVxuICAgICAgICBhZGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRQcm9qZWN0VG9Eb20pXG4gICAgICAgIGFkZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhpZGVBZGRGb3JtKVxuICAgICAgICBhZGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBBZGRFdmVudHNUb1Byb2plY3RzKSBcbiAgICAgICAgYWRkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3RvcmFnZS5kZWxldGVQcm9qZWN0KVxuICAgICAgICBhZGRUb2RvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheUFkZFRvRG9Gb3JtKTsgICAgXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlzcGxheUFkZFByb2plY3QoKSB7XG4gICAgICAgIGFkZEZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpXG4gICAgICAgIHByb2plY3Quc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9XG4gICAgICAgIFxuICAgIGZ1bmN0aW9uIGhpZGVQcm9qZWN0Qm94KCkge1xuICAgICAgICBhZGRGb3JtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgcHJvamVjdC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhpZGVBZGRGb3JtKCkgeyAgXG4gICAgICAgIGNvbnN0IGFkZEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLWZvcm0nKTtcbiAgICAgICAgYWRkRm9ybS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgIHByb2plY3Quc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIHByb2plY3RWYWx1ZS52YWx1ZSA9ICcnXG4gICAgICAgIH0gICAgXG4gICAgICAgICBcbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0RWxlbWVudHMoKSB7XG4gICAgICAgIGxldCBwcm9qZWN0SW5wdXQgPSBuZXcgUHJvamVjdChwcm9qZWN0VmFsdWUudmFsdWUpO1xuICAgICAgICBsZXQgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpOyAgXG4gICAgICAgIGxldCBwcm9qZWN0TmFtZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7IFxuICAgICAgICBjb25zdCBkZWxldGVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XG4gICAgICAgIFxuICAgICAgICBwcm9qZWN0TmFtZS5jbGFzc0xpc3QuYWRkKCdhdHRhY2hlZCcpO1xuICAgICAgICBwcm9qZWN0TmFtZUljb24uc3JjID0gcHJvamVjdElucHV0Lmljb247XG4gICAgICAgIHByb2plY3ROYW1lSWNvbi5jbGFzc0xpc3QuYWRkKCdpY29ucycpXG4gICAgICAgIGRlbGV0ZUljb24uc3JjID0gJ2ljb25zL2Jpbi5wbmcnIFxuICAgICAgICBkZWxldGVJY29uLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS1pY29uJyk7ICAgICAgICAgICBcbiAgICAgICAgc3Bhbi50ZXh0Q29udGVudCA9IHByb2plY3RJbnB1dC5uYW1lOyAgXG4gICAgICAgIFxuICAgICAgICBwcm9qZWN0TmFtZS5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZUljb24pO1xuICAgICAgICBwcm9qZWN0TmFtZS5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICAgICAgcHJvamVjdE5hbWUuYXBwZW5kQ2hpbGQoZGVsZXRlSWNvbik7XG4gICAgICAgIHN0b3JhZ2UuYWRkUHJvamVjdFRvU3RvcmUocHJvamVjdElucHV0KVxuICAgICAgICAgICBcbiAgICAgICAgcmV0dXJuIHByb2plY3ROYW1lO1xuICAgIFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZFByb2plY3RUb0RvbSgpIHsgXG4gICAgICAgIGlmKHByb2plY3RWYWx1ZS52YWx1ZSA9PSAnJykgcmV0dXJuICBcbiAgICAgICAgbGV0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtbGlzdCcpICAgICAgIFxuICAgICAgICBwcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChjcmVhdGVQcm9qZWN0RWxlbWVudHMoKSk7ICAgICAgICBcbiAgICBcbiAgICB9XG4gXG4gICAgZnVuY3Rpb24gQWRkRXZlbnRzVG9Qcm9qZWN0cygpIHtcbiAgICAgICAgY29uc3QgYXR0YWNoZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYXR0YWNoZWQnKTtcbiAgICAgICAgZm9yKGNvbnN0IGF0dGFjaCBvZiBhdHRhY2hlZCkge1xuICAgICAgICAgICAgYXR0YWNoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgICAgICBjb25zdCBtYWluSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4taGVhZGVyJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgYWRkVG9kbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdG9kbycpXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYWRkVG9kbylcbiAgICAgICAgICAgICAgICBtYWluSGVhZGVyLnRleHRDb250ZW50ID0gZS50YXJnZXQudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICAgICAgYWRkVG9kby5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG4gICBcbiAgICBBZGRFdmVudHNUb1Byb2plY3RzKClcblxuICAgIGZ1bmN0aW9uIGRpc3BsYXlBZGRUb0RvRm9ybSgpIHtcbiAgICAgICAgYWRkVG9kby5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICAgIGZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAvLyAgIGxvY2FsU3RvcmFnZS5jbGVhcigpXG4gICAgcmV0dXJue2FkZEV2ZW50LFxuICAgICAgICAgY3JlYXRlUHJvamVjdEVsZW1lbnRzLFxuICAgICAgIH1cblxufSkoKVxuXG5leHBvcnQgZGVmYXVsdCBkb21FbGVtZW50cyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vcHJvamVjdC5qc1wiO1xuaW1wb3J0IGRvbUVsZW1lbnRzIGZyb20gXCIuL3VzZXJJbnRlcmZhY2UuanNcIjtcbmltcG9ydCBzdG9yYWdlIGZyb20gXCIuL3N0b3JhZ2UuanNcIlxuXG5cbiBkb21FbGVtZW50cy5hZGRFdmVudCgpXG4gc3RvcmFnZS5kZWxldGVQcm9qZWN0KClcbiAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=