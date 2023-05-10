import _ from 'lodash';
import './style.css';


// function component() {
//   const element = document.createElement('div');

//   // Lodash, now imported by this script
//   element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//   element.classList.add('hello');

//   // Add the image to our existing div.
//   const myIcon = new Image();
//   myIcon.src = Icon;

//   element.appendChild(myIcon);

//   return element;
// }

// document.body.appendChild(component());

let listItems = [
  {
  description: "Write an email",
  completed: true,
  index: 0,
  },
  {
    description: "Laundry",
    completed: false,
    index: 1,
    },
    {
      description: "Read a book",
      completed: true,
      index: 2,
      },
      {
        description: "Submit assignment",
        completed: false,
        index: 3,
        }      
]
const list = document.querySelector('ul');

listItems.forEach((item)=>{
  const listItem = document.createElement('li');
  listItem.innerHTML = `
  <div class="content">
  <input type="checkbox" class="to-do" name="todo${item.index}" value="${item.completed}">
  <label for="todo${item.index}"> ${item.description}</label>
  </div>
  <i class="fa fa-ellipsis-v" aria-hidden="true"></i>`

  list.appendChild(listItem)
})

