const { Pool } = require("pg");

const PG_URI =
  "postgres://vplykvgy:j_GgfX-WuKxehYaCnFDXMkJRiZtzezOC@castor.db.elephantsql.com/vplykvgy";

const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    // console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
