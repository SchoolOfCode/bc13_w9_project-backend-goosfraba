/**
 * This is setting up our Non-blocking PostgreSQL client for Node.js.
 * Setting up a new pool with the connection URL from our database .env variable contained in opur .env file
 * Exporting our query function to be used in models.
 */

const { Pool } = require("pg");
const pool = new Pool({
  connectionString: process.env.POSTGRES_CONNECTION_URL,
});

module.exports = {
  query: function (text, params) {
    return pool.query(text, params);
  },
};
