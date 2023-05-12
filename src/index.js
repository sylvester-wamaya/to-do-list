import './style.css';
import List from './crud.js';

// Create a ne todo list
const todo = new List();

todo.display(); // Display to do list
todo.submit(); // Submit and add new to do task
todo.change();

// Add edit styling on the list items
document.addEventListener('focus', (e) => {
  if (e.target.classList.contains('list-item')) {
    const parent = e.target.parentNode.parentNode;
    parent.style.background = '#ff0';
    e.target.style.background = '#ff0';

    parent.children[1].style.display = 'none';
    parent.children[2].style.display = 'block';
    parent.children[0].children[0].style.opacity = 0.5;
  }
}, true);

// Remove edit styling on the list items
document.addEventListener('blur', (e) => {
  if (e.target.classList.contains('list-item')) {
    const parent = e.target.parentNode.parentNode;
    parent.style.background = '';
    e.target.style.background = '';

    parent.children[1].style.display = 'block';
    parent.children[2].style.display = 'none';
    parent.children[0].children[0].style.opacity = 1;
  }
}, true);

// Display trash and hide the 3dots after click
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('dots')) {
    const parent = e.target.parentNode;

    parent.children[1].style.display = 'none';
    parent.children[2].style.display = 'block';
  }
});

// Enable strike through the list item on checkbox click
// This works only after DOM refresh if added new tasks
const checkb = document.querySelectorAll('.to-do');

checkb.forEach((box) => {
  box.addEventListener('click', (e) => {
    e.target.parentNode.children[1].classList.toggle('checked');
  });
});
