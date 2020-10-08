const controller = {
    showLocation: async function (req, res) {
        try {
            var geoip = require('geoip-lite');
     
            //return res.send(ip);            
            const publicIp = require('public-ip');
 
            (async () => {
                console.log(await publicIp.v4());
                //=> '46.5.21.123'

                let cityData = geoip.lookup(publicIp.v4());
                return res.json(cityData);
             
                //console.log(await publicIp.v6());
                //=> 'fe80::200:f8ff:fe21:67cf'
            })();




        }
        catch (err) {
            console.log(err);
        }
    }
}
module.exports = controller;