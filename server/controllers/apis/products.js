'use strict';

const
    express = require('express'),
    productService = require('../../services/products.js');

let router = express.Router();

router.get('/', productService.getProducts);
router.get('/:barcode', productService.getProductsWithBarcode);
router.post('/', productService.createProduct);
router.put('/:barcode', productService.updateProduct);
router.delete('/:barcode', productService.deleteProduct);

module.exports = router;