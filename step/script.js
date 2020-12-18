const circles = document.querySelectorAll('.circle'); //Selector
			   //document.getElementsByClassName -> DOM
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const progress = document.querySelector('#progress');

let currentActive = 1;

next.addEventListener('click', () => {
	currentActive++;

	if (currentActive > circles.length) {
		currentActive = circles.length;
	}

	update();
})


prev.addEventListener('click', () => {
	currentActive--;

	if (currentActive < 1) {
		currentActive = 1;
	}
	
	update();
})


function update() {
	circles.forEach((circle, index) => {
		if (currentActive > index) {
			circle.classList.add('active');
		}
		else{
			circle.classList.remove('active');
		}
	})

	if (currentActive > 1) {
		prev.disabled = false;
	}
	else{
		prev.disabled = true;
	}

	if (currentActive == circles.length) {
		next.innerHTML = "Submit";
		next.style.backgroundColor = "#FF2D2D";
	}
	else{
		next.innerHTML = "Next";
		next.style.backgroundColor = "#3498db";
	}

	progress.style.width = ((currentActive-1)/(circles.length-1))*100+"%";
}
