const { Pool } = require('pg');

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