const controller = {
    showLocation: async function (req, res) {
        try {
            var geoip = require('geoip-lite');
            const ipFromRequest = requestIp.getClientIp(req).split(':').slice(-1).pop()
              res.send(ipFromRequest)
            //let cityData = geoip.lookup(ip);
            return res.json(cityData);
        }
        catch (err) {
            console.log(err);
        }
    }
}
module.exports = controller;