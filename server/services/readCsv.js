'use strict';

const fs = require('fs'); 
const parse = require('csv-parser');
var parser = parse(`"barcode", "image"`,{delimiter: ','});
var input = fs.createReadStream('/home/ram/Downloads/output3.csv');


function updateProduct(req, res) {
    console.log('updateProduct has called....');
    input.pipe(parser);
    var record = [], count=0;
    parser.on('readable', function(){
        while((record = parser.read())){
            if (record==null) 
                continue;
            record = JSON.stringify(record);
            console.log(record);
            let records = JSON.parse(record);
            console.log(records.barcode + " " + records.image + '\n');
            /*
            db.query("UPDATE products SET image = ? WHERE barcode = ?", [records.image, records.barcode], function (err, results, fields) {
                if (err) throw err;
                console.log(results);
            });
            */
            count++;
        }
    });
    // Catch any error
    parser.on('error', function(err){
        console.log("Reading products "+err.message);
    });
    // When we are done
    parser.on('finish', function(){
        console.log("Finished "+ count);
    });

    //console.log(req.body);
    res.end(JSON.stringify('Done'));
}

module.exports = {
    updateProduct: updateProduct
};