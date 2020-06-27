const connection = require('./connection');
const colors = require('colors');
const util = require('util');

// Promisify connection
const connectionPromise = util.promisify(connection.query).bind(connection);

module.exports = {
  selectAll: async (table) => {
    const queryString = `SELECT * FROM ??;`;
    try {
      const result = await connectionPromise(queryString, table);
      for (i in result) {
        resultArr.push(JSON.parse(JSON.stringify(result[i])));
      }
      return resultArr;
    } catch (err) {
      console.error(`ERROR - orm.js - selectAll(): ${err}`.red.bold);
    }
  },
  insertOne: async (table, value) => {
    const queryString = `INSERT INTO ??
       VALUES (?);`;
    const valueArr = [table, value];
    try {
      await connectionPromise(queryString, valueArr);
      console.log('Saved!'.green.bold);
      return;
    } catch (err) {
      console.error(`ERROR - orm.js - insertOne: ${err}`.red.bold);
    }
  },
  updateOne: async (table, column1, value, id) => {
    const queryString = `UPDATE ?? 
    SET ?? = ?
    WHERE id = ?;`;
    const valueArr = [table, column1, value, id];
    try {
      return connectionPromise(queryString, valueArr);
    } catch (err) {
      console.error(`ERROR - orm.js - updateOne(): ${err}`.red.bold);
    }
  },
};
