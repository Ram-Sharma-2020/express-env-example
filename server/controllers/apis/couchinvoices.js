const
    express = require('express');
    
    const serverId = 'http://admin:admin@localhost:5984';
    const database = 'snapbizz-testv2';

    var nano = require('nano')(serverId);
    var http = require("http"); 

    let router = express.Router();
    
    router.post('/', getInvoices);

    async function getInvoices(req, res) {
        // // nano.use("database").insert(documents, documents.invoice_id, function(err, body,
        let invoices = JSON.stringify(req.body);
        console.log('invoices: ' + invoices);
        invoices = JSON.parse(invoices);
        
        nano.use(database).bulk({docs:invoices}, 'invoice_id', function(err, body, header) { 
            if(err) { 
                res.writeHead(500, { "Content-Type": "text/plain" }); 
                res.end("Inserting Invoices failed. " + err + "\n"); 
            } else { 
                res.writeHead(200, { "Content-Type": "text/plain" }); 
                res.end("Invoices inserted. Response: " + JSON.stringify(body) + "\n"); 
            } 
        });
    }

    module.exports = router;