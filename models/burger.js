const orm = require('../config/orm');

const burger = {
  selectAll: () => {
    orm.selectAll('burgers');
  },
};
