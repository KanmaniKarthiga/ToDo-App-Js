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
console.log(itemText)


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
	document.querySelector('.header2').style.display = 'none'

    var newTodo = document.createElement("div")
    var TodoHeading = document.createElement("h1")
    var line = document.createElement("hr")
    var delTodo = document.createElement("div")
    var addTodo = document.createElement("div")

    section.appendChild(newTodo)
    newTodo.setAttribute('id', `newTodo${todoCount}`)
	newTodo.classList.add('newTodo')

	newTodo.appendChild(TodoHeading)
	TodoHeading.classList.add('TodoHeading')
	TodoHeading.innerHTML = `${listbtn.value}`

	newTodo.appendChild(line)
	newTodo.appendChild(delTodo)
	delTodo.classList.add('delTodo')
	delTodo.innerHTML = `X`
	delTodo.addEventListener('click', () => {
		var delCard = delTodo.parentNode
		delCard.remove()
	})

	newTodo.appendChild(addTodo)
	addTodo.classList.add('addTodo')
	addTodo.innerHTML = `+`
	
	addTodo.addEventListener('click', () => {
		blurdiv.classList.add('blur')
		item.style.display = "block"
	})

	TodoHeading.addEventListener('click', () =>{
	newTodo.style.marginLeft = "400px"

	var newHeader = document.createElement('div')
	section.appendChild(newHeader)
	newHeader.setAttribute('id', `newheader`)
	newHeader.innerHTML = listbtn.value
	newHeader.style.display = 'block'
	navbar.style.display = 'none'
	document.querySelector('.unique').style.display = 'flex'

	uniqueAdd.addEventListener('click',() =>{
		addtask()
		document.querySelector('.unique').style.display = 'none'
		newHeader.style.display = 'none'
		section.style.display = 'flex'
		navbar.style.display = 'block'
		newTodo.style.margin = "2px"
		
	})
	uniqueClose.addEventListener('click', () =>{
		document.querySelector('.unique').style.display = 'none'
		newHeader.style.display = 'none'
		section.style.display = 'flex'
		navbar.style.display = 'block'
	})
	backicon.addEventListener('click', () =>{
		document.querySelector('.unique').style.display = 'none'
		newHeader.style.display = 'none'
		section.style.display = 'flex'
		navbar.style.display = 'block'
		newTodo.style.margin = "2px"
	})


})	
	var itemCount = 0
	item_closebtn.addEventListener('click', () =>{
		item.style.display = 'none'
		blurdiv.classList.remove('blur')
	})
	item_addbtn.addEventListener('click', () =>{
		itemCount++;
		blurdiv.classList.remove('blur')
		item.style.display = 'none'

		var newparent = document.createElement('div')
		var newItem = document.createElement('div')
		var statusbar = document.createElement('div')
		
		newTodo.appendChild(newparent)
		newparent.appendChild(newItem)
		newparent.appendChild(statusbar)

		newItem.setAttribute('id', `newItem${itemCount}`)
		newparent.classList.add('newItem')
		newItem.innerHTML = itemText.value
		
		statusbar.classList.add('statusbar')
		statusbar.innerHTML = "Mark Done"	
		statusbar.addEventListener('click', () =>{
			statusbar.style.display = 'none'
			newItem.style.textDecoration = "line-through"
			newItem.style.color = "blue"
		})
	})
	
}

	

