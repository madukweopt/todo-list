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
    }

    setName(name) {
        this.name = name
    }

    getName() {
        return this.name
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
   let store = [];
   const storeKey = 'projectArray';

   function storeItems(itemToStore) {
      localStorage.setItem(storeKey, JSON.stringify(itemToStore))
   }

   function getStoredItems(storeKey) {
    let item = JSON.parse(localStorage.getItem(storeKey))
      
   }

   function addProjectToStore(itemToAdd) {
     
      const projectArray = localStorage.getItem(storeKey);
      if(projectArray == '') {
         localStorage.setItem(storeKey, JSON.stringify([itemToAdd]))

      }else if(localStorage.getItem(storeKey) == null){
         localStorage.setItem(storeKey, JSON.stringify([itemToAdd]))

      }else{
         const getCurrentStore = localStorage.getItem(storeKey);
          const currentStore = JSON.parse(getCurrentStore);
          console.log(currentStore)
          currentStore.push(itemToAdd)
         storeItems(currentStore);
      }
   }

   function renderStoredItems() {    
      let projectList = document.querySelector('#project-list')
       store = JSON.parse(localStorage.getItem(storeKey))
       if(localStorage.getItem(storeKey) == null) return

      store.forEach(item => {
         const projectName = document.createElement('h4');
         const projectNameIcon = document.createElement('img');
         const span = document.createElement('span')

         projectName.classList.add('attached');
         projectNameIcon.classList.add('icons');
         projectNameIcon.src = item.icon;
         span.textContent = item.name;

         projectName.appendChild(projectNameIcon);
         projectName.appendChild(span); 
         projectList.appendChild(projectName) 
            
      });
   }

   renderStoredItems()

   return {
      storeItems,
      addProjectToStore,
      getStoredItems,
      renderStoredItems,
      store,
      storeKey
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
    let projectValue = document.querySelector('#project')
    
    function addEvent() {
        project.addEventListener('click', displayAddProject)
        cancel.addEventListener('click', hideProjectBox)
        add.addEventListener('click', addProjectToDom)
        add.addEventListener('click', hideAddForm)
        add.addEventListener('click', AddEventsToProjects)         
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
         
    function createProjectIcon() {
        let projectInput = new _project_js__WEBPACK_IMPORTED_MODULE_0__["default"](projectValue.value);
        let projectName = document.createElement('h4');  
        let projectNameIcon = document.createElement('img');
        let span = document.createElement('span'); 
        
        projectName.classList.add('attached');
        projectNameIcon.src = projectInput.icon;
        projectNameIcon.classList.add('icons')            
        span.textContent = projectInput.name;  
        
        projectName.appendChild(projectNameIcon);
        projectName.appendChild(span);
        _storage_js__WEBPACK_IMPORTED_MODULE_1__["default"].addProjectToStore(projectInput)         
         
        return projectName;
    
    }
    
    function addProjectToDom() { 
        if(projectValue.value == '') return  
        let projectList = document.querySelector('#project-list')       
        projectList.appendChild(createProjectIcon());
        return projectList;         
    }

    function AddEventsToProjects() {
        const attached = document.querySelectorAll('.attached');
        console.log(attached)
        for(const attach of attached) {
            attach.addEventListener('click', function(e) {
                const mainHeader = document.querySelector('#main-header');
                const addTask = document.querySelector('.add-task')
                mainHeader.textContent = e.target.textContent;
                addTask.classList.remove('hide');
            })

        }
    }

    AddEventsToProjects()

        
            //   localStorage.clear()
    return{addEvent}

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
 
 
 
 
 
 
 

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7O0FDZm9CO0FBQ1U7O0FBRTdDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxPQUFPO0FBQ1A7O0FBRUEsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELENBQUMsaUVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRWtCO0FBQ0E7O0FBRWxDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsbURBQU87QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEscUVBQXlCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxXQUFXOztBQUVYLENBQUM7O0FBRUQsaUVBQWU7Ozs7OztVQ25GZjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNObUM7QUFDVTtBQUNYOzs7QUFHbEMsQ0FBQyxrRUFBb0I7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdXNlckludGVyZmFjZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgUHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmljb24gPSAnaWNvbnMvZGFzaGJvYXJkLnBuZydcbiAgICB9XG5cbiAgICBzZXROYW1lKG5hbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZVxuICAgIH1cblxuICAgIGdldE5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWVcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3QiLCJpbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0LmpzXCI7XG5pbXBvcnQgZG9tRWxlbWVudHMgZnJvbSBcIi4vdXNlckludGVyZmFjZS5qc1wiO1xuXG5jb25zdCBzdG9yYWdlID0gKGZ1bmN0aW9uKCkge1xuICAgbGV0IHN0b3JlID0gW107XG4gICBjb25zdCBzdG9yZUtleSA9ICdwcm9qZWN0QXJyYXknO1xuXG4gICBmdW5jdGlvbiBzdG9yZUl0ZW1zKGl0ZW1Ub1N0b3JlKSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShzdG9yZUtleSwgSlNPTi5zdHJpbmdpZnkoaXRlbVRvU3RvcmUpKVxuICAgfVxuXG4gICBmdW5jdGlvbiBnZXRTdG9yZWRJdGVtcyhzdG9yZUtleSkge1xuICAgIGxldCBpdGVtID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShzdG9yZUtleSkpXG4gICAgICBcbiAgIH1cblxuICAgZnVuY3Rpb24gYWRkUHJvamVjdFRvU3RvcmUoaXRlbVRvQWRkKSB7XG4gICAgIFxuICAgICAgY29uc3QgcHJvamVjdEFycmF5ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oc3RvcmVLZXkpO1xuICAgICAgaWYocHJvamVjdEFycmF5ID09ICcnKSB7XG4gICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShzdG9yZUtleSwgSlNPTi5zdHJpbmdpZnkoW2l0ZW1Ub0FkZF0pKVxuXG4gICAgICB9ZWxzZSBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbShzdG9yZUtleSkgPT0gbnVsbCl7XG4gICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShzdG9yZUtleSwgSlNPTi5zdHJpbmdpZnkoW2l0ZW1Ub0FkZF0pKVxuXG4gICAgICB9ZWxzZXtcbiAgICAgICAgIGNvbnN0IGdldEN1cnJlbnRTdG9yZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHN0b3JlS2V5KTtcbiAgICAgICAgICBjb25zdCBjdXJyZW50U3RvcmUgPSBKU09OLnBhcnNlKGdldEN1cnJlbnRTdG9yZSk7XG4gICAgICAgICAgY29uc29sZS5sb2coY3VycmVudFN0b3JlKVxuICAgICAgICAgIGN1cnJlbnRTdG9yZS5wdXNoKGl0ZW1Ub0FkZClcbiAgICAgICAgIHN0b3JlSXRlbXMoY3VycmVudFN0b3JlKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZnVuY3Rpb24gcmVuZGVyU3RvcmVkSXRlbXMoKSB7ICAgIFxuICAgICAgbGV0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtbGlzdCcpXG4gICAgICAgc3RvcmUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHN0b3JlS2V5KSlcbiAgICAgICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbShzdG9yZUtleSkgPT0gbnVsbCkgcmV0dXJuXG5cbiAgICAgIHN0b3JlLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgICAgICBjb25zdCBwcm9qZWN0TmFtZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcblxuICAgICAgICAgcHJvamVjdE5hbWUuY2xhc3NMaXN0LmFkZCgnYXR0YWNoZWQnKTtcbiAgICAgICAgIHByb2plY3ROYW1lSWNvbi5jbGFzc0xpc3QuYWRkKCdpY29ucycpO1xuICAgICAgICAgcHJvamVjdE5hbWVJY29uLnNyYyA9IGl0ZW0uaWNvbjtcbiAgICAgICAgIHNwYW4udGV4dENvbnRlbnQgPSBpdGVtLm5hbWU7XG5cbiAgICAgICAgIHByb2plY3ROYW1lLmFwcGVuZENoaWxkKHByb2plY3ROYW1lSWNvbik7XG4gICAgICAgICBwcm9qZWN0TmFtZS5hcHBlbmRDaGlsZChzcGFuKTsgXG4gICAgICAgICBwcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZSkgXG4gICAgICAgICAgICBcbiAgICAgIH0pO1xuICAgfVxuXG4gICByZW5kZXJTdG9yZWRJdGVtcygpXG5cbiAgIHJldHVybiB7XG4gICAgICBzdG9yZUl0ZW1zLFxuICAgICAgYWRkUHJvamVjdFRvU3RvcmUsXG4gICAgICBnZXRTdG9yZWRJdGVtcyxcbiAgICAgIHJlbmRlclN0b3JlZEl0ZW1zLFxuICAgICAgc3RvcmUsXG4gICAgICBzdG9yZUtleVxuICAgfVxufSkoKVxuXG4gZXhwb3J0IGRlZmF1bHQgc3RvcmFnZSIsImltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdC5qcydcbmltcG9ydCBzdG9yYWdlIGZyb20gJy4vc3RvcmFnZS5qcydcblxuY29uc3QgZG9tRWxlbWVudHMgPSAoZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtcHJvamVjdCcpO1xuICAgIGNvbnN0IGFkZEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLWZvcm0nKTtcbiAgICBjb25zdCBjYW5jZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FuY2VsJyk7XG4gICAgY29uc3QgYWRkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZCcpO1xuICAgIGxldCBwcm9qZWN0VmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdCcpXG4gICAgXG4gICAgZnVuY3Rpb24gYWRkRXZlbnQoKSB7XG4gICAgICAgIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5QWRkUHJvamVjdClcbiAgICAgICAgY2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGlkZVByb2plY3RCb3gpXG4gICAgICAgIGFkZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZFByb2plY3RUb0RvbSlcbiAgICAgICAgYWRkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGlkZUFkZEZvcm0pXG4gICAgICAgIGFkZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIEFkZEV2ZW50c1RvUHJvamVjdHMpICAgICAgICAgXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlzcGxheUFkZFByb2plY3QoKSB7XG4gICAgICAgIGFkZEZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpXG4gICAgICAgIHByb2plY3Quc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9XG4gICAgICAgIFxuICAgIGZ1bmN0aW9uIGhpZGVQcm9qZWN0Qm94KCkge1xuICAgICAgICBhZGRGb3JtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgcHJvamVjdC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhpZGVBZGRGb3JtKCkgeyAgXG4gICAgICAgIGNvbnN0IGFkZEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLWZvcm0nKTtcbiAgICAgICAgYWRkRm9ybS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgIHByb2plY3Quc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIHByb2plY3RWYWx1ZS52YWx1ZSA9ICcnXG4gICAgICAgIH0gICAgXG4gICAgICAgICBcbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0SWNvbigpIHtcbiAgICAgICAgbGV0IHByb2plY3RJbnB1dCA9IG5ldyBQcm9qZWN0KHByb2plY3RWYWx1ZS52YWx1ZSk7XG4gICAgICAgIGxldCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7ICBcbiAgICAgICAgbGV0IHByb2plY3ROYW1lSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTsgXG4gICAgICAgIFxuICAgICAgICBwcm9qZWN0TmFtZS5jbGFzc0xpc3QuYWRkKCdhdHRhY2hlZCcpO1xuICAgICAgICBwcm9qZWN0TmFtZUljb24uc3JjID0gcHJvamVjdElucHV0Lmljb247XG4gICAgICAgIHByb2plY3ROYW1lSWNvbi5jbGFzc0xpc3QuYWRkKCdpY29ucycpICAgICAgICAgICAgXG4gICAgICAgIHNwYW4udGV4dENvbnRlbnQgPSBwcm9qZWN0SW5wdXQubmFtZTsgIFxuICAgICAgICBcbiAgICAgICAgcHJvamVjdE5hbWUuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWVJY29uKTtcbiAgICAgICAgcHJvamVjdE5hbWUuYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgICAgIHN0b3JhZ2UuYWRkUHJvamVjdFRvU3RvcmUocHJvamVjdElucHV0KSAgICAgICAgIFxuICAgICAgICAgXG4gICAgICAgIHJldHVybiBwcm9qZWN0TmFtZTtcbiAgICBcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gYWRkUHJvamVjdFRvRG9tKCkgeyBcbiAgICAgICAgaWYocHJvamVjdFZhbHVlLnZhbHVlID09ICcnKSByZXR1cm4gIFxuICAgICAgICBsZXQgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1saXN0JykgICAgICAgXG4gICAgICAgIHByb2plY3RMaXN0LmFwcGVuZENoaWxkKGNyZWF0ZVByb2plY3RJY29uKCkpO1xuICAgICAgICByZXR1cm4gcHJvamVjdExpc3Q7ICAgICAgICAgXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gQWRkRXZlbnRzVG9Qcm9qZWN0cygpIHtcbiAgICAgICAgY29uc3QgYXR0YWNoZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYXR0YWNoZWQnKTtcbiAgICAgICAgY29uc29sZS5sb2coYXR0YWNoZWQpXG4gICAgICAgIGZvcihjb25zdCBhdHRhY2ggb2YgYXR0YWNoZWQpIHtcbiAgICAgICAgICAgIGF0dGFjaC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtYWluSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4taGVhZGVyJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgYWRkVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzaycpXG4gICAgICAgICAgICAgICAgbWFpbkhlYWRlci50ZXh0Q29udGVudCA9IGUudGFyZ2V0LnRleHRDb250ZW50O1xuICAgICAgICAgICAgICAgIGFkZFRhc2suY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICAgICAgfSlcblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgQWRkRXZlbnRzVG9Qcm9qZWN0cygpXG5cbiAgICAgICAgXG4gICAgICAgICAgICAvLyAgIGxvY2FsU3RvcmFnZS5jbGVhcigpXG4gICAgcmV0dXJue2FkZEV2ZW50fVxuXG59KSgpXG5cbmV4cG9ydCBkZWZhdWx0IGRvbUVsZW1lbnRzIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0LmpzXCI7XG5pbXBvcnQgZG9tRWxlbWVudHMgZnJvbSBcIi4vdXNlckludGVyZmFjZS5qc1wiO1xuaW1wb3J0IHN0b3JhZ2UgZnJvbSBcIi4vc3RvcmFnZS5qc1wiXG5cblxuIGRvbUVsZW1lbnRzLmFkZEV2ZW50KClcbiBcbiBcbiBcbiBcbiBcbiBcbiBcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==