const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes(){
	
	const triggerBottom = window.innerHeight * 0.8;

	boxes.forEach(box => {

		//得到該元素距離最上面的值
		const boxTop = box.getBoundingClientRect().top;

		if (boxTop < triggerBottom) {
			box.classList.add('show')
		}
		else{
			box.classList.remove('show');
		}
	})
}