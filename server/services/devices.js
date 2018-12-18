'use strict';

const sequelizedb = require('../../configs/db.js');
const Device = sequelizedb.devices;

class DeviceService {
    getDevices(req, res) {
        Device.findAll().then(devices => {
            res.send(devices);
          });
    }
}

module.exports = DeviceService;