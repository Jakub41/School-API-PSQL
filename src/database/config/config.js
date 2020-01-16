const { db } = require("../../config/config");

module.exports = {
    development: {
        username: db.user,
        password: db.pass,
        database: db.name,
        host: db.host,
        port: db.port,
        dialect: "postgres"
    }
};
