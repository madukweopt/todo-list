import Project from "./project.js";
import domElements from "./userInterface.js";

const storage = (function() {
   let storedItems = [];
   const storageKey = 'projectArray';

   function storeItems() {
      localStorage.setItem(storageKey, JSON.stringify(storedItems))
   }

   function getStoredItems() {
    let storedItems = JSON.parse(localStorage.getItem(storageKey))
    console.log(storedItems)
      
   }

   function addProjectToStorage(projectName) {
      const newProject = new Project(projectName);
      storedItems.push(newProject.name);
      storeItems()
      
   }

   function renderStoredItems() { 
      if(storedItems = '') return
      let projectList = document.querySelector('#project-list')
       storedItems = JSON.parse(localStorage.getItem(storageKey))
      storedItems.forEach(item => {
         const projectName = document.createElement('h4');
         projectName.textContent = item; 
         projectList.appendChild(projectName)    
      });
   }




   return {
      storeItems,
      addProjectToStorage,
      getStoredItems,
      renderStoredItems,
      storedItems,
      storageKey
   }
})()

 export default storage