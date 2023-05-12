import './style.css';
import List from './crud.js';



const todo = new List()
todo.display()
todo.submit()
todo.change()
console.log(todo)

document.addEventListener("click", (e)=>{
  
      if(e.target.classList.contains("list-item")){
        const parent = e.target.parentNode.parentNode
       parent.style.background = "red"
       
       parent.children[1].style.display = "none"
        parent.children[2].style.display = "block"
        parent.children[0].children[0].style.opacity = 0.5
       
}})

document.addEventListener("click", (e)=>{
  
    if(e.target.classList.contains("dots")){
      const parent = e.target.parentNode
          
     parent.children[1].style.display = "none"
      parent.children[2].style.display = "block"     
     
}})



  