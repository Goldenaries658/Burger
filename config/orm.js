const connection = require('./connection');
const colors = require('colors');
const util = require('util');

// Promisify connection
const connectionPromise = util.promisify(connection.query).bind(connection);

module.exports = {
  selectAll: async (table) => {
    const queryString = `SELECT * FROM ??;`;
    const resultArr = [];
    try {
      console.log(`Running QUERY: ${queryString}`.red.bold);
      const result = await connectionPromise(queryString, table);
      console.log('success'.green.bold);
      return result;
    } catch (err) {
      console.error(`ERROR - orm.js - selectAll(): ${err}`.red.bold);
    }
  },
  insertOne: async (table, value) => {
    const queryString = `INSERT INTO ??
       VALUES (id, ?, 0, createdAt);`;
    const valueArr = [table, value];
    try {
      console.clear();
      console.log(`Running QUERY: ${queryString}`.red.bold);
      await connectionPromise(queryString, valueArr);
      console.log('Saved!'.green.bold);
      return;
    } catch (err) {
      console.error(`ERROR - orm.js - insertOne: ${err}`.red.bold);
    }
  },
  updateOne: async (queryArr) => {
    const queryString = `UPDATE ?? 
    SET devoured = ?
    WHERE id = ?;`;
    try {
      console.clear();
      console.log(`Running QUERY: ${queryString}`.red.bold);
      const result = await connectionPromise(queryString, queryArr);
      console.log('Saved!'.green.bold);
      return result;
    } catch (err) {
      console.error(`ERROR - orm.js - updateOne(): ${err}`.red.bold);
    }
  },
};
