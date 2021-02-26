const body = document.body
const slides = document.querySelectorAll('.slide')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')


let activeSlide = 0

setBgtoBode()

rightBtn.addEventListener('click', () => {
	activeSlide++

	if (activeSlide > slides.length - 1 ) {
		activeSlide = 0
	}

	setBgtoBode()
	setActiveSlide()
})

leftBtn.addEventListener('click', () => {
	activeSlide--

	if (activeSlide < 0 ) {
		activeSlide = slides.length -1 
	}

	setBgtoBode()
	setActiveSlide()
})

function setBgtoBode() {
	body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}

function setActiveSlide() {
	slides.forEach(silde => silde.classList.remove('active'))


	slides[activeSlide].classList.add('active')
}