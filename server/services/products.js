'use strict';
var db  = require('../../configs/rdbms-db.js');

const sequelizedb = require('../../configs/db.js');
const Product = sequelizedb.products;

function getProducts(req, res) {
    /*
    db.query('select * from products limit 1000', function (error, results, fields) {
        if (error) throw error;
        res.json(results);
        //res.end(JSON.stringify(results));
      });
      */
     Product.findAll().then(products => {
        res.send(products);
      });
}

function getProductsWithBarcode(req, res) {
    /*
    db.query('select * from test_products where barcode=?', [req.params.barcode], function (error, results, fields) {
        if (error) throw error;
        res.end(JSON.stringify(results));
        //res.json(results);
    });
    */
   /*
   Product.findOne({ where: {barcode: req.params.barcode}}).then(product => {
        res.send(product);
    });
    */
   Product.findById(req.params.barcode).then(product => {
        res.send(product);
    })
}

function updateProduct(req, res) {
    const barcode = req.params.barcode;
	Product.update( { name: req.body.name, mrp: req.body.mrp, alternate_mrp: req.body.alternate_mrp }, 
		{ where: {barcode: barcode}}
		).then(() => {
		res.status(200).send("Successfully updated a product with barcode = " + barcode);
	});
}

function deleteProduct(req, res) {
    const barcode = req.params.barcode;
	Product.destroy({
        where: { barcode: barcode }
      }).then(() => {
        res.status(200).send('Successfully deleted a product with barcode = ' + barcode);
      });
}

function createProduct(req, res) {
        let produtcs = JSON.stringify(req.body);
        produtcs = JSON.parse(produtcs);
        for(let i=0; i< Object.keys(produtcs).length; i++) {
            Product.create({  
                barcode: produtcs[i].barcode,
                name: produtcs[i].name,
                mrp: produtcs[i].mrp,
                alternate_mrp: produtcs[i].alternate_mrp,
                uom: produtcs[i].uom,
                measure: produtcs[i].measure,
                brand_id: produtcs[i].brand_id,
                category_id: produtcs[i].category_id, 
                vat_id: produtcs[i].vat_id,
                image: produtcs[i].image,
                is_disabled: produtcs[i].is_disabled,
                is_pc: produtcs[i].is_pc,
                rating: produtcs[i].rating,
                gst_id: produtcs[i].gst_id,
                hsn_code: produtcs[i].hsn_code,
                created_at: produtcs[i].created_at,
                updated_at: produtcs[i].updated_at
              });
        }
        res.json(produtcs);
}

module.exports = {
    getProducts: getProducts,
    getProductsWithBarcode: getProductsWithBarcode,
    createProduct: createProduct,
    updateProduct: updateProduct,
    deleteProduct: deleteProduct
};
