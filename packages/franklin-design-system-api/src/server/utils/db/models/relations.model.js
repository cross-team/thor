const _ = require('lodash')
const joi = require('joi')
const constants = require('./constants.model')

const hardDelete = true
const name = 'relations'

// DEFINITIONS
const fields = {
  based_on: joi.string(),
  defines: joi.array().items(joi.string()),
}

const defaults = {
  based_on: '',
  defines: [],
}

// FUNCTIONS
const mapToDefaults = input => {
  const values = defaults
  values.based_on = !_.isUndefined(input.based_on) ? input.based_on : values.based_on
  values.defines = !_.isUndefined(input.defines) ? input.defines : values.defines
  return values
}

const mapToDoc = input => {
  const values = {}
  if (!_.isUndefined(input.based_on)) {
    values.based_on = input.based_on
  }

  return values
}

const mapToValidations = input => {
  // validate publishing status
  if (!_.isUndefined(input.publishing)) {
    if (!constants.isIn(input.publishing.status, 'status')) throw new Error('Status is not valid')
  }
}

module.exports = {
  fields,
  defaults,
  constants,
  mapToDefaults,
  mapToValidations,
  mapToDoc,
  hardDelete,
  name,
}
