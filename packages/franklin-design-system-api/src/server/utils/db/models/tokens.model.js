const _ = require('lodash')
const joi = require('joi')
const constants = require('./constants.model')

const hardDelete = true
const name = 'tokens'

// DEFINITIONS
const fields = {
  groups: {
    app: {
      id: joi.string(),
      name: joi.string(),
    },
    theme: {
      id: joi.string(),
      name: joi.string(),
    },
    topic: {
      id: joi.string(),
      name: joi.string(),
    },
  },
  key: joi.string(),
  value: joi.string(),
  caption: joi.string(),
  publishing: {
    status: joi.string(),
    publish_on: joi.date(),
  },
  release_id: joi.string(),
  rel: {
    major: joi.number(),
    minor: joi.number(),
    build: joi.number(),
  },
  meta: {
    created_on: joi.date(),
    updated_on: joi.date(),
    delete_on: joi.date(),
  },
  based_on_key: joi.string(),
  calculated_value: joi.string(),
}

const defaults = {
  groups: {
    APP: {
      id: null,
      name: '',
    },
    THEME: {
      id: null,
      name: '',
    },
    TOPIC: {
      id: null,
      name: '',
    },
  },
  key: '',
  value: '',
  caption: '',
  publishing: {
    status: 'DRAFT',
    publish_on: null,
  },
  release_id: null,
  rel: {
    major: 0,
    minor: 0,
    build: 1,
  },
  meta: {
    created_on: null,
    updated_on: null,
    delete_on: null,
  },
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

const relationshipValDef = [
  {
    $facet: {
      c1: [
        {
          $lookup: {
            from: 'groups',
          },
        },
      ],
      c2: [{ $lookup: {} }],
      c3: [{ $lookup: {} }],
    },
  },
]

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
  if (Object.keys(publishing).length > 0 && publishing.constructor !== Object) {
    values.publishing = publishing
  }
  if (Object.keys(rel).length > 0 && rel.constructor === Object) {
    values.rel = rel
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
  relationshipDef,
}
