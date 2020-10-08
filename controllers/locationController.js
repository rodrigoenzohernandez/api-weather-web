const controller = {
    showLocation: async function (req, res) {
        try {
            var geoip = require('geoip-lite');
     
            //return res.send(ip);            
            const publicIp = require('public-ip');
 
            (async () => {
                return res.json(await publicIp.v4());
            })();




        }
        catch (err) {
            console.log(err);
        }
    }
}
module.exports = controller;