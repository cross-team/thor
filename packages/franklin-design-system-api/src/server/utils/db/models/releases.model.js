const _ = require('lodash')
const joi = require('joi')
const constants = require('./constants.model')

const hardDelete = false // switch to do a hard delete
const name = 'releases'

// DEFINITIONS
const fields = {
  name: joi.string(),
  description: joi.string().allow(''),
  publishing: constants.publishingFLD,
  rel: constants.relFLD,
  meta: constants.metaFLD,
}

const defaults = {
  name: '',
  description: '',
  publishing: constants.publishingDS,
  rel: constants.relDS,
  meta: constants.metaDS,
}

// FUNCTIONS
const mapToDefaults = input => {
  const values = defaults
  values.name = !_.isUndefined(input.name) ? input.name : values.name
  values.description = !_.isUndefined(input.description) ? input.description : values.description
  values.publishing.status = !_.isUndefined(input.status) ? input.status : values.publishing.status
  values.publishing.publish_on = !_.isUndefined(input.publish_on)
    ? input.publish_on
    : values.publishing.publish_on
  values.rel.major = !_.isUndefined(input.major) ? input.major : values.rel.major
  values.rel.minor = !_.isUndefined(input.minor) ? input.minor : values.rel.minor
  values.rel.build = !_.isUndefined(input.build) ? input.build : values.rel.build
  return values
}

const mapToDoc = input => {
  const values = {}
  const publishing = {}
  const rel = {}
  if (!_.isUndefined(input.name)) {
    values.name = input.name
  }
  if (!_.isUndefined(input.description)) {
    values.description = input.description
  }
  if (!_.isUndefined(input.status)) {
    publishing.status = input.status
  }
  if (!_.isUndefined(input.publish_on)) {
    publishing.publish_on = input.publish_on
  }
  if (!_.isUndefined(input.major)) {
    rel.major = input.major
  }
  if (!_.isUndefined(input.minor)) {
    rel.minor = input.minor
  }
  if (!_.isUndefined(input.build)) {
    rel.build = input.build
  }
  if (Object.keys(publishing).length > 0) {
    values.publishing = publishing
  }
  if (Object.keys(rel).length > 0) {
    values.rel = rel
  }
  return values
}

const mapToValidations = input => {
  // validate publishing status
  if (!_.isUndefined(input.publishing)) {
    if (!_.isUndefined(input.publishing.status)) {
      if (!constants.isIn(input.publishing.status, 'status')) throw new Error('Status is not valid')
    }
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
