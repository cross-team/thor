const joi = require('joi')
const { fields, mapToDefaults, mapToValidations } = require('../models/groups.model')

module.exports = {
  fields: { ...fields },
  get:    {
    query: {
      name: fields.name,
      type: fields.type,
    },
  },
  put: {
    payload: {
      name:        fields.name,
      type:        fields.type,
      description: fields.description,
      status:      fields.publishing.status,
      publish_on:  fields.publishing.publish_on,
    },
    params: {
      id: joi.string().required(),
    },
  },
  post: {
    payload: {
      name:        fields.name,
      type:        fields.type,
      description: fields.description.allow(''),
      status:      fields.publishing.status,
      publish_on:  fields.publishing.publish_on,
    },
    params: {
      id: joi.string().required(),
    },
    build:    mapToDefaults,
    validate: mapToValidations,
  },
}
