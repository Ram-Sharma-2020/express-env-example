module.exports = (sequelize, Sequelize) => {
	const Device = sequelize.define('devices', {
		// Sequelize will assume your table has a id primary key property by default. But if suppose want to ovveride it -
		device_id: {
            type: Sequelize.INTEGER,
            field: 'device_id',
			primaryKey: true,
			autoIncrement: false
		},
        store_id: {
            type: Sequelize.INTEGER,
            field: 'store_id'
	  	},
        access_token: {
                type: Sequelize.STRING,
                field: 'access_token'
		},
		gcm_token: {
			type: Sequelize.STRING,
			field: 'gcm_token'
		},
		device_type: {
            type: Sequelize.STRING,
            field: 'device_type'
		},
		otp: {
			type: Sequelize.INTEGER
		},
		os_type: {
            type: Sequelize.STRING,
            field: 'os_type'
		},
		os_version: {
            type: Sequelize.STRING,
            field: 'os_version'
		},
		build_nos: {
            type: Sequelize.STRING,
            field: 'build_nos'
		},
		model_no: {
            type: Sequelize.STRING,
            field: 'model_no'
		},
		created_at: {
			type: Sequelize.DATE(6)
		},
		updated_at: {
			type: Sequelize.DATE(6)
		}
	}, {
		tableName: 'devices',
		timestamps: true,
		createdAt: false,
		updatedAt: false,
		deletedAt: false,
		underscored: true,
		freezeTableName: true,
		version: false
		//paranoid: true,
		 
	});
	
	return Device;
}