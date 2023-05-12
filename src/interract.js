// Enable strike through the list item on checkbox click
// This works only after DOM refresh if added new tasks

export function checkbox(){
    const checkb = document.querySelectorAll('.to-do');
    checkb.forEach((box) => {
        box.addEventListener('change', (e) => {
          e.target.parentNode.children[1].classList.toggle('checked');
        });
      });
}
