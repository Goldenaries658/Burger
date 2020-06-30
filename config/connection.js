const mysql = require('mysql');

const defaultConnection = {
  host: 'localhost',
  port: 3306,
  user: 'burgerboy',
  password: '',
  database: 'burgers_db',
};

module.exports = mysql.createConnection(
  process.env.JAWSDB_URL ? process.env.JAWSDB_URL : defaultConnection
);


