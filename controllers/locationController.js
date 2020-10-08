const controller = {
    showLocation: async function (req, res) {
        try {
            var geoip = require('geoip-lite');
            //let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress;
            let ip = socket.handshake.address;
            let cityData = geoip.lookup(ip);
            return res.json(cityData);
        }
        catch (err) {
            console.log(err);
        }
    }
}
module.exports = controller;


