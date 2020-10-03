var express = require('express');
var router = express.Router();

const indexController = require("../controllers/indexController");
const locationController = require("../controllers/locationController");
const weatherController = require("../controllers/weatherController");

router.get('/', indexController.showIndex);
router.get('/location', locationController.showLocation);
router.get('/current/:city?', weatherController.showCurrent);
router.get('/forecast/:city?', weatherController.showForecast);

module.exports = router;