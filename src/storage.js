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
         store = JSON.parse(localStorage.getItem(storeKey));
          console.log(store)
          store.push(itemToAdd)
         storeItems(store);
      }
   }

   function renderStoredItems() {   
      if(localStorage.length == null || localStorage.getItem(storeKey) == '') return 
      let projectList = document.querySelector('#project-list')
       store = JSON.parse(localStorage.getItem(storeKey))
       
       console.log(store)
       

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
      let projectList = document.querySelector('#project-list')
      const deleteIcon = document.querySelectorAll('.delete-icon');
      deleteIcon.forEach(icon => {
        
         icon.addEventListener('click', function(e) {
         store = JSON.parse(localStorage.getItem(storeKey));
         console.log(store)
         e.target.parentElement.remove()
         store = store.filter((p) => p.name !== e.target.parentElement.textContent)  
         localStorage.setItem(storeKey, JSON.stringify(store));          
          })
          
      });
  }
 
  
  deleteProject()
  
   
   return {
      storeItems,
      addProjectToStore,
      getStoredItems,

      deleteProject,
      store,
      storeKey
   }
})()

 export default storage