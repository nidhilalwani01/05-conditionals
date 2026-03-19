// Get the form and message elements from the page.
const weatherForm = document.getElementById("weatherForm");
const weatherInput = document.getElementById("weather");
const temperatureInput = document.getElementById("temperature");
const suggestionText = document.querySelector("#suggestion p");

// When the user submits, show what to bring based on the weather.
weatherForm.addEventListener("submit", function (event) {
	event.preventDefault();

	const weather = weatherInput.value;
	const temperature = Number(temperatureInput.value);
	let message = "";

	if (weather === "sunny") {
		message = `It's ${weather}! Bring sunglasses and sunscreen. 😎🧴`;
	} else if (weather === "cloudy" || weather === "rainy") {
		message = `It's ${weather}! A light jacket might be a good idea.`;
	} else if (weather === "snowy") {
		message = `It's ${weather}! Bring gloves, a scarf, and a warm coat. ❄️🧤`;
	} else if (weather === "windy") {
		message = `It's ${weather}! Bring a windbreaker. 💨🧥`;
	} else {
		message = "Please choose a weather type first. 🙂";
	}

	// Add an extra suggestion when the temperature is below 50°F.
	if (!Number.isNaN(temperature) && temperature < 50) {
		message = `${message} It's below 50°F, so wear a warm jacket. 🧥`;
	}

	suggestionText.textContent = message;
});