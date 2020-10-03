async function searchWeather(req, res) {
    try {
        const fetch = require("node-fetch");
        var geoip = require('geoip-lite');
        let data = await fetch("https://api.myip.com/");
        let contenido = await data.json();
        let city = geoip.lookup(contenido.ip);
        return res.json(city);

    }
    catch (err) {
        console.log(err);
    }
}

const controller = {
    showLocation: function (req, res, next) {
        return searchWeather(req, res);
    },
}

module.exports = controller;