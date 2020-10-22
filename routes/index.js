const indexController = require("../controllers/indexController");
const locationController = require("../controllers/locationController");
const weatherController = require("../controllers/weatherController");

const routes =
    [
        {
            method: 'GET',
            url: '/',
            handler: indexController.showIndex
        },
        {
            method: 'GET',
            url: '/location',
            handler: locationController.showLocation
        },
        {
            method: 'GET',
            url: '/current/:city',
            handler: weatherController.showCurrent
        },
        {
            method: 'GET',
            url: '/current',
            handler: weatherController.showCurrent
        },
        {
            method: 'GET',
            url: '/forecast/:city',
            handler: weatherController.showForecast
        },
        {
            method: 'GET',
            url: '/forecast',
            handler: weatherController.showForecast
        }
    ]
module.exports = routes;