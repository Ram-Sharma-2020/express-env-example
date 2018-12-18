'use strict';

const express = require('express'),
    DeviceService = require('../../services/devices.js'),
    device = new DeviceService();

let router = express.Router();

router.get('/', device.getDevices);


module.exports = router;