var winston = require( 'winston' ),
	fs = require( 'fs' ),
	logDir = '/var/log/itc', // Or read from a configuration
	env = process.env.NODE_ENV || 'development', logger;

//winston.setLevels( winston.config.npm.levels );
winston.level = process.env.LOG_LEVEL;
winston.addColors( winston.config.npm.colors );

if ( !fs.existsSync( logDir ) ) {
	// Create the directory if it does not exist
	fs.mkdirSync( logDir );
}

logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.printf(info => {
            return `${info.timestamp} ${info.level.toUpperCase()}: ${info.message}`;
        })
    ),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({
			level: env === 'development' ? 'debug' : 'info',
			filename: logDir + '/itclogger.log',
			maxsize: 1024 * 1024 * 10 // 10MB
        })
    ],
    exceptionHandlers: [
        new winston.transports.File({ filename: logDir + '/itcexceptions.log' })
    ]
});

module.exports = logger;
