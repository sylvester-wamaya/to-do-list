import './style.css';
import List from './crud.js';


const listIte = document.querySelector('li');
const todo = new List()
todo.display()
todo.submit()
todo.change()
console.log(todo)




  