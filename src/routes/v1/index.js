const express = require('express');
const airplaneRouter = require('./airplane-route');
const cityRouter = require('./city-route');
const airportRouter = require('./airport-route');
const flightRouter = require('./flight-route');
const { InfoController } = require('../../controllers');

const router = express.Router();
router.use('/airplanes', airplaneRouter);
router.use('/cities', cityRouter);
router.use('/airports', airportRouter);
router.use('/flights', flightRouter);
router.get('/info', InfoController.info);

module.exports = router;