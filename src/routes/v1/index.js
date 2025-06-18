const express = require('express');
const airplaneRouter = require('./airplane-route');
const cityRouter = require('./city-route');
const { InfoController } = require('../../controllers');

const router = express.Router();
router.use('/airplanes', airplaneRouter);
router.use('/cities', cityRouter);
router.get('/info', InfoController.info);

module.exports = router;