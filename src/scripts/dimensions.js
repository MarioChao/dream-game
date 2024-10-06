// Dimensions

// Local functions

function getHour(radians) {
	let hour = radians * (24 / (2 * Math.PI)) + (6);
	hour %= 24;
	return hour;
}

function parseNumber(input) {
	return parseFloat(input);
}

function updateClockRadians() {
	const inputClockRadians = document.getElementById("input-clock-radians");
	const parsedClockRadians = document.getElementById("parsed-clock-radians");
	const outputClockRadians = document.getElementById("output-clock-radians");

	// Calculate time
	const inputRadians = parseNumber(inputClockRadians.value);
	const parsedRadians = !isNaN(inputRadians) ? inputRadians : parseNumber(inputClockRadians.getAttribute("placeholder"));
	const hours = getHour(parsedRadians);
	const minutes = (hours % 1) * 60;

	// Create display string
	const displayHours = Math.floor(hours).toString().padStart(2, 0);
	const displayMinutes = Math.floor(minutes).toString().padStart(2, 0);
	const result = `${displayHours}:${displayMinutes}`;

	// Update
	parsedClockRadians.value = parsedRadians;
	outputClockRadians.value = result;
}

// Initialize functions

function initializeDigitsOfTheSoul() {
	const inputClockRadians = document.getElementById("input-clock-radians");

	inputClockRadians.addEventListener("input", function(ev) {
		updateClockRadians();
	});
	updateClockRadians();
}

function onDOMContentLoaded() {
	initializeDigitsOfTheSoul();
}

// Calling / events

window.addEventListener("DOMContentLoaded", onDOMContentLoaded);
