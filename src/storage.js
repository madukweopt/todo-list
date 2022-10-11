import Project from "./project.js";
import domElements from "./userInterface.js";

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

 export default storage