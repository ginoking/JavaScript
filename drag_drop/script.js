const fill = document.querySelector('.fill')
const empies = document.querySelectorAll('.empty')

fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)


// for(const empty of empies) {
// 	empty.addEventListener('dragover', dragOver)
// 	empty.addEventListener('dragenter', dragEnter)
// 	empty.addEventListener('dragleave', dragLeave)
// 	empty.addEventListener('drop', dragDrop)
// }


empies.forEach(empty => {
	empty.addEventListener('dragover', dragOver)
	empty.addEventListener('dragenter', dragEnter)
	empty.addEventListener('dragleave', dragLeave)
	empty.addEventListener('drop', dragDrop)
})

function dragStart() {
	//this = fill
	this.className += ' hold'
	setTimeout(() => this.className = 'invisible', 0)
}

function dragEnd() {
	this.className = 'fill'
}

function dragOver(e) {
	e.preventDefault()
}

function dragLeave() {
	this.className = 'empty'
}

function dragEnter(e) {
	//e.preventDefault()
	this.className += ' hovered'
}

function dragDrop() {
	//this = fill
	this.className = 'empty'
	this.append(fill)
}