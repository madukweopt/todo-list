import Project from "./project.js";
import domElements from "./userInterface.js";

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

 export default storage