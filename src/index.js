import './style.css';

const listItems = [
  {
    description: 'Write an email',
    completed: true,
    index: 0,
  },
  {
    description: 'Laundry',
    completed: false,
    index: 1,
  },
  {
    description: 'Read a book',
    completed: true,
    index: 2,
  },
  {
    description: 'Submit assignment',
    completed: false,
    index: 3,
  },
];
const list = document.querySelector('ul');

listItems.forEach((item) => {
  const listItem = document.createElement('li');
  listItem.innerHTML = `
  <div class="content">
  <input type="checkbox" class="to-do" name="todo${item.index}" value="${item.completed}">
  <label for="todo${item.index}"> ${item.description}</label>
  </div>
  <i class="fa fa-ellipsis-v" aria-hidden="true"></i>`;

  list.appendChild(listItem);
});
