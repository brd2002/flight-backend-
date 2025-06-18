const express = require('express');
const {AirPlaneController} = require("../../controllers");
const router = express.Router();
router.post('/' , AirPlaneController.createAirPlane);
router.get('/' , AirPlaneController.getAirplanes)
router.get('/:id' , AirPlaneController.getAirplaneById)
router.delete('/:id' , AirPlaneController.deleteAirplane);
module.exports = router;