const pg = require('pg');



let config = {
        user: 'postgres', 
        password: 'tpthNrtuCW2JPPFBZrY1', 
        host: 'database-barr.cvgacdqrmv8p.us-east-2.rds.amazonaws.com', 
        port: 5432, //env var: PGPORT
        database: 'pancake_db', 
        max: 10, 
        idleTimeoutMillis: 30000, 
    };


module.exports = new pg.Pool(config);