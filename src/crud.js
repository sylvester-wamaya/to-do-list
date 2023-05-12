const list = document.querySelector('#display');
const todoBtn = document.querySelector('button');
const todoInput = document.querySelector('#toDo');




// Todo task object sconstructor
    class Todo{
        constructor(description){
            this.description = description,
            this.index = "",
            this.completed = false

        }
    }

    // To do list constructor
    class List{
        constructor(){
            this.list = JSON.parse(localStorage.getItem('todo')) || [];
        }
    
        // Display todo tasks method
   display(){
    this.list.forEach((item) => {        
        const listItem = document.createElement('li');
        const trash = document.createElement("div")
        trash.className = "div-trash"
        listItem.innerHTML = `
        <div class="content">
        <input type="checkbox" class="to-do" name="todo${item.index}" value="${item.completed}">
        <input class="list-item" data-list-index="${item.index}" type="text" id="todo${item.index}" name="todo${item.index}" value="${item.description}">
        </div>
        <i class="fa fa-ellipsis-v dots" aria-hidden="true"></i>
        `;

        trash.innerHTML = `<i class="fa fa-trash trash" data-list-index="${item.index}" aria-hidden="true"></i>
        `
  
        listItem.id = `data-${item.index}`
        trash.addEventListener("mousedown", (e)=>{
        const index = e.target.dataset.listIndex - 1
        this.remove(index)
        })
      
        listItem.appendChild(trash)
        list.appendChild(listItem);
        
      }
      )
  
   } 
// Add new task method
    add(description){
    const todoItem = new Todo(description)
    todoItem.index = this.list.length + 1,
    this.list.push(todoItem)
    localStorage.setItem("todo", JSON.stringify(this.list))
    while (list.firstChild ) {
        list.removeChild(list.firstChild);
      }
   this.display()
    
}

//Submit a new to do method
submit(){
    todoInput.addEventListener("keypress", (e)=>{
        if(e.key==="Enter"){
        e.preventDefault()
        this.add(todoInput.value)
        todoInput.value = ""
      }})
}

// Remove a selected to to method
remove(index){
    this.list.splice(index, 1)
    this.list.forEach((item)=>{
        if(item.index > index){
        item.index--
}})
    localStorage.setItem("todo", JSON.stringify(this.list))
    while (list.firstChild ) {
        list.removeChild(list.firstChild);
      }
   this.display()
}

  //Edit method  
edit(index, toDo) {
  this.list[index].description = toDo
    localStorage.setItem('todo', JSON.stringify(this.list));
    while (list.firstChild ) {
      list.removeChild(list.firstChild);
    }
      this.display()  
  }


// Edit a spefic to do method
change(){
 
  document.addEventListener("keypress", (e)=>{
    if(e.code==="Enter"){
      if(e.target.classList.contains("list-item")){
      e.preventDefault()
    const text = e.target.value
    const index = e.target.dataset.listIndex - 1
      this.edit(index, text)
      
}}})
}

    }


export default List