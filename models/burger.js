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
  updateOne: async (newBurgerName, burgerID) => {
    try {
      return await orm.updateOne(
        'burgers',
        'burger_name',
        newBurgerName,
        burgerID
      );
    } catch (err) {
      console.error(`ERROR - orm.js - updateOne(): ${err}`.red.bold);
    }
  },
};
