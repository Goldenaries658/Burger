const mysql = require('mysql');

const defaultConnection = {
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '',
  database: 'burgers_db',
};

console.log(process.env.JAWSDB_URL)
module.exports = mysql.createConnection(
  process.env.JAWSDB_URL ? process.env.JAWSDB_URL : defaultConnection
);


