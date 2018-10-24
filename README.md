# Express Env Example

<b><u> Original Ref : </b></u> <link> https://github.com/kelyvin/express-env-example </link> <br> <link> https://www.caffeinecoding.com/better-express-routing-for-nodejs/ </link> <br> <hr>
This is an express environment example that I have taken from above mentioned account and tried to configure with three different databases [RDBMS(Mysql), NoSql(Cosmos-db, Couch Db)] to demonstrate modular Express routing patterns. This environment enables easy extensibility, scalability, and proper software design practices.


**03/13/2018 Update**: An improved/advanced version of this architecture will be uploaded in the near future, be on the lookout.

## Running
To start and run the project/server, simply run the following command in your root directory:

```
npm start
```


## Sample endpoints

### Views
 - `/` - Default route that redirects to the home page
 - `/home` - Render the home page sample
 - `/home/info` - Render the home page sample
 - `/error` - Render the error page sample

### API for RDBMS using 
 - `/api/v1/products` - Get all products
 - `/api/v1/products/:barcode` - Get a product with the specified barcode
 - `/api/v1/products/` - Post List of Products
 - `/api/v1/products/:barcode`  - Update a product with the specified barcode
 - `/api/v1/products/:barcode`  - Delete a product with the specified barcode
 
### API for Cosmos DB
 - `/api/v1/invoices/:store` - Get all invoices respective to store id

### API for Couch DB
 - `/api/v1/couch-invoices` - Post all invoices to mention database
  

 
