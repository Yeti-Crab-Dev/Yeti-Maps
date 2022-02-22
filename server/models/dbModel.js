const { Pool } = require('pg');

const PG_URI = 'postgres://kpdheuhp:zygqveNyKR-uBmsPWTYxbgdA81ccFoP3@jelani.db.elephantsql.com/kpdheuhp';

const pool = new Pool({
    connectionString: PG_URI
});

module.exports = {
    query: (text, params, callback) => {
        // console.log('executed query', text);
        return pool.query(text, params, callback);
    }
}