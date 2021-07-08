const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'yes', // changed for my personal access
    database: 'new_schema'
});

module.exports = connection;