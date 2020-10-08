const controller = {
    showLocation: async function (req, res) {
        try {
            var geoip = require('geoip-lite');
     
            let ip = req.ip;;
            //return res.send(ip);
            let cityData = geoip.lookup(ip);
            return res.json(cityData);
        }
        catch (err) {
            console.log(err);
        }
    }
}
module.exports = controller;