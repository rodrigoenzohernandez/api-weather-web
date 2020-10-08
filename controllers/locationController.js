const controller = {
    showLocation: async function (req, res) {
        try {
            var geoip = require('geoip-lite');
            //let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress;
            //let ip = socket.handshake.address;

            var io = require('socket.io').listen(80);
            io.sockets.on('connection', function (socket) {
                var endpoint = socket.manager.handshaken[socket.id].address;
                console.log('Client connected from: ' + endpoint.address + ":" + endpoint.port);
            });
            //res.data(endpoint.address);
            ///let cityData = geoip.lookup(endpoint.address);
            return res.json(endpoint.address);
        }
        catch (err) {
            console.log(err);
        }
    }
}
module.exports = controller;


