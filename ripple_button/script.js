const buttons = document.querySelectorAll('.ripple')

buttons.forEach(button => {
	button.addEventListener('click', function(e) {
		const x = e.clientX//相對於整個頁面的距離
		const y = e.clientY

		const buttonTop = e.target.offsetTop
		const buttonLeft = e.target.offsetLeft


		const xInside = x - buttonLeft
		const yInside = y - buttonTop

		const circle = document.createElement('span')
		circle.classList.add('circle')
		circle.style.top = yInside + 'px'
		circle.style.left = xInside + 'px'

		//this只適用在一般的function寫法，不適用arrow function
		this.appendChild(circle)

		setTimeout(() => circle.remove(), 500)

	})
})