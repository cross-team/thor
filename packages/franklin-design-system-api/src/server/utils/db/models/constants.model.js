const _ = require('lodash');

const constants = {
  status: ['DRAFT', 'PUBLISH'],
  type: ['APP', 'THEME', 'TOPIC'],
};

const isIn = (value, key) => {
  if (_.isUndefined(constants[key])) {
    return false;
  }
  return !(_.indexOf(constants[key], value) < 0);
};

module.exports = {
  constants,
  isIn,
};
