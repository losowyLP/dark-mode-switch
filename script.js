const body = document.body;
const button = document.getElementById("toggle");
header = document.getElementById("header");
let mode = "light"
header.innerText = mode + " mode";
document.title = mode + " mode";

function toggle() {
	body.classList.toggle("dark")
	button.classList.toggle("dark")
	if (mode == "light") {
		mode = "dark";
	} else {
		mode = "light";
	}

	header.innerText = mode + " mode";
	document.title = mode + " mode";
}