const controller = {
    showLocation: async function (req, res) {
        try {
            var geoip = require('geoip-lite');
            let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            console.log(req.baseUrl)
            let cityData = geoip.lookup(ip);
            return res.json(cityData);
        }
        catch (err) {
            console.log(err);
        }
    }
}
module.exports = controller;