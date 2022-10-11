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

   function getStoredItems() {
    let item = JSON.parse(localStorage.getItem(storeKey))
    console.log(item)
      
   }

   function addProjectToStore(itemToAdd) {
      const projectArray = localStorage.getItem(storeKey);
      if(projectArray == 'null') {
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
    let objectsToBeStored = [];
    
    function addEvent() {
        project.addEventListener('click', displayAddProject)
        cancel.addEventListener('click', hideProjectBox)
        add.addEventListener('click', addProjectToDom)
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
   
   function addProjectToDom() {
    
        let projectList = document.querySelector('#project-list')
        let projectValue = document.querySelector('#project')
        const projectName = document.createElement('h4');
        const span = document.createElement('span');
        const projectNameIcon = document.createElement('img');
        console.log(projectNameIcon)
        
        const project = document.querySelector('.add-project');
        const addForm = document.querySelector('.add-form');
    
        if(projectValue.value == '') return  
        let projectInput = new _project_js__WEBPACK_IMPORTED_MODULE_0__["default"](projectValue.value);
        console.log(projectInput) 
        addForm.classList.remove('hide');
        projectNameIcon.src = projectInput.icon;
        projectNameIcon.classList.add('icons')
        console.log(projectNameIcon)
        span.textContent = projectInput.name;

        projectName.appendChild(projectNameIcon);
        projectName.appendChild(span);
        
        projectList.appendChild(projectName);
        _storage_js__WEBPACK_IMPORTED_MODULE_1__["default"].addProjectToStore(projectInput)
        addForm.classList.add('hide');
        project.style.display = 'block';
        projectValue.value = ''
        return projectList;
        } 
   
        //   localStorage.clear()
return{addEvent,
    
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
//  storage.renderStoredItems()
 
 
 
 
 
 

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7O0FDZm9CO0FBQ1U7O0FBRTdDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELENBQUMsaUVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4Q2tCO0FBQ0E7O0FBRWxDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MscUVBQXlCO0FBQy9EO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixtREFBTztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHFFQUF5QjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsQ0FBQztBQUNELGlFQUFlOzs7Ozs7VUNuRWY7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTm1DO0FBQ1U7QUFDWDs7O0FBR2xDLENBQUMsa0VBQW9CO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3VzZXJJbnRlcmZhY2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFByb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5pY29uID0gJ2ljb25zL2Rhc2hib2FyZC5wbmcnXG4gICAgfVxuXG4gICAgc2V0TmFtZShuYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWVcbiAgICB9XG5cbiAgICBnZXROYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0IiwiaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vcHJvamVjdC5qc1wiO1xuaW1wb3J0IGRvbUVsZW1lbnRzIGZyb20gXCIuL3VzZXJJbnRlcmZhY2UuanNcIjtcblxuY29uc3Qgc3RvcmFnZSA9IChmdW5jdGlvbigpIHtcbiAgIGxldCBzdG9yZSA9IFtdO1xuICAgY29uc3Qgc3RvcmVLZXkgPSAncHJvamVjdEFycmF5JztcblxuICAgZnVuY3Rpb24gc3RvcmVJdGVtcyhpdGVtVG9TdG9yZSkge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oc3RvcmVLZXksIEpTT04uc3RyaW5naWZ5KGl0ZW1Ub1N0b3JlKSlcbiAgIH1cblxuICAgZnVuY3Rpb24gZ2V0U3RvcmVkSXRlbXMoKSB7XG4gICAgbGV0IGl0ZW0gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHN0b3JlS2V5KSlcbiAgICBjb25zb2xlLmxvZyhpdGVtKVxuICAgICAgXG4gICB9XG5cbiAgIGZ1bmN0aW9uIGFkZFByb2plY3RUb1N0b3JlKGl0ZW1Ub0FkZCkge1xuICAgICAgY29uc3QgcHJvamVjdEFycmF5ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oc3RvcmVLZXkpO1xuICAgICAgaWYocHJvamVjdEFycmF5ID09ICdudWxsJykge1xuICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oc3RvcmVLZXksIEpTT04uc3RyaW5naWZ5KFtpdGVtVG9BZGRdKSlcblxuICAgICAgfWVsc2V7XG4gICAgICAgICBjb25zdCBnZXRDdXJyZW50U3RvcmUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShzdG9yZUtleSk7XG4gICAgICAgICBjb25zdCBjdXJyZW50U3RvcmUgPSBKU09OLnBhcnNlKGdldEN1cnJlbnRTdG9yZSk7XG4gICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50U3RvcmUpXG4gICAgICAgICAgY3VycmVudFN0b3JlLnB1c2goaXRlbVRvQWRkKVxuICAgICAgICAgc3RvcmVJdGVtcyhjdXJyZW50U3RvcmUpO1xuICAgICAgfVxuICAgfVxuXG4gICByZXR1cm4ge1xuICAgICAgc3RvcmVJdGVtcyxcbiAgICAgIGFkZFByb2plY3RUb1N0b3JlLFxuICAgICAgZ2V0U3RvcmVkSXRlbXMsXG4gICAgICBzdG9yZSxcbiAgICAgIHN0b3JlS2V5XG4gICB9XG59KSgpXG5cbiBleHBvcnQgZGVmYXVsdCBzdG9yYWdlIiwiaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0LmpzJ1xuaW1wb3J0IHN0b3JhZ2UgZnJvbSAnLi9zdG9yYWdlLmpzJ1xuXG5jb25zdCBkb21FbGVtZW50cyA9IChmdW5jdGlvbigpIHtcbiAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1wcm9qZWN0Jyk7XG4gICAgY29uc3QgYWRkRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtZm9ybScpO1xuICAgIGNvbnN0IGNhbmNlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYW5jZWwnKTtcbiAgICBjb25zdCBhZGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkJyk7XG4gICAgbGV0IG9iamVjdHNUb0JlU3RvcmVkID0gW107XG4gICAgXG4gICAgZnVuY3Rpb24gYWRkRXZlbnQoKSB7XG4gICAgICAgIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5QWRkUHJvamVjdClcbiAgICAgICAgY2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGlkZVByb2plY3RCb3gpXG4gICAgICAgIGFkZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZFByb2plY3RUb0RvbSlcbiAgICAgICAgYWRkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3RvcmFnZS5nZXRTdG9yZWRQcm9qZWN0cylcbiAgICAgICAgXG4gICAgICAgIFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpc3BsYXlBZGRQcm9qZWN0KCkge1xuICAgICAgICBhZGRGb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKVxuICAgICAgICBwcm9qZWN0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgICB9XG4gICAgICAgIFxuICAgIGZ1bmN0aW9uIGhpZGVQcm9qZWN0Qm94KCkge1xuICAgICAgICBhZGRGb3JtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgcHJvamVjdC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgIH0gXG4gICBcbiAgIGZ1bmN0aW9uIGFkZFByb2plY3RUb0RvbSgpIHtcbiAgICBcbiAgICAgICAgbGV0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtbGlzdCcpXG4gICAgICAgIGxldCBwcm9qZWN0VmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdCcpXG4gICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgY29uc3QgcHJvamVjdE5hbWVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3ROYW1lSWNvbilcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXByb2plY3QnKTtcbiAgICAgICAgY29uc3QgYWRkRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtZm9ybScpO1xuICAgIFxuICAgICAgICBpZihwcm9qZWN0VmFsdWUudmFsdWUgPT0gJycpIHJldHVybiAgXG4gICAgICAgIGxldCBwcm9qZWN0SW5wdXQgPSBuZXcgUHJvamVjdChwcm9qZWN0VmFsdWUudmFsdWUpO1xuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0SW5wdXQpIFxuICAgICAgICBhZGRGb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgcHJvamVjdE5hbWVJY29uLnNyYyA9IHByb2plY3RJbnB1dC5pY29uO1xuICAgICAgICBwcm9qZWN0TmFtZUljb24uY2xhc3NMaXN0LmFkZCgnaWNvbnMnKVxuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0TmFtZUljb24pXG4gICAgICAgIHNwYW4udGV4dENvbnRlbnQgPSBwcm9qZWN0SW5wdXQubmFtZTtcblxuICAgICAgICBwcm9qZWN0TmFtZS5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZUljb24pO1xuICAgICAgICBwcm9qZWN0TmFtZS5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICAgICAgXG4gICAgICAgIHByb2plY3RMaXN0LmFwcGVuZENoaWxkKHByb2plY3ROYW1lKTtcbiAgICAgICAgc3RvcmFnZS5hZGRQcm9qZWN0VG9TdG9yZShwcm9qZWN0SW5wdXQpXG4gICAgICAgIGFkZEZvcm0uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICBwcm9qZWN0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICBwcm9qZWN0VmFsdWUudmFsdWUgPSAnJ1xuICAgICAgICByZXR1cm4gcHJvamVjdExpc3Q7XG4gICAgICAgIH0gXG4gICBcbiAgICAgICAgLy8gICBsb2NhbFN0b3JhZ2UuY2xlYXIoKVxucmV0dXJue2FkZEV2ZW50LFxuICAgIFxufVxufSkoKVxuZXhwb3J0IGRlZmF1bHQgZG9tRWxlbWVudHMiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3QuanNcIjtcbmltcG9ydCBkb21FbGVtZW50cyBmcm9tIFwiLi91c2VySW50ZXJmYWNlLmpzXCI7XG5pbXBvcnQgc3RvcmFnZSBmcm9tIFwiLi9zdG9yYWdlLmpzXCJcblxuXG4gZG9tRWxlbWVudHMuYWRkRXZlbnQoKVxuLy8gIHN0b3JhZ2UucmVuZGVyU3RvcmVkSXRlbXMoKVxuIFxuIFxuIFxuIFxuIFxuIFxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9