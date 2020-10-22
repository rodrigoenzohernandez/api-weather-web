exports.showLocation = async (req, res) => {
    try {
        var geoip = require('geoip-lite');
        let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress;
        //let ip = "181.228.230.180"; //For testing
        let cityData = geoip.lookup(ip);
        return cityData;
    } catch (err) {
        console.log(err)
    }
}