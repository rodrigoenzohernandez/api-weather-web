var currentURL = window.location;

getCurrent();
getForecast();

function getCurrent() {
	var citySelector = document.querySelector('#city-selector')
	var ciudad = citySelector.value
	axios.get(currentURL + 'current/' + ciudad)
		.then(function (response) {
			let current = response.data;
			if (current.cod != 404) {
				javascript: document.getElementsByTagName("section")[0].innerHTML = `
				<div class="contenido">					
				<p class="center"> <strong>Ciudad:</strong> ${current.name}</p>
				<img src="http://openweathermap.org/img/wn/${current.weather[0].icon}.png" alt="">
				<div><p><strong> Temperatura actual </strong> ${current.main.temp}°C</p></div>
				<div><p><strong> Temperatura minima </strong> ${current.main.temp_min} °C</p></div>
				<div><p><strong> Temperatura maxima </strong>${current.main.temp_max} °C</p></div>	
				</div>
				`
			}
			else {
				javascript: document.getElementsByTagName("section")[0].innerHTML = `
				<div class="contenido">					
				<p>${current.message}</p>
				</div>
				`
			}
		})
		.catch(function (error) {
			console.log(error);
		})
}
var contenido = document.querySelector('#contenido')

function getForecast() {
	var citySelector = document.querySelector('#city-selector')
	var ciudad = citySelector.value
	axios.get(currentURL + 'forecast/' + ciudad)
		.then(function (response) {
			let forecast = response.data;
			if (forecast.cod != 51451) {
				console.log(forecast.list.length)
				for (i = 0; i < forecast.list.length; i++) {
					javascript: document.getElementsByTagName("section")[1].innerHTML += `
					<div class="contenido">					
					<p class="center"> <strong>Ciudad:</strong> ${forecast.city.name}</p>
					<p class="center"><strong>Fecha:</strong> ${forecast.list[i].dt_txt.slice(0, 10)}</p>		
					<img src="http://openweathermap.org/img/wn/${forecast.list[i].weather[0].icon}.png" alt="">
					<div><p><strong>Temperatura</strong> ${forecast.list[i].main.temp}°C</p></div>
					<div><p><strong>Temperatura</strong> minima ${forecast.list[i].main.temp_min} °C</p></div>
					<div><p><strong>Temperatura</strong> máxima ${forecast.list[i].main.temp_max} °C</p></div>
					</div>
				`
				}
			}
			else {
				javascript: document.getElementsByTagName("section")[0].innerHTML = `
				<div class="contenido">					
				<p>B${forecast.message}</p>
				</div>
				`}
		})
		.catch(function (error) {
			console.log(error);
		})
}

function searchWeather() {
	var myNode = document.getElementById("main-forecast");
	while (myNode.firstChild) {
		myNode.removeChild(myNode.firstChild);
	}
	getCurrent();
	getForecast();
}  