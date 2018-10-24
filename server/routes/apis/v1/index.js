'use strict';

const
    express = require('express'),
    productsController = require('../../../controllers/apis/products.js'),
    invoiceController = require('../../../controllers/apis/invoices.js'),
    invoiceCouchController = require('../../../controllers/apis/couchinvoices.js');

let router = express.Router();

router.use('/products', productsController);
router.use('/invoices', invoiceController);
router.use('/couch-invoices', invoiceCouchController);

module.exports = router;