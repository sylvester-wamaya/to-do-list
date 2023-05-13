// Checkbox function
export function checkvalue(list) {
  document.addEventListener('change', (e) => {
    if (e.target.classList.contains('to-do')) {
      const index = e.target.dataset.listIndex - 1;
      e.target.parentNode.children[1].classList.toggle('checked');

      list.checked(index);
    }
  });
}

// Clear all selected tasks
export function clearAll(list) {
  const clr = document.querySelector('button');
  clr.addEventListener('click', () => {
    list.clear();
  });
}
