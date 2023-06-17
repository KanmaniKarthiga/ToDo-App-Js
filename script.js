const section = document.querySelector('section')
let overlay = document.querySelector('.overlay')
let addicon = document.querySelector('#iconplus')
let listbtn = document.getElementById('list')
let addbtn  = document.querySelector('#add')
let closebtn = document.querySelector('#close')

let add = document.getElementById('addtask')
function addtask(){
    add.style.display = "block"
}
function hide(){
    add.style.display = "none"
}


var todoCount = 0
var todos = document.getElementById('todos')
function createPopup(){
    todoCount++;

    var newTodo = document.createElement("div")
    var TodoHeading = document.createElement("h1")
    var todoDetail = document.createElement("p")
    var delTodo = document.createElement("button")

    todos.appendChild(newTodo)
    newTodo.appendChild(TodoHeading)
    newTodo.appendChild(todoDetail)
    newTodo.appendChild(delTodo)

    TodoHeading.innerText = list.value
    todoDetail.innerText = "Task description"
    newTodo.classList.add("todocard")
    delTodo.innerText = "X"
    delTodo.style.backgroundColor = "red"
    // addItem.innerText = 


}

// var popup = document.getElementById('popup')
// var isOpen = false
// function show(){
//     if(isOpen){
//         popup.classList.remove("show")
//         isOpen = false
//     }
//     else{
//         popup.classList.add("show")
//         isOpen = true
//     }
// }
// function hide(){
//     popup.classList.remove("show")
// }

