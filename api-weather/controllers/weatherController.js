const controller = {
    showCurrent: function (req, res) {
        searchWeather(res, req.params.city, "weather");
    },
    showForecast: async function (req, res) {
        searchWeather(res, req.params.city, "forecast");
    }
}

async function searchWeather(res, cityParam, type) {
    try {
        var axios = require('axios');
        axios.get('http://localhost:3000/location')
            .then(async function (response) {
                currentCity = response.data.city;
                const fs = require('fs');
                let secrets = JSON.parse(fs.readFileSync('./secrets/secrets.json', 'utf-8'));
                const fetch = require("node-fetch");
                const apiKey = secrets.api_key;
                let cityUrl = cityParam || currentCity;
                let data = await fetch("http://api.openweathermap.org/data/2.5/" + type + "?q=" + cityUrl + "&units=metric&appid=" + apiKey + "");
                let weather = await data.json();

                if (weather.cod != 404 && type == "forecast") {
                    var newArray = weather.list.filter(function (date) { return (date.dt_txt.slice(-8) == "09:00:00"); })
                    weather.list = newArray;
                }
                return res.json(weather);
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    catch (err) {
        console.log(err);
    }
}

module.exports = controller;