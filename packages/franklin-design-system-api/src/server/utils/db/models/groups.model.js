const _ = require('lodash')
const joi = require('joi')
const constants = require('./constants.model')

const hardDelete = false // switch to do a hard delete
const name = 'groups'

// DEFINITIONS
const fields = {
  name: joi.string(),
  type: joi.string(),
  description: joi.string().allow(''),
  meta: constants.metaFLD,
}

const defaults = {
  name: '',
  type: '',
  description: '',
  meta: constants.metaDS,
}

// FUNCTIONS
const mapToDefaults = input => {
  const values = defaults
  values.name = !_.isUndefined(input.name) ? input.name : values.name
  values.type = !_.isUndefined(input.type) ? input.type : values.type
  values.description = !_.isUndefined(input.description) ? input.description : values.description
  return values
}

const mapToValidations = input => {
  // validate type
  if (!_.isUndefined(input.type)) {
    if (!constants.isIn(input.type, 'type')) throw new Error('Type is not valid')
  }
}

module.exports = {
  fields,
  defaults,
  constants,
  mapToDefaults,
  mapToValidations,
  hardDelete,
  name,
}
