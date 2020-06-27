const connection = require('./connection');
const colors = require('colors');
const util = require('util');

// Promisify connection
const connectionPromise = util.promisify(connection.query).bind(connection);

module.exports = {
  selectAll: async () => {
    const queryString = `SELECT * FROM burgers;`;
    try {
      const result = await connectionPromise(queryString);
      for (i in result) {
        resultArr.push(JSON.parse(JSON.stringify(result[i])));
      }
      return resultArr;
    } catch (err) {
      console.error(
        `ERROR - tableOperations.js - selectAll(): ${err}`.red.bold
      );
    }
  },
  insertOne: async (burger_name) => {
    const queryString = `INSERT INTO burger
       VALUES (?);`;
    try {
      await connectionPromise(queryString, burger_name);
      console.log('Saved!'.green.bold);
      return;
    } catch (err) {
      console.error(`ERROR - tableOperations.js - insertOne: ${err}`.red.bold);
    }
  },
  updateOne: async (isDevoured, id) => {
    const queryString = `UPDATE burgers 
    SET devoured = ?
    WHERE id = ?;`;
    try {
      return connectionPromise(queryString, [isDevoured, id]);
    } catch (err) {
      console.error(
        `ERROR - tableOperations.js - updateOne(): ${err}`.red.bold
      );
    }
  },
};
