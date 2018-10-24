

const CosmosClient = require('@azure/cosmos').CosmosClient;
const url = require('url');
const HttpStatusCodes = { NOTFOUND: 404 };

/*
class Cosmosdb {
    
constructor(endpoint, masterkey, database) {
    this.endpoint = endpoint;
    this.masterkey = masterkey;
    this.database = database;
    console.log('constructor of Cosmosdb ...');
}

static getClient() {
    client = new CosmosClient({ endpoint: this.endpoint, auth: { masterKey: this.masterkey} });
    return client;
}

static getDavar clienttabase() {
    return this.database;
}

};
*/


/*
var Singleton = (function(){
    function Singleton() {
        this.endpoint = 'https://snapbizz-test-v2.documents.azure.com:443/';
        this.masterkey = '6PKi6bVWzqHW4MRKUKpU4OUd1HQObflQ5fCHjWv6U1vG0D2zjxy6oIzX0at50lzgB6NH4e3lK3OAeYXHhfam3g==';
        this.database = 'FamilyDatabase';
        client = new CosmosClient({ endpoint: this.endpoint, auth: { masterKey: this.masterkey} });
        console.log('constructor of Cosmosdb ...');
    }
    var instance;
    return {
        getInstance: function(){
            if (null == instance) {
                instance = new Singleton();               
                instance.constructor = null; // Note how the constructor is hidden to prevent instantiation
            }
            return instance; //return the singleton instance
        }
   };cosmosdb
  })();


function Cosmosdb(endpoint, masterkey, database) {
    
};

Cosmosdb.prototype.getDataBase = function()
{
    return this.database;
};
*/
const cosmosdb = { 
    nosql_endpoint: 'https://snapbizz-test-v2.documents.azure.com:443/',
    nosql_key: '6PKi6bVWzqHW4MRKUKpU4OUd1HQObflQ5fCHjWv6U1vG0D2zjxy6oIzX0at50lzgB6NH4e3lK3OAeYXHhfam3g==',
    nosql_database: 'snapbizz-v2-test',
    nosql_container: 'test_invoices1420070400',
    
    getCosmosClient: function () {
        console.log('Cosmosdb client has instantiated ....');
        const client = new CosmosClient({ endpoint: this.nosql_endpoint, auth: { masterKey: this.nosql_key} });
        return client;
      }

};

module.exports = cosmosdb;