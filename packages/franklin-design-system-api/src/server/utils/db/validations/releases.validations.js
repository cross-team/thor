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
    params: {
      id: joi.string().required(),
    },
  },
  put: {
    payload: {
      name: fields.name.optional(),
      description: fields.description.optional(),
      status: fields.publishing.status.optional(),
      publish_on: fields.publishing.publish_on,
      major: fields.rel.major.optional(),
      minor: fields.rel.minor.optional(),
      build: fields.rel.build.optional(),
    },
    params: {
      id: joi.string().required(),
    },
    mapTo: mapToDoc,
    validate: mapToValidations,
  },
  post: {
    payload: {
      name: fields.name.required(),
      description: fields.description.optional(),
      status: fields.publishing.status.optional(),
      publish_on: fields.publishing.publish_on.optional(),
      major: fields.rel.major.required(),
      minor: fields.rel.minor.required(),
      build: fields.rel.build.required(),
    },
    build: mapToDefaults,
    validate: mapToValidations,
  },
  delete: {
    params: {
      id: joi.string().required(),
    },
  },
}
