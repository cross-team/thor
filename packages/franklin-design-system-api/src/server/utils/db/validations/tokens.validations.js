const joi = require('joi')
const { fields, mapToDefaults, mapToDoc, relationshipValDef } = require('../models/tokens.model')

module.exports = {
  fields: { ...fields },
  get: {
    query: {
      groups_app_id: fields.groups.app.id,
      groups_theme_id: fields.groups.theme.id,
      groups_topic_id: fields.groups.topic.id,
    },
    //   params: {
    //     id: joi.string().required(),
    //   },
    validate: relationshipValDef,
  },
  put: {
    payload: {
      groups_app_id: fields.groups.app.id,
      groups_theme_id: fields.groups.theme.id,
      groups_topic_id: fields.groups.topic.id,
      value: fields.value.required(),
      caption: fields.caption.allow(''),
      release_id: fields.release_id,
    },
    params: {
      id: joi.string().required(),
    },
    mapTo: mapToDoc,
  },
  post: {
    payload: {
      groups_app_id: fields.groups.app.id.required(),
      groups_theme_id: fields.groups.theme.id.required(),
      groups_topic_id: fields.groups.topic.id.required(),
      key: fields.key.required(),
      value: fields.value.required(),
      caption: fields.caption.allow(''),
      release_id: fields.release_id.required(),
    },
    build: mapToDefaults,
  },
}
