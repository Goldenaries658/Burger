const mysql = require('mysql');

// Setting environment variables
const dotenv = require('dotenv');
const result = dotenv.config();

if (result.error) throw result.error;

const defaultConnection = {
  host: process.env.DB_HOST,
  port: 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: 'burgers_db',
};

module.exports = mysql.createConnection(
  process.env.JAWSDB_URL ? process.env.JAWSDB_URL : defaultConnection
);
