const _ = require('lodash');
const joi = require('joi');
const constants = require('./constants.model');

const hardDelete = true;
const name = 'groups';

// DEFINITIONS
const fields = {
  name: joi.string(),
  type: joi.string(),
  description: joi.string(),
  publishing: {
    status: joi.string(),
    publish_on: joi.date(),
  },
};

const defaults = {
  name: '',
  type: '',
  description: '',
  publishing: {
    status: 'DRAFT',
    publish_on: null,
  },
};

// FUNCTIONS
const mapToDefaults = input => {
  const values = defaults;
  values.name = !_.isUndefined(input.name) ? input.name : values.name;
  values.type = !_.isUndefined(input.type) ? input.type : values.type;
  values.description = !_.isUndefined(input.description) ? input.description : values.description;
  values.publishing.status = !_.isUndefined(input.status) ? input.status : values.publishing.status;
  values.publishing.publish_on = !_.isUndefined(input.publish_on)
    ? input.publish_on
    : values.publishing.publish_on;
  return values;
};

const mapToValidations = input => {
  if (!constants.isIn(input.type, 'type')) throw new Error('Type is not valid');
  if (!constants.isIn(input.publishing.status, 'status')) throw new Error('Status is not valid');
};

module.exports = {
  fields,
  defaults,
  constants,
  mapToDefaults,
  mapToValidations,
  hardDelete,
  name,
};
