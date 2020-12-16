const panels = document.querySelectorAll('.panel'); //Selector
			   //document.getElementsByClassName -> DOM
panels.forEach((panel) => {
	panel.addEventListener('click', () => {
		removeActiveClass();
		panel.classList.add('active');
	})
})




function removeActiveClass(){
	panels.forEach(panel => {
		panel.classList.remove('active');
	})
}