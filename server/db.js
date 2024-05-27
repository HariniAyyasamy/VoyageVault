const Pool= require("pg").Pool;
const pool = new Pool({
    user: "postgres",
    password: "Megha@06",
    host: "localhost",
    port: 5432,
    database: "TRAVEL"
});

module.exports = pool;