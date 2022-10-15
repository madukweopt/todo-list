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
      const addTask = document.querySelector('.add-task')
      deleteIcon.forEach(icon => {
        
         icon.addEventListener('click', function(e) {
            e.stopPropagation()
        let store = JSON.parse(localStorage.getItem('projectArray'));
         console.log(store)
         mainHeader.textContent = '';
         e.target.parentElement.remove()
         addTask.style.display = 'none';
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
    console.log(deleteIcon)
    let projectValue = document.querySelector('#project')
    
    function addEvent() {
        project.addEventListener('click', displayAddProject)
        cancel.addEventListener('click', hideProjectBox)
        add.addEventListener('click', addProjectToDom)
        add.addEventListener('click', hideAddForm)
        add.addEventListener('click', AddEventsToProjects) 
        add.addEventListener('click', _storage_js__WEBPACK_IMPORTED_MODULE_1__["default"].deleteProject)
       
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
                const addTask = document.querySelector('.add-task')
                mainHeader.textContent = e.target.textContent;
                addTask.style.display = 'block';
            
            })
        }
    }
   
    AddEventsToProjects()

        
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQm9CO0FBQ1U7O0FBRTdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsT0FBTztBQUNQOztBQUVBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRCxDQUFDLGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7O0FDbkdrQjtBQUNBOztBQUVsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsaUVBQXFCO0FBQzNEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsbURBQU87QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxxRUFBeUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTs7QUFFQSxDQUFDOztBQUVELGlFQUFlOzs7Ozs7VUM5RmY7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTm1DO0FBQ1U7QUFDWDs7O0FBR2xDLENBQUMsa0VBQW9CO0FBQ3JCLENBQUMsaUVBQXFCO0FBQ3RCLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdXNlckludGVyZmFjZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgUHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmljb24gPSAnaWNvbnMvZGFzaGJvYXJkLnBuZydcbiAgICAgICAgdGhpcy50b2RvcyA9IFtdO1xuICAgIH1cblxuICAgIHNldE5hbWUobmFtZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lXG4gICAgfVxuXG4gICAgZ2V0TmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZVxuICAgIH1cblxuICAgIGdldFRvZG9zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50b2RvcztcbiAgICB9XG4gICAgZGVsZXRlUHJvamVjdFxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0IiwiaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vcHJvamVjdC5qc1wiO1xuaW1wb3J0IGRvbUVsZW1lbnRzIGZyb20gXCIuL3VzZXJJbnRlcmZhY2UuanNcIjtcblxuY29uc3Qgc3RvcmFnZSA9IChmdW5jdGlvbigpIHtcbiAgXG4gICBmdW5jdGlvbiBzdG9yZUl0ZW1zKGl0ZW1Ub1N0b3JlKSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdEFycmF5JywgSlNPTi5zdHJpbmdpZnkoaXRlbVRvU3RvcmUpKVxuICAgfVxuXG4gICBmdW5jdGlvbiBnZXRTdG9yZWRJdGVtcygpIHtcbiAgICAgIFxuICAgIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RBcnJheScpKSAgIFxuICAgfVxuXG4gICBmdW5jdGlvbiBhZGRQcm9qZWN0VG9TdG9yZShpdGVtc1RvQWRkKSB7XG4gICAgICBsZXQgc3RvcmVLZXkgPSAncHJvamVjdEFycmF5J1xuICAgICAgbGV0IHN0b3JlID0gW11cbiAgIFxuICAgICAgY29uc3QgcHJvamVjdEFycmF5ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oc3RvcmVLZXkpO1xuICAgICAgaWYocHJvamVjdEFycmF5ID09ICcnKSB7XG4gICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShzdG9yZUtleSwgSlNPTi5zdHJpbmdpZnkoW2l0ZW1zVG9BZGRdKSlcblxuICAgICAgfWVsc2UgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oc3RvcmVLZXkpID09IG51bGwpe1xuICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oc3RvcmVLZXksIEpTT04uc3RyaW5naWZ5KFtpdGVtc1RvQWRkXSkpXG5cbiAgICAgIH1lbHNle1xuICAgICAgICAgc3RvcmUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHN0b3JlS2V5KSk7XG4gICAgICAgICAgY29uc29sZS5sb2coc3RvcmUpXG4gICAgICAgICAgc3RvcmUucHVzaChpdGVtc1RvQWRkKVxuICAgICAgICAgc3RvcmVJdGVtcyhzdG9yZSk7XG4gICAgICB9XG4gICB9XG5cbiAgIFxuICAgZnVuY3Rpb24gcmVuZGVyU3RvcmVkSXRlbXMoKSB7ICAgXG4gICAgICBcbiAgICAgIGxldCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWxpc3QnKVxuICAgICAgIGxldCBzdG9yZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RBcnJheScpKSBcbiAgICAgICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdEFycmF5JykgPT0gbnVsbCB8fCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdEFycmF5JykgPT0gJycgfHwgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RBcnJheScpID09IHVuZGVmaW5lZCkgcmV0dXJuXG4gICAgICAgICBzdG9yZS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgICAgICAgY29uc3QgcHJvamVjdE5hbWVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgICAgICBjb25zdCBkZWxldGVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cbiAgICAgICAgIHByb2plY3ROYW1lLmNsYXNzTGlzdC5hZGQoJ2F0dGFjaGVkJyk7XG4gICAgICAgICBwcm9qZWN0TmFtZUljb24uY2xhc3NMaXN0LmFkZCgnaWNvbnMnKTtcbiAgICAgICAgIHByb2plY3ROYW1lSWNvbi5zcmMgPSBpdGVtLmljb247XG4gICAgICAgICBzcGFuLnRleHRDb250ZW50ID0gaXRlbS5uYW1lO1xuICAgICAgICAgZGVsZXRlSWNvbi5zcmMgPSAnaWNvbnMvYmluLnBuZycgXG4gICAgICAgICBkZWxldGVJY29uLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS1pY29uJyk7XG5cbiAgICAgICAgIFxuICAgICAgICAgcHJvamVjdE5hbWUuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWVJY29uKTtcbiAgICAgICAgIHByb2plY3ROYW1lLmFwcGVuZENoaWxkKHNwYW4pOyBcbiAgICAgICAgIHByb2plY3ROYW1lLmFwcGVuZENoaWxkKGRlbGV0ZUljb24pO1xuICAgICAgICAgcHJvamVjdExpc3QuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUpIFxuICAgICAgICAgICBcbiAgICAgICAgIFxuICAgICAgfSk7XG4gICB9XG5cbnJlbmRlclN0b3JlZEl0ZW1zKClcblxuICAgZnVuY3Rpb24gZGVsZXRlUHJvamVjdCgpIHtcbiAgICAgIGNvbnN0IG1haW5IZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbi1oZWFkZXInKTtcbiAgICAgIGxldCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWxpc3QnKVxuICAgICAgY29uc3QgZGVsZXRlSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZWxldGUtaWNvbicpO1xuICAgICAgY29uc3QgYWRkVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzaycpXG4gICAgICBkZWxldGVJY29uLmZvckVhY2goaWNvbiA9PiB7XG4gICAgICAgIFxuICAgICAgICAgaWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgbGV0IHN0b3JlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdEFycmF5JykpO1xuICAgICAgICAgY29uc29sZS5sb2coc3RvcmUpXG4gICAgICAgICBtYWluSGVhZGVyLnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpXG4gICAgICAgICBhZGRUYXNrLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICBzdG9yZSA9IHN0b3JlLmZpbHRlcigocCkgPT4gcC5uYW1lICE9PSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnRleHRDb250ZW50KSAgXG4gICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdEFycmF5JywgSlNPTi5zdHJpbmdpZnkoc3RvcmUpKTtcbiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICB9KVxuICAgICAgICAgIFxuICAgICAgfSk7XG4gIH1cbiBcbiAgXG4gIGRlbGV0ZVByb2plY3QoKVxuICBcbiAgIFxuICAgcmV0dXJuIHtcbiAgICAgIHN0b3JlSXRlbXMsXG4gICAgICBhZGRQcm9qZWN0VG9TdG9yZSxcbiAgICAgIGdldFN0b3JlZEl0ZW1zLFxuICAgICAgZGVsZXRlUHJvamVjdCxcblxuICAgfVxufSkoKVxuXG4gZXhwb3J0IGRlZmF1bHQgc3RvcmFnZSIsImltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdC5qcydcbmltcG9ydCBzdG9yYWdlIGZyb20gJy4vc3RvcmFnZS5qcydcblxuY29uc3QgZG9tRWxlbWVudHMgPSAoZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtcHJvamVjdCcpO1xuICAgIGNvbnN0IGFkZEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLWZvcm0nKTtcbiAgICBjb25zdCBjYW5jZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FuY2VsJyk7XG4gICAgY29uc3QgYWRkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZCcpO1xuICAgIGNvbnN0IGRlbGV0ZUljb24gPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZWxldGUtaWNvbicpO1xuICAgIGNvbnNvbGUubG9nKGRlbGV0ZUljb24pXG4gICAgbGV0IHByb2plY3RWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0JylcbiAgICBcbiAgICBmdW5jdGlvbiBhZGRFdmVudCgpIHtcbiAgICAgICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc3BsYXlBZGRQcm9qZWN0KVxuICAgICAgICBjYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoaWRlUHJvamVjdEJveClcbiAgICAgICAgYWRkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkUHJvamVjdFRvRG9tKVxuICAgICAgICBhZGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoaWRlQWRkRm9ybSlcbiAgICAgICAgYWRkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgQWRkRXZlbnRzVG9Qcm9qZWN0cykgXG4gICAgICAgIGFkZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN0b3JhZ2UuZGVsZXRlUHJvamVjdClcbiAgICAgICBcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkaXNwbGF5QWRkUHJvamVjdCgpIHtcbiAgICAgICAgYWRkRm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJylcbiAgICAgICAgcHJvamVjdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cbiAgICAgICAgXG4gICAgZnVuY3Rpb24gaGlkZVByb2plY3RCb3goKSB7XG4gICAgICAgIGFkZEZvcm0uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICBwcm9qZWN0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGlkZUFkZEZvcm0oKSB7ICBcbiAgICAgICAgY29uc3QgYWRkRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtZm9ybScpO1xuICAgICAgICBhZGRGb3JtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgcHJvamVjdC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgcHJvamVjdFZhbHVlLnZhbHVlID0gJydcbiAgICAgICAgfSAgICBcbiAgICAgICAgIFxuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb2plY3RFbGVtZW50cygpIHtcbiAgICAgICAgbGV0IHByb2plY3RJbnB1dCA9IG5ldyBQcm9qZWN0KHByb2plY3RWYWx1ZS52YWx1ZSk7XG4gICAgICAgIGxldCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7ICBcbiAgICAgICAgbGV0IHByb2plY3ROYW1lSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTsgXG4gICAgICAgIGNvbnN0IGRlbGV0ZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgXG4gICAgICAgIHByb2plY3ROYW1lLmNsYXNzTGlzdC5hZGQoJ2F0dGFjaGVkJyk7XG4gICAgICAgIHByb2plY3ROYW1lSWNvbi5zcmMgPSBwcm9qZWN0SW5wdXQuaWNvbjtcbiAgICAgICAgcHJvamVjdE5hbWVJY29uLmNsYXNzTGlzdC5hZGQoJ2ljb25zJylcbiAgICAgICAgZGVsZXRlSWNvbi5zcmMgPSAnaWNvbnMvYmluLnBuZycgXG4gICAgICAgIGRlbGV0ZUljb24uY2xhc3NMaXN0LmFkZCgnZGVsZXRlLWljb24nKTsgICAgICAgICAgIFxuICAgICAgICBzcGFuLnRleHRDb250ZW50ID0gcHJvamVjdElucHV0Lm5hbWU7ICBcbiAgICAgICAgXG4gICAgICAgIHByb2plY3ROYW1lLmFwcGVuZENoaWxkKHByb2plY3ROYW1lSWNvbik7XG4gICAgICAgIHByb2plY3ROYW1lLmFwcGVuZENoaWxkKHNwYW4pO1xuICAgICAgICBwcm9qZWN0TmFtZS5hcHBlbmRDaGlsZChkZWxldGVJY29uKTtcbiAgICAgICAgc3RvcmFnZS5hZGRQcm9qZWN0VG9TdG9yZShwcm9qZWN0SW5wdXQpXG4gICAgICAgICAgIFxuICAgICAgICByZXR1cm4gcHJvamVjdE5hbWU7XG4gICAgXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkUHJvamVjdFRvRG9tKCkgeyBcbiAgICAgICAgaWYocHJvamVjdFZhbHVlLnZhbHVlID09ICcnKSByZXR1cm4gIFxuICAgICAgICBsZXQgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1saXN0JykgICAgICAgXG4gICAgICAgIHByb2plY3RMaXN0LmFwcGVuZENoaWxkKGNyZWF0ZVByb2plY3RFbGVtZW50cygpKTsgICAgICAgIFxuICAgIFxuICAgIH1cbiBcbiAgICBmdW5jdGlvbiBBZGRFdmVudHNUb1Byb2plY3RzKCkge1xuICAgICAgICBjb25zdCBhdHRhY2hlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hdHRhY2hlZCcpO1xuICAgICAgICBmb3IoY29uc3QgYXR0YWNoIG9mIGF0dGFjaGVkKSB7XG4gICAgICAgICAgICBhdHRhY2guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgICAgIGNvbnN0IG1haW5IZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbi1oZWFkZXInKTtcbiAgICAgICAgICAgICAgICBjb25zdCBhZGRUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10YXNrJylcbiAgICAgICAgICAgICAgICBtYWluSGVhZGVyLnRleHRDb250ZW50ID0gZS50YXJnZXQudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICAgICAgYWRkVGFzay5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbiAgIFxuICAgIEFkZEV2ZW50c1RvUHJvamVjdHMoKVxuXG4gICAgICAgIFxuICAgICAgICAgICAgLy8gICBsb2NhbFN0b3JhZ2UuY2xlYXIoKVxuICAgIHJldHVybnthZGRFdmVudCxcbiAgICAgICAgIGNyZWF0ZVByb2plY3RFbGVtZW50cyxcbiAgICAgICB9XG5cbn0pKClcblxuZXhwb3J0IGRlZmF1bHQgZG9tRWxlbWVudHMiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3QuanNcIjtcbmltcG9ydCBkb21FbGVtZW50cyBmcm9tIFwiLi91c2VySW50ZXJmYWNlLmpzXCI7XG5pbXBvcnQgc3RvcmFnZSBmcm9tIFwiLi9zdG9yYWdlLmpzXCJcblxuXG4gZG9tRWxlbWVudHMuYWRkRXZlbnQoKVxuIHN0b3JhZ2UuZGVsZXRlUHJvamVjdCgpXG4gIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9