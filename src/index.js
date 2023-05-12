import './style.css';
import List from './crud.js';



const todo = new List()
todo.display()
todo.submit()
todo.change()
console.log(todo)

document.addEventListener("focus", (e)=>{
  
      if(e.target.classList.contains("list-item")){
        const parent = e.target.parentNode.parentNode
       parent.style.background = "#ff0"
       e.target.style.background = "#ff0"
       
       parent.children[1].style.display = "none"
        parent.children[2].style.display = "block"
        parent.children[0].children[0].style.opacity = 0.5
        
}}, true)

document.addEventListener("blur", (e)=>{
  
    if(e.target.classList.contains("list-item")){
      const parent = e.target.parentNode.parentNode
     parent.style.background = ""
     e.target.style.background = ""
     
     parent.children[1].style.display = "block"
      parent.children[2].style.display = "none"
      parent.children[0].children[0].style.opacity = 0
      
}}, true)

document.addEventListener("click", (e)=>{
  
    if(e.target.classList.contains("dots")){
      const parent = e.target.parentNode
          
     parent.children[1].style.display = "none"
      parent.children[2].style.display = "block"     
     
}})

document.addEventListener("blur", (e)=>{
  
    if(e.target.classList.contains("dots")){
      const parent = e.target.parentNode
          
     parent.children[1].style.display = "block"
      parent.children[2].style.display = "none"     
     
}}, true)



  