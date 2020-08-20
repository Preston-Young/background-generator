var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomGradient = document.getElementById("random-gradient");

// Sets initial colors of the input buttons to the background
function setInitialColors() {
	color1.value = "#ff0000";
	color2.value = "#ffff00";
};

// Shows colors and gradients when page loads
window.onload = function() {
	setInitialColors()
	setGradient()
};

// Sets gradient everytime a new color is picked
function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

// Picks a random color (Copied from stack overflow)
function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
	  color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

// Sets background to random colors
function setRandomColor() {
	color1.value = getRandomColor();
	color2.value = getRandomColor();
	setGradient();
}

randomGradient.addEventListener("click", setRandomColor);