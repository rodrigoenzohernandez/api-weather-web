const controller = {
    showLocation: async function (req, res) {
        try {
            const fetch = require("node-fetch");
            var geoip = require('geoip-lite');
            let data = await fetch("https://api.myip.com/");
            let contenido = await data.json();
            let cityData = await geoip.lookup(contenido.ip);
            return res.json(cityData);
        }
        catch (err) {
            console.log(err);
        }
    }
}
module.exports = controller;