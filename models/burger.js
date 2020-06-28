const orm = require('../config/orm');

module.exports = {
  selectAll: async () => {
    try {
      return await orm.selectAll('burgers');
    } catch (err) {
      console.error(`ERROR - burger.js - selectAll(): ${err}`.red.bold);
    }
  },
  insertOne: async (burgerName) => {
    try {
      return await orm.insertOne('burgers', burgerName, false);
    } catch (err) {
      console.error(`ERROR - orm.js - insertOne(): ${err}`.red.bold);
    }
  },
  updateOne: async (col, value, burgerID) => {
    const queryArr = ['burgers', col, value, burgerID];
    try {
      return await orm.updateOne(queryArr);
    } catch (err) {
      console.error(`ERROR - orm.js - updateOne(): ${err}`.red.bold);
    }
  },
};
