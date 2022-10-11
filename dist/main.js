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

   return {
      storeItems,
      addProjectToStore,
      getStoredItems,
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
    let objectsToBeStored = [];
    
    function addEvent() {
        project.addEventListener('click', displayAddProject)
        cancel.addEventListener('click', hideProjectBox)
        add.addEventListener('click', createProjectElements)
        add.addEventListener('click', hideAddForm)
        add.addEventListener('click', _storage_js__WEBPACK_IMPORTED_MODULE_1__["default"].getStoredProjects)      
        
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
        let projectInput = new _project_js__WEBPACK_IMPORTED_MODULE_0__["default"](projectValue.value);
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
            _storage_js__WEBPACK_IMPORTED_MODULE_1__["default"].addProjectToStore(projectInput)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7O0FDZm9CO0FBQ1U7O0FBRTdDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQsQ0FBQyxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7OztBQzNDa0I7QUFDQTs7QUFFbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MscUVBQXlCO0FBQy9EO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0JBQStCLG1EQUFPO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVkscUVBQXlCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsaUVBQWU7Ozs7OztVQ3BHZjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNObUM7QUFDVTtBQUNYOzs7QUFHbEMsQ0FBQyxrRUFBb0I7O0FBRXJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy91c2VySW50ZXJmYWNlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBQcm9qZWN0IHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuaWNvbiA9ICdpY29ucy9kYXNoYm9hcmQucG5nJ1xuICAgIH1cblxuICAgIHNldE5hbWUobmFtZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lXG4gICAgfVxuXG4gICAgZ2V0TmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdCIsImltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3QuanNcIjtcbmltcG9ydCBkb21FbGVtZW50cyBmcm9tIFwiLi91c2VySW50ZXJmYWNlLmpzXCI7XG5cbmNvbnN0IHN0b3JhZ2UgPSAoZnVuY3Rpb24oKSB7XG4gICBsZXQgc3RvcmUgPSBbXTtcbiAgIGNvbnN0IHN0b3JlS2V5ID0gJ3Byb2plY3RBcnJheSc7XG5cbiAgIGZ1bmN0aW9uIHN0b3JlSXRlbXMoaXRlbVRvU3RvcmUpIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHN0b3JlS2V5LCBKU09OLnN0cmluZ2lmeShpdGVtVG9TdG9yZSkpXG4gICB9XG5cbiAgIGZ1bmN0aW9uIGdldFN0b3JlZEl0ZW1zKHN0b3JlS2V5KSB7XG4gICAgbGV0IGl0ZW0gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHN0b3JlS2V5KSlcbiAgICAgIFxuICAgfVxuXG4gICBmdW5jdGlvbiBhZGRQcm9qZWN0VG9TdG9yZShpdGVtVG9BZGQpIHtcbiAgICAgXG4gICAgICBjb25zdCBwcm9qZWN0QXJyYXkgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShzdG9yZUtleSk7XG4gICAgICBpZihwcm9qZWN0QXJyYXkgPT0gJycpIHtcbiAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHN0b3JlS2V5LCBKU09OLnN0cmluZ2lmeShbaXRlbVRvQWRkXSkpXG5cbiAgICAgIH1lbHNlIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHN0b3JlS2V5KSA9PSBudWxsKXtcbiAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHN0b3JlS2V5LCBKU09OLnN0cmluZ2lmeShbaXRlbVRvQWRkXSkpXG4gICAgICAgICBcbiAgICAgIH1lbHNle1xuICAgICAgICAgY29uc3QgZ2V0Q3VycmVudFN0b3JlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oc3RvcmVLZXkpO1xuICAgICAgICAgIGNvbnN0IGN1cnJlbnRTdG9yZSA9IEpTT04ucGFyc2UoZ2V0Q3VycmVudFN0b3JlKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50U3RvcmUpXG4gICAgICAgICAgY3VycmVudFN0b3JlLnB1c2goaXRlbVRvQWRkKVxuICAgICAgICAgc3RvcmVJdGVtcyhjdXJyZW50U3RvcmUpO1xuICAgICAgfVxuICAgfVxuXG4gICByZXR1cm4ge1xuICAgICAgc3RvcmVJdGVtcyxcbiAgICAgIGFkZFByb2plY3RUb1N0b3JlLFxuICAgICAgZ2V0U3RvcmVkSXRlbXMsXG4gICAgICBzdG9yZSxcbiAgICAgIHN0b3JlS2V5XG4gICB9XG59KSgpXG5cbiBleHBvcnQgZGVmYXVsdCBzdG9yYWdlIiwiaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0LmpzJ1xuaW1wb3J0IHN0b3JhZ2UgZnJvbSAnLi9zdG9yYWdlLmpzJ1xuXG5jb25zdCBkb21FbGVtZW50cyA9IChmdW5jdGlvbigpIHtcbiAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1wcm9qZWN0Jyk7XG4gICAgY29uc3QgYWRkRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtZm9ybScpO1xuICAgIGNvbnN0IGNhbmNlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYW5jZWwnKTtcbiAgICBjb25zdCBhZGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkJyk7XG4gICAgbGV0IHByb2plY3RWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0JylcbiAgICBsZXQgb2JqZWN0c1RvQmVTdG9yZWQgPSBbXTtcbiAgICBcbiAgICBmdW5jdGlvbiBhZGRFdmVudCgpIHtcbiAgICAgICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc3BsYXlBZGRQcm9qZWN0KVxuICAgICAgICBjYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoaWRlUHJvamVjdEJveClcbiAgICAgICAgYWRkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY3JlYXRlUHJvamVjdEVsZW1lbnRzKVxuICAgICAgICBhZGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoaWRlQWRkRm9ybSlcbiAgICAgICAgYWRkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3RvcmFnZS5nZXRTdG9yZWRQcm9qZWN0cykgICAgICBcbiAgICAgICAgXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlzcGxheUFkZFByb2plY3QoKSB7XG4gICAgICAgIGFkZEZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpXG4gICAgICAgIHByb2plY3Quc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9XG4gICAgICAgIFxuICAgIGZ1bmN0aW9uIGhpZGVQcm9qZWN0Qm94KCkge1xuICAgICAgICBhZGRGb3JtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgcHJvamVjdC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhpZGVBZGRGb3JtKCkge1xuICAgICAgICAgXG4gICAgICAgIGNvbnN0IGFkZEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLWZvcm0nKTtcbiAgICAgICAgYWRkRm9ybS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgIHByb2plY3Quc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIHByb2plY3RWYWx1ZS52YWx1ZSA9ICcnXG4gICAgICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZVByb2plY3RFbGVtZW50cyA9ICgpID0+IHsgIFxuICAgICAgICBsZXQgcHJvamVjdElucHV0ID0gbmV3IFByb2plY3QocHJvamVjdFZhbHVlLnZhbHVlKTtcbiAgICAgICAgbGV0IHByb2plY3ROYW1lSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBsZXQgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1saXN0JylcbiAgICAgICAgbGV0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICAgICAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgXG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZVByb2plY3RJY29uKCkgeyAgICAgXG4gICAgICAgICAgICBwcm9qZWN0TmFtZUljb24uc3JjID0gcHJvamVjdElucHV0Lmljb247XG4gICAgICAgICAgICBwcm9qZWN0TmFtZUljb24uY2xhc3NMaXN0LmFkZCgnaWNvbnMnKSAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHByb2plY3ROYW1lSWNvbjtcbiAgICAgICAgfSBcblxuICAgICAgICBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0TmFtZSgpIHsgXG4gICAgICAgICAgICBzcGFuLnRleHRDb250ZW50ID0gcHJvamVjdElucHV0Lm5hbWU7ICAgXG4gICAgICAgICAgICByZXR1cm4gc3BhbjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIG5hbWVBbmRJY29uKCkgeyAgICAgICBcbiAgICAgICAgICAgIHByb2plY3ROYW1lLmFwcGVuZENoaWxkKGNyZWF0ZVByb2plY3RJY29uKCkpO1xuICAgICAgICAgICAgcHJvamVjdE5hbWUuYXBwZW5kQ2hpbGQoY3JlYXRlUHJvamVjdE5hbWUoKSk7XG4gICAgICAgICAgICBzdG9yYWdlLmFkZFByb2plY3RUb1N0b3JlKHByb2plY3RJbnB1dClcbiAgICAgICAgICAgIHJldHVybiBwcm9qZWN0TmFtZTsgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGZ1bmN0aW9uIGFkZFByb2plY3RUb0RvbSgpIHsgXG4gICAgICAgICAgICBpZihwcm9qZWN0VmFsdWUudmFsdWUgPT0gJycpIHJldHVybiAgICAgICAgIFxuICAgICAgICAgICAgcHJvamVjdExpc3QuYXBwZW5kQ2hpbGQobmFtZUFuZEljb24oKSk7XG4gICAgICAgICAgICByZXR1cm4gcHJvamVjdExpc3Q7ICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgYWRkUHJvamVjdFRvRG9tKClcblxuICAgICAgICBmdW5jdGlvbiByZW5kZXJTdG9yYWdlVG9Eb20oKSB7XG4gICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgbGV0IGxvY2FsSXRlbXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFsncHJvamVjdEFycmF5J10pKVxuICAgICAgICAgICAgaWYobG9jYWxJdGVtcyA9PSBudWxsKSByZXR1cm5cbiAgICAgICAgICAgXG4gICAgICAgICAgICBsb2NhbEl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coaXRlbSkgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coaXRlbS5uYW1lKVxuICAgICAgICAgICAgICAgIHByb2plY3ROYW1lSWNvbi5zcmMgPSBpdGVtLmljb247XG4gICAgICAgICAgICAgICAgc3Bhbi50ZXh0Q29udGVudCA9IGl0ZW0ubmFtZVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNwYW4pXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdE5hbWVJY29uKVxuICAgICAgICAgICAgICAgIHByb2plY3ROYW1lLmFwcGVuZENoaWxkKHByb2plY3ROYW1lSWNvbilcbiAgICAgICAgICAgICAgICBwcm9qZWN0TmFtZS5hcHBlbmRDaGlsZChzcGFuKVxuICAgICAgICAgICAgICAgIHByb2plY3RMaXN0LmFwcGVuZENoaWxkKHByb2plY3ROYW1lKTsgICAgICAgXG5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJlbmRlclN0b3JhZ2VUb0RvbSgpXG5cbiAgICAgICAgXG4gICAgfVxuICAgICAgICBcbiAgIFxuICAgICAgICAgICAgLy8gIGxvY2FsU3RvcmFnZS5jbGVhcigpXG5yZXR1cm57YWRkRXZlbnQsXG4gICAgY3JlYXRlUHJvamVjdEVsZW1lbnRzXG4gICAgXG59XG59KSgpXG5leHBvcnQgZGVmYXVsdCBkb21FbGVtZW50cyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vcHJvamVjdC5qc1wiO1xuaW1wb3J0IGRvbUVsZW1lbnRzIGZyb20gXCIuL3VzZXJJbnRlcmZhY2UuanNcIjtcbmltcG9ydCBzdG9yYWdlIGZyb20gXCIuL3N0b3JhZ2UuanNcIlxuXG5cbiBkb21FbGVtZW50cy5hZGRFdmVudCgpXG5cbiBcbiBcbiBcbiBcbiBcbiBcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==