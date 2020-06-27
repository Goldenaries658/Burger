const orm = require('../config/orm');

module.exports = {
  selectAll: () => {
    orm.selectAll('burgers');
  },
  insertOne: (burgerName) => {
    orm.insertOne('burgers', burgerName);
  },
  updateOne: (newBurgerName, burgerID) => {
    orm.updateOne('burgers', 'burger_name', newBurgerName, burgerID);
  },
};
