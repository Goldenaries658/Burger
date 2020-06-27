const connection = require('./connection');
const colors = require('colors');
const util = require('util');

// Promisify connection
const connectionPromise = util.promisify(connection.query).bind(connection);

const orm = {
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
};

// insertOne()
// updateOne()
