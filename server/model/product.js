module.exports = (sequelize, Sequelize) => {
	const Product = sequelize.define('products', {
		// Sequelize will assume your table has a id primary key property by default. But if suppose want to ovveride it -
		barcode: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: false
		},
        name: {
			type: Sequelize.STRING
	  	},
		mrp: {
				type: Sequelize.INTEGER
		},
		alternate_mrp: {
			type: Sequelize.STRING,
			field: 'alternate_mrp'
		},
		uom: {
			type: Sequelize.STRING
		},
		measure: {
				type: Sequelize.INTEGER
		},
		brand_id: {
			type: Sequelize.INTEGER
		},
		category_id: {
			type: Sequelize.INTEGER
		},
		vat_id: {
			type: Sequelize.INTEGER
		},
		image: {
			type: Sequelize.STRING
		},
		is_disabled: {
			type: Sequelize.BOOLEAN
		},
		is_pc: {
			type: Sequelize.BOOLEAN
		},
		rating: {
			type: Sequelize.INTEGER
		},
		gst_id: {
			type: Sequelize.INTEGER
		},
		hsn_code: {
			type: Sequelize.STRING
		},
		created_at: {
			type: Sequelize.DATE(6)
		},
		updated_at: {
			type: Sequelize.DATE(6)
		}
	}, {
		tableName: 'test_products',
		timestamps: true,
		createdAt: false,
		updatedAt: false,
		deletedAt: false,
		underscored: true,
		freezeTableName: true,
		version: false
		//paranoid: true,
		 
	});
	
	return Product;
}