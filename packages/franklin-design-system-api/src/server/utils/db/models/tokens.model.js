/* eslint-disable no-underscore-dangle */
/* eslint-disable no-restricted-syntax */
const _ = require('lodash')
const joi = require('joi')
const constants = require('./constants.model')

const hardDelete = false // switch to do a hard delete
const name = 'tokens'

// DEFINITIONS
const fields = {
  groups: constants.groupsFLD,
  key: joi.string(),
  value: joi.string(),
  caption: joi.string().allow(''),
  publishing: constants.publishingFLD,
  release_id: joi.string(),
  rel: constants.relFLD,
  meta: constants.metaFLD,
  based_on_key: joi.string(),
  calculated_value: joi.string(),
}

const groupsDS = {
  app: {
    id: null,
    name: '',
  },
  theme: {
    id: null,
    name: '',
  },
  topic: {
    id: null,
    name: '',
  },
}

const defaults = {
  groups: groupsDS,
  key: '',
  value: '',
  caption: '',
  publishing: constants.publishingDS,
  release_id: null,
  rel: constants.relDS,
  meta: constants.metaDS,
  based_on_key: '',
  calculated_value: '',
}

const relationshipDef = [
  {
    $graphLookup: {
      from: 'tokens',
      startWith: '$key',
      connectFromField: 'based_on_key',
      connectToField: 'key',
      as: 'basedOnStructure',
    },
  },
  {
    $project: {
      _id: {
        $cond: {
          if: { $in: ['<<key>>', '$basedOnStructure.key'] },
          then: '$_id',
          else: '$$REMOVE',
        },
      },
      key: {
        $cond: {
          if: { $in: ['<<key>>', '$basedOnStructure.key'] },
          then: '$key',
          else: '$$REMOVE',
        },
      },
      basedOnStructure: {
        $cond: {
          if: {
            $and: [{ $in: ['<<key>>', '$basedOnStructure.key'] }, { $eq: ['$key', '<<key>>'] }],
          },
          then: '$basedOnStructure',
          else: '$$REMOVE',
        },
      },
    },
  },
  {
    $redact: {
      $cond: {
        if: { $cmp: ['$$CURRENT', {}] },
        then: '$$DESCEND',
        else: '$$PRUNE',
      },
    },
  },
]

// FUNCTIONS
const mapToDefaults = input => {
  const values = { ...defaults }
  values.groups.app.id = !_.isUndefined(input.groups_app_id)
    ? input.groups_app_id
    : values.groups.app.id
  values.groups.theme.id = !_.isUndefined(input.groups_theme_id)
    ? input.groups_theme_id
    : values.groups.theme.id
  values.groups.topic.id = !_.isUndefined(input.groups_topic_id)
    ? input.groups_topic_id
    : values.groups.topic.id
  values.key = !_.isUndefined(input.key) ? input.key : values.key
  values.value = !_.isUndefined(input.value) ? input.value : values.value
  values.caption = !_.isUndefined(input.caption) ? input.caption : values.caption
  values.release_id = !_.isUndefined(input.release_id) ? input.release_id : values.release_id
  values.meta = constants.metaDS
  values.publishing = constants.publishingDS
  return values
}

const mapToDoc = input => {
  const values = {}
  const groups = { ...groupsDS }
  const added = []
  if (!_.isUndefined(input.value)) {
    values.value = input.value
  }
  if (!_.isUndefined(input.caption)) {
    values.caption = input.caption
  }
  if (!_.isUndefined(input.release_id)) {
    values.release_id = input.release_id
    values.rel = constants.relDS
    values.publishing = {}
  }
  if (!_.isUndefined(input.groups_app_id)) {
    groups.app.id = input.groups_app_id
    added.push(1)
  } else {
    delete groups.app
  }
  if (!_.isUndefined(input.groups_theme_id)) {
    groups.theme.id = input.groups_theme_id
    added.push(1)
  } else {
    delete groups.theme
  }
  if (!_.isUndefined(input.groups_topic_id)) {
    groups.topic.id = input.groups_topic_id
    added.push(1)
  } else {
    delete groups.topic
  }
  if (added.length > 0) {
    values.groups = groups
  }
  return values
}

const lookupDocId = (id, type, groups) => {
  for (const group in groups) {
    if (groups[group].type.toUpperCase() === type.toUpperCase()) {
      if (id.toString() === groups[group]._id.toString()) {
        return groups[group].name
      }
      break
    }
  }
  return false
}

const validateReleases = (token, release) => {
  const value = { ...token }
  // release
  if (!_.isUndefined(value.release_id)) {
    if (release.length === 1) {
      if (value.release_id.toString() === release[0]._id.toString()) {
        value.rel.major = release[0].rel.major
        value.rel.minor = release[0].rel.minor
        value.rel.build = release[0].rel.build
        // add publishing DS to token values
        if (!_.isUndefined(value.publishing)) {
          value.publishing = constants.publishingDS
        }
        value.publishing.publish_on = release[0].publishing.publish_on
        value.publishing.status = release[0].publishing.status
        return value
      }
    }
  }
  throw new Error('release ObjectId is not found.')
}

const validateGroups = (token, groups) => {
  const value = { ...token }
  const errors = []

  // app
  if (!_.isUndefined(value.groups.app) && !_.isNull(value.groups.app.id)) {
    const appGroup = lookupDocId(value.groups.app.id, 'app', groups)
    if (!appGroup) {
      errors.push('app ObjectId is not found.')
    } else {
      value.groups.app.name = appGroup
    }
  }

  // theme
  if (!_.isUndefined(value.groups.theme) && !_.isNull(value.groups.theme.id)) {
    const themeGroup = lookupDocId(value.groups.theme.id, 'theme', groups)
    if (!themeGroup) {
      errors.push('theme ObjectId is not found.')
    } else {
      value.groups.theme.name = themeGroup
    }
  }

  // topic
  if (!_.isUndefined(value.groups.topic) && !_.isNull(value.groups.topic.id)) {
    const topicGroup = lookupDocId(value.groups.topic.id, 'topic', groups)
    if (!topicGroup) {
      errors.push('topic ObjectId is not found.')
    } else {
      value.groups.topic.name = topicGroup
    }
  }

  // results
  if (errors.length !== 0) {
    throw new Error(errors.join(', '))
  } else {
    return value
  }
}

module.exports = {
  fields,
  defaults,
  constants,
  mapToDefaults,
  mapToDoc,
  hardDelete,
  name,
  relationshipDef,
  validateGroups,
  validateReleases,
}
