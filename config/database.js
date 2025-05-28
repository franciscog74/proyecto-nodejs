const mysql = require("mysql");
const util = require("util");

const pool = mysql.createPool({
    connectionLimit: 8,
    host: "localhost",
    user: "root",
    password: "",
    database: "empleados_node"
});

pool.query = util.promisify(pool.query);

module.exports = pool;