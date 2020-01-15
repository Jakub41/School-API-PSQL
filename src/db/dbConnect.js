const { db } = require("../config/config");
const { Pool } = require("pg");

const pool = new Pool({
    user: db.user,
    host: db.host,
    database: db.name,
    password: db.pass,
    port: db.port
});

const query = txt => {
    return new Promise((resolve, reject) => {
        pool.query(txt)
            .then(res => resolve(res))
            .catch(err => reject(err));
    });
};

pool.on("error", () => {
    console.log("> error occurred from the database");
});

pool.once("open", () => {
    console.log("> successfully opened the database");
});

module.exports = { query };
