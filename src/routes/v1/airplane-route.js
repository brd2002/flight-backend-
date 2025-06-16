const express = require('express');
const {AirPlaneController} = require("../../controllers");
const router = express.Router();
router.post('/' , AirPlaneController.createAirPlane);
router.get('/' , AirPlaneController.getAirplanes);
module.exports = router;