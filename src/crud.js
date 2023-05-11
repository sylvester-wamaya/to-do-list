const list = document.querySelector('#display');
const todoBtn = document.querySelector('button');
const todoInput = document.querySelector('#toDo');





    class Todo{
        constructor(description){
            this.description = description,
            this.index = "",
            this.completed = false

        }
    }
    class List{
        constructor(){
            this.list = JSON.parse(localStorage.getItem('todo')) || [];
        }
        
   display(){
    this.list.forEach((item) => {
        const trash = document.createElement("div")
        const listItem = document.createElement('li');
        listItem.innerHTML = `
        <div class="content">
        <input type="checkbox" class="to-do" name="todo${item.index}" value="${item.completed}">
        <label for="todo${item.index}"> ${item.description}</label>
        </div>
        <i class="fa fa-ellipsis-v dots"  data-book-index=${item.index} aria-hidden="true"></i>
        `;
        trash.innerHTML = `<i class="fa fa-trash trash" aria-hidden="true"></i>
        `
        
        trash.addEventListener("click", (e)=>{
        const index = e.target.dataset.index;
        this.remove(index)
        })
        listItem.appendChild(trash)
        list.appendChild(listItem);
        
      }
      )
  
   } 

    add(todo){
    const todoItem = new Todo(todo)
    todoItem.index = this.list.length + 1,
    this.list.push(todoItem)
    localStorage.setItem("todo", JSON.stringify(this.list))
    while (list.firstChild ) {
        list.removeChild(list.firstChild);
      }
   this.display()
    
}

submit(){
    todoInput.addEventListener("keypress", (e)=>{
        if(e.key==="Enter"){
        e.preventDefault()
        this.add(todoInput.value)
        todoInput.value = ""
      }})
}
remove(index){
    this.list.splice(index, 1)
    this.list.forEach((item)=>{
        item.index = this.list.length + 1
    })
    localStorage.setItem("todo", JSON.stringify(this.list))
    while (list.firstChild ) {
        list.removeChild(list.firstChild);
      }
   this.display()
}

delete(){
    
}

    }

   
   








export default List