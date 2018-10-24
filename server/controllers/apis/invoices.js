
const
    express = require('express');

const Cosmosdb = require('../../../configs/cosmosdb.js');
const cosmosdb = Cosmosdb.getCosmosClient();

let router = express.Router();
router.get('/:store', getInvoices);


async function getInvoices(req, res) {
    const store = Number(req.params.store);
    console.log('storeId : '+ store);
    console.log(`Querying container:\n ${Cosmosdb.nosql_container}`);

    // query to return all children in a family
    const querySpec = {
        query: "SELECT * FROM root r WHERE r.store_id = @storeId",
        parameters: [
            {
                name: "@storeId",
                value: store
            }
        ]
    };
    console.log('Query: ' + querySpec.query);
    const { result: results } = await cosmosdb.database(Cosmosdb.nosql_database).container(Cosmosdb.nosql_container).items.query(querySpec).toArray();
    for (var queryResult of results) {
        let resultString = JSON.stringify(queryResult);
        console.log(`\tQuery returned ${resultString}\n`);
    }

/*
    let response = await request.get('http://localhost:3000');
    if (response.err) {
        console.log('error');
        }
    else { 
        console.log('fetched response');
    }
    */
    res.status(200).send(results);
}

module.exports = router;
