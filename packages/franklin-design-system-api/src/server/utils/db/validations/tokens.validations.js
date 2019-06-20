const joi = require('joi')
const { fields, mapToDefaults, mapToValidations, mapToDoc } = require('../models/tokens.model')

module.exports = {
  fields: { ...fields },
  get: {
    query: {
      groups_app_id: fields.groups.app.id,
      groups_theme_id: fields.groups.theme.id,
      groups_topic_id: fields.groups.topic.id,
    },
    params: {
      id: joi.string().required(),
    },
  },
  put: {
    payload: {
      groups_app_id: fields.groups.app.id,
      groups_theme_id: fields.groups.theme.id,
      groups_topic_id: fields.groups.topic.id,
      key: fields.key,
      value: fields.value,
      caption: fields.caption.allow(''),
      release_id: fields.release_id,
    },
    params: {
      id: joi.string().required(),
    },
    mapTo: mapToDoc,
    validate: mapToValidations,
  },
  post: {
    payload: {
      groups_app_id: fields.groups.app.id.require(),
      groups_theme_id: fields.groups.theme.id.require(),
      groups_topic_id: fields.groups.topic.id.require(),
      key: fields.key.require(),
      value: fields.value.require(),
      caption: fields.caption.allow(''),
      release_id: fields.release_id.require(),
    },
    build: mapToDefaults,
    validate: mapToValidations,
  },
}
