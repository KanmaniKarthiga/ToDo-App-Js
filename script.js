var blurdiv = document.querySelector('div')
var addicon = document.querySelector('#iconplus')
var listbtn = document.getElementById('list')
var addbtn  = document.querySelector('#add')
var closebtn = document.querySelector('#close')
var navbar = document.querySelector('nav')
var section = document.querySelector('section')
var add = document.getElementById('addtask')
var item = document.getElementById('additem')
var item_addbtn = document.querySelector('#add_itemBtn')
var item_closebtn = document.querySelector('#close_itemBtn')
var itemText = document.getElementById('iteminlist')
var uniqueAdd = document.querySelector('#iconplus2')
var uniqueClose = document.querySelector('.textofback')
var backicon = document.querySelector('#backicon')
var addCard;



function addtask(){
    add.style.display = "block"
    blurdiv.classList.add('blur')
}
function hide(){
    add.style.display = "none"
    blurdiv.classList.remove('blur')

}

var todoCount = 0
function createtasks(){
    todoCount++;

    blurdiv.classList.remove('blur')
	add.style.display = 'none'
	document.querySelector('#header2').style.display = 'none'

    var newTodo = document.createElement("div")
    var TodoHeading = document.createElement("h1")
    var line = document.createElement("hr")
    var delTodo = document.createElement("div")
    var addTodo = document.createElement("div")

    section.appendChild(newTodo)
    newTodo.setAttribute('id', `newTodo${todoCount}`)
	newTodo.classList.add('newTodo')
	newTodo.style.display = 'block'

	newTodo.appendChild(TodoHeading)
	TodoHeading.classList.add('TodoHeading')
	TodoHeading.innerHTML = `${listbtn.value}`

	TodoHeading.addEventListener('click', () => {

		var todos = document.querySelectorAll('.newTodo')
		var card = TodoHeading.parentNode
		var cardText = TodoHeading.innerHTML
		navbar.style.display = 'none'
		card.style.display = 'block'
		todos.forEach((boxes) =>{
			if(boxes !== card)
			{
				boxes.style.display = 'none'
				newTodo.style.marginLeft='400px'
			}
			
		})
		
		document.querySelector('.unique').style.display = 'flex'
		document.querySelector('.head').innerHTML = `<h2>${cardText}</h2>`

		document.querySelector('.textofback').addEventListener('click', () => {
			navbar.style.display = 'flex'
			
			document.querySelector('.unique').style.display = 'none'
			todos.forEach((boxes)=>{
				boxes.style.display = 'block'
				newTodo.style.marginLeft='0px'
			})
		})

		document.querySelector('#backicon').addEventListener('click', () => {
			navbar.style.display = 'flex'
			
			document.querySelector('.unique').style.display = 'none'
			todos.forEach((boxes)=>{
				boxes.style.display = 'block'
				newTodo.style.marginLeft='0px'
			})
		})

		document.querySelector('#iconplus2').addEventListener('click', () => {
			blurdiv.classList.add('blur')
			add.style.display = 'flex'
			navbar.style.display = 'flex'
			document.querySelector('.unique').style.display = 'none'
			todos.forEach((boxes)=>{
				boxes.style.display = 'block'
			})
		})
	})

	newTodo.appendChild(line)
	newTodo.appendChild(delTodo)
	delTodo.classList.add('delTodo')
	delTodo.innerHTML = `<span><i class="fa-solid fa-trash-can" style="color: #ffffff;"></i></span>`
	delTodo.addEventListener('click', () => {
		var delCard = delTodo.parentNode
		delCard.remove()
	})

	newTodo.appendChild(addTodo)
	addTodo.classList.add('addTodo')
	addTodo.innerHTML = `<span><i class="fa-sharp fa-solid fa-circle-plus" style="color: #1595d5;"></i></span>`
	
	addTodo.addEventListener('click', () => {
		blurdiv.classList.add('blur')
		item.style.display = "block"
		addCard = addTodo.parentNode
	})

	item_closebtn.addEventListener('click', () =>{
		item.style.display = 'none'
		blurdiv.classList.remove('blur')
	})
	
}

var itemCount = 0
function list2(){
	
	itemCount++;
	
	blurdiv.classList.remove('blur')
	item.style.display = 'none'
	
	var newparent = document.createElement('div')
	newparent.setAttribute('id', `item${itemCount}`)
	addCard.appendChild(newparent)

	var newItem = document.createElement('div')
	var statusbar = document.createElement('div')
	
	newparent.appendChild(newItem)
	newparent.appendChild(statusbar)

	newparent.classList.add(`newItem`)
	newItem.innerHTML = itemText.value
	newItem.style.marginLeft = '10px'
	
	statusbar.classList.add('statusbar')
	statusbar.innerHTML = "Mark Done"	
	statusbar.addEventListener('click', () =>{
		statusbar.style.display = 'none'
		newItem.style.textDecoration = "line-through"
		newItem.style.color = "red"
		newItem.style.marginLeft = "50px"
	})
}
