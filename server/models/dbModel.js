const { Pool } = require('pg');

<<<<<<< HEAD
// NOTE: URL needs to be updated 
=======
>>>>>>> 5c9b021291022b600985012257c5abe4062807b9
const PG_URI = 'postgres://vvmrrzjt:QIOS8stg85NkVauKqFHr_tu2g_m0nUg2@jelani.db.elephantsql.com/vvmrrzjt';

const pool = new Pool({
    connectionString: PG_URI
});

module.exports = {
    query: (text, params, callback) => {
        console.log('executed query', text);
        return pool.query(text, params, callback);
    }
}