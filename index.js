'use strict';
// https://www.caffeinecoding.com/better-express-routing-for-nodejs/
const
    server = require('./server')(),
    config = require('./configs');

server.create(config);
server.start();