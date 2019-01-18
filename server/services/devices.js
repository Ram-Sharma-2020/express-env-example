'use strict';

const sequelizedb = require('../../configs/db.js');
const logger = require('../../configs/winston.js');
const Device = sequelizedb.devices;

class DeviceService {
    getDevices(req, res) {
        Device.findAll()
        .then(devices => {
            logger.log('info', 'Successfully fetched ...');
            res.send(devices);
          })
        .catch(err => {
            logger.log('error', 'Error occured  ...'+ json(err));
            res.json(err)}
            );  
        

    }
}

module.exports = DeviceService;