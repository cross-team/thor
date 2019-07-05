const joi = require('joi')
const { fields, mapToDefaults, mapToValidations } = require('../models/groups.model')

module.exports = {
  fields: { ...fields },
  get: {
    query: {
      name: fields.name,
      type: fields.type,
    },
  },
  put: {
    payload: {
      name: fields.name,
      type: fields.type,
      description: fields.description,
    },
    params: {
      id: joi.string().required(),
    },
  },
  post: {
    payload: {
      name: fields.name.required(),
      type: fields.type.required(),
      description: fields.description.optional(),
    },
    build: mapToDefaults,
    validate: mapToValidations,
  },
}
