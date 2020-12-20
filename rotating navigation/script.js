const open = document.getElementById("open");
const close = document.getElementById("close");
const container = document.querySelector(".container");
const circle = document.querySelector(".circle");



open.addEventListener("click", () => {
	container.classList.add("show-nav");
	circle.style.rotate = "90deg";
})


close.addEventListener("click", () => {
	container.classList.remove("show-nav");
})