const labels = document.querySelectorAll('.form-control label');

labels.forEach(label => {
	label.innerHTML = label.innerText
		.split('')
		.map((letter, idx) => `<span style="transition-delay: ${idx * 50}ms">${letter}</span>`)
		.join('');//預設用,分隔，這禮拜用空字串取代,
})