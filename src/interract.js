// // Enable strike through the list item on checkbox click
// // This works only after DOM refresh if added new tasks



// // export function checkbox(){
// //     const checkb = document.querySelectorAll('.to-do');
// //     checkb.forEach((box) => {
// //         box.addEventListener('change', (e) => {
// //           e.target.parentNode.children[1].classList.toggle('checked');
         
// //         });
// //       });
// // }


export function checkvalue(list) {
   
    document.addEventListener('change', (e) => {
       
        if (e.target.classList.contains("to-do")) {          
         
          const index =  e.target.dataset.listIndex - 1;
          e.target.parentNode.children[1].classList.toggle('checked')
          console.log(index)
          
          list.checked(index);
        
      }
    })
  }
  export function clearAll(list){
    const clr = document.querySelector("button")
    clr.addEventListener("click", ()=>{
        list.clear()
    })
  }
