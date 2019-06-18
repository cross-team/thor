const joi = require('joi')
const { fields, mapToDefaults, mapToValidations, mapToDoc } = require('../models/releases.model')

module.exports = {
  fields: { ...fields },
  get: {
    query: {
      name: fields.name,
      major: fields.rel.major,
      minor: fields.rel.minor,
      build: fields.rel.build,
      rel: joi.string(),
    },
  },
  put: {
    payload: {
      name: fields.name,
      description: fields.description,
      status: fields.publishing.status,
      publish_on: fields.publishing.publish_on,
      major: fields.rel.major,
      minor: fields.rel.minor,
      build: fields.rel.build,
    },
    params: {
      id: joi.string().required(),
    },
    mapTo: mapToDoc,
    validate: mapToValidations,
  },
  post: {
    payload: {
      name: fields.name,
      description: fields.description.allow(''),
      status: fields.publishing.status,
      publish_on: fields.publishing.publish_on,
      major: fields.rel.major,
      minor: fields.rel.minor,
      build: fields.rel.build,
    },
    params: {
      id: joi.string().required(),
    },
    build: mapToDefaults,
    validate: mapToValidations,
  },
}
